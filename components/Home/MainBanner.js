import React from 'react';
import Styles from '../../assets/css/home_style.module.css'

export default function MainBanner() {

    const handlescrolltop = () => {
        var height = window.innerHeight - 85;
        var i = 0;
        var id = setInterval(frame, 7);

        function frame() {
            if (i > height)
                clearInterval(id);
            else {
                i += 10;
                window.scrollTo(0, i)
            }
        }
    }

    return (
        <div className="main-banner">
            <div className="main-effect"></div>
            <div className="container" >
                <div className={Styles.main_banner_content}>
                    <h1>Blockchain Powering the Next Generation of Consumer Applications</h1>
                    <p>More Private. More Interactive. More Connected.</p>
                </div>
            </div>

            <div className={Styles.scrollContainer_div}>
                <div className={Styles.scrollContainer}>scroll down for more</div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <span className={Styles.tbn_scroll}
                        onClick={handlescrolltop}
                    ></span>
                </div>
            </div>
        </div>
    );
}
