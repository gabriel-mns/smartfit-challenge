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

  legendas = [
    {
      titulo: 'Máscara',
      restricoes:[
        {
          tipo: 'Obrigatório',
          icone: 'required-mask.png'
        },
        {
          tipo: 'Recomendado',
          icone: 'recommended-mask.png'
        }
      ]
    },
    {
      titulo: 'Toalha',
      restricoes:[
        {
          tipo: 'Obrigatório',
          icone: 'required-towel.png'
        },
        {
          tipo: 'Recomendado',
          icone: 'recommended-towel.png'
        }
      ]
    },
    {
      titulo: 'Bebedouro',
      restricoes:[
        {
          tipo: 'Parcial',
          icone: 'partial-fountain.png'
        },
        {
          tipo: 'Proibido',
          icone: 'not_allowed-fountain.png'
        }
      ]
    },
    {
      titulo: 'Vestiários',
      restricoes:[
        {
          tipo: 'Liberado',
          icone: 'allowed-lockerroom.png'
        },
        {
          tipo: 'Proibido',
          icone: 'closed-lockerroom.png'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {

    console.log(this.listaUnidades);

  }

}
