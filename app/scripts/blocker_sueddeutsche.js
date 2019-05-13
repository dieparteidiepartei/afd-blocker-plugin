console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'li.element',
        type: 'big'
    },
    {
        selector: '.sz-teaserlist-element',
        type: 'big'
    },
    {
        selector: 'li.newsscannermodule__item',
        type: 'small'
    },
    {
        selector: 'article',
        type: 'big'
    },
    {
        selector: 'div.entrylist__entry',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

