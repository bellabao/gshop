@echo off

set a=00

setlocal EnableDelayedExpansion

for %%n in (*.jpg) do (

set /A a+=1

ren "%%n" "init_!a!.jpg"

)