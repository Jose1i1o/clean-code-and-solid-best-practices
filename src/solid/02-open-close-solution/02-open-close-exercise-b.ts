import { HttpClient } from "./02-open-close-exercise-c";

export class TodoService {

  constructor(private http: HttpClient) { }

  async getTodoItems() {

    const data = this.http.get('https://jsonplaceholder.typicode.com/todos');
    return data;
  }
}


export class PostService {
  constructor(private http: HttpClient) { }

  async getPosts() {
    const data = this.http.get('https://jsonplaceholder.typicode.com/posts');
    return data;
  }
}


export class PhotosService {

  constructor(private http: HttpClient) { }

  async getPhotos() {
    const data = this.http.get('https://jsonplaceholder.typicode.com/photos');
    return data;
  }

}