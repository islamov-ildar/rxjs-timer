import { Observable, of } from "rxjs";


of('Victor', 'Igor', 'Nikolay').subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete1')
})

const names$ = new Observable<string>( subscriber => {
    subscriber.next('Victor');
    subscriber.next('Igor');
    subscriber.next('Nikolay');
    subscriber.complete()
})

names$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete2')
})

function ourOwnOf(...args: string[]): Observable<string> {
    return new Observable<string>(subscriber => {
        for(let i = 0; i < args.length; i++) {
            subscriber.next(args[i])
        }
        subscriber.complete()
    })
}

ourOwnOf('Victor3', 'Igor3', 'Nikolay3').subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete3')
})