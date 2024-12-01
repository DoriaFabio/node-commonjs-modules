const nomeCompleto = require("./names");
const hobby = require("./hobbies");
 

console.log(nomeCompleto("Fabio", "Doria"));
console.log(hobby("film", "musica", "libri"));

const people = () => ({
    nomeCompleto,
    hobby
});