exports.handler = async function (event, context) {
  try {
    const body = JSON.parse(event.body || '{}');
    // TODO: hook this to an email provider or store in a database
    console.log('Contact submission', body);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Received' }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error' }),
    };
  }
};
