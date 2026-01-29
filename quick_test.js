// Test rápido del chatbot
const testAPI = async () => {
  console.log('🧪 Test rápido...\n');
  
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'Forkast Test'
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o-mini',
        messages: [
          { role: 'user', content: 'Hola, responde solo con "Funcionando"' }
        ]
      })
    });

    console.log('Status:', response.status);
    
    if (!response.ok) {
      const error = await response.json();
      console.log('❌ ERROR:', JSON.stringify(error, null, 2));
      return;
    }

    const data = await response.json();
    console.log('✅ RESPUESTA:', data.choices[0].message.content);
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
};

testAPI();
