let lastX, lastY, isCursorDown;

let rotX = -12;
let rotY = 27;

const onCursorDown = (x, y) => {
  isCursorDown = true;
  lastX = x;
  lastY = y;
};

onmousedown = (e) => {
  onCursorDown(e.clientX, e.clientY);
};

ontouchstart = (e) => {
  onCursorDown(e.touches[0].clientX, e.touches[0].clientY);
};

onmouseup = ontouchend = () => {
  isCursorDown = false;
};

const cursorMoved = (x, y) => {
  if (!isCursorDown) return;
  const deltaX = x - lastX;
  const deltaY = y - lastY;

  lastX = x;
  lastY = y;

  rotate(deltaX, deltaY);
};

document.onmousemove = (e) => {
  cursorMoved(e.pageX, e.pageY);
};

document.ontouchmove = (e) => {
  cursorMoved(e.touches[0].pageX, e.touches[0].pageY);
};

const rotate = (deltaX, deltaY) => {
  rotY += deltaX * 0.1;
  rotX -= deltaY * 0.1;

  nes.style.transform = `translate(-50%, -50%) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
};

//click actions

const resetAnimation = (e) => {
  const element = e.target.parentElement;
  element.classList.remove("animated");
  element.offsetHeight;
  element.classList.add("animated");
};

lid.onmousedown = power.onmousedown = reset.onmousedown = resetAnimation;