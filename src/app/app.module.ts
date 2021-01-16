import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreComponent } from './components/store/store.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { CounterComponentComponent } from './components/store/counter-component/counter-component.component';
import { FormsModule } from '@angular/forms';
import { SneakyCounterReadComponent } from './components/store/sneaky-counter-read/sneaky-counter-read.component';
import { SneakyCounterWriteComponent } from './components/store/sneaky-counter-write/sneaky-counter-write.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    StoreComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    CounterComponentComponent,
    SneakyCounterReadComponent,
    SneakyCounterWriteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    PrimeNgModule,
    StoreModule.forRoot(reducers, { metaReducers }) // added with ng add non minimal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
