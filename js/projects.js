/* Коллекция работ. Первые пять — авторские кейсы; архив содержит демо-примеры.
 * Чтобы добавить работу, скопируйте объект и задайте уникальный id.
 * image: путь к своей картинке (например, assets/images/project.jpg).
 * category: web | app | identity | experiment. featured: показывать на главной.
 * archive: false — не показывать большой кейс в архиве небольших работ.
 * sections: разделы кейса с текстом и изображениями (file, alt).
 * artwork: оформление-заглушка; при наличии image используется картинка.
 */
window.PORTFOLIO_PROJECTS = [
  {
    "id": "yakutia-foundation",
    "title": "Целевой фонд будущих поколений РС(Я)",
    "subtitle": "Редизайн сайта · десктоп и мобильная версия",
    "category": "web",
    "year": "2025",
    "featured": true,
    "archive": false,
    "demo": false,
    "size": "tall",
    "image": "assets/cases/yakutia-foundation-site/hero.png",
    "description": "Редизайн официального сайта Целевого фонда будущих поколений Республики Саха (Якутия). Задача — обновить визуальную систему и сделать информацию удобнее для восприятия, сохранив официальный характер и доверительную коммуникацию.",
    "tags": [
      "Редизайн",
      "Адаптивный дизайн",
      "Figma"
    ],
    "facts": [
      [
        "Формат",
        "Многостраничный сайт"
      ],
      [
        "Объём",
        "19 экранов"
      ],
      [
        "Инструмент",
        "Figma"
      ]
    ],
    "assetBase": "assets/cases/yakutia-foundation-site/",
    "sections": [
      {
        "title": "Новая визуальная система",
        "text": "Спокойная композиция и ясная иерархия помогают работать с большим объёмом информации. Основа типографики — нейтральный гротеск Helvetica Neue.",
        "images": [
          {
            "file": "2.png",
            "alt": "Визуальная система сайта фонда",
            "width": 1157,
            "height": 1753
          },
          {
            "file": "3.png",
            "alt": "Типографика и оформление сайта фонда",
            "width": 1664,
            "height": 899
          }
        ]
      },
      {
        "title": "Десктоп и мобильные экраны",
        "text": "Разработаны 19 экранов для десктопной и мобильной версий. Общий визуальный язык связывает страницы в единую систему.",
        "layout": "grid",
        "images": [
          {
            "file": "4.png",
            "alt": "Десктопный экран фонда",
            "width": 354,
            "height": 712
          },
          {
            "file": "5.png",
            "alt": "Дополнительный десктопный экран фонда",
            "width": 354,
            "height": 712
          },
          {
            "file": "6.png",
            "alt": "Мобильная версия фонда",
            "width": 354,
            "height": 712
          },
          {
            "file": "7.png",
            "alt": "Мобильный экран фонда",
            "width": 354,
            "height": 712
          }
        ]
      },
      {
        "title": "Структура и разделы",
        "text": "В кейс вошли главная страница, новости, закупки, история фонда и контакты.",
        "images": [
          {
            "file": "8.png",
            "alt": "Внутренняя страница сайта фонда",
            "width": 1157,
            "height": 1753
          },
          {
            "file": "11.png",
            "alt": "Информационная страница фонда",
            "width": 1157,
            "height": 1753
          }
        ]
      },
      {
        "title": "Адаптация для телефона",
        "layout": "grid",
        "images": [
          {
            "file": "12.png",
            "alt": "Информационный раздел на мобильном устройстве",
            "width": 354,
            "height": 712
          },
          {
            "file": "13.png",
            "alt": "Мобильная навигация по разделам фонда",
            "width": 354,
            "height": 712
          }
        ]
      },
      {
        "title": "Одна система — разные задачи",
        "images": [
          {
            "file": "14.png",
            "alt": "Финальный экран сайта фонда",
            "width": 1664,
            "height": 899
          },
          {
            "file": "15.png",
            "alt": "Обзор интерфейса фонда",
            "width": 1664,
            "height": 1018
          }
        ]
      }
    ],
    "imageWidth": 1664,
    "imageHeight": 675
  },
  {
    "id": "mpit",
    "title": "Моя профессия — ИТ",
    "subtitle": "Сайт хакатона · десктоп и мобильная версия",
    "category": "web",
    "year": "2023",
    "featured": true,
    "archive": false,
    "demo": false,
    "size": "medium",
    "image": "assets/cases/mpit/LAPTOP & PHONE SCREEN MOCKUP 3 1.png",
    "description": "Сайт хакатона «Моя профессия — ИТ»: быстрое информирование участников и удобная навигация по ключевым разделам мероприятия. Десктопная и мобильная версии объединены узнаваемой визуальной подачей и современным IT-характером.",
    "tags": [
      "Сайт мероприятия",
      "Адаптивный дизайн",
      "Figma"
    ],
    "facts": [
      [
        "Формат",
        "Сайт хакатона"
      ],
      [
        "Платформы",
        "Десктоп + мобильная"
      ],
      [
        "Инструмент",
        "Figma"
      ]
    ],
    "assetBase": "assets/cases/mpit/",
    "sections": [
      {
        "title": "Всё о хакатоне в одном месте",
        "text": "Главная собирает информацию о мероприятии и помогает участникам найти нужный раздел.",
        "images": [
          {
            "file": "Group 19.png",
            "alt": "Главная страница сайта «Моя профессия — ИТ»",
            "width": 1157,
            "height": 1795
          }
        ]
      },
      {
        "title": "Удобно с любого устройства",
        "images": [
          {
            "file": "iPhone Mockup 01FM 1.png",
            "alt": "Мобильная версия сайта хакатона",
            "width": 1664,
            "height": 899
          }
        ]
      },
      {
        "title": "Система страниц",
        "text": "Разработаны шаблон страниц для разных регионов, страница новостей и раздел категорий участников.",
        "layout": "grid",
        "images": [
          {
            "file": "Apple Pro Display XDR-1.png",
            "alt": "Десктопный интерфейс хакатона",
            "width": 1038,
            "height": 583
          },
          {
            "file": "Apple Pro Display XDR.png",
            "alt": "Раздел сайта хакатона",
            "width": 1038,
            "height": 583
          }
        ]
      },
      {
        "title": "Общий визуальный язык",
        "images": [
          {
            "file": "Group 33.png",
            "alt": "Обзор экранов сайта «Моя профессия — ИТ»",
            "width": 1664,
            "height": 1018
          }
        ]
      }
    ],
    "imageWidth": 1664,
    "imageHeight": 1091
  },
  {
    "id": "getpatent",
    "title": "GetPatent AI",
    "subtitle": "Промо-сайт стартапа · 3D-иллюстрации",
    "category": "web",
    "year": "2025",
    "featured": true,
    "archive": false,
    "demo": false,
    "size": "medium",
    "image": "assets/cases/promo-site-getpatent/LAPTOP & PHONE SCREEN MOCKUP 3 1.png",
    "description": "Промо-сайт стартапа GetPatent AI, посвящённого ускорению патентования с помощью AI-инструментов. Задача — понятно объяснить ценность продукта и выстроить путь от знакомства с сервисом к целевому действию.",
    "tags": [
      "Промо-сайт",
      "3D-графика",
      "Figma",
      "Blender"
    ],
    "facts": [
      [
        "Формат",
        "Промо-сайт"
      ],
      [
        "Платформы",
        "Десктоп + мобильная"
      ],
      [
        "Инструменты",
        "Figma, Blender"
      ]
    ],
    "assetBase": "assets/cases/promo-site-getpatent/",
    "sections": [
      {
        "title": "Технологичный продукт — понятная подача",
        "text": "Десктопная и мобильная версии помогают быстро познакомиться с возможностями сервиса.",
        "images": [
          {
            "file": "Group 19.png",
            "alt": "Основной экран GetPatent AI",
            "width": 1157,
            "height": 1753
          },
          {
            "file": "iPhone Mockup 01FM 1.png",
            "alt": "Мобильная версия GetPatent AI",
            "width": 1664,
            "height": 899
          }
        ]
      },
      {
        "title": "Детали интерфейса",
        "layout": "grid",
        "images": [
          {
            "file": "Group 21.png",
            "alt": "Экран интерфейса GetPatent AI — 1",
            "width": 354,
            "height": 712
          },
          {
            "file": "Group 22.png",
            "alt": "Экран интерфейса GetPatent AI — 2",
            "width": 354,
            "height": 712
          },
          {
            "file": "Group 23.png",
            "alt": "Экран интерфейса GetPatent AI — 3",
            "width": 354,
            "height": 712
          },
          {
            "file": "Group 24.png",
            "alt": "Экран интерфейса GetPatent AI — 4",
            "width": 354,
            "height": 712
          }
        ]
      },
      {
        "title": "3D-иллюстрации",
        "text": "Для сайта разработаны объёмные иллюстрации в фирменной стилистике продукта.",
        "images": [
          {
            "file": "Frame 1000004656.png",
            "alt": "3D-иллюстрации для GetPatent AI",
            "width": 1043,
            "height": 2237
          }
        ]
      },
      {
        "title": "От знакомства к действию",
        "text": "Визуальная система подчёркивает технологичность продукта и поддерживает понятный пользовательский путь.",
        "images": [
          {
            "file": "Group 32.png",
            "alt": "Обзор экранов промо-сайта GetPatent AI",
            "width": 1664,
            "height": 1018
          }
        ]
      }
    ],
    "imageWidth": 1664,
    "imageHeight": 1091
  },
  {
    "id": "cleaner",
    "title": "Cleaner",
    "subtitle": "Веб-приложение · учебный проект",
    "category": "app",
    "year": "2025",
    "featured": true,
    "archive": false,
    "demo": false,
    "size": "medium",
    "image": "assets/cases/web-design/Laptop Mockup 01.png",
    "description": "Концепция веб-приложения для порядка в Telegram-подписках. Cleaner помогает разобраться с накопившимися каналами и ботами и сократить информационный шум. Учебный проект по дисциплине «Веб-дизайн».",
    "tags": [
      "Веб-приложение",
      "UI/UX",
      "Учебный проект",
      "Figma"
    ],
    "facts": [
      [
        "Формат",
        "Веб-приложение"
      ],
      [
        "Контекст",
        "Дисциплина «Веб-дизайн»"
      ],
      [
        "Инструмент",
        "Figma"
      ]
    ],
    "assetBase": "assets/cases/web-design/",
    "sections": [
      {
        "title": "Порядок в подписках",
        "text": "Каналы, боты и рассылки со временем накапливаются. Интерфейс помогает ориентироваться в подписках и находить полезную информацию.",
        "images": [
          {
            "file": "Group 19.png",
            "alt": "Основной интерфейс Cleaner",
            "width": 1072,
            "height": 769
          },
          {
            "file": "iPhone Mockup 01FM 1.png",
            "alt": "Мобильный интерфейс Cleaner",
            "width": 1742,
            "height": 941
          }
        ]
      },
      {
        "title": "Экраны и состояния",
        "layout": "grid",
        "images": [
          {
            "file": "Group 20.png",
            "alt": "Экран Cleaner — 1",
            "width": 1072,
            "height": 769
          },
          {
            "file": "Group 21.png",
            "alt": "Экран Cleaner — 2",
            "width": 1072,
            "height": 769
          }
        ]
      },
      {
        "title": "Светлая и тёмная темы",
        "text": "Проработаны обе темы оформления и состояния экранов веб-приложения.",
        "images": [
          {
            "file": "Group 237600.png",
            "alt": "Сравнение светлой и тёмной тем Cleaner",
            "width": 1752,
            "height": 859
          }
        ]
      }
    ],
    "imageWidth": 6000,
    "imageHeight": 4000
  },
  {
    "id": "ecolocal",
    "title": "Эколокал",
    "subtitle": "Мобильное приложение · учебный проект",
    "category": "app",
    "year": "2025",
    "featured": true,
    "archive": false,
    "demo": false,
    "size": "medium",
    "image": "assets/cases/it-project/LAPTOP & PHONE SCREEN MOCKUP 3 1.png",
    "description": "Концепция мобильного приложения об экологической ситуации и комфортной городской среде. Отправная точка проекта — проблемы смога от лесных пожаров и пыли, с которыми сталкиваются жители и туристы. Учебная работа по дисциплине «Разработка ИТ-проекта».",
    "tags": [
      "Мобильное приложение",
      "UI/UX",
      "Учебный проект",
      "Figma"
    ],
    "facts": [
      [
        "Формат",
        "Мобильное приложение"
      ],
      [
        "Тема",
        "Экология городской среды"
      ],
      [
        "Инструмент",
        "Figma"
      ]
    ],
    "assetBase": "assets/cases/it-project/",
    "sections": [
      {
        "title": "Городская среда — в фокусе",
        "text": "Концепция объединяет экологическую информацию и возможности участия в жизни города.",
        "layout": "grid",
        "images": [
          {
            "file": "Group 21.png",
            "alt": "Начальный экран Эколокал",
            "width": 354,
            "height": 712
          },
          {
            "file": "Group 22.png",
            "alt": "Основной экран Эколокал",
            "width": 354,
            "height": 712
          }
        ]
      },
      {
        "title": "Мобильный опыт",
        "images": [
          {
            "file": "iPhone Mockup 01FM 1.png",
            "alt": "Эколокал на мобильном устройстве",
            "width": 1742,
            "height": 941
          }
        ]
      },
      {
        "title": "Сценарии и экраны",
        "layout": "grid",
        "images": [
          {
            "file": "Group 23.png",
            "alt": "Экран приложения Эколокал — 1",
            "width": 354,
            "height": 712
          },
          {
            "file": "Group 24.png",
            "alt": "Экран приложения Эколокал — 2",
            "width": 354,
            "height": 712
          },
          {
            "file": "Group 25.png",
            "alt": "Экран приложения Эколокал — 3",
            "width": 354,
            "height": 712
          },
          {
            "file": "Group 26.png",
            "alt": "Экран приложения Эколокал — 4",
            "width": 354,
            "height": 712
          }
        ]
      },
      {
        "title": "Темы и состояния интерфейса",
        "layout": "grid",
        "images": [
          {
            "file": "1.png",
            "alt": "Вариант оформления Эколокал — 1",
            "width": 354,
            "height": 712
          },
          {
            "file": "2.png",
            "alt": "Вариант оформления Эколокал — 2",
            "width": 354,
            "height": 712
          },
          {
            "file": "3.png",
            "alt": "Вариант оформления Эколокал — 3",
            "width": 354,
            "height": 712
          },
          {
            "file": "4.png",
            "alt": "Вариант оформления Эколокал — 4",
            "width": 354,
            "height": 712
          }
        ]
      }
    ],
    "imageWidth": 1742,
    "imageHeight": 1142
  },
  {
    "id": "bloom",
    "title": "Bloom studies",
    "subtitle": "Исследование формы",
    "category": "experiment",
    "year": "2026",
    "featured": false,
    "artwork": "bloom",
    "size": "tall",
    "image": "",
    "description": "Небольшой графический эксперимент: один лепесток, повторённый по кругу, становится целой визуальной системой. Пример работы для архива.",
    "tags": [
      "Графика",
      "Форма",
      "Эксперимент"
    ]
  },
  {
    "id": "type",
    "title": "Type in motion",
    "subtitle": "Типографический плакат",
    "category": "experiment",
    "year": "2026",
    "featured": false,
    "artwork": "type",
    "size": "medium",
    "image": "",
    "description": "Демонстрационный плакат, в котором движение передано через повторение, смещение и ритм типографики.",
    "tags": [
      "Типографика",
      "Плакат"
    ]
  },
  {
    "id": "still",
    "title": "Still",
    "subtitle": "Визуальный язык кофейни",
    "category": "identity",
    "year": "2026",
    "featured": false,
    "artwork": "still",
    "size": "tall",
    "image": "",
    "description": "Демонстрационная айдентика небольшой кофейни. Мягкая палитра и лаконичный знак вокруг идеи замедления и приятной паузы.",
    "tags": [
      "Айдентика",
      "Упаковка"
    ]
  },
  {
    "id": "orbit",
    "title": "Orbit",
    "subtitle": "Геометрические заметки",
    "category": "experiment",
    "year": "2026",
    "featured": false,
    "artwork": "orbit",
    "size": "medium",
    "image": "",
    "description": "Визуальная заметка о пересечении орбит. Простая геометрия становится самостоятельной композицией.",
    "tags": [
      "Геометрия",
      "Постер"
    ]
  },
  {
    "id": "index",
    "title": "Index / 001",
    "subtitle": "Концепт культурной платформы",
    "category": "web",
    "year": "2026",
    "featured": false,
    "artwork": "index",
    "size": "medium",
    "image": "",
    "description": "Демонстрационный экран культурной платформы. Каталог событий с акцентом на типографику, иерархию и простую навигацию.",
    "tags": [
      "Интерфейсы",
      "Концепт"
    ]
  },
  {
    "id": "field",
    "title": "Field notes",
    "subtitle": "Коллекция цветовых наблюдений",
    "category": "experiment",
    "year": "2026",
    "featured": false,
    "artwork": "field",
    "size": "tall",
    "image": "",
    "description": "Демонстрационная серия цветовых исследований. Наблюдения за природными оттенками, собранные в абстрактные композиции.",
    "tags": [
      "Цвет",
      "Композиция"
    ]
  }
];
