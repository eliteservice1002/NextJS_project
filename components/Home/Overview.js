import React, { Component } from 'react';
import Styles from '../../assets/css/home_style.module.css'
import Grid from '@material-ui/core/Grid';

class FunFacts extends Component {
    render() {
        return (
            <div>
                <section className="funfacts-area ptb-70 pt-0">
                    <div className="container">
                        <div style={{ width: 170, marginBottom: 60, borderBottom: '3px solid #ef2345' }}>
                            <h5 className="each_page_title">OVERVIEW</h5>
                        </div>
                        <div className="section-title">
                            <h2>Next-Generation Enerprise Blockchain Enabling Agile and Scalable Consumer Apps</h2>
                            <p>APEX Network is built for the enterprise, with the consumer in mind. Rapidly develop and deploy decentralized consumer apps built to scale, and fit within the existing customer experience.</p>
                        </div>
                    </div>
                </section>
                <section className={Styles.section2}>
                    <Grid container className={Styles.section2_container}>
                        <Grid item xs={12} sm={8}>
                            <Grid container className={Styles.section2_card} style={{ alignItems: 'center' }}>
                                <Grid item xs={12} sm={4} className={Styles.overview_card_title}></Grid>
                                <Grid item xs={4} sm={4} className={Styles.lineDiv}><img src="./images/assets/polygon.png" alt="Polygon" /></Grid>
                                <Grid item xs={7} sm={4}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container className={Styles.section2_card} style={{ alignItems: 'center' }}>
                                <Grid item xs={12} sm={4} className={Styles.overview_card_title}></Grid>
                                <Grid item xs={4} sm={4} className={Styles.lineDiv}><div className={Styles.line1}></div></Grid>
                                <Grid item xs={7} sm={4}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container className={Styles.section2_card} style={{ alignItems: 'center' }}>
                                <Grid item xs={12} sm={4} className={Styles.overview_card_title}><h4>Enterprise Sidechains</h4></Grid>
                                <Grid item xs={4} sm={4}><img src="./images/assets/card2.png" alt="card2" /></Grid>
                                <Grid item xs={7} sm={4}><h4 className="overview_card_title">Enterprise Sidechains</h4><h6>Optimize scalability by seperating enterprise-level workstreams from main network. Scale your own application ecosystems in multiple sidechains.</h6></Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={8}>
                            <Grid container className={Styles.section2_card} style={{ alignItems: 'center' }}>
                                <Grid item xs={12} sm={4} className={Styles.overview_card_title}></Grid>
                                <Grid item xs={4} sm={4} className={Styles.lineDiv}><div className={Styles.line2}></div></Grid>
                                <Grid item xs={7} sm={4}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container className={Styles.section2_card} style={{ alignItems: 'center' }}>
                                <Grid item xs={12} sm={4} className={Styles.overview_card_title}><h4>Two-fold Consensus</h4></Grid>
                                <Grid item xs={4} sm={4}><img src="./images/assets/card1.png" alt="card1" /></Grid>
                                <Grid item xs={7} sm={4}><h4 className="overview_card_title">Two-fold Consensus</h4><h6>Consensus mechanism designed for a combination of performance and agility in deploying consumer dApps. Easily transfer assets between the main network (DPOS) and side networks (POS).</h6></Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={8}>
                            <Grid container className={Styles.section2_card} style={{ alignItems: 'center' }}>
                                <Grid item xs={12} sm={4} className={Styles.overview_card_title}></Grid>
                                <Grid item xs={4} sm={4} className={Styles.lineDiv}><div className={Styles.line2}></div></Grid>
                                <Grid item xs={7} sm={4}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container className={Styles.section2_card} style={{ alignItems: 'center' }}>
                                <Grid item xs={12} sm={4} className={Styles.overview_card_title}><h4>Multi-layered Smart Contacts</h4></Grid>
                                <Grid item xs={4} sm={4}><img src="./images/assets/card1.png" alt="card1" /></Grid>
                                <Grid item xs={7} sm={4}><h4 className="overview_card_title">Multi-layered Smart Contacts</h4><h6>Increase the scalability, flexibility, and ease of deployment of smart contracts and dApps via a multi-layered smart contract system, allowing certain components to be stored off-chain.</h6></Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={8}>
                            <Grid container className={Styles.section2_card} style={{ alignItems: 'center' }}>
                                <Grid item xs={12} sm={4} className={Styles.overview_card_title}></Grid>
                                <Grid item xs={4} sm={4} className={Styles.lineDiv}><div className={Styles.line2}></div></Grid>
                                <Grid item xs={7} sm={4}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container className={Styles.section2_card} style={{ alignItems: 'center' }}>
                                <Grid item xs={12} sm={4} className={Styles.overview_card_title}><h4>Robust Data Connectors</h4></Grid>
                                <Grid item xs={4} sm={4}><img src="./images/assets/card1.png" alt="card1" /></Grid>
                                <Grid item xs={7} sm={4}><h4 className="overview_card_title">Robust Data Connectors</h4><h6>Built-in connectivity to the real world. Connect your dApps to external systems and data sources easily and efficiently with a proprietary integration middleware.</h6></Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={8}>
                            <Grid container className={Styles.section2_card} style={{ alignItems: 'center' }}>
                                <Grid item xs={12} sm={4} className={Styles.overview_card_title}></Grid>
                                <Grid item xs={4} sm={4} className={Styles.lineDiv}><div className={Styles.line2}></div></Grid>
                                <Grid item xs={7} sm={4}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container className={Styles.section2_card} style={{ alignItems: 'center' }}>
                                <Grid item xs={12} sm={4} className={Styles.overview_card_title}><h4>Data Transaction Engine</h4></Grid>
                                <Grid item xs={4} sm={4}><img src="./images/assets/card1.png" alt="card1" /></Grid>
                                <Grid item xs={7} sm={4}><h4 className="overview_card_title">Data Transaction Engine</h4><h6>Built-in data transaction protocols to APEX Virtual Machine designed to increase B2C trust and increase consumer data ownership and security, as well as decentralized enctypted data storage.</h6></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>
            </div >
        );
    }
}

export default FunFacts;