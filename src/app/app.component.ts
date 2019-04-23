import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subject, timer } from 'rxjs';
import { reduce, skipUntil, takeUntil } from 'rxjs/operators';

export interface ObjectStream {
  id: number;
  stream: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {

  streamList: ObjectStream[] = [];
  totalSum: number = 0;

  private streamOne: Observable<number>;
  private streamTwo: Observable<number>;
  private streamThree: Observable<number>;
  private subscibtion: any;

  streamFour: Subject<ObjectStream> = new Subject<ObjectStream>();

  get streamsFromOne(): ObjectStream[] {
    return this.streamList.filter((os: ObjectStream) => {
      return os.stream === 1;
    });
  }

  get streamsFromTwo(): ObjectStream[] {
    return this.streamList.filter((os: ObjectStream) => {
      return os.stream === 2;
    });
  }

  get streamsFromThree(): ObjectStream[] {
    return this.streamList.filter((os: ObjectStream) => {
      return os.stream === 3;
    });
  }

  start(): void {
    this.streamOne = interval(1000).pipe(
      takeUntil(timer(30000)),
    );
    this.streamTwo = interval(1500).pipe(
      takeUntil(timer(30000)),
      skipUntil(timer(10000))
    );
    this.streamThree = interval(2000).pipe(
      takeUntil(timer(30000)),
      skipUntil(timer(20000))
    );

    this.streamOne.subscribe((generatedId: number) => {
      this.streamFour.next({
        id: generatedId,
        stream: 1,
      });
    });

    this.streamTwo.subscribe((generatedId: number) => {
      this.streamFour.next({
        id: generatedId,
        stream: 2,
      });
    });

    this.streamThree.subscribe((generatedId: number) => {
      this.streamFour.next({
        id: generatedId,
        stream: 3,
      });
    });

    this.subscibtion = this.streamFour.pipe(
      takeUntil(timer(30000)),
    ).subscribe((generatedStream: ObjectStream) => {
      this.totalSum += generatedStream.id;
      this.streamList.push(generatedStream);
    });
  }

  end() {
    this.subscibtion.unsubscribe();
  }

  ngOnDestroy(): void {
  }
}
