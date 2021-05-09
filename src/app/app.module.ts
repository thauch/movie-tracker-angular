
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomNavComponent } from "./bottom-nav/bottom-nav.component";
import { MovieBrowseComponent } from "./movie-browse/movie-browse.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieListsComponent } from './movie-lists/movie-lists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BottomNavModule } from 'ngx-bottom-nav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  imports: [
    BottomNavModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: MovieListsComponent },
      { path: "browse", component: MovieBrowseComponent },
      { path: "lists", component: MovieListsComponent },
      { path: "lists/:listId", component: MovieListComponent }
    ]),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    BottomNavComponent,
    MovieBrowseComponent,
    MovieListComponent,
    MovieListsComponent,
    TopBarComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
