import { Boss, Guerrier,Archer,Mage } from "./class.js";

export let venom = new Boss('Venom', 100, 10 )
export let father = new Boss('Father', 100, 15 )
export let dio = new Boss('Dio', 100, 20 )
export let trynda = new Guerrier('Trynda', 70, 10, 0)
export let ashe = new Archer('Ashe', 50, 15)
export let xerath = new Mage('Xerath', 50, 15)
let random = parseInt(Math.random()*3)
export let choixBoss =[venom.nom ,father.nom,dio.nom]
export let boss = choixBoss[random]

