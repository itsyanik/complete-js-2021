# Maps

When working with Maps, the `forEach` method still works similarly to the array one, but the arguments it recieves changes a bit: `forEach(function(value, key, map))`.

# Sets

When working with sets, the `forEach` method will have the same arguments as the Map does, however `value, key` will have the same value because a Set does not have **keys** os **indexes**.

This is something of design, to ensure that all the `forEach` methods have the same structure and are no different than the others.
