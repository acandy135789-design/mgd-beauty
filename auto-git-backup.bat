@echo off
chcp 65001 >nul

set CHANGED=0

:: 美肌花園網站
cd /d "D:\美肌花園網站"
if exist ".git" (
    git add -A
    git diff --cached --quiet
    if errorlevel 1 (
        git commit -m "auto backup %date% %time%"
        set CHANGED=1
    )
)

:: 開運網站APP
cd /d "D:\開運網站APP"
if exist ".git" (
    git add -A
    git diff --cached --quiet
    if errorlevel 1 (
        git commit -m "auto backup %date% %time%"
        set CHANGED=1
    )
)

if "%CHANGED%"=="1" (
    echo 小的已自動備份，放心交給我
)
