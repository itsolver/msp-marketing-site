::::::::::::::::::::::::::::::::::::::::::::
:: Elevate.cmd - Version 4
:: Automatically check & get admin rights
:: see "https://stackoverflow.com/a/12264592/1016343" for description
::::::::::::::::::::::::::::::::::::::::::::
 @echo off
 CLS
 ECHO.
 ECHO =============================
 ECHO Running Admin shell
 ECHO =============================

:init
 setlocal DisableDelayedExpansion
 set cmdInvoke=1
 set winSysFolder=System32
 set "batchPath=%~dpnx0"
 rem this works also from cmd shell, other than %~0
 for %%k in (%0) do set batchName=%%~nk
 set "vbsGetPrivileges=%temp%\OEgetPriv_%batchName%.vbs"
 setlocal EnableDelayedExpansion

:checkPrivileges
  NET FILE 1>NUL 2>NUL
  if '%errorlevel%' == '0' ( goto gotPrivileges ) else ( goto getPrivileges )

:getPrivileges
  if '%1'=='ELEV' (echo ELEV & shift /1 & goto gotPrivileges)
  ECHO.
  ECHO **************************************
  ECHO Invoking UAC for Privilege Escalation
  ECHO **************************************

  ECHO Set UAC = CreateObject^("Shell.Application"^) > "%vbsGetPrivileges%"
  ECHO args = "ELEV " >> "%vbsGetPrivileges%"
  ECHO For Each strArg in WScript.Arguments >> "%vbsGetPrivileges%"
  ECHO args = args ^& strArg ^& " "  >> "%vbsGetPrivileges%"
  ECHO Next >> "%vbsGetPrivileges%"
  
  if '%cmdInvoke%'=='1' goto InvokeCmd 

  ECHO UAC.ShellExecute "!batchPath!", args, "", "runas", 1 >> "%vbsGetPrivileges%"
  goto ExecElevation

:InvokeCmd
  ECHO args = "/c """ + "!batchPath!" + """ " + args >> "%vbsGetPrivileges%"
  ECHO UAC.ShellExecute "%SystemRoot%\%winSysFolder%\cmd.exe", args, "", "runas", 1 >> "%vbsGetPrivileges%"

:ExecElevation
 "%SystemRoot%\%winSysFolder%\WScript.exe" "%vbsGetPrivileges%" %*
 exit /B

:gotPrivileges
 setlocal & cd /d %~dp0
 if '%1'=='ELEV' (del "%vbsGetPrivileges%" 1>nul 2>nul  &  shift /1)

 ::::::::::::::::::::::::::::
 ::START
 ::::::::::::::::::::::::::::
echo This script is for onboarding machines to the Microsoft Defender for Endpoint services, including security and compliance products.
echo Once completed, the machine should light up in the portal within 5-30 minutes, depending on this machine's Internet connectivity availability and machine power state (plugged in vs. battery powered).
echo IMPORTANT: This script is optimized for onboarding a single machine and should not be used for large scale deployment.
echo For more information on large scale deployment, please consult the MDE documentation (links available in the MDE portal under the endpoint onboarding section).
echo.
echo.
:SCRIPT_START
REG add "HKLM\SOFTWARE\Policies\Microsoft\Windows Advanced Threat Protection" /v latency /t REG_SZ /f /d "Demo" >NUL 2>&1

@echo off

echo.
echo Starting Microsoft Defender for Endpoint onboarding process...
echo.

set errorCode=0
set lastError=0
set "troubleshootInfo=For more information, visit: https://go.microsoft.com/fwlink/p/?linkid=822807"
set "errorDescription="

echo Testing administrator privileges

net session >NUL 2>&1
if %ERRORLEVEL% NEQ 0 (
	@echo Script is running with insufficient privileges. Please run with administrator privileges> %TMP%\senseTmp.txt
	set errorCode=65
 set lastError=%ERRORLEVEL%
	GOTO ERROR
)

echo Script is running with sufficient privileges
echo.
echo Performing onboarding operations
echo.

IF [%PROCESSOR_ARCHITEW6432%] EQU [] (
  set powershellPath=%windir%\System32\WindowsPowerShell\v1.0\powershell.exe
) ELSE (
  set powershellPath=%windir%\SysNative\WindowsPowerShell\v1.0\powershell.exe
)

set sdbin=0100048044000000540000000000000014000000020030000200000000001400FF0F120001010000000000051200000000001400E104120001010000000000050B0000000102000000000005200000002002000001020000000000052000000020020000 >NUL 2>&1
reg add HKLM\SYSTEM\CurrentControlSet\Control\WMI\Security /v 14f8138e-3b61-580b-544b-2609378ae460 /t REG_BINARY /d %sdbin% /f >NUL 2>&1
reg add HKLM\SYSTEM\CurrentControlSet\Control\WMI\Security /v cb2ff72d-d4e4-585d-33f9-f3a395c40be7 /t REG_BINARY /d %sdbin% /f >NUL 2>&1

REG add "HKLM\SOFTWARE\Policies\Microsoft\Windows\DataCollection" /v DisableEnterpriseAuthProxy /t REG_DWORD /f /d 1 >NUL 2>&1

%powershellPath% -ExecutionPolicy Bypass -NoProfile -Command "Add-Type ' using System; using System.IO; using System.Runtime.InteropServices; using Microsoft.Win32.SafeHandles; using System.ComponentModel; public static class Elam{ [DllImport(\"Kernel32\", CharSet=CharSet.Auto, SetLastError=true)] public static extern bool InstallELAMCertificateInfo(SafeFileHandle handle); public static void InstallWdBoot(string path) { Console.Out.WriteLine(\"About to call create file on {0}\", path); var stream = File.Open(path, FileMode.Open, FileAccess.Read, FileShare.Read); var handle = stream.SafeFileHandle; Console.Out.WriteLine(\"About to call InstallELAMCertificateInfo on handle {0}\", handle.DangerousGetHandle()); if (!InstallELAMCertificateInfo(handle)) { Console.Out.WriteLine(\"Call failed.\"); throw new Win32Exception(Marshal.GetLastWin32Error()); } Console.Out.WriteLine(\"Call successful.\"); } } '; $driverPath = $env:SystemRoot + '\System32\Drivers\WdBoot.sys'; [Elam]::InstallWdBoot($driverPath) " >NUL 2>&1

REG query "HKLM\SOFTWARE\Policies\Microsoft\Windows Advanced Threat Protection" /v 696C1FA1-4030-4FA4-8713-FAF9B2EA7C0A /reg:64 > %TMP%\senseTmp.txt 2>&1
if %ERRORLEVEL% EQU 0 (  
    REG delete "HKLM\SOFTWARE\Policies\Microsoft\Windows Advanced Threat Protection" /v 696C1FA1-4030-4FA4-8713-FAF9B2EA7C0A /f > %TMP%\senseTmp.txt 2>&1
    if %ERRORLEVEL% NEQ 0 (
        set "errorDescription=Unable to delete previous offboarding information from registry."
        set errorCode=5
        set lastError=%ERRORLEVEL%
        GOTO ERROR
    )
)

REG add "HKLM\SOFTWARE\Policies\Microsoft\Windows Advanced Threat Protection" /v OnboardingInfo /t REG_SZ /f /d "{\"body\":\"{\\\"previousOrgIds\\\":[],\\\"orgId\\\":\\\"89e64bd6-e7b5-48f0-820c-85c4d812f9ba\\\",\\\"geoLocationUrl\\\":\\\"https://winatp-gw-cus3.microsoft.com/\\\",\\\"datacenter\\\":\\\"CentralUs3\\\",\\\"vortexGeoLocation\\\":\\\"US\\\",\\\"version\\\":\\\"1.4\\\"}\",\"sig\":\"FXsCzop5jH+UweqEaWutoCMd4GPi8RKSCawnsUMFXTpqF7vx7LkEdrjdc0a2Lf1re6FUZLp97z095NH1pywzTSkysimXEqYMR2V/hDCqsvPUCaMB7FL+d9jFbKrHpl/79OhONhZd/2s9kTvNTk/W9VkmDOQs35LWIbUMr62ZSEp0ANQQ6aTnTXneSZfnKyYaF7Rb3NPZ0IjYtmatez9bOQgikKJ2ia5MLG1VjUFACAaWprP7chnJ9sYaY9ETxzr9+AkOAIh5RfpaBYHEUqoTO4FF/YPKSn8K1VQI1fLQPGwDnS4PjDN40BEClgs9ykfXZlgM1KG/MSjMh9SswU0MmQ==\",\"sha256sig\":\"uRrpePedUgx3VaoNUA1a6o515DDAtu3yM3OAb6gzcB+lnsI5qdJz2RQWKbmdWgCFzsjxCR02kaF4BQBpul2o8SUiNuul6Dr0PRJ9ENWuS3woYPMLleekDYzwmPYoZYoEK0eSngelRjdi0vqJMx6FY2VhGkvVPDiY4/sDLboRWsOS9myulvjgqebTDwQuUOiJ99VQuztTeVaMnh27qwtvPe9VZb/jBJy3w+6qZnqLrkr8+70uUjml9wk8sazRZ+0ykPy1r7vkvlSNNTeGykmI58VyXLLM4W5Gze4dvTQA/3WJ0MBkdj7opdmHbw2/R/Fs9GXmUUAyTicJAeewShOSJA==\",\"cert\":\"MIIFgzCCA2ugAwIBAgITMwAAAdt9VVielMaupAAAAAAB2zANBgkqhkiG9w0BAQsFADB+MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgU2VjdXJlIFNlcnZlciBDQSAyMDExMB4XDTIyMDYxNjE4MjMzNloXDTIzMDYxNjE4MjMzNlowHjEcMBoGA1UEAxMTU2V2aWxsZS5XaW5kb3dzLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALqfSbma3gNzT/FeQb0omPgeEgL6ZZDY0PVHl5uAZICrfgW1CdeO0zhqoi+awBNb0iLzhUU1JWUVEQk/zzj9MEGt8USV+VL2jYGsWBpSzxk8HE7huLoJT+OxZ7SZHf16pUJUzYDTWsj6oAdE9Ufqib8e9Jw/mOXh4jAMP+Rfrhxom4/+dwfLuc8fsNHdJwRoiGZyEBlssgQ0O/E0J5+1v/ygqG9baDYMf7tQ6gpJaCqYOXGfjIZjK6k7QSQ/oDYRbqJwIbwh6QhGiEwjybM0PLRAum7ge7n1+AmHgIQtFmxD39NBBGj0wR229e0Cw32cWvCTD79wPo9XrUc14c7SM3kCAwEAAaOCAVgwggFUMA4GA1UdDwEB/wQEAwIFIDAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIwDAYDVR0TAQH/BAIwADAeBgNVHREEFzAVghNTZXZpbGxlLldpbmRvd3MuY29tMB0GA1UdDgQWBBT6WeNQNxr8EVKgNNSG95wiH+Mm1TAfBgNVHSMEGDAWgBQ2VollSctbmy88rEIWUE2RuTPXkTBTBgNVHR8ETDBKMEigRqBEhkJodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2NybC9NaWNTZWNTZXJDQTIwMTFfMjAxMS0xMC0xOC5jcmwwYAYIKwYBBQUHAQEEVDBSMFAGCCsGAQUFBzAChkRodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2NlcnRzL01pY1NlY1NlckNBMjAxMV8yMDExLTEwLTE4LmNydDANBgkqhkiG9w0BAQsFAAOCAgEAoYQOCQkqZzufRA/pGYPupPk9UPEual/TLG7p4/rKZddKfeEImUS72TUA8FFvzro+vI9UE7caEQnj44cEPr4qijE4ppX9BlQKtjhQvvcMBWBTgikDnOgqgwWODhCnXIyJjDYnOSUu5pYTFlGP+ZhlRl9AOuShCZEQQRNJXYzDDA0THdhBpucJHmUe2rV+fTBsTztgXCUfvT7V3MFXkYFGD9YKftTDput2rsmqXKvk34ckEKPTergyGQ1P+oKXDqksRsxDUd9FYsKB06cWNtdHxAw8ZyCXp2ImG7QiEx/jLoYwM72nu4FwLvbmRufGDNGj4xVSBasNkvOgJ2Umt7VFEgheW46dXymAkE549y8qZjHN1GfTqYPsyglsuG3tvYKDgVgCx7evq0iUwfJZAuU/ZI2XWAeTTE167HupzoN68fTJrAFleC1RHFd8EhUS/CMbg0ChssEdpwq0TWwRnsf/5hyVTMIx2YtTkuV0sRL5RrfVYMCxDFbLAelEgZ/83o611Xrud9rGEZeq+3TaTyZiJVYQCvRKQ/jKrz6ihRqcD8rAkXHGejgi/AWS9Br7w6UaGfdnUbWAgnE5U+ueo7YOprBjqSSmvpzmABCHCmIdm+jCK1C4YH4SMfEpdzSj98olWgXqgE0bSaE/RJIxMc49gRtxWmXLalMplWm0xS7G2cE=\",\"chain\":[\"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\"]}" > %TMP%\senseTmp.txt 2>&1
if %ERRORLEVEL% NEQ 0 (
   set "errorDescription=Unable to write onboarding information to registry."
   set errorCode=10
   set lastError=%ERRORLEVEL%
   GOTO ERROR
)

echo Starting the service, if not already running
echo.
sc query "SENSE" | find /i "RUNNING" >NUL 2>&1
if %ERRORLEVEL% EQU 0 GOTO RUNNING

net start sense > %TMP%\senseTmp.txt 2>&1
if %ERRORLEVEL% NEQ 0 (
   echo Microsoft Defender for Endpoint Service has not started yet
   GOTO WAIT_FOR_THE_SERVICE_TO_START
)
goto SUCCEEDED

:RUNNING
set "runningOutput=The Microsoft Defender for Endpoint Service is already running!"
echo %runningOutput%
echo.
eventcreate /l Application /so WDATPOnboarding /t Information /id 10 /d "%runningOutput%" >NUL 2>&1
GOTO WAIT_FOR_THE_SERVICE_TO_START

:ERROR
Set /P errorMsg=<%TMP%\senseTmp.txt
set "errorOutput=[Error Id: %errorCode%, Error Level: %lastError%] %errorDescription% Error message: %errorMsg%"
%powershellPath% -ExecutionPolicy Bypass -NoProfile -Command "Add-Type 'using System; using System.Diagnostics; using System.Diagnostics.Tracing; namespace Sense { [EventData(Name = \"Onboarding\")]public struct Onboarding{public string Message { get; set; }} public class Trace {public static EventSourceOptions TelemetryCriticalOption = new EventSourceOptions(){Level = EventLevel.Error, Keywords = (EventKeywords)0x0000200000000000, Tags = (EventTags)0x0200000}; public void WriteOnboardingMessage(string message){es.Write(\"OnboardingScript\", TelemetryCriticalOption, new Onboarding {Message = message});} private static readonly string[] telemetryTraits = { \"ETW_GROUP\", \"{5ECB0BAC-B930-47F5-A8A4-E8253529EDB7}\" }; private EventSource es = new EventSource(\"Microsoft.Windows.Sense.Client.Management\",EventSourceSettings.EtwSelfDescribingEventFormat,telemetryTraits);}}'; $logger = New-Object -TypeName Sense.Trace; $logger.WriteOnboardingMessage('%errorOutput%')" >NUL 2>&1
echo %errorOutput%
echo %troubleshootInfo%
echo.
eventcreate /l Application /so WDATPOnboarding /t Error /id %errorCode% /d "%errorOutput%" >NUL 2>&1
GOTO CLEANUP

:SUCCEEDED
echo Finished performing onboarding operations
echo.
GOTO WAIT_FOR_THE_SERVICE_TO_START

:WAIT_FOR_THE_SERVICE_TO_START
echo Waiting for the service to start
echo.

set /a counter=0

:SENSE_RUNNING_WAIT
sc query "SENSE" | find /i "RUNNING" >NUL 2>&1
if %ERRORLEVEL% NEQ 0 (
	IF %counter% EQU 4 (
		set "errorDescription=Unable to start Microsoft Defender for Endpoint Service."
		set errorCode=15
		set lastError=%ERRORLEVEL%
		GOTO ERROR
	)

	set /a counter=%counter%+1

	timeout 5 >NUL 2>&1
	GOTO :SENSE_RUNNING_WAIT
)

set /a counter=0

:SENSE_ONBOARDED_STATUS_WAIT
REG query "HKLM\SOFTWARE\Microsoft\Windows Advanced Threat Protection\Status" /v OnboardingState /reg:64 >NUL 2>&1
if %ERRORLEVEL% NEQ 0 (
	IF %counter% EQU 4 (
		@echo Microsoft Defender for Endpoint Service is not running as expected> %TMP%\senseTmp.txt
		set errorCode=35
     set lastError=%ERRORLEVEL%
		GOTO ERROR
	)

	set /a counter=%counter%+1

	timeout 5 >NUL 2>&1
	GOTO :SENSE_ONBOARDED_STATUS_WAIT
)

set /a counter=0

:SENSE_ONBOARDED_WAIT
REG query "HKLM\SOFTWARE\Microsoft\Windows Advanced Threat Protection\Status" /v OnboardingState /reg:64 | find /i "0x1" >NUL 2>&1
if %ERRORLEVEL% NEQ 0 (
	IF %counter% EQU 4 (
		@echo Microsoft Defender for Endpoint Service is not running as expected> %TMP%\senseTmp.txt
		set errorCode=40
     set lastError=%ERRORLEVEL%
		GOTO ERROR
	)

	set /a counter=%counter%+1

	timeout 5 >NUL 2>&1
	GOTO :SENSE_ONBOARDED_WAIT
)

set "successOutput=Successfully onboarded machine to Microsoft Defender for Endpoint"
echo %successOutput%
echo.
eventcreate /l Application /so WDATPOnboarding /t Information /id 20 /d "%successOutput%" >NUL 2>&1
%powershellPath% -ExecutionPolicy Bypass -NoProfile -Command "Add-Type 'using System; using System.Diagnostics; using System.Diagnostics.Tracing; namespace Sense { [EventData(Name = \"Onboarding\")]public struct Onboarding{public string Message { get; set; }} public class Trace {public static EventSourceOptions TelemetryCriticalOption = new EventSourceOptions(){Level = EventLevel.Informational, Keywords = (EventKeywords)0x0000200000000000, Tags = (EventTags)0x0200000}; public void WriteOnboardingMessage(string message){es.Write(\"OnboardingScript\", TelemetryCriticalOption, new Onboarding {Message = message});} private static readonly string[] telemetryTraits = { \"ETW_GROUP\", \"{5ECB0BAC-B930-47F5-A8A4-E8253529EDB7}\" }; private EventSource es = new EventSource(\"Microsoft.Windows.Sense.Client.Management\",EventSourceSettings.EtwSelfDescribingEventFormat,telemetryTraits);}}'; $logger = New-Object -TypeName Sense.Trace; $logger.WriteOnboardingMessage('%successOutput%')" >NUL 2>&1
"%PROGRAMFILES%\Windows Defender\MpCmdRun.exe" -ReloadEngine >NUL 2>&1

GOTO CLEANUP

:CLEANUP
if exist %TMP%\senseTmp.txt del %TMP%\senseTmp.txt
pause
EXIT /B %errorCode%

