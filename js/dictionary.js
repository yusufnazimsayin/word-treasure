'use strict';

const CATEGORIES = [
    {
        "en": "People",
        "es": "La gente",
        "tr": "İnsanlar"
    },
    {
        "en": "Appearance and personality",
        "es": "La apariencia y la personalidad",
        "tr": "Dış görünüş ve kişilik"
    },
    {
        "en": "Body",
        "es": "El cuerpo",
        "tr": "Vücut"
    },
    {
        "en": "House",
        "es": "La casa",
        "tr": "Ev"
    },
    {
        "en": "Self care",
        "es": "Los cuidados personales",
        "tr": "Kişisel bakım"
    },
    {
        "en": "Clothes",
        "es": "La ropa",
        "tr": "Kıyafetler"
    },
    {
        "en": "Eating and drinking",
        "es": "Comer y beber",
        "tr": "Yeme içme"
    },
    {
        "en": "Food",
        "es": "La comida",
        "tr": "Yiyecek"
    },
    {
        "en": "Pastimes",
        "es": "Los pasatiempos",
        "tr": "Hobiler"
    },
    {
        "en": "Going out",
        "es": "Salir",
        "tr": "Dışarı çıkmak"
    },
    {
        "en": "Animals",
        "es": "Los animales",
        "tr": "Hayvanlar"
    },
    {
        "en": "Plants",
        "es": "Las Plantas",
        "tr": "Bitkiler"
    },
    {
        "en": "City / Countryside",
        "es": "La ciudad / El campo",
        "tr": "Şehir / Kırsal"
    },
    {
        "en": "Shopping",
        "es": "Ir de compras",
        "tr": "Alışveriş"
    },
    {
        "en": "Post office and bank",
        "es": "El correos y el banco",
        "tr": "Postane ve banka"
    },
    {
        "en": "Phonecalls and letters",
        "es": "Llamadas y cartas",
        "tr": "Telefon görüşmeleri ve mektuplar"
    },
    {
        "en": "Driving",
        "es": "Conducir",
        "tr": "Araba kullanmak"
    },
    {
        "en": "Transportation",
        "es": "El transporte",
        "tr": "Taşıma"
    },
    {
        "en": "Vacationes / Outdoor",
        "es": "Las vacaciones / Aire libre",
        "tr": "Tatil / Açık hava"
    },
    {
        "en": "Farm",
        "es": "La granja",
        "tr": "Çiftlik"
    },
    {
        "en": "Work",
        "es": "El trabajo",
        "tr": "İş"
    },
    {
        "en": "Health",
        "es": "La salud",
        "tr": "Sağlık"
    },
    {
        "en": "Education",
        "es": "La educación",
        "tr": "Eğitim"
    },
    {
        "en": "Shape and sizes",
        "es": "Las formas y los tamaños",
        "tr": "Şekiller ve boyutlar"
    },
    {
        "en": "Numbers",
        "es": "Los números",
        "tr": "Sayılar"
    },
    {
        "en": "Sport",
        "es": "El deporte",
        "tr": "Spor"
    },
    {
        "en": "Celebrations",
        "es": "Las celebraciones",
        "tr": "Kutlamalar"
    },
    {
        "en": "Days and dates",
        "es": "Los días y las fechas",
        "tr": "Günler ve tarihler"
    },
    {
        "en": "Time",
        "es": "La hora",
        "tr": "Zaman / Saat"
    },
    {
        "en": "Weather and seasons",
        "es": "El tiempo y las estaciones",
        "tr": "Hava durumu ve mevsimler"
    },
    {
        "en": "World and universe",
        "es": "El mundo y el universo",
        "tr": "Dünya ve evren"
    },
    {
        "en": "Politics",
        "es": "La política",
        "tr": "Siyaset"
    },
    {
        "en": "Describing things",
        "es": "Describir cosas",
        "tr": "Nesneleri tanımlama"
    },
    {
        "en": "Colors",
        "es": "Los colores",
        "tr": "Renkler"
    },
    {
        "en": "In, on, under",
        "es": "En, sobre, debajo de",
        "tr": "İçinde, üstünde, altında"
    },
    {
        "en": "Action words",
        "es": "Los verbos de acción",
        "tr": "Eylem fiilleri"
    },
    {
        "en": "Phrases and expressions",
        "es": "Las frases y las expresiones",
        "tr": "Cümleler ve ifadeler"
    },
    {
        "en": "Other",
        "es": "La otra",
        "tr": "Diğer"
    }
];

const DICTIONARY = {
    "Phrases and expressions" : [
        {
            "en" : "Hello",
            "es" : "¡Hola!",
            "tr" : "Merhaba"
        },
        {
            "en" : "Goodbye!",
            "es" : "¡Adiós!",
            "tr" : "Hoşçakal!"
        },
        {
            "en": "Good morning!",
            "es": "¡Buenos dias!",
            "tr": "Günaydın",
            "en_": "Good morning! How did you sleep?",
            "es_": "¡Buenos días! ¿Cómo dormiste?",
            "tr_": "Günaydın! Nasıl uyudun?"
        },
        {
            "en" : "See you later",
            "es" : "¡Hasta pronto!",
            "tr" : "Görüşmek üzere"
        },
        {
            "en": "It's snowing.",
            "es": "Nieva.",
            "tr": "Kar yağıyor.",
            "en_": "It's snowing heavily outside.",
            "es_": "Nieva mucho afuera.",
            "tr_": "Dışarıda çok kar yağıyor."
        },
        {
            "en": "It's cold.",
            "es": "Hace frío.",
            "tr": "Hava soğuk.",
            "en_": "It's cold outside today.",
            "es_": "Hace frío afuera hoy.",
            "tr_": "Bugün dışarıda hava soğuk."
        },
        {
            "en": "It's foggy",
            "es": "Hay niebla.",
            "tr": "Hava sisli.",
            "en_": "It's foggy in the mountains.",
            "es_": "Hay niebla en las montañas.",
            "tr_": "Dağlarda hava sisli."
        },
        {
            "en": "It's windy.",
            "es": "Hace viento.",
            "tr": "Hava rüzgârlı.",
            "en_": "It's windy outside.",
            "es_": "Hace viento afuera.",
            "tr_": "Dışarıda hava rüzgârlı."
        },
        {
            "en": "I'm hot",
            "es": "Tengo calor.",
            "tr": "Sıcakladım.",
            "en_": "I'm hot because of the sun.",
            "es_": "Tengo calor por el sol.",
            "tr_": "Güneşten sıcakladım."
        },
        {
            "en": "What’s the weather like?",
            "es": "¿Qué tiempo hace?",
            "tr": "Hava nasıl?",
            "en_": "What's the weather like today?",
            "es_": "¿Qué tiempo hace hoy?",
            "tr_": "Bugün hava nasıl?"
        },
        {
            "en": "The weather is nice.",
            "es": "Hace bueno.",
            "tr": "Hava güzel.",
            "en_": "The weather is nice for a walk.",
            "es_": "Hace bueno para dar un paseo.",
            "tr_": "Yürüyüş için hava güzel."
        },
        {
            "en": "The sun is shining.",
            "es": "Brilla el sol.",
            "tr": "Güneş parlıyor.",
            "en_": "The sun is shining brightly today.",
            "es_": "Brilla el sol intensamente hoy.",
            "tr_": "Bugün güneş parlak parlıyor."
        },
        {
            "en": "It's raining.",
            "es": "Llueve.",
            "tr": "Yağmur yağıyor",
            "en_": "It's raining outside.",
            "es_": "Está lloviendo afuera.",
            "tr_": "Dışarıda yağmur yağıyor."
        },
        {
            "en": "It’s one o’clock",
            "es": "es la una",
            "tr": "saat bir",
            "en_": "It’s one o’clock now.",
            "es_": "Es la una ahora.",
            "tr_": "Şu an saat bir."
        },
        {
            "en": "It’s three o’clock",
            "es": "son las tres",
            "tr": "saat üç",
            "en_": "It’s three o’clock in the afternoon.",
            "es_": "Son las tres de la tarde.",
            "tr_": "Öğleden sonra saat üç."
        },
        {
            "en" : "How old are you?",
            "es" : "¿Cuántos años tienes?",
            "tr" : "Kaç yaşındasın?"
        },
        {
            "en" : "I am nineteen",
            "es" : "Tengo diecinueve años",
            "tr" : "Ondokuz yaşındayım"
        },
        {
            "en" : "My name is ...",
            "es" : "Me llamo ...",
            "tr" : "Benim adım ...",
            "en_": "My name is Maria.",
            "es_": "Me llamo Maria.",
            "tr_": "Benim adım Maria."
        },
        {
            "en" : "His name is ...",
            "es" : "El se llama ...",
            "tr" : "Onun adı ...",
            "en_": "His name is Alex.",
            "es_": "El llamo Alex.",
            "tr_": "Onun adı Alex."
        },
        {
            "en" : "How are you?",
            "es" : "¿Qué tal?",
            "tr" : "Nasılsın?"
        },
        {
            "en" : "Very well, thank you",
            "es" : "Muy bien, ¡gracias!",
            "tr" : "Çok iyiyim teşekkür ederim"
        },
        {
            "en" : "What is your name?",
            "es" : "¿Cómo te llamas?",
            "tr" : "Adın ne?"
        },
        {
            "en": "a kilo of ...",
            "es": "un kilo de ...",
            "tr": "bir kilo ...",
            "en_": "I want to buy a kilo of apples.",
            "es_": "Quiero comprar un kilo de manzanas.",
            "tr_": "Bir kilo elma almak istiyorum."
        },
        {
            "en": "half a kilo of ...",
            "es": "medio kilo de ...",
            "tr": "yarım kilo ...",
            "en_": "She needs half a kilo of tomatoes.",
            "es_": "Ella necesita medio kilo de tomates.",
            "tr_": "Yarım kilo domatese ihtiyacı var."
        },
        {
            "en": "How much is ...?",
            "es": "¿Cuánto cuesta ...?",
            "tr": "Kaç para?",
            "en_": "How much is this book?",
            "es_": "¿Cuánto cuesta este libro?",
            "tr_": "Bu kitap kaç para?"
        },
        {
            "en": "Do you have change?",
            "es": "¿Tiene cambio?",
            "tr": "Bozuk paranız var mı?",
            "en_": "Do you have change for a ten-dollar bill?",
            "es_": "¿Tiene cambio para un billete de diez dólares?",
            "tr_": "On dolarlık bozuk paranız var mı?"
        },
        {
            "en": "Yours sincerely",
            "es": "Le saluda atentamente",
            "tr": "Saygılarımla",
            "en_": "Yours sincerely, John Smith.",
            "es_": "Le saluda atentamente, John Smith.",
            "tr_": "Saygılarımla, John Smith."
        },
        {
            "en": "Dear sir / madam",
            "es": "Muy señor mío / Estimada señora",
            "tr": "Sayın bay / bayan",
            "en_": "Dear sir / madam, I am writing to complain.",
            "es_": "Muy señor mío, le escribo para quejarme.",
            "tr_": "Sayın bay / bayan, şikayet etmek için yazıyorum."
        },
        {
            "en": "Dear ...",
            "es": "Querida ...",
            "tr": "Değerli ...",
            "en_": "Dear Maria, thank you for your letter.",
            "es_": "Querida Maria, gracias por tu carta.",
            "tr_": "Değerli Maria, mektubun için teşekkür ederim."
        },
        {
            "en": "How far is ...?",
            "es": "¿A qué distancia está ...?",
            "tr": "... ne kadar uzakta?",
            "en_": "How far is the train station from here?",
            "es_": "¿A qué distancia está la estación de tren desde aquí?",
            "tr_": "Tren istasyonu buradan ne kadar uzakta?"
        },
        {
            "en": "No smoking",
            "es": "Prohibido fumar",
            "tr": "Sigara içmek yasaktır",
            "en_": "No smoking is allowed on the train.",
            "es_": "Prohibido fumar en el tren.",
            "tr_": "Trende sigara içmek yasaktır."
        },
        {
            "en": "Fasten your seatbelts!",
            "es": "¡Abrocharse el cinturón!",
            "tr": "Emniyet kemerinizi bağlayın!",
            "en_": "Fasten your seatbelts before takeoff.",
            "es_": "¡Abrocharse el cinturón antes del despegue!",
            "tr_": "Kalkıştan önce emniyet kemerinizi bağlayın!"
        },
        {
            "en": "Sleep well!",
            "es": "¡Qué duermas bien!",
            "tr": "İyi uykular!",
            "en_": "Sleep well! You have a big day tomorrow.",
            "es_": "¡Qué duermas bien! Mañana tienes un gran día.",
            "tr_": "İyi uykular! Yarın büyük bir gün seni bekliyor."
        },
        {
            "en": "Goodnight!",
            "es": "¡Buenas noches!",
            "tr": "İyi geceler!",
            "en_": "Goodnight! See you in the morning.",
            "es_": "¡Buenas noches! Nos vemos por la mañana.",
            "tr_": "İyi geceler! Sabah görüşürüz."
        },
        {
            "en": "Enjoy your meal",
            "es": "¡Que aproveche!",
            "tr": "Afiyet olsun!",
            "en_": "Enjoy your meal! Everything looks delicious.",
            "es_": "¡Que aproveche! Todo se ve delicioso.",
            "tr_": "Afiyet olsun! Her şey harika görünüyor."
        }
    ],
    "Other" : [
        {
            "en" : "to say",
            "es" : "decir",
            "tr" : "söylemek",
            "en_": "She wanted to say something important.",
            "es_": "Ella quería decir algo importante.",
            "tr_": "O önemli bir şey söylemek istedi."
        },
        {
            "en" : "to shake hands",
            "es" : "dar la mano",
            "tr" : "el sıkışmak",
            "en_": "They shook hands after signing the contract.",
            "es_": "Se dieron la mano después de firmar el contrato.",
            "tr_": "Sözleşmeyi imzaladıktan sonra el sıkıştılar."
        },
        {
            "en" : "to introduce",
            "es" : "presentar",
            "tr" : "tanıtmak",
            "en_": "I would like to introduce my friend Yusuf.",
            "es_": "Me gustaría presentar a mi amiga Yusuf.",
            "tr_": "Arkadaşım Yusuf'u tanıştırmak istiyorum."
        },
        {
            "en" : "to meet",
            "es" : "encontrarse con",
            "tr" : "tanışmak",
            "en_": "I will meet my new colleagues next week.",
            "es_": "Me encontraré con mis nuevos colegas la próxima semana.",
            "tr_": "Gelecek hafta yeni iş arkadaşlarımla tanışacağım."
        },
        {
            "en" : "to chat",
            "es" : "charlar",
            "tr" : "sohbet etmek",
            "en_": "We like to chat online every evening.",
            "es_": "Nos gusta charlar en línea todas las noches.",
            "tr_": "Her akşam çevrimiçi sohbet etmeyi seviyoruz."
        },
        {
            "en" : "to be related",
            "es" : "ser parientes",
            "tr" : "akraba olmak",
            "en_": "They are related through their grandparents.",
            "es_": "Ellos son parientes por parte de sus abuelos.",
            "tr_": "Onlar büyükanneleri ve büyükbabaları sayesinde akrabadırlar."
        },
        {
            "en" : "to bring up",
            "es" : "criar",
            "tr" : "büyütmek",
            "en_": "They decided to bring up their children with love.",
            "es_": "Decidieron criar a sus hijos con amor.",
            "tr_": "Çocuklarını sevgiyle büyütmeye karar verdiler."
        },
        {
            "en" : "to be fond of",
            "es" : "tenerle cariño",
            "tr" : "düşkün olmak",
            "en_": "She is very fond of her pet dog.",
            "es_": "Ella le tiene mucho cariño a su perro.",
            "tr_": "O, evcil köpeğine çok düşkündür."
        },
        {
            "en" : "to love",
            "es" : "querer",
            "tr" : "sevmek",
            "en_": "I love spending time with my family.",
            "es_": "Quiero pasar tiempo con mi familia.",
            "tr_": "Ailemle vakit geçirmeyi seviyorum."
        },
        {
            "en" : "to work",
            "es" : "trabajar",
            "tr" : "çalışmak",
            "en_": "He works in a bank.",
            "es_": "Él trabaja en un banco.",
            "tr_": "O, bir bankada çalışıyor."
        },
        {
            "en" : "to be born",
            "es" : "nacer",
            "tr" : "doğmak",
            "en_": "She was born in June.",
            "es_": "Ella nació en junio.",
            "tr_": "O, Haziran ayında doğdu."
        },
        {
            "en" : "to get married",
            "es" : "casarse",
            "tr" : "evlenmek",
            "en_": "They decided to get married next year.",
            "es_": "Decidieron casarse el próximo año.",
            "tr_": "Gelecek yıl evlenmeye karar verdiler."
        },
        {
            "en" : "to die",
            "es" : "morirse",
            "tr" : "ölmek",
            "en_": "Many plants die without enough water.",
            "es_": "Muchas plantas se mueren sin suficiente agua.",
            "tr_": "Birçok bitki yeterince su olmazsa ölür."
        },
        {
            "en" : "to frown",
            "es" : "fruncir el ceño",
            "tr" : "kaşlarını çatmak",
            "en_": "She frowned when she heard the bad news.",
            "es_": "Ella frunció el ceño al escuchar las malas noticias.",
            "tr_": "Kötü haberi duyunca kaşlarını çattı."
        },
        {
            "en" : "to smile",
            "es" : "sonreírse",
            "tr" : "gülümsemek",
            "en_": "He smiled warmly when he saw his old friend.",
            "es_": "Él se sonrió cálidamente al ver a su viejo amigo.",
            "tr_": "Eski arkadaşını görünce sıcak bir şekilde gülümsedi."
        },
        {
            "en" : "to laugh",
            "es" : "reírse",
            "tr" : "gülmek",
            "en_": "She laughed heartily at the funny joke.",
            "es_": "Ella se rió con ganas del chiste gracioso.",
            "tr_": "Komik şakaya yürekten güldü."
        },
        {
            "en" : "to cry",
            "es" : "llorar",
            "tr" : "ağlamak",
            "en_": "He started to cry after watching the sad movie.",
            "es_": "Él comenzó a llorar después de ver la película triste.",
            "tr_": "Üzücü filmi izledikten sonra ağlamaya başladı."
        },
        {
            "en" : "to stand up",
            "es" : "ponerse de pie",
            "tr" : "ayağa kalkmak",
            "en_": "He quickly stood up when the teacher called his name.",
            "es_": "Él se puso de pie rápidamente cuando la maestra llamó su nombre.",
            "tr_": "Öğretmen ismini söylediğinde hemen ayağa kalktı."
        },
        {
            "en" : "to be standing",
            "es" : "estar de pie",
            "tr" : "ayakta durmak",
            "en_": "She was standing near the window waiting for the bus.",
            "es_": "Ella estaba de pie cerca de la ventana esperando el autobús.",
            "tr_": "Otobüsü beklerken pencerenin yanında ayakta duruyordu."
        },
        {
            "en" : "to kneel down",
            "es" : "arrodillarse",
            "tr" : "diz çökmek",
            "en_": "He knelt down to tie his shoe.",
            "es_": "Él se arrodilló para atarse el zapato.",
            "tr_": "Ayakkabısını bağlamak için diz çöktü."
        },
        {
            "en" : "to be kneeling",
            "es" : "estar de rodillas",
            "tr" : "dizüstü durmak",
            "en_": "She was kneeling by the garden to plant flowers.",
            "es_": "Ella estaba de rodillas en el jardín para plantar flores.",
            "tr_": "Çiçek dikmek için bahçede dizüstü duruyordu."
        },
        {
            "en" : "to lie down",
            "es" : "tumbarse",
            "tr" : "uzanmak",
            "en_": "He decided to lie down and rest after a long day.",
            "es_": "Él decidió tumbarse y descansar después de un día largo.",
            "tr_": "Uzun bir günün ardından uzanıp dinlenmeye karar verdi."
        },
        {
            "en" : "to be lying down",
            "es" : "estar echado(a)",
            "tr" : "uzanmış olmak",
            "en_": "She is lying down on the sofa watching TV.",
            "es_": "Ella está echada en el sofá viendo la televisión.",
            "tr_": "Televizyon izlerken kanepede uzanmış durumda."
        },
        {
            "en" : "to sit down",
            "es" : "sentarse",
            "tr" : "oturmak",
            "en_": "He sat down at the table to eat his lunch.",
            "es_": "Él se sentó en la mesa para comer su almuerzo.",
            "tr_": "Öğle yemeğini yemek için masaya oturdu."
        },
        {
            "en" : "to be sitting down",
            "es" : "estar sentado(a)",
            "tr" : "oturmuş olmak",
            "en_": "She is sitting down by the window reading a book.",
            "es_": "Ella está sentada junto a la ventana leyendo un libro.",
            "tr_": "Pencerenin yanında oturmuş kitap okuyor."
        },
        {
            "en": "to dry",
            "es": "secar",
            "tr": "kurutmak",
            "en_": "They dried the clothes outside in the sun.",
            "es_": "Ellos secaron la ropa afuera al sol.",
            "tr_": "Onlar kıyafetleri dışarıda güneşte kuruttular."
        },
        {
            "en": "to take bath",
            "es": "bañarse",
            "tr": "banyo yapmak",
            "en_": "He takes a bath every evening before dinner.",
            "es_": "Él se baña todas las tardes antes de la cena.",
            "tr_": "O, her akşam yemekten önce banyo yapar."
        },
        {
            "en": "to splash",
            "es": "salpicar",
            "tr": "sıçramak",
            "en_": "The children splashed water while playing in the pool.",
            "es_": "Los niños salpicaron agua mientras jugaban en la piscina.",
            "tr_": "Çocuklar havuzda oynarken su sıçrattılar."
        },
        {
            "en": "to smell sweet",
            "es": "oler bien",
            "tr": "güzel kokmak",
            "en_": "The flowers smell sweet in the morning.",
            "es_": "Las flores huelen bien por la mañana.",
            "tr_": "Sabahları çiçekler güzel kokar."
        },
        {
            "en": "to fall asleep",
            "es": "dormirse",
            "tr": "uykuya dalmak",
            "en_": "He fell asleep while watching TV.",
            "es_": "Se durmió viendo la televisión.",
            "tr_": "Televizyon izlerken uykuya daldı."
        },
        {
            "en": "to dream",
            "es": "soñar",
            "tr": "rüya görmek",
            "en_": "I dreamed about flying last night.",
            "es_": "Anoche soñé que volaba.",
            "tr_": "Dün gece uçtuğumu rüya gördüm."
        },
        {
            "en": "to sleep",
            "es": "dormir",
            "tr": "uyumak",
            "en_": "He usually sleeps eight hours a night.",
            "es_": "Normalmente duerme ocho horas por noche.",
            "tr_": "Genellikle geceleri sekiz saat uyur."
        },
        {
            "en": "to turn off",
            "es": "apagar",
            "tr": "kapamak",
            "en_": "She turned off the TV before bed.",
            "es_": "Apagó la televisión antes de acostarse.",
            "tr_": "Yatmadan önce televizyonu kapattı."
        },
        {
            "en": "to get up",
            "es": "levantarse",
            "tr": "yataktan kalkmak",
            "en_": "She gets up as soon as the alarm goes off.",
            "es_": "Ella se levanta en cuanto suena el despertador.",
            "tr_": "Alarm çalar çalmaz yataktan kalkar."
        },
        {
            "en": "to tidy up",
            "es": "poner orden",
            "tr": "düzene sokmak",
            "en_": "She tidied up her room before sleeping.",
            "es_": "Puso orden en su habitación antes de dormir.",
            "tr_": "Uyumadan önce odasını düzene soktu."
        },
        {
            "en": "to go to bed",
            "es": "acostarse",
            "tr": "yatmak",
            "en_": "I usually go to bed at eleven.",
            "es_": "Normalmente me acuesto a las once.",
            "tr_": "Genellikle saat on birde yatarım."
        },
        {
            "en": "to wake up",
            "es": "despertarse",
            "tr": "uyanmak",
            "en_": "I usually wake up at 7 a.m.",
            "es_": "Normalmente me despierto a las 7 a.m.",
            "tr_": "Genellikle sabah 7'de uyanırım."
        },
        {
            "en": "to yawn",
            "es": "bostezar",
            "tr": "esnemek",
            "en_": "He yawned loudly during the meeting.",
            "es_": "Bostezó fuertemente durante la reunión.",
            "tr_": "Toplantı sırasında yüksek sesle esnedi."
        },
        {
            "en": "to snore",
            "es": "roncar",
            "tr": "horlamak",
            "en_": "He snores loudly when he is tired.",
            "es_": "Ronca fuerte cuando está cansado.",
            "tr_": "Yorgun olduğunda yüksek sesle horlar."
        },
        {
            "en": "to make",
            "es": "hacer",
            "tr": "yapmak",
            "en_": "We will make a wooden table.",
            "es_": "Vamos a hacer una mesa de madera.",
            "tr_": "Ahşap bir masa yapacağız."
        },
        {
            "en": "to sort [to arrange]",
            "es": "ordenar",
            "tr": "düzenlemek",
            "en_": "She sorts the photos by date.",
            "es_": "Ella ordena las fotos por fecha.",
            "tr_": "Fotoğrafları tarihe göre düzenler."
        },
        {
            "en": "to stick",
            "es": "pegar",
            "tr": "yapıştırmak",
            "en_": "He sticks the poster on the wall.",
            "es_": "Él pega el póster en la pared.",
            "tr_": "Poster duvara yapıştırıyor."
        },
        {
            "en": "to keep an eye on",
            "es": "vigilar",
            "tr": "göz kulak olmak",
            "en_": "Parents keep an eye on their kids in the park.",
            "es_": "Los padres vigilan a sus hijos en el parque.",
            "tr_": "Ebeveynler parkta çocuklarına göz kulak olur."
        },
        {
            "en": "to climb",
            "es": "trepar",
            "tr": "tırmanmak",
            "en_": "The kids love to climb the trees.",
            "es_": "A los niños les encanta trepar los árboles.",
            "tr_": "Çocuklar ağaçlara tırmanmayı sever."
        },
        {
            "en": "to go for a walk",
            "es": "dar un paseo",
            "tr": "yürüyüşe çıkmak",
            "en_": "Let's go for a walk in the woods.",
            "es_": "Vamos a dar un paseo por el bosque.",
            "tr_": "Ormanda yürüyüşe çıkalım."
        },
        {
            "en": "to fly",
            "es": "volar",
            "tr": "uçmak",
            "en_": "Birds fly south in winter.",
            "es_": "Los pájaros vuelan al sur en invierno.",
            "tr_": "Kuşlar kışın güneye uçar."
        },
        {
            "en": "to climb a tree",
            "es": "trepar un arbol",
            "tr": "ağaca tırmanmak",
            "en_": "The children love to climb trees.",
            "es_": "A los niños les encanta trepar árboles.",
            "tr_": "Çocuklar ağaca tırmanmayı çok sever."
        },
        {
            "en": "to pick flowers",
            "es": "coger flores",
            "tr": "çiçek toplamak",
            "en_": "She likes to pick flowers in the garden.",
            "es_": "A ella le gusta coger flores en el jardín.",
            "tr_": "Bahçede çiçek toplamayı sever."
        },
        {
            "en": "to cross street",
            "es": "atravesar la calle",
            "tr": "karşıya geçmek",
            "en_": "Be careful when you cross the street.",
            "es_": "Ten cuidado cuando atravieses la calle.",
            "tr_": "Karşıya geçerken dikkatli ol."
        },
        {
            "en": "rowboat",
            "es": "la barca de remo",
            "tr": "kürekli tekne",
            "en_": "They rented a rowboat for the lake.",
            "es_": "Alquilaron una barca de remo para el lago.",
            "tr_": "Göl için kürekli tekne kiraladılar."
        },
        {
            "en": "to row",
            "es": "remar",
            "tr": "kürek çekmek",
            "en_": "He likes to row early in the morning.",
            "es_": "Le gusta remar temprano por la mañana.",
            "tr_": "Sabah erken saatlerde kürek çekmeyi sever."
        },
        {
            "en": "to write letter",
            "es": "escribir una carta",
            "tr": "mektup yazmak",
            "en_": "I like to write letters to my friends.",
            "es_": "Me gusta escribir cartas a mis amigos.",
            "tr_": "Arkadaşlarıma mektup yazmayı seviyorum."
        },
        {
            "en": "to send a postcard",
            "es": "mandar una postal",
            "tr": "kartpostal göndermek",
            "en_": "I want to send a postcard from Paris.",
            "es_": "Quiero mandar una postal desde París.",
            "tr_": "Paris'ten kartpostal göndermek istiyorum."
        },
        {
            "en": "to ring",
            "es": "sonar",
            "tr": "çalmak",
            "en_": "The phone started to ring suddenly.",
            "es_": "El teléfono empezó a sonar de repente.",
            "tr_": "Telefon aniden çalmaya başladı."
        },
        {
            "en": "to answer telephone",
            "es": "contestar al teléfono",
            "tr": "telefonu cevaplamak",
            "en_": "Please answer the telephone.",
            "es_": "Por favor, contesta al teléfono.",
            "tr_": "Lütfen telefonu cevapla."
        },
        {
            "en": "to make a call",
            "es": "hacer una llamada",
            "tr": "arama yapmak",
            "en_": "I need to make a call to my friend.",
            "es_": "Necesito hacer una llamada a mi amigo.",
            "tr_": "Arkadaşıma arama yapmam gerekiyor."
        },
        {
            "en": "to dial number",
            "es": "marcar el número",
            "tr": "numarayı çevirmek",
            "en_": "She dialed the number quickly.",
            "es_": "Ella marcó el número rápidamente.",
            "tr_": "O, numarayı hızlıca çevirdi."
        },
        {
            "en": "to go on foot",
            "es": "ir a pie",
            "tr": "yürüyerek gitmek",
            "en_": "I prefer to go on foot to the park.",
            "es_": "Prefiero ir a pie al parque.",
            "tr_": "Parka yürüyerek gitmeyi tercih ederim."
        },
        {
            "en": "to walk",
            "es": "caminar",
            "tr": "yürümek",
            "en_": "She likes to walk in the evening.",
            "es_": "Le gusta caminar por la tarde.",
            "tr_": "O, akşamları yürümeyi sever."
        },
        {
            "en": "to walk",
            "es": "andar",
            "tr": "yürümek",
            "en_": "We walk every morning in the park.",
            "es_": "Andamos cada mañana en el parque.",
            "tr_": "Her sabah parkta yürürüz."
        },
        {
            "en": "to run",
            "es": "correr",
            "tr": "koşmak",
            "en_": "He likes to run fast.",
            "es_": "Le gusta correr rápido.",
            "tr_": "O, hızlı koşmayı sever."
        },
        {
            "en": "to ask for directions",
            "es": "preguntar el camino",
            "tr": "yol tarifi sormak",
            "en_": "I asked for directions to the museum.",
            "es_": "Pregunté el camino al museo.",
            "tr_": "Müzeye nasıl gideceğimi sordum."
        },
        {
            "en": "to perform",
            "es": "actuar",
            "tr": "oynamak",
            "en_": "The band will perform tonight.",
            "es_": "La banda actuará esta noche.",
            "tr_": "Grup bu gece oynayacak."
        },
        {
            "en": "to go to cinema",
            "es": "ir al cine",
            "tr": "sinemaya gitmek",
            "en_": "They like to go to cinema on weekends.",
            "es_": "Les gusta ir al cine los fines de semana.",
            "tr_": "Onlar hafta sonları sinemaya gitmeyi sever."
        },
        {
            "en": "to clap",
            "es": "aplaudir",
            "tr": "alkışlamak",
            "en_": "Everyone clapped at the end of the show.",
            "es_": "Todos aplaudieron al final del espectáculo.",
            "tr_": "Herkes gösterinin sonunda alkışladı."
        },
        {
            "en": "to order",
            "es": "pedir",
            "tr": "sipariş etmek",
            "en_": "I decided to order pasta for lunch.",
            "es_": "Decidí pedir pasta para el almuerzo.",
            "tr_": "Öğle yemeği için makarna sipariş etmeye karar verdim."
        },
        {
            "en": "to serve",
            "es": "servir",
            "tr": "servis yapmak",
            "en_": "The restaurant serves fresh seafood.",
            "es_": "El restaurante sirve mariscos frescos.",
            "tr_": "Restoran taze deniz ürünleri servis yapıyor."
        },
        {
            "en": "to send",
            "es": "mandar",
            "tr": "göndermek",
            "en_": "I will send the documents tomorrow.",
            "es_": "Mandaré los documentos mañana.",
            "tr_": "Belgeleri yarın göndereceğim."
        },
        {
            "en": "to send mail",
            "es": "echar al correo",
            "tr": "postaya vermek",
            "en_": "She went to send mail this morning.",
            "es_": "Ella fue a echar al correo esta mañana.",
            "tr_": "O, bu sabah postaya verdi."
        },
        {
            "en": "to deliver",
            "es": "entregar",
            "tr": "teslim etmek",
            "en_": "They will deliver the package tomorrow.",
            "es_": "Entregarán el paquete mañana.",
            "tr_": "Paketi yarın teslim edecekler."
        },
        {
            "en": "to deposit",
            "es": "meter dinero",
            "tr": "para yatırmak",
            "en_": "I want to deposit some money into my account.",
            "es_": "Quiero meter dinero en mi cuenta.",
            "tr_": "Hesabıma biraz para yatırmak istiyorum."
        },
        {
            "en": "to withdraw",
            "es": "sacar dinero",
            "tr": "para çekmek",
            "en_": "He went to the bank to withdraw cash.",
            "es_": "Él fue al banco a sacar dinero.",
            "tr_": "Nakit çekmek için bankaya gitti."
        },
        {
            "en": "to exchange money",
            "es": "cambiar dinero",
            "tr": "para bozdurmak",
            "en_": "I can't find my cellphone.",
            "es_": "No puedo encontrar mi celular.",
            "tr_": "Cep telefonumu bulamıyorum."
        },
        {
            "en": "to find",
            "es": "encontrar",
            "tr": "bulmak",
            "en_": "He went to the bank to withdraw cash.",
            "es_": "Él fue al banco a sacar dinero.",
            "tr_": "Nakit çekmek için bankaya gitti."
        },
        {
            "en": "oar",
            "es": "el remo",
            "tr": "kürek",
            "en_": "We paddled while canoeing.",
            "es_": "Remamos mientras navegábamos en canoa.",
            "tr_": "Kano yaparken kürek çektik."
        },
        {
            "en": "picnic",
            "es": "el picnic",
            "tr": "piknik",
            "en_": "We had a picnic under the big tree.",
            "es_": "Tuvimos un picnic bajo el gran árbol.",
            "tr_": "Büyük ağacın altında piknik yaptık."
        },
        {
            "en": "bench",
            "es": "el banco",
            "tr": "bank",
            "en_": "She sat on the bench to rest.",
            "es_": "Ella se sentó en el banco para descansar.",
            "tr_": "Dinlenmek için bankta oturdu."
        },
        {
            "en": "keeper",
            "es": "el vigilante",
            "tr": "bekçi",
            "en_": "The park keeper ensures everything is safe.",
            "es_": "El vigilante del parque asegura que todo esté seguro.",
            "tr_": "Park bekçisi her şeyin güvende olduğundan emin olur."
        },
        {
            "en": "swing",
            "es": "el columpio",
            "tr": "salıncak",
            "en_": "The children played on the swing.",
            "es_": "Los niños jugaron en el columpio.",
            "tr_": "Çocuklar salıncakta oynadılar."
        },
        {
            "en": "slide",
            "es": "el tobogán",
            "tr": "kaydırak",
            "en_": "She went down the slide quickly.",
            "es_": "Ella bajó rápido por el tobogán.",
            "tr_": "Kaydıraktan hızlıca kaydı."
        },
        {
            "en": "merry-go-round",
            "es": "el tiovivo",
            "tr": "atlıkarınca",
            "en_": "They rode the merry-go-round at the park.",
            "es_": "Montaron en el tiovivo en el parque.",
            "tr_": "Parkta atlıkarıncaya bindiler."
        },
        {
            "en": "telephone",
            "es": "el teléfono",
            "tr": "telefon",
            "en_": "The telephone is ringing.",
            "es_": "El teléfono está sonando.",
            "tr_": "Telefon çalıyor."
        },

        {
            "en": "phone number",
            "es": "el número de teléfono",
            "tr": "telefon numarası",
            "en_": "Can you give me your phone number?",
            "es_": "¿Puedes darme tu número de teléfono?",
            "tr_": "Telefon numaranı verebilir misin?"
        },
        {
            "en": "area code",
            "es": "la cifra regional",
            "tr": "alan kodu",
            "en_": "The area code is necessary for long-distance calls.",
            "es_": "La cifra regional es necesaria para llamadas de larga distancia.",
            "tr_": "Uzun mesafe aramalar için alan kodu gereklidir."
        },
        {
            "en": "telephone directory",
            "es": "la guía de teléfonos",
            "tr": "telefon rehberi",
            "en_": "Look it up in the telephone directory.",
            "es_": "Búscalo en la guía de teléfonos.",
            "tr_": "Telefon rehberinde ara."
        },

        {
            "en": "telephone box",
            "es": "la cabina de teléfono",
            "tr": "telefon kulübesi",
            "en_": "There is a telephone box on the street corner.",
            "es_": "Hay una cabina de teléfono en la esquina de la calle.",
            "tr_": "Sokak köşesinde bir telefon kulübesi var."
        },
        {
            "en": "emergency",
            "es": "la urgencia",
            "tr": "aciliyet",
            "en_": "Call this number in case of emergency.",
            "es_": "Llama a este número en caso de urgencia.",
            "tr_": "Aciliyet durumunda bu numarayı ara."
        },
        {
            "en": "baby carriage [baby stroller]",
            "es": "el cochecito de bebé",
            "tr": "bebek arabası",
            "en_": "The baby is sleeping in the baby carriage.",
            "es_": "El bebé está durmiendo en el cochecito de bebé.",
            "tr_": "Bebek arabasında bebek uyuyor."
        },
        {
            "en": "map",
            "es": "el mapa",
            "tr": "harita",
            "en_": "I looked at the map to find the way.",
            "es_": "Miré el mapa para encontrar el camino.",
            "tr_": "Yolu bulmak için haritaya baktım."
        },
        {
            "en": "bill",
            "es": "la cuenta",
            "tr": "hesap",
            "en_": "Could we have the bill, please?",
            "es_": "¿Nos puede traer la cuenta, por favor?",
            "tr_": "Hesabı alabilir miyiz lütfen?"
        },
        {
            "en": "tip",
            "es": "la propina",
            "tr": "bahşiş",
            "en_": "We left a tip for the waiter.",
            "es_": "Dejamos una propina para el camarero.",
            "tr_": "Garsona bahşiş bıraktık."
        },
        {
            "en": "cinema",
            "es": "el cine",
            "tr": "sinema",
            "en_": "We went to the cinema last night.",
            "es_": "Fuimos al cine anoche.",
            "tr_": "Dün gece sinemaya gittik."
        },
        {
            "en": "film",
            "es": "la película",
            "tr": "film",
            "en_": "The film was very exciting.",
            "es_": "La película fue muy emocionante.",
            "tr_": "Film çok heyecanlıydı."
        },
        {
            "en": "seat",
            "es": "la butaca",
            "tr": "koltuk",
            "en_": "I reserved a seat near the screen.",
            "es_": "Reservé una butaca cerca de la pantalla.",
            "tr_": "Ekranın yakınında bir koltuk ayırttım."
        },
        {
            "en": "box-office",
            "es": "la taquilla",
            "tr": "gişe",
            "en_": "We bought tickets at the box-office.",
            "es_": "Compramos entradas en la taquilla.",
            "tr_": "Biletleri gişeden aldık."
        },
        {
            "en": "dance floor",
            "es": "la pista de baile",
            "tr": "dans pisti",
            "en_": "The dance floor was crowded last night.",
            "es_": "La pista de baile estuvo llena anoche.",
            "tr_": "Dans pisti dün gece doluydu."
        },
        {
            "en": "theatre",
            "es": "el teatro",
            "tr": "tiyatro",
            "en_": "We watched a play at the theatre.",
            "es_": "Vimos una obra en el teatro.",
            "tr_": "Tiyatroda bir oyun izledik."
        },
        {
            "en": "scene set",
            "es": "el decorado de escena",
            "tr": "sahne seti",
            "en_": "The scene set was very realistic.",
            "es_": "El decorado de escena fue muy realista.",
            "tr_": "Sahne seti çok gerçekçiydi."
        },
        {
            "en": "actress",
            "es": "la actriz",
            "tr": "aktris",
            "en_": "The actress received an award.",
            "es_": "La actriz recibió un premio.",
            "tr_": "Aktris bir ödül aldı."
        },
        {
            "en": "actor",
            "es": "el actor",
            "tr": "aktör",
            "en_": "The actor performed brilliantly.",
            "es_": "El actor actuó brillantemente.",
            "tr_": "Aktör harika performans sergiledi."
        },
        {
            "en": "scene",
            "es": "la escena",
            "tr": "sahne",
            "en_": "The scene was very emotional.",
            "es_": "La escena fue muy emotiva.",
            "tr_": "Sahne çok duygusaldı."
        },
        {
            "en": "audience",
            "es": "el público",
            "tr": "seyirci",
            "en_": "The audience applauded loudly.",
            "es_": "El público aplaudió fuertemente.",
            "tr_": "Seyirci yüksek sesle alkışladı."
        },
        {
            "en": "ballet",
            "es": "el ballet",
            "tr": "bale",
            "en_": "The ballet performance was amazing.",
            "es_": "La actuación de ballet fue increíble.",
            "tr_": "Bale gösterisi harikaydı."
        },
        {
            "en": "dancer",
            "es": "el bailarín / la bailarína",
            "tr": "dansçı",
            "en_": "The dancer practiced every day.",
            "es_": "El bailarín practicó todos los días.",
            "tr_": "Dansçı her gün çalıştı."
        },
        {
            "en": "opera",
            "es": "la ópera",
            "tr": "opera",
            "en_": "We attended an opera last weekend.",
            "es_": "Asistimos a una ópera el fin de semana pasado.",
            "tr_": "Geçen hafta sonu bir operaya gittik."
        },
        {
            "en": "singer",
            "es": "el cantante / la cantante",
            "tr": "şarkıcı",
            "en_": "The singer has a beautiful voice.",
            "es_": "El cantante tiene una voz hermosa.",
            "tr_": "Şarkıcının güzel bir sesi var."
        },
        {
            "en": "famous",
            "es": "famoso(a)",
            "tr": "ünlü",
            "en_": "She is a famous actress.",
            "es_": "Ella es una actriz famosa.",
            "tr_": "O, ünlü bir aktris."
        },
        {
            "en": "small",
            "es": "pequeño(a)",
            "tr": "küçük",
            "en_": "She has a small dog.",
            "es_": "Ella tiene un perro pequeño.",
            "tr_": "Onun küçük bir köpeği var."
        },
        {
            "en": "medium",
            "es": "mediano",
            "tr": "orta",
            "en_": "I would like a medium size shirt.",
            "es_": "Quisiera una camisa mediana.",
            "tr_": "Orta beden bir gömlek istiyorum."
        },
        {
            "en": "large",
            "es": "grande",
            "tr": "büyük",
            "en_": "They live in a large house.",
            "es_": "Viven en una casa grande.",
            "tr_": "Onlar büyük bir evde yaşıyor."
        },
        {
            "en": "post office",
            "es": "correos",
            "tr": "postane",
            "en_": "I need to go to the post office.",
            "es_": "Necesito ir a correos.",
            "tr_": "Postaneye gitmem gerekiyor."
        },
        {
            "en": "letter",
            "es": "la carta",
            "tr": "mektup",
            "en_": "He wrote a letter to his friend.",
            "es_": "Él escribió una carta a su amigo.",
            "tr_": "O, arkadaşına mektup yazdı."
        },
        {
            "en": "package",
            "es": "el paquete",
            "tr": "paket",
            "en_": "The package arrived yesterday.",
            "es_": "El paquete llegó ayer.",
            "tr_": "Paket dün geldi."
        },
        {
            "en": "telegram",
            "es": "el telegrama",
            "tr": "telgraf",
            "en_": "They sent a telegram for the news.",
            "es_": "Enviaron un telegrama por la noticia.",
            "tr_": "Haber için telgraf gönderdiler."
        },
        {
            "en": "form",
            "es": "el formulario",
            "tr": "form",
            "en_": "Please fill out the form carefully.",
            "es_": "Por favor, rellene el formulario cuidadosamente.",
            "tr_": "Lütfen formu dikkatlice doldurun."
        },
        {
            "en": "stamp",
            "es": "el sello",
            "tr": "pul",
            "en_": "Don't forget to put a stamp on the envelope.",
            "es_": "No olvides poner un sello en el sobre.",
            "tr_": "Zarfa pul koymayı unutma."
        },
        {
            "en": "address",
            "es": "las señas",
            "tr": "adres",
            "en_": "Write your address clearly.",
            "es_": "Escribe tus señas claramente.",
            "tr_": "Adresini net yaz."
        },
        {
            "en": "postman",
            "es": "el cartero / la cartera",
            "tr": "postacı",
            "en_": "The postman delivers letters every morning.",
            "es_": "El cartero entrega cartas cada mañana.",
            "tr_": "Postacı her sabah mektupları dağıtır."
        },
        {
            "en": "mail",
            "es": "el correo",
            "tr": "posta",
            "en_": "The mail arrived late today.",
            "es_": "El correo llegó tarde hoy.",
            "tr_": "Posta bugün geç geldi."
        },
        {
            "en": "bank",
            "es": "el banco",
            "tr": "banka",
            "en_": "I need to go to the bank.",
            "es_": "Necesito ir al banco.",
            "tr_": "Bankaya gitmem gerekiyor."
        },
        {
            "en": "exchange rate",
            "es": "el tipo de cambio",
            "tr": "döviz kuru",
            "en_": "The exchange rate is favorable today.",
            "es_": "El tipo de cambio es favorable hoy.",
            "tr_": "Döviz kuru bugün uygun."
        },
        {
            "en": "bank manager",
            "es": "el gerente del banco",
            "tr": "banka müdürü",
            "en_": "The bank manager helped me with the loan.",
            "es_": "El gerente del banco me ayudó con el préstamo.",
            "tr_": "Banka müdürü bana kredi konusunda yardım etti."
        },

        {
            "en": "checkbook",
            "es": "la chequera",
            "tr": "çek defteri",
            "en_": "She lost her checkbook yesterday.",
            "es_": "Ella perdió la chequera ayer.",
            "tr_": "Dün çek defterini kaybetti."
        },
        {
            "en": "shade",
            "es": "la sombra",
            "tr": "gölge",
            "en_": "We sat in the shade of the tree.",
            "es_": "Nos sentamos a la sombra del árbol.",
            "tr_": "Ağacın gölgesinde oturduk."
        },

        {
            "en": "lullaby",
            "es": "la canción de cuna",
            "tr": "ninni",
            "en_": "She sang a lullaby to her baby.",
            "es_": "Cantó una canción de cuna a su bebé.",
            "tr_": "Bebeğine bir ninni söyledi."
        },
        {
            "en": "tale",
            "es": "el cuento",
            "tr": "masal",
            "en_": "He told a bedtime tale to his daughter.",
            "es_": "Contó un cuento antes de dormir a su hija.",
            "tr_": "Kızına uyumadan önce bir masal anlattı."
        },
        {
            "en": "crib",
            "es": "la cuna",
            "tr": "beşik",
            "en_": "The baby is sleeping in the crib.",
            "es_": "El bebé está durmiendo en la cuna.",
            "tr_": "Bebek beşikte uyuyor."
        },

        {
            "en": "hot water",
            "es": "el agua caliente",
            "tr": "sıcak su",
            "en_": "Be careful, the hot water is very hot.",
            "es_": "Ten cuidado, el agua caliente está muy caliente.",
            "tr_": "Dikkat et, sıcak su çok sıcak."
        },
        {
            "en": "cold water",
            "es": "el agua fría",
            "tr": "soğuk su",
            "en_": "I drink a glass of cold water every morning.",
            "es_": "Bebo un vaso de agua fría cada mañana.",
            "tr_": "Her sabah bir bardak soğuk su içerim."
        }
    ],
    "People" : [
        {
            "en" : "man",
            "es" : "el hombre",
            "tr" : "adam",
            "en_": "The man opened the door and smiled.",
            "es_": "El hombre abrió la puerta y sonrió.",
            "tr_": "Adam kapıyı açtı ve gülümsedi."
        },
        {
            "en" : "woman",
            "es" : "la mujer",
            "tr" : "kadın",
            "en_": "Women love to wear make-up.",
            "es_": "A las mujeres les encanta usar maquillaje.",
            "tr_": "Kadınlar makyaj yapmayı severler."
        },
        {
            "en" : "baby",
            "es" : "el bebé",
            "tr" : "bebek",
            "en_": "The baby is sleeping in her crib.",
            "es_": "El bebé está durmiendo en su cuna.",
            "tr_": "Bebek beşiğinde uyuyor."
        },
        {
            "en" : "boy",
            "es" : "el niño",
            "tr" : "erkek çocuğu",
            "en_": "The boy is playing ball in the garden.",
            "es_": "El niño está jugando a la pelota en el jardín.",
            "tr_": "Erkek çocuğu bahçede top oynuyor."
        },
        {
            "en" : "girl",
            "es" : "la niña",
            "tr" : "kız çocuğu",
            "en_": "The girl is drawing a picture of her cat.",
            "es_": "La niña está dibujando un dibujo de su gato.",
            "tr_": "Kız çocuğu kedisinin resmini çiziyor."
        },
        {
            "en" : "friend",
            "es" : "el amigo / la amiga",
            "tr" : "arkadaş",
            "en_": "My friend is going to to visit me tomorrow.",
            "es_": "Mi amigo vendrá a visitarme mañana.",
            "tr_": "Arkadaşım yarın beni ziyarete gelecek."
        },
        {
            "en" : "name",
            "es" : "el nombre",
            "tr" : "ad",
            "en_": "My name is Yusuf.",
            "es_": "Mi nombre es Yusuf.",
            "tr_": "Benim adım Yusuf."
        },
        {
            "en" : "first name",
            "es" : "el nombre de pila",
            "tr" : "ilk isim",
            "en_": "My first name is Yusuf.",
            "es_": "Mi nombre de pila es Yusuf.",
            "tr_": "Benim ilk ismim Yusuf."
        },
        {
            "en" : "surname",
            "es" : "el apellido",
            "tr" : "soyadı",
            "en_": "Her surname is very common in Spain.",
            "es_": "Su apellido es muy común en España.",
            "tr_": "Onun soyadı İspanya’da çok yaygındır."
        },
        {
            "en" : "age",
            "es" : "la edad",
            "tr" : "yaş",
            "en_": "What is your age?",
            "es_": "¿Cuál es tu edad?",
            "tr_": "Senin yaşın kaç?"
        },
        {
            "en" : "small",
            "es" : "pequeño(a)",
            "tr" : "küçük",
            "en_": "The small dog barked loudly.",
            "es_": "El perro pequeño ladró fuerte.",
            "tr_": "Küçük köpek yüksek sesle havladı."
        },
        {
            "en" : "old",
            "es" : "mayor",
            "tr" : "yaşlı",
            "en_": "The old man walked slowly.",
            "es_": "El hombre mayor caminaba despacio.",
            "tr_": "Yaşlı adam yavaşça yürüdü."
        },
        {
            "en" : "older than",
            "es" : "mayor que",
            "tr" : "...den yaşlı",
            "en_": "She is older than her brother.",
            "es_": "Ella es mayor que su hermano.",
            "tr_": "O, erkek kardeşinden yaşlı."
        },
        {
            "en" : "smaller than",
            "es" : "más pequeño(a) que",
            "tr" : "...den küçük",
            "en_": "This house is smaller than the other one.",
            "es_": "Esta casa es más pequeña que la otra.",
            "tr_": "Bu ev diğerinden küçük."
        },
        {
            "en" : "the same age",
            "es" : "la misma edad",
            "tr" : "aynı yaşta",
            "en_": "She is the same age as her sister.",
            "es_": "Ella tiene la misma edad que su hermana.",
            "tr_": "O, kız kardeşiyle aynı yaşta."
        },
        {
            "en" : "family",
            "es" : "la familia",
            "tr" : "aile",
            "en_": "My family is very important to me.",
            "es_": "Mi familia es muy importante para mí.",
            "tr_": "Ailem benim için çok önemli."
        },
        {
            "en" : "father",
            "es" : "el padre",
            "tr" : "baba",
            "en_": "My father works in a hospital.",
            "es_": "Mi padre trabaja en un hospital.",
            "tr_": "Babam bir hastanede çalışıyor."
        },
        {
            "en" : "mother",
            "es" : "la madre",
            "tr" : "anne",
            "en_": "My mother cooks delicious meals.",
            "es_": "Mi madre cocina comidas deliciosas.",
            "tr_": "Annem lezzetli yemekler yapar."
        },
        {
            "en" : "brother",
            "es" : "el hermano",
            "tr" : "erkek kardeş",
            "en_": "My brother plays football every weekend.",
            "es_": "Mi hermano juega al fútbol todos los fines de semana.",
            "tr_": "Erkek kardeşim her hafta sonu futbol oynar."
        },
        {
            "en" : "sister",
            "es" : "la hermana",
            "tr" : "kız kardeş",
            "en_": "My sister loves to read books.",
            "es_": "Mi hermana ama leer libros.",
            "tr_": "Kız kardeşim kitap okumayı çok sever."
        },
        {
            "en" : "grandfather",
            "es" : "el abuelo",
            "tr" : "büyükbaba",
            "en_": "My grandfather tells interesting stories.",
            "es_": "Mi abuelo cuenta historias interesantes.",
            "tr_": "Büyükbabam ilginç hikayeler anlatır."
        },
        {
            "en" : "grandmother",
            "es" : "la abuela",
            "tr" : "büyükanne",
            "en_": "My grandmother bakes the best cookies.",
            "es_": "Mi abuela hornea las mejores galletas.",
            "tr_": "Büyükanne en iyi kurabiyeleri yapar."
        },
        {
            "en" : "uncle",
            "es" : "el tío",
            "tr" : "amca",
            "en_": "My uncle loves fishing on weekends.",
            "es_": "Mi tío ama la pesca los fines de semana.",
            "tr_": "Amcam hafta sonları balık tutmayı sever."
        },
        {
            "en" : "aunt",
            "es" : "la tía",
            "tr" : "teyze",
            "en_": "My aunt visits us every summer.",
            "es_": "Mi tía nos visita cada verano.",
            "tr_": "Teyzem her yaz bizi ziyaret eder."
        },
        {
            "en" : "cousin",
            "es" : "el primo / la prima",
            "tr" : "kuzen",
            "en_": "My cousin is coming to the party.",
            "es_": "Mi primo viene a la fiesta.",
            "tr_": "Kuzenim partiye geliyor.",
            "type" : "nount"
        },
        {
            "en" : "son",
            "es" : "el hijo",
            "tr" : "erkek evlat [oğul]",
            "en_": "Their son is studying at university.",
            "es_": "Su hijo está estudiando en la universidad.",
            "tr_": "Onların oğlu üniversitede okuyor."
        },
        {
            "en" : "daughter",
            "es" : "la hija",
            "tr" : "kız evlat",
            "en_": "Their daughter loves painting.",
            "es_": "Su hija ama la pintura.",
            "tr_": "Onların kızı resim yapmayı çok seviyor."
        },
        {
            "en" : "grandson",
            "es" : "el nieto",
            "tr" : "erkek torun",
            "en_": "My grandson loves playing soccer.",
            "es_": "Mi nieto ama jugar al fútbol.",
            "tr_": "Erkek torunum futbol oynamayı çok seviyor."
        },
        {
            "en" : "granddaughter",
            "es" : "la nieta",
            "tr" : "kız torun",
            "en_": "My granddaughter enjoys painting.",
            "es_": "Mi nieta disfruta pintar.",
            "tr_": "Kız torunum resim yapmaktan hoşlanır."
        },
        {
            "en" : "nephew",
            "es" : "el sobrino",
            "tr" : "erkek yeğen",
            "en_": "My nephew is learning to ride a bike.",
            "es_": "Mi sobrino está aprendiendo a montar en bicicleta.",
            "tr_": "Erkek yeğenim bisiklet sürmeyi öğreniyor."
        },
        {
            "en" : "niece",
            "es" : "la sobrina",
            "tr" : "kız yeğen",
            "en_": "My niece loves to dance.",
            "es_": "Mi sobrina ama bailar.",
            "tr_": "Kız yeğenim dans etmeyi çok sever."
        },
        {
            "en" : "husband",
            "es" : "el marido",
            "tr" : "koca [eş]",
            "en_": "Her husband is a great chef.",
            "es_": "Su marido es un gran chef.",
            "tr_": "Onun kocası harika bir aşçı."
        },
        {
            "en" : "wife",
            "es" : "la mujer",
            "tr" : "eş",
            "en_": "His wife is a talented artist.",
            "es_": "Su mujer es una artista talentosa.",
            "tr_": "Onun eşi yetenekli bir sanatçıdır."
        },
        {
            "en" : "parents",
            "es" : "los padres",
            "tr" : "ebeveynler",
            "en_": "Parents play a big role in children’s lives.",
            "es_": "Los padres juegan un papel importante en la vida de los niños.",
            "tr_": "Ebeveynler çocukların hayatında büyük rol oynar."
        },
        {
            "en" : "children",
            "es" : "los hijos",
            "tr" : "çocuklar [evlatlar]",
            "en_": "The children are playing in the park.",
            "es_": "Los hijos están jugando en el parque.",
            "tr_": "Çocuklar parkta oynuyor."
        },
        {
            "en" : "twin",
            "es" : "el gemelo / la gemela",
            "tr" : "ikiz",
            "en_": "My twin brother and I look very similar.",
            "es_": "Mi gemelo y yo nos parecemos mucho.",
            "tr_": "İkiz erkek kardeşimle çok benzeriz."
        },
        {
            "en" : "only son",
            "es" : "el hijo único",
            "tr" : "tek erkek çocuk",
            "en_": "He is the only son in his family.",
            "es_": "Él es el hijo único en su familia.",
            "tr_": "O, ailesindeki tek erkek çocuktur."
        },
        {
            "en" : "life",
            "es" : "la vida",
            "tr" : "hayat",
            "en_": "Life is full of surprises.",
            "es_": "La vida está llena de sorpresas.",
            "tr_": "Hayat sürprizlerle doludur."
        },
        {
            "en" : "birth",
            "es" : "el nacimiento",
            "tr" : "doğum",
            "en_": "The birth of the baby was a joyful event.",
            "es_": "El nacimiento del bebé fue un evento alegre.",
            "tr_": "Bebeğin doğumu sevinçli bir olaydı."
        },
        {
            "en" : "childhood",
            "es" : "la niñez",
            "tr" : "çocukluk",
            "en_": "She has fond memories of her childhood.",
            "es_": "Ella tiene recuerdos cariñosos de su niñez.",
            "tr_": "Onun çocukluğuna dair güzel anıları var."
        },
        {
            "en" : "marriage",
            "es" : "el casamiento",
            "tr" : "evlilik",
            "en_": "Their marriage lasted for many years.",
            "es_": "Su casamiento duró muchos años.",
            "tr_": "Onların evliliği uzun yıllar sürdü."
        },
        {
            "en" : "wedding",
            "es" : "la boda",
            "tr" : "düğün",
            "en_": "The wedding was beautiful and full of joy.",
            "es_": "La boda fue hermosa y llena de alegría.",
            "tr_": "Düğün güzel ve neşeyle doluydu."
        },
        {
            "en" : "old age",
            "es" : "la vejez",
            "tr" : "yaşlılık",
            "en_": "Many people enjoy their old age peacefully.",
            "es_": "Muchas personas disfrutan de su vejez en paz.",
            "tr_": "Birçok insan yaşlılığını huzur içinde geçirir."
        },
        {
            "en" : "death",
            "es" : "la muerte",
            "tr" : "ölüm",
            "en_": "The death of a loved one is always hard.",
            "es_": "La muerte de un ser querido siempre es difícil.",
            "tr_": "Sevilen birinin ölümü her zaman zordur."
        },
        {
            "en" : "funeral",
            "es" : "el entierro",
            "tr" : "cenaze",
            "en_": "The funeral was held in the local church.",
            "es_": "El entierro se celebró en la iglesia local.",
            "tr_": "Cenaze yerel kilisede yapıldı."
        }
    ],
    "Appearance and personality" : [
        {
            "en" : "to have blonde hair",
            "es" : "tener el pelo rubio",
            "tr" : "sarı saçlı olmak",
            "en_": "He has blonde hair and blue eyes.",
            "es_": "Él tiene el pelo rubio y los ojos azules.",
            "tr_": "O sarı saçlı ve mavi gözlüdür."
        },
        {
            "en" : "pretty",
            "es" : "bonito(a)",
            "tr" : "sevimli",
            "en_": "The girl wore a pretty dress.",
            "es_": "La niña llevaba un vestido bonito.",
            "tr_": "Kız çocuğu sevimli bir elbise giymişti."
        },
        {
            "en" : "handsome",
            "es" : "guapo(a)",
            "tr" : "yakışıklı",
            "en_": "The man is very handsome.",
            "es_": "El hombre es muy guapo.",
            "tr_": "Adam çok yakışıklı."
        },
        {
            "en" : "strong",
            "es" : "fuerte",
            "tr" : "güçlü",
            "en_": "She is a strong and independent woman.",
            "es_": "Ella es una mujer fuerte e independiente.",
            "tr_": "O, güçlü ve bağımsız bir kadındır."
        },
        {
            "en" : "weak",
            "es" : "débil",
            "tr" : "güçsüz",
            "en_": "After the illness, he felt very weak.",
            "es_": "Después de la enfermedad, se sintió muy débil.",
            "tr_": "Hastalıktan sonra kendini çok güçsüz hissetti."
        },
        {
            "en" : "thin",
            "es" : "flaco(a)",
            "tr" : "sıska",
            "en_": "The boy is very thin but energetic.",
            "es_": "El niño es muy flaco pero enérgico.",
            "tr_": "Erkek çocuk çok sıska ama enerjik."
        },
        {
            "en" : "slim",
            "es" : "delgado(a)",
            "tr" : "zayıf",
            "en_": "The woman is slim and tall.",
            "es_": "La mujer es delgada y alta.",
            "tr_": "Kadın zayıf ve uzundur."
        },
        {
            "en" : "fat",
            "es" : "gordo(a)",
            "tr" : "şişman",
            "en_": "The cat is fat and lazy.",
            "es_": "El gato es gordo y perezoso.",
            "tr_": "Kedi şişman ve tembel."
        },
        {
            "en" : "well educated",
            "es" : "bien educado(a)",
            "tr" : "iyi eğitimli",
            "en_": "She is a well-educated and respectful person.",
            "es_": "Ella es una persona bien educada y respetuosa.",
            "tr_": "O, iyi eğitimli ve saygılı bir kişidir."
        },
        {
            "en" : "rude",
            "es" : "maleducado(a)",
            "tr" : "kaba",
            "en_": "The boy was rude to his teacher.",
            "es_": "El niño fue maleducado con su maestro.",
            "tr_": "Erkek çocuk öğretmenine karşı kabaydı."
        },
        {
            "en" : "generous",
            "es" : "generoso(a)",
            "tr" : "cömert",
            "en_": "She is generous with her time and money.",
            "es_": "Ella es generosa con su tiempo y su dinero.",
            "tr_": "Zamanı ve parası konusunda cömerttir."
        },
        {
            "en" : "silly",
            "es" : "tonto(a)",
            "tr" : "aptal",
            "en_": "The boy said a silly joke.",
            "es_": "El niño dijo un chiste tonto.",
            "tr_": "Erkek çocuk aptalca bir şaka yaptı."
        },
        {
            "en" : "friendly",
            "es" : "amistoso(a)",
            "tr" : "arkadaşça",
            "en_": "She gave a friendly smile to the new student.",
            "es_": "Ella dio una sonrisa amistosa al nuevo estudiante.",
            "tr_": "O, yeni öğrenciye arkadaşça bir gülümseme verdi."
        },
        {
            "en" : "funny",
            "es" : "gracioso(a)",
            "tr" : "eğlenceli",
            "en_": "He told a funny story at the party.",
            "es_": "Él contó una historia graciosa en la fiesta.",
            "tr_": "Partide eğlenceli bir hikaye anlattı."
        },
        {
            "en" : "cheerful",
            "es" : "alegre",
            "tr" : "neşeli",
            "en_": "She is always cheerful and full of energy.",
            "es_": "Ella siempre está alegre y llena de energía.",
            "tr_": "O her zaman neşeli ve enerji doludur."
        },
        {
            "en" : "miserable",
            "es" : "triste",
            "tr" : "üzgün",
            "en_": "She felt miserable after hearing the bad news.",
            "es_": "Ella se sintió triste después de escuchar las malas noticias.",
            "tr_": "Kötü haberleri duyduktan sonra üzgün hissetti."
        },
        {
            "en" : "brown hair",
            "es" : "el pelo castaño",
            "tr" : "kahverengi saç",
            "en_": "He has brown hair and green eyes.",
            "es_": "Él tiene el pelo castaño y los ojos verdes.",
            "tr_": "O kahverengi saçlı ve yeşil gözlüdür."
        },
        {
            "en" : "straight hair",
            "es" : "el pelo liso",
            "tr" : "düz saç",
            "en_": "She has long straight hair.",
            "es_": "Ella tiene el pelo liso y largo.",
            "tr_": "Onun uzun düz saçları var."
        },
        {
            "en" : "red hair",
            "es" : "el pelo rojo",
            "tr" : "kızıl saç",
            "en_": "He has bright red hair that stands out.",
            "es_": "Él tiene el pelo rojo brillante que destaca.",
            "tr_": "Onun parlak kızıl saçları dikkat çekiyor."
        },
        {
            "en" : "curly hair",
            "es" : "el pelo rizado",
            "tr" : "kıvırcık saç",
            "en_": "She has beautiful curly hair.",
            "es_": "Ella tiene el pelo rizado y hermoso.",
            "tr_": "Onun güzel kıvırcık saçları var."
        },
        {
            "en" : "braid",
            "es" : "trenza",
            "tr" : "örgü",
            "en_": "He wore his hair in braids for the festival.",
            "es_": "Él llevó el pelo con trenzas para el festival.",
            "tr_": "O, festival için saçlarını örgü yaptı."
        },
        {
            "en" : "bald",
            "es" : "calvo(a)",
            "tr" : "kel",
            "en_": "She is bald but confident and strong.",
            "es_": "Ella es calva pero segura y fuerte.",
            "tr_": "O kelliğine rağmen kendinden emin ve güçlüdür."
        },
        {
            "en" : "complexion",
            "es" : "la tez",
            "tr" : "ten rengi",
            "en_": "He has a fair complexion that tans easily.",
            "es_": "Él tiene una tez clara que se broncea fácilmente.",
            "tr_": "Onun ten rengi açık ve kolay bronzlaşır."
        },
        {
            "en" : "dark",
            "es" : "moreno(a)",
            "tr" : "koyu",
            "en_": "She has dark hair and eyes.",
            "es_": "Ella tiene el pelo moreno y los ojos oscuros.",
            "tr_": "Onun koyu renk saçları ve gözleri var."
        },
        {
            "en" : "fair",
            "es" : "blanco(a)",
            "tr" : "açık",
            "en_": "She has fair skin that glows in the sunlight.",
            "es_": "Ella tiene la piel blanca que brilla con la luz del sol.",
            "tr_": "Onun güneş ışığında parlayan açık teni var."
        },
        {
            "en" : "frekles",
            "es" : "las pecas",
            "tr" : "çiller",
            "en_": "She has freckles on her nose and cheeks.",
            "es_": "Ella tiene pecas en la nariz y las mejillas.",
            "tr_": "Onun burun ve yanaklarında çilleri var."
        },
        {
            "en" : "moustache",
            "es" : "el bigote",
            "tr" : "bıyık",
            "en_": "He has a thick moustache that suits him well.",
            "es_": "Él tiene un bigote espeso que le queda bien.",
            "tr_": "Onun kalın bir bıyığı var ve ona çok yakışıyor."
        },
        {
            "en" : "beard",
            "es" : "la barba",
            "tr" : "sakal",
            "en_": "She does not have a beard, but her brother does.",
            "es_": "Ella no tiene barba, pero su hermano sí.",
            "tr_": "Onun sakalı yok ama erkek kardeşinin var."
        },
        {
            "en": "beautiful [lovely]",
            "es": "bonito(a)",
            "tr": "güzel",
            "en_": "This dress is very beautiful.",
            "es_": "Este vestido es muy bonito.",
            "tr_": "Bu elbise çok güzel."
        }
    ],
    "Body" : [
        {
            "en" : "head",
            "es" : "la cabeza",
            "tr" : "kafa",
            "en_": "She hit her head on the low door frame.",
            "es_": "Ella se golpeó la cabeza con el marco bajo de la puerta.",
            "tr_": "Alçak kapı pervazına kafasını çarptı."
        },
        {
            "en" : "hair",
            "es" : "el pelo",
            "tr" : "saç",
            "en_": "He combed his hair before going to the party.",
            "es_": "Él se peinó el pelo antes de ir a la fiesta.",
            "tr_": "Partiye gitmeden önce saçını taradı."
        },
        {
            "en" : "face",
            "es" : "la cara",
            "tr" : "yüz",
            "en_": "She washed her face with cold water.",
            "es_": "Ella se lavó la cara con agua fría.",
            "tr_": "Yüzünü soğuk suyla yıkadı."
        },
        {
            "en" : "skin",
            "es" : "la piel",
            "tr" : "cilt [ten]",
            "en_": "He takes care of his skin with natural products.",
            "es_": "Él cuida su piel con productos naturales.",
            "tr_": "Cildine doğal ürünlerle bakım yapar."
        },
        {
            "en" : "eye",
            "es" : "el ojo",
            "tr" : "göz",
            "en_": "She has green eyes that shine in the sunlight.",
            "es_": "Ella tiene los ojos verdes que brillan al sol.",
            "tr_": "Güneşte parlayan yeşil gözleri var."
        },
        {
            "en" : "cheek",
            "es" : "la mejilla",
            "tr" : "yanak",
            "en_": "He kissed his mother on the cheek before leaving.",
            "es_": "Él besó a su madre en la mejilla antes de irse.",
            "tr_": "Gitmeden önce annesinin yanağından öptü."
        },
        {
            "en" : "nose",
            "es" : "la nariz",
            "tr" : "burun",
            "en_": "She touched her nose because it was cold.",
            "es_": "Ella se tocó la nariz porque estaba fría.",
            "tr_": "Burnu soğuk olduğu için ona dokundu."
        },
        {
            "en" : "ear",
            "es" : "la oreja",
            "tr" : "kulak",
            "en_": "He wore headphones that covered his ears completely.",
            "es_": "Él llevaba auriculares que le cubrían completamente las orejas.",
            "tr_": "Kulaklarını tamamen kapatan kulaklıklar taktı."
        },
        {
            "en" : "mouth",
            "es" : "la boca",
            "tr" : "ağız",
            "en_": "She covered her mouth when she yawned.",
            "es_": "Ella se tapó la boca cuando bostezó.",
            "tr_": "Esnerken ağzını kapattı."
        },
        {
            "en" : "tooth",
            "es" : "el diente",
            "tr" : "diş",
            "en_": "He brushed his tooth carefully after eating sweets.",
            "es_": "Él se cepilló el diente con cuidado después de comer dulces.",
            "tr_": "Tatlı yedikten sonra dişini özenle fırçaladı."
        },
        {
            "en" : "tongue",
            "es" : "la lengua",
            "tr" : "dil"
        },
        {
            "en" : "lip",
            "es" : "el labio",
            "tr" : "dudak",
            "en_": "She bit her tongue accidentally while eating.",
            "es_": "Ella se mordió la lengua accidentalmente mientras comía.",
            "tr_": "Yemek yerken yanlışlıkla dilini ısırdı."
        },
        {
            "en" : "neck",
            "es" : "el cuello",
            "tr" : "boyun",
            "en_": "He wore a scarf around his neck to stay warm.",
            "es_": "Él llevaba una bufanda alrededor del cuello para mantenerse caliente.",
            "tr_": "Sıcak kalmak için boynuna atkı sardı."
        },
        {
            "en" : "chin",
            "es" : "la barbilla",
            "tr" : "çene",
            "en_": "She rested her chin on her hand while thinking.",
            "es_": "Ella apoyó la barbilla en la mano mientras pensaba.",
            "tr_": "Düşünürken çenesini eline dayadı."
        },
        {
            "en" : "body",
            "es" : "el cuerpo",
            "tr" : "vücut",
            "en_": "He exercises every day to keep his body healthy.",
            "es_": "Él hace ejercicio todos los días para mantener su cuerpo saludable.",
            "tr_": "Vücudunu sağlıklı tutmak için her gün egzersiz yapar."
        },
        {
            "en" : "shoulder",
            "es" : "el hombro",
            "tr" : "omuz",
            "en_": "He carried the heavy bag on his shoulder.",
            "es_": "Él llevó la bolsa pesada en el hombro.",
            "tr_": "Ağır çantayı omzunda taşıdı."
        },
        {
            "en" : "chest",
            "es" : "el pecho",
            "tr" : "göğüs",
            "en_": "She placed her hand on her chest when she heard the good news.",
            "es_": "Ella puso su mano en el pecho cuando escuchó las buenas noticias.",
            "tr_": "İyi haberi duyduğunda elini göğsüne koydu."
        },
        {
            "en" : "arm",
            "es" : "el brazo",
            "tr" : "kol",
            "en_": "He broke his arm while playing soccer.",
            "es_": "Él se rompió el brazo mientras jugaba al fútbol.",
            "tr_": "Futbol oynarken kolunu kırdı."
        },
        {
            "en" : "elbow",
            "es" : "el codo",
            "tr" : "dirsek",
            "en_": "She rested her elbow on the table while reading.",
            "es_": "Ella apoyó el codo en la mesa mientras leía.",
            "tr_": "Okurken dirseğini masaya dayadı."
        },
        {
            "en" : "hand",
            "es" : "la mano",
            "tr" : "el",
            "en_": "She held the book tightly in her hand.",
            "es_": "Ella sostuvo el libro firmemente en la mano.",
            "tr_": "Kitabı elinde sıkıca tuttu."
        },
        {
            "en" : "finger",
            "es" : "el dedo",
            "tr" : "parmak",
            "en_": "He cut his finger while cooking dinner.",
            "es_": "Él se cortó el dedo mientras cocinaba la cena.",
            "tr_": "Akşam yemeğini yaparken parmağını kesti."
        },
        {
            "en" : "thumb",
            "es" : "el pulgar",
            "tr" : "başparmak",
            "en_": "She gave a thumbs-up to show her approval.",
            "es_": "Ella levantó el pulgar para mostrar su aprobación.",
            "tr_": "Onayını göstermek için başparmağını kaldırdı."
        },
        {
            "en" : "wrist",
            "es" : "la muñeca",
            "tr" : "el bileği",
            "en_": "He wore a watch tightly around his wrist.",
            "es_": "Él llevaba un reloj ajustado alrededor de la muñeca.",
            "tr_": "Kol bileğine sıkıca bir saat taktı."
        },
        {
            "en" : "back",
            "es" : "la espalda",
            "tr" : "sırt",
            "en_": "She hurt her back while lifting the heavy box.",
            "es_": "Ella se lastimó la espalda al levantar la caja pesada.",
            "tr_": "Ağır kutuyu kaldırırken sırtını incitti."
        },
        {
            "en" : "stomach",
            "es" : "el estómago",
            "tr" : "karın",
            "en_": "He had a stomach ache after eating too much.",
            "es_": "Él tuvo dolor de estómago después de comer demasiado.",
            "tr_": "Çok yedikten sonra karın ağrısı çekti."
        },
        {
            "en" : "leg",
            "es" : "la pierna",
            "tr" : "bacak",
            "en_": "She injured her leg while hiking in the mountains.",
            "es_": "Ella se lastimó la pierna mientras caminaba en las montañas.",
            "tr_": "Dağlarda yürüyüş yaparken bacağını incitti."
        },
        {
            "en" : "knee",
            "es" : "la rodilla",
            "tr" : "diz",
            "en_": "She hurt her knee while playing basketball.",
            "es_": "Ella se lastimó la rodilla mientras jugaba al baloncesto.",
            "tr_": "Basketbol oynarken dizini incitti."
        },
        {
            "en" : "toe",
            "es" : "el dedo de los pies",
            "tr" : "ayak parmağı",
            "en_": "He stubbed his toe on the table leg.",
            "es_": "Él se golpeó el dedo del pie contra la pata de la mesa.",
            "tr_": "Ayak parmağını masa ayağına çarptı."
        },
        {
            "en" : "foot",
            "es" : "el pie",
            "tr" : "ayak",
            "en_": "She injured her foot while running in the park.",
            "es_": "Ella se lesionó el pie mientras corría en el parque.",
            "tr_": "Parkta koşarken ayağını incitti."
        },
        {
            "en" : "ankle",
            "es" : "el tobillo",
            "tr" : "ayak bileği",
            "en_": "He twisted his ankle while playing football.",
            "es_": "Él se torció el tobillo mientras jugaba al fútbol.",
            "tr_": "Futbol oynarken ayak bileğini burktu."
        },
        {
            "en" : "heel",
            "es" : "el talón",
            "tr" : "topuk",
            "en_": "She hurt her heel while dancing last night.",
            "es_": "Ella se lastimó el talón mientras bailaba anoche.",
            "tr_": "Dün gece dans ederken topuğunu incitti."
        },
        {
            "en" : "tall",
            "es" : "alto(a)",
            "tr" : "uzun",
            "en_": "He is very tall and can easily reach the top shelf.",
            "es_": "Él es muy alto y puede alcanzar fácilmente la estantería superior.",
            "tr_": "O çok uzun boylu ve üst raflara kolayca ulaşabiliyor."
        },
        {
            "en" : "short",
            "es" : "bajo(a)",
            "tr" : "kısa",
            "en_": "She is shorter than her older sister.",
            "es_": "Ella es más baja que su hermana mayor.",
            "tr_": "O, ablasından daha kısa."
        },
        {
            "en" : "light",
            "es" : "ligero(a)",
            "tr" : "hafif",
            "en_": "He prefers to carry a light backpack during his travels.",
            "es_": "Él prefiere llevar una mochila ligera durante sus viajes.",
            "tr_": "Seyahatleri sırasında hafif bir sırt çantası taşımayı tercih ediyor."
        },
        {
            "en" : "heavy",
            "es" : "pesado(a)",
            "tr" : "ağır",
            "en_": "She lifted a heavy box with great effort.",
            "es_": "Ella levantó una caja pesada con mucho esfuerzo.",
            "tr_": "Büyük bir çabayla ağır bir kutuyu kaldırdı."
        },
        {
            "en" : "left side",
            "es" : "el lado izquierdo",
            "tr" : "sol taraf",
            "en_": "He sat on the left side of the room during the meeting.",
            "es_": "Él se sentó en el lado izquierdo de la sala durante la reunión.",
            "tr_": "Toplantı sırasında odanın sol tarafına oturdu."
        },
        {
            "en" : "right side",
            "es" : "el lado derecho",
            "tr" : "sağ taraf",
            "en_": "She placed the vase on the right side of the table.",
            "es_": "Ella colocó el jarrón en el lado derecho de la mesa.",
            "tr_": "Çiçek vazosunu masanın sağ tarafına koydu."
        }
    ],
    "House" : [
        {
            "en": "to turn on the light",
            "es": "encender la luz",
            "tr": "ışığı açmak",
            "en_": "He turned on the light when he entered the room.",
            "es_": "Encendió la luz al entrar en la habitación.",
            "tr_": "Odaya girince ışığı açtı."
        },
        {
            "en": "to open the curtains",
            "es": "descorrer las cortinas",
            "tr": "perdeleri açmak",
            "en_": "He opens the curtains to let the sunlight in.",
            "es_": "Él descorre las cortinas para dejar entrar la luz del sol.",
            "tr_": "Güneş ışığı girsin diye perdeleri açar."
        },
        {
            "en" : "to ring the bell",
            "es" : "tocar el timbre",
            "tr" : "kapı zilini çalmak",
            "en_": "She went up to the house and rang the bell.",
            "es_": "Ella se acercó a la casa y tocó el timbre.",
            "tr_": "Evin önüne geldi ve kapı zilini çaldı."
        },
        {
            "en" : "to live in a house",
            "es" : "vivir en una casa",
            "tr" : "evde yaşamak",
            "en_": "He prefers to live in a house rather than an apartment.",
            "es_": "Él prefiere vivir en una casa en lugar de un apartamento.",
            "tr_": "Apartman yerine evde yaşamayı tercih ediyor."
        },
        {
            "en" : "to go upstairs",
            "es" : "subir",
            "tr" : "yukarı çıkmak",
            "en_": "She goes upstairs to read every evening.",
            "es_": "Ella sube arriba para leer cada noche.",
            "tr_": "O, her akşam okumak için yukarı çıkar."
        },
        {
            "en" : "to go downstairs",
            "es" : "bajar",
            "tr" : "aşağı inmek",
            "en_": "They go downstairs to answer the door.",
            "es_": "Ellos bajan para abrir la puerta.",
            "tr_": "Onlar kapıyı açmak için aşağı inerler."
        },
        {
            "en" : "apartment building",
            "es" : "la casa de pisos",
            "tr" : "apartman",
            "en_": "He lives in a tall apartment building near the city center.",
            "es_": "Él vive en una casa de pisos alta cerca del centro de la ciudad.",
            "tr_": "Şehir merkezine yakın yüksek bir apartmanda yaşıyor."
        },
        {
            "en" : "apartment",
            "es" : "el piso",
            "tr" : "daire",
            "en_": "She decorated her new apartment with plants and paintings.",
            "es_": "Ella decoró su nuevo piso con plantas y cuadros.",
            "tr_": "Yeni dairesini bitkiler ve tablolarla süsledi."
        },
        {
            "en" : "second floor",
            "es" : "segundo piso",
            "tr" : "ikinci kat",
            "en_": "He moved to an apartment on the second floor last week.",
            "es_": "Él se mudó a un apartamento en el segundo piso la semana pasada.",
            "tr_": "Geçen hafta ikinci kattaki bir daireye taşındı."
        },
        {
            "en" : "front door",
            "es" : "la puerta de entrada",
            "tr" : "giriş kapısı",
            "en_": "She forgot her keys and knocked on the front door.",
            "es_": "Ella olvidó sus llaves y llamó a la puerta de entrada.",
            "tr_": "Anahtarlarını unuttu ve giriş kapısını çaldı."
        },
        {
            "en" : "doorbell",
            "es" : "el timbre",
            "tr" : "kapı zili",
            "en_": "He rang the doorbell and waited patiently.",
            "es_": "Él tocó el timbre y esperó pacientemente.",
            "tr_": "Kapı zilini çaldı ve sabırla bekledi."
        },
        {
            "en" : "mailbox",
            "es" : "el buzón",
            "tr" : "posta kutusu",
            "en_": "He opened the mailbox and found a letter from his friend.",
            "es_": "Él abrió el buzón y encontró una carta de su amigo.",
            "tr_": "Posta kutusunu açtı ve arkadaşından bir mektup buldu."
        },
        {
            "en" : "doormat",
            "es" : "el felpudo",
            "tr" : "paspas",
            "en_": "She wiped her shoes on the doormat before entering the house.",
            "es_": "Ella se limpió los zapatos en el felpudo antes de entrar en la casa.",
            "tr_": "Eve girmeden önce ayakkabılarını paspasa sildi."
        },
        {
            "en" : "balcony",
            "es" : "el balcón",
            "tr" : "balkon",
            "en_": "He stood on the balcony and watched the sunset.",
            "es_": "Él se paró en el balcón y miró la puesta de sol.",
            "tr_": "Balkonda durup gün batımını izledi."
        },
        {
            "en" : "first floor",
            "es" : "primer piso",
            "tr" : "birinci kat",
            "en_": "She lives on the first floor, just above the bakery.",
            "es_": "Ella vive en el primer piso, justo encima de la panadería.",
            "tr_": "Fırının hemen üstündeki birinci katta yaşıyor."
        },
        {
            "en" : "caretaker",
            "es" : "el portero / la portera",
            "tr" : "kapıcı",
            "en_": "The caretaker fixed the broken elevator quickly.",
            "es_": "El portero arregló el ascensor roto rápidamente.",
            "tr_": "Kapıcı bozuk asansörü hızlıca tamir etti."
        },
        {
            "en" : "ground floor",
            "es" : "piso bajo",
            "tr" : "zemin kat",
            "en_": "She keeps her shoes on the ground floor near the entrance.",
            "es_": "Ella guarda sus zapatos en el piso bajo cerca de la entrada.",
            "tr_": "Ayakkabılarını girişin yakınındaki zemin katta tutuyor."
        },
        {
            "en" : "house",
            "es" : "la casa",
            "tr" : "ev",
            "en_": "She invited us to her house for dinner.",
            "es_": "Ella nos invitó a su casa para cenar.",
            "tr_": "Bizi akşam yemeği için evine davet etti."
        },
        {
            "en" : "neighbor",
            "es" : "el vecino / la vecina",
            "tr" : "komşu",
            "en_": "She is a friendly neighbor who often helps others.",
            "es_": "Ella es una vecina amigable que a menudo ayuda a los demás.",
            "tr_": "O, sık sık başkalarına yardım eden dost canlısı bir komşudur."
        },
        {
            "en" : "move",
            "es" : "mudarse",
            "tr" : "taşınmak",
            "en_": "He decided to move to a new city for work.",
            "es_": "Él decidió mudarse a una nueva ciudad por trabajo.",
            "tr_": "İş için yeni bir şehre taşınmaya karar verdi."
        },
        {
            "en" : "guest",
            "es" : "el huésped / la huésped",
            "tr" : "misaifr",
            "en_": "She was a gracious guest at the wedding.",
            "es_": "Ella fue una huésped amable en la boda.",
            "tr_": "Düğünde nazik bir misafir oldu."
        },
        {
            "en" : "basement",
            "es" : "el sótano",
            "tr" : "bodrum",
            "en_": "He stores old furniture in the basement.",
            "es_": "Él guarda muebles viejos en el sótano.",
            "tr_": "Eski mobilyaları bodrumda saklar."
        },
        {
            "en" : "smoke",
            "es" : "el humo",
            "tr" : "duman",
            "en_": "The smoke from the fire covered the entire village yesterday.",
            "es_": "El humo del incendio cubrió todo el pueblo ayer.",
            "tr_": "Dün yangının dumanı tüm köyü kapladı."
        },
        {
            "en" : "roof",
            "es" : "el tejado",
            "tr" : "çatı",
            "en_": "The workers have repaired the roof after the storm.",
            "es_": "Los trabajadores han reparado el tejado después de la tormenta.",
            "tr_": "İşçiler fırtınadan sonra çatıyı tamir etti."
        },
        {
            "en" : "chimney",
            "es" : "la chimenea",
            "tr" : "baca",
            "en_": "She cleaned the chimney before the winter came.",
            "es_": "Ella limpió la chimenea antes de que llegara el invierno.",
            "tr_": "Kış gelmeden önce bacayı temizledi."
        },
        {
            "en" : "attic",
            "es" : "el desván",
            "tr" : "çatı katı",
            "en_": "They stored old furniture in the attic last summer.",
            "es_": "Ellos guardaron muebles viejos en el desván el verano pasado.",
            "tr_": "Geçen yaz eski mobilyaları çatı katında sakladılar."
        },
        {
            "en" : "window",
            "es" : "la ventana",
            "tr" : "pencere",
            "en_": "They opened the window to let fresh air in.",
            "es_": "Ellas abrieron la ventana para dejar entrar aire fresco.",
            "tr_": "Temiz hava girmesi için pencereyi açtılar."
        },
        {
            "en" : "wall",
            "es" : "la pared",
            "tr" : "duvar",
            "en_": "The painters had already painted the walls before we moved in.",
            "es_": "Las pintoras ya habían pintado las paredes antes de que nos mudáramos.",
            "tr_": "Taşınmadan önce boyacılar duvarları çoktan boyamıştı."
        },
        {
            "en" : "door",
            "es" : "la puerta",
            "tr" : "kapı",
            "en_": "She closed the door quietly after leaving the room.",
            "es_": "Ella cerró la puerta silenciosamente después de salir de la habitación.",
            "tr_": "Oda çıkarken kapıyı sessizce kapattı."
        },
        {
            "en" : "toilet",
            "es" : "el baño",
            "tr" : "tuvalet",
            "en_": "They cleaned the toilet thoroughly before the guests arrived.",
            "es_": "Ellos limpiaron el baño a fondo antes de que llegaran los invitados.",
            "tr_": "Misafirler gelmeden önce tuvaleti iyice temizlediler."
        },
        {
            "en" : "bedroom",
            "es" : "el dormitorio",
            "tr" : "yatak odası",
            "en_": "They decorated the bedroom with new furniture last weekend.",
            "es_": "Ellos decoraron el dormitorio con muebles nuevos el fin de semana pasado.",
            "tr_": "Geçen hafta sonu yatak odasını yeni mobilyalarla dekore ettiler."
        },
        {
            "en" : "bathroom",
            "es" : "baño",
            "tr" : "banyo",
            "en_": "They cleaned the bathroom thoroughly every weekend.",
            "es_": "Ellas limpiaban el baño a fondo cada fin de semana.",
            "tr_": "Onlar her hafta sonu banyoyu iyice temizlerdi."
        },
        {
            "en" : "kitchen",
            "es" : "la cocina",
            "tr" : "mutfak",
            "en_": "They cooked delicious meals in the kitchen every evening.",
            "es_": "Ellas cocinaban comidas deliciosas en la cocina cada tarde.",
            "tr_": "Onlar her akşam mutfakta lezzetli yemekler pişirirdi."
        },
        {
            "en" : "dining room",
            "es" : "el comedor",
            "tr" : "yemek odası",
            "en_": "They set the table in the dining room before the guests arrived.",
            "es_": "Ellos pusieron la mesa en el comedor antes de que llegaran los invitados.",
            "tr_": "Misafirler gelmeden önce yemek odasında masayı hazırladılar."
        },
        {
            "en" : "garage",
            "es" : "el garaje",
            "tr" : "garaj",
            "en_": "He parked the car in the garage last night.",
            "es_": "Él aparcó el coche en el garaje anoche.",
            "tr_": "Dün gece arabayı garaja park etti."
        },
        {
            "en" : "upstairs",
            "es" : "arriba",
            "tr" : "yukarı",
            "en_": "They went upstairs to rest after a long day.",
            "es_": "Ellas subieron arriba para descansar después de un largo día.",
            "tr_": "Uzun bir günün ardından dinlenmek için yukarı çıktılar.",
            "type" : "adverb"
        },
        {
            "en" : "stairs",
            "es" : "la escaler",
            "tr" : "merdiven",
            "en_": "They ran down the stairs when they heard the alarm.",
            "es_": "Ellas bajaron corriendo por las escaleras cuando oyeron la alarma.",
            "tr_": "Alarmı duyunca merdivenlerden koşarak indiler."
        },
        {
            "en" : "downstairs",
            "es" : "abajo",
            "tr" : "aşağı",
            "en_": "She was waiting downstairs when the guests arrived.",
            "es_": "Ella estaba esperando abajo cuando llegaron los invitados.",
            "tr_": "Misafirler geldiğinde o aşağıda bekliyordu.",
            "type" : "adverb"
        },
        {
            "en" : "living room",
            "es" : "la sala de estar",
            "tr" : "oturma odası",
            "en_": "They were watching a movie together in the living room.",
            "es_": "Ellas estaban viendo una película juntas en la sala de estar.",
            "tr_": "Oturma odasında birlikte film izliyorlardı."
        },
        {
            "en" : "light",
            "es" : "la luz",
            "tr" : "ışık",
            "en_": "They turned off the light before going to bed.",
            "es_": "Ellos apagaron la luz antes de irse a dormir.",
            "tr_": "Yatmadan önce ışığı kapattılar."
        },
        {
            "en" : "radiator",
            "es" : "el radiador",
            "tr" : "radyatör",
            "en_": "She always puts her wet towel on the radiator to dry.",
            "es_": "Ella siempre pone su toalla mojada sobre el radiador para que se seque.",
            "tr_": "Islanmış havlusunu kuruması için her zaman radyatöre koyar."
        },
        {
            "en" : "table",
            "es" : "la mesa",
            "tr" : "masa",
            "en_": "They are setting the table for dinner.",
            "es_": "Ellos están poniendo la mesa para la cena.",
            "tr_": "Akşam yemeği için masayı hazırlıyorlar."
        },
        {
            "en" : "chair",
            "es" : "la silla",
            "tr" : "sandalye",
            "en_": "She sat on the chair near the window to read a book.",
            "es_": "Ella se sentó en la silla cerca de la ventana para leer un libro.",
            "tr_": "Kitap okumak için pencere kenarındaki sandalyeye oturdu."
        },
        {
            "en" : "floor",
            "es" : "el suelo",
            "tr" : "zemin",
            "en_": "He cleaned the floor after spilling the juice.",
            "es_": "Él limpió el suelo después de derramar el jugo.",
            "tr_": "Suyu döktükten sonra zemini temizledi."
        },
        {
            "en" : "carpet [rug]",
            "es" : "la alfombra",
            "tr" : "halı [kilim]",
            "en_": "They vacuum the carpet every Sunday.",
            "es_": "Ellas aspiran la alfombra todos los domingos.",
            "tr_": "Her pazar halıyı süpürürler."
        },
        {
            "en" : "clock",
            "es" : "el reloj",
            "tr" : "saat",
            "en_": "He looked at the clock and realized he was late.",
            "es_": "Él miró el reloj y se dio cuenta de que llegaba tarde.",
            "tr_": "Saatine baktı ve geç kaldığını fark etti."
        },
        {
            "en" : "curtain",
            "es" : "la cortina",
            "tr" : "perde",
            "en_": "They close the curtain every evening before bedtime.",
            "es_": "Ellas cierran la cortina cada noche antes de acostarse.",
            "tr_": "Her akşam yatmadan önce perdeleri kapatırlar."
        },
        {
            "en" : "fire",
            "es" : "el fuego",
            "tr" : "ateş",
            "en_": "He started the fire to warm up the room.",
            "es_": "Él encendió el fuego para calentar la habitación.",
            "tr_": "Odayı ısıtmak için ateşi yaktı."
        },
        {
            "en" : "armchair",
            "es" : "el sillón",
            "tr" : "koltuk",
            "en_": "She is sitting comfortably in the armchair reading a book.",
            "es_": "Ella está sentada cómodamente en el sillón leyendo un libro.",
            "tr_": "O, koltukta rahatça oturup kitap okuyor."
        },
        {
            "en" : "sofa",
            "es" : "el sofá",
            "tr" : "kanepe",
            "en_": "They usually relax on the sofa after dinner.",
            "es_": "Ellos suelen relajarse en el sofá después de la cena.",
            "tr_": "Akşam yemeğinden sonra genellikle kanepede dinlenirler."
        },
        {
            "en" : "television",
            "es" : "la televisión",
            "tr" : "televizyon",
            "en_": "They watched a documentary on television last night.",
            "es_": "Ellas vieron un documental en la televisión anoche.",
            "tr_": "Dün gece televizyonda bir belgesel izlediler."
        },
        {
            "en" : "radio",
            "es" : "la radio",
            "tr" : "radyo",
            "en_": "He is listening to the radio in the car.",
            "es_": "Él está escuchando la radio en el coche.",
            "tr_": "Arabada radyo dinliyor."
        },
        {
            "en" : "cupboard",
            "es" : "la alacena",
            "tr" : "mutfak dolabı",
            "en_": "She is organizing the dishes in the cupboard.",
            "es_": "Ella está organizando los platos en la alacena.",
            "tr_": "O, mutfak dolabındaki tabakları düzenliyor."
        },
        {
            "en" : "washing machine",
            "es" : "la lavadora",
            "tr" : "çamaşır makinesi",
            "en_": "They repaired the washing machine last weekend.",
            "es_": "Ellos repararon la lavadora el fin de semana pasado.",
            "tr_": "Geçen hafta sonu çamaşır makinesini tamir ettiler."
        },
        {
            "en": "refrigerator",
            "es": "la nevera",
            "tr": "buzdolabı",
            "en_": "The refrigerator is full of fresh vegetables.",
            "es_": "La nevera está llena de verduras frescas.",
            "tr_": "Buzdolabı taze sebzelerle dolu."
        },
        {
            "en": "oven",
            "es": "el horno",
            "tr": "fırın",
            "en_": "She baked a cake in the oven yesterday.",
            "es_": "Ella horneó un pastel en el horno ayer.",
            "tr_": "O, dün fırında kek pişirdi."
        },
        {
            "en": "saucepan",
            "es": "la cacerola",
            "tr": "tencere",
            "en_": "He put water to boil in the saucepan.",
            "es_": "Él puso agua a hervir en la cacerola.",
            "tr_": "O, tencereye su koyup kaynattı."
        },
        {
            "en": "gas",
            "es": "el gas",
            "tr": "gaz",
            "en_": "The gas stove was turned off after cooking.",
            "es_": "La estufa de gas se apagó después de cocinar.",
            "tr_": "Yemekten sonra gazlı ocak kapatıldı."
        },
        {
            "en": "thrash can",
            "es": "la lata de la basura",
            "tr": "çöp kovası",
            "en_": "Please throw the paper into the thrash can.",
            "es_": "Por favor, tira el papel en la lata de la basura.",
            "tr_": "Lütfen kağıdı çöp kovasına at."
        },
        {
            "en": "plug",
            "es": "el enchufe",
            "tr": "fiş",
            "en_": "He unplugged the charger before leaving.",
            "es_": "Él desenchufó el cargador antes de salir.",
            "tr_": "O, çıkmadan önce şarj cihazının fişini çekti."
        },
        {
            "en": "electricity",
            "es": "la electricidad",
            "tr": "elektrik",
            "en_": "The electricity went out during the storm.",
            "es_": "La electricidad se cortó durante la tormenta.",
            "tr_": "Fırtına sırasında elektrik kesildi."
        },
        {
            "en": "dirty",
            "es": "sucio(a)",
            "tr": "kirli",
            "en_": "The kitchen floor is dirty and needs cleaning.",
            "es_": "El suelo de la cocina está sucio y necesita limpieza.",
            "tr_": "Mutfak zemini kirli ve temizlenmesi gerekiyor."
        },
        {
            "en": "sink",
            "es": "el fregadero",
            "tr": "lavabo",
            "en_": "She washed the vegetables in the sink.",
            "es_": "Ella lavó las verduras en el fregadero.",
            "tr_": "O, sebzeleri lavaboda yıkadı."
        },
        {
            "en": "clean",
            "es": "limpio(a)",
            "tr": "temiz",
            "en_": "The house is clean after the weekend cleaning.",
            "es_": "La casa está limpia después de la limpieza del fin de semana.",
            "tr_": "Hafta sonu temizliğinden sonra ev temiz oldu."
        },
        {
            "en": "bathtub",
            "es": "la bañera",
            "tr": "küvet",
            "en_": "The bathtub is filled with warm water.",
            "es_": "La bañera está llena de agua tibia.",
            "tr_": "Küvet sıcak su ile dolu."
        },
        {
            "en": "the bathtub plug",
            "es": "el tapón de bañera",
            "tr": "küvet tıpası",
            "en_": "Don't forget to put the bathtub plug before filling the tub.",
            "es_": "No olvides poner el tapón de bañera antes de llenar la tina.",
            "tr_": "Küveti doldurmadan önce tıpayı takmayı unutma."
        },
        {
            "en": "bathrobe",
            "es": "el albornoz",
            "tr": "bornoz",
            "en_": "She wears a bathrobe after her shower.",
            "es_": "Ella lleva un albornoz después de su ducha.",
            "tr_": "O, duşundan sonra bornoz giyer."
        },
        {
            "en": "scales",
            "es": "la báscula",
            "tr": "baskül",
            "en_": "He checks his weight on the scales every morning.",
            "es_": "Él se pesa en la báscula todas las mañanas.",
            "tr_": "O, her sabah baskülde tartılır."
        },
        {
            "en": "gardener",
            "es": "el jardinero / la jardinera",
            "tr": "bahçıvan",
            "en_": "The gardener is planting new flowers.",
            "es_": "El jardinero está plantando flores nuevas.",
            "tr_": "Bahçıvan yeni çiçekler dikiyor."
        },
        {
            "en": "lawnmower",
            "es": "el cortacésped",
            "tr": "çim biçme makinesi",
            "en_": "He bought a new lawnmower last week.",
            "es_": "Compró un cortacésped nuevo la semana pasada.",
            "tr_": "Geçen hafta yeni bir çim biçme makinesi aldı."
        },
        {
            "en": "shovel [spade]",
            "es": "la pala",
            "tr": "kürek",
            "en_": "He dug a hole with a shovel.",
            "es_": "Cavó un hoyo con una pala.",
            "tr_": "Bir kürekle çukur kazdı."
        },
        {
            "en": "wheelbarrow",
            "es": "la carretilla",
            "tr": "el arabası",
            "en_": "She moved the soil using a wheelbarrow.",
            "es_": "Ella movió la tierra con una carretilla.",
            "tr_": "Toprağı el arabasıyla taşıdı."
        },
        {
            "en": "trowel",
            "es": "el desplantador",
            "tr": "mala",
            "en_": "He used a trowel to dig small holes.",
            "es_": "Usó un desplantador para cavar hoyos pequeños.",
            "tr_": "Küçük çukurlar kazmak için mala kullandı."
        },
        {
            "en": "rake",
            "es": "el rastrillo",
            "tr": "tırmık",
            "en_": "She cleaned the leaves with a rake.",
            "es_": "Ella limpió las hojas con un rastrillo.",
            "tr_": "Yaprakları tırmıkla temizledi."
        },
        {
            "en": "watering can",
            "es": "la regadera",
            "tr": "sulama kabı",
            "en_": "He filled the watering can with water.",
            "es_": "Llenó la regadera con agua.",
            "tr_": "Sulama kabını suyla doldurdu."
        },
        {
            "en": "tap",
            "es": "el grifo",
            "tr": "musluk",
            "en_": "The tap is leaking again.",
            "es_": "El grifo está goteando otra vez.",
            "tr_": "Musluk yine damlatıyor."
        },
        {
            "en": "towel",
            "es": "la toalla",
            "tr": "havlu",
            "en_": "I dry myself with a soft towel.",
            "es_": "Me seco con una toalla suave.",
            "tr_": "Kendimi yumuşak bir havluyla kurularım."
        },
        {
            "en": "lamp",
            "es": "la lámpara",
            "tr": "lamba",
            "en_": "The lamp on the desk is too bright.",
            "es_": "La lámpara del escritorio es demasiado brillante.",
            "tr_": "Masanın üzerindeki lamba çok parlak."
        },
        {
            "en": "bedside table",
            "es": "la mesita de noche",
            "tr": "komodin",
            "en_": "I keep my book on the bedside table.",
            "es_": "Guardo mi libro en la mesita de noche.",
            "tr_": "Kitabımı komodinin üzerine koyuyorum."
        },
        {
            "en": "quilt [duvet]",
            "es": "el edredón",
            "tr": "yorgan",
            "en_": "She covered herself with a thick quilt.",
            "es_": "Se cubrió con un edredón grueso.",
            "tr_": "Kendini kalın bir yorganla örttü."
        },
        {
            "en": "bed",
            "es": "la cama",
            "tr": "yatak",
            "en_": "He lay down on the bed and closed his eyes.",
            "es_": "Se acostó en la cama y cerró los ojos.",
            "tr_": "Yatağa uzandı ve gözlerini kapattı."
        },
        {
            "en": "pillow",
            "es": "la almohada",
            "tr": "yastık",
            "en_": "I need a softer pillow to sleep well.",
            "es_": "Necesito una almohada más suave para dormir bien.",
            "tr_": "İyi uyuyabilmek için daha yumuşak bir yastığa ihtiyacım var."
        },
        {
            "en": "bedspread",
            "es": "la colcha",
            "tr": "yatak örtüsü",
            "en_": "She folded the bedspread in the morning.",
            "es_": "Dobló la colcha por la mañana.",
            "tr_": "Sabah yatak örtüsünü katladı."
        },
        {
            "en": "sheet",
            "es": "la sábana",
            "tr": "çarşaf",
            "en_": "I changed the bed sheets yesterday.",
            "es_": "Cambié las sábanas ayer.",
            "tr_": "Dün çarşafları değiştirdim."
        },
        {
            "en": "alarm clock",
            "es": "el despertador",
            "tr": "çalar saat",
            "en_": "My alarm clock rings at 6 every morning.",
            "es_": "Mi despertador suena a las 6 todas las mañanas.",
            "tr_": "Çalar saatim her sabah saat 6'da çalar."
        }
    ],
    "Plants" : [
        {
            "en": "soil",
            "es": "la tierra",
            "tr": "toprak",
            "en_": "The soil is rich and perfect for planting.",
            "es_": "La tierra es rica y perfecta para plantar.",
            "tr_": "Toprak verimli ve ekim için mükemmel."
        },
        {
            "en": "lawn",
            "es": "el césped",
            "tr": "çimen",
            "en_": "The children are playing on the lawn.",
            "es_": "Los niños están jugando en el césped.",
            "tr_": "Çocuklar çimenlerin üzerinde oynuyor."
        },
        {
            "en": "bulb",
            "es": "el bulbo",
            "tr": "soğan",
            "en_": "I plant the bulbs in autumn.",
            "es_": "Planto los bulbos en otoño.",
            "tr_": "Soğanları sonbaharda dikiyorum."
        },
        {
            "en": "herb",
            "es": "la hierba",
            "tr": "bitki",
            "en_": "She grows fresh herbs in the garden.",
            "es_": "Ella cultiva hierbas frescas en el jardín.",
            "tr_": "Bahçede taze bitkiler yetiştiriyor."
        },
        {
            "en": "seed",
            "es": "la semilla",
            "tr": "tohum",
            "en_": "They planted tomato seeds in the garden.",
            "es_": "Plantaron semillas de tomate en el jardín.",
            "tr_": "Bahçeye domates tohumu ektiler."
        },
        {
            "en": "weed",
            "es": "el hierbajo",
            "tr": "yabani ot",
            "en_": "She pulled the weeds from the flowerbed.",
            "es_": "Ella quitó los hierbajos del parterre.",
            "tr_": "Çiçeklikteki yabani otları temizledi."
        },
        {
            "en": "tree",
            "es": "el árbol",
            "tr": "ağaç",
            "en_": "There is a tall tree in front of the house.",
            "es_": "Hay un árbol alto frente a la casa.",
            "tr_": "Evin önünde uzun bir ağaç var."
        },
        {
            "en": "greenhouse",
            "es": "el invernadero",
            "tr": "sera",
            "en_": "Tomatoes grow well in the greenhouse.",
            "es_": "Los tomates crecen bien en el invernadero.",
            "tr_": "Domatesler serada iyi yetişir."
        },
        {
            "en": "bush",
            "es": "el arbusto",
            "tr": "çalı",
            "en_": "He trimmed the bush in the backyard.",
            "es_": "Recortó el arbusto en el patio trasero.",
            "tr_": "Arka bahçedeki çalıyı budadı."
        },
        {
            "en": "rose",
            "es": "la rosa",
            "tr": "gül",
            "en_": "She gave me a red rose.",
            "es_": "Ella me dio una rosa roja.",
            "tr_": "Bana kırmızı bir gül verdi."
        },
        {
            "en": "tulip",
            "es": "el tulipán",
            "tr": "lale",
            "en_": "The tulip blooms in spring.",
            "es_": "El tulipán florece en primavera.",
            "tr_": "Lale ilkbaharda açar."
        },
        {
            "en": "sunflower",
            "es": "el girasol",
            "tr": "ayçiçeği",
            "en_": "Sunflowers follow the sun.",
            "es_": "Los girasoles siguen al sol.",
            "tr_": "Ayçiçekleri güneşi takip eder."
        },
        {
            "en": "daisy",
            "es": "la margarita",
            "tr": "papatya",
            "en_": "The daisy is a simple and pretty flower.",
            "es_": "La margarita es una flor simple y bonita.",
            "tr_": "Papatya sade ve güzel bir çiçektir."
        },
        {
            "en": "lily",
            "es": "el lirio",
            "tr": "zambak",
            "en_": "Lilies have a strong fragrance.",
            "es_": "Los lirios tienen una fragancia fuerte.",
            "tr_": "Zambakların güçlü bir kokusu vardır."
        },
        {
            "en": "oak",
            "es": "el roble",
            "tr": "meşe",
            "en_": "The oak tree is very strong and long-lived.",
            "es_": "El roble es un árbol muy fuerte y longevo.",
            "tr_": "Meşe ağacı çok güçlü ve uzun ömürlüdür."
        },
        {
            "en": "pine",
            "es": "el pino",
            "tr": "çam",
            "en_": "Pine trees stay green all year.",
            "es_": "Los pinos permanecen verdes todo el año.",
            "tr_": "Çam ağaçları yıl boyunca yeşildir."
        },
        {
            "en": "maple",
            "es": "el arce",
            "tr": "akçaağaç",
            "en_": "Maple leaves turn red in autumn.",
            "es_": "Las hojas de arce se vuelven rojas en otoño.",
            "tr_": "Akçaağaç yaprakları sonbaharda kırmızı olur."
        },
        {
            "en": "olive tree",
            "es": "el olivo",
            "tr": "zeytin ağacı",
            "en_": "The olive tree produces olives and oil.",
            "es_": "El olivo produce aceitunas y aceite.",
            "tr_": "Zeytin ağacı zeytin ve yağ üretir."
        },
        {
            "en": "cactus",
            "es": "el cactus",
            "tr": "kaktüs",
            "en_": "Cacti survive in dry deserts.",
            "es_": "Los cactus sobreviven en desiertos secos.",
            "tr_": "Kaktüsler kuru çöllerde hayatta kalır."
        },
        {
            "en": "bamboo",
            "es": "el bambú",
            "tr": "bambu",
            "en_": "Bamboo grows very fast.",
            "es_": "El bambú crece muy rápido.",
            "tr_": "Bambu çok hızlı büyür."
        },
        {
            "en": "cedar",
            "es": "el cedro",
            "tr": "sedir",
            "en_": "Cedar wood is used for furniture.",
            "es_": "La madera de cedro se usa para muebles.",
            "tr_": "Sedir ağacı mobilya yapımında kullanılır."
        },
        {
            "en": "fern",
            "es": "el helecho",
            "tr": "eğreltiotu",
            "en_": "Ferns thrive in shady places.",
            "es_": "Los helechos prosperan en lugares sombríos.",
            "tr_": "Eğreltiotları gölgeli yerlerde gelişir."
        },
        {
            "en": "ivy",
            "es": "la hiedra",
            "tr": "sarmaşık",
            "en_": "The ivy climbs on old walls.",
            "es_": "La hiedra trepa por las paredes viejas.",
            "tr_": "Sarmaşık eski duvarlara tırmanır."
        },
        {
            "en": "willow",
            "es": "el sauce",
            "tr": "söğüt",
            "en_": "Willow trees grow near water.",
            "es_": "Los sauces crecen cerca del agua.",
            "tr_": "Söğüt ağaçları su kenarlarında büyür."
        },
        {
            "en": "orchid",
            "es": "la orquídea",
            "tr": "orkide",
            "en_": "Orchids are delicate and beautiful flowers.",
            "es_": "Las orquídeas son flores delicadas y bonitas.",
            "tr_": "Orkideler narin ve güzel çiçeklerdir."
        },
        {
            "en": "cherry tree",
            "es": "el cerezo",
            "tr": "kiraz ağacı",
            "en_": "The cherry tree blooms in spring.",
            "es_": "El cerezo florece en primavera.",
            "tr_": "Kiraz ağacı ilkbaharda çiçek açar."
        },
        {
            "en": "lavender",
            "es": "la lavanda",
            "tr": "lavanta",
            "en_": "Lavender has a soothing scent.",
            "es_": "La lavanda tiene un aroma relajante.",
            "tr_": "Lavanta sakinleştirici bir kokuya sahiptir."
        },
        {
            "en": "carnation",
            "es": "el clavel",
            "tr": "karanfil",
            "en_": "Carnations are often used in bouquets.",
            "es_": "Los claveles se usan a menudo en ramos.",
            "tr_": "Karanfiller sıklıkla buketlerde kullanılır."
        },
        {
            "en": "spruce",
            "es": "el abeto",
            "tr": "ladin",
            "en_": "Spruce trees are common in cold climates.",
            "es_": "Los abetos son comunes en climas fríos.",
            "tr_": "Ladin ağaçları soğuk iklimlerde yaygındır."
        },
        {
            "en": "magnolia",
            "es": "la magnolia",
            "tr": "manolya",
            "en_": "The magnolia tree produces large fragrant flowers.",
            "es_": "El magnolio produce flores grandes y fragantes.",
            "tr_": "Manolya ağacı büyük kokulu çiçekler açar."
        },
        {
            "en": "marigold",
            "es": "la caléndula",
            "tr": "kadife çiçeği",
            "en_": "Marigolds are bright orange flowers.",
            "es_": "Las caléndulas son flores de color naranja brillante.",
            "tr_": "Kadife çiçekleri parlak turuncudur."
        },
        {
            "en": "peppermint",
            "es": "la menta",
            "tr": "nane",
            "en_": "Peppermint leaves are used in tea.",
            "es_": "Las hojas de menta se usan en el té.",
            "tr_": "Nane yaprakları çayda kullanılır."
        },
        {
            "en": "almond tree",
            "es": "el almendro",
            "tr": "badem ağacı",
            "en_": "The almond tree blossoms in early spring.",
            "es_": "El almendro florece a principios de primavera.",
            "tr_": "Badem ağacı erken ilkbaharda çiçek açar."
        },
        {
            "en": "chrysanthemum",
            "es": "el crisantemo",
            "tr": "kasımpatı",
            "en_": "Chrysanthemums are popular autumn flowers.",
            "es_": "Los crisantemos son flores populares en otoño.",
            "tr_": "Kasımpatı sonbaharda popüler çiçeklerdir."
        },
        {
            "en": "dogwood",
            "es": "el cornejo",
            "tr": "kızılağaç",
            "en_": "Dogwood trees have beautiful white flowers.",
            "es_": "Los cornejos tienen hermosas flores blancas.",
            "tr_": "Kızılağaç ağaçlarının güzel beyaz çiçekleri vardır."
        },
        {
            "en": "hollyhock",
            "es": "la malva real",
            "tr": "ebegümeci",
            "en_": "Hollyhocks grow tall in gardens.",
            "es_": "Las malvas reales crecen altas en los jardines.",
            "tr_": "Ebegümecileri bahçelerde uzun boylu yetişir."
        },
        {
            "en": "geranium",
            "es": "el geranio",
            "tr": "sardunya",
            "en_": "She planted a red geranium in the pot.",
            "es_": "Ella plantó un geranio rojo en la maceta.",
            "tr_": "Saksıya kırmızı bir sardunya dikti."
        },
        {
            "en": "forget-me-not",
            "es": "la nomeolvides",
            "tr": "unutma beni",
            "en_": "Forget-me-nots are small and blue.",
            "es_": "Las nomeolvides son pequeñas y azules.",
            "tr_": "Unutma beniler küçük ve mavidir."
        },
        {
            "en": "daisy",
            "es": "la margarita",
            "tr": "papatya",
            "en_": "The daisy is a common flower in the meadow.",
            "es_": "La margarita es una flor común en el prado.",
            "tr_": "Papatya çayırda yaygın bir çiçektir."
        },
        {
            "en": "poppy",
            "es": "la amapola",
            "tr": "gelincik",
            "en_": "The field was covered with red poppies.",
            "es_": "El campo estaba cubierto de amapolas rojas.",
            "tr_": "Tarla kırmızı gelinciklerle kaplıydı."
        },
        {
            "en": "woods",
            "es": "el bosque",
            "tr": "orman",
            "en_": "We went for a hike in the woods.",
            "es_": "Fuimos a hacer senderismo por el bosque.",
            "tr_": "Ormanda yürüyüşe çıktık."
        },
        {
            "en": "oak",
            "es": "el roble",
            "tr": "meşe",
            "en_": "The old oak tree is very tall.",
            "es_": "El viejo roble es muy alto.",
            "tr_": "Eski meşe ağacı çok uzun."
        },
        {
            "en": "pine",
            "es": "el pino",
            "tr": "çam",
            "en_": "Pine trees are common in this forest.",
            "es_": "Los pinos son comunes en este bosque.",
            "tr_": "Bu ormanda çam ağaçları yaygındır."
        },
        {
            "en": "willow",
            "es": "el sauce",
            "tr": "söğüt",
            "en_": "The willow tree grew near the riverbank.",
            "es_": "El sauce creció cerca de la orilla del río.",
            "tr_": "Söğüt ağacı nehir kenarında büyüdü."
        },
        {
            "en": "leaf",
            "es": "la hoja",
            "tr": "yaprak",
            "en_": "The leaf fell gently from the tree.",
            "es_": "La hoja cayó suavemente del árbol.",
            "tr_": "Yaprak nazikçe ağaçtan düştü."
        },
        {
            "en": "branch",
            "es": "la rama",
            "tr": "dal",
            "en_": "The bird perched on the branch.",
            "es_": "El pájaro se posó en la rama.",
            "tr_": "Kuş dala kondu."
        },
        {
            "en": "seaweed",
            "es": "las algas marinas",
            "tr": "yosun",
            "en_": "The beach was covered with seaweed after the storm.",
            "es_": "La playa estaba cubierta de algas marinas después de la tormenta.",
            "tr_": "Fırtınadan sonra plaj yosunlarla kaplandı."
        }
    ],
    "Animals" : [
        {
            "en": "animal",
            "es": "el animal",
            "tr": "hayvan",
            "en_": "The zoo has many different animals.",
            "es_": "El zoológico tiene muchos animales diferentes.",
            "tr_": "Hayvanat bahçesinde birçok farklı hayvan var."
        },
        {
            "en": "dog",
            "es": "el perro / la perra",
            "tr": "köpek",
            "en_": "The dog barked loudly at the stranger.",
            "es_": "El perro ladró fuerte al desconocido.",
            "tr_": "Köpek yabancıya yüksek sesle havladı."
        },
        {
            "en": "kennel",
            "es": "la perrera",
            "tr": "kulübe",
            "en_": "The dog sleeps in its kennel at night.",
            "es_": "El perro duerme en su perrera por la noche.",
            "tr_": "Köpek geceleri kulübesinde uyur."
        },
        {
            "en": "puppy",
            "es": "el cachorro / la cachorra",
            "tr": "yavru köpek",
            "en_": "The puppy is chewing on a toy.",
            "es_": "El cachorro está mordiendo un juguete.",
            "tr_": "Yavru köpek bir oyuncağı kemiriyor."
        },
        {
            "en": "fur",
            "es": "el pelo",
            "tr": "kürk",
            "en_": "The cat has soft white fur.",
            "es_": "El gato tiene un pelo blanco y suave.",
            "tr_": "Kedinin yumuşak beyaz kürkü var."
        },
        {
            "en": "paw",
            "es": "la pata",
            "tr": "pati",
            "en_": "The dog lifted its paw for a treat.",
            "es_": "El perro levantó la pata por una golosina.",
            "tr_": "Köpek ödül için patisini kaldırdı."
        },
        {
            "en": "playful",
            "es": "juguetón",
            "tr": "oyuncu",
            "en_": "The puppy is very playful and active.",
            "es_": "El cachorro es muy juguetón y activo.",
            "tr_": "Yavru köpek çok oyuncu ve hareketli."
        },
        {
            "en": "to bark",
            "es": "ladrar",
            "tr": "havlamak",
            "en_": "Dogs often bark when they hear a noise.",
            "es_": "Los perros a menudo ladran cuando oyen un ruido.",
            "tr_": "Köpekler bir ses duyunca sıkça havlar."
        },
        {
            "en": "to chase",
            "es": "perseguir",
            "tr": "kovalamak",
            "en_": "The dog chased the ball across the yard.",
            "es_": "El perro persiguió la pelota por el patio.",
            "tr_": "Köpek topu bahçede kovaladı."
        },
        {
            "en": "to bring",
            "es": "traer",
            "tr": "getirmek",
            "en_": "He brought the newspaper every morning.",
            "es_": "Traía el periódico todas las mañanas.",
            "tr_": "Her sabah gazeteyi getirirdi."
        },
        {
            "en": "tail",
            "es": "el rabo",
            "tr": "kuyruk",
            "en_": "The dog wagged its tail happily.",
            "es_": "El perro movió su rabo con alegría.",
            "tr_": "Köpek kuyruğunu sevinçle salladı."
        },
        {
            "en": "to growl",
            "es": "gruñir",
            "tr": "hırlamak",
            "en_": "The dog growled when it saw the stranger.",
            "es_": "El perro gruñó al ver al desconocido.",
            "tr_": "Köpek yabancıyı görünce hırladı."
        },
        {
            "en": "cat",
            "es": "el gato / la gata",
            "tr": "kedi",
            "en_": "The cat jumped onto the windowsill.",
            "es_": "El gato saltó al alféizar de la ventana.",
            "tr_": "Kedi pencere pervazına atladı."
        },
        {
            "en": "basket",
            "es": "el cesto",
            "tr": "sepet",
            "en_": "The kitten is sleeping in the basket.",
            "es_": "El gatito está durmiendo en el cesto.",
            "tr_": "Yavru kedi sepetin içinde uyuyor."
        },
        {
            "en": "to purr",
            "es": "ronronear",
            "tr": "mırıldanmak",
            "en_": "The cat purred as I petted it.",
            "es_": "El gato ronroneó mientras lo acariciaba.",
            "tr_": "Kedi onu severken mırıldandı."
        },
        {
            "en": "kitten",
            "es": "el gatito / la gatita",
            "tr": "yavru kedi",
            "en_": "The kitten chased a piece of string.",
            "es_": "El gatito persiguió un trozo de cuerda.",
            "tr_": "Yavru kedi bir ip parçasını kovaladı."
        },
        {
            "en": "to mew",
            "es": "maullar",
            "tr": "miyavlamak",
            "en_": "The kitten mewed softly.",
            "es_": "El gatito maulló suavemente.",
            "tr_": "Yavru kedi yavaşça miyavladı."
        },
        {
            "en": "claw",
            "es": "la garra",
            "tr": "pençe",
            "en_": "The cat scratched the sofa with its claws.",
            "es_": "El gato arañó el sofá con sus garras.",
            "tr_": "Kedi koltuğu pençeleriyle tırmaladı."
        },
        {
            "en": "soft",
            "es": "suave",
            "tr": "yumuşak",
            "en_": "The pillow feels very soft.",
            "es_": "La almohada se siente muy suave.",
            "tr_": "Yastık çok yumuşak hissettiriyor."
        },
        {
            "en": "sweet",
            "es": "encantador(a)",
            "tr": "tatlı",
            "en_": "She has a sweet and gentle voice.",
            "es_": "Ella tiene una voz encantadora y suave.",
            "tr_": "Tatlı ve yumuşak bir sesi var."
        },
        {
            "en": "canary",
            "es": "el canario / la canaria",
            "tr": "kanarya",
            "en_": "The canary sings beautifully in the morning.",
            "es_": "El canario canta hermosamente por la mañana.",
            "tr_": "Kanarya sabahları çok güzel şarkı söyler."
        },
        {
            "en": "to perch",
            "es": "posarse",
            "tr": "tünemek",
            "en_": "The bird perched on the tree branch.",
            "es_": "El pájaro se posó en la rama del árbol.",
            "tr_": "Kuş ağaç dalına tünedi."
        },
        {
            "en": "wing",
            "es": "el ala",
            "tr": "kanat",
            "en_": "The bird spread its wings and flew away.",
            "es_": "El pájaro extendió sus alas y voló.",
            "tr_": "Kuş kanatlarını açıp uçtu."
        },
        {
            "en": "beak",
            "es": "el pico",
            "tr": "gaga",
            "en_": "The bird pecked with its beak.",
            "es_": "El pájaro picoteó con su pico.",
            "tr_": "Kuş gagasıyla gagaladı."
        },
        {
            "en": "feather",
            "es": "la pluma",
            "tr": "tüy",
            "en_": "A white feather fell from the bird.",
            "es_": "Una pluma blanca cayó del pájaro.",
            "tr_": "Kuştan beyaz bir tüy düştü."
        },
        {
            "en": "hedgehog",
            "es": "el erizo / la eriza",
            "tr": "kirpi",
            "en_": "The hedgehog curled into a ball.",
            "es_": "El erizo se hizo una bola.",
            "tr_": "Kirpi top gibi kıvrıldı."
        },
        {
            "en": "rabbit",
            "es": "el conejo",
            "tr": "tavşan",
            "en_": "The rabbit hopped across the garden.",
            "es_": "El conejo saltó por el jardín.",
            "tr_": "Tavşan bahçede zıplayarak ilerledi."
        },
        {
            "en": "turtle",
            "es": "la tortuga",
            "tr": "kaplumbağa",
            "en_": "The turtle moved slowly on the sand.",
            "es_": "La tortuga se movía lentamente sobre la arena.",
            "tr_": "Kaplumbağa kumda yavaşça ilerledi."
        },
        {
            "en": "cage",
            "es": "la jaula",
            "tr": "kafes",
            "en_": "The bird lives in a small cage.",
            "es_": "El pájaro vive en una jaula pequeña.",
            "tr_": "Kuş küçük bir kafeste yaşıyor."
        },
        {
            "en": "to feed",
            "es": "dar de comer",
            "tr": "yem vermek [beslemek]",
            "en_": "She feeds the animals every morning.",
            "es_": "Ella da de comer a los animales cada mañana.",
            "tr_": "Her sabah hayvanlara yem verir."
        },
        {
            "en": "fish",
            "es": "el pez",
            "tr": "balık",
            "en_": "The fish swims quickly in the tank.",
            "es_": "El pez nada rápido en el acuario.",
            "tr_": "Balık akvaryumda hızlıca yüzer."
        },
        {
            "en": "mouse",
            "es": "el ratón",
            "tr": "fare",
            "en_": "The mouse ran under the table.",
            "es_": "El ratón corrió debajo de la mesa.",
            "tr_": "Fare masanın altından geçti."
        },
        {
            "en": "zoo",
            "es": "el zoológico",
            "tr": "hayvanat bahçesi",
            "en_": "We visited the zoo last weekend.",
            "es_": "Visitamos el zoológico el fin de semana pasado.",
            "tr_": "Geçen hafta sonu hayvanat bahçesini ziyaret ettik."
        },
        {
            "en": "bird",
            "es": "el pájaro",
            "tr": "kuş",
            "en_": "A small bird is singing in the tree.",
            "es_": "Un pequeño pájaro canta en el árbol.",
            "tr_": "Ağaçta küçük bir kuş ötüyor."
        },
        {
            "en": "nest",
            "es": "el nido",
            "tr": "yuva",
            "en_": "The bird built a nest in the tree.",
            "es_": "El pájaro construyó un nido en el árbol.",
            "tr_": "Kuş ağaçta bir yuva yaptı."
        },
        {
            "en": "zebra",
            "es": "la cebra",
            "tr": "zebra",
            "en_": "The zebra has black and white stripes.",
            "es_": "La cebra tiene rayas negras y blancas.",
            "tr_": "Zebranın siyah ve beyaz çizgileri vardır."
        },
        {
            "en": "giraffe",
            "es": "la jirafa",
            "tr": "zürafa",
            "en_": "The giraffe has a very long neck.",
            "es_": "La jirafa tiene un cuello muy largo.",
            "tr_": "Zürafanın çok uzun bir boynu vardır."
        },
        {
            "en": "polar bear",
            "es": "el oso blanco",
            "tr": "kutup ayısı",
            "en_": "The polar bear lives in the Arctic.",
            "es_": "El oso blanco vive en el Ártico.",
            "tr_": "Kutup ayısı Arktik’te yaşar."
        },
        {
            "en": "elephant",
            "es": "el elefante",
            "tr": "fil",
            "en_": "The elephant is the largest land animal.",
            "es_": "El elefante es el animal terrestre más grande.",
            "tr_": "Fil en büyük kara hayvanıdır."
        },
        {
            "en": "trunk",
            "es": "la trompa",
            "tr": "fil hortumu",
            "en_": "The elephant uses its trunk to drink water.",
            "es_": "El elefante usa su trompa para beber agua.",
            "tr_": "Fil su içmek için hortumunu kullanır."
        },
        {
            "en": "tusk",
            "es": "el colmillo",
            "tr": "fildişi",
            "en_": "The elephant’s tusks are very strong.",
            "es_": "Los colmillos del elefante son muy fuertes.",
            "tr_": "Filin fildişleri çok güçlüdür."
        },
        {
            "en": "gorilla",
            "es": "el gorila",
            "tr": "goril",
            "en_": "The gorilla is a powerful primate.",
            "es_": "El gorila es un primate poderoso.",
            "tr_": "Goril güçlü bir primattır."
        },
        {
            "en": "wild",
            "es": "salvaje",
            "tr": "vahşi",
            "en_": "Wild animals live in forests.",
            "es_": "Los animales salvajes viven en los bosques.",
            "tr_": "Vahşi hayvanlar ormanlarda yaşar."
        },
        {
            "en": "tame",
            "es": "manso(a)",
            "tr": "uysal [evcil]",
            "en_": "The lion is not a tame animal.",
            "es_": "El león no es un animal manso.",
            "tr_": "Aslan evcil bir hayvan değildir."
        },
        {
            "en": "monkey",
            "es": "el mono",
            "tr": "maymun",
            "en_": "The monkey is swinging from tree to tree.",
            "es_": "El mono está colgando de árbol en árbol.",
            "tr_": "Maymun ağaçtan ağaca sallanıyor."
        },
        {
            "en": "kangaroo",
            "es": "el canguro",
            "tr": "kanguru",
            "en_": "The kangaroo jumps very high.",
            "es_": "El canguro salta muy alto.",
            "tr_": "Kanguru çok yükseğe zıplar."
        },
        {
            "en": "ostrich",
            "es": "el avestruz",
            "tr": "devekuşu",
            "en_": "The ostrich is the largest bird.",
            "es_": "El avestruz es el ave más grande.",
            "tr_": "Devekuşu en büyük kuştur."
        },
        {
            "en": "camel",
            "es": "el camello",
            "tr": "deve",
            "en_": "The camel can survive in the desert.",
            "es_": "El camello puede sobrevivir en el desierto.",
            "tr_": "Deve çölde hayatta kalabilir."
        },
        {
            "en": "hump",
            "es": "la jiba",
            "tr": "hörgüç",
            "en_": "The camel’s hump stores fat.",
            "es_": "La jiba del camello almacena grasa.",
            "tr_": "Devenin hörgücü yağ depolar."
        },
        {
            "en": "eagle",
            "es": "el águila",
            "tr": "kartal",
            "en_": "The eagle flies high in the sky.",
            "es_": "El águila vuela alto en el cielo.",
            "tr_": "Kartal gökyüzünde yüksek uçar."
        },
        {
            "en": "penguin",
            "es": "el pingüino",
            "tr": "penguen",
            "en_": "The penguin cannot fly but swims well.",
            "es_": "El pingüino no puede volar pero nada bien.",
            "tr_": "Penguen uçamaz ama iyi yüzer."
        },
        {
            "en": "hippopotamus",
            "es": "el hipopótamo",
            "tr": "su aygırı",
            "en_": "The hippopotamus spends most of its time in water.",
            "es_": "El hipopótamo pasa la mayor parte de su tiempo en el agua.",
            "tr_": "Su aygırı zamanının çoğunu suda geçirir."
        },
        {
            "en": "lion",
            "es": "el león",
            "tr": "aslan",
            "en_": "The lion is known as the king of the jungle.",
            "es_": "El león es conocido como el rey de la selva.",
            "tr_": "Aslan ormanın kralı olarak bilinir."
        },
        {
            "en": "to roar",
            "es": "rugir",
            "tr": "kükremek",
            "en_": "The lion began to roar loudly.",
            "es_": "El león comenzó a rugir fuerte.",
            "tr_": "Aslan yüksek sesle kükremeye başladı."
        },
        {
            "en": "tiger",
            "es": "el tigre",
            "tr": "kaplan",
            "en_": "The tiger is a fierce predator.",
            "es_": "El tigre es un depredador feroz.",
            "tr_": "Kaplan vahşi bir avcıdır."
        },
        {
            "en": "snake",
            "es": "la serpiente",
            "tr": "yılan",
            "en_": "The snake slithered through the grass.",
            "es_": "La serpiente se deslizó por la hierba.",
            "tr_": "Yılan çimenlerin arasında süründü."
        },
        {
            "en": "pigeon",
            "es": "la paloma",
            "tr": "güvercin",
            "en_": "The pigeon flew across the park.",
            "es_": "La paloma voló por el parque.",
            "tr_": "Güvercin parkın üzerinden uçtu."
        },
        {
            "en": "bee",
            "es": "la abeja",
            "tr": "arı",
            "en_": "A bee landed on the flower.",
            "es_": "Una abeja se posó en la flor.",
            "tr_": "Bir arı çiçeğe kondu."
        },
        {
            "en": "butterfly",
            "es": "la mariposa",
            "tr": "kelebek",
            "en_": "A colorful butterfly flew by.",
            "es_": "Una mariposa colorida voló cerca.",
            "tr_": "Renkli bir kelebek uçup geçti."
        },
        {
            "en": "wasp",
            "es": "la avispa",
            "tr": "eşek arısı",
            "en_": "A wasp stung him on the arm.",
            "es_": "Una avispa lo picó en el brazo.",
            "tr_": "Bir eşek arısı onu kolundan soktu."
        },
        {
            "en": "owl",
            "es": "el búho",
            "tr": "baykuş",
            "en_": "The owl hooted in the night.",
            "es_": "El búho ululó en la noche.",
            "tr_": "Baykuş geceleri ötüyor."
        },
        {
            "en": "blackbird",
            "es": "el mirlo",
            "tr": "karatavuk",
            "en_": "A blackbird sang beautifully in the morning.",
            "es_": "Un mirlo cantó hermosamente por la mañana.",
            "tr_": "Karatavuk sabah güzelce öttü."
        },
        {
            "en": "squirrel",
            "es": "la ardilla",
            "tr": "sincap",
            "en_": "The squirrel gathered nuts for the winter.",
            "es_": "La ardilla recogió nueces para el invierno.",
            "tr_": "Sincap kış için fındık topladı."
        },
        {
            "en": "fox",
            "es": "el zorro",
            "tr": "tilki",
            "en_": "The fox sneaked through the forest.",
            "es_": "El zorro se coló por el bosque.",
            "tr_": "Tilki ormanın içinden sessizce geçti."
        },
        {
            "en": "mole",
            "es": "el topo",
            "tr": "köstebek",
            "en_": "A mole dug tunnels in the garden.",
            "es_": "Un topo cavó túneles en el jardín.",
            "tr_": "Bir köstebek bahçede tüneller kazdı."
        },
        {
            "en": "fly",
            "es": "la mosca",
            "tr": "sinek",
            "en_": "The fly landed on the food.",
            "es_": "La mosca se posó sobre la comida.",
            "tr_": "Sinek yemeğin üzerine kondu."
        },
        {
            "en": "spider",
            "es": "la araña",
            "tr": "örümcek",
            "en_": "The spider spun a web in the corner.",
            "es_": "La araña tejió una telaraña en la esquina.",
            "tr_": "Örümcek köşede ağ ördü."
        },
        {
            "en": "sparrow",
            "es": "el gorrión",
            "tr": "serçe",
            "en_": "The sparrow built its nest in the tree.",
            "es_": "El gorrión construyó su nido en el árbol.",
            "tr_": "Serçe ağaca yuva yaptı."
        },
        {
            "en": "seagull",
            "es": "la gaviota",
            "tr": "martı",
            "en_": "A seagull flew over the ocean.",
            "es_": "Una gaviota voló sobre el océano.",
            "tr_": "Bir martı okyanusun üzerinde uçtu."
        },
        {
            "en": "crab",
            "es": "el canare",
            "tr": "yengeç",
            "en_": "We saw a crab crawling on the rocks.",
            "es_": "Vimos un cangrejo arrastrándose sobre las rocas.",
            "tr_": "Kayaların üzerinde yürüyen bir yengeç gördük."
        },
        {
            "en": "dragonfly",
            "es": "la libélula",
            "tr": "yusufçuk",
            "en_": "A dragonfly landed on the flower.",
            "es_": "Una libélula aterrizó en la flor.",
            "tr_": "Bir yusufçuk çiçeğin üzerine kondu."
        },
        {
            "en": "mosquito",
            "es": "el mosquito",
            "tr": "sivrisinek",
            "en_": "Mosquitoes are common in summer.",
            "es_": "Los mosquitos son comunes en verano.",
            "tr_": "Sivrisinekler yazın çok olur."
        },
        {
            "en": "duck",
            "es": "el pato",
            "tr": "ördek",
            "en_": "The duck swam across the pond.",
            "es_": "El pato nadó por el estanque.",
            "tr_": "Ördek gölette yüzdü."
        },
        {
            "en": "frog",
            "es": "la rana",
            "tr": "kurbağa",
            "en_": "The frog jumped into the water.",
            "es_": "La rana saltó al agua.",
            "tr_": "Kurbağa suya atladı."
        }
    ],
    "Self care" : [
        {
            "en": "to have shower",
            "es": "ducharse",
            "tr": "duş almak",
            "en_": "They shower before going to work.",
            "es_": "Ellos se duchan antes de ir al trabajo.",
            "tr_": "İşe gitmeden önce duş alırlar."
        },
        {
            "en": "to wash oneself",
            "es": "lavarse",
            "tr": "yıkanmak",
            "en_": "He washes himself with cold water.",
            "es_": "Él se lava con agua fría.",
            "tr_": "Soğuk suyla yıkanır."
        },
        {
            "en": "to dry oneself",
            "es": "secarse",
            "tr": "kurulanmak",
            "en_": "After showering, she dries herself quickly.",
            "es_": "Después de ducharse, ella se seca rápidamente.",
            "tr_": "Duştan sonra hızla kurulanır."
        },
        {
            "en": "to shave",
            "es": "afeitarse",
            "tr": "tıraş olmak",
            "en_": "He shaves every morning before work.",
            "es_": "Él se afeita cada mañana antes del trabajo.",
            "tr_": "Her sabah işe gitmeden önce tıraş olur."
        },
        {
            "en": "to clean teeth",
            "es": "limpiarse los dientes",
            "tr": "dişleri temizlemek",
            "en_": "I always clean my teeth before going to bed.",
            "es_": "Siempre me limpio los dientes antes de acostarme.",
            "tr_": "Yatmadan önce her zaman dişlerimi temizlerim."
        },
        {
            "en": "to dry one's hair",
            "es": "secarse el pelo",
            "tr": "saçını kurutmak",
            "en_": "She dries her hair after taking a shower.",
            "es_": "Ella se seca el pelo después de ducharse.",
            "tr_": "Duş aldıktan sonra saçını kurutur."
        },
        {
            "en": "to comb one's hair",
            "es": "peinarse",
            "tr": "saçını taramak",
            "en_": "I always comb my hair before leaving the house.",
            "es_": "Siempre me peino antes de salir de casa.",
            "tr_": "Evden çıkmadan önce her zaman saçımı tararım."
        },
        {
            "en": "to brush one's hair",
            "es": "cepillarse el pelo",
            "tr": "saçını fırçalamak",
            "en_": "She brushes her hair every morning.",
            "es_": "Ella se cepilla el pelo cada mañana.",
            "tr_": "Her sabah saçını fırçalar."
        },
        {
            "en": "to make up",
            "es": "maquillarse",
            "tr": "makyaj yapmak",
            "en_": "She takes 20 minutes to make up before work.",
            "es_": "Ella tarda 20 minutos en maquillarse antes del trabajo.",
            "tr_": "İşe gitmeden önce makyaj yapmak için 20 dakika harcıyor."
        },
        {
            "en": "shampoo",
            "es": "el champu",
            "tr": "şampuan",
            "en_": "This shampoo makes my hair shiny.",
            "es_": "Este champú deja mi cabello brillante.",
            "tr_": "Bu şampuan saçımı parlak yapıyor."
        },
        {
            "en": "shower",
            "es": "la ducha",
            "tr": "duş",
            "en_": "I take a quick shower every morning.",
            "es_": "Me doy una ducha rápida cada mañana.",
            "tr_": "Her sabah hızlı bir duş alırım."
        },
        {
            "en": "soap",
            "es": "el jabón",
            "tr": "sabun",
            "en_": "Use this soap to clean your hands.",
            "es_": "Usa este jabón para limpiarte las manos.",
            "tr_": "Ellerini temizlemek için bu sabunu kullan."
        },
        {
            "en": "naked",
            "es": "desnudo(a)",
            "tr": "çıplak",
            "en_": "The baby ran around naked.",
            "es_": "El bebé corrió desnudo por la casa.",
            "tr_": "Bebek evin içinde çıplak koştu."
        },
        {
            "en": "mirror",
            "es": "el espejo",
            "tr": "ayna",
            "en_": "She looked at herself in the mirror.",
            "es_": "Se miró en el espejo.",
            "tr_": "Kendine aynada baktı."
        },
        {
            "en": "razor",
            "es": "la maquinilla",
            "tr": "jilet",
            "en_": "He changed the blade in his razor.",
            "es_": "Cambió la cuchilla de su maquinilla.",
            "tr_": "Jiletinin bıçağını değiştirdi."
        },
        {
            "en": "shaving foam",
            "es": "la espuma de afeitar",
            "tr": "tıraş köpüğü",
            "en_": "He applied shaving foam before shaving.",
            "es_": "Aplicó espuma de afeitar antes de afeitarse.",
            "tr_": "Tıraş olmadan önce tıraş köpüğü sürdü."
        },
        {
            "en": "toothpaste",
            "es": "la pasta de dientes",
            "tr": "diş macunu",
            "en_": "Use a mint toothpaste for fresh breath.",
            "es_": "Usa una pasta de dientes de menta para un aliento fresco.",
            "tr_": "Ferahlık için naneli bir diş macunu kullan."
        },
        {
            "en": "toothbrush",
            "es": "el cepillo de dientes",
            "tr": "diş fırçası",
            "en_": "I bought a new toothbrush yesterday.",
            "es_": "Compré un cepillo de dientes nuevo ayer.",
            "tr_": "Dün yeni bir diş fırçası aldım."
        },
        {
            "en": "brush",
            "es": "el cepillo",
            "tr": "fırça",
            "en_": "I can't find my hair brush.",
            "es_": "No puedo encontrar mi cepillo para el pelo.",
            "tr_": "Saç fırçamı bulamıyorum."
        },
        {
            "en": "comb",
            "es": "el peine",
            "tr": "tarak",
            "en_": "He forgot his comb at the hotel.",
            "es_": "Él olvidó su peine en el hotel.",
            "tr_": "Tarağını otelde unuttu."
        },
        {
            "en": "mascara",
            "es": "el rímel",
            "tr": "maskara",
            "en_": "I need a new mascara for the party tonight.",
            "es_": "Necesito un nuevo rímel para la fiesta de esta noche.",
            "tr_": "Bu geceki parti için yeni bir maskaraya ihtiyacım var."
        },
        {
            "en": "lipstick",
            "es": "lápiz labial",
            "tr": "ruj",
            "en_": "She wore red lipstick to the wedding.",
            "es_": "Ella usó lápiz labial rojo para la boda.",
            "tr_": "Düğünde kırmızı ruj sürdü."
        },
        {
            "en": "perfume",
            "es": "le perfume",
            "tr": "parfüm",
            "en_": "His perfume smells amazing.",
            "es_": "Su perfume huele increíble.",
            "tr_": "Parfümü harika kokuyor."
        }
    ],
    "Clothes" : [
        {
            "en": "to get dressed",
            "es": "vestirse",
            "tr": "giyinmek",
            "en_": "I need ten minutes to get dressed.",
            "es_": "Necesito diez minutos para vestirme.",
            "tr_": "Giyinmek için on dakikaya ihtiyacım var."
        },
        {
            "en": "to take off clothes",
            "es": "quitarse la ropa",
            "tr": "elbiseleri çıkarmak",
            "en_": "He took off his clothes and put on pajamas.",
            "es_": "Se quitó la ropa y se puso el pijama.",
            "tr_": "Elbiselerini çıkarıp pijamasını giydi."
        },
        {
            "en": "to iron",
            "es": "planchar",
            "tr": "ütülemek",
            "en_": "She irons her clothes every Sunday.",
            "es_": "Ella plancha su ropa todos los domingos.",
            "tr_": "O, her pazar kıyafetlerini ütüler."
        },
        {
            "en" : "to wear glasses",
            "es" : "llevar gafas",
            "tr" : "gözlük takmak",
            "en_": "He wears glasses to read books more clearly.",
            "es_": "Él lleva gafas para leer libros más claramente.",
            "tr_": "O, kitapları daha net okuyabilmek için gözlük takar."
        },
        {
            "en": "bra",
            "es": "el sostén",
            "tr": "sütyen",
            "en_": "She bought a new bra yesterday.",
            "es_": "Ella compró un nuevo sostén ayer.",
            "tr_": "Dün yeni bir sütyen aldı."
        },
        {
            "en": "panties",
            "es": "las bragas",
            "tr": "külot",
            "en_": "I packed ten pairs of panties for the trip.",
            "es_": "Empaqué diez pares de bragas para el viaje.",
            "tr_": "Seyahat için on adet külot hazırladım."
        },
        {
            "en": "socks",
            "es": "los calcetines",
            "tr": "çorap",
            "en_": "Don't forget to pack some socks.",
            "es_": "No olvides empacar unos calcetines.",
            "tr_": "Biraz çorap almayı unutma."
        },
        {
            "en": "undershirt",
            "es": "la camiseta",
            "tr": "atlet",
            "en_": "He always wears an undershirt under his shirt.",
            "es_": "Siempre lleva una camiseta debajo de la camisa.",
            "tr_": "Gömleğinin altına her zaman atlet giyer."
        },
        {
            "en": "petticoat",
            "es": "la combinación",
            "tr": "kombinezon",
            "en_": "She wore a silk petticoat under her dress.",
            "es_": "Llevaba una combinación de seda debajo del vestido.",
            "tr_": "Elbisesinin altına ipek bir kombinezon giymişti."
        },
        {
            "en": "underpants",
            "es": "los calzoncillos",
            "tr": "külot",
            "en_": "He bought a new set of underpants.",
            "es_": "Compró un nuevo conjunto de calzoncillos.",
            "tr_": "Yeni bir külot takımı aldı."
        },
        {
            "en": "blouse",
            "es": "la blusa",
            "tr": "bluz",
            "en_": "She wore a white blouse to the meeting.",
            "es_": "Llevaba una blusa blanca a la reunión.",
            "tr_": "Toplantıya beyaz bir bluz giymişti."
        },
        {
            "en": "skirt",
            "es": "la falda",
            "tr": "etek",
            "en_": "Her red skirt matched her shoes.",
            "es_": "Su falda roja combinaba con sus zapatos.",
            "tr_": "Kırmızı eteği ayakkabılarıyla uyumluydu."
        },
        {
            "en": "dress",
            "es": "el vestido",
            "tr": "elbise",
            "en_": "She wore a beautiful dress to the party.",
            "es_": "Llevaba un vestido hermoso a la fiesta.",
            "tr_": "Partiye güzel bir elbise giymişti."
        },
        {
            "en": "cardigan",
            "es": "la chaqueta de punto",
            "tr": "hırka",
            "en_": "She wore a cozy cardigan at the office.",
            "es_": "Llevaba una chaqueta de punto cómoda en la oficina.",
            "tr_": "Ofiste rahat bir hırka giymişti."
        },
        {
            "en": "jeans",
            "es": "los vaqueros",
            "tr": "kot pantolon",
            "en_": "He always wears jeans on weekends.",
            "es_": "Él siempre lleva vaqueros los fines de semana.",
            "tr_": "Hafta sonları hep kot pantolon giyer."
        },
        {
            "en": "shirt",
            "es": "la camisa",
            "tr": "gömlek",
            "en_": "This blue shirt goes well with your jacket.",
            "es_": "Esta camisa azul combina bien con tu chaqueta.",
            "tr_": "Bu mavi gömlek ceketine çok yakışıyor."
        },
        {
            "en": "t-shirt",
            "es": "la camiseta",
            "tr": "tişört",
            "en_": "I bought a black T-shirt at the concert.",
            "es_": "Compré una camiseta negra en el concierto.",
            "tr_": "Konserde siyah bir tişört aldım."
        },
        {
            "en": "cotton",
            "es": "de algodón",
            "tr": "pamuklu",
            "en_": "I prefer cotton clothes in the summer.",
            "es_": "Prefiero la ropa de algodón en verano.",
            "tr_": "Yazın pamuklu kıyafetleri tercih ederim."
        },
        {
            "en": "tie",
            "es": "la corbata",
            "tr": "kıravat",
            "en_": "He wore a red tie to the interview.",
            "es_": "Llevaba una corbata roja a la entrevista.",
            "tr_": "Mülakata kırmızı bir kravat takarak gitti."
        },
        {
            "en": "sweater",
            "es": "el jersey",
            "tr": "kazak",
            "en_": "I knitted a sweater for my brother.",
            "es_": "Tejí un jersey para mi hermano.",
            "tr_": "Kardeşime bir kazak ördüm."
        },
        {
            "en": "woollen",
            "es": "de lana",
            "tr": "yün",
            "en_": "She wore a woollen scarf in the cold weather.",
            "es_": "Llevaba una bufanda de lana en el frío.",
            "tr_": "Soğuk havada yün bir atkı takmıştı."
        },
        {
            "en": "trousers",
            "es": "los pantalones",
            "tr": "pantolon",
            "en_": "He forgot to iron his trousers.",
            "es_": "Se olvidó de planchar los pantalones.",
            "tr_": "Pantolonunu ütülemeyi unuttu."
        },
        {
            "en": "dungarees",
            "es": "el mono",
            "tr": "tulum",
            "en_": "She wore denim dungarees while painting.",
            "es_": "Llevaba un mono de mezclilla mientras pintaba.",
            "tr_": "Boyama yaparken kot tulum giymişti."
        },
        {
            "en": "jewelry",
            "es": "las joyas",
            "tr": "mücevher",
            "en_": "She keeps her jewelry in a small box.",
            "es_": "Guarda sus joyas en una cajita.",
            "tr_": "Mücevherlerini küçük bir kutuda saklar."
        },
        {
            "en": "earrings",
            "es": "los pendientes",
            "tr": "küpe",
            "en_": "These gold earrings were a gift from my mother.",
            "es_": "Estos pendientes de oro fueron un regalo de mi madre.",
            "tr_": "Bu altın küpeler annemden bir hediyeydi."
        },
        {
            "en": "brooch",
            "es": "el prendedor",
            "tr": "broş",
            "en_": "She wore a vintage brooch on her jacket.",
            "es_": "Llevaba un prendedor antiguo en su chaqueta.",
            "tr_": "Ceketine eski bir broş takmıştı."
        },
        {
            "en": "bracelet",
            "es": "la pulsera",
            "tr": "bilezik",
            "en_": "He gave her a silver bracelet for her birthday.",
            "es_": "Le regaló una pulsera de plata por su cumpleaños.",
            "tr_": "Ona doğum gününde gümüş bir bilezik hediye etti."
        },
        {
            "en": "watch",
            "es": "el reloj de pulsera",
            "tr": "kol saati",
            "en_": "My grandfather's watch still works perfectly.",
            "es_": "El reloj de mi abuelo todavía funciona perfectamente.",
            "tr_": "Dedemin kol saati hâlâ mükemmel çalışıyor."
        },
        {
            "en": "ring",
            "es": "la sortija",
            "tr": "yüzük",
            "en_": "He bought a diamond ring for the proposal.",
            "es_": "Compró una sortija de diamantes para la propuesta.",
            "tr_": "Teklif için bir pırlanta yüzük aldı."
        },
        {
            "en": "wedding ring",
            "es": "el anillo",
            "tr": "alyans",
            "en_": "They exchanged wedding rings at the ceremony.",
            "es_": "Intercambiaron anillos en la ceremonia.",
            "tr_": "Törende alyanslarını taktılar."
        },
        {
            "en": "necklace",
            "es": "el collar",
            "tr": "kolye",
            "en_": "She wore a pearl necklace with her dress.",
            "es_": "Llevaba un collar de perlas con su vestido.",
            "tr_": "Elbisesiyle birlikte inci bir kolye takmıştı."
        },
        {
            "en": "coat",
            "es": "el abrigo",
            "tr": "ceket",
            "en_": "Don't forget your coat, it's cold outside.",
            "es_": "No olvides tu abrigo, hace frío afuera.",
            "tr_": "Ceketini unutma, dışarısı soğuk."
        },
        {
            "en": "hat",
            "es": "el sombrero",
            "tr": "şapka",
            "en_": "He wore a stylish hat to the event.",
            "es_": "Llevaba un sombrero elegante al evento.",
            "tr_": "Etkinliğe şık bir şapka takarak geldi."
        },
        {
            "en": "pocket",
            "es": "el bolsillo",
            "tr": "cep",
            "en_": "He put the keys in his pocket.",
            "es_": "Puso las llaves en su bolsillo.",
            "tr_": "Anahtarları cebine koydu."
        },
        {
            "en": "gloves",
            "es": "los guantes",
            "tr": "eldiven",
            "en_": "She wore wool gloves in the snow.",
            "es_": "Llevaba guantes de lana en la nieve.",
            "tr_": "Karda yün eldivenler takmıştı."
        },
        {
            "en": "belt",
            "es": "el cinturón",
            "tr": "kemer",
            "en_": "He tightened his belt before leaving.",
            "es_": "Se apretó el cinturón antes de salir.",
            "tr_": "Çıkmadan önce kemerini sıktı."
        },
        {
            "en": "button",
            "es": "el botón",
            "tr": "düğme",
            "en_": "The last button on his shirt is missing.",
            "es_": "Falta el último botón de su camisa.",
            "tr_": "Gömleğinin son düğmesi eksik."
        },
        {
            "en": "boots",
            "es": "las botas",
            "tr": "çizme",
            "en_": "She wore black boots to the party.",
            "es_": "Llevaba botas negras a la fiesta.",
            "tr_": "Partiye siyah çizmelerle gitti."
        },
        {
            "en": "cap",
            "es": "la gorra",
            "tr": "şapka",
            "en_": "He wore a cap to protect himself from the sun.",
            "es_": "Llevaba una gorra para protegerse del sol.",
            "tr_": "Güneşten korunmak için şapka taktı."
        },
        {
            "en": "raincoat",
            "es": "el impermeable",
            "tr": "yağmurluk",
            "en_": "Take your raincoat, it might rain today.",
            "es_": "Lleva tu impermeable, puede llover hoy.",
            "tr_": "Yağmurluğunu al, bugün yağmur yağabilir."
        },
        {
            "en": "scarf",
            "es": "la bufanda",
            "tr": "atkı",
            "en_": "She wrapped a red scarf around her neck.",
            "es_": "Se envolvió una bufanda roja alrededor del cuello.",
            "tr_": "Boynuna kırmızı bir atkı sardı."
        },
        {
            "en": "jacket",
            "es": "la chaqueta",
            "tr": "ceket",
            "en_": "He forgot his jacket at the restaurant.",
            "es_": "Olvidó su chaqueta en el restaurante.",
            "tr_": "Ceketini restoranda unuttu."
        },
        {
            "en": "zipper",
            "es": "la cremallera",
            "tr": "fermuar",
            "en_": "The zipper on my bag is broken.",
            "es_": "La cremallera de mi bolso está rota.",
            "tr_": "Çantamın fermuarı bozulmuş."
        },
        {
            "en": "shoes",
            "es": "los zapatos",
            "tr": "ayakkabı",
            "en_": "He polished his shoes before the meeting.",
            "es_": "Se lustró los zapatos antes de la reunión.",
            "tr_": "Toplantıdan önce ayakkabılarını parlattı."
        },
        {
            "en": "sandals",
            "es": "las sandalias",
            "tr": "sandalet",
            "en_": "She wore sandals to the beach.",
            "es_": "Llevaba sandalias a la playa.",
            "tr_": "Plaja sandaletle gitti."
        },
        {
            "en": "robe",
            "es": "la bata",
            "tr": "sabahlık",
            "en_": "She wears a warm robe after showering.",
            "es_": "Ella usa una bata cálida después de ducharse.",
            "tr_": "Duştan sonra sıcak bir sabahlık giyer."
        },
        {
            "en": "pajamas",
            "es": "el pijama",
            "tr": "pijama",
            "en_": "These pajamas are very comfortable.",
            "es_": "Este pijama es muy cómodo.",
            "tr_": "Bu pijama çok rahat."
        },
        {
            "en": "nightgown",
            "es": "el camisón",
            "tr": "gecelik",
            "en_": "She wore a silk nightgown to sleep.",
            "es_": "Llevaba un camisón de seda para dormir.",
            "tr_": "Uyumak için ipek bir gecelik giydi."
        },
        {
            "en": "slippers",
            "es": "las zapatillas",
            "tr": "terlik",
            "en_": "He put on his slippers and went to the kitchen.",
            "es_": "Se puso las zapatillas y fue a la cocina.",
            "tr_": "Terliklerini giyip mutfağa gitti."
        }
    ],
    "Eating and drinking" : [
        {
            "en": "to eat",
            "es": "comer",
            "tr": "yemek",
            "en_": "We usually eat dinner at seven.",
            "es_": "Normalmente comemos la cena a las siete.",
            "tr_": "Genellikle akşam yemeğini yedide yeriz."
        },
        {
            "en": "to drink",
            "es": "beber",
            "tr": "içmek",
            "en_": "He drank a glass of cold water.",
            "es_": "Bebió un vaso de agua fría.",
            "tr_": "Bir bardak soğuk su içti."
        },
        {
            "en": "to be thirsty",
            "es": "tener sed",
            "tr": "susamak",
            "en_": "After the run, I was really thirsty.",
            "es_": "Después de correr, tenía mucha sed.",
            "tr_": "Koştuktan sonra çok susamıştım."
        },
        {
            "en": "to be hungry",
            "es": "tener hambre",
            "tr": "acıkmak",
            "en_": "I didn’t eat all day and now I’m hungry.",
            "es_": "No comí en todo el día y ahora tengo hambre.",
            "tr_": "Tüm gün hiçbir şey yemedim ve şimdi acıktım."
        },
        {
            "en": "to set the table",
            "es": "poner la mesa",
            "tr": "masayı kurmak",
            "en_": "He always sets the table before dinner.",
            "es_": "Siempre pone la mesa antes de la cena.",
            "tr_": "Akşam yemeğinden önce hep masayı kurar."
        },
        {
            "en": "to cook",
            "es": "guisar",
            "tr": "pişirmek",
            "en_": "We often cook dinner together on weekends.",
            "es_": "A menudo cocinamos la cena juntos los fines de semana.",
            "tr_": "Hafta sonları sık sık birlikte yemek pişiririz."
        },
        {
            "en": "to taste",
            "es": "probar",
            "tr": "tadına bakmak",
            "en_": "Would you like to taste the soup?",
            "es_": "¿Quieres probar la sopa?",
            "tr_": "Çorbanın tadına bakmak ister misin?"
        },
        {
            "en": "to do the dishes",
            "es": "fregar",
            "tr": "bulaşıkları yıkamak",
            "en_": "I did the dishes after dinner last night.",
            "es_": "Lavé los platos después de la cena anoche.",
            "tr_": "Dün gece yemekten sonra bulaşıkları yıkadım."
        },
        {
            "en": "coffee-pot",
            "es": "la cafetera",
            "tr": "kahve makinesi",
            "en_": "The coffee-pot is already brewing.",
            "es_": "La cafetera ya está preparando el café.",
            "tr_": "Kahve makinesi çoktan çalışmaya başladı."
        },
        {
            "en": "teapot",
            "es": "la tetera",
            "tr": "çaydanlık",
            "en_": "She poured hot water into the teapot.",
            "es_": "Vertió agua caliente en la tetera.",
            "tr_": "Sıcak suyu çaydanlığa döktü."
        },
        {
            "en": "napkin",
            "es": "la servilleta",
            "tr": "peçete",
            "en_": "He wiped his mouth with a napkin.",
            "es_": "Se limpió la boca con una servilleta.",
            "tr_": "Ağzını bir peçeteyle sildi."
        },
        {
            "en": "glass",
            "es": "el vaso",
            "tr": "bardak",
            "en_": "She filled the glass with orange juice.",
            "es_": "Llenó el vaso con jugo de naranja.",
            "tr_": "Bardağı portakal suyuyla doldurdu."
        },
        {
            "en": "cup",
            "es": "la taza",
            "tr": "fincan",
            "en_": "I drank a cup of coffee this morning.",
            "es_": "Tomé una taza de café esta mañana.",
            "tr_": "Bu sabah bir fincan kahve içtim."
        },
        {
            "en": "plate",
            "es": "el plato",
            "tr": "tabak",
            "en_": "He broke a plate while washing the dishes.",
            "es_": "Rompió un plato mientras lavaba los platos.",
            "tr_": "Bulaşıkları yıkarken bir tabak kırdı."
        },
        {
            "en": "bowl",
            "es": "el tazón",
            "tr": "kase",
            "en_": "She served the soup in a large bowl.",
            "es_": "Sirvió la sopa en un tazón grande.",
            "tr_": "Çorbayı büyük bir kaseye koydu."
        },
        {
            "en": "saucer",
            "es": "el platillo",
            "tr": "fincan tabağı",
            "en_": "There was a small cookie on the saucer.",
            "es_": "Había una galleta pequeña en el platillo.",
            "tr_": "Fincan tabağının üstünde küçük bir kurabiye vardı."
        },
        {
            "en": "spoon",
            "es": "la cuchara",
            "tr": "kaşık",
            "en_": "He stirred his tea with a spoon.",
            "es_": "Revolvió su té con una cuchara.",
            "tr_": "Çayını bir kaşıkla karıştırdı."
        },
        {
            "en": "fork",
            "es": "el tenedor",
            "tr": "çatal",
            "en_": "She picked up the salad with a fork.",
            "es_": "Recogió la ensalada con un tenedor.",
            "tr_": "Salatayı çatalla aldı."
        },
        {
            "en": "knife",
            "es": "el cuchillo",
            "tr": "bıçak",
            "en_": "He cut the meat with a sharp knife.",
            "es_": "Cortó la carne con un cuchillo afilado.",
            "tr_": "Eti keskin bir bıçakla kesti."
        },
        {
            "en": "jug",
            "es": "el jarro",
            "tr": "sürahi",
            "en_": "The jug is full of cold water.",
            "es_": "El jarro está lleno de agua fría.",
            "tr_": "Sürahi soğuk suyla dolu."
        },
        {
            "en": "tablecloth",
            "es": "el mantel",
            "tr": "masa örtüsü",
            "en_": "She spread a clean tablecloth on the table.",
            "es_": "Extendió un mantel limpio sobre la mesa.",
            "tr_": "Masaya temiz bir masa örtüsü serdi."
        },
        {
            "en": "tasty",
            "es": "sabroso(a)",
            "tr": "lezzetli",
            "en_": "This soup is really tasty.",
            "es_": "Esta sopa está realmente sabrosa.",
            "tr_": "Bu çorba gerçekten çok lezzetli."
        },
        {
            "en": "breakfast",
            "es": "el desayuno",
            "tr": "kahvaltı",
            "en_": "We had a big breakfast this morning.",
            "es_": "Tuvimos un gran desayuno esta mañana.",
            "tr_": "Bu sabah büyük bir kahvaltı yaptık."
        },
        {
            "en": "juice",
            "es": "el jugo",
            "tr": "meyve suyu",
            "en_": "Would you like some orange juice?",
            "es_": "¿Quieres un poco de jugo de naranja?",
            "tr_": "Biraz portakal suyu ister misin?"
        },
        {
            "en": "coffee",
            "es": "el café",
            "tr": "kahve",
            "en_": "I can't start my day without coffee.",
            "es_": "No puedo empezar el día sin café.",
            "tr_": "Kahvesiz güne başlayamam."
        },
        {
            "en": "tea",
            "es": "el té",
            "tr": "çay",
            "en_": "We drank tea after dinner.",
            "es_": "Bebimos té después de la cena.",
            "tr_": "Akşam yemeğinden sonra çay içtik."
        },
        {
            "en": "bread",
            "es": "el pan",
            "tr": "ekmek",
            "en_": "He baked fresh bread this morning.",
            "es_": "Horneó pan fresco esta mañana.",
            "tr_": "Bu sabah taze ekmek pişirdi."
        },
        {
            "en": "cheese",
            "es": "el queso",
            "tr": "peynir",
            "en_": "She sliced some cheese for the sandwich.",
            "es_": "Cortó un poco de queso para el sándwich.",
            "tr_": "Sandviç için biraz peynir kesti."
        },
        {
            "en": "butter",
            "es": "la mantequilla",
            "tr": "tereyağı",
            "en_": "I spread butter on the toast.",
            "es_": "Unté mantequilla en la tostada.",
            "tr_": "Kızarmış ekmeğe tereyağı sürdüm."
        },
        {
            "en": "lunch",
            "es": "el almuerzo",
            "tr": "öğle yemeği",
            "en_": "We had lunch at a small café.",
            "es_": "Almorzamos en un pequeño café.",
            "tr_": "Küçük bir kafede öğle yemeği yedik."
        },
        {
            "en": "salad",
            "es": "la ensalada",
            "tr": "salata",
            "en_": "She made a fresh salad with tomatoes and cucumbers.",
            "es_": "Hizo una ensalada fresca con tomates y pepinos.",
            "tr_": "Domates ve salatalıkla taze bir salata yaptı."
        },
        {
            "en": "soup",
            "es": "la sopa",
            "tr": "çorba",
            "en_": "They served hot soup before the main course.",
            "es_": "Sirvieron sopa caliente antes del plato principal.",
            "tr_": "Ana yemekten önce sıcak çorba servis ettiler."
        },
        {
            "en": "meat",
            "es": "la carne",
            "tr": "et",
            "en_": "They grilled the meat over charcoal.",
            "es_": "Asaron la carne sobre carbón.",
            "tr_": "Eti kömür ateşinde ızgarada pişirdiler."
        },
        {
            "en": "main meal",
            "es": "la comida",
            "tr": "ana yemek",
            "en_": "The main meal was served at noon.",
            "es_": "La comida se sirvió al mediodía.",
            "tr_": "Ana yemek öğle vakti servis edildi."
        },
        {
            "en": "wine",
            "es": "el vino",
            "tr": "şarap",
            "en_": "They opened a bottle of red wine.",
            "es_": "Abrieron una botella de vino tinto.",
            "tr_": "Bir şişe kırmızı şarap açtılar."
        },
        {
            "en": "beer",
            "es": "la cerveza",
            "tr": "bira",
            "en_": "He drank a cold beer after work.",
            "es_": "Bebió una cerveza fría después del trabajo.",
            "tr_": "İşten sonra soğuk bir bira içti."
        },
        {
            "en": "mineral water",
            "es": "el agua mineral",
            "tr": "maden suyu",
            "en_": "She ordered a glass of mineral water.",
            "es_": "Pidió un vaso de agua mineral.",
            "tr_": "Bir bardak maden suyu sipariş etti."
        },
        {
            "en": "desert",
            "es": "el postre",
            "tr": "tatlı",
            "en_": "We had ice cream for dessert.",
            "es_": "Tomamos helado de postre.",
            "tr_": "Tatlı olarak dondurma yedik."
        },
        {
            "en": "restaurant",
            "es": "el restaurante",
            "tr": "restoran",
            "en_": "We went to a nice restaurant for dinner.",
            "es_": "Fuimos a un buen restaurante para cenar.",
            "tr_": "Akşam yemeği için güzel bir restorana gittik."
        },
        {
            "en": "waiter",
            "es": "el camarero / la camarera",
            "tr": "garson",
            "en_": "The waiter took our order quickly.",
            "es_": "El camarero tomó nuestro pedido rápidamente.",
            "tr_": "Garson siparişimizi hızlıca aldı."
        },
        {
            "en": "menu",
            "es": "el menú",
            "tr": "menü",
            "en_": "The menu had many delicious options.",
            "es_": "El menú tenía muchas opciones deliciosas.",
            "tr_": "Menüde birçok lezzetli seçenek vardı."
        },
        {
            "en": "starter",
            "es": "para empezar",
            "tr": "başlangıç",
            "en_": "We ordered soup as a starter.",
            "es_": "Pedimos sopa para empezar.",
            "tr_": "Başlangıç olarak çorba sipariş ettik."
        },
        {
            "en": "main course",
            "es": "el primer plato",
            "tr": "ana yemek",
            "en_": "The steak was delicious as the main course.",
            "es_": "El filete estaba delicioso como el primer plato.",
            "tr_": "Ana yemek olarak biftek çok lezzetliydi."
        },
        {
            "en": "tray",
            "es": "la bandeja",
            "tr": "tepsi",
            "en_": "The waiter carried the food on a tray.",
            "es_": "El camarero llevó la comida en una bandeja.",
            "tr_": "Garson yemeği tepsiyle taşıdı."
        }
    ],
    "Food" : [
        {
            "en": "meat",
            "es": "la carne",
            "tr": "et",
            "en_": "He bought some fresh meat from the butcher.",
            "es_": "Compró carne fresca en la carnicería.",
            "tr_": "Kasaptan biraz taze et aldı."
        },
        {
            "en": "chicken",
            "es": "el pollo",
            "tr": "tavuk [piliç]",
            "en_": "She roasted a chicken for dinner.",
            "es_": "Asó un pollo para la cena.",
            "tr_": "Akşam yemeği için tavuk kızarttı."
        },
        {
            "en": "steak",
            "es": "el filete",
            "tr": "biftek",
            "en_": "He ordered a medium steak at the restaurant.",
            "es_": "Pidió un filete a término medio en el restaurante.",
            "tr_": "Restoranda orta pişmiş bir biftek sipariş etti."
        },
        {
            "en": "ham",
            "es": "el jamón",
            "tr": "jambon",
            "en_": "We made sandwiches with cheese and ham.",
            "es_": "Hicimos bocadillos con queso y jamón.",
            "tr_": "Peynir ve jambonla sandviç yaptık."
        },
        {
            "en": "veal",
            "es": "la ternera",
            "tr": "dana eti",
            "en_": "The stew was made with tender veal.",
            "es_": "El guiso se hizo con ternera tierna.",
            "tr_": "Güveç yumuşak dana etiyle yapıldı."
        },
        {
            "en": "lamb meat",
            "es": "la carne de cordero",
            "tr": "kuzu eti",
            "en_": "She cooked lamb meat with rosemary.",
            "es_": "Cocinó carne de cordero con romero.",
            "tr_": "Kuzu etini biberiye ile pişirdi."
        },
        {
            "en": "sausage",
            "es": "la salchicha",
            "tr": "sosis",
            "en_": "They had sausage and eggs for breakfast.",
            "es_": "Desayunaron salchicha con huevos.",
            "tr_": "Kahvaltıda sosis ve yumurta yediler."
        },
        {
            "en": "vegetables",
            "es": "las verduras",
            "tr": "sebzeler",
            "en_": "She always buys fresh vegetables from the market.",
            "es_": "Siempre compra verduras frescas en el mercado.",
            "tr_": "Her zaman pazardan taze sebzeler alır."
        },
        {
            "en": "fresh",
            "es": "fresco(a)",
            "tr": "taze",
            "en_": "These strawberries are very fresh.",
            "es_": "Estas fresas están muy frescas.",
            "tr_": "Bu çilekler çok taze."
        },
        {
            "en": "cabbage",
            "es": "la col",
            "tr": "lahana",
            "en_": "She chopped the cabbage for the salad.",
            "es_": "Cortó la col para la ensalada.",
            "tr_": "Salata için lahanayı doğradı."
        },
        {
            "en": "garlic",
            "es": "el ajo",
            "tr": "sarımsak",
            "en_": "He added garlic to the sauce.",
            "es_": "Añadió ajo a la salsa.",
            "tr_": "Sosa sarımsak ekledi."
        },
        {
            "en": "onion",
            "es": "la cebolla",
            "tr": "soğan",
            "en_": "She fried onion in olive oil.",
            "es_": "Sofrió cebolla en aceite de oliva.",
            "tr_": "Zeytinyağında soğan kavurdu."
        },
        {
            "en": "pea",
            "es": "el guisante",
            "tr": "bezelye",
            "en_": "The soup contains peas and carrots.",
            "es_": "La sopa lleva guisantes y zanahorias.",
            "tr_": "Çorbanın içinde bezelye ve havuç var."
        },
        {
            "en": "carrot",
            "es": "la zanahoria",
            "tr": "havuç",
            "en_": "He sliced the carrot into thin strips.",
            "es_": "Cortó la zanahoria en tiras finas.",
            "tr_": "Havucu ince şeritler halinde doğradı."
        },
        {
            "en": "spinach",
            "es": "la espinaca",
            "tr": "ıspanak",
            "en_": "I made a spinach pie for lunch.",
            "es_": "Hice una tarta de espinaca para el almuerzo.",
            "tr_": "Öğle yemeği için ıspanaklı börek yaptım."
        },
        {
            "en": "cauliflower",
            "es": "la coliflor",
            "tr": "karnıbahar",
            "en_": "We steamed the cauliflower until soft.",
            "es_": "Cocinamos al vapor la coliflor hasta que esté blanda.",
            "tr_": "Karnabaharı yumuşayana kadar buharda pişirdik."
        },
        {
            "en": "Brussels sprouts",
            "es": "la col de Bruselas",
            "tr": "Brüksel lahanası",
            "en_": "He roasted Brussels sprouts with olive oil.",
            "es_": "Asó coles de Bruselas con aceite de oliva.",
            "tr_": "Brüksel lahanasını zeytinyağıyla fırınladı."
        },
        {
            "en": "raw",
            "es": "crudo(a)",
            "tr": "çiğ",
            "en_": "The fish is served raw in this dish.",
            "es_": "El pescado se sirve crudo en este plato.",
            "tr_": "Bu yemekte balık çiğ servis edilir."
        },
        {
            "en": "tomato",
            "es": "el tomate",
            "tr": "domates",
            "en_": "She sliced the tomato for the sandwich.",
            "es_": "Cortó el tomate para el sándwich.",
            "tr_": "Sandviç için domatesi dilimledi."
        },
        {
            "en": "green bean",
            "es": "la judía verde",
            "tr": "yeşil fasulye",
            "en_": "He cooked green beans with garlic.",
            "es_": "Cocinó judías verdes con ajo.",
            "tr_": "Yeşil fasulyeyi sarımsakla pişirdi."
        },
        {
            "en": "potato",
            "es": "la patata",
            "tr": "patates",
            "en_": "She peeled a potato for the soup.",
            "es_": "Peló una patata para la sopa.",
            "tr_": "Çorba için bir patates soydu."
        },
        {
            "en": "fish",
            "es": "el pescado",
            "tr": "balık",
            "en_": "He grilled the fish with lemon.",
            "es_": "Asó el pescado con limón.",
            "tr_": "Balığı limonla ızgarada pişirdi."
        },
        {
            "en": "sea bream",
            "es": "el besugo",
            "tr": "çipura",
            "en_": "We had grilled sea bream for dinner.",
            "es_": "Cenamos besugo a la parrilla.",
            "tr_": "Akşam yemeğinde ızgara çipura yedik."
        },
        {
            "en": "shellfish",
            "es": "los mariscos",
            "tr": "kabuklu deniz ürünleri",
            "en_": "She is allergic to shellfish.",
            "es_": "Es alérgica a los mariscos.",
            "tr_": "Kabuklu deniz ürünlerine alerjisi var."
        },
        {
            "en": "cod",
            "es": "el bacalao",
            "tr": "morina",
            "en_": "They served cod with garlic sauce.",
            "es_": "Sirvieron bacalao con salsa de ajo.",
            "tr_": "Morinayı sarımsaklı sosla servis ettiler."
        },
        {
            "en": "cucumber",
            "es": "el pepino",
            "tr": "salatalık",
            "en_": "I added cucumber to the salad.",
            "es_": "Añadí pepino a la ensalada.",
            "tr_": "Salataya salatalık ekledim."
        },
        {
            "en": "eggplant",
            "es": "la berenjena",
            "tr": "patlıcan",
            "en_": "He grilled eggplant for lunch.",
            "es_": "Asó berenjena para el almuerzo.",
            "tr_": "Öğle yemeği için patlıcan ızgara yaptı."
        },
        {
            "en": "mint",
            "es": "la menta",
            "tr": "nane",
            "en_": "I love mint in my tea.",
            "es_": "Me encanta la menta en el té.",
            "tr_": "Çayımda naneyi çok severim."
        },
        {
            "en": "chilli",
            "es": "el chile",
            "tr": "acı biber",
            "en_": "He added chilli to the stew.",
            "es_": "Añadió chile al guiso.",
            "tr_": "Güvece acı biber ekledi."
        },
        {
            "en": "sweet",
            "es": "dulce",
            "tr": "tatlı",
            "en_": "This cake is very sweet.",
            "es_": "Este pastel está muy dulce.",
            "tr_": "Bu kek çok tatlı."
        },
        {
            "en": "sour",
            "es": "agrio(a)",
            "tr": "ekşi",
            "en_": "The lemon juice is too sour.",
            "es_": "El jugo de limón está demasiado agrio.",
            "tr_": "Limon suyu çok ekşi."
        },
        {
            "en": "fruit",
            "es": "la fruta",
            "tr": "meyve",
            "en_": "He eats fruit every morning.",
            "es_": "Come fruta cada mañana.",
            "tr_": "Her sabah meyve yer."
        },
        {
            "en": "ripe",
            "es": "maduro(a)",
            "tr": "olgun",
            "en_": "These peaches are perfectly ripe.",
            "es_": "Estos melocotones están perfectamente maduros.",
            "tr_": "Bu şeftaliler tam anlamıyla olgun."
        },
        {
            "en": "grape",
            "es": "la uva",
            "tr": "üzüm",
            "en_": "She picked a bunch of grapes.",
            "es_": "Cogió un racimo de uvas.",
            "tr_": "Bir salkım üzüm kopardı."
        },
        {
            "en": "banana",
            "es": "el plátano",
            "tr": "muz",
            "en_": "He eats a banana after his workout.",
            "es_": "Come un plátano después del entrenamiento.",
            "tr_": "Antrenmandan sonra bir muz yer."
        },
        {
            "en": "peach",
            "es": "el melocotón",
            "tr": "şeftali",
            "en_": "I bought some juicy peaches.",
            "es_": "Compré unos melocotones jugosos.",
            "tr_": "Sulu şeftaliler aldım."
        },
        {
            "en": "lemon",
            "es": "el limón",
            "tr": "limon",
            "en_": "She squeezed a lemon into her tea.",
            "es_": "Exprimió un limón en su té.",
            "tr_": "Çayına bir limon sıktı."
        },
        {
            "en": "melon",
            "es": "el melón",
            "tr": "kavun",
            "en_": "He cut the melon into slices.",
            "es_": "Cortó el melón en rodajas.",
            "tr_": "Kavunu dilimlere ayırdı."
        },
        {
            "en": "watermelon",
            "es": "la sandia",
            "tr": "karpuz",
            "en_": "We ate watermelon at the picnic.",
            "es_": "Comimos sandía en el picnic.",
            "tr_": "Piknikte karpuz yedik."
        },
        {
            "en": "cherry",
            "es": "la cereza",
            "tr": "kiraz",
            "en_": "She put a cherry on top of the cake.",
            "es_": "Puso una cereza encima del pastel.",
            "tr_": "Pastanın üzerine bir kiraz koydu."
        },
        {
            "en": "apricot",
            "es": "el albaricoque",
            "tr": "kayısı",
            "en_": "I ate a sweet apricot this morning.",
            "es_": "Comí un albaricoque dulce esta mañana.",
            "tr_": "Bu sabah tatlı bir kayısı yedim."
        },
        {
            "en": "plum",
            "es": "la ciruela",
            "tr": "erik",
            "en_": "The plum was sour but tasty.",
            "es_": "La ciruela estaba agria pero sabrosa.",
            "tr_": "Erik ekşiydi ama lezzetliydi."
        },
        {
            "en": "apple",
            "es": "la manzana",
            "tr": "elma",
            "en_": "An apple a day keeps the doctor away.",
            "es_": "Una manzana al día mantiene al médico en la lejanía.",
            "tr_": "Günde bir elma, doktoru uzak tutar."
        },
        {
            "en": "pear",
            "es": "la pera",
            "tr": "armut",
            "en_": "She sliced a ripe pear.",
            "es_": "Cortó una pera madura.",
            "tr_": "Olgun bir armut dilimledi."
        },
        {
            "en": "orange",
            "es": "la naranja",
            "tr": "portakal",
            "en_": "He drank fresh orange juice.",
            "es_": "Bebió jugo de naranja fresco.",
            "tr_": "Taze portakal suyu içti."
        },
        {
            "en": "tangerine",
            "es": "la mandarina",
            "tr": "mandalina",
            "en_": "Tangerines are easy to peel.",
            "es_": "Las mandarinas son fáciles de pelar.",
            "tr_": "Mandalinalar kolay soyulur."
        },
        {
            "en": "grapefruit",
            "es": "el pomelo",
            "tr": "greyfurt",
            "en_": "She added grapefruit to her salad.",
            "es_": "Agregó pomelo a su ensalada.",
            "tr_": "Salatasına greyfurt ekledi."
        },
        {
            "en": "mulberry",
            "es": "la mora",
            "tr": "dut",
            "en_": "The mulberries stained my fingers.",
            "es_": "Las moras mancharon mis dedos.",
            "tr_": "Dutlar parmaklarımı boyadı."
        },
        {
            "en": "blackberry",
            "es": "la zarzamora",
            "tr": "böğürtlen",
            "en_": "He made blackberry jam.",
            "es_": "Hizo mermelada de zarzamora.",
            "tr_": "Böğürtlen reçeli yaptı."
        },
        {
            "en": "raspberry",
            "es": "la frambuesa",
            "tr": "ahududu",
            "en_": "I love raspberry tarts.",
            "es_": "Me encantan las tartas de frambuesa.",
            "tr_": "Ahududulu tartları çok severim."
        },
        {
            "en": "blueberry",
            "es": "el arándano",
            "tr": "yabanmersini",
            "en_": "Blueberries are rich in antioxidants.",
            "es_": "Los arándanos son ricos en antioxidantes.",
            "tr_": "Yaban mersini antioksidan bakımından zengindir."
        },
        {
            "en": "walnut",
            "es": "la nuez",
            "tr": "ceviz",
            "en_": "She sprinkled walnuts on the salad.",
            "es_": "Espolvoreó nueces en la ensalada.",
            "tr_": "Salatanın üzerine ceviz serpti."
        },
        {
            "en": "hazelnut",
            "es": "la avellana",
            "tr": "fındık",
            "en_": "He eats hazelnuts as a snack.",
            "es_": "Come avellanas como merienda.",
            "tr_": "Ara öğün olarak fındık yer."
        },
        {
            "en": "peanut",
            "es": "el maní",
            "tr": "fıstık",
            "en_": "Peanuts are often used in sauces.",
            "es_": "Los maníes se usan a menudo en salsas.",
            "tr_": "Fıstıklar genellikle soslarda kullanılır."
        },
        {
            "en": "almond",
            "es": "la almendra",
            "tr": "badem",
            "en_": "She added almonds to the cake.",
            "es_": "Agregó almendras al pastel.",
            "tr_": "Pastaya badem ekledi."
        },
        {
            "en": "quince",
            "es": "el membrillo",
            "tr": "ayva",
            "en_": "They made quince jam.",
            "es_": "Hicieron mermelada de membrillo.",
            "tr_": "Ayva reçeli yaptılar."
        },
        {
            "en": "noodle",
            "es": "el fideo",
            "tr": "erişte",
            "en_": "She prepared homemade noodles.",
            "es_": "Preparó fideos caseros.",
            "tr_": "Ev yapımı erişte hazırladı."
        },
        {
            "en": "chickpea",
            "es": "el garbanzo",
            "tr": "nohut",
            "en_": "Chickpeas are used in hummus.",
            "es_": "Los garbanzos se usan en el hummus.",
            "tr_": "Humusta nohut kullanılır."
        },
        {
            "en": "bean",
            "es": "la judía",
            "tr": "fasulye",
            "en_": "Beans are rich in protein.",
            "es_": "Las judías son ricas en proteínas.",
            "tr_": "Fasulyeler protein açısından zengindir."
        },
        {
            "en": "cream",
            "es": "la nata",
            "tr": "krema",
            "en_": "He poured cream into his coffee.",
            "es_": "Vertió nata en su café.",
            "tr_": "Kahvesine krema döktü."
        },
        {
            "en": "milk",
            "es": "la leche",
            "tr": "süt",
            "en_": "She drinks a glass of milk every night.",
            "es_": "Bebe un vaso de leche cada noche.",
            "tr_": "Her gece bir bardak süt içer."
        },
        {
            "en": "margarine",
            "es": "la margarina",
            "tr": "margarin",
            "en_": "Margarine is often used as a butter substitute.",
            "es_": "La margarina se usa a menudo como sustituto de la mantequilla.",
            "tr_": "Margarin genellikle tereyağı yerine kullanılır."
        },
        {
            "en": "yogurt",
            "es": "el yogur",
            "tr": "yoğurt",
            "en_": "He eats yogurt with fruit for breakfast.",
            "es_": "Come yogur con fruta en el desayuno.",
            "tr_": "Kahvaltıda meyveli yoğurt yer."
        },
        {
            "en": "honey",
            "es": "la miel",
            "tr": "bal",
            "en_": "I like honey in my tea.",
            "es_": "Me gusta la miel en mi té.",
            "tr_": "Çayıma bal koymayı severim."
        },
        {
            "en": "egg",
            "es": "el huevo",
            "tr": "yumurta",
            "en_": "He boiled two eggs.",
            "es_": "Hirvió dos huevos.",
            "tr_": "İki yumurta haşladı."
        },
        {
            "en": "jam",
            "es": "la mermelada",
            "tr": "reçel",
            "en_": "She spread strawberry jam on the toast.",
            "es_": "Untó mermelada de fresa en la tostada.",
            "tr_": "Kızarmış ekmeğe çilek reçeli sürdü."
        },
        {
            "en": "sugar",
            "es": "el azúcar",
            "tr": "şeker",
            "en_": "Do you want sugar in your coffee?",
            "es_": "¿Quieres azúcar en tu café?",
            "tr_": "Kahvene şeker ister misin?"
        },
        {
            "en": "flour",
            "es": "la harina",
            "tr": "un",
            "en_": "She needs flour to bake the cake.",
            "es_": "Necesita harina para hornear el pastel.",
            "tr_": "Kek yapmak için una ihtiyacı var."
        },
        {
            "en": "oil",
            "es": "el aceite",
            "tr": "yağ",
            "en_": "Heat the oil before adding the vegetables.",
            "es_": "Calienta el aceite antes de añadir las verduras.",
            "tr_": "Sebzeleri eklemeden önce yağı ısıt."
        },
        {
            "en": "salt",
            "es": "la sal",
            "tr": "tuz",
            "en_": "Add a pinch of salt.",
            "es_": "Agrega una pizca de sal.",
            "tr_": "Bir tutam tuz ekle."
        },
        {
            "en": "vinegar",
            "es": "el vinagre",
            "tr": "sirke",
            "en_": "Add some vinegar to the salad.",
            "es_": "Agrega un poco de vinagre a la ensalada.",
            "tr_": "Salataya biraz sirke ekle."
        },
        {
            "en": "pepper",
            "es": "la pimienta",
            "tr": "biber",
            "en_": "She put black pepper on her eggs.",
            "es_": "Le puso pimienta negra a sus huevos.",
            "tr_": "Yumurtasının üzerine karabiber koydu."
        },
        {
            "en": "seasoning",
            "es": "el condimento",
            "tr": "çeşni",
            "en_": "This soup needs more seasoning.",
            "es_": "A esta sopa le faltan condimentos.",
            "tr_": "Bu çorbanın biraz daha çeşniye ihtiyacı var."
        },
        {
            "en": "mustard",
            "es": "la mostaza",
            "tr": "hardal",
            "en_": "Would you like mustard on your sandwich?",
            "es_": "¿Quieres mostaza en tu sándwich?",
            "tr_": "Sandviçine hardal ister misin?"
        },
        {
            "en": "frozen food",
            "es": "los congelados",
            "tr": "dondurulmuş gıda",
            "en_": "He always buys frozen food for quick meals.",
            "es_": "Siempre compra productos congelados para comidas rápidas.",
            "tr_": "Hızlı yemekler için hep dondurulmuş gıda alır."
        },
        {
            "en": "spices",
            "es": "las especias",
            "tr": "baharatlar",
            "en_": "Indian food uses a lot of spices.",
            "es_": "La comida india usa muchas especias.",
            "tr_": "Hint yemekleri çok fazla baharat kullanır."
        },
        {
            "en": "rice",
            "es": "el arroz",
            "tr": "pirinç",
            "en_": "Rice is a common side dish.",
            "es_": "El arroz es un acompañamiento común.",
            "tr_": "Pirinç yaygın bir yan yemektir."
        },
        {
            "en": "canned products",
            "es": "los productos en lata",
            "tr": "konserve ürünler",
            "en_": "Canned products are convenient for storage.",
            "es_": "Los productos en lata son prácticos para guardar.",
            "tr_": "Konserve ürünler saklama açısından kullanışlıdır."
        },
        {
            "en": "chocolate",
            "es": "el chocolate",
            "tr": "çikolata",
            "en_": "Children love chocolate.",
            "es_": "A los niños les encanta el chocolate.",
            "tr_": "Çocuklar çikolatayı çok sever."
        },
        {
            "en": "cookie",
            "es": "la galleta",
            "tr": "kurabiye",
            "en_": "She baked chocolate chip cookies.",
            "es_": "Hizo galletas con chispas de chocolate.",
            "tr_": "Çikolata parçacıklı kurabiyeler yaptı."
        },
        {
            "en": "icecream",
            "es": "el helado",
            "tr": "dondurma",
            "en_": "I want a scoop of vanilla ice cream.",
            "es_": "Quiero una bola de helado de vainilla.",
            "tr_": "Bir top vanilyalı dondurma istiyorum."
        },
        {
            "en": "receipe",
            "es": "la receta",
            "tr": "reçete",
            "en_": "This recipe is easy to follow.",
            "es_": "Esta receta es fácil de seguir.",
            "tr_": "Bu tarif uygulanması kolay."
        },
        {
            "en": "ingredient",
            "es": "el ingrediente",
            "tr": "içerik",
            "en_": "Flour is a basic ingredient in baking.",
            "es_": "La harina es un ingrediente básico en la repostería.",
            "tr_": "Un, pastacılıkta temel bir içeriktir."
        },
        {
            "en": "flavor [taste]",
            "es": "el sabor",
            "tr": "tat [lezzet]",
            "en_": "This cake has a rich flavor.",
            "es_": "Este pastel tiene un sabor intenso.",
            "tr_": "Bu pastanın yoğun bir tadı var."
        },
        {
            "en": "delicious",
            "es": "riquísimo(a)",
            "tr": "lezzetli",
            "en_": "The pasta was delicious!",
            "es_": "¡La pasta estaba riquísima!",
            "tr_": "Makarna çok lezzetliydi!"
        }
    ],
    "Pastimes" : [
        {
            "en": "to watch television",
            "es": "mirar la televisión",
            "tr": "televizyon izlemek",
            "en_": "We usually watch television after dinner.",
            "es_": "Normalmente miramos la televisión después de cenar.",
            "tr_": "Genellikle akşam yemeğinden sonra televizyon izleriz."
        },
        {
            "en": "to listen to radio",
            "es": "escuchar la radio",
            "tr": "radyo dinlemek",
            "en_": "My dad listens to the radio while driving.",
            "es_": "Mi padre escucha la radio mientras conduce.",
            "tr_": "Babam araba sürerken radyo dinler."
        },
        {
            "en": "to listen to music",
            "es": "escuchar música",
            "tr": "müzik dinlemek",
            "en_": "She listens to music to relax.",
            "es_": "Escucha música para relajarse.",
            "tr_": "Rahatlamak için müzik dinler."
        },
        {
            "en": "to read",
            "es": "leer",
            "tr": "okumak",
            "en_": "I like to read before going to sleep.",
            "es_": "Me gusta leer antes de dormir.",
            "tr_": "Uyumadan önce okumayı severim."
        },
        {
            "en": "to take a photograph",
            "es": "tomar una foto",
            "tr": "fotoğraf çekmek",
            "en_": "He likes to take a photograph of nature.",
            "es_": "Le gusta tomar una foto de la naturaleza.",
            "tr_": "Doğanın fotoğrafını çekmeyi seviyor."
        },
        {
            "en": "to paint",
            "es": "pintar",
            "tr": "boyamak",
            "en_": "She likes to paint landscapes.",
            "es_": "A ella le gusta pintar paisajes.",
            "tr_": "O, manzara boyamayı sever."
        },
        {
            "en": "to sew",
            "es": "coser",
            "tr": "dikmek",
            "en_": "She sews her own clothes.",
            "es_": "Cose su propia ropa.",
            "tr_": "Kendi kıyafetlerini diker."
        },
        {
            "en": "to knit",
            "es": "hacer punto",
            "tr": "örgü örmek",
            "en_": "My grandmother taught me how to knit.",
            "es_": "Mi abuela me enseñó a hacer punto.",
            "tr_": "Bana örgü örmeyi büyükannem öğretti."
        },
        {
            "en": "to collect stamps",
            "es": "coleccionar sellos",
            "tr": "pul toplamak",
            "en_": "He likes to collect stamps as a hobby.",
            "es_": "A él le gusta coleccionar sellos como pasatiempo.",
            "tr_": "O, hobi olarak pul toplamayı sever."
        },
        {
            "en": "to play cards",
            "es": "jugar a las cartas",
            "tr": "iskambil oynamak",
            "en_": "We play cards every Friday night.",
            "es_": "Jugamos a las cartas todos los viernes por la noche.",
            "tr_": "Biz her cuma gecesi iskambil oynarız."
        },
        {
            "en": "to play checkers",
            "es": "jugar a las damas",
            "tr": "dama oynamak",
            "en_": "They play checkers after school.",
            "es_": "Juegan a las damas después de la escuela.",
            "tr_": "Onlar okuldan sonra dama oynarlar."
        },
        {
            "en": "to play chess",
            "es": "jugar al ajedrez",
            "tr": "satranç oynamak",
            "en_": "He likes to play chess on weekends.",
            "es_": "Le gusta jugar al ajedrez los fines de semana.",
            "tr_": "O, hafta sonları satranç oynamayı sever."
        },
        {
            "en": "to play",
            "es": "tocar",
            "tr": "çalmak",
            "en_": "He can play the piano very well.",
            "es_": "Él puede tocar el piano muy bien.",
            "tr_": "O, piyano çok iyi çalabilir."
        },
        {
            "en": "to sing",
            "es": "cantar",
            "tr": "şarkı söylemek",
            "en_": "She loves to sing in the choir.",
            "es_": "A ella le encanta cantar en el coro.",
            "tr_": "O, koroda şarkı söylemeyi sever."
        },
        {
            "en": "to dance",
            "es": "bailar",
            "tr": "dans etmek",
            "en_": "They love to dance at parties.",
            "es_": "Les encanta bailar en las fiestas.",
            "tr_": "Partilerde dans etmeyi severler."
        },
        {
            "en": "channel",
            "es": "la cadena",
            "tr": "kanal",
            "en_": "I changed the channel during the commercials.",
            "es_": "Cambié la cadena durante los comerciales.",
            "tr_": "Reklamlar sırasında kanalı değiştirdim."
        },
        {
            "en": "program",
            "es": "el programa",
            "tr": "program",
            "en_": "This program is very popular among teenagers.",
            "es_": "Este programa es muy popular entre los adolescentes.",
            "tr_": "Bu program gençler arasında çok popüler."
        },
        {
            "en": "headphones",
            "es": "los auriculares",
            "tr": "kulaklık",
            "en_": "I always carry my headphones in my bag.",
            "es_": "Siempre llevo mis auriculares en mi bolso.",
            "tr_": "Kulaklığımı her zaman çantamda taşırım."
        },
        {
            "en": "novel",
            "es": "la novela",
            "tr": "roman",
            "en_": "She is reading a romantic novel.",
            "es_": "Está leyendo una novela romántica.",
            "tr_": "Romantik bir roman okuyor."
        },
        {
            "en": "newspaper",
            "es": "el periódico",
            "tr": "gazete",
            "en_": "He reads the newspaper every morning.",
            "es_": "Lee el periódico todas las mañanas.",
            "tr_": "Her sabah gazete okur."
        },
        {
            "en": "magazine",
            "es": "la revista",
            "tr": "magazin",
            "en_": "She bought a fashion magazine.",
            "es_": "Compró una revista de moda.",
            "tr_": "Bir moda dergisi aldı."
        },
        {
            "en": "comic",
            "es": "el tebeo",
            "tr": "çizgi roman",
            "en_": "He loves reading superhero comics.",
            "es_": "Le encanta leer tebeos de superhéroes.",
            "tr_": "Süper kahraman çizgi romanları okumayı çok seviyor."
        },
        {
            "en": "poetry",
            "es": "la poesía",
            "tr": "şiir",
            "en_": "She writes poetry in her free time.",
            "es_": "Escribe poesía en su tiempo libre.",
            "tr_": "Boş zamanlarında şiir yazar."
        },
        {
            "en": "needle",
            "es": "la aguja",
            "tr": "iğne",
            "en_": "Be careful with the needle, it's sharp.",
            "es_": "Ten cuidado con la aguja, está afilada.",
            "tr_": "İğneye dikkat et, keskindir."
        },
        {
            "en": "pattern",
            "es": "el patrón",
            "tr": "desen",
            "en_": "She followed a pattern to make the sweater.",
            "es_": "Siguió un patrón para hacer el suéter.",
            "tr_": "Kazağı yapmak için bir deseni takip etti."
        },
        {
            "en": "wool",
            "es": "la lana",
            "tr": "yün",
            "en_": "This scarf is made of soft wool.",
            "es_": "Esta bufanda está hecha de lana suave.",
            "tr_": "Bu atkı yumuşak yünden yapılmış."
        },
        {
            "en": "fabric",
            "es": "la tela",
            "tr": "kumaş",
            "en_": "I bought some fabric for a dress.",
            "es_": "Compré tela para un vestido.",
            "tr_": "Bir elbise için kumaş aldım."
        },
        {
            "en": "thread",
            "es": "el hilo",
            "tr": "iplik",
            "en_": "The thread broke while I was sewing.",
            "es_": "El hilo se rompió mientras cosía.",
            "tr_": "Dikerken iplik koptu."
        },
        {
            "en": "scissors",
            "es": "las tijeras",
            "tr": "makas",
            "en_": "Use sharp scissors to cut the paper.",
            "es_": "Usa tijeras afiladas para cortar el papel.",
            "tr_": "Kağıdı kesmek için keskin makas kullan."
        },
        {
            "en": "pin",
            "es": "el alfiler",
            "tr": "toplu iğne",
            "en_": "She used a pin to hold the fabric in place.",
            "es_": "Usó un alfiler para sujetar la tela.",
            "tr_": "Kumaşı sabitlemek için toplu iğne kullandı."
        },
        {
            "en": "elastic band",
            "es": "el cinta elástica",
            "tr": "lastik",
            "en_": "Tie the bundle with an elastic band.",
            "es_": "Ata el paquete con una cinta elástica.",
            "tr_": "Demeti bir lastikle bağla."
        },
        {
            "en": "woodwork",
            "es": "la carpintería",
            "tr": "marangozluk",
            "en_": "He learned woodwork in high school.",
            "es_": "Aprendió carpintería en la escuela secundaria.",
            "tr_": "Lisede marangozluk öğrendi."
        },
        {
            "en": "skillful",
            "es": "hábil",
            "tr": "yetenekli",
            "en_": "She is a skillful craftswoman.",
            "es_": "Es una artesana hábil.",
            "tr_": "O yetenekli bir zanaatkâr."
        },
        {
            "en": "saw",
            "es": "la sierra",
            "tr": "testere",
            "en_": "Use a saw to cut the wood.",
            "es_": "Usa una sierra para cortar la madera.",
            "tr_": "Odunu kesmek için testere kullan."
        },
        {
            "en": "hammer",
            "es": "el martillo",
            "tr": "çekiç",
            "en_": "He hit the nail with a hammer.",
            "es_": "Golpeó el clavo con un martillo.",
            "tr_": "Çiviyi çekiçle çaktı."
        },
        {
            "en": "to repair",
            "es": "reparar",
            "tr": "tamir etmek",
            "en_": "Can you repair this broken chair?",
            "es_": "¿Puedes reparar esta silla rota?",
            "tr_": "Bu kırık sandalyeyi tamir edebilir misin?"
        },
        {
            "en": "screw",
            "es": "el tornillo",
            "tr": "vida",
            "en_": "I need a screw to fix the hinge.",
            "es_": "Necesito un tornillo para fijar la bisagra.",
            "tr_": "Menteşeyi sabitlemek için bir vida lazım."
        },
        {
            "en": "screwdriver",
            "es": "el atornillador",
            "tr": "tornavida",
            "en_": "Hand me the screwdriver, please.",
            "es_": "Pásame el atornillador, por favor.",
            "tr_": "Tornavidayı uzatır mısın lütfen?"
        },
        {
            "en": "photography",
            "es": "la fotografía",
            "tr": "fotoğrafçılık",
            "en_": "Photography captures moments that last forever.",
            "es_": "La fotografía captura momentos que duran para siempre.",
            "tr_": "Fotoğrafçılık, sonsuza dek süren anları yakalar."
        },
        {
            "en": "camera",
            "es": "la máquina fotográfica",
            "tr": "fotoğraf makinesi",
            "en_": "She bought a new camera last week.",
            "es_": "Ella compró una nueva máquina fotográfica la semana pasada.",
            "tr_": "Geçen hafta yeni bir fotoğraf makinesi aldı."
        },
        {
            "en": "video camera",
            "es": "la máquina de vídeo",
            "tr": "kamera",
            "en_": "The video camera recorded the entire event.",
            "es_": "La máquina de vídeo grabó todo el evento.",
            "tr_": "Kamera tüm etkinliği kaydetti."
        },
        {
            "en": "movie",
            "es": "la película",
            "tr": "film",
            "en_": "We watched a great movie last night.",
            "es_": "Vimos una gran película anoche.",
            "tr_": "Dün gece harika bir film izledik."
        },
        {
            "en": "photograph",
            "es": "la foto",
            "tr": "fotoğraf",
            "en_": "This photograph was taken during our vacation.",
            "es_": "Esta foto fue tomada durante nuestras vacaciones.",
            "tr_": "Bu fotoğraf tatilimiz sırasında çekildi."
        },
        {
            "en": "in focus",
            "es": "en foco",
            "tr": "odakta",
            "en_": "The picture is sharp and in focus.",
            "es_": "La imagen está nítida y en foco.",
            "tr_": "Resim net ve odakta."
        },
        {
            "en": "out of focus",
            "es": "fuera de foco",
            "tr": "odak dışı",
            "en_": "The photo is blurry and out of focus.",
            "es_": "La foto está borrosa y fuera de foco.",
            "tr_": "Fotoğraf bulanık ve odak dışı."
        },
        {
            "en": "art gallery",
            "es": "la galería de arte",
            "tr": "sanat galerisi",
            "en_": "We visited the art gallery last weekend.",
            "es_": "Visitamos la galería de arte el fin de semana pasado.",
            "tr_": "Geçen hafta sonu sanat galerisine gittik."
        },
        {
            "en": "painter",
            "es": "el pintor / la pintora",
            "tr": "ressam",
            "en_": "The painter created a beautiful portrait.",
            "es_": "El pintor creó un retrato hermoso.",
            "tr_": "Ressam güzel bir portre yaptı."
        },
        {
            "en": "painting",
            "es": "el cuadro",
            "tr": "tablo",
            "en_": "The painting hangs in the museum.",
            "es_": "El cuadro cuelga en el museo.",
            "tr_": "Tablo müzede asılı duruyor."
        },
        {
            "en": "exhibition",
            "es": "la exposición",
            "tr": "sergi",
            "en_": "The exhibition attracted many visitors.",
            "es_": "La exposición atrajo a muchos visitantes.",
            "tr_": "Sergi birçok ziyaretçi çekti."
        },
        {
            "en": "brush",
            "es": "el pincel",
            "tr": "fırça",
            "en_": "He used a brush to paint the wall.",
            "es_": "Él usó un pincel para pintar la pared.",
            "tr_": "Duvarı boyamak için fırça kullandı."
        },
        {
            "en": "paint",
            "es": "la pintura",
            "tr": "resim",
            "en_": "The paint on the canvas is fresh.",
            "es_": "La pintura en el lienzo está fresca.",
            "tr_": "Tuvaldeki resim taze."
        },
        {
            "en": "collection",
            "es": "la colección",
            "tr": "kolleksiyon",
            "en_": "She has a large collection of stamps.",
            "es_": "Ella tiene una gran colección de sellos.",
            "tr_": "Onun büyük bir pul kolleksiyonu var."
        },
        {
            "en": "musician",
            "es": "el músico / la músico",
            "tr": "müzisyen",
            "en_": "The musician played the guitar beautifully.",
            "es_": "El músico tocó la guitarra maravillosamente.",
            "tr_": "Müzisyen gitarı çok güzel çaldı."
        },
        {
            "en": "instrument",
            "es": "el instrumento",
            "tr": "enstrüman",
            "en_": "She is learning to play a musical instrument.",
            "es_": "Ella está aprendiendo a tocar un instrumento musical.",
            "tr_": "O, müzik enstrümanı çalmayı öğreniyor."
        },
        {
            "en": "violin",
            "es": "el violin",
            "tr": "keman",
            "en_": "She bought a new violin yesterday.",
            "es_": "Ella compró un violín nuevo ayer.",
            "tr_": "O, dün yeni bir keman aldı."
        },
        {
            "en": "piano",
            "es": "el piano",
            "tr": "piyano",
            "en_": "The piano is in the living room.",
            "es_": "El piano está en la sala de estar.",
            "tr_": "Piyano oturma odasında."
        },
        {
            "en": "guitar",
            "es": "la guitarra",
            "tr": "gitar",
            "en_": "He plays the guitar every weekend.",
            "es_": "Él toca la guitarra todos los fines de semana.",
            "tr_": "O, her hafta sonu gitar çalar."
        },
        {
            "en": "drums",
            "es": "los tambores",
            "tr": "davullar",
            "en_": "The drummer hits the drums loudly.",
            "es_": "El baterista toca los tambores fuerte.",
            "tr_": "Davulcu davulları yüksek sesle çalar."
        },
        {
            "en": "trumpet",
            "es": "la trompeta",
            "tr": "trompet",
            "en_": "He practiced the trumpet for hours.",
            "es_": "Él practicó la trompeta por horas.",
            "tr_": "O, saatlerce trompet çalıştı."
        },
        {
            "en": "cello",
            "es": "el violonchelo",
            "tr": "çello",
            "en_": "The cello sounds very deep and rich.",
            "es_": "El violonchelo suena muy profundo y rico.",
            "tr_": "Çello çok derin ve zengin ses çıkarır."
        },
        {
            "en": "orchestra",
            "es": "la orquesta",
            "tr": "orkestra",
            "en_": "The orchestra performed a classical piece.",
            "es_": "La orquesta interpretó una pieza clásica.",
            "tr_": "Orkestra klasik bir eser seslendirdi."
        },
        {
            "en": "melody",
            "es": "la melodía",
            "tr": "melodi",
            "en_": "The melody of the song is very catchy.",
            "es_": "La melodía de la canción es muy pegajosa.",
            "tr_": "Şarkının melodisi çok akılda kalıcı."
        },
        {
            "en": "choir",
            "es": "el coro",
            "tr": "koro",
            "en_": "The choir practiced all week for the concert.",
            "es_": "El coro practicó toda la semana para el concierto.",
            "tr_": "Koro konser için bütün hafta prova yaptı."
        },
        {
            "en": "game",
            "es": "el juego",
            "tr": "oyun",
            "en_": "They played a fun game yesterday.",
            "es_": "Jugaron un juego divertido ayer.",
            "tr_": "Dün eğlenceli bir oyun oynadılar."
        },
        {
            "en": "board games",
            "es": "los juegos de tablero",
            "tr": "masa oyunları",
            "en_": "We enjoy playing board games as a family.",
            "es_": "Disfrutamos jugar a los juegos de tablero en familia.",
            "tr_": "Biz ailece masa oyunları oynamaktan keyif alırız."
        }
    ],
    "City / Countryside" : [
        {
            "en": "capital city",
            "es": "la capital",
            "tr": "başkent",
            "en_": "Ankara is the capital city of Turkey.",
            "es_": "Ankara es la capital de Turquía.",
            "tr_": "Ankara, Türkiye'nin başkentidir."
        },
        {
            "en": "outskirts",
            "es": "las afueras",
            "tr": "kenar mahalleler",
            "en_": "They live in the outskirts of the city.",
            "es_": "Viven en las afueras de la ciudad.",
            "tr_": "Şehrin kenar mahallelerinde yaşıyorlar."
        },
        {
            "en": "city",
            "es": "la ciudad",
            "tr": "şehir",
            "en_": "I love visiting the city during festivals.",
            "es_": "Me encanta visitar la ciudad durante los festivales.",
            "tr_": "Festival zamanlarında şehri ziyaret etmeyi severim."
        },
        {
            "en": "skyscraper",
            "es": "el rascacielos",
            "tr": "gökdelen",
            "en_": "The skyscraper is the tallest building downtown.",
            "es_": "El rascacielos es el edificio más alto del centro.",
            "tr_": "Gökdelen şehir merkezindeki en yüksek binadır."
        },
        {
            "en": "cathedral",
            "es": "la catedral",
            "tr": "katedral",
            "en_": "The cathedral attracts many tourists every year.",
            "es_": "La catedral atrae a muchos turistas cada año.",
            "tr_": "Katedral her yıl birçok turisti çeker."
        },
        {
            "en": "park",
            "es": "el parque",
            "tr": "park",
            "en_": "We spent the afternoon in the park.",
            "es_": "Pasamos la tarde en el parque.",
            "tr_": "Öğleden sonrayı parkta geçirdik."
        },
        {
            "en": "pond",
            "es": "el estanque",
            "tr": "gölet",
            "en_": "The ducks swim in the pond.",
            "es_": "Los patos nadan en el estanque.",
            "tr_": "Ördekler gölette yüzer."
        },
        {
            "en": "river",
            "es": "el río",
            "tr": "nehir",
            "en_": "The river flows through the city center.",
            "es_": "El río pasa por el centro de la ciudad.",
            "tr_": "Nehir şehir merkezinden akar."
        },
        {
            "en": "district",
            "es": "el distrito",
            "tr": "ilçe",
            "en_": "This district is famous for its restaurants.",
            "es_": "Este distrito es famoso por sus restaurantes.",
            "tr_": "Bu ilçe restoranlarıyla ünlüdür."
        },
        {
            "en": "building",
            "es": "el edificio",
            "tr": "bina",
            "en_": "The building has ten floors.",
            "es_": "El edificio tiene diez pisos.",
            "tr_": "Binanın on katı var."
        },
        {
            "en": "church",
            "es": "la iglesia",
            "tr": "kilise",
            "en_": "The church is located near the town square.",
            "es_": "La iglesia está ubicada cerca de la plaza del pueblo.",
            "tr_": "Kilise kasaba meydanının yakınında bulunur."
        },
        {
            "en": "cemetery",
            "es": "el cementerio",
            "tr": "mezarlık",
            "en_": "The old cemetery is a historical place.",
            "es_": "El cementerio viejo es un lugar histórico.",
            "tr_": "Eski mezarlık tarihi bir yerdir."
        },
        {
            "en": "fire station",
            "es": "el parque de bomberos",
            "tr": "itfaiye istasyonu",
            "en_": "The fire station is near the main street.",
            "es_": "El parque de bomberos está cerca de la calle principal.",
            "tr_": "İtfaiye istasyonu ana caddeye yakındır."
        },
        {
            "en": "fire engine",
            "es": "el coche de bomberos",
            "tr": "itfaiye aracı",
            "en_": "The fire engine rushed to the emergency.",
            "es_": "El coche de bomberos corrió hacia la emergencia.",
            "tr_": "İtfaiye aracı acil duruma koştu."
        },
        {
            "en": "factory",
            "es": "la fábrica",
            "tr": "fabrika",
            "en_": "The factory produces cars.",
            "es_": "La fábrica produce coches.",
            "tr_": "Fabrika araba üretir."
        },
        {
            "en": "town hall",
            "es": "el ayuntamiento",
            "tr": "belediye binası",
            "en_": "The town hall is where local decisions are made.",
            "es_": "El ayuntamiento es donde se toman las decisiones locales.",
            "tr_": "Belediye binası yerel kararların alındığı yerdir."
        },
        {
            "en": "office block",
            "es": "el bloque de oficinas",
            "tr": "ofis bloğu",
            "en_": "The office block is full of companies.",
            "es_": "El bloque de oficinas está lleno de empresas.",
            "tr_": "Ofis bloğu şirketlerle doludur."
        },
        {
            "en": "police station",
            "es": "la comisaría",
            "tr": "karakol",
            "en_": "The police station is next to the library.",
            "es_": "La comisaría está junto a la biblioteca.",
            "tr_": "Karakol kütüphanenin yanında."
        },
        {
            "en": "police car",
            "es": "el coche de policía",
            "tr": "polis arabası",
            "en_": "The police car was parked outside.",
            "es_": "El coche de policía estaba estacionado afuera.",
            "tr_": "Polis arabası dışarıda park halindeydi."
        },
        {
            "en": "library",
            "es": "la biblioteca",
            "tr": "kütüphane",
            "en_": "I borrowed a book from the library.",
            "es_": "Tomé prestado un libro de la biblioteca.",
            "tr_": "Kütüphaneden bir kitap ödünç aldım."
        },
        {
            "en": "city center",
            "es": "el centro",
            "tr": "şehir merkezi",
            "en_": "The city center is always busy.",
            "es_": "El centro de la ciudad siempre está ocupado.",
            "tr_": "Şehir merkezi her zaman kalabalıktır."
        },
        {
            "en": "street",
            "es": "la calle",
            "tr": "sokak",
            "en_": "They live on a quiet street.",
            "es_": "Viven en una calle tranquila.",
            "tr_": "Sessiz bir sokakta yaşıyorlar."
        },
        {
            "en": "narrow",
            "es": "estrecho(a)",
            "tr": "dar",
            "en_": "This street is very narrow.",
            "es_": "Esta calle es muy estrecha.",
            "tr_": "Bu sokak çok dar."
        },
        {
            "en": "broad",
            "es": "ancho(a)",
            "tr": "geniş",
            "en_": "The avenue is broad and busy.",
            "es_": "La avenida es ancha y concurrida.",
            "tr_": "Cadde geniş ve yoğundur."
        },
        {
            "en": "corner",
            "es": "la esquina",
            "tr": "köşe",
            "en_": "There is a café on the corner.",
            "es_": "Hay una cafetería en la esquina.",
            "tr_": "Köşede bir kafe var."
        },
        {
            "en": "pedestrian crossing",
            "es": "el cruce de peatones",
            "tr": "yaya geçidi",
            "en_": "Use the pedestrian crossing to be safe.",
            "es_": "Usa el cruce de peatones para estar seguro.",
            "tr_": "Güvende olmak için yaya geçidini kullan."
        },
        {
            "en": "pedestrian",
            "es": "el peatón",
            "tr": "yaya",
            "en_": "The pedestrian waited for the light to turn green.",
            "es_": "El peatón esperó a que el semáforo se pusiera verde.",
            "tr_": "Yaya ışığın yeşile dönmesini bekledi."
        },
        {
            "en": "statute",
            "es": "la estatua",
            "tr": "heykel",
            "en_": "The statue is in the city square.",
            "es_": "La estatua está en la plaza de la ciudad.",
            "tr_": "Heykel şehir meydanındadır."
        },
        {
            "en": "street light",
            "es": "el poste de la luz",
            "tr": "elektrik direği",
            "en_": "The street light brightens the road at night.",
            "es_": "El poste de la luz ilumina la calle por la noche.",
            "tr_": "Elektrik direği gece yolu aydınlatır."
        },
        {
            "en": "subway",
            "es": "el cruce subterráneo",
            "tr": "alt geçit",
            "en_": "Take the subway to cross the busy street.",
            "es_": "Usa el cruce subterráneo para cruzar la calle concurrida.",
            "tr_": "Yoğun caddeden geçmek için alt geçidi kullan."
        },
        {
            "en": "pavement",
            "es": "la acera",
            "tr": "kaldırım",
            "en_": "Walk on the pavement to stay safe.",
            "es_": "Camina por la acera para estar seguro.",
            "tr_": "Güvende olmak için kaldırımda yürü."
        },
        {
            "en": "village",
            "es": "el pueblo",
            "tr": "köy",
            "en_": "The village is surrounded by mountains.",
            "es_": "El pueblo está rodeado de montañas.",
            "tr_": "Köy dağlarla çevrili."
        },
        {
            "en": "landscape",
            "es": "el paisaje",
            "tr": "manzara",
            "en_": "The landscape was breathtaking.",
            "es_": "El paisaje era impresionante.",
            "tr_": "Manzara nefes kesiciydi."
        },
        {
            "en": "peaceful",
            "es": "tranquilo(a)",
            "tr": "huzurlu",
            "en_": "It was a peaceful afternoon in the countryside.",
            "es_": "Fue una tarde tranquila en el campo.",
            "tr_": "Kırsalda huzurlu bir öğleden sonraydı."
        },
        {
            "en": "countryside",
            "es": "el campo",
            "tr": "kırsal",
            "en_": "They enjoy living in the countryside.",
            "es_": "Disfrutan vivir en el campo.",
            "tr_": "Kırsalda yaşamaktan hoşlanıyorlar."
        },
        {
            "en": "cottage",
            "es": "la casita",
            "tr": "küçük ev",
            "en_": "She owns a small cottage by the lake.",
            "es_": "Ella tiene una casita junto al lago.",
            "tr_": "Göl kenarında küçük bir evi var."
        },
        {
            "en": "path",
            "es": "el camino",
            "tr": "patika",
            "en_": "The path leads to a beautiful waterfall.",
            "es_": "El camino lleva a una hermosa cascada.",
            "tr_": "Patika güzel bir şelaleye gidiyor."
        },
        {
            "en": "stream",
            "es": "el arroyo",
            "tr": "dere",
            "en_": "We sat beside the stream to rest.",
            "es_": "Nos sentamos junto al arroyo para descansar.",
            "tr_": "Dere kenarında dinlendik."
        },
        {
            "en": "meadow",
            "es": "el prado",
            "tr": "çayır",
            "en_": "The cows are grazing in the meadow.",
            "es_": "Las vacas están pastando en el prado.",
            "tr_": "İnekler çayırda otluyor."
        },
        {
            "en": "wild flowers",
            "es": "las flores del campo",
            "tr": "kır çiçekleri",
            "en_": "The meadow is full of wild flowers.",
            "es_": "El prado está lleno de flores del campo.",
            "tr_": "Çayır kır çiçekleriyle dolu."
        },
        {
            "en": "a bunch of flowers",
            "es": "un manojo de flores",
            "tr": "bir demet çiçek",
            "en_": "He gave her a bunch of flowers.",
            "es_": "Él le dio un manojo de flores.",
            "tr_": "Ona bir demet çiçek verdi."
        },
        {
            "en": "valley",
            "es": "el valle",
            "tr": "vadi",
            "en_": "The river flows through the valley.",
            "es_": "El río fluye por el valle.",
            "tr_": "Nehir vadiden akar."
        },
        {
            "en": "hill",
            "es": "el cerro",
            "tr": "tepe",
            "en_": "They climbed the hill to see the view.",
            "es_": "Subieron el cerro para ver la vista.",
            "tr_": "Manzarayı görmek için tepeye tırmandılar."
        },
        {
            "en": "bridge",
            "es": "el puente",
            "tr": "köprü",
            "en_": "The bridge connects the two towns.",
            "es_": "El puente conecta los dos pueblos.",
            "tr_": "Köprü iki kasabayı birbirine bağlar."
        },
        {
            "en": "slope",
            "es": "la cuesta",
            "tr": "yokuş",
            "en_": "The car struggled going up the slope.",
            "es_": "El coche tuvo dificultades para subir la cuesta.",
            "tr_": "Araba yokuşu çıkmakta zorlandı."
        },
        {
            "en": "bank",
            "es": "la orilla",
            "tr": "kıyı",
            "en_": "We had a picnic on the river bank.",
            "es_": "Hicimos un picnic en la orilla del río.",
            "tr_": "Nehir kıyısında piknik yaptık."
        }
    ],
    "Shopping" : [
        {
            "en": "to make a list",
            "es": "hacer una lista",
            "tr": "alışveriş listesi yapmak",
            "en_": "I need to make a list before going shopping.",
            "es_": "Necesito hacer una lista antes de ir de compras.",
            "tr_": "Alışverişe gitmeden önce alışveriş listesi yapmam lazım."
        },
        {
            "en": "to go shopping",
            "es": "ir de tiendas",
            "tr": "alışverişe gitmek",
            "en_": "We go shopping every Saturday.",
            "es_": "Vamos de tiendas todos los sábados.",
            "tr_": "Biz her cumartesi alışverişe gideriz."
        },
        {
            "en": "to do shopping",
            "es": "hacer las compras",
            "tr": "alışveriş yapmak",
            "en_": "We usually do shopping on weekends.",
            "es_": "Normalmente hacemos las compras los fines de semana.",
            "tr_": "Genellikle hafta sonları alışveriş yaparız."
        },
        {
            "en": "to line up",
            "es": "hacer cola",
            "tr": "sıraya girmek",
            "en_": "People line up to buy tickets.",
            "es_": "La gente hace cola para comprar boletos.",
            "tr_": "İnsanlar bilet almak için sıraya girer."
        },
        {
            "en": "to weigh",
            "es": "pesar",
            "tr": "tartmak",
            "en_": "Please weigh the apples before buying.",
            "es_": "Por favor, pesa las manzanas antes de comprar.",
            "tr_": "Lütfen elmalar satın almadan önce tart."
        },
        {
            "en": "to buy",
            "es": "comprar",
            "tr": "satın almak",
            "en_": "I want to buy a new phone.",
            "es_": "Quiero comprar un teléfono nuevo.",
            "tr_": "Yeni bir telefon satın almak istiyorum."
        },
        {
            "en": "to sell",
            "es": "vender",
            "tr": "satmak",
            "en_": "They sell fresh vegetables every day.",
            "es_": "Venden verduras frescas todos los días.",
            "tr_": "Her gün taze sebze satarlar."
        },
        {
            "en": "to spend money",
            "es": "gastar dinero",
            "tr": "para harcamak",
            "en_": "I don’t like to spend money on clothes.",
            "es_": "No me gusta gastar dinero en ropa.",
            "tr_": "Kıyafetlere para harcamayı sevmem."
        },
        {
            "en": "shopping bag",
            "es": "la bolsa de compras",
            "tr": "alışveriş çantası",
            "en_": "She carries a big shopping bag.",
            "es_": "Ella lleva una gran bolsa de compras.",
            "tr_": "O büyük bir alışveriş çantası taşıyor."
        },
        {
            "en": "shop",
            "es": "la tienda",
            "tr": "dükkan",
            "en_": "This shop sells fresh fruits.",
            "es_": "Esta tienda vende frutas frescas.",
            "tr_": "Bu dükkan taze meyveler satıyor."
        },
        {
            "en": "butcher",
            "es": "el carnicero",
            "tr": "kasap",
            "en_": "The butcher sells fresh meat.",
            "es_": "El carnicero vende carne fresca.",
            "tr_": "Kasap taze et satıyor."
        },
        {
            "en": "delicatessen",
            "es": "la charcutería",
            "tr": "şarküteri",
            "en_": "I bought cheese at the delicatessen.",
            "es_": "Compré queso en la charcutería.",
            "tr_": "Şarküteriden peynir aldım."
        },
        {
            "en": "delicatessen",
            "es": "la fiambrería",
            "tr": "şarküteri",
            "en_": "The delicatessen offers many kinds of sausages.",
            "es_": "La fiambrería ofrece muchos tipos de embutidos.",
            "tr_": "Şarküteri birçok çeşit sucuk sunuyor."
        },
        {
            "en": "bakery",
            "es": "la panadería",
            "tr": "fırın",
            "en_": "The bakery sells fresh bread every morning.",
            "es_": "La panadería vende pan fresco cada mañana.",
            "tr_": "Fırın her sabah taze ekmek satıyor."
        },
        {
            "en": "baker",
            "es": "el panadero / la panadera",
            "tr": "fırıncı",
            "en_": "The baker wakes up early to bake bread.",
            "es_": "El panadero se despierta temprano para hornear pan.",
            "tr_": "Fırıncı ekmek yapmak için erken kalkar."
        },
        {
            "en": "fish market",
            "es": "la pescadería",
            "tr": "balık marketi",
            "en_": "I bought fresh fish at the fish market.",
            "es_": "Compré pescado fresco en la pescadería.",
            "tr_": "Balık marketinden taze balık aldım."
        },
        {
            "en": "pastry shop",
            "es": "la pastelería",
            "tr": "pastane",
            "en_": "The pastry shop has delicious cakes.",
            "es_": "La pastelería tiene pasteles deliciosos.",
            "tr_": "Pastanede lezzetli pastalar var."
        },
        {
            "en": "pharmacy",
            "es": "la farmacia",
            "tr": "eczane",
            "en_": "I need to go to the pharmacy for medicine.",
            "es_": "Necesito ir a la farmacia por medicina.",
            "tr_": "İlaç için eczaneye gitmem lazım."
        },
        {
            "en": "haberdashery",
            "es": "la mercería",
            "tr": "tuhafiye",
            "en_": "She bought buttons at the haberdashery.",
            "es_": "Ella compró botones en la mercería.",
            "tr_": "Tuhafiyeden düğmeler aldı."
        },
        {
            "en": "bookshop",
            "es": "la librería",
            "tr": "kitapçı",
            "en_": "The bookshop is full of interesting books.",
            "es_": "La librería está llena de libros interesantes.",
            "tr_": "Kitapçı ilginç kitaplarla dolu."
        },
        {
            "en": "florist",
            "es": "la floristería",
            "tr": "çiçekçi",
            "en_": "The florist arranged beautiful flowers.",
            "es_": "La floristería arregló flores hermosas.",
            "tr_": "Çiçekçi güzel çiçekler düzenledi."
        },
        {
            "en": "hairdresser",
            "es": "el peluquerío / la peluquería",
            "tr": "kuaför",
            "en_": "I have an appointment with the hairdresser.",
            "es_": "Tengo una cita con la peluquería.",
            "tr_": "Kuaförde randevum var."
        },
        {
            "en": "market",
            "es": "el mercado",
            "tr": "pazar",
            "en_": "We go to the market every Sunday.",
            "es_": "Vamos al mercado todos los domingos.",
            "tr_": "Her pazar pazara gideriz."
        },
        {
            "en": "basket",
            "es": "la cesta",
            "tr": "sepet",
            "en_": "She put the vegetables in the basket.",
            "es_": "Ella puso las verduras en la cesta.",
            "tr_": "Sebzeleri sepete koydu."
        },
        {
            "en": "shopping cart",
            "es": "la carretilla",
            "tr": "alışveriş arabası",
            "en_": "He pushed the shopping cart through the aisles.",
            "es_": "Él empujó la carretilla por los pasillos.",
            "tr_": "O, alışveriş arabasını koridorlarda itti."
        },
        {
            "en": "can",
            "es": "el bote",
            "tr": "kutu",
            "en_": "I bought a can of tomatoes.",
            "es_": "Compré un bote de tomates.",
            "tr_": "Bir kutu domates aldım."
        },
        {
            "en": "packet",
            "es": "el paquete",
            "tr": "paket",
            "en_": "She opened a packet of cookies.",
            "es_": "Ella abrió un paquete de galletas.",
            "tr_": "Bir paket kurabiye açtı."
        },
        {
            "en": "bottle",
            "es": "la botella",
            "tr": "şişe",
            "en_": "He drank a bottle of water.",
            "es_": "Él bebió una botella de agua.",
            "tr_": "Bir şişe su içti."
        },
        {
            "en": "entrance",
            "es": "la entrada",
            "tr": "giriş",
            "en_": "The entrance to the store is on the left.",
            "es_": "La entrada de tienda está a la izquierda.",
            "tr_": "Dükkanın girişi solda."
        },
        {
            "en": "exit",
            "es": "la salida",
            "tr": "çıkış",
            "en_": "The exit is at the back of the building.",
            "es_": "La salida está en la parte trasera del edificio.",
            "tr_": "Çıkış binanın arkasında."
        },
        {
            "en": "bag",
            "es": "el bolso",
            "tr": "çanta",
            "en_": "She carries a large bag to work.",
            "es_": "Ella lleva un bolso grande al trabajo.",
            "tr_": "İşe büyük bir çanta götürür."
        },
        {
            "en": "shop window",
            "es": "el escaparate",
            "tr": "vitrin",
            "en_": "The shop window displays new clothes.",
            "es_": "El escaparate muestra ropa nueva.",
            "tr_": "Vitrinde yeni kıyafetler sergileniyor."
        },
        {
            "en": "expensive",
            "es": "caro(a)",
            "tr": "pahalı",
            "en_": "This watch is very expensive.",
            "es_": "Este reloj es muy caro.",
            "tr_": "Bu saat çok pahalı."
        },
        {
            "en": "customer",
            "es": "el cliento / la clienta",
            "tr": "müşteri",
            "en_": "The customer asked for a refund.",
            "es_": "El cliente pidió un reembolso.",
            "tr_": "Müşteri geri ödeme istedi."
        },
        {
            "en": "a bargain",
            "es": "una ganga",
            "tr": "ucuz bir şey",
            "en_": "This coat was a bargain.",
            "es_": "Este abrigo fue una ganga.",
            "tr_": "Bu mont çok uygundu."
        },
        {
            "en": "price",
            "es": "el precio",
            "tr": "fiyat",
            "en_": "The price of this car is high.",
            "es_": "El precio de este coche es alto.",
            "tr_": "Bu arabanın fiyatı yüksek."
        },
        {
            "en": "receipt",
            "es": "el recibo",
            "tr": "fiş",
            "en_": "Don’t forget to take your receipt.",
            "es_": "No olvides tomar tu recibo.",
            "tr_": "Fişini almayı unutma."
        },
        {
            "en": "the stationery store",
            "es": "la papelería",
            "tr": "kırtasiye dükkanı",
            "en_": "I bought pens at the stationery store.",
            "es_": "Compré bolígrafos en la papelería.",
            "tr_": "Kırtasiyeden kalem aldım."
        },
        {
            "en": "envelope",
            "es": "el sobre",
            "tr": "zarf",
            "en_": "Please put the letter in the envelope.",
            "es_": "Por favor, pon la carta en el sobre.",
            "tr_": "Lütfen mektubu zarfın içine koy."
        },
        {
            "en": "postcard",
            "es": "la tarjeta postal",
            "tr": "kartpostal",
            "en_": "I sent a postcard from Paris.",
            "es_": "Envié una tarjeta postal desde París.",
            "tr_": "Paris'ten bir kartpostal gönderdim."
        },
        {
            "en": "escalator",
            "es": "la escalera móvil",
            "tr": "yürüyen merdiven",
            "en_": "Take the escalator to the second floor.",
            "es_": "Tome la escalera mecánica hasta el segundo piso.",
            "tr_": "İkinci kata yürüyen merdivenle çık."
        },
        {
            "en": "elevator",
            "es": "el ascensor",
            "tr": "asansör",
            "en_": "The elevator is out of order.",
            "es_": "El ascensor está fuera de servicio.",
            "tr_": "Asansör arızalı."
        },
        {
            "en": "clothes",
            "es": "la ropa",
            "tr": "giysi [kıyafet]",
            "en_": "She bought new clothes yesterday.",
            "es_": "Ella compró ropa nueva ayer.",
            "tr_": "Dün yeni kıyafetler aldı."
        },
        {
            "en": "toy",
            "es": "el juguete",
            "tr": "oyuncak",
            "en_": "The child played with a toy.",
            "es_": "El niño jugó con un juguete.",
            "tr_": "Çocuk bir oyuncak ile oynadı."
        },
        {
            "en": "furniture",
            "es": "mueble",
            "tr": "mobilya",
            "en_": "They bought new furniture for the house.",
            "es_": "Compraron muebles nuevos para la casa.",
            "tr_": "Ev için yeni mobilya aldılar."
        },
        {
            "en": "cashier",
            "es": "el cajero / la cajera",
            "tr": "vezne görevlisi",
            "en_": "The cashier gave me my receipt.",
            "es_": "El cajero me dio mi recibo.",
            "tr_": "Vezne görevlisi bana fişimi verdi."
        },
        {
            "en": "money",
            "es": "el dinero",
            "tr": "para",
            "en_": "She saved a lot of money.",
            "es_": "Ella ahorró mucho dinero.",
            "tr_": "O, çok para biriktirdi."
        },
        {
            "en": "coin",
            "es": "la moneda",
            "tr": "madeni para",
            "en_": "I found a coin on the street.",
            "es_": "Encontré una moneda en la calle.",
            "tr_": "Sokakta madeni para buldum."
        },
        {
            "en": "paper money",
            "es": "el billete",
            "tr": "banknot",
            "en_": "He paid with paper money.",
            "es_": "Él pagó con billetes.",
            "tr_": "O, banknot ile ödedi."
        },
        {
            "en": "credit card",
            "es": "la tarjeta de crédito",
            "tr": "kredi kartı",
            "en_": "She used her credit card to buy groceries.",
            "es_": "Ella usó su tarjeta de crédito para comprar comestibles.",
            "tr_": "Marketten alışveriş yapmak için kredi kartını kullandı."
        },
        {
            "en": "little bag",
            "es": "la bolsita",
            "tr": "küçük torba [poşet]",
            "en_": "Can I have a little bag for these fruits?",
            "es_": "¿Puedo tener una bolsita para estas frutas?",
            "tr_": "Bu meyveler için küçük bir poşet alabilir miyim?"
        },
        {
            "en": "wallet",
            "es": "la cartera",
            "tr": "cüzdan",
            "en_": "She has no money in her wallet.",
            "es_": "No tiene dinero en su cartera.",
            "tr_": "Cüzdanında hiç parası yok."
        },
        {
            "en": "purse",
            "es": "el monedero",
            "tr": "cüzdan",
            "en_": "Her purse is very stylish.",
            "es_": "Su monedero es muy elegante.",
            "tr_": "Onun cüzdanı çok şık."
        }
    ],
    "Driving" : [
        {
            "en": "to drive",
            "es": "conducir",
            "tr": "sürmek",
            "en_": "He likes to drive fast cars.",
            "es_": "Le gusta conducir autos rápidos.",
            "tr_": "Hızlı arabalar sürmeyi sever."
        },
        {
            "en": "to turn left",
            "es": "torcer a la izquierda",
            "tr": "sola dönmek",
            "en_": "Turn left at the next intersection.",
            "es_": "Tuerce a la izquierda en la próxima intersección.",
            "tr_": "Bir sonraki kavşaktan sola dön."
        },
        {
            "en": "to turn right",
            "es": "torcer a la derecha",
            "tr": "sağa dönmek",
            "en_": "Turn right after the traffic lights.",
            "es_": "Tuerce a la derecha después de las luces de tráfico.",
            "tr_": "Trafik ışıklarından sonra sağa dön."
        },
        {
            "en": "to go straight ahead",
            "es": "seguir todo derecho",
            "tr": "düz doğru gitmek",
            "en_": "Go straight ahead for two blocks.",
            "es_": "Sigue todo derecho por dos cuadras.",
            "tr_": "İki blok düz doğru git."
        },
        {
            "en": "to accelerate",
            "es": "acelerar",
            "tr": "hızlanmak",
            "en_": "The driver accelerated quickly.",
            "es_": "El conductor aceleró rápido.",
            "tr_": "Sürücü hızlandı."
        },
        {
            "en": "to pass",
            "es": "adelantar",
            "tr": "geçmek",
            "en_": "He passed the slow car safely.",
            "es_": "Adelantó al coche lento con seguridad.",
            "tr_": "Yavaş arabayı güvenle geçti."
        },
        {
            "en": "to slow down",
            "es": "reducir velocidad",
            "tr": "hızı azaltmak",
            "en_": "You should slow down near the school.",
            "es_": "Debes reducir velocidad cerca de la escuela.",
            "tr_": "Okul yakınlarında hızını azaltmalısın."
        },
        {
            "en": "to start",
            "es": "arrancar",
            "tr": "çalıştırmak",
            "en_": "I started the car this morning.",
            "es_": "Arranqué el coche esta mañana.",
            "tr_": "Bu sabah arabayı çalıştırdım."
        },
        {
            "en": "to park",
            "es": "aparcar",
            "tr": "park etmek",
            "en_": "Please park your car here.",
            "es_": "Por favor, aparca tu coche aquí.",
            "tr_": "Lütfen arabayı burada park et."
        },
        {
            "en": "to fill up with gas",
            "es": "llenar de gasolina",
            "tr": "benzin doldurmak",
            "en_": "I need to fill up with gas before the trip.",
            "es_": "Necesito llenar de gasolina antes del viaje.",
            "tr_": "Seyahatten önce benzin doldurmam gerekiyor."
        },
        {
            "en": "highway [motorway]",
            "es": "la autopista",
            "tr": "otoyol",
            "en_": "We drove on the highway for two hours.",
            "es_": "Conducimos por la autopista durante dos horas.",
            "tr_": "İki saat otoyolda sürdük."
        },
        {
            "en": "traffic lights",
            "es": "las luces de tráfico",
            "tr": "trafik ışıkları",
            "en_": "Stop when the traffic lights turn red.",
            "es_": "Para cuando las luces de tráfico estén en rojo.",
            "tr_": "Trafik ışıkları kırmızıya döndüğünde dur."
        },
        {
            "en": "driver",
            "es": "el conductor / la conductora",
            "tr": "sürücü [şoför]",
            "en_": "The driver stopped at the red light.",
            "es_": "El conductor se detuvo en el semáforo rojo.",
            "tr_": "Şoför kırmızı ışıkta durdu."
        },
        {
            "en": "traffic",
            "es": "el tráfico",
            "tr": "trafik",
            "en_": "The traffic is heavy this morning.",
            "es_": "El tráfico está pesado esta mañana.",
            "tr_": "Bu sabah trafik yoğun."
        },
        {
            "en": "truck",
            "es": "el camión",
            "tr": "kamyon",
            "en_": "The truck is carrying heavy goods.",
            "es_": "El camión lleva mercancías pesadas.",
            "tr_": "Kamyon ağır yük taşıyor."
        },
        {
            "en": "van",
            "es": "la furgoneta",
            "tr": "minibüs",
            "en_": "The van is parked outside.",
            "es_": "La furgoneta está aparcada afuera.",
            "tr_": "Minibüs dışarıda park edilmiş."
        },
        {
            "en": "car",
            "es": "el auto",
            "tr": "araba [otomobil]",
            "en_": "My car is new.",
            "es_": "Mi auto es nuevo.",
            "tr_": "Arabam yeni."
        },
        {
            "en": "moped",
            "es": "el ciclomotor",
            "tr": "moped",
            "en_": "He rides his moped every day.",
            "es_": "Él monta su ciclomotor todos los días.",
            "tr_": "Her gün mopediyle gider."
        },
        {
            "en": "bicycle",
            "es": "la bicicleta",
            "tr": "bisiklet",
            "en_": "She bought a new bicycle.",
            "es_": "Ella compró una bicicleta nueva.",
            "tr_": "Yeni bir bisiklet aldı."
        },
        {
            "en": "motorbike",
            "es": "la motocicleta",
            "tr": "motosiklet",
            "en_": "He has a fast motorbike.",
            "es_": "Él tiene una motocicleta rápida.",
            "tr_": "Hızlı bir motosikleti var."
        },
        {
            "en": "road",
            "es": "la carretera",
            "tr": "yol",
            "en_": "The road is very busy today.",
            "es_": "La carretera está muy ocupada hoy.",
            "tr_": "Yol bugün çok kalabalık."
        },
        {
            "en": "side street",
            "es": "la bocacalle",
            "tr": "ara sokak girişi",
            "en_": "Turn into the side street on the right.",
            "es_": "Gira en la bocacalle a la derecha.",
            "tr_": "Sağa ara sokaktan dön."
        },
        {
            "en": "one-way",
            "es": "dirección única",
            "tr": "tek yön",
            "en_": "This street is one-way only.",
            "es_": "Esta calle es sólo de dirección única.",
            "tr_": "Bu sokak sadece tek yönlüdür."
        },
        {
            "en": "no entry",
            "es": "dirección prohibida",
            "tr": "giriş yok",
            "en_": "No entry for vehicles here.",
            "es_": "Dirección prohibida para vehículos aquí.",
            "tr_": "Buradan araç girişi yoktur."
        },
        {
            "en": "parking area",
            "es": "el aparcamiento",
            "tr": "park yeri",
            "en_": "The parking area is full.",
            "es_": "El aparcamiento está lleno.",
            "tr_": "Park yeri dolu."
        },
        {
            "en": "backward",
            "es": "hacia atrás",
            "tr": "geriye doğru",
            "en_": "The car moved backward slowly.",
            "es_": "El coche se movió hacia atrás lentamente.",
            "tr_": "Araba yavaşça geriye doğru hareket etti.",
            "type": "adverb"
        },
        {
            "en": "forward",
            "es": "hacia adelante",
            "tr": "ileriye doğru",
            "en_": "Move the car forward a bit.",
            "es_": "Mueve el coche hacia adelante un poco.",
            "tr_": "Arabayı biraz ileriye doğru hareket ettir.",
            "type": "adverb"
        },
        {
            "en": "signpost",
            "es": "el poste indicador",
            "tr": "yol tabelası",
            "en_": "The signpost shows the direction to the city.",
            "es_": "El poste indicador muestra la dirección a la ciudad.",
            "tr_": "Yol tabelası şehre giden yönü gösteriyor."
        },
        {
            "en": "slow",
            "es": "lento(a)",
            "tr": "yavaş",
            "en_": "The car is going slow.",
            "es_": "El auto va lento.",
            "tr_": "Araba yavaş gidiyor."
        },
        {
            "en": "fast",
            "es": "rápido(a)",
            "tr": "hızlı",
            "en_": "She drives very fast.",
            "es_": "Ella conduce muy rápido.",
            "tr_": "O çok hızlı sürüyor."
        },
        {
            "en": "crash [collision]",
            "es": "el choque",
            "tr": "kaza [çarpışma]",
            "en_": "There was a crash on the highway.",
            "es_": "Hubo un choque en la autopista.",
            "tr_": "Otoyolda bir kaza oldu."
        },
        {
            "en": "steering wheel",
            "es": "el volante",
            "tr": "direksiyon",
            "en_": "Hold the steering wheel tightly.",
            "es_": "Sujeta el volante con fuerza.",
            "tr_": "Direksiyonu sıkıca tut."
        },
        {
            "en": "windshield",
            "es": "el parabrisas",
            "tr": "ön cam",
            "en_": "The windshield is clean.",
            "es_": "El parabrisas está limpio.",
            "tr_": "Ön cam temiz."
        },
        {
            "en": "safety belt",
            "es": "el cinturón de seguridad",
            "tr": "emniyet kemeri",
            "en_": "Always wear your safety belt while driving.",
            "es_": "Siempre usa el cinturón de seguridad mientras conduces.",
            "tr_": "Araba kullanırken her zaman emniyet kemerini tak."
        },
        {
            "en": "indicator",
            "es": "el indicador",
            "tr": "sinyal",
            "en_": "Turn on the indicator before you turn left.",
            "es_": "Enciende el indicador antes de girar a la izquierda.",
            "tr_": "Sola dönmeden önce sinyali aç."
        },
        {
            "en": "headlight",
            "es": "el faro",
            "tr": "far",
            "en_": "The headlight is broken on the right side.",
            "es_": "El faro está roto en el lado derecho.",
            "tr_": "Far sağ tarafta kırık."
        },
        {
            "en": "hood",
            "es": "el capó",
            "tr": "kaput",
            "en_": "Lift the hood to check the engine.",
            "es_": "Levanta el capó para revisar el motor.",
            "tr_": "Motoru kontrol etmek için kaputu kaldır."
        },
        {
            "en": "trunk",
            "es": "el maletero",
            "tr": "bagaj",
            "en_": "Put the luggage in the trunk.",
            "es_": "Pon el equipaje en el maletero.",
            "tr_": "Bagaja bavulları koy."
        },
        {
            "en": "license plate",
            "es": "la matrícula",
            "tr": "plaka",
            "en_": "The police checked the license plate number.",
            "es_": "La policía revisó el número de la matrícula.",
            "tr_": "Polis plaka numarasını kontrol etti."
        },
        {
            "en": "wheel",
            "es": "la rueda",
            "tr": "tekerlek",
            "en_": "The car has four wheels.",
            "es_": "El coche tiene cuatro ruedas.",
            "tr_": "Arabanın dört tekerleği var."
        },
        {
            "en": "tire",
            "es": "el neumático",
            "tr": "lastik",
            "en_": "The tire is flat and needs to be replaced.",
            "es_": "El neumático está desinflado y necesita ser cambiado.",
            "tr_": "Lastik inmiş ve değiştirilmesi gerekiyor."
        },
        {
            "en": "horn",
            "es": "la bocina",
            "tr": "korna",
            "en_": "Use the horn to warn other drivers.",
            "es_": "Usa la bocina para avisar a otros conductores.",
            "tr_": "Diğer sürücüleri uyarmak için korna çal."
        },
        {
            "en": "flat tire [deflated tire]",
            "es": "la rueda deshinchada",
            "tr": "inmiş lastik",
            "en_": "I have a flat tire; I need help.",
            "es_": "Tengo una rueda deshinchada; necesito ayuda.",
            "tr_": "İnmiş lastiğim var; yardıma ihtiyacım var."
        },
        {
            "en": "breakdown",
            "es": "la avería",
            "tr": "arıza",
            "en_": "The car had a breakdown on the highway.",
            "es_": "El coche tuvo una avería en la autopista.",
            "tr_": "Araba otoyolda arızalandı."
        },
        {
            "en": "mechanic",
            "es": "el mecánico / la mecánica",
            "tr": "araba tamircisi",
            "en_": "I called a mechanic to fix the engine.",
            "es_": "Llamé a un mecánico para reparar el motor.",
            "tr_": "Motoru tamir etmesi için bir tamirci çağırdım."
        },
        {
            "en": "oil",
            "es": "el aceite",
            "tr": "yağ",
            "en_": "Check the oil level regularly.",
            "es_": "Revisa el nivel de aceite regularmente.",
            "tr_": "Yağ seviyesini düzenli kontrol et."
        },
        {
            "en": "gasoline",
            "es": "la gasolina",
            "tr": "benzin",
            "en_": "Gasoline prices have increased recently.",
            "es_": "Los precios de la gasolina han subido recientemente.",
            "tr_": "Benzin fiyatları son zamanlarda arttı."
        }
    ],
    "Transportation" : [
        {
            "en": "to take the bus",
            "es": "coger el bus",
            "tr": "otobüse binmek",
            "en_": "I take the bus to work every day.",
            "es_": "Cojo el bus para ir al trabajo todos los días.",
            "tr_": "Her gün işe otobüse binerim."
        },
        {
            "en": "to get off",
            "es": "bajarse",
            "tr": "inmek",
            "en_": "We get off at the next stop.",
            "es_": "Nos bajamos en la próxima parada.",
            "tr_": "Bir sonraki durakta ineriz."
        },
        {
            "en": "to get on",
            "es": "subirse",
            "tr": "binmek",
            "en_": "She got on the bus quickly.",
            "es_": "Ella se subió al autobús rápidamente.",
            "tr_": "O, hızlıca otobüse bindi."
        },
        {
            "en": "to ride bicycle",
            "es": "ir en bicicleta",
            "tr": "bisiklete binmek",
            "en_": "I like to ride my bicycle in the park.",
            "es_": "Me gusta ir en bicicleta en el parque.",
            "tr_": "Parkta bisiklete binmeyi severim."
        },
        {
            "en": "to hail taxi",
            "es": "parar un taxi",
            "tr": "taksi çevirmek",
            "en_": "He hailed a taxi on the street.",
            "es_": "Paró un taxi en la calle.",
            "tr_": "Sokakta taksi çevirdi."
        },
        {
            "en": "to be delayed",
            "es": "llevar retraso",
            "tr": "gecikme yaşamak",
            "en_": "The train is delayed by 30 minutes.",
            "es_": "El tren lleva retraso de 30 minutos.",
            "tr_": "Tren 30 dakika gecikme yaşıyor."
        },
        {
            "en": "to arrive on time",
            "es": "llegar a la hora",
            "tr": "zamanında varmak",
            "en_": "The train always arrives on time.",
            "es_": "El tren siempre llega a la hora.",
            "tr_": "Tren her zaman zamanında varır."
        },
        {
            "en": "to catch train",
            "es": "coger el tren",
            "tr": "trene yetişmek",
            "en_": "I ran to catch the train before it left.",
            "es_": "Corrí para coger el tren antes de que saliera.",
            "tr_": "Tren kalkmadan önce trene yetişmek için koştum."
        },
        {
            "en": "to miss train",
            "es": "perder el tren",
            "tr": "treni kaçırmak",
            "en_": "She missed the train because she was late.",
            "es_": "Ella perdió el tren porque llegó tarde.",
            "tr_": "Geç kaldığı için treni kaçırdı."
        },
        {
            "en": "to fly",
            "es": "volar",
            "tr": "uçmak",
            "en_": "We will fly to Madrid tomorrow.",
            "es_": "Volaremos a Madrid mañana.",
            "tr_": "Yarın Madrid'e uçacağız."
        },
        {
            "en": "to land",
            "es": "aterrizar",
            "tr": "iniş yapmak",
            "en_": "The plane will land in 20 minutes.",
            "es_": "El avión aterrizará en 20 minutos.",
            "tr_": "Uçak 20 dakika içinde iniş yapacak."
        },
        {
            "en": "to take off",
            "es": "despegar",
            "tr": "kalkış yapmak",
            "en_": "The flight took off without delay.",
            "es_": "El vuelo despegó sin retraso.",
            "tr_": "Uçuş gecikmeden kalkış yaptı."
        },
        {
            "en": "to sail",
            "es": "ir en barco",
            "tr": "denize açılmak",
            "en_": "They will sail across the ocean next week.",
            "es_": "Ellos irán en barco a través del océano la próxima semana.",
            "tr_": "Gelecek hafta denize açılacaklar."
        },
        {
            "en": "to load",
            "es": "cargar",
            "tr": "yüklemek",
            "en_": "Workers loaded the cargo carefully.",
            "es_": "Los trabajadores cargaron la carga con cuidado.",
            "tr_": "İşçiler kargoyu dikkatlice yükledi."
        },
        {
            "en": "to unload",
            "es": "descargar",
            "tr": "boşaltmak [yük indirmek]",
            "en_": "They unloaded the cargo at the dock.",
            "es_": "Descargaron la carga en el muelle.",
            "tr_": "Kargoyu rıhtımda boşalttılar."
        },
        {
            "en": "traffic jam",
            "es": "el embotellamiento",
            "tr": "trafik sıkışıklığı",
            "en_": "There is a traffic jam on the highway.",
            "es_": "Hay un embotellamiento en la autopista.",
            "tr_": "Otoyolda trafik sıkışıklığı var."
        },
        {
            "en": "taxi stand",
            "es": "la parada de taxis",
            "tr": "taksi durağı",
            "en_": "The taxi stand is near the station.",
            "es_": "La parada de taxis está cerca de la estación.",
            "tr_": "Taksi durağı istasyonun yanında."
        },
        {
            "en": "taxi",
            "es": "el taxi",
            "tr": "taksi",
            "en_": "I took a taxi to the airport.",
            "es_": "Tomé un taxi al aeropuerto.",
            "tr_": "Havaalanına taksiyle gittim."
        },
        {
            "en": "passenger",
            "es": "el pasajero / la pasajera",
            "tr": "yolcu",
            "en_": "The passenger bought a ticket.",
            "es_": "El pasajero compró un billete.",
            "tr_": "Yolcu bilet aldı."
        },

        {
            "en": "ticket",
            "es": "el billete",
            "tr": "bilet",
            "en_": "I bought a ticket for the subway.",
            "es_": "Compré un billete para el metro.",
            "tr_": "Metro için bilet aldım."
        },
        {
            "en": "bus",
            "es": "el autobús",
            "tr": "otobüs",
            "en_": "The bus arrived late.",
            "es_": "El autobús llegó tarde.",
            "tr_": "Otobüs geç kaldı."
        },
        {
            "en": "bus stop",
            "es": "la parada de autobuses",
            "tr": "otobüs durağı",
            "en_": "I waited at the bus stop.",
            "es_": "Esperé en la parada de autobuses.",
            "tr_": "Otobüs durağında bekledim."
        },
        {
            "en": "subway station",
            "es": "la estación de metro",
            "tr": "metro istasyonu",
            "en_": "The subway station is crowded.",
            "es_": "La estación de metro está llena.",
            "tr_": "Metro istasyonu kalabalık."
        },
        {
            "en": "subway",
            "es": "el metro",
            "tr": "metro",
            "en_": "I take the subway to go downtown.",
            "es_": "Tomo el metro para ir al centro.",
            "tr_": "Şehir merkezine gitmek için metroya binerim."
        },
        {
            "en": "fare",
            "es": "el precio del viaje",
            "tr": "yol ücreti",
            "en_": "The fare to the city center is ten dollars.",
            "es_": "El precio del viaje al centro es diez dólares.",
            "tr_": "Şehir merkezine yol ücreti on dolar."
        },
        {
            "en": "station",
            "es": "la estación",
            "tr": "istasyon",
            "en_": "The train will arrive at the station soon.",
            "es_": "El tren llegará a la estación pronto.",
            "tr_": "Tren yakında istasyona varacak."
        },
        {
            "en": "porter",
            "es": "el mozo / la moza",
            "tr": "hamal [taşıyıcı]",
            "en_": "The porter helped us with our luggage.",
            "es_": "El mozo nos ayudó con el equipaje.",
            "tr_": "Hamal bagajlarımızda bize yardım etti."
        },
        {
            "en": "left-luggage office",
            "es": "la consigna",
            "tr": "emanet",
            "en_": "We left our bags at the left-luggage office.",
            "es_": "Dejamos nuestras bolsas en la consigna.",
            "tr_": "Çantalarımızı emanete bıraktık."
        },
        {
            "en": "ticket inspector [conductor]",
            "es": "el revisor / la revisora",
            "tr": "bilet memuru [kondüktör]",
            "en_": "The ticket inspector checked our tickets.",
            "es_": "El revisor revisó nuestros billetes.",
            "tr_": "Bilet memuru biletlerimizi kontrol etti."
        },
        {
            "en": "waiting room",
            "es": "la sala de espera",
            "tr": "bekleme odası",
            "en_": "We waited in the waiting room for an hour.",
            "es_": "Esperamos en la sala de espera por una hora.",
            "tr_": "Bir saat bekleme odasında bekledik."
        },
        {
            "en": "barrier",
            "es": "la barrera",
            "tr": "bariyer",
            "en_": "The barrier was closed to stop cars from entering.",
            "es_": "La barrera estaba cerrada para detener a los coches.",
            "tr_": "Bariyer, araçların girişini durdurmak için kapalıydı."
        },
        {
            "en": "traveller",
            "es": "el viajero / la viajera",
            "tr": "gezgin",
            "en_": "He is a true traveler.",
            "es_": "Él es un verdadero viajero.",
            "tr_": "O gerçek bir gezgin."
        },
        {
            "en": "timetable [schedule]",
            "es": "el horario",
            "tr": "çalışma saatleri [saat çizelgesi]",
            "en_": "Check the timetable for the train departure times.",
            "es_": "Consulta el horario para las salidas del tren.",
            "tr_": "Tren kalkış saatleri için saat çizelgesine bak."
        },
        {
            "en": "the train to ...",
            "es": "el tren para ...",
            "tr": "... treni",
            "en_": "The train to Madrid leaves at 5 p.m.",
            "es_": "El tren para Madrid sale a las 5 p.m.",
            "tr_": "Madrid treni saat 5’te kalkıyor."
        },
        {
            "en": "the train from ...",
            "es": "el tren desde ...",
            "tr": "... den gelen tren",
            "en_": "The train from Barcelona is arriving now.",
            "es_": "El tren desde Barcelona está llegando ahora.",
            "tr_": "Barselona’dan gelen tren şimdi varıyor."
        },
        {
            "en": "ticket office [box office]",
            "es": "la taquilla",
            "tr": "gişe",
            "en_": "Buy your tickets at the ticket office.",
            "es_": "Compra tus billetes en la taquilla.",
            "tr_": "Biletlerini gişeden al."
        },
        {
            "en": "ticket",
            "es": "el billete",
            "tr": "bilet",
            "en_": "I lost my ticket on the way here.",
            "es_": "Perdí mi billete en el camino aquí.",
            "tr_": "Yolda biletimi kaybettim."
        },
        {
            "en": "return ticket",
            "es": "el billete de ida y vuelta",
            "tr": "gidiş-dönüş bileti",
            "en_": "I bought a return ticket to save money.",
            "es_": "Compré un billete de ida y vuelta para ahorrar dinero.",
            "tr_": "Para tasarrufu için gidiş-dönüş bileti aldım."
        },
        {
            "en": "season ticket",
            "es": "el billete de abono",
            "tr": "abonman bileti",
            "en_": "He uses a season ticket for the subway.",
            "es_": "Él usa un billete de abono para el metro.",
            "tr_": "Metro için abonman bileti kullanıyor."
        },
        {
            "en": "ticket machine",
            "es": "la máquina de billetes",
            "tr": "bilet makinesi",
            "en_": "Buy your ticket from the ticket machine.",
            "es_": "Compra tu billete en la máquina de billetes.",
            "tr_": "Biletini bilet makinesinden al."
        },
        {
            "en": "to reserve a seat",
            "es": "reservar un asiento",
            "tr": "koltuk ayırtmak",
            "en_": "I want to reserve a seat on the train.",
            "es_": "Quiero reservar un asiento en el tren.",
            "tr_": "Trende koltuk ayırtmak istiyorum."
        },
        {
            "en": "railway",
            "es": "el ferrocarril",
            "tr": "demir yolu",
            "en_": "The railway connects many cities.",
            "es_": "El ferrocarril conecta muchas ciudades.",
            "tr_": "Demir yolu birçok şehri birbirine bağlıyor."
        },
        {
            "en": "train",
            "es": "el tren",
            "tr": "tren",
            "en_": "The train is very fast.",
            "es_": "El tren es muy rápido.",
            "tr_": "Tren çok hızlıdır."
        },
        {
            "en": "first class",
            "es": "primera clase",
            "tr": "birinci sınıf",
            "en_": "I bought a first-class ticket for more comfort.",
            "es_": "Compré un billete de primera clase para más comodidad.",
            "tr_": "Daha rahat olsun diye birinci sınıf bileti aldım."
        },
        {
            "en": "sleeping-car",
            "es": "el coche-cama",
            "tr": "yataklı vagon",
            "en_": "We booked a sleeping-car for the overnight trip.",
            "es_": "Reservamos un coche-cama para el viaje nocturno.",
            "tr_": "Gece yolculuğu için yataklı vagon ayırttık."
        },
        {
            "en": "carriage [railcar]",
            "es": "el vagón",
            "tr": "vagon",
            "en_": "The passengers boarded the carriage quickly.",
            "es_": "Los pasajeros abordaron el vagón rápidamente.",
            "tr_": "Yolcular hızlıca vagona bindi."
        },
        {
            "en": "engine",
            "es": "la máquina",
            "tr": "lokomotif",
            "en_": "The engine pulled the entire train.",
            "es_": "La máquina tiraba de todo el tren.",
            "tr_": "Lokomotif tüm treni çekiyordu."
        },
        {
            "en": "track",
            "es": "la vía",
            "tr": "ray",
            "en_": "The train is running on the left track.",
            "es_": "El tren circula por la vía izquierda.",
            "tr_": "Tren sol rayda gidiyor."
        },
        {
            "en": "platform",
            "es": "el andén",
            "tr": "peron",
            "en_": "Wait for the train on platform 3.",
            "es_": "Espera el tren en el andén 3.",
            "tr_": "3 numaralı peronda treni bekle."
        },
        {
            "en": "ticket inspector [conductor]",
            "es": "el interventor / la interventora",
            "tr": "tren görevlisi [kondüktör]",
            "en_": "The ticket inspector checked all the passengers’ tickets.",
            "es_": "El interventor revisó los billetes de todos los pasajeros.",
            "tr_": "Tren görevlisi tüm yolcuların biletlerini kontrol etti."
        },
        {
            "en": "freight train",
            "es": "el tren de mercancías",
            "tr": "yük treni",
            "en_": "The freight train carries goods across the country.",
            "es_": "El tren de mercancías transporta mercancías por todo el país.",
            "tr_": "Yük treni ülke çapında malları taşıyor."
        },
        {
            "en": "seat",
            "es": "el asiento",
            "tr": "koltuk",
            "en_": "Please take your seat before the train departs.",
            "es_": "Por favor, tome su asiento antes de que salga el tren.",
            "tr_": "Lütfen tren kalkmadan önce koltuğunuza geçin."
        },
        {
            "en": "reserved seat",
            "es": "asiento reservado",
            "tr": "ayrılmış koltuk",
            "en_": "I have a reserved seat next to the window.",
            "es_": "Tengo un asiento reservado junto a la ventana.",
            "tr_": "Pencere kenarında ayrılmış bir koltuğum var."
        },
        {
            "en": "airport",
            "es": "el aeropuerto",
            "tr": "havalimanı",
            "en_": "We arrived early at the airport.",
            "es_": "Llegamos temprano al aeropuerto.",
            "tr_": "Havalimanına erken vardık."
        },
        {
            "en": "plane",
            "es": "el avión",
            "tr": "uçak",
            "en_": "The plane took off on time.",
            "es_": "El avión despegó a tiempo.",
            "tr_": "Uçak zamanında kalktı."
        },
        {
            "en": "runway",
            "es": "la pista de aterrizaje",
            "tr": "pist",
            "en_": "The plane landed safely on the runway.",
            "es_": "El avión aterrizó seguro en la pista de aterrizaje.",
            "tr_": "Uçak güvenli bir şekilde piste indi."
        },
        {
            "en": "arrivals",
            "es": "llegadas",
            "tr": "gelenler",
            "en_": "We waited at the arrivals hall.",
            "es_": "Esperamos en la sala de llegadas.",
            "tr_": "Gelenler salonunda bekledik."
        },
        {
            "en": "customs",
            "es": "la aduana",
            "tr": "gümrük",
            "en_": "We passed through customs quickly.",
            "es_": "Pasamos la aduana rápidamente.",
            "tr_": "Gümrükten hızlıca geçtik."
        },
        {
            "en": "customs officer",
            "es": "el aduanero / la aduanera",
            "tr": "gümrük memuru",
            "en_": "The customs officer checked my passport.",
            "es_": "El aduanero revisó mi pasaporte.",
            "tr_": "Gümrük memuru pasaportumu kontrol etti."
        },
        {
            "en": "nothing to declare",
            "es": "nada que declarar",
            "tr": "bildirmek için bir şey yok",
            "en_": "I have nothing to declare at customs.",
            "es_": "No tengo nada que declarar en la aduana.",
            "tr_": "Gümrükte bildirmek için bir şeyim yok."
        },
        {
            "en": "passport",
            "es": "el pasaporte",
            "tr": "pasaport",
            "en_": "Don’t forget your passport for the flight.",
            "es_": "No olvides tu pasaporte para el vuelo.",
            "tr_": "Uçuş için pasaportunu unutma."
        },
        {
            "en": "departures",
            "es": "salidas",
            "tr": "gidenler",
            "en_": "The departures board shows the flight times.",
            "es_": "El tablero de salidas muestra los horarios de vuelo.",
            "tr_": "Gidenler panosunda uçuş saatleri görünüyor."
        },
        {
            "en": "check-in",
            "es": "la recepción",
            "tr": "giriş",
            "en_": "Please proceed to check-in 2 hours before departure.",
            "es_": "Por favor, dirígete a la recepción 2 horas antes de la salida.",
            "tr_": "Lütfen kalkıştan 2 saat önce giriş işlemlerine git."
        },
        {
            "en": "label",
            "es": "la etiqueta",
            "tr": "etiket",
            "en_": "Attach the luggage label to your suitcase.",
            "es_": "Coloca la etiqueta de equipaje en tu maleta.",
            "tr_": "Bagaj etiketini bavuluna yapıştır."
        },
        {
            "en": "pilot",
            "es": "el piloto / la piloto",
            "tr": "pilot",
            "en_": "The pilot announced the flight was smooth.",
            "es_": "El piloto anunció que el vuelo fue tranquilo.",
            "tr_": "Pilot uçuşun sakin geçtiğini duyurdu."
        },
        {
            "en": "wheelbarrow",
            "es": "la carretilla",
            "tr": "el arabası",
            "en_": "The porter used a wheelbarrow for the luggage.",
            "es_": "El mozo usó una carretilla para el equipaje.",
            "tr_": "Hamal bagaj için el arabası kullandı."
        },
        {
            "en": "crew",
            "es": "la tripulación",
            "tr": "mürettebat",
            "en_": "The crew prepared the cabin for landing.",
            "es_": "La tripulación preparó la cabina para el aterrizaje.",
            "tr_": "Mürettebat iniş için kabini hazırladı."
        },
        {
            "en": "stewardess",
            "es": "la azafata",
            "tr": "hostes",
            "en_": "The stewardess served drinks during the flight.",
            "es_": "La azafata sirvió bebidas durante el vuelo.",
            "tr_": "Hostes uçuş sırasında içecek servisi yaptı."
        },
        {
            "en": "suitcase",
            "es": "la maleta",
            "tr": "bavul",
            "en_": "She packed her clothes in the suitcase.",
            "es_": "Ella empacó su ropa en la maleta.",
            "tr_": "Kıyafetlerini bavula yerleştirdi."
        },
        {
            "en": "hand luggage",
            "es": "el equipaje de mano",
            "tr": "el bagajı",
            "en_": "She carried her hand luggage onto the ferry.",
            "es_": "Ella llevó su equipaje de mano al ferry.",
            "tr_": "Feribota el bagajını aldı."
        },
        {
            "en": "port",
            "es": "el puerto",
            "tr": "liman",
            "en_": "The ship arrived at the port early in the morning.",
            "es_": "El barco llegó al puerto temprano en la mañana.",
            "tr_": "Gemi sabah erken limana vardı."
        },
        {
            "en": "ship",
            "es": "el barco",
            "tr": "gemi",
            "en_": "The ship was very large and luxurious.",
            "es_": "El barco era muy grande y lujoso.",
            "tr_": "Gemi çok büyük ve lükstü."
        },
        {
            "en": "ocean liner",
            "es": "el transatlántico",
            "tr": "okyanus gemisi",
            "en_": "The ocean liner crossed the Atlantic in five days.",
            "es_": "El transatlántico cruzó el Atlántico en cinco días.",
            "tr_": "Okyanus gemisi Atlantik’i beş günde geçti."
        },
        {
            "en": "flag",
            "es": "la bandera",
            "tr": "bayrak",
            "en_": "The ship flew the national flag proudly.",
            "es_": "El barco izó la bandera nacional con orgullo.",
            "tr_": "Gemi ulusal bayrağı gururla taşıdı."
        },
        {
            "en": "porthole",
            "es": "la portilla",
            "tr": "ambar penceresi",
            "en_": "We looked out the porthole to see the sea.",
            "es_": "Miramos por la portilla para ver el mar.",
            "tr_": "Ambar penceresinden denize baktık."
        },
        {
            "en": "anchor",
            "es": "el ancla",
            "tr": "çapa",
            "en_": "The captain dropped the anchor near the shore.",
            "es_": "El capitán dejó caer el ancla cerca de la costa.",
            "tr_": "Kaptan kıyıya yakın çapa attı."
        },
        {
            "en": "cabin",
            "es": "el camarote",
            "tr": "kamara [kabin]",
            "en_": "Our cabin was comfortable and had a great view.",
            "es_": "Nuestro camarote era cómodo y tenía una gran vista.",
            "tr_": "Kamaramız rahattı ve güzel bir manzarası vardı."
        },
        {
            "en": "captain",
            "es": "el capitán",
            "tr": "kaptan",
            "en_": "The captain gave orders during the storm.",
            "es_": "El capitán dio órdenes durante la tormenta.",
            "tr_": "Kaptan fırtına sırasında emirler verdi."
        },
        {
            "en": "deck",
            "es": "la cubierta",
            "tr": "güverte",
            "en_": "We spent the afternoon walking on the deck.",
            "es_": "Pasamos la tarde caminando por la cubierta.",
            "tr_": "Öğleden sonrayı güvertede yürüyerek geçirdik."
        },
        {
            "en": "smokestack",
            "es": "la chimenea",
            "tr": "baca",
            "en_": "The smokestack released a large cloud of smoke.",
            "es_": "La chimenea liberó una gran nube de humo.",
            "tr_": "Baca büyük bir duman bulutu saldı."
        },
        {
            "en": "gangway",
            "es": "la pasarela",
            "tr": "gemiye biniş köprüsü",
            "en_": "Passengers boarded the ship via the gangway.",
            "es_": "Los pasajeros abordaron el barco por la pasarela.",
            "tr_": "Yolcular gemiye biniş köprüsünden bindiler."
        },
        {
            "en": "ferry",
            "es": "el ferry",
            "tr": "feribot",
            "en_": "We took the ferry to cross the river.",
            "es_": "Tomamos el ferry para cruzar el río.",
            "tr_": "Nehri geçmek için feribotu kullandık."
        },
        {
            "en": "crossing",
            "es": "la travesía",
            "tr": "deniz yolculuğu",
            "en_": "The crossing took twelve hours.",
            "es_": "La travesía duró doce horas.",
            "tr_": "Deniz yolculuğu on iki saat sürdü."
        },
        {
            "en": "to get seasick",
            "es": "marearse",
            "tr": "deniz tutmak",
            "en_": "He tends to get seasick on long trips.",
            "es_": "Él tiende a marearse en viajes largos.",
            "tr_": "Uzun yolculuklarda deniz tutar."
        },
        {
            "en": "dock",
            "es": "el muelle",
            "tr": "rıhtım",
            "en_": "The ship is tied to the dock.",
            "es_": "El barco está amarrado al muelle.",
            "tr_": "Gemi rıhtıma bağlandı."
        },
        {
            "en": "cargo",
            "es": "la carga",
            "tr": "kargo",
            "en_": "The cargo was loaded onto the ship.",
            "es_": "La carga fue cargada en el barco.",
            "tr_": "Kargo gemiye yüklendi."
        },
        {
            "en": "hold",
            "es": "la bodega",
            "tr": "ambar",
            "en_": "The cargo was stored in the ship's hold.",
            "es_": "La carga se almacenó en la bodega del barco.",
            "tr_": "Kargo geminin ambarında saklandı."
        },
        {
            "en": "sailor",
            "es": "el marinero",
            "tr": "denizci",
            "en_": "The sailor worked hard during the storm.",
            "es_": "El marinero trabajó duro durante la tormenta.",
            "tr_": "Denizci fırtına sırasında çok çalıştı."
        }
    ],
    "Vacationes / Outdoor" : [
        {
            "en": "to go on vacation",
            "es": "ir de vacaciones",
            "tr": "tatile gitmek",
            "en_": "We plan to go on vacation next month.",
            "es_": "Planeamos ir de vacaciones el próximo mes.",
            "tr_": "Gelecek ay tatile gitmeyi planlıyoruz."
        },
        {
            "en": "to stay in a hotel",
            "es": "quedarse en un hotel",
            "tr": "otelde kalmak",
            "en_": "They decided to stay in a hotel near the beach.",
            "es_": "Decidieron quedarse en un hotel cerca de la playa.",
            "tr_": "Plajın yakınında otelde kalmaya karar verdiler."
        },
        {
            "en": "to pack",
            "es": "hacer la maleta",
            "tr": "bavul hazırlamak",
            "en_": "I need to pack my suitcase tonight.",
            "es_": "Necesito hacer la maleta esta noche.",
            "tr_": "Bu gece bavulumu hazırlamam lazım."
        },
        {
            "en": "to be full",
            "es": "estar completo",
            "tr": "dolu olmak",
            "en_": "The hotel is full during the holiday season.",
            "es_": "El hotel está completo durante la temporada de vacaciones.",
            "tr_": "Otel tatil sezonunda dolu olur."
        },
        {
            "en": "to reserve a room",
            "es": "reservar una habitación",
            "tr": "oda ayırtmak",
            "en_": "We need to reserve a room for the weekend.",
            "es_": "Necesitamos reservar una habitación para el fin de semana.",
            "tr_": "Hafta sonu için oda ayırtmamız lazım."
        },
        {
            "en": "to swim",
            "es": "nadar",
            "tr": "yüzmek",
            "en_": "We like to swim in the sea during summer.",
            "es_": "Nos gusta nadar en el mar durante el verano.",
            "tr_": "Yazın denizde yüzmeyi severiz."
        },
        {
            "en": "to sunbathe",
            "es": "tomar un baño de sol",
            "tr": "güneşlenmek",
            "en_": "We like to sunbathe on the beach.",
            "es_": "Nos gusta tomar un baño de sol en la playa.",
            "tr_": "Plajda güneşlenmeyi severiz."
        },
        {
            "en": "to go to mountaineering",
            "es": "hacer el alpinismo",
            "tr": "dağcılığa gitmek",
            "en_": "They like to go to mountaineering every summer.",
            "es_": "Les gusta hacer alpinismo cada verano.",
            "tr_": "Her yaz dağcılığa gitmeyi severler."
        },
        {
            "en": "to climb",
            "es": "escalar",
            "tr": "tırmanmak",
            "en_": "He likes to climb mountains on weekends.",
            "es_": "Le gusta escalar montañas los fines de semana.",
            "tr_": "Hafta sonları dağlara tırmanmayı sever."
        },
        {
            "en": "to ski",
            "es": "esquiar",
            "tr": "kayak yapmak",
            "en_": "We like to ski every winter.",
            "es_": "Nos gusta esquiar cada invierno.",
            "tr_": "Her kış kayak yapmayı severiz."
        },
        {
            "en": "to go to fishing",
            "es": "ir de pesca",
            "tr": "balığa gitmek",
            "en_": "We like to go fishing on weekends.",
            "es_": "Nos gusta ir de pesca los fines de semana.",
            "tr_": "Hafta sonları balığa gitmeyi severiz."
        },
        {
            "en": "to go to camping",
            "es": "ir de camping",
            "tr": "kampa gitmek",
            "en_": "We plan to go to camping next weekend.",
            "es_": "Planeamos ir de camping el próximo fin de semana.",
            "tr_": "Gelecek hafta sonu kampa gitmeyi planlıyoruz."
        },
        {
            "en": "to capsize",
            "es": "volcarse",
            "tr": "devrilmek",
            "en_": "The boat capsized in the storm.",
            "es_": "La barca se volcó en la tormenta.",
            "tr_": "Tekne fırtınada devrildi."
        },
        {
            "en": "to float",
            "es": "flotar",
            "tr": "su üstüne durmak",
            "en_": "The leaves float on the surface of the water.",
            "es_": "Las hojas flotan en la superficie del agua.",
            "tr_": "Yapraklar suyun yüzeyinde su üstüne duruyor."
        },
        {
            "en": "to pitch the tent",
            "es": "montar la tienda de campaña",
            "tr": "çadır kurmak",
            "en_": "He helped us to pitch the tent.",
            "es_": "Nos ayudó a montar la tienda de campaña.",
            "tr_": "Çadır kurmamıza yardım etti."
        },
        {
            "en": "tourist",
            "es": "el turista / la turista",
            "tr": "turist",
            "en_": "The tourist visited many famous landmarks.",
            "es_": "El turista visitó muchos lugares famosos.",
            "tr_": "Turist birçok ünlü yeri ziyaret etti."
        },
        {
            "en": "suntan oil",
            "es": "el aceite para el sol",
            "tr": "güneş yağı",
            "en_": "Don't forget to apply suntan oil at the beach.",
            "es_": "No olvides aplicar aceite para el sol en la playa.",
            "tr_": "Plajda güneş yağını sürmeyi unutma."
        },
        {
            "en": "sunglasses",
            "es": "las gafas de sol",
            "tr": "güneş gözlüğü",
            "en_": "She bought new sunglasses for the summer.",
            "es_": "Ella compró gafas de sol nuevas para el verano.",
            "tr_": "Yaz için yeni güneş gözlüğü aldı."
        },
        {
            "en": "hotel",
            "es": "el hotel",
            "tr": "otel",
            "en_": "We stayed at a luxury hotel during our trip.",
            "es_": "Nos alojamos en un hotel de lujo durante nuestro viaje.",
            "tr_": "Gezimiz sırasında lüks bir otelde kaldık."
        },
        {
            "en": "reception",
            "es": "la recepción",
            "tr": "resepsiyon",
            "en_": "Please check in at the hotel reception.",
            "es_": "Por favor, regístrese en la recepción del hotel.",
            "tr_": "Lütfen otel resepsiyonunda giriş yapın."
        },
        {
            "en": "with shower",
            "es": "con ducha",
            "tr": "duşlu",
            "en_": "I booked a room with shower included.",
            "es_": "Reservé una habitación con ducha incluida.",
            "tr_": "Duşlu bir oda ayırttım."
        },
        {
            "en": "with balcony",
            "es": "con balcon",
            "tr": "balkonlu",
            "en_": "We stayed in a hotel room with balcony.",
            "es_": "Nos alojamos en una habitación con balcón.",
            "tr_": "Balkonlu bir otel odasında kaldık."
        },
        {
            "en": "single room",
            "es": "la habitación individual",
            "tr": "tek kişilik oda",
            "en_": "I prefer a single room when I travel alone.",
            "es_": "Prefiero una habitación individual cuando viajo solo.",
            "tr_": "Yalnız seyahat ettiğimde tek kişilik oda tercih ederim."
        },
        {
            "en": "double room",
            "es": "la habitación doble",
            "tr": "çift kişilik oda",
            "en_": "They reserved a double room for their stay.",
            "es_": "Reservaron una habitación doble para su estancia.",
            "tr_": "Konaklamaları için çift kişilik oda ayırttılar."
        },
        {
            "en": "guesthouse [boarding house]",
            "es": "la pensión",
            "tr": "pansiyon",
            "en_": "We stayed at a cozy guesthouse during our trip.",
            "es_": "Nos alojamos en una pensión acogedora durante nuestro viaje.",
            "tr_": "Gezimiz sırasında samimi bir pansiyonda kaldık."
        },
        {
            "en": "beach",
            "es": "la playa",
            "tr": "plaj",
            "en_": "The beach was crowded with tourists.",
            "es_": "La playa estaba llena de turistas.",
            "tr_": "Plaj turistlerle doluydu."
        },
        {
            "en": "lifeguard",
            "es": "el vigilante de playa",
            "tr": "cankurtaran",
            "en_": "The lifeguard watched the swimmers carefully.",
            "es_": "El vigilante de playa vigilaba a los nadadores con cuidado.",
            "tr_": "Cankurtaran yüzücüleri dikkatle izliyordu."
        },
        {
            "en": "wave",
            "es": "la ola",
            "tr": "dalga",
            "en_": "The waves crashed against the shore.",
            "es_": "Las olas chocaban contra la orilla.",
            "tr_": "Dalgalar kıyıya vuruyordu."
        },
        {
            "en": "sea",
            "es": "el mar",
            "tr": "deniz",
            "en_": "The sea is calm today.",
            "es_": "El mar está tranquilo hoy.",
            "tr_": "Deniz bugün sakin."
        },
        {
            "en": "sand",
            "es": "la arena",
            "tr": "kum",
            "en_": "The children played in the sand.",
            "es_": "Los niños jugaron en la arena.",
            "tr_": "Çocuklar kumda oynadı."
        },
        {
            "en": "tanned",
            "es": "bronceado(a)",
            "tr": "bronzlanmış",
            "en_": "She got tanned after a week at the beach.",
            "es_": "Ella se bronceó después de una semana en la playa.",
            "tr_": "Bir hafta plajda kaldıktan sonra bronzlandı."
        },
        {
            "en": "parasol [sunshade]",
            "es": "el parasol",
            "tr": "şemsiye [güneşlik]",
            "en_": "They sat under the parasol to avoid the sun.",
            "es_": "Se sentaron bajo el parasol para evitar el sol.",
            "tr_": "Güneşten korunmak için şemsiyenin altında oturdular."
        },
        {
            "en": "seahell",
            "es": "la concha",
            "tr": "deniz kabuğu",
            "en_": "She collected beautiful seashells on the shore.",
            "es_": "Ella recogió conchas bonitas en la orilla.",
            "tr_": "Kıyıda güzel deniz kabukları topladı."
        },
        {
            "en": "mountain",
            "es": "la montaña",
            "tr": "dağ",
            "en_": "The mountain is covered with snow.",
            "es_": "La montaña está cubierta de nieve.",
            "tr_": "Dağ karla kaplıdır."
        },
        {
            "en": "summit",
            "es": "la cima",
            "tr": "zirve",
            "en_": "We reached the summit after a long climb.",
            "es_": "Llegamos a la cima después de una larga escalada.",
            "tr_": "Uzun bir tırmanıştan sonra zirveye ulaştık."
        },
        {
            "en": "view",
            "es": "la vista",
            "tr": "görünüm",
            "en_": "The view from the mountain is breathtaking.",
            "es_": "La vista desde la montaña es impresionante.",
            "tr_": "Dağdan görünüm nefes kesici."
        },
        {
            "en": "sharp",
            "es": "empinado(a)",
            "tr": "dik",
            "en_": "The path up the mountain is very sharp.",
            "es_": "El camino hacia la montaña es muy empinado.",
            "tr_": "Dağa çıkan yol çok dik."
        },
        {
            "en": "mountaineer [climber]",
            "es": "el alpinisto / la alpinista",
            "tr": "dağcı",
            "en_": "The mountaineer prepared his equipment carefully.",
            "es_": "El alpinista preparó su equipo cuidadosamente.",
            "tr_": "Dağcı ekipmanını dikkatle hazırladı."
        },
        {
            "en": "backpeck",
            "es": "la mochila",
            "tr": "sırt çantası",
            "en_": "She carried her backpack during the hike.",
            "es_": "Ella llevó su mochila durante la caminata.",
            "tr_": "Yürüyüş sırasında sırt çantasını taşıdı."
        },
        {
            "en": "ski resort [ski center]",
            "es": "el centro de esquí",
            "tr": "kayak merkezi",
            "en_": "The ski resort is very popular among tourists.",
            "es_": "El centro de esquí es muy popular entre los turistas.",
            "tr_": "Kayak merkezi turistler arasında çok popülerdir."
        },
        {
            "en": "chairlift",
            "es": "la silla de ascenso",
            "tr": "telesiyej",
            "en_": "We took the chairlift to the top of the mountain.",
            "es_": "Tomamos la silla de ascenso hasta la cima de la montaña.",
            "tr_": "Dağın tepesine telesiyejle çıktık."
        },
        {
            "en": "slide",
            "es": "el tobogán",
            "tr": "kaydırak",
            "en_": "The children enjoyed playing on the slide.",
            "es_": "Los niños disfrutaron jugando en el tobogán.",
            "tr_": "Çocuklar kaydırakta oynamaktan hoşlandı."
        },
        {
            "en": "ski pole",
            "es": "el bastón de esquí",
            "tr": "kayak sopası",
            "en_": "He lost his ski pole during the race.",
            "es_": "Perdió su bastón de esquí durante la carrera.",
            "tr_": "Yarış sırasında kayak sopasını kaybetti."
        },
        {
            "en": "ski boots",
            "es": "las botas de esquí",
            "tr": "kayak botu",
            "en_": "She bought new ski boots for the winter.",
            "es_": "Compró nuevas botas de esquí para el invierno.",
            "tr_": "Kış için yeni kayak botları aldı."
        },
        {
            "en": "skis",
            "es": "los esquís",
            "tr": "kayak takımı",
            "en_": "The skis were too long for him.",
            "es_": "Los esquís eran demasiado largos para él.",
            "tr_": "Kayak takımı onun için çok uzundu."
        },
        {
            "en": "campsite",
            "es": "el camping",
            "tr": "kamp alanı",
            "en_": "The campsite is near the lake.",
            "es_": "El camping está cerca del lago.",
            "tr_": "Kamp alanı gölün yakınında."
        },
        {
            "en": "caravan [camper van]",
            "es": "la caravana",
            "tr": "karavan",
            "en_": "They traveled across the country in a caravan.",
            "es_": "Viajaron por el país en una caravana.",
            "tr_": "Ülkeyi karavanla dolaştılar."
        },
        {
            "en": "tent",
            "es": "la tienda de campaña",
            "tr": "çadır",
            "en_": "We set up the tent before nightfall.",
            "es_": "Montamos la tienda de campaña antes del anochecer.",
            "tr_": "Gün batmadan önce çadırı kurduk."
        },
        {
            "en": "camping stove",
            "es": "el infiernillo",
            "tr": "kamp ocağı",
            "en_": "We cooked dinner on the camping stove.",
            "es_": "Cocinamos la cena en el infiernillo.",
            "tr_": "Yemeği kamp ocağında pişirdik."
        },
        {
            "en": "sleeping bag",
            "es": "el saco de dormir",
            "tr": "uyku tulumu",
            "en_": "I forgot my sleeping bag at home.",
            "es_": "Olvidé mi saco de dormir en casa.",
            "tr_": "Uyku tulumumu evde unuttum."
        },
        {
            "en": "lake",
            "es": "el lago",
            "tr": "göl",
            "en_": "We went swimming in the lake.",
            "es_": "Fuimos a nadar en el lago.",
            "tr_": "Gölda yüzmeye gittik."
        },
        {
            "en": "reed",
            "es": "el junco",
            "tr": "kamış",
            "en_": "The birds nested in the reeds by the lake.",
            "es_": "Los pájaros anidaron en los juncos junto al lago.",
            "tr_": "Kuşlar göl kenarındaki kamışlarda yuva yaptı."
        },
        {
            "en": "fishing boat",
            "es": "la barca de pesca",
            "tr": "balıkçı teknesi",
            "en_": "The fishing boat returned with a big catch.",
            "es_": "La barca de pesca volvió con una gran captura.",
            "tr_": "Balıkçı teknesi büyük bir avla döndü."
        },
        {
            "en": "bait",
            "es": "el cebo",
            "tr": "yem",
            "en_": "He put bait on the hook.",
            "es_": "Puso cebo en el anzuelo.",
            "tr_": "Olta iğnesine yem koydu."
        },
        {
            "en": "hook",
            "es": "el anzuelo",
            "tr": "olta iğnesi",
            "en_": "The fish bit the hook.",
            "es_": "El pez mordió el anzuelo.",
            "tr_": "Balık olta iğnesini ısırdı."
        },
        {
            "en": "net",
            "es": "la red",
            "tr": "ağ",
            "en_": "They threw a net into the water.",
            "es_": "Lanzaron una red al agua.",
            "tr_": "Suya ağ attılar."
        },
        {
            "en": "to catch a fish",
            "es": "coger un pez",
            "tr": "balık tutmak",
            "en_": "He managed to catch a fish.",
            "es_": "Logró coger un pez.",
            "tr_": "Balık tutmayı başardı."
        },
        {
            "en": "canoe",
            "es": "la canoa",
            "tr": "kano",
            "en_": "They paddled the canoe across the lake.",
            "es_": "Remaron la canoa por el lago.",
            "tr_": "Göl boyunca kanoyla kürek çektiler."
        }
    ],
    "Farm" : [
        {
            "en": "to dig",
            "es": "cavar",
            "tr": "kazmak",
            "en_": "The children like to dig in the sand.",
            "es_": "A los niños les gusta cavar en la arena.",
            "tr_": "Çocuklar kumda kazmayı sever."
        },
        {
            "en": "to plant",
            "es": "plantar",
            "tr": "dikmek",
            "en_": "We want to plant flowers near the fence.",
            "es_": "Queremos plantar flores cerca de la valla.",
            "tr_": "Çitin yanına çiçek dikmek istiyoruz."
        },
        {
            "en": "to milk",
            "es": "ordeñar",
            "tr": "sağmak",
            "en_": "She milks the cow every morning.",
            "es_": "Ella ordeña la vaca todas las mañanas.",
            "tr_": "Her sabah ineği sağıyor."
        },
        {
            "en": "to lay eggs",
            "es": "poner huevos",
            "tr": "yumurtlamak",
            "en_": "Hens lay eggs every day.",
            "es_": "Las gallinas ponen huevos todos los días.",
            "tr_": "Tavuklar her gün yumurtlar."
        },
        {
            "en": "to pick",
            "es": "coger",
            "tr": "toplamak",
            "en_": "They picked fresh apples from the tree.",
            "es_": "Cogieron manzanas frescas del árbol.",
            "tr_": "Ağaçtan taze elmalar topladılar."
        },
        {
            "en": "to plow",
            "es": "arar",
            "tr": "sürmek",
            "en_": "Farmers plow their fields before planting.",
            "es_": "Los agricultores aran sus campos antes de sembrar.",
            "tr_": "Çiftçiler ekmeden önce tarlalarını sürerler."
        },
        {
            "en": "to mow the lawn",
            "es": "cortar el cesped",
            "tr": "çimleri biçmek",
            "en_": "I need to mow the lawn this weekend.",
            "es_": "Necesito cortar el césped este fin de semana.",
            "tr_": "Bu hafta sonu çimleri biçmem gerekiyor."
        },
        {
            "en": "to harvest",
            "es": "cosechar",
            "tr": "hasat yapmak",
            "en_": "Farmers harvest the wheat in late summer.",
            "es_": "Los agricultores cosechan el trigo a finales del verano.",
            "tr_": "Çiftçiler buğdayı yaz sonu hasat eder."
        },
        {
            "en": "to sow",
            "es": "sembrar",
            "tr": "ekmek",
            "en_": "They sowed the seeds in early spring.",
            "es_": "Sembraron las semillas a principios de la primavera.",
            "tr_": "Tohumları erken ilkbaharda ektiler."
        },
        {
            "en": "farm",
            "es": "la granja",
            "tr": "çiftlik",
            "en_": "They have a big farm in the countryside.",
            "es_": "Tienen una granja grande en el campo.",
            "tr_": "Kırsalda büyük bir çiftlikleri var."
        },
        {
            "en": "stable",
            "es": "el establo",
            "tr": "ahır",
            "en_": "The horses are kept in the stable.",
            "es_": "Los caballos se mantienen en el establo.",
            "tr_": "Atlar ahırda tutulur."
        },
        {
            "en": "horse",
            "es": "el caballo",
            "tr": "at",
            "en_": "The horse galloped across the field.",
            "es_": "El caballo galopó por el campo.",
            "tr_": "At tarlada dörtnala koştu."
        },
        {
            "en": "barn",
            "es": "el granero",
            "tr": "ambar",
            "en_": "They stored the hay in the barn.",
            "es_": "Guardaron el heno en el granero.",
            "tr_": "Samanı ambarın içine koydular."
        },
        {
            "en": "hay",
            "es": "el heno",
            "tr": "saman",
            "en_": "The cows ate the fresh hay.",
            "es_": "Las vacas comieron el heno fresco.",
            "tr_": "İnekler taze saman yedi."
        },
        {
            "en": "cow",
            "es": "la vaca",
            "tr": "inek",
            "en_": "The cow is grazing in the meadow.",
            "es_": "La vaca está pastando en el prado.",
            "tr_": "İnek çayırda otluyor."
        },
        {
            "en": "donkey",
            "es": "el burro",
            "tr": "eşek",
            "en_": "The donkey carried the farmer’s tools.",
            "es_": "El burro llevó las herramientas del granjero.",
            "tr_": "Eşek çiftçinin aletlerini taşıdı."
        },
        {
            "en": "calf",
            "es": "la ternera",
            "tr": "dana",
            "en_": "The calf followed its mother closely.",
            "es_": "La ternera siguió a su madre de cerca.",
            "tr_": "Dana annesinin peşinden yürüdü."
        },
        {
            "en": "pig",
            "es": "el cerdo",
            "tr": "domuz",
            "en_": "The pigs rolled in the mud.",
            "es_": "Los cerdos se revolcaron en el barro.",
            "tr_": "Domuzlar çamurda yuvarlandı."
        },
        {
            "en": "ladder",
            "es": "la escalera",
            "tr": "merdiven",
            "en_": "He climbed the ladder to reach the roof.",
            "es_": "Él subió la escalera para alcanzar el techo.",
            "tr_": "Çatıya ulaşmak için merdivene tırmandı."
        },
        {
            "en": "farmyard",
            "es": "el patio de labranza",
            "tr": "çiftlik avlusu",
            "en_": "Children played in the farmyard all day.",
            "es_": "Los niños jugaron todo el día en el patio de labranza.",
            "tr_": "Çocuklar bütün gün çiftlik avlusunda oynadı."
        },
        {
            "en": "hen",
            "es": "la gallina",
            "tr": "tavuk",
            "en_": "The hen laid three eggs this morning.",
            "es_": "La gallina puso tres huevos esta mañana.",
            "tr_": "Tavuk bu sabah üç yumurta yumurtladı."
        },
        {
            "en": "rooster",
            "es": "el gallo",
            "tr": "horoz",
            "en_": "The rooster crowed at dawn.",
            "es_": "El gallo cantó al amanecer.",
            "tr_": "Horoz şafakta öttü."
        },
        {
            "en": "chicken coop",
            "es": "el gallinero",
            "tr": "tavuk kümesi",
            "en_": "The chickens returned to the chicken coop at night.",
            "es_": "Las gallinas regresaron al gallinero por la noche.",
            "tr_": "Tavuklar gece tavuk kümesine döndü."
        },
        {
            "en": "farmer",
            "es": "el granjero / la granjera",
            "tr": "çiftçi",
            "en_": "The farmer works hard on the farm.",
            "es_": "El granjero trabaja duro en la granja.",
            "tr_": "Çiftçi çiftlikte çok çalışır."
        },
        {
            "en": "goose",
            "es": "el ganso",
            "tr": "kaz",
            "en_": "The goose honked loudly near the pond.",
            "es_": "El ganso graznó fuerte cerca del estanque.",
            "tr_": "Kaz göletin yanında yüksek sesle vakladı."
        },
        {
            "en": "goat",
            "es": "la cabra",
            "tr": "keçi",
            "en_": "The goat climbed the rocky hill.",
            "es_": "La cabra subió la colina rocosa.",
            "tr_": "Keçi kayalık tepeye tırmandı."
        },
        {
            "en": "field",
            "es": "el campo",
            "tr": "tarla",
            "en_": "The farmer planted corn in the field.",
            "es_": "El granjero plantó maíz en el campo.",
            "tr_": "Çiftçi tarlaya mısır ekti."
        },
        {
            "en": "flock",
            "es": "el rebaño",
            "tr": "sürü",
            "en_": "The shepherd watched over the flock of sheep.",
            "es_": "El pastor cuidaba del rebaño de ovejas.",
            "tr_": "Çoban koyun sürüsüne göz kulak oldu."
        },
        {
            "en": "sheep",
            "es": "la oveja",
            "tr": "koyun",
            "en_": "The sheep grazed peacefully in the meadow.",
            "es_": "La oveja pastaba pacíficamente en el prado.",
            "tr_": "Koyun çayırda huzur içinde otladı."
        },
        {
            "en": "lamb",
            "es": "el cordero",
            "tr": "kuzu",
            "en_": "The lamb followed its mother closely.",
            "es_": "El cordero siguió a su madre de cerca.",
            "tr_": "Kuzu annesinin peşinden yürüdü."
        },
        {
            "en": "gate",
            "es": "la puerta",
            "tr": "kapı",
            "en_": "He closed the gate behind the tractor.",
            "es_": "Cerró la puerta detrás del tractor.",
            "tr_": "Traktörün arkasından kapıyı kapattı."
        },
        {
            "en": "shepherd dog",
            "es": "el perro pastor",
            "tr": "çoban köpeği",
            "en_": "The shepherd dog helped herd the sheep.",
            "es_": "El perro pastor ayudó a arrear las ovejas.",
            "tr_": "Çoban köpeği koyunları güdümlemeye yardım etti."
        },
        {
            "en": "vineyard",
            "es": "la viña",
            "tr": "bağ",
            "en_": "The vineyard produces excellent grapes every year.",
            "es_": "La viña produce excelentes uvas cada año.",
            "tr_": "Bağ her yıl mükemmel üzüm üretir."
        },
        {
            "en": "vine",
            "es": "la vid",
            "tr": "asma",
            "en_": "The vine grew thick with leaves and fruit.",
            "es_": "La vid creció gruesa con hojas y fruta.",
            "tr_": "Asma yaprakları ve meyveleriyle sıklaştı."
        },
        {
            "en": "haystack",
            "es": "el almiar",
            "tr": "samanlık",
            "en_": "The haystack was built near the barn.",
            "es_": "El almiar se construyó cerca del granero.",
            "tr_": "Samanlık ambarın yanında yapıldı."
        },
        {
            "en": "wheat",
            "es": "el trigo",
            "tr": "buğday",
            "en_": "Wheat is a staple crop in many countries.",
            "es_": "El trigo es un cultivo básico en muchos países.",
            "tr_": "Buğday birçok ülkede temel bir üründür."
        },
        {
            "en": "orchard",
            "es": "el huerto",
            "tr": "bahçe",
            "en_": "The apple orchard is full of ripe fruit.",
            "es_": "El huerto de manzanas está lleno de fruta madura.",
            "tr_": "Elma bahçesi olgun meyvelerle dolu."
        },
        {
            "en": "apple tree",
            "es": "el manzano",
            "tr": "elma ağacı",
            "en_": "The apple tree blossomed beautifully in spring.",
            "es_": "El manzano floreció hermosamente en primavera.",
            "tr_": "Elma ağacı ilkbaharda güzelce çiçek açtı."
        },
        {
            "en": "tractor",
            "es": "el tractor",
            "tr": "traktör",
            "en_": "The tractor plowed the field all day.",
            "es_": "El tractor aró el campo todo el día.",
            "tr_": "Traktör bütün gün tarlayı sürdü."
        },
        {
            "en": "scarecrow",
            "es": "el espantapájaros",
            "tr": "korkuluk",
            "en_": "The scarecrow kept the birds away from the crops.",
            "es_": "El espantapájaros ahuyentó a los pájaros de los cultivos.",
            "tr_": "Korkuluk kuşları ürünlerden uzak tuttu."
        }
    ],
    "Work" : [
        {
            "en": "to go to work",
            "es": "ir a trabajar",
            "tr": "işe gitmek",
            "en_": "I usually go to work by bus.",
            "es_": "Normalmente voy a trabajar en autobús.",
            "tr_": "Genellikle işe otobüsle giderim."
        },
        {
            "en": "to be late",
            "es": "llegar tarde",
            "tr": "geç kalmak",
            "en_": "He was late for the meeting.",
            "es_": "Llegó tarde a la reunión.",
            "tr_": "Toplantıya geç kaldı."
        },
        {
            "en": "to be on time",
            "es": "llegar a tiempo",
            "tr": "zamanında varmak",
            "en_": "She always tries to be on time.",
            "es_": "Siempre trata de llegar a tiempo.",
            "tr_": "Her zaman zamanında varmaya çalışır."
        },
        {
            "en": "to employ",
            "es": "emplear",
            "tr": "iş vermek",
            "en_": "The company employs over 500 workers.",
            "es_": "La empresa emplea a más de 500 trabajadores.",
            "tr_": "Şirket 500'den fazla çalışan işe alıyor."
        },
        {
            "en": "to retire",
            "es": "jubilarse",
            "tr": "emekli olmak",
            "en_": "He plans to retire next year.",
            "es_": "Él planea jubilarse el próximo año.",
            "tr_": "O, gelecek yıl emekli olmayı planlıyor."
        },
        {
            "en": "to fire",
            "es": "despedir",
            "tr": "işten çıkarmak [kovmak]",
            "en_": "The company had to fire several employees.",
            "es_": "La empresa tuvo que despedir a varios empleados.",
            "tr_": "Şirket birkaç çalışanı işten çıkarmak zorunda kaldı."
        },
        {
            "en": "lunch time",
            "es": "la hora de comer",
            "tr": "yemek saati",
            "en_": "Lunch time is usually at 12:30.",
            "es_": "La hora de comer suele ser a las 12:30.",
            "tr_": "Yemek saati genellikle 12:30'dadır."
        },
        {
            "en": "overtime",
            "es": "horas extraordinarias",
            "tr": "fazla mesai",
            "en_": "He worked overtime to finish the project.",
            "es_": "Trabajó horas extraordinarias para terminar el proyecto.",
            "tr_": "Projeyi bitirmek için fazla mesai yaptı."
        },
        {
            "en": "office",
            "es": "la oficina",
            "tr": "ofis",
            "en_": "The office closes at 6 pm.",
            "es_": "La oficina cierra a las 6 de la tarde.",
            "tr_": "Ofis akşam 6'da kapanıyor."
        },
        {
            "en": "boss",
            "es": "el jefe / la jefa",
            "tr": "patron",
            "en_": "The boss called a meeting this morning.",
            "es_": "El jefe convocó una reunión esta mañana.",
            "tr_": "Patron bu sabah bir toplantı çağırdı."
        },
        {
            "en": "secretary",
            "es": "el secretario / la secretaria",
            "tr": "sekreter",
            "en_": "The secretary answered the phone.",
            "es_": "El secretario contestó el teléfono.",
            "tr_": "Sekreter telefonu açtı."
        },
        {
            "en": "employee",
            "es": "el empleado / la empleada",
            "tr": "çalışan",
            "en_": "The employees are happy with the new policy.",
            "es_": "Los empleados están contentos con la nueva política.",
            "tr_": "Çalışanlar yeni politikadan memnun."
        },
        {
            "en": "hardworking",
            "es": "trabajador(a)",
            "tr": "çalışkan",
            "en_": "She is a hardworking student.",
            "es_": "Ella es una estudiante trabajadora.",
            "tr_": "O, çalışkan bir öğrenci."
        },
        {
            "en": "lazy",
            "es": "perezoso(a)",
            "tr": "tembel",
            "en_": "Don't be lazy and finish your tasks.",
            "es_": "No seas perezoso y termina tus tareas.",
            "tr_": "Tembel olma ve işlerini bitir."
        },
        {
            "en": "profession",
            "es": "la profesión",
            "tr": "meslek",
            "en_": "Teaching is a noble profession.",
            "es_": "La enseñanza es una profesión noble.",
            "tr_": "Öğretmenlik soylu bir meslektir."
        },
        {
            "en": "bricklayer",
            "es": "el albañil",
            "tr": "duvar ustası",
            "en_": "The bricklayer built the new wall quickly.",
            "es_": "El albañil construyó la nueva pared rápidamente.",
            "tr_": "Duvar ustası yeni duvarı hızlıca inşa etti."
        },
        {
            "en": "plumber",
            "es": "el fontanero",
            "tr": "tesisatçı",
            "en_": "The plumber fixed the leaking pipe.",
            "es_": "El fontanero arregló la tubería que goteaba.",
            "tr_": "Tesisatçı sızdıran boruyu tamir etti."
        },
        {
            "en": "architect",
            "es": "el arquitecto / la arquitecta",
            "tr": "mimar",
            "en_": "The architect designed a modern building.",
            "es_": "El arquitecto diseñó un edificio moderno.",
            "tr_": "Mimar modern bir bina tasarladı."
        },
        {
            "en": "judge",
            "es": "el juez / la jueza",
            "tr": "hakim",
            "en_": "The judge made a fair decision.",
            "es_": "El juez tomó una decisión justa.",
            "tr_": "Hakim adil bir karar verdi."
        },
        {
            "en": "lawyer",
            "es": "el abogado / la abogada",
            "tr": "avukat",
            "en_": "The lawyer defended his client well.",
            "es_": "El abogado defendió bien a su cliente.",
            "tr_": "Avukat müvekkilini iyi savundu."
        },
        {
            "en": "journalist",
            "es": "el periodista / la periodista",
            "tr": "gazeteci",
            "en_": "The journalist wrote an interesting article.",
            "es_": "El periodista escribió un artículo interesante.",
            "tr_": "Gazeteci ilginç bir makale yazdı."
        },
        {
            "en": "policeman",
            "es": "el policía",
            "tr": "polis",
            "en_": "The policeman helped the lost child.",
            "es_": "El policía ayudó al niño perdido.",
            "tr_": "Polis kaybolan çocuğa yardım etti."
        },
        {
            "en": "vicar",
            "es": "el párroco",
            "tr": "rahip",
            "en_": "The vicar led the Sunday service.",
            "es_": "El párroco dirigió el servicio dominical.",
            "tr_": "Rahip pazar ayinini yönetti."
        },
        {
            "en": "photographer",
            "es": "el fotógrafo / la fotógrafa",
            "tr": "fotoğrafçı",
            "en_": "The photographer took beautiful pictures.",
            "es_": "El fotógrafo tomó fotos hermosas.",
            "tr_": "Fotoğrafçı güzel fotoğraflar çekti."
        },
        {
            "en": "shopkeeper",
            "es": "el tendero / la tendera",
            "tr": "tezgahtar",
            "en_": "The shopkeeper greeted every customer.",
            "es_": "El tendero saludó a todos los clientes.",
            "tr_": "Tezgahtar her müşteriyi selamladı."
        },
        {
            "en": "sales representative",
            "es": "el representante comercial",
            "tr": "satış temsilcisi",
            "en_": "The sales representative visited many clients.",
            "es_": "El representante comercial visitó a muchos clientes.",
            "tr_": "Satış temsilcisi birçok müşteriyi ziyaret etti."
        },
        {
            "en": "sailor",
            "es": "el marinero / la marinera",
            "tr": "denizci",
            "en_": "The sailor navigated through the storm.",
            "es_": "El marinero navegó durante la tormenta.",
            "tr_": "Denizci fırtına sırasında yol aldı."
        },
        {
            "en": "soldier",
            "es": "el soldado / la soldada",
            "tr": "asker",
            "en_": "The soldier defended the country bravely.",
            "es_": "El soldado defendió el país valientemente.",
            "tr_": "Asker ülkeyi cesurca savundu."
        },
        {
            "en": "designer",
            "es": "el diseñador / la diseñadora",
            "tr": "tasarımcı",
            "en_": "The designer created a new fashion line.",
            "es_": "El diseñador creó una nueva línea de moda.",
            "tr_": "Tasarımcı yeni bir moda koleksiyonu yarattı."
        },
        {
            "en": "hairdresser",
            "es": "el peluquero / la peluquera",
            "tr": "kuaför",
            "en_": "The hairdresser styled her hair beautifully.",
            "es_": "El peluquero peinó su cabello hermosamente.",
            "tr_": "Kuaför saçını güzelce şekillendirdi."
        },
        {
            "en": "model",
            "es": "el modelo / la modelo",
            "tr": "model",
            "en_": "The model walked the runway confidently.",
            "es_": "La modelo caminó por la pasarela con confianza.",
            "tr_": "Model kendinden emin şekilde podyumda yürüdü."
        },
        {
            "en": "garbage collector",
            "es": "el basurero / la basurera",
            "tr": "çöpçü",
            "en_": "The garbage collector works early in the morning.",
            "es_": "El basurero trabaja temprano en la mañana.",
            "tr_": "Çöpçü sabah erken çalışır."
        },
        {
            "en": "taxi driver",
            "es": "el taxista / la taxista",
            "tr": "taksici",
            "en_": "The taxi driver took us to the airport.",
            "es_": "El taxista nos llevó al aeropuerto.",
            "tr_": "Taksici bizi havaalanına götürdü."
        },
        {
            "en": "truck driver",
            "es": "el camionero / la camionera",
            "tr": "kamyon şoförü",
            "en_": "The truck driver delivered the goods on time.",
            "es_": "El camionero entregó las mercancías a tiempo.",
            "tr_": "Kamyon şoförü malları zamanında teslim etti."
        },
        {
            "en": "fireman",
            "es": "el bombero / la bombera",
            "tr": "itfaiyeci",
            "en_": "The fireman rescued people from the burning building.",
            "es_": "El bombero rescató a personas del edificio en llamas.",
            "tr_": "İtfaiyeci yanan binadan insanları kurtardı."
        },
        {
            "en": "pilot",
            "es": "el piloto / la pilota",
            "tr": "pilot",
            "en_": "The pilot landed the plane safely.",
            "es_": "El piloto aterrizó el avión de manera segura.",
            "tr_": "Pilot uçağı güvenle indirdi."
        },
        {
            "en": "stewardess",
            "es": "la azafata",
            "tr": "hostes",
            "en_": "The stewardess served drinks to the passengers.",
            "es_": "La azafata sirvió bebidas a los pasajeros.",
            "tr_": "Hostes yolculara içecek servisi yaptı."
        },
        {
            "en": "steward",
            "es": "el azafato",
            "tr": "host",
            "en_": "The steward helped passengers with their luggage.",
            "es_": "El azafato ayudó a los pasajeros con su equipaje.",
            "tr_": "Host yolcuların bagajlarına yardımcı oldu."
        }
    ],
    "Health" : [
        {
            "en": "to feel ill",
            "es": "sentirse mal",
            "tr": "hasta hissetmek",
            "en_": "I started to feel ill after lunch.",
            "es_": "Empecé a sentirme mal después del almuerzo.",
            "tr_": "Öğle yemeğinden sonra hasta hissetmeye başladım."
        },
        {
            "en": "to feel better",
            "es": "sentirse mejor",
            "tr": "daha iyi hissetmek",
            "en_": "She feels better after taking medicine.",
            "es_": "Ella se siente mejor después de tomar la medicina.",
            "tr_": "O, ilaç aldıktan sonra daha iyi hissetti."
        },
        {
            "en": "to take temperature",
            "es": "tomar la temperatura",
            "tr": "ateşi ölçmek",
            "en_": "The nurse will take your temperature.",
            "es_": "La enfermera tomará tu temperatura.",
            "tr_": "Hemşire ateşinizi ölçecek."
        },
        {
            "en": "to have a fever",
            "es": "tener fiebre",
            "tr": "ateşi olmak",
            "en_": "He has a fever and needs to rest.",
            "es_": "Él tiene fiebre y necesita descansar.",
            "tr_": "Onun ateşi var ve dinlenmesi gerekiyor."
        },
        {
            "en": "to cure [to heal]",
            "es": "curar",
            "tr": "tedavi etmek",
            "en_": "The medicine helped to cure the infection.",
            "es_": "La medicina ayudó a curar la infección.",
            "tr_": "İlaç enfeksiyonu tedavi etmeye yardımcı oldu."
        },
        {
            "en": "to sneeze",
            "es": "estornudar",
            "tr": "hapşırmak",
            "en_": "He began to sneeze suddenly.",
            "es_": "Él comenzó a estornudar de repente.",
            "tr_": "Aniden hapşırmaya başladı."
        },
        {
            "en": "to faint [to pass out]",
            "es": "desmayarse",
            "tr": "bayılmak",
            "en_": "He fainted and fell to the ground.",
            "es_": "Se desmayó y cayó al suelo.",
            "tr_": "Bayılıp yere düştü."
        },
        {
            "en": "to have stomach ache",
            "es": "tener dolor de estómago",
            "tr": "mide ağrısı olmak",
            "en_": "He has a stomach ache after eating too much.",
            "es_": "Él tiene dolor de estómago después de comer demasiado.",
            "tr_": "Çok yedikten sonra mide ağrısı oldu."
        },
        {
            "en": "to vomit",
            "es": "vomitar",
            "tr": "kusmak",
            "en_": "She started to vomit after the ride.",
            "es_": "Ella comenzó a vomitar después del paseo.",
            "tr_": "Geziden sonra kusmaya başladı."
        },
        {
            "en": "to have a headache",
            "es": "tener dolor de cabeza",
            "tr": "baş ağrısı olmak",
            "en_": "I have a headache from working all day.",
            "es_": "Tengo dolor de cabeza por trabajar todo el día.",
            "tr_": "Tüm gün çalışmaktan başım ağrıyor."
        },
        {
            "en": "to get a tooth filled",
            "es": "empastarse un diente",
            "tr": "bir dişe dolgu yaptırmak",
            "en_": "I need to get a tooth filled next week.",
            "es_": "Necesito empastarme un diente la próxima semana.",
            "tr_": "Gelecek hafta bir dişime dolgu yaptırmam gerekiyor."
        },
        {
            "en": "to have a toothache",
            "es": "tener dolor de muelas",
            "tr": "diş ağrısı olmak",
            "en_": "He has a toothache and needs to see the dentist.",
            "es_": "Él tiene dolor de muelas y necesita ver al dentista.",
            "tr_": "Dişi ağrıyor ve dişçiye gitmesi gerekiyor."
        },
        {
            "en": "to have cold",
            "es": "tener un resfriado",
            "tr": "nezle olmak",
            "en_": "I have a cold and a sore throat.",
            "es_": "Tengo un resfriado y dolor de garganta.",
            "tr_": "Nezlem ve boğaz ağrım var."
        },
        {
            "en": "to dislocate one’s wrist",
            "es": "dislocarse la muñeca",
            "tr": "bileği çıkmak",
            "en_": "He dislocated his wrist playing basketball.",
            "es_": "Se dislocó la muñeca jugando baloncesto.",
            "tr_": "Basketbol oynarken bileği çıktı."
        },
        {
            "en": "to sprain one’s wrist",
            "es": "torcerse la muñeca",
            "tr": "bileğini burkmak",
            "en_": "She sprained her wrist while falling.",
            "es_": "Se torció la muñeca al caer.",
            "tr_": "Düşerken bileğini burktu."
        },
        {
            "en": "to break one's leg",
            "es": "romperse la pierna",
            "tr": "bacağını kırmak",
            "en_": "He broke his leg while skiing.",
            "es_": "Se rompió la pierna mientras esquiaba.",
            "tr_": "Kayak yaparken bacağını kırdı."
        },
        {
            "en": "to take the pulse",
            "es": "tomar el pulso",
            "tr": "nabız ölçmek",
            "en_": "The doctor took the patient’s pulse.",
            "es_": "El médico tomó el pulso del paciente.",
            "tr_": "Doktor hastanın nabzını ölçtü."
        },
        {
            "en": "thermometer",
            "es": "el termómetro",
            "tr": "termometre",
            "en_": "Use the thermometer to check your fever.",
            "es_": "Usa el termómetro para revisar tu fiebre.",
            "tr_": "Ateşini kontrol etmek için termometreyi kullan."
        },
        {
            "en": "doctor",
            "es": "el médico / la médica",
            "tr": "doktor",
            "en_": "The doctor will see you now.",
            "es_": "El médico te atenderá ahora.",
            "tr_": "Doktor sizi şimdi muayene edecek."
        },
        {
            "en": "prescription",
            "es": "la receta",
            "tr": "reçete",
            "en_": "The pharmacist gave me the prescription.",
            "es_": "El farmacéutico me dio la receta.",
            "tr_": "Eczacı bana reçeteyi verdi."
        },
        {
            "en": "pill",
            "es": "la pastilla",
            "tr": "hap",
            "en_": "Take a pill after meals.",
            "es_": "Toma una pastilla después de las comidas.",
            "tr_": "Yemeklerden sonra bir hap al."
        },
        {
            "en": "healthy",
            "es": "sano(a)",
            "tr": "sağlıklı",
            "en_": "She has a healthy lifestyle.",
            "es_": "Ella tiene un estilo de vida sano.",
            "tr_": "O, sağlıklı bir yaşam tarzına sahip."
        },
        {
            "en": "dentist",
            "es": "el dentista / la dentista",
            "tr": "dişçi",
            "en_": "The dentist fixed my cavity.",
            "es_": "El dentista arregló mi caries.",
            "tr_": "Dişçi çürüğümü tedavi etti."
        },
        {
            "en": "injection",
            "es": "la inyección",
            "tr": "iğne [enjeksiyon]",
            "en_": "The nurse gave me an injection.",
            "es_": "La enfermera me puso una inyección.",
            "tr_": "Hemşire bana iğne yaptı."
        },
        {
            "en": "hospital",
            "es": "el hospital",
            "tr": "hastane",
            "en_": "She was taken to the hospital after the accident.",
            "es_": "La llevaron al hospital después del accidente.",
            "tr_": "Kaza sonrası hastaneye götürüldü."
        },
        {
            "en": "emergencies",
            "es": "urgencias",
            "tr": "acil servis",
            "en_": "The patient was rushed to emergencies.",
            "es_": "El paciente fue llevado a urgencias.",
            "tr_": "Hasta acil servise götürüldü."
        },
        {
            "en": "bruise",
            "es": "la contusión",
            "tr": "morluk",
            "en_": "She has a large bruise on her arm.",
            "es_": "Tiene una gran contusión en el brazo.",
            "tr_": "Kolunda büyük bir morluk var."
        },
        {
            "en": "cut",
            "es": "la cortadura",
            "tr": "kesik",
            "en_": "He got a deep cut on his finger.",
            "es_": "Se hizo una cortadura profunda en el dedo.",
            "tr_": "Parmağında derin bir kesik oluştu."
        },
        {
            "en": "burn",
            "es": "la quemadura",
            "tr": "yanık",
            "en_": "She has a burn on her hand from hot water.",
            "es_": "Tiene una quemadura en la mano por agua caliente.",
            "tr_": "Sıcak sudan dolayı elinde yanık var."
        },
        {
            "en": "adhesive bandage",
            "es": "el esparadrapo",
            "tr": "yara bandı",
            "en_": "Put an adhesive bandage on the cut.",
            "es_": "Pon un esparadrapo en la cortadura.",
            "tr_": "Kesik üzerine yara bandı yapıştır."
        },
        {
            "en": "bandage",
            "es": "la venda",
            "tr": "sargı bezi",
            "en_": "The nurse wrapped the patient's arm with a bandage..",
            "es_": "La enfermera envolvió el brazo del paciente con una venda.",
            "tr_": "Hemşire hastanın kolunu sargı bezi ile  sardı."
        },
        {
            "en": "ambulance",
            "es": "la ambulancia",
            "tr": "ambulans",
            "en_": "The ambulance arrived quickly at the scene.",
            "es_": "La ambulancia llegó rápidamente al lugar.",
            "tr_": "Ambulans olay yerine hızlıca geldi."
        },
        {
            "en": "stretcher",
            "es": "la camilla",
            "tr": "sedye",
            "en_": "They carried the injured man on a stretcher.",
            "es_": "Llevaron al hombre herido en una camilla.",
            "tr_": "Yaralı adamı sedyeyle taşıdılar."
        },
        {
            "en": "patient",
            "es": "el paciente / la paciente",
            "tr": "hasta",
            "en_": "The patient needs immediate care.",
            "es_": "El paciente necesita atención inmediata.",
            "tr_": "Hasta acil bakıma ihtiyaç duyuyor."
        },
        {
            "en": "operating room",
            "es": "el quirófano",
            "tr": "ameliyathane",
            "en_": "The surgeon prepared for the operation in the operating room.",
            "es_": "El cirujano se preparó para la operación en el quirófano.",
            "tr_": "Cerrah ameliyathanede operasyon için hazırlandı."
        },
        {
            "en": "surgeon",
            "es": "el cirujano / la cirujana",
            "tr": "cerrah",
            "en_": "The surgeon performed a complex surgery.",
            "es_": "El cirujano realizó una cirugía compleja.",
            "tr_": "Cerrah karmaşık bir ameliyat yaptı."
        },
        {
            "en": "surgery",
            "es": "la intervención quirúrgica",
            "tr": "ameliyat",
            "en_": "The patient is recovering from surgery.",
            "es_": "El paciente se está recuperando de la intervención quirúrgica.",
            "tr_": "Hasta ameliyattan sonra iyileşiyor."
        },
        {
            "en": "nurse",
            "es": "el enfermero / la enfermera",
            "tr": "hemşire",
            "en_": "The nurse took care of the patient.",
            "es_": "El enfermero cuidó al paciente.",
            "tr_": "Hemşire hastaya baktı."
        }
    ],
    "School and education" : [
        {
            "en": "to teach",
            "es": "enseñar",
            "tr": "öğretmek",
            "en_": "She teaches math at the local school.",
            "es_": "Ella enseña matemáticas en la escuela local.",
            "tr_": "O, yerel okulda matematik öğretiyor."
        },
        {
            "en": "to learn",
            "es": "aprender",
            "tr": "öğrenmek",
            "en_": "Children learn new things every day.",
            "es_": "Los niños aprenden cosas nuevas cada día.",
            "tr_": "Çocuklar her gün yeni şeyler öğrenir."
        },
        {
            "en": "to study",
            "es": "estudiar",
            "tr": "ders çalışmak",
            "en_": "I study for exams every weekend.",
            "es_": "Estudio para los exámenes todos los fines de semana.",
            "tr_": "Her hafta sonu sınavlara çalışırım."
        },
        {
            "en": "to read",
            "es": "leer",
            "tr": "okumak",
            "en_": "He likes to read books.",
            "es_": "Le gusta leer libros.",
            "tr_": "Kitap okumayı sever."
        },
        {
            "en": "to write",
            "es": "escribir",
            "tr": "yazmak",
            "en_": "The students write in their notebooks.",
            "es_": "Los alumnos escriben en sus cuadernos.",
            "tr_": "Öğrenciler defterlerine yazıyorlar."
        },
        {
            "en": "to ask",
            "es": "preguntar",
            "tr": "sormak",
            "en_": "Can I ask a question?",
            "es_": "¿Puedo preguntar algo?",
            "tr_": "Bir şey sorabilir miyim?"
        },
        {
            "en": "to play",
            "es": "jugar",
            "tr": "oynamak",
            "en_": "The kids play in the playground after class.",
            "es_": "Los niños juegan en el patio de juego después de clase.",
            "tr_": "Çocuklar ders sonrası oyun alanında oynar."
        },
        {
            "en": "to calculate",
            "es": "hacer cuentas",
            "tr": "hesap yapmak",
            "en_": "I need to calculate the total cost.",
            "es_": "Necesito hacer cuentas del costo total.",
            "tr_": "Toplam maliyeti hesaplamam lazım."
        },
        {
            "en": "to add",
            "es": "sumar",
            "tr": "toplamak",
            "en_": "Add the numbers carefully.",
            "es_": "Suma los números con cuidado.",
            "tr_": "Sayıları dikkatlice topla."
        },
        {
            "en": "to subtract",
            "es": "restar",
            "tr": "çıkarmak",
            "en_": "Subtract five from ten.",
            "es_": "Resta cinco de diez.",
            "tr_": "Ondan beşi çıkar."
        },
        {
            "en": "to multiply",
            "es": "multiplicar",
            "tr": "çarpmak",
            "en_": "Multiply four by six.",
            "es_": "Multiplica cuatro por seis.",
            "tr_": "Dört ile altıyı çarp."
        },
        {
            "en": "to divide",
            "es": "dividir",
            "tr": "bölmek",
            "en_": "Divide twelve by four.",
            "es_": "Divide doce entre cuatro.",
            "tr_": "On ikiyi dört ile böl."
        },
        {
            "en": "to take an exam",
            "es": "examinarse",
            "tr": "sınava girmek",
            "en_": "I will take an exam next Monday.",
            "es_": "Me examinaré el próximo lunes.",
            "tr_": "Gelecek pazartesi sınava gireceğim."
        },
        {
            "en": "to fail an exam",
            "es": "suspender un examen",
            "tr": "sınavda kalmak",
            "en_": "He failed the math exam.",
            "es_": "Suspendió el examen de matemáticas.",
            "tr_": "Matematik sınavında kaldı."
        },
        {
            "en": "to pass an exam",
            "es": "aprobar un examen",
            "tr": "sınavı geçmek",
            "en_": "She passed the history exam.",
            "es_": "Aprobó el examen de historia.",
            "tr_": "Tarih sınavını geçti."
        },
        {
            "en": "nursery school [kindergarten]",
            "es": "el jardín infantil",
            "tr": "anaokulu",
            "en_": "My little sister goes to nursery school.",
            "es_": "Mi hermanita va al jardín infantil.",
            "tr_": "Küçük kız kardeşim anaokuluna gidiyor."
        },
        {
            "en": "primary school",
            "es": "la escuela primaria",
            "tr": "ilkokul",
            "en_": "He started primary school last year.",
            "es_": "Empezó la escuela primaria el año pasado.",
            "tr_": "Geçen yıl ilkokula başladı."
        },
        {
            "en": "high school",
            "es": "el colegio",
            "tr": "lise",
            "en_": "She will graduate from high school next month.",
            "es_": "Se graduará del colegio el próximo mes.",
            "tr_": "Önümüzdeki ay liseden mezun olacak."
        },
        {
            "en": "headmaster",
            "es": "el director",
            "tr": "müdür",
            "en_": "The headmaster welcomed the new students.",
            "es_": "El director dio la bienvenida a los nuevos estudiantes.",
            "tr_": "Müdür yeni öğrencilere hoşgeldin dedi."
        },
        {
            "en": "headmistress",
            "es": "la directora",
            "tr": "müdire",
            "en_": "The headmistress is very strict.",
            "es_": "La directora es muy estricta.",
            "tr_": "Müdire çok disiplinlidir."
        },
        {
            "en": "university",
            "es": "la universidad",
            "tr": "üniversite",
            "en_": "He studies engineering at university.",
            "es_": "Estudia ingeniería en la universidad.",
            "tr_": "Üniversitede mühendislik okuyor."
        },
        {
            "en": "at school",
            "es": "en el colegio",
            "tr": "okulda",
            "en_": "The children are at school now.",
            "es_": "Los niños están en el colegio ahora.",
            "tr_": "Çocuklar şimdi okulda."
        },
        {
            "en": "classroom",
            "es": "la clase",
            "tr": "sınıf",
            "en_": "The classroom is very bright and clean.",
            "es_": "La clase es muy luminosa y limpia.",
            "tr_": "Sınıf çok aydınlık ve temiz."
        },
        {
            "en": "map",
            "es": "el mapa",
            "tr": "harita",
            "en_": "The teacher showed us a map of the world.",
            "es_": "El profesor nos mostró un mapa del mundo.",
            "tr_": "Öğretmen bize dünya haritası gösterdi."
        },
        {
            "en": "lesson",
            "es": "la lección",
            "tr": "ders",
            "en_": "Today's lesson is about history.",
            "es_": "La lección de hoy es sobre historia.",
            "tr_": "Bugünkü ders tarih hakkında."
        },
        {
            "en": "teacher",
            "es": "el profesor / la profesora",
            "tr": "öğretmen",
            "en_": "The teacher explained the topic clearly.",
            "es_": "El profesor explicó el tema claramente.",
            "tr_": "Öğretmen konuyu net bir şekilde anlattı."
        },
        {
            "en": "student",
            "es": "el alumno / la alumna",
            "tr": "öğrenci",
            "en_": "The students are studying for the exam.",
            "es_": "Los alumnos están estudiando para el examen.",
            "tr_": "Öğrenciler sınav için çalışıyor."
        },
        {
            "en": "easy",
            "es": "fácil",
            "tr": "kolay",
            "en_": "This exercise is easy.",
            "es_": "Este ejercicio es fácil.",
            "tr_": "Bu egzersiz kolay."
        },
        {
            "en": "difficult",
            "es": "difícil",
            "tr": "zor",
            "en_": "The test was very difficult.",
            "es_": "El examen fue muy difícil.",
            "tr_": "Sınav çok zordu."
        },
        {
            "en": "blackboard",
            "es": "el encerado",
            "tr": "kara tahta",
            "en_": "The teacher wrote on the blackboard.",
            "es_": "El profesor escribió en el encerado.",
            "tr_": "Öğretmen kara tahtaya yazdı."
        },
        {
            "en": "chalk",
            "es": "la tiza",
            "tr": "tebeşir",
            "en_": "She used white chalk to write.",
            "es_": "Ella usó tiza blanca para escribir.",
            "tr_": "Yazmak için beyaz tebeşir kullandı."
        },
        {
            "en": "satchel",
            "es": "la cartera",
            "tr": "okul çantası",
            "en_": "She packed her satchel for school.",
            "es_": "Ella preparó su cartera para la escuela.",
            "tr_": "Okul için çantasını hazırladı."
        },
        {
            "en": "notebook",
            "es": "el cuaderno",
            "tr": "defter",
            "en_": "He wrote the notes in his notebook.",
            "es_": "Él escribió las notas en su cuaderno.",
            "tr_": "Notları defterine yazdı."
        },
        {
            "en": "pencil case",
            "es": "la caja de lápices",
            "tr": "kalem kutusu",
            "en_": "Her pencil case is full of colorful pens.",
            "es_": "Su caja de lápices está llena de bolígrafos coloridos.",
            "tr_": "Kalem kutusu renkli kalemlerle dolu."
        },
        {
            "en": "pen",
            "es": "la pluma",
            "tr": "dolma kalem",
            "en_": "He prefers to write with a pen.",
            "es_": "Prefiere escribir con una pluma.",
            "tr_": "Yazmak için dolma kalemi tercih eder."
        },
        {
            "en": "ballpoint pen",
            "es": "el bolígrafo",
            "tr": "tükenmez kalem",
            "en_": "I bought a blue ballpoint pen.",
            "es_": "Compré un bolígrafo azul.",
            "tr_": "Mavi bir tükenmez kalem aldım."
        },
        {
            "en": "pencil",
            "es": "el lápiz",
            "tr": "kurşun kalem",
            "en_": "Please sharpen your pencil before the test.",
            "es_": "Por favor, afila tu lápiz antes del examen.",
            "tr_": "Lütfen sınavdan önce kurşun kalemini aç."
        },
        {
            "en": "toy",
            "es": "el juguete",
            "tr": "oyuncak",
            "en_": "The children shared their toys.",
            "es_": "Los niños compartieron sus juguetes.",
            "tr_": "Çocuklar oyuncaklarını paylaştılar."
        },
        {
            "en": "colored pencil",
            "es": "el lápiz de color",
            "tr": "boya kalemi",
            "en_": "She drew a rainbow with colored pencils.",
            "es_": "Ella dibujó un arcoíris con lápices de color.",
            "tr_": "Boya kalemleriyle gökkuşağı çizdi."
        },
        {
            "en": "picture book",
            "es": "el libro de imágenes",
            "tr": "resim kitabı",
            "en_": "He loves reading picture books.",
            "es_": "Le encanta leer libros de imágenes.",
            "tr_": "Resim kitaplarını okumayı çok sever."
        },
        {
            "en": "playground",
            "es": "el patio de juego",
            "tr": "oyun alanı",
            "en_": "The playground is full of laughter.",
            "es_": "El patio de juego está lleno de risas.",
            "tr_": "Oyun alanı kahkahalarla dolu."
        },
        {
            "en": "break",
            "es": "el descanso",
            "tr": "mola",
            "en_": "We have a 15-minute break between lessons.",
            "es_": "Tenemos un descanso de 15 minutos entre lecciones.",
            "tr_": "Dersler arasında 15 dakikalık mola var."
        },
        {
            "en": "bell",
            "es": "la campana",
            "tr": "zil",
            "en_": "The bell rings at the end of the day.",
            "es_": "La campana suena al final del día.",
            "tr_": "Gün sonunda zil çalar."
        },
        {
            "en": "coatroom [wardrobe]",
            "es": "el guardarropa",
            "tr": "kıyafet dolabı",
            "en_": "Put your coat in the coatroom.",
            "es_": "Pon tu abrigo en el guardarropa.",
            "tr_": "Kabanını kıyafet dolabına koy."
        },
        {
            "en": "course",
            "es": "el curso",
            "tr": "kurs",
            "en_": "I'm taking a Spanish course this semester.",
            "es_": "Estoy tomando un curso de español este semestre.",
            "tr_": "Bu dönem İspanyolca kursuna gidiyorum."
        },
        {
            "en": "subject",
            "es": "la asignatura",
            "tr": "konu",
            "en_": "Math is my favorite subject.",
            "es_": "Las matemáticas son mi asignatura favorita.",
            "tr_": "Matematik favori konumdur."
        },
        {
            "en": "Spanish",
            "es": "el español",
            "tr": "İspanyolca",
            "en_": "I speak Spanish fluently.",
            "es_": "Hablo español con fluidez.",
            "tr_": "İspanyolcayı akıcı konuşuyorum."
        },
        {
            "en": "French",
            "es": "el francés",
            "tr": "Fransızca",
            "en_": "She is learning French this year.",
            "es_": "Ella está aprendiendo francés este año.",
            "tr_": "Bu yıl Fransızca öğreniyor."
        },
        {
            "en": "English",
            "es": "el inglés",
            "tr": "İngilizce",
            "en_": "English is widely spoken worldwide.",
            "es_": "El inglés se habla ampliamente en todo el mundo.",
            "tr_": "İngilizce dünya genelinde yaygın olarak konuşulur."
        },
        {
            "en": "German",
            "es": "el alemán",
            "tr": "Almanca",
            "en_": "I am learning German this year.",
            "es_": "Estoy aprendiendo alemán este año.",
            "tr_": "Bu yıl Almanca öğreniyorum."
        },
        {
            "en": "math",
            "es": "las matemáticas",
            "tr": "matematik",
            "en_": "Math is my favorite subject.",
            "es_": "Las matemáticas son mi asignatura favorita.",
            "tr_": "Matematik favori dersimdir."
        },
        {
            "en": "physics",
            "es": "la física",
            "tr": "fizik",
            "en_": "Physics helps us understand the universe.",
            "es_": "La física nos ayuda a entender el universo.",
            "tr_": "Fizik evreni anlamamıza yardımcı olur."
        },
        {
            "en": "chemistry",
            "es": "la química",
            "tr": "kimya",
            "en_": "Chemistry experiments are very interesting.",
            "es_": "Los experimentos de química son muy interesantes.",
            "tr_": "Kimya deneyleri çok ilginçtir."
        },
        {
            "en": "biology",
            "es": "la biología",
            "tr": "biyoloji",
            "en_": "Biology teaches about living organisms.",
            "es_": "La biología enseña sobre los organismos vivos.",
            "tr_": "Biyoloji, canlı organizmaları öğretir."
        },
        {
            "en": "history",
            "es": "la historia",
            "tr": "tarih",
            "en_": "History class is very informative.",
            "es_": "La clase de historia es muy informativa.",
            "tr_": "Tarih dersi çok bilgilendiricidir."
        },
        {
            "en": "geography",
            "es": "la geografía",
            "tr": "coğrafya",
            "en_": "Geography helps us learn about the Earth.",
            "es_": "La geografía nos ayuda a aprender sobre la Tierra.",
            "tr_": "Coğrafya, Dünya'yı öğrenmemize yardımcı olur."
        },
        {
            "en": "music",
            "es": "la música",
            "tr": "müzik",
            "en_": "Music class is my favorite.",
            "es_": "La clase de música es mi favorita.",
            "tr_": "Müzik dersi favorimdir."
        },
        {
            "en": "computer science",
            "es": "la informática",
            "tr": "bilişim",
            "en_": "Computer science is a fast-growing field.",
            "es_": "La informática es un campo de rápido crecimiento.",
            "tr_": "Bilişim hızlı büyüyen bir alandır."
        },
        {
            "en": "gymnastics",
            "es": "la gimnasia",
            "tr": "jimnastik",
            "en_": "She practices gymnastics every day.",
            "es_": "Ella practica gimnasia todos los días.",
            "tr_": "Her gün jimnastik yapıyor."
        },
        {
            "en": "letter",
            "es": "la letra",
            "tr": "harf",
            "en_": "The letter A is the first in the alphabet.",
            "es_": "La letra A es la primera en el alfabeto.",
            "tr_": "A harfi, alfabedeki ilk harftir."
        },
        {
            "en": "alphabet",
            "es": "el alfabeto",
            "tr": "alfabe",
            "en_": "Children learn the alphabet in kindergarten.",
            "es_": "Los niños aprenden el alfabeto en el jardín de infancia.",
            "tr_": "Çocuklar anaokulunda alfabeyi öğrenir."
        },
        {
            "en": "grammar",
            "es": "la gramática",
            "tr": "gramer",
            "en_": "Grammar is important for writing correctly.",
            "es_": "La gramática es importante para escribir correctamente.",
            "tr_": "Doğru yazmak için gramer önemlidir."
        },
        {
            "en": "spelling",
            "es": "la ortografía",
            "tr": "yazım",
            "en_": "Spelling mistakes are common in early learning.",
            "es_": "Los errores de ortografía son comunes en el aprendizaje temprano.",
            "tr_": "Yazım hataları erken öğrenmede yaygındır."
        },
        {
            "en": "capital letter",
            "es": "la mayúscula",
            "tr": "büyük harf",
            "en_": "Start sentences with a capital letter.",
            "es_": "Empieza las oraciones con una mayúscula.",
            "tr_": "Cümlelere büyük harfle başla."
        },
        {
            "en": "word",
            "es": "la palabra",
            "tr": "kelime",
            "en_": "I learned a new word today.",
            "es_": "Aprendí una palabra nueva hoy.",
            "tr_": "Bugün yeni bir kelime öğrendim."
        },
        {
            "en": "sentence",
            "es": "la frase",
            "tr": "cümle",
            "en_": "This sentence is easy to understand.",
            "es_": "Esta frase es fácil de entender.",
            "tr_": "Bu cümle anlaşılması kolaydır."
        },
        {
            "en": "period",
            "es": "el punto",
            "tr": "nokta",
            "en_": "Put a period at the end of the sentence.",
            "es_": "Pon un punto al final de la frase.",
            "tr_": "Cümlenin sonuna nokta koy."
        },
        {
            "en": "plus",
            "es": "más",
            "tr": "artı",
            "en_": "Two plus two equals four.",
            "es_": "Dos más dos son cuatro.",
            "tr_": "İki artı iki dört eder.",
            "type": "other"
        },
        {
            "en": "minus",
            "es": "menos",
            "tr": "eksi",
            "en_": "Ten minus three equals seven.",
            "es_": "Diez menos tres son siete.",
            "tr_": "On eksi üç yedi eder.",
            "type": "other"
        },
        {
            "en": "times [multiplied by]",
            "es": "por",
            "tr": "kere",
            "en_": "Seven times eight is fifty-six.",
            "es_": "Siete por ocho son cincuenta y seis.",
            "tr_": "Yedi kere sekiz elli altı eder.",
            "type": "other"
        },
        {
            "en": "divided by",
            "es": "entre",
            "tr": "bölü",
            "en_": "Twenty divided by five equals four.",
            "es_": "Veinte dividido entre cinco son cuatro.",
            "tr_": "Yirmi beşe bölü dört eder.",
            "type": "other"
        },
        {
            "en": "computer",
            "es": "la computadora",
            "tr": "bilgisayar",
            "en_": "I use my computer every day.",
            "es_": "Uso mi computadora todos los días.",
            "tr_": "Her gün bilgisayarımı kullanırım."
        },
        {
            "en": "keyboard",
            "es": "el teclado",
            "tr": "klavye",
            "en_": "The keyboard is wireless.",
            "es_": "El teclado es inalámbrico.",
            "tr_": "Klavye kablosuzdur."
        },
        {
            "en": "calculator",
            "es": "la calculadora",
            "tr": "hesap makinesi",
            "en_": "Use a calculator to check your work.",
            "es_": "Usa una calculadora para revisar tu trabajo.",
            "tr_": "Çalışmanı kontrol etmek için hesap makinesi kullan."
        },
        {
            "en": "fraction",
            "es": "la fracción",
            "tr": "kesir",
            "en_": "One-half is a common fraction.",
            "es_": "Un medio es una fracción común.",
            "tr_": "Yarım yaygın bir kesirdir."
        },
        {
            "en": "quarter",
            "es": "cuarto",
            "tr": "çeyrek",
            "en_": "A quarter of the cake is missing.",
            "es_": "Falta un cuarto del pastel.",
            "tr_": "Pasta çeyreği eksik."
        },
        {
            "en": "half",
            "es": "medio",
            "tr": "yarım",
            "en_": "I ate half of the sandwich.",
            "es_": "Comí la mitad del sándwich.",
            "tr_": "Sandviçin yarısını yedim."
        },
        {
            "en": "one third",
            "es": "una tercera parte",
            "tr": "üçte bir",
            "en_": "One third of the students passed the test.",
            "es_": "Una tercera parte de los estudiantes aprobaron el examen.",
            "tr_": "Öğrencilerin üçte biri sınavı geçti."
        },
        {
            "en": "student",
            "es": "el estudiante / la estudiante",
            "tr": "öğrenci",
            "en_": "The student studies hard every day.",
            "es_": "El estudiante estudia mucho todos los días.",
            "tr_": "Öğrenci her gün çok çalışıyor."
        },
        {
            "en": "exam",
            "es": "el examen",
            "tr": "sınav",
            "en_": "The exam was very difficult.",
            "es_": "El examen fue muy difícil.",
            "tr_": "Sınav çok zordu."
        },
        {
            "en": "pen",
            "es": "el bolígrafo",
            "tr": "kalem",
            "en_": "Can I borrow your pen?",
            "es_": "¿Me prestas tu bolígrafo?",
            "tr_": "Kalemini ödünç alabilir miyim?"
        },
        {
            "en": "pencil",
            "es": "el lápiz",
            "tr": "kurşun kalem",
            "en_": "I need a pencil to write.",
            "es_": "Necesito un lápiz para escribir.",
            "tr_": "Yazmak için bir kurşun kaleme ihtiyacım var."
        },
        {
            "en": "book",
            "es": "el libro",
            "tr": "kitap",
            "en_": "I am reading a good book.",
            "es_": "Estoy leyendo un buen libro.",
            "tr_": "İyi bir kitap okuyorum."
        },
    ],
    "Shape and sizes" : [
        {
            "en": "to measure",
            "es": "medir",
            "tr": "ölçmek",
            "en_": "You need a ruler to measure it.",
            "es_": "Necesitas una regla para medirlo.",
            "tr_": "Bunu ölçmek için cetvel gerekir."
        },
        {
            "en": "shape",
            "es": "la forma",
            "tr": "şekil",
            "en_": "What shape is this object?",
            "es_": "¿Qué forma tiene este objeto?",
            "tr_": "Bu nesne ne şekildedir?"
        },
        {
            "en": "circle",
            "es": "el círculo",
            "tr": "çember [daire]",
            "en_": "He drew a perfect circle.",
            "es_": "Dibujó un círculo perfecto.",
            "tr_": "Mükemmel bir daire çizdi."
        },
        {
            "en": "square",
            "es": "el cuadrado",
            "tr": "kare",
            "en_": "A square has four equal sides.",
            "es_": "Un cuadrado tiene cuatro lados iguales.",
            "tr_": "Bir karenin dört eşit kenarı vardır."
        },
        {
            "en": "triangle",
            "es": "el triángulo",
            "tr": "üçgen",
            "en_": "She cut the paper into a triangle.",
            "es_": "Cortó el papel en forma de triángulo.",
            "tr_": "Kağıdı üçgen şeklinde kesti."
        },
        {
            "en": "cone",
            "es": "el cono",
            "tr": "koni",
            "en_": "An ice cream cone has a cone shape.",
            "es_": "Un helado tiene forma de cono.",
            "tr_": "Bir dondurma koni şeklindedir."
        },
        {
            "en": "rectangle",
            "es": "el rectángulo",
            "tr": "dikdörtgen",
            "en_": "This table is shaped like a rectangle.",
            "es_": "Esta mesa tiene forma de rectángulo.",
            "tr_": "Bu masa dikdörtgen şeklindedir."
        },
        {
            "en": "enormous",
            "es": "enorme",
            "tr": "kocaman",
            "en_": "The elephant is an enormous animal.",
            "es_": "El elefante es un animal enorme.",
            "tr_": "Fil kocaman bir hayvandır."
        },
        {
            "en": "big",
            "es": "grande",
            "tr": "büyük",
            "en_": "They live in a big house.",
            "es_": "Viven en una casa grande.",
            "tr_": "Büyük bir evde yaşıyorlar."
        },
        {
            "en": "small",
            "es": "pequeño(a)",
            "tr": "küçük",
            "en_": "She has small hands.",
            "es_": "Tiene las manos pequeñas.",
            "tr_": "Küçük elleri var."
        },
        {
            "en": "tiny",
            "es": "diminuto(a)",
            "tr": "minik",
            "en_": "Look at this tiny insect!",
            "es_": "¡Mira este insecto diminuto!",
            "tr_": "Bu minik böceğe bak!"
        },
        {
            "en": "height",
            "es": "la altura",
            "tr": "yükseklik",
            "en_": "What is the height of the building?",
            "es_": "¿Cuál es la altura del edificio?",
            "tr_": "Binanın yüksekliği nedir?"
        },
        {
            "en": "meter",
            "es": "el metro",
            "tr": "metre",
            "en_": "The room is five meters wide.",
            "es_": "La habitación tiene cinco metros de ancho.",
            "tr_": "Oda beş metre genişliğindedir."
        },
        {
            "en": "centimeter",
            "es": "el centímetro",
            "tr": "santimetre",
            "en_": "This pencil is fifteen centimeters long.",
            "es_": "Este lápiz mide quince centímetros.",
            "tr_": "Bu kalem on beş santimetre uzunluğunda."
        },
        {
            "en": "length",
            "es": "el largo",
            "tr": "uzunluk",
            "en_": "What is the length of the rope?",
            "es_": "¿Cuál es el largo de la cuerda?",
            "tr_": "İpin uzunluğu nedir?"
        },
        {
            "en": "width",
            "es": "el ancho",
            "tr": "genişlik",
            "en_": "We measured the width of the door.",
            "es_": "Medimos el ancho de la puerta.",
            "tr_": "Kapının genişliğini ölçtük."
        },
        {
            "en": "volume",
            "es": "el volumen",
            "tr": "hacim",
            "en_": "Calculate the volume of the box.",
            "es_": "Calcula el volumen de la caja.",
            "tr_": "Kutunun hacmini hesapla."
        },
        {
            "en": "liter",
            "es": "el litro",
            "tr": "litre",
            "en_": "I drank one liter of water.",
            "es_": "Bebí un litro de agua.",
            "tr_": "Bir litre su içtim."
        },
        {
            "en": "half a liter",
            "es": "medio litro",
            "tr": "yarım litre",
            "en_": "Add half a liter of milk.",
            "es_": "Agrega medio litro de leche.",
            "tr_": "Yarım litre süt ekle."
        },
        {
            "en": "weight",
            "es": "el peso",
            "tr": "ağırlık",
            "en_": "The weight of this package is 10 kilos.",
            "es_": "El peso de este paquete es de 10 kilos.",
            "tr_": "Bu paketin ağırlığı 10 kilo."
        },
        {
            "en": "kilo",
            "es": "el kilo",
            "tr": "kilo",
            "en_": "I bought two kilos of apples.",
            "es_": "Compré dos kilos de manzanas.",
            "tr_": "İki kilo elma aldım."
        },
        {
            "en": "half a kilo",
            "es": "medio kilo",
            "tr": "yarım kilo",
            "en_": "She bought half a kilo of rice.",
            "es_": "Compró medio kilo de arroz.",
            "tr_": "Yarım kilo pirinç aldı."
        }
    ],
    "Numbers" : [
        {
            "en": "zero",
            "es": "cero",
            "tr": "sıfır",
            "en_": "He scored zero goals in the match.",
            "es_": "Marcó cero goles en el partido.",
            "tr_": "Maçta sıfır gol attı."
        },
        {
            "en": "one",
            "es": "uno",
            "tr": "bir",
            "en_": "I have one brother.",
            "es_": "Tengo un hermano.",
            "tr_": "Bir erkek kardeşim var."
        },
        {
            "en": "two",
            "es": "dos",
            "tr": "iki",
            "en_": "She bought two books.",
            "es_": "Compró dos libros.",
            "tr_": "İki kitap aldı."
        },
        {
            "en": "three",
            "es": "tres",
            "tr": "üç",
            "en_": "We have three cats.",
            "es_": "Tenemos tres gatos.",
            "tr_": "Üç kedimiz var."
        },
        {
            "en": "four",
            "es": "cuatro",
            "tr": "dört",
            "en_": "The classroom has four windows.",
            "es_": "El aula tiene cuatro ventanas.",
            "tr_": "Sınıfta dört pencere var."
        },
        {
            "en": "five",
            "es": "cinco",
            "tr": "beş",
            "en_": "They waited for five minutes.",
            "es_": "Esperaron cinco minutos.",
            "tr_": "Beş dakika beklediler."
        },
        {
            "en": "six",
            "es": "seis",
            "tr": "altı",
            "en_": "There are six chairs around the table.",
            "es_": "Hay seis sillas alrededor de la mesa.",
            "tr_": "Masada altı sandalye var."
        },
        {
            "en": "seven",
            "es": "siete",
            "tr": "yedi",
            "en_": "He wakes up at seven o'clock.",
            "es_": "Se despierta a las siete.",
            "tr_": "Saat yedide uyanır."
        },
        {
            "en": "eight",
            "es": "ocho",
            "tr": "sekiz",
            "en_": "The school starts at eight.",
            "es_": "La escuela empieza a las ocho.",
            "tr_": "Okul sekizde başlar."
        },
        {
            "en": "nine",
            "es": "nueve",
            "tr": "dokuz",
            "en_": "She has nine pencils.",
            "es_": "Tiene nueve lápices.",
            "tr_": "Dokuz kalemi var."
        },
        {
            "en": "ten",
            "es": "diez",
            "tr": "on",
            "en_": "He can count to ten.",
            "es_": "Puede contar hasta diez.",
            "tr_": "Ona kadar sayabiliyor."
        },
        {
            "en": "eleven",
            "es": "once",
            "tr": "on bir",
            "en_": "The train arrives at eleven.",
            "es_": "El tren llega a las once.",
            "tr_": "Tren saat on birde geliyor."
        },
        {
            "en": "twelve",
            "es": "doce",
            "tr": "on iki",
            "en_": "We ate lunch at twelve.",
            "es_": "Almorzamos a las doce.",
            "tr_": "Öğle yemeğini saat on ikide yedik."
        },
        {
            "en": "thirteen",
            "es": "trece",
            "tr": "on üç",
            "en_": "She is thirteen years old.",
            "es_": "Tiene trece años.",
            "tr_": "On üç yaşında."
        },
        {
            "en": "fourteen",
            "es": "catorce",
            "tr": "on dört",
            "en_": "There are fourteen students in the class.",
            "es_": "Hay catorce estudiantes en la clase.",
            "tr_": "Sınıfta on dört öğrenci var."
        },
        {
            "en": "fifteen",
            "es": "quince",
            "tr": "on beş",
            "en_": "He got fifteen marks on the test.",
            "es_": "Obtuvo quince puntos en el examen.",
            "tr_": "Sınavdan on beş puan aldı."
        },
        {
            "en": "sixteen",
            "es": "dieciséis",
            "tr": "on altı",
            "en_": "She will turn sixteen next week.",
            "es_": "Cumplirá dieciséis la próxima semana.",
            "tr_": "Gelecek hafta on altı yaşına girecek."
        },
        {
            "en": "seventeen",
            "es": "diecisiete",
            "tr": "on yedi",
            "en_": "They have been married for seventeen years.",
            "es_": "Han estado casados durante diecisiete años.",
            "tr_": "On yedi yıldır evliler."
        },
        {
            "en": "eighteen",
            "es": "dieciocho",
            "tr": "on sekiz",
            "en_": "He needs eighteen dollars.",
            "es_": "Necesita dieciocho dólares.",
            "tr_": "On sekiz dolara ihtiyacı var."
        },
        {
            "en": "nineteen",
            "es": "diecinueve",
            "tr": "on dokuz",
            "en_": "She counted to nineteen.",
            "es_": "Contó hasta diecinueve.",
            "tr_": "On dokuza kadar saydı."
        },
        {
            "en": "twenty",
            "es": "veinte",
            "tr": "yirmi",
            "en_": "He bought twenty apples.",
            "es_": "Compró veinte manzanas.",
            "tr_": "Yirmi elma aldı."
        },
        {
            "en": "twenty-one",
            "es": "veintiuno",
            "tr": "yirmi bir",
            "en_": "She is twenty-one years old.",
            "es_": "Tiene veintiún años.",
            "tr_": "Yirmi bir yaşında."
        },
        {
            "en": "twenty-two",
            "es": "veintidós",
            "tr": "yirmi iki",
            "en_": "They have twenty-two books.",
            "es_": "Tienen veintidós libros.",
            "tr_": "Yirmi iki kitapları var."
        },
        {
            "en": "thirty",
            "es": "treinta",
            "tr": "otuz",
            "en_": "There are thirty students in the class.",
            "es_": "Hay treinta estudiantes en la clase.",
            "tr_": "Sınıfta otuz öğrenci var."
        },
        {
            "en": "forty",
            "es": "cuarenta",
            "tr": "kırk",
            "en_": "He waited for forty minutes.",
            "es_": "Esperó cuarenta minutos.",
            "tr_": "Kırk dakika bekledi."
        },
        {
            "en": "fifty",
            "es": "cincuenta",
            "tr": "elli",
            "en_": "She scored fifty points.",
            "es_": "Obtuvo cincuenta puntos.",
            "tr_": "Elli puan aldı."
        },
        {
            "en": "sixty",
            "es": "sesenta",
            "tr": "altmış",
            "en_": "There are sixty chairs in the hall.",
            "es_": "Hay sesenta sillas en el salón.",
            "tr_": "Salonda altmış sandalye var."
        },
        {
            "en": "seventy",
            "es": "setenta",
            "tr": "yetmiş",
            "en_": "The bag weighs seventy kilos.",
            "es_": "La bolsa pesa setenta kilos.",
            "tr_": "Çanta yetmiş kilo ağırlığında."
        },
        {
            "en": "eighty",
            "es": "ochenta",
            "tr": "seksen",
            "en_": "My grandmother is eighty years old.",
            "es_": "Mi abuela tiene ochenta años.",
            "tr_": "Büyükannem seksen yaşında."
        },
        {
            "en": "ninety",
            "es": "noventa",
            "tr": "doksan",
            "en_": "He ran ninety meters.",
            "es_": "Corrió noventa metros.",
            "tr_": "Doksan metre koştu."
        },
        {
            "en": "hundred",
            "es": "cien",
            "tr": "yüz",
            "en_": "There are one hundred people at the concert.",
            "es_": "Hay cien personas en el concierto.",
            "tr_": "Konserde yüz kişi var."
        },
        {
            "en": "thousand",
            "es": "mil",
            "tr": "bin",
            "en_": "The stadium holds one thousand fans.",
            "es_": "El estadio tiene capacidad para mil aficionados.",
            "tr_": "Stadyum bin taraftar alıyor."
        },
        {
            "en": "million",
            "es": "un millón",
            "tr": "milyon",
            "en_": "The city has one million inhabitants.",
            "es_": "La ciudad tiene un millón de habitantes.",
            "tr_": "Şehirde bir milyon insan yaşıyor."
        }
    ],
    "Sport" : [
        {
            "en": "to keep fit",
            "es": "mantenerse en forma",
            "tr": "formda kalmak",
            "en_": "He goes to the gym to keep fit.",
            "es_": "Él va al gimnasio para mantenerse en forma.",
            "tr_": "Formda kalmak için spor salonuna gider."
        },
        {
            "en": "to jog",
            "es": "hacer footing",
            "tr": "koşu yapmak",
            "en_": "I jog every morning in the park.",
            "es_": "Hago footing cada mañana en el parque.",
            "tr_": "Her sabah parkta koşu yaparım."
        },
        {
            "en": "to train",
            "es": "entrenarse",
            "tr": "antrenman yapmak",
            "en_": "They train hard before the match.",
            "es_": "Ellos se entrenan duro antes del partido.",
            "tr_": "Maçtan önce sıkı antrenman yaparlar."
        },
        {
            "en": "to play tennis",
            "es": "jugar al tenis",
            "tr": "tenis oynamak",
            "en_": "We play tennis every weekend.",
            "es_": "Jugamos al tenis cada fin de semana.",
            "tr_": "Her hafta sonu tenis oynarız."
        },
        {
            "en": "to serve",
            "es": "servir",
            "tr": "servis atmak",
            "en_": "He serves the ball very fast.",
            "es_": "Él sirve la pelota muy rápido.",
            "tr_": "Topa çok hızlı servis atar."
        },
        {
            "en": "to play golf",
            "es": "jugar al golf",
            "tr": "golf oynamak",
            "en_": "They play golf every Sunday.",
            "es_": "Juegan al golf todos los domingos.",
            "tr_": "Her pazar golf oynarlar."
        },
        {
            "en": "to play football",
            "es": "jugar al fútbol",
            "tr": "futbol oynamak",
            "en_": "The kids play football after school.",
            "es_": "Los niños juegan al fútbol después de la escuela.",
            "tr_": "Çocuklar okuldan sonra futbol oynar."
        },
        {
            "en": "to score a goal",
            "es": "marcar un gol",
            "tr": "gol atmak",
            "en_": "She scored a goal in the final minute.",
            "es_": "Ella marcó un gol en el último minuto.",
            "tr_": "Son dakikada gol attı."
        },
        {
            "en": "to swim",
            "es": "nadar",
            "tr": "yüzmek",
            "en_": "I like to swim in the sea.",
            "es_": "Me gusta nadar en el mar.",
            "tr_": "Denizde yüzmeyi severim."
        },
        {
            "en": "to swim the backstroke",
            "es": "hacer la brazada de espalda",
            "tr": "sırtüstü yüzmek",
            "en_": "He learned to swim the backstroke last year.",
            "es_": "Aprendió a hacer la brazada de espalda el año pasado.",
            "tr_": "Geçen yıl sırtüstü yüzmeyi öğrendi."
        },
        {
            "en": "to swim breaststroke",
            "es": "hacer la braza de pecho",
            "tr": "kurbağalama yüzmek",
            "en_": "She swims breaststroke very well.",
            "es_": "Ella hace la braza de pecho muy bien.",
            "tr_": "Kurbağalama yüzmeyi çok iyi bilir."
        },
        {
            "en": "to dive",
            "es": "tirarse",
            "tr": "atlamak",
            "en_": "He dived from the highest platform.",
            "es_": "Se tiró desde la plataforma más alta.",
            "tr_": "En yüksek platformdan atladı."
        },
        {
            "en": "running shoes",
            "es": "los zapatos de corredor",
            "tr": "koşu ayakkabısı",
            "en_": "She bought new running shoes yesterday.",
            "es_": "Ella compró nuevos zapatos de corredor ayer.",
            "tr_": "Dün yeni koşu ayakkabısı aldı."
        },
        {
            "en": "tracksuit",
            "es": "el traje de entrenamiento",
            "tr": "eşofman takımı",
            "en_": "He wears a tracksuit to the gym.",
            "es_": "Él lleva un traje de entrenamiento al gimnasio.",
            "tr_": "Spor salonuna eşofman takımı giyerek gider."
        },
        {
            "en": "tennis court",
            "es": "la pista de tenis",
            "tr": "tenis kortu",
            "en_": "The tennis court is next to the swimming pool.",
            "es_": "La pista de tenis está al lado de la piscina.",
            "tr_": "Tenis kortu yüzme havuzunun yanındadır."
        },
        {
            "en": "tennis player",
            "es": "el tenista / la tenista",
            "tr": "tenisçi",
            "en_": "She is a professional tennis player.",
            "es_": "Ella es una tenista profesional.",
            "tr_": "O profesyonel bir tenisçidir."
        },
        {
            "en": "in",
            "es": "dentro",
            "tr": "içeri",
            "en_": "The ball is in.",
            "es_": "La pelota está dentro.",
            "tr_": "Top içeri düştü.",
            "type": "adverb"
        },
        {
            "en": "out",
            "es": "fuera",
            "tr": "dışarı",
            "en_": "The ball is out.",
            "es_": "La pelota está fuera.",
            "tr_": "Top dışarı çıktı.",
            "type": "adverb"
        },
        {
            "en": "net",
            "es": "la red",
            "tr": "net",
            "en_": "The ball hit the net.",
            "es_": "La pelota golpeó la red.",
            "tr_": "Top fileye çarptı."
        },
        {
            "en": "ball",
            "es": "la pelota",
            "tr": "top",
            "en_": "Can you pass me the ball?",
            "es_": "¿Puedes pasarme la pelota?",
            "tr_": "Bana topu uzatır mısın?"
        },
        {
            "en": "racket",
            "es": "la raqueta",
            "tr": "raket",
            "en_": "He broke his tennis racket.",
            "es_": "Él rompió su raqueta de tenis.",
            "tr_": "Tenis raketini kırdı."
        },
        {
            "en": "golf club",
            "es": "el palo de golf",
            "tr": "golf kulübü",
            "en_": "He forgot his golf club at home.",
            "es_": "Olvidó su palo de golf en casa.",
            "tr_": "Golf kulübünü evde unuttu."
        },
        {
            "en": "referee",
            "es": "el árbitro / la árbitra",
            "tr": "hakem",
            "en_": "The referee stopped the game.",
            "es_": "El árbitro detuvo el partido.",
            "tr_": "Hakem oyunu durdurdu."
        },
        {
            "en": "team",
            "es": "el equipo",
            "tr": "takım [ekip]",
            "en_": "Our team won the championship.",
            "es_": "Nuestro equipo ganó el campeonato.",
            "tr_": "Takımımız şampiyonluğu kazandı."
        },
        {
            "en": "soccer field",
            "es": "el campo de fútbol",
            "tr": "futbol sahası",
            "en_": "The soccer field is wet after the rain.",
            "es_": "El campo de fútbol está mojado después de la lluvia.",
            "tr_": "Yağmurdan sonra futbol sahası ıslak."
        },
        {
            "en": "goalkeeper",
            "es": "el portero",
            "tr": "kaleci",
            "en_": "The goalkeeper saved the penalty.",
            "es_": "El portero paró el penalti.",
            "tr_": "Kaleci penaltıyı kurtardı."
        },
        {
            "en": "ball [soccer ball]",
            "es": "el balón",
            "tr": "futbol topu",
            "en_": "He kicked the soccer ball into the goal.",
            "es_": "Pateó el balón hacia la portería.",
            "tr_": "Futbol topunu kaleye vurdu."
        },
        {
            "en": "swimming pool",
            "es": "la piscina",
            "tr": "yüzme havuzu",
            "en_": "The hotel has a large swimming pool.",
            "es_": "El hotel tiene una piscina grande.",
            "tr_": "Otelin büyük bir yüzme havuzu var."
        },
        {
            "en": "trampoline [diving board]",
            "es": "el trampolín",
            "tr": "trambolin",
            "en_": "The child jumped off the trampoline.",
            "es_": "El niño saltó del trampolín.",
            "tr_": "Çocuk trambolinden atladı."
        },
        {
            "en": "horse racing",
            "es": "las carreras de caballos",
            "tr": "at yarışı",
            "en_": "Horse racing is popular in many countries.",
            "es_": "Las carreras de caballos son populares en muchos países.",
            "tr_": "At yarışı birçok ülkede popülerdir."
        },
        {
            "en": "car racing",
            "es": "las carreras de coches",
            "tr": "araba yarışı",
            "en_": "He dreams of winning a car racing championship.",
            "es_": "Sueña con ganar un campeonato de carreras de coches.",
            "tr_": "Bir araba yarışı şampiyonluğu kazanmayı hayal ediyor."
        },
        {
            "en": "gymnastics",
            "es": "la gimnasia",
            "tr": "jimnastik",
            "en_": "She practices gymnastics every afternoon.",
            "es_": "Ella practica gimnasia todas las tardes.",
            "tr_": "Her öğleden sonra jimnastik yapar."
        },
        {
            "en": "athletics",
            "es": "el atletismo",
            "tr": "atletizm",
            "en_": "Athletics is part of the Olympic Games.",
            "es_": "El atletismo es parte de los Juegos Olímpicos.",
            "tr_": "Atletizm, Olimpiyat Oyunlarının bir parçasıdır."
        }
    ],
    "Celebrations" : [
        {
            "en": "to invite",
            "es": "invitar",
            "tr": "davet etmek",
            "en_": "We invited all our friends to the wedding.",
            "es_": "Invitamos a todos nuestros amigos a la boda.",
            "tr_": "Tüm arkadaşlarımızı düğüne davet ettik."
        },
        {
            "en": "to have fun [to enjoy oneself]",
            "es": "divertirse",
            "tr": "eğlenmek",
            "en_": "The kids had a lot of fun at the party.",
            "es_": "Los niños se divirtieron mucho en la fiesta.",
            "tr_": "Çocuklar partide çok eğlendi."
        },
        {
            "en": "to start dating",
            "es": "hacerse novios",
            "tr": "sevgili olmak",
            "en_": "They started dating last year.",
            "es_": "Se hicieron novios el año pasado.",
            "tr_": "Geçen yıl sevgili oldular."
        },
        {
            "en": "to get married",
            "es": "casarse",
            "tr": "evlenmek",
            "en_": "They are going to get married in June.",
            "es_": "Van a casarse en junio.",
            "tr_": "Haziran ayında evlenecekler."
        },
        {
            "en": "to congratulate",
            "es": "felicitar",
            "tr": "tebrik etmek",
            "en_": "I congratulated her on her promotion.",
            "es_": "La felicité por su ascenso.",
            "tr_": "Terfisi için onu tebrik ettim."
        },
        {
            "en": "to be happy",
            "es": "ser feliz",
            "tr": "mutlu olmak",
            "en_": "They are happy with their new home.",
            "es_": "Son felices con su nueva casa.",
            "tr_": "Yeni evlerinden dolayı mutlular."
        },
        {
            "en": "to give as a gift",
            "es": "regalar",
            "tr": "hediye vermek",
            "en_": "She gave me a book as a gift.",
            "es_": "Me regaló un libro.",
            "tr_": "Bana bir kitap hediye etti."
        },
        {
            "en": "to receive",
            "es": "recibir",
            "tr": "almak",
            "en_": "He received many presents for his birthday.",
            "es_": "Recibió muchos regalos por su cumpleaños.",
            "tr_": "Doğum günü için çok hediye aldı."
        },
        {
            "en": "to thank",
            "es": "dar las gracias",
            "tr": "teşekkür etmek",
            "en_": "I thanked her for the wonderful gift.",
            "es_": "Le di las gracias por el regalo maravilloso.",
            "tr_": "Harika hediye için ona teşekkür ettim."
        },
        {
            "en": "to celebrate",
            "es": "celebrar",
            "tr": "kutlamak",
            "en_": "They celebrate their anniversary every year.",
            "es_": "Celebran su aniversario cada año.",
            "tr_": "Her yıl yıldönümlerini kutlarlar."
        },
        {
            "en": "birthday",
            "es": "el cumpleaños",
            "tr": "doğum günü",
            "en_": "Her birthday is in July.",
            "es_": "Su cumpleaños es en julio.",
            "tr_": "Doğum günü Temmuz ayında."
        },
        {
            "en": "party",
            "es": "la fiesta",
            "tr": "parti [eğlence]",
            "en_": "They are having a party tonight.",
            "es_": "Tienen una fiesta esta noche.",
            "tr_": "Bu gece bir parti veriyorlar."
        },
        {
            "en": "balloon",
            "es": "el globo",
            "tr": "balon",
            "en_": "The room was full of colorful balloons.",
            "es_": "La habitación estaba llena de globos de colores.",
            "tr_": "Oda rengarenk balonlarla doluydu."
        },
        {
            "en": "Congratulations!",
            "es": "¡Felicidades!",
            "tr": "Tebrikler!",
            "en_": "Congratulations on your success!",
            "es_": "¡Felicidades por tu éxito!",
            "tr_": "Başarın için tebrikler!"
        },
        {
            "en": "cake",
            "es": "la tarta",
            "tr": "turta",
            "en_": "She baked a chocolate cake for the party.",
            "es_": "Ella horneó una tarta de chocolate para la fiesta.",
            "tr_": "Parti için çikolatalı bir turta yaptı."
        },
        {
            "en": "candle",
            "es": "la vela",
            "tr": "mum",
            "en_": "There were ten candles on the cake.",
            "es_": "Había diez velas en la tarta.",
            "tr_": "Pastanın üstünde on mum vardı."
        },
        {
            "en": "present [gift]",
            "es": "el regalo",
            "tr": "hediye",
            "en_": "I bought a present for her birthday.",
            "es_": "Compré un regalo para su cumpleaños.",
            "tr_": "Doğum günü için bir hediye aldım."
        },
        {
            "en": "card",
            "es": "la tarjeta",
            "tr": "tebrik kartı",
            "en_": "He wrote a message in the birthday card.",
            "es_": "Escribió un mensaje en la tarjeta de cumpleaños.",
            "tr_": "Doğum günü kartına bir mesaj yazdı."
        },
        {
            "en": "wrapping",
            "es": "la envoltura",
            "tr": "ambalaj",
            "en_": "The gift was wrapped in colorful wrapping paper.",
            "es_": "El regalo estaba envuelto en papel de colores.",
            "tr_": "Hediye renkli ambalaj kağıdına sarılmıştı."
        },
        {
            "en": "Easter",
            "es": "Pascua",
            "tr": "Paskalya",
            "en_": "We decorate eggs for Easter.",
            "es_": "Decoramos huevos para Pascua.",
            "tr_": "Paskalya için yumurtaları süslüyoruz."
        },
        {
            "en": "Christmas",
            "es": "las Navidades",
            "tr": "Noel",
            "en_": "I love spending Christmas with my family.",
            "es_": "Me encanta pasar las Navidades con mi familia.",
            "tr_": "Noeli ailemle geçirmeyi çok seviyorum."
        },
        {
            "en": "Christmas Day",
            "es": "el Día de Navidad",
            "tr": "Noel Günü",
            "en_": "We exchange gifts on Christmas Day.",
            "es_": "Intercambiamos regalos el Día de Navidad.",
            "tr_": "Noel Günü hediyeler değiş tokuş ederiz."
        },
        {
            "en": "Christmas tree",
            "es": "el árbol de Navidad",
            "tr": "Noel ağacı",
            "en_": "They decorated the Christmas tree together.",
            "es_": "Decoraron el árbol de Navidad juntos.",
            "tr_": "Noel ağacını birlikte süslediler."
        },
        {
            "en": "wedding",
            "es": "la boda",
            "tr": "düğün",
            "en_": "The wedding will take place next month.",
            "es_": "La boda será el mes que viene.",
            "tr_": "Düğün gelecek ay olacak."
        },
        {
            "en": "bridegroom",
            "es": "el novio",
            "tr": "damat",
            "en_": "The bridegroom looked very nervous.",
            "es_": "El novio estaba muy nervioso.",
            "tr_": "Damat çok gergin görünüyordu."
        },
        {
            "en": "bride",
            "es": "la novia",
            "tr": "gelin",
            "en_": "The bride wore a beautiful dress.",
            "es_": "La novia llevaba un vestido hermoso.",
            "tr_": "Gelin güzel bir elbise giymişti."
        },
        {
            "en": "guest",
            "es": "el invitado / la invitada",
            "tr": "misafir",
            "en_": "We welcomed many guests to the party.",
            "es_": "Recibimos a muchos invitados en la fiesta.",
            "tr_": "Partiye çok misafir geldi."
        },
        {
            "en": "bouquet",
            "es": "el ramo de flores",
            "tr": "çiçek buketi",
            "en_": "She received a beautiful bouquet of flowers.",
            "es_": "Recibió un hermoso ramo de flores.",
            "tr_": "Güzel bir çiçek buketi aldı."
        },
        {
            "en": "honeymoon",
            "es": "el viaje de novios",
            "tr": "balayı",
            "en_": "They went to Hawaii for their honeymoon.",
            "es_": "Fueron a Hawái para su viaje de novios.",
            "tr_": "Balayı için Hawai'ye gittiler."
        },
        {
            "en": "carol",
            "es": "el villancico",
            "tr": "ilahi",
            "en_": "We sang carols on Christmas Eve.",
            "es_": "Cantamos villancicos en Nochebuena.",
            "tr_": "Noel arifesinde ilahiler söyledik."
        },
        {
            "en": "New Year's Eve",
            "es": "Nochevieja",
            "tr": "yılbaşı gecesi",
            "en_": "We watched fireworks on New Year's Eve.",
            "es_": "Vimos fuegos artificiales en Nochevieja.",
            "tr_": "Yılbaşı gecesi havai fişek izledik."
        },
        {
            "en": "New Year's Day",
            "es": "el Día de Año Nuevo",
            "tr": "yeni yıl günü",
            "en_": "People make resolutions on New Year's Day.",
            "es_": "La gente hace propósitos en el Día de Año Nuevo.",
            "tr_": "İnsanlar yeni yıl gününde kararlar alır."
        },
        {
            "en": "Happy New Year!",
            "es": "¡Feliz Año!",
            "tr": "Mutlu Yıllar!",
            "en_": "Happy New Year! I wish you all the best.",
            "es_": "¡Feliz Año! Te deseo todo lo mejor.",
            "tr_": "Mutlu Yıllar! Sana en iyisini dilerim."
        }
    ],
    "Time" : [
        {
            "en": "calendar",
            "es": "el calendario",
            "tr": "takvim",
            "en_": "I marked the date on the calendar.",
            "es_": "Marqué la fecha en el calendario.",
            "tr_": "Tarihi takvime işaretledim."
        },
        {
            "en": "year",
            "es": "el año",
            "tr": "yıl",
            "en_": "This year has been very productive.",
            "es_": "Este año ha sido muy productivo.",
            "tr_": "Bu yıl çok verimli geçti."
        },
        {
            "en": "month",
            "es": "el mes",
            "tr": "ay",
            "en_": "My birthday is next month.",
            "es_": "Mi cumpleaños es el próximo mes.",
            "tr_": "Doğum günüm gelecek ay."
        },
        {
            "en": "January",
            "es": "enero",
            "tr": "Ocak",
            "en_": "January is the first month of the year.",
            "es_": "Enero es el primer mes del año.",
            "tr_": "Ocak yılın ilk ayıdır."
        },
        {
            "en": "February",
            "es": "febrero",
            "tr": "Şubat",
            "en_": "February is usually cold here.",
            "es_": "Febrero suele ser frío aquí.",
            "tr_": "Burada Şubat genellikle soğuktur."
        },
        {
            "en": "March",
            "es": "marzo",
            "tr": "Mart",
            "en_": "We plan to travel in March.",
            "es_": "Planeamos viajar en marzo.",
            "tr_": "Mart’ta seyahat etmeyi planlıyoruz."
        },
        {
            "en": "April",
            "es": "abril",
            "tr": "Nisan",
            "en_": "April showers bring May flowers.",
            "es_": "Las lluvias de abril traen flores de mayo.",
            "tr_": "Nisan yağmurları Mayıs çiçeklerini getirir."
        },
        {
            "en": "May",
            "es": "mayo",
            "tr": "Mayıs",
            "en_": "May is my favorite month.",
            "es_": "Mayo es mi mes favorito.",
            "tr_": "Mayıs benim favori ayım."
        },
        {
            "en": "June",
            "es": "junio",
            "tr": "Haziran",
            "en_": "School ends in June.",
            "es_": "La escuela termina en junio.",
            "tr_": "Okullar Haziran’da biter."
        },
        {
            "en": "July",
            "es": "julio",
            "tr": "Temmuz",
            "en_": "We have a holiday in July.",
            "es_": "Tenemos vacaciones en julio.",
            "tr_": "Temmuz’da tatilimiz var."
        },
        {
            "en": "August",
            "es": "agosto",
            "tr": "Ağustos",
            "en_": "August is usually very hot.",
            "es_": "Agosto suele ser muy caluroso.",
            "tr_": "Ağustos genellikle çok sıcak olur."
        },
        {
            "en": "September",
            "es": "septiembre",
            "tr": "Eylül",
            "en_": "September marks the start of autumn.",
            "es_": "Septiembre marca el inicio del otoño.",
            "tr_": "Eylül sonbaharın başlangıcıdır."
        },
        {
            "en": "October",
            "es": "octubre",
            "tr": "Ekim",
            "en_": "October is famous for Halloween.",
            "es_": "Octubre es famoso por Halloween.",
            "tr_": "Ekim Cadılar Bayramı ile ünlüdür."
        },
        {
            "en": "November",
            "es": "noviembre",
            "tr": "Kasım",
            "en_": "It often rains in November.",
            "es_": "A menudo llueve en noviembre.",
            "tr_": "Kasım’da sık sık yağmur yağar."
        },
        {
            "en": "December",
            "es": "diciembre",
            "tr": "Aralık",
            "en_": "December brings winter holidays.",
            "es_": "Diciembre trae las vacaciones de invierno.",
            "tr_": "Aralık kış tatillerini getirir."
        },
        {
            "en": "week",
            "es": "la semana",
            "tr": "hafta",
            "en_": "There are seven days in a week.",
            "es_": "Hay siete días en una semana.",
            "tr_": "Bir haftada yedi gün vardır."
        },
        {
            "en": "weekend",
            "es": "el fin de semana",
            "tr": "hafta sonu",
            "en_": "I relax on the weekend.",
            "es_": "Me relajo el fin de semana.",
            "tr_": "Hafta sonunda dinlenirim."
        },
        {
            "en": "day",
            "es": "el día",
            "tr": "gün",
            "en_": "Today is a sunny day.",
            "es_": "Hoy es un día soleado.",
            "tr_": "Bugün güneşli bir gün."
        },
        {
            "en": "Monday",
            "es": "el lunes",
            "tr": "Pazartesi",
            "en_": "Monday is the first day of the workweek.",
            "es_": "El lunes es el primer día de la semana laboral.",
            "tr_": "Pazartesi iş haftasının ilk günüdür."
        },
        {
            "en": "Tuesday",
            "es": "el martes",
            "tr": "Salı",
            "en_": "I have a meeting on Tuesday.",
            "es_": "Tengo una reunión el martes.",
            "tr_": "Salı günü bir toplantım var."
        },
        {
            "en": "Wednesday",
            "es": "el miércoles",
            "tr": "Çarşamba",
            "en_": "We have a meeting on Wednesday.",
            "es_": "Tenemos una reunión el miércoles.",
            "tr_": "Çarşamba günü toplantımız var."
        },
        {
            "en": "Thursday",
            "es": "el jueves",
            "tr": "Perşembe",
            "en_": "Thursday is almost the weekend.",
            "es_": "El jueves es casi fin de semana.",
            "tr_": "Perşembe neredeyse hafta sonu."
        },
        {
            "en": "Friday",
            "es": "el viernes",
            "tr": "Cuma",
            "en_": "Friday is my favorite day of the week.",
            "es_": "El viernes es mi día favorito de la semana.",
            "tr_": "Cuma haftanın en sevdiğim günü."
        },
        {
            "en": "Saturday",
            "es": "el sábado",
            "tr": "Cumartesi",
            "en_": "We go hiking every Saturday.",
            "es_": "Vamos de excursión todos los sábados.",
            "tr_": "Her Cumartesi yürüyüşe çıkarız."
        },
        {
            "en": "Sunday",
            "es": "el domingo",
            "tr": "Pazar",
            "en_": "Sunday is a day to relax.",
            "es_": "El domingo es un día para relajarse.",
            "tr_": "Pazar dinlenme günüdür."
        },
        {
            "en": "date",
            "es": "la fecha",
            "tr": "tarih",
            "en_": "Please check the date on the document.",
            "es_": "Por favor, revise la fecha en el documento.",
            "tr_": "Lütfen belgede tarih kontrol edin."
        },
        {
            "en" : "Tuesday, the 2nd of June",
            "es" : "martes, dos de junio",
            "tr" : "2 Haziran Salı"
        },
        {
            "en": "the first",
            "es": "el primero",
            "tr": "birinci",
            "en_": "She finished the first in the race.",
            "es_": "Ella terminó la primera en la carrera.",
            "tr_": "Yarışta birinci oldu."
        },
        {
            "en": "the second",
            "es": "el dos",
            "tr": "ikinci",
            "en_": "He came in the second place.",
            "es_": "Él llegó en segundo lugar.",
            "tr_": "İkinci oldu."
        },
        {
            "en": "the third",
            "es": "el tres",
            "tr": "üçüncü",
            "en_": "They took the third prize.",
            "es_": "Ellos obtuvieron el tercer premio.",
            "tr_": "Üçüncü ödülü aldılar."
        },
        {
            "en": "the fourth",
            "es": "el cuatro",
            "tr": "dördüncü",
            "en_": "This is the fourth chapter.",
            "es_": "Este es el cuarto capítulo.",
            "tr_": "Bu dördüncü bölümdür."
        },
        {
            "en": "the fifth",
            "es": "el cinco",
            "tr": "beşinci",
            "en_": "He scored the fifth goal.",
            "es_": "Él marcó el quinto gol.",
            "tr_": "Beşinci golü attı."
        },
        {
            "en": "yesterday",
            "es": "ayer",
            "tr": "dün",
            "en_": "I went to the market yesterday.",
            "es_": "Fui al mercado ayer.",
            "tr_": "Dün pazara gittim."
        },
        {
            "en": "yesterday morning",
            "es": "ayer por la mañana",
            "tr": "dün sabah",
            "en_": "Yesterday morning was very sunny.",
            "es_": "Ayer por la mañana estuvo muy soleado.",
            "tr_": "Dün sabah çok güneşliydi."
        },
        {
            "en": "yesterday night",
            "es": "anoche",
            "tr": "dün gece",
            "en_": "It rained a lot yesterday night.",
            "es_": "Llovió mucho anoche.",
            "tr_": "Dün gece çok yağmur yağdı."
        },
        {
            "en": "today",
            "es": "hoy",
            "tr": "bugün",
            "en_": "I am busy today.",
            "es_": "Estoy ocupado hoy.",
            "tr_": "Bugün meşgulüm."
        },
        {
            "en": "this morning",
            "es": "esta mañana",
            "tr": "bu sabah",
            "en_": "I drank coffee this morning.",
            "es_": "Bebí café esta mañana.",
            "tr_": "Bu sabah kahve içtim."
        },
        {
            "en": "this afternoon",
            "es": "esta tarde",
            "tr": "bu öğleden sonra",
            "en_": "We will meet this afternoon.",
            "es_": "Nos reuniremos esta tarde.",
            "tr_": "Bu öğleden sonra buluşacağız."
        },
        {
            "en": "tomorrow",
            "es": "mañana",
            "tr": "yarın",
            "en_": "Tomorrow is a holiday.",
            "es_": "Mañana es un día festivo.",
            "tr_": "Yarın tatil."
        },
        {
            "en": "tomorrow morning",
            "es": "mañana por la mañana",
            "tr": "yarın sabah",
            "en_": "I have an appointment tomorrow morning.",
            "es_": "Tengo una cita mañana por la mañana.",
            "tr_": "Yarın sabah randevum var."
        },
        {
            "en": "tomorrow afternoon",
            "es": "mañana por la tarde",
            "tr": "yarın öğleden sonra",
            "en_": "She will arrive tomorrow afternoon.",
            "es_": "Ella llegará mañana por la tarde.",
            "tr_": "Yarın öğleden sonra gelecek."
        },
        {
            "en": "the day before yesterday",
            "es": "anteayer",
            "tr": "önceki gün",
            "en_": "We met the day before yesterday.",
            "es_": "Nos conocimos anteayer.",
            "tr_": "Önceki gün buluştuk."
        },
        {
            "en": "the day after tomorrow",
            "es": "pasado mañana",
            "tr": "öbür gün",
            "en_": "I will travel the day after tomorrow.",
            "es_": "Viajaré pasado mañana.",
            "tr_": "Öbür gün seyahat edeceğim."
        },
        {
            "en": "next Monday",
            "es": "el lunes próximo",
            "tr": "gelecek Pazartesi",
            "en_": "The meeting is scheduled for next Monday.",
            "es_": "La reunión está programada para el lunes próximo.",
            "tr_": "Toplantı gelecek Pazartesi planlandı."
        },
        {
            "en": "next week",
            "es": "la semana próxima",
            "tr": "gelecek hafta",
            "en_": "We will travel next week.",
            "es_": "Viajaremos la semana próxima.",
            "tr_": "Gelecek hafta seyahat edeceğiz."
        },
        {
            "en": "dawn",
            "es": "el amanecer",
            "tr": "şafak [tan]",
            "en_": "We woke up at dawn.",
            "es_": "Nos despertamos al amanecer.",
            "tr_": "Şafakta uyandık."
        },
        {
            "en": "sunrise",
            "es": "la salida del sol",
            "tr": "gün doğumu",
            "en_": "The sunrise was beautiful this morning.",
            "es_": "La salida del sol fue hermosa esta mañana.",
            "tr_": "Bu sabah gün doğumu çok güzeldi."
        },
        {
            "en": "morning",
            "es": "la mañana",
            "tr": "sabah",
            "en_": "I like to exercise in the morning.",
            "es_": "Me gusta hacer ejercicio en la mañana.",
            "tr_": "Sabahları egzersiz yapmayı severim."
        },
        {
            "en": "sun",
            "es": "el sol",
            "tr": "güneş",
            "en_": "The sun is shining today.",
            "es_": "El sol brilla hoy.",
            "tr_": "Bugün güneş parlıyor."
        },
        {
            "en": "sky",
            "es": "el cielo",
            "tr": "gökyüzü",
            "en_": "The sky is very clear tonight.",
            "es_": "El cielo está muy despejado esta noche.",
            "tr_": "Gökyüzü bu gece çok açık."
        },
        {
            "en": "day",
            "es": "el día",
            "tr": "gün",
            "en_": "It was a sunny day.",
            "es_": "Fue un día soleado.",
            "tr_": "Güneşli bir gündü."
        },
        {
            "en": "afternoon [early evening]",
            "es": "la tarde",
            "tr": "öğleden sonra [akşam üstü]",
            "en_": "We will meet in the afternoon.",
            "es_": "Nos encontraremos en la tarde.",
            "tr_": "Öğleden sonra buluşacağız."
        },
        {
            "en": "sunset",
            "es": "la puesta del sol",
            "tr": "günbatımı",
            "en_": "The sunset was amazing yesterday.",
            "es_": "La puesta del sol fue increíble ayer.",
            "tr_": "Dünkü günbatımı muhteşemdi."
        },
        {
            "en": "night",
            "es": "la noche",
            "tr": "gece",
            "en_": "I sleep better at night.",
            "es_": "Duermo mejor por la noche.",
            "tr_": "Gece daha iyi uyurum."
        },
        {
            "en": "star",
            "es": "la estrella",
            "tr": "yıldız",
            "en_": "The stars shine brightly.",
            "es_": "Las estrellas brillan intensamente.",
            "tr_": "Yıldızlar parlak parlıyor."
        },
        {
            "en": "moon",
            "es": "la luna",
            "tr": "ay",
            "en_": "The moon looks full tonight.",
            "es_": "La luna se ve llena esta noche.",
            "tr_": "Ay bu gece dolunay görünüyor."
        },
        {
            "en": "What time is it?",
            "es": "¿Qué hora es?",
            "tr": "Saat kaç?",
            "en_": "Excuse me, what time is it?",
            "es_": "Disculpe, ¿qué hora es?",
            "tr_": "Affedersiniz, saat kaç?"
        },
        {
            "en": "hour",
            "es": "la hora",
            "tr": "saat",
            "en_": "The meeting starts at two o’clock.",
            "es_": "La reunión empieza a las dos horas.",
            "tr_": "Toplantı saat iki de başlıyor."
        },
        {
            "en": "minute",
            "es": "el minuto",
            "tr": "dakika",
            "en_": "Wait a minute, please.",
            "es_": "Espera un minuto, por favor.",
            "tr_": "Bir dakika bekle lütfen."
        },
        {
            "en": "second",
            "es": "el segundo",
            "tr": "saniye",
            "en_": "I will be there in a second.",
            "es_": "Estaré allí en un segundo.",
            "tr_": "Bir saniye içinde orada olacağım."
        },
        {
            "en": "noon [midday]",
            "es": "mediodía",
            "tr": "öğle [gün ortası]",
            "en_": "We eat lunch at noon.",
            "es_": "Comemos al mediodía.",
            "tr_": "Öğle yemeğini öğle saatinde yeriz."
        },
        {
            "en": "midnight",
            "es": "medianoche",
            "tr": "gece yarısı",
            "en_": "The party ended at midnight.",
            "es_": "La fiesta terminó a la medianoche.",
            "tr_": "Parti gece yarısı bitti."
        },
        {
            "en": "quarter to ten",
            "es": "las diez menos cuarto",
            "tr": "ona çeyrek var",
            "en_": "It’s quarter to ten now.",
            "es_": "Son las diez menos cuarto ahora.",
            "tr_": "Şu an ona çeyrek var."
        },
        {
            "en": "five past ten",
            "es": "las diez y cinco",
            "tr": "onu beş geçiyor",
            "en_": "The meeting is at five past ten.",
            "es_": "La reunión es a las diez y cinco.",
            "tr_": "Toplantı onu beş geçe."
        },
        {
            "en": "quarter past ten",
            "es": "las diez y cuarto",
            "tr": "onu çeyrek geçiyor",
            "en_": "She arrived at quarter past ten.",
            "es_": "Ella llegó a las diez y cuarto.",
            "tr_": "O, onu çeyrek geçe geldi."
        },
        {
            "en": "half past ten",
            "es": "las diez y media",
            "tr": "on buçuk",
            "en_": "The train leaves at half past ten.",
            "es_": "El tren sale a las diez y media.",
            "tr_": "Tren on buçukta kalkıyor."
        },
        {
            "en": "8:00 a.m",
            "es": "las ocho de la mañana",
            "tr": "sabah saat sekiz",
            "en_": "I wake up at 8:00 a.m.",
            "es_": "Me despierto a las ocho de la mañana.",
            "tr_": "Sabah saat sekizde uyanırım."
        },
        {
            "en": "8:00 p.m",
            "es": "las ocho de la noche",
            "tr": "akşam saat sekiz",
            "en_": "Dinner is served at 8:00 p.m.",
            "es_": "La cena se sirve a las ocho de la noche.",
            "tr_": "Akşam yemeği akşam saat sekizde servis edilir."
        },
        {
            "en": "time",
            "es": "el tiempo",
            "tr": "zaman",
            "en_": "Time flies when you are having fun.",
            "es_": "El tiempo vuela cuando te estás divirtiendo.",
            "tr_": "Eğlenirken zaman hızla geçer."
        },
        {
            "en": "past",
            "es": "el pasado",
            "tr": "geçmiş",
            "en_": "We learn from the past.",
            "es_": "Aprendemos del pasado.",
            "tr_": "Geçmişten öğreniriz."
        },
        {
            "en": "future",
            "es": "el futuro",
            "tr": "gelecek",
            "en_": "She is planning for the future.",
            "es_": "Ella está planeando para el futuro.",
            "tr_": "O, gelecek için plan yapıyor."
        },
        {
            "en": "present",
            "es": "el presente",
            "tr": "şimdiki zaman",
            "en_": "Live in the present moment.",
            "es_": "Vive en el presente.",
            "tr_": "Şimdiki zamanda yaşa."
        },
        {
            "en": "then",
            "es": "entonces",
            "tr": "o zaman",
            "en_": "I was busy, then I called you.",
            "es_": "Estaba ocupado, entonces te llamé.",
            "tr_": "Yoğundum, o zaman seni aradım.",
            "type": "adverb"
        },
        {
            "en": "in the future",
            "es": "en el futuro",
            "tr": "gelecekte",
            "en_": "We will meet again in the future.",
            "es_": "Nos volveremos a encontrar en el futuro.",
            "tr_": "Gelecekte tekrar görüşeceğiz."
        },
        {
            "en": "now",
            "es": "ahora",
            "tr": "şimdi",
            "en_": "I am busy now.",
            "es_": "Estoy ocupado ahora.",
            "tr_": "Şu an meşgulüm.",
            "type": "adverb"
        }
    ],
    "Weather and seasons" : [
        {
            "en": "to be soaked",
            "es": "estar calado(a)",
            "tr": "sırılsıklam olmak",
            "en_": "He was soaked after walking in the rain.",
            "es_": "Él estaba calado después de caminar bajo la lluvia.",
            "tr_": "Yağmurda yürüdükten sonra sırılsıklamdı."
        },
        {
            "en": "to sweat",
            "es": "sudar",
            "tr": "terlemek",
            "en_": "I start to sweat when I run.",
            "es_": "Empiezo a sudar cuando corro.",
            "tr_": "Koşunca terlemeye başlarım."
        },
        {
            "en": "to be freezing",
            "es": "estar helado(a)",
            "tr": "buz gibi olmak",
            "en_": "I'm freezing in this cold weather.",
            "es_": "Estoy helado con este clima frío.",
            "tr_": "Bu soğuk havada buz gibiyim."
        },
        {
            "en": "to thaw [to melt]",
            "es": "deshielar",
            "tr": "erimek",
            "en_": "The ice will thaw in the sun.",
            "es_": "El hielo deshielará al sol.",
            "tr_": "Buz güneşte eriyecek."
        },
        {
            "en": "season",
            "es": "la estación",
            "tr": "mevsim",
            "en_": "Winter is my favorite season.",
            "es_": "El invierno es mi estación favorita.",
            "tr_": "Kış benim favori mevsimimdir."
        },
        {
            "en": "spring",
            "es": "la primavera",
            "tr": "ilkbahar",
            "en_": "Flowers bloom in spring.",
            "es_": "Las flores florecen en primavera.",
            "tr_": "Çiçekler ilkbaharda açar."
        },
        {
            "en": "summer",
            "es": "el verano",
            "tr": "yaz",
            "en_": "We go to the beach every summer.",
            "es_": "Vamos a la playa cada verano.",
            "tr_": "Her yaz plaja gideriz."
        },
        {
            "en": "autumn",
            "es": "el otoño",
            "tr": "sonbahar",
            "en_": "Leaves fall during autumn.",
            "es_": "Las hojas caen durante el otoño.",
            "tr_": "Yapraklar sonbaharda dökülür."
        },
        {
            "en": "winter",
            "es": "el invierno",
            "tr": "kış",
            "en_": "It often snows in winter.",
            "es_": "A menudo nieva en invierno.",
            "tr_": "Kışın sık sık kar yağar."
        },
        {
            "en": "weather",
            "es": "el tiempo",
            "tr": "hava",
            "en_": "The weather is sunny today.",
            "es_": "El tiempo está soleado hoy.",
            "tr_": "Bugün hava güneşli."
        },
        {
            "en": "rain",
            "es": "la lluvia",
            "tr": "yağmur",
            "en_": "The rain stopped this afternoon.",
            "es_": "La lluvia paró esta tarde.",
            "tr_": "Yağmur bu öğleden sonra durdu."
        },
        {
            "en": "storm",
            "es": "la tormenta",
            "tr": "fırtına",
            "en_": "The storm lasted all night.",
            "es_": "La tormenta duró toda la noche.",
            "tr_": "Fırtına bütün gece sürdü."
        },
        {
            "en": "cloud",
            "es": "la nube",
            "tr": "bulut",
            "en_": "There are many clouds in the sky.",
            "es_": "Hay muchas nubes en el cielo.",
            "tr_": "Gökyüzünde çok bulut var."
        },
        {
            "en": "lightning",
            "es": "el relámpago",
            "tr": "şimşek",
            "en_": "The lightning lit up the sky.",
            "es_": "El relámpago iluminó el cielo.",
            "tr_": "Şimşek gökyüzünü aydınlattı."
        },
        {
            "en": "thunder",
            "es": "el trueno",
            "tr": "gök gürültüsü",
            "en_": "We heard thunder during the storm.",
            "es_": "Escuchamos el trueno durante la tormenta.",
            "tr_": "Fırtına sırasında gök gürültüsü duyduk."
        },
        {
            "en": "umbrella",
            "es": "el paraguas",
            "tr": "şemsiye",
            "en_": "Don't forget your umbrella.",
            "es_": "No olvides tu paraguas.",
            "tr_": "Şemsiyeni unutma."
        },
        {
            "en": "rainbow",
            "es": "el arcoiris",
            "tr": "gökkuşağı",
            "en_": "A rainbow appeared after the rain.",
            "es_": "Apareció un arcoiris después de la lluvia.",
            "tr_": "Yağmurdan sonra gökkuşağı çıktı."
        },
        {
            "en": "puddle",
            "es": "el charco",
            "tr": "su birikintisi",
            "en_": "The children jumped over the puddle.",
            "es_": "Los niños saltaron sobre el charco.",
            "tr_": "Çocuklar su birikintisinin üzerinden atladı."
        },
        {
            "en": "raindrop",
            "es": "la gota de lluvia",
            "tr": "yağmur damlası",
            "en_": "A raindrop landed on my hand.",
            "es_": "Una gota de lluvia cayó en mi mano.",
            "tr_": "Elime bir yağmur damlası düştü."
        },
        {
            "en": "hail",
            "es": "el granizo",
            "tr": "dolu",
            "en_": "The hail damaged the cars.",
            "es_": "El granizo dañó los coches.",
            "tr_": "Dolu arabaları zarar verdi."
        },
        {
            "en": "flood",
            "es": "la inundación",
            "tr": "sel",
            "en_": "The flood caused severe damage.",
            "es_": "La inundación causó daños graves.",
            "tr_": "Sel ciddi hasara neden oldu."
        },
        {
            "en": "climate",
            "es": "el clima",
            "tr": "iklim",
            "en_": "The climate here is very humid.",
            "es_": "El clima aquí es muy húmedo.",
            "tr_": "Buradaki iklim çok nemlidir."
        },
        {
            "en": "weather forecast",
            "es": "el pronóstico del tiempo",
            "tr": "hava tahmini",
            "en_": "I checked the weather forecast for tomorrow.",
            "es_": "Consulté el pronóstico del tiempo para mañana.",
            "tr_": "Yarın için hava tahminini kontrol ettim."
        },
        {
            "en": "wind",
            "es": "el viento",
            "tr": "rüzgar",
            "en_": "The wind is strong today.",
            "es_": "El viento está fuerte hoy.",
            "tr_": "Bugün rüzgar güçlü."
        },
        {
            "en": "fog",
            "es": "la niebla",
            "tr": "sis",
            "en_": "The fog is thick this morning.",
            "es_": "La niebla está densa esta mañana.",
            "tr_": "Bu sabah sis yoğundu."
        },
        {
            "en": "frost",
            "es": "la escarcha",
            "tr": "kırağı",
            "en_": "The frost covered the grass last night.",
            "es_": "La escarcha cubrió el césped anoche.",
            "tr_": "Kırağı dün gece çimleri kapladı."
        },
        {
            "en": "icicle",
            "es": "el carámbano",
            "tr": "buz sarkıtı",
            "en_": "Icicles hung from the roof.",
            "es_": "Los carámbanos colgaban del techo.",
            "tr_": "Buz sarkıtları çatıdan sarkıyordu."
        },
        {
            "en": "snow",
            "es": "la nieve",
            "tr": "kar",
            "en_": "The snow started to fall in the afternoon.",
            "es_": "La nieve comenzó a caer por la tarde.",
            "tr_": "Kar öğleden sonra yağmaya başladı."
        },
        {
            "en": "snowman",
            "es": "el hombre de nieve",
            "tr": "kardan adam",
            "en_": "The children built a snowman.",
            "es_": "Los niños hicieron un hombre de nieve.",
            "tr_": "Çocuklar kardan adam yaptı."
        }
    ],
    "World and universe" : [
        {
            "en": "world",
            "es": "el mundo",
            "tr": "dünya"
        },
        {
            "en": "west",
            "es": "el oeste",
            "tr": "batı"
        },
        {
            "en": "east",
            "es": "el este",
            "tr": "doğu"
        },
        {
            "en": "north",
            "es": "el norte",
            "tr": "kuzey"
        },
        {
            "en": "south",
            "es": "el sur",
            "tr": "güney"
        },
        {
            "en": "Atlantic Ocean",
            "es": "el Atlántico",
            "tr": "Atlantik Okyanusu"
        },
        {
            "en": "Pacific Ocean",
            "es": "el Pacífico",
            "tr": "Pasifik Okyanusu"
        },
        {
            "en": "North Pole",
            "es": "el polo norte",
            "tr": "Kuzey Kutbu"
        },
        {
            "en": "South Pole",
            "es": "el polo sur",
            "tr": "Güney Kutbu"
        },
        {
            "en": "desert",
            "es": "el desierto",
            "tr": "çöl"
        },
        {
            "en": "jungle",
            "es": "la selva",
            "tr": "orman"
        },
        {
            "en": "Equator",
            "es": "el ecuador",
            "tr": "Ekvator"
        },
        {
            "en": "continent",
            "es": "el continente",
            "tr": "kıta"
        },
        {
            "en": "country",
            "es": "el país",
            "tr": "ülke"
        },
        {
            "en": "Europe",
            "es": "Europa",
            "tr": "Avrupa"
        },
        {
            "en": "Africa",
            "es": "Africa",
            "tr": "Afrika"
        },
        {
            "en": "Australia",
            "es": "Australia",
            "tr": "Avustralya"
        },
        {
            "en": "China",
            "es": "China",
            "tr": "Çin"
        },
        {
            "en": "Japan",
            "es": "el Japón",
            "tr": "Japonya"
        },
        {
            "en": "Canada",
            "es": "la Canadá",
            "tr": "Kanada"
        },
        {
            "en": "United States",
            "es": "los Estados Unidos",
            "tr": "Amerika Birleşik Devletleri"
        },
        {
            "en": "Latin America",
            "es": "América Latina",
            "tr": "Latin Amerika"
        },
        {
            "en": "New Zeland",
            "es": "Nueva Zelanda",
            "tr": "Yeni Zelanda"
        },
        {
            "en": "India",
            "es": "la India",
            "tr": "Hindistan"
        },
        {
            "en": "Scandinavia",
            "es": "Escandinavia",
            "tr": "İskandinavya"
        },
        {
            "en": "Great Britain",
            "es": "Gran Bretaña",
            "tr": "Büyük Britanya"
        },
        {
            "en": "Netherlands",
            "es": "Holanda",
            "tr": "Hollanda"
        },
        {
            "en": "Belgium",
            "es": "Bélgica",
            "tr": "Bekçika"
        },
        {
            "en": "France",
            "es": "Francia",
            "tr": "Fransa"
        },
        {
            "en": "Switzerland",
            "es": "Suiza",
            "tr": "İsviçre"
        },
        {
            "en": "Italy",
            "es": "Italia",
            "tr": "İtalya"
        },
        {
            "en": "Spain",
            "es": "España",
            "tr": "İspanya"
        },
        {
            "en": "Austria",
            "es": "Austria",
            "tr": "Avusturya"
        },
        {
            "en": "universe",
            "es": "el universo",
            "tr": "evren"
        },
        {
            "en": "space",
            "es": "el espacio",
            "tr": "uzay"
        },
        {
            "en": "planet",
            "es": "el planeta",
            "tr": "gezegen"
        },
        {
            "en": "star",
            "es": "la estrella",
            "tr": "yıldız"
        },
        {
            "en": "spaceship",
            "es": "la nave espacial",
            "tr": "uzay gemisi"
        },
        {
            "en": "galaxy",
            "es": "la galaxia",
            "tr": "galaksi"
        },
        {
            "en": "telescope",
            "es": "el telescopio",
            "tr": "teleskop"
        }
    ],
    "Politics" : [
        {
            "en": "to vote",
            "es": "votar",
            "tr": "oy vermek",
            "en_": "Citizens go to the polls to vote.",
            "es_": "Los ciudadanos van a las urnas para votar.",
            "tr_": "Vatandaşlar oy vermek için sandığa gider."
        },
        {
            "en": "to win",
            "es": "ganar",
            "tr": "kazanmak",
            "en_": "She hopes to win the election.",
            "es_": "Ella espera ganar las elecciones.",
            "tr_": "Seçimi kazanmayı umuyor."
        },
        {
            "en": "to lose",
            "es": "perder",
            "tr": "kaybetmek",
            "en_": "The party is likely to lose seats.",
            "es_": "Es probable que el partido pierda escaños.",
            "tr_": "Parti muhtemelen sandalye kaybedecek."
        },
        {
            "en": "to interview",
            "es": "entrevistar",
            "tr": "röportaj yapmak",
            "en_": "The journalist will interview the candidate.",
            "es_": "El periodista entrevistará al candidato.",
            "tr_": "Gazeteci adayla röportaj yapacak."
        },
        {
            "en": "to join",
            "es": "asociarse",
            "tr": "katılmak",
            "en_": "He wants to join the political movement.",
            "es_": "Quiere asociarse al movimiento político.",
            "tr_": "Siyasi harekete katılmak istiyor."
        },
        {
            "en": "president",
            "es": "el presidente / la presidente",
            "tr": "cumhurbaşkanı",
            "en_": "The president gave a speech last night.",
            "es_": "El presidente dio un discurso anoche.",
            "tr_": "Cumhurbaşkanı dün gece bir konuşma yaptı."
        },
        {
            "en": "parliament",
            "es": "el parlamento",
            "tr": "parlemento",
            "en_": "The new law was passed by parliament.",
            "es_": "La nueva ley fue aprobada por el parlamento.",
            "tr_": "Yeni yasa parlamentodan geçti."
        },
        {
            "en": "member of parliament",
            "es": "el diputado / la diputada",
            "tr": "milletvekili",
            "en_": "The member of parliament answered the questions.",
            "es_": "El diputado respondió a las preguntas.",
            "tr_": "Milletvekili soruları yanıtladı."
        },
        {
            "en": "prime minister",
            "es": "el primer ministro / la primer ministro",
            "tr": "başbakan",
            "en_": "The prime minister visited the city.",
            "es_": "El primer ministro visitó la ciudad.",
            "tr_": "Başbakan şehri ziyaret etti."
        },
        {
            "en": "government",
            "es": "el gobierno",
            "tr": "hükümet",
            "en_": "The government announced new reforms.",
            "es_": "El gobierno anunció nuevas reformas.",
            "tr_": "Hükümet yeni reformlar açıkladı."
        },
        {
            "en": "party",
            "es": "el partido",
            "tr": "parti",
            "en_": "Which party do you support?",
            "es_": "¿A qué partido apoyas?",
            "tr_": "Hangi partiyi destekliyorsun?"
        },
        {
            "en": "leader",
            "es": "el líder / la líder",
            "tr": "lider",
            "en_": "The leader gave a powerful speech.",
            "es_": "El líder dio un discurso poderoso.",
            "tr_": "Lider etkileyici bir konuşma yaptı."
        },
        {
            "en": "boss",
            "es": "el jefe / la jefa",
            "tr": "patron",
            "en_": "The boss is responsible for the final decision.",
            "es_": "El jefe es responsable de la decisión final.",
            "tr_": "Son karardan patron sorumludur."
        },
        {
            "en": "popular",
            "es": "popular",
            "tr": "popüler",
            "en_": "The new mayor is very popular.",
            "es_": "El nuevo alcalde es muy popular.",
            "tr_": "Yeni belediye başkanı çok popüler."
        },
        {
            "en": "member",
            "es": "el miembro",
            "tr": "üye",
            "en_": "She is a member of the political committee.",
            "es_": "Ella es miembro del comité político.",
            "tr_": "Siyasi komitenin bir üyesidir."
        },
        {
            "en": "election",
            "es": "la elección",
            "tr": "seçim",
            "en_": "The election will be held next month.",
            "es_": "La elección se celebrará el próximo mes.",
            "tr_": "Seçim gelecek ay yapılacak."
        },
        {
            "en": "left wing",
            "es": "el izquierdas",
            "tr": "sol kanat",
            "en_": "He supports the left wing policies.",
            "es_": "Apoya las políticas de izquierdas.",
            "tr_": "Sol kanat politikalarını destekliyor."
        },
        {
            "en": "right wing",
            "es": "de derechas",
            "tr": "sağ kanat",
            "en_": "The party has a strong right wing base.",
            "es_": "El partido tiene una base fuerte de derechas.",
            "tr_": "Partinin güçlü bir sağ kanat tabanı var."
        },
        {
            "en": "liberal",
            "es": "de centro",
            "tr": "liberal",
            "en_": "She identifies as a liberal politician.",
            "es_": "Se identifica como una política de centro.",
            "tr_": "Kendini liberal bir politikacı olarak tanımlıyor."
        },
        {
            "en": "media",
            "es": "los medios de comunicación",
            "tr": "iletişim araçları",
            "en_": "The media plays an important role in elections.",
            "es_": "Los medios de comunicación juegan un papel importante en las elecciones.",
            "tr_": "İletişim araçları seçimlerde önemli bir rol oynar."
        },
        {
            "en": "important",
            "es": "importante",
            "tr": "önemli",
            "en_": "It's important to stay informed.",
            "es_": "Es importante estar informado.",
            "tr_": "Bilgili kalmak önemlidir."
        },
        {
            "en": "interesting",
            "es": "interesante",
            "tr": "ilginç",
            "en_": "The article was very interesting.",
            "es_": "El artículo fue muy interesante.",
            "tr_": "Makale çok ilginçti."
        },
        {
            "en": "newspaper",
            "es": "el periódico",
            "tr": "gazete",
            "en_": "I read the newspaper every morning.",
            "es_": "Leo el periódico cada mañana.",
            "tr_": "Her sabah gazete okurum."
        },
        {
            "en": "news",
            "es": "las noticias",
            "tr": "haberler",
            "en_": "Did you hear the news?",
            "es_": "¿Escuchaste las noticias?",
            "tr_": "Haberleri duydun mu?"
        },
        {
            "en": "headline",
            "es": "el titular",
            "tr": "başlık [manşet]",
            "en_": "The headline caught my attention.",
            "es_": "El titular llamó mi atención.",
            "tr_": "Manşet dikkatimi çekti."
        },
        {
            "en": "article",
            "es": "el artículo",
            "tr": "makale",
            "en_": "She wrote an article about climate change.",
            "es_": "Escribió un artículo sobre el cambio climático.",
            "tr_": "İklim değişikliği hakkında bir makale yazdı."
        },
        {
            "en": "true [real]",
            "es": "verdadero(a)",
            "tr": "doğru [gerçek]",
            "en_": "Is the story true?",
            "es_": "¿Es verdadera la historia?",
            "tr_": "Hikaye doğru mu?"
        },
        {
            "en": "false [fake]",
            "es": "falso(a)",
            "tr": "yanlış [sahte]",
            "en_": "That information is false.",
            "es_": "Esa información es falsa.",
            "tr_": "Bu bilgi yanlış."
        },
        {
            "en": "politics",
            "es": "la política",
            "tr": "politika",
            "en_": "Politics can be complicated.",
            "es_": "La política puede ser complicada.",
            "tr_": "Politika karmaşık olabilir."
        },
        {
            "en": "society",
            "es": "la sociedad",
            "tr": "toplum",
            "en_": "Education is important for society.",
            "es_": "La educación es importante para la sociedad.",
            "tr_": "Eğitim toplum için önemlidir."
        },
        {
            "en": "democratic",
            "es": "democrático(a)",
            "tr": "demokratik",
            "en_": "They live in a democratic country.",
            "es_": "Viven en un país democrático.",
            "tr_": "Demokratik bir ülkede yaşıyorlar."
        },
        {
            "en": "salary [wages]",
            "es": "el salario",
            "tr": "maaş [ücret]",
            "en_": "She gets her salary at the end of the month.",
            "es_": "Recibe su salario a fin de mes.",
            "tr_": "Maaşını ay sonunda alır."
        },
        {
            "en": "tax",
            "es": "el impuesto",
            "tr": "vergi",
            "en_": "We have to pay more taxes this year.",
            "es_": "Tenemos que pagar más impuestos este año.",
            "tr_": "Bu yıl daha fazla vergi ödememiz gerekiyor."
        },
        {
            "en": "labor union [trade union]",
            "es": "el sindicato",
            "tr": "sendika",
            "en_": "The labor union organized a strike.",
            "es_": "El sindicato organizó una huelga.",
            "tr_": "Sendika bir grev düzenledi."
        },
        {
            "en": "unemployment",
            "es": "el paro",
            "tr": "işsizlik",
            "en_": "Unemployment is a big problem in the country.",
            "es_": "El paro es un gran problema en el país.",
            "tr_": "İşsizlik ülkede büyük bir sorun."
        }
    ],
    "Describing things" : [
        {
            "en": "noisy",
            "es": "ruidoso(a)",
            "tr": "gürültülü",
            "en_": "The neighbors are very noisy at night.",
            "es_": "Los vecinos son muy ruidosos por la noche.",
            "tr_": "Komşular geceleri çok gürültülü."
        },
        {
            "en": "quiet",
            "es": "callado(a)",
            "tr": "sessiz",
            "en_": "The library is a quiet place to study.",
            "es_": "La biblioteca es un lugar callado para estudiar.",
            "tr_": "Kütüphane ders çalışmak için sessiz bir yerdir."
        },
        {
            "en": "obedient",
            "es": "obediente",
            "tr": "itaatkâr [söz dinleyen]",
            "en_": "The dog is very obedient.",
            "es_": "El perro es muy obediente.",
            "tr_": "Köpek çok itaatkâr."
        },
        {
            "en": "naughty",
            "es": "travieso(a)",
            "tr": "yaramaz [haylaz]",
            "en_": "The naughty boy broke the window.",
            "es_": "El niño travieso rompió la ventana.",
            "tr_": "Yaramaz çocuk pencereyi kırdı."
        },
        {
            "en": "same [equal]",
            "es": "igual",
            "tr": "aynı [eşit]",
            "en_": "We have the same shoes.",
            "es_": "Tenemos los mismos zapatos.",
            "tr_": "Aynı ayakkabılardan bizde de var."
        },
        {
            "en": "different",
            "es": "diferente",
            "tr": "farklı [değişik]",
            "en_": "This book is different from the others.",
            "es_": "Este libro es diferente de los otros.",
            "tr_": "Bu kitap diğerlerinden farklı."
        },
        {
            "en": "busy",
            "es": "ocupado(a)",
            "tr": "meşgul",
            "en_": "She is too busy to talk right now.",
            "es_": "Está demasiado ocupada para hablar ahora.",
            "tr_": "Şu anda konuşamayacak kadar meşgul."
        },
        {
            "en": "useful",
            "es": "útil",
            "tr": "faydalı [yararlı]",
            "en_": "This tool is very useful for repairs.",
            "es_": "Esta herramienta es muy útil para las reparaciones.",
            "tr_": "Bu alet tamirler için çok faydalı."
        },
        {
            "en": "together",
            "es": "juntos",
            "tr": "birlikte [beraber]",
            "en_": "We studied together for the test.",
            "es_": "Estudiamos juntos para el examen.",
            "tr_": "Sınav için birlikte çalıştık."
        },
        {
            "en": "alone",
            "es": "solo(a)",
            "tr": "yalnız",
            "en_": "He lives alone in a small house.",
            "es_": "Vive solo en una casa pequeña.",
            "tr_": "Küçük bir evde yalnız yaşıyor."
        },
        {
            "en": "scared [frightened]",
            "es": "asustado(a)",
            "tr": "korkmuş [ürkmüş]",
            "en_": "She looked scared during the storm.",
            "es_": "Ella parecía asustada durante la tormenta.",
            "tr_": "Fırtına sırasında korkmuş görünüyordu."
        },
        {
            "en": "brave",
            "es": "valiente",
            "tr": "cesur",
            "en_": "The firefighter was very brave.",
            "es_": "El bombero fue muy valiente.",
            "tr_": "İtfaiyeci çok cesurdu."
        },
        {
            "en": "careless",
            "es": "descuidado(a)",
            "tr": "dikkatsiz",
            "en_": "He made a careless mistake.",
            "es_": "Cometió un error descuidado.",
            "tr_": "Dikkatsiz bir hata yaptı."
        },
        {
            "en": "careful",
            "es": "cuidadoso(a)",
            "tr": "dikkatli",
            "en_": "Be careful when crossing the street.",
            "es_": "Sé cuidadoso al cruzar la calle.",
            "tr_": "Karşıdan karşıya geçerken dikkatli ol."
        },
        {
            "en": "angry [mad]",
            "es": "enfadado(a)",
            "tr": "sinirli [kızgın]",
            "en_": "He was angry about the delay.",
            "es_": "Estaba enfadado por el retraso.",
            "tr_": "Gecikmeden dolayı sinirliydi."
        },
        {
            "en": "happy [content]",
            "es": "contento(a)",
            "tr": "mutlu [memnun]",
            "en_": "She looks happy with the result.",
            "es_": "Ella parece contenta con el resultado.",
            "tr_": "Sonuçtan memnun görünüyor."
        },
        {
            "en": "lively [cheerful]",
            "es": "animado(a)",
            "tr": "neşeli [enerjik]",
            "en_": "The party was very lively.",
            "es_": "La fiesta fue muy animada.",
            "tr_": "Parti çok neşeliydi."
        },
        {
            "en": "bored [boring]",
            "es": "aburrido(a)",
            "tr": "sıkılmış [sıkıcı]",
            "en_": "He was bored during the lecture.",
            "es_": "Estaba aburrido durante la clase.",
            "tr_": "Ders sırasında sıkılmıştı."
        },
        {
            "en": "full",
            "es": "lleno(a)",
            "tr": "dolu",
            "en_": "The glass is full of water.",
            "es_": "El vaso está lleno de agua.",
            "tr_": "Bardak suyla dolu."
        },
        {
            "en": "empty",
            "es": "vacío(a)",
            "tr": "boş",
            "en_": "The room was empty.",
            "es_": "La habitación estaba vacía.",
            "tr_": "Oda boştu."
        },
        {
            "en": "long",
            "es": "largo(a)",
            "tr": "uzun",
            "en_": "She wrote a long letter.",
            "es_": "Escribió una carta larga.",
            "tr_": "Uzun bir mektup yazdı."
        },
        {
            "en": "short",
            "es": "corto(a)",
            "tr": "kısa",
            "en_": "He gave a short speech.",
            "es_": "Dio un discurso corto.",
            "tr_": "Kısa bir konuşma yaptı."
        },
        {
            "en": "hard [tough]",
            "es": "duro(a)",
            "tr": "sert [dayanıklı]",
            "en_": "This bread is very hard.",
            "es_": "Este pan está muy duro.",
            "tr_": "Bu ekmek çok sert."
        },
        {
            "en": "soft",
            "es": "blando(a)",
            "tr": "yumuşak",
            "en_": "The pillow is soft and comfortable.",
            "es_": "La almohada es blanda y cómoda.",
            "tr_": "Yastık yumuşak ve rahat."
        },
        {
            "en": "new",
            "es": "nuevo(a)",
            "tr": "yeni",
            "en_": "I bought a new phone.",
            "es_": "Compré un teléfono nuevo.",
            "tr_": "Yeni bir telefon aldım."
        },
        {
            "en": "old",
            "es": "viejo(a)",
            "tr": "eski [yaşlı]",
            "en_": "This book is very old.",
            "es_": "Este libro es muy viejo.",
            "tr_": "Bu kitap çok eski."
        },
        {
            "en": "open",
            "es": "abierto(a)",
            "tr": "açık",
            "en_": "The door is open.",
            "es_": "La puerta está abierta.",
            "tr_": "Kapı açık."
        },
        {
            "en": "closed",
            "es": "cerrado(a)",
            "tr": "kapalı",
            "en_": "The shop is closed now.",
            "es_": "La tienda está cerrada ahora.",
            "tr_": "Mağaza şu anda kapalı."
        },
        {
            "en": "deep",
            "es": "profundo(a)",
            "tr": "derin",
            "en_": "The lake is very deep.",
            "es_": "El lago es muy profundo.",
            "tr_": "Göl çok derin."
        },
        {
            "en": "shallow",
            "es": "poco profundo(a)",
            "tr": "sığ",
            "en_": "The water is shallow near the shore.",
            "es_": "El agua es poco profunda cerca de la orilla.",
            "tr_": "Kıyıya yakın su sığdır."
        },
        {
            "en": "tight",
            "es": "apretado(a)",
            "tr": "sıkı",
            "en_": "These pants are too tight.",
            "es_": "Estos pantalones están demasiado apretados.",
            "tr_": "Bu pantolonlar çok sıkı."
        },
        {
            "en": "loose",
            "es": "suelto(a)",
            "tr": "gevşek",
            "en_": "She prefers loose clothing.",
            "es_": "Ella prefiere la ropa suelta.",
            "tr_": "Gevşek kıyafetleri tercih eder."
        },
        {
            "en": "fashionable",
            "es": "de moda",
            "tr": "moda",
            "en_": "That jacket is very fashionable.",
            "es_": "Esa chaqueta está muy de moda.",
            "tr_": "O ceket çok moda."
        },
        {
            "en": "old-fashioned [outdated]",
            "es": "anticuado(a)",
            "tr": "demode [eski tarz]",
            "en_": "This phone looks old-fashioned.",
            "es_": "Este teléfono parece anticuado.",
            "tr_": "Bu telefon demode görünüyor."
        },
        {
            "en": "last",
            "es": "último",
            "tr": "son",
            "en_": "This is the last chapter of the book.",
            "es_": "Este es el último capítulo del libro.",
            "tr_": "Bu kitabın son bölümü."
        },
        {
            "en": "plastic [made of plastic]",
            "es": "de plástico",
            "tr": "plastik",
            "en_": "The bottle is made of plastic.",
            "es_": "La botella es de plástico.",
            "tr_": "Şişe plastiktendir."
        },
        {
            "en": "wooden [made of wood]",
            "es": "de madera",
            "tr": "ahşap [tahtadan]",
            "en_": "They built a wooden house.",
            "es_": "Construyeron una casa de madera.",
            "tr_": "Ahşap bir ev yaptılar."
        },
        {
            "en": "golden [made of gold]",
            "es": "de oro",
            "tr": "altın [altından]",
            "en_": "She wore golden earrings.",
            "es_": "Llevaba pendientes de oro.",
            "tr_": "Altın küpeler taktı."
        },
        {
            "en": "silver [made of silver]",
            "es": "de plata",
            "tr": "gümüş [gümüşten]",
            "en_": "This spoon is made of silver.",
            "es_": "Esta cuchara es de plata.",
            "tr_": "Bu kaşık gümüşten yapılmış."
        },
        {
            "en": "metallic [made of metal]",
            "es": "de metal",
            "tr": "metal [metalik]",
            "en_": "The door has a metallic frame.",
            "es_": "La puerta tiene un marco de metal.",
            "tr_": "Kapının metal bir çerçevesi var."
        }
    ],
    "Colors" : [
        {
            "en": "color",
            "es": "el color",
            "tr": "renk",
            "en_": "What is your favorite color?",
            "es_": "¿Cuál es tu color favorito?",
            "tr_": "En sevdiğin renk nedir?"
        },
        {
            "en": "red",
            "es": "rojo(a)",
            "tr": "kırmızı",
            "en_": "She wore a red dress.",
            "es_": "Ella llevaba un vestido rojo.",
            "tr_": "Kırmızı bir elbise giydi."
        },
        {
            "en": "pink",
            "es": "rosado(a)",
            "tr": "pembe",
            "en_": "I bought pink flowers.",
            "es_": "Compré flores rosadas.",
            "tr_": "Pembe çiçekler aldım."
        },
        {
            "en": "white",
            "es": "blanco(a)",
            "tr": "beyaz",
            "en_": "The snow is white.",
            "es_": "La nieve es blanca.",
            "tr_": "Kar beyazdır."
        },
        {
            "en": "black",
            "es": "negro(a)",
            "tr": "siyah",
            "en_": "He is wearing black shoes.",
            "es_": "Lleva zapatos negros.",
            "tr_": "Siyah ayakkabılar giyiyor."
        },
        {
            "en": "grey",
            "es": "gris",
            "tr": "gri",
            "en_": "The sky is grey today.",
            "es_": "El cielo está gris hoy.",
            "tr_": "Bugün gökyüzü gri."
        },
        {
            "en": "light",
            "es": "claro(a)",
            "tr": "açık",
            "en_": "I prefer light blue walls.",
            "es_": "Prefiero las paredes azul claro.",
            "tr_": "Açık mavi duvarları tercih ederim."
        },
        {
            "en": "dull",
            "es": "apagado(a)",
            "tr": "mat",
            "en_": "The color of this painting is dull.",
            "es_": "El color de esta pintura es apagado.",
            "tr_": "Bu tablonun rengi mat."
        },
        {
            "en": "brown",
            "es": "marron",
            "tr": "kahverengi",
            "en_": "He has brown eyes.",
            "es_": "Él tiene ojos marrones.",
            "tr_": "Onun kahverengi gözleri var."
        },
        {
            "en": "yellow",
            "es": "amarillo(a)",
            "tr": "sarı",
            "en_": "I painted the room yellow.",
            "es_": "Pinté la habitación de amarillo.",
            "tr_": "Odayı sarıya boyadım."
        },
        {
            "en": "bright [vivid]",
            "es": "vivo(a)",
            "tr": "parlak [canlı]",
            "en_": "She chose bright colors for the party.",
            "es_": "Eligió colores vivos para la fiesta.",
            "tr_": "Parti için canlı renkler seçti."
        },
        {
            "en": "orange",
            "es": "anaranjado(a)",
            "tr": "turuncu",
            "en_": "I like orange juice.",
            "es_": "Me gusta el jugo de naranja.",
            "tr_": "Portakal suyunu severim."
        },
        {
            "en": "blue",
            "es": "azul",
            "tr": "mavi",
            "en_": "The ocean is blue.",
            "es_": "El océano es azul.",
            "tr_": "Okyanus mavidir."
        },
        {
            "en": "navy",
            "es": "azul marino",
            "tr": "lacivert",
            "en_": "He wore a navy suit.",
            "es_": "Llevaba un traje azul marino.",
            "tr_": "Lacivert bir takım elbise giydi."
        },
        {
            "en": "purple",
            "es": "morado(a)",
            "tr": "mor",
            "en_": "She painted her nails purple.",
            "es_": "Se pintó las uñas de morado.",
            "tr_": "Tırnaklarını mora boyadı."
        },
        {
            "en": "dark",
            "es": "oscuro(a)",
            "tr": "koyu",
            "en_": "He painted the room a dark blue.",
            "es_": "Pintó la habitación de azul oscuro.",
            "tr_": "Odayı koyu maviye boyadı."
        },
        {
            "en": "green",
            "es": "verde",
            "tr": "yeşil",
            "en_": "The grass is green in spring.",
            "es_": "La hierba es verde en primavera.",
            "tr_": "İlkbaharda çimenler yeşildir."
        },
        {
            "en": "printed [patterned]",
            "es": "estampado(a)",
            "tr": "baskılı [desenli]",
            "en_": "She wore a patterned dress.",
            "es_": "Llevaba un vestido estampado.",
            "tr_": "Desenli bir elbise giydi."
        },
        {
            "en": "spotted",
            "es": "con lunares",
            "tr": "benekli [puantiyeli]",
            "en_": "He has a spotted tie.",
            "es_": "Tiene una corbata con lunares.",
            "tr_": "Benekli bir kravatı var."
        },
        {
            "en": "stripped",
            "es": "a rayas",
            "tr": "çizgili",
            "en_": "I like wearing striped shirts.",
            "es_": "Me gusta llevar camisas a rayas.",
            "tr_": "Çizgili gömlekler giymeyi severim."
        }
    ],
    "In, on, under" : [
        {
            "en": "in",
            "es": "en",
            "tr": "içinde",
            "en_": "The keys are in the bag.",
            "es_": "Las llaves están en la bolsa.",
            "tr_": "Anahtarlar çantanın içinde."
        },
        {
            "en": "on [about]",
            "es": "sobre",
            "tr": "üzerinde [hakkında]",
            "en_": "The book is on the table.",
            "es_": "El libro está sobre la mesa.",
            "tr_": "Kitap masanın üzerinde."
        },
        {
            "en": "under",
            "es": "debajo de",
            "tr": "altında",
            "en_": "The cat is under the bed.",
            "es_": "El gato está debajo de la cama.",
            "tr_": "Kedi yatağın altında."
        },
        {
            "en": "over [above]",
            "es": "por encima de",
            "tr": "üstünde [üzerinde]",
            "en_": "A lamp hangs over the table.",
            "es_": "Una lámpara cuelga por encima de la mesa.",
            "tr_": "Masanın üstünde bir lamba asılı."
        },
        {
            "en": "into",
            "es": "dentro",
            "tr": "içine",
            "en_": "He jumped into the pool.",
            "es_": "Saltó dentro de la piscina.",
            "tr_": "Havuza içine atladı."
        },
        {
            "en": "outside [out]",
            "es": "fuera",
            "tr": "dışında [dışarıda]",
            "en_": "They are playing outside.",
            "es_": "Están jugando fuera.",
            "tr_": "Dışarıda oynuyorlar."
        },
        {
            "en": "beside [next to]",
            "es": "al lado de",
            "tr": "yanında",
            "en_": "She sat beside her friend.",
            "es_": "Se sentó al lado de su amiga.",
            "tr_": "Arkadaşının yanında oturdu."
        },
        {
            "en": "between",
            "es": "entre",
            "tr": "ortasında",
            "en_": "The ball is between the shoes.",
            "es_": "La pelota está entre los zapatos.",
            "tr_": "Top ayakkabıların ortasında."
        },
        {
            "en": "among",
            "es": "entre",
            "tr": "arasında",
            "en_": "He was sitting among his classmates.",
            "es_": "Estaba sentado entre sus compañeros de clase.",
            "tr_": "Sınıf arkadaşlarının arasında oturuyordu."
        },
        {
            "en": "near [close to]",
            "es": "cerca de",
            "tr": "yakınında",
            "en_": "The station is near the bank.",
            "es_": "La estación está cerca del banco.",
            "tr_": "İstasyon bankanın yakınında."
        },
        {
            "en": "far from",
            "es": "lejos de",
            "tr": "uzağında",
            "en_": "He lives far from the city.",
            "es_": "Vive lejos de la ciudad.",
            "tr_": "Şehrin uzağında yaşıyor."
        },
        {
            "en": "in front of",
            "es": "delante de",
            "tr": "önünde",
            "en_": "He parked in front of the school.",
            "es_": "Aparcó delante de la escuela.",
            "tr_": "Okulun önünde park etti."
        },
        {
            "en": "behind",
            "es": "detrás de",
            "tr": "arkasında",
            "en_": "The car is behind the truck.",
            "es_": "El coche está detrás del camión.",
            "tr_": "Araba kamyonun arkasında."
        },
        {
            "en": "against",
            "es": "contra",
            "tr": "-e karşı",
            "en_": "He leaned against the wall.",
            "es_": "Se apoyó contra la pared.",
            "tr_": "Duvara yaslandı."
        },
        {
            "en": "for",
            "es": "por",
            "tr": "için",
            "en_": "This gift is for you.",
            "es_": "Este regalo es para ti.",
            "tr_": "Bu hediye senin için."
        },
        {
            "en": "by",
            "es": "por",
            "tr": "tarafından",
            "en_": "The book was written by her.",
            "es_": "El libro fue escrito por ella.",
            "tr_": "Kitap onun tarafından yazıldı."
        },
        {
            "en": "through",
            "es": "por",
            "tr": "vasıtasıyla",
            "en_": "They went through the tunnel.",
            "es_": "Pasaron por el túnel.",
            "tr_": "Tünelden geçtiler."
        },
        {
            "en": "toward [towards]",
            "es": "hacia",
            "tr": "-e doğru [-e karşı]",
            "en_": "She ran toward the door.",
            "es_": "Corrió hacia la puerta.",
            "tr_": "Kapıya doğru koştu."
        },
        {
            "en": "from",
            "es": "desde",
            "tr": "-den",
            "en_": "He came from France.",
            "es_": "Vino desde Francia.",
            "tr_": "Fransa'dan geldi."
        },
        {
            "en": "since",
            "es": "desde",
            "tr": "-den itibaren",
            "en_": "They have lived here since 2020.",
            "es_": "Viven aquí desde 2020.",
            "tr_": "2020'den beri burada yaşıyorlar."
        },
        {
            "en": "up",
            "es": "arriba",
            "tr": "yukarı",
            "en_": "Look up at the sky.",
            "es_": "Mira arriba al cielo.",
            "tr_": "Gökyüzüne yukarı bak."
        },
        {
            "en": "down",
            "es": "abajo",
            "tr": "aşağı",
            "en_": "The ball rolled down the hill.",
            "es_": "La pelota rodó cuesta abajo.",
            "tr_": "Top tepenin aşağısına yuvarlandı."
        },
        {
            "en": "opposite",
            "es": "frente a",
            "tr": "karşısında",
            "en_": "The bank is opposite the supermarket.",
            "es_": "El banco está frente al supermercado.",
            "tr_": "Banka, süpermarketin karşısında."
        },
        {
            "en": "with",
            "es": "con",
            "tr": "ile",
            "en_": "She went to the cinema with her brother.",
            "es_": "Fue al cine con su hermano.",
            "tr_": "Kardeşiyle sinemaya gitti."
        },
        {
            "en": "without",
            "es": "sin",
            "tr": "-siz, -sız [olmadan]",
            "en_": "He drank coffee without sugar.",
            "es_": "Bebió café sin azúcar.",
            "tr_": "Kahvesini şekersiz içti."
        }
    ],
    "Action words" : [
        {
            "en": "to whisper",
            "es": "cuchichear",
            "tr": "fısıldamak",
            "en_": "She whispered a secret to me.",
            "es_": "Ella me cuchicheó un secreto.",
            "tr_": "Bana bir sır fısıldadı."
        },
        {
            "en": "to shout",
            "es": "gritar",
            "tr": "bağırmak",
            "en_": "He shouted loudly at the game.",
            "es_": "Él gritó fuerte en el partido.",
            "tr_": "Maçta yüksek sesle bağırdı."
        },
        {
            "en": "to look for",
            "es": "buscar",
            "tr": "aramak",
            "en_": "I am looking for my keys.",
            "es_": "Estoy buscando mis llaves.",
            "tr_": "Anahtarlarımı arıyorum."
        },
        {
            "en": "to wait",
            "es": "esperar",
            "tr": "beklemek",
            "en_": "We have to wait for the bus.",
            "es_": "Tenemos que esperar el autobús.",
            "tr_": "Otobüsü beklemek zorundayız."
        },
        {
            "en": "to hope [to expect]",
            "es": "esperar",
            "tr": "ummak",
            "en_": "I hope everything goes well.",
            "es_": "Espero que todo salga bien.",
            "tr_": "Her şeyin iyi gitmesini umuyorum."
        },
        {
            "en": "to lean on",
            "es": "apoyarse en",
            "tr": "-e dayanmak",
            "en_": "She leaned on the wall for support.",
            "es_": "Ella se apoyó en la pared para sostenerse.",
            "tr_": "Desteğe dayanmak için duvara yaslandı."
        },
        {
            "en": "to rely on",
            "es": "apoyarse en",
            "tr": "güvenmek",
            "en_": "You can rely on me.",
            "es_": "Puedes apoyarte en mí.",
            "tr_": "Bana güvenebilirsin."
        },
        {
            "en": "to have",
            "es": "tener",
            "tr": "sahip olmak",
            "en_": "I have a car.",
            "es_": "Tengo un coche.",
            "tr_": "Bir arabam var."
        },
        {
            "en": "to carry",
            "es": "llevar",
            "tr": "taşımak",
            "en_": "He is carrying a heavy bag.",
            "es_": "Él está llevando una bolsa pesada.",
            "tr_": "Ağır bir çanta taşıyor."
        },
        {
            "en": "to take",
            "es": "llevar",
            "tr": "götürmek",
            "en_": "Please take this to the office.",
            "es_": "Por favor lleva esto a la oficina.",
            "tr_": "Lütfen bunu ofise götür."
        },
        {
            "en": "to drop [to let fall]",
            "es": "dejar caer",
            "tr": "düşürmek [yere bırakmak]",
            "en_": "I accidentally dropped my phone.",
            "es_": "Dejé caer mi teléfono por accidente.",
            "tr_": "Telefonumu kazara düşürdüm."
        },
        {
            "en": "to pick up",
            "es": "recoger",
            "tr": "gidip almak",
            "en_": "Can you pick up the package?",
            "es_": "¿Puedes recoger el paquete?",
            "tr_": "Paketi gidip alabilir misin?"
        },
        {
            "en": "to collect",
            "es": "recoger",
            "tr": "toplamak",
            "en_": "She collects stamps as a hobby.",
            "es_": "Ella recoge sellos como pasatiempo.",
            "tr_": "O, pul toplamayı hobi olarak yapıyor."
        },
        {
            "en": "to deposit",
            "es": "depositar",
            "tr": "yatırmak",
            "en_": "I need to deposit money in the bank.",
            "es_": "Necesito depositar dinero en el banco.",
            "tr_": "Bankaya para yatırmam gerekiyor."
        },
        {
            "en": "to put",
            "es": "depositar",
            "tr": "koymak",
            "en_": "Please put the book on the table.",
            "es_": "Por favor, deposita el libro en la mesa.",
            "tr_": "Lütfen kitabı masanın üzerine koy."
        },
        {
            "en": "to touch",
            "es": "tocar",
            "tr": "dokunmak",
            "en_": "Don't touch the hot stove.",
            "es_": "No toques la estufa caliente.",
            "tr_": "Sıcak sobaya dokunma."
        },
        {
            "en": "to play",
            "es": "tocar",
            "tr": "çalmak",
            "en_": "He plays the guitar very well.",
            "es_": "Él toca la guitarra muy bien.",
            "tr_": "O, gitarı çok iyi çalıyor."
        },
        {
            "en": "to open",
            "es": "abrir",
            "tr": "açmak",
            "en_": "Can you open the door, please?",
            "es_": "¿Puedes abrir la puerta, por favor?",
            "tr_": "Kapıyı açabilir misin, lütfen?"
        },
        {
            "en": "to close",
            "es": "cerrar",
            "tr": "kapatmak",
            "en_": "Don't forget to close the window.",
            "es_": "No olvides cerrar la ventana.",
            "tr_": "Pencereyi kapatmayı unutma."
        },
        {
            "en": "to pour",
            "es": "verter",
            "tr": "dökmek",
            "en_": "She poured some water into the glass.",
            "es_": "Ella vertió un poco de agua en el vaso.",
            "tr_": "Bardağa biraz su döktü."
        },
        {
            "en": "to fill",
            "es": "llenar",
            "tr": "doldurmak",
            "en_": "Please fill the bottle with juice.",
            "es_": "Por favor, llena la botella con jugo.",
            "tr_": "Lütfen şişeyi meyve suyu ile doldur."
        },
        {
            "en": "to shake",
            "es": "sacudir",
            "tr": "sallamak",
            "en_": "He shook the bottle before opening it.",
            "es_": "Él sacudió la botella antes de abrirla.",
            "tr_": "Şişeyi açmadan önce salladı."
        },
        {
            "en": "to empty",
            "es": "vaciar",
            "tr": "boşaltmak",
            "en_": "Please empty the trash bin.",
            "es_": "Por favor, vacía el bote de basura.",
            "tr_": "Lütfen çöp kutusunu boşalt."
        },
        {
            "en": "to tear",
            "es": "romper",
            "tr": "yırtmak",
            "en_": "Be careful not to tear the paper.",
            "es_": "Ten cuidado de no romper el papel.",
            "tr_": "Kağıdı yırtmamaya dikkat et."
        },
        {
            "en": "to mend",
            "es": "zurcir",
            "tr": "dikmek",
            "en_": "She mended the torn shirt.",
            "es_": "Ella zurció la camisa rota.",
            "tr_": "Yırtılan gömleği dikti."
        },
        {
            "en": "to throw",
            "es": "tirar",
            "tr": "atmak [fırlatmak]",
            "en_": "He threw the ball to his friend.",
            "es_": "Él tiró la pelota a su amigo.",
            "tr_": "Topu arkadaşına attı."
        },
        {
            "en": "to catch",
            "es": "coger",
            "tr": "tutmak [yakalamak]",
            "en_": "He caught the ball quickly.",
            "es_": "Él cogió la pelota rápidamente.",
            "tr_": "Topu hızlıca yakaladı."
        },
        {
            "en": "to knock over",
            "es": "volcar",
            "tr": "devirmek",
            "en_": "She accidentally knocked over the vase.",
            "es_": "Ella accidentalmente volcó el jarrón.",
            "tr_": "Kazara vazoyu devirdi."
        },
        {
            "en": "to break",
            "es": "romper",
            "tr": "kırmak [bozmak]",
            "en_": "Be careful not to break the glass.",
            "es_": "Ten cuidado de no romper el vaso.",
            "tr_": "Bardağı kırmamaya dikkat et."
        },
        {
            "en": "to pull",
            "es": "tirar de [jalar]",
            "tr": "çekmek",
            "en_": "She pulled the door open.",
            "es_": "Ella tiró de la puerta para abrirla.",
            "tr_": "Kapıyı çekerek açtı."
        },
        {
            "en": "to push",
            "es": "empujar",
            "tr": "itmek",
            "en_": "He pushed the cart down the street.",
            "es_": "Él empujó el carrito por la calle.",
            "tr_": "Arabayı sokakta itti."
        },
        {
            "en": "to steal",
            "es": "robar",
            "tr": "çalmak",
            "en_": "Someone tried to steal my wallet.",
            "es_": "Alguien intentó robar mi cartera.",
            "tr_": "Birisi cüzdanımı çalmaya çalıştı."
        },
        {
            "en": "to slip",
            "es": "resbalar",
            "tr": "kaymak",
            "en_": "Be careful not to slip on the ice.",
            "es_": "Ten cuidado de no resbalar en el hielo.",
            "tr_": "Buzda kaymamaya dikkat et."
        },
        {
            "en": "to follow",
            "es": "seguir",
            "tr": "takip etmek",
            "en_": "The dog follows its owner everywhere.",
            "es_": "El perro sigue a su dueño a todas partes.",
            "tr_": "Köpek sahibini her yerde takip eder."
        },
        {
            "en": "to hide",
            "es": "esconderse",
            "tr": "saklanmak [gizlemek]",
            "en_": "The child hid behind the tree.",
            "es_": "El niño se escondió detrás del árbol.",
            "tr_": "Çocuk ağacın arkasına saklandı."
        }
    ]
};
