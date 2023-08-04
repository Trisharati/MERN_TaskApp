import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { addtask,viewtask,loadtask,updatetask, deletetask } from '../components/Api';



export const addTask=createAsyncThunk(
    '/addtask',
    async ({formData})=>{

        try {
            console.log('from slice',formData)
            const response = await addtask(formData)
            
            if(response){
              console.log('Task created successfully')
              toast.success('Task created successfully')
            }
            else{
              console.log('Failed to create task')
            }   
          } catch (error) {
            console.error('Error:', error.message);
            throw new Error(error.message);
          }
        }
)

export const viewTask=createAsyncThunk(
    '/addtask',
    async ()=>{

        try {
            
            const response = await viewtask()
            
            if(response){
              console.log('Task fetched successfully')
              return response
            }
            else{
              console.log('Failed to display task')
            }   
          } catch (error) {
            console.error('Error:', error.message);
            throw new Error(error.message);
          }
        }
)
export const loadTask=createAsyncThunk(
    '/loadtask',
    async (taskid)=>{

        try {
            
            const response = await loadtask(taskid)
            if(response){
              console.log('Particular Task fetched successfully')
              return response
            }
            else{
              console.log('Failed to load task')
            }   
          } catch (error) {
            console.error('Error:', error.message);
            throw new Error(error.message);
          }
        }
)
export const updateTask=createAsyncThunk(
    '/updatetask',
    async ({input,taskid,navigate})=>{

        try {
            
            const response = await updatetask(input,taskid)
          
            if(response){
              console.log('Task updated successfully')
              toast.success('Task updated successfully')
              navigate('/viewtask')
              return response
            }
            else{
              console.log('Failed to update task')
            }   
          } catch (error) {
            console.error('Error:', error.message);
            throw new Error(error.message);
          }
        }
)

export const deleteTask=createAsyncThunk(
    '/deletetask',
    async ({taskid})=>{

        try {
            
            const response = await deletetask(taskid)
            
            if(response == 1234){
              console.log('Task deleted successfully')
              toast.success('Task deleted successfully')
              return response
            }
            else{
              console.log('Failed to delete task')
            }   
          } catch (error) {
            console.error('Error:', error.message);
            throw new Error(error.message);
          }
        }
)

const taskSlice = createSlice({
    name: 'task',
    initialState:{

    },
    reducers: {

    }
})

export const taskReducer = taskSlice.reducer