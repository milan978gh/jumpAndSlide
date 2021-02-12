// document.addEventListener('DOMContentLoaded', () => {

  const prince = document.querySelector('.character');
  let bottom = 0;
  let left = 0;
  let gravity = 0.9;
  let isJumping = false;
  let isGoingLeft = false;
  let isGoingRight = false;
  let leftTimerId;
  let rightTimerId;


  document.addEventListener('keydown', control);


  function jump() {
    if (isJumping) return;
    prince.classList.add('character');
    prince.classList.remove('character-sliding');
    let timerUpId = setInterval(function() {
      if (bottom > 250) {
        clearInterval(timerUpId);
        let timerDownId = setInterval(function() {
          if (bottom < 10) {
            clearInterval(timerDownId);
            isJumping = false;
          }
          bottom -= 5;
          prince.style.bottom = bottom + 'px';
        }, 20);
      }
      isJumping = true;
      bottom += 30;
      bottom = bottom * gravity;
      prince.style.bottom = bottom + 'px';
    }, 20);
  }

  function slideLeft() {
    prince.classList.remove('character');
    prince.classList.add('character-sliding');
    if (isGoingRight) {
      clearInterval(rightTimerId);
      isGoingRight = false;
    }
    isGoingLeft = true;
    leftTimerId = setInterval(function() {
      left -= 5;
      prince.style.left = left + 'px';
    }, 20);
  }

  function slideRight() {
    prince.classList.remove('character');
    prince.classList.add('character-sliding');
    if (isGoingLeft) {
      clearInterval(leftTimerId);
      isGoingLeft = false;
    }
    isGoingRight = true;
    rightTimerId = setInterval(function() {
      left += 5;
      prince.style.left = left + 'px';
    }, 20);
  }

  // assign func to keycode
  function control(e) {
    if (e.keyCode === 38) {
      jump();
    } else if (e.keyCode === 37) {
      slideLeft(); // if we press left
    } else if (e.keyCode === 39) {
      slideRight(); // if we press right
    }
  }

// })