/// <reference path="po-st-classes-interfaces.ts" />

module Blog
{
  export var makePost = function(posts: Post[]) {
    var postTitle: string = $("[name=title]").val()
    var postBody: string = $("[name=body]").val()
    var post: Post = new Blog.Post(postTitle, postBody);
    if(post.validation()) {
      posts.push(post);
    }
    return posts;
  }
}
