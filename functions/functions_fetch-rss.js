```javascript
  exports.handler = async function () {
    try {
      const response = await fetch('https://www.nejm.org/action/showFeed?type=mr&feed=rss');
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const text = await response.text();
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/xml' },
        body: text
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch RSS' })
      };
    }
  };
  ```