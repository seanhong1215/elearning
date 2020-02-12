import React, { Fragment } from 'react';
import { Progress } from 'reactstrap';
// import PageTitle from '../../../Layout/AppMain/DevPageTitle';
import CourseMedia from '../../../assets/utils/images/course-content/1.png';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,Button,
    Card, CardBody,
    CardTitle,CardImg,CardHeader,
    Collapse
} from 'reactstrap';
// import AppSidebar2 from '../../../Layout/AppSidebar2';




export default class Custom extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toTarget;
    }

    toTarget () {
        window.location.href = "#/custom/custom-course";
        }


   

    render() {

        return (
            <Fragment>
                <h3 className="page-title-heading">制鞋工藝流程</h3>
                <div className="d-flex">
                    <Progress className="mb-3 w-50" striped color="info" value={30} />
                </div>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Row>
                        <Col lg="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>原輔材料倉庫管理</CardTitle>
                                    <div></div>
                                    <div className="ml-auto badge badge-pill badge-info">基礎</div>
                                    <div></div>

                                </CardBody>
                            </Card>
                        </Col>
                        
                        <Col lg="8">
                            <Card className="mb-3" >
                                    <CardImg top width="100%"
                                         src={CourseMedia}
                                         alt=""/>
                                </Card>
                        </Col>

                        <Col lg="4" className="d-none d-lg-block">
                            
                            <Card>
                                <CardHeader body inverse style={{ backgroundColor: '#555', borderColor: '#555' }}>
                                    <Button block color="link" className="text-left m-0 p-0 text-white"
                                            onClick={this.toggle}>
                                        <h5 className="m-0 p-0">原輔材料倉庫管理</h5>
                                    </Button>
                                </CardHeader>
                            
                            
                                <CardHeader body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <Button block color="link" className="text-left m-0 p-0 text-white"
                                            onClick={this.toggle}>
                                        <h5 className="m-0 p-0">裁斷車間管理</h5>
                                    </Button>
                                </CardHeader>
                                
                            
                            
                                <CardHeader body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <Button block color="link" className="text-left m-0 p-0 text-white"
                                            onClick={this.toggle}>
                                        <h5 className="m-0 p-0">調配中心管理</h5>
                                    </Button>
                                </CardHeader>
                                <CardHeader body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <Button block color="link" className="text-left m-0 p-0 text-white"
                                            onClick={this.toggle}>
                                        <h5 className="m-0 p-0">針車車間管理</h5>
                                    </Button>
                                </CardHeader>
                                <CardHeader body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <Button block color="link" className="text-left m-0 p-0 text-white"
                                            onClick={this.toggle}>
                                        <h5 className="m-0 p-0">鞋底車間管理</h5>
                                    </Button>
                                </CardHeader>
                                <CardHeader body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <Button block color="link" className="text-left m-0 p-0 text-white"
                                            onClick={this.toggle}>
                                        <h5 className="m-0 p-0">
半成品倉庫管理</h5>
                                    </Button>
                                </CardHeader>
                                <CardHeader body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <Button block color="link" className="text-left m-0 p-0 text-white"
                                            onClick={this.toggle}>
                                        <h5 className="m-0 p-0">夾幫成型車間管理</h5>
                                    </Button>
                                </CardHeader>
                                <CardHeader body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <Button block color="link" className="text-left m-0 p-0 text-white"
                                            onClick={this.toggle}>
                                        <h5 className="m-0 p-0">擦膠及貼底成型</h5>
                                    </Button>
                                </CardHeader>
                                <CardHeader body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <Button block color="link" className="text-left m-0 p-0 text-white"
                                            onClick={this.toggle}>
                                        <h5 className="m-0 p-0">
整理及包裝</h5>
                                    </Button>
                                </CardHeader>
                                <CardHeader body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <Button block color="link" className="text-left m-0 p-0 text-white"
                                            onClick={this.toggle}>
                                        <h5 className="m-0 p-0">制鞋生產線所需其他器材</h5>
                                    </Button>
                                </CardHeader>
                                <CardHeader body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <Button block color="link" className="text-left m-0 p-0 text-white"
                                            onClick={this.toggle}>
                                        <h5 className="m-0 p-0">初級工人認證</h5>
                                    </Button>
                                </CardHeader>
    
                            </Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>

            </Fragment>
        );
    }
}