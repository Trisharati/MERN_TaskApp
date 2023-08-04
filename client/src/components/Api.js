import axios from 'axios'

const url = 'http://localhost:1200/api'

export const addtask = (formData)=>axios.post(`${url}/addtask`,formData)
.then((res)=>{
    return res.data.taskId
}).catch((err)=>
console.log('Error from Api'))

export const viewtask = ()=>axios.get(`${url}/viewtask`)
.then((res)=>{
    return res.data.taskInfo
}).catch((err)=>
console.log('Error from Api',err))

export const loadtask = (taskid)=>axios.get(`${url}/loadtask/${taskid}`)
.then((res)=>{
    return res.data.taskInfo
}).catch((err)=>
console.log('Error from Api'))

export const updatetask = (taskdata,taskid)=>axios.post(`${url}/update/${taskid}`,taskdata)
.then((res)=>{
    return res.data.taskInfo
}).catch((err)=>{
    console.log(err)
})

export const deletetask = (taskid)=>axios.post(`${url}/delete/${taskid}`)
.then((res)=>{
    return res.data.value
}).catch((err)=>{
    console.log(err)
})

