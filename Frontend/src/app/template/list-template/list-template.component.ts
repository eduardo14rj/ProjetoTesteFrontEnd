import { ChangeDetectorRef, Component, EventEmitter, input, Input, OnInit, output, Output, ViewChild } from '@angular/core';
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
  @Input() searchValue: string = "";
  @Input() createText: string = "Criar novo item";
  @Output() SearchEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() CreateEmitter: EventEmitter<void> = new EventEmitter<void>();
  public selectOption: string = "Clientes";


  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    const childRoute = this.route.firstChild;
    if (childRoute && childRoute.snapshot.data['pageTitle']) {
      this.pageTitle = childRoute.snapshot.data['pageTitle'];
      this.selectOption = childRoute.snapshot.data['pageTitle'];
    }


  }

  changeTitle(newTitle: string) {
    this.pageTitle = newTitle;
    this.cd.detectChanges();
  }

  changePlaceholderSearch(placeholder: string) {
    this.searchPlaceholder = placeholder;
    this.searchValue = "";
    this.cd.detectChanges();
  }

  changeSearchValue(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchValue = value;
  }

  changeCreateText(label: string) {
    this.createText = label;
    this.cd.detectChanges();
  }

  search() {
    this.SearchEmitter.emit(this.searchValue);
  }

  create() {
    this.CreateEmitter.emit();
  }

}
