---
layout: single
classes: wide
read_time: false
comments: false
share: false
author_profile: true
title: LADStudio, 2022
permalink: /projects/ladstudio/
---

## Description

LADStudio is a web-based tool designed to facilitate the creation and management of decision-oriented learning dashboards. By providing users with powerful visualization tools, LADStudio enables the user to identify patterns, extract insights, and make data-driven decisions. The platform empowers users to explicitly express the cognitive process related to decision-making by supporting situational awareness and sensemaking through interactive and dynamic visualizations. With LADStudio, you can easily transform raw data into actionable insights and decision-support tools, making it an invaluable asset for any individual or organization engaged in data-driven decision making.

LADStudio is a tool that assists in the specification and generation of dashboards. It enables designers to collaborate with end-users in building and implementing complex dashboards by providing high-level information. The specifications entered into LADStudio can result from a codesign process during the ideation phase.

LADStudio follows a three-tier architecture, separating presentation, application processing, and management into logical processes. Modern technologies were used to implement it, and the dashboard rendering is tested using Grafana, an open-source analytics and interactive visualization tool.

A component-based approach is employed for modeling the structure of LADs. The structure and logical view of a dashboard are constructed using a hierarchy of nested components. This approach simplifies the design process by providing common, shareable, and reusable components. New components can be created from scratch, edited from existing ones, or derived from lower-level components.

The library of LAD components encompasses different types, including indicators, visualizations, panels, and views. Indicators describe high-level measures of interest, visualizations are rendering components with a visual manifestation, panels are the building blocks of the dashboard, and views support different levels of awareness. Views are classified as perception views, comprehension views, and projection views, depending on the targeted level of situation awareness.

To facilitate the reuse and sharing of components, the library allows the definition and storage of indicator templates, visualizations, panels, composite panels, and views. Users can extend the library by creating new components or modifying existing ones. Interactions associated with each component support the sensemaking process.

The LAD specification wizard is a component of the tool that enables step-by-step specification of a dashboard. It consists of five sequential screens that guide the specification process. The screens include target use and usage description, goal setting, monitoring and perception views, analysis and comprehension views, and dashboard generation and export. The wizard allows the user to gather information about the dashboard, set goals, create different views, and ultimately generate a working prototype.

The specification process is cyclical, allowing for re-editing and testing. Components produced during the specification are automatically saved, simplifying the reuse of components within the LADStudio library.

LADStudio utilizes a generative design approach for prototype generation, aiming to prevent users from needing technical skills. The tool generates running prototypes based on the LAD specifications, and users have the ability to adjust and personalize the generated dashboard according to their preferences and needs. The LAD can be rendered in an embedded Grafana instance or a remote installation, and users can also download the JSON description file for further use.
