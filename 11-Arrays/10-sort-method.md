# Sort

The `sort` method mutates the original array and returns it in alphabetical order (ascending). It does not work for sorting numbers as it converts to string before applying the sort order. `arr.sort()`.
To fix this, it is needed to pass a callback function into it. `arr.sort((curr, next) => curr > next ? positiveNumber : negativeNumber)`.

To get descending order from the callback function, just switch the returns from the ternary operators. And since all you need is the positive and negative numbers, you can drastically simplify the call: `arr.sort((curr, next) => curr - next)` or `arr.sort((curr, next) => next - curr)`.
