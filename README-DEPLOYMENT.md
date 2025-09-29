# RenoDB - GitHub Pages Deployment

## 🚀 Deployment naar GitHub Pages

Je RenoDB website is klaar voor deployment op GitHub Pages! Volg deze stappen:

### 1. Repository Setup
1. Maak een nieuwe GitHub repository
2. Upload alle bestanden uit deze workspace naar je repository
3. Zorg ervoor dat de `docs/` folder in je repository staat

### 2. GitHub Pages Configuratie
1. Ga naar je repository op GitHub
2. Klik op **Settings** (rechtsboven)
3. Scroll naar beneden naar **Pages** (links in het menu)
4. Bij **Source**, selecteer **Deploy from a branch**
5. Bij **Branch**, selecteer **main** (of **master**)
6. Bij **Folder**, selecteer **/docs**
7. Klik **Save**

### 3. Website Live! 🎉
Na een paar minuten is je website beschikbaar op:
`https://[jouw-github-username].github.io/[repository-naam]/`

## 📁 Folder Structuur

```
docs/
├── index.html          # Hoofdpagina
├── assets/            # CSS, JS en afbeeldingen
│   ├── index-*.css
│   ├── index-*.js
│   └── *.png
└── .nojekyll         # Voor GitHub Pages compatibiliteit
```

## 🔄 Updates Deployen

Voor toekomstige wijzigingen:
1. Maak je wijzigingen in de Replit workspace
2. Run `npm run build` 
3. Kopieer de inhoud van `dist/public/` naar `docs/`
4. Update de paths in `docs/index.html` naar relatieve paths (./assets/...)
5. Push naar GitHub
6. GitHub Pages wordt automatisch geüpdatet

## ⚡ Features van je Website

- ✅ Volledig responsive design
- ✅ WhatsApp integratie
- ✅ Ringtwice integratie met echte reviews
- ✅ SEO geoptimaliseerd
- ✅ Alle diensten showcase
- ✅ BTW nummer disclaimer
- ✅ Professionele galerij met werkafbeeldingen

## 🎯 Website URL Voorbeeld
Als je GitHub username `hannes-renovaties` is en je repository `renodb-website`, dan wordt je website:
**https://hannes-renovaties.github.io/renodb-website/**

Perfect voor visitekaartjes en online marketing! 🏗️