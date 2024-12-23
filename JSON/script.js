// async is used because fetch is an async function
async function populate() {
    // Define the URL of the JSON file containing superhero data
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    
    // Create a new Request object using the URL
    const request = new Request(requestURL);
  
    // Fetch the data from the server using the Request object
    // await is used because fetch is an async function
    const response = await fetch(request);
    
    // Parse the JSON from the response into a JavaScript object
    const superHeroes = await response.json();
  
    // Call the function to populate the header with the superhero data
    populateHeader(superHeroes);
    
    // Call the function to populate the hero details with the superhero data
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
