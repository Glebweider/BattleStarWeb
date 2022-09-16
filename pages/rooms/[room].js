import MainContainer from "../../components/MainContainer";
import styles from "../../styles/Room.module.css";
import Meta from "../../app/utils/Meta";
import axios from "axios";
import io from "socket.io-client"
import UUID from '../../app/utils/Uuid'
import Cookies from "js-cookie";
import store from '../../redux/store'


const Room = () => {
    const jwttoken = Cookies.get('token')
    const uid = UUID(8, 10)
    const verify = true
    const socket = io('http://localhost:4000')
    const { uuid, username, country, rank, avatar } = store.getState().userdata
    console.log(uuid)
    const data = {
        uuid: uuid,
        username: username,
        avatar: avatar,
        rank: rank,
        country: country,
        verify: verify
    }
    socket.on("connection", () => {
        socket.emit('join-room', data)
        socket.on("join-room", (room) => {
            console.log(room)
        })
    });
    socket.on("info-room", (room) => {
        console.log(room)
    })
    return(<>
        <MainContainer />
        <Meta title={'Room '} />
        <div className={styles.wallpaper}>
            
        </div>
    </>   
    )
};

export default Room