console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'ytd-video-renderer',
        type: 'big'
    },
    {
        selector: 'ytd-grid-video-renderer',
        type: 'big'
    },
    {
        selector: 'ytd-compact-video-renderer',
        type: 'big'
    },
    {
        selector: 'ytd-post-renderer',
        type: 'big'
    }
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
