import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'zen-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public currentYear() {
    return new Date().getFullYear();
  }

  public redirectToFAQ() {
    this.router.navigate(['/'], { fragment: 'faq' })
  }
}
