@echo off

rem create output directory and copy resource folder
Xcopy src\res classes\res /I /E /C /Y

rem compile engine
javac -d classes src/engine/gfx/*.java src/engine/audio/*.java
javac -cp classes -d classes src/engine/*.java

rem compile game
javac -cp classes -d classes src/game/*.java src/game/entities/*.java src/game/board/*.java src/game/controllers/*.java

rem run program
java -cp classes game.GameManager

pause