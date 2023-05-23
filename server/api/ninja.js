export default defineEventHandler(async (event) => {
  // const { name } = getQuery(event);

  // const { age } = await readBody(event);

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=RV4vKPsoWqeJH41o4ZY2DM3l36xTz7kA37ZAXd9P"
  );

  return data;
});
