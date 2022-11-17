const isLive = false;
const api = isLive ? "ff" : "https://hr-magt.herokuapp.com";
//const api = isLive ? "ff" : "http://127.0.0.1:8000";
export const APPCONFIG = {
    isLive,
    appapi:api
}