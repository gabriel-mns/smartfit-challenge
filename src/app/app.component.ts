import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FormComponent } from "./components/form/form.component";
import { ListaCartoesComponent } from "./components/lista-cartoes/lista-cartoes.component";
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Unidade } from './types/unidade.interface';
import { UnidadeService } from './services/busca-unidades.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FormComponent, ListaCartoesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  mostrarLista = new BehaviorSubject(false);
  listaUnidades: Unidade[] = [];

  constructor(private unidadeService:UnidadeService){}

  whenSubmitted(){

    this.mostrarLista.next(true);
    this.listaUnidades = this.unidadeService.buscarUnidadesFiltradas();

  }

}
