import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'zen-home-faq',
  templateUrl: './home-faq.component.html',
  styleUrls: ['./home-faq.component.scss']
})
export class HomeFaqComponent implements OnInit {

  public _scrollPosition: number;
  public _faqLoaded: boolean;

  constructor(
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platform: Object
  ) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToElement(fragment);
      }
    });
  }

  public loadFaqs() {
    if (this._scrollPosition >= 550) {
      this._faqLoaded = true;
    }
    return this._faqLoaded;
  }

  @HostListener('window:scroll', ['$event']) 
  private setScrollPosition(event) {
    if (isPlatformBrowser(this.platform)) {
      this._scrollPosition = window.pageYOffset;
    }
  }

  private scrollToElement(id){
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
