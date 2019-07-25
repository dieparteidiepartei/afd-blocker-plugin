console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.title-wrap.x-large-8.x-column',
        type: 'big'
    },
    {
        selector: 'div.content-box',
        type: 'big'
    },
    {
        selector: 'div.b-cluster-teaser',
        type: 'big'
    },
    {
        selector: 'div.inner.m-clickarea',
        type: 'big'
    },
    {
        selector: 'div.x-row',
        type: 'big'
    },
    {
        selector: '.b-cluster-teaser.x-vertical.m-clickarea',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
