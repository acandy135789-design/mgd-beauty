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
          background: 'rgba(249,248,252,0.97)', backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(26,8,40,0.22)',
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
          , React.createElement('div', { style: { maxWidth: 1440, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
            , React.createElement('a', { href: "index.html", style: { textDecoration: 'none', flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
              , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 21, fontWeight: 500, letterSpacing: '0.1em', color: '#1A0828', lineHeight: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, "Magic Garden 美肌花園"  )
              , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 11, letterSpacing: '0.35em', color: '#3A1E52', marginTop: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "ENERGY · BEAUTY · VITALITY"    )
            )
            , React.createElement('div', { className: "nav-links", style: { display: 'flex', gap: 20, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
              , links.map(l => (
                React.createElement('a', { key: l.label, href: l.href, className: "nav-link", style: {
                  fontFamily: '"Noto Serif TC", serif', fontSize: 17, letterSpacing: '0.05em',
                  color: currentPage === l.page ? '#2E2541' : '#4A3A65',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  borderBottom: currentPage === l.page ? '1px solid rgba(26,8,40,0.5)' : 'none',
                  paddingBottom: 2,
                },
                  onMouseEnter: e => e.currentTarget.style.color = '#1A0828',
                  onMouseLeave: e => e.currentTarget.style.color = currentPage === l.page ? '#2E2541' : '#4A3A65', __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
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
        React.createElement('footer', { style: { background: '#FAF9FC', borderTop: '1px solid rgba(26,8,40,0.15)', padding: '80px 48px 40px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}
            , React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, paddingBottom: 60, borderBottom: '1px solid rgba(26,8,40,0.1)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}
                , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 500, letterSpacing: '0.15em', color: '#1A0828', marginBottom: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}, "Magic Garden 美肌花園"  )
                , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 13, letterSpacing: '0.45em', color: '#3A1E52', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}, "ENERGY · BEAUTY · VITALITY"    )
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', lineHeight: 2.2, letterSpacing: '0.07em', maxWidth: 300 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}, "能量美學品牌 · 開運美容護膚／秀髮養育"  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 86}} ), "貴賓預約優先制")
                , React.createElement('div', { style: { marginTop: 20 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', letterSpacing: '0.07em', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}, "📞 0927-186-901" )
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}}, "✉️ acandy135789@gmail.com" )
                )
              )
              , cols.map(col => (
                React.createElement('div', { key: col.title, __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.35em', color: '#1A0828', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}, col.title)
                  , React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 14 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
                    , col.links.map(l => (
                      l.type === 'phone' ? (
                        React.createElement('div', { key: l.label, style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}
                          , React.createElement('span', { onClick: () => setPhoneOpen(o => !o), style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', letterSpacing: '0.07em', cursor: 'pointer', transition: 'color 0.3s' },
                            onMouseEnter: e => e.currentTarget.style.color = '#1A0828',
                            onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}
, l.label)
                          , phoneOpen && (
                            React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 104}}
                            , React.createElement('div', { style: { position: 'fixed', inset: 0, zIndex: 99 }, onClick: () => setPhoneOpen(false), __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}} )
                            , React.createElement('div', { style: { position: 'absolute', left: 0, top: '110%', background: 'rgba(13,26,14,0.97)', border: '1px solid rgba(200,168,88,0.52)', padding: '12px 20px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}
                              , React.createElement('a', { href: "tel:0906607856", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#1A0828', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}, "0906-607-856")
                              , React.createElement('a', { href: "tel:0927186901", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#1A0828', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}, "0927-186-901")
                            )
                            )
                          )
                        )
                      ) : l.type === 'email' ? (
                        React.createElement('div', { key: l.label, style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}
                          , React.createElement('span', { onClick: () => setEmailOpen(o => !o), style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', letterSpacing: '0.07em', cursor: 'pointer', transition: 'color 0.3s' },
                            onMouseEnter: e => e.currentTarget.style.color = '#1A0828',
                            onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}}
, l.label)
                          , emailOpen && (
                            React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}
                            , React.createElement('div', { style: { position: 'fixed', inset: 0, zIndex: 99 }, onClick: () => setEmailOpen(false), __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}} )
                            , React.createElement('div', { style: { position: 'absolute', left: 0, top: '110%', background: 'rgba(13,26,14,0.97)', border: '1px solid rgba(200,168,88,0.52)', padding: '12px 20px', zIndex: 100 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}}
                              , React.createElement('a', { href: "mailto:acandy135789@gmail.com", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#1A0828', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}, "acandy135789@gmail.com")
                            )
                            )
                          )
                        )
                      ) : (
                        React.createElement('a', { key: l.label, href: l.href, style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', textDecoration: 'none', letterSpacing: '0.07em', transition: 'color 0.3s' },
                          onMouseEnter: e => e.currentTarget.style.color = '#1A0828',
                          onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 129}}
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

    function FounderStory() {
      return (
        React.createElement('section', { className: "sec-dark", style: { padding: '140px 0', position: 'relative', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 149}}
          , React.createElement('div', { className: "two-col-grid", style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 150}}
            , React.createElement('div', { className: "reveal-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 151}}
              , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.5em', color: '#1A0828', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 152}}, "FOUNDER'S STORY" )
              , React.createElement('div', { className: "gold-line-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 153}} )
              , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 100, fontWeight: 300, color: 'rgba(26,8,40,0.06)', lineHeight: 1, marginBottom: -30, userSelect: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 154}}, "Momo")
              , React.createElement('h2', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#1A0828', lineHeight: 1.3, letterSpacing: '0.02em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 155}}, "從敏感肌的困擾"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 156}} )
                , React.createElement('em', { style: { fontStyle: 'italic', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 157}}, "到美麗的魔法師")
              )
              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#3A1E52', lineHeight: 2.2, marginTop: 32, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}}, "創辦人 Momo 自國中起即飽受嚴重敏感肌困擾——臉頰長期泛紅、反覆長痘，縱使嘗試各大專業品牌與皮膚科治療，症狀始終未能改善。因從小參與舞蹈表演，對外貌十分在意，肌膚問題帶來的困擾更加深刻。"

              )
              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#3A1E52', lineHeight: 2.2, marginTop: 16, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 162}}, "17歲時，Momo 遠赴韓國深入研究，親身試用超過 30 種護膚配方，終於找到真正穩定膚況的解方。18歲正式創立 Magic Garden 美肌花園，取得多個韓國品牌台灣總代理權，並取得外泌體原液的台灣獨家專利技術，將科技美容與育髮帶入全新境界。"

              )
              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#3A1E52', lineHeight: 2.2, marginTop: 16, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 165}}, "品牌名稱 Magic Garden，源自她對護膚的信念——保養品擁有讓人重拾自信、如花朵般盛放的「魔法」力量。"

              )
              , React.createElement('div', { className: "stats-row", style: { display: 'flex', gap: 40, marginTop: 48 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 168}}
                , [['17歲', '赴韓研究護膚'], ['30+', '親試護膚配方'], ['18歲', '創立品牌・取得授權']].map(([t, d]) => (
                  React.createElement('div', { key: t, __self: this, __source: {fileName: _jsxFileName, lineNumber: 170}}
                    , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, color: '#1A0828', fontWeight: 500, letterSpacing: '0.1em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 171}}, t)
                    , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 16, color: '#3A1E52', marginTop: 6, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 172}}, d)
                  )
                ))
              )
            )
            , React.createElement('div', { className: "reveal-right", style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 177}}
              , React.createElement('div', { style: { position: 'absolute', top: -20, right: -20, width: '100%', height: '100%', border: '1px solid rgba(26,8,40,0.2)', zIndex: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 178}} )
              , React.createElement('div', { style: { position: 'relative', zIndex: 1, overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 179}}
                , React.createElement('img', {
                  src: "images/founder.jpeg",
                  alt: "創辦人 Momo" ,
                  style: { width: '100%', display: 'block', filter: 'brightness(0.82) saturate(0.85)' },
                  onError: e => { e.target.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'; }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 180}}
                )
                , React.createElement('div', { style: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(6,13,6,0.88))', padding: '40px 32px 28px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 186}}
                  , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 19, color: '#1A0828', letterSpacing: '0.25em', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 187}}, "\"幫助更多人重拾自信，從美麗開始盛放\""

                  )
                )
              )
            )
          )
        )
      );
    }

    function App() {
      useScrollReveal();
      return (
        React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 201}}
          , React.createElement(Nav, { currentPage: "founder", __self: this, __source: {fileName: _jsxFileName, lineNumber: 202}} )
          , React.createElement(FounderStory, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 203}} )
          , React.createElement(Footer, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 204}} )
        )
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 209}} ));
  