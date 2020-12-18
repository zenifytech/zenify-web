import { trigger, transition, style, animate } from '@angular/animations';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'zen-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss'],
  animations: [
    trigger(
      'pop-up-right', [
        transition(
          ':enter',  [
            style({ position: 'relative', left: '5em', opacity: 0 }),
            animate('.75s ease-out', 
                    style({ position: 'relative', left: 0, opacity: 0.8 }))
          ]
        ),
        transition(
          ':leave',  [
            style({ position: 'relative', left: 0, opacity: 0.8 }),
            animate('.2s ease-in', 
                    style({  position: 'relative', left: '5em', opacity: 0 }))
          ]
        )
      ]
    ),
    trigger(
      'pop-up-left', [
        transition(
          ':enter',  [
            style({ position: 'relative', right: '5em', opacity: 0 }),
            animate('.75s ease-out', 
                    style({ position: 'relative', right: 0, opacity: 0.8 }))
          ]
        ),
        transition(
          ':leave',  [
            style({ position: 'relative', right: 0, opacity: 0.8 }),
            animate('.2s ease-in', 
                    style({  position: 'relative', right: '5em', opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class HomeServicesComponent implements OnInit {

  public _services = [
    {
      header: "We don't just build, we relate",
      content: "We won't simply just build applications as you ask us to. While we understand that nobody could truly value your processes as much as you do, we at Zenify, will analyze and try to understand as much of your processes as possible so we can provide you tailor-fitted solutions and suggestions to help further improve your business."
    },
    {
      header: "Client satisfcation is our topmost priority",
      content: "While we also offer you inputs and ideas on how to build and design your processes, we value more what could satisfy you. We will keep you in touch and in the loop when making decisions as we build your application."
    },
    {
      header: "We deliver what you need and more",
      content: "Our well-organized team is here to make sure nothing gets left out. From official meetings to casual talks, we want to get to know you and your business so that we won't fall short of what you need from us."
    },
    {
      header: "Affordable software development",
      content: "One of the primary considerations that affect software development costs is the location. Our team is operating in the Philippines, so we can guarantee you affordable rates without compromising in quality."
    },
    {
      header: "Your projects promote growth",
      content: "We continually seek out developers who are driven but have had very limited opportunities for growth in their careers. Every project you start with us is an opportunity for them to get trained and equipped on new skills and modern industry standards."
    },
    {
      header: "We're with you from start to finish",
      content: "Our diverse team of talents will see your project through from designing your brand and building your application all the way to going live. But we won't stop there - we will also offer to maintain your application post-development for up to 3 months free of charge which includes improving your SEO ratings and securing your application. "
    }
  ];

  public _mobileView: boolean;
  public _tabletView: boolean;
  public _2kView: boolean;
  public _4kView: boolean;
  public _scrollPosition: number = 0;
  public _windowPosition: number = 0;
  private _screenWidth: number;

  constructor(
    @Inject(PLATFORM_ID) private platform: Object,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platform)) {
      this._screenWidth = window.innerWidth;
    }
    this._mobileView = this._screenWidth < 768;
    this._tabletView = this._screenWidth <= 1366 && this._screenWidth >= 768;
    this._2kView = this._screenWidth >= 2560;
    this._4kView = this._screenWidth >= 3840;
    this.listenToScrollable();
  }

  public showFirst() {
    return this._2kView || this._mobileView || this._tabletView;
  }

  public isAtPosition(position: number, index: number) {
    return this._scrollPosition >= this.offsetPosition(position, index);
  }

  private offsetPosition(position: number, count: number) {
    if (this._4kView) {
      if (count === 2) {
        return position + 400;
      }
      return position + (count * 300);
    }

    if (this._2kView) {
      return position + (count * 100);
    }

    if (this._tabletView) {
      if (count === 6) {
        return position - (count * 75);
      }
      return position - (count * 30);
    }

    if (this._mobileView) {
      return position + (count * 100);
    }

    return position;
  }

  private listenToScrollable() {
    this.document.getElementsByClassName("scrollable-container").item(0).addEventListener('scroll', (e:any) => {
      this._scrollPosition = e.target.scrollTop;
    });
  }

  @HostListener('window:scroll', ['$event']) 
  private setScrollPosition(event) {
    if (isPlatformBrowser(this.platform)) {
      this._windowPosition = window.pageYOffset;
    }
  }
}
