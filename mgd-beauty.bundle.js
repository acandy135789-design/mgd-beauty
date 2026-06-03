const _jsxFileName = "";
    const { useState, useEffect } = React;

    function useScrollReveal(activePage) {
      useEffect(() => {
        let io;
        const timer = setTimeout(() => {
          const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
          io = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
          }, { threshold: 0.12 });
          targets.forEach(t => io.observe(t));
        }, 50);
        return () => { clearTimeout(timer); if (io) io.disconnect(); };
      }, [activePage]);
    }

    /* ── NAV ── */
    function Nav({ activePage, onNavigate }) {
      const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 70);
        window.addEventListener('scroll', fn, { passive: true });
        fn();
        return () => window.removeEventListener('scroll', fn);
      }, []);

      const links = [
        { label: '首頁',       page: 'home' },
        { label: '開運科技健髮', page: 'hair' },
        { label: '開運科技美容', page: 'beauty' },
        { label: '身心靈調理',  page: 'holistic' },
        { label: '創辦人故事',  page: 'founder' },
        { label: '關於我們',    page: 'team' },
        { label: '夥伴資訊',    page: 'partners' },
        { label: '夥伴招募',    page: 'recruit' },
      ];

      const isOpaque = activePage !== 'home' || scrolled;

      return (
        React.createElement('nav', { style: {
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          transition: 'background 0.7s ease, border-color 0.7s ease, backdrop-filter 0.7s ease',
          background: isOpaque ? 'rgba(6,13,6,0.93)' : 'transparent',
          backdropFilter: isOpaque ? 'blur(14px)' : 'none',
          borderBottom: `1px solid ${isOpaque ? 'rgba(46,37,65,0.22)' : 'transparent'}`,
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
          , React.createElement('div', { style: { maxWidth: 1440, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}

            , React.createElement('a', { href: "#", onClick: e => { e.preventDefault(); onNavigate('home'); }, style: { textDecoration: 'none', flexShrink: 0, cursor: 'pointer' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
              , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 23, fontWeight: 500, letterSpacing: '0.12em', color: '#1A0828', lineHeight: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}, "Magic Garden 美肌花園"

              )
              , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 12, letterSpacing: '0.45em', color: '#3A1E52', marginTop: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}, "ENERGY · BEAUTY · VITALITY"

              )
            )

            , React.createElement('div', { className: "nav-links", style: { display: 'flex', gap: 20, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
              , links.map(l => (
                React.createElement('a', { key: l.label, href: "#", className: "nav-link",
                  onClick: e => { e.preventDefault(); onNavigate(l.page); },
                  style: {
                    fontFamily: '"Noto Serif TC", serif', fontSize: 17, letterSpacing: '0.05em',
                    color: activePage === l.page ? '#2E2541' : '#4A3A65',
                    textDecoration: 'none', whiteSpace: 'nowrap', cursor: 'pointer',
                    borderBottom: activePage === l.page ? '1px solid rgba(46,37,65,0.5)' : 'none',
                    paddingBottom: 2,
                  },
                  onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
                  onMouseLeave: e => e.currentTarget.style.color = activePage === l.page ? '#2E2541' : '#4A3A65', __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}
, l.label)
              ))
              , React.createElement('button', { className: "btn-gold", style: { padding: '11px 24px', fontSize: 15 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}
                , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}, "立即預約")
              )
            )
          )
        )
      );
    }

    /* ── HERO ── */
    function Hero({ onNavigate }) {
      return (
        React.createElement('section', { id: "home", className: "hero-bg", style: { position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}
          , React.createElement('div', { className: "mist-layer", style: { position: 'absolute', inset: 0, zIndex: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}} )

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
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 100}} )
          ))

          , React.createElement('div', { className: "hero-inner", style: { position: 'relative', zIndex: 3, maxWidth: 1380, margin: '0 auto', padding: '0 48px', width: '100%', paddingTop: 120 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}

            , React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 20, marginBottom: 36, opacity: 0, animation: 'fadeSlide 1.2s ease 0.4s forwards' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}
              , React.createElement('div', { style: { width: 40, height: 1, background: 'linear-gradient(90deg, transparent, #C5A059)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}} )
              , React.createElement('span', { style: { fontFamily: 'Cinzel, serif', fontSize: 16, letterSpacing: '0.45em', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}, "ENERGY BEAUTY · MAGIC GARDEN"

              )
            )

            , React.createElement('h1', { className: "hero-h1", style: {
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
              fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.01em',
              color: '#1A0828', maxWidth: 860,
              opacity: 0, animation: 'fadeSlide 1.2s ease 0.7s forwards',
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 117}}, "能量美學"
              , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 124}} )
              , React.createElement('em', { style: { fontStyle: 'italic', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}}, "喚醒你的美麗魔法")
            )

            , React.createElement('p', { style: {
              fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300,
              color: '#3A1E52', lineHeight: 2, marginTop: 28, maxWidth: 500,
              letterSpacing: '0.08em',
              opacity: 0, animation: 'fadeSlide 1.2s ease 1s forwards',
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 128}}, "開運美容護膚 · 秀髮養育 · 身心靈整體調理"
                  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 134}} ), "結合韓國頂級護膚技術與外泌體科技"
              , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 135}} ), "貴賓預約優先制，為您量身打造專屬美麗方案"

            )

            , React.createElement('div', { style: { display: 'flex', gap: 20, marginTop: 52, alignItems: 'center', opacity: 0, animation: 'fadeSlide 1.2s ease 1.3s forwards' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 139}}
              , React.createElement('a', { href: "partners.html", style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 140}}, React.createElement('button', { className: "btn-gold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 140}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 140}}, "立即預約體驗")))
              , React.createElement('a', { href: "#", onClick: e => { e.preventDefault(); onNavigate('founder'); }, style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: '#3A1E52', textDecoration: 'none', letterSpacing: '0.1em', borderBottom: '1px solid rgba(158,168,156,0.4)', paddingBottom: 2, transition: 'color 0.3s', cursor: 'pointer' },
                onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
                onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 141}}
, "認識創辦人 →" )
            )

            , React.createElement('div', { className: "hero-stats", style: { display: 'flex', gap: 60, marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(46,37,65,0.15)', opacity: 0, animation: 'fadeSlide 1.2s ease 1.6s forwards' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 147}}
              , [
                { num: '9+',  label: '全台服務據點' },
                { num: '5+',  label: '專業美療項目' },
                { num: '18歲', label: '創業・韓國原廠授權' },
              ].map(s => (
                React.createElement('div', { key: s.label, className: "hero-stat-item", __self: this, __source: {fileName: _jsxFileName, lineNumber: 153}}
                  , React.createElement('div', { className: "hero-stat-num", style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 36, fontWeight: 300, color: '#1A0828', lineHeight: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 154}}, s.num)
                  , React.createElement('div', { className: "hero-stat-label", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 16, color: '#3A1E52', marginTop: 8, letterSpacing: '0.1em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 155}}, s.label)
                )
              ))
            )
          )

          , React.createElement('div', { className: "scroll-indicator", style: { position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 3, textAlign: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 161}}
            , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.4em', color: '#3A1E52', marginBottom: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 162}}, "SCROLL")
            , React.createElement('div', { style: { width: 1, height: 48, background: 'linear-gradient(180deg, #C5A059, transparent)', margin: '0 auto' }, className: "scroll-dot", __self: this, __source: {fileName: _jsxFileName, lineNumber: 163}} )
          )

          , React.createElement('style', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 166}}, `
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

    /* ── MARQUEE ── */
    function Marquee() {
      const words = ['開運科技健髮', '開運科技美容', '外泌體育髮技術', '韓國頂級護膚', '身心靈整體調理', '能量美學品牌', '貴賓預約優先', '開運能量加持', '科技煥膚療程', '美麗從心出發'];
      const items = [...words, ...words];
      return (
        React.createElement('div', { style: { background: 'rgba(46,37,65,0.08)', borderTop: '1px solid rgba(46,37,65,0.15)', borderBottom: '1px solid rgba(46,37,65,0.15)', padding: '18px 0', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 188}}
          , React.createElement('div', { className: "marquee-track", __self: this, __source: {fileName: _jsxFileName, lineNumber: 189}}
            , items.map((w, i) => (
              React.createElement('span', { key: i, style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, letterSpacing: '0.2em', color: '#1A0828', padding: '0 40px', whiteSpace: 'nowrap', opacity: 0.85 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 191}}
                , w, " " , React.createElement('span', { style: { opacity: 0.4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 192}}, "·")
              )
            ))
          )
        )
      );
    }

    /* ── FOUNDER STORY ── */
    function FounderStory() {
      return (
        React.createElement('section', { id: "founder", className: "sec-dark", style: { padding: '140px 0', position: 'relative', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 203}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 204}}

            , React.createElement('div', { className: "reveal-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 206}}
              , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.5em', color: '#1A0828', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 207}}, "FOUNDER'S STORY" )
              , React.createElement('div', { className: "gold-line-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 208}} )
              , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 100, fontWeight: 300, color: 'rgba(46,37,65,0.06)', lineHeight: 1, marginBottom: -30, userSelect: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 209}}, "Momo")

              , React.createElement('h2', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#1A0828', lineHeight: 1.3, letterSpacing: '0.02em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 211}}, "從敏感肌的困擾"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 212}} )
                , React.createElement('em', { style: { fontStyle: 'italic', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 213}}, "到美麗的魔法師")
              )

              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#3A1E52', lineHeight: 2.2, marginTop: 32, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 216}}, "創辦人 Momo 自國中起即飽受嚴重敏感肌困擾——臉頰長期泛紅、反覆長痘，縱使嘗試各大專業品牌與皮膚科治療，症狀始終未能改善。因從小參與舞蹈表演，對外貌十分在意，肌膚問題帶來的困擾更加深刻。"

              )
              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#3A1E52', lineHeight: 2.2, marginTop: 16, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 219}}, "17歲時，Momo 遠赴韓國深入研究，親身試用超過 30 種護膚配方，終於找到真正穩定膚況的解方。18歲正式創立 Magic Garden 美肌花園，取得多個韓國品牌台灣總代理權，並取得外泌體原液的台灣獨家專利技術，將科技美容與育髮帶入全新境界。"

              )
              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#3A1E52', lineHeight: 2.2, marginTop: 16, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 222}}, "品牌名稱 Magic Garden，源自她對護膚的信念——保養品擁有讓人重拾自信、如花朵般盛放的「魔法」力量。"

              )

              , React.createElement('div', { style: { display: 'flex', gap: 40, marginTop: 48 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 226}}
                , [['17歲', '赴韓研究護膚'], ['30+', '親試護膚配方'], ['18歲', '創立品牌・取得授權']].map(([t, d]) => (
                  React.createElement('div', { key: t, __self: this, __source: {fileName: _jsxFileName, lineNumber: 228}}
                    , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, color: '#1A0828', fontWeight: 500, letterSpacing: '0.1em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 229}}, t)
                    , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 16, color: '#3A1E52', marginTop: 6, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 230}}, d)
                  )
                ))
              )
            )

            , React.createElement('div', { className: "reveal-right", style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 236}}
              , React.createElement('div', { style: { position: 'absolute', top: -20, right: -20, width: '100%', height: '100%', border: '1px solid rgba(46,37,65,0.2)', zIndex: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 237}} )
              , React.createElement('div', { style: { position: 'relative', zIndex: 1, overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 238}}
                , React.createElement('img', {
                  src: "images/founder.jpeg",
                  alt: "創辦人 Momo" ,
                  style: { width: '100%', display: 'block', filter: 'brightness(0.82) saturate(0.85)' },
                  onError: e => { e.target.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'; }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 239}}
                )
                , React.createElement('div', { style: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(6,13,6,0.88))', padding: '40px 32px 28px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 245}}
                  , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 19, color: '#1A0828', letterSpacing: '0.25em', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 246}}, "\"幫助更多人重拾自信，從美麗開始盛放\""

                  )
                )
              )
            )
          )
        )
      );
    }

    /* ── SECTION OVERVIEW (首頁用) ── */
    function SectionOverview({ onNavigate }) {
      const sections = [
        { title: '創辦人故事', en: "FOUNDER'S STORY", desc: '從敏感肌困擾到美麗魔法師，18歲創立品牌的傳奇故事', page: 'founder', icon: '✨' },
        { title: '開運科技健髮', en: 'HAIR HEALTH TECHNOLOGY', desc: '外泌體育髮科技，從頭皮開始好好照顧自己', page: 'hair', icon: '🌿' },
        { title: '開運科技美容', en: 'TECHNOLOGY BEAUTY CARE', desc: '韓國頂級護膚技術，讓您真正了解自己的肌膚', page: 'beauty', icon: '💎' },
        { title: '身心靈調理', en: 'MIND · BODY · SPIRIT', desc: '能量共振、內外兼修，找回身心平衡的整體調理', page: 'holistic', icon: '🔮' },
        { title: '關於我們', en: 'ABOUT OUR TEAM', desc: '一群懷抱相同熱情、共同使命的能量美學團隊', page: 'team', icon: '🤝' },
        { title: '夥伴資訊', en: 'PARTNER LOCATIONS', desc: '全桃園服務據點，專業技師為您量身服務', page: 'partners', icon: '📍' },
        { title: '夥伴招募', en: 'JOIN US', desc: '低門檻創業，與我們一起改變人生', page: 'recruit', icon: '🌟' },
      ];
      return (
        React.createElement('section', { style: { background: 'linear-gradient(150deg, #FFFBF9 0%, #F7D6C8 100%)', padding: '100px 48px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 269}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 270}}
            , React.createElement('div', { style: { textAlign: 'center', marginBottom: 64 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 271}}
              , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 272}}, "EXPLORE")
              , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 273}} )
              , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, color: '#1A0828', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 274}}, "探索我們的世界"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 275}} ), React.createElement('em', { style: { color: '#1A0828', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 275}}, "Magic Garden 美肌花園"  )
              )
            )
            , React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 278}}
              , sections.slice(0, 6).map((s, i) => (
                React.createElement('div', { key: s.title, className: `ing-circle reveal delay-${(i % 3) + 1}`,
                  onClick: () => onNavigate(s.page),
                  style: { background: 'rgba(13,26,14,0.7)', padding: '36px 32px', backdropFilter: 'blur(8px)', cursor: 'pointer', transition: 'background 0.3s' },
                  onMouseEnter: e => e.currentTarget.style.background = 'rgba(13,26,14,0.95)',
                  onMouseLeave: e => e.currentTarget.style.background = 'rgba(13,26,14,0.7)', __self: this, __source: {fileName: _jsxFileName, lineNumber: 280}}

                  , React.createElement('div', { style: { fontSize: 32, marginBottom: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 286}}, s.icon)
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.35em', color: '#3A1E52', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 287}}, s.en)
                  , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 500, color: '#1A0828', letterSpacing: '0.05em', marginBottom: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 288}}, s.title)
                  , React.createElement('div', { style: { width: 36, height: 1, background: 'linear-gradient(90deg, #C5A059, transparent)', marginBottom: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 289}} )
                  , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', lineHeight: 2, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 290}}, s.desc)
                  , React.createElement('div', { style: { marginTop: 20, fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: 'rgba(46,37,65,0.7)', letterSpacing: '0.1em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 291}}, "了解更多 →" )
                )
              ))
            )
            , React.createElement('div', { className: "ing-circle reveal" ,
              onClick: () => onNavigate(sections[6].page),
              style: { background: 'rgba(13,26,14,0.7)', padding: '36px 48px', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', gap: 40, cursor: 'pointer', transition: 'background 0.3s' },
              onMouseEnter: e => e.currentTarget.style.background = 'rgba(13,26,14,0.95)',
              onMouseLeave: e => e.currentTarget.style.background = 'rgba(13,26,14,0.7)', __self: this, __source: {fileName: _jsxFileName, lineNumber: 295}}

              , React.createElement('div', { style: { fontSize: 44, flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 301}}, sections[6].icon)
              , React.createElement('div', { style: { flex: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 302}}
                , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.4em', color: '#3A1E52', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 303}}, sections[6].en)
                , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 500, color: '#1A0828', letterSpacing: '0.05em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 304}}, sections[6].title)
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', lineHeight: 2, letterSpacing: '0.06em', marginTop: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 305}}, sections[6].desc)
              )
              , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: 'rgba(46,37,65,0.7)', letterSpacing: '0.15em', flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 307}}, "了解更多 →" )
            )
          )
        )
      );
    }

    /* ── HAIR CARE ── */
    function HairCare() {
      const features = [
        { icon: '🔬', title: '外泌體育髮科技', desc: '採用台灣獨家專利外泌體原液技術，深度修護頭皮、喚醒休眠毛囊，有效改善落髮與頭皮老化問題。' },
        { icon: '🌿', title: '頭皮健康深度分析', desc: '由專業顧問進行頭皮與髮質全面檢測，精準解讀您的髮況密碼，制定個人化護髮計畫。' },
        { icon: '✨', title: '開運能量加持', desc: '融合能量場調頻概念，在科技護髮的同時注入正向能量，從頭皮開始好好照顧自己。' },
        { icon: '📋', title: '個人化護髮方案', desc: '依據分析結果量身打造護髮路徑，並提供定期追蹤與回診服務，陪伴您的長久健髮旅程。' },
      ];
      return (
        React.createElement('section', { id: "hair", className: "sec-forest", style: { padding: '140px 0', position: 'relative', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 323}}
          , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 324}}
            , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 325}}, "HAIR HEALTH TECHNOLOGY"  )
            , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 326}} )
            , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#1A0828', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 327}}, "開運科技健髮"
              , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 328}} ), React.createElement('em', { style: { color: '#1A0828', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 328}}, "從頭皮開始，好好照顧自己")
            )
          )
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 331}}
            , React.createElement('div', { className: "svc-card reveal delay-1"  , style: { background: 'rgba(13,26,14,0.8)', backdropFilter: 'blur(8px)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 332}}
              , React.createElement('div', { style: { overflow: 'hidden', height: 275 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 333}}
                , React.createElement('img', {
                  src: "images/laexo-product.png",
                  alt: "LAEXO 外泌體產品" ,
                  style: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom', display: 'block' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 334}} )
              )
              , React.createElement('div', { style: { padding: '40px 44px 48px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 339}}
                , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.5em', color: '#3A1E52', marginBottom: 10 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 340}}, "EXOSOME HAIR TECHNOLOGY"  )
                , React.createElement('h3', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 28, fontWeight: 500, color: '#1A0828', letterSpacing: '0.05em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 341}}, "外泌體頭皮深度修護")
                , React.createElement('div', { style: { width: 48, height: 1, background: 'linear-gradient(90deg, #C5A059, transparent)', margin: '20px 0' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 342}} )
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, fontWeight: 300, color: '#3A1E52', lineHeight: 2.1, letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 343}}, "採用台灣獨家專利外泌體原液，結合科技儀器深入頭皮底層，有效改善掉髮、頭皮老化等問題，喚醒髮絲的生命力。每次療程皆由專業技術顧問一對一全程服務，並提供後續追蹤諮詢。"

                )
                , React.createElement('div', { style: { marginTop: 32, padding: '20px 24px', border: '1px solid rgba(46,37,65,0.25)', display: 'inline-block' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 346}}
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.3em', color: '#3A1E52', marginBottom: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 347}}, "STARTING FROM" )
                  , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 38, color: '#1A0828', fontWeight: 300 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 348}}, "NT$ 3,500" )
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#3A1E52', marginTop: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 349}}, "單次體驗 · 套組方案另洽技師"  )
                )
                , React.createElement('div', { style: { marginTop: 36 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 351}}, React.createElement('a', { href: "partners.html", style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 351}}, React.createElement('button', { className: "btn-gold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 351}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 351}}, "預約健髮療程"))))
              )
            )
            , React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 140 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 354}}
              , features.map((f, i) => (
                React.createElement('div', { key: f.title, className: `ing-circle reveal delay-${(i % 3) + 1}`, style: { background: 'rgba(13,26,14,0.6)', padding: '28px 32px', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'flex-start', gap: 20 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 356}}
                  , React.createElement('div', { style: { fontSize: 26, flexShrink: 0, marginTop: 2 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 357}}, f.icon)
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 358}}
                    , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 24, fontWeight: 500, color: '#1A0828', letterSpacing: '0.06em', marginBottom: 10 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 359}}, f.title)
                    , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', lineHeight: 2, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 360}}, f.desc)
                  )
                )
              ))
            )
          )
        )
      );
    }

    /* ── HAIR TESTIMONIALS ── */
    function HairTestimonials({ onNavigate }) {
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
        React.createElement('section', { style: { background: 'linear-gradient(150deg, #FFFBF9 0%, #F7D6C8 100%)', padding: '100px 0 140px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 382}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 383}}
            , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 384}}
              , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 385}}, "BEFORE · AFTER"  )
              , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 386}} )
              , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, color: '#1A0828', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 387}}, "客戶見證成果"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 388}} ), React.createElement('em', { style: { color: '#1A0828', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 388}}, "真實案例・有目共睹")
              )
              , React.createElement('div', { style: { marginTop: 40, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 390}}
                , React.createElement('p', { className: "reveal delay-2" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 22, fontWeight: 400, color: '#1A0828', letterSpacing: '0.1em', lineHeight: 1.8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 391}}, "你也想要這樣的改變嗎？"
                  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 392}} ), React.createElement('span', { style: { fontSize: 18, color: '#3A1E52' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 392}}, "如果這正是你在找的，我們聊聊")
                )
                , React.createElement('p', { className: "reveal delay-3" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: '#3A1E52', letterSpacing: '0.08em', lineHeight: 2, maxWidth: 560 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 394}}, "你會為社交及外貌焦慮困擾嗎？"
                  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 395}} ), "歡迎與有活力及正能量的我們聊聊"
                )
                , React.createElement('button', { className: "btn-gold reveal delay-3"  , onClick: () => onNavigate('partners'), style: { padding: '14px 40px', fontSize: 18, marginTop: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 397}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 397}}, "聯絡我們"))
                , React.createElement('div', { className: "reveal delay-3" , style: { marginTop: 8, padding: '18px 36px', border: '1px solid rgba(46,37,65,0.3)', display: 'inline-block' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 398}}
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 13, letterSpacing: '0.4em', color: '#3A1E52', marginBottom: 6 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 399}}, "SINGLE SESSION" )
                  , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 34, color: '#1A0828', fontWeight: 300 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 400}}, "單堂體驗價 NT$ 3,500"  )
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 16, color: '#3A1E52', marginTop: 6 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 401}}, "儲值優惠請洽詢技術老師")
                )
              )
            )
            , React.createElement('div', { style: { position: 'relative', userSelect: 'none', maxWidth: 860, margin: '0 auto' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 405}}
              , React.createElement('div', { style: { textAlign: 'center', marginBottom: 32 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 406}}
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 500, color: '#1A0828', letterSpacing: '0.12em', lineHeight: 1.5 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 407}}, cur.caption)
              )
              , React.createElement('div', { style: { overflow: 'hidden', border: '1px solid rgba(46,37,65,0.2)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 409}}
                , React.createElement('img', { src: cur.src, alt: cur.caption, style: { width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover', objectPosition: 'center bottom' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 410}} )
              )
              , [{ fn: prev, side: { left: -28 }, ch: '‹' }, { fn: next, side: { right: -28 }, ch: '›' }].map(({ fn, side, ch }) => (
                React.createElement('button', { key: ch, onClick: fn, style: {
                  position: 'absolute', top: '50%', transform: 'translateY(-50%)', ...side, zIndex: 10,
                  width: 52, height: 52, borderRadius: '50%', background: 'rgba(209,196,233,0.82)',
                  border: '1px solid rgba(46,37,65,0.4)', color: '#1A0828', fontSize: 26, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s',
                },
                  onMouseEnter: e => { e.currentTarget.style.background = 'rgba(46,37,65,0.2)'; e.currentTarget.style.borderColor = '#2E2541'; },
                  onMouseLeave: e => { e.currentTarget.style.background = 'rgba(209,196,233,0.82)'; e.currentTarget.style.borderColor = 'rgba(46,37,65,0.4)'; }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 413}}
, ch)
              ))
              , React.createElement('div', { style: { display: 'flex', justifyContent: 'center', gap: 10, marginTop: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 423}}
                , slides.map((_, i) => (
                  React.createElement('button', { key: i, onClick: () => setSlide(i), style: {
                    width: i === slide ? 28 : 10, height: 10, borderRadius: 5, border: 'none', cursor: 'pointer',
                    background: i === slide ? '#2E2541' : 'rgba(46,37,65,0.3)', transition: 'all 0.3s', padding: 0,
                  }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 425}} )
                ))
              )
            )
          )
        )
      );
    }

    /* ── BEAUTY CARE ── */
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
        React.createElement('section', { style: { background: '#F9F8FC', padding: '100px 0 140px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 450}}
          , React.createElement('div', { style: { maxWidth: 860, margin: '0 auto', padding: '0 48px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 451}}
            , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 452}}
              , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 453}}, "CUSTOMER STORIES" )
              , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 454}} )
              , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, color: '#1A0828', lineHeight: 1.4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 455}}, "顧客健髮喜悅分享"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 456}} )
                , React.createElement('em', { style: { color: '#1A0828', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 457}}, "真實見證・用心陪伴")
              )
              , React.createElement('p', { className: "reveal delay-2" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, color: '#3A1E52', lineHeight: 2.2, marginTop: 28, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 459}}, "每一張照片背後，都是一段從擔心到放心的旅程。"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 460}} ), "我們陪你一步一步，把頭髮養回來。"

              )
            )
            , React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 48 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 464}}
              , photos.map((p, i) => (
                React.createElement('div', { key: i, className: `reveal delay-${(i % 3) + 1}`, style: { border: '1px solid rgba(46,37,65,0.15)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 466}}
                  , React.createElement('img', { src: p.src, alt: p.caption, style: { width: '100%', display: 'block' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 467}} )
                  , React.createElement('div', { style: { padding: '20px 28px', background: 'rgba(13,26,14,0.7)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 468}}
                    , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#1A0828', letterSpacing: '0.1em', margin: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 469}}, p.caption)
                  )
                )
              ))
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
        React.createElement('section', { id: "beauty", className: "sec-dark", style: { padding: '140px 0', position: 'relative', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 514}}
          , React.createElement('div', { style: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: '"Cormorant Garamond", serif', fontSize: 180, fontWeight: 700, color: 'rgba(46,37,65,0.025)', whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 515}}, "BEAUTY"

          )

          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 519}}

            , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 521}}
              , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 522}}, "TECHNOLOGY BEAUTY CARE"  )
              , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 523}} )
              , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#1A0828', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 524}}, "開運科技美容"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 525}} )
                , React.createElement('em', { style: { color: '#1A0828', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 526}}, "韓國頂級護膚技術")
              )
              , React.createElement('p', { className: "reveal delay-2" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: '#3A1E52', lineHeight: 2, marginTop: 20, letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 528}}, "全程使用韓國原廠進口護膚品 · 教育導向服務理念 · 讓您真正了解自己的肌膚"

              )
            )

            , React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 533}}
              , treatments.slice(0, 3).map((t, i) => (
                React.createElement('div', { key: t.id, className: `svc-card reveal delay-${i + 1}`, style: { background: 'rgba(13,26,14,0.8)', backdropFilter: 'blur(8px)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 535}}
                  , React.createElement('div', { style: { overflow: 'hidden', height: 220 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 536}}
                    , React.createElement('img', { src: t.img, alt: t.title, className: "svc-img", style: { width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) saturate(0.75)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 537}} )
                  )
                  , React.createElement('div', { style: { padding: '28px 32px 36px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 539}}
                    , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 13, letterSpacing: '0.4em', color: '#3A1E52', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 540}}, t.en)
                    , React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 541}}
                      , React.createElement('h3', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 25, fontWeight: 500, color: '#1A0828', letterSpacing: '0.05em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 542}}, t.title)
                      , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 40, fontWeight: 300, color: 'rgba(46,37,65,0.2)', lineHeight: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 543}}, t.id)
                    )
                    , React.createElement('div', { style: { width: 36, height: 1, background: 'linear-gradient(90deg, #C5A059, transparent)', margin: '14px 0' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 545}} )
                    , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, fontWeight: 300, color: '#3A1E52', lineHeight: 2, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 546}}, t.desc)
                    , React.createElement('div', { style: { marginTop: 14, fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: 'rgba(46,37,65,0.65)', letterSpacing: '0.04em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 547}}, t.suitable)
                  )
                )
              ))
            )

            , React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 553}}
              , treatments.slice(3).map((t, i) => (
                React.createElement('div', { key: t.id, className: `svc-card reveal delay-${i + 1}`, style: { background: 'rgba(13,26,14,0.8)', backdropFilter: 'blur(8px)', display: 'flex' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 555}}
                  , React.createElement('div', { style: { overflow: 'hidden', width: 200, flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 556}}
                    , React.createElement('img', { src: t.img, alt: t.title, className: "svc-img", style: { width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) saturate(0.75)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 557}} )
                  )
                  , React.createElement('div', { style: { padding: '28px 32px', flex: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 559}}
                    , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 13, letterSpacing: '0.4em', color: '#3A1E52', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 560}}, t.en)
                    , React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 561}}
                      , React.createElement('h3', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 24, fontWeight: 500, color: '#1A0828', letterSpacing: '0.05em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 562}}, t.title)
                      , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 36, fontWeight: 300, color: 'rgba(46,37,65,0.2)', lineHeight: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 563}}, t.id)
                    )
                    , React.createElement('div', { style: { width: 36, height: 1, background: 'linear-gradient(90deg, #C5A059, transparent)', margin: '12px 0' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 565}} )
                    , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, fontWeight: 300, color: '#3A1E52', lineHeight: 2, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 566}}, t.desc)
                    , React.createElement('div', { style: { marginTop: 12, fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: 'rgba(46,37,65,0.65)', letterSpacing: '0.04em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 567}}, t.suitable)
                  )
                )
              ))
            )

            , React.createElement('div', { className: "reveal delay-3" , style: { textAlign: 'center', marginTop: 60 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 573}}
              , React.createElement('a', { href: "partners.html", style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 574}}, React.createElement('button', { className: "btn-gold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 574}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 574}}, "預約美容療程")))
            )
          )
        )
      );
    }

    /* ── HOLISTIC CARE ── */
    function HolisticCare() {
      const items = [
        { icon: '🌟', title: '開運能量加持', en: 'ENERGY & FORTUNE', desc: '結合仙佛加持概念與能量場調頻，透過信念與磁場共振，強化顧客的內在能量與氣場，讓美麗從心靈散發，帶來活力與正能量。' },
        { icon: '🧘', title: '身心靈整體調理', en: 'HOLISTIC WELLNESS', desc: '針對壓力、情緒與外在形象的整體調理方案，幫助您找回身心平衡，以充沛活力面對每一天，從內而外綻放自信光芒。' },
        { icon: '🔮', title: '占卜諮詢服務', en: 'DIVINATION CONSULTATION', desc: '結合傳統命理智慧與現代能量療法，為您解讀運勢、制定開運方案，讓美容護膚與人生運勢相輔相成，全面提升您的氣場與魅力。' },
      ];
      return (
        React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 589}}
          , React.createElement('section', { style: { background: 'linear-gradient(135deg, #060d06 0%, #0d1a0e 50%, #060d06 100%)', padding: '140px 0', position: 'relative', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 590}}
            , React.createElement('div', { style: { position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'rgba(46,37,65,0.025)', clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 591}} )
            , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 592}}
              , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 593}}
                , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 594}}, "MIND · BODY · SPIRIT"    )
                , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 595}} )
                , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#1A0828', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 596}}, "身心靈整體調理"
                  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 597}} ), React.createElement('em', { style: { color: '#1A0828', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 597}}, "能量共振・內外兼修")
                )
              )
              , React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 600}}
                , items.map((item, i) => (
                  React.createElement('div', { key: item.title, className: `ing-circle reveal delay-${i + 1}`, style: { background: 'rgba(13,26,14,0.6)', padding: '52px 40px', backdropFilter: 'blur(8px)', textAlign: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 602}}
                    , React.createElement('div', { style: { fontSize: 44, marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 603}}, item.icon)
                    , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.4em', color: '#1A0828', marginBottom: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 604}}, item.en)
                    , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 24, fontWeight: 500, color: '#1A0828', letterSpacing: '0.05em', marginBottom: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 605}}, item.title)
                    , React.createElement('div', { style: { width: 40, height: 1, background: 'rgba(46,37,65,0.4)', margin: '0 auto 20px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 606}} )
                    , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: '#3A1E52', lineHeight: 2.1, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 607}}, item.desc)
                  )
                ))
              )
              , React.createElement('div', { className: "reveal delay-3" , style: { textAlign: 'center', marginTop: 60 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 611}}
                , React.createElement('a', { href: "partners.html", style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 612}}, React.createElement('button', { className: "btn-gold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 612}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 612}}, "預約身心靈調理")))
              )
            )
          )

          /* 身心靈舞蹈工作坊 */
          , React.createElement('section', { style: { background: 'linear-gradient(150deg, #FFFBF9 0%, #F7D6C8 100%)', padding: '100px 0 140px', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 618}}
            , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 619}}
              , React.createElement('div', { className: "reveal-right", style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 620}}
                , React.createElement('div', { style: { position: 'absolute', top: -20, left: -20, width: '100%', height: '100%', border: '1px solid rgba(46,37,65,0.2)', zIndex: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 621}} )
                , React.createElement('div', { style: { position: 'relative', zIndex: 1, overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 622}}
                  , React.createElement('img', { src: "images/holistic-dance.jpg", alt: "身心靈舞蹈工作坊", style: { width: '100%', display: 'block', filter: 'brightness(0.82) saturate(0.85)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 623}} )
                )
              )
              , React.createElement('div', { className: "reveal-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 626}}
                , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.5em', color: '#1A0828', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 627}}, "MIND · BODY · SPIRIT DANCE"     )
                , React.createElement('div', { className: "gold-line-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 628}} )
                , React.createElement('h2', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#1A0828', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 629}}, "身心靈舞蹈"
                  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 630}} ), React.createElement('em', { style: { fontStyle: 'italic', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 630}}, "讓身體回到順・心回到靜")
                )
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#3A1E52', lineHeight: 2.2, marginTop: 32, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 632}}, "這不是「再學更多」的課程，而是釋放你長久積累緊繃的旅程。透過溫柔的身體引導、呼吸技術與能量流設計，針對那些你平常用不到、卻不斷在承受壓力的身體部位。"

                )
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#3A1E52', lineHeight: 2.2, marginTop: 16, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 635}}, "「身心靈覺察・重塑流動工作坊」結合運動科學原理與能量優化方法，透過啟動正確的肌肉連結，打破疼痛循環，恢復動態美學。"

                )
                , React.createElement('div', { style: { display: 'flex', gap: 40, marginTop: 48, flexWrap: 'wrap' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 638}}
                  , [['精準感知','覺察身體細微訊號'],['導正慣性','修正長期代償模式'],['動態美學','重塑流暢的生命律動']].map(([t,d]) => (
                    React.createElement('div', { key: t, __self: this, __source: {fileName: _jsxFileName, lineNumber: 640}}
                      , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 22, color: '#1A0828', fontWeight: 500, letterSpacing: '0.1em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 641}}, t)
                      , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 15, color: '#3A1E52', marginTop: 6, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 642}}, d)
                    )
                  ))
                )
                , React.createElement('div', { style: { marginTop: 40 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 646}}
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: 'rgba(46,37,65,0.8)', letterSpacing: '0.05em', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 647}}, "✓ 完全初學者亦適合 · 持續改善而非暫時紓緩"   )
                  , React.createElement('a', { href: "https://line.me/ti/p/~a65778", target: "_blank", rel: "noopener noreferrer" , style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 648}}, React.createElement('button', { className: "btn-gold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 648}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 648}}, "了解工作坊詳情")))
                )
              )
            )
          )

          /* 神籤占卜 */
          , React.createElement('section', { style: { background: 'linear-gradient(150deg, #F7D6C8 0%, #E2C2B9 100%)', padding: '100px 0 140px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 655}}
            , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 656}}
              , React.createElement('div', { className: "reveal-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 657}}
                , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.5em', color: '#1A0828', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 658}}, "DIVINATION · FORTUNE READING"   )
                , React.createElement('div', { className: "gold-line-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 659}} )
                , React.createElement('h2', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#1A0828', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 660}}, "神籤占卜"
                  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 661}} ), React.createElement('em', { style: { fontStyle: 'italic', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 661}}, "指引方向・開啟好運")
                )
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#3A1E52', lineHeight: 2.2, marginTop: 32, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 663}}, "結合傳統命理智慧與現代能量療法，透過神籤占卜為您解讀當下運勢、制定個人化的開運方案，讓美容護膚與人生運勢相輔相成。"

                )
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#3A1E52', lineHeight: 2.2, marginTop: 16, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 666}}, "無論您面臨感情、事業、健康或人際關係的困惑，神籤占卜都能為您帶來清晰的指引，全面提升您的氣場與正向磁場。"

                )
                , React.createElement('div', { style: { marginTop: 40 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 669}}, React.createElement('a', { href: "partners.html", style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 669}}, React.createElement('button', { className: "btn-gold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 669}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 669}}, "預約占卜諮詢"))))
              )
              , React.createElement('div', { className: "reveal-right", style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 671}}
                , React.createElement('div', { style: { position: 'absolute', top: -20, right: -20, width: '100%', height: '100%', border: '1px solid rgba(46,37,65,0.2)', zIndex: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 672}} )
                , React.createElement('div', { style: { position: 'relative', zIndex: 1, overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 673}}
                  , React.createElement('img', { src: "images/mgd-bg.png",
                    alt: "神籤占卜", style: { width: '100%', display: 'block', filter: 'brightness(0.85)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 674}} )
                )
              )
            )
          )
        )
      );
    }

    /* ── TEAM ── */
    function Team({ onNavigate }) {
      const pillars = [
        { n: '01', title: '開運能量加持', en: 'Energy & Fortune', desc: '融合仙佛加持概念與能量場調頻，透過信念與磁場共振強化顧客體驗，讓每次服務都充滿正向能量與美好磁場。' },
        { n: '02', title: '科技美容',     en: 'Tech Beauty',      desc: '採用臨床實證的外泌體護膚配方與先進儀器技術，聚焦肌膚修復、亮白與抗老化，為您帶來看得見的真實改變。' },
        { n: '03', title: '科技育髮',     en: 'Tech Hair Care',   desc: '利用台灣獨家專利外泌體技術改善掉髮、頭皮老化等問題，開創美髮科技的藍海商機，讓每一根髮絲重獲生命力。' },
      ];
      return (
        React.createElement('section', { id: "team", className: "sec-forest", style: { padding: '140px 0', position: 'relative', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 692}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 693}}
            , React.createElement('div', { className: "reveal-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 694}}
              , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 695}}, "ABOUT OUR TEAM"  )
              , React.createElement('span', { className: "gold-line-left", __self: this, __source: {fileName: _jsxFileName, lineNumber: 696}} )
              , React.createElement('h2', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#1A0828', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 697}}, "關於我們的團隊"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 698}} ), React.createElement('em', { style: { color: '#1A0828', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 698}}, "相同熱情・共同使命")
              )
              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#3A1E52', lineHeight: 2.2, marginTop: 32, letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 700}}, "我們是一群來自不同背景、懷抱相同熱情的人，擁有一致的信念——幫助那些願意努力改變生活的人。"

              )
              , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, fontWeight: 300, color: '#3A1E52', lineHeight: 2.2, marginTop: 16, letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 703}}, "我們相信每位成員都值得被看見，無論背景如何。Magic Garden 不只是一個品牌，更是一個讓人重拾自信、綻放光芒的能量場域。我們以三大核心支柱為基礎，提供全方位的美麗解決方案。"

              )
              , React.createElement('div', { style: { marginTop: 52 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 706}}
                , React.createElement('button', { className: "btn-gold", onClick: () => onNavigate('recruit'), __self: this, __source: {fileName: _jsxFileName, lineNumber: 707}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 707}}, "加入我們的團隊"))
              )
            )
            , React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 710}}
              , React.createElement('div', { className: "reveal", style: { marginBottom: 32 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 711}}
                , React.createElement('img', { src: "images/logo.png",
                  alt: "Magic Garden 美肌花園 Logo"   , style: { width: '100%', maxWidth: 360, display: 'block', filter: 'brightness(0.9)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 712}} )
              )
              , pillars.map((p, i) => (
                React.createElement('div', { key: p.n, className: `reveal delay-${i + 1}`, style: { display: 'flex', alignItems: 'flex-start', gap: 28, padding: '32px 0', borderBottom: '1px solid rgba(46,37,65,0.1)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 716}}
                  , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 18, color: '#1A0828', fontWeight: 500, letterSpacing: '0.15em', flexShrink: 0, paddingTop: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 717}}, p.n)
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 718}}
                    , React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 719}}
                      , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 500, color: '#1A0828', letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 720}}, p.title)
                      , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.3em', color: '#3A1E52' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 721}}, p.en)
                    )
                    , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', lineHeight: 2, letterSpacing: '0.06em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 723}}, p.desc)
                  )
                )
              ))
            )
          )
        )
      );
    }

    /* ── PARTNER INFO ── */
    function PartnerInfo() {
      const partners = [
        { shop: '美肌花園-桃園區 輔導中心', name: 'Momo 老師', role: '技術顧問', area: '北北基・桃園', specialty: '開運美容技術顧問・K-POP舞蹈啟蒙/進階・身心舞動療癒・數位行銷', feature: '', photo: 'images/portraits/Momo1.png', qr: 'images/qr/momo-qr.jpg', line: 'https://line.me/ti/p/~a65778' },
        { shop: '美肌花園-桃園區 輔導中心', name: 'Ellie（愛莉）老師', role: '科技健髮調理技術顧問', area: '北北基・桃園', specialty: '科技健髮調理技術顧問・AI應用教學・神籤占卜・能量精品・親子關係經營', feature: '', photo: 'images/portraits/Ellie.png', qr: 'images/qr/ellie-qr.jpg', line: 'https://line.me/ti/p/~s186901' },
        { shop: '美肌花園-新屋區 馥花園', name: '馥甄老師', role: '美容/育髮技術老師', area: '桃竹苗', specialty: '科技健髮・開運美容・神籤占卜', feature: '親切溫柔、陪伴客人找回自信', photo: 'images/portraits/馥甄.JPEG', qr: 'images/qr/fuzhen-qr.jpg', line: 'https://lin.ee/049fhqur' },
        { shop: '美肌花園-新屋區 馥花園', name: '家菱老師', role: '美容技術老師', area: '新屋', specialty: '開運美容・神籤占卜', feature: '溫柔細膩、讓人放鬆安心', photo: 'images/portraits/家菱.png', qr: 'images/qr/jialing-qr.jpg', line: 'https://line.me/ti/p/~0_0yuni' },
        { shop: '美肌花園-桃園市中路區', name: '惠宇老師', role: '美容技術老師', area: '桃園', specialty: '開運美容・神籤占卜', feature: '互動自然、服務大方', photo: 'images/portraits/惠宇.JPEG', qr: 'images/qr/huiyu-qr.jpg', line: 'https://line.me/ti/p/~sharikiss09558903722' },
        { shop: '美肌花園-桃園市 韻萍開運美容育髮', name: '韻萍老師', role: '美容/育髮技術老師', area: '桃園南崁蘆竹', specialty: '科技健髮・開運美容・神籤占卜', feature: '手法專業、按摩到位、有效釋放緊繃', photo: 'images/portraits/韻萍.JPEG', qr: 'images/qr/yunping-qr.jpg', line: 'https://line.me/ti/p/~0931259848' },
        { shop: '美肌花園-桃園市龜山區', name: '雅筑老師', role: '美容/育髮技術老師', area: '桃園市龜山區', specialty: '開運美容・音樂教學', feature: '教學細膩、多元陪伴', photo: 'images/portraits/雅筑.png', qr: 'images/qr/yazhu-qr.jpg', line: 'https://lin.ee/023xagzk' },
        { shop: '美肌花園-桃園市平鎮區', name: '資穎老師', role: '美容/育髮技術老師', area: '桃竹苗', specialty: '開運美容・科技健髮・寵物溝通', feature: '手法穩定、溫柔細心', photo: 'images/portraits/資穎.jpg', qr: 'images/qr/ziying-qr.jpg', line: '#' },
        { shop: '美肌花園-桃園市龜山區', name: '亞蓁老師', role: '美容技術老師', area: '桃園', specialty: '開運美容・神籤占卜', feature: '手溫柔細膩、讓人放鬆安心', photo: 'images/portraits/亞蓁.jpg', qr: 'images/qr/yazhen-qr.jpg', line: 'https://line.me/ti/p/~sophie94888' },
        { shop: '美肌花園-桃園市桃園區', name: '睿輿老師', role: '育髮技術老師', area: '桃園', specialty: '科技健髮', feature: '溫柔細心', photo: 'images/portraits/睿輿.png', qr: 'images/qr/ruiyu-qr.jpg', line: '#' },
      ];

      return (
        React.createElement('section', { id: "partners", className: "sec-dark", style: { padding: '140px 0', position: 'relative', overflow: 'hidden' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 749}}
          , React.createElement('div', { style: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: '"Cormorant Garamond", serif', fontSize: 160, fontWeight: 700, color: 'rgba(46,37,65,0.025)', whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 750}}, "PARTNERS"

          )

          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto', padding: '0 48px', position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 754}}
            , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 755}}
              , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 756}}, "PARTNER LOCATIONS" )
              , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 757}} )
              , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#1A0828', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 758}}, "夥伴資訊"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 759}} )
                , React.createElement('em', { style: { color: '#1A0828', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 760}}, "全桃園服務據點")
              )
              , React.createElement('p', { className: "reveal delay-2" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: '#3A1E52', lineHeight: 2, marginTop: 20, letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 762}}, "桃園各區皆有專業技師駐點服務 · LINE 預約 · 貴賓優先制"

              )
            )

            , React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 767}}
              , partners.map((p, i) => (
                React.createElement('div', { key: `${p.name}-${i}`, className: `testi-card reveal delay-${(i % 4) + 1}`, style: {
                  background: 'rgba(13,26,14,0.7)', padding: 0,
                  backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', overflow: 'hidden',
                }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 769}}
                  , p.photo && (
                    React.createElement('div', { style: { overflow: 'hidden', height: 260, flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 774}}
                      , React.createElement('img', { src: p.photo, alt: p.name, style: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'brightness(0.85) saturate(0.9)', transition: 'transform 0.5s ease' },
                        onMouseEnter: e => e.currentTarget.style.transform = 'scale(1.04)',
                        onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)', __self: this, __source: {fileName: _jsxFileName, lineNumber: 775}} )
                    )
                  )
                  , React.createElement('div', { style: { padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 780}}
                    , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 14, letterSpacing: '0.15em', color: '#1A0828', marginBottom: 14, opacity: 0.8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 781}}, p.shop)
                    , React.createElement('div', { style: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10, gap: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 782}}
                      , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 25, fontWeight: 500, color: '#1A0828', letterSpacing: '0.06em', lineHeight: 1.2 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 783}}, p.name)
                      , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 15, letterSpacing: '0.12em', color: '#1A0828', border: '1px solid rgba(46,37,65,0.35)', padding: '4px 10px', whiteSpace: 'nowrap', flexShrink: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 784}}, p.area)
                    )
                    , React.createElement('div', { style: { width: 36, height: 1, background: 'linear-gradient(90deg, #C5A059, transparent)', marginBottom: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 786}} )
                    , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#3A1E52', letterSpacing: '0.07em', marginBottom: 10 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 787}}, p.role)
                    , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', letterSpacing: '0.06em', lineHeight: 1.9, marginBottom: p.feature ? 8 : 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 788}}
                      , React.createElement('span', { style: { color: 'rgba(46,37,65,0.7)', fontSize: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 789}}, "專長｜"), p.specialty
                    )
                    , p.feature && (
                      React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', letterSpacing: '0.06em', lineHeight: 1.9 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 792}}
                        , React.createElement('span', { style: { color: 'rgba(46,37,65,0.7)', fontSize: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 793}}, "特點｜"), p.feature
                      )
                    )
                    , React.createElement('div', { style: { marginTop: 'auto', paddingTop: 20, display: 'flex', alignItems: 'center', gap: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 796}}
                      , p.qr ? (
                        React.createElement('img', { src: p.qr, alt: `${p.name} LINE QR`, style: { width: 72, height: 72, objectFit: 'contain', border: '1px solid rgba(46,37,65,0.25)', padding: 4, background: '#fff' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 798}} )
                      ) : (
                        React.createElement('div', { style: { width: 72, height: 72, border: '1px dashed rgba(46,37,65,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 800}}
                          , React.createElement('span', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 15, color: '#3A1E52', textAlign: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 801}}, "QR 圖檔待補" )
                        )
                      )
                      , React.createElement('a', { href: p.line || '#', target: "_blank", rel: "noopener noreferrer" ,
                        style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, letterSpacing: '0.2em', color: 'rgba(46,37,65,0.85)', border: '1px solid rgba(46,37,65,0.3)', padding: '10px 20px', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s' },
                        onMouseEnter: e => { e.currentTarget.style.background = 'rgba(46,37,65,0.12)'; e.currentTarget.style.borderColor = '#2E2541'; },
                        onMouseLeave: e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(46,37,65,0.3)'; }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 804}}
, "LINE 預約" )
                    )
                  )
                )
              ))
            )
          )
        )
      );
    }

    /* ── RECRUIT ── */
    function Recruit() {
      const advantages = [
        { icon: '💰', title: '收入穩定',   desc: '重複消費機制與快速回本模式，讓您的投入快速轉化為穩定收入來源。' },
        { icon: '✅', title: '效果顯著',   desc: '科學實證的產品配方，高顧客滿意度，口碑自然擴散，回購率高。' },
        { icon: '🛡️', title: '安全可靠',  desc: '嚴選成分、通過台灣安全檢驗、標準化操作流程，放心使用。' },
        { icon: '🤝', title: '溫暖氛圍',   desc: '團隊互助、正能量文化，讓創業過程充滿支持與溫度。' },
        { icon: '🌟', title: '成就感滿滿', desc: '助人變美並創造生活影響力，讓事業成為一份有意義的使命。' },
      ];

      return (
        React.createElement('section', { id: "recruit", style: {
          position: 'relative', overflow: 'hidden',
          background: `linear-gradient(rgba(209,196,233,0.82), rgba(209,196,233,0.82)), url('https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
          padding: '140px 48px',
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 830}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 836}}
            , React.createElement('div', { style: { textAlign: 'center', marginBottom: 80 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 837}}
              , React.createElement('div', { className: "reveal", style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.55em', color: '#1A0828' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 838}}, "JOIN US" )
              , React.createElement('span', { className: "gold-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 839}} )
              , React.createElement('h2', { className: "reveal delay-1" , style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#1A0828', lineHeight: 1.3 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 840}}, "夥伴招募"
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 841}} )
                , React.createElement('em', { style: { color: '#1A0828', fontStyle: 'italic' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 842}}, "與我們一起改變人生")
              )
              , React.createElement('p', { className: "reveal delay-2" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 20, color: '#3A1E52', lineHeight: 2.1, marginTop: 24, maxWidth: 640, margin: '24px auto 0', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 844}}, "結合「仙佛加持 × 專業美容 × 外泌體育髮」"
                    , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 845}} ), "創業門檻低於 10 萬元，無需相關背景經驗即可上手"
                  , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 846}} ), "小資本 · 一人也能營運 · 提供完整專業培訓與行銷支持"

              )
            )

            , React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, marginBottom: 60 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 851}}
              , advantages.map((a, i) => (
                React.createElement('div', { key: a.title, className: `ing-circle reveal delay-${(i % 4) + 1}`, style: {
                  background: 'rgba(13,26,14,0.78)',
                  padding: '36px 20px',
                  backdropFilter: 'blur(8px)',
                  textAlign: 'center',
                }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 853}}
                  , React.createElement('div', { style: { fontSize: 36, marginBottom: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 859}}, a.icon)
                  , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 24, fontWeight: 500, color: '#1A0828', letterSpacing: '0.05em', marginBottom: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 860}}, a.title)
                  , React.createElement('div', { style: { width: 28, height: 1, background: 'rgba(46,37,65,0.4)', margin: '0 auto 14px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 861}} )
                  , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#3A1E52', lineHeight: 2, letterSpacing: '0.05em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 862}}, a.desc)
                )
              ))
            )

            , React.createElement('div', { style: { textAlign: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 867}}
              , React.createElement('p', { className: "reveal", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: '#3A1E52', marginBottom: 16, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 868}}, "適合：家庭主婦、二度就業者、創業新手，歡迎任何對美容美髮充滿熱情的你"

              )
              , React.createElement('p', { className: "reveal delay-1" , style: { fontFamily: '"Noto Serif TC", serif', fontSize: 19, color: 'rgba(46,37,65,0.8)', marginBottom: 40, letterSpacing: '0.08em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 871}}, "📞 0927-186-901  ·  ✉️ acandy135789@gmail.com"

              )
              , React.createElement('div', { style: { display: 'flex', gap: 20, justifyContent: 'center' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 874}}
                , React.createElement('a', { href: "partners.html", style: { textDecoration: 'none' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 875}}, React.createElement('button', { className: "btn-gold", style: { padding: '16px 48px', fontSize: 17 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 875}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 875}}, "立即洽詢加盟")))
              )
            )
          )
        )
      );
    }

    /* ── FOOTER ── */
    function Footer({ onNavigate }) {
      const [phoneOpen, setPhoneOpen] = React.useState(false);
      const [emailOpen, setEmailOpen] = React.useState(false);
      const cols = [
        { title: '服務項目', links: [
          { label: '開運科技健髮',  page: 'hair' },
          { label: '開運科技美容',  page: 'beauty' },
          { label: '身心靈整體調理', page: 'holistic' },
        ]},
        { title: '品牌', links: [
          { label: '創辦人故事',    page: 'founder' },
          { label: '關於我們的團隊', page: 'team' },
          { label: '夥伴資訊',     page: 'partners' },
          { label: '夥伴招募',     page: 'recruit' },
        ]},
        { title: '聯絡', links: [
          { label: 'LINE 預約',   page: null },
          { label: '電話諮詢',    type: 'phone' },
          { label: '電子郵件',    type: 'email' },
        ]},
      ];

      return (
        React.createElement('footer', { style: { background: '#F9F8FC', borderTop: '1px solid rgba(46,37,65,0.15)', padding: '80px 48px 40px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 907}}
          , React.createElement('div', { style: { maxWidth: 1380, margin: '0 auto' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 908}}

            , React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, paddingBottom: 60, borderBottom: '1px solid rgba(46,37,65,0.1)' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 910}}

              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 912}}
                , React.createElement('div', { style: { fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 500, letterSpacing: '0.15em', color: '#1A0828', marginBottom: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 913}}, "Magic Garden 美肌花園"  )
                , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 13, letterSpacing: '0.45em', color: '#3A1E52', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 914}}, "ENERGY · BEAUTY · VITALITY"    )
                , React.createElement('p', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', lineHeight: 2.2, letterSpacing: '0.07em', maxWidth: 300 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 915}}, "能量美學品牌 · 開運美容護膚／秀髮養育"
                    , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 916}} ), "貴賓預約優先制"

                )
                , React.createElement('div', { style: { marginTop: 20 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 919}}
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', letterSpacing: '0.07em', marginBottom: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 920}}, "📞 0927-186-901" )
                  , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 921}}, "✉️ acandy135789@gmail.com" )
                )
              )

              , cols.map(col => (
                React.createElement('div', { key: col.title, __self: this, __source: {fileName: _jsxFileName, lineNumber: 926}}
                  , React.createElement('div', { style: { fontFamily: 'Cinzel, serif', fontSize: 15, letterSpacing: '0.35em', color: '#1A0828', marginBottom: 24 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 927}}, col.title)
                  , React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 14 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 928}}
                    , col.links.map(l => (
                      l.type === 'phone' ? (
                        React.createElement('div', { key: l.label, style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 931}}
                          , React.createElement('span', { onClick: () => setPhoneOpen(o => !o), style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', letterSpacing: '0.07em', cursor: 'pointer', transition: 'color 0.3s' },
                            onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
                            onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 932}}
, l.label)
                          , phoneOpen && (
                            React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 937}}
                            , React.createElement('div', { style: { position: 'fixed', inset: 0, zIndex: 99 }, onClick: () => setPhoneOpen(false), __self: this, __source: {fileName: _jsxFileName, lineNumber: 938}} )
                            , React.createElement('div', { style: { position: 'absolute', left: 0, top: '110%', background: 'rgba(13,26,14,0.97)', border: '1px solid rgba(46,37,65,0.3)', padding: '12px 20px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: 12 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 939}}
                              , React.createElement('a', { href: "tel:0906607856", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#1A0828', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 940}}, "0906-607-856")
                              , React.createElement('a', { href: "tel:0927186901", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#1A0828', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 941}}, "0927-186-901")
                            )
                            )
                          )
                        )
                      ) : l.type === 'email' ? (
                        React.createElement('div', { key: l.label, style: { position: 'relative' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 947}}
                          , React.createElement('span', { onClick: () => setEmailOpen(o => !o), style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', letterSpacing: '0.07em', cursor: 'pointer', transition: 'color 0.3s' },
                            onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
                            onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 948}}
, l.label)
                          , emailOpen && (
                            React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 953}}
                            , React.createElement('div', { style: { position: 'fixed', inset: 0, zIndex: 99 }, onClick: () => setEmailOpen(false), __self: this, __source: {fileName: _jsxFileName, lineNumber: 954}} )
                            , React.createElement('div', { style: { position: 'absolute', left: 0, top: '110%', background: 'rgba(13,26,14,0.97)', border: '1px solid rgba(46,37,65,0.3)', padding: '12px 20px', zIndex: 100 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 955}}
                              , React.createElement('a', { href: "mailto:acandy135789@gmail.com", style: { fontFamily: '"Noto Serif TC", serif', fontSize: 17, color: '#1A0828', textDecoration: 'none', letterSpacing: '0.07em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 956}}, "acandy135789@gmail.com")
                            )
                            )
                          )
                        )
                      ) : l.href ? (
                        React.createElement('a', { key: l.label, href: l.href,
                          style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', textDecoration: 'none', letterSpacing: '0.07em', transition: 'color 0.3s' },
                          onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
                          onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 962}}
, l.label)
                      ) : (
                        React.createElement('a', { key: l.label, href: "#",
                          onClick: e => { e.preventDefault(); if (l.page) onNavigate(l.page); },
                          style: { fontFamily: '"Noto Serif TC", serif', fontSize: 18, color: '#3A1E52', textDecoration: 'none', letterSpacing: '0.07em', transition: 'color 0.3s', cursor: l.page ? 'pointer' : 'default' },
                          onMouseEnter: e => e.currentTarget.style.color = '#2E2541',
                          onMouseLeave: e => e.currentTarget.style.color = '#6B5A8E', __self: this, __source: {fileName: _jsxFileName, lineNumber: 968}}
, l.label)
                      )
                    ))
                  )
                )
              ))
            )

            , React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32, flexWrap: 'wrap', gap: 16 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 981}}
              , React.createElement('div', { style: { fontFamily: '"Noto Serif TC", serif', fontSize: 16, color: 'rgba(158,168,156,0.5)', letterSpacing: '0.1em' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 982}}, "© 2025 Magic Garden 美肌花園. All Rights Reserved."

              )
            )
          )
        )
      );
    }

    /* ── APP ── */
    function App() {
      const [activePage, setActivePage] = useState('home');

      useScrollReveal(activePage);

      useEffect(() => { window.scrollTo(0, 0); }, [activePage]);

      return (
        React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 1000}}
          , React.createElement(Nav, { activePage: activePage, onNavigate: setActivePage, __self: this, __source: {fileName: _jsxFileName, lineNumber: 1001}} )
          , activePage === 'home'     && React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 1002}}, React.createElement(Hero, { onNavigate: setActivePage, __self: this, __source: {fileName: _jsxFileName, lineNumber: 1002}} ), React.createElement(Marquee, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 1002}} ), React.createElement(SectionOverview, { onNavigate: setActivePage, __self: this, __source: {fileName: _jsxFileName, lineNumber: 1002}} ))
          , activePage === 'founder'  && React.createElement(FounderStory, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 1003}} )
          , activePage === 'hair'     && React.createElement(React.Fragment, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 1004}}, React.createElement(HairCare, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 1004}} ), React.createElement(HairTestimonials, { onNavigate: setActivePage, __self: this, __source: {fileName: _jsxFileName, lineNumber: 1004}} ), React.createElement(HairCustomerShares, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 1004}} ))
          , activePage === 'beauty'   && React.createElement(BeautyCare, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 1005}} )
          , activePage === 'holistic' && React.createElement(HolisticCare, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 1006}} )
          , activePage === 'team'     && React.createElement(Team, { onNavigate: setActivePage, __self: this, __source: {fileName: _jsxFileName, lineNumber: 1007}} )
          , activePage === 'partners' && React.createElement(PartnerInfo, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 1008}} )
          , activePage === 'recruit'  && React.createElement(Recruit, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 1009}} )
          , React.createElement(Footer, { onNavigate: setActivePage, __self: this, __source: {fileName: _jsxFileName, lineNumber: 1010}} )
        )
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 1015}} ));
  