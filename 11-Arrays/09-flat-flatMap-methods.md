# Flat

The `flat` method is very straightforward in what it does. It simply takes an array of arrays and merge them together, creating one big array.
`arr.flat(depth)`. It doest not need arguments, and as long as the array does not contain deep nested arrays, it will work just fine. If your nesting has more levels, then provide the depth argument with the level of nesting.

# FlatMap

The `flatMap` is used when we have a need to map over an array and then flatten the results, as it's best for performance rather than chaining the `map` and `flat` methods. `arr.flatMap((el, index, array))`. One thing to keep in mind is taht the `flatMap` method only goes ONE level deep and that cannot be changed.
