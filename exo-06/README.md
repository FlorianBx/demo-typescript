# Exercice 06 : Modules et Organisation du Code

### Objectif

Dans cet exercice, vous allez apprendre à organiser votre code en modules. Les modules vous permettent de diviser votre code en plusieurs fichiers, chacun avec une responsabilité claire. Vous allez créer un service qui simule la récupération de données utilisateurs ou qui utilise une API réelle, puis l'importer dans un autre fichier pour l'utiliser.

### Instructions

1. **Créez un fichier `userService.ts`** :
   - Dans ce fichier, exportez une fonction `getUsers` qui récupère une liste d'utilisateurs.
   - Vous avez deux options pour implémenter cette fonction :
     1. **Simuler une API avec `setTimeout`** : Faites en sorte que la fonction retourne une promesse résolue avec un tableau d'objets `User` après un délai d'une seconde.
     2. **Utiliser une API réelle (`jsonplaceholder`)** : Faites en sorte que la fonction effectue un appel réseau à l'API [jsonplaceholder](https://jsonplaceholder.typicode.com/users) pour récupérer les utilisateurs.

   - Exemple de l'option 1 (simuler une API) :
     ```typescript
     export async function getUsers(): Promise<User[]> {
       return new Promise((resolve) => {
         setTimeout(() => {
           resolve([
             { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
             { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
           ]);
         }, 1000);
       });
     }
     ```

   - Exemple de l'option 2 (utiliser `jsonplaceholder`) :
     ```typescript
     export async function getUsers(): Promise<User[]> {
       const response = await fetch("https://jsonplaceholder.typicode.com/users");
       const users = await response.json();
       return users;
     }
     ```

2. **Déclarez une interface `User`** :
   - Si ce n'est pas déjà fait, déclarez une interface `User` avec les propriétés suivantes :
     - `id` : `number`
     - `name` : `string`
     - `email` : `string`

3. **Créez un fichier `app.ts`** :
   - Dans ce fichier, importez la fonction `getUsers` depuis `userService.ts`.
   - Appelez la fonction `getUsers`, attendez que la promesse soit résolue, et affichez la liste des utilisateurs dans la console.

4. **Exemple d'utilisation** :
   - `userService.ts` doit contenir la logique pour simuler une API ou appeler une API réelle pour récupérer une liste d'utilisateurs.
   - `app.ts` doit utiliser cette logique pour obtenir les utilisateurs et les afficher.

5. **Implémentation** :
   - Organisez votre code en créant `userService.ts` pour gérer la logique de récupération des utilisateurs et `app.ts` pour exécuter et afficher les résultats. Utilisez `console.log` pour vérifier que les données sont correctement récupérées.

### Explications

- **Modules** : Les modules sont un moyen de diviser votre code en plusieurs fichiers, chacun ayant une responsabilité claire. Cela facilite la maintenance et la réutilisation du code.
- **Simulation d'API** : `setTimeout` est utilisé pour simuler le délai d'une API réelle. Cela vous permet de tester la logique asynchrone sans dépendre d'une vraie API.
- **Utilisation d'une API Réelle** : L'utilisation de l'API [jsonplaceholder](https://jsonplaceholder.typicode.com/users) vous permet de travailler avec des données réelles et de vous familiariser avec les appels réseau.

### Résultat Attendu

Le résultat attendu est une fonction `getUsers` qui récupère une liste d'utilisateurs, soit en simulant une API avec `setTimeout`, soit en utilisant l'API réelle `jsonplaceholder`. Cette fonction est ensuite utilisée dans `app.ts` pour afficher les utilisateurs dans la console.
