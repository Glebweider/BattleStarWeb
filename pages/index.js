import styles from '../styles/index.module.css';
import MainContainer from '../components/MainContainer'
import Meta from '../app/utils/Meta';

const index = () => {
    return (
        <>
            <MainContainer />
            <Meta title={'Главная'}/>
            <div className={styles.wrapper}>

            </div> 
            <style global jsx>{`
                body{
                    overflow-x: hidden;
                    overflow-y: hidden;
                }
            `}</style>
       </>     
    );
};
export default index;