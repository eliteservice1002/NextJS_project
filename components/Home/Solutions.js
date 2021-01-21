import React, { Component } from 'react';
import Styles from '../../assets/css/home_style.module.css'

const solution_case = [
    { title: 'Marketing', description1: 'RETAIL', img: './images/assets/usecase1.png' },
    { title: 'CRM & Loyalty', description1: 'RETAIL ', img: './images/assets/usecase2.png' },
    { title: 'Consumer Data', description1: 'RETAIL ', img: './images/assets/usecase3.png' },
    { title: 'Customer Experience', description1: 'RETAIL ', img: './images/assets/usecase4.png' },
    { title: 'Artificial Intelligence', description1: 'RETAIL', img: './images/assets/usecase5.png' },
]

const solution_industry = [
    { title: 'Retail', description1: 'RETAIL', img: './images/assets/industry1.png' },
    { title: 'Financial Services', description1: 'RETAIL', img: './images/assets/industry2.png' },
    { title: 'Automotive', description1: 'RETAIL ', img: './images/assets/industry3.png' },
    { title: 'Travel', description1: 'RETAIL', img: './images/assets/industry4.png' },
    { title: 'Luxury & Lifestyle', description1: 'RETAIL', img: './images/assets/industry5.png' },
    { title: 'Consumer Internet', description1: 'RETAIL', img: './images/assets/industry6.png' },
]

class FunFacts extends Component {
    render() {
        return (
            <section className={Styles.solution_funfacts_area}>
                <div className="container">
                    <div style={{ width: 170, marginBottom: 60, borderBottom: '3px solid #ef2345' }}>
                        <h5 className={`${Styles.color_fff} each_page_title`}>SOLUTIONS</h5>
                    </div>
                    <div className={Styles.solutioin_container}>
                        <div className={Styles.solution_case}>
                            <h5 className={`${Styles.color_fff} ${Styles.solution_case_title}`}>By Use Case</h5>
                            <div className={Styles.solution_itmeDiv}>
                                {
                                    solution_case.map((val, index) => {
                                        return (
                                            <div className={Styles.solution_item} style={{ backgroundImage: `url(${val.img})` }} key={index}>
                                                <div className={Styles.usecase_item_content} key={index + 2}>
                                                    <h6 key={index + 4}>{val.title}</h6>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/* <div className={Styles.solution_itmeDiv}>
                                <div className={Styles.solution_item}>
                                    <img src="./images/assets/solution_item.png" alt="solution_item" className={Styles.solution_item_img} />
                                </div>
                                <div className={Styles.solution_item}>
                                    <img src="./images/assets/solution_item.png" alt="solution_item" className={Styles.solution_item_img} />
                                </div>
                            </div>
                            <div className={Styles.solution_itmeDiv}>
                                <div className={Styles.solution_item}>
                                    <img src="./images/assets/solution_item.png" alt="solution_item" className={Styles.solution_item_img} />
                                </div>
                                <div className={Styles.solution_item}>
                                    <img src="./images/assets/solution_item.png" alt="solution_item" className={Styles.solution_item_img} />
                                </div>
                            </div>
                            <div className={Styles.solution_itmeDiv}>
                                <div className={Styles.solution_item}>
                                    <img src="./images/assets/solution_item.png" alt="solution_item" className={Styles.solution_item_img} />
                                </div>
                            </div> */}
                        </div>
                        <div className={Styles.solution_industry}>
                            <h5 className={`${Styles.color_fff} ${Styles.solution_case_title}`}>By Industry</h5>
                            <div className={Styles.solution_itmeDiv}>
                                {
                                    solution_industry.map((val, index) => {
                                        return (
                                            <div className={Styles.solution_item} style={{ backgroundImage: `url(${val.img})` }} key={index}>
                                                <div className={Styles.usecase_item_content} key={index + 2}>
                                                    <h6 key={index + 4}>{val.title}</h6>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/* <div className={Styles.solution_itmeDiv}>
                                <div className={Styles.solution_item}>
                                    <img src="./images/assets/solution_item.png" alt="solution_item" className={Styles.solution_item_img} />
                                </div>
                                <div className={Styles.solution_item}>
                                    <img src="./images/assets/solution_item.png" alt="solution_item" className={Styles.solution_item_img} />
                                </div>
                            </div>
                            <div className={Styles.solution_itmeDiv}>
                                <div className={Styles.solution_item}>
                                    <img src="./images/assets/solution_item.png" alt="solution_item" className={Styles.solution_item_img} />
                                </div>
                                <div className={Styles.solution_item}>
                                    <img src="./images/assets/solution_item.png" alt="solution_item" className={Styles.solution_item_img} />
                                </div>
                            </div>
                            <div className={Styles.solution_itmeDiv}>
                                <div className={Styles.solution_item}>
                                    <img src="./images/assets/solution_item.png" alt="solution_item" className={Styles.solution_item_img} />
                                </div>
                                <div className={Styles.solution_item}>
                                    <img src="./images/assets/solution_item.png" alt="solution_item" className={Styles.solution_item_img} />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFacts;