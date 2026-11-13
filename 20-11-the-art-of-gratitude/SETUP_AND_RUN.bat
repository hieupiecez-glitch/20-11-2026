@echo off
chcp 65001 >nul
title 20/11 — THE ART OF GRATITUDE | Setup & Development Server
echo ============================================================================
echo   20/11 — THE ART OF GRATITUDE
echo   CINEMATIC INTERACTIVE WEB EXPERIENCE
echo   A DIGITAL JOURNEY OF RESPECT • MEMORY • KNOWLEDGE • GRATITUDE
echo ============================================================================
echo.

:: 1. Kiểm tra Node.js
echo [1/5] Dang kiem tra Node.js...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [CANH BAO] Khong tim thay Node.js tren he thong.
    echo Dang mo ban build truc tiep dist\index.html tren trinh duyet mac dinh...
    if exist "dist\index.html" (
        start "" "dist\index.html"
    )
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node -v') do set NODE_VER=%%i
echo       Da tim thay Node.js phien ban: %NODE_VER%

:: 2. Kiểm tra npm
echo [2/5] Dang kiem tra npm...
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [LOI] Khong tim thay npm! Vui long cai dat Node.js LTS day du.
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm -v') do set NPM_VER=%%i
echo       Da tim thay npm phien ban: %NPM_VER%

:: 3. Kiểm tra & cài đặt dependencies
echo [3/5] Kiem tra thu muc node_modules...
if not exist "node_modules\" (
    echo       Chua co dependencies. Dang tien hanh cai dat ^(npm install^)...
    call npm install
    if %errorlevel% neq 0 (
        echo [LOI] Cai dat dependencies that bai. Vui long kiem tra ket noi mang.
        pause
        exit /b 1
    )
) else (
    echo       Dependencies da san sang trong node_modules.
)

:: 4. Hiển thị URL truy cập
echo.
echo [4/5] Thong tin truy cap:
echo       URL Development Server: http://localhost:5173
echo       Ban doc lap san sang tai: dist\index.html
echo.

:: 5. Chạy development server và giữ cửa sổ mở
echo [5/5] Dang khoi dong Vite Development Server...
call npm run dev
echo.
echo Server da dung. Cua so terminal duoc giu mo de kiem tra log/loi.
pause
