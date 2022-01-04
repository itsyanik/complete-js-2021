# Which and When Should I Use X Data Structure?

Working with data is the main thing we do as developers.

## Overview

There are three main sources of data:

1. The code itself (eg. status messages)
2. From the UI (eg. tasks in todo app)
3. External sourcer (eg. recipe object)

All of these are data collections and they're stored in data strucures. And since we have four of them in JavaScript, we can ask ourselves a few questions to determine which data strucutre to use.

1. Is it just simple list of values? Array or Set.
2. Do we need key-value pairs? Object or Map.

## Array vs. Set

You should use arrays if...
...the data struture might contain duplicate values or you need them to be ordered
...you need to manipulate data

You should use sets if...
... you need unique values
... you need high-performance (looking up and deleting values is up to 10x faster than arrays)
... remove duplicates from an existing array

## Objects vs. Maps

You should use objects if..
... you want to follow a more traditional apporach
... you want it to be easier to access values
... you need to include methods
... you are working with JSON

You should use Maps if...
... you want better performance
... you need arbitrary key types
They're easy to iterate and compute their size.
