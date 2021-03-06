# Internationalization

When working with dates and numbers, it is very common that they have different formats in diferent regions of the world, and it would be impractical to write a code for each region, that's where the internationalization API comes in.

## For Dates

You can call the `new Intl.DateTimeFormat('en-US')` with the argument of _language-country_ (with their correct abbreviations) and it will return a formatter for that date. Then on this result, we can call `.format(date)` with the date we want to format as an argument.

```javascript
const now = new Date();
const intl = new Intl.DateTimeFormat('pt-BR').format(now);
```

The `DateTimeFormat` also accepts an object of options as the second argument. This object can contain the hours, minutes and so on as keys, and numeric as values `{ hours: 'numeric', minutes: 'numeric' }`. The month and year can also recieve `2-digit` or `long` as values. As for the weekdays, you can specify `short` or `narrow` too!

Now, it would not be a very good practice to just write it down in the application the language manually, but thankfully javascript has a pretty easy way to do it: `navigator.language`. Then you can pass this as an argument to the `DateTimeFormat`.

## For Numbers

Again using the `new Intl` namespace we can call the `NumberFormat(language)` to return a formatter and then chain with the `format(number)` to format the number that we want to format.
The options object accepts a style as key (which accepts unit, percentage or currency as value), and then unit as a key, with many options to choose from. Check MDN to see all the available options. `{ style: 'unit', unit: 'miles-per-hor' }`.

Obs: In case you choose to use currency for style, then you'll have to manually set the currency in the options object as currency is not bound to locale.
