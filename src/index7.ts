import { interval, Observable, timer } from "rxjs";

console.log('App started');

// const subscribe = interval(1000).subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('complete'),
// })

const interval$ = new Observable(subscriber => {
    let counter = 0
    const intervalId = setInterval(() => {
        // console.log('interval started');
        subscriber.next(counter++);
        // subscriber.complete();
    }, 1000)

    return () => {
        clearInterval(intervalId)
    }
})

const subscribe = interval$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete2'),
})

setTimeout(() => {
    console.log('unsubscribe');
    subscribe.unsubscribe()
}, 5000)