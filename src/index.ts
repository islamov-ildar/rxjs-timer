import { fromEvent, Subject, Observable, interval } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";

console.log("App has started!");

const minusFiveBtn: HTMLElement = document.querySelector("button#minusFiveSec");
const pauseBtn: HTMLElement = document.querySelector("button#pause");
const startBtn: HTMLElement = document.querySelector("button#start");
const plusFiveBtn: HTMLElement = document.querySelector("button#plusFiveSec");
const resetBtn: HTMLElement = document.querySelector("button#reset");
const seconds: HTMLElement = document.querySelector("#seconds");

const isStarted$ = new Subject<boolean>();

fromEvent(startBtn, "click").subscribe(() => {
  isStarted$.next(true);
  console.log(isStarted$);
});

fromEvent(pauseBtn, "click").subscribe(() => {
  isStarted$.next(false);
  console.log(isStarted$);
});

fromEvent(plusFiveBtn, "click").subscribe(() => {
  console.log("plusFiveBtn");
});

const timer$ = new Observable<number>((subscriber) => {
  let count: number = 0;
  const intervalId = setInterval(() => {
    subscriber.next(++count);
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
});

// const timer$ = interval(1000);

// const subscribeToTimer = timer$
//   .pipe(withLatestFrom(isStarted$))
//   .subscribe(([value, isStarted]) => {
//     console.log(value);
//     // return () => {
//     //   clearInterval(intervalId);
//     // };

//     if (value < 10 && isStarted) {
//       seconds.innerText = String(`0${value}`);
//     } else if (isStarted) {
//       seconds.innerText = String(`${value}`);
//     }
//     //   console.log(value);
//   });

// isStarted$.subscribe(() => {
//   console.log("1234");
//   let count: number = 0;
//   const intervalId = setInterval(() => {
//     ++count;
//     seconds.innerText = String(`0${count}`);
//   }, 1000);
// });
