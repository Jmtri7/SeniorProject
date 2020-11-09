@echo off

rem create output directory and copy resource folder
Xcopy res ..\classes\res /I /E /C /Y

rem compile engine
javac -d ../classes engine/gfx/*.java engine/audio/*.java
javac -cp ../classes -d ../classes engine/*.java

rem compile game
javac -cp ../classes -d ../classes game/*.java game/entities/*.java game/board/*.java game/controllers/*.java

rem run program
java -cp ../classes game.GameManager

pause