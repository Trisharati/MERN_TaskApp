import React from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { addTask } from '../redux/TaskSlice'


const AddTask = () => {

const dispatch=useDispatch()


const {register,handleSubmit,reset,formState:{errors}} = useForm()

const handleTask = (formData)=>{
    dispatch(addTask({formData}))
    reset()
}
const handleError = (errors)=>{}

const taskOptions = {
    status:{
        required:{
            value:true,
            message:'*Please choose status'
        }
    },
    title:{
        required:{
            value:true,
            message:'*Title is required'
        }
    },
    description:{
        required:{
            value:true,
            message:'*Description is required'
        }
    },
    allotedTo:{
        required:{
            value:true,
            message:'*Alloted To is required'
        }
    }
}
  return (
    <div>
        <div className="container px-5 my-5">
    <form id="contactForm" data-sb-form-api-token="API_TOKEN"
    onSubmit={handleSubmit(handleTask,handleError)}>
        <p style={{marginLeft:'350px',
                    color:'maroon',
                    fontSize:'2rem'}}>Task Management Form</p>
        <div className="form-floating mb-3">
        <label htmlFor="chooseStatus"><b>Choose Status</b></label>
            <select className="form-select" id="chooseStatus" aria-label="Choose Status"
            name='status'
            {...register('status',taskOptions.status)}
            style={{marginLeft:'10px'}}>
                <option ></option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
            <p className='error'>{errors.status?.message}</p>
        </div>
        <div className="form-floating mb-3">
        <label htmlFor="title"><b>Title</b></label>
            <input className="form-control" id="title" type="text" placeholder="Title"  
            name='title'
            {...register('title',taskOptions.title)}
            />
             <p className='error'>{errors.title?.message}</p>
        </div>
        <div className="form-floating mb-3">
        <label htmlFor="description"><b>Description</b></label>
            <textarea className="form-control" id="description" type="text" placeholder="Description" style={{height: '10rem'}} 
            name='description'
            {...register('description',taskOptions.description)}
            ></textarea>
             <p className='error'>{errors.description?.message}</p>
        </div>
        <div className="form-floating mb-3">
        <label htmlFor="allotedTo"><b>Alloted To</b></label>
            <input className="form-control" id="allotedTo" type="text" placeholder="Alloted To"  
            name='allotedTo'
            {...register('allotedTo',taskOptions.allotedTo)}
            />
             <p className='error'>{errors.allotedTo?.message}</p>
        </div>
        
        <div className="d-grid">
            <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
        </div>
    </form>
    <Link to='/viewtask'
    style={{marginLeft:'850px',
    fontSize:'1.2rem'}}>View List ➡</Link>
</div>
    </div>
  )
}

export default AddTask