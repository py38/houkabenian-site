// ===================================================================
// HOUKABENIAN — Internationalization (FR / EN)
// ===================================================================

(function() {
    'use strict';

    // Full translations dictionary
    const T = {
        // === NAVIGATION ===
        nav_mission: { fr: 'Notre Mission', en: 'Our Mission' },
        nav_valeurs: { fr: 'Valeurs', en: 'Values' },
        nav_programmes: { fr: 'Programmes', en: 'Programs' },
        nav_benevolat: { fr: 'Bénévolat', en: 'Volunteering' },
        nav_activites: { fr: 'Activités', en: 'Activities' },
        nav_actualites: { fr: 'Actualités', en: 'News' },
        nav_equipe: { fr: 'Équipe', en: 'Team' },
        nav_faire_don: { fr: 'Faire un don', en: 'Make a Donation' },

        // === MOBILE NAV ===
        mob_mission: { fr: 'Notre Mission', en: 'Our Mission' },
        mob_valeurs: { fr: 'Nos Valeurs', en: 'Our Values' },
        mob_programmes: { fr: 'Programmes', en: 'Programs' },
        mob_benevolat: { fr: 'Bénévolat', en: 'Volunteering' },
        mob_activites: { fr: 'Activités', en: 'Activities' },
        mob_actualites: { fr: 'Actualités', en: 'News' },
        mob_equipe: { fr: 'Équipe', en: 'Team' },
        mob_don: { fr: 'Faire un don', en: 'Make a Donation' },
        mob_benevole: { fr: 'Devenir Bénévole', en: 'Become a Volunteer' },

        // === FLASH BANNER ===
        flash_1: { fr: 'HOUKABENIAN : Plus de 10 ans au service des communautés vulnérables en Côte d\'Ivoire', en: 'HOUKABENIAN: Over 10 years serving vulnerable communities in Ivory Coast' },
        flash_2: { fr: 'Campagne de sensibilisation en cours dans les milieux défavorisés', en: 'Awareness campaign underway in underprivileged areas' },
        flash_3: { fr: 'Rejoignez notre réseau de bénévoles et faites la différence !', en: 'Join our volunteer network and make a difference!' },

        // === HERO ===
        hero_badge: { fr: 'Plus de 10 ans d\'engagement', en: 'Over 10 years of commitment' },
        hero_ensemble: { fr: 'Ensemble,', en: 'Together,' },
        hero_word_1: { fr: 'protégeons la vie', en: "let's protect life" },
        hero_word_2: { fr: 'aidons les mères', en: "let's help mothers" },
        hero_word_3: { fr: 'sauvons les bébés', en: "let's save babies" },
        hero_word_4: { fr: 'soutenons les aînés', en: "let's support the elderly" },
        hero_vulnerable: { fr: 'des plus vulnérables', en: 'of the most vulnerable' },
        hero_subtitle: { fr: 'L\'ONG HOUKABENIAN se donne pour mission de permettre à tous de vivre en bonne santé. Nous accompagnons les nourrices, les bébés et les seniors vers un avenir meilleur.', en: 'HOUKABENIAN NGO\'s mission is to enable everyone to live in good health. We support caregivers, babies and seniors towards a better future.' },
        hero_btn_don: { fr: 'Donnez Maintenant', en: 'Donate Now' },
        hero_btn_benevole: { fr: 'Devenir Bénévole', en: 'Become a Volunteer' },
        hero_stat_vies: { fr: 'Vies impactées', en: 'Lives impacted' },
        hero_stat_benevoles: { fr: 'Bénévoles', en: 'Volunteers' },
        hero_stat_naissances: { fr: 'Naissances accompagnées', en: 'Births supported' },
        hero_stat_seniors: { fr: 'Seniors accompagnés', en: 'Seniors supported' },
        hero_scroll: { fr: 'Découvrir', en: 'Discover' },

        // === NOTRE HISTOIRE ===
        histoire_tag: { fr: 'Qui sommes-nous', en: 'Who we are' },
        histoire_title_1: { fr: 'Notre ', en: 'Our ' },
        histoire_title_2: { fr: 'Histoire', en: 'Story' },
        histoire_p1: { fr: 'L\'ONG <strong>HOUKABENIAN</strong> est une organisation non gouvernementale créée le <strong>25 janvier 2015</strong> qui œuvre pour le bien-être des seniors, les nourrices et des bébés par diverses actions sociales.', en: 'The NGO <strong>HOUKABENIAN</strong> is a non-governmental organization founded on <strong>January 25, 2015</strong> that works for the well-being of seniors, caregivers and babies through various social actions.' },
        histoire_p2: { fr: 'L\'ONG Houkabenian est présidée par <strong>Madame LOUCOU Madeleine</strong>.', en: 'The NGO Houkabenian is chaired by <strong>Mrs. LOUCOU Madeleine</strong>.' },
        histoire_vision_title: { fr: 'Notre Vision', en: 'Our Vision' },
        histoire_vision_text: { fr: 'Favoriser un partenariat social de référence pour garantir le bien-être de nos cibles...', en: 'Foster a benchmark social partnership to ensure the well-being of our beneficiaries...' },
        histoire_chiffre_vies: { fr: 'Vies impactées', en: 'Lives impacted' },
        histoire_chiffre_meres: { fr: 'Mères soutenues', en: 'Mothers supported' },
        histoire_chiffre_seniors: { fr: 'Seniors accompagnés', en: 'Seniors supported' },
        histoire_chiffre_benevoles: { fr: 'Bénévoles actifs', en: 'Active volunteers' },

        // === MISSION ===
        mission_tag: { fr: 'Ce qui nous anime', en: 'What drives us' },
        mission_title_1: { fr: 'Notre ', en: 'Our ' },
        mission_title_2: { fr: 'Mission', en: 'Mission' },
        mission_subtitle: { fr: 'L\'ONG HOUKABENIAN se donne pour mission de permettre à tous de vivre en bonne santé, en accompagnant les populations les plus vulnérables vers l\'autonomie et la dignité.', en: 'HOUKABENIAN NGO\'s mission is to enable everyone to live in good health, by supporting the most vulnerable populations towards autonomy and dignity.' },
        mission_card_1_title: { fr: 'Réduire la mortalité', en: 'Reduce mortality' },
        mission_card_1_text: { fr: 'Contribuer à la réduction du taux de mortalité de la mère et de l\'enfant à la naissance par un accompagnement médical et humain.', en: 'Contribute to reducing maternal and child mortality at birth through medical and human support.' },
        mission_card_2_title: { fr: 'Inclusion financière', en: 'Financial inclusion' },
        mission_card_2_text: { fr: 'Favoriser l\'indépendance et l\'inclusion financière des femmes et des seniors pour une autonomie durable.', en: 'Promote the independence and financial inclusion of women and seniors for lasting autonomy.' },
        mission_card_3_title: { fr: 'Accès aux soins', en: 'Access to healthcare' },
        mission_card_3_text: { fr: 'Favoriser l\'accès aux soins de santé de qualité dans les milieux défavorisés pour améliorer les conditions de vie.', en: 'Promote access to quality healthcare in underprivileged areas to improve living conditions.' },
        mission_card_4_title: { fr: 'Briser l\'isolement', en: 'Break isolation' },
        mission_card_4_text: { fr: 'Créer des cellules d\'encadrement et d\'échanges pour briser l\'isolement des seniors et renforcer les liens sociaux.', en: 'Create support and exchange groups to break the isolation of seniors and strengthen social bonds.' },

        // === VALEURS ===
        valeurs_tag: { fr: 'Ce qui nous guide', en: 'What guides us' },
        valeurs_title_1: { fr: 'Nos ', en: 'Our ' },
        valeurs_title_2: { fr: 'Valeurs', en: 'Values' },
        valeurs_subtitle: { fr: 'Cinq valeurs fondamentales guident chacune de nos actions au quotidien.', en: 'Five core values guide each of our daily actions.' },
        valeur_accueil_title: { fr: 'Accueil Chaleureux', en: 'Warm Welcome' },
        valeur_accueil_text: { fr: 'La première rencontre est toujours déterminante. Regarder le parent comme étant unique, s\'enquérir de ses besoins.', en: 'The first meeting is always decisive. Seeing each parent as unique, inquiring about their needs.' },
        valeur_entraide_title: { fr: 'Entraide', en: 'Mutual Aid' },
        valeur_entraide_text: { fr: 'On apprend à être parent parmi d\'autres parents. Nos activités favorisent le partage d\'expériences et la création de liens.', en: 'We learn to be parents among other parents. Our activities promote sharing experiences and building bonds.' },
        valeur_respect_title: { fr: 'Respect', en: 'Respect' },
        valeur_respect_text: { fr: 'Traiter chaque personne avec égard, accepter les différences et laisser au parent sa pleine valeur de parent.', en: 'Treat each person with consideration, accept differences and let parents maintain their full worth.' },
        valeur_empathie_title: { fr: 'Empathie', en: 'Empathy' },
        valeur_empathie_text: { fr: 'La faculté de se mettre à la place d\'autrui. Les parents doivent savoir que l\'on comprend ce qu\'ils vivent.', en: 'The ability to put oneself in another\'s shoes. Parents must know that we understand what they\'re going through.' },
        valeur_egalite_title: { fr: 'Égalité', en: 'Equality' },
        valeur_egalite_text: { fr: 'Tous les parents reçoivent les mêmes marques d\'estime, la même attention, peu importe leur statut ou origine.', en: 'All parents receive the same respect, the same attention, regardless of their status or origin.' },
        valeur_link: { fr: 'Découvrir', en: 'Learn more' },

        // === PROGRAMMES ===
        programmes_tag: { fr: 'Nos actions', en: 'Our actions' },
        programmes_title_1: { fr: 'Nos ', en: 'Our ' },
        programmes_title_2: { fr: 'Programmes', en: 'Programs' },
        programmes_subtitle: { fr: 'Trois piliers d\'action pour accompagner les plus vulnérables à chaque étape de la vie.', en: 'Three pillars of action to support the most vulnerable at every stage of life.' },
        prog_koro_meaning: { fr: '« L\'ancien, le sage »', en: '"The Elder, the Wise"' },
        prog_koro_desc: { fr: 'Accompagnement des personnes âgées : lutte contre l\'isolement, accès aux soins, activités sociales et soutien au quotidien. Parce que nos aînés méritent de vivre leurs dernières années dans la dignité et la joie.', en: 'Supporting the elderly: fighting isolation, access to healthcare, social activities and daily support. Because our elders deserve to live their final years with dignity and joy.' },
        prog_koro_1: { fr: 'Visites à domicile régulières', en: 'Regular home visits' },
        prog_koro_2: { fr: 'Accès aux soins médicaux', en: 'Access to medical care' },
        prog_koro_3: { fr: 'Activités sociales et récréatives', en: 'Social and recreational activities' },
        prog_blatha_meaning: { fr: '« La mère nourricière »', en: '"The Nurturing Mother"' },
        prog_blatha_desc: { fr: 'Accompagnement des femmes enceintes et des nourrices : suivi prénatal et postnatal, sensibilisation, autonomisation financière. Pour que chaque mère puisse donner le meilleur à son enfant.', en: 'Supporting pregnant women and caregivers: prenatal and postnatal care, awareness, financial empowerment. So that every mother can give the best to her child.' },
        prog_blatha_1: { fr: 'Suivi prénatal et postnatal', en: 'Prenatal and postnatal care' },
        prog_blatha_2: { fr: 'Formations en autonomie financière', en: 'Financial empowerment training' },
        prog_blatha_3: { fr: 'Groupes de soutien entre mères', en: 'Support groups between mothers' },
        prog_boudchou_meaning: { fr: '« Le tout-petit »', en: '"The Little One"' },
        prog_boudchou_desc: { fr: 'Protection et suivi des nouveau-nés et nourrissons : vaccination, nutrition, suivi de croissance. Chaque enfant mérite de naître et de grandir dans les meilleures conditions.', en: 'Protection and monitoring of newborns and infants: vaccination, nutrition, growth monitoring. Every child deserves to be born and grow in the best conditions.' },
        prog_boudchou_1: { fr: 'Campagnes de vaccination', en: 'Vaccination campaigns' },
        prog_boudchou_2: { fr: 'Suivi nutritionnel', en: 'Nutritional monitoring' },
        prog_boudchou_3: { fr: 'Éducation parentale', en: 'Parental education' },

        // === 10 RAISONS ===
        raisons_tag: { fr: 'Rejoignez-nous', en: 'Join us' },
        raisons_title_1: { fr: '10 Raisons de devenir ', en: '10 Reasons to become a ' },
        raisons_title_2: { fr: 'Bénévole', en: 'Volunteer' },
        raisons_subtitle: { fr: 'Nos bénévoles sont une source d\'inspiration. Découvrez pourquoi rejoindre la famille HOUKABENIAN.', en: 'Our volunteers are a source of inspiration. Discover why to join the HOUKABENIAN family.' },
        raison_01_title: { fr: 'C\'est bon pour la santé', en: 'It\'s good for your health' },
        raison_01_text: { fr: '94 % des bénévoles mentionnent que ça améliore leur humeur. 2 à 3 heures par semaine améliorent les capacités physiques et mentales.', en: '94% of volunteers say it improves their mood. 2 to 3 hours per week improve physical and mental abilities.' },
        raison_02_title: { fr: 'Pour faire partie de la grande famille', en: 'To be part of the big family' },
        raison_02_text: { fr: 'Depuis 3 ans, nos bénévoles contribuent dans le plaisir à cette oeuvre de solidarité. Une ambiance chaleureuse et festive vous attend.', en: 'For 3 years, our volunteers have been joyfully contributing to this solidarity effort. A warm and festive atmosphere awaits you.' },
        raison_03_title: { fr: 'Parce que nous sommes compréhensifs', en: 'Because we are understanding' },
        raison_03_text: { fr: 'Nous savons que votre temps est précieux. Nous respectons le temps que vous avez à donner et les limites que vous exprimez.', en: 'We know your time is precious. We respect the time you have to give and the limits you set.' },
        raison_04_title: { fr: 'Pour vivre de grands moments', en: 'To experience great moments' },
        raison_04_text: { fr: 'Célébrer la beauté de la vie et offrir amitié, tendresse et réconfort. Des moments qui procurent plus de bonheur à celui qui les donne.', en: 'Celebrate the beauty of life and offer friendship, tenderness and comfort. Moments that bring more happiness to the giver.' },
        raison_05_title: { fr: 'Un impact direct sur la vie des personnes âgées', en: 'A direct impact on the lives of the elderly' },
        raison_05_text: { fr: 'Briser l\'isolement, une personne à la fois, avec un sourire, une écoute paisible. Il n\'y a pas plus sincère qu\'un aîné qui dit « merci ».', en: 'Breaking isolation, one person at a time, with a smile, a peaceful ear. Nothing is more sincere than an elder saying "thank you".' },
        raison_06_title: { fr: 'Contribuer à une société plus équilibrée', en: 'Contributing to a more balanced society' },
        raison_06_text: { fr: 'Le secteur caritatif est un pilier de la société. HOUKABENIAN dépend de ses bénévoles pour mener sa mission à bien.', en: 'The charitable sector is a pillar of society. HOUKABENIAN depends on its volunteers to carry out its mission.' },
        raison_07_title: { fr: 'Vivre une expérience intergénérationnelle', en: 'Live an intergenerational experience' },
        raison_07_text: { fr: 'Des bénévoles de tous âges et de toutes générations. Cette mixité générationnelle s\'harmonise naturellement avec nos aînés.', en: 'Volunteers of all ages and generations. This generational diversity naturally harmonizes with our elders.' },
        raison_08_title: { fr: 'Rencontrer des personnes actives et généreuses', en: 'Meet active and generous people' },
        raison_08_text: { fr: 'Nos bénévoles retirent de nombreux bienfaits : sentiment d\'appartenance, liens sociaux, perfectionnement des compétences.', en: 'Our volunteers gain many benefits: sense of belonging, social bonds, skills development.' },
        raison_09_title: { fr: 'Participer au bien-être des nouveaux parents', en: 'Participate in the well-being of new parents' },
        raison_09_text: { fr: 'Porter intérêt envers les bébés, les enfants et les parents. Alléger l\'apprentissage des nouveaux parents.', en: 'Show interest in babies, children and parents. Ease the learning curve for new parents.' },
        raison_10_title: { fr: 'Pour un développement personnel accompli', en: 'For accomplished personal development' },
        raison_10_text: { fr: 'Connaissance de soi, valorisation, ouverture aux autres, acquisition de nouvelles compétences et responsabilités.', en: 'Self-knowledge, personal value, openness to others, acquiring new skills and responsibilities.' },
        raison_link: { fr: 'En savoir plus', en: 'Learn more' },
        raisons_btn: { fr: 'Devenir Bénévole', en: 'Become a Volunteer' },

        // === IMPACT ===
        impact_tag: { fr: 'Nos résultats', en: 'Our results' },
        impact_title_1: { fr: 'Notre ', en: 'Our ' },
        impact_title_2: { fr: 'Impact', en: 'Impact' },
        impact_subtitle: { fr: 'Chaque jour, nous faisons la différence dans la vie de milliers de personnes.', en: 'Every day, we make a difference in the lives of thousands of people.' },
        impact_naissances: { fr: 'Naissances accompagnées', en: 'Births supported' },
        impact_meres: { fr: 'Mères soutenues', en: 'Mothers supported' },
        impact_seniors: { fr: 'Seniors accompagnés', en: 'Seniors supported' },
        impact_benevoles: { fr: 'Bénévoles actifs', en: 'Active volunteers' },

        // === EQUIPE ===
        equipe_tag: { fr: 'Les visages de l\'action', en: 'The faces of action' },
        equipe_title_1: { fr: 'Notre ', en: 'Our ' },
        equipe_title_2: { fr: 'Équipe', en: 'Team' },
        equipe_subtitle: { fr: 'Des femmes et des hommes dévoués qui donnent le meilleur d\'eux-mêmes pour les plus vulnérables.', en: 'Dedicated women and men who give their best for the most vulnerable.' },
        equipe_role_presidente: { fr: 'Présidente du Conseil d\'Administration', en: 'Chair of the Board of Directors' },
        equipe_role_vp: { fr: 'Vice-Présidente du CA', en: 'Vice-Chair of the Board' },
        equipe_role_sg: { fr: 'Secrétaire Général', en: 'General Secretary' },
        equipe_role_se: { fr: 'Secrétaire Exécutif', en: 'Executive Secretary' },
        equipe_role_cm: { fr: 'Conseiller Médical', en: 'Medical Advisor' },
        equipe_role_cmf: { fr: 'Conseillère Médicale', en: 'Medical Advisor' },
        equipe_role_cai: { fr: 'Conseillère des Affaires Internationales', en: 'International Affairs Advisor' },
        equipe_role_de: { fr: 'Directrice Exécutive', en: 'Executive Director' },
        equipe_role_drh: { fr: 'Directeur des Ressources Humaines', en: 'Human Resources Director' },

        // === ACTIVITES ===
        activites_tag: { fr: 'Prochainement', en: 'Coming soon' },
        activites_title_1: { fr: 'Activités ', en: 'Upcoming ' },
        activites_title_2: { fr: 'à venir', en: 'Activities' },
        activites_subtitle: { fr: 'Découvrez nos prochains événements et inscrivez-vous pour y participer.', en: 'Discover our upcoming events and sign up to participate.' },
        activite_1_title: { fr: 'Journée de solidarité intergénérationnelle', en: 'Intergenerational Solidarity Day' },
        activite_1_desc: { fr: 'Une journée d\'activités réunissant jeunes bénévoles et aînés autour de jeux, d\'échanges et d\'un repas convivial.', en: 'A day of activities bringing together young volunteers and elders around games, sharing and a friendly meal.' },
        activite_2_title: { fr: 'Atelier de préparation à l\'accouchement', en: 'Childbirth Preparation Workshop' },
        activite_2_desc: { fr: 'Atelier dédié aux futures mamans pour mieux connaître les besoins et les réalités vécues par les nouveaux parents.', en: 'Workshop dedicated to expectant mothers to better understand the needs and realities of new parents.' },
        activite_3_title: { fr: 'Campagne de vaccination infantile', en: 'Childhood Vaccination Campaign' },
        activite_3_desc: { fr: 'Campagne de vaccination gratuite pour les enfants de 0 à 5 ans dans les quartiers défavorisés.', en: 'Free vaccination campaign for children aged 0 to 5 in underprivileged neighborhoods.' },
        activite_places: { fr: 'places', en: 'spots' },
        activite_ouvert: { fr: 'Ouvert à tous', en: 'Open to all' },
        activite_plus: { fr: 'Plus d\'infos', en: 'More info' },
        activite_participer: { fr: 'Participer', en: 'Participate' },

        // === ACTUALITES ===
        actualites_tag: { fr: 'Restez informés', en: 'Stay informed' },
        actualites_title_1: { fr: 'Nos ', en: 'Our ' },
        actualites_title_2: { fr: 'Actualités', en: 'News' },
        actualites_subtitle: { fr: 'Suivez nos dernières actions, événements et campagnes sur le terrain.', en: 'Follow our latest actions, events and field campaigns.' },
        actu_1_tag: { fr: 'Santé', en: 'Health' },
        actu_1_title: { fr: 'Campagne de vaccination dans les zones rurales', en: 'Vaccination campaign in rural areas' },
        actu_1_text: { fr: 'Notre équipe a mené une campagne de vaccination couvrant 12 villages, touchant plus de 800 enfants de moins de 5 ans.', en: 'Our team led a vaccination campaign covering 12 villages, reaching over 800 children under 5.' },
        actu_2_tag: { fr: 'Formation', en: 'Training' },
        actu_2_title: { fr: 'Formation en inclusion financière pour 200 femmes', en: 'Financial inclusion training for 200 women' },
        actu_2_text: { fr: 'Un atelier de formation dédié à l\'autonomisation financière des mères et nourrices.', en: 'A training workshop dedicated to the financial empowerment of mothers and caregivers.' },
        actu_3_tag: { fr: 'Solidarité', en: 'Solidarity' },
        actu_3_title: { fr: 'Journée de solidarité avec nos aînés', en: 'Solidarity day with our elders' },
        actu_3_text: { fr: 'Plus de 50 bénévoles ont participé à une journée d\'activités sociales pour les seniors.', en: 'Over 50 volunteers participated in a day of social activities for seniors.' },
        actu_4_title: { fr: 'Suivi nutritionnel : 300 nourrissons pris en charge', en: 'Nutritional monitoring: 300 infants cared for' },
        actu_4_text: { fr: 'Un programme intensif de suivi nutritionnel pour les nouveau-nés en zones défavorisées.', en: 'An intensive nutritional monitoring program for newborns in underprivileged areas.' },
        actu_lire: { fr: 'Lire la suite', en: 'Read more' },

        // === TEMOIGNAGES ===
        temoignages_tag: { fr: 'Ils témoignent', en: 'They testify' },
        temoignages_title_1: { fr: 'Leurs ', en: 'Their ' },
        temoignages_title_2: { fr: 'Témoignages', en: 'Testimonials' },
        temoignages_subtitle: { fr: 'Les voix de ceux dont la vie a été transformée par nos actions.', en: 'The voices of those whose lives have been transformed by our actions.' },
        temoignage_1_text: { fr: 'Si vieillir permet d\'apprécier la vie et de ralentir le rythme, c\'est aussi accepter d\'accumuler les épreuves et perdre peu à peu ses capacités. Mais j\'ai encore beaucoup de mémoire et j\'aime la vie. Grâce à HOUKABENIAN, je ne suis plus seul.', en: 'If aging allows one to appreciate life and slow down, it also means accepting accumulated hardships and gradually losing abilities. But I still have a good memory and I love life. Thanks to HOUKABENIAN, I am no longer alone.' },
        temoignage_1_role: { fr: 'Bénéficiaire programme Kôrô', en: 'Kôrô program beneficiary' },
        temoignage_2_text: { fr: 'Grâce au programme Blatha, j\'ai pu être suivie pendant toute ma grossesse. Mon bébé est né en bonne santé et aujourd\'hui, je participe aux formations d\'autonomie financière. HOUKABENIAN a changé ma vie.', en: 'Thanks to the Blatha program, I was monitored throughout my pregnancy. My baby was born healthy and today I participate in financial autonomy training. HOUKABENIAN changed my life.' },
        temoignage_2_role: { fr: 'Bénéficiaire programme Blatha', en: 'Blatha program beneficiary' },
        temoignage_3_text: { fr: 'Mon enfant avait des problèmes de nutrition. L\'équipe de Boud\'chou nous a pris en charge, nous a formés et aujourd\'hui mon fils grandit normalement. Je remercie tous les bénévoles.', en: 'My child had nutrition problems. The Boud\'chou team took care of us, trained us and today my son is growing normally. I thank all the volunteers.' },
        temoignage_3_role: { fr: 'Bénéficiaire programme Boud\'chou', en: 'Boud\'chou program beneficiary' },

        // === PARTENAIRES ===
        partenaires_tag: { fr: 'Ensemble plus forts', en: 'Stronger together' },
        partenaires_title_1: { fr: 'Nos ', en: 'Our ' },
        partenaires_title_2: { fr: 'Partenaires', en: 'Partners' },
        partenaires_subtitle: { fr: 'Ils nous font confiance et soutiennent notre mission au quotidien.', en: 'They trust us and support our mission every day.' },

        // === SECTION DON / CTA ===
        don_title_1: { fr: 'Chaque geste compte.', en: 'Every gesture counts.' },
        don_title_2: { fr: 'Agissez maintenant.', en: 'Act now.' },
        don_subtitle: { fr: 'Votre don permet de sauver des vies, d\'accompagner des mères et de protéger nos aînés. Ensemble, nous pouvons faire la différence.', en: 'Your donation helps save lives, support mothers and protect our elders. Together, we can make a difference.' },
        don_impact_1_label: { fr: 'Vaccin pour un enfant', en: 'Vaccine for a child' },
        don_impact_2_label: { fr: 'Suivi prénatal d\'une mère', en: 'Prenatal care for a mother' },
        don_impact_3_label: { fr: '1 mois de soutien à un senior', en: '1 month of support for a senior' },
        don_btn_benevole: { fr: 'Devenir Bénévole', en: 'Become a Volunteer' },
        don_btn_rejoindre: { fr: 'Nous Rejoindre', en: 'Join Us' },
        don_form_title: { fr: 'Faire un don', en: 'Make a Donation' },
        don_form_subtitle: { fr: 'Choisissez un montant ou entrez le vôtre', en: 'Choose an amount or enter your own' },
        don_unique: { fr: 'Don unique', en: 'One-time' },
        don_mensuel: { fr: 'Mensuel', en: 'Monthly' },
        don_nom_placeholder: { fr: 'Nom complet', en: 'Full name' },
        don_email_placeholder: { fr: 'Adresse email', en: 'Email address' },
        don_tel_placeholder: { fr: 'Téléphone (optionnel)', en: 'Phone (optional)' },
        form_nom_placeholder: { fr: 'Nom complet', en: 'Full name' },
        form_email_placeholder: { fr: 'Adresse email', en: 'Email address' },
        form_tel_placeholder: { fr: 'Numéro de téléphone', en: 'Phone number' },
        form_ville_placeholder: { fr: 'Ville / Commune', en: 'City / Municipality' },
        don_anonyme: { fr: 'Faire un don anonyme ', en: 'Make an anonymous donation ' },
        don_anonyme_small: { fr: '(votre nom n\'apparaîtra pas publiquement)', en: '(your name will not appear publicly)' },
        don_autre_montant: { fr: 'Autre montant (FCFA)', en: 'Other amount (FCFA)' },
        don_montant_libre: { fr: 'Montant libre...', en: 'Custom amount...' },
        don_affecter: { fr: 'Affecter mon don à :', en: 'Allocate my donation to:' },
        don_option_1: { fr: 'Là où c\'est le plus nécessaire', en: 'Where it\'s needed most' },
        don_option_2: { fr: 'Programme Kôrô (Seniors)', en: 'Kôrô Program (Seniors)' },
        don_option_3: { fr: 'Programme Blatha (Mères)', en: 'Blatha Program (Mothers)' },
        don_option_4: { fr: 'Programme Boud\'chou (Enfants)', en: 'Boud\'chou Program (Children)' },
        don_submit: { fr: 'Donner', en: 'Donate' },
        don_message_placeholder: { fr: 'Message ou question (optionnel)', en: 'Message or question (optional)' },
        don_secure: { fr: 'Vos données sont protégées', en: 'Your data is protected' },
        don_grades_link: { fr: 'Découvrir les grades de donateurs', en: 'Discover donor grades' },

        // === MODALS ===
        modal_don_merci: { fr: 'Merci pour votre générosité !', en: 'Thank you for your generosity!' },
        modal_don_payment_title: { fr: 'Pour finaliser votre don, envoyez le montant via :', en: 'To finalize your donation, send the amount via:' },
        modal_don_note: { fr: 'Mentionnez votre nom lors du transfert. L\'équipe HOUKABENIAN vous confirmera la réception par email ou téléphone.', en: 'Mention your name during the transfer. The HOUKABENIAN team will confirm receipt by email or phone.' },
        modal_don_voir_grades: { fr: 'Voir tous les grades de donateurs', en: 'See all donor grades' },
        modal_virement: { fr: 'Virement bancaire / Chèque', en: 'Bank transfer / Check' },
        modal_virement_contact: { fr: 'Contactez-nous au +225 27 22 59 43 88', en: 'Contact us at +225 27 22 59 43 88' },

        modal_activite_title: { fr: 'S\'inscrire à l\'activité', en: 'Sign up for the activity' },
        modal_activite_confirm: { fr: 'Confirmer mon inscription', en: 'Confirm my registration' },
        modal_activite_success: { fr: 'Inscription confirmée !', en: 'Registration confirmed!' },

        modal_benevole_title: { fr: 'Devenir Bénévole', en: 'Become a Volunteer' },
        modal_benevole_text: { fr: 'Rejoignez notre équipe de bénévoles et contribuez à changer des vies en Côte d\'Ivoire.', en: 'Join our volunteer team and help change lives in Ivory Coast.' },
        modal_benevole_programme: { fr: 'Programme qui vous intéresse', en: 'Program that interests you' },
        modal_benevole_koro: { fr: 'Kôrô — Accompagnement des aînés', en: 'Kôrô — Supporting the elderly' },
        modal_benevole_blatha: { fr: 'Blatha — Accompagnement des mères', en: 'Blatha — Supporting mothers' },
        modal_benevole_boudchou: { fr: 'Boud\'chou — Protection des enfants', en: 'Boud\'chou — Protecting children' },
        modal_benevole_tous: { fr: 'Tous les programmes', en: 'All programs' },
        modal_benevole_motivation: { fr: 'Pourquoi souhaitez-vous devenir bénévole ? (optionnel)', en: 'Why do you want to become a volunteer? (optional)' },
        modal_benevole_submit: { fr: 'Envoyer ma candidature', en: 'Submit my application' },
        modal_benevole_success: { fr: 'Candidature envoyée !', en: 'Application sent!' },

        // === FOOTER ===
        footer_about: { fr: '« Aidons-les » — ONG au service des nourrices, bébés et seniors depuis plus de 10 ans.', en: '"Let\'s help them" — NGO serving caregivers, babies and seniors for over 10 years.' },
        footer_nav: { fr: 'Navigation', en: 'Navigation' },
        footer_nav_mission: { fr: 'Notre Mission', en: 'Our Mission' },
        footer_nav_valeurs: { fr: 'Nos Valeurs', en: 'Our Values' },
        footer_nav_programmes: { fr: 'Programmes', en: 'Programs' },
        footer_nav_benevolat: { fr: 'Bénévolat', en: 'Volunteering' },
        footer_nav_activites: { fr: 'Activités', en: 'Activities' },
        footer_nav_actualites: { fr: 'Actualités', en: 'News' },
        footer_programmes: { fr: 'Programmes', en: 'Programs' },
        footer_koro: { fr: 'Kôrô — Seniors', en: 'Kôrô — Seniors' },
        footer_blatha: { fr: 'Blatha — Mères', en: 'Blatha — Mothers' },
        footer_boudchou: { fr: 'Boud\'chou — Enfants', en: 'Boud\'chou — Children' },
        footer_contact: { fr: 'Contact', en: 'Contact' },
        footer_copyright: { fr: '© 2026 HOUKABENIAN. Tous droits réservés.', en: '© 2026 HOUKABENIAN. All rights reserved.' },
        footer_mentions: { fr: 'Mentions légales', en: 'Legal notice' },
        footer_confidentialite: { fr: 'Politique de confidentialité', en: 'Privacy policy' },

        // === GRADES PAGE ===
        grades_title: { fr: 'Grades de Donateurs', en: 'Donor Grades' },
        grades_hero_text: { fr: 'Chaque don compte. Votre générosité vous fait évoluer dans notre système de grades. Plus vous donnez, plus votre impact grandit.', en: 'Every donation counts. Your generosity advances you through our grade system. The more you give, the greater your impact grows.' },
        grades_retour: { fr: 'Retour au site', en: 'Back to site' },
        grades_donateurs: { fr: 'Donateurs', en: 'Donors' },
        grades_dons: { fr: 'Dons enregistrés', en: 'Recorded donations' },
        grades_demo: { fr: 'Mode démonstration', en: 'Demo mode' },
        grades_demo_text: { fr: 'Le Google Sheets n\'est pas encore connecté. Les données ci-dessous sont des exemples. Une fois le Google Sheets configuré, les vrais donateurs apparaîtront automatiquement.', en: 'Google Sheets is not yet connected. The data below are examples. Once Google Sheets is configured, real donors will appear automatically.' },
        grades_instruction: { fr: 'Cliquez sur un grade pour voir les donateurs', en: 'Click on a grade to see donors' },
        grades_voir: { fr: 'Voir les donateurs', en: 'See donors' },
        grades_masquer: { fr: 'Masquer', en: 'Hide' },
        grades_aucun: { fr: 'Aucun donateur dans ce grade pour le moment.', en: 'No donors in this grade yet.' },
        grades_premier: { fr: 'Soyez le premier !', en: 'Be the first!' },
        grades_loading: { fr: 'Chargement...', en: 'Loading...' },

        grade_platine_desc: { fr: 'Le sommet de la générosité. Votre don exceptionnel permet de lancer de nouveaux projets et d\'étendre notre couverture dans les zones les plus reculées.', en: 'The pinnacle of generosity. Your exceptional donation enables us to launch new projects and extend our coverage to the most remote areas.' },
        grade_diamant_desc: { fr: 'Un engagement rare et précieux. Vous êtes un pilier de notre mission et votre impact touche des communautés entières.', en: 'A rare and precious commitment. You are a pillar of our mission and your impact reaches entire communities.' },
        grade_etoile_desc: { fr: 'Les étoiles de HOUKABENIAN. Votre générosité exceptionnelle transforme structurellement la vie de milliers de personnes.', en: 'The stars of HOUKABENIAN. Your exceptional generosity structurally transforms the lives of thousands.' },
        grade_or_desc: { fr: 'Un donateur en or ! Votre générosité finance des campagnes entières de vaccination et des programmes de nutrition.', en: 'A golden donor! Your generosity funds entire vaccination campaigns and nutrition programs.' },
        grade_argent_desc: { fr: 'Votre engagement prend de l\'ampleur. Vous contribuez activement au suivi médical et à l\'accompagnement de nos bénéficiaires.', en: 'Your commitment is growing. You actively contribute to medical monitoring and support of our beneficiaries.' },
        grade_bronze_desc: { fr: 'Le premier pas vers la solidarité. Chaque geste, même modeste, contribue à changer des vies. Merci pour votre soutien !', en: 'The first step towards solidarity. Every gesture, even modest, helps change lives. Thank you for your support!' },

        grades_how_title: { fr: 'Comment fonctionne le système de grades ?', en: 'How does the grade system work?' },
        grades_step_1_title: { fr: 'Faites un don', en: 'Make a donation' },
        grades_step_1_text: { fr: 'Choisissez le montant qui vous convient et remplissez le formulaire de don sur notre site.', en: 'Choose the amount that suits you and fill out the donation form on our website.' },
        grades_step_2_title: { fr: 'Recevez votre grade', en: 'Receive your grade' },
        grades_step_2_text: { fr: 'Votre grade est automatiquement attribué en fonction du montant cumulé de vos dons.', en: 'Your grade is automatically assigned based on the cumulative amount of your donations.' },
        grades_step_3_title: { fr: 'Évoluez', en: 'Level up' },
        grades_step_3_text: { fr: 'Vos dons sont cumulatifs ! Si vous donnez à nouveau, votre grade évolue selon le total de vos contributions.', en: 'Your donations are cumulative! If you donate again, your grade evolves based on the total of your contributions.' },
        grades_step_4_title: { fr: 'Soyez reconnu', en: 'Be recognized' },
        grades_step_4_text: { fr: 'Les donateurs sont affichés ici même, classés par grade. Votre nom apparaît automatiquement !', en: 'Donors are displayed right here, sorted by grade. Your name appears automatically!' },
        grades_cta_title: { fr: 'Prêt(e) à faire la différence ?', en: 'Ready to make a difference?' },
        grades_cta_text: { fr: 'Quel que soit le montant, votre don a un impact réel sur la vie des plus vulnérables.', en: 'Regardless of the amount, your donation has a real impact on the lives of the most vulnerable.' },
        grades_cta_btn: { fr: 'Faire un don maintenant', en: 'Donate now' },

        // === ARTICLE PAGES (SHARED) ===
        article_retour_raisons: { fr: 'Retour aux 10 raisons', en: 'Back to 10 reasons' },
        article_retour_site: { fr: 'Retour au site', en: 'Back to site' },
        article_benevolat: { fr: 'Bénévolat', en: 'Volunteering' },
        article_min_lecture: { fr: 'min de lecture', en: 'min read' },
        article_partager: { fr: 'Partager :', en: 'Share:' },
        article_devenir_benevole: { fr: 'Devenir bénévole', en: 'Become a volunteer' },
        article_faire_don: { fr: 'Faire un don', en: 'Make a Donation' },

        // === SECTION TITLE PARTS ===
        histoire_title_1: { fr: 'Notre ', en: 'Our ' },
        histoire_title_2: { fr: 'Histoire', en: 'Story' },
        mission_title_1: { fr: 'Notre ', en: 'Our ' },
        mission_title_2: { fr: 'Mission', en: 'Mission' },
        valeurs_title_1: { fr: 'Nos ', en: 'Our ' },
        valeurs_title_2: { fr: 'Valeurs', en: 'Values' },
        programmes_title_1: { fr: 'Nos ', en: 'Our ' },
        programmes_title_2: { fr: 'Programmes', en: 'Programs' },
        equipe_title_1: { fr: 'Notre ', en: 'Our ' },
        equipe_title_2: { fr: 'Équipe', en: 'Team' },
        impact_title_1: { fr: 'Notre ', en: 'Our ' },
        impact_title_2: { fr: 'Impact', en: 'Impact' },
        actualites_title_1: { fr: 'Nos ', en: 'Our ' },
        actualites_title_2: { fr: 'Actualités', en: 'News' },
        temoignages_title_1: { fr: 'Leurs ', en: 'Their ' },
        temoignages_title_2: { fr: 'Témoignages', en: 'Testimonials' },
        partenaires_title_1: { fr: 'Nos ', en: 'Our ' },
        partenaires_title_2: { fr: 'Partenaires', en: 'Partners' },
        raisons_title_1: { fr: '10 Raisons de devenir ', en: '10 Reasons to become a ' },
        raisons_title_2: { fr: 'Bénévole', en: 'Volunteer' },
        activites_title_1: { fr: 'Activités ', en: 'Upcoming ' },
        activites_title_2: { fr: 'à venir', en: 'Activities' },

        // Raison article pages
        art_raison_01_title: { fr: 'C\'est bon pour la santé', en: 'It\'s good for your health' },
        art_raison_01_cta: { fr: 'Prêt(e) à améliorer votre santé ?', en: 'Ready to improve your health?' },
        art_raison_01_cta_text: { fr: 'Rejoignez nos bénévoles et découvrez les bienfaits par vous-même.', en: 'Join our volunteers and discover the benefits for yourself.' },
    };

    // Current language
    let currentLang = localStorage.getItem('houkabenian_lang') || 'fr';

    // Apply translations to all elements with data-i18n attribute
    function applyTranslations(lang) {
        currentLang = lang;
        localStorage.setItem('houkabenian_lang', lang);
        document.documentElement.lang = lang;

        // Update all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (T[key] && T[key][lang]) {
                // Check if element has child elements we should preserve
                if (el.querySelector('i, img, span.gradient-text, strong, small')) {
                    // For elements with icons/special children, use innerHTML
                    var iconHTML = '';
                    var icons = el.querySelectorAll('i.fas, i.fab, i.far');
                    if (icons.length > 0 && el.children.length > 0) {
                        // Preserve the icon at the start or end
                        var firstChild = el.firstElementChild;
                        if (firstChild && firstChild.tagName === 'I') {
                            iconHTML = firstChild.outerHTML + ' ';
                            el.innerHTML = iconHTML + T[key][lang];
                            return;
                        }
                    }
                    el.innerHTML = T[key][lang];
                } else {
                    el.textContent = T[key][lang];
                }
            }
        });

        // Update data-i18n-placeholder elements
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (T[key] && T[key][lang]) {
                el.placeholder = T[key][lang];
            }
        });

        // Update data-i18n-html elements (for content with HTML tags like <strong>)
        document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
            var key = el.getAttribute('data-i18n-html');
            if (T[key] && T[key][lang]) {
                el.innerHTML = T[key][lang];
            }
        });

        // Update select options (donation form + benevole modal)
        var selectMappings = [
            { selector: 'select[name="programme"]', options: ['don_option_1', 'don_option_2', 'don_option_3', 'don_option_4'] },
            { selector: 'select[name="programme_interet"]', options: ['modal_benevole_programme', 'modal_benevole_koro', 'modal_benevole_blatha', 'modal_benevole_boudchou', 'modal_benevole_tous'] }
        ];
        selectMappings.forEach(function(mapping) {
            var select = document.querySelector(mapping.selector);
            if (select) {
                var opts = select.querySelectorAll('option');
                mapping.options.forEach(function(key, i) {
                    if (opts[i] && T[key] && T[key][lang]) {
                        opts[i].textContent = T[key][lang];
                    }
                });
            }
        });

        // Update donation submit button text
        var donSubmit = document.querySelector('.don-submit');
        if (donSubmit && T['don_submit'] && T['don_submit'][lang]) {
            var currentHTML = donSubmit.innerHTML;
            var match = currentHTML.match(/[\d\s]+FCFA/);
            if (match) {
                donSubmit.innerHTML = '<i class="fas fa-heart"></i> ' + T['don_submit'][lang] + ' ' + match[0].trim();
            }
        }

        // Update the language switch button text
        document.querySelectorAll('.lang-switch').forEach(function(btn) {
            btn.innerHTML = lang === 'fr'
                ? '<img src="' + getFlagPath('gb') + '" alt="EN" class="lang-flag"> EN'
                : '<img src="' + getFlagPath('fr') + '" alt="FR" class="lang-flag"> FR';
            btn.title = lang === 'fr' ? 'Switch to English' : 'Passer en Français';
        });
    }

    function getFlagPath(code) {
        // Use inline SVG data URIs for flags to avoid external dependencies
        if (code === 'fr') {
            return 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect fill="#002395" width="300" height="600"/><rect fill="#FFF" x="300" width="300" height="600"/><rect fill="#ED2939" x="600" width="300" height="600"/></svg>');
        } else {
            return 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath><clipPath id="b"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><g clip-path="url(#a)"><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(#b)" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></g></svg>');
        }
    }

    // Toggle language
    function toggleLanguage() {
        var newLang = currentLang === 'fr' ? 'en' : 'fr';
        applyTranslations(newLang);
    }

    // Initialize on DOM ready
    function init() {
        // Set up click handlers for all lang-switch buttons
        document.querySelectorAll('.lang-switch').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleLanguage();
            });
        });

        // Apply saved language on load
        if (currentLang !== 'fr') {
            applyTranslations(currentLang);
        } else {
            // Still update button appearance
            applyTranslations('fr');
        }
    }

    // Expose globally
    window.HOUKAI18N = {
        T: T,
        apply: applyTranslations,
        toggle: toggleLanguage,
        getLang: function() { return currentLang; }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
