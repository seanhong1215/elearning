import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// DASHBOARDS

import index from './Example';

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar';

// Theme Options
// import ThemeOptions from '../../Layout/ThemeOptions/';

const Dashboards = ({match}) => (
    <Fragment>
        {/* <ThemeOptions/> */}
        <AppHeader/>
       
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/index`} component={index}/>
                </div>
                
            </div>
        </div>
    </Fragment>
);

export default Dashboards;