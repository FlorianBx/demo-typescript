# Exercice 05 : Classes, Héritage et Polymorphisme

### Objectif

Dans cet exercice, vous allez explorer l'héritage et le polymorphisme en TypeScript. L'héritage permet de créer une nouvelle classe qui réutilise les fonctionnalités d'une classe existante, tandis que le polymorphisme permet à une méthode d'avoir différentes implémentations en fonction de la classe qui l'utilise.

### Instructions

1. **Créez une classe `Employee`** :
   - La classe doit avoir les propriétés suivantes :
     - `id` : de type `number`, représentant l'identifiant unique de l'employé.
     - `name` : de type `string`, représentant le nom de l'employé.
     - `salary` : de type `number`, représentant le salaire mensuel de l'employé.
   - Ajoutez un constructeur pour initialiser ces propriétés.

2. **Ajoutez une méthode `getAnnualSalary`** :
   - Cette méthode doit retourner le salaire annuel de l'employé en multipliant le salaire mensuel par 12.

3. **Créez une classe `Manager` qui hérite de `Employee`** :
   - La classe `Manager` doit avoir une propriété supplémentaire :
     - `bonus` : de type `number`, représentant le bonus annuel du manager.
   - Le constructeur de `Manager` doit appeler le constructeur de `Employee` avec `super()` et initialiser la propriété `bonus`.

4. **Redéfinissez la méthode `getAnnualSalary` dans `Manager`** :
   - La méthode doit retourner le salaire annuel du manager en ajoutant le bonus au salaire annuel.

5. **Exemple d'utilisation** :
   - Créez une instance de `Manager` avec `{ id: 1, name: "Alice", salary: 5000, bonus: 10000 }`.
   - Appelez la méthode `getAnnualSalary` et affichez le résultat dans la console. Le salaire annuel devrait être `70000`.

6. **Implémentation** :
   - Écrivez les classes `Employee` et `Manager` dans un fichier `employee.ts` et testez-les dans `app.ts` en affichant les résultats avec `console.log`.

### Explications

- **Héritage** : L'héritage permet à une classe de dériver d'une autre classe, réutilisant ainsi le code existant et permettant l'extension de ses fonctionnalités.
- **Polymorphisme** : Le polymorphisme permet à une méthode d'avoir plusieurs formes, en fonction de la classe qui l'utilise. Dans cet exercice, la méthode `getAnnualSalary` est redéfinie dans `Manager` pour ajouter le bonus au calcul du salaire annuel.

### Résultat Attendu

Le résultat attendu est une classe `Manager` qui hérite de `Employee` et redéfinit la méthode `getAnnualSalary` pour inclure un bonus, démontrant ainsi l'utilisation de l'héritage et du polymorphisme.
