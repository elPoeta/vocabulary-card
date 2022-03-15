class Http {
  constructor() {
    this.baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';
    this.options = {
      method: 'GET',
    }
  }

  async get(word) {
    const data = await (await fetch(`${this.baseUrl}/${word}`, this.options).catch(this.handleError)).json();
    if (data.code && data.code == 400) return;
    return data;
  }

  handleError(err) {
    console.warn(err);
    let resp = new Response(
      JSON.stringify({
        code: 400,
        message: err.message
      })
    );
    return resp;
  }
}

export default Http;