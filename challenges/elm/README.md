# Data Oriented Programming Challenges - in Elm

A Data Oriented Programming (DOP) challenge based on https://blog.klipse.tech/dop/2021/04/01/dop-challenges.html

For this challenge I'm using the package [json-tools/json-value](https://package.elm-lang.org/packages/json-tools/json-value/latest) for basic JSON manipulation. The only other non-core package is [elm-community/result-extra](https://package.elm-lang.org/packages/elm-community/result-extra/latest/) which is used to simplify a couple `List (Result e a)` into `Result e (List a)`.

For all of these answers there's an assumption that the consumer of them has already decoded the JSON into a JsonValue type.

There are also 2 versions of the solutions. A [detailed](./src/Detailed.elm) solution that doesn't use any function composition (`>>`) and types out every argument. The other is a [minimal](./src/Minimal.elm) solution that does use function composition (`>>`) where appropriate as well as not typing out arguments when allowed. There are comments near each to describe what's going on.

- written by [wolfadex](https://github.com/wolfadex/)
