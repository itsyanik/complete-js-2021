# Switch Statement
The Switch Statement is basically another type of `if / else` statement when all we want to do is compare one value to multiple different options.

```javascript
const day = 'monday';

switch(day) {
  case 'monday': // day === 'monday'
    console.log('Course structure');
    console.log('Go to coding meetup');
    // Without the break, the code executes uninterrupted
    break;
  case 'tuesday':
    console.log('Prepare theory');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend!');
    break;
  default:
    console.log('Invalid day');
}

// Chalenge: encode the above with if / else statements

if (day === 'monday') {
  console.log('Course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
   console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Invalid day');
}
```

The Switch statement is being less and less used but you should still keep it in mind.