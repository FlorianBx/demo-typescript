# Exercice 01 : Interfaces et Types

#### Objectif

Dans cet exercice, vous allez apprendre à utiliser les interfaces en TypeScript. Les interfaces sont un moyen de définir la forme d'un objet, ce qui est particulièrement utile pour s'assurer que les objets que vous manipulez respectent un certain contrat.

#### Instructions

1. **Déclarez une interface `User`** :
   - L'interface doit inclure les propriétés suivantes :
     - `id` : de type `number`, représentant l'identifiant unique de l'utilisateur.
     - `name` : de type `string`, représentant le nom de l'utilisateur.
     - `email` : de type `string`, représentant l'adresse email de l'utilisateur.

2. **Créez une fonction `getUserInfo`** :
   - La fonction doit prendre un argument de type `User`.
   - La fonction doit retourner une chaîne de caractères au format suivant : `"User [name] has the email [email]"`.

3. **Exemple d'utilisation** :
   - Si vous appelez la fonction avec un objet `User` comme `{ id: 1, name: "Bob", email: "bob@example.com" }`, elle doit retourner `"User Bob has the email bob@example.com"`.

4. **Implémentation** :
   - Déclarez l'interface et la fonction dans un fichier `userService.ts` et utilisez `console.log` pour afficher le résultat dans la console.

#### Explications

- **Interfaces** : Une interface en TypeScript est utilisée pour définir la forme d'un objet. Elle impose une structure, ce qui permet de vérifier que les objets utilisés dans votre code respectent cette structure.
- **Types d'Objets** : En utilisant des interfaces, vous pouvez créer des objets qui respectent des types stricts, ce qui aide à prévenir des erreurs lors de l'utilisation des propriétés de ces objets.

#### Résultat Attendu

Le résultat attendu est une fonction qui, lorsqu'elle est appelée avec un objet utilisateur respectant l'interface `User`, retourne une chaîne de caractères indiquant le nom et l'email de l'utilisateur.
