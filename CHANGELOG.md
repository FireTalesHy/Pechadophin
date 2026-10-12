# Changelog

Toutes les modifications notables de **Canne & Dauphins** (`pechadofin.html`).

## [Non publié] - 2026-10-12

### Modifié
- **Canne à pêche (nerf)** : l'amélioration « Grappins tirés » devient « Zone de dégâts ».
  - Les grappins gardent leur apparence (éventail), mais ne font plus de dégâts individuellement.
  - Un point central invisible détecte le contact et déclenche une zone de dégâts invisible autour de l'impact.
  - Dégâts pleins au centre, réduits progressivement jusqu'à -50 % au bord de la zone (minimum 1 dégât).
  - Rayon de la zone : de 0,3 case (niveau 1, comportement identique à avant) à environ 2 cases (niveau 6).
  - Tous les grappins reviennent ensemble dès que la zone se déclenche.
  - Textes de la boutique mis à jour (nom, valeurs affichées, notes).
- **Démon requin** : les boules de feu sont remplacées par un laser.
  - Durée de 2 s, le requin reste immobile pendant le tir (il peut toujours être touché).
  - Épaisseur du faisceau égale à la largeur du requin, longueur égale à celle de l'écran, il traverse le décor.
  - Télégraphe : une ligne suit le joueur pendant la charge (0,8 s), puis la visée se verrouille 0,3 s avant le tir avec la zone affichée en rouge clignotant.
  - Nouveau son de laser et léger tremblement d'écran au tir.
- **Démon requin** : il n'apparaît plus qu'une seule fois par partie.

### Ajouté
- **Dauphin tireur** (rouge-orange) : lent, il charge puis crache les boules de feu que le requin lançait auparavant (vitesse réduite).
  - Apparaît à la place d'environ 30 % des dauphins bleus au sol, 2 PV de base (plus avec la distance), rapporte 4 or.
- **Nuit rouge sang** : à l'apparition du requin, le ciel devient rouge sang (transition progressive) avec une teinte rouge sur le monde.
  - Tous les dauphins sont 1,15 fois plus rapides jusqu'à l'arène du poulpe, qui met fin à la nuit.
- **Menu pause** : copie du menu principal avec les boutons Reprendre, Boutique et Recommencer.
  - Touche Échap ou P, ou nouveau bouton ⏸ à côté du bouton son.
  - Pause automatique quand l'onglet n'est plus visible.
  - Le jeu est figé pendant la pause et les entrées mémorisées sont réinitialisées à la reprise.
- **Crédits** affichés en petit sur le menu principal, le menu pause et l'écran de mort :
  - dev : L'taleshy et cocobat
  - testeurs : moustik, ofodile et wyzan
