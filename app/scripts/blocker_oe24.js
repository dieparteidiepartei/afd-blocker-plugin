console.log("#### FPÖ CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.column',
        type: 'big'
    },
    {
        selector: 'a.consoleNavigationItem',
        type: 'big'
    },
    {
        selector: '.slide',
        type: 'big'
    },
    {
        selector: '.content article',
        type: 'big'
    },
], "//*[contains(text(),'FPÖ')]", 'FPÖ');

blocker.modifyContent([document]);
blocker.watchPageForMutations();
