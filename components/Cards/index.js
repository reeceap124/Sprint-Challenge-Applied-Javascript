// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Articles(obj){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    //assign classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //structure
    card.appendChild(headline);
    card.appendChild(author);
        author.appendChild(imgContainer);
            imgContainer.appendChild(img);
        author.appendChild(name);

    //content
    headline.innerText = obj.headline;
    img.src = obj.authorPhoto;
    name.innerText = 'By: '+obj.authorName;

    return card;

}
const cardContainer = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then((res)=>{
        console.log(res);
        const articles = res.data.articles;
        console.log(articles);
        for (key in articles){ //iterates ove the object
            let topic = articles[key]; //gets the articles
            topic.forEach(article=>{ //iterates over the array of articles
                cardContainer.appendChild(Articles(article)); //appends each article to container
            })
        }
    })
