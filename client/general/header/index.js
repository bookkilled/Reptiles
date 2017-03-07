/**
 * Edit by bookkilled on 17/3/6.
 */

'use strict';

import './index.less';

import React, {Component} from 'react';

export default class Header extends Component {
    constructor (){
        super ();
    }

    render (){
        return (
            <header>
                <div className="tech-daily-read-header">
                    <span className="logo-text">金融新闻资讯</span>
                    <span className="logo-text-desc">All News from Internet Source</span>
                </div>
                <div className="star-me">
                    <a href="javascript:;" target="_blank">测试阶段</a>
                </div>
            </header>
        );
    }
}