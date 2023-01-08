import { Observable, timer } from "rxjs";

console.log('App started');

const subscribe = timer(2000).subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete'),
})

// const timer$ = new Observable(subscriber => {
//     const timeOutId = setTimeout(() => {
//         console.log('Timeout2');
//         subscriber.next('zero');
//         subscriber.complete();
//     }, 3000)

//     return () => {
//         clearTimeout(timeOutId)
//     }
// })

// const subscribe = timer$.subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('complete2'),
// })

setTimeout(() => {
    console.log('unsubscribe');
    subscribe.unsubscribe()
}, 1000)