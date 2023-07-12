const dictionaryService = () => {
  const URL = "http://sum.in.ua/?swrd=слово";

  const getWord = async (word: string) => {
    const response = await fetch(URL, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.text;
    });
    return response;
  };
  return getWord;
};

export default dictionaryService;
