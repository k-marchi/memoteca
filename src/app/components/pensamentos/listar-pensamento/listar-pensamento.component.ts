import { Component, OnInit, NgModule } from '@angular/core';
import { expand } from 'rxjs';
import { Pensamentos } from '../pensamentos';
import { PensamentoService } from '../../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit{

  listaPensamentos: Pensamentos[] = [
  ];

  constructor( private service: PensamentoService){}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

}
