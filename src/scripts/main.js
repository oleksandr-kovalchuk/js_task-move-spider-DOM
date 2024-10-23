'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!wall.contains(e.target)) return;

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let targetX = e.clientX - wallRect.left - spiderRect.width / 2;
  let targetY = e.clientY - wallRect.top - spiderRect.height / 2;

  targetX = Math.max(0, Math.min(targetX, wallRect.width - spiderRect.width));
  targetY = Math.max(0, Math.min(targetY, wallRect.height - spiderRect.height));

  spider.style.left = `${targetX}px`;
  spider.style.top = `${targetY}px`;
});
