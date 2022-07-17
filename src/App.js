import React from "react";


//material ui
import theme from "./style/theme";
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


//Routing
import Routing from "./navigation/Routing.jsx";

import '../config/i18n';
import { useTranslation } from "react-i18next";







function App() {


  const {t,i18n} =  useTranslation();
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routing/>

        <p>{t('email_error')}</p>
    </ThemeProvider>
  );
}

export default App;
