console.log("#### FPÖ CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.col',
        type: 'big'
    },
    {
        selector: 'ul.stories > li',
        type: 'big'
    },
    {
        selector: 'div.artikel',
        type: 'big'
    },
    {
        selector: '#weiterLesen li',
        type: 'small'
    },
], "//*[contains(text(),'FPÖ')]", 'FPÖ');

blocker.modifyContent([document]);
blocker.watchPageForMutations();
