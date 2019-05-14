console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    /* www.startpage.com */
    {
        selector: '.card.instant-wiki.search-item',
        type: 'big'
    },
    {
        selector: '.search-result',
        type: 'small'
    },
    {
        selector: '.search-item',
        type: 'small'
    },

    /* www.qwant.com */
    {
        selector: '.result.result--web',
        type: 'big'
    },

    /* www.morgenpost.de */
    {
        selector: 'div.gsc-results div',
        type: 'big'
    },



]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
