import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-list-template',
  standalone: false,
  templateUrl: './list-template.component.html',
  styleUrl: './list-template.component.css'
})
export class ListTemplateComponent implements OnInit {
  @Input() pageTitle: string = 'Título';
  @Input() searchPlaceholder: string = "";
  public selectOption: string = "Clientes";

  constructor(private route: ActivatedRoute, private router: Router, private cd: ChangeDetectorRef) { }

  ngOnInit() {

  }

  changeTitle(newTitle: string) {
    this.pageTitle = newTitle;
    this.cd.detectChanges();
  }

  changePlaceholderSearch(placeholder: string) {
    this.searchPlaceholder = placeholder;
    this.cd.detectChanges();
  }

}
