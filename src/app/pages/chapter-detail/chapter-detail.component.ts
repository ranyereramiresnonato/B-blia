import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { livros } from '../../consts/books';

@Component({
  selector: 'app-chapter-detail',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './chapter-detail.component.html',
  styleUrl: './chapter-detail.component.scss',
})
export class ChapterDetailComponent {
  book: string | null = '';
  chapter: number | undefined = 0;
  verses: string[] | null = [];
  livros = livros;
  bookName: string | null | undefined = '';

  constructor(
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private route: ActivatedRoute,
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private bookService: BookService,
  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.book = params.get('book');
      this.chapter = Number(params.get('chapter'));
      this.getChapter();
    });
  }

  getChapter() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.bookService
      .getVersesByChapter(this.book ?? '', this.chapter ?? 0)
      .subscribe({
        next: (data) => {
          this.verses = data;
          this.bookName = livros.find((x) => x.nome == this.book)?.titulo;
        },
      });
  }

  goBack() {
    window.history.back();
  }

  nextChapter() {
    const currentIndex = this.livros.findIndex((l) => l.nome === this.book);
    if (currentIndex === -1) return;

    let nextBook = this.book;
    let nextChapter = (this.chapter ?? 0) + 1;

    const currentBookInfo = this.livros[currentIndex];

    if (nextChapter > currentBookInfo.capitulos) {
      if (currentIndex + 1 < this.livros.length) {
        nextBook = this.livros[currentIndex + 1].nome;
        nextChapter = 1;
      } else {
        return;
      }
    }

    this.navigateToChapter(nextBook ?? '', nextChapter);
  }

  previousChapter() {
    const currentIndex = this.livros.findIndex((l) => l.nome === this.book);
    if (currentIndex === -1) return;

    let prevBook = this.book;
    let prevChapter = (this.chapter ?? 0) - 1;

    if (prevChapter < 1) {
      if (currentIndex > 0) {
        prevBook = this.livros[currentIndex - 1].nome;
        const prevBookInfo = this.livros[currentIndex - 1];
        prevChapter = prevBookInfo.capitulos;
      } else {
        return;
      }
    }

    this.navigateToChapter(prevBook ?? '', prevChapter);
  }

  navigateToChapter(book: string, chapter: number) {
    const url = `?book=${book}&chapter=${chapter}`;
    window.history.pushState({}, '', url);

    this.book = book;
    this.chapter = chapter;
    this.getChapter();
  }
}
