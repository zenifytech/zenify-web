import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'zen-lounge',
  templateUrl: './lounge.component.html',
  styleUrls: ['./lounge.component.scss']
})
export class LoungeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document.querySelector('body').classList.add('zen-lounge-body');
  }

  ngOnDestroy() {
    document.querySelector('body').classList.remove('zen-lounge-body');
  }
}
