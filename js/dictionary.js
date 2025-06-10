'use strict';

const DICTIONARY = {
    "Meeting people" : [
        {
            "en" : "Hello",
            "es" : "¡Hola!",
            "tr" : "Merhaba",
            "type" : "interjection"
        },
        {
            "en" : "Goodbye!",
            "es" : "¡Adiós!",
            "tr" : "Hoşçakal!",
            "type" : "interjection"
        },
        {
            "en" : "See you later",
            "es" : "¡Hasta pronto!",
            "tr" : "Görüşmek üzere",
            "type" : "interjection"
        },
        {
            "en" : "to shake hands",
            "es" : "dar la mano",
            "tr" : "el sıkışmak",
            "type" : "verb"
        },
        {
            "en" : "man",
            "es" : "el hombre",
            "tr" : "adam",
            "type" : "noun"
        },
        {
            "en" : "woman",
            "es" : "la mujer",
            "tr" : "kadın",
            "type" : "noun"
        },
        {
            "en" : "baby",
            "es" : "el bebé",
            "tr" : "bebek",
            "type" : "noun"
        },
        {
            "en" : "boy",
            "es" : "el niño",
            "tr" : "erkek çocuğu",
            "type" : "noun"
        },
        {
            "en" : "girl",
            "es" : "la niña",
            "tr" : "kız çocuğu",
            "type" : "noun"
        },
        {
            "en" : "to introduce",
            "es" : "presentar",
            "tr" : "tanıtmak",
            "type" : "verb"
        },
        {
            "en" : "friend",
            "es" : "el amigo / la amiga",
            "tr" : "arkadaş",
            "type" : "noun"
        },
        {
            "en" : "to meet",
            "es" : "encontrarse con",
            "tr" : "tanışmak",
            "type" : "verb"
        },
        {
            "en" : "How are you?",
            "es" : "¿Qué tal?",
            "tr" : "Nasılsın?",
            "type" : "phrase"
        },
        {
            "en" : "Very well, thank you",
            "es" : "Muy bien, ¡gracias!",
            "tr" : "Çok iyiyim teşekkür ederim",
            "type" : "expression"
        },
        {
            "en" : "to chat",
            "es" : "charlar",
            "tr" : "sohbet etmek",
            "type" : "verb"
        },
        {
            "en" : "yes",
            "es" : "sí",
            "tr" : "evet",
            "type" : "interjection"
        },
        {
            "en" : "no",
            "es" : "no",
            "tr" : "hayır",
            "type" : "interjection"
        },
        {
            "en" : "to say",
            "es" : "decir",
            "tr" : "söylemek",
            "type" : "verb"
        },
        {
            "en" : "ok",
            "es" : "de acuerdo",
            "tr" : "tamam",
            "type" : "adverb"
        },
        {
            "en" : "name",
            "es" : "el nombre",
            "tr" : "ad",
            "type" : "noun"
        },
        {
            "en" : "first name",
            "es" : "el nombre de pila",
            "tr" : "ilk isim",
            "type" : "noun"
        },
        {
            "en" : "surname",
            "es" : "el apellido",
            "tr" : "soyadı",
            "type" : "noun"
        },
        {
            "en" : "What is your name?",
            "es" : "¿Cómo te llamas?",
            "tr" : "Adın ne?",
            "type" : "phrase"
        },
        {
            "en" : "My name is ...",
            "es" : "Me llamo ...",
            "tr" : "Benim adım ...",
            "type" : "expression"
        },
        {
            "en" : "His name is ...",
            "es" : "El se llama ...",
            "tr" : "Onun adı ...",
            "type" : "expression"
        },
        {
            "en" : "age",
            "es" : "la edad",
            "tr" : "yaş",
            "type" : "noun"
        },
        {
            "en" : "How old are you?",
            "es" : "¿Cuántos años tienes?",
            "tr" : "Kaç yaşındasın?",
            "type" : "expression"
        },
        {
            "en" : "I am nineteen",
            "es" : "Tengo diecinueve años",
            "tr" : "Ondokuz yaşındayım",
            "type" : "expression"
        },
        {
            "en" : "small",
            "es" : "pequeño(a)",
            "tr" : "küçük",
            "type" : "adjective"
        },
        {
            "en" : "old",
            "es" : "mayor",
            "tr" : "yaşlı",
            "type" : "adjective"
        },
        {
            "en" : "older than",
            "es" : "mayor que",
            "tr" : "...den yaşlı",
            "type" : "phrase"
        },
        {
            "en" : "smaller than",
            "es" : "más pequeño(a) que",
            "tr" : "...den küçük",
            "type" : "phrase"
        },
        {
            "en" : "the same age",
            "es" : "la misma edad",
            "tr" : "aynı yaşta",
            "type" : "phrase"
        }
    ],
    "Family" : [
        {
            "en" : "family",
            "es" : "la familia",
            "tr" : "aile",
            "type" : "noun"
        },
        {
            "en" : "father",
            "es" : "el padre",
            "tr" : "baba",
            "type" : "noun"
        },
        {
            "en" : "mother",
            "es" : "la madre",
            "tr" : "anne",
            "type" : "noun"
        },
        {
            "en" : "brother",
            "es" : "el hermano",
            "tr" : "erkek kardeş",
            "type" : "noun"
        },
        {
            "en" : "sister",
            "es" : "la hermana",
            "tr" : "kız kardeş",
            "type" : "noun"
        },
        {
            "en" : "grandfather",
            "es" : "el abuelo",
            "tr" : "büyükbaba",
            "type" : "noun"
        },
        {
            "en" : "grandmother",
            "es" : "la abuela",
            "tr" : "büyükanne",
            "type" : "noun"
        },
        {
            "en" : "uncle",
            "es" : "el tío",
            "tr" : "amca",
            "type" : "noun"
        },
        {
            "en" : "aunt",
            "es" : "la tía",
            "tr" : "teyze",
            "type" : "noun"
        },
        {
            "en" : "cousin",
            "es" : "el primo / la prima",
            "tr" : "kuzen",
            "type" : "nount"
        },
        {
            "en" : "to be related",
            "es" : "ser parientes",
            "tr" : "akraba olmak",
            "type" : "verb"
        },
        {
            "en" : "son",
            "es" : "el hijo",
            "tr" : "erkek evlat [oğul]",
            "type" : "noun"
        },
        {
            "en" : "daughter",
            "es" : "la hija",
            "tr" : "kız evlat",
            "type" : "noun"
        },
        {
            "en" : "to bring up",
            "es" : "criar",
            "tr" : "büyütmek",
            "type" : "verb"
        },
        {
            "en" : "grandson",
            "es" : "el nieto",
            "tr" : "erkek torun",
            "type" : "noun"
        },
        {
            "en" : "granddaughter",
            "es" : "la nieta",
            "tr" : "kız torun",
            "type" : "noun"
        },
        {
            "en" : "to be fond of",
            "es" : "tenerle cariño",
            "tr" : "düşkün olmak",
            "type" : "verb"
        },
        {
            "en" : "nephew",
            "es" : "el sobrino",
            "tr" : "erkek yeğen",
            "type" : "noun"
        },
        {
            "en" : "niece",
            "es" : "la sobrina",
            "tr" : "kız yeğen",
            "type" : "noun"
        },
        {
            "en" : "husband",
            "es" : "el marido",
            "tr" : "koca [eş]",
            "type" : "noun"
        },
        {
            "en" : "wife",
            "es" : "la mujer",
            "tr" : "eş",
            "type" : "noun"
        },
        {
            "en" : "parents",
            "es" : "los padres",
            "tr" : "ebeveynler",
            "type" : "noun"
        },
        {
            "en" : "to love",
            "es" : "querer",
            "tr" : "sevmek",
            "type" : "verb"
        },
        {
            "en" : "children",
            "es" : "los hijos",
            "tr" : "çocuklar [evlatlar]",
            "type" : "noun"
        },
        {
            "en" : "twin",
            "es" : "el gemelo / la gemela",
            "tr" : "ikiz",
            "type" : "noun"
        },
        {
            "en" : "only son",
            "es" : "el hijo único",
            "tr" : "tek erkek çocuk",
            "type" : "noun"
        },
        {
            "en" : "life",
            "es" : "la vida",
            "tr" : "hayat",
            "type" : "noun"
        },
        {
            "en" : "birth",
            "es" : "el nacimiento",
            "tr" : "doğum",
            "type" : "noun"
        },
        {
            "en" : "to be born",
            "es" : "nacer",
            "tr" : "doğmak",
            "type" : "verb"
        },
        {
            "en" : "childhood",
            "es" : "la niñez",
            "tr" : "çocukluk",
            "type" : "noun"
        },
        {
            "en" : "marriage",
            "es" : "el casamiento",
            "tr" : "evlilik",
            "type" : "noun"
        },
        {
            "en" : "to get married",
            "es" : "casarse",
            "tr" : "evlenmek",
            "type" : "verb"
        },
        {
            "en" : "wedding",
            "es" : "la boda",
            "tr" : "düğün",
            "type" : "noun"
        },
        {
            "en" : "to work",
            "es" : "trabajar",
            "tr" : "çalışmak",
            "type" : "verb"
        },
        {
            "en" : "old age",
            "es" : "la vejez",
            "tr" : "yaşlılık",
            "type" : "noun"
        },
        {
            "en" : "death",
            "es" : "la muerte",
            "tr" : "ölüm",
            "type" : "noun"
        },
        {
            "en" : "to die",
            "es" : "morirse",
            "tr" : "ölmek",
            "type" : "verb"
        },
        {
            "en" : "funeral",
            "es" : "el entierro",
            "tr" : "cenaze",
            "type" : "noun"
        }
    ],
    "Appearance and personality" : [
        {
            "en" : "pretty",
            "es" : "bonito(a)",
            "tr" : "sevimli",
            "type" : "adjective"
        },
        {
            "en" : "handsome",
            "es" : "guapo(a)",
            "tr" : "yakışıklı",
            "type" : "adjective"
        },
        {
            "en" : "strong",
            "es" : "fuerte",
            "tr" : "güçlü",
            "type" : "adjective"
        },
        {
            "en" : "weak",
            "es" : "débil",
            "tr" : "güçsüz",
            "type" : "adjective"
        },
        {
            "en" : "thin",
            "es" : "flaco(a)",
            "tr" : "sıska",
            "type" : "adjective"
        },
        {
            "en" : "slim",
            "es" : "delgado(a)",
            "tr" : "zayıf",
            "type" : "adjective"
        },
        {
            "en" : "fat",
            "es" : "gordo(a)",
            "tr" : "şişman",
            "type" : "adjective"
        },
        {
            "en" : "well educated",
            "es" : "bien educado(a)",
            "tr" : "iyi eğitimli",
            "type" : "adjective"
        },
        {
            "en" : "rude",
            "es" : "maleducado(a)",
            "tr" : "kaba",
            "type" : "adjective"
        },
        {
            "en" : "generous",
            "es" : "generoso(a)",
            "tr" : "cömert",
            "type" : "adjective"
        },
        {
            "en" : "silly",
            "es" : "tonto(a)",
            "tr" : "aptal",
            "type" : "adjective"
        },
        {
            "en" : "friendly",
            "es" : "amistoso(a)",
            "tr" : "arkadaşça",
            "type" : "adjective"
        },
        {
            "en" : "funny",
            "es" : "gracioso(a)",
            "tr" : "eğlenceli",
            "type" : "adjective"
        },
        {
            "en" : "cheerful",
            "es" : "alegre",
            "tr" : "neşeli",
            "type" : "adjective"
        },
        {
            "en" : "miserable",
            "es" : "triste",
            "tr" : "üzgün",
            "type" : "adjective"
        },
        {
            "en" : "to have blonde hair",
            "es" : "tener el pelo rubio",
            "tr" : "sarı saçlı olmak",
            "type" : "verb"
        },
        {
            "en" : "brown hair",
            "es" : "el pelo castaño",
            "tr" : "kahverengi saç",
            "type" : "noun"
        },
        {
            "en" : "straight hair",
            "es" : "el pelo liso",
            "tr" : "düz saç",
            "type" : "noun"
        },
        {
            "en" : "red hair",
            "es" : "el pelo rojo",
            "tr" : "kızıl saç",
            "type" : "noun"
        },
        {
            "en" : "curly hair",
            "es" : "el pelo rizado",
            "tr" : "kıvırcık saç",
            "type" : "noun"
        },
        {
            "en" : "braids",
            "es" : "trenzas",
            "tr" : "örgüler",
            "type" : "noun"
        },
        {
            "en" : "bald",
            "es" : "calvo(a)",
            "tr" : "kel",
            "type" : "adjective"
        },
        {
            "en" : "complexion",
            "es" : "la tez",
            "tr" : "ten rengi",
            "type" : "noun"
        },
        {
            "en" : "dark",
            "es" : "moreno(a)",
            "tr" : "koyu",
            "type" : "adjective"
        },
        {
            "en" : "fair",
            "es" : "blanco(a)",
            "tr" : "açık",
            "type" : "adjective"
        },
        {
            "en" : "frekles",
            "es" : "las pecas",
            "tr" : "çiller",
            "type" : "adjective"
        },
        {
            "en" : "moustache",
            "es" : "el bigote",
            "tr" : "bıyık",
            "type" : "noun"
        },
        {
            "en" : "beard",
            "es" : "la barba",
            "tr" : "sakal",
            "type" : "noun"
        },
        {
            "en" : "to wear glasses",
            "es" : "llevar gafas",
            "tr" : "gözlük takmak",
            "type" : "verb"
        },
        {
            "en" : "to frown",
            "es" : "fruncir el ceño",
            "tr" : "kaşlarını çatmak",
            "type" : "verb"
        },
        {
            "en" : "to smile",
            "es" : "sonreírse",
            "tr" : "gülümsemek",
            "type" : "verb"
        },
        {
            "en" : "to laugh",
            "es" : "reírse",
            "tr" : "gülmek",
            "type" : "verb"
        },
        {
            "en" : "to cry",
            "es" : "llorar",
            "tr" : "ağlamak",
            "type" : "verb"
        }
    ],
    "Body" : [
        {
            "en" : "head",
            "es" : "la cabeza",
            "tr" : "kafa",
            "type" : "noun"
        },
        {
            "en" : "hair",
            "es" : "el pelo",
            "tr" : "saç",
            "type" : "noun"
        },
        {
            "en" : "face",
            "es" : "la cara",
            "tr" : "yüz",
            "type" : "noun"
        },
        {
            "en" : "skin",
            "es" : "la piel",
            "tr" : "ten [cilt]",
            "type" : "noun"
        },
        {
            "en" : "eye",
            "es" : "el ojo",
            "tr" : "göz",
            "type" : "noun"
        },
        {
            "en" : "cheek",
            "es" : "la mejilla",
            "tr" : "yanak",
            "type" : "noun"
        },
        {
            "en" : "nose",
            "es" : "la nariz",
            "tr" : "burun",
            "type" : "noun"
        },
        {
            "en" : "ear",
            "es" : "la oreja",
            "tr" : "kulak",
            "type" : "noun"
        },
        {
            "en" : "mouth",
            "es" : "la boca",
            "tr" : "ağız",
            "type" : "noun"
        },
        {
            "en" : "tooth",
            "es" : "el diente",
            "tr" : "diş",
            "type" : "noun"
        },
        {
            "en" : "tongue",
            "es" : "la lengua",
            "tr" : "dil",
            "type" : "noun"
        },
        {
            "en" : "lip",
            "es" : "el labio",
            "tr" : "dudak",
            "type" : "noun"
        },
        {
            "en" : "neck",
            "es" : "el cuello",
            "tr" : "boyun",
            "type" : "noun"
        },
        {
            "en" : "chin",
            "es" : "la barbilla",
            "tr" : "çene",
            "type" : "noun"
        },
        {
            "en" : "body",
            "es" : "el cuerpo",
            "tr" : "vücut",
            "type" : "noun"
        },
        {
            "en" : "shoulder",
            "es" : "el hombro",
            "tr" : "omuz",
            "type" : "noun"
        },
        {
            "en" : "chest",
            "es" : "el pecho",
            "tr" : "göğüs",
            "type" : "noun"
        },
        {
            "en" : "arm",
            "es" : "el brazo",
            "tr" : "kol",
            "type" : "noun"
        },
        {
            "en" : "elbow",
            "es" : "el codo",
            "tr" : "dirsek",
            "type" : "noun"
        },
        {
            "en" : "hand",
            "es" : "la mano",
            "tr" : "el",
            "type" : "noun"
        },
        {
            "en" : "finger",
            "es" : "el dedo",
            "tr" : "parmak",
            "type" : "noun"
        },
        {
            "en" : "thumb",
            "es" : "el pulgar",
            "tr" : "başparmak",
            "type" : "noun"
        },
        {
            "en" : "wrist",
            "es" : "la muñeca",
            "tr" : "el bileği",
            "type" : "noun"
        },
        {
            "en" : "back",
            "es" : "la espalda",
            "tr" : "sırt",
            "type" : "noun"
        },
        {
            "en" : "stomach",
            "es" : "el estómago",
            "tr" : "karın",
            "type" : "noun"
        },
        {
            "en" : "leg",
            "es" : "la pierna",
            "tr" : "bacak",
            "type" : "noun"
        },
        {
            "en" : "knee",
            "es" : "la rodilla",
            "tr" : "diz",
            "type" : "noun"
        },
        {
            "en" : "toe",
            "es" : "el dedo de los pies",
            "tr" : "ayak parmağı",
            "type" : "noun"
        },
        {
            "en" : "foot",
            "es" : "el pie",
            "tr" : "ayak",
            "type" : "noun"
        },
        {
            "en" : "ankle",
            "es" : "el tobillo",
            "tr" : "ayak bileği",
            "type" : "noun"
        },
        {
            "en" : "heel",
            "es" : "el talón",
            "tr" : "topuk",
            "type" : "noun"
        },
        {
            "en" : "tall",
            "es" : "alto(a)",
            "tr" : "uzun",
            "type" : "adjective"
        },
        {
            "en" : "short",
            "es" : "bajo(a)",
            "tr" : "kısa",
            "type" : "adjective"
        },
        {
            "en" : "light",
            "es" : "ligero(a)",
            "tr" : "hafif",
            "type" : "adjective"
        },
        {
            "en" : "heavy",
            "es" : "pesado(a)",
            "tr" : "ağır",
            "type" : "adjective"
        },
        {
            "en" : "left side",
            "es" : "el lado izquierdo",
            "tr" : "sol taraf",
            "type" : "noun"
        },
        {
            "en" : "right side",
            "es" : "el lado derecho",
            "tr" : "sağ taraf",
            "type" : "noun"
        },
        {
            "en" : "to stand up",
            "es" : "ponerse de pie",
            "tr" : "ayağa kalkmak",
            "type" : "verb"
        },
        {
            "en" : "to be standing",
            "es" : "estar de pie",
            "tr" : "ayakta durmak",
            "type" : "verb"
        },
        {
            "en" : "to kneel down",
            "es" : "arrodillarse",
            "tr" : "diz çökmek",
            "type" : "verb"
        },
        {
            "en" : "to be kneeling",
            "es" : "estar de rodillas",
            "tr" : "dizüstü durmak",
            "type" : "verb"
        },
        {
            "en" : "to lie down",
            "es" : "tumbarse",
            "tr" : "uzanmak",
            "type" : "verb"
        },
        {
            "en" : "to be lying down",
            "es" : "estar echado(a)",
            "tr" : "uzanmış olmak",
            "type" : "verb"
        },
        {
            "en" : "to sit down",
            "es" : "sentarse",
            "tr" : "oturmak",
            "type" : "verb"
        },
        {
            "en" : "to be sitting down",
            "es" : "estar sentado(a)",
            "tr" : "oturmuş olmak",
            "type" : "verb"
        }
    ],
    "Houses and homes" : [
        {
            "en" : "apartment building",
            "es" : "la casa de pisos",
            "tr" : "apartman",
            "type" : "noun"
        },
        {
            "en" : "apartment",
            "es" : "el piso",
            "tr" : "daire",
            "type" : "noun"
        },
        {
            "en" : "second floor",
            "es" : "segundo piso",
            "tr" : "ikinci kat",
            "type" : "noun"
        },
        {
            "en" : "front door",
            "es" : "la puerta de entrada",
            "tr" : "giriş kapısı",
            "type" : "noun"
        },
        {
            "en" : "doorbell",
            "es" : "el timbre",
            "tr" : "kapı zili",
            "type" : "noun"
        },
        {
            "en" : "to ring the bell",
            "es" : "tocar el timbre",
            "tr" : "kapı zilini çalmak",
            "type" : "verb"
        },
        {
            "en" : "mailbox",
            "es" : "el buzón",
            "tr" : "posta kutusu",
            "type" : "noun"
        },
        {
            "en" : "doormat",
            "es" : "el felpudo",
            "tr" : "paspas",
            "type" : "noun"
        },
        {
            "en" : "balcony",
            "es" : "el balcón",
            "tr" : "balkon",
            "type" : "noun"
        },
        {
            "en" : "first floor",
            "es" : "primer piso",
            "tr" : "birinci kat",
            "type" : "noun"
        },
        {
            "en" : "caretaker",
            "es" : "el portero / la portera",
            "tr" : "kapıcı",
            "type" : "noun"
        },
        {
            "en" : "ground floor",
            "es" : "piso bajo",
            "tr" : "zemin kat",
            "type" : "noun"
        },
        {
            "en" : "house",
            "es" : "la casa",
            "tr" : "ev",
            "type" : "noun"
        },
        {
            "en" : "to live in a house",
            "es" : "vivir en una casa",
            "tr" : "evde yaşamak",
            "type" : "verb"
        },
        {
            "en" : "neighbor",
            "es" : "el vecino / la vecina",
            "tr" : "komşu",
            "type" : "noun"
        },
        {
            "en" : "move",
            "es" : "mudarse",
            "tr" : "taşınmak",
            "type" : "verb"
        },
        {
            "en" : "guest",
            "es" : "el huésped / la huésped",
            "tr" : "misaifr",
            "type" : "noun"
        },
        {
            "en" : "basement",
            "es" : "el sótano",
            "tr" : "bodrum",
            "type" : "noun"
        },
        {
            "en" : "smoke",
            "es" : "el humo",
            "tr" : "duman",
            "type" : "noun"
        },
        {
            "en" : "roof",
            "es" : "el tejado",
            "tr" : "çatı",
            "type" : "noun"
        },
        {
            "en" : "chimney",
            "es" : "la chimenea",
            "tr" : "baca",
            "type" : "noun"
        },
        {
            "en" : "attic",
            "es" : "el desván",
            "tr" : "çatı katı",
            "type" : "noun"
        },
        {
            "en" : "window",
            "es" : "la ventana",
            "tr" : "pencere",
            "type" : "noun"
        },
        {
            "en" : "wall",
            "es" : "la pared",
            "tr" : "duvar",
            "type" : "noun"
        },
        {
            "en" : "door",
            "es" : "la puerta",
            "tr" : "kapı",
            "type" : "noun"
        },
        {
            "en" : "toilet",
            "es" : "el baño",
            "tr" : "tuvalet",
            "type" : "noun"
        },
        {
            "en" : "bedroom",
            "es" : "el dormitorio",
            "tr" : "yatak odası",
            "type" : "noun"
        },
        {
            "en" : "bathroom",
            "es" : "baño",
            "tr" : "banyo",
            "type" : "noun"
        },
        {
            "en" : "kitchen",
            "es" : "la cocina",
            "tr" : "mutfak",
            "type" : "noun"
        },
        {
            "en" : "dining room",
            "es" : "el comedor",
            "tr" : "yemek odası",
            "type" : "noun"
        },
        {
            "en" : "garage",
            "es" : "el garaje",
            "tr" : "garaj",
            "type" : "noun"
        },
        {
            "en" : "upstairs",
            "es" : "arriba",
            "tr" : "yukarı",
            "type" : "adverb"
        },
        {
            "en" : "to go upstairs",
            "es" : "subir",
            "tr" : "yukarı çıkmak",
            "type" : "verb"
        },
        {
            "en" : "to go downstairs",
            "es" : "bajar",
            "tr" : "aşağı inmek",
            "type" : "verb"
        },
        {
            "en" : "stairs",
            "es" : "la escaler",
            "tr" : "merdiven",
            "type" : "noun"
        },
        {
            "en" : "downstairs",
            "es" : "abajo",
            "tr" : "aşağı",
            "type" : "adverb"
        },
        {
            "en" : "living room",
            "es" : "la sala de estar",
            "tr" : "oturma odası",
            "type" : "noun"
        }
    ],
    "Dining room and living room" : [
        {
            "en" : "light",
            "es" : "la luz",
            "tr" : "ışık",
            "type" : "noun"
        },
        {
            "en" : "radiator",
            "es" : "el radiador",
            "tr" : "radyatör",
            "type" : "noun"
        },
        {
            "en" : "table",
            "es" : "la mesa",
            "tr" : "masa",
            "type" : "noun"
        },
        {
            "en" : "chair",
            "es" : "la silla",
            "tr" : "sandalye",
            "type" : "noun"
        },
        {
            "en" : "floor",
            "es" : "el suelo",
            "tr" : "zemin",
            "type" : "noun"
        },
        {
            "en" : "carpet [rug]",
            "es" : "la alfombra",
            "tr" : "halı [kilim]",
            "type" : "noun"
        },
        {
            "en" : "clock",
            "es" : "el reloj",
            "tr" : "saat",
            "type" : "noun"
        },
        {
            "en" : "curtain",
            "es" : "la cortina",
            "tr" : "perde",
            "type" : "noun"
        },
        {
            "en" : "fire",
            "es" : "el fuego",
            "tr" : "ateş",
            "type" : "noun"
        },
        {
            "en" : "armchair",
            "es" : "el sillón",
            "tr" : "koltuk",
            "type" : "noun"
        },
        {
            "en" : "sofa",
            "es" : "el sofá",
            "tr" : "kanepe",
            "type" : "noun"
        },
        {
            "en" : "television",
            "es" : "la televisión",
            "tr" : "televizyon",
            "type" : "noun"
        },

        {
            "en" : "radio",
            "es" : "la radio",
            "tr" : "radyo",
            "type" : "noun"
        }
    ],
    "Kitchen" : [
        {
            "en" : "cupboard",
            "es" : "la alacena",
            "tr" : "mutfak dolabı",
            "type" : "noun"
        },
        {
            "en" : "washing machine",
            "es" : "la lavadora",
            "tr" : "çamaşır makinesi",
            "type" : "noun"
        },
        {
            "en" : "refrigerator",
            "es" : "la nevera",
            "tr" : "buzdolabı",
            "type" : "noun"
        },
        {
            "en" : "oven",
            "es" : "el horno",
            "tr" : "fırın",
            "type" : "noun"
        },
        {
            "en" : "to cook",
            "es" : "guisar",
            "tr" : "pişirmek",
            "type" : "verb"
        },
        {
            "en" : "saucepan",
            "es" : "la cacerola",
            "tr" : "tencere",
            "type" : "noun"
        },
        {
            "en" : "gas",
            "es" : "el gas",
            "tr" : "gaz",
            "type" : "noun"
        },
        {
            "en" : "thrash can",
            "es" : "la lata de la basura",
            "tr" : "çöp kovası",
            "type" : "noun"
        },
        {
            "en" : "to iron",
            "es" : "planchar",
            "tr" : "ütülemek",
            "type" : "verb"
        },
        {
            "en" : "plug",
            "es" : "el enchufe",
            "tr" : "fiş",
            "type" : "noun"
        },
        {
            "en" : "electricity",
            "es" : "la electricidad",
            "tr" : "elektrik",
            "type" : "noun"
        },
        {
            "en" : "to do the dishes",
            "es" : "fregar",
            "tr" : "bulaşıkları yıkamak",
            "type" : "verb"
        },
        {
            "en" : "dirty",
            "es" : "sucio(a)",
            "tr" : "kirli",
            "type" : "adjective"
        },
        {
            "en" : "sink",
            "es" : "el fregadero",
            "tr" : "lavabo",
            "type" : "noun"
        },
        {
            "en" : "to dry",
            "es" : "secar",
            "tr" : "kurutmak",
            "type" : "verb"
        },
        {
            "en" : "clean",
            "es" : "limpio(a)",
            "tr" : "temiz",
            "type" : "adjective"
        }
    ],
    "Bath" : [
        {
            "en" : "to take bath",
            "es" : "bañarse",
            "tr" : "banyo yapmak",
            "type" : "verb"
        },
        {
            "en" : "bathtub",
            "es" : "la bañera",
            "tr" : "küvet",
            "type" : "noun"
        },
        {
            "en" : "the bathtub plug",
            "es" : "el tapón de bañera",
            "tr" : "küvet tıpası",
            "type" : "noun"
        },
        {
            "en" : "bathrobe",
            "es" : "el albornoz",
            "tr" : "bornoz",
            "type" : "noun"
        },
        {
            "en" : "scales",
            "es" : "la báscula",
            "tr" : "baskül",
            "type" : "noun"
        },
        {
            "en" : "to splash",
            "es" : "salpicar",
            "tr" : "sıçramak",
            "type" : "verb"
        }
    ],
    "Garden" : [
        {
            "en" : "lawn",
            "es" : "el césped",
            "tr" : "çimen",
            "type" : "noun"
        },
        {
            "en" : "path",
            "es" : "el sendero",
            "tr" : "patika",
            "type" : "noun"
        },
        {
            "en" : "gardener",
            "es" : "el jardinero / la jardinera",
            "tr" : "bahçıvan",
            "type" : "noun"
        },
        {
            "en" : "lawnmower",
            "es" : "el cortacésped",
            "tr" : "çim biçme makinesi",
            "type" : "noun"
        },
        {
            "en" : "to mow the lawn",
            "es" : "cortar el cesped",
            "tr" : "çimleri biçmek",
            "type" : "verb"
        },
        {
            "en" : "soil",
            "es" : "la tierra",
            "tr" : "toprak",
            "type" : "noun"
        },
        {
            "en" : "herb",
            "es" : "la hierba",
            "tr" : "bitki",
            "type" : "noun"
        },
        {
            "en" : "tree",
            "es" : "el árbol",
            "tr" : "ağaç",
            "type" : "noun"
        },
        {
            "en" : "greenhouse",
            "es" : "el invernadero",
            "tr" : "sera",
            "type" : "noun"
        },
        {
            "en" : "bird",
            "es" : "el pájaro",
            "tr" : "kuş",
            "type" : "noun"
        },
        {
            "en" : "nest",
            "es" : "el nido",
            "tr" : "yuva",
            "type" : "noun"
        },
        {
            "en" : "bush",
            "es" : "el arbusto",
            "tr" : "çalı",
            "type" : "noun"
        },
        {
            "en" : "shade",
            "es" : "la sombra",
            "tr" : "gölge",
            "type" : "noun"
        },
        {
            "en" : "bee",
            "es" : "la abeja",
            "tr" : "arı",
            "type" : "noun"
        },
        {
            "en" : "butterfly",
            "es" : "la mariposa",
            "tr" : "kelebek",
            "type" : "noun"
        },
        {
            "en" : "wasp",
            "es" : "la avispa",
            "tr" : "eşek arısı",
            "type" : "noun"
        },
        {
            "en" : "rose",
            "es" : "la rosa",
            "tr" : "gül",
            "type" : "noun"
        },
        {
            "en" : "to smell sweet",
            "es" : "oler bien",
            "tr" : "güzel kokmak",
            "type" : "verb"
        },
        {
            "en" : "lovely",
            "es" : "bonito(a)",
            "tr" : "güzel",
            "type" : "noun"
        },
        {
            "en" : "chrysanthemum",
            "es" : "el crisantemo",
            "tr" : "kasımpatı [krizantem]",
            "type" : "noun"
        },
        {
            "en" : "geranium",
            "es" : "el geranio",
            "tr" : "sardunya",
            "type" : "noun"
        },
        {
            "en" : "tulip",
            "es" : "el tulipan",
            "tr" : "lale",
            "type" : "noun"
        },
        {
            "en" : "forget-me-not",
            "es" : "la nomeolvides",
            "tr" : "unutma beni",
            "type" : "noun"
        },
        {
            "en" : "carnation",
            "es" : "el clavel",
            "tr" : "karanfil",
            "type" : "noun"
        },
        {
            "en" : "seed",
            "es" : "la semilla",
            "tr" : "tohum",
            "type" : "noun"
        },
        {
            "en" : "to plant",
            "es" : "plantar",
            "tr" : "dikmek",
            "type" : "verb"
        },
        {
            "en" : "bulb",
            "es" : "el bulbo",
            "tr" : "ampul",
            "type" : "noun"
        },
        {
            "en" : "weed",
            "es" : "el hierbajo",
            "tr" : "ot",
            "type" : "noun"
        },
        {
            "en" : "shovel [spade]",
            "es" : "la pala",
            "tr" : "kürek",
            "type" : "noun"
        },
        {
            "en" : "wheelbarrow",
            "es" : "la carretilla",
            "tr" : "el arabası",
            "type" : "noun"
        },
        {
            "en" : "trowel",
            "es" : "el desplantador",
            "tr" : "mala",
            "type" : "noun"
        },
        {
            "en" : "rake",
            "es" : "el rastrillo",
            "tr" : "tırmık",
            "type" : "noun"
        },
        {
            "en" : "watering can",
            "es" : "la regadera",
            "tr" : "sulama kabı",
            "type" : "noun"
        }
    ],
    "Pets" : [
        {
            "en" : "animal",
            "es" : "el animal",
            "tr" : "hayvan",
            "type" : "noun"
        },
        {
            "en" : "dog",
            "es" : "el perro / la perra",
            "tr" : "köpek",
            "type" : "noun"
        },
        {
            "en" : "kennel",
            "es" : "la perrera",
            "tr" : "kulübe",
            "type" : "noun"
        },
        {
            "en" : "puppy",
            "es" : "el cachorro / la cachorra",
            "tr" : "yavru köpek",
            "type" : "noun"
        },
        {
            "en" : "fur",
            "es" : "el pelo",
            "tr" : "kürk",
            "type" : "noun"
        },
        {
            "en" : "paw",
            "es" : "la pata",
            "tr" : "pati",
            "type" : "noun"
        },
        {
            "en" : "playful",
            "es" : "juguetón",
            "tr" : "oyuncu",
            "type" : "adjective"
        },
        {
            "en" : "to bark",
            "es" : "ladrar",
            "tr" : "havlamak",
            "type" : "verb"
        },
        {
            "en" : "to chase",
            "es" : "perseguir",
            "tr" : "kovalamak",
            "type" : "verb"
        },
        {
            "en" : "to bring",
            "es" : "traer",
            "tr" : "getirmek",
            "type" : "verb"
        },
        {
            "en" : "tail",
            "es" : "el rabo",
            "tr" : "kuyruk",
            "type" : "noun"
        },
        {
            "en" : "to growl",
            "es" : "gruñir",
            "tr" : "hırlamak",
            "type" : "verb"
        },
        {
            "en" : "cat",
            "es" : "el gato / la gata",
            "tr" : "kedi",
            "type" : "noun"
        },
        {
            "en" : "basket",
            "es" : "el cesto",
            "tr" : "sepet",
            "type" : "noun"
        },
        {
            "en" : "to purr",
            "es" : "ronronear",
            "tr" : "mırıldanmak",
            "type" : "verb"
        },
        {
            "en" : "kitten",
            "es" : "el gatito / la gatita",
            "tr" : "yavru kedi",
            "type" : "noun"
        },
        {
            "en" : "to mew",
            "es" : "maullar",
            "tr" : "miyavlamak",
            "type" : "verb"
        },
        {
            "en" : "claw",
            "es" : "la garra",
            "tr" : "pençe",
            "type" : "noun"
        },
        {
            "en" : "soft",
            "es" : "suave",
            "tr" : "yumuşak",
            "type" : "adjective"
        },
        {
            "en" : "sweet",
            "es" : "encantador(a)",
            "tr" : "tatlı",
            "type" : "adjective"
        },
        {
            "en" : "canary",
            "es" : "el canario / la canaria",
            "tr" : "kanarya",
            "type" : "noun"
        },
        {
            "en" : "to perch",
            "es" : "posarse",
            "tr" : "tünemek",
            "type" : "verb"
        },
        {
            "en" : "wing",
            "es" : "el ala",
            "tr" : "kanat",
            "type" : "noun"
        },
        {
            "en" : "beak",
            "es" : "el pico",
            "tr" : "gaga",
            "type" : "noun"
        },
        {
            "en" : "feather",
            "es" : "la pluma",
            "tr" : "tüy",
            "type" : "noun"
        },
        {
            "en" : "hedgehog",
            "es" : "el erizo / la eriza",
            "tr" : "kirpi",
            "type" : "noun"
        },
        {
            "en" : "rabbit",
            "es" : "el conejo",
            "tr" : "tavşan",
            "type" : "noun"
        },
        {
            "en" : "turtle",
            "es" : "la tortuga",
            "tr" : "kamplumbağa",
            "type" : "noun"
        },
        {
            "en" : "cage",
            "es" : "la jaula",
            "tr" : "kafes",
            "type" : "noun"
        },
        {
            "en" : "to feed",
            "es" : "dar de comer",
            "tr" : "yem vermek [beslemek]",
            "type" : "verb"
        },
        {
            "en" : "fish",
            "es" : "el pez",
            "tr" : "balık",
            "type" : "noun"
        },
        {
            "en" : "mouse",
            "es" : "el ratón",
            "tr" : "fare",
            "type" : "noun"
        }
    ],
    "Getting up" : [
        {
            "en" : "to wake up",
            "es" : "despertarse",
            "tr" : "uyanmak",
            "type" : "verb"
        },
        {
            "en" : "Good morning!",
            "es" : "¡Buenos dias!",
            "tr" : "Günaydın",
            "type" : "interjection"
        },
        {
            "en" : "to yawn",
            "es" : "bostezar",
            "tr" : "esnemek",
            "type" : "verb"
        },
        {
            "en" : "alarm clock",
            "es" : "el despertador",
            "tr" : "çalar saat",
            "type" : "noun"
        },
        {
            "en" : "to get up",
            "es" : "levantarse",
            "tr" : "yataktan kalkmak",
            "type" : "verb"
        },
        {
            "en" : "to open the curtains",
            "es" : "descorrer las cortinas",
            "tr" : "perdeleri açmak",
            "type" : "verb phrase"
        },
        {
            "en" : "robe",
            "es" : "la bata",
            "tr" : "sabahlık",
            "type" : "noun"
        },
        {
            "en" : "shower",
            "es" : "la ducha",
            "tr" : "duş",
            "type" : "noun"
        },
        {
            "en" : "to have shower",
            "es" : "ducharse",
            "tr" : "duş almak",
            "type" : "verb"
        },
        {
            "en" : "shampoo",
            "es" : "el champu",
            "tr" : "şampuan",
            "type" : "noun"
        },
        {
            "en" : "to wash",
            "es" : "lavarse",
            "tr" : "yıkanmak",
            "type" : "verb"
        },
        {
            "en" : "soap",
            "es" : "el jabón",
            "tr" : "sabun",
            "type" : "noun"
        },
        {
            "en" : "towel",
            "es" : "la toalla",
            "tr" : "havlu",
            "type" : "noun"
        },
        {
            "en" : "naked",
            "es" : "desnudo(a)",
            "tr" : "çıplak",
            "type" : "adjective"
        },
        {
            "en" : "to dry vourself",
            "es" : "secarse",
            "tr" : "kurulanmak",
            "type" : "verb"
        },
        {
            "en" : "to shave",
            "es" : "afeitarse",
            "tr" : "tıraş olmak",
            "type" : "verb"
        },
        {
            "en" : "mirror",
            "es" : "el espejo",
            "tr" : "ayna",
            "type" : "noun"
        },
        {
            "en" : "razor",
            "es" : "la maquinilla",
            "tr" : "jilet",
            "type" : "noun"
        },
        {
            "en" : "shaving foam",
            "es" : "la espuma de afeitar",
            "tr" : "tıraş köpüğü",
            "type" : "noun"
        },
        {
            "en" : "tap",
            "es" : "el grifo",
            "tr" : "musluk",
            "type" : "noun"
        },
        {
            "en" : "hot water",
            "es" : "el agua caliente",
            "tr" : "sıcak su",
            "type" : "noun"
        },
        {
            "en" : "cold water",
            "es" : "el agua fría",
            "tr" : "soğuk su",
            "type" : "noun"
        },
        {
            "en" : "toothpaste",
            "es" : "la pasta de dientes",
            "tr" : "diş macunu",
            "type" : "noun"
        },
        {
            "en" : "toothbrush",
            "es" : "el cepillo de dientes",
            "tr" : "diş fırçası",
            "type" : "noun"
        },
        {
            "en" : "to clean teeth",
            "es" : "limpiarse los dientes",
            "tr" : "dişleri temizlemek",
            "type" : "verb phrase"
        },
        {
            "en" : "to dry your hair",
            "es" : "secarse el pelo",
            "tr" : "saçını kurutmak",
            "type" : "verb phrase"
        },
        {
            "en" : "brush",
            "es" : "el cepillo",
            "tr" : "fırça",
            "type" : "noun"
        },
        {
            "en" : "comb",
            "es" : "el peine",
            "tr" : "tarak",
            "type" : "noun"
        },
        {
            "en" : "to comb your hair",
            "es" : "peinarse",
            "tr" : "saçını taramak",
            "type" : "verb phrase"
        },
        {
            "en" : "to brush your hair",
            "es" : "cepillarse el pelo",
            "tr" : "saçını fırçalamak",
            "type" : "verb phrase"
        },
        {
            "en" : "to make up",
            "es" : "maquillarse",
            "tr" : "makyaj yapmak",
            "type" : "verb"
        },
        {
            "en" : "mascara",
            "es" : "el rímel",
            "tr" : "maskara",
            "type" : "noun"
        },
        {
            "en" : "lipstick",
            "es" : "lápiz labial",
            "tr" : "ruj",
            "type" : "noun"
        },
        {
            "en" : "perfume",
            "es" : "le perfume",
            "tr" : "parfüm",
            "type" : "noun"
        }
    ],
    "Clothes" : [
        {
            "en" : "bra",
            "es" : "el sostén",
            "tr" : "sütyen",
            "type" : "noun"
        },
        {
            "en" : "panties",
            "es" : "las bragas",
            "tr" : "külot",
            "type" : "noun"
        },
        {
            "en" : "socks",
            "es" : "los calcetines",
            "tr" : "çorap",
            "type" : "noun"
        },
        {
            "en" : "undershirt",
            "es" : "la camiseta",
            "tr" : "atlet",
            "type" : "noun"
        },
        {
            "en" : "petticoat",
            "es" : "la combinación",
            "tr" : "kombinezon",
            "type" : "noun"
        },
        {
            "en" : "underpants",
            "es" : "los calzoncillos",
            "tr" : "külot",
            "type" : "noun"
        },
        {
            "en" : "to get dressed",
            "es" : "vestirse",
            "tr" : "giyinmek",
            "type" : "verb"
        },
        {
            "en" : "blouse",
            "es" : "la blusa",
            "tr" : "bluz",
            "type" : "noun"
        },
        {
            "en" : "skirt",
            "es" : "la falda",
            "tr" : "etek",
            "type" : "noun"
        },
        {
            "en" : "dress",
            "es" : "el vestido",
            "tr" : "elbise",
            "type" : "noun"
        },
        {
            "en" : "cardigan",
            "es" : "la chaqueta de punto",
            "tr" : "hırka",
            "type" : "noun"
        },
        {
            "en" : "jeans",
            "es" : "los vaqueros",
            "tr" : "kot pantolon",
            "type" : "noun"
        },
        {
            "en" : "shirt",
            "es" : "la camisa",
            "tr" : "gömlek",
            "type" : "noun"
        },
        {
            "en" : "t-shirt",
            "es" : "la camiseta",
            "tr" : "tişört",
            "type" : "noun"
        },
        {
            "en" : "cotton",
            "es" : "de algodón",
            "tr" : "pamuklu",
            "type" : "adjective"
        },
        {
            "en" : "tie",
            "es" : "la corbata",
            "tr" : "kıravat",
            "type" : "noun"
        },
        {
            "en" : "sweater",
            "es" : "el jersey",
            "tr" : "kazak",
            "type" : "noun"
        },
        {
            "en" : "woollen",
            "es" : "de lana",
            "tr" : "yün",
            "type" : "adjective"
        },
        {
            "en" : "trousers",
            "es" : "los pantalones",
            "tr" : "pantolon",
            "type" : "noun"
        },
        {
            "en" : "dungarees",
            "es" : "el mono",
            "tr" : "tulum",
            "type" : "noun"
        },
        {
            "en" : "jewelry",
            "es" : "las joyas",
            "tr" : "mücevher",
            "type" : "noun"
        },
        {
            "en" : "earrings",
            "es" : "los pendientes",
            "tr" : "küpe",
            "type" : "noun"
        },
        {
            "en" : "brooch",
            "es" : "el prendedor",
            "tr" : "broş",
            "type" : "noun"
        },
        {
            "en" : "bracelet",
            "es" : "la pulsera",
            "tr" : "bilezik",
            "type" : "noun"
        },
        {
            "en" : "watch",
            "es" : "el reloj de pulsera",
            "tr" : "kol saati",
            "type" : "noun"
        },
        {
            "en" : "ring",
            "es" : "la sortija",
            "tr" : "yüzük",
            "type" : "noun"
        },
        {
            "en" : "wedding ring",
            "es" : "el anillo",
            "tr" : "alyans",
            "type" : "noun"
        },
        {
            "en" : "necklace",
            "es" : "el collar",
            "tr" : "kolye",
            "type" : "noun"
        },
        {
            "en" : "coat",
            "es" : "el abrigo",
            "tr" : "ceket",
            "type" : "noun"
        },
        {
            "en" : "hat",
            "es" : "el sombrero",
            "tr" : "şapka",
            "type" : "noun"
        },
        {
            "en" : "pocket",
            "es" : "el bolsillo",
            "tr" : "cep",
            "type" : "noun"
        },
        {
            "en" : "gloves",
            "es" : "los guantes",
            "tr" : "eldiven",
            "type" : "noun"
        },
        {
            "en" : "belt",
            "es" : "el cinturón",
            "tr" : "kemer",
            "type" : "noun"
        },
        {
            "en" : "button",
            "es" : "el botón",
            "tr" : "düğme",
            "type" : "noun"
        },
        {
            "en" : "boots",
            "es" : "las botas",
            "tr" : "çizme",
            "type" : "noun"
        },
        {
            "en" : "cap",
            "es" : "la gorra",
            "tr" : "şapka",
            "type" : "noun"
        },
        {
            "en" : "raincoat",
            "es" : "el impermeable",
            "tr" : "yağmurluk",
            "type" : "noun"
        },
        {
            "en" : "scarf",
            "es" : "la bufanda",
            "tr" : "atkı",
            "type" : "noun"
        },
        {
            "en" : "jacket",
            "es" : "la chaqueta",
            "tr" : "ceket",
            "type" : "noun"
        },
        {
            "en" : "zipper",
            "es" : "la cremallera",
            "tr" : "fermuar",
            "type" : "noun"
        },
        {
            "en" : "shoes",
            "es" : "los zapatos",
            "tr" : "ayakkabı",
            "type" : "noun"
        },
        {
            "en" : "sandals",
            "es" : "las sandalias",
            "tr" : "sandalet",
            "type" : "noun"
        }
    ],
    "Going to bed" : [
        {
            "en" : "to turn on the light",
            "es" : "encender la luz",
            "tr" : "ışığı açmak",
            "type" : "verb phrase"
        },
        {
            "en" : "to tidy up",
            "es" : "poner orden",
            "tr" : "düzene sokmak",
            "type" : "verb"
        },
        {
            "en" : "to take off clothes",
            "es" : "quitarse la ropa",
            "tr" : "elbesileri çıkarmak",
            "type" : "verb phrase"
        },
        {
            "en" : "to go to bed",
            "es" : "acostarse",
            "tr" : "yatmak",
            "type" : "verb"
        },
        {
            "en" : "pajamas",
            "es" : "el pijama",
            "tr" : "pijama",
            "type" : "noun"
        },
        {
            "en" : "nightgown",
            "es" : "el camisón",
            "tr" : "gecelik",
            "type" : "noun"
        },
        {
            "en" : "slippers",
            "es" : "las zapatillas",
            "tr" : "terlik",
            "type" : "noun"
        },
        {
            "en" : "lullaby",
            "es" : "la cancion de cuna",
            "tr" : "ninni",
            "type" : "noun"
        },
        {
            "en" : "tale",
            "es" : "el cuento",
            "tr" : "masal",
            "type" : "noun"
        },
        {
            "en" : "crib",
            "es" : "la cuna",
            "tr" : "beşik",
            "type" : "noun"
        },
        {
            "en" : "to fall asleep",
            "es" : "dormirse",
            "tr" : "uykuya dalmak",
            "type" : "verb phrase"
        },
        {
            "en" : "Sleep well!",
            "es" : "¡Qué duermas bien!",
            "tr" : "İyi uykular!",
            "type" : "interjection"
        },
        {
            "en" : "Goodnight!",
            "es" : "¡Buenas noches!",
            "tr" : "İyi geceler!",
            "type" : "interjection"
        },
        {
            "en" : "to dream",
            "es" : "soñar",
            "tr" : "rüya görmek",
            "type" : "verb"
        },
        {
            "en" : "to sleep",
            "es" : "dormir",
            "tr" : "uyumak",
            "type" : "verb"
        },
        {
            "en" : "to turn off",
            "es" : "apagar",
            "tr" : "kapamak",
            "type" : "verb"
        },
        {
            "en" : "lamp",
            "es" : "la lámpara",
            "tr" : "lamba",
            "type" : "noun"
        },
        {
            "en" : "bedside table",
            "es" : "la mesita de noche",
            "tr" : "komodin",
            "type" : "noun"
        },
        {
            "en" : "quilt [duvet]",
            "es" : "el edredón",
            "tr" : "yorgan",
            "type" : "noun"
        },
        {
            "en" : "bed",
            "es" : "la cama",
            "tr" : "yatak",
            "type" : "noun"
        },
        {
            "en" : "pillow",
            "es" : "la almohada",
            "tr" : "yastık",
            "type" : "noun"
        },
        {
            "en" : "bedspread",
            "es" : "la colcha",
            "tr" : "yatak örtüsü",
            "type" : "noun"
        },
        {
            "en" : "sheet",
            "es" : "la sábana",
            "tr" : "çarşaf",
            "type" : "noun"
        },
        {
            "en" : "to snore",
            "es" : "roncar",
            "tr" : "horlamak",
            "type" : "verb"
        }
    ],
    "Eating and drinking" : [
        {
            "en" : "to set the table",
            "es" : "poner la mesa",
            "tr" : "masayı kurmak",
            "type" : "verb phrase"
        },
        {
            "en" : "coffee-pot",
            "es" : "la cafetera",
            "tr" : "kahve makinesi",
            "type" : "noun"
        },
        {
            "en" : "teapot",
            "es" : "la tetera",
            "tr" : "çaydanlık",
            "type" : "noun"
        },
        {
            "en" : "napkin",
            "es" : "la servilleta",
            "tr" : "peçete",
            "type" : "noun"
        },
        {
            "en" : "glass",
            "es" : "el vaso",
            "tr" : "bardak",
            "type" : "noun"
        },
        {
            "en" : "cup",
            "es" : "la taza",
            "tr" : "fincan",
            "type" : "noun"
        },
        {
            "en" : "plate",
            "es" : "el plato",
            "tr" : "tabak",
            "type" : "noun"
        },
        {
            "en" : "bowl",
            "es" : "el tazón",
            "tr" : "kase",
            "type" : "noun"
        },
        {
            "en" : "saucer",
            "es" : "el platillo",
            "tr" : "fincan tabağı",
            "type" : "noun"
        },
        {
            "en" : "spoon",
            "es" : "la cuchara",
            "tr" : "kaşık",
            "type" : "noun"
        },
        {
            "en" : "fork",
            "es" : "el tenedor",
            "tr" : "çatal",
            "type" : "noun"
        },
        {
            "en" : "knife",
            "es" : "el cuchillo",
            "tr" : "bıçak",
            "type" : "noun"
        },
        {
            "en" : "jug",
            "es" : "el jarro",
            "tr" : "sürahi",
            "type" : "noun"
        },
        {
            "en" : "tablecloth",
            "es" : "el mantel",
            "tr" : "masa örtüsü",
            "type" : "noun"
        },
        {
            "en" : "Enjoy your meal",
            "es" : "¡Que aproveche!",
            "tr" : "Afiyet olsun!",
            "type" : "interjection"
        },
        {
            "en" : "to be thirsty",
            "es" : "tener sed",
            "tr" : "susamak",
            "type" : "verb"
        },
        {
            "en" : "to drink",
            "es" : "beber",
            "tr" : "içmek",
            "type" : "verb"
        },
        {
            "en" : "to be hungry",
            "es" : "tener hambre",
            "tr" : "acıkmak",
            "type" : "verb"
        },
        {
            "en" : "to eat",
            "es" : "comer",
            "tr" : "yemek",
            "type" : "verb"
        },
        {
            "en" : "tasty",
            "es" : "sabroso(a)",
            "tr" : "lezzetli",
            "type" : "adjective"
        },
        {
            "en" : "breakfast",
            "es" : "el desayuno",
            "tr" : "kahvaltı",
            "type" : "noun"
        },
        {
            "en" : "juice",
            "es" : "el jugo",
            "tr" : "meyve suyu",
            "type" : "noun"
        },
        {
            "en" : "coffee",
            "es" : "el café",
            "tr" : "kahve",
            "type" : "noun"
        },
        {
            "en" : "tea",
            "es" : "el té",
            "tr" : "çay",
            "type" : "noun"
        },
        {
            "en" : "bread",
            "es" : "el pan",
            "tr" : "ekmek",
            "type" : "noun"
        },
        {
            "en" : "cheese",
            "es" : "el queso",
            "tr" : "peynir",
            "type" : "noun"
        },
        {
            "en" : "butter",
            "es" : "la mantequilla",
            "tr" : "tereyağı",
            "type" : "noun"
        },
        {
            "en" : "lunch",
            "es" : "el almuerzo",
            "tr" : "öğle yemeği",
            "type" : "noun"
        },
        {
            "en" : "salad",
            "es" : "la ensalada",
            "tr" : "salata",
            "type" : "noun"
        },
        {
            "en" : "soup",
            "es" : "la sopa",
            "tr" : "çorba",
            "type" : "noun"
        },
        {
            "en" : "meat",
            "es" : "la carne",
            "tr" : "et",
            "type" : "noun"
        },
        {
            "en" : "main meal",
            "es" : "la comida",
            "tr" : "ana yemek",
            "type" : "noun"
        },
        {
            "en" : "wine",
            "es" : "el vino",
            "tr" : "şarap",
            "type" : "noun"
        },
        {
            "en" : "beer",
            "es" : "la cerveza",
            "tr" : "bira",
            "type" : "noun"
        },
        {
            "en" : "mineral water",
            "es" : "el agua mineral",
            "tr" : "maden suyu",
            "type" : "noun"
        },
        {
            "en" : "desert",
            "es" : "el postre",
            "tr" : "tatlı",
            "type" : "noun"
        }
    ],
    "Food" : [
        {
            "en" : "meat",
            "es" : "la carne",
            "tr" : "et",
            "type" : "noun"
        },
        {
            "en" : "chicken",
            "es" : "el pollo",
            "tr" : "tavuk [piliç]",
            "type" : "noun"
        },
        {
            "en" : "steak",
            "es" : "el filete",
            "tr" : "biftek",
            "type" : "noun"
        },
        {
            "en" : "ham",
            "es" : "el jamón",
            "tr" : "jambon",
            "type" : "noun"
        },
        {
            "en" : "veal",
            "es" : "la ternera",
            "tr" : "dana eti",
            "type" : "noun"
        },
        {
            "en" : "lamb meat",
            "es" : "la carne de cordero",
            "tr" : "kuzu eti",
            "type" : "noun"
        },
        {
            "en" : "sausage",
            "es" : "la salchicha",
            "tr" : "sosis",
            "type" : "noun"
        },
        {
            "en" : "vegetables",
            "es" : "las verduras",
            "tr" : "sebzeler",
            "type" : "noun"
        },
        {
            "en" : "fresh",
            "es" : "fresco(a)",
            "tr" : "taze",
            "type" : "adjective"
        },
        {
            "en" : "cabbage",
            "es" : "la col",
            "tr" : "lahana",
            "type" : "noun"
        },
        {
            "en" : "garlic",
            "es" : "el ajo",
            "tr" : "sarımsak",
            "type" : "noun"
        },
        {
            "en" : "onion",
            "es" : "la cebolla",
            "tr" : "soğan",
            "type" : "noun"
        },
        {
            "en" : "pea",
            "es" : "el guisante",
            "tr" : "bezelye",
            "type" : "noun"
        },
        {
            "en" : "carrot",
            "es" : "la zanahoria",
            "tr" : "havuç",
            "type" : "noun"
        },
        {
            "en" : "spinach",
            "es" : "la espinaca",
            "tr" : "ıspanak",
            "type" : "noun"
        },
        {
            "en" : "cauliflower",
            "es" : "la coliflor",
            "tr" : "karnıbahar",
            "type" : "noun"
        },
        {
            "en" : "Brussels sprouts",
            "es" : "la col de Bruselas",
            "tr" : "Brüksel lahanası",
            "type" : "noun"
        },
        {
            "en" : "raw",
            "es" : "crudo(a)",
            "tr" : "çiğ",
            "type" : "adjective"
        },
        {
            "en" : "tomato",
            "es" : "el tomate",
            "tr" : "domates",
            "type" : "noun"
        },
        {
            "en" : "green bean",
            "es" : "la judía verde",
            "tr" : "yeşil fasulye",
            "type" : "noun"
        },
        {
            "en" : "potato",
            "es" : "la patata",
            "tr" : "patates",
            "type" : "noun"
        },
        {
            "en" : "fish",
            "es" : "el pescado",
            "tr" : "balık",
            "type" : "noun"
        },
        {
            "en" : "sea bream",
            "es" : "el besugo",
            "tr" : "çipura",
            "type" : "noun"
        },
        {
            "en" : "shellfish",
            "es" : "los mariscos",
            "tr" : "kabuklu deniz ürünleri",
            "type" : "noun"
        },
        {
            "en" : "cod",
            "es" : "el bacalao",
            "tr" : "morina",
            "type" : "noun"
        },
        {
            "en" : "cucumber",
            "es" : "el pepino",
            "tr" : "salatalık",
            "type" : "noun"
        },
        {
            "en" : "eggplant",
            "es" : "la berenjena",
            "tr" : "patlıcan",
            "type" : "noun"
        },
        {
            "en" : "mint",
            "es" : "la menta",
            "tr" : "nane",
            "type" : "noun"
        },
        {
            "en" : "chilli",
            "es" : "el chile",
            "tr" : "acı biber",
            "type" : "noun"
        },
        {
            "en" : "sweet",
            "es" : "dulce",
            "tr" : "tatlı",
            "type" : "adjective"
        },
        {
            "en" : "sour",
            "es" : "agrio(a)",
            "tr" : "ekşi",
            "type" : "adjective"
        },
        {
            "en" : "fruit",
            "es" : "la fruta",
            "tr" : "meyve",
            "type" : "noun"
        },
        {
            "en" : "ripe",
            "es" : "maduro(a)",
            "tr" : "olgun",
            "type" : "noun"
        },
        {
            "en" : "grape",
            "es" : "la uva",
            "tr" : "üzüm",
            "type" : "noun"
        },
        {
            "en" : "banana",
            "es" : "el plátano",
            "tr" : "muz",
            "type" : "noun"
        },
        {
            "en" : "peach",
            "es" : "el melocotón",
            "tr" : "şeftali",
            "type" : "noun"
        },
        {
            "en" : "lemon",
            "es" : "el limón",
            "tr" : "limon",
            "type" : "noun"
        },
        {
            "en" : "melon",
            "es" : "el melón",
            "tr" : "kavun",
            "type" : "noun"
        },
        {
            "en" : "watermelon",
            "es" : "la sandia",
            "tr" : "karpuz",
            "type" : "noun"
        },
        {
            "en" : "cherry",
            "es" : "la cereza",
            "tr" : "kiraz",
            "type" : "noun"
        },
        {
            "en" : "apricot",
            "es" : "el albaricoque",
            "tr" : "kayısı",
            "type" : "noun"
        },
        {
            "en" : "plum",
            "es" : "la ciruela",
            "tr" : "erik",
            "type" : "noun"
        },
        {
            "en" : "apple",
            "es" : "la manzana",
            "tr" : "elma",
            "type" : "noun"
        },
        {
            "en" : "pear",
            "es" : "la pera",
            "tr" : "armut",
            "type" : "noun"
        },
        {
            "en" : "orange",
            "es" : "la naranja",
            "tr" : "portakal",
            "type" : "noun"
        },
        {
            "en" : "tangerine",
            "es" : "la mandarina",
            "tr" : "mandalina",
            "type" : "noun"
        },
        {
            "en" : "grapefruit",
            "es" : "el pomelo",
            "tr" : "greyfurt",
            "type" : "noun"
        },
        {
            "en" : "mulberry",
            "es" : "la mora",
            "tr" : "dut",
            "type" : "noun"
        },
        {
            "en" : "blackberry",
            "es" : "la zarzamora",
            "tr" : "böğürtlen",
            "type" : "noun"
        },
        {
            "en" : "raspberry",
            "es" : "la frambuesa",
            "tr" : "ahududu",
            "type" : "noun"
        },
        {
            "en" : "blueberry",
            "es" : "el arándano",
            "tr" : "yabanmersini",
            "type" : "noun"
        },
        {
            "en" : "walnut",
            "es" : "la nuez",
            "tr" : "ceviz",
            "type" : "noun"
        },
        {
            "en" : "hazelnut",
            "es" : "la avellana",
            "tr" : "fındık",
            "type" : "noun"
        },
        {
            "en" : "peanut",
            "es" : "el maní",
            "tr" : "fıstık",
            "type" : "noun"
        },
        {
            "en" : "almond",
            "es" : "la almendra",
            "tr" : "badem",
            "type" : "noun"
        },
        {
            "en" : "quince",
            "es" : "el membrillo",
            "tr" : "ayva",
            "type" : "noun"
        },
        {
            "en" : "noodle",
            "es" : "el fideo",
            "tr" : "erişte",
            "type" : "noun"
        },
        {
            "en" : "chickpea",
            "es" : "el garbanzo",
            "tr" : "nohut",
            "type" : "noun"
        },
        {
            "en" : "bean",
            "es" : "la judía",
            "tr" : "fasulye",
            "type" : "noun"
        },
        {
            "en" : "cream",
            "es" : "la nata",
            "tr" : "krema",
            "type" : "noun"
        },
        {
            "en" : "milk",
            "es" : "la leche",
            "tr" : "süt",
            "type" : "noun"
        },
        {
            "en" : "margarine",
            "es" : "la margarina",
            "tr" : "margarin",
            "type" : "noun"
        },
        {
            "en" : "yogurt",
            "es" : "el yogur",
            "tr" : "yoğurt",
            "type" : "noun"
        },
        {
            "en" : "honey",
            "es" : "la miel",
            "tr" : "bal",
            "type" : "noun"
        },
        {
            "en" : "egg",
            "es" : "el huevo",
            "tr" : "yumurta",
            "type" : "noun"
        },
        {
            "en" : "jam",
            "es" : "la mermelada",
            "tr" : "reçel",
            "type" : "noun"
        },
        {
            "en" : "sugar",
            "es" : "el azúcar",
            "tr" : "şeker",
            "type" : "noun"
        },
        {
            "en" : "flour",
            "es" : "la harina",
            "tr" : "un",
            "type" : "noun"
        },
        {
            "en" : "oil",
            "es" : "el aceite",
            "tr" : "yağ",
            "type" : "noun"
        },
        {
            "en" : "salt",
            "es" : "la sal",
            "tr" : "tuz",
            "type" : "noun"
        },
        {
            "en" : "vinegar",
            "es" : "el vinagre",
            "tr" : "sirke",
            "type" : "noun"
        },
        {
            "en" : "pepper",
            "es" : "la pimienta",
            "tr" : "biber",
            "type" : "noun"
        },
        {
            "en" : "seasoning",
            "es" : "el condimento",
            "tr" : "çeşni",
            "type" : "noun"
        },
        {
            "en" : "mustard",
            "es" : "la mostaza",
            "tr" : "hardal",
            "type" : "noun"
        },
        {
            "en" : "frozen food",
            "es" : "los congelados",
            "tr" : "dondurulmuş gıda",
            "type" : "noun"
        },
        {
            "en" : "spices",
            "es" : "las especias",
            "tr" : "baharatlar",
            "type" : "noun"
        },
        {
            "en" : "rice",
            "es" : "el arroz",
            "tr" : "pirinç",
            "type" : "noun"
        },
        {
            "en" : "canned products",
            "es" : "los productos en lata",
            "tr" : "konserve ürünler",
            "type" : "noun"
        },
        {
            "en" : "chocolate",
            "es" : "el chocolate",
            "tr" : "çikolata",
            "type" : "noun"
        },
        {
            "en" : "cookie",
            "es" : "la galleta",
            "tr" : "kurabiye",
            "type" : "noun"
        },
        {
            "en" : "icecream",
            "es" : "el helado",
            "tr" : "dondurma",
            "type" : "noun"
        },
        {
            "en" : "receipe",
            "es" : "la receta",
            "tr" : "reçete",
            "type" : "noun"
        },
        {
            "en" : "ingredient",
            "es" : "el ingrediente",
            "tr" : "içerik",
            "type" : "noun"
        },
        {
            "en" : "to taste",
            "es" : "probar",
            "tr" : "tadına bakmak",
            "type" : "verb"
        },
        {
            "en" : "flavor [taste]",
            "es" : "el sabor",
            "tr" : "tat [lezzet]",
            "type" : "noun"
        },
        {
            "en" : "delicious",
            "es" : "riquísimo(a)",
            "tr" : "lezzetli",
            "type" : "adjective"
        }
    ],
    "Pastimes" : [
        {
            "en" : "to watch television",
            "es" : "mirar la televisión",
            "tr" : "televizyon izlemek",
            "type" : "verb phrase"
        },
        {
            "en" : "channel",
            "es" : "la cadena",
            "tr" : "kanal",
            "type" : "noun"
        },
        {
            "en" : "program",
            "es" : "el programa",
            "tr" : "program",
            "type" : "noun"
        },
        {
            "en" : "to listen to radio",
            "es" : "escuchar la radio",
            "tr" : "radyo dinlemek",
            "type" : "verb phrase"
        },
        {
            "en" : "headphones",
            "es" : "los auriculares",
            "tr" : "kulaklık",
            "type" : "noun"
        },
        {
            "en" : "to listen to music",
            "es" : "escuchar música",
            "tr" : "müzik dinlemek",
            "type" : "verb phrase"
        },
        {
            "en" : "to read",
            "es" : "leer",
            "tr" : "okumak",
            "type" : "verb"
        },
        {
            "en" : "novel",
            "es" : "la novela",
            "tr" : "roman",
            "type" : "noun"
        },
        {
            "en" : "newspaper",
            "es" : "el periódico",
            "tr" : "gazete",
            "type" : "noun"
        },
        {
            "en" : "magazine",
            "es" : "la revista",
            "tr" : "magazin",
            "type" : "noun"
        },
        {
            "en" : "comic",
            "es" : "el tebeo",
            "tr" : "çizgi roman",
            "type" : "noun"
        },
        {
            "en" : "poetry",
            "es" : "la poesía",
            "tr" : "şiir",
            "type" : "noun"
        },
        {
            "en" : "knit",
            "es" : "hacer punto",
            "tr" : "örgü örmek",
            "type" : "verb"
        },
        {
            "en" : "needle",
            "es" : "la aguja",
            "tr" : "iğne",
            "type" : "noun"
        },
        {
            "en" : "pattern",
            "es" : "el patrón",
            "tr" : "desen",
            "type" : "noun"
        },
        {
            "en" : "wool",
            "es" : "la lana",
            "tr" : "yün",
            "type" : "noun"
        },
        {
            "en" : "to sew",
            "es" : "coser",
            "tr" : "dikmek",
            "type" : "verb"
        },
        {
            "en" : "fabric",
            "es" : "la tela",
            "tr" : "kumaş",
            "type" : "noun"
        },
        {
            "en" : "thread",
            "es" : "el hilo",
            "tr" : "iplik",
            "type" : "noun"
        },
        {
            "en" : "scissors",
            "es" : "las tijeras",
            "tr" : "makas",
            "type" : "noun"
        },
        {
            "en" : "pin",
            "es" : "el alfiler",
            "tr" : "toplu iğne",
            "type" : "noun"
        },
        {
            "en" : "elastic band",
            "es" : "el cinta elastica",
            "tr" : "lastik",
            "type" : "noun"
        },
        {
            "en" : "woodwork",
            "es" : "la carpintería",
            "tr" : "marangozluk",
            "type" : "noun"
        },
        {
            "en" : "skillful",
            "es" : "hábil",
            "tr" : "yetenekli",
            "type" : "adjective"
        },
        {
            "en" : "saw",
            "es" : "la sierra",
            "tr" : "testere",
            "type" : "noun"
        },
        {
            "en" : "to make",
            "es" : "hacer",
            "tr" : "yapmak",
            "type" : "verb"
        },
        {
            "en" : "hammer",
            "es" : "el martillo",
            "tr" : "çekiç",
            "type" : "noun"
        },
        {
            "en" : "repair",
            "es" : "reparar",
            "tr" : "tamir etmek",
            "type" : "verb"
        },
        {
            "en" : "screw",
            "es" : "el tornillo",
            "tr" : "vida",
            "type" : "noun"
        },
        {
            "en" : "screwdriver",
            "es" : "el atornillador",
            "tr" : "tornavida",
            "type" : "noun"
        },
        {
            "en" : "photography",
            "es" : "la fotografía",
            "tr" : "fotoğrafçılık",
            "type" : "noun"
        },
        {
            "en" : "to take a photograph",
            "es" : "tomar una foto",
            "tr" : "fotoğraf çekmek",
            "type" : "verb phrase"
        },
        {
            "en" : "camera",
            "es" : "la máquina fotográfica",
            "tr" : "fotoğraf makinesi",
            "type" : "noun"
        },
        {
            "en" : "video camera",
            "es" : "la máquina de vídeo",
            "tr" : "kamera",
            "type" : "noun"
        },
        {
            "en" : "movie",
            "es" : "la película",
            "tr" : "film",
            "type" : "noun"
        },
        {
            "en" : "photograph",
            "es" : "la foto",
            "tr" : "fotoğraf",
            "type" : "noun"
        },
        {
            "en" : "in focus",
            "es" : "en foco",
            "tr" : "odakta",
            "type" : "adjective"
        },
        {
            "en" : "out of focus",
            "es" : "fuera de foco",
            "tr" : "odak dışı",
            "type" : "adjective"
        },
        {
            "en" : "art gallery",
            "es" : "la galería de arte",
            "tr" : "sanat galerisi",
            "type" : "noun"
        },
        {
            "en" : "painter",
            "es" : "el pintor / la pintora",
            "tr" : "ressam",
            "type" : "noun"
        },
        {
            "en" : "painting",
            "es" : "el cuadro",
            "tr" : "tablo",
            "type" : "noun"
        },
        {
            "en" : "to paint",
            "es" : "pintar",
            "tr" : "boyamak",
            "type" : "verb"
        },
        {
            "en" : "exhibition",
            "es" : "la exposición",
            "tr" : "sergi",
            "type" : "noun"
        },
        {
            "en" : "brush",
            "es" : "el pincel",
            "tr" : "fırça",
            "type" : "noun"
        },
        {
            "en" : "paint",
            "es" : "la pintura",
            "tr" : "resim",
            "type" : "noun"
        },
        {
            "en" : "to sort [to arrange]",
            "es" : "ordenar",
            "tr" : "düzenlemek",
            "type" : "verb"
        },
        {
            "en" : "to stick",
            "es" : "pegar",
            "tr" : "yapıştırmak",
            "type" : "verb"
        },
        {
            "en" : "collection",
            "es" : "la colección",
            "tr" : "kolleksiyon",
            "type" : "noun"
        },
        {
            "en" : "to collect stamps",
            "es" : "coleccionar sellos",
            "tr" : "pul toplamak",
            "type" : "verb phrase"
        },
        {
            "en" : "musician",
            "es" : "el músico / la músico",
            "tr" : "müzisyen",
            "type" : "noun"
        },
        {
            "en" : "instrument",
            "es" : "el instrumento",
            "tr" : "enstrüman",
            "type" : "noun"
        },
        {
            "en" : "to play",
            "es" : "tocar",
            "tr" : "çalmak",
            "type" : "verb"
        },
        {
            "en" : "violin",
            "es" : "el violin",
            "tr" : "keman",
            "type" : "noun"
        },
        {
            "en" : "piano",
            "es" : "el piano",
            "tr" : "piyano",
            "type" : "noun"
        },
        {
            "en" : "guitar",
            "es" : "la guitarra",
            "tr" : "gitar",
            "type" : "noun"
        },
        {
            "en" : "drums",
            "es" : "los tambores",
            "tr" : "davullar",
            "type" : "noun"
        },
        {
            "en" : "trumpet",
            "es" : "la trompeta",
            "tr" : "trompet",
            "type" : "noun"
        },
        {
            "en" : "cello",
            "es" : "el violonchelo",
            "tr" : "çello",
            "type" : "noun"
        },
        {
            "en" : "orchestra",
            "es" : "la orquesta",
            "tr" : "orkestra",
            "type" : "noun"
        },
        {
            "en" : "to sing",
            "es" : "cantar",
            "tr" : "şarkı söylemek",
            "type" : "verb"
        },
        {
            "en" : "melody",
            "es" : "la melodía",
            "tr" : "melodi",
            "type" : "noun"
        },
        {
            "en" : "choir",
            "es" : "el coro",
            "tr" : "koro",
            "type" : "noun"
        },
        {
            "en" : "game",
            "es" : "el juego",
            "tr" : "oyun",
            "type" : "noun"
        },
        {
            "en" : "to play cards",
            "es" : "jugar a las cartas",
            "tr" : "iskambil oynamak",
            "type" : "verb phrase"
        },
        {
            "en" : "to play checkers",
            "es" : "jugar a las damas",
            "tr" : "dama oynamak",
            "type" : "verb phrase"
        },
        {
            "en" : "to play chess",
            "es" : "ugar al ajedrez",
            "tr" : "satranç oynamak",
            "type" : "verb phrase"
        },
        {
            "en" : "board games",
            "es" : "los juegos de tablero",
            "tr" : "masa oyunları",
            "type" : "noun"
        }
    ],
    "Going out" : [
        {
            "en" : "cinema",
            "es" : "el cine",
            "tr" : "sinema",
            "type" : "noun"
        },
        {
            "en" : "to go to cinema",
            "es" : "ir al cine",
            "tr" : "sinemaya gitmek",
            "type" : "verb phrase"
        },
        {
            "en" : "film",
            "es" : "la película",
            "tr" : "film",
            "type" : "noun"
        },
        {
            "en" : "seat",
            "es" : "la butaca",
            "tr" : "koltuk",
            "type" : "noun"
        },
        {
            "en" : "box-office",
            "es" : "la taquilla",
            "tr" : "gişe",
            "type" : "noun"
        },
        {
            "en" : "dance",
            "es" : "bailar",
            "tr" : "dans etmek",
            "type" : "verb"
        },
        {
            "en" : "dance floor",
            "es" : "la pista de baile",
            "tr" : "dans pisti",
            "type" : "noun"
        },
        {
            "en" : "theatre",
            "es" : "el teatro",
            "tr" : "tiyatro",
            "type" : "noun"
        },
        {
            "en" : "scene set",
            "es" : "el decorado de escena",
            "tr" : "sahne seti",
            "type" : "noun"
        },
        {
            "en" : "actress",
            "es" : "la actriz",
            "tr" : "aktris",
            "type" : "noun"
        },
        {
            "en" : "actor",
            "es" : "el actor",
            "tr" : "aktör",
            "type" : "noun"
        },
        {
            "en" : "scene",
            "es" : "la escena",
            "tr" : "sahne",
            "type" : "noun"
        },
        {
            "en" : "audience",
            "es" : "el público",
            "tr" : "seyirci",
            "type" : "noun"
        },
        {
            "en" : "to clap",
            "es" : "aplaudir",
            "tr" : "alkışlamak",
            "type" : "verb"
        },
        {
            "en" : "ballet",
            "es" : "el ballet",
            "tr" : "bale",
            "type" : "noun"
        },
        {
            "en" : "dancer",
            "es" : "el bailarín / la bailarína",
            "tr" : "dansçı",
            "type" : "noun"
        },
        {
            "en" : "to perform",
            "es" : "actuar",
            "tr" : "oynamak",
            "type" : "verb"
        },
        {
            "en" : "opera",
            "es" : "la ópera",
            "tr" : "opera",
            "type" : "noun"
        },
        {
            "en" : "singer",
            "es" : "el cantante / la cantante",
            "tr" : "şarkıcı",
            "type" : "noun"
        },
        {
            "en" : "famous",
            "es" : "famoso(a)",
            "tr" : "ünlü",
            "type" : "adjective"
        },
        {
            "en" : "reataurant",
            "es" : "el restoran",
            "tr" : "restoran",
            "type" : "noun"
        },
        {
            "en" : "waiter",
            "es" : "el camarero / la camarera",
            "tr" : "garson",
            "type" : "noun"
        },
        {
            "en" : "menu",
            "es" : "el menú",
            "tr" : "menü",
            "type" : "noun"
        },
        {
            "en" : "to order",
            "es" : "pedir",
            "tr" : "sipariş etmek",
            "type" : "verb"
        },
        {
            "en" : "to serve",
            "es" : "servir",
            "tr" : "servis yapmak",
            "type" : "verb"
        },
        {
            "en" : "starter",
            "es" : "para empezar",
            "tr" : "başlangıç",
            "type" : "noun"
        },
        {
            "en" : "main course",
            "es" : "el primer plato",
            "tr" : "ana yemek",
            "type" : "noun"
        },
        {
            "en" : "dessert",
            "es" : "el postre",
            "tr" : "tatlı",
            "type" : "noun"
        },
        {
            "en" : "bill",
            "es" : "la cuenta",
            "tr" : "hesap",
            "type" : "noun"
        },
        {
            "en" : "tip",
            "es" : "la propina",
            "tr" : "bahşiş",
            "type" : "noun"
        },
        {
            "en" : "tray",
            "es" : "la bandeja",
            "tr" : "tepsi",
            "type" : "noun"
        }
    ],
    "At the zoo" : [
        {
            "en" : "zoo",
            "es" : "el zoológico",
            "tr" : "hayvanat bahçesi",
            "type" : "noun"
        },
        {
            "en" : "zebra",
            "es" : "la cebra",
            "tr" : "zebra",
            "type" : "noun"
        },
        {
            "en" : "giraffe",
            "es" : "la jirafa",
            "tr" : "zürafa",
            "type" : "noun"
        },
        {
            "en" : "polar bear",
            "es" : "el oso blanco",
            "tr" : "kutup ayısı",
            "type" : "noun"
        },
        {
            "en" : "elephant",
            "es" : "el eletante",
            "tr" : "fil",
            "type" : "noun"
        },
        {
            "en" : "trunk",
            "es" : "la trompa",
            "tr" : "fil hortumu",
            "type" : "noun"
        },
        {
            "en" : "tusk",
            "es" : "el colmillo",
            "tr" : "fildişi",
            "type" : "noun"
        },
        {
            "en" : "gorilla",
            "es" : "el gorila",
            "tr" : "goril",
            "type" : "noun"
        },
        {
            "en" : "wild",
            "es" : "salvaje",
            "tr" : "vahşi",
            "type" : "adjective"
        },
        {
            "en" : "tame",
            "es" : "manso(a)",
            "tr" : "uysal",
            "type" : "adjective"
        },
        {
            "en" : "guardian",
            "es" : "el guardián / la guardiána",
            "tr" : "bekçi",
            "type" : "noun"
        },
        {
            "en" : "monkey",
            "es" : "el mono",
            "tr" : "maymun",
            "type" : "noun"
        },
        {
            "en" : "kangaroo",
            "es" : "el canquro",
            "tr" : "kanguru",
            "type" : "noun"
        },
        {
            "en" : "ostrich",
            "es" : "el avestruz",
            "tr" : "devekuşu",
            "type" : "noun"
        },
        {
            "en" : "camel",
            "es" : "el camello",
            "tr" : "deve",
            "type" : "noun"
        },
        {
            "en" : "hump",
            "es" : "la giba",
            "tr" : "hörgüç",
            "type" : "noun"
        },
        {
            "en" : "eagle",
            "es" : "el aquila",
            "tr" : "kartal",
            "type" : "noun"
        },
        {
            "en" : "penguin",
            "es" : "el pinguino",
            "tr" : "penguen",
            "type" : "noun"
        },
        {
            "en" : "hippopotamus",
            "es" : "el hipopótamo",
            "tr" : "su aygırı",
            "type" : "noun"
        },
        {
            "en" : "lion",
            "es" : "el león",
            "tr" : "aslan",
            "type" : "noun"
        },
        {
            "en" : "to roar",
            "es" : "rugir",
            "tr" : "kükremek",
            "type" : "verb"
        },
        {
            "en" : "tiger",
            "es" : "el tigre",
            "tr" : "kaplan",
            "type" : "noun"
        },
        {
            "en" : "snake",
            "es" : "la serpiente",
            "tr" : "yılan",
            "type" : "noun"
        },
        {
            "en" : "pigeon",
            "es" : "la paloma",
            "tr" : "güvercin",
            "type" : "noun"
        }
    ],
    "In the park" : [
        {
            "en" : "park",
            "es" : "el parque",
            "tr" : "park",
            "type" : "noun"
        },
        {
            "en" : "pond",
            "es" : "el estanque",
            "tr" : "gölet",
            "type" : "noun"
        },
        {
            "en" : "rowboat",
            "es" : "la barca de remo",
            "tr" : "kürekli tekne",
            "type" : "noun"
        },
        {
            "en" : "to row",
            "es" : "remar",
            "tr" : "kürek çekmek",
            "type" : "verb"
        },
        {
            "en" : "oar",
            "es" : "el remo",
            "tr" : "kürek",
            "type" : "noun"
        },
        {
            "en" : "picnic",
            "es" : "la merienda",
            "tr" : "piknik",
            "type" : "noun"
        },
        {
            "en" : "bench",
            "es" : "el banco",
            "tr" : "bank",
            "type" : "noun"
        },
        {
            "en" : "keeper",
            "es" : "el vigilante",
            "tr" : "bekçi",
            "type" : "noun"
        },
        {
            "en" : "swing",
            "es" : "el columpio",
            "tr" : "salıncak",
            "type" : "noun"
        },
        {
            "en" : "to keep an eye on",
            "es" : "vigilar",
            "tr" : "göz kulak olmak",
            "type" : "verb phrase"
        },
        {
            "en" : "to climb",
            "es" : "trepar",
            "tr" : "tırmanmak",
            "type" : "verb"
        },
        {
            "en" : "slide",
            "es" : "el tobogán",
            "tr" : "kaydırak",
            "type" : "noun"
        },
        {
            "en" : "to dig",
            "es" : "cavar",
            "tr" : "kazmak",
            "type" : "verb"
        },
        {
            "en" : "merry-go-round",
            "es" : "el tiovivo",
            "tr" : "atlıkarınca",
            "type" : "noun"
        }
    ],
    "In the city" : [
        {
            "en" : "capital city",
            "es" : "la capital",
            "tr" : "başkent",
            "type" : "noun"
        },
        {
            "en" : "outskirts",
            "es" : "las afueras",
            "tr" : "kenar mahalleler",
            "type" : "noun"
        },
        {
            "en" : "city",
            "es" : "la ciudad",
            "tr" : "şehir",
            "type" : "noun"
        },
        {
            "en" : "skyscraper",
            "es" : "el rascacielos",
            "tr" : "gökdelen",
            "type" : "noun"
        },
        {
            "en" : "cathedral",
            "es" : "la catedral",
            "tr" : "katedral",
            "type" : "noun"
        },
        {
            "en" : "river",
            "es" : "el río",
            "tr" : "nehir",
            "type" : "noun"
        },
        {
            "en" : "district",
            "es" : "el distrito",
            "tr" : "ilçe",
            "type" : "noun"
        },
        {
            "en" : "building",
            "es" : "el edificio",
            "tr" : "bina",
            "type" : "noun"
        },
        {
            "en" : "church",
            "es" : "la iglesia",
            "tr" : "kilise",
            "type" : "noun"
        },
        {
            "en" : "cemetery",
            "es" : "el cementerio",
            "tr" : "mezarlık",
            "type" : "noun"
        },
        {
            "en" : "fire station",
            "es" : "el parque de bomberos",
            "tr" : "itfaiye istasyonu",
            "type" : "noun"
        },
        {
            "en" : "fire engine",
            "es" : "el coche de bomberos",
            "tr" : "itfaiye aracı",
            "type" : "noun"
        },
        {
            "en" : "factory",
            "es" : "la fábrica",
            "tr" : "fabrika",
            "type" : "noun"
        },
        {
            "en" : "town hall",
            "es" : "el ayuntamiento",
            "tr" : "belediye binası",
            "type" : "noun"
        },
        {
            "en" : "office block",
            "es" : "el bloque de oficinas",
            "tr" : "ofis bloğu",
            "type" : "noun"
        },
        {
            "en" : "polis station",
            "es" : "la comisaría",
            "tr" : "karakol",
            "type" : "noun"
        },
        {
            "en" : "police car",
            "es" : "el coche de policia",
            "tr" : "polis arabası",
            "type" : "noun"
        },
        {
            "en" : "library",
            "es" : "la biblioteca",
            "tr" : "kütüphane",
            "type" : "noun"
        },
        {
            "en" : "city center",
            "es" : "el centro",
            "tr" : "şehir merkezi",
            "type" : "noun"
        },
        {
            "en" : "street",
            "es" : "la calle",
            "tr" : "sokak",
            "type" : "noun"
        },
        {
            "en" : "narrow",
            "es" : "estrecho(a)",
            "tr" : "dar",
            "type" : "adjective"
        },
        {
            "en" : "broad",
            "es" : "ancho(a)",
            "tr" : "geniş",
            "type" : "adjective"
        },
        {
            "en" : "corner",
            "es" : "la esquina",
            "tr" : "köşe",
            "type" : "noun"
        },
        {
            "en" : "to cross street",
            "es" : "atravesar la calle",
            "tr" : "sokağı geçmek",
            "type" : "verb phrase"
        },
        {
            "en" : "pedestrian crossing",
            "es" : "el cruce de peatones",
            "tr" : "yaya geçidi",
            "type" : "noun"
        },
        {
            "en" : "pedestrian",
            "es" : "el peatón",
            "tr" : "yaya",
            "type" : "noun"
        },
        {
            "en" : "statute",
            "es" : "la estatua",
            "tr" : "heykel",
            "type" : "noun"
        },
        {
            "en" : "street light",
            "es" : "el poste de la luz",
            "tr" : "elektrik direği",
            "type" : "noun"
        },
        {
            "en" : "subway",
            "es" : "el cruce subterráneo",
            "tr" : "alt geçit",
            "type" : "noun"
        },
        {
            "en" : "pavement",
            "es" : "la acera",
            "tr" : "kaldırım",
            "type" : "noun"
        }
    ],
    "Shopping" : [
        {
            "en" : "to make a list",
            "es" : "hacer una lista",
            "tr" : "alışveriş listesi yapmak",
            "type" : "verb phrase"
        },
        {
            "en" : "shopping bag",
            "es" : "la bolsa de compras",
            "tr" : "alışveriş çantası",
            "type" : "noun"
        },
        {
            "en" : "shop",
            "es" : "la tienda",
            "tr" : "dükkan",
            "type" : "noun"
        },
        {
            "en" : "to go shopping",
            "es" : "ir de tiendas",
            "tr" : "alışverişe gitmek",
            "type" : "verb phrase"
        },
        {
            "en" : "butcher",
            "es" : "el carnicero",
            "tr" : "kasap",
            "type" : "noun"
        },
        {
            "en" : "delicatessen",
            "es" : "la charcutería",
            "tr" : "şarküteri",
            "type" : "noun"
        },
        {
            "en" : "delicatessen",
            "es" : "la fiambrería",
            "tr" : "şarküteri",
            "type" : "noun"
        },
        {
            "en" : "bakery",
            "es" : "la panadería",
            "tr" : "fırın",
            "type" : "noun"
        },
        {
            "en" : "baker",
            "es" : "el panadero / la panadera",
            "tr" : "fırıncı",
            "type" : "noun"
        },
        {
            "en" : "fish market",
            "es" : "la pescadería",
            "tr" : "balık marketi",
            "type" : "noun"
        },
        {
            "en" : "pastry shop",
            "es" : "la pastelería",
            "tr" : "pastane",
            "type" : "noun"
        },
        {
            "en" : "pharmacy",
            "es" : "la farmacia",
            "tr" : "eczane",
            "type" : "noun"
        },
        {
            "en" : "haberdashery",
            "es" : "la mercería",
            "tr" : "tuhafiye",
            "type" : "noun"
        },
        {
            "en" : "bookshop",
            "es" : "la librería",
            "tr" : "kitapçı",
            "type" : "noun"
        },
        {
            "en" : "florist",
            "es" : "la floristería",
            "tr" : "çiçekçi",
            "type" : "noun"
        },
        {
            "en" : "hairdresser",
            "es" : "peluquería",
            "tr" : "kuaför",
            "type" : "noun"
        },
        {
            "en" : "to do shopping",
            "es" : "hacer las compras",
            "tr" : "alışveriş yapmak",
            "type" : "verb phrase"
        },
        {
            "en" : "to line up",
            "es" : "hacer cola",
            "tr" : "sıraya girmek",
            "type" : "verb"
        },
        {
            "en" : "a kilo of ...",
            "es" : "un kilo de ...",
            "tr" : "bir kilo ...",
            "type" : "phrase"
        },
        {
            "en" : "half a kilo of ...",
            "es" : "medio kilo de ...",
            "tr" : "yarım kilo ...",
            "type" : "phrase"
        },
        {
            "en" : "to weigh",
            "es" : "pesar",
            "tr" : "tartmak",
            "type" : "verb"
        },
        {
            "en" : "market",
            "es" : "el mercado",
            "tr" : "pazar",
            "type" : "noun"
        },
        {
            "en" : "basket",
            "es" : "la cesta",
            "tr" : "sepet",
            "type" : "noun"
        },
        {
            "en" : "shopping cart",
            "es" : "la carretilla",
            "tr" : "alışveriş arabası",
            "type" : "noun"
        },
        {
            "en" : "can",
            "es" : "el bote",
            "tr" : "kutu",
            "type" : "noun"
        },
        {
            "en" : "packet",
            "es" : "el paquete",
            "tr" : "paket",
            "type" : "noun"
        },
        {
            "en" : "bottle",
            "es" : "la botella",
            "tr" : "şişe",
            "type" : "noun"
        },
        {
            "en" : "entrance",
            "es" : "la entrada",
            "tr" : "giriş",
            "type" : "noun"
        },
        {
            "en" : "exit",
            "es" : "la salida",
            "tr" : "çıkış",
            "type" : "noun"
        },
        {
            "en" : "cashier",
            "es" : "el cajero / la cajera",
            "tr" : "kasiyer",
            "type" : "noun"
        },
        {
            "en" : "little bag",
            "es" : "la bolsita",
            "tr" : "küçük torba [poşet]",
            "type" : "noun"
        },
        {
            "en" : "shop window",
            "es" : "el escaparate",
            "tr" : "vitrin",
            "type" : "noun"
        },
        {
            "en" : "expensive",
            "es" : "caro(a)",
            "tr" : "pahalı",
            "type" : "adjective"
        },
        {
            "en" : "customer",
            "es" : "el cliento / la clienta",
            "tr" : "müşteri",
            "type" : "noun"
        },
        {
            "en" : "to buy",
            "es" : "comprar",
            "tr" : "satın almak",
            "type" : "verb"
        },
        {
            "en" : "to sell",
            "es" : "vender",
            "tr" : "satmak",
            "type" : "verb"
        },
        {
            "en" : "a bargain",
            "es" : "una ganga",
            "tr" : "ucuz bir şey",
            "type" : "noun"
        },
        {
            "en" : "to spend money",
            "es" : "gastar dinero",
            "tr" : "para harcamak",
            "type" : "verb phrase"
        },
        {
            "en" : "price",
            "es" : "el precio",
            "tr" : "fiyat",
            "type" : "noun"
        },
        {
            "en" : "receipt",
            "es" : "el recibo",
            "tr" : "fiş",
            "type" : "noun"
        },
        {
            "en" : "small",
            "es" : "pequeño(a)",
            "tr" : "küçük",
            "type" : "adjective"
        },
        {
            "en" : "medium",
            "es" : "mediano",
            "tr" : "orta",
            "type" : "adjective"
        },
        {
            "en" : "large",
            "es" : "grande",
            "tr" : "büyük",
            "type" : "adjective"
        },
        {
            "en" : "How much is ...?",
            "es" : "¿Cuánto cuesta ...",
            "tr" : "Kaç para?",
            "type" : "phrase"
        },
        {
            "en" : "the stationery store",
            "es" : "la papelería",
            "tr" : "kırtasiye dükkanı",
            "type" : "noun"
        },
        {
            "en" : "book",
            "es" : "el libro",
            "tr" : "kitap",
            "type" : "noun"
        },
        {
            "en" : "envelope",
            "es" : "el sobre",
            "tr" : "zarf",
            "type" : "noun"
        },
        {
            "en" : "postcard",
            "es" : "la tarjeta postal",
            "tr" : "kartpostal",
            "type" : "noun"
        },
        {
            "en" : "pen",
            "es" : "el bolígrafo",
            "tr" : "kalem",
            "type" : "noun"
        },
        {
            "en" : "pencil",
            "es" : "el lápiz",
            "tr" : "kurşun kalem",
            "type" : "noun"
        },
        {
            "en" : "escalator",
            "es" : "la escalera móvil",
            "tr" : "yürüyen merdiven",
            "type" : "noun"
        },
        {
            "en" : "elevator",
            "es" : "el ascensor",
            "tr" : "asansör",
            "type" : "noun"
        },
        {
            "en" : "clothes",
            "es" : "la ropa",
            "tr" : "giysi [kıyafet]",
            "type" : "noun"
        },
        {
            "en" : "toy",
            "es" : "el juguete",
            "tr" : "oyuncak",
            "type" : "noun"
        },
        {
            "en" : "furniture",
            "es" : "mueble",
            "tr" : "mobilya",
            "type" : "noun"
        }
    ],
    "Post office and bank" : [
        {
            "en" : "post office",
            "es" : "correos",
            "tr" : "postane",
            "type" : "noun"
        },
        {
            "en" : "to send mail",
            "es" : "echar al correo",
            "tr" : "postaya vermek",
            "type" : "verb phrase"
        },
        {
            "en" : "letter",
            "es" : "la carta",
            "tr" : "mektup",
            "type" : "noun"
        },
        {
            "en" : "package",
            "es" : "el paquete",
            "tr" : "paket ",
            "type" : "noun"
        },
        {
            "en" : "to send",
            "es" : "mandar",
            "tr" : "göndermek",
            "type" : "verb"
        },
        {
            "en" : "telegram",
            "es" : "el telegrama",
            "tr" : "telgraf",
            "type" : "noun"
        },
        {
            "en" : "form",
            "es" : "el formulario",
            "tr" : "form",
            "type" : "noun"
        },
        {
            "en" : "stamp",
            "es" : "el sello",
            "tr" : "pul",
            "type" : "noun"
        },
        {
            "en" : "address",
            "es" : "las señas",
            "tr" : "adres",
            "type" : "noun"
        },
        {
            "en" : "postman",
            "es" : "el cartero / la cartera",
            "tr" : "postacı",
            "type" : "noun"
        },
        {
            "en" : "mail",
            "es" : "el correo",
            "tr" : "posta",
            "type" : "noun"
        },
        {
            "en" : "to deliver",
            "es" : "entregar",
            "tr" : "teslim etmek",
            "type" : "verb"
        },
        {
            "en" : "bank",
            "es" : "el banco",
            "tr" : "banka",
            "type" : "noun"
        },
        {
            "en" : "money",
            "es" : "el dinero",
            "tr" : "pahalı",
            "type" : "noun"
        },
        {
            "en" : "to exchange money",
            "es" : "cambiar dinero",
            "tr" : "para bozdurmak",
            "type" : "verb phrase"
        },
        {
            "en" : "exchange rate",
            "es" : "el tipo de cambio",
            "tr" : "döviz kuru",
            "type" : "noun"
        },
        {
            "en" : "bank manager",
            "es" : "el gerente del banco",
            "tr" : "banka müdürü",
            "type" : "noun"
        },
        {
            "en" : "cashier",
            "es" : "el cajero / la cajera",
            "tr" : "vezne görevlisi",
            "type" : "noun"
        },
        {
            "en" : "Do you have change?",
            "es" : "¿Tiene cambio?",
            "tr" : "Bozuk paranız var mı?",
            "type" : "phrase"
        },
        {
            "en" : "coin",
            "es" : "la moneda",
            "tr" : "madeni para",
            "type" : "noun"
        },
        {
            "en" : "paper money",
            "es" : "el billete",
            "tr" : "banknot",
            "type" : "noun"
        },
        {
            "en" : "credit card",
            "es" : "la tarjeta de crédito",
            "tr" : "kredi kartı",
            "type" : "noun"
        },
        {
            "en" : "to deposit",
            "es" : "meter dinero",
            "tr" : "para yatırmak",
            "type" : "verb"
        },
        {
            "en" : "withdraw",
            "es" : "sacar dinero",
            "tr" : "para çekmek",
            "type" : "verb"
        },
        {
            "en" : "checkbook",
            "es" : "la chequera",
            "tr" : "çek defteri",
            "type" : "noun"
        },
        {
            "en" : "wallet",
            "es" : "la cartera",
            "tr" : "cüzdan",
            "type" : "noun"
        },
        {
            "en" : "purse",
            "es" : "el monedero",
            "tr" : "cüzdan",
            "type" : "noun"
        },
        {
            "en" : "bag",
            "es" : "el bolso",
            "tr" : "çanta",
            "type" : "noun"
        }
    ],
    "Phonecalls and letters" : [
        {
            "en" : "to make a call",
            "es" : "hacer una llamada",
            "tr" : "arana yapmak",
            "type" : "verb phrase"
        },
        {
            "en" : "telephone",
            "es" : "el teléfono",
            "tr" : "telefon",
            "type" : "noun"
        },
        {
            "en" : "to dial number",
            "es" : "marcar el numero",
            "tr" : "numarayı çevirmek",
            "type" : "verb phrase"
        },
        {
            "en" : "phone number",
            "es" : "el número de teléfono",
            "tr" : "telefon numarası",
            "type" : "noun"
        },
        {
            "en" : "area code",
            "es" : "la cifra regional",
            "tr" : "alan kodu",
            "type" : "noun"
        },
        {
            "en" : "telephone directory",
            "es" : "la quía de teléfonos",
            "tr" : "telefon rehberi",
            "type" : "noun"
        },
        {
            "en" : "to ring",
            "es" : "sonar",
            "tr" : "çalmak",
            "type" : "verb"
        },
        {
            "en" : "to answer telephone",
            "es" : "contestar al teléfono",
            "tr" : "telefonu cevaplamak",
            "type" : "verb phrase"
        },
        {
            "en" : "telephone box",
            "es" : "la cabina de teléfono",
            "tr" : "telefon kulübesi",
            "type" : "noun"
        },
        {
            "en" : "emergency",
            "es" : "la urgencia",
            "tr" : "aciliyet",
            "type" : "noun"
        },
        {
            "en" : "to write letter",
            "es" : "escribir una carta",
            "tr" : "mektup yazmak",
            "type" : "verb phrase"
        },
        {
            "en" : "Yours sincerely",
            "es" : "Le saluda atentamente",
            "tr" : "Saygılarımla",
            "type" : "phrase"
        },
        {
            "en" : "Dear sir / madam",
            "es" : "Muy señor mio / Estimada señora",
            "tr" : "Sayın bay / bayan",
            "type" : "phrase"
        },
        {
            "en" : "Dear ...",
            "es" : "Querida ...",
            "tr" : "Değerli ...",
            "type" : "phrase"
        },
        {
            "en" : "to send a postcard",
            "es" : "mandar una postal",
            "tr" : "kartpostal göndermek",
            "type" : "verb phrase"
        }
    ],
    "Out and about" : [
        {
            "en" : "to go on foot",
            "es" : "ir a pie",
            "tr" : "yürüyerek gitmek",
            "type" : "verb phrase"
        },
        {
            "en" : "to walk",
            "es" : "caminar",
            "tr" : "yürümek",
            "type" : "verb"
        },
        {
            "en" : "to walk",
            "es" : "andar",
            "tr" : "yürümek",
            "type" : "verb"
        },
        {
            "en" : "to run",
            "es" : "correr",
            "tr" : "koşmak",
            "type" : "verb"
        },
        {
            "en" : "baby carriage [baby stroller]",
            "es" : "el cochecito de bebé",
            "tr" : "bebek arabası",
            "type" : "noun"
        },
        {
            "en" : "to ask for directions",
            "es" : "preguntar el camino",
            "tr" : "yol tarifi sormak",
            "type" : "verb phrase"
        },
        {
            "en" : "map",
            "es" : "el mapa",
            "tr" : "harita",
            "type" : "noun"
        },
        {
            "en" : "signpost",
            "es" : "el poste indicador",
            "tr" : "yol tabelası",
            "type" : "noun"
        },
        {
            "en" : "How far is ...?",
            "es" : "¿A qué distancia está ...?",
            "tr" : "... ne kadar uzakta?",
            "type" : "phrase"
        },
        {
            "en" : "take the bus",
            "es" : "coger el bus",
            "tr" : "otobüse binmek",
            "type" : "verb"
        },
        {
            "en" : "passenger",
            "es" : "el pasajero / la pasajera",
            "tr" : "yolcu",
            "type" : "noun"
        },
        {
            "en" : "to get off",
            "es" : "bajarse",
            "tr" : "inmek",
            "type" : "verb"
        },
        {
            "en" : "to get on",
            "es" : "subirse",
            "tr" : "binmek",
            "type" : "verb"
        },
        {
            "en" : "ticket",
            "es" : "el billete",
            "tr" : "bilet",
            "type" : "noun"
        },
        {
            "en" : "bus",
            "es" : "el autobús",
            "tr" : "otobüs",
            "type" : "noun"
        },
        {
            "en" : "bus stop",
            "es" : "la parada de autobuses",
            "tr" : "otobüs durağı",
            "type" : "noun"
        },
        {
            "en" : "subway station",
            "es" : "la estación de metro",
            "tr" : "metro istasyonu",
            "type" : "noun"
        },
        {
            "en" : "subway",
            "es" : "el metro",
            "tr" : "metro",
            "type" : "noun"
        },
        {
            "en" : "traffic",
            "es" : "el tráfico",
            "tr" : "trafik",
            "type" : "noun"
        },
        {
            "en" : "truck",
            "es" : "el camión",
            "tr" : "kamyon",
            "type" : "noun"
        },
        {
            "en" : "van",
            "es" : "la furgoneta",
            "tr" : "minibüs",
            "type" : "noun"
        },
        {
            "en" : "driver",
            "es" : "el conductor / la conductora",
            "tr" : "sürücü [şoför]",
            "type" : "noun"
        },
        {
            "en" : "to drive",
            "es" : "conducir",
            "tr" : "sürmek",
            "type" : "verb"
        },
        {
            "en" : "car",
            "es" : "el auto",
            "tr" : "araba [otomobil]",
            "type" : "noun"
        },
        {
            "en" : "moped",
            "es" : " el ciclomotor",
            "tr" : "moped",
            "type" : "noun"
        },
        {
            "en" : "bicycle",
            "es" : "la bicicleta",
            "tr" : "bisiklet",
            "type" : "noun"
        },
        {
            "en" : "to ride bicycle",
            "es" : "ir en bicicleta",
            "tr" : "bisiklete binmek",
            "type" : "verb phrase"
        },
        {
            "en" : "motorbike",
            "es" : "la motocicleta",
            "tr" : "motosiklet",
            "type" : "noun"
        },
        {
            "en" : "slow",
            "es" : "lento(a)",
            "tr" : "yavaş",
            "type" : "adjective"
        },
        {
            "en" : "fast",
            "es" : "rápido(a)",
            "tr" : "hızlı",
            "type" : "adjective"
        },
        {
            "en" : "traffic jam",
            "es" : "el embotellamiento",
            "tr" : "trafik sıkışıklığı",
            "type" : "noun"
        },
        {
            "en" : "taxi stand",
            "es" : "la parada de taxis",
            "tr" : "taksi durağı",
            "type" : "noun"
        },
        {
            "en" : "taxi",
            "es" : "el taxi",
            "tr" : "taksi",
            "type" : "noun"
        },
        {
            "en" : "to hail taxi",
            "es" : "parar un taxi",
            "tr" : "taksi çevirmek",
            "type" : "verb phrase"
        },
        {
            "en" : "fare",
            "es" : "el precio del viaje",
            "tr" : "yol ücreti",
            "type" : "noun"
        }
    ],
    "Driving" : [
        {
            "en" : "to start",
            "es" : "arrancar",
            "tr" : "çalıştırmak",
            "type" : "verb"
        },
        {
            "en" : "to accelerate",
            "es" : "acelerar",
            "tr" : "hızlanmak",
            "type" : "verb"
        },
        {
            "en" : "to pass",
            "es" : "adelantar",
            "tr" : "geçmek",
            "type" : "verb"
        },
        {
            "en" : "to slow down",
            "es" : "reducir velocidad",
            "tr" : "hızı azaltmak",
            "type" : "verb phrase"
        },
        {
            "en" : "highway [motorway]",
            "es" : "la autopista",
            "tr" : "otoyol",
            "type" : "noun"
        },
        {
            "en" : "traffic lights",
            "es" : "las luces de tráfico",
            "tr" : "trafik ışıkları",
            "type" : "noun"
        },
        {
            "en" : "road",
            "es" : "la carretera",
            "tr" : "yol",
            "type" : "noun"
        },
        {
            "en" : "to turn left",
            "es" : "torcer a la izquierda",
            "tr" : "sola dönmek",
            "type" : "verb phrase"
        },
        {
            "en" : "to tun right",
            "es" : "torcer a la derecha",
            "tr" : "sağa dönmek",
            "type" : "verb phrase"
        },
        {
            "en" : "to go straight ahead",
            "es" : "seguir todo derecho",
            "tr" : "dosdoğru gitmek",
            "type" : "verb phrase"
        },
        {
            "en" : "side street",
            "es" : "la bocacalle",
            "tr" : "ara sokak girişi",
            "type" : "noun"
        },
        {
            "en" : "one-way",
            "es" : "dirección única",
            "tr" : "tek yön",
            "type" : "noun phrase"
        },
        {
            "en" : "no entry",
            "es" : "dirección prohibida",
            "tr" : "giriş yok",
            "type" : "noun phrase"
        },
        {
            "en" : "parking area",
            "es" : "el aparcamiento",
            "tr" : "park yeri",
            "type" : "noun phrase"
        },
        {
            "en" : "to park",
            "es" : "aparcar",
            "tr" : "park etmek",
            "type" : "verb"
        },
        {
            "en" : "backward",
            "es" : "hacia atrás",
            "tr" : "geriye doğru",
            "type" : "adverb"
        },
        {
            "en" : "forward",
            "es" : "hacia adelante",
            "tr" : "ileriye doğru",
            "type" : "adverb"
        },
        {
            "en" : "crash [collision]",
            "es" : "el choque",
            "tr" : "kaza [çarpışma]",
            "type" : "noun"
        },
        {
            "en" : "steering wheel",
            "es" : "el volante",
            "tr" : "direksiyon",
            "type" : "noun"
        },
        {
            "en" : "windshield",
            "es" : "el parabrisas",
            "tr" : "ön cam",
            "type" : "noun"
        },
        {
            "en" : "safety belt",
            "es" : "el cinturón de seguridad",
            "tr" : "emniyet kemeri",
            "type" : "noun"
        },
        {
            "en" : "indicator",
            "es" : "el indicador",
            "tr" : "sinyal",
            "type" : "noun"
        },
        {
            "en" : "headlight",
            "es" : "el faro",
            "tr" : "far",
            "type" : "noun"
        },
        {
            "en" : "hood",
            "es" : "el capó",
            "tr" : "kaput",
            "type" : "noun"
        },
        {
            "en" : "trunk",
            "es" : "el maletero",
            "tr" : "bagaj",
            "type" : "noun"
        },
        {
            "en" : "license plate",
            "es" : "el matrícula",
            "tr" : "plaka",
            "type" : "noun"
        },
        {
            "en" : "wheel",
            "es" : "el rueda",
            "tr" : "tekerlek",
            "type" : "noun"
        },
        {
            "en" : "tire",
            "es" : "​el neumático",
            "tr" : "lastik",
            "type" : "noun"
        },
        {
            "en" : "horn",
            "es" : "la bocina",
            "tr" : "korna",
            "type" : "noun"
        },
        {
            "en" : "flat tire [deflated tire]",
            "es" : "la rueda deshinchada",
            "tr" : "inmiş lastik",
            "type" : "noun phrase"
        },
        {
            "en" : "breakdown",
            "es" : "la avería",
            "tr" : "arıza",
            "type" : "noun"
        },
        {
            "en" : "mechanic",
            "es" : "el mecánico / la mecánica",
            "tr" : "araba tamircisi",
            "type" : "noun"
        },
        {
            "en" : "oil",
            "es" : "​el aceite",
            "tr" : "yağ",
            "type" : "noun"
        },
        {
            "en" : "fill up with gas",
            "es" : "llenar de gasolina",
            "tr" : "benzin doldurmak",
            "type" : "verb phrase"
        },
        {
            "en" : "gasolin",
            "es" : "la gasolina",
            "tr" : "benzin",
            "type" : "noun"
        }
    ],
    "Travelling by train" : [
        {
            "en" : "station",
            "es" : "la estación",
            "tr" : "istasyon",
            "type" : "noun"
        },
        {
            "en" : "porter",
            "es" : "el mozo / la maza",
            "tr" : "hamal [taşıyıcı]",
            "type" : "noun"
        },
        {
            "en" : "left-luggage office",
            "es" : "la consigna",
            "tr" : "emanet",
            "type" : "noun"
        },
        {
            "en" : "ticket inspector [conductor]",
            "es" : "el revisor / la revisora",
            "tr" : "bilet memuru [kondüktör]",
            "type" : "noun"
        },
        {
            "en" : "waiting room",
            "es" : "la sala de espera",
            "tr" : "bekleme odası",
            "type" : "noun"
        },
        {
            "en" : "barrier",
            "es" : "la barrera",
            "tr" : "bariyer",
            "type" : "noun"
        },
        {
            "en" : "traveller",
            "es" : "el viajero / la viajera",
            "tr" : "gezgin",
            "type" : "noun"
        },
        {
            "en" : "timetable [schedule]",
            "es" : "el horario",
            "tr" : "çalışma saatleri",
            "type" : "noun"
        },
        {
            "en" : "the train to ...",
            "es" : "el tren para ...",
            "tr" : "... treni",
            "type" : "noun phrase"
        },
        {
            "en" : "the train from ...",
            "es" : "el tren desde ...",
            "tr" : "... den gelen tren",
            "type" : "noun phrase"
        },
        {
            "en" : "ticket office [box office]",
            "es" : "la taquilla",
            "tr" : "gişe",
            "type" : "noun"
        },
        {
            "en" : "ticket",
            "es" : "el billete",
            "tr" : "bilet",
            "type" : "noun"
        },
        {
            "en" : "return ticket",
            "es" : "el billete de ida y vuelta",
            "tr" : "gidiş-dönüş bileti",
            "type" : "noun phrase"
        },
        {
            "en" : "season ticket",
            "es" : "el billete de abono",
            "tr" : "abonman bileti",
            "type" : "noun phrase"
        },
        {
            "en" : "ticket machine",
            "es" : "la máquina de billetes",
            "tr" : "bilet makinesi",
            "type" : "noun phrase"
        },
        {
            "en" : "to reserve a seat",
            "es" : "reservar un asiento",
            "tr" : "koltuk ayırtmak",
            "type" : "verb phrase"
        },
        {
            "en" : "railway",
            "es" : "el ferrocarril",
            "tr" : "demir yolu",
            "type" : "noun"
        },
        {
            "en" : "train",
            "es" : "el tren",
            "tr" : "tren",
            "type" : "noun"
        },
        {
            "en" : "first class",
            "es" : "primera clase",
            "tr" : "birinci sınıf",
            "type" : "noun phrase"
        },
        {
            "en" : "to be delayed",
            "es" : "llevar retraso",
            "tr" : "gecikme yaşamak",
            "type" : "verb phrase"
        },
        {
            "en" : "to arrive on time",
            "es" : "llegar a la hora",
            "tr" : "zamanında varmak",
            "type" : "verb phrase"
        },
        {
            "en" : "sleeping-car",
            "es" : "el coche-cama",
            "tr" : "yataklı vagon",
            "type" : "noun phrase"
        },
        {
            "en" : "carriage [railcar]",
            "es" : "el vagón",
            "tr" : "vagon",
            "type" : "noun"
        },
        {
            "en" : "to catch train",
            "es" : "coger el tren",
            "tr" : "trene yetişmek",
            "type" : "verb phrase"
        },
        {
            "en" : "to miss train",
            "es" : "perder el tren",
            "tr" : "treni kaçırmak",
            "type" : "verb phrase"
        },
        {
            "en" : "engine",
            "es" : "la máquina",
            "tr" : "lokomotif",
            "type" : "noun"
        },
        {
            "en" : "track",
            "es" : "la vía",
            "tr" : "ray",
            "type" : "noun"
        },
        {
            "en" : "platform",
            "es" : "el andén",
            "tr" : "peron",
            "type" : "noun"
        },
        {
            "en" : "ticket inspector [conductor]",
            "es" : "el interventor / la interventora",
            "tr" : "tren görevlisi [kondüktör]",
            "type" : "noun phrase"
        },
        {
            "en" : "freight train",
            "es" : "el tren de mercancías",
            "tr" : "yük treni",
            "type" : "noun phrase"
        },
        {
            "en" : "seat",
            "es" : "el asiento",
            "tr" : "koltuk",
            "type" : "noun"
        },
        {
            "en" : "reserved seat",
            "es" : "asiento reservado",
            "tr" : "ayrılmış koltuk",
            "type" : "noun phrase"
        },
        {
            "en" : "No smoking",
            "es" : "Prohibido fumar",
            "tr" : "Sigara içmek yasaktır",
            "type" : "phrase"
        }
    ],
    "Travelling by plane and boat" : [
        {
            "en" : "airport",
            "es" : "el aeropuerto",
            "tr" : "havalimanı",
            "type" : "noun"
        },
        {
            "en" : "plane",
            "es" : "el avión",
            "tr" : "uçak",
            "type" : "noun"
        },
        {
            "en" : "to fly",
            "es" : "volar",
            "tr" : "uçmak",
            "type" : "verb"
        },
        {
            "en" : "to land",
            "es" : "aterrizar",
            "tr" : "iniş yapnak",
            "type" : "verb"
        },
        {
            "en" : "to take off",
            "es" : "despegar",
            "tr" : "kalkış yapmak",
            "type" : "verb"
        },
        {
            "en" : "runway",
            "es" : "la pista de aterrizaje",
            "tr" : "pist",
            "type" : "noun"
        },
        {
            "en" : "arrivals",
            "es" : "llegadas",
            "tr" : "gelenler",
            "type" : "noun"
        },
        {
            "en" : "customs",
            "es" : "la aduana",
            "tr" : "gümrük",
            "type" : "noun"
        },
        {
            "en" : "customs officer",
            "es" : "el aduanero / la aduanera",
            "tr" : "gümrük memuru",
            "type" : "noun"
        },
        {
            "en" : "nothing to declare",
            "es" : "nada que declarar",
            "tr" : "bildirmek için bir şey yok",
            "type" : "expression"
        },
        {
            "en" : "passport",
            "es" : "el pasaport",
            "tr" : "pasaport",
            "type" : "noun"
        },
        {
            "en" : "departures",
            "es" : "dalidas",
            "tr" : "gidenler",
            "type" : "noun"
        },
        {
            "en" : "check-in",
            "es" : "la recepción",
            "tr" : "giriş",
            "type" : "noun"
        },
        {
            "en" : "label",
            "es" : "la etiqueta",
            "tr" : "etiket",
            "type" : "noun"
        },
        {
            "en" : "Fasten your seatbelts!",
            "es" : "¡Abrocharse el cinturón!",
            "tr" : "Emniyet kemerinizi bağlayın!",
            "type" : "phrase"
        },
        {
            "en" : "pilot",
            "es" : "el piloto / la piloto",
            "tr" : "pilot",
            "type" : "noun"
        },
        {
            "en" : "wheelbarrow",
            "es" : "la carretilla",
            "tr" : "el arabası",
            "type" : "noun"
        },
        {
            "en" : "crew",
            "es" : "la tripulación",
            "tr" : "mürettebat",
            "type" : "noun"
        },
        {
            "en" : "stewardess",
            "es" : "la azafata",
            "tr" : "hostes",
            "type" : "noun"
        },
        {
            "en" : "suitcase",
            "es" : "la maleta",
            "tr" : "bavul",
            "type" : "noun"
        },
        {
            "en" : "hand luggage",
            "es" : "el equipaje de mano",
            "tr" : "el bagajı",
            "type" : "noun"
        },
        {
            "en" : "port",
            "es" : "el puerto",
            "tr" : "liman",
            "type" : "noun"
        },
        {
            "en" : "to sail",
            "es" : "ir en barco",
            "tr" : "denize açılmak",
            "type" : "verb"
        },
        {
            "en" : "ship",
            "es" : "el barco",
            "tr" : "gemi",
            "type" : "noun"
        },
        {
            "en" : "ocean liner",
            "es" : "el transatlántico",
            "tr" : "okyanus gemisi",
            "type" : "noun"
        },
        {
            "en" : "flag",
            "es" : "la bandera",
            "tr" : "bayrak",
            "type" : "noun"
        },
        {
            "en" : "porthole",
            "es" : "la portilla",
            "tr" : "ambar penceresi",
            "type" : "noun"
        },
        {
            "en" : "anchor",
            "es" : "el ancla",
            "tr" : "çapa",
            "type" : "noun"
        },
        {
            "en" : "cabin",
            "es" : "el camarote",
            "tr" : "kamara [kabin]",
            "type" : "noun"
        },
        {
            "en" : "captain",
            "es" : "el capitán",
            "tr" : "kaptan",
            "type" : "noun"
        },
        {
            "en" : "deck",
            "es" : "la cubierta",
            "tr" : "güverte",
            "type" : "noun"
        },
        {
            "en" : "smokestack",
            "es" : "la chimenea",
            "tr" : "baca",
            "type" : "noun"
        },
        {
            "en" : "gangway",
            "es" : "la pasarela",
            "tr" : "gemiye biniş köprüsü",
            "type" : "noun"
        },
        {
            "en" : "ferry",
            "es" : "el ferry",
            "tr" : "feribot",
            "type" : "noun"
        },
        {
            "en" : "crossing",
            "es" : "la travesía",
            "tr" : "deniz yolculuğu",
            "type" : "noun"
        },
        {
            "en" : "to get seasick",
            "es" : "marearse",
            "tr" : "deniz tutmak",
            "type" : "verb"
        },
        {
            "en" : "dock",
            "es" : "el muelle",
            "tr" : "rıhtım",
            "type" : "noun"
        },
        {
            "en" : "cargo",
            "es" : "la carga",
            "tr" : "kargo",
            "type" : "noun"
        },
        {
            "en" : "to load",
            "es" : "cargar",
            "tr" : "yüklemek",
            "type" : "verb"
        },
        {
            "en" : "to unload",
            "es" : "descargar",
            "tr" : "boşaltmak [yük indirmek]",
            "type" : "verb"
        },
        {
            "en" : "hold",
            "es" : "la bodega",
            "tr" : "ambar",
            "type" : "noun"
        },
        {
            "en" : "sailor",
            "es" : "el marinero",
            "tr" : "denizci",
            "type" : "noun"
        }
    ],
    "Vacations" : [
        {
            "en" : "to go on vacation",
            "es" : "ir de vacaciones",
            "tr" : "tatile gitmek",
            "type" : "verb phrase"
        },
        {
            "en" : "tourist",
            "es" : "el turista / la turista",
            "tr" : "turist",
            "type" : "noun"
        },
        {
            "en" : "to pack",
            "es" : "hacer la maleta",
            "tr" : "bavul hazırlamak",
            "type" : "verb phrase"
        },
        {
            "en" : "suntan oil",
            "es" : "el aceite para el sol",
            "tr" : "güneş yağı",
            "type" : "noun phrase"
        },
        {
            "en" : "sunglasses",
            "es" : "las gafas de sol",
            "tr" : "güneş gözlüğü",
            "type" : "noun phrase"
        },
        {
            "en" : "hotel",
            "es" : "el hotel",
            "tr" : "otel",
            "type" : "noun"
        },
        {
            "en" : "to stay in a hotel",
            "es" : "quedarse en un hotel",
            "tr" : "otelde kalmak",
            "type" : "verb phrase"
        },
        {
            "en" : "reception",
            "es" : "la recepción",
            "tr" : "resepsiyon",
            "type" : "noun"
        },
        {
            "en" : "with shower",
            "es" : "con ducha",
            "tr" : "duşlu",
            "type" : "phrase"
        },
        {
            "en" : "with balcony",
            "es" : "con balcon",
            "tr" : "balkonlu",
            "type" : "phrase"
        },
        {
            "en" : "single room",
            "es" : "la habitación individual",
            "tr" : "tek kişilik oda",
            "type" : "noun phrase"
        },
        {
            "en" : "double room",
            "es" : "la habitación doble",
            "tr" : "çift kişilik oda",
            "type" : "noun phrase"
        },
        {
            "en" : "to reserve a room",
            "es" : "reservar una habitación",
            "tr" : "oda ayırtmak",
            "type" : "verb phrase"
        },
        {
            "en" : "to be full",
            "es" : "estar completo",
            "tr" : "dolu olmak",
            "type" : "verb phrase"
        },
        {
            "en" : "guesthouse [boarding house]",
            "es" : "la pensión",
            "tr" : "pansiyon",
            "type" : "noun"
        },
        {
            "en" : "beach",
            "es" : "la playa",
            "tr" : "plaj",
            "type" : "noun"
        },
        {
            "en" : "seagull",
            "es" : "la gaviota",
            "tr" : "martı",
            "type" : "noun"
        },
        {
            "en" : "lifeguard",
            "es" : "el vigilante de playa",
            "tr" : "cankurtaran",
            "type" : "noun"
        },
        {
            "en" : "wave",
            "es" : "la ola",
            "tr" : "dalga",
            "type" : "noun"
        },
        {
            "en" : "to swim",
            "es" : "nadar",
            "tr" : "yüzmek",
            "type" : "verb"
        },
        {
            "en" : "sea",
            "es" : "el mar",
            "tr" : "deniz",
            "type" : "noun"
        },
        {
            "en" : "sand",
            "es" : "la arena",
            "tr" : "kum",
            "type" : "noun"
        },
        {
            "en" : "to sunbathe",
            "es" : "tomar un baño de sol",
            "tr" : "güneşlenmek",
            "type" : "verb"
        },
        {
            "en" : "tanned",
            "es" : "bronceado(a)",
            "tr" : "bronzlanmış",
            "type" : "adjective"
        },
        {
            "en" : "parasol [sunshade]",
            "es" : "el parasol",
            "tr" : "şemsiye [güneşlik]",
            "type" : "noun"
        },
        {
            "en" : "seaweed",
            "es" : "las algas marinas",
            "tr" : "yosun",
            "type" : "noun"
        },
        {
            "en" : "crab",
            "es" : "el canare",
            "tr" : "yengeç",
            "type" : "noun"
        },
        {
            "en" : "seahell",
            "es" : "la concha",
            "tr" : "deniz kabuğu",
            "type" : "noun"
        },
        {
            "en" : "to go to mountaineering",
            "es" : "hacer el alpinismo",
            "tr" : "dağcılığa gitmek",
            "type" : "verb phrase"
        },
        {
            "en" : "mountain",
            "es" : "la montaña",
            "tr" : "dağ",
            "type" : "noun"
        },
        {
            "en" : "summit",
            "es" : "la cima",
            "tr" : "zirve",
            "type" : "noun"
        },
        {
            "en" : "view",
            "es" : "la vista",
            "tr" : "görünüm",
            "type" : "noun"
        },
        {
            "en" : "sharp",
            "es" : "empinado(a)",
            "tr" : "dik",
            "type" : "adjective"
        },
        {
            "en" : "to climb",
            "es" : "escalar",
            "tr" : "tırmanmak",
            "type" : "verb"
        },
        {
            "en" : "mountaineer [climber]",
            "es" : "el alpinisto / la alpinista",
            "tr" : "dağcı",
            "type" : "noun"
        },
        {
            "en" : "backpeck",
            "es" : "la mochila",
            "tr" : "sırt çantası",
            "type" : "noun"
        },
        {
            "en" : "to ski",
            "es" : "esquiar",
            "tr" : "kayak yapnak",
            "type" : "verb"
        },
        {
            "en" : "ski resort [ski center]",
            "es" : "el centro de esquí",
            "tr" : "kayak merkezi",
            "type" : "noun phrase"
        },
        {
            "en" : "chairlift",
            "es" : "la silla de ascenso",
            "tr" : "telesiyej",
            "type" : "noun"
        },
        {
            "en" : "slide",
            "es" : "el tobogán",
            "tr" : "kaydırak",
            "type" : "noun"
        },
        {
            "en" : "ski pole",
            "es" : "el bastón de esquí",
            "tr" : "kayak sopası",
            "type" : "noun phrase"
        },
        {
            "en" : "ski boats",
            "es" : "las botas de esqui",
            "tr" : "kayak botu",
            "type" : "noun phrase"
        },
        {
            "en" : "skis",
            "es" : "los esquís",
            "tr" : "kayak takımı",
            "type" : "noun"
        },
        {
            "en" : "to go to camping",
            "es" : "ir de camping",
            "tr" : "kampa gitmek",
            "type" : "verb phrase"
        },
        {
            "en" : "campsite",
            "es" : "el camping",
            "tr" : "kamp alanı",
            "type" : "noun"
        },
        {
            "en" : "caravan [camper van]",
            "es" : "la caravana",
            "tr" : "karavan",
            "type" : "noun"
        },
        {
            "en" : "tent",
            "es" : "la tienda de campaña",
            "tr" : "çadır",
            "type" : "noun"
        },
        {
            "en" : "to pitch the tent",
            "es" : "montar la tienda de campaña",
            "tr" : "çadır kurmak",
            "type" : "verb phrase"
        },
        {
            "en" : "camping stove",
            "es" : "el infiernillo",
            "tr" : "kamp ocağı ",
            "type" : "verb phrase"
        },
        {
            "en" : "sleeping bag",
            "es" : "el saco de dormir",
            "tr" : "uyku tulumu",
            "type" : "noun phrase"
        },
        {
            "en" : "lake",
            "es" : "el lago",
            "tr" : "göl",
            "type" : "noun"
        },
        {
            "en" : "reed",
            "es" : "el junco",
            "tr" : "kamış",
            "type" : "noun"
        },
        {
            "en" : "to go to fishing",
            "es" : "ir de pesca",
            "tr" : "balığa gitmek",
            "type" : "varb phrase"
        },
        {
            "en" : "fishing boat",
            "es" : "la barca de pesca",
            "tr" : "balıkçı teknesi",
            "type" : "noun phrase"
        },
        {
            "en" : "bait",
            "es" : "el cebo",
            "tr" : "yem",
            "type" : "noun"
        },
        {
            "en" : "hook",
            "es" : "el anzuelo",
            "tr" : "olta iğnesi",
            "type" : "noun"
        },
        {
            "en" : "net",
            "es" : "la red",
            "tr" : "ağ",
            "type" : "noun"
        },
        {
            "en" : "to catch a fish",
            "es" : "coger un pez",
            "tr" : "balık tutmak",
            "type" : "verb phrase"
        },
        {
            "en" : "canoe",
            "es" : "la canoa",
            "tr" : "kano",
            "type" : "noun"
        },
        {
            "en" : "to capsize",
            "es" : "volcarse",
            "tr" : "devrilmek",
            "type" : "verb"
        },
        {
            "en" : "to float",
            "es" : "flotar",
            "tr" : "su üstüne durmak",
            "type" : "verb"
        },
        {
            "en" : "dragonfly",
            "es" : "la libélula",
            "tr" : "yusufçuk",
            "type" : "noun"
        },
        {
            "en" : "mosquito",
            "es" : "el mosquito",
            "tr" : "sivrisinek",
            "type" : "noun"
        },
        {
            "en" : "duck",
            "es" : "el pato",
            "tr" : "ördek",
            "type" : "noun"
        },
        {
            "en" : "frog",
            "es" : "la rana",
            "tr" : "kurbağa",
            "type" : "noun"
        }
    ],
    "In the countryside" : [
        {
            "en" : "village",
            "es" : "el pueblo",
            "tr" : "köy",
            "type" : "noun"
        },
        {
            "en" : "landscape",
            "es" : "el paisaje",
            "tr" : "manzara",
            "type" : "noun"
        },
        {
            "en" : "peaceful",
            "es" : "tranquilo(a)",
            "tr" : "huzurlu",
            "type" : "adjective"
        },
        {
            "en" : "countryside",
            "es" : "el campo",
            "tr" : "kırsal",
            "type" : "noun"
        },
        {
            "en" : "cottage",
            "es" : "la casita",
            "tr" : "küçük ev",
            "type" : "noun"
        },
        {
            "en" : "to go for a walk",
            "es" : "dar un paseo",
            "tr" : "yürüyüşe çıkmak",
            "type" : "verb phrase"
        },
        {
            "en" : "path",
            "es" : "el camino",
            "tr" : "patika",
            "type" : "noun"
        },
        {
            "en" : "stream",
            "es" : "el arroyo",
            "tr" : "dere",
            "type" : "noun"
        },
        {
            "en" : "meadow",
            "es" : "el prado",
            "tr" : "çayır",
            "type" : "noun"
        },
        {
            "en" : "mole",
            "es" : "el topo",
            "tr" : "köstebek",
            "type" : "noun"
        },
        {
            "en" : "to climb a tree",
            "es" : "trepar un arbol",
            "tr" : "ağaca tırmanmak",
            "type" : "verb phrase"
        },
        {
            "en" : "wild flowers",
            "es" : "las flores del campo",
            "tr" : "kır çiçekleri",
            "type" : "noun phrase"
        },
        {
            "en" : "to pick flowers",
            "es" : "coger flores",
            "tr" : "çiçek toplamak",
            "type" : "verb phrase"
        },
        {
            "en" : "a bunch of flowers",
            "es" : "un manojo de flores",
            "tr" : "bir demet çiçek",
            "type" : "noun phrase"
        },
        {
            "en" : "daisy",
            "es" : "la margarita",
            "tr" : "papatya",
            "type" : "noun"
        },
        {
            "en" : "poppy",
            "es" : "la amapola",
            "tr" : "gelincik",
            "type" : "noun"
        },
        {
            "en" : "woods",
            "es" : "el bosque",
            "tr" : "orman",
            "type" : "noun"
        },
        {
            "en" : "oak",
            "es" : "el roble",
            "tr" : "meşe",
            "type" : "noun"
        },
        {
            "en" : "pine",
            "es" : "el pino",
            "tr" : "çam",
            "type" : "noun"
        },
        {
            "en" : "leaf",
            "es" : "la hoja",
            "tr" : "yaprak",
            "type" : "noun"
        },
        {
            "en" : "branch",
            "es" : "la rama",
            "tr" : "dal",
            "type" : "noun"
        },
        {
            "en" : "owl",
            "es" : "el buho",
            "tr" : "baykuş",
            "type" : "noun"
        },
        {
            "en" : "blackbird",
            "es" : "el mirlo",
            "tr" : "karatavuk",
            "type" : "noun"
        },
        {
            "en" : "squirrel",
            "es" : "la ardilla",
            "tr" : "sincap",
            "type" : "noun"
        },
        {
            "en" : "fox",
            "es" : "el zorro",
            "tr" : "tilki",
            "type" : "noun"
        },
        {
            "en" : "to fly",
            "es" : "volar",
            "tr" : "uçmak",
            "type" : "verb"
        },
        {
            "en" : "sparrow",
            "es" : "el gorrión",
            "tr" : "serçe",
            "type" : "noun"
        },
        {
            "en" : "valley",
            "es" : "el valle",
            "tr" : "vadi",
            "type" : "noun"
        },
        {
            "en" : "hill",
            "es" : "el cerro",
            "tr" : "tepe",
            "type" : "noun"
        },
        {
            "en" : "bridge",
            "es" : "el puente",
            "tr" : "köprü",
            "type" : "noun"
        },
        {
            "en" : "slope",
            "es" : "la cuesta",
            "tr" : "yokuş",
            "type" : "noun"
        },
        {
            "en" : "willow",
            "es" : "el sauce",
            "tr" : "söğüt",
            "type" : "noun"
        },
        {
            "en" : "bank",
            "es" : "la orilla",
            "tr" : "kıyı",
            "type" : "noun"
        },
        {
            "en" : "river",
            "es" : "el rio",
            "tr" : "nehir",
            "type" : "noun"
        },
        {
            "en" : "fly",
            "es" : "la mosca",
            "tr" : "sinek",
            "type" : "noun"
        },
        {
            "en" : "spider",
            "es" : "la araña",
            "tr" : "örümcek",
            "type" : "noun"
        }
    ],
    "On the farm" : [
        {
            "en" : "farm",
            "es" : "la granja",
            "tr" : "çiftlik",
            "type" : "noun"
        },
        {
            "en" : "stable",
            "es" : "el establo",
            "tr" : "ahır",
            "type" : "noun"
        },
        {
            "en" : "horse",
            "es" : "el caballo",
            "tr" : "at",
            "type" : "noun"
        },
        {
            "en" : "barn",
            "es" : "el granero",
            "tr" : "ambar",
            "type" : "noun"
        },
        {
            "en" : "hay",
            "es" : "el heno",
            "tr" : "saman",
            "type" : "noun"
        },
        {
            "en" : "cow",
            "es" : "la vaca",
            "tr" : "inek",
            "type" : "noun"
        },
        {
            "en" : "donkey",
            "es" : "el burro",
            "tr" : "eşek",
            "type" : "noun"
        },
        {
            "en" : "to milk",
            "es" : "ordeñar",
            "tr" : "sağmak",
            "type" : "verb"
        },
        {
            "en" : "calf",
            "es" : "la ternera",
            "tr" : "dana",
            "type" : "noun"
        },
        {
            "en" : "pig",
            "es" : "el cerdo",
            "tr" : "domuz",
            "type" : "noun"
        },
        {
            "en" : "ladder",
            "es" : "la escalera",
            "tr" : "merdiven",
            "type" : "noun"
        },
        {
            "en" : "farmyard",
            "es" : "el patio de labranza",
            "tr" : "çiftlik avlusu",
            "type" : "noun phrase"
        },
        {
            "en" : "hen",
            "es" : "la gallina",
            "tr" : "tavuk",
            "type" : "noun"
        },
        {
            "en" : "rooster",
            "es" : "el gallo",
            "tr" : "horoz",
            "type" : "noun"
        },
        {
            "en" : "chicken coop",
            "es" : "el gallinero",
            "tr" : "tavuk kümesi",
            "type" : "noun"
        },
        {
            "en" : "to lay eggs",
            "es" : "poner huevos",
            "tr" : "yumurtlamak",
            "type" : "verb"
        },
        {
            "en" : "farmer",
            "es" : "el granjero / la granjera",
            "tr" : "çiftçi",
            "type" : "noun"
        },
        {
            "en" : "goose",
            "es" : "el ganso",
            "tr" : "kaz",
            "type" : "noun"
        },
        {
            "en" : "goat",
            "es" : "la cabra",
            "tr" : "keçi",
            "type" : "noun"
        },
        {
            "en" : "field",
            "es" : "el campo",
            "tr" : "tarla",
            "type" : "noun"
        },
        {
            "en" : "flock",
            "es" : "el rebaño",
            "tr" : "sürü",
            "type" : "noun"
        },
        {
            "en" : "sheep",
            "es" : "la oveja",
            "tr" : "koyun",
            "type" : "noun"
        },
        {
            "en" : "lamb",
            "es" : "el cordero",
            "tr" : "kuzu",
            "type" : "noun"
        },
        {
            "en" : "gate",
            "es" : "la puerta",
            "tr" : "kapı",
            "type" : "noun"
        },
        {
            "en" : "shepherd dog",
            "es" : "el perro pastor",
            "tr" : "çoban köpeği",
            "type" : "noun"
        },
        {
            "en" : "vineyard",
            "es" : "la viña",
            "tr" : "bağ",
            "type" : "noun"
        },
        {
            "en" : "vine",
            "es" : "la vid",
            "tr" : "asma",
            "type" : "noun"
        },
        {
            "en" : "to harvest",
            "es" : "cosechar",
            "tr" : "hasat yapmak",
            "type" : "verb"
        },
        {
            "en" : "haystack",
            "es" : "el almiar",
            "tr" : "samanlık",
            "type" : "noun"
        },
        {
            "en" : "wheat",
            "es" : "el trigo",
            "tr" : "buğday",
            "type" : "noun"
        },
        {
            "en" : "to sow",
            "es" : "sembrar",
            "tr" : "ekmek",
            "type" : "verb"
        },
        {
            "en" : "orchard",
            "es" : "el huerto",
            "tr" : "bahçe",
            "type" : "noun"
        },
        {
            "en" : "apple tree",
            "es" : "el manzano",
            "tr" : "elma ağacı",
            "type" : "noun"
        },
        {
            "en" : "to pick",
            "es" : "coger",
            "tr" : "toplamak",
            "type" : "verb"
        },
        {
            "en" : "tractor",
            "es" : "el tractor",
            "tr" : "traktör",
            "type" : "noun"
        },
        {
            "en" : "to plow",
            "es" : "arar",
            "tr" : "sürmek",
            "type" : "verb"
        },
        {
            "en" : "scarecrow",
            "es" : "el espantapájaros",
            "tr" : "korkuluk",
            "type" : "noun"
        }
    ],
    "At work" : [
        {
            "en" : "to go to work",
            "es" : "ir a trabajar",
            "tr" : "işe gitmek",
            "type" : "verb phrase"
        },
        {
            "en" : "to be late",
            "es" : "llegar tarde",
            "tr" : "geç kalmak",
            "type" : "verb phrase"
        },
        {
            "en" : "to be on time",
            "es" : "llegar a tiempo ",
            "tr" : "zamanında varmak",
            "type" : "verb phrase"
        },
        {
            "en" : "lunch time",
            "es" : "la hora de comer",
            "tr" : "yemek saati",
            "type" : "noun phrase"
        },
        {
            "en" : "overtime",
            "es" : "horas extraordinarias",
            "tr" : "fazla mesai",
            "type" : "noun phrase"
        },
        {
            "en" : "office",
            "es" : "la oficina",
            "tr" : "ofis",
            "type" : "noun"
        },
        {
            "en" : "boss",
            "es" : "el jefo / la jefa",
            "tr" : "patron",
            "type" : "noun"
        },
        {
            "en" : "secretary",
            "es" : "el secretario / la secretaria",
            "tr" : "sekreter",
            "type" : "noun"
        },
        {
            "en" : "to employ",
            "es" : "emplear",
            "tr" : "iş vermek",
            "type" : "verb"
        },
        {
            "en" : "employee",
            "es" : "el empleado / la empleada",
            "tr" : "çalışan",
            "type" : "noun"
        },
        {
            "en" : "hardworking",
            "es" : "trabajador(a)",
            "tr" : "çalışkan",
            "type" : "adjective"
        },
        {
            "en" : "lazy",
            "es" : "perezoso(a)",
            "tr" : "tembel",
            "type" : "adjective"
        },
        {
            "en" : "to retire",
            "es" : "jubilarse",
            "tr" : "emekli olmak",
            "type" : "verb"
        },
        {
            "en" : "to fire",
            "es" : "despedir",
            "tr" : "işten çıkarmak [kovmak]",
            "type" : "verb"
        },
        {
            "en" : "profession",
            "es" : "la profesión",
            "tr" : "meslek",
            "type" : "noun"
        },
        {
            "en" : "bricklayer",
            "es" : "el albañil",
            "tr" : "duvar ustası",
            "type" : "noun"
        },
        {
            "en" : "plumber",
            "es" : "el fontanero",
            "tr" : "tesisatçı",
            "type" : "noun"
        },
        {
            "en" : "architect",
            "es" : "el arquitecto / la arquitecta",
            "tr" : "mimar",
            "type" : "noun"
        },
        {
            "en" : "judge",
            "es" : "el juez / la jueza",
            "tr" : "hakim",
            "type" : "noun"
        },
        {
            "en" : "lawyer",
            "es" : "el abogado / la abogada",
            "tr" : "avukat",
            "type" : "noun"
        },
        {
            "en" : "journalist",
            "es" : "el periodista / la periodista",
            "tr" : "gazeteci",
            "type" : "noun"
        },
        {
            "en" : "policeman",
            "es" : "el guardia / la guardia",
            "tr" : "polis",
            "type" : "noun"
        },
        {
            "en" : "vicar",
            "es" : "el párroco",
            "tr" : "rahip",
            "type" : "noun"
        },
        {
            "en" : "phptpgrapher",
            "es" : "el fotógrafo / la fotógrafa",
            "tr" : "fotoğrafçı",
            "type" : "noun"
        },
        {
            "en" : "shopkeeper",
            "es" : "el tendero / la tendera",
            "tr" : "tezgahtar",
            "type" : "noun"
        },
        {
            "en" : "sales representative",
            "es" : "el representante comercial",
            "tr" : "satış temsiclisi",
            "type" : "noun phrase"
        },
        {
            "en" : "sailor",
            "es" : "el marinero / la marinera",
            "tr" : "denizci",
            "type" : "noun"
        },
        {
            "en" : "soldier",
            "es" : "el soldado / la soldada",
            "tr" : "asker",
            "type" : "noun"
        },
        {
            "en" : "designer",
            "es" : "el diseñador / la diseñadora",
            "tr" : "tasarımcı",
            "type" : "noun"
        },
        {
            "en" : "hairdresser",
            "es" : "el peluquero / la peluquera",
            "tr" : "kuaför",
            "type" : "noun"
        },
        {
            "en" : "model",
            "es" : "el modelo / la modelo",
            "tr" : "model",
            "type" : "noun"
        },
        {
            "en" : "garbage collector",
            "es" : "el basurero / la basurera",
            "tr" : "çöpçü",
            "type" : "noun"
        },
        {
            "en" : "taxi driver",
            "es" : "el taxista / la taxista",
            "tr" : "taksici",
            "type" : "noun"
        },
        {
            "en" : "truck driver",
            "es" : "el camionero / la camionera",
            "tr" : "kamyon şoförü",
            "type" : "noun"
        },
        {
            "en" : "fireman",
            "es" : "el bombero / la bombera",
            "tr" : "itfaiyeci",
            "type" : "noun"
        },
        {
            "en" : "pilpt",
            "es" : "el piloto / la pilota",
            "tr" : "pilot",
            "type" : "noun"
        },
        {
            "en" : "stewardess",
            "es" : "el azafato / la azafata",
            "tr" : "hostes",
            "type" : "noun"
        },
        {
            "en" : "steward",
            "es" : "el azafato",
            "tr" : "host",
            "type" : "noun"
        }
    ]
};

