const signature = () => {
  function getPosition(e, canvas) {
    const oRect = canvas.getBoundingClientRect();
    const oEventEle = e.changedTouches ? e.changedTouches[0] : e;
    return {
      posX: (oEventEle.clientX - oRect.left) / (oRect.right - oRect.left) * canvas.width,
      posY: (oEventEle.clientY - oRect.top) / (oRect.bottom - oRect.top) * canvas.height
    };
  }

  function draw(event, canvas, context) {
    if (false === canvas.drawing) {
      return false;
    }

    const oPos = getPosition(event, canvas);

    context.strokeStyle = '#000000';
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(canvas.posX, canvas.posY);
    context.lineTo(oPos.posX, oPos.posY);
    context.stroke();

    canvas.posX = oPos.posX;
    canvas.posY = oPos.posY;
  }

  function startDraw(e, canvas) {
    e.preventDefault();
    const oPos = getPosition(e, canvas);
    canvas.posX = oPos.posX;
    canvas.posY = oPos.posY;
    canvas.drawing = true;
  }

  function stopDraw(canvas, image) {
    canvas.drawing = false;
    image.src = canvas.toDataURL('image/png');
  }

  function nettoyer(canvas, context, image) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    stopDraw(canvas, image);
  }

  function initCanvas() {
    const canvas = document.getElementById("signature-canvas");
    const clear = document.getElementById('signature-efface');
    const image = document.getElementById('signature-image');
    canvas.drawing = false;
    canvas.addEventListener("mousedown", e => startDraw(e, canvas));
    canvas.addEventListener("mouseup", () => stopDraw(canvas, image));
    canvas.addEventListener("mousemove", e => draw(e, canvas, canvas.getContext('2d')));
    canvas.addEventListener("touchstart", e => startDraw(e, canvas));
    canvas.addEventListener("touchend", () => stopDraw(canvas, image));
    canvas.addEventListener("touchmove", e => draw(e, canvas, canvas.getContext('2d')));
    clear.addEventListener('click', () => nettoyer(canvas, canvas.getContext('2d'), image));
  }

  initCanvas();
};

