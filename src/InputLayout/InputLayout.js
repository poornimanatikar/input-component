import Input from '../Input/Input';
import styles from './InputLayout.module.scss';

function InputLayout() {
 const inputHeadingOne ='<Input />' ;
 const inputHeadingTwo ='<Input error />' ;
 const inputHeadingThree ='<Input disabled />' ;
 const inputHeadingFour ='<Input helperText="Some interesting text" />' ;
 const inputHeadingFive ='<Input helperText="Some interesting text" />' ;
 const inputHeadingSix ='<Input value="Text" />' ;
 const inputHeadingSeven ='<Input size="sm" />' ;
 const inputHeadingEight ='<Input size="md" />' ;
 const inputHeadingNine ='<Input fullWidth />' ;
 const inputHeadingTen ='<Input multiline rows="4" />';
 return (
     <div className={styles.mainDiv}>
     <div>
        <div>
         <h4>{inputHeadingOne}</h4>
         <Input label="Label" placeholder="Placeholder" />
       </div>
    </div>
    <div>
       <div>
          <h4>{inputHeadingTwo}</h4>
          <Input error label="Label" placeholder="Placeholder" />
       </div>
    </div>
    <div>
        <div>
          <h4>{inputHeadingThree}</h4>
          <Input disabled label="Label" placeholder="Placeholder" />
       </div>
    </div>
    <div>
       <div>
          <h4>{inputHeadingFour}</h4>
          <Input  label="Label" placeholder="Placeholder" helperText="Some Interesting Text"/>
       </div>
       <div>
          <h4>{inputHeadingFive}</h4>
          <Input error  label="Label" placeholder="Placeholder" helperText="Some Interesting Text" />
       </div>
    </div>
    <div>
       <div>
          <h4>{inputHeadingFive}</h4>
          <Input error  label="Label" placeholder="Placeholder" helperText="Some Interesting Text" />
       </div>
       
    </div>
    <div>
       <div>
          <h4>{inputHeadingSix}</h4>
          <Input label="Label" value="Text"/>
       </div>   
    </div>
    <div>
       <div>
          <h4>{inputHeadingSeven}</h4>
          <Input label="Label" placeholder="Placeholder" size="sm" />
       </div>   
       <div>
          <h4>{inputHeadingEight}</h4>
          <Input label="Label" placeholder="Placeholder" size="md"/>
       </div> 
    </div>
    <div>
       <div>
          <h4>{inputHeadingNine}</h4>
          <Input fullWidth label="Label" placeholder="Placeholder"/>
       </div> 
    </div>
    <div>
       <div>
          <h4>{inputHeadingTen}</h4>
          <Input multiline rows="4" label="Label" placeholder="Placeholder"/>
       </div> 
    </div>
    </div>
 )
}
export default InputLayout