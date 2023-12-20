import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent implements OnInit{

  @Input() pensamento = {
    conteudo: 'I love Angiular',
    autoria: 'Kamilly',
    modelo: 'modelo3'
  }
  constructor(){

  }

  ngOnInit(): void {

  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
        return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
