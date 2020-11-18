import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteMatcherService {

  constructor(
    private router: Router
  ) { }

  public matches(route: string): boolean {
    return this.childRoute() && route === this.childRoute()
      .segments
      .map(it => it.path)
      .join('/');
  }

  public includes(route: string): boolean {
    return this.childRoute() && this.childRoute()
      .segments
      .map(it => it.path)
      .join('/')
      .includes(route);
  }

  public startsWith(route: string): boolean {
    return this.childRoute() && this.childRoute()
      .segments
      .map(it => it.path)
      .join('/')
      .startsWith(route);
  }

  public endsWith(route: string): boolean {
    return this.childRoute() && this.childRoute()
      .segments
      .map(it => it.path)
      .join('/')
      .endsWith(route);
  }

  public homePage(): boolean {
    return this.childRoute() === undefined ? true : false;
  }

  private childRoute() {
    return this.router.parseUrl(this.router.url)
      .root
      .children
      .primary;
  }
}
