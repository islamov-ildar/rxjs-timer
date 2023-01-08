import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
interface NewsItem {
  category: "Sports" | "Business";
  content: string;
}

const newsFeed$ = new Observable<NewsItem>((subscriber) => {
  setTimeout(() => {
    subscriber.next({ category: "Business", content: "A" });
  }, 1000);
  setTimeout(() => {
    subscriber.next({ category: "Sports", content: "B" });
  }, 2000);
  setTimeout(() => {
    subscriber.next({ category: "Business", content: "C" });
  }, 3000);
  setTimeout(() => {
    subscriber.next({ category: "Sports", content: "D" });
  }, 5000);
  setTimeout(() => {
    subscriber.next({ category: "Sports", content: "E" });
  }, 6000);
});

const sportsNewsFeed = newsFeed$.pipe(
  filter((item) => item.category === "Sports")
);

sportsNewsFeed.subscribe((item) => console.log(item));
