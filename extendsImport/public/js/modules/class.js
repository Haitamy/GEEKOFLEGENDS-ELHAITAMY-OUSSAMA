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

export class Heros extends Perso {
    constructor(nom,pv,pa){
        super(nom,pv,pa)
    }
}

export class Guerrier extends Heros {
    constructor(nom,pv,pa,rage){
        super(nom,pv,pa)
        this.rage=rage
    }
}
export class Mage extends Heros {
    constructor(nom,pv,pa,mana){
        super(nom,pv,pa)
        this.mana=mana
    }
}
export class Archer extends Heros {
    constructor(nom,pv,pa,fleche){
        super(nom,pv,pa)
        this.fleche=fleche
    }
}