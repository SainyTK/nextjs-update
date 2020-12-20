import React from 'react'
import { removeCookie } from '../src/utils/cookie';
import checkRedirect from '../src/utils/redirect';

const Home = () => {

    const logout = () => {
        removeCookie('user')
    }

    return (
        <div>
            <p>Home</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home

export async function getServerSideProps(context) {

    return checkRedirect(context, '/') || {
        props: {}
    }
}