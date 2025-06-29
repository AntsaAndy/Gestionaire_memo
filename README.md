# 📝 Gestionnaire de Notes

Une application web simple et moderne pour gérer vos notes et mémos quotidiens. Créée avec React et Tailwind CSS.

## 🚀 Technologies utilisées

- **React 18** avec JavaScript pour une expérience de développement simple
- **Vite** comme bundler pour des performances optimales
- **Tailwind CSS** pour un design moderne et responsive
- **Lucide React** pour les icônes élégantes
- **localStorage** pour la persistance des données côté client

## ✨ Fonctionnalités

### 📋 Gestion des notes
- ✅ **Créer** une nouvelle note avec titre et contenu
- ✅ **Modifier** une note existante
- ✅ **Supprimer** une note avec confirmation
- ✅ **Lister** toutes les notes avec pagination automatique

### 🔍 Recherche et filtrage
- ✅ **Recherche en temps réel** dans les titres et contenus
- ✅ **Compteur de résultats** de recherche
- ✅ **Effacement rapide** de la recherche

### 📱 Interface utilisateur
- ✅ **Design responsive** optimisé pour mobile, tablette et desktop
- ✅ **Animations fluides** et micro-interactions
- ✅ **Modal moderne** pour l'édition des notes
- ✅ **États de hover** et feedback visuel
- ✅ **Gestion des états vides** avec messages d'encouragement

### 💾 Persistance
- ✅ **Sauvegarde automatique** dans localStorage
- ✅ **Récupération des données** au rechargement de la page
- ✅ **Gestion des erreurs** de sérialisation/désérialisation

## 🛠️ Installation et lancement

### Prérequis
- Node.js 16+ et npm installés

### Étapes d'installation

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

### Commandes disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie la qualité du code avec ESLint

## 🏗️ Architecture du projet

```
src/
├── components/          # Composants React réutilisables
│   ├── NoteCard.jsx    # Carte d'affichage d'une note
│   ├── NoteForm.jsx    # Formulaire de création/édition
│   ├── NoteList.jsx    # Liste des notes avec état vide
│   └── SearchBar.jsx   # Barre de recherche avec compteur
├── hooks/              # Hooks personnalisés
│   └── useNotes.js     # Logique de gestion des notes
├── App.jsx             # Composant principal
├── main.jsx            # Point d'entrée de l'application
└── index.css           # Styles globaux Tailwind
```

## 🎨 Choix de design

### Palette de couleurs
- **Primaire** : Bleu (#3B82F6) pour les actions principales
- **Secondaire** : Gris neutres pour le contenu
- **Accent** : Vert pour les confirmations, rouge pour les suppressions

### Composants UI
- **Cards** avec ombres subtiles et coins arrondis
- **Buttons** avec états hover et focus
- **Inputs** avec animations de focus
- **Modal** avec overlay et animation d'entrée

### Responsive design
- **Mobile first** avec breakpoints Tailwind
- **Grid adaptative** pour les cartes de notes
- **Navigation optimisée** pour le tactile
