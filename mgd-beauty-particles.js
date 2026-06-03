    (function () {
      try {
      const canvas = document.getElementById('mist-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let W = canvas.width  = window.innerWidth;
      let H = canvas.height = window.innerHeight;

      window.addEventListener('resize', () => {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
      }, { passive: true });

      const particles = [];
      const trail = [];   /* recent mouse positions for arc curve */
      const mouse = { x: W / 2, y: H / 2, px: W / 2, py: H / 2 };

      /* ─── Colour palettes ─────────────────────────────────────── */
      /* smoky pink crystal  */
      const ROSE  = ['rgba(230,190,200,', 'rgba(218,172,185,', 'rgba(240,205,215,', 'rgba(212,160,175,'];
      /* micro-crystal white light  */
      const PEARL = ['rgba(255,248,250,', 'rgba(252,242,248,', 'rgba(255,252,255,', 'rgba(248,238,244,'];
      /* warm champagne glint  */
      const GOLD  = ['rgba(220,190,140,', 'rgba(210,175,120,', 'rgba(232,205,155,'];

      /* ─── Particle class ──────────────────────────────────────── */
      function Particle(x, y, type) {
        this.x  = x + (Math.random() - 0.5) * 18;
        this.y  = y + (Math.random() - 0.5) * 18;
        this.type = type;

        /* arc drift — elegant curved scatter */
        const angle = Math.random() * Math.PI * 2;
        const spd   = Math.random() * 0.7 + 0.15;
        this.vx = Math.cos(angle) * spd * 0.9;
        this.vy = -Math.random() * 1.1 - 0.2;   /* upward float */
        this.curve = (Math.random() - 0.5) * 0.018; /* lateral drift curve */

        if (type === 'rose') {
          this.r   = Math.random() * 3.5 + 1.2;
          this.a   = Math.random() * 0.38 + 0.12;
          this.dec = 0.009 + Math.random() * 0.010;
          this.col = ROSE[Math.floor(Math.random() * ROSE.length)];
          this.blur = 10;
        } else if (type === 'pearl') {
          this.r   = Math.random() * 1.6 + 0.5;
          this.a   = Math.random() * 0.65 + 0.25;
          this.dec = 0.018 + Math.random() * 0.018;
          this.col = PEARL[Math.floor(Math.random() * PEARL.length)];
          this.blur = 6;
        } else if (type === 'mist') {
          this.r   = Math.random() * 6 + 3;
          this.a   = Math.random() * 0.10 + 0.03;
          this.dec = 0.004 + Math.random() * 0.005;
          this.col = ROSE[Math.floor(Math.random() * ROSE.length)];
          this.blur = 22;
          this.vx  *= 0.4;
          this.vy  *= 0.4;
        } else {
          this.r   = Math.random() * 1.2 + 0.4;
          this.a   = Math.random() * 0.50 + 0.20;
          this.dec = 0.022 + Math.random() * 0.018;
          this.col = GOLD[Math.floor(Math.random() * GOLD.length)];
          this.blur = 7;
        }

        this.life = 1;
      }

      Particle.prototype.update = function () {
        this.vx  += this.curve;           /* arc curvature */
        this.vx  *= 0.982;
        this.vy  -= 0.003;               /* gentle upward acceleration */
        this.x   += this.vx;
        this.y   += this.vy;
        this.life -= this.dec;
        if (this.type === 'mist') this.r *= 1.010;
      };

      Particle.prototype.draw = function () {
        if (this.life <= 0) return;
        ctx.save();
        const alpha = this.life * this.a;
        ctx.globalAlpha = alpha;
        ctx.shadowBlur  = this.blur;
        ctx.shadowColor = this.col + '0.6)';
        ctx.fillStyle   = this.col + '1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0, this.r), 0, Math.PI * 2);
        ctx.fill();

        /* pearl gets a tiny extra bright core */
        if (this.type === 'pearl') {
          ctx.globalAlpha = alpha * 0.85;
          ctx.fillStyle   = 'rgba(255,255,255,1)';
          ctx.beginPath();
          ctx.arc(this.x, this.y, Math.max(0, this.r * 0.35), 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      };

      Particle.prototype.dead = function () { return this.life <= 0; };

      /* ─── Spawn on mouse move ─────────────────────────────────── */
      document.addEventListener('mousemove', function (e) {
        mouse.px = mouse.x;
        mouse.py = mouse.y;
        mouse.x  = e.clientX;
        mouse.y  = e.clientY;

        const speed = Math.hypot(mouse.x - mouse.px, mouse.y - mouse.py);
        const burst = Math.min(Math.floor(speed * 0.18) + 1, 6);

        for (let i = 0; i < burst; i++) {
          /* smoky pink crystal — main trail */
          particles.push(new Particle(mouse.x, mouse.y, 'rose'));
          /* micro white light refraction */
          if (Math.random() < 0.55) particles.push(new Particle(mouse.x, mouse.y, 'pearl'));
          /* ambient mist puff */
          if (Math.random() < 0.20) particles.push(new Particle(mouse.x, mouse.y, 'mist'));
          /* champagne glint */
          if (Math.random() < 0.14) particles.push(new Particle(mouse.x, mouse.y, 'gold'));
        }
      }, { passive: true });

      /* ─── Ambient background blooms ──────────────────────────── */
      let ambientT = 0;
      let lastTs   = 0;

      function spawnAmbient() {
        const x = Math.random() * W;
        const y = H * 0.2 + Math.random() * H * 0.7;
        particles.push(new Particle(x, y, 'mist'));
        if (Math.random() < 0.35) particles.push(new Particle(x + (Math.random()-0.5)*40, y, 'rose'));
        if (Math.random() < 0.15) particles.push(new Particle(x + (Math.random()-0.5)*20, y, 'pearl'));
      }

      /* ─── Animation loop ─────────────────────────────────────── */
      function animate(ts) {
        requestAnimationFrame(animate);
        const dt = ts - lastTs;
        lastTs = ts;
        ctx.clearRect(0, 0, W, H);

        ambientT += dt;
        if (ambientT > 900) { spawnAmbient(); ambientT = 0; }

        for (let i = particles.length - 1; i >= 0; i--) {
          particles[i].update();
          particles[i].draw();
          if (particles[i].dead()) particles.splice(i, 1);
        }

        /* Cap to keep performance smooth */
        while (particles.length > 260) particles.shift();
      }

      requestAnimationFrame(animate);
      } catch (e) { /* particles non-critical */ }
    })();
