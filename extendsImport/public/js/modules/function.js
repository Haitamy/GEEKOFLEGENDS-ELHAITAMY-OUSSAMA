import { trynda, ashe, xerath} from "./instance.js";

export function rage(tour) {
  if (tour % 4 == 0) {
    trynda.pa = 12.5;
    trynda.rage = 0;
    console.log(`Rage : ${trynda.rage}, PA : ${trynda.pa}`);
  } else {
    trynda.pa = 10;
    trynda.rage = tour % 4;
    console.log(`Rage : ${trynda.rage}, PA : ${trynda.pa}`);
  }
}
export function bossAttack(boss){
    if (chanceAshe<chanceTrynda && chanceAshe<chanceXerath) {
        ashe.pv-=boss.pa
        
    }
    if (chanceTrynda<chanceAshe && chanceTrynda<chanceXerath) {
        trynda.pv-=boss.pa
        at
    }
    if(chanceXerath<chanceTrynda && chanceXerath<chanceAshe){
        xerath.pv-=boss.pa
        at
    }
}

let chanceAshe = Math.random()
let chanceTrynda =Math.random()
let chanceXerath =Math.random()
export function chanceToBeAttacked() {
    if (actionAshe=='d') {
        chanceAshe+=1
    } else {
        chanceAshe+=.5
    }
}

let actionAshe = prompt("action de Ashe ? (a/d ou rien)");
export function actionAshe() {
  switch (action) {
    case "d":
      ashe.pa = ashe.pa * 0.5;
      ashe.pv = ashe.pv * 2.5;
      console.log(
        `Ashe est désormais un défenseur. Nouvelles stats : pa : ${ashe.pa}, pv : ${ashe.pv} `
      );
      break;
    case "a":
      ashe.pa = ashe.pa * 1.4;
      ashe.pv = ashe.pv * 0.75;
      console.log(
        `Ashe est désormais un attaquant. Nouvelles stats : pa : ${ashe.pa}, pv : ${ashe.pv} `
      );
      break;
    default:
      console.log(`aucun changement n'a été effectué aux stats de Ashe `);
      break;
  }
}
let actionXerath = prompt("action de xerath ? (a/d ou rien)");
export function actionXerath() {
  switch (action) {
    case "d":
      xerath.pa = xerath.pa * 0.5;
      xerath.pv = xerath.pv * 2.5;
      console.log(
        `Xerath est désormais un défenseur. Nouvelles stats : pa : ${xerath.pa}, pv : ${xerath.pv} `
      );
      break;
    case "a":
      xerath.pa = xerath.pa * 1.4;
      xerath.pv = xerath.pv * 0.75;
      console.log(
        `Xerath est désormais un attaquant. Nouvelles stats : pa : ${xerath.pa}, pv : ${xerath.pv} `
      );
      break;
    default:
      console.log(`aucun changement n'a été effectué aux stats de Xerath `);
      break;
  }
}

let actionTrynda= prompt("action de Tryndamere ? (a/d ou rien)");
export function actionTrynda() {
  switch (action) {
    case "d":
      trynda.pa = trynda.pa * 0.5;
      trynda.pv = trynda.pv * 2.5;
      console.log(
        `Trynda est désormais un défenseur. Nouvelles stats : pa : ${trynda.pa}, pv : ${trynda.pv} `
      );
      break;
    case "a":
      trynda.pa = trynda.pa * 1.4;
      trynda.pv = trynda.pv * 0.75;
      console.log(
        `Trynda est désormais un attaquant. Nouvelles stats : pa : ${trynda.pa}, pv : ${trynda.pv} `
      );
      break;
    default:
      console.log(`aucun changement n'a été effectué aux stats de Trynda `);
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
        ashe.pv=0
        trynda.pv=0
        xerath.pv=0
      }
    }
  }
}

export function lowHP(boss) {
  if (boss.pv <= 20) {
    enigme(boss);
  }
}
