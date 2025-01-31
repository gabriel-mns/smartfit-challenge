import { Component, Input } from '@angular/core';
import { Unidade } from '../../types/unidade.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cartao',
  imports: [CommonModule],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.scss'
})
export class CartaoComponent {

  @Input() unidade !: Unidade;

}
