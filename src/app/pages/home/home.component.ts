import { Component } from '@angular/core';
import {velhoTestamento, novoTestamento} from '../../consts/books'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private router:Router){

  }

  goToChapter(isNewTestament: boolean, book: string) {
  this.router.navigate(['/chapter'], {
    queryParams: {
      isNewTestament: isNewTestament,
      book: book
    }
  });
}
}
