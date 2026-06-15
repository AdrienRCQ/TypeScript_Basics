console.log("Bienvenu à TS Learning");

// Variables et types :
let count: number = 3
let prenom: string = "Adrien"
let admin: boolean = true;

let serveurs: string[] = [
    "srv-web",
    "srv-db",
    "srv-proxy"
];

let ports: Array<number> = [80, 443, 22];

console.log(serveurs[0]);

//Objets :
let user: {
    name: string;
    age: number;
} = {
    name: "Adrien",
    age: 23
};

console.log(user);
console.log("Prénom du user : ", user.name);

//Fonctions :
function addition(a:number, b:number): number{
    return a + b;
}

console.log(addition(3,5));

//parametre optionnel(fonction):
function saluer(name:string, firstname?:string){
    console.log("Hello", name, firstname);
    }

saluer("RICQUE")
saluer("RICQUE", "Adrien")

// Les Interfaces :
// Declaration :
interface User{
    name: string;
    age: number;
}
// Utilisation :
const adrien:User = {
    name: "Adrien",
    age: 23
}

// Les types personnalisés :
type LogLevel =
    "INFO"
    | "DEBUG"
    | "WARNING"
    | "ERROR" ;

let niveaulog:LogLevel = "INFO";
console.log(niveaulog)

// Conditions
let score = 50;
if (score < 40){
    console.log("OK")
}
else{
    console.log("KO")
}

// Boucles
// For
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for of
let outils = [
    "Nmap",
    "Wireshark",
    "Burp"
];

for (const outil of outils) {
    console.log(outil);
}

// Classes
// déclaration
class Serveur {
    nom: string;
    ip: string;

    constructor(
        nom: string,
        ip: string
    ) {
        this.nom = nom;
        this.ip = ip;
    }

    afficher(): void {
        console.log(
            `${this.nom} (${this.ip})`
        );
    }
}
// usage
const srv = new Serveur(
    "srv-web",
    "10.0.0.1"
);

srv.afficher();