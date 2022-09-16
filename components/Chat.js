import React from 'react';
import UserCard from '../app/utils/UserCard';
import styles from '../styles/Components/Chat.module.css'

const Chat = ({users}) => {
  console.log(users)

  const LUsers = () => {
    return (
      <>
      {users.map(user =>
        <UserCard user={user}/>
        )}
      </>
    );
  };
  
  return (
    <>
    <div className={styles.MainContChat}>
      <div className={styles.Users}>
        <input className={styles.UsersInput} id='username' placeholder='Поиск по друзьям' type='text' />
        <div className={styles.UsersScroll}>
          <LUsers />
        </div>
      </div>
      <div className={styles.Chat}>

      </div>
      </div>
    </>
  );
};

export default Chat;