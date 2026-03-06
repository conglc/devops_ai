# Requirements

Ghi nhận yêu cầu, quyết định thiết kế trong quá trình phát triển.

## Mục tiêu chính

- Học và thực hành quy trình DevOps từ cơ bản đến nâng cao
- Deploy một web app hoàn chỉnh dạng container

## Mô tả ứng dụng

Web app **Quản lý sinh viên** với các chức năng CRUD cơ bản.

## Tech Stack

| Layer | Công nghệ |
|-------|----------|
| Frontend | ReactJS |
| Backend | Python (FastAPI) |
| Database | PostgreSQL |
| Container | Docker, Docker Compose |
| CI/CD | GitHub Actions |

## Yêu cầu chức năng (Functional Requirements)

### Quản lý sinh viên (CRUD)

- [ ] **Create** — Thêm sinh viên mới (họ tên, mã SV, ngày sinh, email, lớp)
- [ ] **Read** — Xem danh sách sinh viên, tìm kiếm, phân trang
- [ ] **Update** — Cập nhật thông tin sinh viên
- [ ] **Delete** — Xoá sinh viên

### Trường dữ liệu sinh viên

| Trường | Kiểu | Bắt buộc | Ghi chú |
|--------|------|----------|---------|
| id | int | auto | Primary key |
| ma_sv | string | có | Unique |
| ho_ten | string | có | |
| ngay_sinh | date | có | |
| email | string | có | Unique |
| lop | string | không | |

## Yêu cầu phi chức năng (Non-functional Requirements)

- Deploy bằng Docker container
- Frontend và Backend chạy trên container riêng
- Database chạy trên container riêng
- Có Docker Compose để khởi động toàn bộ hệ thống

## Quyết định thiết kế (Design Decisions)

| # | Quyết định | Lý do | Ngày |
|---|-----------|-------|------|
| 1 | FastAPI cho backend | Nhẹ, nhanh, auto-generate API docs (Swagger) | 2026-03-06 |
| 2 | PostgreSQL cho database | Phổ biến, phù hợp học DevOps thực tế | 2026-03-06 |
| 3 | Docker Compose cho deploy | Quản lý multi-container đơn giản | 2026-03-06 |

## Ràng buộc & Giới hạn

- Môi trường dev: Windows 10
- Deploy target: Docker container
- Scope: MVP với CRUD sinh viên, chưa cần authentication
