import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/tasks/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => setTasks(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>My Tasks</h2>
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.title} - {task.completed ? "Done" : "Pending"}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
