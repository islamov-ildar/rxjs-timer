import { fromEvent } from "rxjs";
import { map, debounceTime } from "rxjs/operators";

const sliderInput = document.querySelector("input#slider");

let count = 0;
fromEvent(sliderInput, "input")
  .pipe(
    debounceTime(1000),
    map((event: any) => event.target["value"])
  )
  .subscribe((event) => {
    console.log(event);
    console.log(count++);
  });
