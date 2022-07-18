import React from "react";


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







function App() {


  const [t,i18n] =  useTranslation();
  const value = useSelector(state=>state.stateValue.state);
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routing/>
        <p onClick={()=>{ console.log('here');  dispatch(toMadi(Math.random().toString()))}} >{value}</p>
    </ThemeProvider>
  );
}

export default App;
