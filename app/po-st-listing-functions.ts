/// <reference path="po-st-classes-interfaces.ts" />

module Blog
{
  export var listPosts = function(posts:Post[]) {
    $('.posts').html("");
    for(var post of posts)
    {
      console.log(post);
      console.log($(".template h1").html()+" h1");
      $(".template h1").html(post.title);
      $(".template p").html(post.body);
      $(".posts").append($(".template").html());
    }
  }
}
