import { Github, Twitter, Figma, } from 'lucide-react';
import { Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/cyber/git-logo.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

// WORK LOGOS

import apcsip_logo from '/public/images/logos/apcsip.png'
import cyart_logo from '/public/images/logos/cyart_logo.png'

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

// CERTIFICATIONS

// AIG FORAGE
import aiganz from '/public/images/aig-anz.png';
import aigdatacom from '/public/images/aig-datacom.png';
import aigmastercard from '/public/images/aig-mastercard.png';
import aignewyork from '/public/images/aig-new-york.png';

// EC-COUNCIL
import ecdarkweb from '/public/images/ec-dark-web.png';
import ecsql from '/public/images/ec-sql.png';

// TRYHACKME
import thmcybersec101 from '/public/images/thm-cybersec-101.png';
import thmintrocyber from '/public/images/thm-intro-cyber.png';
import thmjrpentest from '/public/images/thm-jr-pentest.png';
import thmpresecurity from '/public/images/thm-pre-security.png';
import thmwebfund from '/public/images/thm-web-fundamentals.png';

// IMPORTING CYBER LOGOS
import aircrackng from '/public/images/logos/cyber/aircrack-ng-logo.svg'
import bettercap from '/public/images/logos/cyber/bettercap-logo.svg'
import bloodhound from '/public/images/logos/cyber/bloodhound-logo.svg'
import burpsuite from '/public/images/logos/cyber/burpsuite-logo.svg'
import crackmapexec from '/public/images/logos/cyber/crackmapexec-logo.svg'
import dirb from '/public/images/logos/cyber/dirb-logo.svg'
import evil_winrm from '/public/images/logos/cyber/evil-winrm-logo.png'
import ffuf from '/public/images/logos/cyber/ffuf-logo.svg'
import gobuster from '/public/images/logos/cyber/gobuster-logo.svg'
import hashcat from '/public/images/logos/cyber/hashcat-logo.svg'
import hydra from '/public/images/logos/cyber/hydra-logo.svg'
import impacket from '/public/images/logos/cyber/impacket-scripts-logo.svg'
import john from '/public/images/logos/cyber/john-logo.svg'
import nmap from '/public/images/logos/nmap-logo.svg'
import metasploit from '/public/images/logos/cyber/metasploit-framework-logo.svg'
import mimikatz from '/public/images/logos/cyber/mimikatz-logo.svg'
import netcat from '/public/images/logos/cyber/netcat-logo.svg'
import responder from '/public/images/logos/cyber/responder-logo.svg'
import wireshark from '/public/images/logos/cyber/wireshark-logo.png'
import wpscan from '/public/images/logos/cyber/wpscan-logo.svg'
import dvwa from '/public/images/logos/cyber/dvwa-logo.svg'
import sublister from '/public/images/logos/cyber/sublister.svg'

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shahsagarm',
  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',
  TWITTER: 'https://twitter.com/shahsagarm',
  THM: 'https://tryhackme.com/p/TANISHRJ',
  HTB: 'https://app.hackthebox.com/profile/1945560',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About Me',
    href: '#about',
  },
  {
    label: 'Certification and Achievments',
    href: '#work',
  },
  {
    label: '',
    href: '',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/TanishRj',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/tanish-choudhary/'
  }
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'DVWA',
    logo: dvwa,
    url: 'https://www.kali.org/tools/sublist3r/',
  },
  {
    label: 'Air-Crack NG',
    logo: aircrackng,
    url: 'https://www.kali.org/tools/aircrack-ng/',
  },
  {
    label: 'Bettercap',
    logo: bettercap,
    url: 'https://www.kali.org/tools/bettercap/',
  },
  {
    label: 'Bloodhound',
    logo: bloodhound,
    url: 'https://www.kali.org/tools/bloodhound/',
  },
  {
    label: 'Burpsuite',
    logo: burpsuite,
    url: 'https://www.kali.org/tools/burpsuite/',
  },
  {
    label: 'CrackMap',
    logo: crackmapexec,
    darkModeLogo: crackmapexec,
    url: 'https://www.kali.org/tools/crackmapexec/',
  },
  {
    label: 'Dirbuster',
    logo: dirb,
    url: 'https://www.kali.org/tools/dirbuster/',
  },
  {
    label: 'Evil WinRM',
    logo: evil_winrm,
    darkModeLogo: evil_winrm,
    url: 'https://www.kali.org/tools/evil-winrm/',
  },
  {
    label: 'FFuF',
    logo: ffuf,
    url: 'https://www.kali.org/tools/ffuf/',
  },
  {
    label: 'GoBuster',
    logo: gobuster,
    url: 'https://www.kali.org/tools/gobuster/',
  },
  {
    label: 'Hashcat',
    logo: hashcat,
    url: 'https://www.kali.org/tools/hashcat/',
  },
  {
    label: 'Hydra',
    logo: hydra,
    url: 'https://www.kali.org/tools/hydra/',
  },
  {
    label: 'Sublist3r',
    logo: sublister,
    url: 'https://www.kali.org/tools/sublist3r/',
  },
  {
    label: 'Impacket Scripts',
    logo: impacket,
    darkModeLogo: impacket,
    url: 'https://www.kali.org/tools/impacket-scripts/',
  },
  {
    label: 'John',
    logo: john,
    url: 'https://www.kali.org/tools/john/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://www.kali.org/tools/git/',
  },
  {
    label: 'Nmap',
    logo: nmap,
    url: 'https://www.kali.org/tools/nmap/',
  },
  {
    label: 'Metasploit',
    logo: metasploit,
    url: 'https://www.kali.org/tools/metasploit-framework/',
  },
  {
    label: 'Mimikatz',
    logo: mimikatz,
    url: 'https://www.kali.org/tools/mimikatz/',
  },
  {
    label: 'Netcat',
    logo: netcat,
    url: 'https://www.kali.org/tools/netcat/',
  },
  {
    label: 'Responder',
    logo: responder,
    url: 'https://www.kali.org/tools/responder/',
  },
  {
    label: 'Wireshark',
    logo: wireshark,
    url: 'https://www.kali.org/tools/wireshark/',
  },
  {
    label: 'WP Scanner',
    logo: wpscan,
    url: 'https://www.kali.org/tools/wpscan/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: cyart_logo,
    logoAlt: 'Upwork logo',
    position: 'Red Team Intern',
    startDate: new Date(2025, 8),
    currentlyWorkHere: true,
    summary: [
      'Performing Vulnerability Assessment, Penetration Testing, and Security Monitoring',
      'Working on Red Team operations using popular tools like Metasploit, Cobalt Strike, Mimikatz, BloodHound and Empire',
    ],
  },
  {
    logo: apcsip_logo,
    darkModeLogo: apcsip_logo,
    logoAlt: 'apcsip_intern',
    position: 'Cyber Intern',
    startDate: new Date(2025, 5),
    endDate: new Date(2025, 5),
    summary: [
      'Completed an internship with Amroha Police focusing on cyber forensics, digital evidence handling, log analysis, and cybersecurity awareness support for investigations.',
    ],
  },
  // {
  //   logo: LogoDotnpixel,
  //   darkModeLogo: LogoDotnpixelLight,
  //   logoAlt: 'Dotnpixel logo',
  //   position: 'Full Stack Developer',
  //   startDate: new Date(2015, 11),
  //   endDate: new Date(2017, 4),
  //   summary: ['Worked as a full stack developer (React / Laravel).'],
  // },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'AIG-Forage DATACOM',
    description:
      'Completed a virtual program on enterprise datacom systems, focusing on network flow and troubleshooting.',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/gCW7Xki5Y3vNpBmnn/yTszJTvkHFBH6zAn3_gCW7Xki5Y3vNpBmnn_5cNXsa3WJcobHMymd_1733486036589_completion_certificate.pdf',
    previewImage: aigdatacom,
    technologies: [
      'Cyber Security',
      'Red Teaming',
      'Ethical Hacking'
    ],
  },
  {
    name: 'AIG-Forage NYJ Council',
    description:
      'Gained insights into stakeholder management and decision-making processes within NYJ Council.',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/4nAmAbTbHbnGMNSyo/2ZFnEGEDKTQMtEv9C_4nAmAbTbHbnGMNSyo_5cNXsa3WJcobHMymd_1733399546441_completion_certificate.pdf',
    previewImage: aignewyork,
    technologies: [
      'Cyber Security',
      'Red Teaming',
      'Ethical Hacking'
    ],
  },
  {
    name: 'AIG-Forage ANZ',
    description:
      'Explored regional compliance and client service strategies within AIG ANZ operations.',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AKkAyEwWc8wjPxx9n/Hf4QMESoFeQwXPsiH_AKkAyEwWc8wjPxx9n_5cNXsa3WJcobHMymd_1733486293813_completion_certificate.pdf',
    previewImage: aiganz,
    technologies: [
      'Cyber Security',
      'Red Teaming',
      'Ethical Hacking'
    ],
  },

  {
    name: 'AIG-Forage Mastercard',
    description:
      'Engaged in simulated tasks on fraud prevention, payments, and partner coordination with AIG and Mastercard.',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_5cNXsa3WJcobHMymd_1733397152638_completion_certificate.pdf',
    previewImage: aigmastercard,
    technologies: [
      'Cyber Security',
      'Red Teaming',
      'Ethical Hacking'
    ],
  },

  // EC-COUNCIL
{
    name: 'EC-Council Intro to Dark Web',
    description:
      'Studied dark web structures, threats, and safe investigative practices in cybersecurity contexts.',
    url: 'https://eccommonstorage.blob.core.windows.net/codered/certificates/d948d24b-b65e-4246-af54-63e7c2479534.png',
    previewImage: ecdarkweb,
    technologies: [
      'Cyber Security',
      'Red Teaming',
      'Ethical Hacking',
      'Dark Web'
    ],
  },

  {
    name: 'EC-Council SQL Injection Attacks',
    description:
      'Learned SQL injection techniques, impact analysis, and mitigation strategies in secure coding.',
    url: 'https://eccommonstorage.blob.core.windows.net/codered/certificates/df2d5682-3e95-447b-8822-2438b655c235.png',
    previewImage: ecsql,
    technologies: [
      'Cyber Security',
      'Red Teaming',
      'Ethical Hacking',
      'Database Hacking'
    ],
  },

// TRYHACKME

{
    name: 'TryHackMe Pre Security',
    description:
      'Completed foundational training in cybersecurity concepts, networking, and virtual lab safety.',
    url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-9HY7GMVIRU.pdf',
    previewImage: thmpresecurity,
    technologies: [
      'Cyber Security',
      'Red Teaming',
      'Ethical Hacking',
      'Database Hacking'
    ],
  },

  {
    name: 'TryHackMe CyberSec 101',
    description:
      'Covered core cybersecurity principles including encryption, threat types, and basic defenses.',
    url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-NSUGXVKRS8.pdf',
    previewImage: thmcybersec101,
    technologies: [
      'Cyber Security',
      'Red Teaming',
      'Ethical Hacking',
      'Database Hacking'
    ],
  },

  {
    name: 'TryHackMe Intro to Cyber Security',
    description:
      'Introduced to cybersecurity careers, common attacks, and basic protective measures.',
    url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-8KVA9UDYRP.pdf',
    previewImage: thmintrocyber,
    technologies: [
      'Cyber Security',
      'Red Teaming',
      'Ethical Hacking',
      'Database Hacking'
    ],
  },

  {
    name: 'TryHackMe Web Fundamentals',
    description:
      'Learned how web technologies work and how to identify and secure common vulnerabilities.',
    url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-KF6Q0FB8Y4.pdf',
    previewImage: thmwebfund,
    technologies: [
      'Cyber Security',
      'Red Teaming',
      'Ethical Hacking',
      'Database Hacking'
    ],
  },

  {
    name: 'TryHackMe Jr Penetration Tester',
    description:
      'Hands-on training in basic penetration testing, from reconnaissance to reporting.',
    url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-B1YNAP2SZO.pdf',
    previewImage: thmjrpentest,
    technologies: [
      'Cyber Security',
      'Red Teaming',
      'Ethical Hacking',
      'Database Hacking'
    ],
  },
];

// export const TESTIMONIALS: TestimonialDetails[] = [
  // {
  //   personName: '',
  //   personAvatar: AvatarKrisztian,
  //   title: '',
  //   testimonial:
  //     'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  // },
  // {
  //   personName: 'Eugen Esanu',
  //   personAvatar: AvatarEugen,
  //   title: 'Founder - shosho.design',
  //   testimonial:
  //     'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  // },
  // {
  //   personName: 'Joe Matkin',
  //   personAvatar: AvatarDummy,
  //   title: 'Freelancer',
  //   testimonial:
  //     'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  // },
// ];
