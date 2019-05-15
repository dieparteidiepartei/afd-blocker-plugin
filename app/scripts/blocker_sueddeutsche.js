import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'li.element',
        type: 'big'
    },
    {
        selector: '.sz-teaserlist-element',
        type: 'big'
    },
    {
        selector: 'li.newsscannermodule__item',
        type: 'small'
    },
    {
        selector: 'article',
        type: 'big'
    },
    {
        selector: 'div.entrylist__entry',
        type: 'big'
    },
    {
        selector: 'div#sitecontent',
        type: 'big'
    },
]);

blocker.run([document]);

