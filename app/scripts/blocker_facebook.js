console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '._77we',
        type: 'big'
    },
    {
        selector: '._6-e5',
        type: 'big'
    },
    {
        selector: '._4b0l',
        type: 'big'
    },
    {
        selector: 'div._5pcb',
        type: 'small'
    },
    {
        selector: '#facebook ._-kb div',
        type: 'big'
    },
    {
        selector: '#facebook _5pcr userContentWrapper',
        type: 'small'
    }
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
