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

    function BeautyCare() {
      const treatments = [
        {
          id: '01', title: '基礎韓系護膚', en: 'BASIC KOREAN SKINCARE',
          desc: '以富含維生素 B5 的韓國進口產品進行深層保溼護理，有效修復敏感肌膚，低刺激配方讓肌膚重現水潤光澤。',
          suitable: '適合：乾性、油性、混合性、敏感肌',
          img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80',
        },
        {
          id: '02', title: '痘痘粉刺淨化療程', en: 'ACNE & BLACKHEAD TREATMENT',
          desc: '針對油性、痘痘肌設計，以溫和的物理清潔方式疏通毛孔、去除老廢角質，不傷害肌膚結構，讓毛孔自由呼吸。',
          suitable: '適合：油性肌、痘痘肌',
          img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=700&q=80',
        },
        {
          id: '03', title: '微針毛孔精緻療程', en: 'MICRONEEDLE PORE REFINEMENT',
          desc: '利用微針技術促進保養品有效滲透，縮小毛孔、細緻肌膚紋理，不破壞肌膚屏障，效果顯著且持久。',
          suitable: '適合：油性、混合肌（敏感乾性建議先進行基礎護膚）',
          img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=700&q=80',
        },
        {
          id: '04', title: '韓系水光美白療程', en: 'KOREAN WATER-LIGHT WHITENING',
          desc: '運用維生素 B3 有效成分改善膚色不均、暗沉與曬黑，讓肌膚恢復透亮光采。乾性敏感肌建議先完成基礎護理後進行。',
          suitable: '適合：所有膚質（乾敏肌建議先做基礎護膚）',
          img: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=700&q=80',
        },
        {
          id: '05', title: '手部手臂嫩白護理', en: 'HAND & ARM CARE',
          desc: '專為騎車族、戶外工作者設計，針對手部與手臂的曬黑、老化問題進行深度美白與嫩膚護理，恢復年輕細嫩肌膚。',
          suitable: '適合：所有膚質',
          img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=700&q=80',
        },
      ];

      return (
        React.createElement('section', { className: "sec-dark", style: { padding: '140px 0', position: 'relative', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 182}}
          , React.createElement('div', { style: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: '"Cormorant Garamond", serif', fontSize: 180, fontWeight: 700, color: 'rgba(82,58,52,0.025)', whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 183}}, "BEAUTY"

          )
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 186}}
            , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 187}}
              , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#523A34' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 188}}, "TECHNOLOGY BEAUTY CARE"  )
              , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 189}} )
              , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#523A34', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 190}}, "開運科技美容"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 191}} )
                , React.createElement('em', { style: { color: '#523A34', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 192}}, "韓國頂級護膚技術")
              )
              , React.createElement('p', { className: "reveal delay-2" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: '#8B6B5E', lineHeight: 2, marginTop: 20, letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 194}}, "全程使用韓國原廠進口護膚品 · 教育導向服務理念 · 讓您真正了解自己的肌膚"

              )
            )
            , React.createElement('div', { className: "three-col-grid", style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 198}}
              , treatments.slice(0, 3).map((t, i) => (
                React.createElement('div', { key: t.id, className: `svc-card reveal delay-${i + 1}`, style: { background: 'rgba(13,26,14,0.8)', backdropFilter: 'blur(8px)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 200}}
                  , React.createElement('div', { style: { overflow: 'hidden', height: 220 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 201}}
                    , React.createElement('img', { src: t.img, alt: t.title, className: "svc-img", style: { width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) saturate(0.75)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 202}} )
                  )
                  , React.createElement('div', { style: { padding: '28px 32px 36px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 204}}
                    , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 13, letterSpacing: '0.4em', color: '#8B6B5E', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 205}}, t.en)
                    , React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 206}}
                      , React.createElement('h3', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 25, fontWeight: 500, color: '#523A34', letterSpacing: '0.05em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 207}}, t.title)
                      , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 40, fontWeight: 300, color: 'rgba(82,58,52,0.2)', lineHeight: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 208}}, t.id)
                    )
                    , React.createElement('div', { style: { width: 36, height: 1, background: 'linear-gradient(90deg, #C5A059, transparent)', margin: '14px 0' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 210}} )
                    , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, fontWeight: 300, color: '#8B6B5E', lineHeight: 2, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 211}}, t.desc)
                    , React.createElement('div', { style: { marginTop: 14, fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: 'rgba(82,58,52,0.65)', letterSpacing: '0.04em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 212}}, t.suitable)
                  )
                )
              ))
            )
            , React.createElement('div', { className: "two-col-grid", style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 217}}
              , treatments.slice(3).map((t, i) => (
                React.createElement('div', { key: t.id, className: `svc-card reveal delay-${i + 1}`, style: { background: 'rgba(13,26,14,0.8)', backdropFilter: 'blur(8px)', display: 'flex' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 219}}
                  , React.createElement('div', { style: { overflow: 'hidden', width: 200, flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 220}}
                    , React.createElement('img', { src: t.img, alt: t.title, className: "svc-img", style: { width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) saturate(0.75)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 221}} )
                  )
                  , React.createElement('div', { style: { padding: '28px 32px', flex: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 223}}
                    , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 13, letterSpacing: '0.4em', color: '#8B6B5E', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 224}}, t.en)
                    , React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 225}}
                      , React.createElement('h3', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 24, fontWeight: 500, color: '#523A34', letterSpacing: '0.05em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 226}}, t.title)
                      , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 36, fontWeight: 300, color: 'rgba(82,58,52,0.2)', lineHeight: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 227}}, t.id)
                    )
                    , React.createElement('div', { style: { width: 36, height: 1, background: 'linear-gradient(90deg, #C5A059, transparent)', margin: '12px 0' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 229}} )
                    , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, fontWeight: 300, color: '#8B6B5E', lineHeight: 2, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 230}}, t.desc)
                    , React.createElement('div', { style: { marginTop: 12, fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: 'rgba(82,58,52,0.65)', letterSpacing: '0.04em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 231}}, t.suitable)
                  )
                )
              ))
            )
            , React.createElement('div', { className: "reveal delay-3" , style: { textAlign: 'center', marginTop: 60 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 236}}
              , React.createElement('a', { href: "partners.html", style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 237}}, React.createElement('button', { className: "btn-gold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 237}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 237}}, "預約美容療程")))
            )
          )
        )
      );
    }

    function App() {
      useScrollReveal();
      return (
        React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 247}}
          , React.createElement(Nav, { currentPage: "beauty", __self: this, __source: {fileName: _jsxFileName, lineNumber: 248}} )
          , React.createElement(BeautyCare, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 249}} )
          , React.createElement(Footer, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 250}} )
        )
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 255}} ));
  