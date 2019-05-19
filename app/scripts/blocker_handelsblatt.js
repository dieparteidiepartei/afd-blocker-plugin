console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.c-teaser',
        type: 'big'
    },
    {
        selector: '.vhb-teaser.panel',
        type: 'small'
    },
    {
        selector: '.vhb-teaser',
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
    },
    {
        selector: '.vhb-teaser-list-small',
        type: 'big'
    },
    {
        selector: '.vhb-content',
        type: 'big'
    }

]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
