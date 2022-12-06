document.getElementById('formPost').addEventListener('submit', savePost);

function savePost(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  console.log(description)
  // const date = new Date();
  // console.log(date.toLocaleString());

  let post = {
    title,
    description
  };

  if(localStorage.getItem('posts') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('posts', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('posts'));
    tasks.push(post);
    localStorage.setItem('posts', JSON.stringify(tasks));
  }

  getPosts();
  document.getElementById('formPost').reset();
  e.preventDefault();
}

function deletePost(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('posts'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
 localStorage.setItem('posts', JSON.stringify(tasks));
  getPosts();
}


function getPosts() {
  let tasks = JSON.parse(localStorage.getItem('posts'));
  let postsView = document.getElementById('posts');
  postsView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    //aktualny datum
    const date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();


    postsView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p> ${title} [${day}-${month}-${year}, ${hour}:${minute}:${second} AM]: ${description}
          <a href="#" onclick="deletePost('${title}')" class="btn btn-danger ml-5">Delete</a>
          </p>
        </div>
      </div>`;
  }
}

getPosts();


//<a href="#" onclick="deletePost('${title}')" class="btn btn-danger ml-5">Delete</a>
