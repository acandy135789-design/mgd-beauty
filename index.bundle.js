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

    function Nav({ isHome = false, currentPage = '' }) {
      const [scrolled, setScrolled] = useState(!isHome);
      const [menuOpen, setMenuOpen] = useState(false);
      useEffect(() => {
        if (!isHome) return;
        const fn = () => setScrolled(window.scrollY > 70);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
      }, [isHome]);

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
          transition: 'background 0.7s ease, border-color 0.7s ease, backdrop-filter 0.7s ease',
          background: (scrolled || menuOpen) ? 'rgba(249,248,252,0.97)' : 'transparent',
          backdropFilter: (scrolled || menuOpen) ? 'blur(14px)' : 'none',
          borderBottom: `1px solid ${(scrolled || menuOpen) ? 'rgba(46,37,65,0.22)' : 'transparent'}`,
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
          , React.createElement('div', { style: { maxWidth: 1440, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}
            , React.createElement('a', { href: "index.html", style: { textDecoration: 'none', flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
              , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 21, fontWeight: 500, letterSpacing: '0.1em', color: '#2E2541', lineHeight: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}, "Magic Garden 美肌花園"  )
              , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 11, letterSpacing: '0.35em', color: '#6B5A8E', marginTop: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}, "ENERGY · BEAUTY · VITALITY"    )
            )
            , React.createElement('div', { className: "nav-links", style: { display: 'flex', gap: 20, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}
              , links.map(l => (
                React.createElement('a', { key: l.label, href: l.href, className: "nav-link", style: {
                  fontFamily: '"Noto Serif TC", serif', fontSize: 17, letterSpacing: '0.05em',
                  fontWeight: currentPage === l.page ? 600 : 500,
                  color: currentPage === l.page ? '#3A252E' : '#4A3A65',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  borderBottom: currentPage === l.page ? '1px solid rgba(58,37,46,0.5)' : 'none',
                  paddingBottom: 2,
                },
                  onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
                  onMouseLeave: e => e.currentTarget.style.color = currentPage === l.page ? '#2E2541' : '#4A3A65', __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
, l.label)
              ))
              , React.createElement('a', { href: "member.html", style: { textDecoration: "none" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}, React.createElement('button', { style: { padding: "9px 20px", fontSize: 14, fontFamily: '"Noto Serif TC", serif', letterSpacing: '0.05em', color: '#2E2541', background: 'transparent', border: '1px solid rgba(46,37,65,0.5)', borderRadius: 4, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.3s' }, onMouseEnter: e => { e.currentTarget.style.background='rgba(46,37,65,0.1)'; e.currentTarget.style.borderColor='#2E2541'; }, onMouseLeave: e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(46,37,65,0.5)'; }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}, "會員登入")))
            )
            , React.createElement('button', { className: "mobile-menu-btn", onClick: () => setMenuOpen(o => !o), 'aria-label': "選單", __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}}
              , React.createElement('span', { style: { transform: menuOpen ? 'rotate(45deg) translate(0, 8px)' : 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}} )
              , React.createElement('span', { style: { opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 67}} )
              , React.createElement('span', { style: { transform: menuOpen ? 'rotate(-45deg) translate(0, -8px)' : 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}} )
            )
          )
          , menuOpen && (
            React.createElement('div', { className: "mobile-nav-drawer", __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}
              , links.map(l => (
                React.createElement('a', { key: l.label, href: l.href, className: `mobile-nav-link${currentPage === l.page ? ' active' : ''}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}, l.label)
              ))
              , React.createElement('a', { href: "member.html", style: { textDecoration: "none", display: "block" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}, React.createElement('button', { className: "btn-gold", style: { marginTop: 16, width: "100%", background: 'transparent', border: '1px solid rgba(46,37,65,0.7)', color: '#2E2541' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}, "會員登入 / 註冊"  )))
            )
          )
        )
      );
    }

    function Footer() {
      const [phoneOpen, setPhoneOpen] = React.useState(false);
      const [emailOpen, setEmailOpen] = React.useState(false);
      const serviceLinks = [
        { label: '開運科技健髮', href: 'hair.html' },
        { label: '開運科技美容', href: 'beauty.html' },
        { label: '身心靈整體調理', href: 'holistic.html' },
      ];
      const brandLinks = [
        { label: '創辦人故事', href: 'founder.html' },
        { label: '關於我們的團隊', href: 'team.html' },
        { label: '夥伴資訊', href: 'partners.html' },
        { label: '夥伴招募', href: 'recruit.html' },
      ];
      const contactLinks = [
        { label: 'LINE 預約', href: 'partners.html' },
        { label: '電話諮詢', type: 'phone' },
        { label: '電子郵件', type: 'email' },
      ];
      const cols = [
        { title: '服務項目', links: serviceLinks },
        { title: '品牌',     links: brandLinks },
        { title: '聯絡',     links: contactLinks },
      ];
      return (
        React.createElement('footer', { style: { background: '#F9F8FC', borderTop: '1px solid rgba(46,37,65,0.15)', padding: '80px 48px 40px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}
            , React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, paddingBottom: 60, borderBottom: '1px solid rgba(46,37,65,0.1)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}
                , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 500, letterSpacing: '0.15em', color: '#2E2541', marginBottom: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 113}}, "Magic Garden 美肌花園"  )
                , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 13, letterSpacing: '0.45em', color: '#6B5A8E', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}, "ENERGY · BEAUTY · VITALITY"    )
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#6B5A8E', lineHeight: 2.2, letterSpacing: '0.07em', maxWidth: 300 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}}, "能量美學品牌 · 開運美容護膚／秀髮養育"  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 115}} ), "貴賓預約優先制")
                , React.createElement('div', { style: { marginTop: 20 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#4A3A65', letterSpacing: '0.07em', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 117}}, "📞 0927-186-901" )
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#4A3A65', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}, "✉️ acandy135789@gmail.com" )
                )
              )
              , cols.map(col => (
                React.createElement('div', { key: col.title, __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}}
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.35em', color: '#2E2541', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}, col.title)
                  , React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 14 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 124}}
                    , col.links.map(l => (
                      l.type === 'phone' ? (
                        React.createElement('div', { key: l.label, style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 127}}
                          , React.createElement('span', { onClick: () => setPhoneOpen(o => !o), style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#6B5A8E', letterSpacing: '0.07em', cursor: 'pointer', transition: 'color 0.3s' },
                            onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
                            onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 128}}
, l.label)
                          , phoneOpen && (
                            React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 133}}
                            , React.createElement('div', { style: { position: 'fixed', inset: 0, zIndex: 99 }, onClick: () => setPhoneOpen(false), __self: this, __source: {fileName: _jsxFileName, lineNumber: 134}} )
                            , React.createElement('div', { style: { position: 'absolute', left: 0, top: '110%', background: 'rgba(13,26,14,0.97)', border: '1px solid rgba(46,37,65,0.3)', padding: '12px 20px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 135}}
                              , React.createElement('a', { href: "tel:0906607856", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#2E2541', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 136}}, "0906-607-856")
                              , React.createElement('a', { href: "tel:0927186901", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#2E2541', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 137}}, "0927-186-901")
                            )
                            )
                          )
                        )
                      ) : l.type === 'email' ? (
                        React.createElement('div', { key: l.label, style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 143}}
                          , React.createElement('span', { onClick: () => setEmailOpen(o => !o), style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#6B5A8E', letterSpacing: '0.07em', cursor: 'pointer', transition: 'color 0.3s' },
                            onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
                            onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 144}}
, l.label)
                          , emailOpen && (
                            React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 149}}
                            , React.createElement('div', { style: { position: 'fixed', inset: 0, zIndex: 99 }, onClick: () => setEmailOpen(false), __self: this, __source: {fileName: _jsxFileName, lineNumber: 150}} )
                            , React.createElement('div', { style: { position: 'absolute', left: 0, top: '110%', background: 'rgba(13,26,14,0.97)', border: '1px solid rgba(46,37,65,0.3)', padding: '12px 20px', zIndex: 100 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 151}}
                              , React.createElement('a', { href: "mailto:acandy135789@gmail.com", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#2E2541', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 152}}, "acandy135789@gmail.com")
                            )
                            )
                          )
                        )
                      ) : (
                        React.createElement('a', { key: l.label, href: l.href, style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#6B5A8E', textDecoration: 'none', letterSpacing: '0.07em', transition: 'color 0.3s' },
                          onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
                          onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 158}}
, l.label)
                      )
                    ))
                  )
                )
              ))
            )
            , React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32, flexWrap: 'wrap', gap: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 168}}
              , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 16, color: 'rgba(158,168,156,0.5)', letterSpacing: '0.1em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 169}}, "© 2025 Magic Garden 美肌花園. All Rights Reserved."       )
            )
          )
        )
      );
    }

    function Hero() {
      return (
        React.createElement('section', { id: "home", className: "hero-bg", style: { position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 178}}
          , React.createElement('div', { className: "mist-layer", style: { position: 'absolute', inset: 0, zIndex: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 179}} )
          , [
            { size: 3, left: '12%',  bottom: '22%', delay: 0,   dur: 7  },
            { size: 2, left: '28%',  bottom: '18%', delay: 1.5, dur: 9  },
            { size: 4, left: '55%',  bottom: '30%', delay: 0.8, dur: 11 },
            { size: 2, left: '72%',  bottom: '15%', delay: 2.2, dur: 8  },
            { size: 3, left: '88%',  bottom: '25%', delay: 0.3, dur: 10 },
            { size: 2, left: '42%',  bottom: '12%', delay: 1.8, dur: 7  },
            { size: 5, left: '8%',   bottom: '35%', delay: 3,   dur: 13 },
          ].map((o, i) => (
            React.createElement('div', { key: i, className: "orb", style: {
              width: o.size, height: o.size, left: o.left, bottom: o.bottom,
              background: 'radial-gradient(circle, rgba(46,37,65,0.9), rgba(46,37,65,0.1))',
              boxShadow: '0 0 8px rgba(46,37,65,0.6)',
              animationDuration: `${o.dur}s`, animationDelay: `${o.delay}s`, zIndex: 2,
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 189}} )
          ))
          , React.createElement('div', { className: "hero-inner", style: { position: 'relative', zIndex: 3, maxWidth: 1380, margin: '0 auto', padding: '0 48px', width: '100%', paddingTop: 120 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 196}}
            , React.createElement('div', { className: "hero-text-container", __self: this, __source: {fileName: _jsxFileName, lineNumber: 196}}
            , React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 20, marginBottom: 36, opacity: 0, animation: 'fadeSlide 1.2s ease 0.4s forwards' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 197}}
              , React.createElement('div', { style: { width: 40, height: 1, background: 'linear-gradient(90deg, transparent, #C5A059)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 198}} )
              , React.createElement('span', { style: { fontFamily: 'Cinzel, serif', fontSize: 16, letterSpacing: '0.45em', color: '#2E2541' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 199}}, "ENERGY BEAUTY · MAGIC GARDEN"    )
            )
            , React.createElement('h1', { className: "hero-h1 main-title", style: {
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
              lineHeight: 1.1,
              maxWidth: 860,
              opacity: 0, animation: 'fadeSlide 1.2s ease 0.7s forwards',
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 201}}, "能量美學"
              , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 208}} )
              , React.createElement('em', { style: { fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 209}}, "喚醒你的美麗魔法")
            )
            , React.createElement('p', { style: {
              fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 600,
              color: '#4A362D', lineHeight: 2, marginTop: 28, maxWidth: 500, letterSpacing: '1px',
              textShadow: '0 0 8px rgba(255,255,255,0.95), 0 1px 3px rgba(255,255,255,1), 0 2px 6px rgba(255,240,200,0.6)',
              opacity: 0, animation: 'fadeSlide 1.2s ease 1s forwards',
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 211}}, "開運美容護膚 · 秀髮養育 · 身心靈整體調理"
                  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 216}} ), "結合韓國頂級護膚技術與外泌體科技"
              , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 217}} ), "貴賓預約優先制，為您量身打造專屬美麗方案"

            )
            )
            , React.createElement('div', { className: "hero-cta-row", style: { display: 'flex', gap: 20, marginTop: 52, alignItems: 'center', flexWrap: 'wrap', opacity: 0, animation: 'fadeSlide 1.2s ease 1.3s forwards' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 220}}
              , React.createElement('a', { href: "partners.html", style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 221}}, React.createElement('button', { className: "btn-gold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 221}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 221}}, "立即預約體驗")))
              , React.createElement('a', { href: "member.html", style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 222}}, React.createElement('button', { style: { padding: "14px 32px", fontFamily: '"Noto Serif TC", serif', fontSize: 18, fontWeight: 500, letterSpacing: '0.1em', color: '#4A323D', background: 'rgba(255,255,255,0.40)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid #4A323D', borderRadius: 4, cursor: 'pointer', transition: 'all 0.3s' }, onMouseEnter: e => { e.currentTarget.style.background='rgba(255,255,255,0.65)'; e.currentTarget.style.boxShadow='0 4px 16px rgba(74,50,61,0.15)'; }, onMouseLeave: e => { e.currentTarget.style.background='rgba(255,255,255,0.40)'; e.currentTarget.style.boxShadow='none'; }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 222}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 222}}, "加入會員")))
              , React.createElement('a', { href: "founder.html", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: '#6B5A8E', textDecoration: 'none', letterSpacing: '0.1em', borderBottom: '1px solid rgba(158,168,156,0.4)', paddingBottom: 2, transition: 'color 0.3s' },
                onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
                onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 223}}
, "認識創辦人 →" )
            )
            , React.createElement('div', { className: "hero-stats", style: { display: 'flex', gap: 60, marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(46,37,65,0.15)', opacity: 0, animation: 'fadeSlide 1.2s ease 1.6s forwards' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 228}}
              , [
                { num: '9+',  label: '全台服務據點' },
                { num: '5+',  label: '專業美療項目' },
                { num: '18歲', label: '創業・韓國原廠授權' },
              ].map(s => (
                React.createElement('div', { key: s.label, className: "hero-stat-item", __self: this, __source: {fileName: _jsxFileName, lineNumber: 234}}
                  , React.createElement('div', { className: "hero-stat-num", style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 36, fontWeight: 300, color: '#2E2541', lineHeight: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 235}}, s.num)
                  , React.createElement('div', { className: "hero-stat-label", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 16, color: '#6B5A8E', marginTop: 8, letterSpacing: '0.1em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 236}}, s.label)
                )
              ))
            )
          )
          , React.createElement('div', { className: "scroll-indicator", style: { position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 3, textAlign: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 241}}
            , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.4em', color: '#6B5A8E', marginBottom: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 242}}, "SCROLL")
            , React.createElement('div', { style: { width: 1, height: 48, background: 'linear-gradient(180deg, #C5A059, transparent)', margin: '0 auto' }, className: "scroll-dot", __self: this, __source: {fileName: _jsxFileName, lineNumber: 243}} )
          )
          , React.createElement('style', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 245}}, `
            @keyframes fadeSlide {
              from { opacity: 0; transform: translateY(30px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            @media (max-width: 640px) {
              .hero-inner { padding: 0 24px !important; padding-top: 90px !important; }
              .hero-stats { gap: 16px !important; flex-wrap: nowrap !important; margin-top: 40px !important; }
              .hero-stat-num { font-size: 22px !important; }
              .hero-stat-label { font-size: 11px !important; letter-spacing: 0.05em !important; margin-top: 4px !important; }
              .scroll-indicator { display: none !important; }
            }
          `)
        )
      );
    }

    function Marquee() {
      const words = ['開運科技健髮', '開運科技美容', '外泌體育髮技術', '韓國頂級護膚', '身心靈整體調理', '能量美學品牌', '貴賓預約優先', '開運能量加持', '科技煥膚療程', '美麗從心出發'];
      const items = [...words, ...words];
      return (
        React.createElement('div', { style: { background: 'rgba(46,37,65,0.08)', borderTop: '1px solid rgba(46,37,65,0.15)', borderBottom: '1px solid rgba(46,37,65,0.15)', padding: '18px 0', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 266}}
          , React.createElement('div', { className: "marquee-track", __self: this, __source: {fileName: _jsxFileName, lineNumber: 267}}
            , items.map((w, i) => (
              React.createElement('span', { key: i, style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, letterSpacing: '0.2em', color: '#2E2541', padding: '0 40px', whiteSpace: 'nowrap', opacity: 0.85 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 269}}
                , w, " " , React.createElement('span', { style: { opacity: 0.4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 270}}, "·")
              )
            ))
          )
        )
      );
    }

    function SectionOverview() {
      const sections = [
        { title: '創辦人故事', en: "FOUNDER'S STORY", desc: '從敏感肌困擾到美麗魔法師，18歲創立品牌的傳奇故事', href: 'founder.html', icon: '✨' },
        { title: '開運科技健髮', en: 'HAIR HEALTH TECHNOLOGY', desc: '外泌體育髮科技，從頭皮開始好好照顧自己', href: 'hair.html', icon: '🌿' },
        { title: '開運科技美容', en: 'TECHNOLOGY BEAUTY CARE', desc: '韓國頂級護膚技術，讓您真正了解自己的肌膚', href: 'beauty.html', icon: '💎' },
        { title: '身心靈調理', en: 'MIND · BODY · SPIRIT', desc: '能量共振、內外兼修，找回身心平衡的整體調理', href: 'holistic.html', icon: '🔮' },
        { title: '關於我們', en: 'ABOUT OUR TEAM', desc: '一群懷抱相同熱情、共同使命的能量美學團隊', href: 'team.html', icon: '🤝' },
        { title: '夥伴資訊', en: 'PARTNER LOCATIONS', desc: '全桃園服務據點，專業技師為您量身服務', href: 'partners.html', icon: '📍' },
        { title: '夥伴招募', en: 'JOIN US', desc: '低門檻創業，與我們一起改變人生', href: 'recruit.html', icon: '🌟' },
      ];

      return (
        React.createElement('section', { style: { background: 'linear-gradient(150deg, #FFFBF9 0%, #F7D6C8 100%)', padding: '100px 48px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 290}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 291}}
            , React.createElement('div', { style: { textAlign: 'center', marginBottom: 64 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 292}}
              , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#2E2541' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 293}}, "EXPLORE")
              , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 294}} )
              , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, color: '#2E2541', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 295}}, "探索我們的世界"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 296}} )
                , React.createElement('em', { style: { color: '#2E2541', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 297}}, "Magic Garden 美肌花園"  )
              )
            )
            , React.createElement('div', { className: "overview-grid", style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 300}}
              , sections.slice(0, 6).map((s, i) => (
                React.createElement('a', { key: s.title, href: s.href, style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 302}}
                  , React.createElement('div', { className: `ing-circle reveal delay-${(i % 3) + 1}`, style: {
                    background: 'rgba(255,252,245,0.68)', padding: '36px 32px',
                    backdropFilter: 'blur(14px) saturate(1.3)', WebkitBackdropFilter: 'blur(14px) saturate(1.3)', height: '100%',
                    transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
                  },
                    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,250,238,0.85)',
                    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,252,245,0.68)', __self: this, __source: {fileName: _jsxFileName, lineNumber: 303}}

                    , React.createElement('div', { style: { fontSize: 32, marginBottom: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 311}}, s.icon)
                    , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.35em', color: '#C5956A', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 312}}, s.en)
                    , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 500, color: '#4A3B32', letterSpacing: '0.05em', marginBottom: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 313}}, s.title)
                    , React.createElement('div', { style: { width: 36, height: 1, background: 'linear-gradient(90deg, #D4AF37, transparent)', marginBottom: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 314}} )
                    , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#7A5F50', lineHeight: 2, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 315}}, s.desc)
                    , React.createElement('div', { style: { marginTop: 20, fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#E5A93B', letterSpacing: '0.1em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 316}}, "了解更多 →" )
                  )
                )
              ))
            )
            , React.createElement('a', { href: sections[6].href, style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 321}}
              , React.createElement('div', { className: "ing-circle overview-last-card reveal"  , style: {
                background: 'rgba(255,252,245,0.68)', padding: '36px 48px',
                backdropFilter: 'blur(14px) saturate(1.3)', WebkitBackdropFilter: 'blur(14px) saturate(1.3)',
                display: 'flex', alignItems: 'center', gap: 40,
                transition: 'background 0.3s, box-shadow 0.3s',
              },
                onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,250,238,0.85)',
                onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,252,245,0.68)', __self: this, __source: {fileName: _jsxFileName, lineNumber: 322}}

                , React.createElement('div', { style: { fontSize: 44, flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 331}}, sections[6].icon)
                , React.createElement('div', { style: { flex: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 332}}
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.4em', color: '#C5956A', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 333}}, sections[6].en)
                  , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 500, color: '#4A3B32', letterSpacing: '0.05em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 334}}, sections[6].title)
                  , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#7A5F50', lineHeight: 2, letterSpacing: '0.06em', marginTop: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 335}}, sections[6].desc)
                )
                , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: '#E5A93B', letterSpacing: '0.15em', flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 337}}, "了解更多 →" )
              )
            )
          )
        )
      );
    }

    function App() {
      useScrollReveal();
      return (
        React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 348}}
          , React.createElement(Nav, { isHome: true, currentPage: "home", __self: this, __source: {fileName: _jsxFileName, lineNumber: 349}} )
          , React.createElement(Hero, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 350}} )
          , React.createElement(Marquee, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 351}} )
          , React.createElement(SectionOverview, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 352}} )
          , React.createElement(Footer, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 353}} )
        )
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 358}} ));
  