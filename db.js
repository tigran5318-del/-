const Books = [
    {
        id: "1",
        name: "Семь способов засолки душ",
        author: "Вера Богданова",
        rasm: "https://api.bookmate.ru/assets/books-covers/18/0c/TDWHpiS6-ipad.jpeg?image_hash=be0907364bac6ed64900ac729cd0258d",
        genre: "Детектив",
        category: "Новинки",
        description: "Психологический триллер о загадочных исчезновениях в маленьком городке.",
        year: 2023,
        pages: 320,
        rating: 4.7,
        price: 299
    },
    {
        id: "2",
        name: "Дочерь Кольбели",
        author: "Александра Яковлева",
        rasm: "https://api.bookmate.ru/assets/books-covers/e5/6b/Hb7hpn6d-ipad.jpeg?image_hash=37e95175af4f282c0285322991a69c98",
        genre: "Роман",
        category: "Популярное",
        description: "Семейная сага о нескольких поколениях женщин.",
        year: 2023,
        pages: 456,
        rating: 4.3,
        price: 349
    },
    {
        id: "3",
        name: "Ресторан 06:06:06",
        author: "Ю Джин Пом",
        rasm: "https://api.bookmate.ru/assets/books-covers/43/fa/fEEuvHvw-ipad.jpeg?image_hash=7b4846e42b3b5428e3364e294223f520",
        genre: "Мистика",
        category: "Новинки",
        description: "Сверхъестественные события в таинственном ресторане.",
        year: 2023,
        pages: 288,
        rating: 4.5,
        price: 279
    },
    {
        id: "4",
        name: "Чеклист «79 психотроков»",
        author: "Игорь Рызов",
        rasm: "https://api.bookmate.ru/assets/books-covers/8a/cc/uekQYMDS-ipad.jpeg?image_hash=028515624862b589064e42296501090d",
        genre: "Психология",
        category: "Популярное",
        description: "Практическое руководство по психологии влияния.",
        year: 2022,
        pages: 192,
        rating: 4.8,
        price: 199
    },
    {
        id: "5",
        name: "Смех лисы",
        author: "Шамиль Идиатуллин",
        rasm: "https://api.bookmate.ru/assets/books-covers/5a/1c/Zkguqez0-ipad.png?image_hash=2ae3690eb4fdcafef6664d3f89d8548e",
        genre: "Юмор",
        category: "Популярное",
        description: "Сборник сатирических рассказов о современной жизни.",
        year: 2022,
        pages: 176,
        rating: 4.4,
        price: 189
    },
    {
        id: "6",
        name: "К себе нежно. Книга о том, как ценить себя",
        author: "Ольга Примаченко",
        rasm: "https://api.bookmate.ru/assets/books-covers/45/18/lWdpqqMs-ipad.jpeg?image_hash=3438602767d3f320510b22068da09d64",
        genre: "Саморазвитие",
        category: "Бестселлеры",
        description: "Руководство по самопринятию и заботе о себе.",
        year: 2021,
        pages: 240,
        rating: 4.9,
        price: 0
    },
    {
        id: "7",
        name: "48 законов власти",
        author: "Роберт Грин",
        rasm: "https://api.bookmate.ru/assets/books-covers/1a/76/EyzwI2nf-ipad.jpeg?image_hash=9581ff45401511bd1052ce6213cdc11b",
        genre: "Бизнес",
        category: "Бестселлеры",
        description: "Классическое руководство по стратегии и власти.",
        year: 1998,
        pages: 480,
        rating: 4.6,
        price: 399
    },
    {
        id: "8",
        name: "Со мной все в порядке",
        author: "Наталья Кисельникова",
        rasm: "https://api.bookmate.ru/assets/books-covers/48/d4/OJdAcdJH-ipad.jpeg?image_hash=0c845c555bd155592ecd6d48084630ff",
        genre: "Психология",
        category: "Популярное",
        description: "Книга о принятии себя и психологической устойчивости.",
        year: 2022,
        pages: 224,
        rating: 4.7,
        price: 249
    },
    {
        id: "9",
        name: "30 привычек за дней. План-календарь",
        author: "Деймон Захар",
        rasm: "https://api.bookmate.ru/assets/books-covers/4a/7b/bhOAYuSy-ipad.jpeg?image_hash=9f194356232a6602cdaba904211ca460",
        genre: "Саморазвитие",
        category: "Новинки",
        description: "Практический план по формированию полезных привычек.",
        year: 2023,
        pages: 160,
        rating: 4.2,
        price: 179
    },
    {
        id: "10",
        name: "Дело Достоевского",
        author: "Рэндалл Манро",
        rasm: "https://api.bookmate.ru/assets/books-covers/87/37/GrFRGH9i-ipad.jpeg?image_hash=3c1e92579e60d1a77f5a23bde6525bbc",
        genre: "Детектив",
        category: "Популярное",
        description: "Современный детектив с элементами классики.",
        year: 2023,
        pages: 352,
        rating: 4.4,
        price: 329
    },
    {
        id: "11",
        name: "Я иду искать: Подлинные истории о российских маньяках",
        author: "Ева Маркачева",
        rasm: "https://api.bookmate.ru/assets/books-covers/2f/97/X38GLBuX-ipad.jpeg?image_hash=9a6db8285512943624156356f59ecd32",
        genre: "Криминал",
        category: "Новинки",
        description: "Документальное исследование самых громких преступлений.",
        year: 2023,
        pages: 400,
        rating: 4.6,
        price: 369
    },
    {
        id: "12",
        name: "Темная психология и манипуляция. Нападай и защищайся",
        author: "Джеймс Скотт",
        rasm: "https://api.bookmate.ru/assets/books-covers/4f/84/OctAXoKC-ipad.jpeg?image_hash=bf63193d1fa23187e0a8f65e6b6433b5",
        genre: "Психология",
        category: "Популярное",
        description: "Книга о принятии себя и психологической устойчивости.",
        year: 2023,
        pages: 229,
        rating: 4.9,
        price: 219
    }]

const BusinessBooks = [
    {
        id: "b1",
        title: "Руководство богатого папы по инвестированию",
        author: "Роберт Кийосаки",
        publisher: "Манн, Иванов и Фербер",
        genre: "Бизнес",
        cover: "https://i1.mybook.io/p/x378/book_covers/06/83/0683b0e6-5204-48ed-9dac-d62cb80fb27a.jpg"
    },
    {
        id: "b2",
        title: "Доверие. Социальные технологии",
        author: "Игорь Манн",
        publisher: "Манн, Иванов и Фербер",
        genre: "Бизнес",
        cover: "https://i3.mybook.io/p/x378/book_covers/ce/c2/cec2ffe7-1982-46ca-b2d6-68dfa5eaa223.jpg"
    },
    {
        id: "b3",
        title: "Детский мир: перезагрузка бизнеса",
        author: "Лаборатория «Смысл»",
        publisher: "Альпина Паблишер",
        genre: "Бизнес",
        cover: "https://i3.mybook.io/p/x378/book_covers/aa/35/aa356963-d749-4764-8016-820d710cc3ce.jpg"
    },
    {
        id: "b4",
        title: "Позитивная организация",
        author: "Роберт Куинн",
        publisher: "Олимп-Бизнес",
        genre: "Бизнес",
        cover: "https://i3.mybook.io/p/x378/book_covers/0e/d2/0ed23f68-4996-4176-810f-9c0bb601b083.jpg"
    },
    {
        id: "b5",
        title: "Переговоры за минуту. Экспресс-курс",
        author: "Завтра Трымбовский",
        publisher: "Манн, Иванов и Фербер",
        genre: "Бизнес",
        cover: "https://i2.mybook.io/p/x378/book_covers/57/57/5757c515-677f-4244-bb34-4c47ec677c98.jpg"
    },
    {
        id: "b6",
        title: "Воронки продаж по методу HubSpot",
        author: "Donald Miller",
        publisher: "Альпина Паблишер",
        genre: "Бизнес",
        cover: "https://i3.mybook.io/p/x378/book_covers/f1/2b/f12bf860-e242-441d-af67-aaf587be4653.jpg"
    },
    {
        id: "b7",
        title: "Экономика. Для тех, кто про нее не знает",
        author: "Сергей Нечаев",
        publisher: "Манн, Иванов и Фербер",
        genre: "Бизнес",
        cover: "https://i1.mybook.io/p/x378/book_covers/89/a8/89a82bc7-b0f6-46ac-94ac-b8cf45b8513a.jpg"
    },
    {
        id: "b8",
        title: "Я, редактор. Настольная книга",
        author: "Николай Кононов",
        publisher: "Олимп-Бизнес",
        genre: "Бизнес",
        cover: "https://i2.mybook.io/p/x378/book_covers/5b/ac/5bac0d4c-0dea-4642-a482-8fd8c1a77c53.jpg"
    },
    {
        id: "b9",
        title: "Бизнес на пальцах. История успеха",
        author: "Donald Miller",
        publisher: "Альпина Паблишер",
        genre: "Бизнес",
        cover: "https://i2.mybook.io/p/x378/book_covers/06/79/0679ecac-54ad-4b52-b5ca-428b1c46be0d.jpg"
    },
    {
        id: "b10",
        title: "Путь: как ускорить продвижение?",
        author: "Тони Роббинс",
        publisher: "Манн, Иванов и Фербер",
        genre: "Бизнес",
        cover: "https://i3.mybook.io/p/x378/book_covers/17/99/17996765-6e2a-466c-b13c-12ed52303ab2.jpg"
    },
        {
        id: "b11",
        title: "Путь: как ускорить продвижение?",
        author: "Тони Роббинс",
        publisher: "Манн, Иванов и Фербер",
        genre: "Бизнес",
        cover: "https://api.bookmate.ru/assets/books-covers/54/6e/z6UF3K7I-ipad.png?image_hash=1fc9ac4c73a33201de669de649bc5e81"
    },
    {
        id: "b12",
        title: "Чему не учат в Гарвардской школе бизнеса",
        author: "Марк Маккормак",
        publisher: "Манн, Иванов и Фербер",
        genre: "Бизнес",
        cover: "https://api.bookmate.ru/assets/books-covers/ed/37/k3gVromn-ipad.jpeg?image_hash=8228494bb4ddeef2d9b42f5ee8cd4845"
    }
];