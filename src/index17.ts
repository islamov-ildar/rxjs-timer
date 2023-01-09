import { fromEvent, EMPTY, of } from "rxjs";
import { catchError, map, concatMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const endpointInput: HTMLInputElement =
  document.querySelector("input#endpoint");
const fetchButton = document.querySelector("button#fetch");

fromEvent(fetchButton, "click")
  .pipe(
    map(() => endpointInput.value),
    concatMap((value: string) =>
      ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
        // catchError(() => EMPTY)
        catchError((error: Error) =>
          of(console.log(`Could not fetch data: ${error}`))
        )
      )
    )
  )
  .subscribe({
    next: (value: any) => console.log(value),
    error: (err: Error) => console.log("Error", err),
    complete: () => console.log("complete"),
  });
