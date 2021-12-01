import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private oddNumbers(range: number) {
    var n = 1;
    const oddNumbers = [];
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
    const primeNumbers = [];
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

  public task1() {
    const listRange100 = [...Array(100).keys()].map(x => x + 1);
    const listAnswer = listRange100.map(x => {
      const multiplesOfThree = x % 3 == 0;
      const multiplesOfFive = x % 5 == 0;
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

  public task2(year: number) {
    const year2Digit = year.toString().split('')
    while (year2Digit.length > 2) {
      year2Digit.shift()
    }
    var year2Digitnumber = + year2Digit.join("");
    const divisibleBy400 = year % 400 === 0;
    const divisibleBy4 = year2Digitnumber % 4 === 0;
    return divisibleBy400 || (year2Digitnumber > 0 && divisibleBy4);
  }

  public task3Dot1(n: number) {
    var str = "";
    for (var i = 0; i < n; i++) {
      str += `${'*'.repeat(i)}\n`;
    }
    return str;
  }

  public task3Dot2(n: number) {
    var str = "";
    for (var i = 0; i < n; i++) {
      str += `${' '.repeat(n - i) + '*'.repeat(i)}\n`;
    }
    return str;
  }

  public task3Dot3(n: number) {
    var str = "";
    var oddNumbers = this.oddNumbers(n - 1);
    for (var i = 0; i < n; i++) {
      str += `${' '.repeat(n - i) + '*' + ' '.repeat(oddNumbers[i - 1]) + (oddNumbers[i - 1] ? '*' : '')}\n`;
    }
    return str;
  }

  public task3Dot4(n: number) {
    var str = "";
    // var oddNumbers = this.oddNumbers(n / 2 - 1).reverse();
    // console.log(oddNumbers)
    // for (var i = 0; i < n; i++) {
    //   str += `${' '.repeat(n - i) + '*' + ' '.repeat(oddNumbers[i - 1]) + (oddNumbers[i - 1] ? '*' : '')}\n`;
    // }
    return str;
  }

  public task3Dot5(n: number) {
    var str = "";
    var oddNumbers = this.oddNumbers(n / 2);
    for (var i = 0; i < n; i++) {
      let blankQuantity = Math.abs((Math.trunc(n / 2) - i));
      (n % 2 == 0 && i >= Math.trunc(n / 2)) && blankQuantity++;
      let oddIndex = Math.trunc(n / 2) - blankQuantity;
      str += `${' '.repeat(n % 2 == 0 ? blankQuantity - 1 : blankQuantity) + '*'.repeat(oddNumbers[oddIndex])}\n`;
    }
    return str;
  }
}