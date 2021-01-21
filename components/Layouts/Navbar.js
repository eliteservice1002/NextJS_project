import React, { Component, useEffect } from 'react';
import Link from '../../utils/ActiveLink';
import Styles from '../../assets/css/layouts_style.module.css';

export default function Navbar(props) {
    const [collapsed, setCollapsed] = React.useState(true)
    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }
    useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="luvion-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={require("../../images/assets/logo.png")} alt="logo" />
                                    <img src={require("../../images/assets/logo.png")} alt="logo" />
                                    {/* <img src={require("../../images/assets/logo.png")} alt="logo" className={Styles.invert_logo} /> */}
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link">Home</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/about-us">
                                            <a className="nav-link">About</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/technology">
                                            <a className="nav-link">Technology</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/solution">
                                            <a className="nav-link">Solutions</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item" className={Styles.active}>
                                        <Link href="/explorer">
                                            <a className="nav-link">Explorer</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}