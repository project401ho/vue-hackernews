import axios from 'axios'

// HTTP Requst and REasponse 관련된 기본 설정
const config = {
    baseUrl:"https://api.hnpwa.com/v0/"
}

// API 함수들 정리

function fetchList(pageName){
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}
function fetchUserInfo(userName){
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}
function fetchItemInfo(itemID){
    return axios.get(`${config.baseUrl}item/${itemID}.json`)
}


export{

    fetchUserInfo,
    fetchItemInfo,
    fetchList,
}