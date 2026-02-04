# Script para fazer deploy do site no GitHub
# Execute este script após instalar o Git

Write-Host "Inicializando repositório Git..." -ForegroundColor Green

# Inicializar repositório Git
git init

# Adicionar remote do GitHub
git remote add origin https://github.com/ClickWeb2026/site-clickweb.git

# Adicionar todos os arquivos
Write-Host "Adicionando arquivos..." -ForegroundColor Green
git add .

# Fazer commit inicial
Write-Host "Fazendo commit..." -ForegroundColor Green
git commit -m "Initial commit: Site Click Web"

# Verificar branch atual
$currentBranch = git branch --show-current
if (-not $currentBranch) {
    git branch -M main
}

# Fazer push para o GitHub
Write-Host "Fazendo push para o GitHub..." -ForegroundColor Green
Write-Host "Você precisará fazer login no GitHub quando solicitado." -ForegroundColor Yellow
git push -u origin main

Write-Host "`nDeploy concluído com sucesso!" -ForegroundColor Green
Write-Host "Seu site está disponível em: https://github.com/ClickWeb2026/site-clickweb" -ForegroundColor Cyan
