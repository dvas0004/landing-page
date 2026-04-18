export const name = 'David Vassallo'
export const title = 'CTO at CyberSift'
export const tagline = 'Creative engineer & disruptive thinker pushing technological boundaries'
export const location = 'Malta'

export const about = `A creative engineer and disruptive thinker with a tremendous passion for challenging technological boundaries. Continuously pushing the envelope, hacking, creating and exploring technology.\n\nWith 18+ years of experience spanning cybersecurity, full-stack development, machine learning, and systems architecture, I build solutions that merge deep technical expertise with practical business value.`

export const experience = [
  {
    role: 'CTO',
    company: 'CyberSift.io',
    period: 'Feb 2017 – Present',
    description: 'Leading technology strategy and engineering for CyberSift, a cyber-awareness platform (11-50 employees) leveraging data analytics and machine learning to highlight abnormalities in network and system activity. The platform enables customers to become more aware of their activities and highlight potential threats, reducing threat mitigation time from months to weeks or days.',
    tags: ['Cybersecurity', 'Machine Learning', 'Data Analytics', 'Leadership'],
  },
  {
    role: 'Director of R&D & Senior Software Architect',
    company: '6PM Solutions',
    period: 'May 2015 – Jan 2017',
    description: 'Led academic, security, and technical research to identify technologies that could drive productivity and profitability. Reported directly to CEO and CTO, developing proof-of-concept systems across multiple technologies. Notable projects: ML-based anomaly detection on security logs (ElasticSearch, Python, Java, Postgres, GoLang); vein pattern biometric patient identification system (Python, ReactJS, Raspberry Pi); MQTT mobile messaging platform (Android Java, Java Spring, Python, Docker); BLE indoor positioning system (Android Java, Python, AngularJS, PouchDB, Node.JS); hardware interfacing in C++ and C.',
    tags: ['R&D', 'Architecture', 'Python', 'Java', 'GoLang', 'ReactJS', 'Docker'],
  },
  {
    role: 'Senior Full Stack Engineer',
    company: '6PM Solutions',
    period: 'Aug 2012 – May 2015',
    description: 'Increased focus on full stack development and security across multiple technologies, complementing networking and security work with broader development capabilities. Notable projects: SIP gateway integration with automated task management; health software with patient management systems for the NHS using MirthConnect and HL7; NFC technology integration into Android apps; NHS digital pager system using legacy hardware and new smartphones.',
    tags: ['Java Spring', 'Python', 'ReactJS', 'Node.js', 'Ruby on Rails', 'HL7'],
  },
  {
    role: 'DevOps & Network Security Engineer',
    company: 'BetClic Everest Group',
    period: 'Jul 2011 – Aug 2012',
    description: 'Ensured 99.999% uptime of site services from a networking, security, and monitoring perspective. Developed automation scripts in PowerShell, Bash, Python, and Ruby for automated deployment and monitoring. Gained experience in PHP while working on an open source monitoring solution.',
    tags: ['DevOps', 'Network Security', 'Linux', 'Automation', 'PHP'],
  },
  {
    role: 'Senior Support Engineer',
    company: 'Blue Coat Systems',
    period: 'Apr 2010 – Jul 2011',
    description: 'Provided technical support including designing, implementing, and troubleshooting various Blue Coat products, including proxies, network security solutions, and WAN acceleration products.',
    tags: ['Network Security', 'Proxies', 'WAN Acceleration'],
  },
  {
    role: 'Senior Support Engineer',
    company: 'SonicWALL',
    period: 'Mar 2008 – Apr 2010',
    description: 'Provided technical support including designing, implementing, and troubleshooting Dell SonicWALL products, including firewalls, email security solutions, and backup systems.',
    tags: ['Firewalls', 'Email Security', 'Backup'],
  },
  {
    role: 'NOC Operative',
    company: 'MITTS Ltd',
    period: 'Aug 2007 – Oct 2007',
    description: 'NOC operative in mixed network environment providing first-line support.',
    tags: ['NOC', 'Network Operations', 'First-Line Support'],
  },
]

export const education = {
  degree: 'MSc in Computer Security (Distinction)',
  school: 'University of Liverpool',
  period: '2014 – 2017',
  location: 'United Kingdom',
  program: 'Comprehensive programme covering cryptography, forensics, network design and programming the internet, along with commercial and legal considerations that influence security policy.',
  dissertation: {
    title: 'BioRFID: A Patient Identification System using Biometrics and RFID',
    description: 'A proof of concept biometric system that uses data mining to identify patients using wrist vein patterns. The system achieves around 91% identification accuracy using near-infrared images processed through sparse-coding algorithms on Raspberry Pi hardware.',
    link: 'https://www.researchgate.net/publication/317646400_BioRFID_A_Patient_Identification_System_using_Biometrics_and_RFID',
  },
}

export const certifications = [
  { name: 'Cisco Certified Design Professional (CCDP)', issuer: 'Cisco', year: '2014' },
  { name: 'CCNP Security', issuer: 'Cisco', year: '2011' },
  { name: 'CCNP Routing & Switching', issuer: 'Cisco', year: '2009' },
  { name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', year: '2011' },
  { name: 'CNSE', issuer: 'Palo Alto Networks', year: '2012' },
  { name: 'LPIC-2', issuer: 'Linux Foundation', year: '2011' },
  { name: 'Citrix Certified Administrator', issuer: 'Citrix', year: '2013' },
  { name: 'Bluecoat Certified Proxy Professional', issuer: 'BlueCoat', year: '2010' },
  { name: 'Certified SonicWALL Systems Administrator', issuer: 'Dell SonicWALL', year: '2009' },
  { name: 'Microsoft Certified Professional', issuer: 'Microsoft', year: '2010' },
]

export const honors = [
  {
    title: 'Hackathon 2014 Winner',
    issuer: 'MITA - Malta Information Technology Agency',
    date: 'Oct 2014',
    description: 'Winner of MITA Hackathon 2014 as part of team "Senseon", organized by David Kennedy in "find the flag" format.',
  },
  {
    title: 'Most Technical Project - Startup Weekend Malta',
    issuer: 'Startup Weekend Malta',
    date: 'May 2013',
    description: 'MagicWaves, a financial website projecting future stock and portfolio behaviour, won the "most technical project" award among approximately 20 contestants.',
  },
]

export const github = {
  username: 'dvas0004',
  url: 'https://github.com/dvas0004',
  contributions: 761,
  repos: [
    { name: 'nifi-loadbalancer', stars: 6, description: 'Load balancing processor for NiFi with health checks' },
    { name: 'bokeh-react', stars: 20, description: 'BokehJS integration boilerplate for HTML webpages' },
    { name: 'py_rdiff', stars: 0, description: 'Python librsync wrapper for rdiff functionality' },
    { name: 'android-david-vassallo-blog-app', stars: 1, description: 'Android RSS feed aggregator' },
  ],
}

export const contact = {
  linkedin: 'https://www.linkedin.com/in/dvas0004/',
  github: 'https://github.com/dvas0004',
  email: 'david@cybersift.io',
}
