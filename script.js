//nav bar
let navBar = document.getElementById('navigation');
let toggleBar = document.getElementById('toggle-menu');


toggleBar.addEventListener('click', function(){
    toggleBar.classList.toggle('toggleActive');
    navBar.classList.toggle('overlay');
}) 

/// slider

let data = [
    {
        id: 1,
        imageUrl:  "./images/1.jpg",
        title: "slide title 1",
      },
      {
        id: 2,
        imageUrl:
          "./images/2.jpg",
      },
      {
        id: 3,
        imageUrl:
        "./images/3.jpg",
      },
      {
        id: 4,
        imageUrl:
        "./images/4.jpg",
      },
];


const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const sliderContent = document.getElementById("slider-content");
let dotsChildElement = document.getElementsByClassName('child');
let sliderIndex = 0;

function createDivTag(item){
    const divtag = document.createElement('div');
    divtag.classList.add('slide');

    return divtag;
}

function createImgTag(item){
    const tagImage= document.createElement('img');
    tagImage.setAttribute('src', item.imageUrl);
    tagImage.setAttribute('alt', item.title);
    tagImage.classList.add('image-slider');

    
    return tagImage
}

function createH3Tag(item){
    const h3title=document.createElement('h3');
    h3title.innerHTML = item.title;

    return h3title
}

function createDots(){
    const dots = document.createElement('div');
    dots.classList.add('dots-parent');

    data.forEach(element => {
        const childDot =document.createElement('div')
        childDot.classList.add('child');
        childDot.setAttribute('data-id', element.id -1);
        dots.appendChild(childDot);

        childDot.addEventListener('click', function(){
          let id = event.target.getAttribute('data-id');
          sliderIndex = id;
          setSlide();
        })
    });

    return dots;
}

function setSlide(){
    sliderContent.innerHTML ="";
   const slideItem =createDivTag(data[sliderIndex]);
   const imgTag = createImgTag(data[sliderIndex]);
   const dots = createDots();

   slideItem.appendChild(imgTag);
   sliderContent.appendChild(slideItem);
   sliderContent.appendChild(dots);

   currentDotActive();
}
function currentDotActive (){
  dotsChildElement[sliderIndex].classList.add('activeDot');
}

function arrowLeftClick(){
    if (sliderIndex == 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
      }
      sliderIndex -= 1;
      setSlide();
}
function arrowndRightClick(){
    if (sliderIndex == data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
      }
      sliderIndex += 1;
      setSlide();
}

arrowLeft.addEventListener('click', arrowLeftClick);
arrowRight.addEventListener('click', arrowndRightClick);

setInterval( () =>{
    arrowndRightClick();
}, 4000)

setSlide();


//first div
 let newH3element = document.createElement('h3');
 document.getElementById('insideDiv').appendChild(newH3element);
 newH3element.setAttribute('class', 'h3-element');
 newH3element.textContent='Welcome';

 let newH2element = document.createElement('h2');
 document.getElementById('insideDiv').appendChild(newH2element);
 newH2element.setAttribute('class', 'h2-element');
 newH2element.innerText="Creamy Hot and Ready to Serve";

 let newPelement=document.createElement('p');
 document.getElementById('insideDiv').appendChild(newPelement);
 newPelement.setAttribute('class', 'p-element');
 newPelement.innerText='small river named Duden flows by their place and supplies it with the necessary regelialia.';

//

let backgroundImg =document.createElement('div');
document.getElementById('second-id').appendChild(backgroundImg);
backgroundImg.setAttribute('class', 'background-img1');

let secondsecdtionDiv = document.createElement('div');
document.getElementById('second-id').appendChild(secondsecdtionDiv);
secondsecdtionDiv.setAttribute('class', 'secondsection-div2');

let h3tag =document.createElement('h3');
secondsecdtionDiv.appendChild(h3tag);
h3tag.setAttribute('class', 'h3in-div');
h3tag.innerText='Discover';

let h2tag =document.createElement('h2');
secondsecdtionDiv.appendChild(h2tag);
h2tag.setAttribute('class', 'h2in-div');
h2tag.innerText='Our Story';

let ptag =document.createElement('p');
secondsecdtionDiv.appendChild(ptag);
ptag.setAttribute('class', 'pin-div');
ptag.innerText='On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.';


//third section

document.querySelectorAll('.three-divs').forEach(item => {
  let h4Tag =document.createElement('h4');
  h4Tag.setAttribute('class', 'h4-tag');
  h4Tag.innerText='EASY TO ORDER';
  item.appendChild(h4Tag);


  let pTag3=document.createElement('p');
  pTag3.setAttribute('class', 'p-tag3');
  pTag3.innerText='Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.';
  item.appendChild(pTag3);
});


//fourth section
//left div
let fourthDiv1=document.createElement('div');
document.getElementById('fourthSection').appendChild(fourthDiv1);
fourthDiv1.setAttribute('class', 'left-div4');

let h3Tag4=document.createElement('h3');
h3Tag4.setAttribute('class', 'h3-tag4');
h3Tag4.innerText='Discover';
fourthDiv1.appendChild(h3Tag4);

let h2Tag4=document.createElement('h2');
h2Tag4.setAttribute('class', 'h2-tag4');
h2Tag4.innerText='Our Menu';
fourthDiv1.appendChild(h2Tag4);

let pTag4=document.createElement('p');
pTag4.setAttribute('class', 'p-tag4');
pTag4.innerText='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.';
fourthDiv1.appendChild(pTag4);

//right div
let fourthDiv2=document.createElement('div');
document.getElementById('fourthSection').appendChild(fourthDiv2);
fourthDiv2.setAttribute('class', 'right-div4');

let image1=document.createElement('img');
image1.setAttribute('class','image1');
image1.classList.add('coffee')
image1.src='./images/coffee.jpg';

fourthDiv2.appendChild(image1);

let image2=document.createElement('img');
image2.setAttribute('class','image2');
image2.classList.add('coffee')
image2.src='./images/coffee2.jpg';

fourthDiv2.appendChild(image2);

let image3=document.createElement('img');
image3.setAttribute('class','image3');
image3.classList.add('coffee')
image3.src='./images/coffee3.jpg';

fourthDiv2.appendChild(image3);

let image4=document.createElement('img');
image4.setAttribute('class','image4');
image4.classList.add('coffee')
image4.src='./images/coffee4.jpg';

fourthDiv2.appendChild(image4);


