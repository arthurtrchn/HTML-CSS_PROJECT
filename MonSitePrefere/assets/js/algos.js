// COUR 1


function billets(somme) {
    let billetsVingt = 0
    let billetsDix = 0
    let billetsCinq = 0
    let piecesDeux = 0
    let piecesUn = 0
    while (somme > 0) {
        if (somme >= 20) {
            somme = somme - 20
            billetsVingt += 1
        } else if (somme >= 10) {
            somme = somme - 10
            billetsDix += 1
        } else if (somme >= 5) {
            somme = somme - 5
            billetsCinq += 1
        } else if (somme >= 2) {
            somme = somme - 2
            piecesDeux += 1
        } else if (somme >= 1) {
            somme = somme - 1
            piecesUn += 1
        }
    }
    console.log("Voici : " + billetsVingt + " billets de 20")
    console.log("Voici : " + billetsDix + " billets de 10")
    console.log("Voici : " + billetsCinq + " billets de 5")
    console.log("Voici : " + piecesDeux + " pieces de 2")
    console.log("Voici : " + piecesUn + " pieces de 1")
}

//billets(87)


function findRandom() {

    let min = prompt("Choisissez un nombre minimal :")
    let max = prompt("Choisissez un nombre maximal :")

    while (isNaN(min)) min = prompt("Entrez un nombre valide\n Choisissez un nombre minimal :")
    while (isNaN(max)) max = prompt("Entrez un nombre valide\n Choisissez un nombre maximal :")

    let random = Math.floor(Math.random() * (max - min) + min)

    let result = false



    alert("Vous avez 5 tentatives pour trouver le nombre aléatorie \nChoisissez un nombre entre " + min + " et " + max)

    let x = 1

    do {
        let nb = prompt("Tentative n°" + x + "\n Choisissez un nombre");
        while (isNaN(nb)) nb = prompt("Entrez un nombre valide\n Choisissez un nombre :")
        while (nb < min || nb > max) nb = prompt("Entre 0 et 20 svp ! Tentative n°" + x + "\n Choisissez un nombre");
        console.log(nb)
        console.log(random)
        if (nb == random) {
            result = true
            break;
        }
        x++
    }
    while (x < 5)

    if (result) alert("Vous avez trouvé en " + x + " essais" + "! Bien joué")
    else alert("Vous avez perdu ! Rejouer ? ")
}

// COUR 2 

function billetV2() {
    let montant = parseFloat(prompt('Entrer votre montant', ''));
    let resultat = montant + '€ représente ';
    const coupure = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1];

    for (let i = 0; i < coupure.length; i++) {
        let nbrBillet = Math.floor(montant / coupure[i]);
        if (nbrBillet > 0) {
            montant -= nbrBillet * coupure[i];
            resultat += nbrBillet + ' x ' + coupure[i] + '€ \n';
        }
    }
    alert(resultat);
}

function tryOnTabs() {

    let tab = [2, 3, 5, 8, 15, 89, 56, 12, 33, 11, 47, 10, 45, 85]

    let sum = 0
    let min = parseInt(tab[1])
    let max = parseInt(tab[1])
    let indexMin = 1
    let indexMax = 1

    for (let t in tab) {
        sum += tab[t]
    }

    let moy = sum / tab.length

    for (t in tab) {
        if (tab[t] < min) {
            min = tab[t]
            indexMin = t
        }
        if (tab[t] > max) {
            max = tab[t]
            indexMax = t
        }
    }

    console.log(tab)
    console.log("Voici la somme des éléments du Tableau : " + sum)
    console.log("Voici la moyenne des éléments du Tableau : " + moy)
    console.log("Voici le minimum des éléments du Tableau : " + min + " à la position " + indexMin)
    console.log("Voici le maximum des éléments du Tableau : " + max + " à la position " + indexMax)
}


function noteEleves(nombreEleves) {
    let tab = []

    for (let i = 0; i <= nombreEleves; i++) tab[i] = Math.floor(Math.random() * (20 - 0 + 1) + 0)

    let sum = 0

    for (let t in tab) {
        sum += parseInt(tab[t])
    }

    console.log(tab)
    console.log("Voici la somme des éléments du Tableau : " + sum)

    let moy = sum / tab.length

    console.log("Voici la moyenne des éléments du Tableau : " + moy)

    let min = parseInt(tab[1])
    let max = parseInt(tab[1])
    let indexMin = 1
    let indexMax = 1

    for (t in tab) {
        if (tab[t] < min) {
            min = parseInt(tab[t])
            indexMin = t
        }
        if (tab[t] > max) {
            max = parseInt(tab[t])
            indexMax = t
        }
    }
    console.log("Voici le minimum des éléments du Tableau : " + min + " à la position " + indexMin)
    console.log("Voici le maximum des éléments du Tableau : " + max + " à la position " + indexMax)
}




// FUNCTIONS
function quelleCoupure(){
    let monMontant = parseInt(prompt('Entrer votre montant',''));
    const devises = ['$','€']
    let deviseChoisie='';
    do{
        deviseChoisie = prompt('Dans quelle devise voulez-vous la coupure (€ ou $) ?','');
        if(!devises.includes(deviseChoisie))
            alert('La devise "'+ deviseChoisie+'" n\'est pas gérée.');
    }while(!devises.includes(deviseChoisie))
        
    if( deviseChoisie == devises[0])
        alert(determineCoupureDollars(monMontant));
    else if( deviseChoisie == devises[1])
        alert(determineCoupureEuro(monMontant));
    alert(determineCoupureGeneric(monMontant,deviseChoisie));
    
    function determineCoupureEuro(montant){
        let resultat = montant + '€ représente ';
        const coupure = [500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01];
    
        for( let i=0; i< coupure.length; i++){
            let nbrBillet = Math.floor(montant/coupure[i]);
            if( nbrBillet>0){
                montant -= nbrBillet*coupure[i];
                resultat += nbrBillet+' x '+coupure[i]+ '€ \n';
            }
        }
        return resultat;
    }
    function determineCoupureDollars(montant){
        let resultat = montant + '$ représente ';
        const coupure = [100,50,20,10,5,2,1,0.5,0.25,0.1,0.05,0.01];
    
        for( let i=0; i< coupure.length; i++){
            let nbrBillet = Math.floor(montant/coupure[i]);
            if( nbrBillet>0){
                montant -= nbrBillet*coupure[i];
                resultat += nbrBillet+' x '+coupure[i]+ '$ \n';
            }
        }
        return resultat;
    }
    
    function determineCoupureGeneric(montant, typeDevise){
        let resultat = montant + typeDevise +' représente ';
        let coupure = null;
        if( !typeDevise || typeDevise == '€')
            coupure = [500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01];
        else if( typeDevise == '$')
            coupure = [100,50,20,10,5,2,1,0.5,0.25,0.1,0.05,0.01];
    
        for( let i=0; i< coupure.length; i++){
            let nbrBillet = Math.floor(montant/coupure[i]);
            if( nbrBillet>0){
                montant -= nbrBillet*coupure[i];
                resultat += nbrBillet+' x '+coupure[i]+ typeDevise +' \n';
            }
        }
        return resultat;
    }

}

