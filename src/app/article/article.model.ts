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
    // domain() is a utility function that extracts // the domain from a URL, which we'll explain shortly 
    domain(): string {
         try
          {
            // e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.Link.split('//')[1];
            // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0]; 
        }
        catch (err){
            return "null";
        }
    }
}