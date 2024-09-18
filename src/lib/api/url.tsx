import  { DEV_SERVER_URL, PRO_SERVER_URL}  from '@/constants/routes';
const isDev= true;

const getEndpoint = (): string => {
    return isDev ? DEV_SERVER_URL : PRO_SERVER_URL;
    }

export default getEndpoint;