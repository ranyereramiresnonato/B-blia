import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   items = [
            {
                label: 'Router',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Installation',
                        route: '/installation'
                    },
                    {
                        label: 'Configuration',
                        route: '/configuration'
                    }
                ]
            },
            {
                label: 'Programmatic',
                icon: 'pi pi-link',
                command: () => {
                    this.router.navigate(['/installation']);
                }
            },
            {
                label: 'External',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Angular',
                        url: 'https://angular.io/'
                    },
                    {
                        label: 'Vite.js',
                        url: 'https://vitejs.dev/'
                    }
                ]
            }
        ];

        constructor(private router:Router){

        }
}
