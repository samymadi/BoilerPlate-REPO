import React,{memo} from 'react'
import {styled,
        Checkbox,
        FormControlLabel,
        FormGroup,
        FormControl,
        FormHelperText} from '@mui/material'



const StyledFormControlLabel = styled(props=>(
    <FormControlLabel {...props}/>

))(({theme})=>({
    "& .MuiFormControlLabel-label":{
        fontSize:'0.9rem',
        color:theme.palette.secondary.main,
        fontWeight:'bold'
    }
}))



const StyledCheckBox =styled(props=>(
    <Checkbox {...props}/>        

))(({theme})=>({
    "& .MuiSvgIcon-root":{
        fontSize:'1.2rem !important',
        color:theme.palette.secondary.main
    }
}))




function CheckBox(props) {

    const {
            checkboxProps,
            formProps,
            formHelperTextProps,
            children} = props
    const {
        setValue,
        ..._checkboxProps}=checkboxProps         

  return (
    <FormControl >
        <FormGroup>
                <StyledFormControlLabel
                                control={<StyledCheckBox {..._checkboxProps}/>}
                                {...formProps}/>
                <FormHelperText
                {...formHelperTextProps}    
                >
                {children}
                {/* sometext */}
                
                </FormHelperText>                        
            </FormGroup>
    </FormControl>  
    
  )
}

export default memo(CheckBox)