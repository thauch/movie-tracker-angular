import { Component } from "@angular/core";

import { movies } from "../data";

@Component({
  selector: "app-movie-browse",
  templateUrl: "./movie-browse.component.html",
  styleUrls: ["./movie-browse.component.css"]
})

export class MovieBrowseComponent {
  movies = movies;
}

export interface Movie {
  id: number;
  name: string;
  rating: string;
  runtime: string;
}
