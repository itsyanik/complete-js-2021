/* Coding Challenge#1

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
 */

const getBMI = (height, weight) => {
  const personBMI = weight / height ** 2;

  console.log('This function considers mass in KG and height in Meters.');

  return personBMI;
}

const higherBMI = (firstBMI, secondBMI) => {
  return firstBMI > secondBMI;
}

const dataOne = {
  mark: {
    weight: 78,
    height: 1.69,
    get bmi() {
      return getBMI(this.height, this.weight);
    }
  },
  john: {
    weight: 92,
    height: 1.95,
    get bmi() {
      return getBMI(this.height, this.weight);
    },
  },
  get markHigherBMI() {
    return higherBMI(this.mark.bmi, this.john.bmi)
  }
}

const dataTwo = {
  mark: {
    weight: 95,
    height: 1.88,
    get bmi() {
      return getBMI(this.height, this.weight);
    }
  },
  john: {
    weight: 85,
    height: 1.76,
    get bmi() {
      return getBMI(this.height, this.weight);
    },
  },
  get markHigherBMI() {
    return higherBMI(this.mark.bmi, this.john.bmi)
  }
}