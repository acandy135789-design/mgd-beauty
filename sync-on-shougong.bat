@echo off
chcp 65001 >nul

:: 記憶備份位置（USB 上）
set MEMORY_USB=F:\備份的東西\claude-memory
set MEMORY_LOCAL=C:\Users\%USERNAME%\.claude\projects

if not exist "%MEMORY_USB%" mkdir "%MEMORY_USB%"

:: 本機記憶 → USB
robocopy "%MEMORY_LOCAL%" "%MEMORY_USB%" /E /XO /XN /XC /NFL /NDL /NJH /NJS >nul

:: USB → 本機記憶
robocopy "%MEMORY_USB%" "%MEMORY_LOCAL%" /E /XO /XN /XC /NFL /NDL /NJH /NJS >nul

echo ✅ 小的已同步
