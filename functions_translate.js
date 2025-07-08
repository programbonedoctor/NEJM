```javascript
  exports.handler = async function (event) {
    try {
      const { text } = JSON.parse(event.body);
      const response = await fetch('https://api-free.deepl.com/v2/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`
        },
        body: new URLSearchParams({ text, target_lang: 'KO' })
      });
      if (!response.ok) throw new Error(`DeepL error: ${response.status}`);
      const data = await response.json();
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Translation failed' })
      };
    }
  };
  ```