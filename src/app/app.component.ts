// src/app/app.component.ts

import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import ReactDOM from 'react-dom';
import React from 'react';
import ReactCounter from './react-components/ReactCounter';
import store from './store/store';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>Angular + React + Redux</h1>
      <div #reactContainer></div>
      <button (click)="decrement()">Decrement by angular</button>
    </div>
  `,
  styles: [],
  standalone: true
})
export class AppComponent implements AfterViewInit, OnDestroy {

  @ViewChild('reactContainer', { static: true }) reactContainer!: ElementRef<HTMLDivElement>;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.renderReactComponent();
  }

  ngOnDestroy(): void {
    ReactDOM.unmountComponentAtNode(this.reactContainer.nativeElement);
  }

  decrement(): void {
    store.dispatch({ type: 'DECREMENT' });
  }

  private renderReactComponent(): void {
    ReactDOM.render(
      React.createElement(ReactCounter, {}),
      this.reactContainer.nativeElement
    );
  }

}
