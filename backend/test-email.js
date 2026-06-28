const express = require('express');
const app = express();
const PORT = 5000;

// Enable CORS for all origins (for testing)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json());

// Simple test endpoint
app.post('/api/contact/send', (req, res) => {
    console.log('✅ Form received:', req.body);
    res.json({
        success: true,
        message: 'Test successful! Backend is working.',
        data: req.body,
        timestamp: new Date().toISOString()
    });
});

app.get('/api/contact/health', (req, res) => {
    res.json({
        success: true,
        message: 'Backend is running!',
        timestamp: new Date().toISOString()
    });
});

app.get('/', (req, res) => {
    res.json({
        message: 'Test Server',
        endpoints: ['POST /api/contact/send', 'GET /api/contact/health']
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('='.repeat(60));
    console.log(`🚀 TEST BACKEND STARTED`);
    console.log(`📍 Local: http://localhost:${PORT}`);
    console.log(`📍 Network: http://[YOUR-IP]:${PORT}`);
    console.log('📋 Endpoints:');
    console.log(`   POST http://localhost:${PORT}/api/contact/send`);
    console.log(`   GET  http://localhost:${PORT}/api/contact/health`);
    console.log('='.repeat(60));
});