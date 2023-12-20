import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit{

  pensamento = {
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
