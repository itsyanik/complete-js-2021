/* 
  Let's go back to Mark and John comparing their BMIs! 
  
  This time, let's use objects to implement the calculations! 
  
  Remember: BMI = mass / height ** 2 = mass / (height * height)
  (mass in kg and height in meter)
  
  Your tasks:
  1.For each of them, create an object with properties for their 
  full name (Mark Miller and John Smith), 
  mass, and 
  height 
  
  2.Create a 'calcBMI'method on each object to calculate the BMI 
  (the same method on both objects). 
  Store the BMI value to a property, and also return it from the method
  
  3.Log to the console who has the higher BMI, together with the 
  full name and the respective BMI. 
  
  Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
  
  Test data:
  Marks weights 78 kg and is 1.69m tall. 
  John weights 92 kg and is 1.95m tall.
  
  GOOD LUCK 😀
*/

const mark = {
  fullName: "Mark Miller",
  height: 1.69,
  weight: 78,
  calcBMI: function () {
    this.bmi = (this.weight / this.height ** 2).toFixed(2);
    return this.bmi
  }
}

const john = {
  fullName: "John Smith",
  height: 1.95,
  weight: 92,
  calcBMI: function () {
    this.bmi = (this.weight / this.height ** 2).toFixed(2);
    return this.bmi
  }
}

const higherBMI = (person1, person2) => {
  if (person1.bmi > person2.bmi) {
    return `${person1.fullName}'s BMI (${person1.bmi}) is higher than ${person2.fullName}'s BMI (${person2.bmi}).`
  }

  return `${person2.fullName}'s BMI (${person2.bmi}) is higher than ${person1.fullName}'s BMI (${person1.bmi}).`
}

mark.calcBMI();
john.calcBMI();

console.log(higherBMI(john, mark));