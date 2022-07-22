import React,{memo,useState} from 'react'



//components
import Input from '../components/Input/Input'


function testRoute() {

    const [state,setState] = useState('');
    const [email,setEmail] =  useState('');
    
    
    const handleClick = ()=>{
        setState('error:check the email')
    } 

  return (
    <div>
            <Input 
                type='password'
                inputError={state} 
                state={state}
                value={email}
                placeholder='Email'
                title='Email'
                setValue={setEmail}/>
            <Input 
                type='password'
                inputError={state} 
                state={state}
                value={email}
                placeholder='Email'
                title='Email'
                setValue={setEmail}/>
            <button onClick={handleClick}>error</button>
    </div>
  )
}

export default memo(testRoute)