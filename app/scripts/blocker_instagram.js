console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker, addBlocker } from "./blocker_general";

const blocker = new Blocker([
    {
        selector: 'article',
        type: 'big'
    },
    {
        selector: `li[style="opacity: 1; width: 200px;"]`,
        type: 'small'
    }
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

/**
 * Instagram.com uses teaser images with often only a alt tag generated by Instagram itself.
 */
console.log("#### AfD CONTENT-BLOCKER FOR URL PARTS ####");

function blockPostsOnAfDPage() {
    const posts = [];
    for (let i = 0; i < document.querySelector("article").querySelector(`[style*="flex-direction: column;"]`).children.length; i++) {
        for (let j = 0; j < document.querySelector("article").querySelector(`[style*="flex-direction: column;"]`).children[i].children.length; j++) {
            posts.push({
                element: document.querySelector("article").querySelector(`[style*="flex-direction: column;"]`).children[i].children[j],
                type: "small"
            })
        }
    }
    addBlocker(posts);
}

let mutationObserver = new MutationObserver(mutations => {
    if (document.location.href.match(/(afd)/i))
        blockPostsOnAfDPage();
});
mutationObserver.observe(document.documentElement, {
    childList: true,
    subtree: true,
});