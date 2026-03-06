import React, { useState } from "react";

function StudentForm({ student, onSubmit, onCancel }) {
  const [form, setForm] = useState(
    student || { ma_sv: "", ho_ten: "", ngay_sinh: "", email: "", lop: "" }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, lop: form.lop || null });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h3>{student ? "Cap nhat sinh vien" : "Them sinh vien moi"}</h3>
      <input name="ma_sv" placeholder="Ma SV" value={form.ma_sv} onChange={handleChange} required />
      <input name="ho_ten" placeholder="Ho ten" value={form.ho_ten} onChange={handleChange} required />
      <input name="ngay_sinh" type="date" value={form.ngay_sinh} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="lop" placeholder="Lop (khong bat buoc)" value={form.lop || ""} onChange={handleChange} />
      <div className="form-actions">
        <button type="submit">{student ? "Cap nhat" : "Them"}</button>
        <button type="button" onClick={onCancel}>Huy</button>
      </div>
    </form>
  );
}

export default StudentForm;
