# PowerShell script for auto MDM enrollment of Azure AD joined devices
# This script should be run with administrative privileges

# Set MDM Enrollment URL's
$key = 'SYSTEM\CurrentControlSet\Control\CloudDomainJoin\TenantInfo\*'
$keyinfo = Get-Item "HKLM:\$key"
$url = $keyinfo.name
$url = $url.Split("\")[-1]
$path = "HKLM:\SYSTEM\CurrentControlSet\Control\CloudDomainJoin\TenantInfo\$url"

New-ItemProperty -LiteralPath $path -Name 'MdmEnrollmentUrl' -Value 'https://enrollment.manage.microsoft.com/enrollmentserver/discovery.svc' -PropertyType String -Force -ErrorAction SilentlyContinue
New-ItemProperty -LiteralPath $path  -Name 'MdmTermsOfUseUrl' -Value 'https://portal.manage.microsoft.com/TermsofUse.aspx' -PropertyType String -Force -ErrorAction SilentlyContinue
New-ItemProperty -LiteralPath $path -Name 'MdmComplianceUrl' -Value 'https://portal.manage.microsoft.com/?portalAction=Compliance' -PropertyType String -Force -ErrorAction SilentlyContinue

# Trigger AutoEnroll
$enrollResult = C:\Windows\system32\deviceenroller.exe /c /AutoEnrollMDM
if ($LASTEXITCODE -eq 0) {
    Write-Output "Device enrollment triggered successfully."
} else {
    Write-Output "Failed to trigger device enrollment. Error code: $LASTEXITCODE"
}
