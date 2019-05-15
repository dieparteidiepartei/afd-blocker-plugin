import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'article',
        type: 'big'
    },
    {
        selector: '.mod-top-list',
        type: 'big'
    },
    {
        selector: '.mod-aside',
        type: 'big'
    },
    {
        selector: '.box-head',
        type: 'big'
    }
]);

blocker.run([document]);

