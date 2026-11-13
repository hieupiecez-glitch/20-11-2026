# 20/11 — THE ART OF GRATITUDE
**CINEMATIC INTERACTIVE WEB EXPERIENCE**
*A Digital Journey of Respect • Memory • Knowledge • Gratitude*

> “Có những người không đi cùng ta suốt cuộc đời, nhưng những điều họ dạy sẽ theo ta đến tận cuối con đường.”

## 1. Giới Thiệu Dự Án
**20/11 — THE ART OF GRATITUDE** là tác phẩm nghệ thuật tương tác số dành riêng cho Ngày Nhà giáo Việt Nam 20/11. Dự án kết hợp nghệ thuật kể chuyện điện ảnh (Cinematic Storytelling), không gian sách 3D tương tác (Three.js WebGL & CSS3D Hybrid), 10 kỹ thuật chuyển động chữ (Text Reveal Engine), âm thanh tổng hợp thời gian thực (Web Audio API Piano & Foley Synthesizer) và thiết kế chuẩn tiếp cận (Accessibility).

## 2. Kiến Trúc 8 Chương Trải Nghiệm
1. **CHƯƠNG 01 — THE FIRST LIGHT (Ánh sáng đầu tiên):** Không gian tối sâu lắng với tia sáng trung tâm, hạt bụi vàng chuyển động chậm và thông điệp mở đầu hành trình.
2. **CHƯƠNG 02 — THE CLASSROOM OF MEMORIES (Lớp học của những ký ức):** Bảng đen với hiệu ứng viết phấn trắng, khung cửa nắng thu và 4 kỷ vật lớp học tương tác.
3. **CHƯƠNG 03 — THE BOOK OF GRATITUDE (Cuốn sách tri ân 3D):** Cuốn sách 3D *"NHỮNG ĐIỀU THẦY CÔ ĐỂ LẠI"* với bìa cứng, gáy sách, các lớp trang giấy lật mở tự nhiên cùng **10 từ khóa bay theo quỹ đạo 3D** xung quanh sách có thể chạm/click để khám phá chiều sâu ý nghĩa.
4. **CHƯƠNG 04 — BEHIND EVERY LESSON (Phía sau mỗi bài học):** 4 lớp câu chuyện lắng đọng về những giờ soạn bài đêm khuya, sự kiên nhẫn và kỳ vọng thầm lặng của người thầy.
5. **CHƯƠNG 05 — LETTERS NEVER FORGOTTEN (Những lời chưa kịp nói):** Bàn viết dưới ánh đèn ấm với 3 bức thư kỷ niệm và hiệu ứng viết chữ từng ký tự (Character-by-character fountain pen reveal).
6. **CHƯƠNG 06 — THE GARDEN OF KNOWLEDGE (Khu vườn tri thức):** Hệ thống nhánh sáng tri thức tương tác trên Canvas phát triển từ hạt mầm đến tán lá sẻ chia.
7. **CHƯƠNG 07 — A PROMISE TO THE FUTURE (Hành trình phía trước):** Không gian đường chân trời ánh sáng hướng về phía trước.
8. **CHƯƠNG 08 — THE FINAL TRIBUTE (Lời tri ân cuối hành trình):** Lời chúc mừng trang trọng nhân Ngày Nhà giáo Việt Nam 20/11.

## 3. Cấu Trúc Thư Mục Mã Nguồn
```text
20-11-the-art-of-gratitude/
├── dist/
│   └── index.html               # Bản build độc lập chạy trực tiếp trên mọi trình duyệt
├── src/
│   ├── app/
│   │   ├── App.tsx              # Điều phối trạng thái ứng dụng và 8 chương
│   │   └── routes.ts            # Định tuyến chương và thanh tiến trình
│   ├── components/
│   │   ├── navigation/          # Thanh điều hướng & tiến trình hành trình
│   │   ├── transitions/         # Màn chuyển cảnh giữa các chương
│   │   ├── typography/          # Component hiển thị chữ nghệ thuật
│   │   ├── particles/           # Hiệu ứng hạt sáng
│   │   ├── audio/               # Bộ điều khiển âm thanh Web Audio
│   │   └── common/              # Các thành phần dùng chung
│   ├── chapters/                # 8 chương trải nghiệm độc lập
│   ├── three/
│   │   ├── Book3D.tsx           # Khối sách 3D & điều khiển lật trang
│   │   ├── BookPages.tsx        # Mặt giấy 3D, ánh sáng và đổ bóng
│   │   ├── FloatingWords.tsx    # Hệ thống 10 từ khóa quỹ đạo 3D quanh sách
│   │   └── ParticleField.tsx    # Hạt bụi ánh sáng không gian
│   ├── animations/
│   │   ├── textReveal.ts        # 10 kiểu Text Reveal Engine
│   │   ├── pageTransition.ts    # Chuyển cảnh mượt giữa các chương
│   │   ├── scrollScenes.ts      # Tính toán Parallax đa lớp
│   │   └── motionConfig.ts      # Cấu hình đường cong chuyển động
│   ├── content/
│   │   ├── chapters.ts          # Nội dung 8 chương
│   │   └── messages.ts          # Dữ liệu 10 từ khóa quỹ đạo và các bức thư
│   ├── hooks/
│   │   └── useReducedMotion.ts  # Hook kiểm tra prefers-reduced-motion
│   ├── styles/
│   │   └── globals.css          # Bảng màu & Typography tiếng Việt
│   └── utils/
│       └── webglDetect.ts       # Kiểm tra hỗ trợ WebGL và kích hoạt Fallback
├── SETUP_AND_RUN.bat            # Script tự động kiểm tra môi trường và khởi chạy trên Windows
├── QA_REPORT.md                 # Báo cáo kiểm thử thực tế 15 hạng mục & 9 độ phân giải
├── package.json                 # Danh sách dependencies
├── tsconfig.json                # Cấu hình TypeScript
├── tailwind.config.js           # Cấu hình hệ màu Midnight Blue, Warm Ivory, Antique Gold
└── vite.config.ts               # Cấu hình Vite bundler
```

## 4. Hướng Dẫn Cài Đặt & Chạy Dự Án

### Cách 1: Chạy tự động trên Windows bằng `SETUP_AND_RUN.bat`
Nhấp đúp vào file `SETUP_AND_RUN.bat`. Script sẽ tự động:
1. Kiểm tra `Node.js` và `npm`.
2. Kiểm tra và cài đặt `node_modules` nếu chưa có.
3. Khởi chạy Vite Development Server tại `http://localhost:5173`.
4. Nếu máy chưa cài Node.js, script tự động mở bản độc lập `dist/index.html`.

### Cách 2: Chạy bằng dòng lệnh (Terminal)
```bash
npm install
npm run dev
npm run build
npm run preview
```

### Cách 3: Mở trực tiếp không cần cài đặt
Mở trực tiếp file `dist/index.html` (hoặc `20-11-the-art-of-gratitude.html`) trên bất kỳ trình duyệt hiện đại nào.
