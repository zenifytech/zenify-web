import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'zen-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss'],
  animations: [
    trigger(
      'pop-up', [
        transition(
          ':enter',  [
            style({ 'position':'relative', 'height': '75%', top: 'auto', opacity: 0 }),
            animate('.75s ease-out', 
                    style({ 'position':'relative', 'height': '95%', opacity: 0.8 }))
          ]
        ),
        transition(
          ':leave',  [
            style({ 'position': 'relative', 'height': '95%', opacity: 0.8 }),
            animate('.2s ease-in', 
                    style({ 'position': 'relative',  'height': '75%', opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class HomeServicesComponent implements OnInit {

  public _mobileView: boolean;
  public _scrollPosition: number;

  private _svgLoaded = [false, false, false, false, false];

  constructor() { }

  ngOnInit(): void {
    this._mobileView = window.innerWidth <= 600;
  }

  public loadedOnce(index: number, position: number) {
    if (this._scrollPosition >= position && !this._svgLoaded[index]) {
      this._svgLoaded[index] = true;
    }
    return this._svgLoaded[index];
  }

  @HostListener('window:scroll', ['$event']) 
  private setScrollPosition(event) {
    this._scrollPosition = window.pageYOffset;
  }
}
