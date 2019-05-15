console.log("#### FPÖ CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'article.ticker-story',
        type: 'small'
    },
    {
        selector: '.oon-grid-item',
        type: 'big'
    },
], "//*[contains(text(),'FPÖ')]", 'FPÖ');

blocker.modifyContent([document]);
blocker.watchPageForMutations();
