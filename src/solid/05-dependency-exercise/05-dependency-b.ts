import { LocalDataBaseService } from "./05-dependency-c";

interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor() { }

    async getPosts() {
        const jsonDB = new LocalDataBaseService(); // Dependencia oculta que debemos de mejorar
        this.posts = await jsonDB.getFakePosts();

        return this.posts;
    }
}
