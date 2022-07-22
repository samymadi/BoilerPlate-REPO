import React, { useEffect } from "react";


//material ui
import theme from "./style/theme";
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; 


//Routing
import Routing from "./navigation/Routing.jsx";
 

import { useDispatch,useSelector } from "react-redux";


//redux features
import {toMadi} from "./features/state/state-slice";

//i18next
import { useTranslation } from "react-i18next"; 


//
import {api} from './services/configAxios';




function App() {





  useEffect(()=>{
    request();
  },[])



  async function request(){
    const {result,error} = await api.get('/data');
  
    console.log(result,error);
  }


  const [t,i18n] =  useTranslation();
  const value = useSelector(state=>state.stateValue.state);
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routing/>
        {/* <p onClick={()=>{  dispatch(toMadi(Math.random().toString()))}} >{value}</p> */}
    </ThemeProvider>
  );
}

export default App;
