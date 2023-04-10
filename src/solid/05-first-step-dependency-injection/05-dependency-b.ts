import { JsonDataBaseService, LocalDataBaseService } from "./05-dependency-c";

interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    //* inyectar dependencia en el constructor para mejorar el código
    //! inyectar dependencias !== inversión de dependencias
    constructor(
        private postProvider: JsonDataBaseService
    ) { }

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        // const jsonDB = new JsonDataBaseService();
        // this.posts = await jsonDB.getPosts();

        // en vez de las dos líneas anteriores podríamos
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}
