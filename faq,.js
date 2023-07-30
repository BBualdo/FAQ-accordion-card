function showAnswer(selector1, selector2, selector3) {
  const fAQ = document.querySelector(selector1);

  let answer1 = `<p class="answer-1">
              You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.
              </p>`;
  let answer2 = `<p class="answer-2">
              No more than 2GB. All files in your account must fit your allotted storage space.
              </p>`;
  let answer3 = `<p class="answer-3">
              Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.
              </p>`;
  let answer4 = `<p class="answer-4">
              Yes! Send us a message and we’ll process your request no questions asked.
              </p>`;  
  let answer5 = `<p class="answer-5">
              Chat and email support is available 24/7. Phone lines are open during normal business hours.
              </p>`;

  if (selector1 === '.faq-1') {
    if (fAQ.innerHTML.includes(answer1)) {
      const html = document.querySelector('.answer-1');
      html.remove();
    } else {
      fAQ.innerHTML += answer1;
    }
  } else if (selector1 === '.faq-2') {
    if (fAQ.innerHTML.includes(answer2)) {
      const html = document.querySelector('.answer-2');
      html.remove();
    } else {
      fAQ.innerHTML += answer2;
    } 
  } else if (selector1 === '.faq-3') {
    if (fAQ.innerHTML.includes(answer3)) {
      const html = document.querySelector('.answer-3');
      html.remove();
    } else {
      fAQ.innerHTML += answer3;
    } 
  } else if (selector1 === '.faq-4') {
    if (fAQ.innerHTML.includes(answer4)) {
      const html = document.querySelector('.answer-4');
      html.remove();
    } else {
      fAQ.innerHTML += answer4;
    } 
  } else if (selector1 === '.faq-5') {
    if (fAQ.innerHTML.includes(answer5)) {
      const html = document.querySelector('.answer-5');
      html.remove();
    } else {
      fAQ.innerHTML += answer5;
    } 
  }
  
    
    boldQuestion(selector2)
    arrowRotate(selector3)

}

function boldQuestion(selector2) {
  const question = document.querySelector(selector2);

  if (question.classList.contains('is-expanded')) {
    question.classList.remove('is-expanded')
  } else {
    question.classList.add('is-expanded');
  }
  
}

function arrowRotate(selector3) {
  const arrow = document.querySelector(selector3);

  if (arrow.classList.contains('is-rotated')) {
    arrow.classList.remove('is-rotated')
  } else {
    arrow.classList.add('is-rotated')
  }
}

