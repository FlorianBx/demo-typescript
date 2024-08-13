# Exercice 03 : Classes et Constructeurs

### Objectif

Dans cet exercice, vous allez apprendre à créer et utiliser des classes en TypeScript. Les classes sont un moyen de définir des objets avec des propriétés et des méthodes. Vous allez créer une classe `Product` avec des propriétés et une méthode pour calculer le prix d'un produit avec une taxe.

### Instructions

1. **Créez une classe `Product`** :
   - La classe doit avoir les propriétés suivantes :
     - `id` : de type `number`, représentant l'identifiant unique du produit.
     - `name` : de type `string`, représentant le nom du produit.
     - `price` : de type `number`, représentant le prix du produit sans taxe.

2. **Ajoutez un constructeur** :
   - Le constructeur de la classe doit accepter les valeurs pour `id`, `name`, et `price`, et les assigner aux propriétés de la classe.

3. **Ajoutez une méthode `getPriceWithTax`** :
   - La méthode doit retourner le prix du produit avec une taxe de 20 %. Le calcul peut être fait en multipliant le prix par `1.2`.

4. **Exemple d'utilisation** :
   - Créez une instance de la classe `Product` avec les valeurs `{ id: 1, name: "Laptop", price: 1000 }`.
   - Appelez la méthode `getPriceWithTax` et affichez le résultat dans la console. Le prix avec taxe devrait être `1200`.

5. **Implémentation** :
   - Écrivez la classe `Product` dans un fichier `product.ts` et testez-la dans `app.ts` en affichant les résultats avec `console.log`.

### Explications

- **Classes** : Les classes en TypeScript sont des modèles pour créer des objets. Elles peuvent contenir des propriétés (variables) et des méthodes (fonctions).
- **Constructeurs** : Le constructeur est une méthode spéciale d'une classe utilisée pour initialiser les objets créés avec cette classe.
- **Méthodes** : Les méthodes sont des fonctions définies à l'intérieur des classes qui peuvent manipuler les propriétés de l'objet.

### Résultat Attendu

Le résultat attendu est une classe `Product` qui, lorsqu'on lui fournit un prix, peut calculer et retourner le prix avec une taxe de 20 %.
