console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.ts-teaser',
        type: 'big'
    },
    {
      selector: '.hcf-teaser',
        type: 'big'
    },
    {
        selector: '.hcf-mcol-box-content',
        type: 'big'
    },
    {
        selector: '.ts-article-content',
        type: 'big'
    },
    {
        selector: '.ts-article-header',
        type: 'big'
    },
    {
        selector: '.hcf-theme-lead',
        type: 'big'
    },
    {
        selector: '.hcf-referral-box',
        type: 'big'
    },
    {
        selector: '.hcf-teaser-list',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

