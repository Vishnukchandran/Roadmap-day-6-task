class Person {
  constructor(name, age, gender, job, address, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.job = job;
    this.address = address;
    this.interests = interests;
  }

  profile() {
    console.log(
      `This is ${this.name} ${this.age} years old and worked as a ${
        this.job
      }. I like watching ${this.interests.join(", ")}.`
    );
  }

  greeting() {
    console.log(`I am ${this.name}, Good Morning!.`);
  }
}

let person1 = new Person(
  "Vishnu",
  27,
  "Male",
  "Tech support",
  "123 Street, City",
  ["movies", "music", "reading"]
);
person1.profile();
person1.greeting();
