import { Component, OnInit } from '@angular/core';
import { Pensamentos } from '../pensamentos';
import { PensamentoService } from '../../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit{

  pensamento: Pensamentos = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }


constructor( private service: PensamentoService,
  private router: Router){}

ngOnInit(): void {}

criarPensamento(){
  this.service.criar(this.pensamento).subscribe(() => {
    this.router.navigate(['/listarPensamento'])
  })
}

cancelarPensamento(){
  this.router.navigate(['/listarPensamento'])
}

}
