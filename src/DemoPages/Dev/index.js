import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// 測試開發
import DevItem01 from './Dev-Item01';
import DevItem02 from './Dev-Item02';
import DevItem03 from './Dev-Item03';
import DevItem04 from './Dev-Item04';
import DevItem05 from './Dev-Item05';
import DevItem06 from './Dev-Item06';
import DevItem07 from './Dev-Item07';
import DevItem08 from './Dev-Item08';
import DevItem09 from './Dev-Item09';
import DevItem10 from './Dev-Item10';
import DevItem11 from './Dev-Item11';
import DevItem12 from './Dev-Item12';
import DevItem13 from './Dev-Item13';
import DevItem14 from './Dev-Item14';
import DevItem15 from './Dev-Item15';
import DevItem16 from './Dev-Item16';
import DevItem17 from './Dev-Item17';
import DevItem18 from './Dev-Item18';
import DevItem19 from './Dev-Item19';
import DevItem20 from './Dev-Item20';


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

                    <Route path={`${match.url}/devboxes/test01`} component={DevItem01}/>
                    <Route path={`${match.url}/devboxes/test02`} component={DevItem02}/>
                    <Route path={`${match.url}/devboxes/test03`} component={DevItem03}/>
                    <Route path={`${match.url}/devboxes/test04`} component={DevItem04}/>
                    <Route path={`${match.url}/devboxes/test05`} component={DevItem05}/>
                    <Route path={`${match.url}/devboxes/test06`} component={DevItem06}/>
                    <Route path={`${match.url}/devboxes/test07`} component={DevItem07}/>
                    <Route path={`${match.url}/devboxes/test08`} component={DevItem08}/>
                    <Route path={`${match.url}/devboxes/test09`} component={DevItem09}/>
                    <Route path={`${match.url}/devboxes/test10`} component={DevItem10}/>
                    <Route path={`${match.url}/devboxes/test11`} component={DevItem11}/>
                    <Route path={`${match.url}/devboxes/test12`} component={DevItem12}/>
                    <Route path={`${match.url}/devboxes/test13`} component={DevItem13}/>
                    <Route path={`${match.url}/devboxes/test14`} component={DevItem14}/>
                    <Route path={`${match.url}/devboxes/test15`} component={DevItem15}/>
                    <Route path={`${match.url}/devboxes/test16`} component={DevItem16}/>
                    <Route path={`${match.url}/devboxes/test17`} component={DevItem17}/>
                    <Route path={`${match.url}/devboxes/test18`} component={DevItem18}/>
                    <Route path={`${match.url}/devboxes/test19`} component={DevItem19}/>
                    <Route path={`${match.url}/devboxes/test20`} component={DevItem20}/>

                </div>
                {/* <AppFooter/> */}
            </div>
        </div>
    </Fragment>
);

export default Elements;