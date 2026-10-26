import { useEffect, useState } from 'react'
import CrystalizedBall from './CrystalizedBall'
import GooeyNav from './GooeyNav'

type Language = 'kz' | 'ru' | 'en'
type Filter = 'all' | 'live' | 'academic' | 'concept'

const copy = {
  kz: {
    nav: ['Басты бет', 'Мен туралы', 'Жобалар', 'Дағдылар', 'Байланыс'],
    eyebrow: 'Сәлем, мен Нұрсатпын',
    role: 'Веб әзірлеуге қызығамын',
    headline: ['Ойды', 'цифрлық', 'тәжірибеге айналдырамын.'],
    intro: 'Идеяны зерттеп, интерфейсті жобалап, оны жұмыс істейтін веб-бетке жеткіземін. Қазір үйреніп, пайдалы жобалар жасап жүрмін.',
    projectsCta: 'Жобаларды көру',
    githubCta: 'GitHub профилім ↗',
    ticker: 'ЖОБАЛАУ · ҮЙРЕНУ · ҚҰРАСТЫРУ · ЖАРИЯЛАУ ·',
    aboutLabel: '01 / МЕН ТУРАЛЫ',
    aboutTitle: 'Қызығушылықтан — дайын өнімге.',
    aboutText: 'Мен үшін жақсы веб-жоба әдемі көрініспен шектелмейді. Ол түсінікті, жылдам және телефоннан да ыңғайлы болуы керек. Әр жұмыста жаңа нәрсе үйреніп, ұсақ бөлшектеріне дейін реттеуге тырысамын.',
    aboutNote: 'Қазір өзімнің портфолиомды дамытып, веб технологиялармен тәжірибе жинап жүрмін.',
    projectsLabel: '02 / ТАҢДАЛҒАН ЖҰМЫСТАР',
    projectsTitle: 'Идеялар мен жобалар',
    filters: ['Барлығы', 'Нақты сайт', 'Оқу жобасы', 'Концепттер'],
    liveTag: 'ЖАРИЯЛАНҒАН САЙТ',
    academicTag: 'ОҚУ ЖОБАСЫ',
    conceptTag: 'ДИЗАЙН КОНЦЕПТІ',
    projectPortfolio: 'Жеке портфолио',
    projectPortfolioText: 'Мен туралы, дағдыларым және жұмыс үлгілері туралы бір жерден көруге болатын жеке веб-сайт.',
    projectZanKines: 'ZAN-KINES',
    projectZanKinesText: 'Қазақстан заңдары мен Конституциясын қарапайым тілмен түсіндіретін ЖИ құқықтық көмекшісі. Llama 3 күрделі баптарды жеңілдетіп, жауапты мәтін не аудио түрінде береді.',
    projectBudget: 'Ақшаға көзқарас',
    projectBudgetText: 'Күнделікті шығындарды бақылауға көмектесетін бюджет қолданбасының интерфейс концепті.',
    projectTravel: 'Жолға шық',
    projectTravelText: 'Саяхат бағытын жоспарлап, сақтауға арналған сервистің мобильді интерфейс концепті.',
    openSite: 'Сайтты ашу ↗',
    learnMore: 'Жоба туралы',
    viewPreview: 'Интерфейсті көру ↗',
    skillsLabel: '03 / ҚҰРАЛДАР',
    skillsTitle: 'Осы портфолионы жасауға қолдандым',
    skillsIntro: 'Жобамен бірге дамып жатқан технологиялар мен дағдылар.',
    showStack: 'Қолданылған технологияларды көрсету',
    hideStack: 'Тізімді жасыру',
    contactLabel: '04 / БАЙЛАНЫС',
    contactTitle: 'Жаңа идеяңыз бар ма?',
    contactText: 'Жобаларымды көріп, ұсыныс немесе ой бөліскіңіз келсе, GitHub-та хабарласыңыз.',
    contactButton: 'GitHub-та ашу ↗',
    footer: 'Зейінмен жасалды · 2026',
    top: 'Жоғарыға',
    all: 'Барлық жұмыс',
    empty: 'Бұл санатта әзірге жоба жоқ.',
    technologies: ['React', 'TypeScript', 'Vite', 'HTML', 'CSS', 'Git', 'GitHub Pages', 'Responsive UI'],
  },
  ru: {
    nav: ['Главная', 'Обо мне', 'Проекты', 'Навыки', 'Контакты'],
    eyebrow: 'Привет, я Нұрсат',
    role: 'Интересуюсь веб-разработкой',
    headline: ['Превращаю', 'идеи', 'в цифровой опыт.'],
    intro: 'Изучаю идею, проектирую интерфейс и довожу его до работающей веб-страницы. Сейчас учусь и создаю полезные проекты.',
    projectsCta: 'Смотреть проекты',
    githubCta: 'Мой GitHub ↗',
    ticker: 'ПРОЕКТИРОВАТЬ · УЧИТЬСЯ · СОЗДАВАТЬ · ПУБЛИКОВАТЬ ·',
    aboutLabel: '01 / ОБО МНЕ',
    aboutTitle: 'От интереса — к готовому продукту.',
    aboutText: 'Хороший веб-проект для меня — это не только красивый вид. Он должен быть понятным, быстрым и удобным на телефоне. В каждой работе я стараюсь узнать что-то новое и продумать детали.',
    aboutNote: 'Сейчас развиваю портфолио и набираюсь опыта с веб-технологиями.',
    projectsLabel: '02 / ИЗБРАННЫЕ РАБОТЫ',
    projectsTitle: 'Идеи и проекты',
    filters: ['Все', 'Сайт', 'Учебный проект', 'Концепты'],
    liveTag: 'ОПУБЛИКОВАННЫЙ САЙТ',
    academicTag: 'УЧЕБНЫЙ ПРОЕКТ',
    conceptTag: 'ДИЗАЙН-КОНЦЕПТ',
    projectPortfolio: 'Личное портфолио',
    projectPortfolioText: 'Сайт, где собрана информация обо мне, моих навыках и примерах работ.',
    projectZanKines: 'ZAN-KINES',
    projectZanKinesText: 'ИИ-помощник, который простым языком объясняет Конституцию и законы Казахстана. На базе Llama 3 он упрощает сложные статьи и выдаёт ответы текстом или аудио.',
    projectBudget: 'Деньги под контролем',
    projectBudgetText: 'Концепция интерфейса бюджетного приложения для повседневного учёта расходов.',
    projectTravel: 'В путь',
    projectTravelText: 'Концепция мобильного сервиса для планирования и сохранения маршрутов путешествий.',
    openSite: 'Открыть сайт ↗',
    learnMore: 'О проекте',
    viewPreview: 'Смотреть интерфейс ↗',
    skillsLabel: '03 / ИНСТРУМЕНТЫ',
    skillsTitle: 'Использовал для этого портфолио',
    skillsIntro: 'Технологии и навыки, которые развиваю по ходу работы над проектом.',
    showStack: 'Показать технологии',
    hideStack: 'Скрыть список',
    contactLabel: '04 / КОНТАКТЫ',
    contactTitle: 'Есть новая идея?',
    contactText: 'Посмотрите мои проекты или напишите мне в GitHub, если хотите поделиться предложением или обсудить идею.',
    contactButton: 'Открыть GitHub ↗',
    footer: 'Сделано с вниманием · 2026',
    top: 'Наверх',
    all: 'Все работы',
    empty: 'В этой категории пока нет проектов.',
    technologies: ['React', 'TypeScript', 'Vite', 'HTML', 'CSS', 'Git', 'GitHub Pages', 'Responsive UI'],
  },
  en: {
    nav: ['Home', 'About', 'Projects', 'Skills', 'Contact'],
    eyebrow: 'Hi, I’m Nursat',
    role: 'I’m interested in web development',
    headline: ['Turning', 'ideas', 'into digital experiences.'],
    intro: 'I explore ideas, design interfaces, and turn them into working websites. I’m learning and building useful projects along the way.',
    projectsCta: 'Explore projects',
    githubCta: 'My GitHub ↗',
    ticker: 'DESIGN · LEARN · BUILD · LAUNCH ·',
    aboutLabel: '01 / ABOUT ME',
    aboutTitle: 'From curiosity to a finished product.',
    aboutText: 'A good web project is more than a nice look. It should be clear, fast, and comfortable to use on a phone. With every project, I learn something new and pay attention to the details.',
    aboutNote: 'I’m currently growing my portfolio and gaining experience with web technologies.',
    projectsLabel: '02 / SELECTED WORK',
    projectsTitle: 'Ideas and projects',
    filters: ['All', 'Live website', 'Student project', 'Concepts'],
    liveTag: 'LIVE WEBSITE',
    academicTag: 'STUDENT PROJECT',
    conceptTag: 'DESIGN CONCEPT',
    projectPortfolio: 'Personal portfolio',
    projectPortfolioText: 'A personal website featuring my background, skills, and examples of my work.',
    projectZanKines: 'ZAN-KINES',
    projectZanKinesText: 'An AI legal assistant that explains Kazakhstan’s Constitution and laws in plain language. Powered by Llama 3, it simplifies legal articles and provides answers as text or audio.',
    projectBudget: 'Money in focus',
    projectBudgetText: 'A budgeting app interface concept for keeping track of everyday spending.',
    projectTravel: 'Hit the road',
    projectTravelText: 'A mobile interface concept for planning and saving travel routes.',
    openSite: 'Visit website ↗',
    learnMore: 'About the project',
    viewPreview: 'View interface ↗',
    skillsLabel: '03 / TOOLS',
    skillsTitle: 'Built with these tools',
    skillsIntro: 'Technologies and skills I’m developing as I work on this project.',
    showStack: 'Show technologies',
    hideStack: 'Hide list',
    contactLabel: '04 / CONTACT',
    contactTitle: 'Have a new idea?',
    contactText: 'Explore my projects or reach out on GitHub to share a suggestion or talk about an idea.',
    contactButton: 'Open GitHub ↗',
    footer: 'Made with care · 2026',
    top: 'Back to top',
    all: 'All work',
    empty: 'There are no projects in this category yet.',
    technologies: ['React', 'TypeScript', 'Vite', 'HTML', 'CSS', 'Git', 'GitHub Pages', 'Responsive UI'],
  },
} as const

const projects = [
  { id: 'portfolio', type: 'live' as const, number: '01', art: 'portfolio-art' },
  { id: 'zan-kines', type: 'academic' as const, number: '02', art: 'zan-kines-art' },
  { id: 'budget', type: 'concept' as const, number: '03', art: 'budget-art' },
  { id: 'travel', type: 'concept' as const, number: '04', art: 'travel-art' },
]

function App() {
  const [language, setLanguage] = useState<Language>('kz')
  const [filter, setFilter] = useState<Filter>('all')
  const [stackOpen, setStackOpen] = useState(false)
  const t = copy[language]
  const navTargets = ['#home', '#about', '#projects', '#skills', '#contact']
  const navItems = t.nav.map((label, index) => ({ label, href: navTargets[index] }))
  const visibleProjects = projects.filter((project) => filter === 'all' || project.type === filter)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [filter, language, stackOpen])

  const projectName = (id: string) => {
    if (id === 'portfolio') return t.projectPortfolio
    if (id === 'zan-kines') return t.projectZanKines
    if (id === 'budget') return t.projectBudget
    return t.projectTravel
  }

  const projectDescription = (id: string) => {
    if (id === 'portfolio') return t.projectPortfolioText
    if (id === 'zan-kines') return t.projectZanKinesText
    if (id === 'budget') return t.projectBudgetText
    return t.projectTravelText
  }

  const filterLabels: { id: Filter; label: string }[] = [
    { id: 'all', label: t.filters[0] },
    { id: 'live', label: t.filters[1] },
    { id: 'academic', label: t.filters[2] },
    { id: 'concept', label: t.filters[3] },
  ]

  return (
    <div className="site-shell" lang={language === 'kz' ? 'kk' : language}>
      <CrystalizedBall
        className="site-crystalized-background"
        preset="ember"
        color="#e34c43"
        theme="light"
        size={0.78}
        speed={0.55}
        interactive={false}
      />
      <header className="site-header">
        <nav className="nav wrap" aria-label={language === 'kz' ? 'Негізгі навигация' : language === 'ru' ? 'Основная навигация' : 'Main navigation'}>
          <a className="brand" href="#home" aria-label="Nursat — home">
            <span className="brand-mark">N</span>
            <span>NURSAT<span className="brand-dot">.</span></span>
          </a>
          <GooeyNav
            className="nav-links"
            items={navItems}
            theme="light"
            color="#c52e3d"
            activeTextColor="#ffffff"
            size="sm"
            frame={false}
            particleCount={18}
            spread={48}
            gooeyness={0.68}
          />
          <button
            className="language-toggle"
            type="button"
            onClick={() => setLanguage(language === 'kz' ? 'ru' : language === 'ru' ? 'en' : 'kz')}
            aria-label={language === 'kz' ? 'Switch to Russian' : language === 'ru' ? 'Switch to English' : 'Switch to Kazakh'}
          >
            <span className="globe" aria-hidden="true">◎</span>
            {language.toUpperCase()}
            <span className="toggle-chevron">⌄</span>
          </button>
        </nav>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="hero-eyebrow"><span className="status-dot" />{t.eyebrow}</div>
            <div className="role-line">{t.role}<span className="spark">✳</span></div>
            <h1 className="hero-title">
              {t.headline[0]}<br />
              <span className="title-gradient">{t.headline[1]}</span><br />
              {t.headline[2]}
            </h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">{t.projectsCta}<span>↘</span></a>
              <a className="button button-outline" href="https://github.com/nureke18" target="_blank" rel="noreferrer">{t.githubCta}</a>
            </div>
            <div className="hero-meta"><span>01 — 04</span><span className="meta-rule" /><span>PORTFOLIO · 2026</span></div>
          </div>

          <div className="hero-visual reveal">
            <span className="visual-orbit orbit-one" />
            <span className="visual-orbit orbit-two" />
            <div className="hero-portrait">
              <img
                className="hero-character"
                src="/assets/nursat-hero.png"
                alt={language === 'kz' ? 'Қызыл күн батқан тау арасындағы аниме кейіпкері' : language === 'ru' ? 'Персонаж аниме на фоне гор и красного заката' : 'Anime character against mountains at a red sunset'}
              />
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track"><span>{t.ticker}</span><span>{t.ticker}</span><span>{t.ticker}</span></div>
        </div>

        <section className="section wrap" id="about">
          <div className="section-heading reveal">
            <span className="section-kicker">{t.aboutLabel}</span>
            <span className="heading-decoration">✳</span>
          </div>
          <div className="about-grid reveal">
            <h2>{t.aboutTitle}</h2>
            <div className="about-copy"><p>{t.aboutText}</p><p className="about-note"><span>↗</span>{t.aboutNote}</p></div>
          </div>
          <div className="principles">
            <div className="principle"><span>01</span><strong>{language === 'kz' ? 'Зерттеу' : language === 'ru' ? 'Исследовать' : 'Explore'}</strong><small>{language === 'kz' ? 'Мәселені түсіну' : language === 'ru' ? 'Понять задачу' : 'Understand the problem'}</small></div>
            <div className="principle"><span>02</span><strong>{language === 'kz' ? 'Жобалау' : language === 'ru' ? 'Проектировать' : 'Design'}</strong><small>{language === 'kz' ? 'Оңтайлы шешім табу' : language === 'ru' ? 'Найти решение' : 'Find the right solution'}</small></div>
            <div className="principle"><span>03</span><strong>{language === 'kz' ? 'Жариялау' : language === 'ru' ? 'Публиковать' : 'Launch'}</strong><small>{language === 'kz' ? 'Нәтижені іске қосу' : language === 'ru' ? 'Запустить результат' : 'Put the result online'}</small></div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="wrap">
            <div className="section-heading reveal">
              <span className="section-kicker">{t.projectsLabel}</span>
              <span className="project-count">{String(visibleProjects.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
            </div>
            <div className="projects-title-row reveal">
              <h2>{t.projectsTitle}</h2>
              <div className="filter-tabs" role="group" aria-label={t.all}>
                {filterLabels.map((item) => (
                  <button className={filter === item.id ? 'active' : ''} key={item.id} type="button" onClick={() => setFilter(item.id)}>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="project-grid">
              {visibleProjects.map((project) => (
                <article className={`project-card reveal ${project.art}`} key={project.id}>
                  <div className="project-art">
                    {project.id === 'zan-kines' ? (
                      <img
                        className="project-image"
                        src="/assets/zan-kines-interface.png"
                        alt={language === 'kz' ? 'ZAN-KINES құқықтық платформасының интерфейсі' : language === 'ru' ? 'Интерфейс правовой платформы ZAN-KINES' : 'ZAN-KINES legal platform interface'}
                      />
                    ) : (
                      <>
                        <div className="art-orb" />
                        <div className="art-window">
                          <div className="window-dots"><i /><i /><i /></div>
                          {project.id === 'portfolio' && <div className="preview-home"><b>N<span>.</span></b><i /><i /><div /></div>}
                          {project.id === 'budget' && <div className="preview-budget"><small>MONTHLY OVERVIEW</small><strong>$2,480</strong><div className="budget-bars"><i /><i /><i /><i /><i /><i /><i /></div></div>}
                          {project.id === 'travel' && <div className="preview-travel"><span>✳</span><strong>Find your<br />next place.</strong><i /></div>}
                        </div>
                      </>
                    )}
                    <span className="art-number">{project.number}</span>
                    {project.id !== 'zan-kines' && <span className="project-open">↗</span>}
                  </div>
                  <div className="project-info">
                    <div className="project-topline"><span>{project.type === 'live' ? t.liveTag : project.type === 'academic' ? t.academicTag : t.conceptTag}</span><span>{project.number} / {String(projects.length).padStart(2, '0')}</span></div>
                    <h3>{projectName(project.id)}</h3>
                    <p>{projectDescription(project.id)}</p>
                    <div className="project-bottom">
                      <span className="project-tech">{project.id === 'portfolio' ? 'REACT · TYPESCRIPT · CSS' : project.id === 'zan-kines' ? 'AI · LLAMA 3 · TEXT + AUDIO' : project.id === 'budget' ? 'PRODUCT DESIGN · UI/UX' : 'MOBILE UI · PROTOTYPE'}</span>
                      {project.id === 'portfolio' ? <a href="https://nureke18.github.io/" target="_blank" rel="noreferrer">{t.openSite}</a> : project.id === 'zan-kines' ? <a href="/assets/zan-kines-interface.png" target="_blank" rel="noreferrer">{t.viewPreview}</a> : <span className="concept-label">{t.learnMore} ↗</span>}
                    </div>
                  </div>
                </article>
              ))}
              {visibleProjects.length === 0 && <p className="empty-state">{t.empty}</p>}
            </div>
          </div>
        </section>

        <section className="section wrap skills-section" id="skills">
          <div className="section-heading reveal">
            <span className="section-kicker">{t.skillsLabel}</span>
            <span className="heading-decoration">✳</span>
          </div>
          <div className="skills-layout reveal">
            <div><h2>{t.skillsTitle}</h2><p>{t.skillsIntro}</p></div>
            <div className="stack-panel">
              <button className="stack-toggle" type="button" onClick={() => setStackOpen(!stackOpen)} aria-expanded={stackOpen}>
                <span>{stackOpen ? t.hideStack : t.showStack}</span><span className={`stack-plus ${stackOpen ? 'opened' : ''}`}>+</span>
              </button>
              {stackOpen && <div className="stack-list">{t.technologies.map((technology, index) => <span key={technology}><i>0{index + 1}</i>{technology}</span>)}</div>}
            </div>
          </div>
        </section>

        <section className="contact-section wrap" id="contact">
          <div className="contact-card reveal">
            <span className="section-kicker">{t.contactLabel}</span>
            <div className="contact-content"><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div>
            <a className="button button-dark" href="https://github.com/nureke18" target="_blank" rel="noreferrer">{t.contactButton}<span>↗</span></a>
            <span className="contact-decoration">N.</span>
          </div>
        </section>
      </main>

      <footer className="site-footer wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">N</span><span>NURSAT<span className="brand-dot">.</span></span></a>
        <span>{t.footer}</span>
        <a href="#home" className="back-top">{t.top} ↑</a>
      </footer>
    </div>
  )
}

export default App
