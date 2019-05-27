console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'article',
        type: 'big'
    },
    {
        selector: 'div.box',
        type: 'big'
    },
    {
        selector: 'section',
        type: 'big'
    },
    {
        selector: 'div.details',
        type: 'big'
    },
    {
        selector: 'header',
        type: 'big'
    }
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();



