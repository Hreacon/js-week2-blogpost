module Blog
{
  export interface IPost {
    title:string;
    body:string;
    date:Date;
    votes:number;
    wordCount():number; // count words in body
    validation():boolean; // check for a valid post
    upVote():void; // add a vote
    downVote():void; // remove a vote
  }
  export class Post implements IPost
  {
    date: Date = new Date();
    votes: number = 0;
    constructor(public title: string, public body: string) {}

    wordCount():number {
      return this.body.split(' ').length;
    }
    validation():boolean {
      return (this.title.length<20 && this.body.length<500 && this.title.length>0 && this.body.length>0);
    }
    upVote() {
      this.votes++;
    }
    downVote() {
      this.votes--;
    }
  }
}
