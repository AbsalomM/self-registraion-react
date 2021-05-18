import React from 'react';
import Enrollment from '../../components/SignUp';
import { Info } from '../../Data';

const SignUp = () => {
    return (
        <>
            <Enrollment {...Info} />
        </>
    )
}

export default SignUp
