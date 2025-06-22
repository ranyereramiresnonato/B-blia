import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapter-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapter-detail.component.html',
  styleUrl: './chapter-detail.component.scss'
})
export class ChapterDetailComponent {

  book:string | null = "";
  chapter:number | undefined = 0;
  verses:string[] | null = [];

  constructor(
    private route:ActivatedRoute,
    private bookService:BookService
  ){
    this.route.queryParamMap.subscribe(params => {
      this.book = params.get('book')
      this.chapter = Number(params.get('chapter'))
      this.getChapter()
    });
  }

  getChapter(){
  this.bookService.getVersesByChapter(this.book ?? '', this.chapter ?? 0).subscribe({
    next:(data) => {
      this.verses = data;
    }
  })
}
}
