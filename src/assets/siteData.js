import fileConversationImage from "../../assets/img/lyvan/file_conversation-new.png";
import postTranslationImage from "../../assets/img/lyvan/Post_translation_DTP-new.jpg";
import contentUpdationImage from "../../assets/img/lyvan/Content_Updation.jpg";
import standaloneDqaImage from "../../assets/img/lyvan/Standalone_DQA-new.png";
import qualityAssuranceImage from "../../assets/img/lyvan/Quality_Assurance-new.png";
import projectManagementImage from "../../assets/img/lyvan/Project-Management-new.png";
import dtpImage from "../../assets/img/lyvan/dtp-new.png";
import workflowImage from "../../assets/img/lyvan/workflow.jpg";

import russianDtp1Image from "../../assets/img/lyvan/porfolio/russian-dtp1.png";
import russianDtp2Image from "../../assets/img/lyvan/porfolio/russian-dtp2.png";
import arabicDtp1Image from "../../assets/img/lyvan/porfolio/arabic-dtp1.png";
import arabicDtp2Image from "../../assets/img/lyvan/porfolio/arabic-dtp2.png";
import hebrew1Image from "../../assets/img/lyvan/porfolio/hebrew1.png";
import hebrew2Image from "../../assets/img/lyvan/porfolio/hebrew2.png";
import japaneseDtp1Image from "../../assets/img/lyvan/porfolio/japanese-dtp1.png";
import japaneseDtp2Image from "../../assets/img/lyvan/porfolio/japanese-dtp2.png";
import greekRecreation1Image from "../../assets/img/lyvan/porfolio/greek-recreation1.png";
import greekRecreation2Image from "../../assets/img/lyvan/porfolio/greek-recreation2.png";

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export const whyUsSlides = [
  {
    title: "Let's grow your business together",
    subtitle:
      "Our ultimate aim is to make service without boundaries and to do business from the bottom up having right systems in place.",
    body: "We are more productive, more efficient than anybody else, and believe our highly innovative process, technology and multi-skilled workforce makes us a capable and flexible provider in the global publishing industry.",
    proof: "8+ years specialized in publishing & localization",
    icon: "bi-lightning-charge",
  },
  {
    title: "We are specialized in:",
    subtitle:
      "File Preparation for Translation, Post Translation DTP, Content Updation, Standalone DQA and Remediation",
    body: "We offer expert project management services, design template layouts and content structures. We take care of data conversion, page production, copy-editing and e-publishing requirements.",
    proof: "6 core services + process automation",
    icon: "bi-gear",
  },
  {
    title: "Workflow of LYVAN",
    subtitle: "We offer a complete range of services at competitive prices.",
    body: "Having specialized in DTP since 2016, we have served clients across UK, North America, South America, Europe, Africa, China, Australia and India while consistently meeting delivery promises.",
    proof: "Serving 15+ regions worldwide",
    icon: "bi-globe",
  },
];

export const featuredServices = [
  {
    id: "file_preparation",
    title: "File Preparation",
    summary: "Extract and prepare content for multilingual workflows",
    capabilities: ["OCR technology extraction", "Multi-language support"],
    image: fileConversationImage,
    badge: "Core Service",
  },
  {
    id: "post_translation",
    title: "Post Translation DTP",
    summary: "Professional layout and design for translated content",
    capabilities: ["Multi-byte language support", "Ready-to-print delivery"],
    image: postTranslationImage,
    badge: "Most Requested",
  },
  {
    id: "content_updation",
    title: "Content Updation",
    summary: "Keep your materials current with regular updates",
    capabilities: ["Annual & fund reports", "Modification management"],
    image: contentUpdationImage,
    badge: "Core Service",
  },
  {
    id: "standalone",
    title: "Standalone DQA",
    summary: "Comprehensive quality assurance for typeset files",
    capabilities: ["Layout verification", "Content accuracy checking"],
    image: standaloneDqaImage,
    badge: "Quality Layer",
  },
  {
    id: "quality_assurance",
    title: "Quality Assurance",
    summary: "End-to-end QA ensuring delivery excellence",
    capabilities: ["Consistency verification", "Multi-checkpoint testing"],
    image: qualityAssuranceImage,
    badge: "Quality Layer",
  },
  {
    id: "project_management",
    title: "Project Management",
    summary: "Expert coordination from planning to delivery",
    capabilities: ["Timeline management", "Resource optimization"],
    image: projectManagementImage,
    badge: "Support Service",
  },
];

export const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah M",
    company: "Kovai Caterers",
    role: "Event Manager",
    image: fileConversationImage,
    quote:
      "We have been able to streamline our menu planning, automate ingredient calculations, and ensure we deliver flawless services every time.",
  },
  {
    id: "testimonial-2",
    name: "Krishnan",
    company: "Rotary",
    role: "Club Secretary",
    image: postTranslationImage,
    quote:
      "By leveraging LYVAN's production support, our club now automates routine tasks and gets accurate information instantly with higher confidence.",
  },
  {
    id: "testimonial-3",
    name: "Arun",
    company: "Jurist",
    role: "Legal Consultant",
    image: contentUpdationImage,
    quote:
      "It simplifies drafting legal documents, provides case references, and answers complex legal queries quickly. A must-have for modern legal teams.",
  },
  {
    id: "testimonial-4",
    name: "Priya N",
    company: "Edutech",
    role: "Program Director",
    image: standaloneDqaImage,
    quote:
      "The turnaround times improved sharply while quality stayed consistent. Their team communicates clearly and supports every milestone.",
  },
  {
    id: "testimonial-5",
    name: "Daniel R",
    company: "MedPrint",
    role: "Operations Lead",
    image: qualityAssuranceImage,
    quote:
      "From file prep to final QA, the process felt controlled and transparent. We now deliver multilingual assets faster across regions.",
  },
  {
    id: "testimonial-6",
    name: "Riya K",
    company: "Nimbus Media",
    role: "Content Head",
    image: projectManagementImage,
    quote:
      "LYVAN's workflow support reduced rework and gave our production team better visibility over deadlines and quality checkpoints.",
  },
];

export const serviceDetails = [
  {
    id: "file_preparation",
    title: "File Preparation",
    image: fileConversationImage,
    description:
      "Our conversion team specializes in extracting translatable text from any type of source PDF file. Custom-made tools and OCR technology enable accurate extraction, and the cleaned content is validated against customer requirements.",
    bullets: [
      "Text extraction from any PDF format and in any language.",
      "Source recreation from any PDF in InDesign platform.",
      "Exporting MIF files from Framemaker",
      "Exporting .Tag files from QuarkXPress using Copyflow Gold",
      "Exporting XML files from Captivate and Articulate Storyline",
      "Exporting SVG files from Adobe Illustrator",
    ],
    bestFor: "Publishing teams preparing content for multilingual distribution",
    actionText: "Request File Preparation Quote",
  },
  {
    id: "post_translation",
    title: "Post Translation DTP",
    image: postTranslationImage,
    description:
      "We offer a wide range of desktop publishing solutions for multilingual projects. The team handles single-byte, double-byte and multibyte languages and delivers ready-to-print files using standard publishing applications.",
    bullets: [
      "DTP in Microsoft Office applications and Visio.",
      "DTP in Adobe Creative Cloud, FrameMaker, QuarkXPress, Robohelp and similar tools.",
      "DTP on .SRT subtitle files.",
      "E-learning applications such as Captivate and Storyline.",
      "CADD and XML-based workflows.",
    ],
    bestFor: "Projects requiring professional multilingual layout and design",
    actionText: "Discuss Your DTP Project",
  },
  {
    id: "content_updation",
    title: "Content Updation",
    image: contentUpdationImage,
    description:
      "We update fund reports and annual reports at regular intervals, applying content changes and modifications based on project needs for files that were typeset elsewhere.",
    bullets: [
      "Regular content updates and maintenance",
      "Annual and periodic report refreshes",
      "Modification management to existing layouts",
      "Consistent formatting and branding",
    ],
    bestFor: "Organizations with regular content refresh cycles",
    actionText: "Schedule Content Update Consultation",
  },
  {
    id: "standalone",
    title: "Standalone DQA - Quality Assurance Services",
    image: standaloneDqaImage,
    description:
      "We provide stand-alone DQA services for files typeset elsewhere. Checkpoints cover layout, pagination, content, tables, file naming, language nuances, fonts, styles, TOC, cross-references, graphics and index entries.",
    bullets: [
      "Comprehensive layout and pagination verification",
      "Content accuracy and language nuance checking",
      "Font, style, and formatting consistency review",
      "Cross-reference and index validation",
    ],
    bestFor: "Quality assurance of externally produced files",
    actionText: "Submit Files for DQA Review",
  },
  {
    id: "quality_assurance",
    title: "Quality Assurance",
    image: qualityAssuranceImage,
    description:
      "Project managers work closely with clients to ensure specialized requirements are met. QA focuses on layout, pagination, content, tables, file naming and overall consistency across deliverables.",
    bullets: [
      "Multi-checkpoint quality verification",
      "Layout and pagination consistency",
      "Table and content accuracy validation",
      "Delivery readiness assessment",
    ],
    bestFor: "End-to-end quality oversight of your project",
    actionText: "Discuss QA Strategy with Our Team",
  },
  {
    id: "project_management",
    title: "Project Management",
    image: projectManagementImage,
    description:
      "LYVAN focuses on planning and organizing projects and resources. The workflow covers lifecycle definition, team formation, deliverables, schedules and on-time completion within budget.",
    bullets: [
      "Comprehensive project planning and timeline management",
      "Resource allocation and team coordination",
      "Deliverable tracking and milestone management",
      "Budget optimization and on-time delivery",
    ],
    bestFor: "Complex projects requiring expert coordination",
    actionText: "Plan Your Project with LYVAN",
  },
  {
    id: "DTP_applications",
    title: "DTP Applications",
    image: dtpImage,
    description:
      "We work with major DTP and design applications used in publishing and e-learning projects.",
    bullets: [
      "MS Office applications",
      "Adobe Creative Cloud applications",
      "E-learning applications such as Storyline",
      "QuarkXPress and Framemaker",
    ],
    bestFor: "Projects using industry-standard design applications",
    actionText: "Learn About Our DTP Capabilities",
  },
  {
    id: "workFlow",
    title: "WorkFlow",
    image: workflowImage,
    description:
      "We offer a complete range of services at competitive prices. Our workflow emphasizes language analysis, localization review, project management, data security, power backup, redundancy and delivery control.",
    bullets: [
      "Language analysis and localization review",
      "Project management and team coordination",
      "Data security and backup systems",
      "Redundancy planning and delivery control",
    ],
    bestFor: "Organizations seeking end-to-end workflow solutions",
    actionText: "Explore Our Workflow Solutions",
  },
];

export const portfolioGroups = [
  {
    title: "Russian DTP",
    items: [
      {
        label: "English",
        image: russianDtp1Image,
        pair: "EN → RU",
        type: "Technical Documentation",
        complexity: "High",
        scope: "Full DTP + Layout",
      },
      {
        label: "Russian",
        image: russianDtp2Image,
        pair: "EN → RU",
        type: "Technical Documentation",
        complexity: "High",
        scope: "Full DTP + Layout",
      },
    ],
  },
  {
    title: "Arabic DTP",
    items: [
      {
        label: "English",
        image: arabicDtp1Image,
        pair: "EN → AR",
        type: "Publishing Content",
        complexity: "High",
        scope: "RTL Setup + DTP",
      },
      {
        label: "Arabic",
        image: arabicDtp2Image,
        pair: "EN → AR",
        type: "Publishing Content",
        complexity: "High",
        scope: "RTL Setup + DTP",
      },
    ],
  },
  {
    title: "Hebrew Recreation",
    items: [
      {
        label: "Hebrew",
        image: hebrew1Image,
        pair: "EN → HE",
        type: "Technical Guide",
        complexity: "Medium",
        scope: "Content Recreation",
      },
      {
        label: "Hebrew",
        image: hebrew2Image,
        pair: "EN → HE",
        type: "Technical Guide",
        complexity: "Medium",
        scope: "Content Recreation",
      },
    ],
  },
  {
    title: "Japanese DTP",
    items: [
      {
        label: "English",
        image: japaneseDtp1Image,
        pair: "EN → JA",
        type: "Medical Documentation",
        complexity: "High",
        scope: "Full DTP + CJK",
      },
      {
        label: "Japanese",
        image: japaneseDtp2Image,
        pair: "EN → JA",
        type: "Medical Documentation",
        complexity: "High",
        scope: "Full DTP + CJK",
      },
    ],
  },
  {
    title: "Greek Recreation",
    items: [
      {
        label: "Greek",
        image: greekRecreation1Image,
        pair: "EN → EL",
        type: "Legal Document",
        complexity: "Medium",
        scope: "Content Recreation",
      },
      {
        label: "Greek",
        image: greekRecreation2Image,
        pair: "EN → EL",
        type: "Legal Document",
        complexity: "Medium",
        scope: "Content Recreation",
      },
    ],
  },
];

export const contactDetails = {
  // phone: "+91 784 509 3096",
  email: "projects@lyvan.in",
  address: [
    "No. 71-A, Carmel Nagar, Mettur",
    "Coimbatore South, Podanur,",
    "Coimbatore-641 023",
  ],
};
