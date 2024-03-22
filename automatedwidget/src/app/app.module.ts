import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetComponent } from './components/widget/widget.component';
import { HeaderComponent } from './components/header/header.component';
import { TokenComponent } from './components/token/token.component';
import './app.component.css';
import { SliderComponent } from './components/slider/slider.component';
import { CreditcardComponent } from './components/creditcard/creditcard.component';
import { HomeComponent } from './components/home/home.component';
import { LogoscrollerComponent } from './components/logoscroller/logoscroller.component';
import { ErrorComponent } from './components/error/error.component';
import { StepsComponent } from './components/token/steps/steps.component';
import { GuideComponent } from './components/token/guide/guide.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';




@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    HeaderComponent,
    TokenComponent,
    SliderComponent,
    CreditcardComponent,
    HomeComponent,
    LogoscrollerComponent,
    ErrorComponent,
    StepsComponent,
    GuideComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule
    ],
  providers: [
    provideAnimationsAsync('noop'),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
