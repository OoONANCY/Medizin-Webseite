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
      transform: translate(-50%, -50%);
    }
    .cursor-ball {
      width: 40px;
      height: 40px;
      border: 2px solid rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      z-index: 9998;
      transition: transform 0.1s ease;
      transform: translate(-50%, -50%);
    }
    body {
      cursor: none;
    }
  `;
  document.head.appendChild(style);

  // Update cursor positions
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Add slight delay to the ball movement
    setTimeout(() => {
      cursorBall.style.left = e.clientX + 'px';
      cursorBall.style.top = e.clientY + 'px';
    }, 50);
  });

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
}); 