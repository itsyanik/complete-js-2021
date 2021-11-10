/* 
    Coding Challenge#1

    Mark and John are trying to compare their BMI (Body Mass Index), 
    which is calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).
    Your tasks:
    1.Store Mark's and John's mass and height in variables
    2.Calculate both their BMIs using the formula (you can even implement both versions)
    3.Create a Booleanvariable 'markHigherBMI'containing information about whether
    Mark has a higher BMI than John.
     
    Test data:
    Data1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
    Data2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
     
    GOOD LUCK 😀

    Coding Challenge#2

    Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
      
    Your tasks:
    1.Print a nice output to the console, saying who has the higher BMI. 
    The message is either "Mark's BMI is higher than John's!"
    or "John's BMI is higher than Mark's!"
    
    2.Use a template literal to include the BMI values in the outputs. 
    Example: "Mark'sBMI (28.3) is higher than John's (23.9)!
    
    "Hint:Use an if/else statement
    
    GOOD LUCK
 */

const getBMI = (height, weight) => {
  const personBMI = weight / height ** 2;

  console.log('This function considers mass in KG and height in Meters.');

  return personBMI.toFixed(2);
}

const higherBMI = (firstPerson, secondPerson) => {
  if (firstPerson.bmi > secondPerson.bmi) {
    console.log(`${firstPerson.name}'s BMI (${firstPerson.bmi}) is higher than ${secondPerson.name}'s BMI (${secondPerson.bmi}).`);
  } else {
    console.log(`${firstPerson.name}'s BMI (${firstPerson.bmi}) is NOT higher than ${secondPerson.name}'s BMI (${secondPerson.bmi}).`)
  }
}

const dataOne = {
  mark: {
    name: "Mark",
    weight: 78,
    height: 1.69,
    get bmi() {
      return getBMI(this.height, this.weight);
    }
  },
  john: {
    name: "John",
    weight: 92,
    height: 1.95,
    get bmi() {
      return getBMI(this.height, this.weight);
    },
  },
  get markHigherBMI() {
    return higherBMI(this.mark, this.john)
  }
}

const dataTwo = {
  mark: {
    name: "Mark",
    weight: 95,
    height: 1.88,
    get bmi() {
      return getBMI(this.height, this.weight);
    }
  },
  john: {
    name: "John",
    weight: 85,
    height: 1.76,
    get bmi() {
      return getBMI(this.height, this.weight);
    },
  },
  get markHigherBMI() {
    return higherBMI(this.mark, this.john)
  }
}