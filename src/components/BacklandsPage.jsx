// ponytail: Página de detalhes do Backlands, adaptada do pixel-portfolio (Sertania Online).
import { PixelSeparator } from './PixelSeparator';

export function BacklandsPage({ onClose }) {
  const imgSrc = `${import.meta.env.BASE_URL}capas/sertania.png`;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 overflow-y-auto">
      <article className="max-w-4xl mx-auto px-4 py-8 sm:py-16 animate-fade-in">
        
        {/* Back button */}
        <button 
          onClick={onClose}
          className="pixel-border px-4 py-2 font-press text-xs mb-8 hover:bg-neon hover:text-black transition-colors flex items-center gap-2 bg-gray-900 text-white"
        >
          ← Voltar
        </button>

        {/* Title */}
        <h1 className="font-press text-2xl sm:text-4xl mb-6 text-white">Backlands</h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["C++", "Game Server", "MMORPG", "Lua", "MySQL"].map((tag) => (
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
          <div className="relative z-10 pixel-border overflow-hidden bg-gray-900">
            <img 
              src={imgSrc} 
              alt="Backlands" 
              className="w-full h-auto object-cover"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
        </div>

        <PixelSeparator />

        {/* Content */}
        <div className="mt-8 space-y-4 text-lg leading-relaxed text-gray-300">
          <h2 className="font-press text-xl sm:text-2xl text-white">Backlands (Sertania Online)</h2>
          <p>
            Backlands is a custom multiplayer online RPG built on top of open-source technologies, 
            combining deep game mechanics with a fully customized world — from the map and sprites to server logic and web infrastructure.
          </p>

          <hr className="border-t-2 border-gray-800 my-6" />

          <h3 className="font-press text-sm sm:text-lg text-neon border-b-2 border-neon pb-1">Server</h3>
          <p>
            <strong className="text-white">The Forgotten Server 1.4.2</strong><br />
            The core engine of the game, written in C++. Responsible for all game logic, including monster behavior, NPC interactions, and map loading. Every gameplay mechanic runs through this layer.
          </p>

          <hr className="border-t-2 border-gray-800 my-6" />

          <h3 className="font-press text-sm sm:text-lg text-neon border-b-2 border-neon pb-1">Database</h3>
          <p>
            <strong className="text-white">MySQL</strong><br />
            Handles all persistent data storage — player accounts, character progression, inventory, and world state. Both the game server and the website communicate directly with this database.
          </p>

          <hr className="border-t-2 border-gray-800 my-6" />

          <h3 className="font-press text-sm sm:text-lg text-neon border-b-2 border-neon pb-1">Web & Account System</h3>
          <p>
            <strong className="text-white">NGINX + MyAcc (Gesior)</strong><br />
            The website is powered by the open-source MyAcc panel by Gesior, served through NGINX. Players can create accounts, manage characters, and access game information through this interface.
          </p>

          <hr className="border-t-2 border-gray-800 my-6" />

          <h3 className="font-press text-sm sm:text-lg text-neon border-b-2 border-neon pb-1">Game Client</h3>
          <p>
            <strong className="text-white">OTClient by MEHAH</strong><br />
            The open-source game client used by players to connect to the server. It communicates with The Forgotten Server via <strong className="text-white">TCP protocol on port 7171</strong>, sending and receiving real-time game packets for movement, combat, chat, and all in-game interactions.
          </p>

          <hr className="border-t-2 border-gray-800 my-6" />

          <h3 className="font-press text-sm sm:text-lg text-neon border-b-2 border-neon pb-1">Development Tools</h3>
          <p>
            <strong className="text-white">RME — Map Editor</strong><br />
            Used to design and edit the entire game world. Map files are exported directly and loaded by the server.
          </p>
          <p>
            <strong className="text-white">Object Builder</strong><br />
            Used to create and manage all visual assets — sprites and object definitions (.spr / .dat). These files are used by both the server and the client to render the game world correctly.
          </p>

          <hr className="border-t-2 border-gray-800 my-6" />

          <h3 className="font-press text-sm sm:text-lg text-neon border-b-2 border-neon pb-1">Tech Stack</h3>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border-2 border-white text-sm">
              <thead className="bg-neon text-black font-press">
                <tr>
                  <th className="border-2 border-white px-4 py-3 text-left">Layer</th>
                  <th className="border-2 border-white px-4 py-3 text-left">Technology</th>
                  <th className="border-2 border-white px-4 py-3 text-left">Role</th>
                </tr>
              </thead>
              <tbody className="bg-gray-900 text-gray-300">
                {[
                  ["Game Engine", "TFS 1.4.2 (C++)", "Core game logic"],
                  ["Database", "MySQL", "Data persistence"],
                  ["Web Server", "NGINX", "Serves the website"],
                  ["Website", "MyAcc (Gesior)", "Account management"],
                  ["Game Client", "OTClient (MEHAH)", "Player interface"],
                  ["Map Editing", "RME", "World design"],
                  ["Asset Creation", "Object Builder", "Sprites & objects"],
                ].map(([layer, tech, role]) => (
                  <tr key={layer} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                    <td className="border-2 border-gray-700 px-4 py-3">{layer}</td>
                    <td className="border-2 border-gray-700 px-4 py-3 text-neon font-bold">{tech}</td>
                    <td className="border-2 border-gray-700 px-4 py-3">{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 border-2 border-white text-center bg-gray-900 text-sm sm:text-base pixel-border">
            <p className="text-gray-300">Developed by Allan Rodrigues — <a href="https://linkedin.com/in/allanzinho" className="text-neon hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/allanzinho</a></p>
          </div>
        </div>
      </article>
    </div>
  );
}
