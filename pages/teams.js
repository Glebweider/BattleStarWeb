import MainContainer from '../components/MainContainer';
import styles from '../styles/teams.module.css';
import classNames from 'classnames';
import Meta from '../app/utils/Meta';

const teams = () => {

    function my_teams() {
        const my_teams = document.querySelector("#top_my_teams");
        const open_teams = document.querySelector("#top_open_teams");
        const my_te = document.querySelector("#my_te");
        const open_te = document.querySelector("#open_te");
        my_teams.classList.add("teams_active__k8y3c");
        open_teams.classList.remove("teams_active__k8y3c");
        my_te.classList.remove("teams_active_block__gmJpN");
        open_te.classList.add("teams_active_block__gmJpN");
    }
    function open_teams() {
        const my_teams = document.querySelector("#top_my_teams");
        const open_teams = document.querySelector("#top_open_teams");
        const my_te = document.querySelector("#my_te");
        const open_te = document.querySelector("#open_te");
        my_teams.classList.remove("teams_active__k8y3c");
        open_teams.classList.add("teams_active__k8y3c");
        my_te.classList.add("teams_active_block__gmJpN");
        open_te.classList.remove("teams_active_block__gmJpN");
    }     

    return (
<>
<MainContainer />
<Meta title={'Teams'}/>
    <div className={styles.wrapper}>
        <div className={styles.top_content1}>
            <div onClick={my_teams} id='top_my_teams' className={classNames(styles.top_my_teams, styles.active)}>
                <a className={styles.top_my_teams1}>МОИ КОМАНДЫ</a><hr/>
            </div>
            <div onClick={open_teams} id='top_open_teams' className={styles.top_open_teams}>
                <a className={styles.top_open_teams1}>ОТКРЫТЫЕ КОМАНДЫ</a><hr/>
            </div>
        </div>
        <div id='my_te' className={styles.my_te}>
            <div className={styles.con_teams1}> 
                <div className={styles.con_teams} id="con_teams">
                    <a className={styles.prig_teams}>Приглашения в команды</a>
                    <div className={styles.card} id="card">
                        <img className={styles.img_teams} src="/avatar/1.png" alt=""/>
                        <a className={styles.playfire}>PlayFair Display$$$</a>
                        <div className={styles.ray}>
                            <a className={styles.off}>Рейтинг</a>
                            <a>1000-7</a>
                        </div>
                        <div className={styles.tyr}>
                            <a className={styles.off}>Турниров</a>
                            <a>2444</a>
                        </div>
                        <div className={styles.wine}>
                            <a className={styles.off}>Выйграно</a>
                            <a>5453543</a>
                         </div>
                        <div className={styles.playrs}>
                             <a className={styles.off}>Участников</a>
                            <a>9/10</a>
                        </div>
                        <div className={styles.button}>
                            <input id="" className={styles.da} type="button" value=""/>
                            <input id="" className={styles.net} type="button" value=""/>
                        </div>
                    </div>
                    <div className={styles.card} id="card">
                        <img className={styles.img_teams} src="/avatar/1.png" alt=""/>
                        <a className={styles.playfire}>PlayFair Display$$$</a>
                        <div className={styles.ray}>
                            <a className={styles.off}>Рейтинг</a>
                            <a>1000-7</a>
                        </div>
                        <div className={styles.tyr}>
                            <a className={styles.off}>Турниров</a>
                            <a>2444</a>
                        </div>
                        <div className={styles.wine}>
                            <a className={styles.off}>Выйграно</a>
                            <a>5453543</a>
                         </div>
                        <div className={styles.playrs}>
                             <a className={styles.off}>Участников</a>
                            <a>9/10</a>
                        </div>
                        <div className={styles.button}>
                            <input id="" className={styles.da} type="button" value=""/>
                            <input id="" className={styles.net} type="button" value=""/>
                        </div>
                    </div>
                </div>
            </div>        
            <div className={styles.my_teams}>
                <div className={styles.my_teams1}>
                    <a className={styles.my_inv}>Мои команды</a>
                </div>
            </div>
        </div>
        <div id='open_te' className={classNames(styles.open_te, styles.active_block)}>
            <div className={styles.con_teams1}> 
                <div className={styles.con_teams} id="con_teams">
                    <a className={styles.prig_teams}>Приглашения в команды</a>
                    <div className={styles.card} id="card">
                        <img className={styles.img_teams} src="/avatar/1.png" alt=""/>
                        <a className={styles.playfire}>PlayFair Display$$$</a>
                        <div className={styles.ray}>
                            <a className={styles.off}>Рейтинг</a>
                            <a>1000-7</a>
                        </div>
                        <div className={styles.tyr}>
                            <a className={styles.off}>Турниров</a>
                            <a>2444</a>
                        </div>
                        <div className={styles.wine}>
                            <a className={styles.off}>Выйграно</a>
                            <a>5453543</a>
                         </div>
                        <div className={styles.playrs}>
                             <a className={styles.off}>Участников</a>
                            <a>9/10</a>
                        </div>
                        <div className={styles.button}>
                            <input id="" className={styles.da} type="button" value=""/>
                            <input id="" className={styles.net} type="button" value=""/>
                        </div>
                    </div>
                    <div className={styles.card} id="card">
                        <img className={styles.img_teams} src="/avatar/1.png" alt=""/>
                        <a className={styles.playfire}>PlayFair Display$$$</a>
                        <div className={styles.ray}>
                            <a className={styles.off}>Рейтинг</a>
                            <a>hbgf-7</a>
                        </div>
                        <div className={styles.tyr}>
                            <a className={styles.off}>Турниров</a>
                            <a>2111</a>
                        </div>
                        <div className={styles.wine}>
                            <a className={styles.off}>Выйграно</a>
                            <a>5113</a>
                         </div>
                        <div className={styles.playrs}>
                             <a className={styles.off}>Участников</a>
                            <a>10/10</a>
                        </div>
                        <div className={styles.button}>
                            <input id="" className={styles.da} type="button" value=""/>
                            <input id="" className={styles.net} type="button" value=""/>
                        </div>
                    </div>
                </div>
            </div>        
            <div className={styles.my_teams}>
                <div className={styles.my_teams1}>
                    <a className={styles.my_inv}>Мои команды</a>
                </div>
            </div>
        </div>
    </div> 
</>
);
};
export default teams;