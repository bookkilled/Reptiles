/**
 * Edit by bookkilled on 17/3/6.
 */

'use strict';

import {Dispatcher} from 'flux';

import {TechReadStore} from './tech-read-store';

export let techReadDispatcher = new Dispatcher();

let techReadStore = new TechReadStore();

techReadDispatcher.register((action) => {
    switch(action.type){
    case 'CATEGORY_CHANGE':
        techReadStore.changeCategory(action.payload);
        break;
    }
});
