console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.result',
        type: 'small'
    },
    {
        selector: '.result_ribbon_knowledge',
        type: 'big'
    },
    {
        selector: '.result-smart__news__item',
        type: 'big'
    },
    {
        selector: '.result-smart__social__item',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
