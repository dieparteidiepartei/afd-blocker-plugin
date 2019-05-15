import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'body',
        type: 'big'
    },
]);

blocker.run([document]);
