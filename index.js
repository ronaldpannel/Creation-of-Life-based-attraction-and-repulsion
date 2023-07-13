window.addEventListener("load", function () {
  /**@type{HTMLCanvasElement} */
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  const resetBtn = this.document.getElementById('resetBtn')
  const randomBtn = this.document.getElementById('randomBtn')
  canvas.width = 500;
  canvas.height = 500;
    let yy = 0.15;
    let rr = -0.1;
    let gg = -0.32;
    let gr = -0.17;
    let rg = -0.34;
    let gy = 0.34;
    let yg = -0.2;
    let yr = 0;
    let ry = 0;

  draw = (x, y, c, s) => {
    ctx.fillStyle = c;
    ctx.fillRect(x, y, s, s);
  };
  let particles = [];
  particle = (x, y, c) => {
    return { x: x, y: y, vx: 0, vy: 0, color: c };
  };
  random = () => {
    return Math.random() * 400 + 50;
  };

  create = (number, color) => {
    group = [];
    for (let i = 0; i < number; i++) {
      group.push(particle(random(), random(), color));
      particles.push(group[i]);
    }
    return group;
  };
  rule = (particles1, particles2, g) => {
    for (let i = 0; i < particles1.length; i++) {
      fx = 0;
      fy = 0;
      for (let j = 0; j < particles2.length; j++) {
        a = particles1[i];
        b = particles2[j];
        dx = a.x - b.x;
        dy = a.y - b.y;
        d = Math.sqrt(dx * dx + dy * dy);
        if (d > 0 && d < 80) {
          F = (g * 1) / d;
          fx += F * dx;
          fy += F * dy;
        }
      }
      a.vx = (a.vx + fx) * 0.4
      a.vy = (a.vy + fy) * 0.4
      a.x += a.vx;
      a.y += a.vy;
      if(a.x <= 0 || a.x >= 500){a.vx *= -1}
      if(a.y <= 0 || a.y >= 500){a.vy *= -1}
    }
  };
  yellow = create(300, "yellow");
  red = create(300, 'red')
  green = create(300, 'green')

  animate = () => {
    // model 1
    // rule(red, red, -0.1)
    // rule(yellow, red, 0.15);
    // rule(green, green, -0.7)
    // rule(green, red -0.2)
    // rule(red, green, -0.1)

    // model 2
  
    rule(green, green, gg)
    rule(green, red, gr)
    rule(green, yellow, gy)
    rule(red, red, rr)
    rule(red, green, rg)
    rule(yellow, yellow, yy)
    rule(yellow, green, yg)
    rule(yellow, red, yr)
    rule(red, yellow, ry)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      draw(particles[i].x, particles[i].y, particles[i].color, 7);
    }

    requestAnimationFrame(animate);
  };

  animate();

  resetBtn.addEventListener('click', () => {
    this.location.reload()
  })

  randomBtn.addEventListener('click', () => {
     yy = (Math.random() * (1 - -1) + -1).toFixed(2);
     rr = (Math.random() * (1 - -1) + -1).toFixed(2);
     gg = (Math.random() * (1 - -1) + -1).toFixed(2);
     gr = (Math.random() * (1 - -1) + -1).toFixed(2);
     rg = (Math.random() * (1 - -1) + -1).toFixed();
     gy = (Math.random() * (1 - -1) + -1).toFixed(2);
     yg = (Math.random() * (1 - -1) + -1).toFixed(2);
     yr = (Math.random() * (1 - -1) + -1).toFixed(2);
     ry = (Math.random() * (1 - -1) + -1).toFixed(2);
  })

  //load function end
});
