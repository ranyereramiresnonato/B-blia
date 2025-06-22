import { Component } from '@angular/core';
import {velhoTestamento, novoTestamento} from '../../consts/books'
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class ChapterComponent {
  velhoTestamento = velhoTestamento;
  novoTestamento = novoTestamento;
  isNewTestament:boolean = false;
  book:string | null = "";
  quantity: number | undefined = 0;
  bookName: string | undefined = "";
  chapters: number[] = []; 

  constructor(private route: ActivatedRoute){
   this.route.queryParamMap.subscribe(params => {
      this.isNewTestament = params.get('isNewTestament') == "true";
      this.book = params.get('book')
      this.getData();
    });
  }

  getData(){
    if(this.isNewTestament){
      this.quantity = this.novoTestamento.find(x => x.nome == this.book)?.capitulos;
      this.bookName = this.novoTestamento.find(x => x.nome == this.book)?.titulo;
    }
    else{
      this.quantity = this.velhoTestamento.find(x => x.nome == this.book)?.capitulos;
      this.bookName = this.velhoTestamento.find(x => x.nome == this.book)?.titulo;
    }
    
    this.chapters = this.generateList(Number(this.quantity));
  }

  generateList(quantity:number) {
    return Array.from({ length: quantity }, (_, i) => i + 1);
  }
}
