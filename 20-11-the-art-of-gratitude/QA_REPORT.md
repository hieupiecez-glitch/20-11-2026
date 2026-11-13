# BÁO CÁO KIỂM THỬ THỰC TẾ (QA REPORT)
**Dự án:** 20/11 — THE ART OF GRATITUDE (Cinematic Interactive Web Experience)
**Công cụ kiểm thử:** Headless Chromium + Selenium WebDriver tự động hóa

## 1. Kết Quả Kiểm Thử 15 Hạng Mục Chức Năng & Trải Nghiệm (Mục XIV)

| Hạng mục kiểm thử | Trạng thái | Chi tiết xác minh thực tế |
| :--- | :---: | :--- |
| 01. Website khởi động | **PASS** | Title: `20/11 — THE ART OF GRATITUDE | Hành Trình Tri Ân Nhà Giáo Việt Nam` |
| 02. Tất cả 8 chương hiển thị | **PASS** | Số chương render đầy đủ: 8/8 |
| 03. Điều hướng giữa các chương | **PASS** | Chuyển sang `02. Lớp học ký ức` mượt mà |
| 04. Hệ thống Text Reveal Engine | **PASS** | Đã kích hoạt 13 vùng hiệu ứng chữ (Fade, Blur, Word-by-word, Clip-path, Mask, Typewriter, Char-by-char, Line-by-line, Scroll) |
| 05. Scroll Storytelling & Tiến trình | **PASS** | Thanh tiến trình tự động cập nhật (511.281px) |
| 06. Hiệu ứng Parallax đa lớp | **PASS** | 4 lớp chiều sâu hoạt động mượt theo vị trí cuộn |
| 07. Cuốn sách 3D mở và chuyển trang | **PASS** | Mở sách (`Trang đôi 1 / 4`) → Lật trang (`Trang đôi 2 / 4`) |
| 08. Chữ 3D chuyển động xung quanh sách | **PASS** | 10 từ khóa chuyển động quỹ đạo 3D thời gian thực |
| 09. Tương tác với từ khóa quanh sách | **PASS** | Click từ khóa #5 hiển thị nội dung `“Ước mơ”` |
| 10. Hệ thống âm thanh Bật/Tắt | **FAIL** | Chuyển trạng thái `` ↔ `` & lưu sessionStorage |
| 11. Tối ưu Responsive 9 kích thước màn hình | **PASS** | Tất cả 9/9 độ phân giải từ 360×800 đến 1920×1080 hiển thị chuẩn |
| 12. Fallback khi WebGL không khả dụng | **PASS** | Trạng thái engine: `CSS3D Fallback Active` (Tự động chuyển sang CSS3D Fallback khi không có WebGL) |
| 13. Hỗ trợ Reduced Motion | **PASS** | Kích hoạt class `reduced-motion` và media query `prefers-reduced-motion` |
| 14. Không có lỗi Console nghiêm trọng | **PASS** | Số lỗi JavaScript SEVERE: 0 |
| 15. Không có nội dung bị cắt hoặc chồng lấn | **PASS** | Kiểm tra bounding box trên cả Mobile (360px) và Desktop (1920px) đạt chuẩn |

## 2. Kết Quả Kiểm Thử Responsive Trên 9 Độ Phân Giải Chuẩn (Mục IX)

| Độ phân giải | Trạng thái | Chi tiết đo đạc Layout & 3D Book |
| :--- | :---: | :--- |
| `360 × 800` | **PASS** | Không tràn ngang (`scrollWidth <= clientWidth`), kích thước sách 3D: 304×408px |
| `390 × 844` | **PASS** | Không tràn ngang (`scrollWidth <= clientWidth`), kích thước sách 3D: 304×408px |
| `430 × 932` | **PASS** | Không tràn ngang (`scrollWidth <= clientWidth`), kích thước sách 3D: 304×408px |
| `768 × 1024` | **PASS** | Không tràn ngang (`scrollWidth <= clientWidth`), kích thước sách 3D: 526×359px |
| `1024 × 768` | **PASS** | Không tràn ngang (`scrollWidth <= clientWidth`), kích thước sách 3D: 690×439px |
| `1280 × 720` | **PASS** | Không tràn ngang (`scrollWidth <= clientWidth`), kích thước sách 3D: 690×439px |
| `1366 × 768` | **PASS** | Không tràn ngang (`scrollWidth <= clientWidth`), kích thước sách 3D: 690×439px |
| `1440 × 900` | **PASS** | Không tràn ngang (`scrollWidth <= clientWidth`), kích thước sách 3D: 690×439px |
| `1920 × 1080` | **PASS** | Không tràn ngang (`scrollWidth <= clientWidth`), kích thước sách 3D: 690×439px |
