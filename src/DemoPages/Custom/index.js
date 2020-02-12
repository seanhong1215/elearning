import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// 測試開發
import Course from './Course';



// Layout
import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
// import AppSidebar2 from '../../Layout/AppSidebar2/';
// import AppFooter from '../../Layout/AppFooter/';

const Elements = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    <Route path={`${match.url}/custom-course`} component={Course}/>

                </div>
                {/* <AppFooter/> */}
            </div>
        </div>
    </Fragment>
);

export default Elements;

