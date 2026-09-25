# Portfolio - Badara

Portfolio personnel de Badara, développeur Web & Mobile, construit avec React et Vite.

## 🚀 Technologies

- **React 19** - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **Vite** - Build tool ultra-rapide pour le développement
- **CSS personnalisé** - Styles avec variables CSS pour le thème dark/light
- **Font Awesome** - Icônes pour l'interface
- **Google Fonts** - Police Inter pour la typographie

## ✨ Fonctionnalités

- **Multi-langue** : Support de 4 langues (Français, Anglais, Espagnol, Arabe)
- **Mode Dark/Light** : Thème personnalisable avec persistance localStorage
- **Responsive Design** : Adapté pour mobile, tablette et desktop
- **Animations** : Effets de révélation au scroll avec Intersection Observer
- **Navigation active** : Mise en évidence de la section courante
- **Formulaire de contact** : Avec validation et gestion d'état React

## 📦 Installation

1. Cloner le repository
```bash
git clone <repository-url>
cd portfolio-react
```

2. Installer les dépendances
```bash
npm install
```

## 🛠️ Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée le build de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Exécute ESLint

## 📁 Structure du Projet

```
portfolio-react/
├── public/              # Assets statiques
├── src/
│   ├── components/      # Composants React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Journey.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   ├── hooks/          # Custom React Hooks
│   │   ├── useLanguage.js
│   │   └── useTheme.js
│   ├── data/           # Données statiques
│   │   └── translations.js
│   ├── App.jsx         # Composant principal
│   ├── main.jsx        # Point d'entrée
│   └── index.css       # Styles globaux
├── index.html          # HTML racine
├── package.json        # Dépendances
└── vite.config.js      # Configuration Vite
```

## 🎨 Personnalisation

### Changer les couleurs
Modifier les variables CSS dans `src/index.css` :
```css
:root {
  --primary: #6c63ff;
  --primary-dark: #5148e5;
  /* ... autres variables */
}
```

### Ajouter une langue
Ajouter les traductions dans `src/data/translations.js` et mettre à jour le tableau `languages` dans `Header.jsx`.

### Modifier les projets
Mettre à jour le tableau `projects` dans `src/components/Projects.jsx`.

## 🌐 Déploiement sur Vercel

1. Connecter le repository GitHub à Vercel
2. Vercel détectera automatiquement qu'il s'agit d'un projet Vite
3. Configurer les build settings :
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Cliquer sur "Deploy"

## 📝 License

Ce projet est sous license MIT.

## 👤 Auteur

**Badara** - Développeur Web & Mobile

- Portfolio : [Lien vers votre portfolio]
- GitHub : [Lien vers votre GitHub]
- LinkedIn : [Lien vers votre LinkedIn]

