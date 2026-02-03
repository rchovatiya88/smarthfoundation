@echo off
echo Stopping any running node processes...
taskkill /F /IM node.exe /T 2>nul

echo Cleaning build cache...
if exist .next rmdir /s /q .next

echo Installing dependencies...
call npm install
if %errorlevel% neq 0 exit /b %errorlevel%

echo Generating Prisma Client...
call npx prisma generate
if %errorlevel% neq 0 exit /b %errorlevel%

echo Building the project (fresh)...
call npm run build
if %errorlevel% neq 0 exit /b %errorlevel%

echo Starting the application...
call npm run start
