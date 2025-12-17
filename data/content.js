/* data/content.js */

const websiteData = {
    // 1. CẤU HÌNH GỬI MAIL (EmailJS)
    // vào trang https://www.emailjs.com/ tạo tài khoản free để lấy các mã này điền vào đây nếu muốn gửi mail thật
    emailConfig: {
        publicKey: "YOUR_PUBLIC_KEY", // Điền Public Key vào đây
        serviceID: "YOUR_SERVICE_ID", // Điền Service ID vào đây
        templateID: "YOUR_TEMPLATE_ID" // Điền Template ID vào đây
    },

    // 2. THÔNG TIN CÔNG TY
    companyInfo: {
        name: "CÔNG TY TNHH CƠ ĐIỆN THÔNG TRƯỜNG THỊNH",
        shortName: "Thông Trường Thịnh",
        slogan: "Kiến tạo giá trị bền vững từ hệ thống cơ điện toàn diện",
        hotline: "0938 960 345", 
        phone: "(028) 2212 9509",
        email: "vpthongtruongthinh@gmail.com", 
        address: "24/7 ấp 3, Xã Xuân Thới Thượng, Huyện Hóc Môn, TP.HCM",
        // Mã nhúng Google Map (Đã lấy toạ độ theo địa chỉ Hóc Môn)
        googleMapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.063548232675!2d106.59604531474987!3d10.882823992249215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a5c6d3b0a3b%3A0x4a0a0a0a0a0a0a0a!2zWHXDom4gVGjhu5tpIFRoxrDhu6NuZywgSMOzYyBNw7RuLCBIbyBDaGkgTWluaCBDaXR5!5e0!3m2!1sen!2svn!4v1620000000000!5m2!1sen!2svn" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },

    // 3. MÀU SẮC CHỦ ĐẠO
    theme: {
        primaryColor: "#003366", 
        accentColor: "#FFCD00", 
    },

    // 4. TRANG CHỦ (HERO)
    hero: {
        headline: "KIẾN TẠO GIÁ TRỊ BỀN VỮNG TỪ HỆ THỐNG CƠ ĐIỆN",
        subHeadline: "Thông Trường Thịnh - Uy tín - Chất lượng - Vững bước tương lai.",
        bgImages: [
            "assets/img/hero-bg-1.jpg", 
            "assets/img/hero-bg-2.jpg", 
            "assets/img/hero-bg-3.jpg"
        ],
        btnText: "XEM DỰ ÁN"
    },

    // 5. DỊCH VỤ
    services: [
        {
            id: 1,
            title: "Hệ Thống Điện (Electrical)",
            desc: "Thi công trạm biến áp, tủ điện MSB, hệ thống điện động lực, chiếu sáng và Điện nhẹ (ELV: Camera, BMS, Data) cho cao ốc & nhà xưởng.",
            icon: "fas fa-bolt" 
        },
        {
            id: 2,
            title: "Điều Hòa & Thông Gió (HVAC)",
            desc: "Lắp đặt hệ thống Chiller/VRV trung tâm, hệ thống ống gió, tạo áp cầu thang và hút khói hành lang đảm bảo quy chuẩn thông khí.",
            icon: "fas fa-fan" 
        },
        {
            id: 3,
            title: "Cấp Thoát Nước (P&S)",
            desc: "Thi công hệ thống cấp nước nóng/lạnh trung tâm (Heatpump), xử lý nước thải và lắp đặt thiết bị vệ sinh cao cấp (Sanitary Wares).",
            icon: "fas fa-faucet" 
        },
        {
            id: 4,
            title: "PCCC & Báo Cháy",
            desc: "Triển khai hệ thống báo cháy địa chỉ, chữa cháy tự động (Sprinkler/Drencher), vách tường. Hỗ trợ thẩm duyệt và nghiệm thu PCCC.",
            icon: "fas fa-fire-extinguisher" 
        }
    ],

    // 6. DỰ ÁN TIÊU BIỂU (Dữ liệu lấy từ web cũ)
    projects: [
        {
            name: "SAIGON CENTRE",
            location: "Quận 1, TP.HCM",
            role: "Cung cấp vật tư và Thi công hệ thống M&E",
            investor: "Keppel Land",
            image: "assets/img/projects/saigon-centre.jpg",
            category: "Thương Mại"
        },
        {
            name: "EMPIRE CITY",
            location: "Thủ Thiêm, TP.HCM",
            role: "Thi công M&E, Thiết bị vệ sinh, Thiết bị bếp",
            investor: "Keppel Land",
            image: "assets/img/projects/empire-city.jpg",
            category: "Căn Hộ"
        },
        {
            name: "ALMA RESORT",
            location: "Cam Ranh, Khánh Hòa",
            role: "Cung cấp vật tư và thi công Hệ thống M&E, lắp đặt thiết bị vệ sinh",
            investor: "Paradise Bay Resort",
            image: "assets/img/projects/alma-resort.jpg",
            category: "Nghỉ Dưỡng"
        },
        {
            name: "BV ĐA KHOA TÂM ANH",
            location: "Tân Bình, TP.HCM",
            role: "Hệ thống cơ điện y tế",
            investor: "Tâm Anh Hospital",
            image: "assets/img/projects/tam-anh.jpg",
            category: "Y Tế"
        }
    ],

    // 7. ĐỐI TÁC
    partners: [
        { name: "Keppel Land", logo: "assets/img/partners/keppel-land.png" },
        { name: "Hòa Bình Corp", logo: "assets/img/partners/hoa-binh.png" },
        { name: "Visicons", logo: "assets/img/partners/Visicons.png" },
        { name: "Coteccons", logo: "assets/img/partners/Coteccons.png" },
        { name: "Alma Resort", logo: "assets/img/partners/alma.png" },
        { name: "Cityland", logo: "assets/img/partners/Cityland.png" },
        { name: "Central", logo: "assets/img/partners/Central.png" },
        { name: "Tâm Anh", logo: "assets/img/partners/tam-anh.png" },
        { name: "Tiến Phước", logo: "assets/img/partners/tien-phuoc.png" }
    ]
    
};