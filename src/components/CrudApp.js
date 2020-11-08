import React, { Component } from 'react';
import { Fragment } from 'react';
import { Header, Footer } from './layouts';
import Excercises  from './Excersises';



class CrudApp extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                    <Excercises />
                <Footer />
            </Fragment>
        );
    }
}

export default CrudApp;