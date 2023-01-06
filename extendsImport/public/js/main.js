import { rage,defense } from "./modules/function.js";
import { venom } from "./modules/instance.js";

let tour 
for (let i = 1; i < 10; i++) {
    tour = i
    rage(tour)
}

let actionTrynda = prompt('action de Tryndamere ? (d/a/n)')
defense(actionTrynda)