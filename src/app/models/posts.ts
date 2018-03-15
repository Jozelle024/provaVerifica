export class Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    constructor(_userId: number, _id: number, _title: string, _body: string) {
        this.userId = _userId;
        this.id = _id;
        this.title = _title;
        this.body = _body;
    }
}
