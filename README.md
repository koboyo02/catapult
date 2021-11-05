# Catapult

## Contexte

Catapult est une api qui permet à une personne de crée un compte pour rechercher des missions d'intérim.

## Installation de base

Il faut commencer par installer tout les prérequis comment node, npm pour il vous suffit de lancer le fichier install_node.sh avec la commande ```./install_node.sh``` 

## Contenu du Back

Le dossier back est un projet NodeJs qui possède un fichier index.js qui est la base du projet où le serveur est lancé.

### Models 

Dans le dossier Models il y a 2 models un pour les User et l'autre pour les Missions ces models contient un schéma avec ``new Schema`` puis mis dans un model avec ``mongoose.model`` et le model est exporté ``module.exports = { Name_Models }`` pour permettre au Controller de les utiliser.

Schéma et moogose sont des variables qui utilise ``require('mongoose')``.

### Controller

Dans les Controllers ont fais appel au model qui leurs correspond.

Le MissionController.js possède un CRUD (Create, Read, Update et Delete) et UserController.js possède aussi un CRUD mais avec un Login, un Register et le matching.

### Route

Dans les routes il y a 4 types de requête utiliser ``GET, POST, PUT, DELETE`` chaque route représente une fonction dans les Controllers.

La méthode de création de route est assez simple on fais appel à ``const router = express.Router();`` puis ``router.méthode_requeste('/url', Controller.fonction_Controller)``

## Lancement du projet

Quand vous avait récupéré le projet aller dans le dossier back et lancer un ``npm i`` pour télécharger toute les dépendances et enfin lancer le projet avec ``npm start`` et les messages ``Server 5500
Mongoose Is Connected`` doit être afficher sur votre console pour savoir que tout est bon sinon l'erreur sera écrite sur la console.
