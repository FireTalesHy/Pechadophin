```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=https://firetaleshy.github.io/Pechadophin/">
    <title>Pechadophin</title>
</head>
<body>
    <p>Redirection vers <a href="https://firetaleshy.github.io/Pechadophin/">Pechadophin</a>...</p>
</body>
</html>
```
# Canne & Dauphins

Jeu de plateforme 2D en pixel art, en un seul fichier HTML (aucune dépendance à installer).
Tu incarnes un pêcheur qui affronte des dauphins dans un monde infini généré au hasard.

## Jouer

- En ligne avec GitHub Pages : *Settings → Pages → Deploy from a branch → `main` / `(root)`*.
- En local : ouvre `index.html` dans un navigateur.

## Commandes

| Action | PC | Tablette / téléphone |
|---|---|---|
| Se déplacer | Q / D ou ← / → | joystick |
| Sauter | Z, ↑ ou Espace | bouton SAUT |
| Viser | curseur de la souris | joystick |
| Pêcher / tirer | clic gauche (maintenu = tir continu) | bouton PÊCHE |

## Contenu

- Monde infini généré procéduralement (collines, trous d'eau, plateformes en hauteur).
- Score avec combos (x1 à x10, le combo s'arrête après 10 s sans toucher d'ennemi), 3 vies et un cœur de soin tous les 15 dauphins vaincus.
- Boutique depuis l'écran de mort : skins, améliorations de la canne, points de vie, trident infernal.
- Trois monnaies : perles (ramassées sur la carte), or (dauphins) et âmes rouges (boss).
- Boss : le Démon requin et le Poulpe géant (dans une arène fermée).
- Le meilleur score, les monnaies et les achats sont enregistrés dans le navigateur (`localStorage`).


## Remarque

La police « Press Start 2P » est chargée depuis Google Fonts ; sans connexion, le jeu utilise une police monospace de secours.
