import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListTemplateComponent } from '../../template/list-template/list-template.component';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  @ViewChild(ListTemplateComponent) listTemplate!: ListTemplateComponent;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.data.subscribe(data => {

      this.listTemplate.changeTitle("???");
    });
  }



}
