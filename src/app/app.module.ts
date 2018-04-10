import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './shared/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { YourCollectionComponent } from './your-collection/your-collection.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AboutComponent } from './about/about.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search/search.component';
import { InputComponent } from './input/input.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    YourCollectionComponent,
    CatalogueComponent,
    AboutComponent,
    //NavComponent,
    HeaderComponent,
    FooterComponent,
    DisplayComponent,
    SearchComponent,
    InputComponent,
    EditComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'ia-app-4473e'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot([
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
              },
              {
                path: 'edit',
                component: EditComponent
              }



            ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
