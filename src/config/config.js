const isLive = false;
const api = isLive ? "ff" : "http://localhost:8000";

export const APPCONFIG = {
    isLive,
    appapi:api
}