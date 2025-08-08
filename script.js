// Translation system
const translations = {
    es: {
        // Navigation
        'nav-home': 'Inicio',
        'nav-about': 'Acerca de',
        'nav-amenities': 'Comodidades',
        'nav-destinations': 'Destinos',
        'nav-booking': 'Reservar',
        'nav-contact': 'Contacto',
        
        // Hero Section
        'hero-title': 'Libecciu Charters',
        'hero-subtitle': 'Experimenta el Caribe como nunca antes a bordo de nuestro lujoso catamarán Leopard de 40 pies',
        'btn-book-charter': 'Reservar tu Charter',
        'btn-learn-more': 'Saber Más',
        
        // About Section
        'about-title': 'Acerca de Libecciu',
        'about-description': 'Libecciu es un catamarán Leopard de 40 pies diseñado tanto para la comodidad como para la aventura. Esta espaciosa embarcación cuenta con 4 cabinas, 2 baños, amplias cubiertas, áreas de descanso sombreadas y un viaje suave ideal para saltar entre islas o estadías más largas.',
        'offerings-title': 'Nuestras Ofertas',
        'daily-charters': 'Charters Diarios',
        'daily-charters-desc': 'Explora las Islas del Rosario, Cholón y San Bernardo con servicio completo a bordo.',
        'weekly-charters': 'Charters Semanales',
        'weekly-charters-desc': '¡Próximamente! Experiencias extendidas con itinerarios personalizados y menús exclusivos a bordo.',
        'about-conclusion': 'Ya sea que estés planeando una escapada de un día o una semana completa en las aguas del Caribe, Libecciu está listo para ofrecer una experiencia de charter de clase mundial.',
        
        // Why Charter With Us
        'why-charter-title': '¿Por qué Charter con Nosotros?',
        'why-charter-subtitle': 'Experimenta Cartagena en lujo y estilo sin igual',
        'unforgettable-experience': 'EXPERIENCIA INOLVIDABLE',
        'unforgettable-experience-desc': 'Disfruta de una comodidad y aventura sin igual a bordo de nuestras increíbles embarcaciones.',
        'professional-crew': 'TRIPULACIÓN PROFESIONAL',
        'professional-crew-desc': 'Relájate y deja que nuestros capitanes y tripulación con experiencia y con licencia manejen la navegación, mientras te enfocas en crear recuerdos duraderos.',
        'discover-new-places': 'DESCUBRE NUEVOS LUGARES',
        'discover-new-places-desc': 'Navega hacia el paraíso y descubre un mundo de comodidad, aventura y posibilidades infinitas.',
        
        // Why Visit Cartagena
        'why-visit-title': '¿Por qué Visitar Cartagena?',
        'why-visit-desc1': 'Cartagena, Colombia, es una ciudad cautivadora ubicada en la costa caribeña del país. Cuenta con una rica historia, arquitectura impresionante, playas prístinas y una cultura vibrante, lo que la convierte en un destino turístico popular.',
        'why-visit-desc2': 'El centro histórico de Cartagena es un Sitio del Patrimonio Mundial de la UNESCO y es una visita obligada para cualquier visitante. La ciudad está rodeada por una enorme muralla de piedra, que fue construida para proteger la ciudad de los piratas. Dentro de las murallas, encontrarás encantadoras calles empedradas, coloridos edificios coloniales y hermosas plazas.',
        'why-visit-desc3': 'Es el hogar de algunas de las playas más hermosas de Colombia. Toma un viaje de un día a Playa Blanca o Barú, donde puedes relajarte en la arena, nadar en las aguas turquesas y absorber el sol caribeño.',
        'why-visit-desc4': 'Las aguas alrededor de Cartagena albergan una variedad de vida marina, lo que la convierte en un excelente lugar para buceo y snorkel. Explora arrecifes de coral, naufragios y peces coloridos.',
        
        // Crew Section
        'crew-title': 'Tripulación y Equipo a Bordo',
        'captain': 'Nuestro Capitán',
        'crew-members': 'Miembros de la Tripulación',
        'chef': 'Chef',
        
        // Amenities Section
        'amenities-title': 'Comodidades',
        'accommodations': 'Alojamiento',
        'entertainment': 'Entretenimiento y Conectividad',
        'kitchen-dining': 'Cocina y Comedor',
        'bedrooms': '2 Dormitorios',
        'bathrooms': '2 Baños',
        'showers': '2 Duchas',
        'air-conditioning': 'Aire Acondicionado',
        'sun-deck': 'Cubierta de Sol',
        'sound-system': 'Sistema de Sonido Completo',
        'wifi': 'Wi-Fi',
        'gas-stove': 'Estufa de Gas',
        'gas-grill': 'Parrilla de Gas',
        'microwave': 'Microondas',
        'coffee-maker': 'Cafetera',
        'toaster': 'Tostadora',
        
        // Carousel Captions
        'carousel-kitchen-title': 'Cocina Totalmente Equipada',
        'carousel-kitchen-desc': 'Instalaciones de cocina completas con estufa de gas, microondas y todos los elementos esenciales',
        'carousel-mainroom-title': 'Área de Living Principal',
        'carousel-mainroom-desc': 'Espacioso salón cómodo con ventanas panorámicas',
        'carousel-cabinroom-title': 'Cabina Privada',
        'carousel-cabinroom-desc': 'Quarters de dormir cómodos con ropa de cama premium',
        'carousel-bathroom-title': 'Baño Moderno',
        'carousel-bathroom-desc': 'Instalaciones limpias y modernas con agua caliente y ducha',
        'carousel-boatdeck-title': 'Área de Cubierta',
        'carousel-boatdeck-desc': 'Espacio de cubierta abierta perfecto para tomar el sol y relajarse',
        'carousel-cabinbathroom-title': 'Baño de Cabina',
        'carousel-cabinbathroom-desc': 'Instalaciones de baño adicionales para la conveniencia de los huéspedes',
        
        // Included Section
        'included-title': 'Incluido con tu Charter',
        'ice': '4 Bolsas Grandes de Hielo',
        'breakfast': 'Desayuno',
        'water': '2 Paquetes de Agua (48 botellas)',
        'sodas': '2 Gaseosas por persona',
        'beers': '2 Cervezas por persona',
        'fruit-tray': '1 Bandeja de Frutas Frescas',
        'snorkeling-gear': 'Equipo de Snorkel',
        
        // Schedule Section
        'schedule-title': 'Horario',
        'start-time': 'Hora de Inicio',
        'return-time': 'Hora de Regreso',
        'capacity': 'Capacidad',
        'start-time-value': '7:00 AM',
        'return-time-value': '5:00 PM',
        'capacity-value': 'Hasta 12 invitados',
        
        // Destinations Section
        'destinations-title': 'Nuestros Destinos',
        'rosario-islands': 'Islas del Rosario',
        'rosario-desc': 'Aguas cristalinas y playas prístinas perfectas para snorkel y relajación.',
        'cholon': 'Cholón',
        'cholon-desc': 'La capital de la fiesta del Caribe con ambiente vibrante y paisajes impresionantes.',
        'san-bernardo': 'Islas de San Bernardo',
        'san-bernardo-desc': 'Paraíso virgen que ofrece tranquilidad y belleza natural lejos de las multitudes.',
        
        // Services Section
        'services-title': 'Servicios de Charter y Complementos',
        'gourmet-lunch': 'Almuerzo Gourmet',
        'gourmet-lunch-desc': 'Mariscos frescos, especialidades locales y cocina internacional preparada por nuestro chef a bordo',
        'gourmet-lunch-price': '$40 por persona',
        'premium-beverages': 'Bebidas Premium',
        'premium-beverages-desc': 'Actualiza a cócteles premium, vinos finos y cervezas artesanales más allá de nuestra selección estándar',
        'premium-beverages-price': '$35 por persona',
        'water-sports': 'Paquete de Deportes Acuáticos',
        'water-sports-desc': 'Kayak, paddleboarding y equipo adicional de snorkel para la aventura definitiva',
        'water-sports-price': '$25 por persona',
        'music-entertainment': 'Música y Entretenimiento',
        'music-entertainment-desc': 'Configuración profesional de sistema de sonido con listas de reproducción curadas y música acústica en vivo opcional',
        'music-entertainment-price': '$100 tarifa fija',
        'private-chef': 'Experiencia de Chef Privado',
        'private-chef-desc': 'Servicio de chef dedicado con planificación de menú personalizado y demostraciones de cocina en vivo',
        'private-chef-price': '$200 tarifa fija',
        'special-events': 'Eventos Especiales',
        'special-events-desc': 'Fiestas de cumpleaños, aniversarios, propuestas y eventos corporativos con decoraciones personalizadas',
        'special-events-price': 'Precio personalizado',
        
        // Booking Section
        'booking-title': 'Reserva tu Experiencia de Charter',
        'full-name': 'Nombre Completo *',
        'email': 'Correo Electrónico *',
        'phone': 'Teléfono *',
        'preferred-date': 'Fecha Preferida *',
        'number-guests': 'Número de Invitados *',
        'select-guests': 'Seleccionar invitados',
        'charter-type': 'Tipo de Charter *',
        'select-charter-type': 'Seleccionar tipo de charter',
        'daily-charter': 'Charter Diario',
        'weekly-charter': 'Charter Semanal (Próximamente)',
        'special-requests': 'Solicitudes Especiales',
        'special-requests-placeholder': '¿Alguna solicitud especial u ocasiones que deberíamos conocer?',
        'request-booking': 'Solicitar Reserva',
        'pricing-info': 'Información de Precios',
        'daily-charter-price': 'Charter Diario: Desde $800 USD',
        'weekly-charter-price': 'Charter Semanal: Precio personalizado disponible',
        'pricing-note': 'El precio final depende del tamaño del grupo, fecha y requisitos específicos. Proporcionaremos una cotización detallada después de tu consulta.',
        'payment-options': 'Opciones de Pago',
        'credit-cards': 'Tarjetas de Crédito',
        'bank-transfer': 'Transferencia Bancaria',
        'cash': 'Efectivo',
        
        // Contact Section
        'contact-title': 'Contáctanos',
        'email-label': 'Correo Electrónico',
        'instagram-label': 'Instagram',
        'location-label': 'Ubicación',
        'location-value': 'Cartagena, Colombia',
        
        // Footer
        'footer-copyright': '© 2024 Libecciu Charters. Todos los derechos reservados.',
        
        // Form options
        'guest-1': '1 Invitado',
        'guest-2': '2 Invitados',
        'guest-3': '3 Invitados',
        'guest-4': '4 Invitados',
        'guest-5': '5 Invitados',
        'guest-6': '6 Invitados',
        'guest-7': '7 Invitados',
        'guest-8': '8 Invitados',
        'guest-9': '9 Invitados',
        'guest-10': '10 Invitados',
        'guest-11': '11 Invitados',
        'guest-12': '12 Invitados'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-amenities': 'Amenities',
        'nav-destinations': 'Destinations',
        'nav-booking': 'Book Now',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Libecciu Charters',
        'hero-subtitle': 'Experience the Caribbean like never before aboard our luxury 40\' Leopard Catamaran',
        'btn-book-charter': 'Book Your Charter',
        'btn-learn-more': 'Learn More',
        
        // About Section
        'about-title': 'About Libecciu',
        'about-description': 'Libecciu is a 40\' Leopard Catamaran designed for both comfort and adventure. This spacious vessel features 4 cabins, 2 bathrooms, wide decks, shaded lounging areas, and a smooth ride ideal for island hopping or longer stays.',
        'offerings-title': 'Our Offerings',
        'daily-charters': 'Daily Charters',
        'daily-charters-desc': 'Explore the Rosario Islands, Cholón, and San Bernardo with full service onboard.',
        'weekly-charters': 'Weekly Charters',
        'weekly-charters-desc': 'Coming soon! Extended experiences with customized itineraries and exclusive onboard menus.',
        'about-conclusion': 'Whether you\'re planning a one-day escape or a full week on the Caribbean waters, Libecciu is ready to deliver a world-class charter experience.',
        
        // Why Charter With Us
        'why-charter-title': 'Why Charter With Us?',
        'why-charter-subtitle': 'Experience Cartagena in unparalleled luxury and style',
        'unforgettable-experience': 'UNFORGETTABLE EXPERIENCE',
        'unforgettable-experience-desc': 'Indulge in unparalleled comfort and adventure aboard our amazing vessels.',
        'professional-crew': 'PROFESSIONAL CREW',
        'professional-crew-desc': 'Relax and let our experienced and licensed captains and crew handle the navigation, while you focus on creating lasting memories.',
        'discover-new-places': 'DISCOVER NEW PLACES',
        'discover-new-places-desc': 'Set sail for paradise and discover a world of comfort, adventure, and endless possibilities.',
        
        // Why Visit Cartagena
        'why-visit-title': 'Why Visit Cartagena?',
        'why-visit-desc1': 'Cartagena, Colombia, is a captivating city located on the country\'s Caribbean coast. It boasts a rich history, stunning architecture, pristine beaches, and a vibrant culture, making it a popular tourist destination.',
        'why-visit-desc2': 'Cartagena\'s historic center is a UNESCO World Heritage Site and is a must-see for any visitor. The city is surrounded by a massive stone wall, which was built to protect the city from pirates. Inside the walls, you\'ll find charming cobblestone streets, colorful colonial buildings, and beautiful plazas.',
        'why-visit-desc3': 'It is home to some of Colombia\'s most beautiful beaches. Take a day trip to Playa Blanca or Baru, where you can relax on the sand, swim in the turquoise waters, and soak up the Caribbean sun.',
        'why-visit-desc4': 'The waters around Cartagena are home to a variety of marine life, making it a great place for scuba diving and snorkeling. Explore coral reefs, shipwrecks, and colorful fish.',
        
        // Crew Section
        'crew-title': 'Crew & Onboard Team',
        'captain': 'Our Captain',
        'crew-members': 'Crew Members',
        'chef': 'Chef',
        
        // Amenities Section
        'amenities-title': 'Amenities',
        'accommodations': 'Accommodations',
        'entertainment': 'Entertainment & Connectivity',
        'kitchen-dining': 'Kitchen & Dining',
        'bedrooms': '2 Bedrooms',
        'bathrooms': '2 Bathrooms',
        'showers': '2 Showers',
        'air-conditioning': 'Air Conditioning',
        'sun-deck': 'Sun Deck',
        'sound-system': 'Full Sound System',
        'wifi': 'Wi-Fi',
        'gas-stove': 'Gas Stove',
        'gas-grill': 'Gas Grill',
        'microwave': 'Microwave',
        'coffee-maker': 'Coffee Maker',
        'toaster': 'Toaster',
        
        // Carousel Captions
        'carousel-kitchen-title': 'Fully Equipped Kitchen',
        'carousel-kitchen-desc': 'Complete kitchen facilities with gas stove, microwave and all essential elements',
        'carousel-mainroom-title': 'Main Living Area',
        'carousel-mainroom-desc': 'Spacious comfortable salon with panoramic windows',
        'carousel-cabinroom-title': 'Private Cabin',
        'carousel-cabinroom-desc': 'Comfortable sleeping quarters with premium bedding',
        'carousel-bathroom-title': 'Modern Bathroom',
        'carousel-bathroom-desc': 'Clean and modern facilities with hot water and shower',
        'carousel-boatdeck-title': 'Deck Area',
        'carousel-boatdeck-desc': 'Open deck space perfect for sunbathing and relaxation',
        'carousel-cabinbathroom-title': 'Cabin Bathroom',
        'carousel-cabinbathroom-desc': 'Additional bathroom facilities for guest convenience',
        
        // Included Section
        'included-title': 'Included with Your Charter',
        'ice': '4 Large Bags of Ice',
        'breakfast': 'Breakfast',
        'water': '2 Packs of Water (48 bottles)',
        'sodas': '2 Sodas per person',
        'beers': '2 Beers per person',
        'fruit-tray': '1 Fresh Fruit Tray',
        'snorkeling-gear': 'Snorkeling Gear',
        
        // Schedule Section
        'schedule-title': 'Schedule',
        'start-time': 'Start Time',
        'return-time': 'Return Time',
        'capacity': 'Capacity',
        'start-time-value': '7:00 AM',
        'return-time-value': '5:00 PM',
        'capacity-value': 'Up to 12 guests',
        
        // Destinations Section
        'destinations-title': 'Our Destinations',
        'rosario-islands': 'Rosario Islands',
        'rosario-desc': 'Crystal clear waters and pristine beaches perfect for snorkeling and relaxation.',
        'cholon': 'Cholón',
        'cholon-desc': 'The party capital of the Caribbean with vibrant atmosphere and stunning scenery.',
        'san-bernardo': 'San Bernardo Islands',
        'san-bernardo-desc': 'Unspoiled paradise offering tranquility and natural beauty away from the crowds.',
        
        // Services Section
        'services-title': 'Charter Services & Add-Ons',
        'gourmet-lunch': 'Gourmet Lunch',
        'gourmet-lunch-desc': 'Fresh seafood, local specialties, and international cuisine prepared by our onboard chef',
        'gourmet-lunch-price': '$40 per person',
        'premium-beverages': 'Premium Beverages',
        'premium-beverages-desc': 'Upgrade to premium cocktails, fine wines, and craft beers beyond our standard selection',
        'premium-beverages-price': '$35 per person',
        'water-sports': 'Water Sports Package',
        'water-sports-desc': 'Kayaking, paddleboarding, and additional snorkeling equipment for the ultimate adventure',
        'water-sports-price': '$25 per person',
        'music-entertainment': 'Music & Entertainment',
        'music-entertainment-desc': 'Professional sound system setup with curated playlists and optional live acoustic music',
        'music-entertainment-price': '$100 flat rate',
        'private-chef': 'Private Chef Experience',
        'private-chef-desc': 'Dedicated chef service with custom menu planning and live cooking demonstrations',
        'private-chef-price': '$200 flat rate',
        'special-events': 'Special Events',
        'special-events-desc': 'Birthday parties, anniversaries, proposals, and corporate events with custom decorations',
        'special-events-price': 'Custom pricing',
        
        // Booking Section
        'booking-title': 'Book Your Charter Experience',
        'full-name': 'Full Name *',
        'email': 'Email *',
        'phone': 'Phone *',
        'preferred-date': 'Preferred Date *',
        'number-guests': 'Number of Guests *',
        'select-guests': 'Select guests',
        'charter-type': 'Charter Type *',
        'select-charter-type': 'Select charter type',
        'daily-charter': 'Daily Charter',
        'weekly-charter': 'Weekly Charter (Coming Soon)',
        'special-requests': 'Special Requests',
        'special-requests-placeholder': 'Any special requests or occasions we should know about?',
        'request-booking': 'Request Booking',
        'pricing-info': 'Pricing Information',
        'daily-charter-price': 'Daily Charter: Starting at $800 USD',
        'weekly-charter-price': 'Weekly Charter: Custom pricing available',
        'pricing-note': 'Final pricing depends on group size, date, and specific requirements. We\'ll provide a detailed quote after your inquiry.',
        'payment-options': 'Payment Options',
        'credit-cards': 'Credit Cards',
        'bank-transfer': 'Bank Transfer',
        'cash': 'Cash',
        
        // Contact Section
        'contact-title': 'Contact Us',
        'email-label': 'Email',
        'instagram-label': 'Instagram',
        'location-label': 'Location',
        'location-value': 'Cartagena, Colombia',
        
        // Footer
        'footer-copyright': '© 2024 Libecciu Charters. All rights reserved.',
        
        // Form options
        'guest-1': '1 Guest',
        'guest-2': '2 Guests',
        'guest-3': '3 Guests',
        'guest-4': '4 Guests',
        'guest-5': '5 Guests',
        'guest-6': '6 Guests',
        'guest-7': '7 Guests',
        'guest-8': '8 Guests',
        'guest-9': '9 Guests',
        'guest-10': '10 Guests',
        'guest-11': '11 Guests',
        'guest-12': '12 Guests'
    }
};

let currentLanguage = 'es'; // Default to Spanish

// Translation function
function translatePage(language) {
    currentLanguage = language;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[language][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[language][key];
            } else {
                element.textContent = translations[language][key];
            }
        }
    });
    
    // Update language toggle buttons
    document.querySelectorAll('.floating-lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === language) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
    
    // Store language preference
    localStorage.setItem('preferred-language', language);
}

// Initialize language system
function initLanguageSystem() {
    // Set default language to Spanish
    translatePage('es');
    
    // Add event listeners to floating language toggle buttons
    document.querySelectorAll('.floating-lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const language = this.getAttribute('data-lang');
            translatePage(language);
        });
    });
}

// Preload all content for immediate loading
function preloadContent() {
    // Immediately show all content after initial load
    const allContent = document.querySelectorAll('section');
    allContent.forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0) scale(1)';
    });
    
    // Preload all images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language system
    initLanguageSystem();
    
    // Preload all content for immediate loading
    preloadContent();
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // Form handling with enhanced booking functionality
    const bookingForm = document.getElementById('charter-booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(bookingForm);
            const bookingData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                date: formData.get('date'),
                guests: formData.get('guests'),
                charterType: formData.get('charter-type'),
                specialRequests: formData.get('special-requests')
            };

            // Basic form validation
            if (!bookingData.name || !bookingData.email || !bookingData.phone || 
                !bookingData.date || !bookingData.guests || !bookingData.charterType) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(bookingData.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Date validation (must be in the future)
            const selectedDate = new Date(bookingData.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate <= today) {
                showNotification('Please select a future date for your charter.', 'error');
                return;
            }

            // Calculate estimated pricing
            const pricing = calculatePricing(bookingData.guests, bookingData.charterType);
            
            // Show booking summary modal
            showBookingSummary(bookingData, pricing);
        });
    }

    // Amenities Carousel
    initCarousel();

    // Optimized Animation on scroll - Immediate loading
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                
                // Immediate animation for child elements - no delays
                const animatedChildren = entry.target.querySelectorAll('.animate-child');
                animatedChildren.forEach((child) => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0) scale(1)';
                });
            }
        });
    }, observerOptions);

    // Optimized animation for immediate loading - No delays
    const animatedElements = document.querySelectorAll(`
        .amenity-category, .destination-card, .included-item, .crew-item, 
        .why-charter-item, .service-card, .contact-item, .schedule-item,
        .about-content, .why-visit-content, .booking-content,
        .hero-title, .hero-subtitle, .hero-buttons,
        .about h2, .amenities h2, .destinations h2, .booking h2, 
        .why-charter h2, .crew h2, .included h2, .schedule h2, .contact h2,
        .about-logo img, .about-images img, .destination-image img,
        .service-image img, .why-visit-image img
    `);

    animatedElements.forEach((el) => {
        // Set initial state for immediate loading
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px) scale(0.98)';
        el.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        
        // No staggered delays - immediate loading
        el.style.transitionDelay = '0s';
        
        observer.observe(el);
    });
});

// Pricing calculator
function calculatePricing(guests, charterType) {
    const basePrice = charterType === 'daily' ? 800 : 4500; // Daily vs Weekly base price
    const guestCount = parseInt(guests);
    
    // Price adjustments based on group size
    let finalPrice = basePrice;
    if (guestCount <= 4) {
        finalPrice = basePrice;
    } else if (guestCount <= 8) {
        finalPrice = basePrice + (basePrice * 0.2); // 20% increase
    } else {
        finalPrice = basePrice + (basePrice * 0.35); // 35% increase for larger groups
    }

    return {
        basePrice: basePrice,
        finalPrice: Math.round(finalPrice),
        currency: 'USD',
        guests: guestCount,
        type: charterType
    };
}

// Show booking summary modal
function showBookingSummary(bookingData, pricing) {
    const modal = createBookingModal(bookingData, pricing);
    document.body.appendChild(modal);
    
    // Animate modal in
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Create booking summary modal
function createBookingModal(bookingData, pricing) {
    const modal = document.createElement('div');
    modal.className = 'booking-modal';
    modal.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>Booking Summary</h3>
                <button class="close-modal" aria-label="Close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="booking-details">
                    <h4>Charter Details</h4>
                    <div class="detail-row">
                        <span>Name:</span>
                        <span>${bookingData.name}</span>
                    </div>
                    <div class="detail-row">
                        <span>Email:</span>
                        <span>${bookingData.email}</span>
                    </div>
                    <div class="detail-row">
                        <span>Phone:</span>
                        <span>${bookingData.phone}</span>
                    </div>
                    <div class="detail-row">
                        <span>Date:</span>
                        <span>${new Date(bookingData.date).toLocaleDateString()}</span>
                    </div>
                    <div class="detail-row">
                        <span>Guests:</span>
                        <span>${bookingData.guests} people</span>
                    </div>
                    <div class="detail-row">
                        <span>Charter Type:</span>
                        <span>${bookingData.charterType === 'daily' ? 'Daily Charter' : 'Weekly Charter'}</span>
                    </div>
                    ${bookingData.specialRequests ? `
                    <div class="detail-row">
                        <span>Special Requests:</span>
                        <span>${bookingData.specialRequests}</span>
                    </div>
                    ` : ''}
                </div>
                
                <div class="pricing-summary">
                    <h4>Estimated Pricing</h4>
                    <div class="price-row">
                        <span>Base Price (${pricing.guests} guests):</span>
                        <span>$${pricing.finalPrice} ${pricing.currency}</span>
                    </div>
                    <div class="price-note">
                        <small>*Final pricing may vary based on specific requirements and availability. This is an estimate for planning purposes.</small>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary close-modal">Review Details</button>
                <button class="btn btn-primary" onclick="proceedToPayment()">Proceed to Payment</button>
            </div>
        </div>
    `;

    // Add modal styles
    const modalStyles = `
        <style>
            .booking-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 10000;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .booking-modal.show {
                opacity: 1;
                visibility: visible;
            }
            
            .modal-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.7);
                backdrop-filter: blur(5px);
            }
            
            .modal-content {
                position: relative;
                max-width: 600px;
                margin: 50px auto;
                background: white;
                border-radius: 20px;
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
                max-height: 80vh;
                overflow-y: auto;
                transform: translateY(30px);
                transition: transform 0.3s ease;
            }
            
            .booking-modal.show .modal-content {
                transform: translateY(0);
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 30px 30px 20px;
                border-bottom: 1px solid #eee;
            }
            
            .modal-header h3 {
                margin: 0;
                color: #2c3e50;
                font-size: 1.8rem;
                font-weight: 600;
            }
            
            .close-modal {
                background: none;
                border: none;
                font-size: 2rem;
                color: #95a5a6;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.3s ease;
            }
            
            .close-modal:hover {
                background: #f8f9fa;
                color: #2c3e50;
            }
            
            .modal-body {
                padding: 30px;
            }
            
            .booking-details, .pricing-summary {
                margin-bottom: 30px;
            }
            
            .booking-details h4, .pricing-summary h4 {
                color: #2c3e50;
                margin-bottom: 20px;
                font-size: 1.3rem;
                font-weight: 600;
                border-bottom: 2px solid #3498db;
                padding-bottom: 10px;
            }
            
            .detail-row, .price-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
                border-bottom: 1px solid #f8f9fa;
            }
            
            .detail-row span:first-child, .price-row span:first-child {
                font-weight: 600;
                color: #7f8c8d;
            }
            
            .detail-row span:last-child, .price-row span:last-child {
                color: #2c3e50;
                font-weight: 500;
            }
            
            .price-row span:last-child {
                font-size: 1.2rem;
                font-weight: 700;
                color: #27ae60;
            }
            
            .price-note {
                margin-top: 15px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 10px;
                border-left: 4px solid #f39c12;
            }
            
            .price-note small {
                color: #7f8c8d;
                font-style: italic;
            }
            
            .modal-footer {
                padding: 20px 30px 30px;
                display: flex;
                gap: 15px;
                justify-content: flex-end;
                border-top: 1px solid #eee;
            }
            
            @media (max-width: 768px) {
                .modal-content {
                    margin: 20px;
                    max-height: 90vh;
                }
                
                .modal-header, .modal-body, .modal-footer {
                    padding: 20px;
                }
                
                .modal-footer {
                    flex-direction: column;
                }
                
                .modal-footer .btn {
                    width: 100%;
                }
            }
        </style>
    `;

    document.head.insertAdjacentHTML('beforeend', modalStyles);

    // Add event listeners
    modal.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-backdrop') || e.target.classList.contains('close-modal')) {
            closeModal(modal);
        }
    });

    return modal;
}

// Close modal function
function closeModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
}

// Proceed to payment function
function proceedToPayment() {
    showNotification('Redirecting to secure payment gateway...', 'success');
    
    // In a real implementation, this would integrate with a payment processor
    // For now, we'll simulate the process and send an email inquiry
    setTimeout(() => {
        const modal = document.querySelector('.booking-modal');
        if (modal) {
            closeModal(modal);
        }
        
        // Create email with booking details
        const subject = encodeURIComponent('Charter Booking Request - Libecciu Charter');
        const body = encodeURIComponent(`Hello Libecciu Charter Team,

I would like to book a charter with the following details:

Name: ${document.getElementById('name').value}
Email: ${document.getElementById('email').value}
Phone: ${document.getElementById('phone').value}
Preferred Date: ${document.getElementById('date').value}
Number of Guests: ${document.getElementById('guests').value}
Charter Type: ${document.getElementById('charter-type').value}
Special Requests: ${document.getElementById('special-requests').value || 'None'}

Please contact me to confirm availability and provide payment details.

Best regards,
${document.getElementById('name').value}`);

        window.location.href = `mailto:libecciucharter@gmail.com?subject=${subject}&body=${body}`;
        
        showNotification('Your booking request has been prepared. Please send the email to complete your reservation.', 'info');
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Close">&times;</button>
        </div>
    `;

    // Add notification styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const notificationStyles = `
            <style id="notification-styles">
                .notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    z-index: 10001;
                    max-width: 400px;
                    min-width: 300px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                    transform: translateX(100%);
                    transition: all 0.3s ease;
                    border-left: 4px solid;
                }
                
                .notification.show {
                    transform: translateX(0);
                }
                
                .notification-success {
                    border-left-color: #27ae60;
                }
                
                .notification-error {
                    border-left-color: #e74c3c;
                }
                
                .notification-info {
                    border-left-color: #3498db;
                }
                
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 16px 20px;
                }
                
                .notification-icon {
                    font-size: 1.2rem;
                }
                
                .notification-message {
                    flex: 1;
                    color: #2c3e50;
                    font-weight: 500;
                }
                
                .notification-close {
                    background: none;
                    border: none;
                    color: #95a5a6;
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }
                
                .notification-close:hover {
                    background: #f8f9fa;
                    color: #2c3e50;
                }
                
                @media (max-width: 768px) {
                    .notification {
                        right: 10px;
                        left: 10px;
                        max-width: none;
                        min-width: none;
                    }
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', notificationStyles);
    }

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Auto-hide after 5 seconds
    const hideTimeout = setTimeout(() => {
        hideNotification(notification);
    }, 5000);

    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        clearTimeout(hideTimeout);
        hideNotification(notification);
    });
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return '✓';
        case 'error': return '✗';
        case 'info': return 'ℹ';
        default: return 'ℹ';
    }
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            document.body.removeChild(notification);
        }
    }, 300);
}

// Enhanced image loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {        
        if (img.complete && img.naturalHeight !== 0) {
            // Image is already loaded
            img.classList.add('loaded');
        } else {
            // Image hasn't loaded yet
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
            img.addEventListener('error', () => {
                // Even on error, show the image at reduced opacity
                img.style.opacity = '0.3';
                console.log('Failed to load image:', img.src);
            });
        }
    });
});

// Carousel functionality
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (!track || !slides.length) return;
    
    let currentSlide = 0;
    let autoSlideInterval;
    
    // Update carousel position
    function updateCarousel() {
        const slideWidth = 100; // Each slide is 100% width
        track.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        
        // Update active states
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Go to specific slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        updateCarousel();
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Auto slide - Faster for better user experience
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
    
    if (prevBtn) prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoSlide();
            goToSlide(index);
            startAutoSlide();
        });
    });
    
    // Touch/swipe support
    let startX = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        stopAutoSlide();
    });
    
    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
    });
    
    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        
        startAutoSlide();
    });
    
    // Mouse drag support
    track.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        isDragging = true;
        stopAutoSlide();
        track.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
    });
    
    document.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        track.style.cursor = 'grab';
        
        const endX = e.clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        
        startAutoSlide();
    });
    
    // Pause auto-slide on hover
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        } else if (e.key === 'ArrowRight') {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        }
    });
    
    // Initialize - Immediate loading
    updateCarousel();
    // Start auto slide with shorter interval for faster feel
    setTimeout(() => {
        startAutoSlide();
    }, 100);
}