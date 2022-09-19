// RETRIEVE POSTS
// Get posts from

let posts;

const displayPosts = () => {

    fetch('https://ehealthbackend-project.herokuapp.com/api/health/blogs')
    .then(res => res.json())
    .then(data => {
      console.log(data);

      blogs = data.blogs;

      blogs.map(blog => {

        postElement = `

        <div class="blog-card">
        <input id="post-id" type="hidden" value="${blog.id}" />
        <div class="blog-card-banner">
          <img src="${blog.blog_file}" alt="" width="250" class="blog-banner-img">
        </div>

        <div class="blog-content-wrapper">

          <button onclick="getId(${blog.id})" class="blog-topic text-tiny">other</button>

          <h3>
            <a href="#" class="h3" id="post-title">${blog.title}</a>
          </h3>

          <p class="blog-text"> ${blog.description} </p>

          <div class="wrapper-flex">
            <div class="wrapper">
              <p class="text-sm">
                <time datetime="2021-09-13">Publish date ${blog.description}</time>
              </p>
            </div>

          </div>

        </div>

        </div> `;

    let blogPost = document.createElement('div');
    //  postCard.className = 'post-card';
     blogPost.classList.add('blog__post');
     blogPost.innerHTML = postElement;

     document.querySelector('.blog-card-group').appendChild(blogPost);

     blogPost.addEventListener('click', e => {
       console.log(blog.id);
       localStorage.setItem('blogId', blog.id)
     })
      });

    })
    .catch(err => console.log(err));

}

displayPosts();

// login and logout btn if user is logged in or out
const isLoggedIn = localStorage.getItem('userId');

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');

if (isLoggedIn) {
  loginBtn.style.display = "none";
}

else logoutBtn.style.display = "none";

logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  logout();
})

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.setItem('isLoggedIn', false);
  location.reload();
};




