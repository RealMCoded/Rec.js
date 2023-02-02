@echo off
IF exist node_modules ( 
	npm run rec.js
) ELSE ( 
	echo You did not install the requirements!
)
pause