# Changelog

Toutes les modifications notables de **Pechadophin** (anciennement Canne & Dauphins) (`pechadofin.html`).

## [V0.3.5] - 2026-10-16

### Ajouté
- **Boss secret n°6** : dans les marécages, toucher 6 fois une plateforme posée sur un pilier plonge l'écran dans le noir et téléporte dans une zone secrète d'un écran (fond noir, sol en liseré blanc, chiffres aléatoires qui défilent en dessous, impossible d'en sortir).
  - Le boss est un grand 6 blanc ailé qui flotte et lance des tridents lents et des salves de chiffres. 800 PV, enragé à 50 %.
  - Récompense : la nouvelle arme **Numéro 6**, 300 or et 3 âmes rouges (première victoire), puis retour à l'endroit d'où on est parti.
- **Arme Numéro 6** : un jet continu de chiffres qui retombent en arc, comme le lait de la vache.
- **Checkpoint des marécages** (mode Classique).
- **Améliorations des dagues** : dégâts, longueur du dash, hauteur de saut (jusqu'à x2) et parade (25 à 60 % de chance).
- **Classement TOP 10** du mode Anarchie, avec un pseudo choisi à la connexion Google, et bouton pour enregistrer son score quand on bat son record.
- **Taille des joysticks** réglable dans les réglages.

### Modifié
- Les armes se changent uniquement dans le menu ARMES, ou chez le marchand pendant une partie (nouveau bouton marchand).
- Menus plus fluides.
- Tridents multiples supprimés et plus de blocage d'arme par zone.
- Dash des dagues : 1 s de recharge après l'atterrissage, portée maximale réduite.
- Piliers des marécages plus larges, uniquement sous les plateformes au-dessus d'un sol plat.
- Remise à zéro de tous les meilleurs scores.

## [V0.3.1] - 2026-10-15

### Ajouté
- **Les marécages** : nouvelle zone juste après l'arène du château de sable (mode Classique), aussi tirée au hasard en mode Anarchie.
  - Herbe et terre sombres, ciel et eau verdâtres, petites flaques et mini tours de château en ruine.
  - Les plateformes sont des sommets de tours en pierre.
  - Nouveaux ennemis : mini zombies qui sautillent et mini vaches qui roulent sur le joueur (les dauphins bleus et volants restent).
- **Vache géante** : boss des marécages, 600 PV, qui attend sur un grand pré plat avec deux plateformes volantes.
  - Elle se met en boule et roule sur le joueur, ou crache un jet de lait en arc qui s'arrête en touchant le sol.
  - Enragée à 50 % de PV. Récompense : 150 or et 2 âmes rouges (première victoire seulement). Nouvelle mission associée.
- **Coffres** : des coffres marron apparaissent au hasard et donnent de l'or.
- **Coffre rouge** : uniquement dans les marécages, il contient une nouvelle arme, les **dagues**.
- **Dagues** : chaque attaque est un dash qui blesse tout sur sa trajectoire. Avec les dagues, on se déplace plus vite et on saute un peu plus haut.
- **Menu ARMES** (menu principal) : une case par arme ; cliquer sur une arme ouvre sa fiche en grand avec ses améliorations et le bouton pour l'équiper.
- **Sauvegarde cloud** : avec la connexion Google, la progression est sauvegardée dans un fichier caché du Google Drive du joueur et récupérée sur un autre appareil.
- **Tir automatique** : en maintenant le joystick de visée 1 seconde, le jeu tire tout seul.
- **Collab RNG∞** : skin RNG∞ à débloquer en ayant un compte RNG∞ avec le même compte Google (bouton DÉBLOQUER dans la boutique), tirage de chiffres au-dessus du pêcheur à chaque dauphin, et les suites 13, 67 et 69 rapportent autant d'or. Lien vers RNG∞ dans les réglages.

### Modifié
- **Perles supprimées** : les perles déjà gagnées sont converties en or (1 perle = 50 or).
- **Skins** : ils s'achètent maintenant en or (le moins cher coûte 100 or).
- **Page de confidentialité** mise à jour (sauvegarde cloud et collab RNG∞).

## [V0.2.12] - 2026-10-15

### Ajouté
- **Nouveau nom** : le jeu s'appelle désormais **Pechadophin**.
- **Français / Anglais** : bouton drapeau en haut du menu (il affiche le drapeau de la langue vers laquelle on bascule). Tout le jeu est traduit et le choix est mémorisé.
- **Connexion Google** : bouton compte dans le menu pour se connecter avec son compte Google (nom et photo affichés). Rien n'est envoyé à un serveur : la session reste dans le navigateur.
- **Page de confidentialité** (`privacy.html`).

### Modifié
- **Château de sable** : le seau doit être touché 2 fois (peu importe les dégâts) pour s'activer et blesser le château.
- **Mode Classique** : la méduse apparaît 26 écrans après le début du sable (ou du checkpoint), le château de sable 22 écrans après la méduse.
- **Mode Anarchie** : la partie commence toujours dans les plaines ; après chaque boss d'arène, la zone suivante est tirée au hasard parmi toutes les zones (plaines, plage), et le boss d'arène dépend de la zone (poulpe dans les plaines, château de sable sur la plage).

## [V0.2.11] - 2026-10-13

### Ajouté
- **Nouveau menu principal** : disposition inspirée des jeux de course sans fin, reprise pour le menu principal, le menu pause et l'écran de mort.
  - Gros bouton de lancement au centre avec le pêcheur, MISSIONS et réglages (⚙) en haut, bouton MODE à gauche et BOUTIQUE à droite.
  - Les commandes sont maintenant dans les réglages.
- **Choix du mode** (bouton MODE) : deux boutons, **Classique** (l'aventure habituelle) et **Anarchie**. Le choix est sauvegardé.
- **Mode Anarchie** :
  - Les boss reviennent sans fin selon leur distance et leur zone, avec des PV qui montent à chaque rencontre dans la même partie.
  - Les ennemis deviennent de plus en plus nombreux, rapides et résistants, sans plafond, et la canne à pêche reste utilisable partout.
  - La zone change à chaque rencontre avec le poulpe : plage et herbe en alternance, avec décor, cocotiers, tunnels et ennemis adaptés.
  - Le ciel change à chaque rencontre avec le requin : jour, nuit rouge, crépuscule, nuit bleue, aube, puis le cycle recommence.
  - Impossible de revenir en arrière dans la zone précédente : seul le château de sable permet de retourner dans la première zone.
- **Château de sable** : nouveau boss de la plage, 500 PV.
  - Arène en sable au milieu de la plage, avec le château dessiné en arrière-plan (ses yeux suivent le joueur).
  - Il ne prend pas de dégâts directement : il faut viser le seau d'eau, qui change de place à chaque coup.
  - Il attaque avec des vagues de sable annoncées par un avertissement, et fait apparaître quelques mouettes.
  - Enragé à 50 % de PV : vagues plus rapides et plus nombreuses.
  - Récompense : 2 âmes rouges (première victoire seulement) et 120 or. Nouvelle mission associée.
- **Mouette** : ennemi de la plage, elle plane en altitude, se cabre puis fond en piqué sur le joueur avant de remonter. 2 PV de base, rapporte 5 or.
- **Cocotiers-plateformes** : la couronne de feuilles des cocotiers de la plage sert de plateforme traversable par le dessous.
- **Second joystick** (tablette) : il contrôle la caméra et la visée, avec une aide à la visée vers la cible la plus proche.
- **Marchands en cours de partie** : un marchand à côté de son tuk-tuk tous les 18 écrans, pour améliorer l'arme équipée sans toucher au score.

### Modifié
- **Méduse** : 420 PV (au lieu de 300) et déplacement 1,15 fois plus rapide.
- **Vers de sable** : sprite simplifié.
- **Boutique** : l'onglet « ÂMES » devient « ARMES ».
- **Menu pause** : le bouton « Boutique » devient « Retour au menu principal » et le bouton « Recommencer » disparaît.
- **Mode Classique** : le poulpe et le château de sable ne se déclenchent qu'une seule fois par partie (quel que soit le côté), et le requin reste dans la zone d'herbe.

## Versions précédentes (jusqu'au 2026-10-12)

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
