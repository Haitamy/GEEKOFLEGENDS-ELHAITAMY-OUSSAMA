import { monGuerrier, monArcher, monMage} from "./instance.js";

export function rage(tour) {
  if (tour % 4 == 0) {
    monGuerrier.pa = 12.5;
    monGuerrier.rage = 0;
    console.log(`Rage : ${monGuerrier.rage}, PA : ${monGuerrier.pa}`);
  } else {
    tmonGuerrierpa = 10;
    monGuerrier.rage = tour % 4;
    console.log(`Rage : ${monGuerrier.rage}, PA : ${monGuerrier.pa}`);
  }
}
export function bossAttack(boss){
    if (chanceMonArcher<chanceMonGuerrier && chancemonArcher<chanceMonMage) {
        monArcher.pv-=boss.pa
        if(actionMonArcher=='d'){
            chanceMonArcher+=1
        } else {
            chanceMonArcher+=0.5
        }
    }
    if (chanceMonGuerrier<chanceMonArcher && chanceMonGuerrier<chanceMonMage) {
        monGuerrier.pv-=boss.pa
        if(actionMonGuerrier=='d'){
            chanceMonGuerrier+=1
        } else {
            chanceMonGuerrier+=0.5
        }
    }
    if(chanceMonMage<chanceMonGuerrier && chanceMonMage<chanceMonArcher){
        monMage.pv-=boss.pa
        if(actionMonMage=='d'){
            chancemMnMage+=1
        } else {
            chanceMonMage+=0.5
        }
    }
}




let actionMonArcher = prompt(`action de ${monArcher} ? (a/d ou rien)`);
export function actionmonArcher() {
  switch (action) {
    case "d":
      monArcher.pa = monArcher.pa * 0.5;
      monArcher.pv = monArcher.pv * 2.5;
      console.log(
        `${monArcher.nom} est désormais un défenseur. Nouvelles stats : pa : ${monArcher.pa}, pv : ${monArcher.pv} `
      );
      break;
    case "a":
      monArcher.pa = monArcher.pa * 1.4;
      monArcher.pv = monArcher.pv * 0.75;
      console.log(
        `${monArcher.nom} est désormais un attaquant. Nouvelles stats : pa : ${monArcher.pa}, pv : ${monArcher.pv} `
      );
      break;
    default:
      console.log(`aucun changement n'a été effectué aux stats de ${monArcher.nom} `);
      break;
  }
}
let actionMonMage = prompt(`action de ${monMage.nom} ? (a/d ou rien)`);
export function actionmonMage() {
  switch (action) {
    case "d":
      monMage.pa = monMage.pa * 0.5;
      monMage.pv = monMage.pv * 2.5;
      console.log(
        `${monMage.nom} est désormais un défenseur. Nouvelles stats : pa : ${monMage.pa}, pv : ${monMage.pv} `
      );
      break;
    case "a":
      monMage.pa = monMage.pa * 1.4;
      monMage.pv = monMage.pv * 0.75;
      console.log(
        `${monMage.nom} est désormais un attaquant. Nouvelles stats : pa : ${monMage.pa}, pv : ${monMage.pv} `
      );
      break;
    default:
      console.log(`aucun changement n'a été effectué aux stats de ${monMage.nom} `);
      break;
  }
}

let actionMonGuerrier= prompt(`action de ${monGuerrier.nom} ? (a/d ou rien)`);
export function actionMonGuerrier() {
  switch (action) {
    case "d":
      monGuerrier.pa = monGuerrier.pa * 0.5;
      monGuerrier.pv = monGuerrier.pv * 2.5;
      console.log(
        `${monGuerrier.nom} est désormais un défenseur. Nouvelles stats : pa : ${monGuerrier.pa}, pv : ${monGuerrier.pv} `
      );
      break;
    case "a":
      monGuerrier.pa = monGuerrier.pa * 1.4;
      monGuerrier.pv = monGuerrier.pv * 0.75;
      console.log(
        `${monGuerrier.nom} est désormais un attaquant. Nouvelles stats : pa : ${monGuerrier.pa}, pv : ${monGuerrier.pv} `
      );
      break;
    default:
      console.log(`aucun changement n'a été effectué aux stats de ${monGuerrier.nom} `);
      break;
  }
}

export function enigme(boss) {
  let enigme = [];
  let soluce = [];
  enigme.push(`Quel est le pain préféré du magicien ?`); //la baguette
  enigme.push(`Qu'est-ce qui peut être dans la mer et dans le ciel ?`); //une étoile
  enigme.push(
    `Qu'est-ce qui ne fait pas de bruit mais réveille tout le monde ?`
  ); //le soleil
  soluce.push(`baguette`);
  soluce.push(`étoile`);
  soluce.push(`soleil`);
  let hasard = parseInt(Math.random() * 3);
  let reponse = prompt(
    `Pour gagner, vous devez répondre à cette énigme en un mot : ${enigme[hasard]}`
  );
  if (reponse == soluce[hasard]) {
    boss.pv=0
  } else {
    reponse = prompt(`FAUUUUX ! 2e chance : ${enigme[hasard]}`);
    if (reponse == soluce[hasard]) {
      boss.pv=0
    } else {
      reponse = prompt(`FAUUUUX ! Dernière chance : ${enigme[hasard]}`);
      if (reponse == soluce[hasard]) {
        boss.pv=0
      } else {
        monArcher.pv=0
        monGuerrier.pv=0
        monMage.pv=0
      }
    }
  }
}

export function lowHP(boss) {
  if (boss.pv <= 20) {
    enigme(boss);
  }
}
