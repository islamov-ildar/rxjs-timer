import { fromEvent, BehaviorSubject, interval, merge, tap, map } from "rxjs";
import { withLatestFrom } from "rxjs/operators";

console.log("App has Played!");

enum Actions {
  Pause,
  Play,
  Reset,
  Forw,
  Prev,
}

const changingAmount: number = 5000;

const seconds: HTMLElement = document.querySelector("#time");
const playIco: HTMLElement = document.querySelector(".fa-play");
const pauseIco: HTMLElement = document.querySelector(".fa-pause");
const PlayBtn: HTMLElement = document.querySelector("button#start");
const resetBtn: HTMLElement = document.querySelector("button#reset");
const incrementBtn: HTMLElement = document.querySelector("button#increment");
const decrementBtn: HTMLElement = document.querySelector("button#decrement");

pauseIco.style.display = "none";

const milliSecondCount = new BehaviorSubject<number>(0);
const event = new BehaviorSubject<Actions>(Actions.Pause);

const timer$ = interval(10);
const PlayEvent = fromEvent(PlayBtn, "click");
const resetEvent = fromEvent(resetBtn, "click");
const incrementEvent = fromEvent(incrementBtn, "click");
const decrementEvent = fromEvent(decrementBtn, "click");

let previousEvent = Actions.Pause;

merge(timer$, event)
  .pipe(
    withLatestFrom(event),

    tap((value) => {
      const act = value[1];
      if (act === Actions.Forw) {
        const seekAmount = milliSecondCount.value + changingAmount;
        milliSecondCount.next(seekAmount);

        if (previousEvent === Actions.Play) {
          event.next(Actions.Play);
        } else {
          event.next(Actions.Pause);
        }
      } else if (act === Actions.Prev) {
        const newAmount = milliSecondCount.value - changingAmount;
        milliSecondCount.next(Math.max(0, newAmount));

        if (previousEvent === Actions.Play) {
          event.next(Actions.Play);
        } else {
          event.next(Actions.Pause);
        }
      } else if (act === Actions.Reset) {
        milliSecondCount.next(0);
        renderPlayPauseIco("play");
      } else if (act === Actions.Play) {
        milliSecondCount.next(milliSecondCount.value + 10);
      }
    }),

    tap((value) => {
      previousEvent = value[1];
    }),

    withLatestFrom(event),

    map(() => {
      return new Date(milliSecondCount.value).toISOString().slice(11, 22);
    })
  )
  .subscribe((value) => {
    seconds.innerText = value;
  });

PlayEvent.subscribe(() => {
  if (event.value === Actions.Play) {
    event.next(Actions.Pause);
    renderPlayPauseIco("play");
  } else {
    event.next(Actions.Play);
    renderPlayPauseIco("pause");
  }
});

incrementEvent.subscribe(() => {
  event.next(Actions.Forw);
});

decrementEvent.subscribe(() => {
  event.next(Actions.Prev);
});

resetEvent.subscribe(() => {
  event.next(Actions.Reset);
});

function renderPlayPauseIco(status: string): void {
  if (status === "play") {
    playIco.style.display = "contents";
    pauseIco.style.display = "none";
  } else if (status === "pause") {
    playIco.style.display = "none";
    pauseIco.style.display = "contents";
  }
}
