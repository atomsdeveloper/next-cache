// Por padrão as `fetchs` não são armazenadas em cache, para isso deve-se usar a opção após o `fetching` como "force-cache".
// Embora não armazena `fetch` em cache, o next pré-renderizará as rotas que contém solicitações `fecth` e armazenará o HTML em cache.
// caso seja necessário garantir que uma rota se torne dinâmica, use-se a `connection API`
export default async function fetchForceCachePage() {
  const response = await fetch("https://randomuser.me/api/?results=1", {
    cache: "force-cache", // Removendo essa configuração os dados passam a ser atualizados novamente.
  });

  const user = await response.json();
  const name = user.results[0].name.first as string;

  return (
    <div className="p-4">
      <p className="mb-4 text-xl">
        Para testar atualize a página e veja que o dado abaixo pemanece o mesmo.
      </p>
      <h1 className="text-6xl font-extrabold text-emerald-700">{name}</h1>
    </div>
  );
}
