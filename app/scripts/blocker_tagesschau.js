console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.teaser',
        type: 'big'
    },
    {
        selector: 'div.media',
        type: 'big'
    },
    {
        selector: 'div.mediaCon',
        type: 'big'
    },
    {
        selector: 'li.current',
        type: 'small'
    },
    {
        selector: 'div.box',
        type: 'big'
    },
    {
        selector: 'div.mod.modA.modParagraph',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

