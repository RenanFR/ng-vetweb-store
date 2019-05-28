import { Component, Renderer, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { TokenService } from './shared/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private titleHandler: Title,
    private router: Router,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute
  ){ }
  
  ngOnInit(): void {
    document.body.classList.remove('bg-dark');
    this.tokenService.getUser().subscribe((user) => {
      localStorage.setItem('user', user.sub);
    });
    this.router.events
      .pipe(filter((routeEvent) => routeEvent instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((routeItem) => {
        while (routeItem.firstChild) {
          routeItem = routeItem.firstChild;
          return routeItem;
        }
      }))
      .pipe(switchMap((currentRoute) => currentRoute.data))
      .subscribe((dataPropertiesFromRoute) => this.titleHandler.setTitle(dataPropertiesFromRoute.title));
  }

}
