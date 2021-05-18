import React from 'react'
import GettingStarted from '../../components/Home'
import { Info } from '../../Data'

const Home = () => {
    return (
        <>
            <GettingStarted {...Info} />
        </>
    )
}

export default Home
