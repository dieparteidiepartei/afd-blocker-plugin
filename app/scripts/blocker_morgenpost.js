console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'article',
        type: 'small'
    },
    {
        selector: '.teaser',
        type: 'big'
    },
    {
        selector: '.teaser--large',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

/**
 * BILD.de uses teaser images (sometimes without alt attributes). So we try to find teasers by its article URI
 */
console.log("#### AfD CONTENT-BLOCKER FOR URL PARTS ####");
[
    "//a[contains(@href,'-afd-')]",
    "//a[contains(@href,'/afd-')]",
    "//a[contains(@href,'-afd.')]"
].forEach(function(xpathExpression) {
    let teaserLinkBlocker = new Blocker([
        {
            selector: 'picture.teaser__img',
            type: 'big'
        },
        {
            selector: 'picture.teaser__img--left',
            type: 'big'
        },
        {
            selector: 'picture.teaser__img--article',
            type: 'big'
        }
    ], xpathExpression);

    teaserLinkBlocker.modifyContent([document]);
});
