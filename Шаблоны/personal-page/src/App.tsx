const projects = [
  {
    brand: 'moneta / личный кабинет',
    title: ['Ваши деньги', 'под контролем'],
    type: 'ФИНТЕХ · УЧЕБНЫЙ КОНЦЕПТ',
    name: 'Moneta — финансы проще',
    description:
      'Концепция интерфейса для планирования бюджета и ежедневных финансовых решений.',
    color: 'mint',
  },
  {
    brand: 'north / путешествия',
    title: ['Найди своё', 'место севера'],
    type: 'ПУТЕШЕСТВИЯ · УЧЕБНЫЙ КОНЦЕПТ',
    name: 'North — ближе к природе',
    description:
      'Идея сервиса поиска маршрутов, который вдохновляет выйти за пределы привычного.',
    color: 'sunset',
  },
  {
    brand: 'orbit / команда',
    title: ['Всё важное', 'в одном месте'],
    type: 'SAAS · УЧЕБНЫЙ КОНЦЕПТ',
    name: 'Orbit — работа в фокусе',
    description:
      'Концепция рабочего пространства, которое помогает небольшой команде двигаться синхронно.',
    color: 'sky',
  },
]

const skills = [
  'UX-исследования',
  'Прототипирование',
  'Figma',
  'Дизайн-системы',
  'Веб-интерфейсы',
  'Работа в команде',
]

function App() {
  return (
    <>
      <header className="wrap nav">
        <a className="brand" href="#top" aria-label="Nureke — наверх">
          NUREKE<span>.</span>
        </a>
        <nav className="links" aria-label="Основная навигация">
          <a href="#work">Проекты</a>
          <a href="#about">Обо мне</a>
          <a href="#contact">Контакты</a>
        </nav>
      </header>

      <main className="wrap" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <div className="tag">Дизайн и разработка · Казахстан</div>
            <h1 id="hero-title">
              Создаю
              <br />
              <span>цифровой</span>
              <br />
              опыт.
            </h1>
            <p>
              Привет! Я Nureke — превращаю сложные идеи в простые и красивые
              интерфейсы, которыми приятно пользоваться.
            </p>
            <div className="buttons">
              <a className="btn" href="#work">
                Мои проекты ↓
              </a>
              <a className="btn alt" href="#contact">
                Связаться
              </a>
            </div>
          </div>
          <div className="art" role="img" aria-label="Яркий абстрактный пейзаж">
            <i className="sun" />
            <i className="hill" />
            <i className="hill two" />
            <span className="badge">Дизайн с ясной целью ✳</span>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="heading">
            <div>
              <div className="tag">Избранные работы</div>
              <h2 id="work-title">
                Проекты<span className="accent">.</span>
              </h2>
            </div>
            <p>2024 — 2026</p>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article className="card" key={project.name}>
                <div className={`thumb ${project.color}`}>
                  <div className="mock">
                    <small>{project.brand}</small>
                    <strong>
                      {project.title[0]}
                      <br />
                      {project.title[1]}
                    </strong>
                    <div className="graph" />
                  </div>
                </div>
                <div className="card-body">
                  <small>{project.type}</small>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="tag">Немного обо мне</div>
          <div className="heading about-heading">
            <h2 id="about-title">
              Думаю о людях.
              <br />
              Делаю для людей.
            </h2>
            <p>
              Люблю находить порядок в сложных задачах, рисовать понятные
              пользовательские сценарии и доводить детали до ощущения «всё на
              своём месте».
            </p>
          </div>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <div className="contact" id="contact">
            <div>
              <h2>
                Есть идея?
                <br />
                Давайте обсудим.
              </h2>
              <p>Открыт к интересным проектам и новым знакомствам.</p>
            </div>
            <a
              href="https://github.com/nureke18"
              target="_blank"
              rel="noreferrer"
            >
              Мой GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© 2026 Nureke · Портфолио</span>
        <span>Сделано с вниманием к деталям ✳</span>
      </footer>
    </>
  )
}

export default App
