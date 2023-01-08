import { Observable, of } from "rxjs";
import { concatMap } from "rxjs/operators";

const source$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next("A");
  }, 2000);
  setTimeout(() => {
    subscriber.next("B");
  }, 4000);
});

console.log("App ahs started");
source$
  .pipe(concatMap((value) => of(1, 2, 3)))
  .subscribe((value) => console.log(value));
