const express = require('express');
const app = express();

// Home page with centered CI/CD design
app.get('/', (req, res) => {
  res.type('html').send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CI/CD Web App</title>
  <style>
    :root{
      --bg1:#0d47a1; --bg2:#1976d2; --bg3:#42a5f5;
      --glass: rgba(255,255,255,0.12);
      --text:#ffffff;
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      display:flex;
      align-items:center;
      justify-content:center;
      font-family: Arial, Helvetica, sans-serif;
      color:var(--text);
      text-align:center;
      background: linear-gradient(135deg, var(--bg1), var(--bg2), var(--bg3));
      background-attachment: fixed;
      overflow:hidden;
    }
    /* CI/CD watermark */
    body::before{
      content:"CI/CD";
      position:fixed;
      inset:0;
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:900;
      font-size:22vw;
      letter-spacing:0.05em;
      color:rgba(255,255,255,0.06);
      pointer-events:none;
      user-select:none;
    }
    .container{
      position:relative;
      z-index:1;
      max-width:720px;
      padding:28px 24px;
      background: var(--glass);
      border:1px solid rgba(255,255,255,0.18);
      border-radius:16px;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.18);
    }
    h1{
      margin:0 0 10px;
      font-size:2.4rem;
    }
    p{
      margin:0;
      font-size:1.1rem;
      opacity:.95;
      line-height:1.6;
    }
    .tag{
      display:inline-block;
      margin-top:14px;
      padding:6px 10px;
      font-size:.9rem;
      border:1px solid rgba(255,255,255,0.3);
      border-radius:999px;
      background: rgba(255,255,255,0.08);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hello, World!</h1>
    <p>This is a simple web app deployed via Jenkins CI/CD Pipeline.</p>
    <div class="tag">Jenkins • Node.js • Express</div>
  </div>
</body>
</html>`);
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ App running on port ${PORT}`);
});