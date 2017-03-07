/**
 * Edit by bookkilled on 17/3/6.
 */

'use strict';

import {techReadDispatcher} from './tech-read-dispatch';

export class TechReadActions {

    changeCategoryAction (category) {
        techReadDispatcher.dispatch({
            type : 'CATEGORY_CHANGE',
            payload: category
        });
    }
}