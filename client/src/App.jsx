import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddTask from "./components/AddTask"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewTask from "./components/ViewTask";
import UpdateTask from "./components/UpdateTask";


function App() {
  

  return (
    <>
    <ToastContainer />
    <Router>
  
  <Routes>
    <Route path='/' element={<AddTask/>}/>
    <Route path='/viewtask' element={<ViewTask/>}/>
    <Route path='/loadtask/:taskid' element={<UpdateTask/>}/>
  </Routes>
  </Router>
    </>
  )
}

export default App
