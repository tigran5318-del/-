function getRandomRating() {
    return (Math.random() * 2 + 3.5).toFixed(1); 
}

function renderBooks(booksArray, containerId = 'Book-list') {
    const row = document.getElementById(containerId);
    
    if (!row) {
        console.error(`Контейнер с ID ${containerId} не найден`);
        return;
    }

    row.innerHTML = '';
    
    if (booksArray.length === 0) {
        row.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="mb-3">
                    <i class="bi bi-search" style="font-size: 48px; color: #999;"></i>
                </div>
                <h4 class="mb-2">Книги не найдены</h4>
                <p class="text-muted">Попробуйте изменить запрос или выбрать другой жанр</p>
            </div>
        `;
        return;
    }
    
    booksArray.forEach((book, index) => {
        let col = document.createElement("div");
        col.classList.add("col-xl-2", "col-lg-3", "col-md-4", "col-sm-6", "mb-4");
        
        const isFree = book.price === 0;
        const price = isFree ? 'Бесплатно' : `${book.price} ₽`;

        const favorites = JSON.parse(localStorage.getItem('favoriteBooks') || '[]');
        const isFavorite = favorites.includes(book.id);
        
        col.innerHTML = `
            <div class="book-card">
                <a href="book.html?id=${book.id}" class="book-card-link">
                    <div class="book-cover-container">
                        ${index < 4 ? '<div class="book-badge">Новинка</div>' : ''}
                        <div class="book-genre-badge">${book.genre}</div>
                        <img src="${book.rasm}" 
                             alt="${book.name}" 
                             class="book-cover"
                             onerror="this.src='https://via.placeholder.com/200x300/667eea/ffffff?text=${book.name.charAt(0)}'">
                        <button class="book-favorite ${isFavorite ? 'active' : ''}">
                            <i class="bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}"></i>
                        </button>
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">${book.name}</h3>
                        <p class="book-author">${book.author}</p>
                        <div class="book-meta">
                            <div class="book-rating">
                                <i class="bi bi-star-fill"></i>
                                <span>${book.rating || getRandomRating()}</span>
                            </div>
                            <div class="book-price ${isFree ? 'free' : ''}">${price}</div>
                        </div>
                    </div>
                </a>
            </div>
        `;
        
        row.appendChild(col);
    });
}

function renderBusinessBooks(booksArray = BusinessBooks, containerId = 'Business-books-list') {
    const row = document.getElementById(containerId);
    
    if (!row) return;
    
    row.innerHTML = '';
    
    booksArray.forEach((book, index) => {
        const col = document.createElement("div");
        col.classList.add("col-xl-2", "col-lg-3", "col-md-4", "col-sm-6", "mb-4");
        
        const favorites = JSON.parse(localStorage.getItem('favoriteBooks') || '[]');
        const isFavorite = favorites.includes(book.id);
        
        col.innerHTML = `
            <div class="business-card">
                <a href="book.html?id=${book.id}" style="text-decoration: none; color: inherit;">
                    <div class="business-book-cover-container">
                        <img src="${book.cover}" 
                             alt="${book.title}" 
                             class="business-book-cover"
                             onerror="this.src='https://via.placeholder.com/150x220/667eea/ffffff?text=${book.title.charAt(0)}'">
                        <div class="book-number">${index + 1}</div>
                    </div>
                    <div class="business-book-info">
                        <h3 class="business-book-title">${book.title}</h3>
                        <p class="business-book-author">${book.author}</p>
                        <p class="business-book-publisher">${book.publisher}</p>
                        <div class="business-book-genre">${book.genre}</div>
                    </div>
                </a>
            </div>
        `;
        
        row.appendChild(col);
    });
}

function setupQuickFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            let filteredBooks = [];
            
            switch(filter) {
                case 'all':
                    filteredBooks = Books;
                    updateSectionTitle('Все книги', Books.length);
                    break;
                case 'new':
                    filteredBooks = Books.filter(book => book.category === 'Новинки');
                    updateSectionTitle('Новинки', filteredBooks.length);
                    break;
                case 'popular':
                    filteredBooks = Books.filter(book => book.category === 'Популярное');
                    updateSectionTitle('Популярное', filteredBooks.length);
                    break;
                case 'bestseller':
                    filteredBooks = Books.filter(book => book.category === 'Бестселлеры');
                    updateSectionTitle('Бестселлеры', filteredBooks.length);
                    break;
            }
            
            renderBooks(filteredBooks);
        });
    });
}

function updateSectionTitle(title, count) {
    const sectionTitle = document.getElementById('section-title');
    const sectionSubtitle = document.getElementById('section-subtitle');
    
    if (sectionTitle && sectionSubtitle) {
        sectionTitle.textContent = title;
        
        switch(title) {
            case 'Все книги':
                sectionSubtitle.textContent = `Всего ${count} книг в каталоге`;
                break;
            case 'Новинки':
                sectionSubtitle.textContent = `Самые свежие книги этого месяца (${count})`;
                break;
            case 'Популярное':
                sectionSubtitle.textContent = `Популярные книги среди читателей (${count})`;
                break;
            case 'Бестселлеры':
                sectionSubtitle.textContent = `Книги, которые все читают (${count})`;
                break;
            default:
                if (title.startsWith('Поиск:')) {
                    sectionSubtitle.textContent = `Найдено ${count} книг по вашему запросу`;
                } else if (title.startsWith('Жанр:')) {
                    sectionSubtitle.textContent = `Найдено ${count} книг в этом жанре`;
                } else {
                    sectionSubtitle.textContent = `Найдено ${count} книг`;
                }
        }
    }
}


function searchBooks(query) {
    const normalizedQuery = query.toLowerCase().trim();
    
    const filteredBooks = Books.filter(book => 
        book.name.toLowerCase().includes(normalizedQuery) ||
        book.author.toLowerCase().includes(normalizedQuery) ||
        book.genre.toLowerCase().includes(normalizedQuery) ||
        book.description.toLowerCase().includes(normalizedQuery)
    );
    
    renderBooks(filteredBooks);
    updateSectionTitle(`Поиск: "${query}"`, filteredBooks.length);

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
}

function filterByGenre(genre) {
    const filteredBooks = Books.filter(book => book.genre === genre);
    renderBooks(filteredBooks);
    updateSectionTitle(`Жанр: ${genre}`, filteredBooks.length);
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
}

function filterByCategory(category) {
    const filteredBooks = Books.filter(book => book.category === category);
    renderBooks(filteredBooks);
    updateSectionTitle(category, filteredBooks.length);
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        if (btn.dataset.filter === category.toLowerCase()) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function filterBusinessByGenre(genre) {
    const filteredBooks = BusinessBooks.filter(book => book.genre === genre);
    renderBusinessBooks(filteredBooks);
    
    const businessTitle = document.getElementById('business-title');
    if (businessTitle) {
        businessTitle.textContent = `Бизнес-книги: ${genre}`;
    }
}

function resetFilters() {
    renderBooks(Books);
    renderBusinessBooks(BusinessBooks);
    
    updateSectionTitle('Новинки', Books.filter(book => book.category === 'Новинки').length);
    
    const businessTitle = document.getElementById('business-title');
    if (businessTitle) {
        businessTitle.textContent = 'Лучшие бизнес-книги';
    }
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        if (btn.dataset.filter === 'new') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}


function toggleFavorite(bookId, bookName) {
    let favorites = JSON.parse(localStorage.getItem('favoriteBooks') || '[]');
    const favoritesNames = JSON.parse(localStorage.getItem('favoriteBooksNames') || '[]');
    if (favorites.includes(bookId)) {
        favorites = favorites.filter(id => id !== bookId);
        const nameIndex = favoritesNames.findIndex(name => name === bookName);
        if (nameIndex > -1) {
            favoritesNames.splice(nameIndex, 1);
        }
        localStorage.setItem('favoriteBooks', JSON.stringify(favorites));
        localStorage.setItem('favoriteBooksNames', JSON.stringify(favoritesNames));
        return false;
    } else {
        favorites.push(bookId);
        favoritesNames.push(bookName);
        localStorage.setItem('favoriteBooks', JSON.stringify(favorites));
        localStorage.setItem('favoriteBooksNames', JSON.stringify(favoritesNames));
        return true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Отображаем книги
    const newBooks = Books.filter(book => book.category === 'Новинки');
    renderBooks(newBooks);
    updateSectionTitle('Новинки', newBooks.length);
    
    renderBusinessBooks();

    setupQuickFilters();

    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }
    
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (searchInput.value.trim()) {
                searchBooks(searchInput.value);
            }
        });
        
        const logo = document.querySelector('.litres-logo');
        if (logo) {
            logo.addEventListener('click', function() {
                searchInput.value = '';
                resetFilters();
            });
        }
    }
    
    const cards = document.querySelectorAll('.book-card, .business-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
        });
    });
    
    const newFilterBtn = document.querySelector('.filter-btn[data-filter="new"]');
    if (newFilterBtn) {
        newFilterBtn.classList.add('active');
    }
    
    document.addEventListener('click', function(e) {
        if (e.target.closest('.book-favorite')) {
            const btn = e.target.closest('.book-favorite');
            const bookCard = btn.closest('.book-card');
            
            if (bookCard) {
                const bookLink = bookCard.querySelector('.book-card-link');
                const bookId = bookLink.getAttribute('href').split('id=')[1];
                const bookTitle = bookCard.querySelector('.book-title').textContent;
                
                const isNowFavorite = toggleFavorite(bookId, bookTitle);
                
                btn.classList.toggle('active', isNowFavorite);
                const icon = btn.querySelector('i');
                icon.classList.toggle('bi-heart', !isNowFavorite);
                icon.classList.toggle('bi-heart-fill', isNowFavorite);
                
                btn.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 200);
                showNotification(isNowFavorite ? 
                    `"${bookTitle}" добавлена в избранное` : 
                    `"${bookTitle}" удалена из избранного`
                );
            }
        }
    });
    
    initLoginModal();
    initCart();
});

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="bi ${type === 'success' ? 'bi-check-circle' : 'bi-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 10px;
                padding: 15px 20px;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
                z-index: 9999;
                transform: translateX(120%);
                transition: transform 0.3s ease;
                border-left: 4px solid;
                max-width: 350px;
            }
            
            .notification-success {
                border-left-color: #00a650;
            }
            
            .notification-error {
                border-left-color: #ff4757;
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .notification-content i {
                font-size: 20px;
            }
            
            .notification-success .notification-content i {
                color: #00a650;
            }
            
            .notification-error .notification-content i {
                color: #ff4757;
            }
            
            .notification-content span {
                font-size: 14px;
                color: #333;
            }
            
            @media (max-width: 768px) {
                .notification {
                    top: 10px;
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function initLoginModal() {
    const loginBtns = document.querySelectorAll('.litres-actions a:has(.bi-person)');
    loginBtns.forEach(loginBtn => {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();

            const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
            loginModal.show();
        });
    });
    

    const modalLoginBtn = document.querySelector('#loginModal .btn-primary');
    if (modalLoginBtn) {
        modalLoginBtn.addEventListener('click', function() {
            const emailInput = document.getElementById('loginEmail');
            if (emailInput && emailInput.value.trim()) {

                showNotification('Вход выполнен успешно!');
                const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
                loginModal.hide();
                
                loginBtns.forEach(userBtn => {
                    userBtn.innerHTML = '<i class="bi bi-person-check"></i> Личный кабинет';
                });
            } else {
                showNotification('Пожалуйста, введите почту или логин', 'error');
                if (emailInput) emailInput.focus();
            }
        });
    }
    
    const emailInput = document.getElementById('loginEmail');
    if (emailInput) {
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (modalLoginBtn) modalLoginBtn.click();
            }
        });
    }
    

    const recCards = document.querySelectorAll('.recommendation-card');
    recCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    

    const miniCards = document.querySelectorAll('.book-card-mini');
    miniCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}


function initCart() {
    const cartBtns = document.querySelectorAll('.litres-actions a:has(.bi-cart)');
    cartBtns.forEach(cartBtn => {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            if (cart.length === 0) {
                showNotification('Корзина пуста', 'error');
            } else {
                showNotification(`В корзине ${cart.length} товар(ов) на сумму ${calculateCartTotal()} ₽`);
            }
        });
    });
}

function calculateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.reduce((total, item) => total + item.price, 0);
}

function addToCart(bookId, bookName, bookPrice) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
        showNotification(`"${bookName}" уже в корзине`, 'error');
        return false;
    }
    
    cart.push({
        id: bookId,
        name: bookName,
        price: bookPrice,
        quantity: 1,
        date: new Date().toISOString()
    });
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartCounter();
    
    showNotification(`"${bookName}" добавлена в корзину за ${bookPrice} ₽`);
    return true;
}

function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    const cartIcons = document.querySelectorAll('.litres-actions a:has(.bi-cart)');
    cartIcons.forEach(icon => {
        const existingBadge = icon.querySelector('.cart-badge');
        if (existingBadge) {
            existingBadge.remove();
        }
        
        if (cartCount > 0) {
            const badge = document.createElement('span');
            badge.className = 'cart-badge';
            badge.textContent = cartCount;
            badge.style.cssText = `
                position: absolute;
                top: -8px;
                right: -8px;
                background: #ff4757;
                color: white;
                font-size: 12px;
                font-weight: bold;
                min-width: 20px;
                height: 20px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 5px;
            `;
            
            icon.style.position = 'relative';
            icon.appendChild(badge);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCounter();
});

window.BookFunctions = {
    renderBooks,
    renderBusinessBooks,
    filterByGenre,
    filterByCategory,
    filterBusinessByGenre,
    searchBooks,
    resetFilters,
    updateSectionTitle,
    toggleFavorite,
    addToCart,
    showNotification
};