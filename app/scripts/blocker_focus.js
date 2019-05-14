console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.gsc-results div',
        type: 'big'
    },
    {
        selector: 'div.slide div.img',
        type: 'small'
    },
    {
        selector: 'div.teaser',
        type: 'big'
    },
    {
        selector: 'li.teaser',
        type: 'big'
    },
    {
        selector: '#videoPlayer',
        type: 'big'
    },
    {
        selector: '.vidTeaserSingle',
        type: 'big'
    },
    {
        selector: '.teaserLink',
        type: 'big'
    },
    {
        selector: 'div.promo',
        type: 'big'
    },
    {
        selector: 'div.popularArticles',
        type: 'big'
    },
    {
        selector: 'div#article',
        type: 'big'
    },
    {
        selector: '.singleTeaser',
        type: 'big'
    },
    {
        selector: 'div.list',
        type: 'big'
    }
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
