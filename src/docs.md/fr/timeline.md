# Qu'est-ce qu'une timeline ?

Une timeline vous permet de gérer la succession d'images, de sons et/ou de vidéos qui forment votre animation, sous la forme d'une ligne de temps.

Pour ouvrir la timeline d'une animation, cliquez droit sur l'animation => [éditer l'action] => [ouvrir timeline].

   ![presentation timeline](/assets/images/docs/timeline_overview.png)

## fichiers

Pour ajouter des fichiers (audio, video, etc), cliquez sur le bouton d'upload.


   ![details d'un fichier](/assets/images/docs/timeline_file_details.png)


En cliquant sur un fichier dans la timeline, vous pouvez visualiser ses propriétés dans le panneau latéral droit :

**info** permet de connaitre les propriétés de base du fichier (par exemple sa largeur et sa hauteur pour une image).

**styles** et **transformations**  permettent d'appliquer des transformations globables au fichier. Celles ci seront valables peu importe les transformations ultérieures apportées par les clés. Par défaut, quelques styles et transformations sont intégrés et peuvent être modifiés, comme la position ou l'opacité. Vous pouvez également en ajouter en parcourant le sélecteur de choix et en cliquant sur [+].

// screenshot panneau latéral droit

### videos / Images

> Pour un affichage cohérent entre Marv et OBS, il faut mettre l'animation aux même dimensions que l'overlay marv dans obs (cf screenshot ci dessous).

   ![dimensions](/assets/images/docs/timeline-dimensions.png)

### Audio

> Pour régler le volume sonore, cliquez sur le fichier puis sur Attributs et changez la valeur du champ Volume.


# Clés

Les clés permettent d'ajouter des effets à un fichier. Par exemple, faire tourner une image sur elle-même pendant 5 secondes.


Par défaut, il y a toujours une première clé à l'ajout d'un fichier. 


> :warning: **S'il n'y aucune clé, l'animation ne s'affichera pas.**


// screenshot anatomie d'une clé (nommer les parties d'une clé)


Pour **ajouter** une clé, double cliquez gauche dans la timeline. Pour la **supprimer**, faites un double clique droit sur la poignée. Une clé sélectionnée apparait en jaune. La largeur d'une clé détermine sa durée. Vous pouvez modifier la durée en faisant glisser la poignée vers la gauche ou la droite.


## Combinaisons de clés

Vous pouvez combiner des clés pour combiner des effets dans le temps.


Par exemple, pour créer un effet de déplacement puis de rotation, vous pourriez créer une clé avec un effet de déplacement, d'une durée de 5 secondes, puis une deuxième clé de 5 secondes, à la suite, avec un effet de rotation. L'effet obtenu sera un déplacement pendant 5 secondes, puis une rotation, pendant 5 secondes.



Vous pouvez aussi combiner des effets au sein d'une même clé, par exemple déplacer ET tourner un objet pendant 10 secondes en ajoutant deux effets de transformations dans la même clé.
