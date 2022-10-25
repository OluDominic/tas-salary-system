const isLive = false;
const api = isLive ? "ff" : "https://hr-magt.herokuapp.com";

export const APPCONFIG = {
    isLive,
    appapi:api
}