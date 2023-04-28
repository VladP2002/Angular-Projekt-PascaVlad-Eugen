import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list'
import { config } from './config'
import { FirebaseAppModule, initializeApp, provideFirebaseApp} from '@angular/fire/app'
import { FirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SeePlayersComponent } from './see-players/see-players.component';
import { MatTableModule } from '@angular/material/table'
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { trigger, state, style, transition, animate } from '@angular/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterPlayerComponent,
    GalleryComponent,
    SeePlayersComponent,
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(config.firebase)),
    FirebaseAppModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FirestoreModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
