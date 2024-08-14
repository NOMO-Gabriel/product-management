# Cours Tailwind CSS et JavaScript pour le Composant `Navbar`

Ce document explique l'utilisation des classes Tailwind CSS et de la logique JavaScript pour le composant `Navbar` dans un projet Next.js.
# Js
### Compréhension des Fonctions Utilisées dans le Composant `Navbar`

## `useState`

`useState` est un hook de React qui permet de gérer l'état local dans un composant fonctionnel.

### **Syntaxe :**
    
    ```tsx
    const [state, setState] = useState(initialState);
- `state` : La variable d'état actuelle.
- `setState` : La fonction pour mettre à jour l'état.
- `initialState` : La valeur initiale de l'état.

### Exemple d'utilisation :

    tsx
    
    const [dropDownOpen, setDropDownOpen] = useState<string | null>(null);
- `dropDownOpen` : Variable qui contient le nom du menu déroulant actuellement ouvert ou null si aucun menu n'est ouvert.
- `setDropDownOpen` : Fonction pour mettre à jour l'état dropDownOpen.

# Fonction `toggleDropDown` :

        tsx
        
        const toggleDropDown = (name: string) => {
        setDropDownOpen(dropDownOpen === name ? null : name);
        };

Cette fonction bascule l'état dropDownOpen. Si le menu est déjà ouvert, il se ferme (`null`), sinon il s'ouvre avec le nom du menu.

# Object.keys

Object.keys est une méthode JavaScript qui retourne un tableau des clés énumérables d'un objet.
Syntaxe :

    js
    
    Object.keys(object);

`object` : L'objet dont on veut obtenir les clés.

### Exemple d'utilisation :
    
    tsx
    
    {Object.keys(routes).map((key) => {
    const route = routes[key as keyof typeof routes];
    // ...
    })}

Ici, `Object.keys(routes)` génère un tableau des clés de l'objet routes, tel que `["shop", "cart", "administration", "account"]`. Ce tableau est utilisé pour rendre les éléments de navigation.

# B- Css
## 1. **Alignement et Disposition**

### **Classes Tailwind CSS Utilisées**

- **`h-20`** : Définit une hauteur de 5rem (80px) pour la barre de navigation.
- **`p-6`** : Applique un padding de 1.5rem (24px) tout autour de l'élément.
- **`flex`** : Définit un conteneur flex pour disposer les éléments enfants.
- **`justify-between`** : Distribue les éléments enfants de manière égale, avec les premiers éléments alignés à gauche et les derniers à droite.
- **`items-center`** : Aligne les éléments enfants au centre du conteneur en termes de hauteur.
- **`ml-60`** : Applique une marge gauche de 15rem (240px) pour le conteneur flex de navigation.
- **`space-x-10`** : Ajoute un espace horizontal de 2.5rem (40px) entre les éléments enfants du conteneur flex.

### **Variantes**

- **`flex-grow`** : Permet à un élément de croître pour occuper l'espace restant dans le conteneur flex.
- **`space-x-4`** : Ajoute un espace horizontal de 1rem (16px) entre les éléments enfants du conteneur flex.

## 2. **Gestion des Bordures**

### **Classes Tailwind CSS Utilisées**

- **`border-b`** : Ajoute une bordure uniquement en bas de l'élément.
- **`border-gray-200`** : Définit la couleur de la bordure comme gris clair (niveau de gris 200).
- **`rounded`** : Applique des coins arrondis aux éléments.

### **Variantes**

- **`border-gray-400`** : Change la couleur de la bordure en gris moyen (niveau de gris 400).
- **`border-2`** : Définit une bordure plus épaisse (2px).

## 3. **Gérer le Padding et le Margin**

### **Classes Tailwind CSS Utilisées**

- **`p-4`** : Définit un padding uniforme de 1rem (16px) tout autour de l'élément.
- **`m-4`** : Définit une marge uniforme de 1rem (16px) autour de l'élément.

### **Variantes**

- **`p-2`** : Définit un padding de 0.5rem (8px).
- **`p-6`** : Définit un padding de 1.5rem (24px).

## 4. **Couleurs et Effets au Survol**

### **Classes Tailwind CSS Utilisées**

- **`hover:bg-blue-100`** : Change la couleur de fond au survol en bleu clair.
- **`hover:text-blue-500`** : Change la couleur du texte au survol en bleu foncé.
- **`transition-colors`** : Applique une transition douce pour les changements de couleur.

### **Variantes**

- **`hover:bg-blue-200`** : Change la couleur de fond au survol en bleu moyen.
- **`hover:text-blue-600`** : Change la couleur du texte au survol en bleu encore plus foncé.

## 5. **Utilisation de Font Awesome**

### **Installation**

Pour intégrer Font Awesome, installez les paquets nécessaires avec npm :

    ```bash
    npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
### Importation et Utilisation
    
        tsx
        
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
        import { faPhone, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons';
        imp
### Exemple d'Utilisation

    tsx
    
    <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-blue-500" />
### 6. Code du Composant `Navbar`
            'use client';
        
        import MyNav from "@/app/components/shared/navbar/MyNav";
        import Link from "next/link";
        import { Route, routes } from "../routes/routes";
        import React, { useState } from "react";
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
        import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
        
        const Navbar: React.FC = () => {
        const [dropDownOpen, setDropDownOpen] = useState<string | null>(null);
        
            const toggleDropDown = (name: string) => {
                setDropDownOpen(dropDownOpen === name ? null : name);
            };
        
            const renderDropdown = (route: Route) => (
                <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg w-48">
                    {route.children?.map((child) => (
                        <li key={child.path || child.name} className="relative">
                            <Link href={child.path || '#'}>
                                <h3 className="text-lg italic font-semibold text-gray-800 hover:text-blue-500">{child.name}</h3>
                            </Link>
                            {child.children && renderDropdown(child)}
                        </li>
                    ))}
                </ul>
            );
        
            return (
                <div>
                    <MyNav />
                    <nav className="h-20 p-6 flex justify-between items-center border-b border-gray-200">
                        <div className="flex items-center">
                            <Link href="/" className="rounded mr-50 flex space-x-1 transition-colors duration-300 cursor-pointer hover:scale-105">
                                <img
                                    src="/assets/images/logo.png"
                                    alt="Logo"
                                    className="h-12 mb-2"
                                />
                                <h1 className="mt-3 text-lg font-semibold">MyShop</h1>
                            </Link>
                        </div>
                        <nav className="flex flex-grow ml-60">
                            <ul className="flex space-x-10 items-center">
                                {Object.keys(routes).map((key) => {
                                    const route = routes[key as keyof typeof routes];
                                    return (
                                        route.children ? (
                                            <li key={route.name} className="relative">
                                                <button
                                                    onClick={() => toggleDropDown(route.name)}
                                                    className="flex items-center space-x-2 text-lg font-semibold hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                                                >
                                                    <h3>{route.name}</h3>
                                                    <FontAwesomeIcon icon={dropDownOpen === route.name ? faChevronUp : faChevronDown} />
                                                </button>
                                                {dropDownOpen === route.name && renderDropdown(route)}
                                            </li>
                                        ) : (
                                            <li key={route.path || route.name}>
                                                <Link href={route.path || '#'} className="text-lg italic font-semibold hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                                                    <h3>{route.name}</h3>
                                                </Link>
                                            </li>
                                        )
                                    );
                                })}
                            </ul>
                        </nav>
                        <div className="flex space-x-4">
                            <Link href="/login">
                                <button className="px-4 py-2 bg-gray-950 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                                    Login
                                </button>
                            </Link>
                            <Link href="/register">
                                <button className="px-4 py-2 bg-gray-950 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </nav>
                </div>
            );
        };
        
        export default Navbar;

# 7. code de `routes.ts`

        // src/app/components/shared/routes/routes.ts
        
        export type Route = {
        name: string;
        path?: string;
        children?: Route[];
        };
        
        export const routes: { [key: string]: Route } = {
        shop: {
        name: 'Shop',
        children: [
        { name: 'Products', path: '/shop/products' },
        { name: 'Category', path: '/shop/category' },
        { name: 'Card', path: '/shop/card' }
        ]
        },
        cart: { name: 'Cart', path: '/cart' },
        administration: {
        name: 'Administration',
        path: '/administration',
        children: [
        { name: 'Users', path: '/administration/user' },
        { name: 'History', path: '/administration/history' }
        ]
        },
        account: {
        name: 'Account',
        children: [
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' },
        { name: 'Logout', path: '#' }
        ]
        }
        };

# 8. rendu

![Navbar](imagesavbar.png)
![Navbar](imagesavbar1.png)