import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChapterComponent } from './pages/chapter/chapter.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'chapter', component: ChapterComponent },
];
