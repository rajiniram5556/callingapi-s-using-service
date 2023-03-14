import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }
  getposts(){
    return this.http.get(this.url);
  }
}
