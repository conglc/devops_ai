# Hướng dẫn khởi tạo Project chuẩn (Vibe Coding)

Tài liệu này mô tả các bước chuẩn khi bắt đầu một project mới, dùng làm checklist tham khảo.

---

## Bước 1: Tạo thư mục & Init Git

```bash
mkdir my-project && cd my-project
git init
```

## Bước 2: Tạo các file chuẩn hoá

| # | File | Mục đích |
|---|------|----------|
| 1 | `README.md` | Mô tả project, hướng dẫn cài đặt & sử dụng |
| 2 | `CLAUDE.md` | Hướng dẫn cho AI assistant (conventions, rules, context) |
| 3 | `REQUIREMENTS.md` | Ghi nhận yêu cầu, quyết định thiết kế |
| 4 | `TASKS.md` | Theo dõi tiến độ task (Todo / Doing / Done) |
| 5 | `CHANGELOG.md` | Lịch sử thay đổi theo version |
| 6 | `.gitignore` | Loại trừ file không cần track (node_modules, .env, ...) |
| 7 | `.env.example` | Template biến môi trường (không chứa secret) |
| 8 | `LICENSE` | Giấy phép sử dụng |

### Chi tiết nội dung từng file

#### `CLAUDE.md` — cần có:
- Tên project, mục đích, ngôn ngữ giao tiếp
- Conventions: commit message format, branching model, code style
- Quy tắc: file nào đọc trước, file nào cập nhật khi nào

#### `REQUIREMENTS.md` — cần có:
- Mục tiêu chính của project
- Yêu cầu chức năng (Functional Requirements)
- Yêu cầu phi chức năng (Non-functional: performance, security, ...)
- Bảng quyết định thiết kế (Design Decisions)
- Ràng buộc & giới hạn

#### `TASKS.md` — cần có:
- 3 cột trạng thái: Todo / Doing / Done
- Dùng checkbox `- [ ]` và `- [x]` để track

#### `CHANGELOG.md` — theo format:
```markdown
# Changelog

## [0.1.0] - YYYY-MM-DD
### Added
- Mô tả thay đổi
```

## Bước 3: Kết nối Git

```bash
# Commit khởi tạo
git add .
git commit -m "init: project setup with standard files"

# Tạo repo trên GitHub/GitLab trước, rồi:
git remote add origin <repo-url>
git branch -M main
git push -u origin main

# Setup branching model
git checkout -b develop
git push -u origin develop
```

Quy tắc nhánh:
- `main` — production, luôn stable
- `develop` — tích hợp các feature
- `feature/*` — phát triển tính năng mới
- `hotfix/*` — sửa lỗi khẩn cấp trên production

## Bước 4: Trao đổi & làm rõ yêu cầu

Trước khi code, cần làm rõ và ghi vào `REQUIREMENTS.md`:

1. **Mô tả web app**: App làm gì? Ai dùng?
2. **Chọn tech stack**: Frontend, Backend, Database, Hosting
3. **Liệt kê tính năng**: MVP gồm những gì?
4. **Yêu cầu phi chức năng**: Tốc độ, bảo mật, số user dự kiến
5. **Ràng buộc**: Budget, deadline, hạ tầng có sẵn

## Bước 5: Setup môi trường phát triển

1. Cài đặt dependencies (package.json / requirements.txt / ...)
2. Cấu hình `.env` từ `.env.example`
3. Chạy thử local, đảm bảo "Hello World" hoạt động
4. Viết script khởi động trong `README.md`

## Bước 6: Bắt đầu phát triển

1. Tạo nhánh feature: `git checkout -b feature/ten-tinh-nang`
2. Code & commit thường xuyên
3. Cập nhật `TASKS.md` khi bắt đầu/hoàn thành task
4. Tạo Pull Request vào `develop`
5. Review & merge

---

## Tóm tắt quy trình

```
Init project
  → Tạo file chuẩn
    → Kết nối Git (commit, remote, branching)
      → Làm rõ requirements
        → Setup dev environment
          → Bắt đầu code theo feature branch
```
