import Meta from "../app/utils/Meta";
import MainContainer from "../components/MainContainer";
import io from 'socket.io-client';
import styles from '../styles/matchs.module.css';
import classNames from "classnames";
import Link from 'next/link'
import axios from "axios";

const Matchs = ({ PropsRooms }) => {
  function choice_vb_a() {
    const content_vb1 = document.querySelector("#scroll_a");
    const content_vb2 = document.querySelector("#scroll_b");
    const vbr_a = document.querySelector('#vbr_a');
    const vb_r = document.querySelector('#vb_r');
    content_vb1.classList.remove("matchs_hidden__QvTzN");
    content_vb2.classList.add("matchs_hidden__QvTzN");
    vbr_a.classList.add("matchs_active__N0SOE");
    vb_r.classList.remove("matchs_active__N0SOE");
}
function choice_vb_b() {
    const content_vb1 = document.querySelector("#scroll_a");
    const content_vb2 = document.querySelector("#scroll_b");
    const vbr_a = document.querySelector('#vbr_a');
    const vb_r = document.querySelector('#vb_r');
    content_vb1.classList.add("matchs_hidden__QvTzN");
    content_vb2.classList.remove("matchs_hidden__QvTzN");
    vbr_a.classList.remove("matchs_active__N0SOE");
    vb_r.classList.add("matchs_active__N0SOE");
}    
function topMid1() {
  const Matchs = document.querySelector("#Matchs");
  const Twich = document.querySelector("#Twich");
  const Finished = document.querySelector("#Finished");

  const Matchs1 = document.querySelector('#Matchs1');
  const Twich1 = document.querySelector('#Twich1');
  const Finished1 = document.querySelector('#Finished1');

  Matchs.classList.remove("matchs_hidden__QvTzN");
  Twich.classList.add("matchs_hidden__QvTzN");
  Finished.classList.add("matchs_hidden__QvTzN");

  Matchs1.classList.add("matchs_activeCe__HvVYv");
  Twich1.classList.remove("matchs_activeCe__HvVYv");
  Finished1.classList.remove("matchs_activeCe__HvVYv");
}
function topMid2() {
  const Matchs = document.querySelector("#Matchs");
  const Twich = document.querySelector("#Twich");
  const Finished = document.querySelector("#Finished");

  const Matchs1 = document.querySelector('#Matchs1');
  const Twich1 = document.querySelector('#Twich1');
  const Finished1 = document.querySelector('#Finished1');

  Matchs.classList.add("matchs_hidden__QvTzN");
  Twich.classList.remove("matchs_hidden__QvTzN");
  Finished.classList.add("matchs_hidden__QvTzN");

  Matchs1.classList.remove("matchs_activeCe__HvVYv");
  Twich1.classList.add("matchs_activeCe__HvVYv");
  Finished1.classList.remove("matchs_activeCe__HvVYv");
}
function topMid3() {
  const Matchs = document.querySelector("#Matchs");
  const Twich = document.querySelector("#Twich");
  const Finished = document.querySelector("#Finished");

  const Matchs1 = document.querySelector('#Matchs1');
  const Twich1 = document.querySelector('#Twich1');
  const Finished1 = document.querySelector('#Finished1');

  Matchs.classList.add("matchs_hidden__QvTzN");
  Twich.classList.add("matchs_hidden__QvTzN");
  Finished.classList.remove("matchs_hidden__QvTzN");

  Matchs1.classList.remove("matchs_activeCe__HvVYv");
  Twich1.classList.remove("matchs_activeCe__HvVYv");
  Finished1.classList.add("matchs_activeCe__HvVYv");
}
  const button1 = () => {
    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector('#button2');
    const diff1 = document.querySelector('#diff1');
    const diff2 = document.querySelector('#diff2');

    button1.classList.add("matchs_activeb__ZE9nZ");
    button2.classList.remove("matchs_activeb__ZE9nZ");
    diff1.classList.remove("matchs_hidden__QvTzN");
    diff2.classList.add("matchs_hidden__QvTzN");
  }
  const button2 = () => {
    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector('#button2');
    const diff1 = document.querySelector('#diff1');
    const diff2 = document.querySelector('#diff2');

    button1.classList.remove("matchs_activeb__ZE9nZ");
    button2.classList.add("matchs_activeb__ZE9nZ");
    diff1.classList.add("matchs_hidden__QvTzN");
    diff2.classList.remove("matchs_hidden__QvTzN");
  }
  const AllRooms = () => {
    if (PropsRooms == '') {
      return (
        <>
          <a>Матчей на данный момент нету</a>
        </>
      )
    } else {

      const Ping = ({ping}) => {
        if (ping <= 30) {
          return (
            <img className={styles.PingPing} src="./../good.svg" alt="" />
          )
        } else {
          return (
            <img className={styles.PingPing} src="./../middle.svg" alt="" />
          )
        }
      }
      const Locked = ({locked}) => {
        if (locked == true) {
          return (        
            <div className={styles.locked}>
              <img className={styles.cardLockedImg} src='./../locked.svg' alt='Locked' />
            </div>
          )
        } else {
          return (
            <>
            </>
          )
        }
    
      }
      return (
        <>
          {PropsRooms.map(Room =>
          <Link href={`/rooms/${Room.id}`} key={Room.id}>
            <div className={styles.card}>
              <img className={styles.cardImg} src={`./../${Room.payload.data.map}.png`} alt="" />
              <div className={styles.cardDown}>
                <div className={styles.cardTitleTop}>
                  <img className={styles.cardStrana} src={`https://ipdata.co/flags/${Room.payload.data.country}.png`} alt={Room.payload.data.country} />
                  <a className={styles.cardTitle}>{Room.payload.data.title}</a>
                  <Locked locked={Room.locked}/>
                </div>
                <div className={styles.cardInfo}>
                  <a className={styles.cardMap}>{Room.payload.data.map}</a>
                  <hr className={styles.cardHr} />
                  <div className={styles.cardInf}>
                    <div className={styles.cardLeft}>
                      <div className={styles.cardDiff}>
                        <a className={styles.cardA}>Режим</a>
                        <a>{Room.payload.data.type}</a>
                      </div>
                      <div className={styles.cardMem}>
                        <a className={styles.cardA}>Участников</a>
                        <a>{Room.payload.data.players}</a>
                      </div>
                    </div>
                    <div className={styles.cardPing}>
                      <a>{Room.payload.data.ping}</a>
                      <Ping ping={Room.payload.data.ping}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          )}
        </>
      )
    };
  }
  const Maps = () => {
    const Mirage = () => {
      const Mirage = document.querySelector('#Mirage');
      const Inferno = document.querySelector('#Inferno');
      const Overpass = document.querySelector('#Overpass');
      const Office = document.querySelector('#Office');
      const Train = document.querySelector('#Train');

      Mirage.classList.add("matchs_activeb__ZE9nZ");
      Inferno.classList.remove("matchs_activeb__ZE9nZ");
      Overpass.classList.remove("matchs_activeb__ZE9nZ");
      Office.classList.remove("matchs_activeb__ZE9nZ");
      Train.classList.remove("matchs_activeb__ZE9nZ");
    }
    const Inferno = () => {
      const Mirage = document.querySelector('#Mirage');
      const Inferno = document.querySelector('#Inferno');
      const Overpass = document.querySelector('#Overpass');
      const Office = document.querySelector('#Office');
      const Train = document.querySelector('#Train');

      Mirage.classList.remove("matchs_activeb__ZE9nZ");
      Inferno.classList.add("matchs_activeb__ZE9nZ");
      Overpass.classList.remove("matchs_activeb__ZE9nZ");
      Office.classList.remove("matchs_activeb__ZE9nZ");
      Train.classList.remove("matchs_activeb__ZE9nZ");
    }
    const Overpass = () => {
      const Mirage = document.querySelector('#Mirage');
      const Inferno = document.querySelector('#Inferno');
      const Overpass = document.querySelector('#Overpass');
      const Office = document.querySelector('#Office');
      const Train = document.querySelector('#Train');

      Mirage.classList.remove("matchs_activeb__ZE9nZ");
      Inferno.classList.remove("matchs_activeb__ZE9nZ");
      Overpass.classList.add("matchs_activeb__ZE9nZ");
      Office.classList.remove("matchs_activeb__ZE9nZ");
      Train.classList.remove("matchs_activeb__ZE9nZ");
    }
    const Office = () => {
      const Mirage = document.querySelector('#Mirage');
      const Inferno = document.querySelector('#Inferno');
      const Overpass = document.querySelector('#Overpass');
      const Office = document.querySelector('#Office');
      const Train = document.querySelector('#Train');

      Mirage.classList.remove("matchs_activeb__ZE9nZ");
      Inferno.classList.remove("matchs_activeb__ZE9nZ");
      Overpass.classList.remove("matchs_activeb__ZE9nZ");
      Office.classList.add("matchs_activeb__ZE9nZ");
      Train.classList.remove("matchs_activeb__ZE9nZ");
    }
    const Train = () => {
      const Mirage = document.querySelector('#Mirage');
      const Inferno = document.querySelector('#Inferno');
      const Overpass = document.querySelector('#Overpass');
      const Office = document.querySelector('#Office');
      const Train = document.querySelector('#Train');

      Mirage.classList.remove("matchs_activeb__ZE9nZ");
      Inferno.classList.remove("matchs_activeb__ZE9nZ");
      Overpass.classList.remove("matchs_activeb__ZE9nZ");
      Office.classList.remove("matchs_activeb__ZE9nZ");
      Train.classList.add("matchs_activeb__ZE9nZ");
    }
    return(
      <div className={styles.Maps}>
        <div id='Mirage' onClick={Mirage} className={styles.button}>
          <a>Mirage</a>
        </div>
        <div id='Inferno' onClick={Inferno} className={styles.button}>
          <a>Inferno</a>
        </div>
        <div id='Overpass' onClick={Overpass} className={styles.button}>
          <a>Overpass</a>
        </div>
        <div id='Office' onClick={Office} className={styles.button}>
          <a>Office</a>
        </div>
        <div id='Train' onClick={Train} className={styles.button}>
          <a>Train</a>
        </div>
      </div>
    )
  }
  const Create1 = () => {
    const NameLobby = document.querySelector('#LobbyInput').value
    console.log(NameLobby)
  }
  const Create5 = () => {
    const NameLobby = document.querySelector('#LobbyInput').value
    const Map = "Mirage"
    axios({
      method: 'POST',
      url: 'http://localhost:4000/match/createMatch',

  })
  .then((response) => {

      })
  .catch((error) => {        
      if (typeof window !== 'undefined') {
          alert('Не удалось создать комнату:' + error.data )
      }   
  })
    console.log(NameLobby)
  }
  return (
    <>
      <Meta title={'Matchs'} />
      <MainContainer />
      <div className={styles.wall}>
        <div className={styles.wallpaper}>          
          <div className={styles.scrolls}>
            <div className={styles.choice}>
              <div className={styles.vibor}>
                <div id='vbr_a' onClick={choice_vb_a} className={classNames(styles.choice_vb, styles.active)}>
                  <a className={styles.vbr_a}>НАЙТИ ИГРУ</a>
                  <hr/>
                </div>
                <div id='vb_r' onClick={choice_vb_b} className={styles.choice_vb}>
                  <a className={styles.vb_r}>СОЗДАТЬ ЛОББИ</a>
                  <hr/>
                </div>
              </div>
            </div>
            <div id="scroll_a" className={styles.scroll_A}>
              <div className={styles.lobby1}>
              <div className={styles.users}>
                <a>Пати</a>
                <div className={styles.usersAvatars}>
                  <div className={styles.userAvatar}>
                    <img className={styles.userAva} src="./../avatar/h.png" alt="Аватарка"/>
                    <div className={styles.newUs}><img className={styles.pl} src="./../pl.svg" alt=''/></div>
                  </div>
                </div>  
              </div>
              <div className={styles.filters}>
                <a><img className={styles.fil} src="./../filt.svg" alt="" />Фильтры</a>
                <div className={styles.filter}>
                  <div className={styles.fi}><a className={styles.off}>Карты</a><img className={styles.fiM} src="./../down.svg" alt="<" /></div>
                  <div className={styles.fi}><a className={styles.off}>Режим игры</a><img className={styles.fiM} src="./../down.svg" alt="<" /></div>
                  <div className={styles.fi}><a className={styles.off}>Регион</a><img className={styles.fiM} src="./../down.svg" alt="<" /></div>
                  <hr className={styles.an}/>
                  <div className={styles.anti}>
                    <a className={styles.off}>Античит</a>  
                    <a className={styles.off}>Включен</a> 
                  </div>
                  <hr className={styles.an}/>
                </div>
              </div>
              </div>
            </div>
            <div id="scroll_b" className={classNames(styles.scroll_B, styles.hidden)}>
              <div className={styles.lobby}>
                <a>Лобби</a>
                <div className={styles.buttons}>
                  <div id='button1' onClick={button1} className={styles.button1}>
                    <a>1x1</a>
                  </div>
                  <div id='button2' onClick={button2} className={classNames(styles.button2, styles.activeb)}>
                    <a>5x5</a>
                  </div>
                </div>
                <input className={styles.inputLobby} id='LobbyInput' type='text' placeholder="*Введите название лобби" />
                <div id="diff1" className={classNames(styles.difficul, styles.hidden)}>
                  <a>Карты</a>
                  <hr className={styles.an}/>
                  <div className={styles.anti}>
                    <a className={styles.off}>Античит</a>  
                    <a className={styles.off}>Включен</a>  
                  </div>
                  <hr className={styles.an}/>
                  <button onClick={Create1} className={styles.Create}>
                    <a>Создать</a>
                  </button>
                </div>
                <div id="diff2" className={styles.difficul}>
                  <a>Карты</a>
                  <Maps />                
                  <hr className={styles.an}/>
                  <div className={styles.anti}>
                    <a className={styles.off}>Античит</a>  
                    <a className={styles.off}>Включен</a>  
                  </div>
                  <hr className={styles.an}/>
                  <button onClick={Create5} className={styles.Create}>
                    <a>Создать</a>
                  </button>
                </div>

              </div>
            </div>
          </div>
          <div className={styles.Main}>
            <div className={styles.topMid}>
              <div className={styles.vibor2}>
                <div id='Matchs1' onClick={topMid1} className={classNames(styles.TopMidVib, styles.activeCe)}>
                  <a className={styles.TopMidViba}>ОТКРЫТЫЕ МАТЧИ</a>
                  <hr/>
                </div>
                <div id='Twich1' onClick={topMid2} className={styles.TopMidVib}>
                  <a className={styles.TopMidViba}>ТРАНСЛЯЦИИ</a>
                  <hr/>
                </div>
                <div id='Finished1' onClick={topMid3} className={styles.TopMidVib}>
                  <a className={styles.TopMidViba}>ЗАВЕРШЁННЫЕ</a>
                  <hr/>
                </div>
              </div>
            </div>
            <div className={styles.top2}>
              <div className={styles.topBlockInfo}>
                <a className={styles.topOn}>40687</a>
                <a className={styles.topoff}>игроков онлайн</a>
              </div>
              <div className={styles.topBlockInfo}>
                <a className={styles.topOn}>491847</a>
                <a className={styles.topoff}>матчей сыграно</a>
              </div>
              <div className={styles.topBlockInfo}>
                <a className={styles.topOn}>3 857 392</a>
                <a className={styles.topoff}>суммарный банк</a>
              </div>
            </div>
            <div id="Matchs">
              <a>Открытые лобби</a>
              <div className={styles.content}>
                <AllRooms />
              </div>
            </div>
            <div id="Twich" className={styles.hidden}>
              <div className={styles.content}>
                34234
              </div>
            </div>
            <div id="Finished" className={styles.hidden}>
              <div className={styles.content}>
                435435643543
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps(context) {
  const response = await fetch(`http://localhost:4000/match/rooms`)
  const PropsRooms = await response.json()
  return {
    props: { PropsRooms },
  }
}


export default Matchs;