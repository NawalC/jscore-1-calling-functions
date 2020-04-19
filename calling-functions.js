// Write a function that returns the year someone is born given their age as input


function yearOfBirth(age) {
    return 2020 - age;
  }
  console.log(yearOfBirth(20))

/* Using the answer from step 1, write a function that takes someone's name and age as input and 
 returns a string that states the person's name and year they were born in a sentence*/
 
function createGreeting(name, age) {
    const birthYear = yearOfBirth(age);
    
    const message =  `My Name is ${name} and I was born in  ${birthYear} .`;
    
    return message;
  }

  console.log(createGreeting('ahmed', 20))