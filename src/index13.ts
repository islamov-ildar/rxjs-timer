import { of } from "rxjs";
import { map, filter, tap } from "rxjs/operators";

of(1, 7, 3, 6, 2)
  .pipe(
    filter((x) => x > 5),
    tap((value) => console.log("SPY: ", value)),
    map((value) => value * 2)
  )
  .subscribe((value) => console.log(value));
