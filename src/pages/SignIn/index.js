import React from 'react'
import Login from '../../components/SignIn'
import { Info } from '../../Data'

const SignIn = () => {
    return (
        <>
           <Login {...Info} /> 
        </>
    )
}

export default SignIn
