Start-Process -FilePath "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" -ArgumentList "--headless=new", "--print-to-pdf=F:\CV\public\cv.pdf", "--no-pdf-header-footer", "file:///F:/CV/scripts/cv-template.html" -Wait
Write-Host "PDF generated successfully at public/cv.pdf"
