import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'zen-home-faq',
  templateUrl: './home-faq.component.html',
  styleUrls: ['./home-faq.component.scss']
})
export class HomeFaqComponent implements OnInit {

  public _scrollPosition: number;
  public _faqLoaded: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public loadFaqs() {
    if (this._scrollPosition >= 2179) {
      this._faqLoaded = true;
    }
    return this._faqLoaded;
  }

  @HostListener('window:scroll', ['$event']) 
  private setScrollPosition(event) {
    this._scrollPosition = window.pageYOffset;
  }
}
