console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'ytd-video-renderer.style-scope',
        type: 'big',
        zIndex: 2023

    },
    {
        selector: 'ytd-grid-video-renderer.style-scope',
        type: 'big',
        zIndex: 2023

    },
    {
        selector: 'ytd-channel-renderer.style-scope',
        type: 'big',
        zIndex: 2023

    },
    {
        selector: 'ytd-comment-thread-renderer.style-scope',
        type: 'big',
        zIndex: 2023

    },
    {
        selector: 'ytd-compact-video-renderer.style-scope',
        type: 'small',
        zIndex: 2023

    },

]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
