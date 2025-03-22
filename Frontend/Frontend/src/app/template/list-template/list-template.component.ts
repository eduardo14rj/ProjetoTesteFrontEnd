import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-list-template',
  standalone: false,
  templateUrl: './list-template.component.html',
  styleUrl: './list-template.component.css'
})
export class ListTemplateComponent {
  pageTitle: string = 'Título';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const childRoute = this.route.firstChild;
      if (childRoute && childRoute.snapshot.data['pageTitle']) {
        this.pageTitle = childRoute.snapshot.data['pageTitle'];
      }
    });;
  }	


  changeTitle(newTitle: string) {
    this.pageTitle = newTitle;
  }

}
