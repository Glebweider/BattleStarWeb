import MainContainer from "../../../components/MainContainer";
import styles from "../../../styles/profile.module.css";
import drs from '../../../styles/menu.module.css'
import Meta from "../../../app/utils/Meta";
import axios from "axios";
import store from '../../../redux/store'
import Cookies from "js-cookie";

const User = ({user, friends}) => {
    const users = friends
    const { uuid } = store.getState().userdata;
    const avatar = `../../avatar/${user.avatar}`
    const quantityUsers = Object.keys(users).length
    const token = Cookies.get("token")


    const Friends = () => {
        if (friends.uuid == 'false')  {
            return (
                <div className={styles.or}>
                    {friends.message}
                </div>
            )
        } else {
            return (
            <>
                {users.map(user =>
                    <div className={styles.dr_user} key={user.uuid}>
                        <img className={styles.dr_avatar} src={`../../avatar/${user.avatar}`} alt="" />
                        <div className={styles.dr_pad}>
                            <a className={styles.dr_username}>{user.username}</a>
                            <img className={styles.dr_rank} src={`https://ipdata.co/flags/${user.country}.png`} alt='' placeholder="blur"  />
                            <button onClick={dr_menu} className={styles.dr_tro}>.</button>
                        </div>
                    </div>
                )}
            </> 
            );
        };
    }

    function dr() {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/fr/add',
            data: {
                sender: uuid,
                taker: user.uuid,
                verify: token
            }
        })
        .then((response) => {
            alert(response.data.message)
        })
        .catch((error) => {
            alert('Ошибка: ' + error.response.data.message)
        })
    }
    function chat() {
        
    }
    function to() {
        
    }
    function dr_menu() {
        return (
            <div className={drs.os}>
                <div className={drs.re}>
                    <label><img className={drs.menu_profile} src='../../user.png' alt='menu'/><a>Открыть профиль</a></label>
                    <label><img className={drs.menu_add} src='../../add.png' alt='menu'/><a>Добавить в друзья</a></label>
                    <label><img className={drs.menu_link} src='../../link.png' alt='menu'/><a>Поделиться профилем</a></label>
                    <label><img className={drs.menu_report} src='../../report.png' alt='menu'/><a>Пожаловаться</a></label>
                </div> 
            </div>
        );
    }

    return(<>
        <MainContainer />
        <Meta title={'Профиль ' +  user.username} />
        <div className={styles.wrapper}>
            <div className={styles.topcontent}></div>
            <div className={styles.maincontent}>
                <div className={styles.top_contmain}>
                    <div className={styles.top}>
                        <div className={styles.topd}>
                            <div className={styles.left_top}>
                                <img className={styles.avatar} src={avatar} alt="аватарка" placeholder="blur" />
                                <label className={styles.info}>
                                    <div className={styles.username1}>
                                        <h2 className={styles.username}>{user.username}</h2>
                                    </div>
                                    <i></i>
                                    <div className={styles.bio}>
                                        <h5 className={styles.text_bio}>
                                            Значимость этих проблем настолько очевидна, что консультация с широким активом способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач
                                        </h5>
                                    </div>
                                </label>
                            </div>
                            <div className={styles.right_top}>
                                <div className={styles.right_top2}>
                                    <button onClick={dr} className={styles.dr}><h4>Добавить в друзья</h4></button>
                                    <button onClick={chat} className={styles.chat} />
                                    <button onClick={to} className={styles.to} />
                                </div>
                            </div>  
                        </div>
                        <hr className={styles.top0} />
                    </div>
                </div> 
                <div className={styles.down_contmain1}>
                <div className={styles.down_contmain}>
                    <div className={styles.down_left}>
                        <div className={styles.left_down}>
                            <a className={styles.bce}>Все друзья({quantityUsers})</a><hr/>
                            <div className={styles.cont}>
                                <Friends />
                            </div>
                        </div>                        
                    </div>     
                    <div className={styles.right}>
                        <div className={styles.down_right_top2}>
                            <div className={styles.top_us}>   
                                <div className={styles.ranked}>
                                    <div className={styles.ranked1}>
                                        <a>Ранг: </a><img src={`../../ranks/${user.rank}`} className={styles.rank}/>
                                    </div>
                                </div>   
                                <div className={styles.rightapp}>           
                                    <div className={styles.tyr}>
                                        <img className={styles.tyrimg} src="../../win.png" alt=""/>
                                        <a className={styles.tyrnire}>10</a>
                                        <a className={styles.text}>Турниров</a>
                                    </div>                
                                    <div className={styles.winr}>
                                        <img className={styles.winimg} src="../../st.png" alt=""/>
                                        <a className={styles.win}>73.4%</a>
                                        <a className={styles.text}>Винрейт</a>
                                    </div>
                                    <div className={styles.time}>
                                        <img className={styles.timeimg} src="../../time.png" alt=""/>
                                        <a className={styles.hours}>481</a>
                                        <a className={styles.text}>Часов в игре</a>
                                    </div>
                                </div>
                            </div>      
                        </div>
                        <div className={styles.down_right_down2}>
                        </div>
                    </div>
                </div>
                </div>    
            </div>
        </div>
    </>   
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`http://localhost:5000/auth/user/${params.id}`)
    const responsefr = await fetch(`http://localhost:5000/fr/find/${params.id}`)
    const user = await response.json()
    const friends = await responsefr.json()
    return {
        props: {user, friends},
    }
}

export default User