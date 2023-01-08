import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";

const randomFirstName$ = ajax<any>(
  "https://random-data-api.com/api/name/random_name"
).pipe(map((nameAjax) => nameAjax.response.first_name));

const randomCapital$ = ajax<any>(
  "https://random-data-api.com/api/nation/random_nation"
).pipe(map((nameAjax) => nameAjax.response.capital));

const randomDish$ = ajax<any>(
  "https://random-data-api.com/api/food/random_food"
).pipe(map((nameAjax) => nameAjax.response.dish));

// randomFirstName$.subscribe((value) => console.log(value));
// randomCapital$.subscribe((value) => console.log(value));
// randomDish$.subscribe((value) => console.log(value));

forkJoin([randomFirstName$, randomCapital$, randomDish$]).subscribe(
  // (values: any) => console.log(values)
  ([firstName, capital, dish]) =>
    console.log(`${firstName} is from ${capital} he likes ${dish}`)
);
