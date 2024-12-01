const nomeCompleto = require("./names");
const hobbyFile = require("./hobbies");
 

// console.log(nomeCompleto("Fabio", "Doria"));
// console.log(hobbyFile("film", "musica", "libri"));

const user = nomeCompleto("Fabio", "Doria");
const hobbyArray = hobbyFile("film", "musica", "libri");

const people = () => ({
    fullName: `${user.firstName} ${user.lastName}`,
    hobbies: hobbyArray.hobby
});

console.log(people());