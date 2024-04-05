import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, viewTask } from "../redux/TaskSlice";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const ViewTask = () => {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState([
    //   {
    //     status:'',
    //     title:'',
    //     description:'',
    //     allotedTo:'',
    //     _id:''
    // }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    let res = await dispatch(viewTask());
    if (res.payload) {
      setIsLoading(false);
    }
    return setTaskData(res.payload);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (taskid) => {
    await dispatch(deleteTask({ taskid }));
    getData();
    return;
  };

  return (
    <div>
      {isLoading ? (
        <div style={{ position: "relative", top: "10%", left: "45%" }}>
          <p style={{ fontSize: 20, color: "#AE0000" }}>Loading...</p>
          <ClipLoader color={"#123abc"} loading={isLoading} size={100} />
        </div>
      ) : (
        
        <>
          <div className="linkstyle">
            <Link to="/">
              <b>Go to Form</b>
            </Link>
          </div>
          {taskData.length > 0 ?
        <>
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
              {taskData &&
                taskData.map((res, idx) => {
                  const { status, title, allotedTo, description, _id } = res;
                  return (
                    <tr key={idx}>
                      <th scope="row">{idx + 1}</th>
                      <td>{title}</td>
                      <td>{allotedTo}</td>
                      <td>{description}</td>
                      <td>{status}</td>

                      <td>
                        <Link to={`/loadtask/${_id}`}>Edit</Link>
                      </td>
                      <td>
                        <Link
                          to=""
                          onClick={() => {
                            handleDelete(_id);
                          }}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="mt-5"></div>
          </>
          : <div className='mt-5' style={{display:'flex',justifyContent:'center'}}>
            <h2>NO TASKS FOUND</h2></div>
              }
        </>
            )}
    </div>
  );
};

export default ViewTask;
