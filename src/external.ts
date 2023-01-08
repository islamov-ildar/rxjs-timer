import { Observable, of } from "rxjs";

export const name$ = of('John', 'Valentine', 'Rockie');

export function storeDataOnServer(data: string): Observable<string> {
    return new Observable(subscriber => {
        setTimeout(() => {
            subscriber.next(`Saved successifully: ${data}`);
            subscriber.complete();
        }, 1000)
    })
}

export function storeDataOnServerError(data: string): Observable<string> {
    return new Observable(subscriber => {
        setTimeout(() => {
            subscriber.error(new Error('Failure!'))
        }, 1500)
    })
}