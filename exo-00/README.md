# Exercice 00 : Types Primitifs et Fonctions

#### Objectif

Dans cet exercice, vous allez apprendre à manipuler les types primitifs en TypeScript et à écrire des fonctions simples qui utilisent ces types. Cet exercice est conçu pour vous familiariser avec les bases de TypeScript, en particulier les types `string` et `number`.

#### Instructions

1. **Créez une fonction `getUserGreeting`** :
   - La fonction doit prendre deux arguments :
     - `firstName` : de type `string`, représentant le prénom de l'utilisateur.
     - `age` : de type `number`, représentant l'âge de l'utilisateur.
   - La fonction doit retourner une chaîne de caractères au format suivant : `"Hello [firstName], you are [age] years old."`.

2. **Exemple d'utilisation** :
   - Si vous appelez la fonction avec `getUserGreeting("Alice", 30)`, elle doit retourner `"Hello Alice, you are 30 years old."`.

3. **Implémentation** :
   - Écrivez la fonction dans un fichier `app.ts` et utilisez `console.log` pour afficher le résultat dans la console.

#### Explications

- **Types Primitifs** : En TypeScript, les types `string` et `number` sont des types primitifs. Ils représentent des valeurs textuelles et numériques, respectivement.
- **Fonctions** : Une fonction en TypeScript est une manière de regrouper du code pour qu'il puisse être réutilisé. Ici, la fonction prend des arguments, effectue une opération (concaténation de chaîne), et retourne un résultat.

#### Résultat Attendu

Le résultat attendu doit être une fonction qui, lorsque appelée avec un prénom et un âge, retourne une chaîne de caractères personnalisée comme indiqué ci-dessus.
