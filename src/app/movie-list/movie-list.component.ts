import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { lists, movies as mockMoviesList } from "../data";
import { Movie } from "../movie-browse/movie-browse.component";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})

export class MovieListComponent implements OnInit {
  list: list;
  movies: Movie[];
  constructor(
    private route: ActivatedRoute
  )
   {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const listIdFromRoute = Number(routeParams.get("listId"));
    this.list = lists.find(list => list.id === listIdFromRoute);
    const movies = this.list.movies.map((movieId) => {
      return mockMoviesList.find((movie) => movie.id === movieId) as Movie;
    });
    this.movies = movies;
    console.log(this.movies);
  }
}

export interface list {
  id: number,
  name: string,
  movies: number[]
}
