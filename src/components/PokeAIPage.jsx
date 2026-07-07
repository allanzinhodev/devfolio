// ponytail: Página de detalhes do PokeAI, adaptada do pixel-portfolio.
import { PixelSeparator } from './PixelSeparator';

export function PokeAIPage({ onClose }) {
  const imgSrc = `${import.meta.env.BASE_URL}capas/pokeai.png`;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 overflow-y-auto">
      <article className="max-w-4xl mx-auto px-4 py-8 sm:py-16 animate-fade-in">
        
        {/* Back button */}
        <button 
          onClick={onClose}
          className="pixel-border px-4 py-2 font-press text-xs mb-8 hover:bg-neon hover:text-black transition-colors flex items-center gap-2"
        >
          ← Voltar
        </button>

        {/* Title */}
        <h1 className="font-press text-2xl sm:text-4xl mb-6">PokeAI</h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["AI/ML", "Python", "Lua", "Memory Reading", "Twitch API"].map((tag) => (
            <span
              key={tag}
              className="bg-neon text-black px-3 py-1 text-sm font-bold border-2 border-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Cover Image */}
        <div className="relative w-full mb-8">
          <div className="absolute inset-4 border-4 border-white bg-neon/20 z-0"></div>
          <div className="relative z-10 pixel-border overflow-hidden">
            <img 
              src={imgSrc} 
              alt="PokeAI" 
              className="w-full h-auto object-cover"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
        </div>

        <PixelSeparator />

        {/* Content */}
        <div className="space-y-4 text-lg leading-relaxed">
          <h2 className="font-press text-xl sm:text-2xl text-white">
            When AI Learns to Play Pokémon: Meet FireredBOT and PokeAI
          </h2>

          {/* YouTube Embed */}
          <div className="my-8 aspect-video w-full border-4 border-white pixel-border">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/Oeq3j_WG5BQ" 
              title="PokeAI Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-gray-300">
            What if a bot could play Pokémon from start to finish — with zero human intervention? 
            That's exactly the challenge behind two experimental projects: <strong className="text-white">FireredBOT</strong> and <strong className="text-white">PokeAI</strong>. 
            Together, they push the boundaries of automation, contextual intelligence, and computational vision applied to classic games.
          </p>

          <hr className="border-t-2 border-gray-800 my-6" />

          {/* FireredBOT Section */}
          <h3 className="font-press text-sm sm:text-lg text-neon border-b-2 border-neon pb-1">
            FireredBOT — The Bot That Plays Pokémon FireRed on Its Own
          </h3>
          <p className="flex items-center space-x-2 text-neon overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            🔗 <a href="https://github.com/allanzinhodev/fireredBOT" target="_blank" rel="noopener noreferrer" className="hover:underline ml-1">github.com/allanzinhodev/fireredBOT</a>
          </p>
          <p className="text-gray-300">
            FireredBOT is a Python-based automation system capable of playing Pokémon FireRed fully autonomously. 
            No direct commands, no human input — the bot makes every decision on its own.
          </p>

          <h4 className="text-lg font-bold mt-6 mb-2 text-white">What it does</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Explores maps automatically using a custom pathfinding system that identifies walkable paths, entrances, exits, and territory boundaries</li>
            <li>Battles strategically, prioritizing moves based on type effectiveness, base damage, and remaining PP</li>
            <li>Automatically catches Pokémon, expanding the Pokédex without any human help</li>
            <li>Manages the inventory and returns to the Pokémon Center whenever needed</li>
            <li>Reads emulator memory (VBA-RR or mGBA) in real time, tracking HP, player position, wild Pokémon IDs, and game state</li>
          </ul>

          <h4 className="text-lg font-bold mt-6 mb-2 text-white">Twitch Integration</h4>
          <p className="text-gray-300">
            One of the most creative features is the Twitch API integration: viewers can send commands in the chat 
            and influence the bot's behavior in real time — switching between exploration, catching, battling modes, 
            or even daring the bot to take risks. It's automation with a layer of live interactivity.
          </p>
          
          <p className="bg-neon/10 p-4 border-l-4 border-neon italic text-gray-300">
            ✅ Goal achieved: the bot works as intended, handles complex tasks, and makes context-aware decisions. 
            The project is complete and will not receive further updates.
          </p>

          <hr className="border-t-2 border-gray-800 my-6" />

          {/* PokeAI Section */}
          <h3 className="font-press text-sm sm:text-lg text-neon border-b-2 border-neon pb-1">
            PokeAI — Pokémon Crystal Automation in Pure Lua
          </h3>
          <p className="flex items-center space-x-2 text-neon overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            🔗 <a href="https://github.com/allanzinhodev/pokeAI" target="_blank" rel="noopener noreferrer" className="hover:underline ml-1">github.com/allanzinhodev/pokeAI</a>
          </p>
          <p className="text-gray-300">
            PokeAI grew out of the same experiments but took a completely different direction — focused on Pokémon Crystal 
            and rebuilt from scratch in pure Lua, running directly inside the VBA-RR emulator with no Python dependencies.
          </p>

          <h4 className="text-lg font-bold mt-6 mb-2 text-white">A "computational vision" through memory</h4>
          <p className="text-gray-300">
            Instead of capturing screenshots or using vision models, PokeAI reads tile offsets directly from the game's RAM, 
            building a real-time representation of the world. This allows the bot to identify:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Collisions, walls, and obstacles</li>
            <li>Doors and building entrances</li>
            <li>NPCs and available interactions</li>
            <li>The current battle menu state (Fight, Pokémon, Pack, Run)</li>
          </ul>

          <h4 className="text-lg font-bold mt-6 mb-2 text-white">System features</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Adaptive navigation with natural obstacle avoidance</li>
            <li>Automatic Pokémon catching system</li>
            <li>Automatic Pokémon and move switching in battle</li>
            <li>Anti-freeze systems to keep the bot running smoothly</li>
            <li>Battle intelligence script for wild encounters and trainer fights</li>
            <li>Modular Lua architecture: <code className="bg-gray-800 px-1 py-0.5 text-sm font-mono text-neon">main.lua</code>, <code className="bg-gray-800 px-1 py-0.5 text-sm font-mono text-neon">battle.lua</code>, <code className="bg-gray-800 px-1 py-0.5 text-sm font-mono text-neon">move.lua</code>, <code className="bg-gray-800 px-1 py-0.5 text-sm font-mono text-neon">map.lua</code></li>
          </ul>

          <p className="bg-green-500/10 p-4 border-l-4 border-green-500 italic text-gray-300 mt-4">
            The project is in active experimental phase, and future improvements may include OCR, neural networks, or Python 
            reintegration for more complex analysis. You can follow the development live on{' '}
            <a href="https://twitch.tv/allaorodrigues" className="text-neon hover:underline" target="_blank" rel="noopener noreferrer">
              twitch.tv/allaorodrigues
            </a>.
          </p>

          <hr className="border-t-2 border-gray-800 my-6" />

          {/* Why it matters */}
          <h3 className="font-press text-sm sm:text-lg text-neon border-b-2 border-neon pb-1">
            Why These Projects Matter
          </h3>
          <p className="text-gray-300">
            Beyond being fascinating projects in their own right, FireredBOT and PokeAI showcase concepts with real-world 
            applications: memory reading and manipulation, contextual decision systems, pathfinding, complex task automation, 
            and live platform integration. They are educational experiments that show how software engineering can turn a 
            nostalgic game into an AI laboratory.
          </p>

          {/* Footer credits */}
          <div className="mt-8 p-4 border-2 border-white text-center bg-gray-900 text-sm sm:text-base pixel-border">
            <p className="text-gray-300">Developed by Allan Rodrigues — <a href="https://linkedin.com/in/allanzinho" className="text-neon hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/allanzinho</a></p>
            <p className="text-gray-300">Watch it live at <a href="https://twitch.tv/allaorodrigues" className="text-neon hover:underline" target="_blank" rel="noopener noreferrer">twitch.tv/allaorodrigues</a></p>
          </div>
        </div>

        <PixelSeparator className="mt-8" />

        {/* Visit buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://github.com/allanzinhodev/fireredBOT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pixel-border px-6 py-3 font-press text-sm bg-neon text-black hover:bg-pink-600 transition-colors text-center"
          >
            FireredBOT ↗
          </a>
          <a 
            href="https://github.com/allanzinhodev/pokeAI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pixel-border px-6 py-3 font-press text-sm bg-gray-900 hover:bg-neon hover:text-black transition-colors text-center"
          >
            PokeAI ↗
          </a>
        </div>

      </article>
    </div>
  );
}
