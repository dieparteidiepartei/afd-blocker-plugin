console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'ytd-video-renderer.style-scope',
        type: 'big'

    },
    {
        selector: 'ytd-grid-video-renderer.style-scope',
        type: 'big'

    },
    {
        selector: 'ytd-channel-renderer.style-scope',
        type: 'big'

    },
    {
        selector: 'ytd-comment-thread-renderer.style-scope',
        type: 'big'

    },
    {
        selector: 'ytd-compact-video-renderer.style-scope',
        type: 'small'

    },

]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
