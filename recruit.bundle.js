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
          background: 'rgba(255,251,249,0.97)', backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(82,58,52,0.22)',
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
          , React.createElement('div', { style: { maxWidth: 1440, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
            , React.createElement('a', { href: "index.html", style: { textDecoration: 'none', flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
              , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 21, fontWeight: 500, letterSpacing: '0.1em', color: '#523A34', lineHeight: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, "Magic Garden 美肌花園"  )
              , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 11, letterSpacing: '0.35em', color: '#8B6B5E', marginTop: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "ENERGY · BEAUTY · VITALITY"    )
            )
            , React.createElement('div', { className: "nav-links", style: { display: 'flex', gap: 20, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
              , links.map(l => (
                React.createElement('a', { key: l.label, href: l.href, className: "nav-link", style: {
                  fontFamily: '"Noto Serif TC", serif', fontSize: 17, letterSpacing: '0.05em',
                  color: currentPage === l.page ? '#523A34' : '#7A5548',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  borderBottom: currentPage === l.page ? '1px solid rgba(82,58,52,0.5)' : 'none',
                  paddingBottom: 2,
                },
                  onMouseEnter: e => e.currentTarget.style.color = '#523A34',
                  onMouseLeave: e => e.currentTarget.style.color = currentPage === l.page ? '#523A34' : '#7A5548', __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
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
        React.createElement('footer', { style: { background: '#FFFBF9', borderTop: '1px solid rgba(82,58,52,0.15)', padding: '80px 48px 40px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}
            , React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, paddingBottom: 60, borderBottom: '1px solid rgba(82,58,52,0.1)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}
                , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 500, letterSpacing: '0.15em', color: '#523A34', marginBottom: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}, "Magic Garden 美肌花園"  )
                , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 13, letterSpacing: '0.45em', color: '#8B6B5E', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}, "ENERGY · BEAUTY · VITALITY"    )
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#8B6B5E', lineHeight: 2.2, letterSpacing: '0.07em', maxWidth: 300 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}, "能量美學品牌 · 開運美容護膚／秀髮養育"  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 86}} ), "貴賓預約優先制")
                , React.createElement('div', { style: { marginTop: 20 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#7A5548', letterSpacing: '0.07em', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}, "📞 0927-186-901" )
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#7A5548', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}}, "✉️ acandy135789@gmail.com" )
                )
              )
              , cols.map(col => (
                React.createElement('div', { key: col.title, __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.35em', color: '#523A34', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}, col.title)
                  , React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 14 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
                    , col.links.map(l => (
                      l.type === 'phone' ? (
                        React.createElement('div', { key: l.label, style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}
                          , React.createElement('span', { onClick: () => setPhoneOpen(o => !o), style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#8B6B5E', letterSpacing: '0.07em', cursor: 'pointer', transition: 'color 0.3s' },
                            onMouseEnter: e => e.currentTarget.style.color = '#523A34',
                            onMouseLeave: e => e.currentTarget.style.color = '#8B6B5E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}
, l.label)
                          , phoneOpen && (
                            React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 104}}
                            , React.createElement('div', { style: { position: 'fixed', inset: 0, zIndex: 99 }, onClick: () => setPhoneOpen(false), __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}} )
                            , React.createElement('div', { style: { position: 'absolute', left: 0, top: '110%', background: 'rgba(13,26,14,0.97)', border: '1px solid rgba(82,58,52,0.3)', padding: '12px 20px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}
                              , React.createElement('a', { href: "tel:0906607856", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#523A34', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}, "0906-607-856")
                              , React.createElement('a', { href: "tel:0927186901", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#523A34', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}, "0927-186-901")
                            )
                            )
                          )
                        )
                      ) : l.type === 'email' ? (
                        React.createElement('div', { key: l.label, style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}
                          , React.createElement('span', { onClick: () => setEmailOpen(o => !o), style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#8B6B5E', letterSpacing: '0.07em', cursor: 'pointer', transition: 'color 0.3s' },
                            onMouseEnter: e => e.currentTarget.style.color = '#523A34',
                            onMouseLeave: e => e.currentTarget.style.color = '#8B6B5E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}}
, l.label)
                          , emailOpen && (
                            React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}
                            , React.createElement('div', { style: { position: 'fixed', inset: 0, zIndex: 99 }, onClick: () => setEmailOpen(false), __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}} )
                            , React.createElement('div', { style: { position: 'absolute', left: 0, top: '110%', background: 'rgba(13,26,14,0.97)', border: '1px solid rgba(82,58,52,0.3)', padding: '12px 20px', zIndex: 100 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}}
                              , React.createElement('a', { href: "mailto:acandy135789@gmail.com", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#523A34', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}, "acandy135789@gmail.com")
                            )
                            )
                          )
                        )
                      ) : (
                        React.createElement('a', { key: l.label, href: l.href, style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#8B6B5E', textDecoration: 'none', letterSpacing: '0.07em', transition: 'color 0.3s' },
                          onMouseEnter: e => e.currentTarget.style.color = '#523A34',
                          onMouseLeave: e => e.currentTarget.style.color = '#8B6B5E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 129}}
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

    function Recruit() {
      const advantages = [
        { icon: '💰', title: '收入穩定',   desc: '重複消費機制與快速回本模式，讓您的投入快速轉化為穩定收入來源。' },
        { icon: '✅', title: '效果顯著',   desc: '科學實證的產品配方，高顧客滿意度，口碑自然擴散，回購率高。' },
        { icon: '🛡️', title: '安全可靠',  desc: '嚴選成分、通過台灣安全檢驗、標準化操作流程，放心使用。' },
        { icon: '🤝', title: '溫暖氛圍',   desc: '團隊互助、正能量文化，讓創業過程充滿支持與溫度。' },
        { icon: '🌟', title: '成就感滿滿', desc: '助人變美並創造生活影響力，讓事業成為一份有意義的使命。' },
      ];

      return (
        React.createElement('section', { style: {
          position: 'relative', overflow: 'hidden',
          background: `linear-gradient(rgba(247,214,200,0.82), rgba(247,214,200,0.82)), url('https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
          padding: '140px 48px',
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 157}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 163}}
            , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}}
              , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#523A34' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 165}}, "JOIN US" )
              , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 166}} )
              , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#523A34', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 167}}, "夥伴招募"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 168}} )
                , React.createElement('em', { style: { color: '#523A34', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 169}}, "與我們一起改變人生")
              )
              , React.createElement('p', { className: "reveal delay-2" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, color: '#8B6B5E', lineHeight: 2.1, marginTop: 24, maxWidth: 640, margin: '24px auto 0', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 171}}, "結合「仙佛加持 × 專業美容 × 外泌體育髮」"
                    , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 172}} ), "創業門檻低於 10 萬元，無需相關背景經驗即可上手"
                  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 173}} ), "小資本 · 一人也能營運 · 提供完整專業培訓與行銷支持"

              )
            )
            , React.createElement('div', { className: "recruit-steps-grid", style: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, marginBottom: 60 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 177}}
              , advantages.map((a, i) => (
                React.createElement('div', { key: a.title, className: `ing-circle reveal delay-${(i % 4) + 1}`, style: {
                  background: 'rgba(13,26,14,0.78)', padding: '36px 20px',
                  backdropFilter: 'blur(8px)', textAlign: 'center',
                }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 179}}
                  , React.createElement('div', { style: { fontSize: 36, marginBottom: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 183}}, a.icon)
                  , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 24, fontWeight: 500, color: '#523A34', letterSpacing: '0.05em', marginBottom: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 184}}, a.title)
                  , React.createElement('div', { style: { width: 28, height: 1, background: 'rgba(82,58,52,0.4)', margin: '0 auto 14px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 185}} )
                  , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#8B6B5E', lineHeight: 2, letterSpacing: '0.05em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 186}}, a.desc)
                )
              ))
            )
            , React.createElement('div', { style: { textAlign: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 190}}
              , React.createElement('p', { className: "reveal", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: '#8B6B5E', marginBottom: 16, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 191}}, "適合：家庭主婦、二度就業者、創業新手，歡迎任何對美容美髮充滿熱情的你"

              )
              , React.createElement('p', { className: "reveal delay-1" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: 'rgba(82,58,52,0.8)', marginBottom: 40, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 194}}, "📞 0927-186-901  ·  ✉️ acandy135789@gmail.com"

              )
              , React.createElement('div', { style: { display: 'flex', gap: 20, justifyContent: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 197}}
                , React.createElement('a', { href: "partners.html", style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 198}}, React.createElement('button', { className: "btn-gold", style: { padding: '16px 48px', fontSize: 17 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 198}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 198}}, "立即洽詢加盟")))
              )
            )
          )
        )
      );
    }

    function App() {
      useScrollReveal();
      return (
        React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 209}}
          , React.createElement(Nav, { currentPage: "recruit", __self: this, __source: {fileName: _jsxFileName, lineNumber: 210}} )
          , React.createElement(Recruit, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 211}} )
          , React.createElement(Footer, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 212}} )
        )
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 217}} ));
  