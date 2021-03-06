
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { ChatModule } from './chat/chat.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ChatinterfaceComponent } from './chatinterface/chatinterface.component';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';
import { RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { AcumenComponent } from './acumen/acumen.component';
import { CardComponent } from './card/card.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
// import { AngularDraggableModule } from 'angular2-draggable';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { SpeechRecognitionService } from './chat/speech-recognition.service';
import 'hammerjs';
// import { MaterialModule } from '@angular/material';
// import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', component: WelcomescreenComponent ,   data: { animation: { value: 'data' } } },
  { path: 'chatbot' , component: ChatinterfaceComponent,   data: { animation: { value: 'data' } }},
  { path: 'events' , component: EventsComponent,   data: { animation: { value: 'data' } }},
  { path: 'acumen' , component: AcumenComponent,   data: { animation: { value: 'data' } }},
  { path: 'sponsors' ,component: SponsorsComponent,data: { animation: { value: 'data' } }},
  { path: '**' , component: WelcomescreenComponent,data: { animation: { value: 'data' } }}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatinterfaceComponent,
    WelcomescreenComponent,
    EventsComponent,
    EventDetailComponent,
    AboutusComponent,
    LoginComponent,
    NavigationComponent,
    SponsorsComponent,
    AcumenComponent,
    CardComponent,
   
    
  ],
  imports: [
    BrowserModule,
    ChatModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    // BrowserAnimationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9yvhNr1XRwdTRR37R15HF-VfKtTDP3Bo'
    }),
    AgmSnazzyInfoWindowModule,
    NoopAnimationsModule,
    NgbModule.forRoot(),
    // AngularDraggableModule,
  ],
  providers: [
    SpeechRecognitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// platformBrowserDynamic().bootstrapModule(AppModule);

