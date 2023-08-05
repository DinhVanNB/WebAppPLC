import axios from "axios";
import store from "@/store";

const plcServerApi={
    plcRunStatus:{
        endPoint:'/api/lampRun',
    },
    plcStart:{
        endPoint:'/api/btnStart',
    },
    plcStop:{
        endPoint:'/api/btnStop',
    },
    plcRunAuto:{
        endPoint:'/api/btnAuto',
    },
    plcRunManual:{
        endPoint:'/api/btnManual',
    },
    plcStartSim:{
        endPoint:'/api/startSim',
    },
    plcStopSim:{
        endPoint:'/api/stopSim',
    }
}

   

export async function plcRunStatus(){
    const plcApi = store.state.appState.plcApi
    const {endPoint} = plcServerApi.plcRunStatus
    const {data} = await axios.get(plcApi + endPoint)
    return data
}

export async function plcStart(){
    const plcApi = store.state.appState.plcApi
    const {endPoint} = plcServerApi.plcStart
    const {data} = await axios.get(plcApi + endPoint)
    return data
}

export async function plcStop(){
    const plcApi = store.state.appState.plcApi
    const {endPoint} = plcServerApi.plcStop
    const {data} = await axios.get(plcApi + endPoint)
    return data
}

export async function plcRunAuto(){
    const plcApi = store.state.appState.plcApi
    const {endPoint} = plcServerApi.plcRunAuto
    const {data} = await axios.get(plcApi + endPoint)
    return data
}

export async function plcRunManual(){
    const plcApi = store.state.appState.plcApi
    const {endPoint} = plcServerApi.plcRunManual
    const {data} = await axios.get(plcApi + endPoint)
    return data
}

export async function plcStartSim(){
    const plcApi = store.state.appState.plcApi
    const {endPoint} = plcServerApi.plcStartSim
    const {data} = await axios.get(plcApi + endPoint)
    return data
}

export async function plcStopSim(){
    const plcApi = store.state.appState.plcApi
    const {endPoint} = plcServerApi.plcStopSim
    const {data} = await axios.get(plcApi + endPoint)
    return data
}