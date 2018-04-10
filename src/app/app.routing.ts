import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { YourCollectionComponent } from './your-collection/your-collection.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search/search.component';
import { InputComponent } from './input/input.component';


const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'your-collection',
    component: YourCollectionComponent
  },
  {
    path: 'catalogue',
    component: CatalogueComponent
  },
  {
    path: 'display',
    component: DisplayComponent
  },
  {
    path: 'inputing',
    component: InputComponent
  }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
