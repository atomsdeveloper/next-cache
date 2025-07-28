// Por padrão as `fetchs` não armazenam dados em cache, para isso devemos usar a opções após o `fetching` como "force-cache"
export default async function fetchCachePage() {
  const response = await fetch("https://randomuser.me/api/?results=1", {
    cache: "force-cache",
  });
  const user = await response.json();
  const name = user.results[0].name.first as string;

  return <h1 className="text-6xl font-extrabold">{name}</h1>;
}
