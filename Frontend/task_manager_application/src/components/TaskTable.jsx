import { useState } from "react";
import { updateTask, deleteTask } from "../api";

export default function TaskTable({ tasks, refresh }) {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    description: "",
  });

  const startEdit = (task) => {
    setEditingId(task._id);
    setEditData({
      title: task.title,
      description: task.description,
    });
  };

  const handleUpdate = async (task) => {
    if (!editData.title.trim() || !editData.description.trim()) {
      alert("All fields are required");
      return;
    }

    await updateTask(task._id, {
      title: editData.title,
      description: editData.description,
      status: task.status,
    });

    setEditingId(null);
    refresh();
  };

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
            {/* Title */}
            <td style={styles.td}>
              {editingId === task._id ? (
                <input
                  style={styles.input}
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                />
              ) : (
                task.title
              )}
            </td>

            {/* Description */}
            <td style={styles.td}>
              {editingId === task._id ? (
                <input
                  style={styles.input}
                  value={editData.description}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      description: e.target.value,
                    })
                  }
                />
              ) : (
                task.description
              )}
            </td>

            {/* Status */}
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

            {/* Actions */}
            <td style={styles.td}>
              {/* Toggle */}
              <div
                style={{
                  ...styles.toggle,
                  background:
                    task.status === "completed"
                      ? "#3b82f6"
                      : "#d1d5db",
                }}
                onClick={async () => {
                  await updateTask(task._id, {
                    title: task.title,
                    description: task.description,
                    status:
                      task.status === "completed"
                        ? "pending"
                        : "completed",
                  });
                  refresh();
                }}
              >
                <div
                  style={{
                    ...styles.toggleCircle,
                    transform:
                      task.status === "completed"
                        ? "translateX(22px)"
                        : "translateX(2px)",
                  }}
                />
              </div>

              {/* Update / Save Button */}
              {editingId === task._id ? (
                <button
                  style={styles.saveBtn}
                  onClick={() => handleUpdate(task)}
                >
                  Save
                </button>
              ) : (
                <button
                  style={styles.updateBtn}
                  onClick={() => startEdit(task)}
                >
                  Update
                </button>
              )}

              {/* Delete */}
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

  input: {
    width: "100%",
    padding: "6px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },

  toggle: {
    width: "44px",
    height: "24px",
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    marginRight: "8px",
    transition: "background 0.3s ease",
  },

  toggleCircle: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    background: "#ffffff",
    transition: "transform 0.3s ease",
  },

  updateBtn: {
    marginRight: "8px",
    padding: "6px 10px",
    fontSize: "12px",
    background: "#e0f2fe",
    color: "#0369a1",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  saveBtn: {
    marginRight: "8px",
    padding: "6px 10px",
    fontSize: "12px",
    background: "#dcfce7",
    color: "#166534",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  deleteBtn: {
    padding: "6px 12px",
    fontSize: "12px",
    background: "#fef2f2",
    color: "#dc2626",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};