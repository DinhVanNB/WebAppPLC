const baseUrl = JSON.parse(localStorage.getItem('baseUrl')) || 'http://192.168.1.27:8080'

localStorage.setItem('baseUrl', JSON.stringify(baseUrl))

const plcApi = JSON.parse(localStorage.getItem('plcApi')) || 'http://localhost:8080'

localStorage.setItem('plcApi', JSON.stringify(plcApi))

const getters = {
    collapsed: state=>state.collapsed,
    accessToken: state=>state.accessToken,
    language: state=>state.language
};

const state = ()=>({
    collapsed: false,
    accessToken: '',
    language:'vi',
    baseUrl,
    plcApi
})

localStorage.setItem('plcApi', JSON.stringify(plcApi))

const actions ={
    toggleMenu({commit}){
        commit('toggleMenu')
    },
    setAccessToken({commit},data){
        commit('setAccessToken',data)
    },
    toggleLanguage({commit}){
        commit('toggleLanguage')
    },
    selectedLanguage({commit},data){
        commit('selectedLanguage',data)
    },
    setApi({commit},data){
        commit('setApi',data)
    },
    
}

const mutations = {
    toggleMenu(state){
        state.collapsed = !state.collapsed
    },
    setAccessToken(state,data){
        state.accessToken = data
    },
    toggleLanguage(state){
        state.language = state.language==='vi'? 'en':'vi'
    },
    selectedLanguage(state,data){
        state.language = data
    },
    setApi(state,data){
        state.baseUrl = data.baseUrl
        localStorage.setItem('baseUrl',JSON.stringify(data.baseUrl))
        state.plcApi = data.plcApi
        localStorage.setItem('plcApi',JSON.stringify(data.plcApi))
    },
    
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}