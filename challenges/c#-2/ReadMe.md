# Approach

I decided to not follow the generic data principles of data-oriented
programming, because I wanted to see how far I got with C# records for
type safety, and Linq for data queries.

Only data model properties needed for the completed challenges are implemented.

# Result

The end result for challenges 1-3 is a data model which fits in one file
and one screen, which is nice. Larger projects are likely to have more
complex data models which would be too much code for one file. Maybe.

Splitting updates into separate functions, one for the entity and one for 
the structure, gives small focused functions. I like that, and is 
something I hope to see more of in my code.

I failed to implement challenge 4-6. I can see the strength of this
approach on the data level when I need to diff two data models. 

# Observations

While I failed to implement rename and merge, I see no practical 
use of these features. As long as that is true for me, I will 
value type safety over flexibility.

Challenge #1 is strange as the search result is in json. In Asp.NET
I would simply populate a structure of dtos, return them and let 
the framework handle serialization.

For the search result in challenge #2 I chose to add a type BookInfo.

It was easy to add features for challenge #3.

That could be the result of continuous refactoring, but the end result
would be very different without the DOP guidelines.

In the end DOP without the generic data principles is probably the same 
as functional oriented programming.