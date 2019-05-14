console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'body',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
