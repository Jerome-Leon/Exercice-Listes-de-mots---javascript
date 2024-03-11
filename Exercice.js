// const listeChats = ["Garfield","Félix","Sylvestre","Tom","Azraël","Potté"];
// const listeChiens = ["Rantanplan","Gromit","Milou","Bill","Idéfix","Petit Papa Noël"];
// let score=0;

// ///////////////////////// Fonctions //////////////////////////

// ///////////////////////// RESULTAT //////////////////////////

// function afficherResultat (score,nombreMots){
//     alert("Vous avez "+score+" point(s) sur "+nombreMots);
// };

// ///////////////////////// DECLARATION DE BOUCLE //////////////////////////
//     function lancerBoucleDeJeu(choixListe){
        
//         for(let i=0;i<choixListe.length;i++){
//             motUtilisateur=prompt('Entrez le mot : '+choixListe[i]);
//             if(motUtilisateur===choixListe[i]){
//                 score++;
//                 console.log("Bravo! Vous gagnez un point");
//             }else{
//                 console.log("Oups! Une erreur de frappe?");
//             };
//         };
//         return score;
//     };

// ///////////////////////// CHOIX DE LISTE //////////////////////////

// function choixChatsOuChiens (){
//     let choix = prompt('Choisissez une des deux listes ci-contre : (entrez "chats") ou (entrez "chiens"');
//     while(choix !== "chats" && choix !== "chiens"){
//         choix = prompt('Erreur de saisie, veuillez taper "chats" ou "chiens"');
//         };
//         return choix;
//     };

// ///////////////////////// LANCEMENT DU JEU //////////////////////////

//     function LancerLeJeu (){
//         let choix=choixChatsOuChiens();
    
//         let nombreMots=0;

//         if(choix==="chats"){
//             score=lancerBoucleDeJeu(listeChats);
//             nombreMots=listeChats.length;
//         }else{
//             score=lancerBoucleDeJeu(listeChiens);
//             nombreMots=listeChiens.length;
//         };
//         afficherResultat(score,nombreMots)
//     };

// ///////////////////////// INITIALISATION DE LA FONCTION LANCER LE JEU //////////////////////////

//     LancerLeJeu();

// TABLEAUX

const listeChats = ["Garfield","Félix","Sylvestre","Tom","Azraël","Potté"];
const listeChiens = ["Rantanplan","Gromit","Milou","Bill","Idéfix","Petit Papa Noël"];
let score=0;
let nombreDeMots=0;

// RESULTAT

function afficherResultat (score,nombreDeMots){
    alert("Vous avez obtenu "+score+" points sur "+nombreDeMots);
};

// BOUCLE

function BoucleDuJeu (listeDeMots){
    for(let i=0; i<listeDeMots.length; i++){
        motUtilisateur=prompt("Tapez le mot suivant : "+listeDeMots[i]);
        if(motUtilisateur===listeDeMots[i]){
            score++;
            console.log("Bravo! + 1 point");
        }else{
            console.log("Erreur de saisie!");
        };
    };
    return score;
};

// CHOIX DE LA LISTE

function choixDeLaListe (){
    let choixUtilisateur=prompt('Choix de la liste : Tapez "chats" ou "chiens"');
    while (choixUtilisateur !== "chats" && choixUtilisateur !== "chiens"){
        choixUtilisateur=prompt('Erreur, vous devez saisir : "chats" ou "chiens"');
    };
    return choixUtilisateur;
};

// LANCER UNE PARTIE

function lancerUnJeu (){
    let motUtilisateur=choixDeLaListe();
    
    if(motUtilisateur==="chats"){
        score=BoucleDuJeu(listeChats);
        nombreDeMots=listeChats.length;
    }else{
        if(motUtilisateur==="chiens"){
            score=BoucleDuJeu(listeChiens);
            nombreDeMots=listeChiens.length;
    };
};
afficherResultat(score,nombreDeMots);
};
lancerUnJeu();



