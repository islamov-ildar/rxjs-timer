import { Observable } from 'rxjs';
import { name$, storeDataOnServer, storeDataOnServerError} from './external'


// const someObservable$ = new Observable<string>(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   setTimeout(() => subscriber.next('Ben'), 1000);
//   setTimeout(() => subscriber.next('Charlie'), 1500);
//   // subscriber.complete();
// });

// const observer = {
//   next: (value: string) => console.log(value)
// }


// console.log('Subscription 1 Starts');
// // const subscription = 
// someObservable$.subscribe(value => console.log('Subscription 1', value));

// setTimeout(() => {
  
// console.log('Subscription 2 Starts');
// someObservable$.subscribe(value => console.log('Subscription 2', value));
// }, 1000)

// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe()} , 3000)
// someObservable$.subscribe(observer);

// someObservable$.subscribe({
//   next: (value: string) => console.log(value)
// }
// )

// name$.subscribe(value => console.log(value))

// storeDataOnServer('SomeData').subscribe(value => console.log(value))

// storeDataOnServerError('SomeError').subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error when saving', err.message)
//   }  
// )

// const observable2$ = new Observable<string>(subscriber => {
//   console.log('Observable 2 execute');
//   subscriber.next('AlanDelon')

//   setTimeout(() => {  subscriber.error(new Error('Failure!'))

// }, 4000);

//   setTimeout(() => {subscriber.next('Constantine')
//   subscriber.complete()
// }, 3000);


//   return () => {
//     console.log('Teardown');
//   }
// })

// console.log('Before subscribe 2');
// observable2$.subscribe({ 
//   next: value => console.log(value),
//   error: err => console.log(err.message),
//   complete: () => console.log('Completed')
// })
// console.log('After subscribe 2');

const observable3$ = new Observable<number>(
  subscriber => {
    let count:number = 0;
    const intervalId = setInterval(() => {
      console.log('Emited', count);
      subscriber.next(++count)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }
)

const subscribeToTimer = observable3$.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Count is over')
})

setTimeout(() => {
  subscribeToTimer.unsubscribe()
  console.log('unsubscribe');
}, 7000)