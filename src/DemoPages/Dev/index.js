import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// 測試開發
import Basic from './Basic';
import Advanced from './Advanced';
import Profession from './Profession';



// Layout
import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
// import AppFooter from '../../Layout/AppFooter/';

const Elements = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    <Route path={`${match.url}/course/basic`} component={Basic}/>
                    <Route path={`${match.url}/course/advanced`} component={Advanced}/>
                    <Route path={`${match.url}/course/profession`} component={Profession}/>
                    

                </div>
                {/* <AppFooter/> */}
            </div>
        </div>
    </Fragment>
);

export default Elements;