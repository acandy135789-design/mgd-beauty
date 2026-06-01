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
          borderBottom: '1px solid rgba(46,37,65,0.22)',
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
          , React.createElement('div', { style: { maxWidth: 1440, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
            , React.createElement('a', { href: "index.html", style: { textDecoration: 'none', flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
              , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 21, fontWeight: 500, letterSpacing: '0.1em', color: '#2E2541', lineHeight: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, "Magic Garden 美肌花園"  )
              , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 11, letterSpacing: '0.35em', color: '#6B5A8E', marginTop: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "ENERGY · BEAUTY · VITALITY"    )
            )
            , React.createElement('div', { className: "nav-links", style: { display: 'flex', gap: 20, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
              , links.map(l => (
                React.createElement('a', { key: l.label, href: l.href, className: "nav-link", style: {
                  fontFamily: '"Noto Serif TC", serif', fontSize: 17, letterSpacing: '0.05em',
                  color: currentPage === l.page ? '#2E2541' : '#4A3A65',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  borderBottom: currentPage === l.page ? '1px solid rgba(46,37,65,0.5)' : 'none',
                  paddingBottom: 2,
                },
                  onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
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
        React.createElement('footer', { style: { background: '#F9F8FC', borderTop: '1px solid rgba(46,37,65,0.15)', padding: '80px 48px 40px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}
            , React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, paddingBottom: 60, borderBottom: '1px solid rgba(46,37,65,0.1)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}
                , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 500, letterSpacing: '0.15em', color: '#2E2541', marginBottom: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}, "Magic Garden 美肌花園"  )
                , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 13, letterSpacing: '0.45em', color: '#6B5A8E', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}, "ENERGY · BEAUTY · VITALITY"    )
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#6B5A8E', lineHeight: 2.2, letterSpacing: '0.07em', maxWidth: 300 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}, "能量美學品牌 · 開運美容護膚／秀髮養育"  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 86}} ), "貴賓預約優先制")
                , React.createElement('div', { style: { marginTop: 20 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#4A3A65', letterSpacing: '0.07em', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}, "📞 0927-186-901" )
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#4A3A65', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}}, "✉️ acandy135789@gmail.com" )
                )
              )
              , cols.map(col => (
                React.createElement('div', { key: col.title, __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.35em', color: '#2E2541', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}, col.title)
                  , React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 14 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
                    , col.links.map(l => (
                      l.type === 'phone' ? (
                        React.createElement('div', { key: l.label, style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}
                          , React.createElement('span', { onClick: () => setPhoneOpen(o => !o), style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#6B5A8E', letterSpacing: '0.07em', cursor: 'pointer', transition: 'color 0.3s' },
                            onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
                            onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}
, l.label)
                          , phoneOpen && (
                            React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 104}}
                            , React.createElement('div', { style: { position: 'fixed', inset: 0, zIndex: 99 }, onClick: () => setPhoneOpen(false), __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}} )
                            , React.createElement('div', { style: { position: 'absolute', left: 0, top: '110%', background: 'rgba(13,26,14,0.97)', border: '1px solid rgba(46,37,65,0.3)', padding: '12px 20px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}
                              , React.createElement('a', { href: "tel:0906607856", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#2E2541', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}, "0906-607-856")
                              , React.createElement('a', { href: "tel:0927186901", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#2E2541', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}, "0927-186-901")
                            )
                            )
                          )
                        )
                      ) : l.type === 'email' ? (
                        React.createElement('div', { key: l.label, style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}
                          , React.createElement('span', { onClick: () => setEmailOpen(o => !o), style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#6B5A8E', letterSpacing: '0.07em', cursor: 'pointer', transition: 'color 0.3s' },
                            onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
                            onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}}
, l.label)
                          , emailOpen && (
                            React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}
                            , React.createElement('div', { style: { position: 'fixed', inset: 0, zIndex: 99 }, onClick: () => setEmailOpen(false), __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}} )
                            , React.createElement('div', { style: { position: 'absolute', left: 0, top: '110%', background: 'rgba(13,26,14,0.97)', border: '1px solid rgba(46,37,65,0.3)', padding: '12px 20px', zIndex: 100 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}}
                              , React.createElement('a', { href: "mailto:acandy135789@gmail.com", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#2E2541', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}, "acandy135789@gmail.com")
                            )
                            )
                          )
                        )
                      ) : (
                        React.createElement('a', { key: l.label, href: l.href, style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#6B5A8E', textDecoration: 'none', letterSpacing: '0.07em', transition: 'color 0.3s' },
                          onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
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

    function PartnerInfo() {
      const partners = [
        { shop: '美肌花園-桃園區 輔導中心', name: 'Momo 老師', role: '技術顧問', area: '北北基・桃園', specialty: '開運美容技術顧問・K-POP舞蹈啟蒙/進階・身心舞動療癒・數位行銷', feature: '', photo: 'images/portraits/Momo1.png', qr: 'images/qr/momo-qr.jpg', line: 'https://line.me/ti/p/~a65778', lineId: 'a65778' },
        { shop: '美肌花園-桃園區 輔導中心', name: 'Ellie（愛莉）老師', role: '科技健髮調理技術顧問', area: '北北基・桃園', specialty: '科技健髮調理技術顧問・AI應用教學・神籤占卜・能量精品・親子關係經營', feature: '', photo: 'images/portraits/Ellie.png', qr: 'images/qr/ellie-qr.jpg', line: 'https://line.me/ti/p/~s186901', lineId: 's186901' },
        { shop: '美肌花園-新屋區 馥花園', name: '馥甄老師', role: '美容/育髮技術老師', area: '桃竹苗', specialty: '科技健髮・開運美容・神籤占卜', feature: '親切溫柔、陪伴客人找回自信', photo: 'images/portraits/馥甄.JPEG', qr: 'images/qr/fuzhen-qr.jpg', line: 'https://line.me/R/ti/p/%40049fhqur', lineId: '@049fhqur' },
        { shop: '美肌花園-新屋區 馥花園', name: '家菱老師', role: '美容技術老師', area: '新屋', specialty: '開運美容・神籤占卜', feature: '溫柔細膩、讓人放鬆安心', photo: 'images/portraits/家菱.png', qr: 'images/qr/jialing-qr.jpg', line: 'https://line.me/ti/p/~0_0yuni', lineId: '0_0yuni' },
        { shop: '美肌花園-桃園市中路區', name: '惠宇老師', role: '美容技術老師', area: '桃園', specialty: '開運美容・神籤占卜', feature: '互動自然、服務大方', photo: 'images/portraits/惠宇.JPEG', qr: 'images/qr/huiyu-qr.jpg', line: 'https://line.me/ti/p/~sharikiss09558903722', lineId: 'sharikiss09558903722' },
        { shop: '美肌花園-桃園市 韻萍開運美容育髮', name: '韻萍老師', role: '美容/育髮技術老師', area: '桃園南崁蘆竹', specialty: '科技健髮・開運美容・神籤占卜', feature: '手法專業、按摩到位、有效釋放緊繃', photo: 'images/portraits/韻萍.JPEG', qr: 'images/qr/yunping-qr.jpg', line: 'https://line.me/ti/p/~0931259848', lineId: '0931259848' },
        { shop: '美肌花園-桃園市龜山區', name: '雅筑老師', role: '美容/育髮技術老師', area: '桃園市龜山區', specialty: '開運美容・音樂教學', feature: '教學細膩、多元陪伴', photo: 'images/portraits/雅筑.png', qr: 'images/qr/yazhu-qr.jpg', line: 'https://line.me/R/ti/p/%40023xagzk', lineId: '@023xagzk' },
        { shop: '美肌花園-桃園市平鎮區', name: '資穎老師', role: '美容/育髮技術老師', area: '桃竹苗', specialty: '開運美容・科技健髮・寵物溝通', feature: '手法穩定、溫柔細心', photo: 'images/portraits/資穎.jpg', qr: 'images/qr/ziying-qr.jpg', line: 'https://line.me/ti/p/-S9l0Sg8s3', lineId: '-S9l0Sg8s3' },
        { shop: '美肌花園-桃園市龜山區', name: '亞蓁老師', role: '美容技術老師', area: '桃園', specialty: '開運美容・神籤占卜', feature: '手溫柔細膩、讓人放鬆安心', photo: 'images/portraits/亞蓁.jpg', qr: 'images/qr/yazhen-qr.jpg', line: 'https://line.me/ti/p/~sophie94888', lineId: 'sophie94888' },
        { shop: '美肌花園-桃園市桃園區', name: '睿輿老師', role: '育髮技術老師', area: '桃園', specialty: '科技健髮', feature: '溫柔細心', photo: 'images/portraits/睿輿.png', qr: 'images/qr/ruiyu-qr.jpg', line: 'https://line.me/ti/p/AJsMFJ6uSD', lineId: 'AJsMFJ6uSD' },
      ];

      return (
        React.createElement('section', { className: "sec-dark", style: { padding: '140px 0', position: 'relative', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 162}}
          , React.createElement('div', { style: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: '"Cormorant Garamond", serif', fontSize: 160, fontWeight: 700, color: 'rgba(46,37,65,0.025)', whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 163}}, "PARTNERS"

          )
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 166}}
            , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 167}}
              , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#2E2541' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 168}}, "PARTNER LOCATIONS" )
              , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 169}} )
              , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#2E2541', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 170}}, "夥伴資訊"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 171}} )
                , React.createElement('em', { style: { color: '#2E2541', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 172}}, "全桃園服務據點")
              )
              , React.createElement('p', { className: "reveal delay-2" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: '#6B5A8E', lineHeight: 2, marginTop: 20, letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 174}}, "桃園各區皆有專業技師駐點服務 · LINE 預約 · 貴賓優先制"

              )
            )
            , React.createElement('div', { className: "three-col-grid", style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 178}}
              , partners.map((p, i) => (
                React.createElement('div', { key: `${p.name}-${i}`, className: `testi-card reveal delay-${(i % 4) + 1}`, style: {
                  background: 'rgba(13,26,14,0.7)', padding: '0',
                  backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', overflow: 'hidden',
                }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 180}}
                  , p.photo && (
                    React.createElement('div', { style: { overflow: 'hidden', aspectRatio: '936/1664', flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 185}}
                      , React.createElement('img', { src: p.photo, alt: p.name, style: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.85) saturate(0.9)', transition: 'transform 0.5s ease' },
                        onMouseEnter: e => e.currentTarget.style.transform = 'scale(1.04)',
                        onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)', __self: this, __source: {fileName: _jsxFileName, lineNumber: 186}}
                      )
                    )
                  )
                  , React.createElement('div', { style: { padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 192}}
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.15em', color: '#2E2541', marginBottom: 14, opacity: 0.8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 193}}, p.shop)
                  , React.createElement('div', { style: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10, gap: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 194}}
                    , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 25, fontWeight: 500, color: '#2E2541', letterSpacing: '0.06em', lineHeight: 1.2 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 195}}, p.name)
                    , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 15, letterSpacing: '0.12em', color: '#2E2541', border: '1px solid rgba(46,37,65,0.35)', padding: '4px 10px', whiteSpace: 'nowrap', flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 196}}, p.area)
                  )
                  , React.createElement('div', { style: { width: 36, height: 1, background: 'linear-gradient(90deg, #C5A059, transparent)', marginBottom: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 198}} )
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#6B5A8E', letterSpacing: '0.07em', marginBottom: 10 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 199}}, p.role)
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#4A3A65', letterSpacing: '0.06em', lineHeight: 1.9, marginBottom: p.feature ? 8 : 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 200}}
                    , React.createElement('span', { style: { color: 'rgba(46,37,65,0.7)', fontSize: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 201}}, "專長｜"), p.specialty
                  )
                  , p.feature && (
                    React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#4A3A65', letterSpacing: '0.06em', lineHeight: 1.9 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 204}}
                      , React.createElement('span', { style: { color: 'rgba(46,37,65,0.7)', fontSize: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 205}}, "特點｜"), p.feature
                    )
                  )
                  , React.createElement('div', { style: { marginTop: 'auto', paddingTop: 20, display: 'flex', alignItems: 'center', gap: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 208}}
                    , p.qr ? (
                      React.createElement('img', { src: p.qr, alt: `${p.name} LINE QR`, style: { width: 72, height: 72, objectFit: 'contain', border: '1px solid rgba(46,37,65,0.25)', padding: 4, background: '#fff' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 210}} )
                    ) : (
                      React.createElement('div', { style: { width: 72, height: 72, border: '1px dashed rgba(46,37,65,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 212}}
                        , React.createElement('span', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 15, color: '#6B5A8E', textAlign: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 213}}, "QR 圖檔待補" )
                      )
                    )
                    , p.line && p.line !== '#' ? (
                      React.createElement('a', { href: p.line, target: "_blank", rel: "noopener noreferrer" , style: {
                        fontFamily: '"Noto Serif TC", serif', fontSize: 18, letterSpacing: '0.2em',
                        color: 'rgba(46,37,65,0.85)', border: '1px solid rgba(46,37,65,0.3)',
                        padding: '10px 20px', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s',
                      },
                        onMouseEnter: e => { e.currentTarget.style.background = 'rgba(46,37,65,0.12)'; e.currentTarget.style.borderColor = '#2E2541'; },
                        onMouseLeave: e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(46,37,65,0.3)'; }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 217}}
, "LINE 預約" )
                    ) : (
                      React.createElement('span', { style: {
                        fontFamily: '"Noto Serif TC", serif', fontSize: 16, letterSpacing: '0.1em',
                        color: 'rgba(158,168,156,0.6)', border: '1px solid rgba(158,168,156,0.2)',
                        padding: '10px 20px', display: 'inline-block',
                      }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 226}}, "掃描 QR 加入"  )
                    )
                  )
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
        React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 245}}
          , React.createElement(Nav, { currentPage: "partners", __self: this, __source: {fileName: _jsxFileName, lineNumber: 246}} )
          , React.createElement(PartnerInfo, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 247}} )
          , React.createElement(Footer, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 248}} )
        )
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 253}} ));
  