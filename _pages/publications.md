---
layout: single
classes: wide
read_time: false
comments: false
share: false
author_profile: true
title: Publications
permalink: /publications/
---
(<a href="../publications_by_type">Display by type</a>)

For a complete list of publications, please refer to <a href="https://scholar.google.com/citations?user=A8So5p8AAAAJ" itemprop="sameAs">Google Scholar</a>.

---

# 2024
> Madjid Sadallah and Marie Lefevre (2024) "MOBILES RecSys: A Personalized Recommendation System for Enhancing the Urban and Social Experiences of International Students". (Software).<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2024mobilesrecsys_abstract');" class="btn btn--primary">Abstract</a>
    <a href="https://hal.science/hal-04771226" style="color:white" class="btn btn--warning">Link</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2024mobilesrecsys');" class="btn btn--info">Bibtex</a>
        
<div id="sadallah2024mobilesrecsys_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong>The MOBILES RecSys system is an autonomous recommendation application designed to enhance the experience of international students using the MOBILES app. The app enables users to explore the city and enrich annotations based on their own experiences, offering a user-friendly interface for navigating urban routes and collecting geolocated data. MOBILES RecSys complements this app by calculating behavioral indicators based on user interactions, and generating personalized recommendations tailored to each profile. The data analysis and recommendation generation components are implemented in Python. The system is built on a containerized architecture using Docker and Docker Compose, ensuring optimal resource management by encapsulating each service in separate containers. User data, including collected logs, is stored in a MariaDB database and a kTBS instance. These traces are extracted by Logstash, transformed, and indexed into Elasticsearch to allow efficient analysis and search. From this data, several behavioral indicators are calculated and categorized into four main stages of the user experience: Onboarding and Integration, Active Usage Support, Quality Improvement, and Urban Discovery. The system also includes a dashboard developed in Flash, which enables users to configure and automate various system actions, such as data retrieval, indicator calculation, recommendation generation, and notification sending. Users can manually trigger these actions or schedule them for autonomous execution through recurring tasks. The generated recommendations are sent as push notifications, and a scheduling mechanism manages the automatic delivery of these notifications, allowing real-time adaptation of the user experience.</p>
</div>

> Marie Lefevre, Raphaël Benedetto, Madjid Sadallah, Dominique Chevalier, Claire Cunty, Jean-François Grassin, Thierry Joliveau, Hélène Mathian, Camille Scheffler (2024) "MOBILES: A Mobile Application for Documenting the Urban and Social Experiences of International Students". (Software).<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('levefre2024mobiles_abstract');" class="btn btn--primary">Abstract</a>
    <a href="https://hal.science/hal-04771100" style="color:white" class="btn btn--warning">Link</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('levefre2024mobiles');" class="btn btn--info">Bibtex</a>
        
<div id="levefre2024mobiles_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong>The MOBILES project focuses on studying the spatial experiences and socialization of international students through their digital practices, combining sociolinguistics, geography, and computer science. Its primary goal is to analyze how these students interact with urban spaces, considering their sensory and material perceptions, as well as their social and cultural interactions. This repository contains the source code of the MOBILES application, developed in Unity/C# for Android and iOS. The application allows international students to create rich geolocated annotations (text, photos, icons, moods) and share them. They can also initiate and detail routes reflecting their personalized journeys through the city. These routes can be automatically generated via GPS tracking or manually entered on an interactive map, contributing to the individual appropriation of space. The interactive map is at the heart of the application, providing an interface to visualize annotations and routes shared by the community, as well as to add one's own contributions. The application’s code manages geolocation, annotation creation and management, as well as route visualization on the map. Information related to users and generated content is stored in a MySQL database, which also manages the application’s configuration settings. A kTBS system records digital traces of user interactions, facilitating the analysis of behavior and application usage. The application also integrates Firebase for push notification management, enabling real-time alerts about recommendations, suggestions, or interactions with other users. This system ensures data consistency between different sessions, synchronizing information between the mobile app and the backend.</p>
</div>

> Madjid Sadallah and Jean-Marie Gilliot (2024) "Modéliser et outiller la conception participative et générative de tableaux de bord d'apprentissage soutenant la création de sens". Sciences et Technologies de l'Information et de la Communication pour l'Education et la Formation (STICEF).<br>
<span class="badge badge-journal">Journal</span><br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2024outiller_abstract');" class="btn btn--primary">Abstract</a>
    <a href="/media/papers/sadallah2024outiller.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2024outiller');" class="btn btn--info">Bibtex</a>
        
<div id="sadallah2024outiller_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Les tableaux de bord d'apprentissage, dont le déploiement doit soutenir la prise de décision à toutes les étapes de la formation, continuent de faire face à des défis d'adoption. La littérature identifie plusieurs raisons à cette réticence, notamment l'absence de principes directeurs pour la conception et une participation insuffisante des parties prenantes. Pour y remédier, nous proposons un cadre de conception ainsi que deux outils pour supporter le processus de conception. Le cadre de conception, axé sur la création de sens pour étayer la prise de décision,  guide la conception au travers d'un espace de conception exhaustif. Le premier outil propose une phase d'idéation participative et encourage la collaboration des différentes parties prenantes. Le second outil propose de simplifier le travail du développeur et d'encourager sa collaboration avec les parties prenantes. L'évaluation de ces outils repose sur des critères tels que la facilité d'utilisation, le soutien à la participation et l'expérience utilisateur, éclairant chaque étape du processus de conception. Les résultats montrent que ces outils soutiennent significativement la participation des utilisateurs finaux et l'expérience des développeurs, soulignant leur pertinence et leur efficacité. En favorisant l'adoption des tableaux de bord d'apprentissage par une conception centrée sur l'utilisateur, cette contribution met en lumière le potentiel de ces outils et l'importance des approches participatives dans le développement des technologies éducatives.</p>
</div>

<div id="sadallah2024outiller" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@article{sadallah2024outiller,
  title={Modéliser et outiller la conception participative et générative de tableaux de bord d’apprentissage soutenant la création de sens},
  author={Sadallah, Madjid and Gilliot, Jean-Marie},
  journal={Sciences et Technologies de l'Information et de la Communication pour l'Education et la Formation (STICEF)},
  volume={31},
  number={1},
  pages={},
  year={2024},
  publisher={ATIEF}
}
</code></pre></div></small>
</div>

> Jean-Marie Gilliot and Madjid Sadallah (2024) "A framework for co-designing effective LADs supporting sensemaking and decision making." _International Journal of Learning Technology_, 19(1), 109-130.<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('gilliot2024framework_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('gilliot2024framework');" class="btn btn--info">Bibtex</a>
        
<div id="gilliot2024framework_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Learning Analytics Dashboards (LAD) deserve increasing attention, yet their adoption remains limited. Designing effective LAD is a difficult process, and LADs often fail in turning insights into action. We argue that providing explicit decision-making features in a participatory design process may help to develop LADs supporting action. We first examine how the decision-making process is reflected on LADs. Second, we review the literature to identify major design space dimensions and examine how to include decision-making features. Secondly, we propose the DEFLAD design framework to synthesise this review which provides explicit decision-making features in three dimensions:  Goal expression as a situation awareness level, Visualisation and related  Interactions, as support of decision-making process. Third, we consider how this framework is involved through every stage of a Human-Centred Design (HCD) process to express and manage such features. The main contribution of this paper is to provide a framework integrating the decision-making features in a participatory design process of LADs.
Furthermore, we demonstrate the implementation of our proposals through the development of a card-based toolkit to assist in the ideation phase of participatory design, and present feedback from participants of a workshop utilizing this tool as a proof of concept.</p>
</div>

<div id="gilliot2024framework" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@article{gilliot2024framework,
  title={A framework for co-designing effective LADs supporting sensemaking and decision making},
  author={Gilliot, Jean-Marie and Sadallah, Madjid},
  journal={International Journal of Learning Technology},
  volume={19},
  number={1},
  pages={109--130},
  year={2024},
  publisher={Inderscience Publishers (IEL)}
}
</code></pre></div></small>
</div>

   > Azze-eddine Maredj, Madjid Sadallah and Nourreddine Tonkin (2024) Enhancing Multimedia Document Modeling through Extended Orbits-Based Rhetorical Structure: An Approach to Media Weighting for Importance Determination. _Knowledge and Information Systems_, 66(3), 1683–1707. Springer.<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('maredj2024_abstract');" class="btn btn--primary">Abstract</a>
    <a href="https://rdcu.be/dorje" style="color:white" class="btn btn--warning">Fulltext</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('maredj2024');" class="btn btn--info">Bibtex</a>
    
<div id="maredj2024_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> This paper proposes a graph-based approach to determine the importance of each media in a multimedia document by expanding the traditional four-dimensional model with a dimension that captures the rhetorical relations between different media types. The proposed approach utilizes an algorithm to weight the media types based on their significance. The use of rhetorical structure theory enables the determination of the significance of each media type, making it useful for document adaptation, automatic composition, and automatic generation of summaries. The approach utilizes an extended orbits-based rhetorical structure that is a novel method for determining the importance of media types in multimedia documents. The proposed approach is effective in capturing the importance of each media type and can be utilized in a wide range of applications, making it a potential solution to the limitations of the traditional model. This research has implications for a range of applications, including document adaptation, automatic composition, and automatic generation of summaries.</p>
</div>
 
<div id="maredj2024" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@article{Maredj2024, 
  author = {Azze-Eddine Maredj and Madjid Sadallah and Nourreddine Tonkin}, 
  title = {Enhancing multimedia document modeling through extended orbit-based rhetorical structure: an approach to media weighting for importance determination}, 
  journal = {Knowledge and Information Systems}, 
  volume = {66}, 
  number = {3}, 
  pages = {1683–1707}, 
  year = {2024}, 
  doi = {10.1007/s10115-023-01984-6} }
</code></pre></div></small>
</div>

<div id="maredj2024" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@article{maredj2023set,
  title={A set of rhetorical relationships for educational multimedia document},
   author={Maredj, Azze-eddine and Sadallah, Madjid and Tonkin, Nourreddine},
  journal={Knowledge and Information Systems},
  volume={},
  number={},
  pages={},
  year={2024},
  publisher={Springer}
}
</code></pre></div></small>
</div>

# 2023
  > Madjid Sadallah and Grégory Smits. "Learning Path Recommendation from an Inferred Learning Space."  In: Viberg, O., Jivet, I., Muñoz-Merino, P., Perifanou, M., Papathoma, T. (eds) Responsive and Sustainable Educational Futures. EC-TEL 2023. Lecture Notes in Computer Science, vol 14200. Springer, Cham.<br>
   <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2023learning_abstract');" class="btn btn--primary">Abstract</a>
   <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2023learning');" class="btn btn--info">Bibtex</a>
        
<div id="sadallah2023learning_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Defining a learning space of reference may be a challenging task for the concerned tutor(s). However, once formalized, such a representation of possible learning sequences may serve as a norm to evaluate the current state of a learner and to potentially derive recommendations about the next learning state to target. A pragmatic strategy is introduced in this article to ease the definition of a subjective learning space from a few tutor(s)-provided examples of representative learning paths. A measure is then also inferred from these representative paths that can then be used to evaluate an ongoing learning path. The learning space and the evaluation measure, combined together, are then used to suggest the learning activity the learner should address next.</p>
</div>

<div id="sadallah2023learning" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@inproceedings{sadallah2023learning,
  title={Learning Path Recommendation from an Inferred Learning Space},
  author={Sadallah, Madjid and Smits, Gr{\'e}gory},
  booktitle={European Conference on Technology Enhanced Learning},
  pages={630--635},
  year={2023},
  organization={Springer}
}
</code></pre></div></small>
</div>

> Madjid Sadallah and Jean-Marie Gilliot. "Fostering Collaborative and Creative Design of Learning Dashboards: An Empowered Participatory Approach and Tools." EdArXiv. <a href="https://doi.org/10.35542/osf.io/q78yn">https://doi.org/10.35542/osf.io/q78yn</a><br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2023edarxiv_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2023edarxiv');" class="btn btn--info">Bibtex</a>
    <a href="/media/papers/padlad_ladstudio_arxiv.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
        
<div id="sadallah2023edarxiv_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Learning dashboards aim to support decision-making throughout the learning process. However, their widespread adoption remains limited. While this observation can be attributed to their relatively recent emergence, research indicates that it is also due to a lack of stakeholder participation in the design process. To address this issue and involve users, we propose an integrated approach using a participatory design tool for the ideation phase and a generative tool for prototyping. We analyze these tools in terms of usability, support for participation, and user experience across the different phases. The analysis of feedback received demonstrates that these tools facilitate both end-user participation and developer user experience.</p>
</div>

<div id="sadallah2023edarxiv" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@misc{sadallah2023edarxiv,
 title={Fostering Collaborative and Creative Design of Learning Dashboards: An Empowered Participatory Approach and Tools},
 url={edarxiv.org/q78yn},
 DOI={10.35542/osf.io/q78yn},
 publisher={EdArXiv},
 author={Sadallah, Madjid and Gilliot, Jean-Marie},
 year={2023},
 month={June}
}
</code></pre></div></small>
</div>

 > Madjid Sadallah and Jean-Marie Gilliot. "Outiller la conception participative et générative de tableaux de bord d'apprentissage." In Actes de la 11e Conférence sur les Environnements Informatiques pour l'Apprentissage Humain EIAH 2023<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2023outiller_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2023outiller');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2023outiller.pdf" style="color:white" class="btn btn--warning">Pre-print</a>
<div id="sadallah2023outiller_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Les tableaux de bord d'apprentissage visent à soutenir la prise de décision au cours du processus d'apprentissage. Cependant, leur adoption à grande échelle reste limitée. Si ce constat peut s'expliquer par leur apparition relativement récente, la recherche montre que ceci est également dû au manque de participation des parties prenantes au processus de conception. Afin de soutenir ce processus tout en impliquant les utilisateurs, nous proposons d'articuler autour d'un espace de conception partagé un outil de conception participative pour la phase d'idéation et un outil génératif pour la phase de prototypage. Nous analysons ces outils en termes de facilité d'utilisation, de soutien à la participation ou d'expérience utilisateur, suivant les phases. L'analyse des retours obtenus montrent que ces outils sont utilisables et apportent un soutien tant à la participation des utilisateurs finaux qu'à l'expérience utilisateur des développeurs.</p>
</div>

<div id="sadallah2023outiller" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@inproceedings{sadallah2023outiller,
  title={Outiller la conception participative et générative de tableaux de bord d'apprentissage},
  author={Sadallah, Madjid and Gilliot, Jean-Marie},
  booktitle={Actes de la 11e Conférence sur les Environnements Informatiques pour l'Apprentissage Humain EIAH 2023},
  year={2023},
  organization={ATIEF}
}
</code></pre></div></small>
</div>

 > Madjid Sadallah, Maria Teresa Segarra, Jean-Marie Gilliot and Issam Rebai. "Un dispositif de suivi des apprentissages pour soutenir l'orchestration de la classe." In Actes de la 11e Conférence sur les Environnements Informatiques pour l'Apprentissage Humain EIAH 2023<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2023dispositif_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2023dispositif');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2023dispositif.pdf" style="color:white" class="btn btn--warning">Pre-print</a>
        <a href="/media/presentations/poster_eiah2023.pdf" style="color:white" class="btn btn--warning">Poster</a>
<div id="sadallah2023dispositif_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Le concept d'orchestration de la classe vise à saisir la complexité associée à la gestion des activités d'apprentissage synchrones (où apprenants et enseignants se retrouvent pour réaliser les activités). Notre objectif est de construire un dispositif permettant d'assister l'enseignant dans ses tâches d'orchestration, en explorant les notions de scénarisation, de suivi et de rétroaction. Dans cet article, nous présentons SAVAStudio, un outil permettant à l'enseignant de planifier le déroulement d'activités synchrones et de récupérer les traces du déroulement réel de celles-ci.</p>
</div>

<div id="sadallah2023dispositif" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@inproceedings{sadallah2023dispositif,
  title={Un dispositif de suivi des apprentissages pour soutenir l'orchestration de la classe},
  author={Sadallah, Madjid and Segarra, Maria Teresa and Gilliot, Jean-Marie and Rebai, Issam},
  booktitle={Actes de la 11e Conférence sur les Environnements Informatiques pour l'Apprentissage Humain EIAH 2023},
  year={2023},
  organization={ATIEF}
}
</code></pre></div></small>
</div>

  > Madjid Sadallah and Jean-Marie Gilliot. "Generating LADs that make sense." In Proceedings of the 15th International Conference on Computer Supported Education CSEDU 2023, pages 35-46<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2023generating_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2023generating');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2023generating.pdf" style="color:white" class="btn btn--warning">Pre-print</a>
<div id="sadallah2023generating_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Learning Analytics Dashboards (LADs)  deliver rich and actionable representations of learning data to support meaningful and insightful decisions that ultimately leverage the learning process. Yet, because of their limited large-scale adoption, their design is still a major area of inquiry in education research. In this paper, we propose to expand LAD codesign approaches. We first investigate how the user makes sense of the data delivered by LADs and how to support this sensemaking process during the design. Second, we propose a generative tool, supporting sensemaking and decision making process, that extends end-users participation during the prototyping phase and empowers LAD designers. A qualitative evaluation of the tool including usability and user experience is provided.</p>
</div>

<div id="sadallah2023generating" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@inproceedings{sadallah2023generating,
  title={Generating LADs that make sense},
  author={Sadallah, Madjid and Gilliot, Jean-Marie},
  booktitle={Proceedings of the 15th International Conference on Computer Supported Education CSEDU 2023},
  volume={1},
  pages={35--46},
  year={2023},
  organization={ISSN 2184-5026}
}
</code></pre></div></small>
</div>

  > Azze-eddine Maredj and Madjid Sadallah. A set of rhetorical relationships for educational multimedia document. Revue de l'Information Scientifique et Technique, 27(1), 1-7.<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('maredj2023set_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('maredj2023set');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/maredj2023set.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="maredj2023set_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> In this paper, we propose a set of rhetorical relations to support applications such as automatic summary generation and content adaptation of a multimedia document. These relations have been proposed in the context of an educational environment. These rhetorical relations are integrated and handled as part of the logical dimension of the multimedia document. The proposal of these relations is motivated by the need to take into account the particularities inherent to: (1) the composition, editing and presentation of a multimedia document and (2) the educational context. Indeed, multimedia documents in an educational context are very different from textual documents, for which automatic analysis and generation have led to the proposal of a set of commonly used rhetorical relations, as described in the work of Mann and Thompson. The study of this now more common context allowed us to go beyond the body of existing work to develop a more appropriate set of rhetorical relationships related to educational multimedia documents.</p>
</div>

<div id="maredj2023set" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@article{maredj2023set,
  title={A set of rhetorical relationships for educational multimedia document},
  author={Maredj, Azze-eddine and Sadallaha, Madjid},
  journal={Revue de l'Information Scientifique et Technique},
  volume={27},
  number={1},
  pages={1--7},
  year={2023},
  publisher={ASJP}
}
</code></pre></div></small>
</div>

 

# 2022
  > Madjid Sadallah, Jean-Marie Gilliot, Sébastien Iksal, Katia Quelennec, Mathieu Vermeulen, Laurent Neyssensas, Olivier Aubert and Rémi Venant. "Designing LADs That Promote Sensemaking: A Participatory Tool." In Educating for a New Future: Making Sense of Technology-Enhanced Learning Adoption: 17th European Conference on Technology Enhanced Learning, EC-TEL 2022, Toulouse, France, September 12--16, 2022, Proceedings. Springer International Publishing Cham, 2022. pp. 587--593<br>
   <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2022designing_abstract');" class="btn btn--primary">Abstract</a>
   <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2022designing');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2022designing.pdf" style="color:white" class="btn btn--warning">Accepted version</a>
        <a href="/media/presentations/poster_ectel2022.pdf" style="color:white" class="btn btn--warning">Poster</a>
<div id="sadallah2022designing_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Learning Analytics Dashboards (LADs) are data visualization tools built to empower teachers and learners to make purposeful decisions that impact the learning process. Due to their relatively recent emergence and the scarcity of studies on their design principles, dashboard design remains a major area of investigation in learning analytics research, and large scale diffusion to their stakeholders remains limited. We promote human-centered approaches for LADs design since their success in terms of acceptance and adoption greatly depends on the level of stakeholder involvement in their design. In this paper, we present a tool to support the participatory design of LADs. First experiments during a pilot study with teachers demonstrate that the proposed tool encourages group work, and in-depth exploration of LADs use.</p>
</div>

<div id="sadallah2022designing" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@inproceedings{sadallah2022designing,
  title={Designing LADs That Promote Sensemaking: A Participatory Tool},
  author={Sadallah, Madjid and Gilliot, Jean-Marie and Iksal, Sébastien and Quelennec, Katia and Vermeulen, Mathieu and Neyssensas, Laurent and Aubert, Olivier and Venant, Rémi},
  booktitle={Educating for a New Future: Making Sense of Technology-Enhanced Learning Adoption: 17th European Conference on Technology Enhanced Learning, EC-TEL 2022, Toulouse, France, September 12--16, 2022, Proceedings},
  pages={587--593},
  year={2022},
  organization={Springer International Publishing Cham}
}
</code></pre></div></small>
</div>

> Madjid Sadallah. "User-Centered Course Reengineering: An Analytical Approach to Enhancing Reading Comprehension in Educational Content." PHD Research Report (2022)<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2022user');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2022user');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2022user.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="sadallah2020towards_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> The delivery of high-quality content is essential for effective reading comprehension and, by extension, successful learning. However, ensuring that educational materials are interpreted as intended by their authors remains a persistent challenge. This challenge is amplified in the digital age, where multimedia elements and interactivity add layers of complexity to content consumption. As a result, authors must continually revise their materials to meet the evolving needs of learners. Detecting comprehension barriers and identifying actionable improvements within documents is a complex task, particularly in the educational domain, where reading is a cornerstone of learning. This study presents an innovative analytical framework aimed at assisting course designers in enhancing educational content to better support learning outcomes. Grounded in a robust theoretical foundation that integrates learning analytics, reading comprehension, and content revision, our approach introduces the concept of "usage-based document reengineering". This methodology adapts the content and structure of documents based on insights gained from analyzing digital reading traces—interactions between readers and the content. We define ``reading sessions'' as a means to capture the nuances of these interactions and develop a set of indicators to detect comprehension challenges across various dimensions of the reading process. Our framework enables authors to receive tailored recommendations for content revision through an interactive dashboard. The dashboard presents actionable insights derived from reading activity, which authors can use to refine their materials and address specific comprehension barriers. The proposed approach was implemented and evaluated using data from a prominent European e-learning platform. Comprehensive evaluations validate the effectiveness of the framework, demonstrating its capacity to empower authors with data-driven insights that facilitate targeted revisions. The findings emphasize the framework’s ability to enhance the quality of educational content, ensuring it is more responsive to learners’ needs. This research offers a significant contribution to the fields of learning analytics and content optimization, providing practical tools that can improve educational outcomes and inform future developments in e-learning environments.</p>
</div>

<div id="sadallah2022user" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@misc{sadallah2020pp,
 title={User-Centered Course Reengineering: An Analytical Approach to Enhancing Reading Comprehension in Educational Content},
 author={Sadallah, Madjid},
 year={2022},
 month={January}
}
</code></pre></div></small>
</div>

# 2021
  > Azze-Eddine Maredj and Madjid Sadallah and Lamia Hamouche. "Une cinquième dimension pour les documents multimédia: La dimension annotation." Revue de l'Information Scientifique et Technique 24.1 (2021): 12-20<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('maredj2021cinquieme_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('maredj2021cinquieme');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/maredj2021cinquieme.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="maredj2021cinquieme_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Un document multimédia intègre des entités de base de nature statique (texte, images, graphiques et tableaux) et de nature dynamique (vidéo, sons et animations), qui suivent une certaine organisation temporelle et spatiale. De nos jours, ces documents sont utilisés dans divers domaines d’application comme l’apprentissage à distance, la télémédecine, les visites virtuelles, la publicité, etc. Ces documents sont généralement modélisés par quatre dimensions: la dimension logique, la dimension temporelle, la dimension spatiale et la dimension hypermédia. Avec le temps, de nouveaux besoins sont apparus dans l’utilisation des documents multimédia, nous citons, l’adaptation des documents multimédias (où le document multimédia est présenté selon un profil utilisateur), la composition de document multimédia (qui permet de concevoir un document suite à une requête utilisateur), la recomposition de document multimédia (qui permet à un auteur de reconcevoir son document suite à l’analyse des traces de lecture), la génération de résumé automatique, etc. Les informations contenues dans ces quatre dimensions se révèlent insuffisantes pour répondre à ces besoins. D'autres informations sont donc nécessaires. Dans ce travail, nous proposons d'étendre ce modèle à cinq dimensions, en définissant une nouvelle dimension: la dimension annotation. Cette dernière comportera des informations sur le document, ses entités, son auteur et ses lecteurs, qui contribueront à la prise en charge des applications précitées.</p>
</div>

<div id="maredj2021cinquieme" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@article{maredj2021cinquieme,
  title={Une cinqui{\`e}me dimension pour les documents multim{\'e}dia: La dimension annotation},
  author={MAREDJ, Azze-Eddine and Madjid, Sadallah and Lamia, Hamouche},
  journal={Revue de l'Information Scientifique et Technique},
  volume={24},
  number={1},
  pages={12--20},
  year={2021},
  publisher={ASJP}
}
</code></pre></div></small>
</div>



# 2020
  > Madjid Sadallah, Benoît Encelle, Azze-Eddine Maredj and Yannick Prié. "Leveraging Learners' Activity Logs for Course Reading Analytics Using Session-Based Indicators." International Journal of Technology Enhanced Learning (IJTEL) 12.1 (2020): 53-78<br>
   <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2020leveraging_abstract');" class="btn btn--primary">Abstract</a>
   <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2020leveraging');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2020laveraging.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="sadallah2020leveraging_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> A challenge that course authors face when reviewing their contents is to detect how to improve their courses in order to meet the expectations of their learners. In this paper, we propose an analytical approach that exploits learners' logs of reading to provide authors with insightful data about the consumption of their courses. We first model reading activity using the concept of reading-session and propose a new and efficient session identification. We then elaborate a list of indicators computed using learners' reading sessions that allow to represent their behaviour and to infer their needs. We evaluate our proposals with course authors and learners using logs from a major e-learning platform. Interesting results were found. This demonstrates the effectiveness of the approach in identifying aspects and parts of a course that may prevent it from being easily read and understood, and for guiding the authors through the analysis and review tasks.</p>
</div>

<div id="sadallah2020leveraging" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@article{sadallah2020leveraging,
  title={Leveraging Learners' Activity Logs for Course Reading Analytics Using Session-Based Indicators},
  author={Sadallah, Madjid and Encelle, Beno{\^\i}t and Maredj, Azze-Eddine and Pri{\'e}, Yannick},
  journal={International Journal of Technology Enhanced Learning (IJTEL)},
  volume={12},
  number={1},
  pages={53--78},
  year={2020},
  publisher={Inderscience}
}
</code></pre></div></small>
</div>

  > Madjid Sadallah, Benoît Encelle, Azze-Eddine Maredj and Yannick Prié. "Towards fine-grained reading dashboards for online course revision." Educational Technology Research and Development 68 (2020): 3165-3186<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2020towards_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2020towards');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2020towards.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="sadallah2020towards_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Providing high-quality courses is of utmost importance to drive successful learning. This compels course authors to continuously review their contents to meet learners’ needs. However, it is challenging for them to detect the reading barriers that learners face with content, and to identify how their courses can be improved accordingly. In this paper, we propose a learning analytics approach for assisting course authors performing these tasks. Using logs of learners’ activity, a set of indicators related to course reading activity are computed and used to detect issues and to suggest content revisions. The results are presented to authors through CoReaDa, a learning dashboard empowered with assistive features. We instantiate our proposals using the logs of a major European e-learning platform, and validate them through a study. Study results show the effectiveness of our approach providing authors with more awareness and guidance in improving their courses, to better suit learners’ requirements.</p>
</div>

<div id="sadallah2020towards" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@article{sadallah2020towards,
  title={Towards fine-grained reading dashboards for online course revision},
  author={Sadallah, Madjid and Encelle, Beno{\^\i}t and Maredj, Azze-Eddine and Pri{\'e}, Yannick},
  journal={Educational Technology Research and Development},
  volume={68},
  pages={3165--3186},
  year={2020},
  publisher={Springer US}
}
</code></pre></div></small>
</div>

 > Madjid Sadallah. "Enhancing Course Revision: Introducing CoReaDa - an Advanced Reading Analytics Dashboard." CERIST Research Report (2020)<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2020pp');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2020pp');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2020pp.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="sadallah2020towards_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Providing high-quality courses that facilitate successful learning outcomes is an imperative goal in education. To achieve this, course authors are tasked with the ongoing responsibility of continuously reviewing and revising their course content to meet the ever-evolving needs of learners. However, identifying and addressing the reading barriers that learners encounter, as well as determining how courses can be effectively improved, pose significant challenges for course authors. In this paper, we propose a novel learning analytics approach aimed at assisting course authors in overcoming these challenges and optimizing the course revision process. Our approach leverages the wealth of information captured in learners’ activity logs to derive valuable insights into course reading activity. We compute a comprehensive set of indicators that specifically capture relevant aspects of learners’ reading behavior, allowing us to detect potential issues and suggest targeted content revisions. The utilization of learning analytics provides course authors with valuable data-driven feedback, enabling them to make informed decisions in enhancing their courses to better meet the requirements of the learners. To facilitate the effective utilization of our proposed approach, we introduce CoReaDa—an advanced learning analytics dashboard that acts as a central hub for presenting the computed indicators, offering intuitive visualizations, and providing assistive features. CoReaDa empowers course authors with a holistic view of the course reading activity, enabling them to gain actionable insights into learners’ engagement, comprehension, and potential difficulties. With its user-friendly interface and customizable functionalities, CoReaDa serves as a valuable tool in guiding course authors throughout the revision process. To validate the efficacy of our approach, we instantiate our proposals using the extensive logs gathered from a major European e-learning platform. We conduct a comprehensive study to assess the impact of our approach on course authors’ decision-making processes and the overall improvement of courses. The study results reveal that our approach significantly enhances authors’ awareness and guidance, leading to tangible improvements in course content and alignment with learners’ evolving requirements. In summary, this paper introduces a pioneering learning analytics approach for supporting course authors in the continuous process of course revision. By utilizing learners’ activity logs and presenting valuable insights through the CoReaDa dashboard, we empower course authors to detect reading barriers, identify areas for improvement, and optimize their courses to better meet the needs of the learners. The study validates the effectiveness of our approach, highlighting its potential to revolutionize course revision practices and foster enhanced learning experiences.</p>
</div>

<div id="sadallah2020pp" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@misc{sadallah2020pp,
 title={Enhancing Course Revision: Introducing CoReaDa - an Advanced Reading Analytics Dashboard},
 url={edarxiv.org/9bkad},
 DOI={10.35542/osf.io/9bkad},
 publisher={EdArXiv},
 author={Sadallah, Madjid},
 year={2020},
 month={June}
}
</code></pre></div></small>
</div>

# 2019
  > Madjid Sadallah. "Models and Tools for Usage-based e-Learning Documents Reengineering." PhD thesis, University of Bejaia - Algeria, 2019<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2019models_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2019models');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2019models.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="sadallah2019models_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Providing high-quality content is of utmost importance to drive successful reading. Besides, designing documents that are received the way the author wishes has always been difficult, and the digital world increases this difficulty by multiplying the possibilities related to mixed medias and interactivity. This compels authors to continuously review the delivered content to meet readers’ needs. Yet it remains challenging for them to detect the comprehension barriers that may exist within their documents, and to identify how these latter can be improved accordingly. This compels authors to continuously review the delivered content to meet readers’ needs. Yet it remains challenging for them to detect the comprehension barriers that may exist within their documents, and to identify how these latter can be improved accordingly. In this thesis, we focus on an educational context, where reading is a fundamental activity and the basis of many other learning activities. We propose a learning analytics approach for assisting course authors to maintain their courses to sustain learning. The proposals are based on theoretical background originated from research on learning analytics, reading comprehension and content revision. We advocate “usage-based document reengineering”, a process defined as a kind of reengineering that changes document content and structures based on the analysis of readers’ usages as recorded in their reading traces. We model reading activity using the concept of reading-session and propose a new session identification method. Using learners’ reading sessions, a set of indicators related to different aspects of the reading process are computed and used to detect comprehension issues and to suggest corrective content revisions. The results of the analytics process are presented to authors through a dashboard empowered with assistive features. We instantiate our proposals using the logs of a major European e-learning platform, and validate it through a series of studies. The results show the effectiveness of the approach and related dashboards to enhance authors awareness learners’ needs, and to provide them with guidance in improving their courses accordingly.</p>
</div>

<div id="sadallah2019models" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@phdthesis{sadallah2019models,
  title={Models and Tools for Usage-based e-Learning Documents Reengineering},
  author={Sadallah, Madjid},
  year={2019},
  school={University of Bejaia - Algeria}
}
</code></pre></div></small>
</div>

# 2015
  > Madjid Sadallah, Benoît Encelle, Azze-Eddine Maredj and Yannick Prié. "Towards reading session-based indicators in educational reading analytics." In Design for Teaching and Learning in a Networked World: 10th European Conference on Technology Enhanced Learning, EC-TEL 2015, Toledo, Spain, September 15-18, 2015, Proceedings 10, pages 297--310. Springer International Publishing, 2015<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2015towards_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2015towards');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2015towards.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="sadallah2015towards_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> It is a challenging task to identify eLearning courses parts that have to be revised to best suit learners’ requirements. Reading being one of the most salient learning activities, one way of doing so is to study how learners consume courses. We intend to support course authors (e.g. teachers) during courses revision by providing them with reading indicators. We use the concept of reading session to denote a learner’s active reading period, and we provide several associated reading indicators. In our server-side approach, reading sessions and indicators are calculated using web server logs. We evaluate the relevance of our proposals using logs from a major French eLearning platform. Results are promising: calculated reading sessions are theoretically more precise than other best applicable approaches, and course authors consider suggested indicators to be appropriate to courses revision. Using reading sessions and associated indicators could facilitate authors’ work of course reengineering.</p>
</div>

<div id="sadallah2015towards" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@inproceedings{sadallah2015towards,
  title={Towards reading session-based indicators in educational reading analytics},
  author={Sadallah, Madjid and Encelle, Beno{\^\i}t and Maredj, Azze-Eddine and Pri{\'e}, Yannick},
  booktitle={Design for Teaching and Learning in a Networked World: 10th European Conference on Technology Enhanced Learning, EC-TEL 2015, Toledo, Spain, September 15-18, 2015, Proceedings 10},
  pages={297--310},
  year={2015},
  organization={Springer International Publishing}
}
</code></pre></div></small>
</div>


# 2014
> Madjid Sadallah, Olivier Aubert and Yannick Prié, Y. (2014). CHM: an annotation-and component-based hypervideo model for the Web. Multimedia tools and applications, 70, 869-903. <br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2014chm_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2014chm');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2014chm.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="sadallah2014chm_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong>  Hypervideos are hypermedia documents that focus on video content. While they have long been deployed using specialized software or even hardware, the Web now offers a ground for them to fit into standardized languages and implementations. However, hypervideo design also currently uses very specific models limited to a single class of documents, or very generic hypermedia models that may not appropriately express their specific features. In this article we describe such features, and we introduce CHM, an annotation-driven and component-based model to conceptualize hypervideos through a high level operational specification. An extensible set of high level components is defined to emphasize the presentation and interaction features modeling, while lower level components offer more flexibility and customization opportunities. Being annotation-based, the model promotes a clear separation between video content/metadata and their various potential presentations. We also describe WebCHM, an implementation of CHM with standard Web technologies that provides a general framework to experiment with hypervideos on the Web. Two examples are provided as well as a preliminary usage study of the model and its implementation to validate our claims and proposals.</p>
</div>

<div id="sadallah2014chm" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@article{sadallah2014chm,
  title={CHM: an annotation-and component-based hypervideo model for the Web},
  author={Sadallah, Madjid and Aubert, Olivier and Pri{\'e}, Yannick},
  journal={Multimedia tools and applications},
  volume={70},
  pages={869--903},
  year={2014},
  publisher={Springer}
}
</code></pre></div></small>
</div>

# 2013
  > Madjid Sadallah, Benoît Encelle, Azze-Eddine Maredj and Yannick Prié. "A framework for usage-based document reengineering." In Proceedings of the 2013 ACM symposium on Document engineering, pages 99-102, 2013<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2013framework_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2013framework');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2013framework.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="sadallah2013framework_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> This ongoing work investigates usage-based document reengineering as a means to support authors in modifying their documents. Document usages (i.e. usage feedbacks) cover readers' explicit annotations and their reading traces. We first describe a conceptual framework with various levels of assistance for document reengineering: indications on reading, problem detection, reconception suggestions and automatic reconception propositions, taking our example in e-learning document management. We then present a technical framework for usage-based document reengineering and its associated models for documents, annotations and traces representation.</p>
</div>

<div id="sadallah2013framework" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@inproceedings{sadallah2013framework,
  title={A framework for usage-based document reengineering},
  author={Sadallah, Madjid and Encelle, Beno{\^\i}t and Mared, Azze-Eddine and Pri{\'e}, Yannick},
  booktitle={Proceedings of the 2013 ACM symposium on Document engineering},
  pages={99--102},
  year={2013}
}
</code></pre></div></small>
</div>

> Madjid Sadallah, Azze-Eddine Maredj, Benoît Encelle and Yannick Prié. "Vers une Expérience Audiovisuelle Interactive sur le Web : Un Modèle à Base de Composants et un Langage de Spécification Déclaratif pour l'Hypervidéo." Rapport de recherche, CERIST, 2013<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2013chm_rist_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2013chm_rist');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2013chm_rist.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="sadallah2013chm_rist_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Defined as a specialization of hypermedia focusing on interactive video, hypervideo is an attractive technology that promises non-conventional and powerful features. It aims to bring more powerful capabilities for video-centric documents and to offer novel user experiences with more elaborated practices and advanced interaction alternatives. Usually considered from a conventional hypermedia perspective, the underlying concepts and representations are too general to qualify   hypervideos, preventing this kind of documents from being broadly investigated. The need for theoretical foundations for hypervideos motivates the present work. With the aim to provide a formal data model that considers hypervideo beyond the very general and conventional hypermedia ones, CHM - Component-based Hypervideo Model - is an attempt to theorize hypervidéos using a component-based modeling and an annotation-driven document description. The proposed model serves as a basis for a Web-oriented implementation used as a proof of principles and a means to provide a basis for more elaborated practices of online video implementation since the features of hypervideo are grafted to wider video-based Web documents in a simple yet powerful and Web standards-compliant manner.</p>
</div>

<div id="sadallah2013chm_rist" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@misc{sadallah2013chm_rist,
 title={Vers une Expérience Audiovisuelle Interactive sur le Web : Un Modèle à Base de Composants et un Langage de Spécification Déclaratif pour l'Hypervidéo},
 publisher={CERIST},
 author={Sadallah, Madjid and MaredJ, Azze-Eddine and Encelle, Beno{\^\i}t and Pri{\'e}, Yannick},
 year={2013},
 month={December}
}
</code></pre></div></small>
</div>



# 2011
  > Madjid Sadallah, Olivier Aubert and Yannick Prié. "Component-based hypervideo model: high-level operational specification of hypervideos." In Proceedings of the 11th ACM symposium on Document engineering, pages 53-56, 2011<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2011component_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2011component');" class="btn btn--info">Bibtex</a>
        <a href="/media/papers/sadallah2011component.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="sadallah2011component_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Hypervideo offers enhanced video-centric experiences. Usually defined from a hypermedia perspective, the lack of a dedicated specification hampers hypervideo domain and concepts from being broadly investigated. This article proposes a specialized hypervideo model that addresses hypervideo specificities. Following the principles of component-based modeling and annotation-driven content abstracting, the Component-based Hypervideo Model (CHM) that we propose is a high level representation of hypervideos that intends to provide a general and dedicated hypervideo data model. Considered as a video-centric interactive document, the CHM hypervideo presentation and interaction features are expressed through a high level operational specification. Our annotation-driven approach promotes a clear separation of data from video content and document visualizations. The model serves as a basis for a Web-oriented implementation that provides a declarative syntax and accompanying tools for hypervideo document design in a Web standards-compliant manner.</p>
</div>

<div id="sadallah2011component" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@inproceedings{sadallah2011component,
  title={Component-based hypervideo model: high-level operational specification of hypervideos},
  author={Sadallah, Madjid and Aubert, Olivier and Pri{\'e}, Yannick},
  booktitle={Proceedings of the 11th ACM symposium on Document engineering},
  pages={53--56},
  year={2011}
}
</code></pre></div></small>
</div>

  > Madjid Sadallah, Olivier Aubert and Yannick Prié. "Hypervideo and Annotations on the Web." In 2011 Workshop on Multimedia on the Web, pages 10-15, IEEE, 2011<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2011hypervideo_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('sadallah2011hypervideo');" class="btn btn--info">Bibtex</a>
    <a href="/media/papers/sadallah2011hypervideo.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="sadallah2011hypervideo_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Effective video-based Web information system deployment is still challenging, while the recent widespread of multimedia further raises the demand for new online audiovisual document edition and presentation alternatives. Hyper video, a specialization of hypermedia focusing on video, can be used on the Web to provide a basis for video-centric documents and to allow more elaborated practices of online video. In this paper, we propose an annotation-driven model to conceptualize hyper videos, promoting a clear separation between video content/metadata and their various potential presentations. Using the proposed model, features of hyper video are grafted to wider video-based Web documents in a Web standards-compliant manner. The annotation-driven hyper video model and its implementation offer a general framework to experiment with new interaction modalities for video-based knowledge communication on the Web.</p>
</div>

<div id="sadallah2011hypervideo" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@inproceedings{sadallah2011hypervideo,
  title={Hypervideo and Annotations on the Web},
  author={Sadallah, Madjid and Aubert, Olivier and Pri{\'e}, Yannick},
  booktitle={2011 Workshop on Multimedia on the Web},
  pages={10--15},
  year={2011},
  organization={IEEE}
}
</code></pre></div></small>
</div>

# 2010
> Azze-Eddine Maredj, Nourreddine Tonkin and Madjid Sadallah. "MediaStudio: Un systeme d'edition et de presentation de documents multimedia interactifs." Revue d'Information Scientifique & Technique 18 (2010): 25-47<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('maredj2010mediastudio_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('maredj2010mediastudio');" class="btn btn--info">Bibtex</a>
    <a href="/media/papers/maredj2010mediastudio.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="maredj2010mediastudio_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Dans les standards et les systèmes multimédia actuels, le document est le plus souvent décrit selon une approche événementielle, d’où l’inadaptation de la programmation à la nature incrémentale du processus d'édition, la difficulté de la maintenance des documents ainsi produits et enfin les problèmes qu'ont les auteurs non-informaticiens pour les maîtriser. De plus, les travaux menés dans ce domaine se sont essentiellement focalisés sur la dimension temporelle, alors que le développement de tels systèmes devrait d’emblée considérer les quatre dimensions du document afin de mutualiser au mieux leur conception et leur implémentation. Par ailleurs, l’adaptation des documents à des profils de lecture particuliers n’est pas considérée, alors que pour certains domaines d’application, l’apprentissage par exemple, ceci reste un besoin important. En partant de ce constat, MediaStudio se veut une contribution au domaine de l’édition et de la présentation de documents multimédia interactifs à travers un ensemble de propositions pour pallier les insuffisances mentionnées.</p>
</div>

<div id="maredj2010mediastudio" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@article{maredj2010mediastudio,
  title={MediaStudio: Un systeme d'edition et de presentation de documents multimedia interactifs},
  author={Maredj, Azze-Eddine and Tonkin, Nourreddine and Sadallah, Madjid},
  journal={Revue d'Information Scientifique \& Technique},
  volume={18},
  pages={25--47},
  year={2010}
}
</code></pre></div></small>
</div>

# 2008
> Azze-Eddine Maredj, Nourreddine Tonkin, Mandid Sadallah and Zaia Alimazighi. "A flexible distance for the spatial placement in a multimedia document." Dans ICTTA’08:International Conference on Information & Communication Technologies : From theory to Applications., pages 1-4. IEEE, 2008<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('maredj2008flexible_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('maredj2008flexible');" class="btn btn--info">Bibtex</a>
    <a href="/media/papers/maredj2008flexible.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="maredj2008flexible_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> In the multimedia documents authoring systems the management of spatial and temporal inter-objects relations is the most delicate task. Spatial relations management refers to the appropriate means to express relations between the document objects and guarantee their consistency. Usually it is represented by spatial model which performances depend on its expressivity degree, on its positioning precision and on the ability to express a desired overlap. One of the most important factor that affects performances is the distance associated to the relations. To enhance the expressivity and precision degrees and to allow the specification of desired overlap, we introduce, in this paper, the flexible distance concept.</p>
</div>

<div id="maredj2008flexible" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@inproceedings{maredj2008flexible,
  title={A flexible distance for the spatial placement in a multimedia document},
  author={Maredj, A-E and Nourreddine, T and Sadallah, M and Alimazighi, Z},
  booktitle={ICTTA’08:International Conference on Information \& Communication Technologies : From theory to Applications.},
  pages={1--4},
  year={2008},
  organization={IEEE}
}
</code></pre></div></small>
</div>



# 2007
  > Azze-Eddine Maredj, Zaia Alimazighi and Madjid Sadallah. "Extension of the Wahl-Rothermel temporal model for the multimedia documents." In ICTA’07, April 12-14, Hammamet, Tunisia, pages 257-261, 2007<br>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('maredj2007extension_abstract');" class="btn btn--primary">Abstract</a>
    <a style="color:white;cursor: pointer; cursor: hand;" onclick="toggle_visibility('maredj2007extension');" class="btn btn--info">Bibtex</a>
    <a href="/media/papers/maredj2007extension.pdf" style="color:white" class="btn btn--warning">Fulltext</a>
<div id="maredj2007extension_abstract" style="display:none;">
  <p class="notice--info"><strong>Absract. </strong> Multimedia presentation defines composition of different media having inherent or assigned temporal behavior: text, images, animations, audio and video. Temporal composition is the most important feature of multimedia presentations because it defines the overall scheduling of temporal events. In this paper, our goal is to propose an extension of Whal and Rothermel temporal model to increase its degree of expressiveness. For that, a new delay definition is proposed.</p>
</div>

<div id="maredj2007extension" style="display:none;">
<small><div class="highlighter-rouge"><pre class="highlight">
<code>@inproceedings{maredj2007extension,
  title={Extension of the Wahl-Rothermel temporal model for the multimedia documents},
  author={MAREDJ, Azze-Eddine and ALIMAZIGHI, Zaia and SADALLAH, Madjid},
  booktitle={ICTA’07, April 12-14, Hammamet, Tunisia},
  pages={257--261},
  year={2007}
}
</code></pre></div></small>
</div>


<script type="text/javascript">
   function toggle_visibility(block_id) {
       var e = document.getElementById(block_id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
   }
</script>	
