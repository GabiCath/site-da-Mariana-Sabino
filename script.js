const nav = document.querySelector('.nav');
const menuBtn = document.getElementById('menuBtn');
menuBtn?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      if (e.target.tagName === 'IMG') e.target.style.opacity = 1;
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.14 });

document.querySelectorAll('.reveal, .pop, .gallery img').forEach(el => io.observe(el));

const faqQuestions = document.querySelectorAll('.faq .q');

faqQuestions.forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    const isOpen = q.classList.contains('active');

    faqQuestions.forEach(item => {
      item.classList.remove('active');
      item.setAttribute('aria-expanded', 'false');
      item.nextElementSibling.style.height = 0;
    });

    if (!isOpen) {
      q.classList.add('active');
      q.setAttribute('aria-expanded', 'true');
      answer.style.height = answer.scrollHeight + "px";
    }
  });
});


