import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {movies} from '../json/movies';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }
  movies =[];
  category = 'Title';
  searchTerm = '';
  ngOnInit(): void {
   this.movies = movies;
   Swal.fire({
    icon: 'success',
    title: 'Movies Data is collected from IMDB site by Web Scraping ',
    text: 'Using Python Beautiful Soup Library  '
    });
  }
  Change(event:any){
    const val = event.target.value;
    this.category = val;
  }

}
