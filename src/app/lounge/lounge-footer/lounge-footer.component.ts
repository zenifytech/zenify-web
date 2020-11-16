import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zen-lounge-footer',
  templateUrl: './lounge-footer.component.html',
  styleUrls: ['./lounge-footer.component.scss']
})
export class LoungeFooterComponent implements OnInit {

  public _currentYear: number;

  constructor() { }

  ngOnInit(): void {
    this._currentYear = new Date().getFullYear();
  }

}
