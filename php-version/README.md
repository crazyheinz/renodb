# RenoDB - PHP Versie

Welkom bij de PHP versie van de RenoDB website! Deze versie is geconverteerd van React naar pure HTML/PHP voor eenvoudiger hosting en betere performance.

## 📁 Folder Structuur

```
php-version/
├── index.php              # Hoofdpagina (laadt alle includes)
├── includes/              # PHP component bestanden
│   ├── header.php        # <head> en SEO meta tags
│   ├── hero.php          # Hero sectie met foto
│   ├── services.php      # Diensten overzicht
│   ├── contact.php       # Contact formulier
│   └── footer.php        # Footer + closing tags
├── css/
│   └── styles.css        # Compiled Tailwind CSS (74 KB)
├── js/
│   └── script.js         # Smooth scrolling functionaliteit
├── images/
│   └── werkman-hero.png  # Hero foto (2.5 MB)
├── favicon.png           # Favicon 32x32
├── favicon-64.png        # Favicon 64x64
├── robots.txt            # SEO crawler instructies
├── sitemap.xml           # Sitemap voor Google
├── ai.txt                # AI discovery file
└── CNAME                 # Custom domain (www.renodb.be)
```

## 🚀 Deployment Opties

### Optie 1: Standaard PHP Hosting

Upload alle bestanden naar je webserver via FTP/SFTP:

```bash
# Upload alles naar public_html of www folder
/public_html/
  ├── index.php
  ├── includes/
  ├── css/
  ├── js/
  ├── images/
  └── ...
```

### Optie 2: GitHub Pages (Statisch)

GitHub Pages ondersteunt geen PHP. Converteer naar pure HTML:

```bash
# Genereer statische HTML
php index.php > index.html
```

### Optie 3: Hosting met cPanel

1. Log in op cPanel
2. Open "File Manager"
3. Upload alle bestanden naar `public_html/`
4. Zorg dat index.php de default pagina is

### Optie 4: Via FTP

```bash
# Bijvoorbeeld met lftp
lftp -u username,password ftp.jouwserver.com
cd public_html
mirror -R php-version/ ./
```

## ⚙️ Server Vereisten

- **PHP**: 7.4 of hoger (8.0+ aanbevolen)
- **Apache/Nginx**: Met mod_rewrite enabled
- **Geen database**: Volledig statisch gegenereerd

## 🔧 Configuratie

### .htaccess (Optioneel - voor mooie URLs)

```apache
# Forceer HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# WWW redirect
RewriteCond %{HTTP_HOST} ^renodb\.be [NC]
RewriteRule ^(.*)$ https://www.renodb.be/$1 [L,R=301]

# Caching headers
<FilesMatch "\.(jpg|jpeg|png|gif|svg|css|js)$">
    Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

## 📝 Aanpassingen Maken

### Teksten wijzigen

Bewerk de PHP bestanden in `includes/`:
- **Hero tekst**: `includes/hero.php`
- **Diensten**: `includes/services.php` (PHP array)
- **Contact**: `includes/contact.php`

### Styling aanpassen

Bewerk `css/styles.css` of voeg custom CSS toe aan header.php:

```php
<!-- Custom styles -->
<style>
    .custom-class {
        /* Jouw CSS hier */
    }
</style>
```

### Nieuwe secties toevoegen

1. Maak een nieuw bestand: `includes/nieuwe-sectie.php`
2. Voeg toe aan `index.php`:
```php
<?php include 'includes/nieuwe-sectie.php'; ?>
```

## 🎨 Features

### Huidige Functionaliteit

✅ **SEO Optimized**
- Meta tags voor Google, Facebook, Twitter
- Schema.org structured data
- Rich snippets ready
- Sitemap & robots.txt

✅ **AI Discovery**
- ai.txt voor ChatGPT, Claude, Perplexity
- Complete business information

✅ **Responsive Design**
- Mobile-first Tailwind CSS
- Desktop, tablet, mobile optimized

✅ **Performance**
- Compiled CSS (74 KB)
- Minimal JavaScript
- Optimized images

✅ **Interactive Elements**
- Smooth scrolling
- Hover effects
- Click tracking ready

## 🔍 SEO Checklist

- [x] Meta title & description
- [x] Open Graph tags
- [x] Twitter cards
- [x] Schema.org LocalBusiness
- [x] Canonical URL
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Favicon
- [x] Alt tags op images
- [x] Semantic HTML5
- [x] Mobile-friendly

## 📊 Performance

- **CSS**: 74 KB (gzipped: ~12 KB)
- **JS**: 2 KB (gzipped: <1 KB)
- **HTML**: ~7 KB per pagina
- **Images**: Optimaliseer verder met WebP indien gewenst

## 🛠️ Onderhoud

### Backup maken

```bash
# Volledige backup
tar -czf renodb-backup-$(date +%Y%m%d).tar.gz php-version/
```

### Updates deployen

1. Test lokaal met PHP built-in server:
```bash
cd php-version
php -S localhost:8000
```

2. Upload naar server via FTP/SFTP

3. Clear browser cache en test live site

## 📞 Contact Info

Voor vragen over de website:
- **Website**: https://www.renodb.be
- **Phone**: +32 474 96 81 38
- **Ringtwice**: https://ringtwice.be/nl/listworkers/244537

## 📄 Licentie

© <?php echo date('Y'); ?> RenoDB. Alle rechten voorbehouden.
