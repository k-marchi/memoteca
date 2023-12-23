import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentosComponent } from './components/pensamentos/excluir-pensamentos/excluir-pensamentos.component';

const routes: Routes = [
  {path: '',
  redirectTo: 'listarPensamento',
  pathMatch: 'full'
  },
  {path: 'criarPensamento',
  component: CriarPensamentoComponent
  },
  {path: 'listarPensamento',
  component: ListarPensamentoComponent
  },
  {path: 'pensamentos/excluirPensamento/:id',
  component: ExcluirPensamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
