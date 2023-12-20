import { Component, OnInit, NgModule } from '@angular/core';
import { expand } from 'rxjs';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit{

  listaPensamento = [{
    conteudo: 'Passo informações para o componente filho',
    autoria: 'Componente pai',
    modelo: 'modelo3'},
    {
    conteudo: 'Minha propriedade é decorada pelo @Input',
    autoria: 'Componente filho',
    modelo: 'modelo2'},
    {
      conteudo: 'Lorem ipsum dolor sit amets consecteLorem ipsum dolor sit amet consectetur, adipisicing elit. Officia vero amet ipsam reprehenderit dolorem, nihil blanditiis ea, odio quas obcaecati earum. Ipsam, non natus? Unde at culpa id impedit pariatur?tur, adipisicing elit. Officia vero amet ipsam reprehenderit dolorem, nihil blanditiis ea, odio quas obcaecati earum. Ipsam, non natus? Unde at culpa id impedit pariatur?',
      autoria: 'Componente filho',
      modelo: 'modelo1'},

  ];

  constructor(){}

  ngOnInit(): void {

  }

}
