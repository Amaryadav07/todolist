


import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addTask,RemoveTask,taskComplete,taskInComplete,myEditSave,} from "./todoSlicer";
import { Table, Button } from "react-bootstrap";

function App() {
  const [txtVal, setTxtVal] = useState("");
  const [btnStatus, setbtnStatus] = useState(true);
  const [myid, setMyid] = useState("");
  const Data = useSelector((state) => state.todo.task);
  const dispatch = useDispatch();

  const dataEdit = (id, work) => {
    setTxtVal(work);
    setbtnStatus(false);
    setMyid(id);
  };

  const myEditData = () => {
    dispatch(myEditSave({ id: myid, work: txtVal }));
    setbtnStatus(true);
    setTxtVal(""); // Optional: clear input after edit
  };

  let sno = 0;
  const ans = Data.map((key) => {
    sno++;
    return (
      <tr key={key.id}>
        <td>{sno}</td>
        <td>
          {key.taskStatus ? (
            <span style={{ color: "red", textDecoration: "line-through" }}>
              {key.work}
            </span>
          ) : (
            key.work
          )}
        </td>
        <td>
          <Button
            variant="danger"
            onClick={() => dispatch(RemoveTask({ id: key.id }))}
          >
            Delete
          </Button>
        </td>
        <td>
          <Button
            variant="success"
            onClick={() => dispatch(taskComplete({ id: key.id }))}
          >
            Complete
          </Button>
        </td>
        <td>
          <Button
            variant="warning"
            onClick={() => dispatch(taskInComplete({ id: key.id }))}
          >
            Incomplete
          </Button>
        </td>
        <td>
          <Button variant="info" onClick={() => dataEdit(key.id, key.work)}>
            Edit
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container mt-4">
      <h1 className="mb-4">
        <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>TO-DO</span>{" "}
        <span style={{ color: "red", fontSize: "3rem",textShadow:"2px 2px 2px black" }}>App</span>{" "}
      </h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          value={txtVal}
          placeholder="Enter your task"
          onChange={(e) => setTxtVal(e.target.value)}
        />
        {btnStatus ? (
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                addTask({ id: Date.now(), work: txtVal, taskStatus: false })
              );
              setTxtVal("");
            }}
          >
            Add
          </Button>
        ) : (
          <Button variant="secondary" onClick={myEditData}>
            Save Edit
          </Button>
        )}
      </div>
      <hr />
      
      <div className="table-responsive">
     
        <Table striped bordered hover style={{ textAlign: "center" }}>
        
          <thead className="table-dark">
            <tr>
              <th>Sno</th>
              <th>Your Task</th>
              <th>Delete</th>
              <th>Complete</th>
              <th>In-Complete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody style={{fontWeight:"bold"}}>{ans}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;

