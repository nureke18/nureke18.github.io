import { useEffect, useState } from 'react'
import CrystalizedBall from './CrystalizedBall'
import GooeyNav from './GooeyNav'

type Language = 'kz' | 'ru'
type Filter = 'all' | 'live' | 'concept'

const copy = {
  kz: {
    nav: ['Басты бет', 'Мен туралы', 'Жобалар', 'Дағдылар', 'Байланыс'],
    eyebrow: 'Сәлем, мен Нұрсатпын',
    role: 'Веб әзірлеуге қызығамын',
    headline: ['Ойды', 'цифрлық', 'тәжірибеге айналдырамын.'],
    intro: 'Идеяны зерттеп, интерфейсті жобалап, оны жұмыс істейтін веб-бетке жеткіземін. Қазір үйреніп, пайдалы жобалар жасап жүрмін.',
    projectsCta: 'Жобаларды көру',
    githubCta: 'GitHub профилім ↗',
    cardFront: 'Келесі идеяны бірге жасайық',
    cardBack: 'Ойлан. Құрастыр. Жарияла.',
    cardHint: 'Аудару үшін бас',
    ticker: 'ЖОБАЛАУ · ҮЙРЕНУ · ҚҰРАСТЫРУ · ЖАРИЯЛАУ ·',
    aboutLabel: '01 / МЕН ТУРАЛЫ',
    aboutTitle: 'Қызығушылықтан — дайын өнімге.',
    aboutText: 'Мен үшін жақсы веб-жоба әдемі көрініспен шектелмейді. Ол түсінікті, жылдам және телефоннан да ыңғайлы болуы керек. Әр жұмыста жаңа нәрсе үйреніп, ұсақ бөлшектеріне дейін реттеуге тырысамын.',
    aboutNote: 'Қазір өзімнің портфолиомды дамытып, веб технологиялармен тәжірибе жинап жүрмін.',
    projectsLabel: '02 / ТАҢДАЛҒАН ЖҰМЫСТАР',
    projectsTitle: 'Идеялар мен жобалар',
    filters: ['Барлығы', 'Нақты сайт', 'Концепттер'],
    liveTag: 'ЖАРИЯЛАНҒАН САЙТ',
    conceptTag: 'ДИЗАЙН КОНЦЕПТІ',
    projectPortfolio: 'Жеке портфолио',
    projectPortfolioText: 'Мен туралы, дағдыларым және жұмыс үлгілері туралы бір жерден көруге болатын жеке веб-сайт.',
    projectBudget: 'Ақшаға көзқарас',
    projectBudgetText: 'Күнделікті шығындарды бақылауға көмектесетін бюджет қолданбасының интерфейс концепті.',
    projectTravel: 'Жолға шық',
    projectTravelText: 'Саяхат бағытын жоспарлап, сақтауға арналған сервистің мобильді интерфейс концепті.',
    openSite: 'Сайтты ашу ↗',
    learnMore: 'Жоба туралы',
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
    cardFront: 'Давайте создадим новую идею',
    cardBack: 'Придумай. Собери. Запусти.',
    cardHint: 'Нажми, чтобы перевернуть',
    ticker: 'ПРОЕКТИРОВАТЬ · УЧИТЬСЯ · СОЗДАВАТЬ · ПУБЛИКОВАТЬ ·',
    aboutLabel: '01 / ОБО МНЕ',
    aboutTitle: 'От интереса — к готовому продукту.',
    aboutText: 'Хороший веб-проект для меня — это не только красивый вид. Он должен быть понятным, быстрым и удобным на телефоне. В каждой работе я стараюсь узнать что-то новое и продумать детали.',
    aboutNote: 'Сейчас развиваю портфолио и набираюсь опыта с веб-технологиями.',
    projectsLabel: '02 / ИЗБРАННЫЕ РАБОТЫ',
    projectsTitle: 'Идеи и проекты',
    filters: ['Все', 'Опубликованный сайт', 'Концепты'],
    liveTag: 'ОПУБЛИКОВАННЫЙ САЙТ',
    conceptTag: 'ДИЗАЙН-КОНЦЕПТ',
    projectPortfolio: 'Личное портфолио',
    projectPortfolioText: 'Сайт, где собрана информация обо мне, моих навыках и примерах работ.',
    projectBudget: 'Деньги под контролем',
    projectBudgetText: 'Концепция интерфейса бюджетного приложения для повседневного учёта расходов.',
    projectTravel: 'В путь',
    projectTravelText: 'Концепция мобильного сервиса для планирования и сохранения маршрутов путешествий.',
    openSite: 'Открыть сайт ↗',
    learnMore: 'О проекте',
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
} as const

const projects = [
  { id: 'portfolio', type: 'live' as const, number: '01', art: 'portfolio-art' },
  { id: 'budget', type: 'concept' as const, number: '02', art: 'budget-art' },
  { id: 'travel', type: 'concept' as const, number: '03', art: 'travel-art' },
]

function App() {
  const [language, setLanguage] = useState<Language>('kz')
  const [filter, setFilter] = useState<Filter>('all')
  const [stackOpen, setStackOpen] = useState(false)
  const [cardFlipped, setCardFlipped] = useState(false)
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
    if (id === 'budget') return t.projectBudget
    return t.projectTravel
  }

  const projectDescription = (id: string) => {
    if (id === 'portfolio') return t.projectPortfolioText
    if (id === 'budget') return t.projectBudgetText
    return t.projectTravelText
  }

  const filterLabels: { id: Filter; label: string }[] = [
    { id: 'all', label: t.filters[0] },
    { id: 'live', label: t.filters[1] },
    { id: 'concept', label: t.filters[2] },
  ]

  return (
    <div className="site-shell" lang={language === 'kz' ? 'kk' : 'ru'}>
      <CrystalizedBall
        className="site-crystalized-background"
        preset="nebula"
        theme="light"
        size={0.78}
        speed={0.55}
        interactive={false}
      />
      <header className="site-header">
        <nav className="nav wrap" aria-label={language === 'kz' ? 'Негізгі навигация' : 'Основная навигация'}>
          <a className="brand" href="#home" aria-label="Nursat — home">
            <span className="brand-mark">N</span>
            <span>NURSAT<span className="brand-dot">.</span></span>
          </a>
          <GooeyNav
            className="nav-links"
            items={navItems}
            theme="light"
            color="#7543e8"
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
            onClick={() => setLanguage(language === 'kz' ? 'ru' : 'kz')}
            aria-label={language === 'kz' ? 'Switch to Russian' : 'Қазақшаға ауысу'}
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
            <div className={`flip-card ${cardFlipped ? 'flipped' : ''}`}>
              <button
                className="flip-card-inner"
                type="button"
                onClick={() => setCardFlipped(!cardFlipped)}
                aria-pressed={cardFlipped}
                aria-label={t.cardHint}
              >
                <span className="flip-face flip-front">
                  <span className="card-topline"><span>NS / 26</span><span>✳</span></span>
                  <span className="monogram">N<span>.</span></span>
                  <span className="flip-caption">{t.cardFront}</span>
                  <span className="flip-hint">↻　{t.cardHint}</span>
                </span>
                <span className="flip-face flip-back">
                  <span className="back-spark">✳</span>
                  <span className="back-message">{t.cardBack}</span>
                  <span className="flip-hint">↻　NURSAT / PORTFOLIO</span>
                </span>
              </button>
            </div>
            <div className="float-note note-top"><span className="note-icon">✦</span><span>IDEA → WEB</span></div>
            <div className="float-note note-bottom"><span className="note-pulse" />{language === 'kz' ? 'ҮЙРЕНУ · ЖАСАУ' : 'УЧУСЬ · СОЗДАЮ'}</div>
            <span className="visual-index">N / 01</span>
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
            <div className="principle"><span>01</span><strong>{language === 'kz' ? 'Зерттеу' : 'Исследовать'}</strong><small>{language === 'kz' ? 'Мәселені түсіну' : 'Понять задачу'}</small></div>
            <div className="principle"><span>02</span><strong>{language === 'kz' ? 'Жобалау' : 'Проектировать'}</strong><small>{language === 'kz' ? 'Оңтайлы шешім табу' : 'Найти решение'}</small></div>
            <div className="principle"><span>03</span><strong>{language === 'kz' ? 'Жариялау' : 'Публиковать'}</strong><small>{language === 'kz' ? 'Нәтижені іске қосу' : 'Запустить результат'}</small></div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="wrap">
            <div className="section-heading reveal">
              <span className="section-kicker">{t.projectsLabel}</span>
              <span className="project-count">0{visibleProjects.length} / 03</span>
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
                    <div className="art-orb" />
                    <div className="art-window">
                      <div className="window-dots"><i /><i /><i /></div>
                      {project.id === 'portfolio' && <div className="preview-home"><b>N<span>.</span></b><i /><i /><div /></div>}
                      {project.id === 'budget' && <div className="preview-budget"><small>MONTHLY OVERVIEW</small><strong>$2,480</strong><div className="budget-bars"><i /><i /><i /><i /><i /><i /><i /></div></div>}
                      {project.id === 'travel' && <div className="preview-travel"><span>✳</span><strong>Find your<br />next place.</strong><i /></div>}
                    </div>
                    <span className="art-number">{project.number}</span>
                    <span className="project-open">↗</span>
                  </div>
                  <div className="project-info">
                    <div className="project-topline"><span>{project.type === 'live' ? t.liveTag : t.conceptTag}</span><span>{project.number} / 03</span></div>
                    <h3>{projectName(project.id)}</h3>
                    <p>{projectDescription(project.id)}</p>
                    <div className="project-bottom">
                      <span className="project-tech">{project.id === 'portfolio' ? 'REACT · TYPESCRIPT · CSS' : project.id === 'budget' ? 'PRODUCT DESIGN · UI/UX' : 'MOBILE UI · PROTOTYPE'}</span>
                      {project.id === 'portfolio' ? <a href="https://nureke18.github.io/" target="_blank" rel="noreferrer">{t.openSite}</a> : <span className="concept-label">{t.learnMore} ↗</span>}
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
