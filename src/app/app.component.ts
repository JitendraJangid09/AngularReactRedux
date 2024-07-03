import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import React from 'react';
import ReactCounter from './react-components/ReactCounter';
import store from './store/store';

import { createRoot } from 'react-dom/client';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center; background-color: green; padding: 1rem">
      <h1>Angular + React + Redux</h1>
      <div #reactContainer style="padding: 1rem"></div>
      <button (click)="increment()" style="padding: 1rem; margin-left: 10px">Increment by angular</button>
      <button (click)="decrement()" style="padding: 1rem; margin-left: 10px">Decrement by angular</button>
    </div>
  `,
  styles: [],
  imports: [],
  standalone: true
})
export class AppComponent implements AfterViewInit, OnDestroy {

  @ViewChild('reactContainer', { static: true }) reactContainer!: ElementRef<HTMLDivElement>;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.renderReactComponent();
  }

  ngOnDestroy(): void {
    const root = createRoot(this.reactContainer.nativeElement);
    root.unmount();
  }

  decrement(): void {
    store.dispatch({ type: 'DECREMENT' });
  }

  increment(): void {
    store.dispatch({ type: 'INCREMENT' });
  }

  private renderReactComponent(): void {
    const root = createRoot(this.reactContainer.nativeElement);
    root.render(
      React.createElement(ReactCounter, {})
    );
  }

}
