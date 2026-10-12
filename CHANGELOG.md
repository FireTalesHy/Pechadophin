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
- **Démon requin** : il n'apparaît plus qu'une seule fois par partie, et tire un peu plus vite qu'avant.
- **Poulpe géant** : il n'y a plus qu'une seule arène par côté (celle avant la plage) ; plus d'arène ni de poulpe dans la plage.
- **Canne à pêche** : ses améliorations sont bloquées dès que la plage est atteinte. Les niveaux sont conservés, mais la canne devient indisponible (le trident la remplace).
- **Trident** : il ne s'achète plus, il est débloqué automatiquement à l'arrivée sur la plage. Toutes ses améliorations coûtent de l'or.
- **Âmes rouges** : chaque boss (requin, poulpe, méduse) n'en donne que la première fois qu'il est vaincu ; ensuite il ne donne plus que de l'or.

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
- **Zone Plage** : nouvelle zone à la sortie de l'arène du poulpe, des deux côtés du départ.
  - Direction artistique sable : ciel, sol, palmiers, transition progressive depuis l'herbe, et sable en niveaux progressifs comme l'herbe du début.
  - Plus de plateformes : la verticalité passe par des tunnels de sable (descente en pente, galerie, remontée, cheminées avec rebords).
  - Plus de dauphins volants (roses) ni bleus : seuls les dauphins tireurs rouges restent en surface.
  - Aide de montée sur les marches d'une case pour parcourir les tunnels plus facilement.
- **Vers de sable** : ennemis qui vivent dans les tunnels de la plage.
- **Checkpoint de la plage** : atteindre la plage enregistre la progression ; les parties suivantes démarrent sur la plage (arène du poulpe considérée comme vaincue).
  - Bouton « RÉINITIALISER LA SAVE » avec double confirmation pour tout effacer (boutique, meilleur score, checkpoint).
- **Tridents multiples** : amélioration du trident (jusqu'à 4 tridents lancés autour du joueur), débloquée en tuant 10 vers de la plage (compteur affiché). Chaque niveau coûte de l'or (60, 140, 260).
- **Méduse** : boss volant de la plage, 300 PV, une seule fois par partie, à environ 37 écrans de l'entrée de la plage.
  - Se balade au-dessus du joueur et le rattrape s'il s'éloigne.
  - Lasers blancs : charge de 0,85 s avec visée qui se verrouille 0,3 s avant le tir, puis 3 faisceaux en éventail pendant 1,1 s qui balaient lentement.
  - 4 tentacules qui tournent en permanence autour d'elle et blessent au contact.
  - Récompense : 2 âmes rouges et 80 or.
- **10 nouveaux skins** : zombie, plombier, cuisinier, viking, robot, clown, fantôme, pharaon, costume de dino et roi (de 3 à 60 perles).
