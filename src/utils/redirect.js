import { getCookie } from './cookie';

const checkRedirect = (context, dest, permanent = false) => {

    const userData = getCookie('user', context.req);

    if (!userData) {
        return {
            redirect: {
                destination: dest,
                permanent
            }
        }
    } else
        return null;

}

export default checkRedirect;