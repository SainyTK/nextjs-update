import React from 'react'
import { getCookie, removeCookie } from '../src/utils/cookie';
import checkRedirect from '../src/utils/redirect';


const main = () => {

    const logout = () => {
        removeCookie('user')
    }

    return (
        <div>
            <p>Main</p>
            <button onClick={logout}>Logout</button>

        </div>
    )
}

export default main

export const getServerSideProps = async (context) => {
    return checkRedirect(context, '/') || { props: {} };
}