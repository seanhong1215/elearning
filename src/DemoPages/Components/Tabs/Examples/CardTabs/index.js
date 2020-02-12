import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import {
    TabContent, TabPane, Nav, NavItem, NavLink,
    Row, Col, CardHeader, CardFooter,CardTitle,
    Card, CardBody,
    Button, ButtonGroup,Table
} from 'reactstrap';

export default class CardTabsExample extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            activeTab: '1',
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                    <Row>
                        <Col md="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>熱門課程</CardTitle>
                                    <div className="mb-3" tabs="true">
                                        <ButtonGroup size="sm">
                                            <Button caret="true" color="info"
                                                className={"btn-pill pl-3 " + classnames({ active: this.state.activeTab === '1' })}
                                                onClick={() => {
                                                    this.toggle('1');
                                                }}
                                            >Course 1</Button>
                                            <Button color="info"
                                                className={classnames({ active: this.state.activeTab === '2' })}
                                                onClick={() => {
                                                    this.toggle('2');
                                                }}
                                            >Course 2</Button>
                                            <Button color="info"
                                                className={"btn-pill pr-3 " + classnames({ active: this.state.activeTab === '3' })}
                                                onClick={() => {
                                                    this.toggle('3');
                                                }}
                                            >Course 3</Button>
                                        </ButtonGroup>
                                    </div>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <Table className="mb-0">
                                            <tbody>
                                                    <tr>
                                                        <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">原輔材料倉庫管理</a></th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">裁斷車間管理</a></th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">調配中心管理</a></th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">針車車間管理</a></th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">鞋底車間管理</a></th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">半成品倉庫管理</a></th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
                                                    </tr> 
                                                    <tr>
                                                        <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">夾幫成型車間管理</a></th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
                                                    </tr> 
                                                    <tr>
                                                        <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">擦膠及貼底成型</a></th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
                                                    </tr> 
                                                    <tr>
                                                        <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">整理及包裝</a></th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
                                                    </tr> 
                                                    <tr>
                                                        <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">制鞋生產線所需其他器材</a></th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">初級工人認證</a></th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Table className="mb-0">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">原輔材料倉庫管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">裁斷車間管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">調配中心管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">針車車間管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">鞋底車間管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">半成品倉庫管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
                                                    </tr> 
                                                    <tr>
                                                        <th scope="row">夾幫成型車間管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
                                                    </tr> 
                                                    <tr>
                                                        <th scope="row">擦膠及貼底成型</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
                                                    </tr> 
                                                    <tr>
                                                        <th scope="row">整理及包裝</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
                                                    </tr> 
                                                    <tr>
                                                        <th scope="row">制鞋生產線所需其他器材</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Table className="mb-0">
                                            <tbody>
                                                    <tr>
                                                        <th scope="row">原輔材料倉庫管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">裁斷車間管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">調配中心管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">針車車間管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">鞋底車間管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">半成品倉庫管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
                                                    </tr> 
                                                    <tr>
                                                        <th scope="row">夾幫成型車間管理</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
                                                    </tr> 
                                                    <tr>
                                                        <th scope="row">擦膠及貼底成型</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
                                                    </tr> 
                                                    <tr>
                                                        <th scope="row">整理及包裝</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
                                                    </tr> 
                                                    <tr>
                                                        <th scope="row">制鞋生產線所需其他器材</th>
                                                        <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}

// import React, {Fragment} from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import classnames from 'classnames';

// import {
//     TabContent, TabPane, Nav, NavItem, NavLink,
//     Row, Col, CardHeader, CardFooter,CardTitle,
//     Card, CardBody,
//     Button, ButtonGroup,Table
// } from 'reactstrap';

// export default class CardTabsExample extends React.Component {
//     constructor(props) {
//         super(props);

//         this.toggle = this.toggle.bind(this);

//         this.state = {
//             activeTab: '1',
//         };
//     }

//     toggle(tab) {
//         if (this.state.activeTab !== tab) {
//             this.setState({
//                 activeTab: tab
//             });
//         }
//     }

//     render() {

//         return (
//             <Fragment>
//                 <ReactCSSTransitionGroup
//                     component="div"
//                     transitionName="TabsAnimation"
//                     transitionAppear={true}
//                     transitionAppearTimeout={0}
//                     transitionEnter={false}
//                     transitionLeave={false}>
//                     <div>
//                     <Row>
//                         <Col md="12">
//                             <Card className="main-card mb-3">
//                                 <CardBody>
//                                     <CardTitle>熱門課程</CardTitle>
//                                     <div className="mb-3" tabs="true">
//                                         <ButtonGroup size="sm">
//                                             <Button caret="true" color="info"
//                                                 className={"btn-pill pl-3 " + classnames({ active: this.state.activeTab === '1' })}
//                                                 onClick={() => {
//                                                     this.toggle('1');
//                                                 }}
//                                             >Course 1</Button>
//                                             <Button color="info"
//                                                 className={classnames({ active: this.state.activeTab === '2' })}
//                                                 onClick={() => {
//                                                     this.toggle('2');
//                                                 }}
//                                             >Course 2</Button>
//                                             <Button color="info"
//                                                 className={"btn-pill pr-3 " + classnames({ active: this.state.activeTab === '3' })}
//                                                 onClick={() => {
//                                                     this.toggle('3');
//                                                 }}
//                                             >Course 3</Button>
//                                         </ButtonGroup>
//                                     </div>
//                                     <TabContent activeTab={this.state.activeTab}>
//                                         <TabPane tabId="1">
//                                             <Table className="mb-0">
//                                             <tbody>
//                                                     <tr>
//                                                         <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">原輔材料倉庫管理</a></th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">裁斷車間管理</a></th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">調配中心管理</a></th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">針車車間管理</a></th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">鞋底車間管理</a></th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">半成品倉庫管理</a></th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
//                                                     </tr> 
//                                                     <tr>
//                                                         <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">夾幫成型車間管理</a></th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
//                                                     </tr> 
//                                                     <tr>
//                                                         <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">擦膠及貼底成型</a></th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
//                                                     </tr> 
//                                                     <tr>
//                                                         <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">整理及包裝</a></th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
//                                                     </tr> 
//                                                     <tr>
//                                                         <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">制鞋生產線所需其他器材</a></th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">初級工人認證</a></th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-success">Published</div></td>
//                                                     </tr>
//                                                 </tbody>
//                                             </Table>
//                                         </TabPane>
//                                         <TabPane tabId="2">
//                                             <Table className="mb-0">
//                                                 <tbody>
//                                                     <tr>
//                                                         <th scope="row">原輔材料倉庫管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row">裁斷車間管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row">調配中心管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row">針車車間管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row">鞋底車間管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row">半成品倉庫管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
//                                                     </tr> 
//                                                     <tr>
//                                                         <th scope="row">夾幫成型車間管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
//                                                     </tr> 
//                                                     <tr>
//                                                         <th scope="row">擦膠及貼底成型</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
//                                                     </tr> 
//                                                     <tr>
//                                                         <th scope="row">整理及包裝</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
//                                                     </tr> 
//                                                     <tr>
//                                                         <th scope="row">制鞋生產線所需其他器材</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-danger">Published</div></td>
//                                                     </tr>
//                                                 </tbody>
//                                             </Table>
//                                         </TabPane>
//                                         <TabPane tabId="3">
//                                             <Table className="mb-0">
//                                             <tbody>
//                                                     <tr>
//                                                         <th scope="row">原輔材料倉庫管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row">裁斷車間管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row">調配中心管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row">針車車間管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row">鞋底車間管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th scope="row">半成品倉庫管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
//                                                     </tr> 
//                                                     <tr>
//                                                         <th scope="row">夾幫成型車間管理</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
//                                                     </tr> 
//                                                     <tr>
//                                                         <th scope="row">擦膠及貼底成型</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
//                                                     </tr> 
//                                                     <tr>
//                                                         <th scope="row">整理及包裝</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
//                                                     </tr> 
//                                                     <tr>
//                                                         <th scope="row">制鞋生產線所需其他器材</th>
//                                                         <td className="text-right"><div className="mb-2 mr-2 badge badge-warning">Published</div></td>
//                                                     </tr>
//                                                 </tbody>
//                                             </Table>
//                                         </TabPane>
//                                     </TabContent>
//                                 </CardBody>
//                             </Card>
//                         </Col>
//                     </Row>
//                     </div>
//                 </ReactCSSTransitionGroup>
//             </Fragment>
//         );
//     }
// }

// // import React, {Fragment} from 'react';
// // import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// // import classnames from 'classnames';

// // import {
// //     TabContent, TabPane, Nav, NavItem, NavLink,
// //     Row, Col, CardHeader, CardFooter,
// //     Card, CardBody,
// //     Button, ButtonGroup, Container
// // } from 'reactstrap';

// // import AnimatedLinesTabsExample from '../AnimatedLines';

// // import dummyData from '../dummyData';

// // export default class CardTabsExample extends React.Component {
// //     constructor(props) {
// //         super(props);

// //         this.toggle = this.toggle.bind(this);
// //         this.state = {
// //             activeTab: '1',
// //             showMore: true,
// //             transform: true,
// //             showInkBar: true,
// //             items: this.getSimpleTabs(),
// //             selectedTabKey: 0,
// //             transformWidth: 400,
// //         };
// //     }

// //     toggle(tab) {
// //         if (this.state.activeTab !== tab) {
// //             this.setState({
// //                 activeTab: tab
// //             });
// //         }
// //     }

// //     onChangeProp = propsName =>
// //         evt => {
// //             this.setState({[propsName]: evt.target.type === 'checkbox' ? evt.target.checked : +evt.target.value});
// //         };

// //     getSimpleTabs = () =>
// //         dummyData.map(({name, biography}, index) => ({
// //             key: index,
// //             title: name,
// //             getContent: () => biography,
// //         }));


// //     render() {

// //         return (
// //             <Fragment>
// //                 <ReactCSSTransitionGroup
// //                     component="div"
// //                     transitionName="TabsAnimation"
// //                     transitionAppear={true}
// //                     transitionAppearTimeout={0}
// //                     transitionEnter={false}
// //                     transitionLeave={false}>
// //                     <Container fluid>
// //                         <Row>
// //                             <Col md="6">
// //                                 <Card className="main-card mb-3">
// //                                     <CardHeader>
// //                                         <i className="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
// //                                         Header with Tabs
// //                                         <div className="btn-actions-pane-right">
// //                                             <ButtonGroup size="sm">
// //                                                 <Button color="primary"
// //                                                         className={"btn-shadow " + classnames({active: this.state.activeTab === '1'})}
// //                                                         onClick={() => {
// //                                                             this.toggle('1');
// //                                                         }}
// //                                                 >Tab 1</Button>
// //                                                 <Button color="primary"
// //                                                         className={"btn-shadow " + classnames({active: this.state.activeTab === '2'})}
// //                                                         onClick={() => {
// //                                                             this.toggle('2');
// //                                                         }}
// //                                                 >Tab 2</Button>
// //                                                 <Button color="primary"
// //                                                         className={"btn-shadow " + classnames({active: this.state.activeTab === '3'})}
// //                                                         onClick={() => {
// //                                                             this.toggle('3');
// //                                                         }}
// //                                                 >Tab 3</Button>
// //                                             </ButtonGroup>
// //                                         </div>
// //                                     </CardHeader>
// //                                     <CardBody>

// //                                         <TabContent activeTab={this.state.activeTab}>
// //                                             <TabPane tabId="1">
// //                                                 <p>It was popularised in the 1960s with the release of Letraset sheets
// //                                                     containing Lorem Ipsum passages, and more recently with desktop
// //                                                     publishing software like Aldus PageMaker including versions of Lorem
// //                                                     Ipsum.</p>
// //                                             </TabPane>
// //                                             <TabPane tabId="2">
// //                                                 <p>Like Aldus PageMaker including versions of Lorem. It has survived not
// //                                                     only five centuries, but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                             <TabPane tabId="3">
// //                                                 <p>Lorem Ipsum has been the industry's standard dummy text ever since
// //                                                     the
// //                                                     1500s, when an unknown printer took a galley of type and scrambled
// //                                                     it to
// //                                                     make a type specimen book. It has survived not only five centuries,
// //                                                     but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                         </TabContent>

// //                                     </CardBody>
// //                                     <CardFooter className="d-block text-right">
// //                                         <Button className="btn-wide" color="success">
// //                                             Save
// //                                         </Button>
// //                                     </CardFooter>
// //                                 </Card>
// //                                 <Card className="main-card mb-3">
// //                                     <CardHeader>
// //                                         <i className="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
// //                                         Header Tabs Buttons
// //                                         <div className="btn-actions-pane-right">
// //                                             <Button size="sm" outline color="alternate"
// //                                                     className={"btn-pill btn-wide " + classnames({active: this.state.activeTab === '1'})}
// //                                                     onClick={() => {
// //                                                         this.toggle('1');
// //                                                     }}>Tab 1</Button>
// //                                             <Button size="sm" outline color="alternate"
// //                                                     className={"btn-pill btn-wide mr-1 ml-1 " + classnames({active: this.state.activeTab === '2'})}
// //                                                     onClick={() => {
// //                                                         this.toggle('2');
// //                                                     }}>Tab 2</Button>
// //                                             <Button size="sm" outline color="alternate"
// //                                                     className={"btn-pill btn-wide " + classnames({active: this.state.activeTab === '3'})}
// //                                                     onClick={() => {
// //                                                         this.toggle('3');
// //                                                     }}>Tab 3</Button>
// //                                         </div>
// //                                     </CardHeader>
// //                                     <CardBody>

// //                                         <TabContent activeTab={this.state.activeTab}>
// //                                             <TabPane tabId="1">
// //                                                 <p>It was popularised in the 1960s with the release of Letraset sheets
// //                                                     containing Lorem Ipsum passages, and more recently with desktop
// //                                                     publishing software like Aldus PageMaker including versions of Lorem
// //                                                     Ipsum.</p>
// //                                             </TabPane>
// //                                             <TabPane tabId="2">
// //                                                 <p>Like Aldus PageMaker including versions of Lorem. It has survived not
// //                                                     only five centuries, but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                             <TabPane tabId="3">
// //                                                 <p>Lorem Ipsum has been the industry's standard dummy text ever since
// //                                                     the
// //                                                     1500s, when an unknown printer took a galley of type and scrambled
// //                                                     it to
// //                                                     make a type specimen book. It has survived not only five centuries,
// //                                                     but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                         </TabContent>

// //                                     </CardBody>
// //                                     <CardFooter className="d-block text-right">
// //                                         <Button className="btn-wide" color="success">
// //                                             Save
// //                                         </Button>
// //                                     </CardFooter>
// //                                 </Card>
// //                                 <Card className="main-card mb-3">
// //                                     <CardHeader>
// //                                         <i className="header-icon lnr-gift icon-gradient bg-mixed-hopes"> </i>
// //                                         Alternate Tabs
// //                                         <div className="btn-actions-pane-right">
// //                                             <ButtonGroup size="sm">
// //                                                 <Button color="focus"
// //                                                         className={"btn-pill pl-3 " + classnames({active: this.state.activeTab === '1'})}
// //                                                         onClick={() => {
// //                                                             this.toggle('1');
// //                                                         }}
// //                                                 >Tab 1</Button>
// //                                                 <Button color="focus"
// //                                                         className={classnames({active: this.state.activeTab === '2'})}
// //                                                         onClick={() => {
// //                                                             this.toggle('2');
// //                                                         }}
// //                                                 >Tab 2</Button>
// //                                                 <Button color="focus"
// //                                                         className={"btn-pill pr-3 " + classnames({active: this.state.activeTab === '3'})}
// //                                                         onClick={() => {
// //                                                             this.toggle('3');
// //                                                         }}
// //                                                 >Tab 3</Button>
// //                                             </ButtonGroup>
// //                                         </div>
// //                                     </CardHeader>
// //                                     <CardBody>

// //                                         <TabContent activeTab={this.state.activeTab}>
// //                                             <TabPane tabId="1">
// //                                                 <p>It was popularised in the 1960s with the release of Letraset sheets
// //                                                     containing Lorem Ipsum passages, and more recently with desktop
// //                                                     publishing software like Aldus PageMaker including versions of Lorem
// //                                                     Ipsum.</p>
// //                                             </TabPane>
// //                                             <TabPane tabId="2">
// //                                                 <p>Like Aldus PageMaker including versions of Lorem. It has survived not
// //                                                     only five centuries, but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                             <TabPane tabId="3">
// //                                                 <p>Lorem Ipsum has been the industry's standard dummy text ever since
// //                                                     the
// //                                                     1500s, when an unknown printer took a galley of type and scrambled
// //                                                     it to
// //                                                     make a type specimen book. It has survived not only five centuries,
// //                                                     but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                         </TabContent>

// //                                     </CardBody>
// //                                 </Card>
// //                                 <Card className="main-card mb-3">
// //                                     <CardHeader>
// //                                         <i className="header-icon lnr-gift icon-gradient bg-grow-early"> </i>
// //                                         Header Tabs Standard Buttons
// //                                         <div className="btn-actions-pane-right">
// //                                             <Button outline
// //                                                     className={"border-0 btn-pill btn-wide btn-transition " + classnames({active: this.state.activeTab === '1'})}
// //                                                     color="danger" onClick={() => {
// //                                                 this.toggle('1');
// //                                             }}>Tab 1</Button>
// //                                             <Button outline
// //                                                     className={"mr-1 ml-1 btn-pill btn-wide border-0 btn-transition " + classnames({active: this.state.activeTab === '2'})}
// //                                                     color="danger" onClick={() => {
// //                                                 this.toggle('2');
// //                                             }}>Tab 2</Button>
// //                                             <Button outline
// //                                                     className={"border-0 btn-pill btn-wide btn-transition " + classnames({active: this.state.activeTab === '3'})}
// //                                                     color="danger" onClick={() => {
// //                                                 this.toggle('3');
// //                                             }}>Tab 3</Button>
// //                                         </div>
// //                                     </CardHeader>
// //                                     <CardBody>
// //                                         <TabContent activeTab={this.state.activeTab}>
// //                                             <TabPane tabId="1">
// //                                                 <p>It was popularised in the 1960s with the release of Letraset sheets
// //                                                     containing Lorem Ipsum passages, and more recently with desktop
// //                                                     publishing software like Aldus PageMaker including versions of Lorem
// //                                                     Ipsum.</p>
// //                                             </TabPane>
// //                                             <TabPane tabId="2">
// //                                                 <p>Like Aldus PageMaker including versions of Lorem. It has survived not
// //                                                     only five centuries, but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                             <TabPane tabId="3">
// //                                                 <p>Lorem Ipsum has been the industry's standard dummy text ever since
// //                                                     the
// //                                                     1500s, when an unknown printer took a galley of type and scrambled
// //                                                     it to
// //                                                     make a type specimen book. It has survived not only five centuries,
// //                                                     but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                         </TabContent>
// //                                     </CardBody>
// //                                     <CardFooter className="d-block text-right">
// //                                         <Button className="btn-wide" color="success">
// //                                             Save
// //                                         </Button>
// //                                     </CardFooter>
// //                                 </Card>
// //                             </Col>
// //                             <Col md="6">
// //                                 <Card tabs="true" className="mb-3">
// //                                     <CardHeader className="card-header-tab">
// //                                         <div className="card-header-title">
// //                                             <i className="header-icon lnr-bicycle icon-gradient bg-love-kiss"> </i>
// //                                             Header Alternate Tabs
// //                                         </div>
// //                                         <Nav>
// //                                             <NavItem>
// //                                                 <NavLink href="javascript:void(0);"
// //                                                          className={classnames({active: this.state.activeTab === '1'})}
// //                                                          onClick={() => {
// //                                                              this.toggle('1');
// //                                                          }}
// //                                                 >
// //                                                     Tab 1
// //                                                 </NavLink>
// //                                             </NavItem>
// //                                             <NavItem>
// //                                                 <NavLink href="javascript:void(0);"
// //                                                          className={classnames({active: this.state.activeTab === '2'})}
// //                                                          onClick={() => {
// //                                                              this.toggle('2');
// //                                                          }}
// //                                                 >
// //                                                     Tab 2
// //                                                 </NavLink>
// //                                             </NavItem>
// //                                             <NavItem>
// //                                                 <NavLink href="javascript:void(0);"
// //                                                          className={classnames({active: this.state.activeTab === '3'})}
// //                                                          onClick={() => {
// //                                                              this.toggle('3');
// //                                                          }}
// //                                                 >
// //                                                     Tab 3
// //                                                 </NavLink>
// //                                             </NavItem>
// //                                         </Nav>
// //                                     </CardHeader>
// //                                     <CardBody>

// //                                         <TabContent activeTab={this.state.activeTab}>
// //                                             <TabPane tabId="1">
// //                                                 <p>It was popularised in the 1960s with the release of Letraset sheets
// //                                                     containing Lorem Ipsum passages, and more recently with desktop
// //                                                     publishing software like Aldus PageMaker including versions of Lorem
// //                                                     Ipsum.</p>
// //                                             </TabPane>
// //                                             <TabPane tabId="2">
// //                                                 <p>Like Aldus PageMaker including versions of Lorem. It has survived not
// //                                                     only five centuries, but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                             <TabPane tabId="3">
// //                                                 <p>Lorem Ipsum has been the industry's standard dummy text ever since
// //                                                     the
// //                                                     1500s, when an unknown printer took a galley of type and scrambled
// //                                                     it to
// //                                                     make a type specimen book. It has survived not only five centuries,
// //                                                     but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                         </TabContent>

// //                                     </CardBody>
// //                                     <CardFooter className="d-block text-right">
// //                                         <Button className="btn-wide btn-shadow" color="danger">
// //                                             Delete
// //                                         </Button>
// //                                     </CardFooter>
// //                                 </Card>
// //                                 <Card className="main-card mb-3">
// //                                     <CardHeader>
// //                                         <i className="header-icon lnr-gift icon-gradient bg-grow-early"> </i>
// //                                         Header Tabs Standard Buttons
// //                                         <div className="btn-actions-pane-right">
// //                                             <Button outline
// //                                                     className={"border-0 btn-transition " + classnames({active: this.state.activeTab === '1'})}
// //                                                     color="primary" onClick={() => {
// //                                                 this.toggle('1');
// //                                             }}>Tab 1</Button>
// //                                             <Button outline
// //                                                     className={"mr-1 ml-1 border-0 btn-transition " + classnames({active: this.state.activeTab === '2'})}
// //                                                     color="primary" onClick={() => {
// //                                                 this.toggle('2');
// //                                             }}>Tab 2</Button>
// //                                             <Button outline
// //                                                     className={"border-0 btn-transition " + classnames({active: this.state.activeTab === '3'})}
// //                                                     color="primary" onClick={() => {
// //                                                 this.toggle('3');
// //                                             }}>Tab 3</Button>
// //                                         </div>
// //                                     </CardHeader>
// //                                     <CardBody>

// //                                         <TabContent activeTab={this.state.activeTab}>
// //                                             <TabPane tabId="1">
// //                                                 <p>It was popularised in the 1960s with the release of Letraset sheets
// //                                                     containing Lorem Ipsum passages, and more recently with desktop
// //                                                     publishing software like Aldus PageMaker including versions of Lorem
// //                                                     Ipsum.</p>
// //                                             </TabPane>
// //                                             <TabPane tabId="2">
// //                                                 <p>Like Aldus PageMaker including versions of Lorem. It has survived not
// //                                                     only five centuries, but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                             <TabPane tabId="3">
// //                                                 <p>Lorem Ipsum has been the industry's standard dummy text ever since
// //                                                     the
// //                                                     1500s, when an unknown printer took a galley of type and scrambled
// //                                                     it to
// //                                                     make a type specimen book. It has survived not only five centuries,
// //                                                     but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                         </TabContent>
// //                                     </CardBody>
// //                                     <CardFooter className="d-block text-right">
// //                                         <Button className="btn-wide" color="success">
// //                                             Save
// //                                         </Button>
// //                                     </CardFooter>
// //                                 </Card>
// //                                 <Card tabs={true} className="mb-3">
// //                                     <CardHeader>
// //                                         <Nav justified>
// //                                             <NavItem>
// //                                                 <NavLink href="javascript:void(0);"
// //                                                          className={classnames({active: this.state.activeTab === '1'})}
// //                                                          onClick={() => {
// //                                                              this.toggle('1');
// //                                                          }}
// //                                                 >
// //                                                     Tab 1
// //                                                 </NavLink>
// //                                             </NavItem>
// //                                             <NavItem>
// //                                                 <NavLink href="javascript:void(0);"
// //                                                          className={classnames({active: this.state.activeTab === '2'})}
// //                                                          onClick={() => {
// //                                                              this.toggle('2');
// //                                                          }}
// //                                                 >
// //                                                     Tab 2
// //                                                 </NavLink>
// //                                             </NavItem>
// //                                             <NavItem>
// //                                                 <NavLink href="javascript:void(0);"
// //                                                          className={classnames({active: this.state.activeTab === '3'})}
// //                                                          onClick={() => {
// //                                                              this.toggle('3');
// //                                                          }}
// //                                                 >
// //                                                     Tab 3
// //                                                 </NavLink>
// //                                             </NavItem>
// //                                         </Nav>
// //                                     </CardHeader>
// //                                     <CardBody>

// //                                         <TabContent activeTab={this.state.activeTab}>
// //                                             <TabPane tabId="1">
// //                                                 <p>It was popularised in the 1960s with the release of Letraset sheets
// //                                                     containing Lorem Ipsum passages, and more recently with desktop
// //                                                     publishing software like Aldus PageMaker including versions of Lorem
// //                                                     Ipsum.</p>
// //                                             </TabPane>
// //                                             <TabPane tabId="2">
// //                                                 <p>Like Aldus PageMaker including versions of Lorem. It has survived not
// //                                                     only five centuries, but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                             <TabPane tabId="3">
// //                                                 <p>Lorem Ipsum has been the industry's standard dummy text ever since
// //                                                     the
// //                                                     1500s, when an unknown printer took a galley of type and scrambled
// //                                                     it to
// //                                                     make a type specimen book. It has survived not only five centuries,
// //                                                     but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                         </TabContent>

// //                                     </CardBody>
// //                                 </Card>
// //                                 <Card tabs={true} className="mb-3">
// //                                     <CardHeader className="card-header-tab card-header-tab-animation">
// //                                         <div
// //                                             className="card-header-title font-size-lg text-capitalize font-weight-normal">
// //                                             <i className="header-icon lnr-gift icon-gradient bg-love-kiss"> </i>
// //                                             Tabs Alternate Animation
// //                                         </div>
// //                                         <Nav>
// //                                             <NavItem>
// //                                                 <NavLink href="javascript:void(0);"
// //                                                          className={classnames({active: this.state.activeTab === '1'})}
// //                                                          onClick={() => {
// //                                                              this.toggle('1');
// //                                                          }}
// //                                                 >
// //                                                     Tab 1
// //                                                 </NavLink>
// //                                             </NavItem>
// //                                             <NavItem>
// //                                                 <NavLink href="javascript:void(0);"
// //                                                          className={classnames({active: this.state.activeTab === '2'})}
// //                                                          onClick={() => {
// //                                                              this.toggle('2');
// //                                                          }}
// //                                                 >
// //                                                     Tab 2
// //                                                 </NavLink>
// //                                             </NavItem>
// //                                             <NavItem>
// //                                                 <NavLink href="javascript:void(0);"
// //                                                          className={classnames({active: this.state.activeTab === '3'})}
// //                                                          onClick={() => {
// //                                                              this.toggle('3');
// //                                                          }}
// //                                                 >
// //                                                     Tab 3
// //                                                 </NavLink>
// //                                             </NavItem>
// //                                         </Nav>
// //                                     </CardHeader>
// //                                     <CardBody>

// //                                         <TabContent activeTab={this.state.activeTab}>
// //                                             <TabPane tabId="1">
// //                                                 <p>It was popularised in the 1960s with the release of Letraset sheets
// //                                                     containing Lorem Ipsum passages, and more recently with desktop
// //                                                     publishing software like Aldus PageMaker including versions of Lorem
// //                                                     Ipsum.</p>
// //                                             </TabPane>
// //                                             <TabPane tabId="2">
// //                                                 <p>Like Aldus PageMaker including versions of Lorem. It has survived not
// //                                                     only five centuries, but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                             <TabPane tabId="3">
// //                                                 <p>Lorem Ipsum has been the industry's standard dummy text ever since
// //                                                     the
// //                                                     1500s, when an unknown printer took a galley of type and scrambled
// //                                                     it to
// //                                                     make a type specimen book. It has survived not only five centuries,
// //                                                     but
// //                                                     also the leap into electronic typesetting, remaining essentially
// //                                                     unchanged. </p>
// //                                             </TabPane>
// //                                         </TabContent>

// //                                     </CardBody>
// //                                     <CardFooter className="d-block text-center">
// //                                         <Button className="btn-wide" color="link">
// //                                             Link Button
// //                                         </Button>
// //                                         <Button className="btn-wide btn-shadow" color="danger">
// //                                             Delete
// //                                         </Button>
// //                                     </CardFooter>
// //                                 </Card>
// //                             </Col>
// //                         </Row>
// //                         <AnimatedLinesTabsExample/>
// //                     </Container>
// //                 </ReactCSSTransitionGroup>
// //             </Fragment>
// //         );
// //     }
// // }
