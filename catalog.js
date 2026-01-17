function createCatalog() {
    const catalogMenu = document.getElementById('catalog-menu');
    const catalogOverlay = document.getElementById('catalog-overlay');
    const catalogToggleBtn = document.getElementById('catalog-toggle-btn');
    
    if (!catalogMenu || !catalogOverlay || !catalogToggleBtn) return;

    const genres = [...new Set(Books.map(book => book.genre))];
    const categories = [...new Set(Books.map(book => book.category))];
    const businessGenres = [...new Set(BusinessBooks.map(book => book.genre))];
    

    catalogMenu.innerHTML = `
        <div class="catalog-content">
            <div class="catalog-header">
                <h3><i class="bi bi-grid-3x3-gap"></i> Каталог книг</h3>
                <button class="catalog-close" id="catalog-close">&times;</button>
            </div>
            <div class="catalog-body">
                <div class="catalog-section">
                    <h4><i class="bi bi-tags"></i> Основные жанры</h4>
                    <div class="catalog-list" id="genres-list"></div>
                </div>
                
                <div class="catalog-section">
                    <h4><i class="bi bi-star"></i> Категории</h4>
                    <div class="catalog-list" id="categories-list"></div>
                </div>
                
                <div class="catalog-section">
                    <h4><i class="bi bi-briefcase"></i> Бизнес-литература</h4>
                    <div class="catalog-list" id="business-genres-list"></div>
                </div>
            </div>
        </div>
    `;

    const genresList = document.getElementById('genres-list');
    const genreIcons = {
        'Детектив': 'bi-search',
        'Роман': 'bi-heart',
        'Мистика': 'bi-moon',
        'Психология': 'bi-brain',
        'Юмор': 'bi-emoji-laughing',
        'Саморазвитие': 'bi-person-up',
        'Бизнес': 'bi-graph-up',
        'Криминал': 'bi-shield-exclamation'
    };
    
    genres.forEach(genre => {
        const genreItem = document.createElement('div');
        genreItem.className = 'catalog-item';
        genreItem.innerHTML = `
            <i class="bi ${genreIcons[genre] || 'bi-book'}"></i>
            <span>${genre}</span>
        `;
        genreItem.addEventListener('click', () => {
            if (window.BookFunctions && window.BookFunctions.filterByGenre) {
                window.BookFunctions.filterByGenre(genre);
            }
            closeCatalog();
        });
        genresList.appendChild(genreItem);
    });

    const categoriesList = document.getElementById('categories-list');
    const categoryIcons = {
        'Новинки': 'bi-star',
        'Популярное': 'bi-fire',
        'Бестселлеры': 'bi-trophy'
    };
    
    categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'catalog-item';
        categoryItem.innerHTML = `
            <i class="bi ${categoryIcons[category] || 'bi-collection'}"></i>
            <span>${category}</span>
        `;
        categoryItem.addEventListener('click', () => {
            if (window.BookFunctions && window.BookFunctions.filterByCategory) {
                window.BookFunctions.filterByCategory(category);
            }
            closeCatalog();
        });
        categoriesList.appendChild(categoryItem);
    });
    
    const businessGenresList = document.getElementById('business-genres-list');
    const businessGenreIcons = {
        'Финансы': 'bi-cash-coin',
        'Маркетинг': 'bi-megaphone',
        'Предпринимательство': 'bi-building',
        'Менеджмент': 'bi-people',
        'Переговоры': 'bi-chat',
        'Продажи': 'bi-cart',
        'Экономика': 'bi-graph-up',
        'Копирайтинг': 'bi-pencil',
        'Мотивация': 'bi-lightning'
    };
    
    businessGenres.forEach(genre => {
        const genreItem = document.createElement('div');
        genreItem.className = 'catalog-item';
        genreItem.innerHTML = `
            <i class="bi ${businessGenreIcons[genre] || 'bi-briefcase'}"></i>
            <span>${genre}</span>
        `;
        genreItem.addEventListener('click', () => {
            if (window.BookFunctions && window.BookFunctions.filterBusinessByGenre) {
                window.BookFunctions.filterBusinessByGenre(genre);
            }
            closeCatalog();
        });
        businessGenresList.appendChild(genreItem);
    });
    
    function openCatalog() {
        catalogMenu.classList.add('show');
        catalogOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    function closeCatalog() {
        catalogMenu.classList.remove('show');
        catalogOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    catalogToggleBtn.addEventListener('click', openCatalog);
    
    const catalogCloseBtn = document.getElementById('catalog-close');
    if (catalogCloseBtn) {
        catalogCloseBtn.addEventListener('click', closeCatalog);
    }
    
    catalogOverlay.addEventListener('click', closeCatalog);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCatalog();
        }
    });
    
    catalogMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Инициализация каталога при загрузке
document.addEventListener('DOMContentLoaded', createCatalog);