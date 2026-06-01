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
      const [menuOpen, setMenuOpen] = useState(false);
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

    function HairCare() {
      const features = [
        { icon: '🔬', title: '外泌體育髮科技', desc: '採用台灣獨家專利外泌體原液技術，深度修護頭皮、喚醒休眠毛囊，有效改善落髮與頭皮老化問題。' },
        { icon: '🌿', title: '頭皮健康深度分析', desc: '由專業顧問進行頭皮與髮質全面檢測，精準解讀您的髮況密碼，制定個人化護髮計畫。' },
        { icon: '✨', title: '開運能量加持', desc: '融合能量場調頻概念，在科技護髮的同時注入正向能量，從頭皮開始好好照顧自己。' },
        { icon: '📋', title: '個人化護髮方案', desc: '依據分析結果量身打造護髮路徑，並提供定期追蹤與回診服務，陪伴您的長久健髮旅程。' },
      ];
      return (
        React.createElement('section', { className: "sec-forest", style: { padding: '140px 0', position: 'relative', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 155}}
          , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 156}}
            , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#2E2541' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 157}}, "HAIR HEALTH TECHNOLOGY"  )
            , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 158}} )
            , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#2E2541', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}}, "開運科技健髮"
              , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 160}} )
              , React.createElement('em', { style: { color: '#2E2541', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 161}}, "從頭皮開始，好好照顧自己")
            )
          )
          , React.createElement('div', { className: "two-col-grid", style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}}
            , React.createElement('div', { className: "svc-card reveal delay-1"  , style: { background: 'rgba(13,26,14,0.8)', backdropFilter: 'blur(8px)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 165}}
              , React.createElement('div', { style: { overflow: 'hidden', height: 275 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 166}}
                , React.createElement('img', {
                  src: "images/laexo-product.png",
                  alt: "LAEXO 外泌體產品" ,
                  style: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom', display: 'block' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 167}}
                )
              )
              , React.createElement('div', { style: { padding: '40px 44px 48px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 173}}
                , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.5em', color: '#6B5A8E', marginBottom: 10 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 174}}, "EXOSOME HAIR TECHNOLOGY"  )
                , React.createElement('h3', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 28, fontWeight: 500, color: '#2E2541', letterSpacing: '0.05em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 175}}, "外泌體頭皮深度修護")
                , React.createElement('div', { style: { width: 48, height: 1, background: 'linear-gradient(90deg, #C5A059, transparent)', margin: '20px 0' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 176}} )
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, fontWeight: 300, color: '#6B5A8E', lineHeight: 2.1, letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 177}}, "採用台灣獨家專利外泌體原液，結合科技儀器深入頭皮底層，有效改善掉髮、頭皮老化等問題，喚醒髮絲的生命力。每次療程皆由專業技術顧問一對一全程服務，並提供後續追蹤諮詢。"

                )
                , React.createElement('div', { style: { marginTop: 32, padding: '20px 24px', border: '1px solid rgba(46,37,65,0.25)', display: 'inline-block' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 180}}
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.3em', color: '#6B5A8E', marginBottom: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 181}}, "STARTING FROM" )
                  , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 38, color: '#2E2541', fontWeight: 300 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 182}}, "NT$ 3,500" )
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#6B5A8E', marginTop: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 183}}, "單次體驗 · 套組方案另洽技師"  )
                )
                , React.createElement('div', { style: { marginTop: 36 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 185}}
                  , React.createElement('a', { href: "partners.html", style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 186}}, React.createElement('button', { className: "btn-gold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 186}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 186}}, "預約健髮療程")))
                )
              )
            )
            , React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 140 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 190}}
              , features.map((f, i) => (
                React.createElement('div', { key: f.title, className: `ing-circle reveal delay-${(i % 3) + 1}`, style: {
                  background: 'rgba(13,26,14,0.6)', padding: '28px 32px',
                  backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'flex-start', gap: 20,
                }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 192}}
                  , React.createElement('div', { style: { fontSize: 26, flexShrink: 0, marginTop: 2 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 196}}, f.icon)
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 197}}
                    , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 24, fontWeight: 500, color: '#2E2541', letterSpacing: '0.06em', marginBottom: 10 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 198}}, f.title)
                    , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#6B5A8E', lineHeight: 2, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 199}}, f.desc)
                  )
                )
              ))
            )
          )
        )
      );
    }

    function HairTestimonials() {
      const [slide, setSlide] = useState(0);

      const slides = [
        { src: 'images/hair/115899_0.jpg', caption: '你也希望頭髮慢慢變多嗎？' },
        { src: 'images/hair/115901_0.jpg', caption: '你也想迎接這麼多髮寶寶嗎？' },
        { src: 'images/hair/115905.jpg',   caption: '你也希望髮絲慢慢變得更強韌嗎？' },
      ];

      const prev = () => setSlide(s => (s - 1 + slides.length) % slides.length);
      const next = () => setSlide(s => (s + 1) % slides.length);
      const cur = slides[slide];

      return (
        React.createElement('section', { style: { background: 'linear-gradient(150deg, #FFFBF9 0%, #F7D6C8 100%)', padding: '100px 0 140px', position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 223}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 224}}

            /* 介紹文字 */
            , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 227}}
              , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#2E2541' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 228}}, "BEFORE · AFTER"  )
              , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 229}} )
              , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, color: '#2E2541', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 230}}, "客戶見證成果"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 231}} )
                , React.createElement('em', { style: { color: '#2E2541', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 232}}, "真實案例・有目共睹")
              )
              , React.createElement('div', { style: { marginTop: 40, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 234}}
                , React.createElement('p', { className: "reveal delay-2" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 22, fontWeight: 400, color: '#2E2541', letterSpacing: '0.1em', lineHeight: 1.8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 235}}, "你也想要這樣的改變嗎？"
                  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 236}} )
                  , React.createElement('span', { style: { fontSize: 18, color: '#6B5A8E' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 237}}, "如果這正是你在找的，我們聊聊")
                )
                , React.createElement('p', { className: "reveal delay-3" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: '#6B5A8E', letterSpacing: '0.08em', lineHeight: 2, maxWidth: 560 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 239}}, "你會為社交及外貌焦慮困擾嗎？"
                  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 240}} ), "歡迎與有活力及正能量的我們聊聊"

                )
                , React.createElement('a', { href: "partners.html", className: "reveal delay-3" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 243}}
                  , React.createElement('button', { className: "btn-gold", style: { padding: '14px 40px', fontSize: 18, marginTop: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 244}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 244}}, "聯絡我們"))
                )
                , React.createElement('div', { className: "reveal delay-3" , style: { marginTop: 8, padding: '18px 36px', border: '1px solid rgba(46,37,65,0.3)', display: 'inline-block', background: 'rgba(46,37,65,0.08)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 246}}
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 13, letterSpacing: '0.4em', color: '#6B5A8E', marginBottom: 6 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 247}}, "SINGLE SESSION" )
                  , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 34, color: '#2E2541', fontWeight: 300, letterSpacing: '0.05em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 248}}, "單堂體驗價 NT$ 3,500"  )
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 16, color: '#6B5A8E', marginTop: 6, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 249}}, "儲值優惠請洽詢技術老師")
                )
              )
            )

            /* 輪播圖 */
            , React.createElement('div', { style: { position: 'relative', userSelect: 'none', maxWidth: 860, margin: '0 auto' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 255}}
              /* 大標題說明文字 */
              , React.createElement('div', { style: { textAlign: 'center', marginBottom: 32 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 257}}
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 500, color: '#2E2541', letterSpacing: '0.12em', lineHeight: 1.5 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 258}}, cur.caption)
              )

              , React.createElement('div', { style: { overflow: 'hidden', border: '1px solid rgba(46,37,65,0.2)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 261}}
                , React.createElement('img', { src: cur.src, alt: cur.caption, style: { width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover', objectPosition: 'center bottom' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 262}} )
              )

              /* 左右箭頭 */
              , [{ fn: prev, side: { left: -28 } }, { fn: next, side: { right: -28 } }].map(({ fn, side }, idx) => (
                React.createElement('button', { key: idx, onClick: fn, style: {
                  position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                  ...side, zIndex: 10,
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'rgba(209,196,233,0.82)', border: '1px solid rgba(46,37,65,0.4)',
                  color: '#2E2541', fontSize: 26, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s',
                },
                  onMouseEnter: e => { e.currentTarget.style.background = 'rgba(46,37,65,0.2)'; e.currentTarget.style.borderColor = '#2E2541'; },
                  onMouseLeave: e => { e.currentTarget.style.background = 'rgba(209,196,233,0.82)'; e.currentTarget.style.borderColor = 'rgba(46,37,65,0.4)'; }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 267}}

                  , idx === 0 ? '‹' : '›'
                )
              ))

              /* 頁碼點 */
              , React.createElement('div', { style: { display: 'flex', justifyContent: 'center', gap: 10, marginTop: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 283}}
                , slides.map((_, i) => (
                  React.createElement('button', { key: i, onClick: () => setSlide(i), style: {
                    width: i === slide ? 28 : 10, height: 10, borderRadius: 5, border: 'none', cursor: 'pointer',
                    background: i === slide ? '#2E2541' : 'rgba(46,37,65,0.3)',
                    transition: 'all 0.3s', padding: 0,
                  }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 285}} )
                ))
              )
            )


          )
        )
      );
    }

    function HairCustomerShares() {
      const photos = [
        { src: 'images/hair/116330.jpg', caption: '客戶療程前後對比紀錄' },
        { src: 'images/hair/116362.jpg', caption: '頭皮新生髮寶寶，真實拍攝' },
        { src: 'images/hair/116400.jpg', caption: '髮量明顯改善，客戶超開心！' },
        { src: 'images/hair/116411.jpg', caption: '持續療程，髮絲越來越有活力' },
        { src: 'images/hair/116440.jpg', caption: '客戶分享：髮量慢慢變多了' },
        { src: 'images/hair/116509.jpg', caption: '頭皮健康，髮根才能穩固' },
        { src: 'images/hair/159627.jpg', caption: '健髮前後對比，效果有目共睹' },
        { src: 'images/hair/159628.jpg', caption: '每一根髮寶寶，都是努力的成果' },
      ];
      return (
        React.createElement('section', { style: { background: '#F9F8FC', padding: '100px 0 140px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 312}}
          , React.createElement('div', { style: { maxWidth: 860, margin: '0 auto', padding: '0 48px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 313}}
            , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 314}}
              , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#2E2541' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 315}}, "CUSTOMER STORIES" )
              , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 316}} )
              , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, color: '#2E2541', lineHeight: 1.4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 317}}, "顧客健髮喜悅分享"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 318}} )
                , React.createElement('em', { style: { color: '#2E2541', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 319}}, "真實見證・用心陪伴")
              )
              , React.createElement('p', { className: "reveal delay-2" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, color: '#6B5A8E', lineHeight: 2.2, marginTop: 28, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 321}}, "每一張照片背後，都是一段從擔心到放心的旅程。"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 322}} ), "我們陪你一步一步，把頭髮養回來。"

              )
            )
            , React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 48 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 326}}
              , photos.map((p, i) => (
                React.createElement('div', { key: i, className: `reveal delay-${(i % 3) + 1}`, style: { border: '1px solid rgba(46,37,65,0.15)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 328}}
                  , React.createElement('img', { src: p.src, alt: p.caption, style: { width: '100%', display: 'block' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 329}} )
                  , React.createElement('div', { style: { padding: '20px 28px', background: 'rgba(13,26,14,0.7)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 330}}
                    , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#2E2541', letterSpacing: '0.1em', margin: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 331}}, p.caption)
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
        React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 344}}
          , React.createElement(Nav, { currentPage: "hair", __self: this, __source: {fileName: _jsxFileName, lineNumber: 345}} )
          , React.createElement(HairCare, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 346}} )
          , React.createElement(HairTestimonials, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 347}} )
          , React.createElement(HairCustomerShares, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 348}} )
          , React.createElement(Footer, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 349}} )
        )
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 354}} ));
  