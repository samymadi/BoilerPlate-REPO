import React, { useCallback, useEffect, useState } from 'react'

//material ui
import styled from '@emotion/styled'
import {
        TextField,
        InputLabel,
        useTheme} from '@mui/material'



const StyledInput = styled(props=>(
    <TextField {...props}/>
))(({theme})=>({
        "& .Mui-focused fieldset":{
        //   borderColor:`${theme.palette.secondary.light} !important`
        },
        "& .MuiFormHelperText-root":{
            marginLeft:"1px"
        },
        "& input":{
            fontSize:'0.9rem'
        }
}))

function Input(props) {


    const {
            state,
            labelStyle,
            inputStyle,
            label,
            value,
            setValue,
            title,

            ...rest} = props


    //hooks
    const theme = useTheme();

    const [inputState,setInputstate]= useState({});
    
    
    useEffect(()=>{
        manageInputState();
    },[state]);




    

    const handleOnChange = (e)=>{
        setInputstate({}) // reset the error focus when the user start typing
        setValue(e.target.value);
    }


    const manageInputState = useCallback(()=>{
        //clean the string && format the string
        const _state = state.trim();
        const separatorIndex = _state.indexOf(':');
        const type = _state.slice(0,separatorIndex).toLowerCase().trim();
        const message = _state.slice(separatorIndex+1).trim();

        switch(type){
            case 'error': {
                    setInputstate({error:true,helperText:message}); break;
                    }
            case 'info':  break;
            case 'warning': break;
        }
    },[state])



  return (
    <div>
            <InputLabel 
                        sx={{fontSize:'0.8rem',color:theme.palette.secondary.light,...labelStyle}}
                        htmlFor={title} >
                {title}
            </InputLabel>
            <StyledInput
                        onChange={handleOnChange} 
                        sx={{inputStyle}}
                        size="small"  
                        id={title}
                        {...inputState}
                        {...rest}>

            </StyledInput>
    </div>
  )
}

export default Input