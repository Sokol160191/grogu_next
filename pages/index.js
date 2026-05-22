import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>GROGU WORLD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* ========== NAVBAR ========== */}
      <header className="nav">
        <div className="nav__inner">
          <a href="#" className="nav__logo">
            <img src="/images/logo_fill.png" alt="Grogu" />
          </a>
          <span className="nav__scroll-title" aria-hidden="true">GROGU<br />WORLD</span>
          <nav className="nav__links">
            <a href="#home"      data-i18n="nav.home">HOME</a>
            <a href="#mission"   data-i18n="nav.mission">MISSION</a>
            <a href="#partners"  data-i18n="nav.partners">PARTNERS</a>
            <a href="#ecosystem" data-i18n="nav.ecosystem">ECOSYSTEM</a>
            <a href="#buy"       data-i18n="nav.buy">BUY $GROAI</a>
            <a href="#roadmap"   data-i18n="nav.roadmap">ROADMAP</a>
            <div className="nav__mobile-cta" id="navMobileCta">
              <a href="#buy" className="pill-btn pill-btn--grad pill-btn--md pill-btn--w-presale">
                <span className="pill-btn__label">BUY $GROAI</span>
                <span className="pill-btn__circle">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </span>
              </a>
            </div>
          </nav>
          <div className="nav__right">
            <div className="nav__lang-wrap" id="langWrap">
              <button className="nav__lang" id="langToggle" aria-expanded="false">
                <span className="nav__lang-flag" id="langFlag">🇬🇧</span>
                <span className="nav__lang-label" id="langLabel">ENG</span>
                <svg className="nav__lang-chevron" width="9" height="5" viewBox="0 0 9 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l3.5 3L8 1"/></svg>
              </button>
              <div className="nav__lang-dropdown" id="langDropdown" role="listbox">
                <button className="nav__lang-opt nav__lang-opt--active" data-lang="ENG" data-emoji="🇬🇧">🇬🇧 English</button>
                <button className="nav__lang-opt" data-lang="RU"  data-emoji="🇷🇺">🇷🇺 Русский</button>
                <button className="nav__lang-opt" data-lang="CN"  data-emoji="🇨🇳">🇨🇳 中文</button>
                <button className="nav__lang-opt" data-lang="JP"  data-emoji="🇯🇵">🇯🇵 日本語</button>
                <button className="nav__lang-opt" data-lang="KR"  data-emoji="🇰🇷">🇰🇷 한국어</button>
                <button className="nav__lang-opt" data-lang="DE"  data-emoji="🇩🇪">🇩🇪 Deutsch</button>
              </div>
            </div>
            <div className="nav__socials">
              <a href="#" className="nav__soc nav__soc--x">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="nav__soc nav__soc--ig">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="nav__soc nav__soc--tg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
            <a href="#" className="nav__wallet pill-btn pill-btn--light pill-btn--sm pill-btn--w-nav">
              <span className="pill-btn__label"><span data-i18n="nav.wallet">Buy Crypto</span></span>
              <span className="pill-btn__circle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
              </span>
            </a>
          </div>
          <button className="nav__burger" id="navBurger" aria-label="Menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div className="scale-wrap" id="scaleWrap">

        {/* ========== HERO ========== */}
        <section className="hero" id="home">
          <div className="hero__glow-ellipse"></div>
          <div className="hero__glow-rect"></div>

          <h1 className="hero__title">GROGU<br />WORLD</h1>

          <div className="hero__char-wrap">
            <img src="/images/hero_grogu_main.png" alt="Grogu" className="hero__char" />
          </div>

          <div className="hero__right">
            <h2 className="hero__tagline" data-i18n-html="hero.tagline">A unique<br />virtual space<br />and ecosystem</h2>
            <p className="hero__desc" data-i18n="hero.desc">The Mission of GROWORLD is to create the virtual WEB3 ecosystem GROWORLD, where each participant becomes part of sustainable development and receives unconditional basic income through DeFi.</p>

            <a href="#buy" className="hero__cta pill-btn pill-btn--grad pill-btn--md pill-btn--w-hero">
              <span className="pill-btn__label" data-i18n="hero.btn">Buy $GROAI</span>
              <span className="pill-btn__circle">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
              </span>
            </a>
          </div>

          <div className="hero__thumbs">
            <div className="hero__thumb hero__thumb--1"><img src="/images/thumb_1_fill.png" alt="" /></div>
            <div className="hero__thumb hero__thumb--2"><img src="/images/thumb_2_fill.png" alt="" /></div>
            <div className="hero__thumb hero__thumb--3"><img src="/images/thumb_4_fill.png" alt="" /></div>
            <div className="hero__thumb hero__thumb--4"><img src="/images/thumb_3_fill.png" alt="" /></div>
          </div>

          <div className="hero__play-area" id="openVideo">
            <div className="hero__play-glow"></div>
            <div className="hero__play-circle">
              <svg width="18" height="22" viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="playGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00bbff"/>
                    <stop offset="53%" stopColor="#9c42f5"/>
                    <stop offset="100%" stopColor="#5d2de1"/>
                  </linearGradient>
                </defs>
                <path d="M2 1l15 10L2 21V1z" fill="url(#playGrad)"/>
              </svg>
            </div>
          </div>
          <span className="hero__watch" id="openVideo2" data-i18n="hero.watch">watch</span>
          <span className="hero__video" id="openVideo3" data-i18n="hero.video">the video</span>

          <div className="yt-modal" id="ytModal">
            <div className="yt-modal__overlay" id="closeVideo"></div>
            <div className="yt-modal__box">
              <button className="yt-modal__close" id="closeVideo2">✕</button>
              <iframe id="ytFrame" src="" width="1120" height="630" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
        </section>

        {/* ========== REVOLUTION / PRESALE ========== */}
        <section className="revolution" id="buy">
          <div className="revolution__left">
            <h2 className="revolution__title">
              <span className="revolution__title-main" data-i18n="rev.main">revolution</span><br />
              <span className="revolution__title-sub" data-i18n="rev.sub">WEB3 GAME</span>
            </h2>
            <div className="revolution__img-frame">
              <img src="/images/presale_card_bg.png" alt="Grogu with lightsaber" />
            </div>
          </div>
          <div className="revolution__right">
            <div className="presale">
              <div className="presale__title" data-i18n-html="presale.title">$GROAI Presale is <span className="presale__title-live">LIVE</span></div>
              <div className="presale__meta">
                <span className="presale__meta-actual"><span data-i18n="presale.actual">Actual Price:</span> <b>$0.00008</b></span>
                <span className="presale__meta-round"><span data-i18n="presale.round">Round:</span> <b>4 th</b></span>
                <span className="presale__meta-listing"><span data-i18n="presale.listing">Listing Price:</span> <b>$0.00008</b></span>
              </div>
              <div className="presale__bar-wrap">
                <div className="presale__bar-fill" style={{width:'66.27%'}}></div>
              </div>
              <div className="presale__raised-row">
                <span className="presale__raised-label" data-i18n="presale.raised">USD Raised:</span>
                <span className="presale__raised-val">$1&nbsp;060&nbsp;342 / $1&nbsp;600&nbsp;000</span>
              </div>
              <div className="presale__instant-label" data-i18n="presale.instant">Instant Buy</div>
              <div className="presale__tabs" id="presaleTabs">
                <div className="presale__tab" data-cur="TRON" data-icon="tron.svg">
                  <img src="/tron.svg" className="presale__tab-icon" width="28" height="28" alt="TRON" style={{flexShrink:0}} />
                  <div className="presale__tab-text">
                    <span className="presale__tab-name">TRON</span>
                    <span className="presale__tab-chain">Chain TRX</span>
                  </div>
                </div>
                <div className="presale__tab presale__tab--active" data-cur="USDT" data-icon="usdt.svg">
                  <img src="/usdt.svg" className="presale__tab-icon" width="28" height="28" alt="USDT" style={{flexShrink:0}} />
                  <div className="presale__tab-text">
                    <span className="presale__tab-name">USDT</span>
                    <span className="presale__tab-chain">Chain TRX</span>
                  </div>
                </div>
              </div>
              <div className="presale__inputs">
                <div className="presale__input-g">
                  <div className="presale__input-label">Pay with USDT</div>
                  <div className="presale__input-box">
                    <img src="/usdt.svg" id="presaleInputIcon" className="presale__input-icon" width="24" height="24" alt="" />
                    <input type="number" placeholder="0" />
                  </div>
                </div>
                <div className="presale__input-g">
                  <div className="presale__input-label" data-i18n="presale.receive">Receive $GROAI</div>
                  <div className="presale__input-box">
                    <img src="/images/logo_grogu.png" alt="" className="presale__input-icon" />
                    <input type="number" placeholder="0" />
                  </div>
                </div>
              </div>

              <a href="#" className="presale__connect-row pill-btn pill-btn--grad pill-btn--lg pill-btn--w-presale">
                <span className="pill-btn__label" data-i18n="presale.connect">Connect Wallet</span>
                <span className="pill-btn__circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </span>
              </a>
              <div className="presale__referral" data-i18n="presale.referral">+ Get Referral Link</div>
            </div>
          </div>
        </section>

        {/* ========== GROGUWORLD MISSION ========== */}
        <section className="mission" id="mission">
          <div className="mission__char">
            <img src="/images/mission_grogu_1.png" alt="Grogu warrior" />
          </div>
          <div className="mission__text">
            <h2 className="mission__title">GROGUWORLD<br /><span className="mission__title-sub" data-i18n="mission.sub">MISSION</span></h2>
            <div className="mission__block">
              <h4 data-i18n="mission.h1">Introduction</h4>
              <p data-i18n="mission.p1">Our goal is to build a transparent and sustainable ecosystem for Star Wars fans and crypto enthusiasts.</p>
            </div>
            <div className="mission__block">
              <h4 data-i18n="mission.h2">Unity</h4>
              <p data-i18n="mission.p2">We unite thousands of like-minded people into the Jedi Clan.</p>
            </div>
            <div className="mission__block">
              <h4 data-i18n="mission.h3">Development</h4>
              <p data-i18n="mission.p3">We provide tools for capital growth through innovative staking.</p>
            </div>
            <div className="mission__block">
              <h4 data-i18n="mission.h4">Heritage</h4>
              <p data-i18n="mission.p4">We are creating a brand that will remain in the history of blockchain just as the saga has remained in the history of cinema.</p>
            </div>
          </div>
          <div className="mission__wm">GROGUWORLD MISSION</div>
        </section>

        {/* ========== OUR PARTNERS ========== */}
        <section className="partners" id="partners">
          <h2 className="partners__title" data-i18n="partners.title">Our partners</h2>
          <div className="partners__track-wrap">
            <div className="partners__track">
              <div className="partners__item"><img src="/images/partner_1.png" alt="Bitunix" /></div>
              <div className="partners__item"><img src="/images/partner_2.png" alt="Bitmain" /></div>
              <div className="partners__item"><img src="/images/partner_3.png" alt="Empire's Battle" /></div>
              <div className="partners__item partners__item--text">◎ SOLANA</div>
              <div className="partners__item partners__item--text" style={{fontSize:'40px',fontWeight:'900'}}>HEADLINERS</div>
              <div className="partners__item"><img src="/images/partner_1.png" alt="Bitunix" /></div>
              <div className="partners__item"><img src="/images/partner_2.png" alt="Bitmain" /></div>
              <div className="partners__item"><img src="/images/partner_3.png" alt="Empire's Battle" /></div>
              <div className="partners__item partners__item--text">◎ SOLANA</div>
              <div className="partners__item partners__item--text" style={{fontSize:'40px',fontWeight:'900'}}>HEADLINERS</div>
            </div>
          </div>
        </section>

        {/* ========== $GROAI TOKENOMICS ========== */}
        <section className="tokenomics" id="tokenomics">
          <div className="tokenomics__wm">$GROAI TOKENOMICS</div>
          <div className="tokenomics__inner">
            <h2 className="tokenomics__title" data-i18n="tok.title">$GROAI Tokenomics</h2>
            <p className="tokenomics__sub" data-i18n="tok.sub">The GRO token is the fuel of our ecosystem. We&apos;ve developed a mathematically sound model that eliminates inflation and rewards long-term holders.</p>
            <div className="tokenomics__grid">
              <div className="tokenomics__chart-area">
                <img src="/tokenomics.png" alt="Tokenomics chart" className="tokenomics__chart-img" />
              </div>
              <div className="tokenomics__params">
                <h3 data-i18n="tok.params">$GRO Token Parameters:</h3>
                <ul>
                  <li><span className="tok-bullet"></span><b>Symbol:</b> $GROAI</li>
                  <li><span className="tok-bullet"></span><b>Network:</b> [Indicate network, e.g., BSC/Polygon]</li>
                  <li><span className="tok-bullet"></span><b>Total Supply:</b> [Indicate value, e.g., 100,000,000,000]</li>
                  <li><span className="tok-bullet"></span><b>Tax:</b> 0% on purchases / 0% on sales (for maximum liquidity).</li>
                  <li><span className="tok-bullet"></span><b>Staking Pool:</b> 40% — Rewards for those who believe in the project.</li>
                  <li><span className="tok-bullet"></span><b>Liquidity:</b> 30% — Locked for market stability.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========== STAKING AND ECOSYSTEM ========== */}
        <section className="staking" id="ecosystem">
          <div className="staking__glow"></div>
          <div className="staking__inner">
            <h2 className="staking__title" data-i18n="staking.title">Staking and Ecosystem</h2>
            <p className="staking__sub" data-i18n="staking.sub">Don&apos;t let your tokens sit idle. Send them to Jedi Temple training and earn passive income in GRO.</p>
            <div className="staking__grid" id="stakingGrid">

              <div className="staking__card">
                <img src="/images/staking_char_1.png" alt="Padawan" className="staking__avatar" />
                <div className="staking__card-body">
                  <div className="staking__card-name" data-i18n="staking.n1">Padawan</div>
                  <p data-i18n="staking.d1">Beginner level for everyone.</p>
                </div>
              </div>

              <div className="staking__card">
                <img src="/images/staking_char_2.png" alt="Jedi" className="staking__avatar" />
                <div className="staking__card-body">
                  <div className="staking__card-name" data-i18n="staking.n2">Jedi</div>
                  <p data-i18n="staking.d2">Increased reward ratio.</p>
                </div>
              </div>

              <div className="staking__card">
                <img src="/images/staking_char_3.png" alt="Master" className="staking__avatar" />
                <div className="staking__card-body">
                  <div className="staking__card-name" data-i18n="staking.n3">Master</div>
                  <p data-i18n="staking.d3">Maximum income and voting rights in the management of Clan DAO.</p>
                </div>
              </div>

              <div className="staking__welcome">
                <div className="staking__welcome-title" data-i18n-html="staking.welcome">Welcome<br />TO TEAM</div>
                <p data-i18n="staking.welcome.p">Join the team and embark on the path of the Jedi Force.</p>

                <a href="#" className="staking__welcome-btns pill-btn pill-btn--grad pill-btn--md pill-btn--w-stake">
                  <span className="pill-btn__label" data-i18n="staking.btn">Staking $GROAI</span>
                  <span className="pill-btn__circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                  </span>
                </a>
              </div>

            </div>
            <div className="slider-arrows slider-arrows--staking" id="stakingArrows">
              <button className="slider-arrow slider-arrow--prev" id="stakingPrev" aria-label="Previous">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button className="slider-arrow slider-arrow--next" id="stakingNext" aria-label="Next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </section>

        {/* ========== GROAI CREATOR BOT ========== */}
        <section className="groai" id="groai">
          <div className="groai__wm">GROAI CREATOR BOT</div>
          <div className="groai__text">
            <h2 className="groai__title">GroAI<br />Creator Bot</h2>
            <p className="groai__desc" data-i18n="groai.desc">We&apos;ve created a powerful creative tool available to every Clan member. Our AI-developed Creator Bot allows you to generate unique Star Wars- and Grogu-inspired content with a single click.</p>
          </div>
          <img src="/images/grogu_ai_bot.png" alt="GroAI bot" className="groai__img" />
          <div className="groai__list-wrap">
            <ul className="groai__list">
              <li data-i18n-html="groai.li1"><b>• Create:</b> Create masterpieces, art, and memes using a neural network.</li>
              <li data-i18n-html="groai.li2"><b>• Spread:</b> Promote the Clan and earn rewards.</li>
              <li data-i18n-html="groai.li3"><b>• Own:</b> The $GROAI token grants access to advanced bot features (video generation, 3D models, and high-res art).</li>
            </ul>
          </div>
        </section>

        {/* ========== ROADMAP ========== */}
        <section className="roadmap" id="roadmap">
          <div className="roadmap__wm">ROADMAP</div>
          <div className="roadmap__inner">
            <h2 className="roadmap__title" data-i18n="roadmap.title">ROADMAP</h2>
            <p className="roadmap__sub" data-i18n="roadmap.sub">The Plan for Galaxy Conquest</p>
            <div className="roadmap__grid" id="roadmapGrid">

              <div className="roadmap__card">
                <div className="roadmap__card-img">
                  <img src="/images/roadmap-1.png" alt="" />
                  <div className="roadmap__badge">Q3-2026</div>
                </div>
                <div className="roadmap__card-body">
                  <div className="roadmap__card-title" data-i18n="rm.c1.t">Grogu AI Creator Bot 1.0 Released</div>
                  <ul>
                    <li data-i18n="rm.c1.l1">Release of Grogu AI Creator Bot 1.0.</li>
                    <li data-i18n="rm.c1.l2">AI avatar art competitions among Padawans with a prize fund of $GROAI</li>
                  </ul>
                </div>
              </div>

              <div className="roadmap__card">
                <div className="roadmap__card-img">
                  <img src="/images/roadmap-2.png" alt="" />
                  <div className="roadmap__badge">Q4-2026</div>
                </div>
                <div className="roadmap__card-body">
                  <div className="roadmap__card-title" data-i18n="rm.c2.t">Battle for Attention</div>
                  <ul>
                    <li data-i18n="rm.c2.l1">Launch of a staking platform.</li>
                    <li data-i18n="rm.c2.l2">Large-scale marketing campaign and partnerships.</li>
                    <li data-i18n="rm.c2.l3">Listings on CoinMarketCap and CoinGecko</li>
                  </ul>
                </div>
              </div>

              <div className="roadmap__card">
                <div className="roadmap__card-img">
                  <img src="/images/roadmap-3.png" alt="" />
                  <div className="roadmap__badge">Q3+2026</div>
                </div>
                <div className="roadmap__card-body">
                  <div className="roadmap__card-title" data-i18n="rm.c3.t">Galactic order</div>
                  <ul>
                    <li data-i18n="rm.c3.l1">Launch of DAO governance (Clan Vote)</li>
                    <li data-i18n="rm.c3.l2">Development of an NFT collection with game mechanics.</li>
                    <li data-i18n="rm.c3.l3">Expansion into Metaverses</li>
                  </ul>
                </div>
              </div>

              <div className="roadmap__card">
                <div className="roadmap__card-img">
                  <img src="/images/roadmap-4.png" alt="" />
                  <div className="roadmap__badge">Q4 2026 - Q4 2027</div>
                </div>
                <div className="roadmap__card-body">
                  <div className="roadmap__card-title" data-i18n="rm.c4.t">Integrating the bot with the GroguWorld platform</div>
                  <ul>
                    <li data-i18n="rm.c4.l1">Create character collections via a bot and mint them directly in Telegram.</li>
                    <li data-i18n="rm.c4.l2">Train the neural network on specific saga styles for maximum accuracy</li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="slider-arrows slider-arrows--roadmap" id="roadmapArrows">
              <button className="slider-arrow slider-arrow--prev" id="roadmapPrev" aria-label="Previous">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button className="slider-arrow slider-arrow--next" id="roadmapNext" aria-label="Next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </section>

        {/* ========== JOIN OUR COMMUNITY ========== */}
        <section className="community" id="community">
          <div className="community__card">
            <div className="community__card-text">
              <h2 className="community__title" data-i18n="community.title">join our community</h2>
              <p className="community__desc" data-i18n="community.desc">Blockchain Orders is a large community of crypto enthusiasts that helps GROGU integrate his coins into a wider ecosystem, where every victory over a robot brings not only funcoins, but also valuable prizes.</p>
            </div>
          </div>
          <div className="community__grogu">
            <img src="/images/community_grogu.png" alt="Grogu" />
          </div>

          <div className="community__btns">
            <a href="#" className="pill-btn pill-btn--dark pill-btn--md pill-btn--w-comm">
              <span className="pill-btn__label"><span data-i18n="community.buy">Buy now</span></span>
              <span className="pill-btn__circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
              </span>
            </a>
            <a href="#" className="pill-btn pill-btn--grad pill-btn--md pill-btn--w-comm">
              <span className="pill-btn__label"><span data-i18n="community.stake">Staking $GROAI</span></span>
              <span className="pill-btn__circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
              </span>
            </a>
          </div>

          <div className="community__socials">
            <a href="#" className="community__soc">
              <svg width="18" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.636L18.244 2.25z"/></svg>
            </a>
            <a href="#" className="community__soc">
              <svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="community__soc">
              <svg width="29" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
          </div>
        </section>

        {/* ========== WHAT HAVE WE DONE ========== */}
        <section className="done" id="done">
          <h2 className="done__title" data-i18n="done.title">What have we done?</h2>
          <div className="done__bg">
            <img src="/images/whatdone_bg.png" alt="" />
            <div className="done__bg-top"></div>
            <div className="done__bg-bottom"></div>
          </div>
          <div className="done__stats">
            <div className="done__stat">
              <div className="done__stat-val">1000 QL +</div>
            </div>
            <div className="done__stat">
              <div className="done__stat-val">+100</div>
              <div className="done__stat-lbl" data-i18n="done.s2">Media partners</div>
            </div>
            <div className="done__stat">
              <div className="done__stat-val">$1.000.000</div>
              <div className="done__stat-lbl" data-i18n="done.s3">Rewards</div>
            </div>
            <div className="done__stat">
              <div className="done__stat-val">$3.2m</div>
              <div className="done__stat-lbl" data-i18n="done.s4">Attracted investments</div>
            </div>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="footer">
          <div className="footer__logo">
            <img src="/images/logo_grogu.png" alt="Grogu" />
          </div>
          <span className="footer__copy" data-i18n="footer.copy">© GROGU. 2026 All rights reserved</span>
          <div className="footer__links">
            <a href="#" data-i18n="footer.terms">Website Terms</a>
            <a href="#" data-i18n="footer.risk">Risk Disclosure</a>
            <a href="#" data-i18n="footer.disclaimer">Token Disclaimer</a>
          </div>
          <div className="footer__socials">
            <a href="#" className="footer__soc">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.636L18.244 2.25z"/></svg>
            </a>
            <a href="#" className="footer__soc">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="footer__soc">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
          </div>
        </footer>

      </div>{/* /.scale-wrap */}

      <Script src="/i18n.js" strategy="afterInteractive" />
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
