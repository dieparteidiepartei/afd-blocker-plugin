console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.vhb-teaser-link',
        type: 'big'
    },
    {
        selector: '.container_onecolumn_read',
        type: 'big'
    },
    {
        selector: '.c-megaufmacher',
        type: 'big'
    },
    {
        selector: '.o-teasers__item',
        type: 'big'
    }

]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
