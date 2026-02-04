# Click Web - Site Institucional

Site institucional da Click Web desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Getting Started

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

3. Para build de produção:
```bash
npm run build
```

## 📦 Deploy no GitHub

### Pré-requisitos
- Git instalado ([Download Git](https://git-scm.com/downloads))
- Conta no GitHub com acesso ao repositório

### Passos para Deploy

1. **Instale o Git** (se ainda não tiver):
   - Baixe em: https://git-scm.com/downloads
   - Ou use: `winget install Git.Git`

2. **Execute o script de deploy**:
   ```powershell
   .\deploy-to-github.ps1
   ```

3. **Ou faça manualmente**:
   ```bash
   git init
   git remote add origin https://github.com/ClickWeb2026/site-clickweb.git
   git add .
   git commit -m "Initial commit: Site Click Web"
   git branch -M main
   git push -u origin main
   ```

## 🛠️ Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons
