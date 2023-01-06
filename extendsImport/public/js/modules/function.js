import { trynda,  } from "./instance.js";

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

export function defense(actionTrynda) {
    while (actionTrynda != 'a') {
        
    }
    switch (actionTrynda) {
        case 'd':
            trynda.pa=trynda.pa*0.5
            trynda.pv=trynda.pv*2.5
            console.log(`Trynda est désormais un défenseur. Nouvelles stats : pa : ${trynda.pa}, pv : ${trynda.pv} `);
            break;
        case 'a':
            trynda.pa=trynda.pa*1.4
            trynda.pv=trynda.pv*0.75
            console.log(`Trynda est désormais un attaquant. Nouvelles stats : pa : ${trynda.pa}, pv : ${trynda.pv} `);
            break;
        case 'n':
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
    console.log(`Féliciation, vous avez vaincu ${boss}`);
  } else {
    reponse = prompt(`FAUUUUX ! 2e chance : ${enigme[hasard]}`);
    if (reponse == soluce[hasard]) {
      console.log(`Féliciation, vous avez vaincu ${boss}`);
    } else {
      reponse = prompt(`FAUUUUX ! Dernière chance : ${enigme[hasard]}`);
      if (reponse == soluce[hasard]) {
        console.log(`Féliciation, vous avez vaincu ${boss}`);
      } else {
        console.log(
          `Vous avez perdu, ${boss} vient d'arracher ta grand-mère !`
        );
      }
    }
  }
}

export function lowHP(boss) {
  if (boss.pv <= 20) {
    enigme(boss);
  }
}
