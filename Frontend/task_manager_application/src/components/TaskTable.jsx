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
                  ...styles.status,
                  background:
                    task.status === "completed"
                      ? "#e6f4ea"
                      : "#fff4e5",
                  color:
                    task.status === "completed"
                      ? "#2e7d32"
                      : "#ed6c02",
                }}
              >
                {task.status}
              </span>
            </td>

            <td style={styles.td}>
              <button
                style={styles.completeBtn}
                onClick={async () => {
                  await updateTask(task._id);
                  refresh();
                }}
              >
                Complete
              </button>

              <button
                style={styles.deleteBtn}
                onClick={async () => {
                  await deleteTask(task._id);
                  refresh();
                }}
              >
                Delete
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
    background: "#ffffff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  th: {
    padding: "12px",
    fontSize: "14px",
    fontWeight: "600",
    textAlign: "left",
    background: "#f9fafb",
    borderBottom: "1px solid #eee",
    color: "#555",
  },

  td: {
    padding: "12px",
    fontSize: "14px",
    borderBottom: "1px solid #f1f1f1",
    color: "#333",
  },

  row: {
    transition: "background 0.2s ease",
  },

  status: {
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "500",
    textTransform: "capitalize",
  },

  completeBtn: {
    marginRight: "8px",
    padding: "6px 12px",
    fontSize: "12px",
    background: "#f1f5f9",
    color: "#2563eb",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.2s",
  },

  deleteBtn: {
    padding: "6px 12px",
    fontSize: "12px",
    background: "#fef2f2",
    color: "#dc2626",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.2s",
  },
};