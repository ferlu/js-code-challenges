const pattern = /[^a-zA-Z ]/g;

function urlify(postTitle) {
  postTitle = postTitle.replace(pattern, "");
  return postTitle.toLowerCase().split(" ").join("-");
}

console.log(urlify("My blog name!"));
console.log(urlify("Emma's blog"));
