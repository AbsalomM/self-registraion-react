import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import  Home  from './pages/Home';
import  SignIn  from './pages/SignIn';
import  SignUp  from './pages/SignUp';
import {GlobalStyle} from './globalStyles';
import React, {useState, useEffect} from 'react';
import {DocumentReaderApi, TextFieldType, GraphicFieldType} from '@regulaforensics/document-reader-webclient';
import { base64 } from './utils/ImgData';
import axios from 'axios';
import Dummy from './pages/Dummy';


function App() {

  const {DOCUMENT_NUMBER, SURNAME_AND_GIVEN_NAMES, DATE_OF_BIRTH} = TextFieldType;
  const {PORTRAIT, SIGNATURE} = GraphicFieldType;

  const [state, setstate] = useState([]);

 useEffect(() => {

    const imageAsBase64String = base64;
    const api = new DocumentReaderApi({basePath: "http://192.168.101.238:8080", baseOptions: "*"})
    const result = api.process({images: [imageAsBase64String]})

    console.log(result);
    // axios.post("api/process", imageAsBase64String)
    // .then( res => console.log(res)).catch( err  => console.log(err)) ;
   
 })



  return (
    // <AnimatePresence>
    <Router>
       <GlobalStyle />
      <Switch>
        <Route path = "/" exact component = {Home} /> 
        <Route path = "/home"  component = {Home} /> 
        <Route path = "/signin" component = {SignIn} /> 
        <Route path = "/signup"  component = {SignUp} /> 
        <Route path = "/dummy"  component = {Dummy} /> 
      </Switch>
        
    </Router>
    // </AnimatePresence>
  );
}

export default App;
