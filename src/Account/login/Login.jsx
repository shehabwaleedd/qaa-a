import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useUserAuth } from '../authContext/AuthContext';
import { Link } from 'react-router-dom'
import './Login.css'
import SignUp from '../signUp/SignUp';
import { useRef } from 'react';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { auth } from "../../firebase-config";
import {motion} from 'framer-motion'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [agreed, setAgreed] = useState(false)
  const [rememberMe, setRememberMe] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const { signIn, signInWithGoogle } = useUserAuth(); // Use useAuth instead of useUserAuth
  const navigate = useNavigate();
  const { t } = useTranslation();
  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    const hasLoginShown =  sessionStorage.getItem('hasLoginShown');

    if (!hasLoginShown) {
      runAnimation();
      retrieveRememberedCredentials();
      sessionStorage.setItem('hasLoginShown', 'true');
    }
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signIn(email, password);
      navigate('/');
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithGoogle(email, password);
      navigate('/');
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };


  const runAnimation = () => {
    var tl = new TimelineMax();
    tl.fromTo(
      screen,
      { width: "0%", left: "100%" },
      {
        duration: 0.5,
        width: "100%",
        left: "0%",
        ease: Power3.easeInOut,
      }
    );
    tl.fromTo(
      screen,
      { left: "0%" },
      {
        duration: 0.5,
        left: "-100%",
        ease: Power3.easeInOut,
        delay: 0.1,
      }
    );
    tl.set(screen, { left: "100%" });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      },
    }).delay(1);
  };

  const retrieveRememberedCredentials = () => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    const rememberedPassword = localStorage.getItem('rememberedPassword');

    if (rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setAgreed(true);
    }
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate the form fields here if needed

    // Remember the email and password if the "Remember Me" checkbox is checked
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
      localStorage.setItem('rememberedPassword', password);
    } else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
    }

    // Proceed with the sign-in process
    handleSignIn(e);
  };




  return (
    <>
      <div className="contact__load-container">
        <div className="contact__load-screen" ref={(el) => (screen = el)}></div>
      </div>
      <motion.section
            className="login section" 
            id='skills'
            initial={{ opacity: 0, y: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} 
            animate={{ opacity: 1, y: 0,transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} 
            exit={{ opacity: 0, y: 100, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
        <div className="account__section">
          <h2 className='section__title'>Account</h2>
        </div>
        <div className="login__container">
          <div className="login__content">
            <div className="login__container-left">
              <div className="login__textt">
                <h1>login</h1>
              </div>
              <form className="login__form" onSubmit={handleSignIn}>
                <div className="form__container">
                  <div className="form__container_form-input">
                    <div className="login__input">
                      <h3>EMAIL</h3>
                      <input type="email" id="email" className="login__input-field" placeholder={t("login__form__insert_email")} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="login__input">
                      <h3>Password</h3>
                      <input type="password" id="password" className="login__input-field left-aligned-input" placeholder={t("login__form__password")} value={password} onChange={(e) => setPassword(e.target.value)} style={{ textAlign: 'left' }} />
                    </div>
                    <div className="login__button">
                      <button onClick={handleFormSubmit} type="submit" className="login__button-sign">
                        <h3>login</h3>
                        <i className="uil uil-arrow-right button__icon-login"></i>
                      </button>
                    </div>
                    <div className="social__loginss">
                      <div className="signup__social-button facebook__button_blacked facebook__login">
                        <i className='bx bxl-facebook' ></i>
                        <button onClick={handleGoogle} className="">Facebook</button>
                      </div>
                      <div className="signup__social-button google__button_blacked google__login">
                        <i className='bx bxl-google' ></i>
                        <button onClick={handleGoogle}>Google</button>
                      </div>
                    </div>
                    <div className="login__checkbox">
                      <label>
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={handleRememberMe}
                          required
                        />
                      </label>
                      <p>Remember Password</p>
                    </div>
                    {formErrors.agreed && (
                      <p className="error-message">{formErrors.agreed}</p>
                    )}
                  </div>
                  <div className="login__forgot">
                    <span className='login__forgot'>{t("login__form__forgot_password")}? <Link className='clickhere__button' to="/passwordreset">{t("login__form__click_here")}</Link></span>
                  </div>
                </div>
              </form>
            </div>
            <div className="login__container-right">
              <SignUp />
            </div>
          </div>
        </div>
      </motion.section>
    </>

  )
}

export default Login
