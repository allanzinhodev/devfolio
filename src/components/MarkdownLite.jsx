// Renderizador de Markdown enxuto, só com o subconjunto usado no GDD do Backlands:
// títulos (# a ####), listas (-), tabelas (| |), citação (>), régua (---) e **negrito** inline.
// Evita adicionar uma dependência de markdown só para estilizar o documento com a identidade pixel.

function renderInline(text) {
  // Divide em **negrito**; índices ímpares viram <strong>.
  const parts = text.split('**');
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-white font-bold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function Table({ rows }) {
  const cells = rows.map((r) =>
    r
      .replace(/^\||\|$/g, '')
      .split('|')
      .map((c) => c.trim())
  );
  const [header, , ...body] = cells; // pula a linha separadora (| --- |)
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border-2 border-white text-sm sm:text-base">
        <thead className="bg-neon text-black font-press">
          <tr>
            {header.map((h, i) => (
              <th key={i} className="border-2 border-white px-3 py-3 text-left">
                {renderInline(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-900 text-gray-300">
          {body.map((row, ri) => (
            <tr key={ri} className="hover:bg-gray-800 transition-colors">
              {row.map((c, ci) => (
                <td
                  key={ci}
                  className={`border-2 border-gray-700 px-3 py-3 ${ci === 0 ? 'text-neon font-bold' : ''}`}
                >
                  {renderInline(c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MarkdownLite({ md }) {
  const lines = md.split('\n');
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Linha em branco
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Régua horizontal
    if (line.trim() === '---') {
      blocks.push(<hr key={i} className="border-t-2 border-gray-800 my-8" />);
      i++;
      continue;
    }

    // Títulos
    if (line.startsWith('#### ')) {
      blocks.push(
        <h4 key={i} className="font-press text-xs sm:text-sm text-white mt-6 mb-2">
          {renderInline(line.slice(5))}
        </h4>
      );
      i++;
      continue;
    }
    if (line.startsWith('### ')) {
      blocks.push(
        <h3 key={i} className="font-press text-sm sm:text-base text-neon mt-8 mb-3">
          {renderInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }
    if (line.startsWith('## ')) {
      blocks.push(
        <h2
          key={i}
          className="font-press text-lg sm:text-2xl text-white border-b-2 border-neon pb-3 mb-4"
        >
          {renderInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }
    if (line.startsWith('# ')) {
      blocks.push(
        <h1 key={i} className="font-press text-2xl sm:text-3xl text-white mb-6">
          {renderInline(line.slice(2))}
        </h1>
      );
      i++;
      continue;
    }

    // Citação
    if (line.startsWith('> ')) {
      blocks.push(
        <blockquote
          key={i}
          className="border-l-4 border-neon bg-gray-900/60 pl-4 py-3 my-4 text-gray-300 italic"
        >
          {renderInline(line.slice(2))}
        </blockquote>
      );
      i++;
      continue;
    }

    // Tabela (linha começa com | e a próxima é a separadora)
    if (line.startsWith('|') && lines[i + 1] && /^\|[\s:|-]+\|?$/.test(lines[i + 1].trim())) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(lines[i].trim());
        i++;
      }
      blocks.push(<Table key={`t-${i}`} rows={rows} />);
      continue;
    }

    // Lista não-ordenada
    if (line.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-2 my-4 text-gray-300 text-lg">
          {items.map((it, idx) => (
            <li key={idx}>{renderInline(it)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Parágrafo (junta linhas consecutivas "normais")
    const para = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      lines[i].trim() !== '---' &&
      !lines[i].startsWith('#') &&
      !lines[i].startsWith('- ') &&
      !lines[i].startsWith('> ') &&
      !lines[i].startsWith('|')
    ) {
      para.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={`p-${i}`} className="text-gray-300 leading-relaxed text-lg my-3">
        {renderInline(para.join(' '))}
      </p>
    );
  }

  return <div>{blocks}</div>;
}
