// 1. Tüm İş Alanları Veri Seti
const faaliyetler = [
    {
        baslik: "Elektrik Arıza & Bakım",
        ikon: "fa-plug",
        gorsel: "img/ariza.jpg",
        gorselAlt: "Elektrik Pano Arıza Onarım",
        aciklama: "Sigorta atmaları, priz arızaları, kaçak akım rölesi problemleri ve tüm elektriksel arızalar profesyonel cihazlarla hızlıca tespit edilip onarılır."
    },
    {
        baslik: "İnterkom & Görüntülü Diyafon",
        ikon: "fa-door-open",
        gorsel: "img/diyafon.jpg",
        gorselAlt: "Görüntülü Diyafon ve İnterkom Sistemleri",
        aciklama: "Apartman ve siteler için akıllı interkom, görüntülü diyafon sistemlerinin sıfırdan kurulumu, kablolaması, daire içi panel montajları ve arıza onarımları yapılır."
    },
    {
        baslik: "Yangın Algılama & İhbar Sistemleri",
        ikon: "fa-fire-extinguisher",
        gorsel: "img/yangin.jpg", 
        gorselAlt: "Yangın İhbar Sistemi Bakımı",
        aciklama: "Binaların yasal mevzuata uygun yangın algılama sistemlerinin periyodik bakımları, dedektör temizlikleri, panel testleri ve arıza onarımları güvenle yapılır."
    },
    {
        baslik: "Siteler & Ortak Alan Çözümleri",
        ikon: "fa-building-shield",
        gorsel: "img/site.jpg", 
        gorselAlt: "Site ve Apartman Ortak Alan Elektrik Bakımı",
        aciklama: "Apartman ve sitelerin ortak kullanım alanlarındaki ana pano arızaları, merdiven otomatiği, sensörlü aydınlatma sistemleri ve çevre bakımları titizlikle yürütülür."
    },
    {
        baslik: "İç Mekan & Dış Mekan Aydınlatma",
        ikon: "fa-lightbulb",
        gorsel: "img/aydinlatma.jpg", 
        gorselAlt: "Modern LED ve Ev Aydınlatma Montajı",
        aciklama: "Gizli LED şerit montajı, spot lamba kurulumları, avize montajı ve bahçe/bina dış cephe aydınlatma sistemleri modern standartlarda teslim edilir."
    },
    {
        baslik: "Sıfırdan Tesisat & Pano",
        ikon: "fa-network-wired",
        gorsel: "img/tesisat.jpg", 
        gorselAlt: "Sıfırdan Elektrik Kablo Tesisatı Döşeme",
        aciklama: "Ev, ofis veya dükkan tadilatlarında sıfırdan kablo çekimi, sigorta kutusu montajı, internet ve zayıf akım hattı kurulumları gerçekleştirilir."
    }
];

const projectsContainer = document.getElementById('projects-container');

function faaliyetleriListele() {
    if (projectsContainer) {
        projectsContainer.innerHTML = ""; 
        faaliyetler.forEach(is => {
            const kart = document.createElement('div');
            kart.classList.add('project-card');
            kart.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${is.gorsel}" alt="${is.gorselAlt}">
                </div>
                <h3><i class="fa-solid ${is.ikon}"></i> ${is.baslik}</h3>
                <p>${is.aciklama}</p>
            `;
            projectsContainer.appendChild(kart);
        });
    }
}
faaliyetleriListele();

// 2. KÜRESEL NEON AKIMI: FARE TAKİP EFEKTİ KODU
const heroSection = document.getElementById('hero-section');
const mouseGlow = document.getElementById('mouse-glow');

if (heroSection && mouseGlow) {
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseGlow.style.left = `${x}px`;
        mouseGlow.style.top = `${y}px`;
    });
}

// 3. YENİ: YAĞ GİBİ AKAN YUMUŞAK SAYFA GEÇİŞ MOTORU (CUBIC EASE-IN-OUT)
function smoothScrollTo(targetSelector, duration = 1000) {
    const target = document.querySelector(targetSelector);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80; // 80px menü boşluğu
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        
        // Pürüzsüz ivmelenme formülü (Cubic Easing)
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}

// Menü Linklerini Dinleme ve Yumuşak Geçişi Tetikleme
document.querySelectorAll('.smooth-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        smoothScrollTo(targetId, 1200); // 1200 milisaniyede tatlı bir akış sağlar
    });
});

// Ana Ekrandaki Butonları Dinleme
const btnPrimary = document.getElementById('btn-hero-contact');
const btnSecondary = document.getElementById('btn-hero-services');

if (btnPrimary) {
    btnPrimary.addEventListener('click', () => smoothScrollTo('#iletisim', 1200));
}
if (btnSecondary) {
    btnSecondary.addEventListener('click', () => smoothScrollTo('#projeler', 1000));
}
