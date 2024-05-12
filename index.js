const page_1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showPage1');
        }
        else {
            entry.target.classList.remove('showPage1');
        }
    });
});
const hiddenpage_1 = document.querySelectorAll('.hidden-page1');
hiddenpage_1.forEach((el) => page_1.observe(el));

const P1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showP1');
        }
        else {
            entry.target.classList.remove('showP1');
        }
    });
});
const p1P1 = document.querySelectorAll('.p1');
p1P1.forEach((el) => P1.observe(el));