// ponytail: Animação de sprite via requestAnimationFrame para o personagem Poring seguir a 300px.
// Lógica de spritesheet nativa, controlada por variaveis CSS sem pacotes pesados.
import { useEffect, useRef } from 'react';

export function CursorCharacter() {
  const containerRef = useRef(null);
  
  const mouse = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  const char = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  
  const direction = useRef(2); // 0: Norte, 1: Leste, 2: Sul, 3: Oeste
  const isMoving = useRef(false);
  const frameTime = useRef(0);
  const currentFrame = useRef(0);
  const requestRef = useRef();
  const lastTime = useRef(0);

  useEffect(() => {
    lastTime.current = performance.now();
    
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouch = (e) => {
      if (e.touches.length > 0) {
        mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const update = (time) => {
      if (!containerRef.current) return;

      // Delta time em segundos
      const dt = (time - lastTime.current) / 1000;
      lastTime.current = time;

      const dx = mouse.current.x - char.current.x;
      const dy = mouse.current.y - char.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      let moving = false;
      // Mantém os 150px de distância
      if (distance > 150) {
        moving = true;
        const angle = Math.atan2(dy, dx);
        const targetX = mouse.current.x - Math.cos(angle) * 150;
        const targetY = mouse.current.y - Math.sin(angle) * 150;
        
        const moveX = targetX - char.current.x;
        const moveY = targetY - char.current.y;
        const distToTarget = Math.sqrt(moveX * moveX + moveY * moveY);
        
        // Limita a velocidade ao máximo de 32 pixels por segundo
        const maxDist = 32 * dt;
        
        if (distToTarget > maxDist) {
          char.current.x += (moveX / distToTarget) * maxDist;
          char.current.y += (moveY / distToTarget) * maxDist;
        } else {
          char.current.x = targetX;
          char.current.y = targetY;
        }

        // Calcula direção (Norte, Leste, Sul, Oeste)
        if (angle > -Math.PI/4 && angle <= Math.PI/4) {
          direction.current = 1; // Leste (Direita)
        } else if (angle > Math.PI/4 && angle <= 3*Math.PI/4) {
          direction.current = 2; // Sul (Baixo)
        } else if (angle > -3*Math.PI/4 && angle <= -Math.PI/4) {
          direction.current = 0; // Norte (Cima)
        } else {
          direction.current = 3; // Oeste (Esquerda)
        }
      }
      isMoving.current = moving;

      // Animação de sprite a cada 100ms
      if (time - frameTime.current > 100) {
        frameTime.current = time;
        if (isMoving.current) {
          // Linhas 6 a 12 (índice 5 a 11) - Andando
          if (currentFrame.current < 5 || currentFrame.current >= 11) {
            currentFrame.current = 5;
          } else {
            currentFrame.current++;
          }
        } else {
          // Linhas 1 a 5 (índice 0 a 4) - Parado
          if (currentFrame.current >= 4) {
            currentFrame.current = 0;
          } else {
            currentFrame.current++;
          }
        }
      }

      // Atualizamos variáveis CSS do Poring
      containerRef.current.style.setProperty('--char-x', `${char.current.x}px`);
      containerRef.current.style.setProperty('--char-y', `${char.current.y}px`);
      containerRef.current.style.setProperty('--col', direction.current);
      containerRef.current.style.setProperty('--row', currentFrame.current);

      requestRef.current = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouch);
    requestRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouch);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* 1. O Efeito de Luz focado no Personagem */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle 350px at var(--char-x, 50%) var(--char-y, 50%), rgba(255, 20, 147, 0.15), transparent 80%)'
        }}
      />
      
      {/* 2. O Poring Sprite */}
      <div 
        className="absolute w-24 h-24 pointer-events-none drop-shadow-[4px_4px_0_rgba(255,20,147,0.5)]"
        style={{
          left: 'calc(var(--char-x, 50%) - 48px)',
          top: 'calc(var(--char-y, 50%) - 48px)',
          backgroundImage: `url('${import.meta.env.BASE_URL}poring.png')`,
          backgroundSize: '400% 1200%',
          backgroundPosition: 'calc(var(--col, 0) * 33.3333%) calc(var(--row, 0) * 9.0909%)',
          imageRendering: 'pixelated'
        }}
      />
    </div>
  );
}
