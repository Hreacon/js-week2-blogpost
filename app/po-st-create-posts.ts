/// <reference path="po-st-classes-interfaces.ts" />
/// <reference path="po-st-listing-functions.ts" />
var posts = [];
posts.push(new Blog.Post("title", "body"));
posts.push(new Blog.Post("This is a title", "this is a body"));
posts.push(new Blog.Post("This is a bad", "Naming convention"));

$(document).ready(function() {
  $('.blogForm').submit(function(event) {
    event.preventDefault();
    posts = Blog.makePost(posts); 
    Blog.listPosts(posts);
  });
  Blog.listPosts(posts);

});
