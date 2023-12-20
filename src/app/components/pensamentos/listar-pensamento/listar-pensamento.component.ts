import { Component, OnInit, NgModule } from '@angular/core';
import { expand } from 'rxjs';
import { Pensamentos } from '../pensamentos';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit{

  listaPensamento: Pensamentos[] = [
  ];

  constructor(){}

  ngOnInit(): void {

  }

}
