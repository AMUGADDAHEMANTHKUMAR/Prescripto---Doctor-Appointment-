@echo off
title Prescripto - Doctor Appointment App
color 0A
echo ============================================
echo   PRESCRIPTO - Doctor Appointment Website
echo ============================================
echo.
node -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is NOT installed!
    echo Please install Node.js from: https://nodejs.org
    pause
    start https://nodejs.org
    exit
)
echo [OK] Node.js is installed:
node -v
echo.
echo [STEP 1] Setting up backend environment...
(
echo MONGODB_URI=mongodb://murali:murali123@ac-nlphxix-shard-00-00.404vypa.mongodb.net:27017,ac-nlphxix-shard-00-01.404vypa.mongodb.net:27017,ac-nlphxix-shard-00-02.404vypa.mongodb.net:27017/prescripto?ssl=true^&replicaSet=atlas-x907w5-shard-0^&authSource=admin^&retryWrites=true^&w=majority^&appName=Cluster0
echo JWT_SECRET=supersecretkey123
echo PORT=4000
echo STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY_HERE
) > doctor-appointment-website-master\backend\.env
echo [STEP 2] Setting up frontend environment...
(
echo VITE_BACKEND_URL=http://localhost:4000
) > doctor-appointment-website-master\frontend\.env
echo [STEP 3] Setting up admin environment...
(
echo VITE_BACKEND_URL=http://localhost:4000
) > doctor-appointment-website-master\admin\.env
echo [STEP 4] Installing backend packages...
cd doctor-appointment-website-master\backend
call npm install
echo [STEP 5] Installing frontend packages...
cd ..\frontend
call npm install
echo [STEP 6] Installing admin packages...
cd ..\admin
call npm install
cd ..\..
start cmd /k "title Backend Server && cd doctor-appointment-website-master\backend && npm run server"
timeout /t 3 /nobreak >nul
start cmd /k "title Frontend && cd doctor-appointment-website-master\frontend && npm run dev"
start cmd /k "title Admin Panel && cd doctor-appointment-website-master\admin && npm run dev"
timeout /t 5 /nobreak >nul
start http://localhost:5173
echo All servers are running!
pause
