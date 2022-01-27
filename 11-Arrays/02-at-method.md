# The AT Method

There is a new method introduced in ES2022 called the `at` method.
`arr.at(position)`. It is the same as writing `arr[position]`.

One particular use case of this new method is when trying to find the last index in one array. Instead of writing `arr[arr.length - 1]` you can just write `arr.at(-1)`.

This method also works on strings.
