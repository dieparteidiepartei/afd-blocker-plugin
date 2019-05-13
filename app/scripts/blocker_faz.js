console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.Teaser620',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

