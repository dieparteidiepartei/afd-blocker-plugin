console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.id-LinkOverlay',
        type: 'big'
    },
    {
        selector: '.id-Article-kicker',
        type: 'small'
    },
    {
        selector: '.id-Article-body',
        type: 'big'
    },
    {
        selector: '.id-Article-headline',
        type: 'small'
    },
    {
        selector: '.id-Breadcrumb-element-link',
        type: 'small'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

