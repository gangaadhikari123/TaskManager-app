import { useEffect, useState } from "react";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:8000/api/tasks/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      <h1>Your Tasks</h1>

      {tasks.map((task) => (
        <div key={task.id}>
          {task.title} {task.completed ? "✅" : "❌"}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
