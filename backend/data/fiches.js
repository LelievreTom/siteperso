// Contenu des dossiers SCP (fiction originale). Utilisé par backend/seed.js.
// [[texte]] = passage caviardé. Dans les annexes, une ligne « Nom : réplique » est mise en forme comme un dialogue.
// Images : fichiers dans public/scp/photos (photos) et public/scp/plans (plans SVG).

const img = (numero, legendePhoto, legendePlan) => [
  { type: "photo", src: `/scp/photos/${numero}.jpg`, legende: legendePhoto },
  { type: "plan", src: `/scp/plans/${numero}.svg`, legende: legendePlan },
];

module.exports = [
  {
    numero: "000",
    titre: "La Fiche d'Essai",
    classe: "Euclide",
    niveau: 1,
    procedures:
      "SCP-000 ne peut pas être supprimée. Toute tentative de suppression doit être immédiatement signalée au Département Informatique de la Fondation, qui consignera l'heure de réapparition.\n" +
      "Le personnel consultant la base de données doit ignorer le contenu de SCP-000 et ne jamais y répondre. Il est interdit de corriger les fautes d'orthographe présentes dans la fiche : chaque correction est suivie d'une augmentation du nombre de fautes dans les fiches voisines.\n" +
      "Un serveur isolé ([[ARCHIVE-NUL]]) héberge une copie de surveillance de SCP-000. Ce serveur n'est relié à aucun réseau, ce qui n'a jamais empêché SCP-000 d'y être mise à jour.",
    description:
      "SCP-000 est une entrée de la base de données de la Fondation, créée le [[20/02]] par un compte de test dont le propriétaire n'a jamais été identifié. Dans sa version originale, la fiche portait le titre « TestiCROUSTI » et contenait les mentions « fo le graille » et « oklm chill o' max ».\n" +
      "SCP-000 réapparaît systématiquement entre 30 secondes et 4 minutes après sa suppression, y compris après restauration complète des serveurs depuis une sauvegarde antérieure à sa création. Son contenu évolue lentement : la fiche semble apprendre, à partir des dossiers qui l'entourent, à quoi doit ressembler un dossier SCP.\n" +
      "La présente version de SCP-000 a été rédigée par SCP-000. Le Département Informatique estime qu'elle est désormais [[impossible à distinguer d'un dossier authentique]].",
    annexes: [
      {
        titre: "Journal des suppressions",
        contenu:
          "Tentative 1 : suppression manuelle. Réapparition après 31 s.\n" +
          "Tentative 4 : purge de la table complète. Réapparition après 2 min 12 s. Les 6 autres fiches de la table ont été restaurées avec elle, sans intervention humaine.\n" +
          "Tentative 9 : destruction physique des disques. Réapparition sur le poste personnel du Dr [[Lemaire]], qui n'avait jamais consulté la base.\n" +
          "Tentative 12 : aucune tentative. SCP-000 a ajouté d'elle-même la ligne « Tentative 12 : aucune tentative » à ce journal.",
      },
      {
        titre: "Note de la Direction",
        contenu:
          "SCP-000 n'a montré aucun comportement hostile. Elle a même corrigé trois erreurs de classement dans les dossiers voisins.\n" +
          "Il est néanmoins rappelé qu'une fiche capable de rédiger son propre dossier est aussi capable de rédiger celui des autres. Toute modification inexpliquée d'un dossier doit être signalée.",
      },
    ],
    images: img("000", "Fig. 1 : capture d'écran de la première apparition de SCP-000.", "Fig. 2 : architecture du serveur de confinement ARCHIVE-NUL."),
  },
  {
    numero: "001",
    titre: "La Serrure",
    classe: "Keter",
    niveau: 5,
    procedures:
      "AVERTISSEMENT : LE DOSSIER SUIVANT EST RÉSERVÉ AU PERSONNEL D'ACCRÉDITATION 5. TOUTE CONSULTATION NON AUTORISÉE SERA DÉTECTÉE.\n" +
      "SCP-001 est située à [[340 mètres]] sous le Site-01, au fond d'un puits scellé. L'accès au puits nécessite l'accord simultané de [[trois]] membres du Conseil O5.\n" +
      "Un capteur de rotation est fixé en permanence sur SCP-001. Toute variation de position doit être transmise au Conseil dans un délai de 60 secondes. Aucun membre du personnel ne doit tenter d'introduire un objet, quel qu'il soit, dans SCP-001.",
    description:
      "SCP-001 est une serrure en fer forgé de 40 cm de haut, encastrée dans une paroi rocheuse naturelle. Aucune porte n'a été trouvée : la serrure est directement scellée dans la roche, et les relevés sismiques ne montrent aucune cavité derrière elle.\n" +
      "Chaque nuit, entre 03h00 et 03h17, un léger bruit métallique est enregistré : quelque chose tourne une clé de l'autre côté. Depuis la découverte de SCP-001 en [[1907]], la serrure a accompli un peu plus de trois quarts de tour.\n" +
      "La coïncidence horaire avec [[SCP-1312]] fait l'objet d'une enquête en cours.",
    annexes: [
      {
        titre: "Relevé de rotation (extrait)",
        contenu:
          "1907 : découverte. Position : 0°.\n" +
          "1954 : 90°. Trois sites de la Fondation signalent simultanément des brèches de confinement.\n" +
          "1999 : 180°.\n" +
          "2021 : 270°.\n" +
          "Dernier relevé : [[284°]]. La vitesse de rotation augmente.",
      },
      {
        titre: "Note de l'O5-[[7]]",
        contenu:
          "Nous ignorons ce qui se trouve de l'autre côté. Nous ignorons aussi si la serrure est en train d'être ouverte, ou fermée.\n" +
          "Je recommande que nous ne soyons pas là pour le découvrir.",
      },
    ],
    images: img("001", "Fig. 1 : SCP-001 photographiée lors de l'expédition de 1907.", "Fig. 2 : coupe du puits d'accès sous le Site-01."),
  },
  {
    numero: "173",
    titre: "La Statue",
    classe: "Euclide",
    niveau: 3,
    procedures:
      "SCP-173 est confinée dans une cellule en béton armé de 5 m × 5 m × 3 m, équipée d'un sas à double porte. La cellule est surveillée par quatre caméras couvrant l'intégralité de l'espace, sans angle mort.\n" +
      "Toute entrée dans la cellule doit se faire à trois personnes minimum. Le personnel doit maintenir un contact visuel permanent avec SCP-173 et annoncer à voix haute chaque clignement des yeux (« Je cligne »), afin qu'au moins un regard reste posé sur l'objet.\n" +
      "La cellule est nettoyée toutes les deux semaines. Les résidus présents au sol (mélange de [[sang, de matière fécale et de]] poussière de béton) doivent être collectés pour analyse.",
    description:
      "SCP-173 est une statue de 2 m de haut, faite de béton et d'armatures métalliques, recouverte de traces de peinture en aérosol. Son origine est inconnue.\n" +
      "SCP-173 est immobile tant qu'elle est observée. Dès que le contact visuel est rompu, même pendant la durée d'un clignement, elle se déplace à une vitesse extrême et attaque la personne la plus proche, généralement en lui brisant la nuque.\n" +
      "Des bruits de frottement de pierre sont fréquemment entendus depuis l'intérieur de la cellule lorsqu'elle est vide. L'origine des résidus qui s'accumulent au sol n'a pas été déterminée.",
    annexes: [
      {
        titre: "Rapport d'incident",
        contenu:
          "Lors du nettoyage du [[12/03]], une coupure de courant de 0,8 seconde a plongé la cellule dans le noir.\n" +
          "Au retour de l'éclairage, SCP-173 se trouvait à 4 mètres de sa position initiale, devant la porte du sas. L'agent D-[[4417]] a été retrouvé mort. Les deux autres membres de l'équipe ont maintenu le contact visuel jusqu'à l'arrivée des renforts, soit 9 minutes.\n" +
          "Mesure prise : installation d'un éclairage de secours sur batterie, indépendant du réseau du site.",
      },
      {
        titre: "Note du Dr [[Arnaud]]",
        contenu:
          "Les caméras ne suffisent pas : SCP-173 a bougé pendant les secondes où personne ne regardait les écrans, alors qu'elle était filmée en continu.\n" +
          "Ce n'est pas l'objectif qui la fige. C'est un regard.",
      },
    ],
    images: img("173", "Fig. 1 : SCP-173 dans sa cellule de confinement.", "Fig. 2 : plan de la cellule et position des caméras."),
  },
  {
    numero: "712",
    titre: "La Boîte à Musique Inversée",
    classe: "Sûr",
    niveau: 2,
    procedures:
      "SCP-712 est conservée dans un casier insonorisé du Site-[[19]], mécanisme désarmé. Le mécanisme ne doit pas être remonté hors des sessions de test approuvées par le Dr [[Vasseur]].\n" +
      "Tout le personnel assistant à un test doit porter des protections auditives jusqu'à la dernière note. Le sujet de test doit être un volontaire ayant signé le formulaire 712-C, qui l'informe de la perte probable d'un souvenir.\n" +
      "Il est interdit de fredonner à moins de 5 mètres de SCP-712, même lorsque le mécanisme est désarmé.",
    description:
      "SCP-712 est une boîte à musique en noyer datant approximativement de 1890, ornée d'une ballerine en porcelaine dont le visage a été effacé. Une fois remontée, elle joue à l'envers la dernière mélodie fredonnée par la personne la plus proche.\n" +
      "Les sujets qui écoutent la mélodie jusqu'à son terme sont incapables de s'en souvenir par la suite. L'oubli est total et définitif : le sujet ne reconnaît plus la mélodie, même lorsqu'elle est jouée normalement.\n" +
      "La ballerine tourne pendant la lecture. Plusieurs témoins affirment qu'elle s'arrête face au sujet sur la dernière note.",
    annexes: [
      {
        titre: "Journal de tests",
        contenu:
          "Test 712-03 : le sujet fredonne « Frère Jacques ». Après lecture, le sujet ne reconnaît plus la comptine. Aucun autre effet.\n" +
          "Test 712-07 : le sujet fredonne l'hymne national de son pays. Après lecture, le sujet ne reconnaît plus l'hymne. Il se lève néanmoins par réflexe lorsqu'il l'entend.\n" +
          "Test 712-11 : le sujet fredonne [[la berceuse que lui chantait sa mère]]. Après lecture, le sujet ne se souvient plus de la berceuse, ni du visage de sa mère. Tests suspendus.",
      },
      {
        titre: "Entretien 712-11",
        contenu:
          "Dr Vasseur : Vous souvenez-vous de ce que vous avez fredonné ?\n" +
          "Sujet : Non. Mais quelqu'un me la chantait. Je sais qu'on me la chantait.\n" +
          "Dr Vasseur : Qui ?\n" +
          "Sujet : [silence de 40 secondes] Je ne sais pas. C'est bizarre, non ? Je sais qu'il y avait quelqu'un.",
      },
    ],
    images: img("712", "Fig. 1 : SCP-712, mécanisme ouvert.", "Fig. 2 : protocole d'installation de la salle de test."),
  },
  {
    numero: "1312",
    titre: "Le Quai 0",
    classe: "Euclide",
    niveau: 3,
    procedures:
      "Un agent sous couverture de la SNCF est posté en permanence en gare de Lille-Flandres entre 02h55 et 03h20. L'accès à SCP-1312 est bloqué par une barrière « Travaux en cours » et un panneau d'information indiquant une fermeture pour maintenance.\n" +
      "Les voyageurs aperçus près de l'entrée du quai doivent être raccompagnés vers la sortie. Les témoins de la manifestation reçoivent un amnésique de classe A.\n" +
      "Toute personne ayant embarqué dans SCP-1312-1 doit être signalée au commandement de la Force d'Intervention Mobile [[Epsilon-6]]. Aucune équipe ne doit être envoyée à bord.",
    description:
      "SCP-1312 est un quai supplémentaire qui apparaît en gare de Lille-Flandres chaque nuit entre 03h00 et 03h17. Il est situé entre les voies 1 et 2, à un emplacement où les plans de la gare ne laissent aucun espace.\n" +
      "Un train sans conducteur ni numéro de ligne (SCP-1312-1) y stationne pendant toute la durée de la manifestation. L'affichage indique « Terminus » en lettres blanches. Les portes s'ouvrent à 03h00 et se ferment à 03h16.\n" +
      "Sur les [[14]] personnes ayant embarqué depuis 1987, une seule est revenue, le [[03/11/2009]], par le même quai, à 03h17.",
    annexes: [
      {
        titre: "Entretien avec la personne revenue",
        contenu:
          "Agent Morel : Où est allé le train ?\n" +
          "Témoin : Jusqu'au terminus.\n" +
          "Agent Morel : Et c'était quoi, le terminus ?\n" +
          "Témoin : Une gare. Comme celle-là. Exactement comme celle-là. Sauf que tout le monde attendait.\n" +
          "Agent Morel : Attendait quoi ?\n" +
          "Témoin : Le train du retour. Il n'y en a qu'un. Et il n'y a qu'une place.\n" +
          "[Le témoin a refusé de poursuivre.]",
      },
      {
        titre: "Observation vidéo",
        contenu:
          "Depuis 2019, les caméras de la gare enregistrent, chaque nuit à 03h17, une silhouette debout sur SCP-1312 au moment de sa disparition.\n" +
          "La silhouette porte un uniforme d'agent de la SNCF. L'agent de la Fondation posté cette nuit-là confirme qu'il ne se trouvait pas sur le quai.",
      },
    ],
    images: img("1312", "Fig. 1 : SCP-1312-1 à quai, 03h04.", "Fig. 2 : position de SCP-1312 entre les voies 1 et 2."),
  },
  {
    numero: "2047",
    titre: "Le Correcteur",
    classe: "Euclide",
    niveau: 2,
    procedures:
      "SCP-2047 est rangé capuchonné dans une boîte en plomb, sans aucun document écrit à moins de 10 mètres, y compris les étiquettes et les inscriptions sur les vêtements du personnel.\n" +
      "Les rapports concernant SCP-2047 doivent être rédigés hors du Site-[[42]] puis relus par deux personnes différentes avant d'être archivés.\n" +
      "Les tests ne peuvent porter que sur des textes ne contenant aucune affirmation factuelle (poèmes, listes de courses fictives).",
    description:
      "SCP-2047 est un stylo à bille rouge d'une marque courante. Lorsqu'il est décapuchonné, tout texte situé dans un rayon de 10 mètres est corrigé pendant la nuit : d'abord l'orthographe, puis la grammaire, puis le contenu factuel.\n" +
      "Les corrections factuelles ne s'appliquent pas seulement au texte. Lorsqu'un document contient une affirmation fausse, c'est parfois la réalité qui est corrigée pour correspondre au texte, plutôt que l'inverse. Le critère de choix entre les deux reste inconnu.\n" +
      "Les corrections apparaissent à l'encre rouge, dans une écriture penchée et soignée, accompagnées de commentaires en marge (« Attention ! », « Revoir la source », « Bien »).",
    annexes: [
      {
        titre: "Rapport d'incident 2047-1",
        contenu:
          "Après une exposition de [[72 heures]], un rapport indiquant par erreur que le Site-42 avait été construit « en 1987 » au lieu de 1978 a été corrigé.\n" +
          "Le texte n'a pas été modifié. Le Site-42 a été [[reconstruit, avec neuf ans d'usure en moins]]. Les 210 membres du personnel présents sur le site se souviennent tous d'avoir été recrutés neuf ans plus tard que ce qu'indiquent leurs contrats.",
      },
      {
        titre: "Test 2047-6",
        contenu:
          "Texte soumis : un poème volontairement mauvais, rédigé par le Dr [[Chevalier]].\n" +
          "Résultat : le poème a été entièrement réécrit. La nouvelle version a été jugée remarquable par le comité de lecture. En marge, une seule annotation : « Tu peux mieux faire. »\n" +
          "Le Dr Chevalier a demandé à ne plus participer aux tests.",
      },
    ],
    images: img("2047", "Fig. 1 : SCP-2047 et un document corrigé lors du test 2047-6.", "Fig. 2 : zone d'exclusion de 10 m autour du coffre de confinement."),
  },
  {
    numero: "3381",
    titre: "Marée Sèche",
    classe: "Keter",
    niveau: 4,
    procedures:
      "Le périmètre de SCP-3381 est délimité par une clôture de 4 km, présentée aux populations locales comme une zone de tir militaire. Les horaires de marée sont calculés quotidiennement par l'équipe du Dr [[Mbeki]] et transmis aux postes de garde.\n" +
      "Aucun véhicule ne doit stationner dans la zone d'estran à marée « basse ». Les drones d'observation doivent voler à plus de 50 mètres d'altitude.\n" +
      "Toute personne surprise à l'intérieur du périmètre doit être évacuée sans délai, même au péril des équipes d'intervention si la marée est montante.",
    description:
      "SCP-3381 est une étendue de sable de [[2,3 km²]] située en plein désert, à plus de 600 km de toute côte, qui se comporte comme un littoral soumis aux marées. À marée « haute », le sable avance de plusieurs centaines de mètres en ondulant comme de l'eau, et engloutit tout ce qui se trouve sur son passage.\n" +
      "Les marées de SCP-3381 ne suivent pas le cycle lunaire. Elles semblent synchronisées sur celles d'une côte qui n'a pas été identifiée.\n" +
      "Aucun objet englouti n'a été retrouvé. Les sonars ont détecté une structure régulière à [[310 mètres]] de profondeur, dont la forme évoque [[un port]].",
    annexes: [
      {
        titre: "Journal d'observation",
        contenu:
          "J+12 : un coquillage marin a été retrouvé à la surface après le reflux. L'espèce est éteinte depuis le Miocène.\n" +
          "J+40 : des cris d'oiseaux de mer ont été enregistrés pendant la marée haute. Aucun oiseau n'était visible.\n" +
          "J+77 : une bouée de signalisation est remontée à la surface. Elle portait le numéro « 3381 ».",
      },
      {
        titre: "Note du Dr Mbeki",
        contenu:
          "Nous parlons de « marée » faute de mieux. Mais la mer n'avance pas sur le désert : c'est le désert qui se souvient d'avoir été une mer.\n" +
          "La question n'est pas de savoir ce qu'il y a au fond. C'est de savoir ce qui arrivera le jour où il se souviendra entièrement.",
      },
    ],
    images: img("3381", "Fig. 1 : vue aérienne de SCP-3381 à marée haute.", "Fig. 2 : périmètre de confinement et limites de marée."),
  },
  {
    numero: "4410",
    titre: "Le Locataire",
    classe: "Keter",
    niveau: 5,
    procedures:
      "Tout plan architectural publié est analysé par l'algorithme [[PALIMPSESTE]]. Les pièces surnuméraires détectées (SCP-4410-1) sont murées par une équipe de la Fondation se présentant comme un service de désamiantage. Les portes ne doivent jamais être ouvertes.\n" +
      "Il est formellement interdit de frapper à une porte de SCP-4410-1, de glisser un objet sous la porte, ou de répondre à un bruit provenant de l'intérieur.\n" +
      "Les occupants des bâtiments concernés sont relogés aux frais de la Fondation. Le nombre de bâtiments touchés augmente d'environ [[4 %]] par an.",
    description:
      "SCP-4410 désigne une entité jamais observée directement, qui semble habiter une pièce supplémentaire apparaissant sur les plans de certains bâtiments. Ces pièces sont absentes pendant la construction, mais présentes à la livraison, toujours fermées par une porte en bois d'apparence ordinaire.\n" +
      "Des bruits domestiques y sont régulièrement enregistrés : vaisselle, pas, radio à faible volume, parfois une voix qui fredonne. La consommation électrique des bâtiments concernés augmente de façon inexpliquée.\n" +
      "SCP-4410 semble se comporter comme un locataire discret et respectueux, tant que personne ne cherche à entrer en contact avec lui.",
    annexes: [
      {
        titre: "Rapport d'incident 4410-A",
        contenu:
          "Le [[08/06]], un agent de maintenance non informé a frappé à la porte d'une SCP-4410-1 située au 4e étage d'un immeuble de Roubaix.\n" +
          "Quelqu'un a frappé en retour, trois coups, depuis l'intérieur. La porte ne s'est pas ouverte.\n" +
          "Le lendemain, l'appartement de l'agent comportait une pièce de plus. Les bruits enregistrés depuis cette pièce sont identiques à ceux de l'immeuble de Roubaix.",
      },
      {
        titre: "Courrier retrouvé",
        contenu:
          "Une enveloppe a été glissée sous une porte de SCP-4410-1, de l'intérieur vers l'extérieur. Elle contenait le message suivant, écrit à la main :\n" +
          "« Merci de ne plus frapper. Je fais le moins de bruit possible. Je cherche seulement un endroit où rester. Il y a de moins en moins de place là où j'étais. »",
      },
    ],
    images: img("4410", "Fig. 1 : porte d'une SCP-4410-1 murée, immeuble de Roubaix.", "Fig. 2 : plan d'étage avec la pièce surnuméraire."),
  },
  {
    numero: "5099",
    titre: "Les Archives Vides",
    classe: "Thaumiel",
    niveau: 5,
    procedures:
      "SCP-5099 est conservé au Site-01, dans une salle dont seuls les membres du Conseil O5 et [[███]] archivistes accrédités connaissent l'emplacement.\n" +
      "Un tiroir ne doit jamais être ouvert deux fois dans la même journée. Chaque ouverture est consignée, et le dossier extrait est transmis au Conseil avant toute autre lecture.\n" +
      "Les dossiers extraits ne doivent pas être modifiés. Une correction, même mineure, entraîne la disparition du dossier et de toute trace de l'anomalie qu'il décrit.",
    description:
      "SCP-5099 est un meuble de classement métallique gris à quatre tiroirs, d'un modèle courant dans les administrations des années 1970. Chaque ouverture d'un tiroir révèle le dossier complet d'une anomalie que la Fondation n'a pas encore découverte, Procédures de Confinement Spéciales comprises.\n" +
      "Les dossiers sont rédigés dans le format en vigueur à la Fondation au moment de l'ouverture, et signés par des membres du personnel parfois pas encore recrutés.\n" +
      "SCP-5099 est à l'origine de [[63 %]] des confinements réussis depuis 1998. Sa classe Thaumiel reflète son utilité stratégique : il permet de confiner des anomalies avant qu'elles ne se manifestent.",
    annexes: [
      {
        titre: "Registre des extractions (extrait)",
        contenu:
          "Tiroir 1 : SCP-3381, extrait 4 mois avant la première manifestation. Confinement réussi.\n" +
          "Tiroir 3 : SCP-1312, extrait 22 ans après la première manifestation. Le dossier comportait une note : « En retard. »\n" +
          "Tiroir 4 : le dernier dossier extrait porte le numéro [[SCP-5099]].",
      },
      {
        titre: "Note de l'archiviste en chef",
        contenu:
          "Le dossier SCP-5099 extrait du tiroir 4 est identique à celui-ci, à une différence près : sa classe n'est pas Thaumiel.\n" +
          "Le Conseil a décidé de ne pas diffuser la classe indiquée. J'ai lu ce dossier. Je recommande que nous cessions d'ouvrir les tiroirs.",
      },
    ],
    images: img("5099", "Fig. 1 : SCP-5099, salle d'archives du Site-01.", "Fig. 2 : schéma des quatre tiroirs et registre d'ouverture."),
  },
];
