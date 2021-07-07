const isLive = false;
const api = isLive ? "ff" : "http://192.168.43.9:3000";

export const APPCONFIG = {
    isLive,
    appapi:api
}