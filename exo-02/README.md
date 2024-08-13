# Exercice 02 : Manipulation de Tableaux et Fonctions

### Objectif

Dans cet exercice, vous allez apprendre à manipuler des tableaux en TypeScript. Les tableaux sont essentiels pour gérer des collections d'éléments, et vous allez vous familiariser avec les méthodes pour filtrer les éléments d'un tableau.

### Instructions

1. **Créez une fonction `getActiveUsers`** :
   - La fonction doit prendre un argument de type `User[]` (un tableau d'objets `User`).
   - Elle doit retourner un nouveau tableau contenant uniquement les utilisateurs dont l'adresse email contient le mot `"active"`.

2. **Déclarez une interface `User`** :
   - Si vous ne l'avez pas déjà fait dans un exercice précédent, déclarez une interface `User` avec les propriétés suivantes :
     - `id` : `number`
     - `name` : `string`
     - `email` : `string`

3. **Exemple d'utilisation** :
   - Si vous appelez la fonction avec un tableau comme :
     ```typescript
     [
       { id: 1, name: "Alice", email: "alice@active.com" },
       { id: 2, name: "Bob", email: "bob@example.com" },
       { id: 3, name: "Charlie", email: "charlie@active.com" }
     ]
     ```
   - La fonction doit retourner un tableau contenant les objets `User` pour Alice et Charlie, car leurs emails contiennent `"active"`.

4. **Implémentation** :
   - Écrivez la fonction dans `userService.ts` et utilisez `console.log` pour afficher le résultat dans la console.

### Explications

- **Tableaux** : Les tableaux sont une structure de données qui vous permet de stocker plusieurs valeurs dans une seule variable. Ils sont utilisés pour gérer des collections d'éléments similaires.
- **Méthode `filter`** : La méthode `filter` permet de créer un nouveau tableau avec les éléments qui remplissent une certaine condition. Dans cet exercice, elle est utilisée pour ne conserver que les utilisateurs "actifs".

### Résultat Attendu

Le résultat attendu est une fonction qui, lorsqu'elle est appelée avec un tableau d'utilisateurs, retourne un nouveau tableau ne contenant que les utilisateurs dont l'adresse email contient `"active"`.
