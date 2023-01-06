//import { rage,actionTrynda,actionAshe,actionXerath } from "./modules/function.js";
import { boss, monArcher,monGuerrier,monMage} from "./modules/instance.js";

monArcher.nom=prompt(`Bienvenue sur Geek Of Legends, pour commencer vous devez choisir un nom pour votre Archer`)
monGuerrier.nom=prompt(`Maintenant, choisissez un nom pour votre guerrier`)
monMage.nom=prompt(`Enfin, choisissez un nom pour votre Mage`)

let pv = 200
monArcher.pv
monGuerrier.pv
monMage.pv
while(monArcher.pv+monGuerrier.pv+monMage.pv>200){
    monArcher.pv=parseInt(prompt(`Vous devez désormais répartir 200 points de vie entre vos héros, commençons par ${monArcher.nom}`))
    monGuerrier.pv
    monMage.pv
}
// let tour 
// for (let i = 1; i < 10; i++) {
//     tour = i
//     rage(tour)
// }
// actionTrynda()
// actionAshe()
// actionXerath()