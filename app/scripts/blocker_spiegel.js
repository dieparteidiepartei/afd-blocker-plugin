console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.teaser',
        type: 'big'
    },
    {
        selector: 'div.spArticleContent',
        type: 'big'
    },
    {
        selector: 'div.ob-dynamic-rec-container',
        type: 'big'
    },
    {
        selector: 'div.video-player',
        type: 'big'
    },
    {
        selector: 'div.asset-box',
        type: 'big'
    },
    {
        selector: '.ui-tabs-panel',
        type: 'big'
    },
    {
        selector: '.search-teaser',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

