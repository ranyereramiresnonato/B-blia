import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Book {
  abbrev: string;
  chapters: string[][];
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private jsonUrl = 'books.json';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.jsonUrl);
  }

    getVersesByChapter(abbrev: string, chapterNumber: number): Observable<string[] | null> {
    return this.getBooks().pipe(
      map(books => {
        const book = books.find(b => b.abbrev === abbrev);
        if (!book) return null;

        const chapterIndex = chapterNumber - 1;
        if (chapterIndex < 0 || chapterIndex >= book.chapters.length) return null;

        return book.chapters[chapterIndex];
      })
    );
  }
}
