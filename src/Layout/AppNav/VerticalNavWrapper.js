import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MetisMenu from 'react-metismenu';
import {
    setEnableMobileMenu
} from '../../reducers/ThemeOptions';
import {MainNav, ComponentsNav, WidgetsNav} from './NavItems';

class Nav extends Component {

    state = {};

    toggleMobileSidebar = () => {        
        let {enableMobileMenu, setEnableMobileMenu} = this.props;
        setEnableMobileMenu(!enableMobileMenu);
    }
    
    render() {
        return (
            <Fragment>
             <h5 className="app-sidebar__heading ">首頁</h5>
                <div className="metismenu vertical-nav-menu">
                    <ul className="metismenu-container">
                        <li className="metismenu-item">
                            <a className="metismenu-link" href="/">
                                <i className="metismenu-icon pe-7s-home"></i>
                                Dashboard
                            </a>
                        </li>
                    </ul>
                </div>
                <h5 className="app-sidebar__heading">訊息公告</h5>
                <MetisMenu content={MainNav} onSelected={this.toggleMobileSidebar} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">培訓中心</h5>
                <MetisMenu content={WidgetsNav}  onSelected={this.toggleMobileSidebar} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">學習資源</h5>
                <MetisMenu content={ComponentsNav}  onSelected={this.toggleMobileSidebar} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

                <h5 className="app-sidebar__heading d-none">基本設定</h5>
                {/* <MetisMenu content={FormsNav}  onSelected={this.toggleMobileSidebar} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
                <h5 className="app-sidebar__heading d-none">Charts</h5>
                {/* <MetisMenu content={ChartsNav}  onSelected={this.toggleMobileSidebar} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
            </Fragment>
        );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}
const mapStateToProps = state => ({
    enableMobileMenu: state.ThemeOptions.enableMobileMenu
});

const mapDispatchToProps = dispatch => ({

    setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable)),

});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));