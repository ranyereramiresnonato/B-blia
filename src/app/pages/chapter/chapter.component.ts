import { Component } from '@angular/core';
import {velhoTestamento, novoTestamento} from '../../consts/books'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class ChapterComponent {
  velhoTestamento = velhoTestamento;
  novoTestamento = novoTestamento;
  isNewTestament:boolean = false;
  book:string | null = "";

  constructor(private route: ActivatedRoute){
   this.route.queryParamMap.subscribe(params => {
      this.isNewTestament = params.get('isNewTestament') == "true";
      this.book = params.get('book')
    });
  }
}
