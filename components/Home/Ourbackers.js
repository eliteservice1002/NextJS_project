import React, { Component } from 'react';
import Styles from '../../assets/css/home_style.module.css'
import Grid from '@material-ui/core/Grid';

class FunFacts extends Component {
    render() {
        return (
            <div>
                <section className="funfacts-area ptb-70 pt-0">
                    <div className="container">
                        <div className="section-title">
                            <h2>OUR BACKERS</h2>
                        </div>
                        <Grid container className={Styles.backers_container}>
                            <img src="./images/assets/Asset_1.png" alt="Asset_1" className={Styles.ourbackers_item_img} />
                            <img src="./images/assets/Asset_2.png" alt="Asset_2" className={Styles.ourbackers_item_img} />
                            <img src="./images/assets/Asset_3.png" alt="Asset_3" className={Styles.ourbackers_item_img} />
                            <img src="./images/assets/Asset_4.png" alt="Asset_4" className={Styles.ourbackers_item_img} />
                        </Grid>
                        <Grid container className={Styles.backers_container}>
                            <img src="./images/assets/Asset_5.png" alt="Asset_5" className={Styles.ourbackers_item_img} />
                            <img src="./images/assets/Asset_6.png" alt="Asset_6" className={Styles.ourbackers_item_img} />
                            <img src="./images/assets/Asset_7.png" alt="Asset_7" className={Styles.ourbackers_item_img} />
                            <img src="./images/assets/Asset_8.png" alt="Asset_8" className={Styles.ourbackers_item_img} />
                        </Grid>
                    </div>
                </section>
            </div>
        );
    }
}

export default FunFacts;