"use strict";
console.log("Bienvenu à TS Learning");
// Variables et types :
let count = 3;
let prenom = "Adrien";
let admin = true;
let serveurs = [
    "srv-web",
    "srv-db",
    "srv-proxy"
];
let ports = [80, 443, 22];
console.log(serveurs[0]);
//Objets :
let user = {
    name: "Adrien",
    age: 23
};
console.log(user);
console.log("Prénom du user : ", user.name);
//Fonctions :
function addition(a, b) {
    return a + b;
}
console.log(addition(3, 5));
//parametre optionnel(fonction):
function saluer(name, firstname) {
    console.log("Hello", name, firstname);
}
saluer("RICQUE");
saluer("RICQUE", "Adrien");
// Utilisation :
const adrien = {
    name: "Adrien",
    age: 23
};
let niveaulog = "INFO";
console.log(niveaulog);
// conditions
