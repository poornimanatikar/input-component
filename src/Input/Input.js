import cn from 'classnames'
import styles from './Input.module.scss';
import MaterialIcon from 'material-icons-react';

function Input(props) {
    const computedClassNames = cn(styles.Input, {
        [styles.fullWidth] : props.fullWidth !== undefined,
        [styles.error] : props.error !== undefined,
        [styles.sm]: props.size === "sm",
        [styles.md]: props.size === "md" || props.size === undefined,
        [styles.disabled]: props.disabled !== undefined,
        [styles.padding]:props.startIcon !==undefined
    })
  return <div className={`${styles.inputContainer} ${computedClassNames}`}>
  <label >{props.label}</label>
  {props.startIcon && <span className={styles.startIcon}><MaterialIcon icon={props.startIcon} /></span>}
  {props.multiline ? (
    <textarea rows={props.rows}   placeholder={props.placeholder} >{props.value}</textarea>
  ): 
  <input type="text" disabled={props.disabled} placeholder={props.placeholder} value={props.value}></input>}
  {props.endIcon && <span className={styles.endIcon}><MaterialIcon icon={props.endIcon} /></span>}
  <span>{props.helperText}</span>
  </div>
}
export default Input
