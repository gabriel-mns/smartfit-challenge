import { Component, Input, OnInit } from '@angular/core';
import { UnidadeService } from '../../services/busca-unidades.service';
import { Unidade } from '../../types/unidade.interface';
import { CartaoComponent } from "../cartao/cartao.component";

@Component({
  selector: 'app-lista-cartoes',
  imports: [CartaoComponent],
  templateUrl: './lista-cartoes.component.html',
  styleUrl: './lista-cartoes.component.scss'
})
export class ListaCartoesComponent implements OnInit {

  @Input() listaUnidades:Unidade[] = [];

  constructor() { }

  ngOnInit(): void {

    console.log(this.listaUnidades);

  }

}
