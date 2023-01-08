import { fromEvent, Observable } from "rxjs"

const triggerBtn = document.querySelector('button#trigger')

const subscription = fromEvent<MouseEvent>(triggerBtn, 'click').subscribe(
    event => console.log(event.type, event.x, event.y)
)

// const triggerClick$ = new Observable<MouseEvent>(subscriber => {
    
//     const clickHandlerFn = (event: MouseEvent) => {
//         console.log('123');
//         subscriber.next(event)
//     }

//     triggerBtn.addEventListener('click', clickHandlerFn)

//     return () => {
//         triggerBtn.removeEventListener('click', clickHandlerFn)
//     }
// })

// const subscription = triggerClick$.subscribe(event => console.log(event.type, event.x, event.y))

setTimeout(() => {
    subscription.unsubscribe()
    console.log('unsubscribe from click');
}, 5000)