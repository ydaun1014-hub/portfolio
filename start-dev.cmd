@echo off
cd /d "%~dp0"
echo Starting this project at http://127.0.0.1:5180/
echo Keep this window open while using the site.
echo.
npm.cmd run dev -- --host 127.0.0.1 --port 5180 --strictPort
echo.
echo The dev server stopped. Check the message above.
pause
