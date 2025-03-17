export class Article {
    Title: string;
    Link: string;
    votes: number;
    constructor(title: string, link: string, votes?: number) {
        this.Title = title;
        this.Link = link;
        this.votes = votes || 0;
    }
    voteUp(): void {
        this.votes += 1;
    }
    voteDown(): void {
        this.votes -= 1;
    }
}