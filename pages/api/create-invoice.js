export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount } = req.body;
  const num = Number(amount);

  if (!amount || isNaN(num) || num < 0.01) {
    return res.status(400).json({ error: 'Invalid amount. Minimum 0.01 USDT.' });
  }

  const apiKey = process.env.GOODPAYMENTS_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Payment API key not configured' });
  }

  try {
    const response = await fetch('https://app.goodpayments.io/v1/api/payment/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey,
      },
      body: JSON.stringify({
        type: 'SINGLE',
        amount: num,
        currencies: ['USDT'],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('GoodPayments error:', data);
      return res.status(response.status).json({ error: 'Payment provider error', details: data });
    }

    return res.status(201).json({ paymentURL: data.paymentURL });
  } catch (err) {
    console.error('create-invoice error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
