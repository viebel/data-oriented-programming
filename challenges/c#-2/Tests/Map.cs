using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Newtonsoft.Json;

namespace Tests;

[JsonConverter(typeof(MapConverter))]
class Map<T> : IEnumerable<T>
{
    readonly ImmutableDictionary<string, T> map;

    public Map(Dictionary<string, T> values)
    {
        map = values.ToImmutableDictionary();
    }

    Map(ImmutableDictionary<string,T> map) => this.map = map;

    public T this[string key] => map[key];

    public Map<T> With(string key, T t)
    {
        return new Map<T>(map.SetItem(key, t));
    }

    public IEnumerator<T> GetEnumerator() => map.Values.GetEnumerator();
    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
}

class MapConverter : JsonConverter
{
    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer) { }

    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
    {
        var item = objectType.GetGenericArguments().Single();
        var dictionary = typeof(Dictionary<,>).MakeGenericType(typeof(string), item);
        var map = typeof(Map<>).MakeGenericType(item);
        var data = serializer.Deserialize(reader, dictionary);

        return Activator.CreateInstance(map, data) ??
               throw new JsonSerializationException("Cannot deserialize to Map<>");
    }

    public override bool CanConvert(Type objectType) =>
        objectType.IsGenericType && objectType.GetGenericTypeDefinition() == typeof(Map<>);
}