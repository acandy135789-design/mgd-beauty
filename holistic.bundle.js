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

    function HolisticCare() {
      const items = [
        {
          icon: '🌟', title: '開運能量加持', en: 'ENERGY & FORTUNE',
          desc: '結合仙佛加持概念與能量場調頻，透過信念與磁場共振，強化顧客的內在能量與氣場，讓美麗從心靈散發，帶來活力與正能量。',
        },
        {
          icon: '🧘', title: '身心靈整體調理', en: 'HOLISTIC WELLNESS',
          desc: '針對壓力、情緒與外在形象的整體調理方案，幫助您找回身心平衡，以充沛活力面對每一天，從內而外綻放自信光芒。',
        },
        {
          icon: '🔮', title: '占卜諮詢服務', en: 'DIVINATION CONSULTATION',
          desc: '結合傳統命理智慧與現代能量療法，為您解讀運勢、制定開運方案，讓美容護膚與人生運勢相輔相成，全面提升您的氣場與魅力。',
        },
      ];

      return (
        React.createElement('section', { style: { background: 'linear-gradient(135deg, #060d06 0%, #0d1a0e 50%, #060d06 100%)', padding: '140px 0', position: 'relative', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}}
          , React.createElement('div', { style: { position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'rgba(82,58,52,0.025)', clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 165}} )
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 166}}
            , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 167}}
              , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#523A34' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 168}}, "MIND · BODY · SPIRIT"    )
              , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 169}} )
              , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#523A34', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 170}}, "身心靈整體調理"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 171}} )
                , React.createElement('em', { style: { color: '#523A34', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 172}}, "能量共振・內外兼修")
              )
            )
            , React.createElement('div', { className: "three-col-grid", style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 175}}
              , items.map((item, i) => (
                React.createElement('div', { key: item.title, className: `ing-circle reveal delay-${i + 1}`, style: {
                  background: 'rgba(13,26,14,0.6)', padding: '52px 40px',
                  backdropFilter: 'blur(8px)', textAlign: 'center',
                }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 177}}
                  , React.createElement('div', { style: { fontSize: 44, marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 181}}, item.icon)
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.4em', color: '#523A34', marginBottom: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 182}}, item.en)
                  , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 24, fontWeight: 500, color: '#523A34', letterSpacing: '0.05em', marginBottom: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 183}}, item.title)
                  , React.createElement('div', { style: { width: 40, height: 1, background: 'rgba(82,58,52,0.4)', margin: '0 auto 20px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 184}} )
                  , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: '#8B6B5E', lineHeight: 2.1, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 185}}, item.desc)
                )
              ))
            )
            , React.createElement('div', { className: "reveal delay-3" , style: { textAlign: 'center', marginTop: 60 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 189}}
              , React.createElement('a', { href: "partners.html", style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 190}}, React.createElement('button', { className: "btn-gold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 190}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 190}}, "預約身心靈調理")))
            )
          )
        )
      );
    }

    function DanceWorkshop() {
      return (
        React.createElement('section', { style: { background: 'linear-gradient(150deg, #FFFBF9 0%, #F7D6C8 100%)', padding: '100px 0 140px', position: 'relative', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 199}}
          , React.createElement('div', { className: "two-col-grid", style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 200}}
            , React.createElement('div', { className: "reveal-right", style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 201}}
              , React.createElement('div', { style: { position: 'absolute', top: -20, left: -20, width: '100%', height: '100%', border: '1px solid rgba(82,58,52,0.2)', zIndex: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 202}} )
              , React.createElement('div', { style: { position: 'relative', zIndex: 1, overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 203}}
                , React.createElement('img', {
                  src: "images/holistic-dance.jpg",
                  alt: "身心靈舞蹈工作坊",
                  style: { width: '100%', display: 'block', filter: 'brightness(0.82) saturate(0.85)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 204}}
                )
              )
            )
            , React.createElement('div', { className: "reveal-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 211}}
              , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.5em', color: '#523A34', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 212}}, "MIND · BODY · SPIRIT DANCE"     )
              , React.createElement('div', { className: "gold-line-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 213}} )
              , React.createElement('h2', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#523A34', lineHeight: 1.3, letterSpacing: '0.02em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 214}}, "身心靈舞蹈"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 215}} )
                , React.createElement('em', { style: { fontStyle: 'italic', color: '#523A34' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 216}}, "讓身體回到順・心回到靜")
              )
              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#8B6B5E', lineHeight: 2.2, marginTop: 32, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 218}}, "這不是「再學更多」的課程，而是釋放你長久積累緊繃的旅程。透過溫柔的身體引導、呼吸技術與能量流設計，針對那些你平常用不到、卻不斷在承受壓力的身體部位。"

              )
              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#8B6B5E', lineHeight: 2.2, marginTop: 16, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 221}}, "「身心靈覺察・重塑流動工作坊」結合運動科學原理與能量優化方法，透過啟動正確的肌肉連結，打破疼痛循環，恢復動態美學。"

              )
              , React.createElement('div', { style: { display: 'flex', gap: 40, marginTop: 48, flexWrap: 'wrap' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 224}}
                , [['精準感知', '覺察身體細微訊號'], ['導正慣性', '修正長期代償模式'], ['動態美學', '重塑流暢的生命律動']].map(([t, d]) => (
                  React.createElement('div', { key: t, __self: this, __source: {fileName: _jsxFileName, lineNumber: 226}}
                    , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 22, color: '#523A34', fontWeight: 500, letterSpacing: '0.1em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 227}}, t)
                    , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 15, color: '#8B6B5E', marginTop: 6, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 228}}, d)
                  )
                ))
              )
              , React.createElement('div', { style: { marginTop: 40 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 232}}
                , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: 'rgba(82,58,52,0.8)', letterSpacing: '0.05em', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 233}}, "✓ 完全初學者亦適合 · 持續改善而非暫時紓緩"   )
                , React.createElement('a', { href: "https://line.me/ti/p/~a65778", target: "_blank", rel: "noopener noreferrer" , style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 234}}, React.createElement('button', { className: "btn-gold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 234}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 234}}, "了解工作坊詳情")))
              )
            )
          )
        )
      );
    }

    function DivinationSection() {
      return (
        React.createElement('section', { style: { background: 'linear-gradient(150deg, #F7D6C8 0%, #E2C2B9 100%)', padding: '100px 0 140px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 244}}
          , React.createElement('div', { className: "two-col-grid", style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 245}}
            , React.createElement('div', { className: "reveal-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 246}}
              , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.5em', color: '#523A34', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 247}}, "DIVINATION · FORTUNE READING"   )
              , React.createElement('div', { className: "gold-line-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 248}} )
              , React.createElement('h2', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#523A34', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 249}}, "神籤占卜"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 250}} )
                , React.createElement('em', { style: { fontStyle: 'italic', color: '#523A34' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 251}}, "指引方向・開啟好運")
              )
              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#8B6B5E', lineHeight: 2.2, marginTop: 32, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 253}}, "結合傳統命理智慧與現代能量療法，透過神籤占卜為您解讀當下運勢、制定個人化的開運方案，讓美容護膚與人生運勢相輔相成。"

              )
              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#8B6B5E', lineHeight: 2.2, marginTop: 16, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 256}}, "無論您面臨感情、事業、健康或人際關係的困惑，神籤占卜都能為您帶來清晰的指引，全面提升您的氣場與正向磁場。"

              )
              , React.createElement('div', { style: { marginTop: 40 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 259}}
                , React.createElement('a', { href: "partners.html", style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 260}}, React.createElement('button', { className: "btn-gold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 260}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 260}}, "預約占卜諮詢")))
              )
            )
            , React.createElement('div', { className: "reveal-right", style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 263}}
              , React.createElement('div', { style: { position: 'absolute', top: -20, right: -20, width: '100%', height: '100%', border: '1px solid rgba(82,58,52,0.2)', zIndex: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 264}} )
              , React.createElement('div', { style: { position: 'relative', zIndex: 1, overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 265}}
                , React.createElement('img', {
                  src: "images/mgd-bg.png",
                  alt: "神籤占卜",
                  style: { width: '100%', display: 'block', filter: 'brightness(0.85)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 266}}
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
        React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 281}}
          , React.createElement(Nav, { currentPage: "holistic", __self: this, __source: {fileName: _jsxFileName, lineNumber: 282}} )
          , React.createElement(HolisticCare, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 283}} )
          , React.createElement(DanceWorkshop, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 284}} )
          , React.createElement(DivinationSection, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 285}} )
          , React.createElement(Footer, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 286}} )
        )
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 291}} ));
  