console.log("Bienvenu à TS Learning");
// Variables et types :
var count = 3;
var prenom = "Adrien";
var admin = true;
var serveurs = [
    "srv-web",
    "srv-db",
    "srv-proxy"
];
var ports = [80, 443, 22];
console.log(serveurs[0]);
//Objets :
var user = {
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
var adrien = {
    name: "Adrien",
    age: 23
};
var niveaulog = "INFO";
console.log(niveaulog);
// Conditions
var score = 50;
if (score < 40) {
    console.log("OK");
}
else {
    console.log("KO");
}
// Boucles
// For
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// for of
var outils = [
    "Nmap",
    "Wireshark",
    "Burp"
];
for (var _i = 0, outils_1 = outils; _i < outils_1.length; _i++) {
    var outil = outils_1[_i];
    console.log(outil);
}
// Classes
// déclaration
var Serveur = /** @class */ (function () {
    function Serveur(nom, ip) {
        this.nom = nom;
        this.ip = ip;
    }
    Serveur.prototype.afficher = function () {
        console.log("".concat(this.nom, " (").concat(this.ip, ")"));
    };
    return Serveur;
}());
// usage
var srv = new Serveur("srv-web", "10.0.0.1");
srv.afficher();
