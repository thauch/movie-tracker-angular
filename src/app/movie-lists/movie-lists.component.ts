import { Component } from "@angular/core";
import { lists } from "../data";

@Component({
  selector: "app-movie-lists",
  templateUrl: "./movie-lists.component.html",
  styleUrls: ["./movie-lists.component.css"]
})
export class MovieListsComponent {
  lists = lists;
}
