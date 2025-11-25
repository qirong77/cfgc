import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('central')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['central', 'national', 'authoritative', 'learning']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* 顶部横幅 */}
      <header className="header">
        <div className="header-banner">
          <div className="party-emblem">☭</div>
          <h1 className="main-title">学习宣传贯彻党的二十届四中全会精神</h1>
          <div className="party-emblem">☭</div>
        </div>
      </header>

      {/* 导航栏 */}
      <nav className="navigation">
        <div className="nav-container">
          <button 
            className={`nav-item ${activeSection === 'central' ? 'active' : ''}`}
            onClick={() => scrollToSection('central')}
          >
            中央精神
          </button>
          <button 
            className={`nav-item ${activeSection === 'national' ? 'active' : ''}`}
            onClick={() => scrollToSection('national')}
          >
            国资部署
          </button>
          <button 
            className={`nav-item ${activeSection === 'authoritative' ? 'active' : ''}`}
            onClick={() => scrollToSection('authoritative')}
          >
            权威解读
          </button>
          <button 
            className={`nav-item ${activeSection === 'learning' ? 'active' : ''}`}
            onClick={() => scrollToSection('learning')}
          >
            学习动态
          </button>
        </div>
      </nav>

      {/* 开栏语 */}
      <section className="opening-remarks">
        <div className="opening-badge">
          <div className="badge-circle">开栏语</div>
        </div>
        <div className="opening-content">
          <p>
            党的二十届四中全会是在我国即将胜利完成"十四五"主要目标任务，进入基本实现社会主义现代化夯实基础、全面发力的关键时期召开的一次重要会议。国资央企深入学习领会习近平总书记提出的一系列新思想新观点新论断新要求，更加深刻领悟"两个确立"的决定性意义，增强"四个意识"、坚定"四个自信"、做到"两个维护"，全面准确把握党中央对"十五五"时期我国经济社会发展作出的系统谋划和战略部署，深刻领会党的二十届四中全会关于国资国企工作的重大部署，以更高站位、更实举措抓好贯彻落实，持续做强做优做大国有企业和国有资本。
          </p>
        </div>
      </section>

      {/* 中央精神 */}
      <section id="central" className="section central-spirit">
        <div className="section-header">
          <div className="header-decoration">
            <span className="emblem">☭</span>
            <span className="ribbon">中央精神</span>
          </div>
        </div>
        
        <div className="content-container">
          <h2 className="section-title">中国共产党第二十届中央委员会第四次全体会议公报</h2>
          
          <div className="main-content">
            <div className="image-container">
              <div className="meeting-image">
                <div className="placeholder-image">会议现场图片</div>
                <p className="image-caption">中国共产党第二十届中央委员会第四次全体会议公报</p>
              </div>
            </div>
            
            <div className="articles-list">
              <article className="article-item">
                <h3>乘势而上，续写中国奇迹新篇章——党的二十届四中全会侧记</h3>
                <p>时代一步一个脚印向前，历史在接续奋斗中谱写新篇。2025年，在中国式现代化壮阔进程中，留下浓墨重彩的一笔。10月20日至23日，中国共产党第二十届中央委员会第四次全体会议...</p>
                <a href="#" className="read-more">【查看全文】</a>
              </article>
              
              <article className="article-item">
                <h3>在新时代新征程续写经济快速发展和社会长期稳定两大奇迹新篇章——中共中央举行新闻发布会解读党的二十届四中全会精神</h3>
                <p>10月20日至23日，党的二十届四中全会在北京召开。全会审议通过了《中共中央关于制定国民经济和社会发展第十五个五年规划的建议》。10月24日，中共中央举行新闻发...</p>
                <a href="#" className="read-more">【查看全文】</a>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* 国资部署 */}
      <section id="national" className="section national-deployment">
        <div className="section-header">
          <div className="header-decoration">
            <span className="emblem">☭</span>
            <span className="ribbon">国资部署</span>
          </div>
        </div>
        
        <div className="content-container">
          <div className="deployment-grid">
            <div className="deployment-card primary">
              <div className="card-image">
                <div className="placeholder-image">会议图片</div>
              </div>
              <div className="card-content">
                <h3>国资央企认真传达学习贯彻党的二十届四中全会精神 坚定不移做强做优做大国有企业和国有资本 为基本实现社会主义现代化贡献更大力量</h3>
                <p>10月31日，国务院国资委党委召开国资央企传达学习贯彻党的二十届四中全会精神视频会议，在前期学习的基础上对进一步抓好学习宣传贯彻落实作出部署。国务院国资委党委书记、主任张玉卓出席会议并讲话强调，国资央企要切实把...</p>
                <a href="#" className="read-more">【查看全文】</a>
              </div>
            </div>
            
            <div className="deployment-card secondary">
              <div className="card-content">
                <h3>国务院国资委党委认真传达学习贯彻党的二十届四中全会精神</h3>
                <p>10月24日，国务院国资委党委召开扩大会议，认真传达学习党的二十届四中全会精神，研究贯彻落实举措。国务院国资委党委书记、主任张玉卓主持会议，结合参加党的二十届四中全会和学习聆听习近平总书记重要讲话谈切身体会，领...</p>
                <a href="#" className="read-more">【查看全文】</a>
              </div>
              <div className="card-image">
                <div className="placeholder-image">会议图片</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 权威解读 */}
      <section id="authoritative" className="section authoritative-interpretation">
        <div className="section-header">
          <div className="header-decoration">
            <span className="emblem">☭</span>
            <span className="ribbon">权威解读</span>
          </div>
        </div>
        
        <div className="content-container">
          <div className="interpretation-grid">
            <div className="interpretation-card">
              <div className="card-image-wrapper">
                <div className="placeholder-image small">图表</div>
              </div>
              <h4>党的二十届四中全会公报一图速览</h4>
            </div>
            
            <div className="interpretation-card">
              <div className="card-image-wrapper">
                <div className="placeholder-image small">图表</div>
              </div>
              <h4>"十五五"时期中国这么干</h4>
            </div>
            
            <div className="interpretation-card">
              <div className="card-image-wrapper">
                <div className="placeholder-image small">图表</div>
              </div>
              <h4>未来五年，我们将建设这样的中国</h4>
            </div>
          </div>
          
          <div className="commentary-list">
            <h3 className="commentary-title">新华社评论员文章</h3>
            <ul className="articles-links">
              <li><a href="#">新华社评论员：为基本实现社会主义现代化而共同奋斗——一论学习贯彻党的二十届四中全会精神</a></li>
              <li><a href="#">新华社评论员：把党的领导贯穿经济社会发展各方面全过程——二论学习贯彻党的二十届四中全会精神</a></li>
              <li><a href="#">新华社评论员：让现代化建设成果更多更公平惠及全体人民——三论学习贯彻党的二十届四中全会精神</a></li>
              <li><a href="#">党的二十届四中全会公报一图速览</a></li>
              <li><a href="#">以推动高质量发展为主题，因地制宜发展新质生产力</a></li>
              <li><a href="#">"十五五"时期中国这么干</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 学习动态 */}
      <section id="learning" className="section learning-dynamics">
        <div className="section-header">
          <div className="header-decoration">
            <span className="emblem">☭</span>
            <span className="ribbon">学习动态</span>
          </div>
        </div>
        
        <div className="content-container">
          <div className="learning-grid">
            <div className="learning-card">
              <div className="card-image">
                <div className="placeholder-image">企业学习图片</div>
              </div>
              <div className="card-content">
                <h3>中国宝武：认真传达学习贯彻党的二十届四中全会精神</h3>
                <p>10月27日，中国宝武党委理论学习中心组（扩大）学习会举行，认真传达学习贯彻党的二十届四中全会精神，部署贯彻落实举措。</p>
                <a href="#" className="read-more">【查看全文】</a>
              </div>
            </div>
            
            <div className="learning-card">
              <div className="card-content">
                <h3>中国诚通：传达学习贯彻党的二十届四中全会精神</h3>
                <p>10月27日，中国诚通召开党委（扩大）会议，传达学习党的二十届四中全会精神，紧密结合工作实际研究贯彻落实措施。</p>
                <a href="#" className="read-more">【查看全文】</a>
              </div>
              <div className="card-image">
                <div className="placeholder-image">企业学习图片</div>
              </div>
            </div>
          </div>
          
          <div className="more-news">
            <ul className="news-list">
              <li><a href="#">中国华润：举办学习贯彻党的二十届四中全会精神专题读书班暨各级党委中心组联学会</a></li>
              <li><a href="#">中国电科：举办传达学习贯彻党的二十届四中全会精神宣讲会</a></li>
              <li><a href="#">国家电投：举行传达学习贯彻党的二十届四中全会精神宣讲部署会</a></li>
              <li><a href="#">中智集团：召开党委理论学习中心组（扩大）专题学习会暨领导班子"十五五"规划战略研讨会</a></li>
            </ul>
            <a href="#" className="view-more-btn">查看更多 →</a>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <div className="footer-content">
          <p>网站管理：国务院国资委宣传局 运行维护：国务院国资委新闻中心 技术支持：国务院国资委信息中心</p>
          <p>办公地址：北京市宣武门西大街26号 邮编：100053</p>
        </div>
      </footer>
    </div>
  )
}

export default App
