import { Component, OnInit } from '@angular/core';
import { Pensamentos } from '../pensamentos';
import { PensamentoService } from '../../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamentos',
  templateUrl: './excluir-pensamentos.component.html',
  styleUrls: ['./excluir-pensamentos.component.scss']
})
export class ExcluirPensamentosComponent implements OnInit {

  pensamento: Pensamentos = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  }
constructor(
  private service: PensamentoService,
  private router: Router,
  private rout: ActivatedRoute){}

ngOnInit(): void{
  const id = this.rout.snapshot.paramMap.get('id')
  this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) =>{
    this.pensamento =  pensamento
  })
}

excluirPensamento(){
  if(this.pensamento.id){
    this.service.excluir(this.pensamento.id).subscribe(() =>{
      this.router.navigate(['/listarPensamento']);
    })
  }
}

cancelarPensamento(){
  this.router.navigate(['/listarPensamento'])
}


}
