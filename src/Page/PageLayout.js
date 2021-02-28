import InputLayout from '../InputLayout/InputLayout';
import styles from './PageLayout.module.scss';

const PageLayout =() => {
return (<div className={styles.page_container}>
  
<div className={styles.container_left}>
<h3 className={styles.logo}>
        <span style={{ color: '#F7542E' }}>Dev</span>challenges.io
      </h3>
    <ul>
        <li>Colors </li>
        <li>Typography</li>
        <li>Grid </li>
        <li>Buttons </li>
        <li className={styles.selected}>Input </li>
        
    </ul>
</div>
<div className={styles.container_right}>
    <InputLayout/>
</div>
</div>
)}
export default PageLayout