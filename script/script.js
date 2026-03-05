

function openModal(src) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}



  // اختر كل روابط الـ navbar
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault(); // يمنع الريفريش
      const targetId = this.getAttribute('href'); // يأخذ الـ ID اللي هتوديه
      if(targetId.startsWith('#')){
        const section = document.querySelector(targetId);
        if(section){
          section.scrollIntoView({ behavior: 'smooth' }); // سكرول سلس للجزء المطلوب
        }
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('h3');

    header.addEventListener('click', () => {
      // لو العنصر نفسه مفتوح، نقلبه
      const isActive = item.classList.contains('active');

      // قفل كل العناصر
      accordionItems.forEach(i => i.classList.remove('active'));

      // لو كان مش مفتوح قبل كده، افتحه
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});




  

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // منع إعادة تحميل الصفحة

  // قراءة بيانات الفورم
  const name = encodeURIComponent(this.name.value);
  const email = encodeURIComponent(this.email.value);
  const phone = encodeURIComponent(this.phone.value);
  const guests = encodeURIComponent(this.guests.value);
  const message = encodeURIComponent(this.message.value);

  // إنشاء رسالة واتساب جاهزة
  const whatsappMessage = `Hello!%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ANumber of Guests: ${guests}%0AMessage: ${message}`;

  // رابط واتساب (غيّر الرقم برقمك)
  const whatsappLink = `https://wa.me/+201040381899?text=${whatsappMessage}`;

  // فتح واتساب في تبويب جديد
  window.open(whatsappLink, '_blank');

  // عرض رسالة نجاح على الفورم
  const formMsg = document.getElementById('formMessage');
  formMsg.style.display = 'block';
  formMsg.textContent = 'تم تجهيز رسالتك! اضغط Send في واتساب لإرسالها.';

  // إعادة ضبط الفورم
  this.reset();
});



document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav a");
  const header = document.querySelector(".header");

  // فتح وقفل المنيو
  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
      menuToggle.innerHTML = "✖";
    } else {
      menuToggle.innerHTML = "&#9776;";
    }
  });

  // لما أضغط على لينك
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {

      e.preventDefault(); // نوقف السلوك الافتراضي

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = header.offsetHeight;
        const sectionPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth"
        });
      }

      // نقفل المنيو
      nav.classList.remove("show");
      menuToggle.innerHTML = "&#9776;";
    });
  });

});

function openModal(src) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function openModal(src) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}



function openModal(src) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function openModal(src) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
