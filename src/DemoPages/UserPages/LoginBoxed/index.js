import React, {Fragment} from 'react';
import {Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
// Layout



const LoginBoxed = ({match}) => (


    <Fragment>
        
        <div className="h-100 bg-plum-plate bg-animation">
            <div className="d-flex h-100 justify-content-center align-items-center">
                <Col md="8" className="mx-auto app-login-box">
                    <div className="app-logo mx-auto mb-3 text-white"/>

                    <div className="modal-dialog w-100 mx-auto">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="h5 modal-title text-center">
                                    <h4 className="mt-2">
                                        <div>歡迎回來</div>
                                        <span>請登入你的帳號在下方</span>
                                    </h4>
                                </div>
                                <Form>
                                    <Row form>
                                        <Col md={12}>
                                            <FormGroup>
                                                <Input type="email" name="email" id="exampleEmail"
                                                       placeholder="Email"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={12}>
                                            <FormGroup>
                                                <Input type="password" name="password" id="examplePassword"
                                                       placeholder="Password"/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup check>
                                        <Input type="checkbox" name="check" id="exampleCheck"/>
                                        <Label for="exampleCheck" check>記住帳號</Label>
                                    </FormGroup>
                                </Form>
                                {/* <div className="divider"/> */}
                                {/* <h6 className="mb-0">
                                    沒有帳號?{' '}
                                    <a href="javascript:void(0);" className="text-primary">立即註冊</a>
                                </h6> */}
                            </div>
                            <div className="modal-footer clearfix">
                                <div className="float-left">
                                    <a href="javascript:void(0);" className="btn-lg btn btn-link">忘記密碼</a>
                                </div>
                                <div className="float-right">
                                <a href="#/dashboards/analytics" className="btn-lg btn bg-primary text-white">登入</a>
                                    {/* <Button color="primary" size="lg">登入</Button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="text-center text-white opacity-8 mt-3">
                        Copyright &copy; Shoesconn 2019
                    </div> */}
                </Col>
            </div>
        </div>
    </Fragment>
);

export default LoginBoxed;
