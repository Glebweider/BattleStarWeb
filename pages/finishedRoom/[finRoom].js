import MainContainer from "../../components/MainContainer";
import styles from "../../styles/profile.module.css";
import drs from '../../styles/menu.module.css'
import Meta from "../../app/utils/Meta";
import axios from "axios";
import store from '../../redux/store'


const User = ({user, friends}) => {
    
 
    return(<>
        <MainContainer />
        <Meta title={'Room '} />
    </>   
    )
};

export default User