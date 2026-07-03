// ponytail: Carrossel infinito feito apenas com CSS puro e animação linear.
// Sem pacotes JS pesados (como Swiper ou Slick), garantindo 60fps constantes.
export function PixelGrid({ placeholder }) {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  
  // Duplicamos a lista para o efeito infinito (seamless loop)
  // Quando a primeira metade sai da tela, a animação reseta imperceptivelmente
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* O container interno tem o dobro do tamanho necessário e desliza */}
      <div className="flex w-max animate-marquee">
        {duplicatedItems.map((i, idx) => (
          <div 
            key={idx} 
            className="w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0 mx-4 pixel-border bg-gray-800 flex items-center justify-center text-gray-500 text-center p-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
          >
            {placeholder} {i}
          </div>
        ))}
      </div>
    </div>
  );
}
