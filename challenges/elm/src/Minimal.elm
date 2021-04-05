module Minimal exposing (blockMember, bookInfo, diff, getProperty, mergeAndSerialize, renameKeys)

import Dict
import Json.Encode
import Json.Value exposing (JsonValue(..))
import Result.Extra
import Set


{-| #1
Because the functions take the same arguments and returns the same value we don't need to manually pass in the arguments.
-}
getProperty : List String -> JsonValue -> Result String JsonValue
getProperty =
    Json.Value.getIn


{-| #2
No way to shorten while keeping the readability.
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


{-| -}
jsonToString : JsonValue -> Result String String
jsonToString json =
    case json of
        StringValue str ->
            Ok str

        _ ->
            Err "Expected a String"


authorNames : JsonValue -> JsonValue -> Result String (List String)
authorNames book catalogData =
    -- attempt to get "authorIds"
    Json.Value.getIn [ "authorIds" ] book
        -- filter down to just the string author ids
        |> Result.andThen (jsonToArray >> Result.map (List.filterMap (jsonToString >> Result.toMaybe)))
        -- get the author names
        |> Result.andThen
            (List.map
                (\authorId -> Json.Value.getIn [ "authorsById", authorId, "name" ] catalogData)
                -- convert the List (Result String JsonValue) to Result String (List JsonValue)
                >> Result.Extra.combine
                -- filter out non-String names
                >> Result.map (List.filterMap (jsonToString >> Result.toMaybe))
            )


jsonToArray : JsonValue -> Result String (List JsonValue)
jsonToArray json =
    case json of
        ArrayValue jsonArray ->
            Ok jsonArray

        _ ->
            Err "Expected an Array"


{-| #3 Remove redundant passing of argument
-}
blockMember : String -> JsonValue -> Result String JsonValue
blockMember email =
    Json.Value.setIn [ "userManagement", "members", email, "isBlocked" ] (BoolValue True)


{-| #4 Rename keys in a data entity
-}
renameKeys : List ( String, String ) -> JsonValue -> JsonValue
renameKeys keyMap json =
    case json of
        ObjectValue jsonObject ->
            List.foldl
                (\( oldKey, newKey ) ->
                    List.map
                        (\( key, value ) ->
                            ( if key == oldKey then
                                newKey

                              else
                                key
                            , value
                            )
                        )
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


{-| #6
-}
diff : JsonValue -> JsonValue -> Result String JsonValue
diff leftJson rightJson =
    case ( leftJson, rightJson ) of
        ( ObjectValue left, ObjectValue right ) ->
            diffObject left right

        ( ArrayValue left, ArrayValue right ) ->
            diffArray left right

        ( NumericValue left, NumericValue right ) ->
            Ok (NumericValue (left - right))

        _ ->
            Err "Strings, Nulls, and Bools can't be diffed"


diffObject : List ( String, JsonValue ) -> List ( String, JsonValue ) -> Result String JsonValue
diffObject left right =
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
                                diff leftValue rightValue
                                    |> Result.map (\valDiff -> ( key, valDiff ) :: list)

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
        List.map2 diff left right
            |> Result.Extra.combine
            |> Result.map (\diffed -> ArrayValue (diffed ++ excess))
