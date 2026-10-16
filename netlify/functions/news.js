// Node 18+ no necesita 'node-fetch'

exports.handler = async function(event, context) {
  const NEWS_API_KEY = process.env.NEWSAPI_KEY;
  const query = `(defensa OR aviación militar OR aviación civil OR drones OR inteligencia artificial OR tecnología aeroespacial OR UAV OR sistemas ISR)`;
  const NEWS_URL = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=es&sortBy=publishedAt&pageSize=6&apiKey=${NEWS_API_KEY}`;

  try {
    const response = await fetch(NEWS_URL);
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `NewsAPI error: ${response.status}` }),
        headers: { 'Access-Control-Allow-Origin': '*' }
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Access-Control-Allow-Origin': '*' }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      headers: { 'Access-Control-Allow-Origin': '*' }
    };
  }
};
