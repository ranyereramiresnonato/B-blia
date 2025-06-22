import { Component } from '@angular/core';
import {velhoTestamento, novoTestamento} from '../../consts/books'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  velhoTestamento = velhoTestamento;
  novoTestamento = novoTestamento;
}
