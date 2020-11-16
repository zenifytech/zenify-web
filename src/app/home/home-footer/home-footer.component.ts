import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zen-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public currentYear() {
    return new Date().getFullYear();
  }
}
