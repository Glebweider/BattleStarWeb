import Link from "next/link";
import styles from '../styles/navbar.module.css';
import axios from 'axios'
import Cookies from 'js-cookie';
import store from '../redux/store'
import { useDispatch } from "react-redux";
import { setUserData } from '../redux/action/actionCreate';
const token = Cookies.get("token")


const MainContainer = ({children}, props) => {
    const dispatch = useDispatch();
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
            console.error('Не удалось войти в аккаунт, причина: ' + error )
            console.error('Ваш токен: ' + token)
        }   
    })
    
function dowbt() {
    const menu1 = document.querySelector("#domenu")
    menu1.classList.toggle('navbar_actives__HEZuW')
}    

function leave() {
    Cookies.remove('token')
}
const isAuth = store.getState().userdata.isAuth
const Auth = () => {
    if(isAuth == false) {
        return(
            <>
                <div className={styles.settings}>
                    <a className={styles.set}>Авторизация</a>
                </div>
            </>
        )  
        } else {
        return( 
            <>
                <div onClick={leave} className={styles.settings}>
                    <img className={styles.seh} src='/../logout.svg' alt=''/>
                    <a className={styles.setc}>Выйти</a>
                </div>
            </>
        )
    }
};

const {uuid, username} = store.getState().userdata
    return (<>     
        <header className={styles.nav}>
            <div className={styles.lefticon} />
            <div className={styles.nain}>
                <div className={styles.input}>
                    <input className={styles.texti} type="text" name="search" id="search" placeholder="Поиск" />
                </div>
                <div className={styles.messager}>
                    <div className={styles.chat}>
                        <img className={styles.ch} src="/../mdi_message-text.svg" alt="" />
                    </div>
                    <div className={styles.message}>
                        <img className={styles.mess} src="/../mdi_bell.svg" alt="" />
                    </div>
                </div>
                <div id="name" className={styles.name}>
                    <a className={styles.nam}>{username}</a>
                    <div onClick={dowbt} className={styles.dow}>
                        <img className={styles.do} src="/../down.svg" alt="" />
                    </div>
                </div>
            </div>
        </header>
        <div className={styles.parmenu}>
            <div id='domenu' className={styles.domenu}>
                <div className={styles.dowmenu}>
                    <Link href={`/users/profile/${uuid}`}>
                        <div className={styles.Profile}>
                            <div className={styles.pro}>
                                <img className={styles.us} src='/../l_user.svg' alt=''/>
                                <a>Профиль</a>
                            </div>
                        </div>
                    </Link>
                    <hr/>
                    <Link href="/lk">
                        <div className={styles.settings}>
                            <img className={styles.se} src='/../setting.svg' alt=''/>
                            <a className={styles.set}>Настройки</a>
                        </div>
                    </Link>
                    <hr/>
                    <Auth />
                </div>
            </div>
        </div>
        <div id='menu' className={styles.menu}>
            <Link href="/">
                <a><img className={styles.logo} src="/../Logo.svg" alt="" /></a>
            </Link>
            <div className={styles.gb}>
                <Link href="/">
                    <a><img className={styles.gla} src="/../Glav.png" alt="" /></a>
                </Link>
            </div>
            <div className={styles.mat}>
                <Link href="/match">
                    <a><img className={styles.matc} src="/../match.png" alt="" /></a>
                </Link>
            </div>
            <div className={styles.tyrnir}>
                <Link href="/tyrnir">
                    <a><img className={styles.ty} src="/../Tyr.png" alt="" /></a>
                </Link>
            </div>
            <div className={styles.comm}>
                <Link href="/teams">
                    <a><img className={styles.com} src="/../team.png" alt="" /></a>
                </Link>
            </div>
            <div className={styles.fri} >
                <Link href="/friends/users">
                    <a><img className={styles.fr} src="/../friend.png" alt="" /></a>
                </Link>
            </div>
        </div>  
        <div>
            {children}
        </div>
    </>)
}
export default MainContainer;            