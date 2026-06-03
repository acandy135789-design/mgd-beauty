@echo off
cd /d "F:\美肌花園網站"
git add -A
git diff --cached --quiet
if errorlevel 1 (
    for /f "tokens=1-4 delims=/ " %%a in ("%date%") do set D=%%a%%b%%c
    for /f "tokens=1-3 delims=:." %%a in ("%time: =0%") do set T=%%a%%b%%c
    git commit -m "Auto backup %D%-%T%"
    git push origin main
    echo 已拷貝，交給小的
)
