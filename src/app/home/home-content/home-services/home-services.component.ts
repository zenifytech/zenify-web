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
  private _screenWidth: number;

  constructor() { }

  ngOnInit(): void {
    this._screenWidth = window.innerWidth;
    this._mobileView = this._screenWidth <= 600;

    if (this._screenWidth >= 2560 || (this._screenWidth <= 1024 && this._screenWidth >= 768)) {
      this._svgLoaded[0] = true;
    }
  }

  public loadedOnce(index: number, position: number) {
    if (this._scrollPosition >= this.getScrollOffset(position) && !this._svgLoaded[index]) {
      this._svgLoaded[index] = true;
    }
    return this._svgLoaded[index];
  }

  private getScrollOffset(position: number) {
    if (this._screenWidth >= 3840) {
      return position + 100;
    } else if (this._screenWidth >= 2560) {
      return position - 100;
    } else if (this._screenWidth <= 1024 && this._screenWidth >= 768) {
      return position - 100;
    } else if (this._screenWidth < 600) {
      return position + 200;
    }

    return position;
  }

  @HostListener('window:scroll', ['$event']) 
  private setScrollPosition(event) {
    console.log("scroll", this._scrollPosition);
    this._scrollPosition = window.pageYOffset;
  }
}
