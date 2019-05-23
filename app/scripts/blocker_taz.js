console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'article.sectbody',
        type: 'big'
    },
    {
        selector: 'div.odd.sect.sect_description',
        type: 'big'
    },
    {
        selector: 'div.even.sect.sect_tags',
        type: 'small'
    },
    {
        selector: '.objlink.report.article',
        type: 'small'
    },
    {
        selector: '.objlink.report.article.leaded.pictured',
        type: 'big'
    },

    {
        selector: '.objlink.subjective.commentary.article',
        type: 'big'
    },
    {
        selector: '.objlink.brief.legacy.article',
        type: 'big'
    },
    {
        selector: '.objlink.brief.subjective',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

