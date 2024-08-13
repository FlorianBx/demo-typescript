# Exercice 04 : Promesses et Gestion Asynchrone

### Objectif

Dans cet exercice, vous allez apprendre à travailler avec les promesses en TypeScript. Les promesses sont essentielles pour gérer les opérations asynchrones, comme les appels API. Vous allez simuler un appel API en utilisant `setTimeout` pour retarder la résolution d'une promesse.

### Instructions

1. **Créez une fonction `fetchUserData`** :
   - La fonction doit retourner une promesse qui se résout avec un objet `User` après un délai de 2 secondes.
   - Utilisez `setTimeout` pour simuler ce délai.

2. **Déclarez une interface `User`** :
   - Si vous ne l'avez pas déjà fait, déclarez une interface `User` avec les propriétés suivantes :
     - `id` : `number`
     - `name` : `string`
     - `email` : `string`

3. **Simulez une API** :
   - La fonction `fetchUserData` doit simuler un appel à une API en renvoyant un objet `User` après 2 secondes.
   - Par exemple, l'objet retourné pourrait ressembler à `{ id: 1, name: "Alice", email: "alice@example.com" }`.

4. **Exemple d'utilisation** :
   - Appelez `fetchUserData` et utilisez `.then()` pour récupérer l'utilisateur et afficher ses informations dans la console.

5. **Implémentation** :
   - Écrivez la fonction `fetchUserData` dans un fichier `userService.ts` et testez-la dans `app.ts` en affichant les résultats avec `console.log`.

### Explications

- **Promesses** : Une promesse est un objet représentant l'éventuel résultat d'une opération asynchrone. Elle peut être résolue (opération réussie) ou rejetée (opération échouée).
- **`setTimeout`** : `setTimeout` est utilisé ici pour simuler un délai dans l'exécution d'une opération, ce qui est souvent le cas avec les appels réseau.

### Résultat Attendu

Le résultat attendu est une fonction `fetchUserData` qui retourne une promesse résolue avec un objet `User` après un délai de 2 secondes.
