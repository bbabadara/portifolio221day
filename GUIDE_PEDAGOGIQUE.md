# Guide Pédagogique - Recréer le Portfolio de Zéro

Ce guide vous accompagne pas à pas pour recréer ce portfolio React en partant de zéro. Il est conçu pour les étudiants débutants en React.

## 📚 Prérequis

Avant de commencer, assurez-vous d'avoir :
- **Node.js** installé (version 18 ou supérieure) - [Télécharger ici](https://nodejs.org/)
- **Un éditeur de code** (VS Code recommandé) - [Télécharger ici](https://code.visualstudio.com/)
- **Connaissances de base** en HTML, CSS et JavaScript
- **Git** installé (optionnel mais recommandé)

## 🎯 Objectifs du Projet

À la fin de ce guide, vous saurez :
- Créer un projet React avec Vite
- Structurer un projet React en composants
- Utiliser les Custom Hooks
- Gérer l'état avec useState et useEffect
- Créer un système de traduction multi-langue
- Implémenter un thème dark/light
- Déployer sur Vercel

---

## ÉTAPE 1 : Création du Projet

### 1.1 Initialiser le projet avec Vite

Ouvrez votre terminal et exécutez :

```bash
npm create vite@latest portfolio-react -- --template react
cd portfolio-react
```

### 1.2 Installer les dépendances

```bash
npm install
```

### 1.3 Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez votre navigateur sur `http://localhost:5173` - vous devriez voir la page par défaut de Vite.

---

## ÉTAPE 2 : Structure du Projet

### 2.1 Créer la structure de dossiers

```bash
mkdir src/components
mkdir src/hooks
mkdir src/data
```

Votre structure devrait ressembler à :
```
portfolio-react/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## ÉTAPE 3 : Configuration de Base

### 3.1 Mettre à jour index.html

Remplacez le contenu de `index.html` par :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Portfolio" />
    <title>Mon Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 3.2 Préparer le CSS

Supprimez `src/App.css` et remplacez `src/index.css` par votre CSS personnalisé (copiez le fichier `style.css` du portfolio original).

---

## ÉTAPE 4 : Création des Données

### 4.1 Créer le fichier de traductions

Créez `src/data/translations.js` :

```javascript
export const translations = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    // ... ajoutez toutes vos traductions
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    // ... ajoutez toutes vos traductions
  },
  // ... ajoutez es et ar
};
```

---

## ÉTAPE 5 : Création des Custom Hooks

### 5.1 Hook pour la langue

Créez `src/hooks/useLanguage.js` :

```javascript
import { useState, useEffect } from 'react';
import { translations } from '../data/translations';

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio-language') || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return { language, t, changeLanguage };
};
```

### 5.2 Hook pour le thème

Créez `src/hooks/useTheme.js` :

```javascript
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem('portfolio-theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return { isDark, toggleTheme };
};
```

---

## ÉTAPE 6 : Création des Composants

### 6.1 Composant Header

Créez `src/components/Header.jsx` :

```javascript
import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const { language, t, changeLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'nav_home' },
    { id: 'about', label: 'nav_about' },
    // ... ajoutez les autres liens
  ];

  return (
    <header className="header">
      <nav className="navbar container">
        <a href="#home" className="logo">MON<span>.</span></a>
        {/* ... ajoutez le reste du header */}
      </nav>
    </header>
  );
};

export default Header;
```

### 6.2 Créer les autres composants

Créez successivement :
- `Hero.jsx` - Section d'accueil
- `About.jsx` - Section à propos
- `Skills.jsx` - Section compétences
- `Projects.jsx` - Section projets
- `Services.jsx` - Section services
- `Journey.jsx` - Section parcours
- `Contact.jsx` - Section contact
- `Footer.jsx` - Pied de page
- `BackToTop.jsx` - Bouton retour en haut

**Conseil** : Créez un composant à la fois et testez-le avant de passer au suivant.

---

## ÉTAPE 7 : Assembler l'Application

### 7.1 Mettre à jour App.jsx

Remplacez le contenu de `src/App.jsx` :

```javascript
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// ... importez tous vos composants
import './index.css';

function App() {
  useEffect(() => {
    // Animation reveal
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        {/* ... ajoutez les autres sections */}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
```

---

## ÉTAPE 8 : Concepts Clés Appris

### 8.1 Composants React
- Les composants sont des fonctions qui retournent du JSX
- Ils peuvent recevoir des props (propriétés)
- Ils peuvent avoir un état interne avec `useState`

### 8.2 Custom Hooks
- Permettent de réutiliser la logique entre composants
- Commencent toujours par "use"
- Peuvent retourner des valeurs et des fonctions

### 8.3 useEffect
- Permet d'effectuer des effets de bord
- S'exécute après le rendu du composant
- La fonction de retour sert au nettoyage

### 8.4 Gestion de l'état
- `useState` pour l'état local
- `localStorage` pour la persistance
- Les hooks personnalisés pour encapsuler la logique

---

## ÉTAPE 9 : Déploiement sur Vercel

### 9.1 Préparer le déploiement

```bash
npm run build
```

Cette commande crée un dossier `dist` avec les fichiers optimisés pour la production.

### 9.2 Déployer sur Vercel

1. Créez un compte sur [Vercel](https://vercel.com)
2. Cliquez sur "Add New Project"
3. Importez votre repository GitHub
4. Vercel détectera automatiquement Vite
5. Cliquez sur "Deploy"

---

## 🎓 Ressources pour Approfondir

- [Documentation React](https://react.dev)
- [Documentation Vite](https://vite.dev)
- [Tutoriels React](https://www.youtube.com/results?search_query=react+tutorial+french)
- [React Patterns](https://reactpatterns.com)

---

## 💡 Conseils pour les Débutants

1. **Comprenez avant de copier** : Ne copiez pas le code sans comprendre ce qu'il fait
2. **Testez souvent** : Lancez le serveur après chaque changement important
3. **Utilisez la console** : F12 pour voir les erreurs
4. **Commencez simple** : Maîtrisez un composant avant de passer au suivant
5. **Lisez les erreurs** : Les messages d'erreur React sont très explicites

---

## 🐛 Problèmes Courants

### Problème : Le CSS ne s'applique pas
**Solution** : Vérifiez que vous avez bien importé le fichier CSS dans App.jsx

### Problème : Les hooks ne fonctionnent pas
**Solution** : Assurez-vous que les hooks sont appelés au niveau supérieur du composant, pas dans des conditions ou boucles

### Problème : Le build échoue
**Solution** : Vérifiez que toutes les importations sont correctes et que les fichiers existent

---

## 📝 Exercices Pratiques

1. **Exercice 1** : Ajoutez une nouvelle langue (allemand ou italien)
2. **Exercice 2** : Modifiez les couleurs du thème
3. **Exercice 3** : Ajoutez un nouveau projet dans la section Projects
4. **Exercice 4** : Créez un nouveau composant "Testimonials"
5. **Exercice 5** : Implémentez un système de favoris avec localStorage

---

## 🎉 Félicitations !

Vous avez maintenant un portfolio React fonctionnel ! Continuez à pratiquer et à explorer les concepts avancés de React comme :
- Context API
- React Router
- API Fetching
- TypeScript
- Testing

Bon courage dans votre apprentissage ! 🚀
