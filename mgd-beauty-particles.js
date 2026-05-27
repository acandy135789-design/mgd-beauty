    (function () {
      const canvas = document.getElementById('mist-canvas');
      const ctx    = canvas.getContext('2d');

      let W = canvas.width  = window.innerWidth;
      let H = canvas.height = window.innerHeight;

      window.addEventListener('resize', () => {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
      }, { passive: true });

      const particles = [];
      const mouse = { x: W / 2, y: H / 2 };

      /* ── Particle class ── */
      function Particle(x, y, type) {
        this.x    = x + (Math.random() - 0.5) * 24;
        this.y    = y + (Math.random() - 0.5) * 24;
        this.type = type || 'gold';
        this.r    = this.type === 'mist' ? Math.random() * 4 + 2 : Math.random() * 2.2 + 0.5;
        this.a    = this.type === 'mist' ? Math.random() * 0.18 + 0.05 : Math.random() * 0.55 + 0.25;
        this.vx   = (Math.random() - 0.5) * 0.9;
        this.vy   = -(Math.random() * 0.9 + 0.25);
        this.life = 1;
        this.dec  = this.type === 'mist' ? 0.006 + Math.random() * 0.008 : 0.012 + Math.random() * 0.016;
      }

      Particle.prototype.update = function () {
        this.x   += this.vx;
        this.y   += this.vy;
        this.vy  -= 0.004;
        this.vx  *= 0.985;
        this.life -= this.dec;
        if (this.type === 'mist') this.r *= 1.012;
      };

      Particle.prototype.draw = function () {
        if (this.life <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.life * this.a;

        if (this.type === 'gold') {
          ctx.shadowBlur  = 14;
          ctx.shadowColor = 'rgba(197,160,89,0.85)';
          ctx.fillStyle   = '#C5A059';
        } else if (this.type === 'mist') {
          ctx.shadowBlur  = 24;
          ctx.shadowColor = 'rgba(200,208,196,0.3)';
          ctx.fillStyle   = 'rgba(200,208,196,0.55)';
        } else {
          ctx.shadowBlur  = 10;
          ctx.shadowColor = 'rgba(212,176,106,0.7)';
          ctx.fillStyle   = '#D4B06A';
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0, this.r), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      };

      Particle.prototype.dead = function () { return this.life <= 0; };

      /* ── Spawn on mouse move ── */
      document.addEventListener('mousemove', function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        const n = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < n; i++) {
          particles.push(new Particle(mouse.x, mouse.y, 'gold'));
          if (Math.random() < 0.28) particles.push(new Particle(mouse.x, mouse.y, 'mist'));
          if (Math.random() < 0.12) particles.push(new Particle(mouse.x, mouse.y, 'pale'));
        }
      }, { passive: true });

      /* ── Ambient background sparkles ── */
      let ambientT = 0;
      let lastTs   = 0;

      function spawnAmbient() {
        const x = Math.random() * W;
        const y = H * 0.4 + Math.random() * H * 0.6;
        particles.push(new Particle(x, y, 'mist'));
        if (Math.random() < 0.4) particles.push(new Particle(x + (Math.random() - 0.5) * 60, y, 'gold'));
      }

      /* ── Animation loop ── */
      function animate(ts) {
        requestAnimationFrame(animate);
        const dt = ts - lastTs;
        lastTs = ts;
        ctx.clearRect(0, 0, W, H);

        ambientT += dt;
        if (ambientT > 700) { spawnAmbient(); ambientT = 0; }

        for (let i = particles.length - 1; i >= 0; i--) {
          particles[i].update();
          particles[i].draw();
          if (particles[i].dead()) particles.splice(i, 1);
        }

        /* Cap at 200 particles */
        while (particles.length > 200) particles.shift();
      }

      requestAnimationFrame(animate);
    })();
