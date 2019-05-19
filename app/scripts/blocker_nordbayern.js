/**
 * Author: Florian Drechsler, @fdrechsler
 *
 * nordbayern.de
 *
 * Online Plattform von:
 * - Nürnberger Nachrichten
 * - NZ Nürnberger Zeitung
 * - Erlanger Nachrichten
 * - Fürther Nachrichten
 * - Neumarkter nachrichten
 * ....
 */

console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.search-item',
        type: 'small'
    },
    {
        selector: '.topmodulXXL',
        type: 'big'
    },
    {
        selector: '.xxxlItem1',
        type: 'small'
    },
    {
        selector: '.xxxlItem2',
        type: 'small'
    },
    {
        selector: '.xxxlItem3',
        type: 'small'
    },
    {
        selector: '.hp-kommentare',
        type: 'small'
    },
    {
        selector: '.mediabox',
        type: 'small'
    },
    {
        selector: '.article-content',
        type: 'big'
    },
    {
        selector: '.contentModul',
        type: 'big'
    },
    {
        selector: 'section',
        type: 'big'
    }
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
