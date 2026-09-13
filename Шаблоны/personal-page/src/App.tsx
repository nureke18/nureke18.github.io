import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded'
import CloseRounded from '@mui/icons-material/CloseRounded'
import CodeRounded from '@mui/icons-material/CodeRounded'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import MenuRounded from '@mui/icons-material/MenuRounded'
import NorthEastRounded from '@mui/icons-material/NorthEastRounded'
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState, type FormEvent } from 'react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    number: '01',
    title: 'LUMEN FINANCE',
    category: 'FINTECH PLATFORM',
    description:
      'A calm, real-time money workspace that turns scattered accounts into clear decisions.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    tone: 'orange',
    stat: '+38%',
    statLabel: 'faster decisions',
  },
  {
    number: '02',
    title: 'FIELD NOTES',
    category: 'COLLABORATION TOOL',
    description:
      'A spatial knowledge base for distributed product teams who think in systems.',
    tags: ['React', 'Node.js', 'WebSockets'],
    tone: 'acid',
    stat: '12k',
    statLabel: 'weekly users',
  },
  {
    number: '03',
    title: 'NORTHSTAR',
    category: 'CLIMATE INTELLIGENCE',
    description:
      'Complex emissions data, translated into a focused roadmap teams can act on.',
    tags: ['React', 'Python', 'AWS'],
    tone: 'blue',
    stat: '2.4M',
    statLabel: 'data points / day',
  },
]

const fullstackTech = [
  ['ReactJS', 'devicon-react-original', 'RE'],
  ['Vite', 'devicon-vitejs-plain', 'VI'],
  ['Next.js', 'devicon-nextjs-plain', 'NX'],
  ['Material UI', 'devicon-materialui-plain', 'MU'],
  ['Express.js', 'devicon-express-original', 'EX'],
  ['Sequelize', 'devicon-sequelize-plain', 'SQ'],
  ['NestJS', 'devicon-nestjs-original', 'NS'],
  ['Telegram bots', 'devicon-telegram-plain', 'TG'],
  ['Ubuntu', 'devicon-ubuntu-plain', 'UB'],
  ['Nginx', 'devicon-nginx-original', 'NG'],
  ['DNS management', 'devicon-cloudflare-plain', 'DNS'],
]

const dataTech = [
  ['Python', 'devicon-python-plain', 'PY'],
  ['NumPy', 'devicon-numpy-plain', 'NP'],
  ['Pandas', 'devicon-pandas-plain', 'PD'],
  ['SciPy', 'devicon-scipy-plain', 'SP'],
  ['Matplotlib', 'devicon-matplotlib-plain', 'MP'],
  ['Seaborn', 'devicon-python-plain', 'SB'],
  ['Scikit-learn', 'devicon-scikitlearn-plain', 'SK'],
  ['PyTorch', 'devicon-pytorch-original', 'PT'],
  ['Keras', 'devicon-keras-plain', 'KR'],
]

const skills = [
  'Front to back',
  'APIs & architecture',
  'Data to insight',
  'Servers to production',
  'Bots to automation',
]

const BlackCat = ({ className = '' }: { className?: string }) => (
  <Box className={`black-cat ${className}`} aria-hidden="true">
    <i className="cat-tail" />
    <i className="cat-body" />
    <Box className="cat-head">
      <i className="cat-ear left" />
      <i className="cat-ear right" />
      <span className="cat-eye left" />
      <span className="cat-eye right" />
      <b>ω</b>
    </Box>
    <i className="cat-paw left" />
    <i className="cat-paw right" />
  </Box>
)

const TechGrid = ({ items }: { items: string[][] }) => (
  <Box className="tech-grid">
    {items.map(([name, icon, fallback]) => (
      <Box className="tech-card" key={name}>
        <Box className="tech-icon">
          <i className={`${icon} colored`} />
          <b>{fallback}</b>
        </Box>
        <Typography>{name}</Typography>
        <span>↗</span>
      </Box>
    ))}
  </Box>
)

const App = () => {
  const root = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (reduceMotion) {
      return undefined
    }
    const ctx = gsap.context(() => {
      const opening = gsap.timeline()
      opening
        .from('.intro-logo span', {
          yPercent: 120,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power4.out',
        })
        .from(
          '.intro-cat',
          {
            y: 35,
            opacity: 0,
            scale: 0.7,
            duration: 0.55,
            ease: 'back.out(2)',
          },
          '<.15'
        )
        .to(
          '.intro-progress i',
          { scaleX: 1, duration: 0.65, ease: 'power2.inOut' },
          '<.05'
        )
        .to('.intro-screen', {
          yPercent: -105,
          duration: 1,
          ease: 'power4.inOut',
          pointerEvents: 'none',
        })
        .from(
          '.hero-reveal',
          { y: 80, opacity: 0, duration: 1, stagger: 0.12, ease: 'power4.out' },
          '-=.45'
        )
        .from(
          '.hero-orbit',
          {
            scale: 0.65,
            opacity: 0,
            rotate: -14,
            duration: 1.4,
            ease: 'elastic.out(1, .7)',
          },
          '<.15'
        )
      gsap.to('.orbital-word', {
        rotate: 360,
        duration: 24,
        repeat: -1,
        ease: 'none',
      })
      gsap.to('.hero-art', {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.floating-code', {
        y: -8,
        rotate: 3,
        duration: 2.1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.4,
      })
      for (const element of gsap.utils.toArray<HTMLElement>('.reveal')) {
        gsap.from(element, {
          y: 55,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 86%' },
        })
      }
      for (const card of gsap.utils.toArray<HTMLElement>('.project-card')) {
        gsap.from(card, {
          x: -45,
          opacity: 0,
          duration: 0.9,
          scrollTrigger: { trigger: card, start: 'top 82%' },
        })
        gsap.from(card.querySelector('.mock-window'), {
          rotate: -7,
          scale: 0.82,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 78%' },
        })
      }
      gsap.from('.tech-card', {
        y: 45,
        opacity: 0,
        scale: 0.92,
        stagger: 0.055,
        duration: 0.65,
        ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.capabilities-section', start: 'top 65%' },
      })
      gsap.to('.cat-walker', {
        x: () => globalThis.innerWidth + 250,
        duration: 18,
        repeat: -1,
        ease: 'none',
      })
      gsap.to('.cat-climber', {
        y: -22,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.skill-marquee', {
        xPercent: -4,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, root)
    return () => {
      ctx.revert()
    }
  }, [])

  const goTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const getFieldValue = (field: string) => {
      const value = data.get(field)
      return typeof value === 'string' ? value : ''
    }
    const subject = encodeURIComponent(
      `Project enquiry from ${getFieldValue('name')}`
    )
    const body = encodeURIComponent(
      `${getFieldValue('message')}\n\nFrom: ${getFieldValue('email')}`
    )
    window.location.href = `mailto:contact@dav-dev.kz?subject=${subject}&body=${body}`
  }

  return (
    <Box ref={root} className="site-shell">
      <Box className="intro-screen">
        <Box className="intro-logo">
          {[...'DAVDEV'].map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </Box>
        <BlackCat className="intro-cat" />
        <Box className="intro-progress">
          <i />
        </Box>
        <small>CRAFTING SOMETHING CURIOUS</small>
      </Box>
      <Box component="header" className="nav-wrap">
        <Container maxWidth="xl" className="nav-inner">
          <button
            type="button"
            className="logo"
            onClick={() => goTo('#home')}
            aria-label="Back to top"
          >
            DAV<span>DEV</span>
            <i>.</i>
          </button>
          <Stack
            className="desktop-nav"
            direction="row"
            spacing={4}
            component="nav"
          >
            {['Work', 'About', 'Contact'].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => goTo(`#${item.toLowerCase()}`)}
              >
                {item}
              </button>
            ))}
          </Stack>
          <Box className="availability">
            <span /> Available for select projects
          </Box>
          <IconButton
            className="menu-button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseRounded /> : <MenuRounded />}
          </IconButton>
        </Container>
        {menuOpen && (
          <Box className="mobile-nav">
            {['Work', 'About', 'Contact'].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => goTo(`#${item.toLowerCase()}`)}
              >
                {item}
              </button>
            ))}
          </Box>
        )}
      </Box>

      <Box component="main">
        <Box id="home" component="section" className="hero-section">
          <Container maxWidth="xl">
            <Box className="eyebrow hero-reveal">
              <span>FULLSTACK + DATA SCIENCE</span>
              <span>BASED IN KAZAKHSTAN / WORKING GLOBALLY</span>
            </Box>
            <Box className="hero-grid">
              <Box>
                <Typography component="h1" className="hero-title hero-reveal">
                  I BUILD
                  <br />
                  DIGITAL <em>THINGS</em>
                  <br />
                  THAT <span>WORK.</span>
                </Typography>
                <Typography className="hero-copy hero-reveal">
                  From first sketch to production scale — I design and engineer
                  fast, thoughtful products for ambitious teams.
                </Typography>
                <Button
                  className="primary-cta hero-reveal"
                  endIcon={<ArrowOutwardRounded />}
                  onClick={() => goTo('#work')}
                >
                  Explore my work
                </Button>
              </Box>
              <Box className="hero-art hero-orbit">
                <Box className="orbit-ring orbital-word">
                  DESIGN • CODE • SHIP • REPEAT • DESIGN • CODE •{' '}
                </Box>
                <Box className="portrait-shape">
                  <CodeRounded />
                  <b>DD</b>
                  <small>EST. 2017</small>
                </Box>
                <Box className="floating-tag floating-code tag-one">
                  FULL
                  <br />
                  STACK
                </Box>
                <Box className="floating-tag floating-code tag-two">
                  8+ YEARS
                  <br />
                  BUILDING
                </Box>
                <BlackCat className="hero-cat" />
              </Box>
            </Box>
            <Box className="scroll-note">
              SCROLL TO EXPLORE <span>↓</span>
            </Box>
          </Container>
        </Box>

        <Box id="work" component="section" className="work-section">
          <Container maxWidth="xl">
            <Box className="section-heading reveal">
              <Box>
                <span className="section-index">01 / SELECTED WORK</span>
                <Typography component="h2">
                  Things I’ve
                  <br />
                  <em>made happen.</em>
                </Typography>
              </Box>
              <Typography>
                Selected products where strategy, design, and engineering came
                together.
              </Typography>
            </Box>
            <Stack spacing={3} className="project-list">
              {projects.map((project, index) => (
                <Box
                  key={project.title}
                  className={`project-card ${project.tone}`}
                >
                  <Box className="project-number">{project.number}</Box>
                  <Box className="project-info">
                    <Typography className="project-category">
                      {project.category}
                    </Typography>
                    <Typography component="h3">{project.title}</Typography>
                    <Typography>{project.description}</Typography>
                    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" />
                      ))}
                    </Stack>
                  </Box>
                  <Box className="project-visual">
                    <Box className="mock-window">
                      <span />
                      <span />
                      <span />
                      <div className="mock-content">
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </Box>
                    <Box className="project-stat">
                      <b>{project.stat}</b>
                      <small>{project.statLabel}</small>
                    </Box>
                    <BlackCat
                      className={`project-cat project-cat-${index + 1}`}
                    />
                  </Box>
                  <IconButton
                    className="project-arrow"
                    aria-label={`View ${project.title}`}
                  >
                    <NorthEastRounded />
                  </IconButton>
                </Box>
              ))}
            </Stack>
          </Container>
        </Box>

        <Box
          id="capabilities"
          component="section"
          className="capabilities-section"
        >
          <BlackCat className="cat-climber" />
          <Container maxWidth="xl">
            <Box className="section-heading reveal">
              <Box>
                <span className="section-index">02 / TOOLKIT</span>
                <Typography component="h2">
                  THE WHOLE STACK.
                  <br />
                  <em>PLUS THE DATA.</em>
                </Typography>
              </Box>
              <Typography>
                From polished interfaces and resilient APIs to production
                infrastructure and machine-learning workflows.
              </Typography>
            </Box>
            <Box className="capability-block reveal">
              <Box className="capability-title">
                <span>01</span>
                <Typography component="h3">Full-stack engineering</Typography>
                <small>BUILD · SHIP · OPERATE</small>
              </Box>
              <TechGrid items={fullstackTech} />
            </Box>
            <Box className="capability-block data-block reveal">
              <Box className="capability-title">
                <span>02</span>
                <Typography component="h3">Data science</Typography>
                <small>EXPLORE · MODEL · EXPLAIN</small>
              </Box>
              <TechGrid items={dataTech} />
            </Box>
          </Container>
          <BlackCat className="cat-walker" />
        </Box>

        <Box id="about" component="section" className="about-section">
          <Container maxWidth="xl">
            <Box className="about-grid">
              <Box className="reveal">
                <span className="section-index">03 / ABOUT</span>
                <Typography component="h2">
                  ENGINEER’S MIND.
                  <br />
                  <em>DESIGNER’S EYE.</em>
                </Typography>
                <BlackCat className="about-cat" />
              </Box>
              <Box className="about-copy reveal">
                <Typography>
                  I’m David — a Kazakhstan-based full-stack developer and data
                  scientist who cares just as much about the feeling of a
                  product as the code underneath it.
                </Typography>
                <Typography>
                  I build interfaces in React, APIs in Express and NestJS, data
                  workflows in Python, and the Ubuntu/Nginx infrastructure that
                  keeps everything running. No black boxes, no hand-offs into
                  the void — just clear thinking and close collaboration.
                </Typography>
                <Box className="numbers">
                  <div>
                    <b>08+</b>
                    <span>Years crafting</span>
                  </div>
                  <div>
                    <b>42</b>
                    <span>Products shipped</span>
                  </div>
                  <div>
                    <b>11</b>
                    <span>Countries served</span>
                  </div>
                </Box>
              </Box>
            </Box>
            <Box className="skill-marquee reveal">
              {skills.map((skill) => (
                <span key={skill}>
                  {skill} <i>✳</i>
                </span>
              ))}
            </Box>
          </Container>
        </Box>

        <Box id="contact" component="section" className="contact-section">
          <Container maxWidth="xl">
            <Box className="contact-grid">
              <Box className="reveal">
                <span className="section-index">04 / START A PROJECT</span>
                <Typography component="h2">
                  GOT AN IDEA?
                  <br />
                  <em>LET’S MAKE IT REAL.</em>
                </Typography>
                <Typography className="contact-copy">
                  Tell me what you’re building, where you’re stuck, or simply
                  say hello. I usually reply within two working days.
                </Typography>
                <a className="email-link" href="mailto:contact@dav-dev.kz">
                  contact@dav-dev.kz <ArrowOutwardRounded />
                </a>
              </Box>
              <Box
                component="form"
                onSubmit={sendMessage}
                className="contact-form reveal"
              >
                <BlackCat className="form-cat" />
                <TextField
                  name="name"
                  label="Your name"
                  variant="standard"
                  required
                  fullWidth
                />
                <TextField
                  name="email"
                  type="email"
                  label="Email address"
                  variant="standard"
                  required
                  fullWidth
                />
                <TextField
                  name="message"
                  label="A little about your project"
                  variant="standard"
                  required
                  multiline
                  rows={3}
                  fullWidth
                />
                <Button
                  type="submit"
                  className="primary-cta"
                  endIcon={<ArrowOutwardRounded />}
                >
                  Send the note
                </Button>
              </Box>
            </Box>
            <Box component="footer" className="footer">
              <span>© 2026 DAVDEV</span>
              <Stack direction="row" spacing={1}>
                <IconButton aria-label="GitHub">
                  <GitHub />
                </IconButton>
                <IconButton aria-label="LinkedIn">
                  <LinkedIn />
                </IconButton>
              </Stack>
              <span>BUILT WITH CARE &amp; COFFEE</span>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default App
