import React, { Component } from "react";
import '../Home.scss';
import fb from '../img/fb.png';
import gl from '../img/gl.png';
import nv from '../img/naver.png';
import ko from '../img/kakao.png';
import LoginForm from "../component/LoginForm";
import RegisterForm from '../component/RegisterForm';

function login() {
    const x = document.getElementById("login");
    const y = document.getElementById("register");
    const z = document.getElementById("btn");

    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function register() {
    const x = document.getElementById("login");
    const y = document.getElementById("register");
    const z = document.getElementById("btn");

    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

class Home extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="form-wrap">
                    <div className="button-wrap">
                        <div id="btn"/>
                        <button type="button" className="togglebtn" onClick={login}>LOG IN</button>
                        <button type="button" className="togglebtn" onClick={register}>REGISTER</button>
                    </div>
                    <div className="social-icons">
                        <img src={fb} alt="facebook"/>
                        <a href={process.env.REACT_APP_OAUTH2_URI + '/google'}>
                        {/*<a href={process.env.REACT_APP_OAUTH2_URI + '/google?redirect_uri=' + process.env.REACT_APP_OAUTH2_REDIRECT_URI}>*/}
                            <img src={gl} alt="google"/>
                        </a>
                        <img src={nv} alt="naver"/>
                        <img src={ko} alt="kakao"/>
                    </div>
                    <LoginForm/>
                    <RegisterForm/>
                </div>
            </div>
        );
    }
}

export default Home;