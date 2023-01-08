import { from } from "rxjs";

from(['one', 'two', 'three']).subscribe({
    next: value => console.log(value),
    complete: () => console.log('count complete')
})

const somePromise = new Promise((resolve, reject) => {
    // resolve('Resolved!')
    reject('Error in somepromise')
}) 

const observableFromPromise$ = from(somePromise).subscribe({
    next: value => console.log(value),
    error: err => console.log('error1', err),
    complete: () => console.log('complete from promise')
 })