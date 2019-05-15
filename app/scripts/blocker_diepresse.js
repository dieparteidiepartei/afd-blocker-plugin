console.log("#### FPÖ CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.b',
        type: 'big'
    },
    {
        selector: 'li.widget__item',
        type: 'big'
    },
    {
        selector: 'article.article',
        type: 'big'
    },
], "//*[contains(text(),'FPÖ')]", 'FPÖ');

blocker.modifyContent([document]);
blocker.watchPageForMutations();
