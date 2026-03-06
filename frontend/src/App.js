import React, { useState, useEffect } from "react";
import { getStudents, createStudent, updateStudent, deleteStudent } from "./api";
import StudentForm from "./StudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchStudents = async () => {
    const res = await getStudents(search);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, [search]);

  const handleCreate = async (data) => {
    await createStudent(data);
    setShowForm(false);
    fetchStudents();
  };

  const handleUpdate = async (data) => {
    await updateStudent(editing.id, data);
    setEditing(null);
    fetchStudents();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Ban co chac muon xoa sinh vien nay?")) {
      await deleteStudent(id);
      fetchStudents();
    }
  };

  return (
    <div className="container">
      <h1>Hệ thống QLSV</h1>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Tìm kiếm (tên, mã SV, email)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => { setEditing(null); setShowForm(true); }}>
          + Them sinh vien
        </button>
      </div>

      {(showForm || editing) && (
        <StudentForm
          student={editing}
          onSubmit={editing ? handleUpdate : handleCreate}
          onCancel={() => { setShowForm(false); setEditing(null); }}
        />
      )}

      <table>
        <thead>
          <tr>
            <th>Ma SV</th>
            <th>Ho ten</th>
            <th>Ngay sinh</th>
            <th>Email</th>
            <th>Lop</th>
            <th>Hanh dong</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.ma_sv}</td>
              <td>{s.ho_ten}</td>
              <td>{s.ngay_sinh}</td>
              <td>{s.email}</td>
              <td>{s.lop || "-"}</td>
              <td>
                <button onClick={() => setEditing(s)}>Sua</button>
                <button onClick={() => handleDelete(s.id)}>Xoa</button>
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr><td colSpan="6" style={{ textAlign: "center" }}>Khong co du lieu</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
