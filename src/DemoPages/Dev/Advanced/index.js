import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col, Button,
    Card, CardBody,
    CardTitle, CardImg,
    CardText, CardSubtitle, CardLink,
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

export default class Custom extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toTarget;
    }

    toTarget() {
        window.location.href = "#/custom/custom-course";
    }


    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="在職進修課程"
                    // subheading="系統開發中，請敬請期待"
                    icon="pe-7s-star icon-gradient bg-ripe-malin"
                />
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Row>
                        <Col md="4">
                            <Card className="main-card mb-3">
                                <CardLink href="#/custom/custom-course">
                                    <CardImg top width="100%"
                                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                        alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                    </CardBody>
                                </CardLink>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardLink href="#/custom/custom-course">
                                    <CardImg bottom width="100%"
                                        src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                                        alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                    </CardBody>
                                </CardLink>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardLink href="#/custom/custom-course">
                                    <CardImg top width="100%"
                                        src="https://images.unsplash.com/photo-1542041424505-01527297cc72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                        alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                    </CardBody>
                                </CardLink>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="main-card mb-3">
                                <CardLink href="#/custom/custom-course">
                                    <CardImg top width="100%"
                                        src="https://images.unsplash.com/photo-1474674556023-efef886fa147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                        alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                    </CardBody>
                                </CardLink>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardLink href="#/custom/custom-course">
                                    <CardImg top width="100%"
                                        src="https://images.unsplash.com/photo-1524514587686-e2909d726e9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                        alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                    </CardBody>
                                </CardLink>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardLink href="#/custom/custom-course">
                                    <CardImg top width="100%"
                                        src="https://images.unsplash.com/photo-1473643068424-cd2485e1ae3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                        alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                    </CardBody>
                                </CardLink>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="main-card mb-3">
                                <CardLink href="#/custom/custom-course">
                                    <CardImg top width="100%"
                                        src="https://images.unsplash.com/photo-1560574188-6a6774965120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                        alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                    </CardBody>
                                </CardLink>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardLink href="#/custom/custom-course">
                                    <CardImg top width="100%"
                                        src="https://images.unsplash.com/photo-1563456019498-843e11bdaae0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                                        alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                    </CardBody>
                                </CardLink>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardLink href="#/custom/custom-course">
                                    <CardImg top width="100%"
                                        src="https://images.unsplash.com/photo-1561726392-9427771b6a3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                        alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                    </CardBody>
                                </CardLink>
                            </Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
                
            </Fragment>
        );
    }
}