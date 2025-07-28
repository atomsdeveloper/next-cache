// Por padrão as `fetchs` não são armazenadas em cache, para isso deve-se usar a opção após o `fetching` como "force-cache".
// Embora não armazena `fetch` em cache, o next pré-renderizará as rotas que contém solicitações `fecth` e armazenará o HTML em cache.
// caso seja necessário garantir que uma rota se torne dinâmica, use-se a `connection API`
export default async function fetchRevalidateCachePage() {
  const response = await fetch("https://randomuser.me/api/?results=1", {
    next: {
      revalidate: 5, // Definido explicitamente com essa configuração que os dados podem ser atualizados após o tempo determinado.
    },
  });

  const user = await response.json();
  const name = user.results[0].name.first as string;

  return (
    <div className="p-4">
      <div className="mb-4">
        <p className="mb-1 text-xl">
          Para testar aguarde alguns segundos e atualize a página e veja que o
          dado abaixo será atualizado.
        </p>
        <span className="text-sm">
          É necessária realizar o `build` da app para testar esse tipo de cache,
          com o comando no terminal: <code>npm run build ; npm start</code>.
        </span>
      </div>
      <h1 className="text-6xl font-extrabold text-emerald-700">{name}</h1>
    </div>
  );
}
