import { Observable, of, EMPTY } from "rxjs";
import { catchError } from "rxjs/operators";

const failingHttpRequest$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error(new Error("Timeout"));
  }, 2000);
});

console.log("App started");

failingHttpRequest$.pipe(catchError((error) => EMPTY)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("COMPLETE"),
});
