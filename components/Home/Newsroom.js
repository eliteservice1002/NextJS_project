import React, { Component } from 'react';
import Styles from '../../assets/css/home_style.module.css'
import Carousel from './Carousel'

class FunFacts extends Component {
    render() {
        return (
            <section className={Styles.newsroom_funfacts_area}>
                <div className={Styles.newsroom_effect}></div>
                <div className="container">
                    <div style={{ width: 170, marginBottom: 60, borderBottom: '3px solid #ef2345' }}>
                        <h5 className={`${Styles.color_fff} ${Styles.subcontentTitle} each_page_title`}>NEWSROOM</h5>
                    </div>
                    <div className={Styles.solutioin_container}>
                        <Carousel />
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFacts;