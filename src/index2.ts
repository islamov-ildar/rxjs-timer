import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax'


const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

ajax$.subscribe(
    data => console.log('sub1: ', data.response.first_name)
)

ajax$.subscribe(
    data => console.log('sub2: ', data.response.first_name)
)

ajax$.subscribe(
    data => console.log('sub3: ', data.response.first_name)
)

const helloButton = document.querySelector('button#hello')

const helloClick$ = new Observable<MouseEvent>(
    subsciber => {
        helloButton.addEventListener('click', (event: MouseEvent) => {
            subsciber.next(event)
        })
    }
)

helloClick$.subscribe(
    event => console.log('Sub1: ', event.type, event.x, event.y)
)
setTimeout(() => {
    // console.log('subscriptions2 starts');
    helloClick$.subscribe(
        event => console.log('Sub2: ', event.type, event.x, event.y)
    )

}, 5000)