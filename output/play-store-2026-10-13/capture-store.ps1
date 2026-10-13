param([string]$DeviceFilter = '', [string]$PageFilter = '')
$ErrorActionPreference = 'Stop'
$destination = Join-Path $PSScriptRoot 'screenshots'
New-Item -ItemType Directory -Path $destination -Force | Out-Null
$browser = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$pages = @(
    @{ Name = '01-ana-sayfa'; Url = 'https://www.odimax.com.tr/' },
    @{ Name = '02-modul-tanitimi'; Url = 'https://www.odimax.com.tr/modules/stok-yonetimi' },
    @{ Name = '03-paketler'; Url = 'https://www.odimax.com.tr/pricing' },
    @{ Name = '04-blog'; Url = 'https://www.odimax.com.tr/blog' }
)
$devices = @(
    @{ Name = 'telefon'; Size = '540,960'; Scale = '2' },
    @{ Name = 'tablet'; Size = '960,540'; Scale = '2' },
    @{ Name = 'masaustu'; Size = '1920,1080'; Scale = '1' }
)
foreach ($device in $devices) {
    if ($DeviceFilter -and $device.Name -ne $DeviceFilter) { continue }
    $deviceDirectory = Join-Path $destination $device.Name
    New-Item -ItemType Directory -Path $deviceDirectory -Force | Out-Null
    foreach ($page in $pages) {
        if ($PageFilter -and $page.Name -ne $PageFilter) { continue }
        $profile = Join-Path ([System.IO.Path]::GetTempPath()) ('odimax-store-capture-' + [guid]::NewGuid().ToString('N'))
        $target = Join-Path $deviceDirectory ($page.Name + '.png')
        $arguments = @(
            '--headless', '--disable-gpu', '--no-first-run', '--hide-scrollbars', '--run-all-compositor-stages-before-draw',
            "--force-device-scale-factor=$($device.Scale)",
            "--window-size=$($device.Size)", '--virtual-time-budget=15000',
            "--user-data-dir=$profile", "--screenshot=$target", $page.Url
        )
        Start-Process -FilePath $browser -WindowStyle Hidden -Wait -ArgumentList $arguments
        if (-not (Test-Path -LiteralPath $target)) { throw "Screenshot missing: $target" }
        Write-Output "$($device.Name): $($page.Name) saved"
    }
}
