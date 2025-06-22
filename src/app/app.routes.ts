import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChapterComponent } from './pages/chapter/chapter.component';
import { ChapterDetailComponent } from './pages/chapter-detail/chapter-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'chapter', component: ChapterComponent },
    { path: 'chapter-detail', component: ChapterDetailComponent },
];
