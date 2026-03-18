import { updateTask, deleteTask } from "../api";

export default function TaskTable({ tasks, refresh }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Title</th>
          <th style={styles.th}>Description</th>
          <th style={styles.th}>Status</th>
          <th style={styles.th}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <tr key={task._id} style={styles.row}>
            <td style={styles.td}>{task.title}</td>
            <td style={styles.td}>{task.description}</td>

            <td style={styles.td}>
              <span
                style={{
                  color: task.status === "completed" ? "green" : "orange",
                  fontWeight: "bold",
                }}
              >
                {task.status}
              </span>
            </td>

            <td style={styles.td}>
              <button
                style={styles.completeBtn}
                onClick={() => {
                  updateTask(task._id);
                  refresh();
                }}
              >
                ✔
              </button>

              <button
                style={styles.deleteBtn}
                onClick={() => {
                  deleteTask(task._id);
                  refresh();
                }}
              >
                ✖
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fafafa",
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #eee",
  },
  row: {
    transition: "0.2s",
  },
  completeBtn: {
    marginRight: "8px",
    padding: "5px 10px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "5px 10px",
    background: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};