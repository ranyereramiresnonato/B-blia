import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items = [
    {
      label: 'Livros',
      icon: 'pi pi-book',
      routerLink: ['/home'],
    },
  ];

  constructor(private router: Router) {}
}
