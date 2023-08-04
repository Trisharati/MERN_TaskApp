import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams,Link,useNavigate } from 'react-router-dom'
import { loadTask, updateTask } from '../redux/TaskSlice'



const UpdateTask = () => {

const dispatch = useDispatch()
const navigate = useNavigate()

const {taskid} = useParams()
const [input,setInput] = useState({})

const {status,title,description,allotedTo,_id} = input

useEffect(()=>{
dispatch(loadTask(taskid))
.then((res)=>{
    setInput(res.payload)
})
},[])


const handleChange = (e)=>{
    setInput({...input,[e.target.name]:e.target.value})
}
const handleSubmit = (e,taskid)=>{
    e.preventDefault()
    dispatch(updateTask({input,taskid,navigate}))
}

  return (
    <div>
        <div className="container px-5 my-5">
    <form id="contactForm" data-sb-form-api-token="API_TOKEN"
    onSubmit={(e)=>{handleSubmit(e,_id)}}>
        <p style={{marginLeft:'450px',
                    color:'maroon',
                    fontSize:'2rem'}}>Update Task</p>
                    
        <div className="form-floating mb-3">
        <label htmlFor="chooseStatus"><b>Choose Status</b></label>
            <select className="form-select" id="chooseStatus" aria-label="Choose Status"
            name='status'
            value={status}
            // {...register('status',taskOptions.status)}
            onChange={handleChange}
            style={{marginLeft:'10px'}}>
                <option ></option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
            {/* <p className='error'>{errors.status?.message}</p> */}
        </div>
        <div className="form-floating mb-3">
        <label htmlFor="title"><b>Title</b></label>
            <input className="form-control" id="title" type="text" placeholder="Title"  
            name='title'
            value={title}
            onChange={handleChange}
            // {...register('title',taskOptions.title)}
            />
             {/* <p className='error'>{errors.title?.message}</p> */}
        </div>
        <div className="form-floating mb-3">
        <label htmlFor="description"><b>Description</b></label>
            <textarea className="form-control" id="description" type="text" placeholder="Description" style={{height: '10rem'}} 
            name='description'
            value={description}
            onChange={handleChange}
            // {...register('description',taskOptions.description)}
            ></textarea>
             {/* <p className='error'>{errors.description?.message}</p> */}
        </div>
        <div className="form-floating mb-3">
        <label htmlFor="allotedTo"><b>Alloted To</b></label>
            <input className="form-control" id="allotedTo" type="text" placeholder="Alloted To"  
            name='allotedTo'
            value={allotedTo}
            onChange={handleChange}
            // {...register('allotedTo',taskOptions.allotedTo)}
            />
             {/* <p className='error'>{errors.allotedTo?.message}</p> */}
        </div>
        
        <div className="d-grid">
            <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Update</button>
        </div>
    </form>
    <Link to='/viewtask'
    style={{marginLeft:'850px',
    fontSize:'1.2rem'}}>View List ➡</Link>
        </div>
    </div>
  )
}

export default UpdateTask