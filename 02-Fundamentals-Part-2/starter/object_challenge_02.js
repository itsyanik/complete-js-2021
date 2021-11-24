/* 
  Using what we have learned from the object lessons,
  and the given object, create a method called summary
  that will summarize all the data from the person that 
  the object makes a reference to.

  "Jonas is a 46 year old teacher and he has a driver's license."
*/

const jonas2 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age; // return is optional here
  },
  createSummary: function () {
      /* 
        Since you have no way to know if the calcAge() was called,
        it's better to call the method instead of this.age
      */
    this.summary = `${this.firstName} is a ${this.calcAge()} years old ${this.job} and ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;

    return this.summary;
  }
};
jonas2.createSummary();
console.log(jonas2.summary);