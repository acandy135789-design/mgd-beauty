const _jsxFileName = "";
    const { useState, useEffect } = React;

    function useScrollReveal() {
      useEffect(() => {
        const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        const io = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
        }, { threshold: 0.12 });
        targets.forEach(t => io.observe(t));
        return () => io.disconnect();
      }, []);
    }

    function Nav({ currentPage = '' }) {
      const [menuOpen, setMenuOpen] = React.useState(false);
      const links = [
        { label: '首頁',       href: 'index.html',    page: 'home' },
        { label: '開運科技健髮', href: 'hair.html',     page: 'hair' },
        { label: '開運科技美容', href: 'beauty.html',   page: 'beauty' },
        { label: '身心靈調理',  href: 'holistic.html', page: 'holistic' },
        { label: '創辦人故事',  href: 'founder.html',  page: 'founder' },
        { label: '關於我們',    href: 'team.html',     page: 'team' },
        { label: '夥伴資訊',    href: 'partners.html', page: 'partners' },
        { label: '夥伴招募',    href: 'recruit.html',  page: 'recruit' },
      ];
      return (
        React.createElement('nav', { style: {
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: 'rgba(6,13,6,0.97)', backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(197,160,89,0.22)',
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
          , React.createElement('div', { style: { maxWidth: 1440, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
            , React.createElement('a', { href: "index.html", style: { textDecoration: 'none', flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
              , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 21, fontWeight: 500, letterSpacing: '0.1em', color: '#C5A059', lineHeight: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, "Magic Garden 美肌花園"  )
              , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 11, letterSpacing: '0.35em', color: '#9EA89C', marginTop: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "ENERGY · BEAUTY · VITALITY"    )
            )
            , React.createElement('div', { className: "nav-links", style: { display: 'flex', gap: 20, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
              , links.map(l => (
                React.createElement('a', { key: l.label, href: l.href, className: "nav-link", style: {
                  fontFamily: '"Noto Serif TC", serif', fontSize: 17, letterSpacing: '0.05em',
                  color: currentPage === l.page ? '#C5A059' : '#C8D0C4',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  borderBottom: currentPage === l.page ? '1px solid rgba(197,160,89,0.5)' : 'none',
                  paddingBottom: 2,
                },
                  onMouseEnter: e => e.currentTarget.style.color = '#C5A059',
                  onMouseLeave: e => e.currentTarget.style.color = currentPage === l.page ? '#C5A059' : '#C8D0C4', __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
, l.label)
              ))
              , React.createElement('a', { href: "partners.html", style: { textDecoration: "none" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}, React.createElement('button', { className: "btn-gold", style: { padding: "11px 24px", fontSize: 15 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}, "立即預約")))
            )
            , React.createElement('button', { className: "mobile-menu-btn", onClick: () => setMenuOpen(o => !o), 'aria-label': "選單", __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
              , React.createElement('span', { style: { transform: menuOpen ? 'rotate(45deg) translate(0, 8px)' : 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}} )
              , React.createElement('span', { style: { opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}} )
              , React.createElement('span', { style: { transform: menuOpen ? 'rotate(-45deg) translate(0, -8px)' : 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}} )
            )
          )
          , menuOpen && (
            React.createElement('div', { className: "mobile-nav-drawer", __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}
              , links.map(l => (
                React.createElement('a', { key: l.label, href: l.href, className: `mobile-nav-link${currentPage === l.page ? ' active' : ''}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}, l.label)
              ))
              , React.createElement('a', { href: "partners.html", style: { textDecoration: "none", display: "block" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}, React.createElement('button', { className: "btn-gold", style: { marginTop: 20, width: "100%" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}, "立即預約")))
            )
          )
        )
      );
    }

    function Footer() {
      const [phoneOpen, setPhoneOpen] = React.useState(false);
      const [emailOpen, setEmailOpen] = React.useState(false);
      const cols = [
        { title: '服務項目', links: [{ label: '開運科技健髮', href: 'hair.html' }, { label: '開運科技美容', href: 'beauty.html' }, { label: '身心靈整體調理', href: 'holistic.html' }] },
        { title: '品牌',     links: [{ label: '創辦人故事', href: 'founder.html' }, { label: '關於我們的團隊', href: 'team.html' }, { label: '夥伴資訊', href: 'partners.html' }, { label: '夥伴招募', href: 'recruit.html' }] },
        { title: '聯絡',     links: [{ label: 'LINE 預約', href: 'partners.html' }, { label: '電話諮詢', type: 'phone' }, { label: '電子郵件', type: 'email' }] },
      ];
      return (
        React.createElement('footer', { style: { background: '#060810', borderTop: '1px solid rgba(197,160,89,0.15)', padding: '80px 48px 40px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}
            , React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, paddingBottom: 60, borderBottom: '1px solid rgba(197,160,89,0.1)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}
                , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 500, letterSpacing: '0.15em', color: '#C5A059', marginBottom: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}, "Magic Garden 美肌花園"  )
                , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 13, letterSpacing: '0.45em', color: '#9EA89C', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}, "ENERGY · BEAUTY · VITALITY"    )
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#9EA89C', lineHeight: 2.2, letterSpacing: '0.07em', maxWidth: 300 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}, "能量美學品牌 · 開運美容護膚／秀髮養育"  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 86}} ), "貴賓預約優先制")
                , React.createElement('div', { style: { marginTop: 20 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#C8D0C4', letterSpacing: '0.07em', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}, "📞 0927-186-901" )
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#C8D0C4', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}}, "✉️ acandy135789@gmail.com" )
                )
              )
              , cols.map(col => (
                React.createElement('div', { key: col.title, __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.35em', color: '#C5A059', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}, col.title)
                  , React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 14 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
                    , col.links.map(l => (
                      l.type === 'phone' ? (
                        React.createElement('div', { key: l.label, style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}
                          , React.createElement('span', { onClick: () => setPhoneOpen(o => !o), style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#9EA89C', letterSpacing: '0.07em', cursor: 'pointer', transition: 'color 0.3s' },
                            onMouseEnter: e => e.currentTarget.style.color = '#C5A059',
                            onMouseLeave: e => e.currentTarget.style.color = '#9EA89C', __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}
, l.label)
                          , phoneOpen && (
                            React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 104}}
                            , React.createElement('div', { style: { position: 'fixed', inset: 0, zIndex: 99 }, onClick: () => setPhoneOpen(false), __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}} )
                            , React.createElement('div', { style: { position: 'absolute', left: 0, top: '110%', background: 'rgba(13,26,14,0.97)', border: '1px solid rgba(197,160,89,0.3)', padding: '12px 20px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}
                              , React.createElement('a', { href: "tel:0906607856", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#C5A059', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}, "0906-607-856")
                              , React.createElement('a', { href: "tel:0927186901", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#C5A059', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}, "0927-186-901")
                            )
                            )
                          )
                        )
                      ) : l.type === 'email' ? (
                        React.createElement('div', { key: l.label, style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}
                          , React.createElement('span', { onClick: () => setEmailOpen(o => !o), style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#9EA89C', letterSpacing: '0.07em', cursor: 'pointer', transition: 'color 0.3s' },
                            onMouseEnter: e => e.currentTarget.style.color = '#C5A059',
                            onMouseLeave: e => e.currentTarget.style.color = '#9EA89C', __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}}
, l.label)
                          , emailOpen && (
                            React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}
                            , React.createElement('div', { style: { position: 'fixed', inset: 0, zIndex: 99 }, onClick: () => setEmailOpen(false), __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}} )
                            , React.createElement('div', { style: { position: 'absolute', left: 0, top: '110%', background: 'rgba(13,26,14,0.97)', border: '1px solid rgba(197,160,89,0.3)', padding: '12px 20px', zIndex: 100 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}}
                              , React.createElement('a', { href: "mailto:acandy135789@gmail.com", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#C5A059', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}, "acandy135789@gmail.com")
                            )
                            )
                          )
                        )
                      ) : (
                        React.createElement('a', { key: l.label, href: l.href, style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#9EA89C', textDecoration: 'none', letterSpacing: '0.07em', transition: 'color 0.3s' },
                          onMouseEnter: e => e.currentTarget.style.color = '#C5A059',
                          onMouseLeave: e => e.currentTarget.style.color = '#9EA89C', __self: this, __source: {fileName: _jsxFileName, lineNumber: 129}}
, l.label)
                      )
                    ))
                  )
                )
              ))
            )
            , React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32, flexWrap: 'wrap', gap: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 139}}
              , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 16, color: 'rgba(158,168,156,0.5)', letterSpacing: '0.1em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 140}}, "© 2025 Magic Garden 美肌花園. All Rights Reserved."       )
            )
          )
        )
      );
    }

    function Team() {
      const pillars = [
        { n: '01', title: '開運能量加持', en: 'Energy & Fortune', desc: '融合仙佛加持概念與能量場調頻，透過信念與磁場共振強化顧客體驗，讓每次服務都充滿正向能量與美好磁場。' },
        { n: '02', title: '科技美容',     en: 'Tech Beauty',      desc: '採用臨床實證的外泌體護膚配方與先進儀器技術，聚焦肌膚修復、亮白與抗老化，為您帶來看得見的真實改變。' },
        { n: '03', title: '科技育髮',     en: 'Tech Hair Care',   desc: '利用台灣獨家專利外泌體技術改善掉髮、頭皮老化等問題，開創美髮科技的藍海商機，讓每一根髮絲重獲生命力。' },
      ];

      return (
        React.createElement('section', { className: "sec-forest", style: { padding: '140px 0', position: 'relative', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 155}}
          , React.createElement('div', { className: "two-col-grid", style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 156}}
            , React.createElement('div', { className: "reveal-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 157}}
              , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#C5A059' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 158}}, "ABOUT OUR TEAM"  )
              , React.createElement('span', { className: "gold-line-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}} )
              , React.createElement('h2', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#F0ECE4', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 160}}, "關於我們的團隊"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 161}} )
                , React.createElement('em', { style: { color: '#C5A059', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 162}}, "相同熱情・共同使命")
              )
              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#9EA89C', lineHeight: 2.2, marginTop: 32, letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}}, "我們是一群來自不同背景、懷抱相同熱情的人，擁有一致的信念——幫助那些願意努力改變生活的人。"

              )
              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#9EA89C', lineHeight: 2.2, marginTop: 16, letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 167}}, "我們相信每位成員都值得被看見，無論背景如何。Magic Garden 不只是一個品牌，更是一個讓人重拾自信、綻放光芒的能量場域。我們以三大核心支柱為基礎，提供全方位的美麗解決方案。"

              )
              , React.createElement('div', { style: { marginTop: 52 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 170}}
                , React.createElement('a', { href: "recruit.html", __self: this, __source: {fileName: _jsxFileName, lineNumber: 171}}
                  , React.createElement('button', { className: "btn-gold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 172}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 172}}, "加入我們的團隊"))
                )
              )
            )
            , React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 176}}
              , React.createElement('div', { className: "reveal", style: { marginBottom: 32, overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 177}}
                , React.createElement('img', {
                  src: "images/logo.png",
                  alt: "Magic Garden 美肌花園 Logo"   ,
                  style: { width: '100%', maxWidth: 360, display: 'block', filter: 'brightness(0.9)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 178}}
                )
              )
              , pillars.map((p, i) => (
                React.createElement('div', { key: p.n, className: `reveal delay-${i + 1}`, style: {
                  display: 'flex', alignItems: 'flex-start', gap: 28,
                  padding: '32px 0', borderBottom: '1px solid rgba(197,160,89,0.1)',
                }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 185}}
                  , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 18, color: '#C5A059', fontWeight: 500, letterSpacing: '0.15em', flexShrink: 0, paddingTop: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 189}}, p.n)
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 190}}
                    , React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 191}}
                      , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 500, color: '#F0ECE4', letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 192}}, p.title)
                      , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.3em', color: '#9EA89C' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 193}}, p.en)
                    )
                    , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#9EA89C', lineHeight: 2, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 195}}, p.desc)
                  )
                )
              ))
            )
          )
        )
      );
    }

    function App() {
      useScrollReveal();
      return (
        React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 208}}
          , React.createElement(Nav, { currentPage: "team", __self: this, __source: {fileName: _jsxFileName, lineNumber: 209}} )
          , React.createElement(Team, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 210}} )
          , React.createElement(Footer, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 211}} )
        )
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 216}} ));
  