import {ArrowRight, Check, Code2, Download, Mail, MapPin, Menu, Phone, Send, Terminal, X} from 'lucide-react'
import {useEffect, useState} from 'react'
import type {FormEvent, ReactNode} from 'react'
import './App.css'
import html5Logo from './assets/logos/html5.svg'
import javascriptLogo from './assets/logos/javascript.svg'
import reactLogo from './assets/logos/react.svg'
import nodeLogo from './assets/logos/nodedotjs.svg'
import djangoLogo from './assets/logos/django.svg'
import javaLogo from './assets/logos/java.svg'
import phpLogo from './assets/logos/php.svg'
import databaseLogo from './assets/logos/postgresql.svg'
import gitLogo from './assets/logos/git.svg'
import dockerLogo from './assets/logos/docker.svg'
import linuxLogo from './assets/logos/linux.svg'
import vscodeLogo from './assets/logos/vscode.svg'
import jiraLogo from './assets/logos/jira.svg'
import postmanLogo from './assets/logos/postman.svg'
import swaggerLogo from './assets/logos/swagger.svg'
import testingLogo from './assets/logos/junit5.svg'
import cicdLogo from './assets/logos/githubactions.svg'
import umlLogo from './assets/logos/uml.svg'
import typescriptLogo from './assets/logos/typescript.svg'
import cssLogo from './assets/logos/css.svg'
import expressLogo from './assets/logos/express.svg'
import mongoLogo from './assets/logos/mongodb.svg'
import figmaLogo from './assets/logos/figma.svg'
import stitchLogo from './assets/logos/stitch.svg'

const nav = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact']
const projects = [
  {name:'League OS',description:'Multi-tenant sports platform for clubs, fans, admins and sponsors.',stack:['ReactJS','Django','PostgreSQL'],kind:'league',category:'Web Apps'},
  {name:'Karibu Groceries',description:'Wholesale cereal distributor system with inventory and sales management.',stack:['Node.js','Express','MongoDB'],kind:'groceries',category:'Web Apps'},
  {name:'Warehouse Management System',description:'Inventory and stock management with reporting and dashboards.',stack:['ReactJS','Django','PostgreSQL'],kind:'warehouse',category:'Web Apps'},
  {name:'ALCC System',description:'A church service management system with member and event management.',stack:['ReactJS','Django','PostgreSQL'],kind:'system',category:'Web Apps'},
  {name:'Personal Portfolio Website',description:'A showcase of my skills, projects and professional journey.',stack:['ReactJS','HTML/CSS','JavaScript'],kind:'portfolio',category:'Websites'},
  {name:'Other Contributions',description:'OpenStreetMap and Wikimedia contributor, content creator and community advocate.',stack:['OSM','Wikimedia','Social Media'],kind:'map',category:'Community'}
]
const skills = [['HTML5',html5Logo],['CSS3',cssLogo],['JavaScript',javascriptLogo],['TypeScript',typescriptLogo],['ReactJS',reactLogo],['Node.js',nodeLogo],['Express.js',expressLogo],['MongoDB',mongoLogo],['Python (Django)',djangoLogo],['Java',javaLogo],['PHP',phpLogo],['MySQL / PostgreSQL',databaseLogo],['Git & GitHub',gitLogo],['Docker',dockerLogo],['Linux',linuxLogo],['VS Code',vscodeLogo],['Figma',figmaLogo],['Stitch',stitchLogo],['Jira',jiraLogo],['Postman',postmanLogo],['Swagger',swaggerLogo],['TDD / BDD',testingLogo],['CI/CD',cicdLogo],['UML',umlLogo]]

function Info({icon,title,value}:{icon:ReactNode,title:string,value:string}) { return <div className="info"><i>{icon}</i><div><b>{title}</b><span>{value}</span></div></div> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [filter, setFilter] = useState('All')
  const [sent, setSent] = useState(false)
  const scrollTo = (name:string) => { document.getElementById(name.toLowerCase())?.scrollIntoView({behavior:'smooth'}); setMenuOpen(false) }
  const submit = (event:FormEvent<HTMLFormElement>) => { event.preventDefault(); event.currentTarget.reset(); setSent(true) }
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { const visible = entries.find(entry => entry.isIntersecting); if (visible) setActive(visible.target.id[0].toUpperCase() + visible.target.id.slice(1)) }, {rootMargin:'-35% 0px -55% 0px'})
    nav.forEach(name => { const section = document.getElementById(name.toLowerCase()); if (section) observer.observe(section) })
    return () => observer.disconnect()
  }, [])
  const filtered = projects.filter(project => filter === 'All' || project.category === filter)
  return <main>
    <header className="nav"><button className="brand" onClick={() => scrollTo('Home')}><img src="/profile_pic.jpg" alt="Dawa Edina Hillary"/><span>Dawa Edina Hillary</span></button><nav className={menuOpen ? 'open' : ''}>{nav.map(name => <button className={active === name ? 'active' : ''} key={name} onClick={() => scrollTo(name)}>{name}</button>)}</nav><a className="cv" href="mailto:dawa.hillary20@gmail.com?subject=CV%20request"><Download size={14}/>Request CV</a><button className="menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button></header>
    <section id="home" className="hero-section"><div className="hero-copy"><p className="eyebrow">Hello, I&apos;m</p><h1>Dawa Edina <em>Hillary</em></h1><h2>Full-Stack Developer &amp; ICT Specialist</h2><p className="intro">I build modern web applications, provide technical support, ensure system reliability, and use technology to solve real-world problems and create meaningful impact.</p><div className="actions"><button className="primary" onClick={() => scrollTo('Projects')}>View My Projects <ArrowRight size={17}/></button><a className="outline" href="mailto:dawa.hillary20@gmail.com?subject=CV%20request">Request CV <Download size={15}/></a></div><div className="social"><a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/dawa-edina" target="_blank" rel="noreferrer"><Code2/></a><a aria-label="GitHub profile" href="https://github.com/Dawaedina27" target="_blank" rel="noreferrer"><Terminal/></a><a aria-label="Email Dawa" href="mailto:dawa.hillary20@gmail.com"><Mail/></a></div></div><div className="portrait-wrap"><i className="orb orb-a"/><i className="orb orb-b"/><img className="portrait" src="/profile_pic.jpg" alt="Dawa Edina Hillary"/></div></section>
    <section id="about" className="section about"><div><p className="label">ABOUT ME</p><h2 className="title">My Professional<br/>Statement</h2><p>Experienced in software development, IT support, quality assurance, and digital communications, with practical skills in building applications, troubleshooting systems, and managing data.</p><p>Passionate about using technology to solve real-world problems, create innovative solutions, and improve access to digital services through continuous learning and collaboration.</p><p className="signature">Dawa Edina Hillary</p></div><aside className="contact-card"><Info icon={<MapPin/>} title="Location" value="Arua, Uganda"/><Info icon={<Mail/>} title="Email" value="dawa.hillary20@gmail.com"/><Info icon={<Phone/>} title="Phone" value="+256 773 980 929"/><Info icon={<Code2/>} title="LinkedIn" value="linkedin.com/in/dawa-edina"/><Info icon={<Terminal/>} title="GitHub" value="github.com/DawaEdina"/></aside></section>
    <section id="projects" className="section projects"><p className="label">MY PROJECTS</p><h2 className="title">Featured Projects</h2><p className="lead">Here are some of the projects I have worked on during my apprenticeship,<br/> training and professional experience.</p><div className="filters" aria-label="Filter projects">{['All','Web Apps','Websites','Community'].map(name => <button className={filter === name ? 'selected' : ''} key={name} onClick={() => setFilter(name)}>{name}</button>)}</div><div className="project-grid">{filtered.map(project => <article className="project" key={project.name}><div className={'project-image ' + project.kind}><span>{project.kind === 'map' ? 'o' : project.kind === 'portfolio' ? '&lt;/&gt;' : '◇'}</span></div><div className="project-body"><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.stack.map(tag => <small key={tag}>{tag}</small>)}</div><button className="project-link" onClick={() => scrollTo('Contact')}>Ask about project <ArrowRight size={12}/></button></div></article>)}</div></section>
    <section id="skills" className="section skills"><p className="label">MY SKILLS</p><h2 className="title">Technical Skills &amp; Tools</h2><p className="lead">I have hands-on experience with a range of technologies and tools<br/> that help me build reliable and impactful digital solutions.</p><div className="skill-grid">{skills.map(([label,logo]) => <div className="skill" key={label}><img src={logo} alt="" aria-hidden="true"/><span>{label}</span></div>)}</div><h3 className="soft-title">Soft Skills</h3><div className="soft"><span>Problem Solving</span><span>Teamwork</span><span>Communication</span><span>Leadership</span><span>Time Management</span><span>Adaptability</span></div></section>
    <section id="experience" className="section experience"><div className="work"><p className="label">WORK EXPERIENCE</p><h2 className="title">Professional Experience</h2>{[['Feb - Aug 2026','Software Engineering Apprentice','Refactory Academy - Kampala','Trained in OOP, SOLID, UML, TDD/BDD, ReactJS, databases and CI/CD. Collaborated on projects and participated in agile ceremonies.'],['Jan 2024 - Apr 2026','Social Media & Digital Content Manager','CC4A & CEDA (LinkedIn & Facebook pages)','Content ideation, caption writing, calendar planning, audience engagement and social media trend research.'],['May - Aug 2024','IT Intern','Arua District Local Government','Updated PDMIS and registration systems, user management and security. Provided IT support and documentation.'],['2022 - 2025','IT & Gender Advocate','Community Action for Development (CC4D)','Maintained CC4D website, provided technical support and data management. Supported electronic case files and community outreach.']].map(([date,role,place,description]) => <div className="timeline" key={role}><time>{date}</time><i/><div><h3>{role}</h3><b>{place}</b><p>{description}</p></div></div>)}</div><div className="education"><p className="label">EDUCATION</p>{[['Aug 2022 - Nov 2024','Bachelor of Computer Science','Software Engineering','Bugema University'],['Aug 2016 - Nov 2018','Diploma in Information Technology','','Bugema University'],['Jan 2015 - Nov 2016','Certificate in Information Technology','','Bugema University'],['Feb 2007 - Nov 2010','Uganda Certificate of Education','St. Charles Lwanga (Koboko Hall)','Uganda']].map(([date,degree,course,school]) => <p key={degree}><b>{date}</b><strong>{degree}</strong><span>{course}<br/>{school}</span></p>)}<h3>Certifications</h3>{['IT Essentials & CCNA (Instructor Training)','ReadyForIT - Italian Language','ReadyForIT - Java Programming','Ground Truth - Data Collection','Film Production - Audio/Video','TOT (rog)'].map(certification => <div className="cert" key={certification}><Check size={14}/>{certification}</div>)}</div></section>
    <section id="contact" className="contact-section"><div><p className="label">GET IN TOUCH</p><h2>Let&apos;s Work Together</h2><p>I&apos;m always open to new opportunities, collaborations and interesting projects. Feel free to reach out!</p><div className="contact-list"><Info icon={<Mail/>} title="Email" value="dawa.hillary20@gmail.com"/><Info icon={<Phone/>} title="Phone" value="+256 773 980 929"/><Info icon={<MapPin/>} title="Location" value="Arua, Uganda"/><Info icon={<Code2/>} title="LinkedIn" value="linkedin.com/in/dawa-edina"/><Info icon={<Terminal/>} title="GitHub" value="github.com/Dawaedina27"/></div></div><form onSubmit={submit}><label>Name<input name="name" placeholder="Your name" required/></label><label>Email<input name="email" type="email" placeholder="your@email.com" required/></label><label>Message<textarea name="message" placeholder="How can I help you?" required/></label><button className="primary">{sent ? 'Thanks - message received!' : <><Send size={14}/>Send Message</>}</button>{sent && <p className="form-success" role="status">I&apos;ll get back to you soon.</p>}</form></section>
    <footer><div><b>Dawa Edina Hillary</b><span>Full-Stack Developer &amp; ICT Specialist</span></div><div className="footer-social"><a href="https://www.linkedin.com/in/dawa-edina" aria-label="LinkedIn"><Code2/></a><a href="https://github.com/Dawaedina27" aria-label="GitHub"><Terminal/></a><a href="mailto:dawa.hillary20@gmail.com" aria-label="Email"><Mail/></a></div><small>Copyright 2026 Dawa Edina Hillary. All rights reserved.</small></footer>
  </main>
}
export default App
