import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

const api = axios.create({ baseURL: API_URL });

export const getStudents = (search = "", page = 1) =>
  api.get("/api/students/", { params: { search, page } });

export const createStudent = (data) =>
  api.post("/api/students/", data);

export const updateStudent = (id, data) =>
  api.put(`/api/students/${id}`, data);

export const deleteStudent = (id) =>
  api.delete(`/api/students/${id}`);
