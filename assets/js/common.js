/* assets/js/common.js */

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    highlightCurrentPage();
});

function loadHeader() {
    const headerHTML = `
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="index.html" class="text-2xl font-display font-bold text-ttt-blue flex items-center group">
            <img src="assets/img/logo.png" alt="Logo" class="h-12 md:h-14 mr-3 group-hover:scale-105 transition duration-300" onerror="this.style.display='none'"> 
            <span id="header-logo-text" class="hidden md:block">TTT M&E</span>
        </a>
        
        <nav class="hidden md:flex space-x-8 font-medium text-lg">
            <a href="index.html" class="nav-item hover:text-ttt-orange transition duration-300 border-b-2 border-transparent hover:border-ttt-orange pb-1">Trang Chủ</a>
            <a href="about.html" class="nav-item hover:text-ttt-orange transition duration-300 border-b-2 border-transparent hover:border-ttt-orange pb-1">Giới Thiệu</a>
            <a href="projects.html" class="nav-item hover:text-ttt-orange transition duration-300 border-b-2 border-transparent hover:border-ttt-orange pb-1">Dự Án</a>
            <a href="contact.html" class="nav-item hover:text-ttt-orange transition duration-300 border-b-2 border-transparent hover:border-ttt-orange pb-1">Liên Hệ</a>
        </nav>

        <a href="contact.html" class="hidden md:block bg-ttt-orange text-ttt-blue font-bold px-6 py-2 rounded shadow-lg hover:bg-yellow-400 hover:-translate-y-1 transition transform">
            <i class="fas fa-phone-alt mr-2"></i><span id="header-hotline">0938 960 345</span>
        </a>
        
        <button class="md:hidden text-ttt-blue text-3xl"><i class="fas fa-bars"></i></button>
    </div>`;

    const headerEl = document.getElementById('global-header');
    if (headerEl) {
        // QUAN TRỌNG: fixed top-0 left-0 để dính lên đỉnh
        headerEl.className = "fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300";
        headerEl.innerHTML = headerHTML;
    }
}

function loadFooter() {
    const footerHTML = `
    <div class="container mx-auto px-4 text-center">
        <h4 class="font-display text-white text-xl font-bold mb-3 uppercase tracking-wider">Công Ty TNHH Cơ Điện Thông Trường Thịnh</h4>
        <div class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm text-gray-400 mb-6">
            <p><i class="fas fa-map-marker-alt mr-2 text-ttt-orange"></i>24/7 ấp 3, Xã Xuân Thới Thượng, Hóc Môn, TP.HCM</p>
            <p><i class="fas fa-phone mr-2 text-ttt-orange"></i>(028) 2212 9509</p>
            <p><i class="fas fa-envelope mr-2 text-ttt-orange"></i>vpthongtruongthinh@gmail.com</p>
        </div>
        <div class="w-full h-px bg-gray-800 mb-6"></div>
        <p class="text-xs text-gray-600">© 2025 TTT M&E. All Rights Reserved.</p>
    </div>`;

    const footerEl = document.getElementById('global-footer');
    if (footerEl) {
        footerEl.className = "bg-gray-900 text-gray-300 py-12 border-t border-gray-800";
        footerEl.innerHTML = footerHTML;
    }
}

function highlightCurrentPage() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll('.nav-item');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('text-ttt-blue', 'font-bold', '!border-ttt-blue');
        }
    });
}