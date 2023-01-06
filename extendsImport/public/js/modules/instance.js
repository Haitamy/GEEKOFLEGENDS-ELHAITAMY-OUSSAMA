import { Boss, Guerrier,Archer,Mage } from "./class.js";

export let venom = new Boss('Venom', 100, 10 )
export let father = new Boss('Father', 100, 15 )
export let dio = new Boss('Dio', 100, 20 )
export let monGuerrier = new Guerrier('', '', '', 0)
export let monArcher = new Archer('', '', '')
export let monMage = new Mage('', '', '')
let random = parseInt(Math.random()*3)
export let choixBoss =[venom ,father,dio]
export let boss = choixBoss[random]

export let chanceArcher = Math.random()
export let chanceGuerrier =Math.random()
export let chanceMage =Math.random()



