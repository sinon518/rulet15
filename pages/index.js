<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Şans Çarkı</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: radial-gradient(circle at center, #1a1a1a 0%, #000000 100%);
      color: #fff;
      overflow-x: hidden;
      text-align: center;
    }

    .glow {
      position: fixed;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(255,0,150,0.2) 0%, transparent 70%);
      animation: pulse 5s infinite;
      z-index: -1;
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.3; }
      50% { transform: scale(1.2); opacity: 0.6; }
      100% { transform: scale(1); opacity: 0.3; }
    }

    .wheel-container {
      position: relative;
      width: 90vw;
      max-width: 400px;
      height: 90vw;
      max-height: 400px;
      margin: 60px auto 20px;
    }

    .wheel {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 8px solid #ff00cc;
      box-shadow: 0 0 20px #ff00cc;
      position: relative;
      overflow: hidden;
      transform: rotate(0deg);
      transition: transform 4s cubic-bezier(0.33, 1, 0.68, 1);
    }

    .segment {
      position: absolute;
      width: 50%;
      height: 50%;
      top: 50%;
      left: 50%;
      transform-origin: 0% 0%;
      background: repeating-linear-gradient(
        45deg,
        #ff66cc,
        #ff66cc 10px,
        #ff3399 10px,
        #ff3399 20px
      );
      border: 1px solid #fff;
      text-align: center;
      line-height: calc(90vw / 2);
      font-weight: bold;
      color: #fff;
      font-size: 4vw;
      text-shadow: 0 0 5px #000;
    }

    .segment:nth-child(even) {
      background: repeating-linear-gradient(
        45deg,
        #6600ff,
        #6600ff 10px,
        #9933ff 10px,
        #9933ff 20px
      );
    }

    .pointer {
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 40px solid #fff;
      filter: drop-shadow(0 0 5px #ff00cc);
    }

    #spinBtn {
      padding: 12px 24px;
      font-size: 5vw;
      background: linear-gradient(to right, #ff00cc, #6600ff);
      color: #fff;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 0 10px #ff00cc;
      transition: transform 0.2s;
    }

    #spinBtn:hover {
      transform: scale(1.05);
    }

    #result {
      margin-top: 30px;
      font-size: 6vw;
      font-weight: bold;
      text-shadow: 0 0 5px #ff00cc;
    }
  </style>
</head>
<body>

  <div class="glow"></div>

  <div class="wheel-container">
    <div class="pointer"></div>
    <div class="wheel" id="wheel">
      <div class="segment" style="transform: rotate(0deg);">1</div>
      <div class="segment" style="transform: rotate(60deg);">2</div>
      <div class="segment" style="transform: rotate(120deg);">3</div>
      <div class="segment" style="transform: rotate(180deg);">4</div>
      <div class="segment" style="transform: rotate(240deg);">5</div>
      <div class="segment" style="transform: rotate(300deg);">6</div>
    </div>
  </div>

  <button id="spinBtn">Çarkı Çevir</button>
  <div id="result"></div>

  <script>
    const wheel = document.getElementById('wheel');
    const result = document.getElementById('result');
    const spinBtn = document.getElementById('spinBtn');

    const segments = ["1", "2", "3", "4", "5", "6"];
    let spinning = false;

    spinBtn.addEventListener('click', () => {
      if (spinning) return;
      spinning = true;

      const randomIndex = Math.floor(Math.random() * segments.length);
      const segmentAngle = 360 / segments.length;
      const randomAngle = randomIndex * segmentAngle;
      const extraSpins = 5 * 360;
      const totalRotation = extraSpins + (360 - randomAngle);

      wheel.style.transform = `rotate(${totalRotation}deg)`;

      setTimeout(() => {
        result.textContent = `Kazanan: ${segments[randomIndex]}`;
        spinning = false;
      }, 4000);
    });
  </script>

</body>
