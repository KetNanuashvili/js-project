
let mainWraperPost = document.getElementById("post-wraperBlock");
let postOverlay = document.getElementById("overlay");
let overlayContent = document.getElementById("postcontent");
let overlayClose = document.getElementById("close");

// ჩვენი მთავარი ფუნქცია, რომლის საშუალებითაც ვასრულებთ ajax მოთხვონას სერვერზე
function ajax(url, callback) {
  let requistPost = new XMLHttpRequest();
  requistPost.open("GET", url);
  requistPost.addEventListener("load", function () {
    // let response = requistPost.responseText;
    // let dataResponse = JSON.parse(response);
    let dataResponse = JSON.parse(requistPost.responseText);
    callback(dataResponse);
  });
  requistPost.send();
}

// ამ ფუქნციის საშუალებით ვქმნით სათითაოდ თითოეული პოსტის დივს
function createPostRenderLogic(item) {
  const divWraper = document.createElement("div");
  divWraper.classList.add("posts");
  divWraper.setAttribute("data-id", item.id);

  const h3Post = document.createElement("h3");
  h3Post.innerText = item.id;
  h3Post.classList.add("h3Post");

  const h2Post = document.createElement("h2");
  h2Post.innerText = item.category;
  h2Post.classList.add("h2Post");

  const h2Post2 = document.createElement("h2");
  h2Post2.innerText = item.name;
  h2Post2.classList.add("h2Post2");

  const span =document.createElement('span');
  span.innerText='price $'
 span.setAttribute('class', 'span-posts');

  const h2Post3 = document.createElement("h2");
  h2Post3.innerText = item.price;
  h2Post3.classList.add("h2Post3");

  const backgroundImg3 =document.createElement('div');
  backgroundImg3.setAttribute('class', 'background-img3');

  divWraper.appendChild(h3Post);
  divWraper.appendChild(h2Post);
  divWraper.appendChild(h2Post2);
  divWraper.appendChild(span);
  divWraper.appendChild(h2Post3 );
  divWraper.appendChild(backgroundImg3)



   mainWraperPost.appendChild(divWraper);
}


// აქ ვიძახებთ ჩვენს მთავარ ajax ფუნქციას
ajax("https://private-anon-08d0434633-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank&fbclid=IwAR0hNgvvmzUgq_xQ5QS-nNXMtdONo9Xc8Ou1DitHsGzuy15qkdxmDH5nroA", function (dataResponse) {
  dataResponse.forEach((item) => {
    createPostRenderLogic(item);
  });
});


//accordion
let accordion = document.querySelectorAll('.container');

for (let item of accordion) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    })
}
