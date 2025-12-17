/* assets/js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    // Đợi 1 chút để common.js chạy xong Header/Footer rồi mới điền dữ liệu
    setTimeout(() => {
        loadContent();
        setupContactForm();
    }, 100);
});

function loadContent() {
    if (typeof websiteData === 'undefined') {
        console.error("LỖI: Chưa load file data/content.js");
        return;
    }
    const data = websiteData;

    // 1. Điền thông tin vào Header/Footer/Liên Hệ (Update mọi nơi có ID tương ứng)
    updateText('header-logo-text', data.companyInfo.shortName);
    updateText('header-hotline', data.companyInfo.hotline);
    
    // Update trang Liên Hệ & Footer
    updateText('contact-address', data.companyInfo.address);
    updateText('contact-phone', data.companyInfo.hotline);
    updateText('contact-email', data.companyInfo.email);
    
    // Load Map
    const mapContainer = document.getElementById('google-map-container');
    if(mapContainer && data.companyInfo.googleMapEmbed) {
        mapContainer.innerHTML = data.companyInfo.googleMapEmbed;
    }

    // 2. HERO SLIDER (Chỉ chạy ở trang chủ)
    const heroImg = document.getElementById('hero-bg');
    if(heroImg) {
        const images = data.hero.bgImages || ["assets/img/hero-bg-1.jpg"];
        let i = 0;
        if(images.length > 0) heroImg.src = images[0];
        if(images.length > 1) {
            setInterval(() => {
                i = (i + 1) % images.length;
                heroImg.classList.add('fade-out');
                setTimeout(() => {
                    heroImg.src = images[i];
                    heroImg.classList.remove('fade-out');
                }, 1000);
            }, 5000);
        }
        updateText('hero-headline', data.hero.headline);
        updateText('hero-sub', data.hero.subHeadline);
    }

    // 3. ĐỐI TÁC (Load vào trang chủ)
    const partnerList = document.getElementById('partner-list');
    if(partnerList) {
        partnerList.innerHTML = ''; 
        data.partners.forEach(p => {
            const imgUrl = p.logo || `https://via.placeholder.com/150x60?text=${p.name}`;
            const div = document.createElement('div');
            div.className = "flex flex-col items-center group w-1/2 md:w-auto p-4 cursor-default"; 
            div.innerHTML = `
                <img src="${imgUrl}" alt="${p.name}" class="h-20 md:h-24 object-contain mb-4 transition-transform duration-300 transform group-hover:scale-110 drop-shadow-md">
                <span class="text-sm md:text-base font-bold text-gray-500 uppercase tracking-widest text-center group-hover:text-ttt-blue transition">${p.name}</span>
            `;
            partnerList.appendChild(div);
        });
    }

    // 4. DỊCH VỤ & DỰ ÁN (Load chung)
    loadGrid('service-grid', data.services, createServiceCard);
    loadGrid('project-grid', data.projects, createProjectCard);
}

// Hàm hỗ trợ tạo thẻ HTML
function loadGrid(elementId, dataArray, createCardFunction) {
    const container = document.getElementById(elementId);
    if (container && dataArray) {
        container.innerHTML = '';
        dataArray.forEach(item => {
            container.appendChild(createCardFunction(item));
        });
    }
}

function createServiceCard(service) {
    const div = document.createElement('div');
    div.className = "bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-xl transition duration-300 hover:border-ttt-orange group h-full";
    div.innerHTML = `
        <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center text-ttt-blue text-3xl shadow mb-6 group-hover:bg-ttt-blue group-hover:text-white transition"><i class="${service.icon}"></i></div>
        <h3 class="text-xl font-display font-bold text-gray-800 mb-3 group-hover:text-ttt-blue">${service.title}</h3>
        <p class="text-gray-600 leading-relaxed text-sm">${service.desc}</p>`;
    return div;
}

function createProjectCard(project) {
    const imgSrc = project.image || `https://via.placeholder.com/800x600?text=${project.name}`;
    const div = document.createElement('div');
    div.className = "project-card relative h-96 rounded-lg overflow-hidden group cursor-pointer shadow-lg";
    div.innerHTML = `
        <img src="${imgSrc}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
        <div class="absolute bottom-0 left-0 w-full p-8 text-white z-20">
            <span class="text-ttt-orange text-sm font-bold uppercase tracking-wider mb-2 block">${project.category}</span>
            <h3 class="text-3xl font-display font-bold mb-2 leading-tight">${project.name}</h3>
            <p class="text-base text-gray-300 mb-4"><i class="fas fa-map-marker-alt mr-2"></i> ${project.location}</p>
            <div class="project-info h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                <div class="border-t border-gray-500 pt-4 mt-2 text-base text-gray-200">
                    <p class="mb-1"><strong>CĐT:</strong> ${project.investor}</p>
                    <p><strong>Hạng mục:</strong> ${project.role}</p>
                </div>
            </div>
        </div>`;
    return div;
}

function updateText(id, text) {
    // Tìm tất cả các element có cùng ID (đề phòng trùng lặp) và update hết
    const els = document.querySelectorAll('#' + id);
    els.forEach(el => { if(text) el.textContent = text; });
}

function setupContactForm() { /* Giữ nguyên code gửi mail cũ */ }
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const btn = document.getElementById('btn-submit');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
        btn.disabled = true;

        const params = {
            from_name: document.getElementById('name').value,
            from_phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
            reply_to: document.getElementById('email').value
        };

        if (websiteData.emailConfig && websiteData.emailConfig.serviceID) {
            emailjs.send(websiteData.emailConfig.serviceID, websiteData.emailConfig.templateID, params)
            .then(() => { alert('Gửi thành công!'); form.reset(); })
            .catch((err) => { alert('Lỗi: ' + JSON.stringify(err)); })
            .finally(() => { btn.innerHTML = originalText; btn.disabled = false; });
        } else {
            setTimeout(() => { alert('Mô phỏng: Gửi thành công!'); form.reset(); btn.innerHTML = originalText; btn.disabled = false; }, 1000);
        }
    });
}
