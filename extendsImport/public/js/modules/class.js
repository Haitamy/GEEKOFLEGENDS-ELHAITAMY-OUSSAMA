export class Perso {
    constructor(nom,pv,pa){
        this.nom = nom
        this.pv=pv
        this.pa=pa
    }
}
export class Boss extends Perso {
    constructor(nom,pv,pa){
        super(nom,pv,pa)
    }
}
