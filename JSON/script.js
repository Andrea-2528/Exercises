// The purpose of this function is to fetch some JSON data from a URL and use it to populate
// the header and section elements of the page. The function is declared as "async" because
// it contains an "await" expression, which is used to wait for the asynchronous fetch() call
// to complete.
async function populate() {
  // The URL of the JSON data to fetch
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

  // Create a new Request object with the URL
  const request = new Request(requestURL);

  // Use the fetch() function to send a GET request for the JSON data
  // fetch() is an asynchronous function, so we use the "await" keyword to wait for it
  // to complete before continuing with the rest of the code
  const response = await fetch(request);

  // Once the fetch() call has completed, we can get the text content of the response
  // using the text() method. This will contain the JSON data as a string.
  const superHeroesText = await response.text();

  // Parse the JSON data string into an object using the JSON.parse() method
  const superHeroes = JSON.parse(superHeroesText);

  // Call the populateHeader() and populateHeroes() functions to populate the
  // header and section elements of the page with the data
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);
  
    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
  }

  function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj.members;
  
    for (const hero of heroes) {
      const myArticle = document.createElement("article");
      const myH2 = document.createElement("h2");
      const myPara1 = document.createElement("p");
      const myPara2 = document.createElement("p");
      const myPara3 = document.createElement("p");
      const myList = document.createElement("ul");
  
      myH2.textContent = hero.name;
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = "Superpowers:";
  
      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItem = document.createElement("li");
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }

populate();
