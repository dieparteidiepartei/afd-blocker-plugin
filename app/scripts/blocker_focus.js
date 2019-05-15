import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.slide div.img',
        type: 'small'
    },
    {
        selector: 'div.teaser',
        type: 'big'
    },
    {
        selector: 'li.teaser',
        type: 'big'
    },
    {
        selector: '#videoPlayer',
        type: 'big'
    },
    {
        selector: '.vidTeaserSingle',
        type: 'big'
    },
    {
        selector: '.teaserLink',
        type: 'big'
    },
    {
        selector: 'div.promo',
        type: 'big'
    },
    {
        selector: 'div.popularArticles',
        type: 'big'
    },
    {
        selector: 'div#article',
        type: 'big'
    },
    {
        selector: '.singleTeaser',
        type: 'big'
    },
    {
        selector: 'div.list',
        type: 'big'
    },
    {
        selector: 'article.videoContent',
        type: 'big'
    },
    {
        selector: '.container_11 div#video h1',
        type: 'big'
    },
    {
        selector: 'div.gsc-result',
        type: 'small'
    }
]);

blocker.run([document]);
