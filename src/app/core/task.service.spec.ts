import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

const listRange10 = [...Array(7).keys()].map(x => x + 1);

const answer = {
  easyTask1: { input: null, answer: "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz" },
  easyTask2: [
    { input: 1600, answer: true },
    { input: 2000, answer: true },
    { input: 1500, answer: false },
    { input: 2004, answer: true },
    { input: 2008, answer: true },
    { input: 2010, answer: false }
  ],
  mediumTask1: {input: 20, answer: "2 3 5 7 11 13 17 19"}
}

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test easyTask1', () => {
    expect(service.easyTask1()).toBe(answer.easyTask1.answer);
  });

  it('test easyTask2', () => {
    answer.easyTask2.forEach(element => {
      expect(service.easyTask2(element.input)).toBe(element.answer);
    });
  });

  it('test easyTask3Dot1, please attention in console and manual test !!!', () => {
    listRange10.forEach(element => {
      console.log(service.easyTask3Dot1(element));
    });
  });

  it('test easyTask3Dot2, please attention in console and manual test !!!', () => {
    listRange10.forEach(element => {
      console.log(service.easyTask3Dot2(element));
    });
  });

  it('test easyTask3Dot3, please attention in console and manual test !!!', () => {
    listRange10.forEach(element => {
      console.log(service.easyTask3Dot3(element));
    });
  });

  it('test easyTask3Dot4, please attention in console and manual test !!!', () => {
    listRange10.forEach(element => {
      console.log(service.easyTask3Dot4(element));
    });
  });

  it('test easyTask3Dot5, please attention in console and manual test !!!', () => {
    listRange10.forEach(element => {
      console.log(service.easyTask3Dot5(element));
    });
  });

  it('test easyTask3Dot6, please attention in console and manual test !!!', () => {
    listRange10.forEach(element => {
      console.log(service.easyTask3Dot6(element));
    });
  });

  it('test mediumTask1', () => {
    expect(service.mediumTask1(answer.mediumTask1.input)).toBe(answer.mediumTask1.answer);
  });
});
