console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([

    {
        selector: 'article',
        type: 'big'
    },
    {
        selector: 'article mod-teaser',
        type: 'big'
    },
    {
        selector: '.box-head',
        type: 'big'
    }
]);

blocker.modifyContent();

