import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/Home/MainBanner';
import Overview from '../components/Home/Overview';
import Solutions from '../components/Home/Solutions';
import Newsroom from '../components/Home/Newsroom';
import Ourbackers from '../components/Home/Ourbackers';
import Footer from '../components/Layouts/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                <Overview />
                <Solutions />
                <Newsroom />
                <Ourbackers />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;