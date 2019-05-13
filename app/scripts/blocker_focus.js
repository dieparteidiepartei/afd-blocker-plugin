console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.teaser',
        type: 'big'
    },
    {
        selector: 'div.promo',
        type: 'big'
    },
    {
        selector: 'li.teaser',
        type: 'big'
    },
    {
        selector: 'div.img',
        type: 'big'
    },
]);

blocker.modifyContent();

