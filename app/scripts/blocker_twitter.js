import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.tweet',
        type: 'big'
    },
    {
        selector: 'div.ProfileCard',
        type: 'big'
    },
    {
        selector: 'article',
        type: 'big'
    },
    {
        selector: 'div.entrylist__entry',
        type: 'small'
    },
]);

blocker.run([document]);
