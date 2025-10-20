// All 55 social service resources
const resources = [
    // Government (6)
    { id: 1, name: 'Adam C. Powell Jr. State Office Building', address: '163 W 125th St', category: 'government', lat: 40.8089, lng: -73.9476 },
    { id: 2, name: 'Social Security - 126th Street', address: '302 W 126th St, 4th Floor', category: 'government', lat: 40.8104, lng: -73.9527 },
    { id: 3, name: 'Social Security - 102nd Street', address: '345 E 102nd St, 4th Floor', category: 'government', lat: 40.7897, lng: -73.9421 },
    { id: 4, name: 'HRA - 125th Street', address: '132 W 125th St, #2', category: 'government', lat: 40.8086, lng: -73.9457 },
    { id: 5, name: 'HRA - 124th Street', address: '122 E 124th St', category: 'government', lat: 40.8045, lng: -73.9387 },
    { id: 6, name: 'Harlem Courthouse', address: '170 E 121st St', category: 'government', lat: 40.8013, lng: -73.9365 },
    
    // Health (7)
    { id: 7, name: 'Harlem Hospital Center', address: '506 Lenox Ave/Malcolm X Blvd', category: 'health', lat: 40.8061, lng: -73.9394 },
    { id: 8, name: 'Community Healthcare Network', address: '81 W 115th St', category: 'health', lat: 40.8006, lng: -73.9522 },
    { id: 9, name: 'Family Health Center of Harlem', address: '1824 Madison Ave', category: 'health', lat: 40.8034, lng: -73.9384 },
    { id: 10, name: 'Mount Sinai Harlem Health Center', address: '158 W 124th St', category: 'health', lat: 40.8075, lng: -73.9462 },
    { id: 11, name: 'Citicares Community Health Center', address: '154 W 127th St', category: 'health', lat: 40.8112, lng: -73.9462 },
    { id: 12, name: 'Ryan Health - Adair Care Center', address: '565 Manhattan Ave', category: 'health', lat: 40.8081, lng: -73.9547 },
    { id: 13, name: 'H.O.P.E. Center Harlem', address: '228C W 116th St', category: 'health', lat: 40.8027, lng: -73.9541 },
    
    // Safety/Legal (5)
    { id: 14, name: 'NYPD 28th Precinct', address: '2271-89 Adam C. Powell Jr. Blvd', category: 'safety', lat: 40.8112, lng: -73.9486 },
    { id: 15, name: 'Manhattan DA Office - Harlem', address: '163 W 125th St', category: 'safety', lat: 40.8089, lng: -73.9476 },
    { id: 16, name: 'Neighborhood Defender Service', address: '317 Lenox Ave', category: 'safety', lat: 40.8021, lng: -73.9431 },
    { id: 17, name: 'Legal Aid Society', address: '2090 Adam C. Powell Jr. Blvd', category: 'safety', lat: 40.8054, lng: -73.9475 },
    { id: 18, name: 'Manhattan Legal Services', address: '1 W 125th St, 2nd Floor', category: 'safety', lat: 40.8076, lng: -73.9438 },
    
    // Education (9)
    { id: 19, name: 'Community Education Council - District 5', address: '123 Morningside Dr', category: 'education', lat: 40.8073, lng: -73.9585 },
    { id: 20, name: 'Community Education District 3', address: '154 W 93rd St', category: 'education', lat: 40.7925, lng: -73.9714 },
    { id: 21, name: 'Harlem Police Athletic League', address: '441 Manhattan Ave', category: 'education', lat: 40.8047, lng: -73.9562 },
    { id: 22, name: "Harlem Children's Zone", address: '245 W 125th St', category: 'education', lat: 40.8093, lng: -73.9502 },
    { id: 23, name: "Children's Aid Society", address: '14-32 W 118th St', category: 'education', lat: 40.8029, lng: -73.9531 },
    { id: 24, name: 'Harlem Dowling Children & Family Services', address: '2139 Adam C. Powell Jr. Blvd', category: 'education', lat: 40.8078, lng: -73.9479 },
    { id: 25, name: 'Dream Center Harlem', address: '205 W 119th St', category: 'education', lat: 40.8039, lng: -73.9537 },
    { id: 26, name: 'Harry Belafonte 115th Street Library', address: '203 W 115th St', category: 'education', lat: 40.8005, lng: -73.9537 },
    { id: 27, name: 'Harlem Public Library', address: '9 W 125th St', category: 'education', lat: 40.8077, lng: -73.9442 },
    
    // Food (8)
    { id: 28, name: 'Food Bank for NYC', address: '252 W 116th St', category: 'food', lat: 40.8029, lng: -73.9544 },
    { id: 29, name: 'NY Common Pantry', address: '8 E 109th St', category: 'food', lat: 40.7943, lng: -73.9463 },
    { id: 30, name: 'Cathedral Community Cares', address: '1047 Amsterdam Ave', category: 'food', lat: 40.8017, lng: -73.9658 },
    { id: 31, name: 'Refettoria Harlem', address: '37 W 119th St', category: 'food', lat: 40.8034, lng: -73.9511 },
    { id: 32, name: 'Salvation Army Food Pantry', address: '540 Lenox Ave', category: 'food', lat: 40.8073, lng: -73.9398 },
    { id: 33, name: 'First Corinthian Baptist Church', address: '1912 Adam C. Powell Jr. Blvd', category: 'food', lat: 40.8028, lng: -73.9468 },
    { id: 34, name: 'Salem United Methodist Church', address: '211 W 129th St', category: 'food', lat: 40.8136, lng: -73.9491 },
    { id: 35, name: 'Beth Hark Christian Center', address: '2 E 120th St', category: 'food', lat: 40.8021, lng: -73.9421 },
    
    // Postal (5)
    { id: 36, name: 'USPS - 116th Street', address: '232 E 116th St', category: 'postal', lat: 40.7974, lng: -73.9368 },
    { id: 37, name: 'USPS - 125th Street', address: '365 W 125th St', category: 'postal', lat: 40.8098, lng: -73.9531 },
    { id: 38, name: 'FedEx Office Print & Shipping', address: '207 W 125th St', category: 'postal', lat: 40.8091, lng: -73.9495 },
    { id: 39, name: 'UPS Access Point', address: '227 W 116th St', category: 'postal', lat: 40.8028, lng: -73.9541 },
    { id: 40, name: 'The UPS Store', address: '30 E 125th St', category: 'postal', lat: 40.8053, lng: -73.9403 },
    
    // Financial (8)
    { id: 41, name: 'Municipal Credit Union', address: '280 St Nicholas Ave', category: 'financial', lat: 40.8147, lng: -73.9498 },
    { id: 42, name: 'Wells Fargo Bank', address: '143 Malcolm X Blvd', category: 'financial', lat: 40.8001, lng: -73.9469 },
    { id: 43, name: 'Bank of America', address: '106 W 117th St', category: 'financial', lat: 40.8019, lng: -73.9521 },
    { id: 44, name: 'Chase Bank', address: '2195 Frederick Douglass Blvd', category: 'financial', lat: 40.8094, lng: -73.9549 },
    { id: 45, name: 'Citizens Bank', address: '2063 Frederick Douglass Blvd', category: 'financial', lat: 40.8051, lng: -73.9537 },
    { id: 46, name: 'TD Bank', address: '300 W 125th St', category: 'financial', lat: 40.8095, lng: -73.9521 },
    { id: 47, name: 'RiteCheck', address: '2338 Frederick Douglass Blvd', category: 'financial', lat: 40.8141, lng: -73.9567 },
    { id: 48, name: "David's Check Cashing", address: '110 W 116th St', category: 'financial', lat: 40.8017, lng: -73.9517 },
    
    // Community (7)
    { id: 49, name: 'Manhattan Community Board 10', address: '215 W 125th St', category: 'community', lat: 40.8091, lng: -73.9497 },
    { id: 50, name: 'Harlem Mothers S.A.V.E.', address: '306 W 126th St', category: 'community', lat: 40.8105, lng: -73.9528 },
    { id: 51, name: 'National Urban League', address: '117 W 125th St', category: 'community', lat: 40.8083, lng: -73.9453 },
    { id: 52, name: 'NAACP - Harlem Chapter', address: '144 W 125th St', category: 'community', lat: 40.8087, lng: -73.9460 },
    { id: 53, name: 'We All Really Matter (W.A.R.M.)', address: '8 W 126th St', category: 'community', lat: 40.8093, lng: -73.9441 },
    { id: 54, name: 'National Action Network', address: '106 W 145th St', category: 'community', lat: 40.8240, lng: -73.9431 },
    { id: 55, name: 'Catholic Charities Social Services', address: '125 E 105th St', category: 'community', lat: 40.7917, lng: -73.9441 }
];

// Category definitions with colors
const categories = {
    government: { name: 'Government', color: '#3B82F6' },
    health: { name: 'Health', color: '#EF4444' },
    safety: { name: 'Legal', color: '#8B5CF6' },
    education: { name: 'Education', color: '#10B981' },
    food: { name: 'Food', color: '#F59E0B' },
    postal: { name: 'Postal', color: '#6366F1' },
    financial: { name: 'Financial', color: '#14B8A6' },
    community: { name: 'Community', color: '#EC4899' }
};

// Initialize the map
const map = L.map('map', {
    center: [40.8070, -73.9470],
    zoom: 14,
    zoomControl: true,
    scrollWheelZoom: true
});

// Add tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);

// Store all markers
let allMarkers = [];

// Create custom marker icon
function createMarkerIcon(color) {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            background-color: ${color};
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });
}

// Add markers to map
resources.forEach(resource => {
    const marker = L.marker([resource.lat, resource.lng], {
        icon: createMarkerIcon(categories[resource.category].color)
    });

    // Create popup content
    const popupContent = `
        <div style="font-family: system-ui, sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: ${categories[resource.category].color}; font-size: 16px;">
                ${resource.name}
            </h3>
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">
                📍 ${resource.address}
            </p>
            <span style="
                display: inline-block;
                padding: 4px 12px;
                background-color: ${categories[resource.category].color};
                color: white;
                border-radius: 12px;
                font-size: 11px;
                font-weight: 600;
                text-transform: uppercase;
            ">
                ${categories[resource.category].name}
            </span>
        </div>
    `;

    marker.bindPopup(popupContent);
    
    // Add click event to show info panel
    marker.on('click', () => {
        showInfoPanel(resource);
    });

    marker.resource = resource;
    marker.addTo(map);
    allMarkers.push(marker);
});

// Create legend
const legendItems = document.getElementById('legend-items');
Object.entries(categories).forEach(([key, cat]) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `
        <div class="legend-color" style="background-color: ${cat.color}"></div>
        <span>${cat.name}</span>
    `;
    legendItems.appendChild(item);
});

// Show info panel
function showInfoPanel(resource) {
    const panel = document.getElementById('info-panel');
    const nameEl = document.getElementById('service-name');
    const addressEl = document.getElementById('service-address');
    const categoryEl = document.getElementById('service-category');

    nameEl.textContent = resource.name;
    addressEl.textContent = resource.address;
    categoryEl.textContent = categories[resource.category].name;
    categoryEl.style.backgroundColor = categories[resource.category].color;

    panel.classList.add('active');
}

// Close info panel
document.getElementById('close-panel').addEventListener('click', () => {
    document.getElementById('info-panel').classList.remove('active');
});

// Render services grid
function renderServicesGrid(category = 'all') {
    const grid = document.getElementById('services-grid');
    const filtered = category === 'all' 
        ? resources 
        : resources.filter(r => r.category === category);

    grid.innerHTML = filtered.map(service => `
        <div class="service-card" onclick="focusOnService(${service.id})">
            <h3>${service.name}</h3>
            <div class="address">${service.address}</div>
            <div class="category-tag" style="background-color: ${categories[service.category].color}">
                ${categories[service.category].name}
            </div>
        </div>
    `).join('');
}

// Focus on service when card is clicked
window.focusOnService = function(serviceId) {
    const service = resources.find(r => r.id === serviceId);
    if (service) {
        map.setView([service.lat, service.lng], 17);
        const marker = allMarkers.find(m => m.resource.id === serviceId);
        if (marker) {
            marker.openPopup();
            showInfoPanel(service);
        }
        // Smooth scroll to map
        document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
    }
};

// Filter button functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Render filtered services
        const category = btn.dataset.category;
        renderServicesGrid(category);
        
        // Filter map markers
        if (category === 'all') {
            allMarkers.forEach(marker => marker.addTo(map));
            map.setView([40.8070, -73.9470], 14);
        } else {
            allMarkers.forEach(marker => {
                if (marker.resource.category === category) {
                    marker.addTo(map);
                } else {
                    map.removeLayer(marker);
                }
            });
            // Center on filtered markers
            const filtered = allMarkers.filter(m => m.resource.category === category);
            if (filtered.length > 0) {
                const group = L.featureGroup(filtered);
                map.fitBounds(group.getBounds().pad(0.1));
            }
        }
    });
});

// Initialize services grid with all services
renderServicesGrid();

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Log success message
console.log('Charles Hill Social Services Map loaded successfully!');
console.log(`Total services: ${resources.length}`);
console.log('Categories:', Object.keys(categories).join(', '));