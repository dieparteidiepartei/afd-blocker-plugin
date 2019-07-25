console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.o-Grid_Col',
        type: 'big'
    },
    {
        selector: 'div.atc-Text',
        type: 'big'
    },
    {
        selector: 'li.nvg-Breadcrumb_Item',
        type: 'small'
    },
    {
        selector: 'div.Teaser620',
        type: 'big'
    },
    {
        selector: 'div.gh-MainNav_Article',
        type: 'small'
    },
    {
        selector: 'div.ctn-PlaceholderContent',
        type: 'big'
    },
    {
        selector: 'div.sld-TeaserMore_Item',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

