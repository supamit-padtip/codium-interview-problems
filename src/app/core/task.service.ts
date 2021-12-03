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

  private primeNumbers(n: number) {
    var x = 2;
    var primeNumbers = [];
    while (x < n) {
      var primeNumber = true;
      for (var i = 2; i < x; i++) {
        if (x % i == 0) {
          primeNumber = false;
          break;
        }
      }
      primeNumber && primeNumbers.push(x);
      x++;
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
    return String(divisibleBy400 || (year2Digitnumber > 0 && divisibleBy4));
  }

  public easyTask3Dot1(n: number) {
    var str = "";
    for (var i = 0; i < n; i++) {
      str += `${'*'.repeat(i+1)}\n`;
    }
    return str;
  }

  public easyTask3Dot2(n: number) {
    var str = "";
    for (var i = 0; i < n; i++) {
      str += `${' '.repeat(n - i+1) + '*'.repeat(i+1)}\n`;
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
    if (isEvenNumber) {
      oddNumbers = oddNumbers.map(x => x += 1);
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

  public easyTask3Dot6(n: number) {
    var str = "";
    var oddNumbers = this.oddNumbers(n);
    var line = oddNumbers[n - 1];
    var halfLine = Math.trunc(line / 2);
    oddNumbers.pop();
    for (var i = 0; i < line; i++) {
      let firstNLast = i != 0 && i != line - 1;
      let abQuantity = n - (i + 1) >= 0 ? n - (i + 1) : 0;
      let cdQuantity = (i + 1) - n >= 0 ? (i + 1) - n : 0;
      let eIndex = halfLine - Math.abs(halfLine - i) - 1;
      str += `${'A'.repeat(abQuantity)}`;
      str += `${'C'.repeat(cdQuantity)}`;
      str += `+`;
      str += `${'E'.repeat(oddNumbers[eIndex])}`;
      if (firstNLast) {
        str += `+`;
      }
      str += `${'B'.repeat(abQuantity)}`;
      str += `${'D'.repeat(cdQuantity)}\n`;
    }
    return str;
  }

  public mediumTask1(n: number){
    return this.primeNumbers(n).join(' ');
  }
}