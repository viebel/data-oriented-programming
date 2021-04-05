module Detailed exposing (blockMember, bookInfo, diff, getProperty, mergeAndSerialize, renameKeys)

import Dict
import Json.Encode exposing (list)
import Json.Value exposing (JsonValue(..))
import Result.Extra
import Set


{-| #1 Retrieve a piece of information

In Elm we return a `Result error value` because we're required to handle failure cases.

-}
getProperty : List String -> JsonValue -> Result String JsonValue
getProperty keys obj =
    Json.Value.getIn keys obj


{-| #2 Search information
-}
bookInfo : JsonValue -> JsonValue -> Result String JsonValue
bookInfo book catalogData =
    Result.map3
        (\title isbn authors ->
            ObjectValue
                [ ( "title", StringValue title )
                , ( "isbn", StringValue isbn )
                , ( "authorNames", ArrayValue (List.map StringValue authors) )
                ]
        )
        -- get the title and convert to a String
        (Json.Value.getIn [ "title" ] book |> Result.andThen jsonToString)
        -- get the isbn and convert to a String
        (Json.Value.getIn [ "isbn" ] book |> Result.andThen jsonToString)
        -- get the authors
        (authorNames book catalogData)


{-| Converts a JSON String to Elm String
-}
jsonToString : JsonValue -> Result String String
jsonToString json =
    case json of
        StringValue str ->
            Ok str

        _ ->
            Err "Not a string"


authorNames : JsonValue -> JsonValue -> Result String (List String)
authorNames book catalogData =
    -- attempt to get "authorIds"
    Json.Value.getIn [ "authorIds" ] book
        -- make sure the value we got is an JSON Array of String
        |> Result.andThen
            (\authorIdsJson ->
                case authorIdsJson of
                    ArrayValue authorIds ->
                        authorIds
                            -- filter down to just the string author ids
                            |> List.filterMap
                                (\authorIdJson ->
                                    case authorIdJson of
                                        StringValue authorId ->
                                            Just authorId

                                        _ ->
                                            Nothing
                                )
                            |> Ok

                    _ ->
                        -- throw an error on non-Array values
                        Err "Expected authorIds to be an array but found something else"
            )
        -- get the author names
        |> Result.andThen
            (\authorIds ->
                authorIds
                    -- get all of the author names
                    |> List.map
                        (\authorId ->
                            Json.Value.getIn
                                [ "authorsById", authorId, "name" ]
                                catalogData
                        )
                    -- convert the List (Result String JsonValue) to Result String (List JsonValue)
                    |> Result.Extra.combine
                    -- filter out non-String names
                    |> Result.map
                        (\namesJson ->
                            List.filterMap
                                (\nameJson ->
                                    case nameJson of
                                        StringValue name ->
                                            Just name

                                        _ ->
                                            Nothing
                                )
                                namesJson
                        )
            )


{-| #3 Add a piece of information
-}
blockMember : String -> JsonValue -> Result String JsonValue
blockMember email libraryData =
    Json.Value.setIn [ "userManagement", "members", email, "isBlocked" ] (BoolValue True) libraryData


{-| #4 Rename keys in a data entity
-}
renameKeys : List ( String, String ) -> JsonValue -> JsonValue
renameKeys keyMap json =
    case json of
        ObjectValue jsonObject ->
            List.foldl
                (\( oldKey, newKey ) jsObject ->
                    List.map
                        (\( key, value ) ->
                            ( if key == oldKey then
                                newKey

                              else
                                key
                            , value
                            )
                        )
                        jsObject
                )
                jsonObject
                keyMap
                |> ObjectValue

        _ ->
            json


{-| #5 Merge pieces of information
-}
mergeAndSerialize : JsonValue -> JsonValue -> Result String String
mergeAndSerialize leftJson rightJson =
    case ( leftJson, rightJson ) of
        ( ObjectValue left, ObjectValue right ) ->
            ObjectValue (left ++ right)
                |> Json.Value.encode
                |> Json.Encode.encode 0
                |> Ok

        _ ->
            Err "Both JSON values aren't JSON Objects so they can't be merged"


{-| #6 Compare versions of data
-}
diff : JsonValue -> JsonValue -> Result String JsonValue
diff leftJson rightJson =
    case ( leftJson, rightJson ) of
        ( ObjectValue left, ObjectValue right ) ->
            diffObjects left right

        ( ArrayValue left, ArrayValue right ) ->
            diffArray left right

        ( NumericValue left, NumericValue right ) ->
            Ok (NumericValue (left - right))

        _ ->
            Err "Strings, Nulls, and Bools can't be diffed"


diffObjects : List ( String, JsonValue ) -> List ( String, JsonValue ) -> Result String JsonValue
diffObjects left right =
    if left == right then
        Ok (ObjectValue [])

    else
        let
            keys =
                Set.union
                    (List.map Tuple.first left |> Set.fromList)
                    (List.map Tuple.first right |> Set.fromList)

            leftDict =
                Dict.fromList left

            rightDict =
                Dict.fromList right
        in
        Set.foldl
            (\key resultList ->
                Result.andThen
                    (\list ->
                        case ( Dict.get key leftDict, Dict.get key rightDict ) of
                            ( Just leftValue, Just rightValue ) ->
                                case diff leftValue rightValue of
                                    Ok valDiff ->
                                        Ok (( key, valDiff ) :: list)

                                    Err err ->
                                        Err err

                            ( Just leftValue, Nothing ) ->
                                Ok (( key, leftValue ) :: list)

                            ( Nothing, Just rightValue ) ->
                                Ok (( key, rightValue ) :: list)

                            ( Nothing, Nothing ) ->
                                Err "Somehow found a key without a value"
                    )
                    resultList
            )
            (Ok [])
            keys
            |> Result.map ObjectValue


diffArray : List JsonValue -> List JsonValue -> Result String JsonValue
diffArray left right =
    if left == right then
        Ok (ArrayValue [])

    else
        let
            sizeLeft =
                List.length left

            sizeRight =
                List.length right

            excess =
                if sizeLeft == sizeRight then
                    []

                else if sizeLeft < sizeRight then
                    List.drop (sizeRight - sizeLeft) right

                else
                    List.drop (sizeLeft - sizeRight) left
        in
        List.map2
            (\leftVal rightVal -> diff leftVal rightVal)
            left
            right
            |> Result.Extra.combine
            |> Result.map (\diffed -> ArrayValue (diffed ++ excess))
