import { Component, OnInit, AfterViewInit } from '@angular/core';
import { render } from 'react-dom';
import ReactCounter from './react-components/ReactCounter';
import store from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Render the React component after Angular view initialization
    render(<ReactCounter />, document.getElementById('react-counter'));
  }
}
