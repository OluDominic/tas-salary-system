const isLive = false;
const api = isLive ? "ff" : "http://172.16.0.21:3000";
//172.16.2.3
export const APPCONFIG = {
    isLive,
    appapi:api
}