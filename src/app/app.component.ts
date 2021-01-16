import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngprime-ngrx-playground';

  items: MenuItem[] = [
    {
      label: 'Example',
      icon: 'pi pi-star',
      routerLink: '/example'
    },
    {
      label: 'Store',
      icon: 'pi pi-star',
      routerLink: '/store'
    },
    {
      label: 'File',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          { label: 'Project' },
          { label: 'Other' },
        ]
      },
        { label: 'Open' },
        { label: 'Quit' }
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        { label: 'Delete', icon: 'pi pi-fw pi-trash' },
        { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
      ]
    }
  ];

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
