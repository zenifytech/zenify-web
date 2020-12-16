import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'zen-home-about-hero',
  templateUrl: './home-about-hero.component.html',
  styleUrls: ['./home-about-hero.component.scss']
})
export class HomeAboutHeroComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("About | Zenify Software Solutions, Co.");
  }

}
