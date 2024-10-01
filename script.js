const cube = document.querySelector('.cube');
const faces = document.querySelectorAll('.face');

function scatterCube() function submitHandler() {
  // عرض المكعب مع بداية الأنميشن
  const cubeContainer = document.getElementById("cubeContainer");
  cubeContainer.style.display = "flex";

  // تشغيل أنميشن التفكيك
  const cube = document.getElementById("cube");
  cube.style.animation = "disassemble 1s forwards";

  setTimeout(() => {
    // بعد أن ينتهي أنميشن التفكيك، تشغيل أنميشن التجميع
    cube.style.animation = "assemble 1s forwards";

    // بعد ثانية من انتهاء أنميشن التجميع، تنفيذ العملية التالية
    setTimeout(() => {
      const fileInput = document.getElementById("fileInput");
      const image = fileInput.files[0];

      const formData = new FormData();
      formData.append("image_file", image);
      formData.append("size", "auto");

      const apiKey = "4x9LmCC2ZSjnNinwa2kH1yXF";

      fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": apiKey,
        },
        body: formData,
      })
        .then(function (response) {
          return response.blob();
        })
        .then(function (blob) {
          const url = URL.createObjectURL(blob);
          imageURL = url;

          const imageContainer = document.getElementById("imageContainer");
          imageContainer.innerHTML = '';

          const img = document.createElement("img");
          img.src = url;
          img.classList.add("img-fluid");
          imageContainer.appendChild(img);

          // إخفاء المكعب بعد الانتهاء من إظهار الصورة
          setTimeout(() => {
            cubeContainer.style.display = "none";
          }, 1000);
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    }, 1000); // تأخير لمدة ثانية بعد أن يجتمع المكعب مجددًا
  }, 1000); // تأخير لتنفيذ التجميع بعد التفكيك
}


function gatherCube() {
    faces.forEach((face) => {
        face.style.transform = '';
        face.style.opacity = 1;
    });
}

setTimeout(scatterCube, 2000);  // تفكيك المكعب بعد ثانيتين
setTimeout(gatherCube, 5000);   // إعادة تجميع المكعب بعد 5 ثواني
setInterval(() => {
    scatterCube();
    setTimeout(gatherCube, 3000);
}, 8000);  // تكرار الأنيميشن كل 8 ثواني
// صفحة الإندوكس
fudocument.getElementById('switch-lang').addEventListener('click', function() {
    const currentLang = document.documentElement.lang;
    if (currentLang === 'en') {
        switchToArabic();
    } else {
        switchToEnglish();
    }
});

function switchToArabic() {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';

    document.querySelector('h2').textContent = 'إزالة الخلفية';
    document.querySelector('section img').alt = 'إزالة الخلفية';
    document.querySelector('section p').textContent = 'تساعدك هذه الخدمة على إزالة خلفيات الصور بسهولة وسرعة.';
    document.querySelector('section button').textContent = 'ابدأ الخدمة';

    // Switch other sections
    // Example: speech-to-text
    const speechToTextSection = document.querySelectorAll('section')[1];
    speechToTextSection.querySelector('h2').textContent = 'تحويل الصوت إلى كتابة';
    speechToTextSection.querySelector('img').alt = 'تحويل الصوت إلى كتابة';
    speechToTextSection.querySelector('p').textContent = 'استخدم هذه الخدمة لتحويل الصوت إلى نص مكتوب بدقة عالية.';
    speechToTextSection.querySelector('button').textContent = 'ابدأ الخدمة';

    const textToSpeechSection = document.querySelectorAll('section')[2];
    textToSpeechSection.querySelector('h2').textContent = 'تحويل الكتابة إلى صوت';
    textToSpeechSection.querySelector('img').alt = 'تحويل الكتابة إلى صوت';
    textToSpeechSection.querySelector('p').textContent = 'قم بتحويل النصوص المكتوبة إلى صوت واضح باستخدام هذه الخدمة.';
    textToSpeechSection.querySelector('button').textContent = 'ابدأ الخدمة';

    document.querySelector('footer p').textContent = 'حقوق النشر © 2024 جميع الحقوق محفوظة.';
    document.getElementById('switch-lang').textContent = 'English';

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks[0].textContent = 'الرئيسية';
    navLinks[1].textContent = 'عنّي';
    navLinks[2].textContent = 'تواصل معي';
}

function switchToEnglish() {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';

    document.querySelector('h2').textContent = 'Background Removal';
    document.querySelector('section img').alt = 'Background Removal';
    document.querySelector('section p').textContent = 'This service helps you easily and quickly remove image backgrounds.';
    document.querySelector('section button').textContent = 'Start Service';

    // Switch other sections
    const speechToTextSection = document.querySelectorAll('section')[1];
    speechToTextSection.querySelector('h2').textContent = 'Speech to Text';
    speechToTextSection.querySelector('img').alt = 'Speech to Text';
    speechToTextSection.querySelector('p').textContent = 'Use this service to convert audio to text with high accuracy.';
    speechToTextSection.querySelector('button').textContent = 'Start Service';

    const textToSpeechSection = document.querySelectorAll('section')[2];
    textToSpeechSection.querySelector('h2').textContent = 'Text to Speech';
    textToSpeechSection.querySelector('img').alt = 'Text to Speech';
    textToSpeechSection.querySelector('p').textContent = 'Convert written text into clear speech using this service.';
    textToSpeechSection.querySelector('button').textContent = 'Start Service';

    document.querySelector('footer p').textContent = '© 2024 All rights reserved.';
    document.getElementById('switch-lang').textContent = 'العربية';

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks[0].textContent = 'Home';
    navLinks[1].textContent = 'About Me';
    navLinks[2].textContent = 'Contact';
}

function startService(serviceName) {
    switch(serviceName) {
        case 'background-removal':
            window.location.href = 'background-removal.html';
            break;
        case 'speech-to-text':
            window.location.href = 'speech-to-text.html';
            break;
        case 'text-to-speech':
            window.location.href = 'text-to-speech.html';
            break;
        default:
            console.error('Service not found');
    }
}
