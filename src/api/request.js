import store from "@/store";


export const request = (endPoint,method, body, params)=>{
    const token = store.state.appState.accessToken
    const baseUrl = store.state.appState.baseUrl
    const formData = new FormData();
    if(body?.image?.length>0 && typeof(body?.image)==='object'){
        [...body.image].map(img=>{
            return formData.append('images',img.originFileObj,img.name)
        })
    }
    if(body?.coverPhoto?.length>0 && typeof(body.coverPhoto)==='object'){
        [...body.coverPhoto].map(img=>{
            return formData.append('coverPhoto',img.originFileObj,img.name)
        })
    }
    if(body?.coverPhoto) delete body.coverPhoto;
    if(body?.image) delete body.image;
    for(let key in body){
        formData.append(key, body[key])
    }
    let opt = {
        method ,
        headers:{
            Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
        body: formData
    };
    if(method==='GET') delete opt.body
    
    return fetch(`${baseUrl}${endPoint}${params? params:''}`,opt);
};

