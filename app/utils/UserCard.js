import Link from 'next/link';
import styles from '../../styles/utils/UserCard.module.css'


const UserCard = ({user}) => {
    return (
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
    );
};

export default UserCard;