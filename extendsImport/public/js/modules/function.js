import { monGuerrier, monArcher, monMage, boss } from "./instance.js";

//demande le nom des héros
function nomHeros() {
  monArcher.nom = prompt(
    `Bienvenue sur Geek Of Legends, pour commencer vous devez choisir un nom pour votre Archer`
  );
  monGuerrier.nom = prompt(`Maintenant, choisissez un nom pour votre guerrier`);
  monMage.nom = prompt(`Enfin, choisissez un nom pour votre Mage`);
}
//demande le nombre de pv de chaque champion en forçant le type Number
function pvHeros() {
  do {
    let pv = 150;
    monArcher.pv = parseInt(
      prompt(
        `Vous devez désormais répartir 150 points de vie entre vos héros, commençons par ${monArcher.nom} (si vous dépasser les 150 pv de groupe, vous devrez recommencer)`
      )
    );
    while (Number.isNaN(monArcher.pv) === true) {
      monArcher.pv = parseInt(
        prompt(
          ` Veuillez entrer une quantité valide de pv pour ${monArcher.nom}`
        )
      );
    }
    pv -= monArcher.pv;
    monGuerrier.pv = parseInt(
      prompt(
        `Ensuite, veuillez entrer un nombre de pv pour ${monGuerrier.nom} sachant qu'il vous reste ${pv} pv à attribuer`
      )
    );
    while (Number.isNaN(monGuerrier.pv) === true) {
      monGuerrier.pv = parseInt(
        prompt(
          `Veuillez entrer une quantité valide de pv pour ${monGuerrier.nom}`
        )
      );
    }
    pv -= monGuerrier.pv;
    monMage.pv = parseInt(
      prompt(
        `Enfin, veuillez entrer un nombre de pv pour ${monMage.nom} sachant qu'il vous reste ${pv} pv à attribuer`
      )
    );
    while (Number.isNaN(monMage.pv) === true) {
      monMage.pv = parseInt(
        prompt(`Veuillez entrer une quantité valide de pv pour ${monMage.nom}`)
      );
    }
  } while (monArcher.pv + monGuerrier.pv + monMage.pv > 150);
}
//demande le nombre de pa de chaque champion en forçant le type Number
function paHeros() {
  do {
    let pa = 30;
    monArcher.pa = parseInt(
      prompt(
        `Vous devez désormais répartir 30 points d'action entre vos héros, commençons par ${monArcher.nom} (si vous dépasser les 30 pa de groupe, vous devrez recommencer)`
      )
    );
    while (Number.isNaN(monArcher.pa) === true) {
      monArcher.pa = parseInt(
        prompt(
          ` Veuillez entrer une quantité valide de pa pour ${monArcher.nom}`
        )
      );
    }
    pa -= monArcher.pa;
    monGuerrier.pa = parseInt(
      prompt(
        `Ensuite, veuillez entrer un nombre de pa pour ${monGuerrier.nom} sachant qu'il vous reste ${pa} pa à attribuer`
      )
    );
    while (Number.isNaN(monGuerrier.pa) === true) {
      monGuerrier.pa = parseInt(
        prompt(
          `Veuillez entrer une quantité valide de pa pour ${monGuerrier.nom}`
        )
      );
    }
    pa -= monGuerrier.pa;
    monMage.pa = parseInt(
      prompt(
        `Enfin, veuillez entrer un nombre de pa pour ${monMage.nom} sachant qu'il vous reste ${pa} pa à attribuer`
      )
    );
    while (Number.isNaN(monMage.pa) === true) {
      monMage.pa = parseInt(
        prompt(`Veuillez entrer une quantité valide de pa pour ${monMage.nom}`)
      );
    }
  } while (monArcher.pa + monGuerrier.pa + monMage.pa > 30);
}
//demande l'action pour l'archer
function actionMonArcher() {
  let _actionMonArcher = prompt(`action de ${monArcher.nom} ? (a/d ou rien)`);
  switch (_actionMonArcher) {
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
      console.log(
        `aucun changement n'a été effectué aux stats de ${monArcher.nom} `
      );
      break;
  }
}
//demande l'action pour le mage
function actionMonMage() {
  let _actionMonMage = prompt(`action de ${monMage.nom} ? (a/d ou rien)`);
  switch (_actionMonMage) {
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
      console.log(
        `aucun changement n'a été effectué aux stats de ${monMage.nom} `
      );
      break;
  }
}
//demande l'action pour le guerrier
function actionMonGuerrier() {
  let _actionMonGuerrier = prompt(
    `action de ${monGuerrier.nom} ? (a/d ou rien)`
  );
  switch (_actionMonGuerrier) {
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
      console.log(
        `aucun changement n'a été effectué aux stats de ${monGuerrier.nom} `
      );
      break;
  }
}
//regroupe les 3 fonctions précédentes
function monAction() {
  actionMonArcher();
  actionMonMage();
  actionMonGuerrier();
}
//regroupe toutes les fonctions précédentes
function mesHeros() {
  nomHeros();
  pvHeros();
  paHeros();
  monAction();
}
//définit aléatoirement le mana et gère le mana par tour
function mana() {
  let mana = [7, 9, 11];
  let random = parseInt(Math.random() * 3);
  let dmgMage = monMage.pa;
  monMage.mana = mana[random];

  if (monMage.mana == 0) {
    monMage.pa = 0;
    monMage.mana = 7;
  } else {
    monMage.pa = dmgMage;
    monMage.mana -= 2;
  }
}
//définit aléatoirement les flèches et gère les flèches par tour
function fleche() {
  let fleche = [7, 8, 9, 10, 11];
  let random = parseInt(Math.random() * 3);
  let dmgArcher = monArcher.pa;
  monArcher.fleche = fleche[random];

  if (monArcher.fleche == 0) {
    monArcher.pa = 0;
    monArcher.fleche = 6;
  } else {
    monArcher.pa = dmgArcher;
    monArcher.fleche -= 2;
    monArcher.fleche += 1;
  }
}
//gère la rage par tour
function rage() {
  let dmgGuerrier = monGuerrier.pa;
  if (monGuerrier.rage == 4) {
    monGuerrier.pa *= 1.25;
    monGuerrier.rage = 0;
  } else {
    monGuerrier.pa = dmgGuerrier;
    monGuerrier.rage += 1;
  }
}
//randomize la personne attaquée par le boss
function bossAttack() {
    let chanceMonArcher = Math.random()
    let chanceMonGuerrier =Math.random()
    let chanceMonMage =Math.random()
  if (chanceMonArcher < chanceMonGuerrier && chanceMonArcher < chanceMonMage) {
    monArcher.pv -= boss.pa;
    if (monArcher.pv > 0) {
      console.log(
        `${monArcher.nom} a été attaqué par ${boss.nom} qui lui a causé ${boss.pa} dégats le laissant à ${monArcher.pv} pv`
      );
      if (actionMonArcher == "d") {
        chanceMonArcher += 0.5;
      } else {
        chanceMonArcher += 1;
      }
    } else {
      console.log(
        `${boss.name} vient de tuer ${monArcher.nom} en lui infligeant ${boss.pa} dégats`
      );
    }
  }
  if (
    chanceMonGuerrier < chanceMonArcher &&
    chanceMonGuerrier < chanceMonMage
  ) {
    monGuerrier.pv -= boss.pa;
    if (monGuerrier.pv > 0) {
      console.log(
        `${monGuerrier.nom} a été attaqué par ${boss.nom} qui lui a causé ${boss.pa} dégats le laissant à ${monGuerrier.pv} pv`
      );
      if (actionMonGuerrier == "d") {
        chanceMonGuerrier += 0.5;
      } else {
        chanceMonGuerrier += 1;
      }
    } else {
      console.log(
        `${boss.name} vient de tuer ${monGuerrier.nom} en lui infligeant ${boss.pa} dégats`
      );
    }
  }
  if (chanceMonMage < chanceMonGuerrier && chanceMonMage < chanceMonArcher) {
    monMage.pv -= boss.pa;
    if (monMage.pv > 0) {
      console.log(
        `${monMage.nom} a été attaqué par ${boss.nom} qui lui a causé ${boss.pa} dégats le laissant à ${monMage.pv} pv`
      );
      if (actionMonMage == "d") {
        chancemMonMage += 0.5;
      } else {
        chanceMonMage += 1;
      }
    } else {
      console.log(
        `${boss.name} vient de tuer ${monMage.nom} en lui infligeant ${boss.pa} dégats`
      );
    }
  }
}
//Pose une des 3 énigmes au hasard
function enigme() {
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
    boss.pv = 0;
    console.log(`Bien joué, vous avez battu ${boss.nom} !!`);
  } else {
    reponse = prompt(`FAUUUUX ! 2e chance : ${enigme[hasard]}`);
    if (reponse == soluce[hasard]) {
      boss.pv = 0;
      console.log(`Bien joué, vous avez battu ${boss.nom} !!`);
    } else {
      reponse = prompt(`FAUUUUX ! Dernière chance : ${enigme[hasard]}`);
      if (reponse == soluce[hasard]) {
        boss.pv = 0;
        console.log(`Bien joué, vous avez battu ${boss.nom} !!`);
      } else {
        monArcher.pv = 0;
        monGuerrier.pv = 0;
        monMage.pv = 0;
        console.log(
          `Fin de la partie, vos mauvaises réponses successives ont couté la vie à vos Héros..`
        );
      }
    }
  }
}
//la bagarre
function combat() {
  let teamPV = monArcher.pv + monGuerrier.pv + monMage.pv;
  while (boss.pv > 20 || teamPV > 0) {
    if (monArcher.pv > 0 && monGuerrier.pv > 0 && monMage.pv > 0) {
      fleche();
      boss.pv -= monArcher.pa;
      console.log(
        `${monArcher.nom} attaque ${boss.nom} et lui inflige ${monArcher.pa} dégats le laissant à ${boss.pv} pv`
      );
      rage();
      boss.pv -= monGuerrier.pa;
      console.log(
        `${monGuerrier.nom} attaque ${boss.nom} et lui inflige ${monGuerrier.pa} dégats le laissant à ${boss.pv} pv`
      );
      mana();
      boss.pv -= monMage.pa;
      console.log(
        `${monMage.nom} attaque ${boss.nom} et lui inflige ${monMage.pa} dégats le laissant à ${boss.pv} pv`
      );
      bossAttack();
    } else if (monArcher.pv > 0 && monGuerrier.pv > 0 && monMage.pv == 0) {
      fleche();
      boss.pv -= monArcher.pa;
      console.log(
        `${monArcher.nom} attaque ${boss.nom} et lui inflige ${monArcher.pa} dégats le laissant à ${boss.pv} pv`
      );
      rage();
      boss.pv -= monGuerrier.pa;
      console.log(
        `${monGuerrier.nom} attaque ${boss.nom} et lui inflige ${monGuerrier.pa} dégats le laissant à ${boss.pv} pv`
      );
      bossAttack();
    } else if (monArcher.pv > 0 && monGuerrier.pv == 0 && monMage.pv > 0) {
      fleche();
      boss.pv -= monArcher.pa;
      console.log(
        `${monArcher.nom} attaque ${boss.nom} et lui inflige ${monArcher.pa} dégats le laissant à ${boss.pv} pv`
      );
      mana();
      boss.pv -= monMage.pa;
      console.log(
        `${monMage.nom} attaque ${boss.nom} et lui inflige ${monMage.pa} dégats le laissant à ${boss.pv} pv`
      );
      bossAttack();
    } else if (monArcher.pv == 0 && monGuerrier.pv > 0 && monMage.pv > 0) {
      rage();
      boss.pv -= monGuerrier.pa;
      console.log(
        `${monGuerrier.nom} attaque ${boss.nom} et lui inflige ${monGuerrier.pa} dégats le laissant à ${boss.pv} pv`
      );
      mana();
      boss.pv -= monMage.pa;
      console.log(
        `${monMage.nom} attaque ${boss.nom} et lui inflige ${monMage.pa} dégats le laissant à ${boss.pv} pv`
      );
      bossAttack();
    } else if (monArcher.pv == 0 && monGuerrier.pv > 0 && monMage.pv == 0) {
      rage();
      boss.pv -= monGuerrier.pa;
      console.log(
        `${monGuerrier.nom} attaque ${boss.nom} et lui inflige ${monGuerrier.pa} dégats le laissant à ${boss.pv} pv`
      );
      bossAttack();
    } else if (monArcher.pv == 0 && monGuerrier.pv == 0 && monMage.pv > 0) {
      mana();
      boss.pv -= monMage.pa;
      console.log(
        `${monMage.nom} attaque ${boss.nom} et lui inflige ${monMage.pa} dégats le laissant à ${boss.pv} pv`
      );
      bossAttack();
    } else if (monArcher.pv > 0 && monGuerrier.pv == 0 && monMage.pv == 0) {
      fleche();
      boss.pv -= monArcher.pa;
      console.log(
        `${monArcher.nom} attaque ${boss.nom} et lui inflige ${monArcher.pa} dégats le laissant à ${boss.pv} pv`
      );
      bossAttack();
    } else {
      console.log(`Tous vos Héros sont morts, Fin de la partie..`);
    }
  }
  if (boss.pv <= 20) {
    enigme(boss);
  }
}
//regroupe la création des héros et le combat
export function myGame() {
  mesHeros();
  combat();
}
