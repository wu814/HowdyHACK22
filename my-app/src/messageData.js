var posts = [{
    topic: 'localstorage forum',
        user: 'John Doe' }, {
        topic: 'another topic',
        user: 'Eleina'
}]

html = '';

for(var i=0; i<posts.length; i++) {
    html += '<div class="post">';
    html += '<b>' + posts[i].topic + '</b> by ' + posts[i].user;
    html += '</div>';
}

//output the html somehow, with jquery that could be
$("body").append(html);