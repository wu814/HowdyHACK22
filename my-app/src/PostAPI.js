import PostList from "./database.js";

export default class PostAPI {

// post list
static getAllPosts() {
  const posts = JSON.parse(localStorage.getItem(PostList || "[]"));

  return posts.sort((a,b) => {
    return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
  });
}

// save post
static savePost(postToSave){
    const posts = PostAPI.getAllPosts();
    const existing = posts.find(post => post.id == postToSave);
    
    // save over
    if(existing){
        existing.title = postToSave.title;
        existing.body = postToSave.body;
        existing.updated = new Date().toISOString();
    }

    // save new
    else{
        do{
        postToSave.id = Math.floor(Math.random() * 1000000);
        }  while (posts.find(post => post.id == postToSave.id));
        postToSave.updated = new Date().toISOString();
        notes.push(postToSave);
    }

    localStorage.setItem(PostList, JSON.stringify(posts));
}

static deletePost(id) {
    const posts = PostAPI.getAllPosts();
    const newPosts = posts.filter(post => post.id != post.id);

    localStorage.setItem(PostList, JSON.stringify(newPosts));
}
}

