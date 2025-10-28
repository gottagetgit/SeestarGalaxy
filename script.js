// Data structure for all celestial objects
const celestialObjects = [
    // Sun
    { id: 'Sun', name: 'Sun', traditionalName: '', type: 'star', filename: 'Sun.jpg' },
    
    // Moon
    { id: 'Moon', name: 'Moon', traditionalName: '', type: 'moon', filename: 'Moon.jpg' },
    
    // Planets
    { id: 'Mercury', name: 'Mercury', traditionalName: '', type: 'planet', filename: 'Mercury.jpg' },
    { id: 'Venus', name: 'Venus', traditionalName: '', type: 'planet', filename: 'Venus.jpg' },
    { id: 'Earth', name: 'Earth', traditionalName: '', type: 'planet', filename: 'Earth.jpg' },
    { id: 'Mars', name: 'Mars', traditionalName: '', type: 'planet', filename: 'Mars.jpg' },
    { id: 'Jupiter', name: 'Jupiter', traditionalName: '', type: 'planet', filename: 'Jupiter.jpg' },
    { id: 'Saturn', name: 'Saturn', traditionalName: '', type: 'planet', filename: 'Saturn.jpg' },
    { id: 'Uranus', name: 'Uranus', traditionalName: '', type: 'planet', filename: 'Uranus.jpg' },
    { id: 'Neptune', name: 'Neptune', traditionalName: '', type: 'planet', filename: 'Neptune.jpg' },
    
    // Messier Objects (M1-M110)
    { id: 'M1', name: 'Messier 1', traditionalName: 'Crab Nebula', type: 'messier', filename: 'M1.jpg' },
    { id: 'M2', name: 'Messier 2', traditionalName: '', type: 'messier', filename: 'M2.jpg' },
    { id: 'M3', name: 'Messier 3', traditionalName: '', type: 'messier', filename: 'M3.jpg' },
    { id: 'M4', name: 'Messier 4', traditionalName: '', type: 'messier', filename: 'M4.jpg' },
    { id: 'M5', name: 'Messier 5', traditionalName: '', type: 'messier', filename: 'M5.jpg' },
    { id: 'M6', name: 'Messier 6', traditionalName: 'Butterfly Cluster', type: 'messier', filename: 'M6.jpg' },
    { id: 'M7', name: 'Messier 7', traditionalName: 'Ptolemy Cluster', type: 'messier', filename: 'M7.jpg' },
    { id: 'M8', name: 'Messier 8', traditionalName: 'Lagoon Nebula', type: 'messier', filename: 'M8.jpg' },
    { id: 'M9', name: 'Messier 9', traditionalName: '', type: 'messier', filename: 'M9.jpg' },
    { id: 'M10', name: 'Messier 10', traditionalName: '', type: 'messier', filename: 'M10.jpg' },
    { id: 'M11', name: 'Messier 11', traditionalName: 'Wild Duck Cluster', type: 'messier', filename: 'M11.jpg' },
    { id: 'M12', name: 'Messier 12', traditionalName: '', type: 'messier', filename: 'M12.jpg' },
    { id: 'M13', name: 'Messier 13', traditionalName: 'Great Hercules Cluster', type: 'messier', filename: 'M13.jpg' },
    { id: 'M14', name: 'Messier 14', traditionalName: '', type: 'messier', filename: 'M14.jpg' },
    { id: 'M15', name: 'Messier 15', traditionalName: '', type: 'messier', filename: 'M15.jpg' },
    { id: 'M16', name: 'Messier 16', traditionalName: 'Eagle Nebula', type: 'messier', filename: 'M16.jpg' },
    { id: 'M17', name: 'Messier 17', traditionalName: 'Omega Nebula', type: 'messier', filename: 'M17.jpg' },
    { id: 'M18', name: 'Messier 18', traditionalName: '', type: 'messier', filename: 'M18.jpg' },
    { id: 'M19', name: 'Messier 19', traditionalName: '', type: 'messier', filename: 'M19.jpg' },
    { id: 'M20', name: 'Messier 20', traditionalName: 'Trifid Nebula', type: 'messier', filename: 'M20.jpg' },
    { id: 'M21', name: 'Messier 21', traditionalName: '', type: 'messier', filename: 'M21.jpg' },
    { id: 'M22', name: 'Messier 22', traditionalName: '', type: 'messier', filename: 'M22.jpg' },
    { id: 'M23', name: 'Messier 23', traditionalName: '', type: 'messier', filename: 'M23.jpg' },
    { id: 'M24', name: 'Messier 24', traditionalName: 'Sagittarius Star Cloud', type: 'messier', filename: 'M24.jpg' },
    { id: 'M25', name: 'Messier 25', traditionalName: '', type: 'messier', filename: 'M25.jpg' },
    { id: 'M26', name: 'Messier 26', traditionalName: '', type: 'messier', filename: 'M26.jpg' },
    { id: 'M27', name: 'Messier 27', traditionalName: 'Dumbbell Nebula', type: 'messier', filename: 'M27.jpg' },
    { id: 'M28', name: 'Messier 28', traditionalName: '', type: 'messier', filename: 'M28.jpg' },
    { id: 'M29', name: 'Messier 29', traditionalName: '', type: 'messier', filename: 'M29.jpg' },
    { id: 'M30', name: 'Messier 30', traditionalName: '', type: 'messier', filename: 'M30.jpg' },
    { id: 'M31', name: 'Messier 31', traditionalName: 'Andromeda Galaxy', type: 'messier', filename: 'M31.jpg' },
    { id: 'M32', name: 'Messier 32', traditionalName: '', type: 'messier', filename: 'M32.jpg' },
    { id: 'M33', name: 'Messier 33', traditionalName: 'Triangulum Galaxy', type: 'messier', filename: 'M33.jpg' },
    { id: 'M34', name: 'Messier 34', traditionalName: '', type: 'messier', filename: 'M34.jpg' },
    { id: 'M35', name: 'Messier 35', traditionalName: '', type: 'messier', filename: 'M35.jpg' },
    { id: 'M36', name: 'Messier 36', traditionalName: '', type: 'messier', filename: 'M36.jpg' },
    { id: 'M37', name: 'Messier 37', traditionalName: '', type: 'messier', filename: 'M37.jpg' },
    { id: 'M38', name: 'Messier 38', traditionalName: '', type: 'messier', filename: 'M38.jpg' },
    { id: 'M39', name: 'Messier 39', traditionalName: '', type: 'messier', filename: 'M39.jpg' },
    { id: 'M40', name: 'Messier 40', traditionalName: '', type: 'messier', filename: 'M40.jpg' },
    { id: 'M41', name: 'Messier 41', traditionalName: '', type: 'messier', filename: 'M41.jpg' },
    { id: 'M42', name: 'Messier 42', traditionalName: 'Orion Nebula', type: 'messier', filename: 'M42.jpg' },
    { id: 'M43', name: 'Messier 43', traditionalName: 'De Mairan Nebula', type: 'messier', filename: 'M43.jpg' },
    { id: 'M44', name: 'Messier 44', traditionalName: 'Beehive Cluster', type: 'messier', filename: 'M44.jpg' },
    { id: 'M45', name: 'Messier 45', traditionalName: 'Pleiades', type: 'messier', filename: 'M45.jpg' },
    { id: 'M46', name: 'Messier 46', traditionalName: '', type: 'messier', filename: 'M46.jpg' },
    { id: 'M47', name: 'Messier 47', traditionalName: '', type: 'messier', filename: 'M47.jpg' },
    { id: 'M48', name: 'Messier 48', traditionalName: '', type: 'messier', filename: 'M48.jpg' },
    { id: 'M49', name: 'Messier 49', traditionalName: '', type: 'messier', filename: 'M49.jpg' },
    { id: 'M50', name: 'Messier 50', traditionalName: '', type: 'messier', filename: 'M50.jpg' },
    { id: 'M51', name: 'Messier 51', traditionalName: 'Whirlpool Galaxy', type: 'messier', filename: 'M51.jpg' },
    { id: 'M52', name: 'Messier 52', traditionalName: '', type: 'messier', filename: 'M52.jpg' },
    { id: 'M53', name: 'Messier 53', traditionalName: '', type: 'messier', filename: 'M53.jpg' },
    { id: 'M54', name: 'Messier 54', traditionalName: '', type: 'messier', filename: 'M54.jpg' },
    { id: 'M55', name: 'Messier 55', traditionalName: '', type: 'messier', filename: 'M55.jpg' },
    { id: 'M56', name: 'Messier 56', traditionalName: '', type: 'messier', filename: 'M56.jpg' },
    { id: 'M57', name: 'Messier 57', traditionalName: 'Ring Nebula', type: 'messier', filename: 'M57.jpg' },
    { id: 'M58', name: 'Messier 58', traditionalName: '', type: 'messier', filename: 'M58.jpg' },
    { id: 'M59', name: 'Messier 59', traditionalName: '', type: 'messier', filename: 'M59.jpg' },
    { id: 'M60', name: 'Messier 60', traditionalName: '', type: 'messier', filename: 'M60.jpg' },
    { id: 'M61', name: 'Messier 61', traditionalName: '', type: 'messier', filename: 'M61.jpg' },
    { id: 'M62', name: 'Messier 62', traditionalName: '', type: 'messier', filename: 'M62.jpg' },
    { id: 'M63', name: 'Messier 63', traditionalName: 'Sunflower Galaxy', type: 'messier', filename: 'M63.jpg' },
    { id: 'M64', name: 'Messier 64', traditionalName: 'Black Eye Galaxy', type: 'messier', filename: 'M64.jpg' },
    { id: 'M65', name: 'Messier 65', traditionalName: '', type: 'messier', filename: 'M65.jpg' },
    { id: 'M66', name: 'Messier 66', traditionalName: '', type: 'messier', filename: 'M66.jpg' },
    { id: 'M67', name: 'Messier 67', traditionalName: '', type: 'messier', filename: 'M67.jpg' },
    { id: 'M68', name: 'Messier 68', traditionalName: '', type: 'messier', filename: 'M68.jpg' },
    { id: 'M69', name: 'Messier 69', traditionalName: '', type: 'messier', filename: 'M69.jpg' },
    { id: 'M70', name: 'Messier 70', traditionalName: '', type: 'messier', filename: 'M70.jpg' },
    { id: 'M71', name: 'Messier 71', traditionalName: '', type: 'messier', filename: 'M71.jpg' },
    { id: 'M72', name: 'Messier 72', traditionalName: '', type: 'messier', filename: 'M72.jpg' },
    { id: 'M73', name: 'Messier 73', traditionalName: '', type: 'messier', filename: 'M73.jpg' },
    { id: 'M74', name: 'Messier 74', traditionalName: '', type: 'messier', filename: 'M74.jpg' },
    { id: 'M75', name: 'Messier 75', traditionalName: '', type: 'messier', filename: 'M75.jpg' },
    { id: 'M76', name: 'Messier 76', traditionalName: 'Little Dumbbell Nebula', type: 'messier', filename: 'M76.jpg' },
    { id: 'M77', name: 'Messier 77', traditionalName: '', type: 'messier', filename: 'M77.jpg' },
    { id: 'M78', name: 'Messier 78', traditionalName: '', type: 'messier', filename: 'M78.jpg' },
    { id: 'M79', name: 'Messier 79', traditionalName: '', type: 'messier', filename: 'M79.jpg' },
    { id: 'M80', name: 'Messier 80', traditionalName: '', type: 'messier', filename: 'M80.jpg' },
    { id: 'M81', name: 'Messier 81', traditionalName: "Bode's Galaxy", type: 'messier', filename: 'M81.jpg' },
    { id: 'M82', name: 'Messier 82', traditionalName: 'Cigar Galaxy', type: 'messier', filename: 'M82.jpg' },
    { id: 'M83', name: 'Messier 83', traditionalName: 'Southern Pinwheel Galaxy', type: 'messier', filename: 'M83.jpg' },
    { id: 'M84', name: 'Messier 84', traditionalName: '', type: 'messier', filename: 'M84.jpg' },
    { id: 'M85', name: 'Messier 85', traditionalName: '', type: 'messier', filename: 'M85.jpg' },
    { id: 'M86', name: 'Messier 86', traditionalName: '', type: 'messier', filename: 'M86.jpg' },
    { id: 'M87', name: 'Messier 87', traditionalName: '', type: 'messier', filename: 'M87.jpg' },
    { id: 'M88', name: 'Messier 88', traditionalName: '', type: 'messier', filename: 'M88.jpg' },
    { id: 'M89', name: 'Messier 89', traditionalName: '', type: 'messier', filename: 'M89.jpg' },
    { id: 'M90', name: 'Messier 90', traditionalName: '', type: 'messier', filename: 'M90.jpg' },
    { id: 'M91', name: 'Messier 91', traditionalName: '', type: 'messier', filename: 'M91.jpg' },
    { id: 'M92', name: 'Messier 92', traditionalName: '', type: 'messier', filename: 'M92.jpg' },
    { id: 'M93', name: 'Messier 93', traditionalName: '', type: 'messier', filename: 'M93.jpg' },
    { id: 'M94', name: 'Messier 94', traditionalName: '', type: 'messier', filename: 'M94.jpg' },
    { id: 'M95', name: 'Messier 95', traditionalName: '', type: 'messier', filename: 'M95.jpg' },
    { id: 'M96', name: 'Messier 96', traditionalName: '', type: 'messier', filename: 'M96.jpg' },
    { id: 'M97', name: 'Messier 97', traditionalName: 'Owl Nebula', type: 'messier', filename: 'M97.jpg' },
    { id: 'M98', name: 'Messier 98', traditionalName: '', type: 'messier', filename: 'M98.jpg' },
    { id: 'M99', name: 'Messier 99', traditionalName: '', type: 'messier', filename: 'M99.jpg' },
    { id: 'M100', name: 'Messier 100', traditionalName: '', type: 'messier', filename: 'M100.jpg' },
    { id: 'M101', name: 'Messier 101', traditionalName: 'Pinwheel Galaxy', type: 'messier', filename: 'M101.jpg' },
    { id: 'M102', name: 'Messier 102', traditionalName: '', type: 'messier', filename: 'M102.jpg' },
    { id: 'M103', name: 'Messier 103', traditionalName: '', type: 'messier', filename: 'M103.jpg' },
    { id: 'M104', name: 'Messier 104', traditionalName: 'Sombrero Galaxy', type: 'messier', filename: 'M104.jpg' },
    { id: 'M105', name: 'Messier 105', traditionalName: '', type: 'messier', filename: 'M105.jpg' },
    { id: 'M106', name: 'Messier 106', traditionalName: '', type: 'messier', filename: 'M106.jpg' },
    { id: 'M107', name: 'Messier 107', traditionalName: '', type: 'messier', filename: 'M107.jpg' },
    { id: 'M108', name: 'Messier 108', traditionalName: '', type: 'messier', filename: 'M108.jpg' },
    { id: 'M109', name: 'Messier 109', traditionalName: '', type: 'messier', filename: 'M109.jpg' },
    { id: 'M110', name: 'Messier 110', traditionalName: '', type: 'messier', filename: 'M110.jpg' }
];


// DOM elements
const skyGrid = document.getElementById('skyGrid');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');
const prevImageBtn = document.getElementById('prevImage');
const nextImageBtn = document.getElementById('nextImage');

// Navigation state
let currentImageIndex = 0;
let availableImages = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    createSkyGrid();
    setupModalEvents();
});

// Create the grid of celestial objects
function createSkyGrid() {
    skyGrid.innerHTML = '';
    
    celestialObjects.forEach(obj => {
        const gridItem = createGridItem(obj);
        skyGrid.appendChild(gridItem);
    });
}

// Create a grid item for a celestial object
function createGridItem(obj) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.setAttribute('data-object-id', obj.id);
    
    // Create image element
    const img = document.createElement('img');
    img.alt = obj.name;
    
    // Check if image exists
    const imagePath = `images/${obj.filename}`;
    img.src = imagePath;
    
    // Handle image load error (image doesn't exist)
    img.onerror = function() {
        gridItem.classList.add('placeholder');
        gridItem.innerHTML = `
            <div class="placeholder-indicator">Not Yet</div>
            <div class="placeholder-image">
                <div class="placeholder-content">
                    <div class="placeholder-icon">🌌</div>
                    <div class="placeholder-text">Photo Not Yet Available</div>
                </div>
            </div>
            <div class="caption">
                <h3>${obj.name}</h3>
                ${obj.traditionalName ? `<p>${obj.traditionalName}</p>` : ''}
            </div>
        `;
    };
    
    // Handle successful image load
    img.onload = function() {
        gridItem.classList.add('clickable');
        gridItem.innerHTML = `
            <img src="${imagePath}" alt="${obj.name}">
            <div class="caption">
                <h3>${obj.name}</h3>
                ${obj.traditionalName ? `<p>${obj.traditionalName}</p>` : ''}
            </div>
        `;
        
        // Add click event for modal
        gridItem.addEventListener('click', () => openModal(obj, imagePath));
    };
    
    return gridItem;
}

// Setup modal event listeners
function setupModalEvents() {
    // Close modal when clicking the X
    closeModal.addEventListener('click', closeModalWindow);
    
    // Navigation buttons
    prevImageBtn.addEventListener('click', showPreviousImage);
    nextImageBtn.addEventListener('click', showNextImage);
    
    // Close modal when clicking outside the image
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            closeModalWindow();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (imageModal.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeModalWindow();
                    break;
                case 'ArrowLeft':
                    showPreviousImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        }
    });
}

// Open modal with image
function openModal(obj, imagePath) {
    // Build list of available images (only those that exist)
    buildAvailableImagesList();
    
    // Find current image index
    currentImageIndex = availableImages.findIndex(item => item.id === obj.id);
    
    // Update modal content
    updateModalContent(obj, imagePath);
    
    // Update navigation buttons
    updateNavigationButtons();
    
    imageModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close modal
function closeModalWindow() {
    imageModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Build list of available images (only those that exist)
function buildAvailableImagesList() {
    availableImages = [];
    
    celestialObjects.forEach(obj => {
        const imagePath = `images/${obj.filename}`;
        // Check if image exists by looking for grid items with this object ID that are clickable
        const gridItem = document.querySelector(`[data-object-id="${obj.id}"]`);
        if (gridItem && gridItem.classList.contains('clickable')) {
            availableImages.push({
                id: obj.id,
                name: obj.name,
                traditionalName: obj.traditionalName,
                imagePath: imagePath
            });
        }
    });
}

// Update modal content
function updateModalContent(obj, imagePath) {
    modalImage.src = imagePath;
    modalImage.alt = obj.name;
    modalTitle.textContent = obj.name;
    modalDescription.textContent = obj.traditionalName || '';
}

// Update navigation buttons state
function updateNavigationButtons() {
    prevImageBtn.disabled = currentImageIndex === 0;
    nextImageBtn.disabled = currentImageIndex === availableImages.length - 1;
}

// Show previous image
function showPreviousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        const currentObj = availableImages[currentImageIndex];
        updateModalContent(currentObj, currentObj.imagePath);
        updateNavigationButtons();
    }
}

// Show next image
function showNextImage() {
    if (currentImageIndex < availableImages.length - 1) {
        currentImageIndex++;
        const currentObj = availableImages[currentImageIndex];
        updateModalContent(currentObj, currentObj.imagePath);
        updateNavigationButtons();
    }
}

// Utility function to check if an image exists
function checkImageExists(imagePath) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = imagePath;
    });
}
