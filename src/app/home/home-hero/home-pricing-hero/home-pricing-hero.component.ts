import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'zen-home-pricing-hero',
  templateUrl: './home-pricing-hero.component.html',
  styleUrls: ['./home-pricing-hero.component.scss'],
  animations: [
    trigger(
      'slide-up', [
        transition(
          ':enter',  [
            style({ 'position':'relative', bottom: '-7.5rem', opacity: 0 }),
            animate('.75s ease-out', 
                    style({ 'position':'relative', bottom: '0', opacity: 0.8 }))
          ]
        ),
        transition(
          ':leave',  [
            style({ 'position': 'relative', bottom: '0', opacity: 0.8 }),
            animate('.5s ease-in', 
                    style({ 'position': 'relative', bottom: '-5rem', opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class HomePricingHeroComponent implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Pricing | Zenify Software Solutions, Co.");
  }

  public redirectToFAQ() {
    this.router.navigate(['/'], { fragment: 'faq' })
  }
}
