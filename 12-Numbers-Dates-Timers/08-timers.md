# Set Time Out

The `setTimeOut` function runs only once after the timer that is passed to it has finished. `setTimeOut((args) => /* code you want to run after the timer */, timer, ...args)`. If you saved your timeout in a variable it is possible to stop the timer before the function runs, by calling `clearTimeOut(timer)`, where timer is the name of the variable. The timer must be in miliseconds.

# Set Interval

On the other hand the `setInterval` function keeps running basically forever at the given interval. `setInterval(() => /* code that you want to run every X seconds */, timer)`. The timer must be in miliseconds.
