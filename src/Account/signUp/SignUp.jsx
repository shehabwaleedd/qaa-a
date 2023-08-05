import React from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useUserAuth } from '../authContext/AuthContext'
import { useTranslation } from 'react-i18next'
import axios from 'axios';


const SignUp = (Props) => {

    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [age, setAge] = useState('age')
    const [country, setCountry] = useState('country')
    const [countries, setCountries] = useState([]);
    const [gender, setGender] = useState('')
    const [city, setCity] = useState('');
    const [agreed, setAgreed] = useState(false)
    const [formErrors, setFormErrors] = useState({});


    const { createUser, signInWithGoogle } = useUserAuth()

    let navigate = useNavigate()
    const { t } = useTranslation()

    const handleGoogle = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithGoogle(email, password);
            navigate('/')
        } catch (e) {
            setError(e.message);
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password, age, country, phoneNumber);
            navigate('/');
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    };

    useEffect(() => {
        // Fetch the country data when the component mounts
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v2/all');
            const countryData = response.data.map((country) => ({
                name: country.name,
                code: country.alpha2Code,
            }));
            setCountries(countryData);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };


    const handleOptionChange = (e) => {
        setAge(e.target.value);
    };


    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handlePhoneNumberChange= (event) => {
        setPhoneNumber(event.target.value);
    }




    return (
        <section className="signup section">
            <div className="signup__container container">
                <div className="signup__content">
                    <div className="signup__page-right">
                        <div className="login__text ">
                            <h1>register</h1>
                        </div>
                        <form className="signup__form" onSubmit={handleSubmit}>

                            <div className="signup__form-container">
                                <div className="signup__user">
                                    <h3>email</h3>
                                    <input type="email" id="email" name='email' className="login__input-field" placeholder={t("signup__form__email")} value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <h3>password</h3>
                                    <input type="password" id="password" name='password' className="signup__input-field" placeholder={t("signup__form__password")} value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <h3>phone number</h3>
                                    <input type="text" id="phone" name='phone' className="signup__input-field" placeholder={t("signup__form__phone")} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                                    <div className="age__country">
                                        <div className="age__gender">
                                            <div className="age__select">
                                                <h3>Gender</h3>
                                                <select
                                                    className={`dropdown-select ${formErrors.city ? 'error' : ''}`}
                                                    name="gender"
                                                    value={gender}
                                                    onChange={(e) => setGender(e.target.value)}                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Gender
                                                    </option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                                {formErrors.city && <p className="error-message">{formErrors.city}</p>}
                                                <div className="dropdown-icon">▼</div>
                                            </div>
                                        </div>
                                        <div className="age__select">
                                            <h3>Age</h3>
                                            <select
                                                className={`dropdown-select ${formErrors.budget ? "error" : ""}`}
                                                name="age"
                                                value={age}
                                                onChange={(e) => setAge(e.target.value)}                                                required
                                            >
                                                <option value="age" disabled>
                                                    Age
                                                </option>
                                                {Array.from({ length: 56 }, (_, index) => index + 15).map((value) => (
                                                    <option key={value} value={value}>
                                                        {value}
                                                    </option>
                                                ))}
                                            </select>
                                            {formErrors.budget && <p className="error-message">{formErrors.budget}</p>}
                                            <div className="dropdown-icon">▼</div>
                                        </div>
                                        <div className="age__country">
                                            <div className="age__select dropdown__country">
                                                <h3>Country</h3>
                                                <select
                                                    className={`dropdown-select  ${formErrors.country ? 'error' : ''}`}
                                                    name="country"
                                                    value={country}
                                                    onChange={(e) => setCountry(e.target.value)}                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Select Country
                                                    </option>
                                                    {countries.map((country) => (
                                                        <option key={country.code} value={country.code}>
                                                            {country.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {formErrors.country && <p className="error-message">{formErrors.country}</p>}
                                                <div className="dropdown-icon-country">▼</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="signup__button">
                                    <button type="submit" className="login__button-sign">
                                        <h3>REGISTER</h3>
                                        <i className="uil uil-arrow-right button__icon-login"></i>
                                    </button>
                                </div>
                                <div className="social__logins_signups">
                                    <div className="signup__social-button facebook__button_blacked signedup__btn">
                                        <i className='bx bxl-facebook' ></i>
                                        <button onClick={handleGoogle} className="">facebook</button>
                                    </div>
                                    <div className="signup__social-button google__button_blacked signedup__btn">
                                        <i className='bx bxl-google' ></i>
                                        <button onClick={handleGoogle}>google</button>
                                    </div>
                                </div>
                                <div className="login__checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                            required
                                        />
                                    </label>
                                    <span className='policy__agree'>You agree on our Privacy Policy and Terms & Conditions</span>
                                </div>
                                {formErrors.agreed && <p className="error-message">{formErrors.agreed}</p>}
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SignUp
