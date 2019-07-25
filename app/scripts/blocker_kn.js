console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.pdb-article',
        type: 'big'
    },
    {
        selector: '.pdb-navbar-article',
        type: 'small'
    },
    {
        selector: '.pdb-teaser3-teaser',
        type: 'big'
    },
    {
        selector: '.pdb-breadcrumb',
        type: 'small'
    },
    {
        selector: '.pdb-articles4-teaser',
        type: 'big'
    },


    {
        selector: '.pdb-article-comments-list-item',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
