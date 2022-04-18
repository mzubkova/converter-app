export const getRequest = async () => {
  try {
    const options = { method: "GET" };
    const res = await fetch(
      "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11",
      options
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
