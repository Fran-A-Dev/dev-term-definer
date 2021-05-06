import { Devterm } from 'lib/types';
import styles from './Card.module.scss';


const Card: React.FC<Devterm> = ({term}) => {

return <div className={styles.card}>
<h2 className={styles.h2}>Click on the Term to learn!</h2>
    <div className="term"> 
    <a href=""></a>
    
    <span className={styles.term}>{term}</span>
   
    </div>
</div>

}


export default Card;