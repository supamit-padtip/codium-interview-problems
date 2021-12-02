import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private oddNumbers(range: number) {
    var n = 1;
    var oddNumbers = [];
    while (oddNumbers.length < range) {
      if (n % 2 != 0) {
        oddNumbers.push(n);
      }
      n++;
    }
    return oddNumbers;
  }

  private primeNumbers(range: number) {
    var n = 2;
    var primeNumbers = [];
    while (primeNumbers.length < range) {
      var primeNumber = true;
      for (var i = 2; i < n; i++) {
        if (n % i == 0) {
          primeNumber = false;
          break;
        }
      }
      primeNumber && primeNumbers.push(n);
      n++;
    }
    return primeNumbers;
  }

  public easyTask1() {
    var listRange100 = [...Array(100).keys()].map(x => x + 1);
    var listAnswer = listRange100.map(x => {
      var multiplesOfThree = x % 3 == 0;
      var multiplesOfFive = x % 5 == 0;
      if (multiplesOfThree && multiplesOfFive) {
        return "FizzBuzz";
      } else if (multiplesOfThree) {
        return "Fizz";
      } else if (multiplesOfFive) {
        return "Buzz";
      } else {
        return x;
      }
    })
    return listAnswer.join(" ");
  }

  public easyTask2(year: number) {
    var year2Digit = year.toString().split('')
    while (year2Digit.length > 2) {
      year2Digit.shift()
    }
    var year2Digitnumber = + year2Digit.join("");
    var divisibleBy400 = year % 400 === 0;
    var divisibleBy4 = year2Digitnumber % 4 === 0;
    return divisibleBy400 || (year2Digitnumber > 0 && divisibleBy4);
  }

  public easyTask3Dot1(n: number) {
    var str = "";
    for (var i = 0; i < n; i++) {
      str += `${'*'.repeat(i)}\n`;
    }
    return str;
  }

  public easyTask3Dot2(n: number) {
    var str = "";
    for (var i = 0; i < n; i++) {
      str += `${' '.repeat(n - i) + '*'.repeat(i)}\n`;
    }
    return str;
  }

  public easyTask3Dot3(n: number) {
    var str = "";
    var oddNumbers = this.oddNumbers(n - 1);
    for (var i = 0; i < n; i++) {
      str += `${' '.repeat(n - i) + '*' + ' '.repeat(oddNumbers[i - 1]) + (oddNumbers[i - 1] ? '*' : '')}\n`;
    }
    return str;
  }

  public easyTask3Dot4(n: number) {
    var str = "";
    var halfN = Math.trunc(n / 2);
    var isEvenNumber = n % 2 == 0;
    var oddNumbers = this.oddNumbers(n / 2).reverse();
    oddNumbers.shift();
    if(isEvenNumber){
      oddNumbers = oddNumbers.map(x => x+=1);
    }
    for (var i = 0; i < n; i++) {
      let blankQuantity = halfN - Math.abs(halfN - i);
      (isEvenNumber && i >= halfN) && blankQuantity--;
      let oddIndex = blankQuantity;
      str += `${' '.repeat(blankQuantity) + '*' + ' '.repeat(oddNumbers[oddIndex]) + ((!isEvenNumber && i != halfN) || isEvenNumber ? '*' : '')}\n`;
    }
    return str;
  }

  public easyTask3Dot5(n: number) {
    var str = "";
    var halfN = Math.trunc(n / 2);
    var isEvenNumber = n % 2 == 0;
    var oddNumbers = this.oddNumbers(n / 2);
    for (var i = 0; i < n; i++) {
      let blankQuantity = Math.abs(halfN - i);
      (isEvenNumber && i >= halfN) && blankQuantity++;
      let oddIndex = halfN - blankQuantity;
      str += `${' '.repeat(isEvenNumber ? blankQuantity - 1 : blankQuantity) + '*'.repeat(oddNumbers[oddIndex])}\n`;
    }
    return str;
  }
}