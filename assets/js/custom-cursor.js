document.addEventListener('DOMContentLoaded', () => {
  // Create cursor elements
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const cursorBall = document.createElement('div');
  cursorBall.className = 'cursor-ball';
  document.body.appendChild(cursorBall);

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .custom-cursor {
      width: 8px;
      height: 8px;
      background: #000;
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      left: 0;
      top: 0;
      transform: translate(-50%, -50%);
      transition: transform 0.1s ease;
    }
    .cursor-ball {
      width: 40px;
      height: 40px;
      border: 2px solid rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      z-index: 9998;
      left: 0;
      top: 0;
      transform: translate(-50%, -50%);
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    body {
      cursor: none;
    }
    a:hover ~ .cursor-ball,
    button:hover ~ .cursor-ball,
    .menu-btn:hover ~ .cursor-ball,
    a:hover ~ .custom-cursor,
    button:hover ~ .custom-cursor,
    .menu-btn:hover ~ .custom-cursor {
      transform: translate(-50%, -50%) scale(1.5);
    }
    .cursor-ball.hover {
      transform: translate(-50%, -50%) scale(1.5);
      border-color: rgba(0, 0, 0, 0.8);
    }
  `;
  document.head.appendChild(style);

  // Mouse position
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let ballX = 0;
  let ballY = 0;

  // Update mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animation loop
  function animate() {
    // Smooth cursor movement
    cursorX += (mouseX - cursorX) * 0.5;
    cursorY += (mouseY - cursorY) * 0.5;
    
    // Smoother ball movement with easing
    ballX += (mouseX - ballX) * 0.15;
    ballY += (mouseY - ballY) * 0.15;

    // Apply positions
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    cursorBall.style.left = `${ballX}px`;
    cursorBall.style.top = `${ballY}px`;

    requestAnimationFrame(animate);
  }

  // Start animation
  animate();

  // Hide cursors when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorBall.style.opacity = '0';
  });

  // Show cursors when entering window
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorBall.style.opacity = '1';
  });

  // Add hover effect for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .menu-btn');
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursorBall.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', () => {
      cursorBall.classList.remove('hover');
    });
  });
}); 