console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'article',
        type: 'small'
    },
    {
        selector: '.teaser',
        type: 'big'
    },
    {
        selector: '.teaser--large',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
