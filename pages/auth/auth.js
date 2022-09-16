import classNames from 'classnames';
import styles from '../../styles/auth.module.css';
import axios from 'axios';
import Link from 'next/link';
import Meta from '../../app/utils/Meta';
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { setUserData } from '../../redux/action/actionCreate';
const auth = () => {
    const dispatch = useDispatch();
    function auth_vb() {
        const content_vb1 = document.querySelector("#content_vb1");
        const content_vb2 = document.querySelector("#content_vb2");
        const vbr_a = document.querySelector('#vbr_a');
        const vb_r = document.querySelector('#vb_r');
        content_vb1.classList.remove("auth_hidden__OPOt8");
        content_vb2.classList.add("auth_hidden__OPOt8");
        vbr_a.classList.add("auth_active__NYBB9");
        vb_r.classList.remove("auth_active__NYBB9");
    }
    function registr_vb() {
        const content_vb1 = document.querySelector("#content_vb1");
        const content_vb2 = document.querySelector("#content_vb2");
        const vbr_a = document.querySelector('#vbr_a');
        const vb_r = document.querySelector('#vb_r');
        content_vb1.classList.add("auth_hidden__OPOt8");
        content_vb2.classList.remove("auth_hidden__OPOt8");
        vbr_a.classList.remove("auth_active__NYBB9");
        vb_r.classList.add("auth_active__NYBB9");
    }    
    function clear(){
        Cookies.remove('token')
        Cookies.remove('ip')
        Cookies.remove('country')
    }

    function chec() {
        const token = Cookies.get("token")
        
        axios({
            method: 'GET',
            url: 'http://localhost:5000/auth/check',
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        })
        .then((response) => {
            const {uuid, username, avatar, mail, country, rank, bio, datareg} = response.data
            const a = dispatch(setUserData({
                type: setUserData,
                token: token,
                rank: rank,
                uuid: uuid,
                mail: mail,
                username: username,
                avatar: avatar,
                bio: bio,
                country: country,
                datareg: datareg
            })) 
        })
        .catch((error) => {        
            if (typeof window !== 'undefined') {
                console.error('Не удалось войти в аккаунт, причина:' + error.data )
                console.error('Ваш токен:' + ' ' + token)
            }   
        })
    }
    function btnlog() {
        const name_log = document.querySelector("#username_au").value;
        const pass_log = document.querySelector("#password_au").value;
        i()
        const ipp = Cookies.get('ip')
        axios({
            method: 'POST',
            url: 'http://localhost:5000/auth/login',
            data: {
                username: name_log,
                password: pass_log,
                ipp: ipp
            }
        })
        .then((response) => {
            clear()
            alert(response.data.message);
            Cookies.set("token", response.data.token)   
                   
        })
        .catch((error) => {
            alert('Не удалось войти в аккаунт, причина:' + '' + error.response)
        })
        chec()
    }
    function i() {  
     
    axios.get('https://ipapi.co/json/')
            .then((response) => {    
                Cookies.remove('ip')
                Cookies.remove('country') 
                const country = response.data.country_tld
                const countryo = country.replace(/[\s.,%]/g, '')
                Cookies.set("country", countryo)
                Cookies.set("ip", response.data.ip)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    function btnreg() {   
        const name_re = document.querySelector("#username_re").value;
        const pass_re = document.querySelector("#password_re").value;
        const mail_re = document.querySelector("#email_re").value;
        i()
        const ipp = Cookies.get('ip')
        const country = Cookies.get('country')
        
        axios({
            method: 'POST',
            url: 'http://localhost:5000/auth/register',
            data: {
                username: name_re,
                password: pass_re,
                mail: mail_re,
                ipp: ipp,
                country: country
            }
        })

        .then((response) => {
            clear()
            alert(response.data.message);
            Cookies.set("token", response.data.token)
            chec()
        })
        .catch((error) => {
            alert(error.response.data.message);
        })
        
    }

    return (
    <div>
        <Meta title={'auth'}/>
        <div className={styles.wrapper}>
            <header className={styles.nav}>
                <div className={styles.logo}>
                    <img className={styles.logo_img} src="../style/img/Logo.svg" alt=""/>
                </div>
                <div className={styles.nain}>
                </div>
            </header>
        <div className={styles.auth_au_div}>                        
            <div className={styles.auth_au}>
                <div className={styles.au_1}>
                    <div className={styles.logo_auth}>
                        <img className={styles.logo_img_auth} src="/../Logo.svg" alt=""/>
                    </div>
                    <div className={styles.vubor}>
                        <div className={styles.vibor}>
                            <div id='vbr_a' onClick={auth_vb} className={classNames(styles.auth_vb, styles.active)}>
                                <a className={styles.vbr_a}>ВОЙТИ</a>
                                <hr/>
                            </div>
                            <div id='vb_r' onClick={registr_vb} className={styles.registr_vb}>
                                <a className={styles.vb_r}>СОЗДАТЬ АККАУНТ</a>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div id='content_vb1' className={styles.content_vb1}>
                        <div className={styles.au_inputs}>
                            <div className={styles.au_input}>
                                <input className={styles.email} id="username_au" type="text" placeholder="Никнейм"/>
                                <input className={styles.password} id="password_au" type="password" placeholder="Пароль"/>
                            </div>
                            <div className={styles.vost}>
                                <a className={styles.off}>Забыли пароль </a>
                                <a className={styles.vost_pas} id="vost"> Восстановить</a>
                            </div>
                        </div>
                        <div className={styles.but}>
                            <button onClick={btnlog} className={styles.bt_a}>Войти</button>
                        </div>                     
                        <div className={styles.sogl}>
                            <a className={styles.off}>Создавая аккаунт в BattleStar вы соглашаетесь с </a>  
                            <a className={styles.sog} href='./eula'>  пользовательским<br/> соглашением</a>
                        </div>
                    </div>                   
                        <div id='content_vb2' className={classNames(styles.content_vb2, styles.hidden)}>
                            <div className={styles.au_inputs}>
                                <div className={styles.au_input}>
                                    <input className={styles.password} id="username_re" type="text" placeholder="Введите никнейм"/>
                                    <input className={styles.email} id="email_re" type="email" placeholder="Электронная почта"/>
                                    <input className={styles.password} id="password_re" type="password" placeholder="Придумайте пароль"/>
                                </div>
                            </div> 
                            <div className={styles.but}>
                                <button onClick={btnreg} className={styles.bt_a}>Создать</button>
                            </div>              
                            <div className={styles.sogl1}>
                                <a className={styles.off}>Создавая аккаунт в BattleStar вы соглашаетесь с</a>  
                                <a className={styles.sog} href="./eula">   пользовательским <br/> соглашением</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default auth;