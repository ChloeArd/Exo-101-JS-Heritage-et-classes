class Vehicule {

    constructor(couleur, nbRoues, marque) {
        this.couleur = couleur;
        this.roues = nbRoues;
        this.marque = marque;
    }
        demarrer(){
            console.log("Je démarre ma voiture " + this.couleur + " avec " + this.roues + " roues et de la marque " + this.marque + ".");
        }

        arreter(){
            console.log("Je m'arrête !");
        }
}

let unVehicule = new Vehicule("bleu", 4, "Peugeot");
unVehicule.demarrer();
unVehicule.arreter();

class Velo extends Vehicule{

    constructor(couleur, nbRoues, marque, rayonRoues, typePeinture) {
        super(couleur, nbRoues, marque);
        this.rayonRoues = rayonRoues;
        this.typePeinture = typePeinture;
    }
    monter() {
        console.log("Je monte à Velo, mes roues ont un rayon de " + this.rayonRoues + " et une peinture " + this.typePeinture);
    }

}
let unVelo = new Velo("rouge", 2, "Arena", 40, "aluminium")
unVelo.monter();

class Voiture extends Vehicule {

    constructor(couleur, nbRoues, marque, assurance, proprietaire) {
        super(couleur, nbRoues, marque);
        this.assurance = assurance;
        this.proprietaire = proprietaire;
    }
    passerAuCarWash() {
        console.log("La voiture passe au carwash, elle est assurée à " + this.assurance + " et le propriétaire est " + this.proprietaire);
    }
}
let uneVoiture = new Voiture("noir",4, "Porsh", "Allianz", "Joe");
uneVoiture.passerAuCarWash();