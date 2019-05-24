console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'main.c-page-container.c-page-container--has-detailed-content > article > div.c-sticky-container',
        type: 'big',
        zIndex: 12002
    },
    {
        selector: 'li.c-grid__item > article.c-teaser-default',
        type: 'big',
        zIndex: 12002
    },
    {
        selector: 'li.c-grid__item > article.c-teaser-counter',
        type: 'big',
        zIndex: 12002
    },
    {
        selector: 'li.c-grid__item>article.c-teaser-newsticker',
        type: 'small',
        zIndex: 12002
    },
    {
        selector: 'div.videoCube',
        type: 'big',
        zIndex: 12002
    },
    {
        selector: 'li.jsx-search-result__item',
        type: 'small'
    }
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

