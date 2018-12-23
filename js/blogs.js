function initGhost() {
  ghost.init({
    clientId: "ghost-frontend",
    clientSecret: "0373217d1bbe"
  });
}

function getFirstParagraph(html) {
  var jquery = $(html);
  return jquery.find('p').eq(0).text();
}

function fetchBlogs() {
  var $blogSectionEl = $('#md-blog-section');
  $blogSectionEl.hide();
  var url = ghost.url.api('posts', {limit: 2, filter: 'tags:[featured]'}).replace('http:', 'https:').replace('mechanicdesk-blog.ghost.io', 'www.mechanicdesk.com.au/blog');
  $.get(url).done(function(result) {
    if(result.posts && result.posts.length > 0) {
      
      var $blogPostsEl = $('#md-blog-posts-row');
      $blogSectionEl.show();
      $blogPostsEl.empty();
      $.each(result.posts, function (i, post) {
        var html = getFirstParagraph(post.html) + '...';
        $blogPostsEl.append(
          '<div class="col-md md-blog-post-col">'+
            '<div class="md-blog-post">'+
              '<a href="'+post.url+'"><img src="'+post.feature_image+'" class="md-thumbnails"/></a>'+
              '<div class="md-blog-preview">'+
                '<h3>'+ post.title +'</h3>'+
                '<p><span class="md-blog-content-preview">'+ html +'</span><a href="'+post.url+'"> view more</a></p>'+
              '</div>'+
            '</div>'+
          '</div>'
        );
      });
    }
  });
}

$(function() {
  initGhost();
  fetchBlogs();
});
