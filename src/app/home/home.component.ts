import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector:    'app-home',
  templateUrl: './home.component.html',
  styleUrls:   [ './home.component.scss' ]
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObsSubscription: Subscription;
  myObsSubscription: Subscription;

  ngOnInit() {
    const number               = Observable.interval(1000).take(30);
    this.numberObsSubscription = number.subscribe(
      (n: number) => {
        console.log(n);
      },
      (e) => {
        console.log(e);
      },
      () => {
        console.log('Finish');
      }
    );
    const myObs                = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First');
      }, 2000);
      setTimeout(() => {
        observer.next('Second');
      }, 4000);
      setTimeout(() => {
        observer.error('Error');
      }, 6000);
    });

    this.myObsSubscription = myObs.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('Complete'); }
    );
  }

  ngOnDestroy() {
    this.numberObsSubscription.unsubscribe();
    this.numberObsSubscription.unsubscribe();
  }
}
