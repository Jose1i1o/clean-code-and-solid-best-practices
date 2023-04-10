import localDataBasePost from './local-database.json';
import { Post } from './05-dependency-b';

//* Creamos la abstracción para permitir varias opciones. Principio Liskov + Open-Close
export abstract class PostProvider {

    abstract getPosts(): Promise<Post[]>

}

export class LocalDataBaseService implements PostProvider { // extender abstract

    constructor() { }

    async getPosts(): Promise<Post[]> {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }]
    }

}

export class JsonDataBaseService implements PostProvider {

    async getPosts() {
        return localDataBasePost;
    }

}

// add a new method

export class WebApiService implements PostProvider {

    async getPosts(): Promise<Post[]> {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json();

        return posts;

    }
}