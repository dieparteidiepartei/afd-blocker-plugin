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

]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
