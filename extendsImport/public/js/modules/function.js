
export function enigme(boss) {
    let enigme=[]
    let soluce =[]
    enigme.push(`Quel est le pain préféré du magicien ?`)//la baguette
    enigme.push(`Qu'est-ce qui peut être dans la mer et dans le ciel ?`)//une étoile
    enigme.push(`Qu'est-ce qui ne fait pas de bruit mais réveille tout le monde ?`)//le soleil
    soluce.push(`baguette`)
    soluce.push(`étoile`)
    soluce.push(`soleil`)
    let hasard = parseInt(Math.random()*3)
    let reponse = prompt(`Pour gagner, vous devez répondre à cette énigme en un mot : ${enigme[hasard]}`) 
    for (reponse ; i < 3; i++) {
        if (reponse!=soluce[hasard]) {
            alert(`Féliciation, vous avez vaincu ${boss}`)
        }
        
    }
    let i = 0
    while (i<3 || reponse!=soluce[hasard]) {
        
    }
    if (reponse==soluce[hasard]) {
        console.log(`Féliciation, vous avez vaincu ${boss}`)
    }else{
        reponse=prompt(`FAUUUUX ! 2e chance : ${enigme[hasard]}`)
        if (reponse==soluce[hasard]) {
            console.log(`Féliciation, vous avez vaincu ${boss}`)
        } else {}
    }


}

export function lowHP(boss) {
    if (boss.pv<=20) {
        
    }
}