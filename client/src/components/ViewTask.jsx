import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, viewTask } from '../redux/TaskSlice'
import { Link,useNavigate } from 'react-router-dom'



const ViewTask = () => {
    
    const dispatch = useDispatch()
    const [taskData,setTaskData] = useState([{
        status:'',
        title:'',
        description:'',
        allotedTo:'',
        _id:''
    }])

    

    const getData = async()=>{
    let res = await dispatch(viewTask())
    return setTaskData(res.payload)
    }
    useEffect(()=>{
       getData()
    },[])

    
  const handleDelete =async (taskid)=>{
  await dispatch(deleteTask({taskid}))
    getData()
    return
 
  }

  return (
    <div>
      <div className='linkstyle'>
      <Link to='/'><b>Go to Form</b></Link>
      </div>
        <table className="table table-dark design">
  <thead>
    <tr>
      <th scope="col">Serial No.</th>
      <th scope="col">Title</th>
      <th scope="col">Alloted To</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {taskData && taskData.map((res,idx)=>{
    
        const {status,title,allotedTo,description,_id} = res
        return (
        <tr>
        <th scope="row">{idx+1}</th>
        <td>{title}</td>
        <td>{allotedTo}</td>
        <td>{description}</td>
        <td>{status}</td>
        
        <td><Link to={`/loadtask/${_id}`}>
          Edit</Link></td>
        <td><Link to=''
        onClick={()=>{handleDelete(_id)}}>Delete</Link></td>
        </tr>
    )
    })}
    </tbody>
   </table>
    </div>
  )
}

export default ViewTask