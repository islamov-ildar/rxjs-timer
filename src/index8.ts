import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";

const randomName$ = ajax<any>('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax<any>('https://random-data-api.com/api/nation/random_nation');

const randomFood$ = ajax<any>('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe(ajaxResponse => console.log(ajaxResponse.response.first_name))
// randomNation$.subscribe(ajaxResponse => console.log(ajaxResponse.response.capital))
// randomFood$.subscribe(ajaxResponse => console.log(ajaxResponse.response.dish))

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
    // (ajaxResponses: any) => console.log(ajaxResponses)
    ([nameAjax, nationAjax, foodAjax]) => console.log(`${nameAjax.response.first_name} is from ${nationAjax.response.capital} he likes ${foodAjax.response.dish}`)
)