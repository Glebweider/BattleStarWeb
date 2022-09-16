import Link from 'next/link';
import MainContainer from "../../components/MainContainer";
import styles from '../../styles/users.module.css';
import Meta from "../../app/utils/Meta";
import classNames from 'classnames';

// Components

import Chat from '../../components/Chat'
import Invites from '../../components/Invites'
import Search from '../../components/Search'


const Users = ({users}) => {

function choice_vb_a() {
    const container1 = document.querySelector("#container1");
    const container2 = document.querySelector("#container2");
    const container3 = document.querySelector("#container3");

    const vbr_1 = document.querySelector('#vbr_1');
    const vbr_2 = document.querySelector('#vbr_2');
    const vbr_3 = document.querySelector('#vbr_3');

    container1.classList.add("users_hidden__b22iY");
    container2.classList.remove("users_hidden__b22iY");
    container3.classList.remove("users_hidden__b22iY");

    vbr_1.classList.add("users_active__aChAi");
    vbr_2.classList.remove("users_active__aChAi");
    vbr_3.classList.remove("users_active__aChAi");
}
function choice_vb_b() {
    const container1 = document.querySelector("#container1");
    const container2 = document.querySelector("#container2");
    const container3 = document.querySelector("#container3");

    const vbr_1 = document.querySelector('#vbr_1');
    const vbr_2 = document.querySelector('#vbr_2');
    const vbr_3 = document.querySelector('#vbr_3');

    container1.classList.remove("users_hidden__b22iY");
    container2.classList.add("users_hidden__b22iY");
    container3.classList.remove("users_hidden__b22iY");

    vbr_1.classList.remove("users_active__aChAi");
    vbr_2.classList.add("users_active__aChAi");
    vbr_3.classList.remove("users_active__aChAi");
}   
function choice_vb_c() {
  const container1 = document.querySelector("#container1");
  const container2 = document.querySelector("#container2");
  const container3 = document.querySelector("#container3");

  const vbr_1 = document.querySelector('#vbr_1');
  const vbr_2 = document.querySelector('#vbr_2');
  const vbr_3 = document.querySelector('#vbr_3');

  container1.classList.remove("users_hidden__b22iY");
  container2.classList.remove("users_hidden__b22iY");
  container3.classList.add("users_hidden__b22iY");

  vbr_1.classList.remove("users_active__aChAi");
  vbr_2.classList.remove("users_active__aChAi");
  vbr_3.classList.add("users_active__aChAi");
}


  const LUsers = () => {
    return (
      <>
      {users.map(user =>
      <Link href={`../users/profile/${user.uuid}`} key={user._id}>
        <div className={styles.cell}>
          <img src='./../../avatar/h.png' alt="" />
          <div className="d-flex flex-wrap ">
            <a>{user.username}</a>
            <div className="description">
              Description
            </div>
          </div>
        </div>
      </Link>
    )}
      </>
    );
  };

  return( 
  <>
    <MainContainer /> 
    <Meta title={'Пользователи'}/>
    <div className={styles.wrapper}>
      <div className={styles.scroll}>
        <div className={styles.vibor}>
          <div id='vbr_1' onClick={choice_vb_a} className={classNames(styles.choice_vb, styles.active)}>
            <a className={styles.vbr_a}>ОНЛАЙН</a>
            <hr/>
          </div>
          <div id='vbr_2' onClick={choice_vb_b} className={styles.choice_vb}>
            <a className={styles.vb_r}>ЗАЯВКИ</a>
            <hr/>
          </div>
          <div id='vbr_3' onClick={choice_vb_c} className={styles.choice_vb}>
            <a className={styles.vbr_a}>ПОИСК</a>
            <hr/>
          </div>
        </div>
      
      <div className={styles.MainContainer}>
        <div id='container1' className={classNames(styles.Container, styles.hidden)}>
          <Chat users={users}/>
        </div>
        <div id='container2' className={styles.Container}>
          <Invites/>
        </div>
        <div id='container3' className={styles.Container}>
          <Search/>
        </div>
      </div>
      </div>
    </div>
    <style>{`
      body {
        overflow-y: hidden;
      }
    `}</style>
  </>)
}

export async function getStaticProps(context) {
  const response = await fetch(`http://localhost:5000/auth/users`)
  const users = await response.json()
  return {
    props: {users},
  }
}

export default Users