import classNames from "classnames";
import MainContainer from "../components/MainContainer";
import styles from "/styles/lk.module.css";
import store from '../redux/store'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Meta from "../app/utils/Meta";

const lk = (props) => {
    const { username, avatar, mail, uuid, country, bio, datareg } = store.getState().userdata;
    const countryo = country.replace(/[\s.,%]/g, '')
    
function stc() {
    const st = document.querySelector("#st");
    const ma = document.querySelector("#ma");
    const lk = document.querySelector("#lk");
    const pa = document.querySelector("#pa");
    st.classList.add('lk_active___Q11y');
    ma.classList.remove('lk_active___Q11y');
    lk.classList.remove('lk_active___Q11y');
    pa.classList.remove('lk_active___Q11y');
    const system_data = document.querySelector("#system_data");
    const system_match = document.querySelector("#system_match");
    const system_param = document.querySelector("#system_param");
    const system_stat = document.querySelector("#system_stat");
    system_data.classList.add('lk_hidden__5jB2O')
    system_match.classList.add('lk_hidden__5jB2O')
    system_param.classList.add('lk_hidden__5jB2O')
    system_stat.classList.remove('lk_hidden__5jB2O')
}
function mac() {
    const st = document.querySelector("#st");
    const ma = document.querySelector("#ma");
    const lk = document.querySelector("#lk");
    const pa = document.querySelector("#pa");
    st.classList.remove('lk_active___Q11y');
    ma.classList.add('lk_active___Q11y');
    lk.classList.remove('lk_active___Q11y');
    pa.classList.remove('lk_active___Q11y');
    const system_data = document.querySelector("#system_data");
    const system_match = document.querySelector("#system_match");
    const system_param = document.querySelector("#system_param");
    const system_stat = document.querySelector("#system_stat");
    system_data.classList.add('lk_hidden__5jB2O')
    system_match.classList.remove('lk_hidden__5jB2O')
    system_param.classList.add('lk_hidden__5jB2O')
    system_stat.classList.add('lk_hidden__5jB2O')
}
function lkc() {
    const st = document.querySelector("#st");
    const ma = document.querySelector("#ma");
    const lk = document.querySelector("#lk");
    const pa = document.querySelector("#pa");
    st.classList.remove('lk_active___Q11y');
    ma.classList.remove('lk_active___Q11y');
    lk.classList.add('lk_active___Q11y');
    pa.classList.remove('lk_active___Q11y');
    const system_data = document.querySelector("#system_data");
    const system_match = document.querySelector("#system_match");
    const system_param = document.querySelector("#system_param");
    const system_stat = document.querySelector("#system_stat");
    system_data.classList.remove('lk_hidden__5jB2O')
    system_match.classList.add('lk_hidden__5jB2O')
    system_param.classList.add('lk_hidden__5jB2O')
    system_stat.classList.add('lk_hidden__5jB2O')
}
function pac() {
    const st = document.querySelector("#st");
    const ma = document.querySelector("#ma");
    const lk = document.querySelector("#lk");
    const pa = document.querySelector("#pa");
    st.classList.remove('lk_active___Q11y');
    ma.classList.remove('lk_active___Q11y');
    lk.classList.remove('lk_active___Q11y');
    pa.classList.add('lk_active___Q11y');
    const system_data = document.querySelector("#system_data");
    const system_match = document.querySelector("#system_match");
    const system_param = document.querySelector("#system_param");
    const system_stat = document.querySelector("#system_stat");
    system_data.classList.add('lk_hidden__5jB2O')
    system_match.classList.add('lk_hidden__5jB2O')
    system_param.classList.remove('lk_hidden__5jB2O')
    system_stat.classList.add('lk_hidden__5jB2O')
}
function editor(){

}

    return (
<MainContainer >
<Meta title={'Личный кабинет'}/>
<div className={styles.topcontent}></div>        
    <div className={styles.sc}>
        <a id="st" onClick={stc} className={classNames(styles.stat, styles.active)}>Статистика<img className={styles.imgstat} src="stat.svg" alt=""/><hr/></a>
        <a id="ma" onClick={mac} className={styles.match}>История матчей<img className={styles.imglk}src="match.svg" alt=""/><hr/></a>
        <a id="lk" onClick={lkc} className={styles.lkdata}>Личные данные<img className={styles.imgda} src="data.svg" alt=""/><hr/></a>
        <a id="pa" onClick={pac} className={styles.param}>Параметры<img className={styles.imgpa} src="setting.svg" alt=""/><hr/></a>
    </div> 
        <div id="system_stat">    
            <div className={styles.csgo}>
                <div className={styles.top} id="app">
                    <div className={styles.ranked}>
                        <a>Ранг: <img src='' alt=""/></a>
                    </div>   
                    <div className={styles.rightapp}>           
                        <div className={styles.tyr}>
                            <img className={styles.tyrimg} src="win.png" alt=""/>
                            <a className={styles.tyrnire}>10</a>
                            <a className={styles.text}>Турниров</a>
                        </div>                
                        <div className={styles.winr}>
                            <img className={styles.winimg} src="st.png" alt=""/>
                            <a className={styles.win}>73.4%</a>
                            <a className={styles.text}>Винрейт</a>
                        </div>
                        <div className={styles.time}>
                            <img className={styles.timeimg} src="time.png" alt=""/>
                            <a className={styles.hours}>481</a>
                            <a className={styles.text}>Часов в игре</a>
                        </div>
                    </div>  
                </div>           
            </div>
            <div className={styles.csgo2}>
                <div className={styles.top2} id="app2"> 
                    <div className={styles.leftapp}>
                        <a className={styles.st_a}>Статистика</a>
                        <div className={styles.st_pl}>
                            <a className={classNames(styles.plmatch, styles.plc, styles.c)}>Матчей сыграно: скокато</a>
                            <a className={classNames(styles.plmaps, styles.plc, styles.c)}>Карт сыграно: хз</a>
                        </div>
                        <div className={styles.st_win}>
                            <a className={classNames(styles.wingame, styles.plc, styles.c)}>Побед: 0</a>
                            <a className={classNames(styles.losergame, styles.plc, styles.c)}>Поражений: 1000-7</a>
                        </div>
                        <div className={styles.st_statistic}>
                            <a className={classNames(styles.kills, styles.plc, styles.c)}>Убийств: 0</a>
                            <a className={classNames(styles.dead, styles.plc, styles.c)}>Смертей: 482375</a>
                        </div>
                    </div> 
                    <div className={styles.rightapp2}>
                        <canvas className={styles.canv} id="myChart" width="700" height="540"></canvas>
                    </div>  
                </div>           
            </div>
        </div>
        <div id="system_match" className={classNames(styles.system_match, styles.hidden)}>
            <div className={styles.cont_match}>
                <div className={styles.left_match}>
                    <a className={styles.ma_hi}>История матчей</a>
                    <div className={styles.ma_top}></div>                        
                    <div className={styles.ma_card}>
                        <hr/>
                        <div id="ma_game" className={styles.ma_la}>
                            <a>CS:GO</a>
                            <div className={styles.ma_center}>
                                <a>вр.когда была</a>
                                <a>длина </a>
                                <a className={classNames(styles.ma_id, styles.off)}>ID матч id</a>
                            </div>
                            <div className={styles.ma_right}>
                                <a className={styles.ma_status}>матч статус</a>
                                <a className={styles.ma_bal}>баланс мат</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ma_card}>
                        <hr/>
                        <div id="ma_game" className={styles.ma_la}>
                            <a>CS:GO</a>
                            <div className={styles.ma_center}>
                                <a>вр.когда была</a>
                                <a>длина </a>
                                <a className={classNames(styles.ma_id, styles.off)}>ID матч id</a>
                            </div>
                            <div className={styles.ma_right}>
                                <a className={styles.ma_status}>матч статус</a>
                                <a className={styles.ma_bal}>баланс мат</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="system_data" className={classNames(styles.system_data, styles.hidden)}>
            <div className={styles.cont_data}>
                <div className={styles.dat_left}>
                    <a className={styles.id1}>ID</a>
                    <a className={styles.username1}>Никнейм</a>
                    <a className={styles.bio1}>Био</a>
                    <a className={styles.data_reg1}>Дата регистрации</a>
                    <a className={styles.gmail1}>Электронная почта</a>
                </div>
                <div className={styles.left_data} id="app3">
                    <CopyToClipboard text={uuid}>
                        <a className={styles.id} id="uuid">{uuid}
                            <button className={classNames(styles.btn, styles.copybtn)} id="#uuid">
                                <img id="cop" src="/copy.svg" alt=""/>
                            </button>
                        </a>
                    </CopyToClipboard>
                    <a className={styles.username}>{username}</a>
                    <a className={styles.bio}>{bio}</a>
                    <a className={styles.data_reg}>{datareg}</a>
                    <hr className={styles.n1}/>
                    <a className={styles.em}>Адрес электронной почты</a>
                    <a className={styles.gmail}>{mail}</a>
                    <hr className={styles.n2}/>
                </div>
                <div className={styles.right_data} >
                    <div className={styles.user} id="app4">
                        <img className={styles.ava} src={`./../avatar/${avatar}`} alt=""/>
                        <div className={styles.avase}>
                            <a onClick={editor} className={styles.avaset} id="settings">Изменить</a>
                        </div>              
                    </div>
                </div>
            </div>
        </div>
        <div id="system_param" className={classNames(styles.system_param, styles.hidden)}>
            <div className={styles.cont_param}>
                <div className={styles.left_param}>
                    <a className={styles.pa_maess}>Уведомления</a>
                    <label className={classNames(styles.form_switch, styles.bt)}>
                        <input type="checkbox"/>
                        <i></i>
                        <a>Новости платформы</a>
                    </label>
                    <label className={classNames(styles.form_switch, styles.bt)}>
                        <input type="checkbox"/>
                        <i></i>
                        <a>Новые турниры</a>
                    </label>
                    <label className={classNames(styles.form_switch, styles.bt)}>
                        <input type="checkbox"/>
                        <i></i>
                        <a>Входящие сообщения</a>
                    </label>
                    <label className={classNames(styles.form_switch, styles.bt)}>
                        <input type="checkbox"/>
                        <i></i>
                        <a>Приглашения в команду</a>
                    </label>
                    <label className={classNames(styles.form_switch, styles.bt)}>
                        <input type="checkbox"/>
                        <i></i>
                        <a>Запросы в друзья</a>
                    </label>
                    <hr/>
                    <a className={styles.addteams}>Приглашения в команду</a>
                    <hr/>
                    <a className={styles.region}>Регион</a>
                    <label className={styles.regions} id="region">
                        <a className={classNames(styles.reg_st, styles.off)}>Регион</a>
                        <img className={styles.regf} src={`https://ipdata.co/flags/${countryo}.png`} alt={`${countryo}`}/>
                    </label>
                    <hr/>
                    <label className={styles.ak}>
                        <a className={styles.akau}>Привязать аккаунт</a>
                    </label>
                    <div id={styles.account}>
                        <label className={styles.ste}>
                            <a className={styles.off}>steam</a>
                            <a id="us_ste" className={styles.hs} href="#"><img className={classNames(styles.stea, styles.ac)} src="minus.svg" alt=""/>911unknown</a>
                        </label>
                        <label className={styles.ste}>
                            <a className={styles.off}>Google</a>
                            <a id="us_gog" className={styles.H} href="#"><img className={classNames(styles.goog, styles.ac)} src="minus.svg" alt=""/>glebweider</a>
                        </label>
                    </div>
                    <hr/>
                    <a className={styles.pas}>Изменить пароль</a>
                    <label className={styles.password}>
                        <a className={styles.set}>Изменить</a>
                    </label>
                    <hr/>
                    <a href="/leave">
                        <input id="leave" className={styles.leave} type="button" value="Выйти из аккаунта"/>
                    </a>
                </div>
            </div>
        </div>
        <style global jsx>{`
            body{
                background: linear-gradient(180deg, rgb(33, 33, 41) 0%, #101011 100%);
                backdrop-filter: blur(220px);
                width: 100%;
                overflow-x: hidden;
                height: 1165px;
            }
        `}</style>               
</MainContainer>
    );
};

export default lk;