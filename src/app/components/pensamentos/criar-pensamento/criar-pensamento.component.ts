import { Component, OnInit } from '@angular/core';
import { Pensamentos } from '../pensamentos';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit{

  pensamento: Pensamentos = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'O que está pensando?'
  }


constructor(){}

ngOnInit(): void {}

criarPensamento(){
 alert("Novo pensamento criado")
}

cancelarPensamento(){
alert("cancelado")
}

}
