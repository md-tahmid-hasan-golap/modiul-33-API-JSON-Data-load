
const post = () => {
  fetch ("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    display (data)
  })
}

const display = (users) => {
    const posts = document.getElementById("posts")
    for (let user of users){
        const li = document.createElement("li");
        li.innerText = user.id;
        posts.appendChild(li)
    }

}