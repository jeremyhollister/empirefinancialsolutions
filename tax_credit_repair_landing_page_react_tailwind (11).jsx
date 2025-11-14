<!--
  Empire Financial Solutions — GitHub Pages single-file app (no build step)
  Updated: Added Empire Tax Solutions logo from uploaded file to header and footer.
-->
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Empire Financial Solutions</title>
  <link rel="icon" href="/favicon.ico" />
  <style>
    :root {
      --accent-from:#65a30d;
      --accent-to:#15803d;
      --text:#000;
      --muted:#f1f5f9;
      --card:#fff;
      --shadow:0 8px 20px rgba(0,0,0,.04);
      --radius:16px;
    }
    html,body{height:100%}
    body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--text);background:linear-gradient(var(--muted),#fff)}
    .container{max-width:1120px;margin:0 auto;padding:0 24px}
    header{position:sticky;top:0;z-index:30;backdrop-filter:blur(6px);background:#fff;border-bottom:2px solid var(--accent-to)}
    .row{display:flex;align-items:center;justify-content:space-between;padding:12px 0}
    .brand{display:flex;align-items:center;gap:12px}
    .brand img{height:80px;width:auto}
    .brand-name{font-family:"Brush Script MT",cursive;font-size:32px;font-weight:600;color:#000}
    .brand-tag{font-family:Georgia,serif;font-size:18px;margin-top:4px;color:#000}
    nav a{color:var(--text);text-decoration:none;font-weight:700;margin-left:16px}
    .btn-primary{background-image:linear-gradient(90deg,var(--accent-from),var(--accent-to));color:#fff;border:0;border-radius:12px;padding:12px 18px;cursor:pointer;font-weight:700;box-shadow:0 6px 14px rgba(21,128,61,.35)}
    .footer{border-top:2px solid var(--accent-to);margin-top:48px;padding:20px 0;background:#fff;text-align:center}
    .footer img{height:60px;width:auto;margin-bottom:8px}
  </style>
</head>
<body>
  <header>
    <div class="container row">
      <div class="brand">
        <img src="IMG_2630.jpg" alt="Empire Tax Solutions Logo" />
        <div>
          <div class="brand-name">Empire Financial Solutions</div>
          <div class="brand-tag">Get Your Max Refund. Stronger credit. Real results.</div>
        </div>
      </div>
      <nav>
        <a href="#services">Services</a>
        <a href="#form">Apply</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main class="container" style="text-align:center;padding:60px 0;">
    <h1>Welcome to Empire Financial Solutions</h1>
    <p>We help you maximize your tax refunds and repair your credit with professionalism and care.</p>
  </main>

  <footer class="footer">
    <img src="IMG_2630.jpg" alt="Empire Tax Solutions Logo Footer" />
    <div>© 2025 Empire Financial Solutions. All Rights Reserved.</div>
  </footer>
</body>
</html>
