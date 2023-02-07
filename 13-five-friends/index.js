//
async function getUsers() {
  let mainDiv = document.getElementById("friends");
  let people = await fetch("https://randomuser.me/api/?results=5").then((response) =>
    response.json()
  );
  people.results.map((friend) => {
    let newImage = document.createElement("img");
    newImage.src = friend.picture.medium;
    mainDiv.appendChild(newImage);
  });
}

getUsers();
