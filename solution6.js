//1. Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
  }

//2. Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
function volumeOfBox(sizes) {
    return sizes.width * sizes.length * sizes.height;
  }

//3. Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.
function fiftyThirtyTwenty(ati) {
    let budget = {};
  
    budget.Needs = ati * 0.5;
    budget.Wants = ati * 0.3;
    budget.Savings = ati * 0.2;
  
    return budget;
  }


//Easy
//4. You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => a.price - b.price);
  }

//5. Create a function that returns whether the first array is slightly superior to that of the second.
function isFirstSuperior(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr2[i]) {
        return true;
      } else if (arr1[i] < arr2[i]) {
        return false;
      }
    }
    return false;
  }

//6. Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.
function maximumScore(tileHand) {
    let totalScore = 0;
    for (let i = 0; i < tileHand.length; i++) {
      totalScore += tileHand[i].score;
    }
    return totalScore;
  }

//7. Write a function that returns true if an object is empty, and false otherwise.
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

//8. Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).
function isInRange(number, range) {
    return number >= range.min && number <= range.max;
  }

//9. Create the function that takes an array with objects and returns the sum of people's budgets.
function getBudgets(arr) {
    return arr.reduce((totalBudget, person) => totalBudget + person.budget, 0);
  }

//10. Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
function freeShipping(order) {
    const totalCost = Object.values(order).reduce((acc, value) => acc + value, 0);
    return totalCost > 50.00;
  }

//Easy Strings
//11. Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.
function findZip(str) {
    let first = str.indexOf("zip");
    if (first === -1) {
      return -1;
    }
    
    let second = str.indexOf("zip", first + 1);
    return second;
  }

//12. Create a function that will remove any repeated character(s) in a word passed to the function. Not just consecutive characters, but characters repeating anywhere in the input.
function unrepeated(word) {
    return word.split('').filter((char, index) => word.indexOf(char) === index).join('');
  }

//13. Write a function that removes all capital letters from a sentence except the first letter, puts quotation marks around the sentence and adds ", whispered Edabit." at the end.
function shhh(sentence) {
    const lowercaseS = sentence.toLowerCase();
    const firstL = lowercaseS.charAt(0).toUpperCase();
    const remainingL = lowercaseS.slice(1).replace(/[A-Z]/g, "");
    const finalS = '"' + firstL + remainingL + '", whispered Edabit.';
    return finalS;
  }

//14. A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.
function isHarshad(num) {
    let sumdigit = String(num).split('').reduce((sum, digit) => sum + Number(digit), 0);
    return num % sumdigit === 0;
  }

//15. Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.
function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

//16. Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.
function isValidPhoneNumber(str) {
    let pattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    return pattern.test(str);
  }

//17. The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.
function reverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      const char = str[i];
      if (char === char.toUpperCase()) {
        reversed += char.toLowerCase();
      } else {
        reversed += char.toUpperCase();
      }
    }
    return reversed;
  }

//18. Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.
function isAnagram(s1, s2) {
    let str1 = s1.toLowerCase().split('').sort().join('');
    let str2 = s2.toLowerCase().split('').sort().join('');
    return str1 === str2;
  }

//19. Given a number, return a string of the word "Boom", which varies in the following ways:
function boomIntensity(n) {
    if (n < 2) {
      return "boom";
    }
    
    let boom = "B" + "o".repeat(n);
    
    if (n % 2 === 0 && n % 5 === 0) {
      return boom.toUpperCase() + "m!";
    } else if (n % 2 === 0) {
      return boom + "m!";
    } else if (n % 5 === 0) {
      return boom.toUpperCase();
    }
    
    return boom;
  }


//20. Create a function which takes in a number n as input and returns all numbers up to and including n joined together in a string. Separate each digit from each other with the character "-".
function joinDigits(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
      result += i.toString().split("").join("-");
    }
    return result;
  }