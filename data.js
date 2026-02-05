const translations = {
    en: {
        title: "Venice Audio Guide",
        logout: "Logout",
        login_title: "Welcome to Venice",
        login_btn: "Enter",
        username_ph: "Username",
        password_ph: "Password",
        error_login: "Invalid credentials",
        attractions: {
            gondola: {
                title: "Gondola ride",
                desc: "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                audio: ["assets/gondola_en.mp3", "assets/gondola_en2.mp3"],
                pdf: "assets/gondola_en.pdf",
                image: "assets/gondola_img.jpg"
            },
            palazzo_ducale: {
                title: "Doge's Palace",
                desc: "This text introduces the Doge’s Palace as the political and institutional heart of the Venetian Republic, a place where power, governance, and representation converged for centuries. Through its layered history and evolving architecture, the palace reflects the development of Venetian political life and the Republic’s ambition to unite authority, diplomacy, and artistic magnificence into a single monumental symbol.",
                audio: "assets/ducale_en.mp3",
                pdf: "assets/ducale_en.pdf",
                image: "assets/palazzo_duc_img.jpg",
                chapters: [
                    {
                        title: "Exterior Architecture",
                        text: "The exterior of the Doge’s Palace is a masterpiece of Venetian Gothic architecture. The lower arcades convey strength and stability, while the upper levels appear light and elegant. Decorative marble, sculptural details, and pointed arches express authority and sophistication. Materials imported from across the Mediterranean reflect Venice’s trade networks. The façade projects both political power and cultural prestige.",
                        audio: "assets/ducale_en2.mp3"
                    },
                    {
                        title: "Inner Courtyard",
                        text: "The inner courtyard serves as a transitional space between the public exterior and the palace interiors. Its symmetrical layout and arcaded galleries emphasize order and harmony. Sculpted columns and decorated capitals display artistic refinement and cultural openness. The open central space allows light to enhance the architectural rhythm. Historically, it functioned as a ceremonial and political gathering area.",
                        audio: ["assets/ducale_en3.mp3", "assets/ducale_en4.mp3"]
                    },
                    {
                        title: "The Giants' Staircase",
                        text: "The Giants’ Staircase is a monumental ceremonial stairway symbolizing Venetian authority. Built in the late 15th century, it hosted key public rituals, including the Doge’s coronation. The statues of Mars and Neptune represent power on land and sea. Their imposing scale reminds viewers that the Doge served the Republic, not the reverse. The staircase blends architecture, ceremony, and civic ideology.",
                        audio: ["assets/ducale_en5.mp3", "assets/ducale_en6.mp3"]
                    },
                    {
                        title: "The Golden Staircase",
                        text: "The Golden Staircase provided a refined and private ascent for the Doge and magistrates. Decorated with gold leaf and elaborate stucco, it celebrates Venetian artistic excellence. Built in the mid-16th century, it marked the transition from public to private governance spaces. Its iconography evokes harmony, wisdom, and maritime power. Art and politics merge seamlessly along its ascent.",
                        audio: ["assets/ducale_en7.mp3", "assets/ducale_en8.mp3"]
                    },
                    {
                        title: "The Hall of the Four Doors",
                        text: "The Hall of the Four Doors functioned as a symbolic and ceremonial crossroads within the palace. Its four monumental doorways regulated movement between key political spaces. Rich stucco, marble, and allegorical sculptures convey civic virtues. The hall prepared officials for entry into the main council chambers. Even passage through the palace carried political meaning.",
                        audio: "assets/ducale_en9.mp3"
                    }, 
                    {
                        title: "The Anticollegio",
                        text: "The Anticollegio served as a preparatory area for Venice’s governing councils. Here, officials held briefings and consultations before formal sessions. The rooms are richly decorated with historical and allegorical artworks. Ceilings emphasize justice, prudence, and orderly governance. The space bridges ceremonial grandeur and practical decision-making.",
                        audio: ["assets/ducale_en10.mp3", "assets/ducale_en11.mp3"]
                    }, 
                    {
                        title: "The College Chamber",
                        text: "The College Chamber was the executive coordination center of the Republic. The Doge and senior officials met here to shape policy and strategy. Decorative frescoes reinforced moral responsibility and civic virtue. The layout supported efficient discussion and hierarchy. The chamber balanced ceremony with everyday governance.",
                        audio: ["assets/ducale_en12.mp3", "assets/ducale_en13.mp3"]
                    }, 
                    {
                        title: "The Senate Chamber",
                        text: "The Senate Chamber hosted debates on Venice’s political, military, and diplomatic affairs. Known as the Consiglio dei Pregadi, it guided the Republic’s international actions. Walls and ceilings are filled with symbolic historical imagery. Art reinforced Venice’s global role and moral responsibility. Politics, diplomacy, and aesthetics converge in this space.",
                        audio: ["assets/ducale_en14.mp3", "assets/ducale_en15.mp3"]
                    }, 
                    {
                        title: "Hall of the Council of Ten",
                        text: "The Council of Ten was Venice’s most powerful security institution. Created in 1310, it handled state security, espionage, and moral enforcement. The chamber’s intimate layout emphasized secrecy and control. Allegorical decorations reinforced divine and civic authority. Decisions here could determine individual and state destinies.",
                        audio: ["assets/ducale_en16.mp3", "assets/ducale_en17.mp3"]
                    }, 
                    {
                        title: "Hall of the Great Council",
                        text: "The Hall of the Great Council was the largest and most important political space in Venice. It hosted assemblies of over 2,000 patricians. The vast hall symbolizes collective governance and civic unity. Masterpieces by Tintoretto and others dominate the walls and ceiling. The room narrates Venice’s political identity through art.",
                        audio: ["assets/ducale_en18.mp3", "assets/ducale_en19.mp3"]
                    }, 
                    {
                        title: "Hall of the Scrutiny",
                        text: "The Hall of the Scrutiny was central to Venice’s complex electoral system. Originally intended for manuscripts, it became the space for voting and ballot counting. Its decoration followed the fire of 1577 and celebrates military victories. Portraits of Doges reinforce political continuity. Even electoral procedures were surrounded by symbolism and ritual.",
                        audio: "assets/ducale_en20.mp3"
                    }, 
                    {
                        title: "The Bridge of Sighs",
                        text: "The Bridge of Sighs connected the Doge’s Palace to the New Prisons. Built in the early 17th century, it served a strictly judicial function. Its enclosed structure ensured controlled prisoner transfers. Later romantic interpretations gave it symbolic and literary fame. Today, it embodies justice, legend, and Venetian imagination.",
                        audio: ["assets/ducale_en21.mp3", "assets/ducale_en22.mp3"]
                    }, 
                    {
                        title: "The new Prisons",
                        text: "The New Prisons reflect Venice’s advanced approach to incarceration. Built in the early 1600s, they emphasized order, control, and supervision. Cells were small but allowed light and ventilation. Prisoners entered via the Bridge of Sighs after judgment. The complex reveals Venice’s balance between authority and discipline.",
                        audio: ["assets/ducale_en23.mp3", "assets/ducale_en24.mp3"]
                    }
                ]
            },
            basilica: {
                title: "St. Mark Basilica",
                desc: "St. Mark’s Basilica is the symbol of Venice and the heart of the Serenissima, founded after the relics of St. Mark arrived in 828, serving as the Doge’s chapel and the stage for state ceremonies, rebuilt in the 11th century with Byzantine influence, and still today a golden monument expressing the power, faith, and identity of the Venetian Republic.",
                audio: ["assets/basilica_en.mp3", "assets/basilica_en2.mp3"],
                pdf: "assets/basilica_en.pdf",
                image: "assets/basilica_img.jpg",
                chapters: [
                    {
                        title: "Interior Architecture",
                        text: "The interior of St. Mark’s Basilica reveals a golden, mystical space defined by domes, mosaics, precious marbles, and a symbolic layout that blends religious devotion, political authority, and artistic magnificence.",
                        audio: ["assets/basilica_en3.mp3", "assets/basilica_en4.mp3"]
                    },
                    {
                        title: "Mosaic And Iconographic Details",
                        text: "The mosaics dominate the basilica with gold and light, narrating biblical stories, saints, and Venetian ideology through a continuous visual language that transforms art into theology and power.",
                        audio: ["assets/basilica_en5.mp3", "assets/basilica_en6.mp3"]
                    },
                    {
                        title: "Floor and Side Chapels",
                        text: "The Cosmatesque floor and side chapels reveal Venice’s living history through undulating marbles, geometric designs, relics, and devotional spaces that unite art, faith, and civic identity.",
                        audio: "assets/basilica_en7.mp3"
                    },
                    {
                        title: "The Pala D'Oro",
                        text: "The Pala d’Oro is a dazzling golden altarpiece enriched over centuries, combining Byzantine art, precious gems, and political symbolism into a visual declaration of Venice’s devotion and prestige.",
                        audio: ["assets/basilica_en8.mp3", "assets/basilica_en9.mp3"]
                    },
                    {
                        title: "The Crypt and the Treasure of St. Mark",
                        text: "Beneath the basilica lies the crypt and treasure, preserving ancient columns, relics, and sacred objects that testify to Venice’s spiritual roots, diplomatic power, and international connections.",
                        audio: ["assets/basilica_en10.mp3", "assets/basilica_en11.mp3"]
                    }, 
                    {
                        title: "The Loggia of the Horses",
                        text: "The Loggia of the Horses displays the famous bronze quadriga taken from Constantinople, symbolizing Venice’s triumphs, dominance, and ability to transform conquest into lasting prestige.",
                        audio: ["assets/basilica_en12.mp3", "assets/basilica_en13.mp3"]
                    }, 
                    {
                        title: "The Panoramic Terrace",
                        text: "The panoramic terrace offers a commanding view over Venice, the lagoon, and the piazza, revealing the basilica as a strategic, political, and symbolic center linking the city, the sea, and the Republic.",
                        audio: ["assets/basilica_en14.mp3", "assets/basilica_en15.mp3"]
                    }
                ]
            },
            rialto: {
                title: "Rialto Bridge",
                desc: "The Rialto Bridge is the oldest of the four bridges spanning the Grand Canal in Venice, Italy. Connecting the sestieri (districts) of San Marco and San Polo, it has been rebuilt several times since its first construction as a pontoon bridge in the 12th century, and is now a significant tourist attraction in the city. The present stone bridge, a single span designed by Antonio da Ponte, was completed in 1591. It is similar in style to the wooden bridge it succeeded.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/rialto_img.jpg"
            },
            campnile: {
                title: "Campanile di San Marco",
                desc: "The Bridge of Sighs is a bridge in Venice, Italy. The enclosed bridge is made of white limestone, has windows with stone bars, passes over the Rio di Palazzo, and connects the New Prison (Prigioni Nuove) to the interrogation rooms in the Doge's Palace. It was designed by Antonio Contino and was built in 1600. The view from the Bridge of Sighs was the last view of Venice that convicts saw before their imprisonment.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/campanile_en.pdf",
                image: "assets/campanile.jpg"
            },
            Murano: {
                title: "Murano",
                desc: "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                audio: ["assets/gondola_en.mp3", "assets/gondola_en2.mp3"],
                pdf: "assets/murano_en.pdf",
                image: "assets/murano.jpg"
            },
            Burano: {
                title: "Burano",
                desc: "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                audio: ["assets/gondola_en.mp3", "assets/gondola_en2.mp3"],
                pdf: "assets/burano_en.pdf",
                image: "assets/burano.jpg"
            }
        }
    },
    it: {
        title: "Audioguida Venezia",
        logout: "Esci",
        login_title: "Benvenuto a Venezia",
        login_btn: "Entra",
        username_ph: "Nome utente",
        password_ph: "Password",
        error_login: "Credenziali non valide",
        attractions: {
            gondola: {
                title: "Giro in Gondola",
                desc: "La gondola è la tradizionale barca a remi veneziana, perfettamente adatta alle condizioni della laguna di Venezia. Per secoli, la gondola è stata un mezzo di trasporto fondamentale e l'imbarcazione più comune a Venezia. Nei tempi moderni, queste barche iconiche rappresentano ancora il fascino e la storia della città. Un giro in gondola offre una prospettiva unica di Venezia, scivolando silenziosamente attraverso i canali, sotto antichi ponti e passando accanto a magnifici palazzi che sembrano galleggiare sull'acqua.",
                audio: ["assets/gondola_ita.mp3", "assets/gondola_ita2.mp3"],
                pdf: "assets/gondola_ita.pdf",
                image: "assets/gondola_img.jpg"
            },
            palazzo_ducale: {
                title: "Palazzo Ducale",
                desc: "Capolavoro dell'architettura gotica, il Palazzo Ducale era la residenza del Doge di Venezia, l'autorità suprema dell'antica Repubblica. Fondato nel 1340 ed esteso nei secoli successivi, è diventato museo nel 1923. Il palazzo è un simbolo del potere e della ricchezza della città durante il suo periodo d'oro. I visitatori rimangono colpiti dall'immensa Scala dei Giganti e dalle opulente sale adornate con opere di Tiziano, Veronese e Tintoretto.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/ducale_ita.pdf",
                image: "assets/palazzo_duc_img.jpg",
                chapters: [
                    {
                        title: "Il Cortile",
                        text: "Entrando nel palazzo, si viene accolti dal magnifico cortile, uno spazio che fonde stili rinascimentali e gotici. Le due vere da pozzo in bronzo risalgono alla metà del XVI secolo. In fondo si erge la Scala dei Giganti.",
                        audio: "assets/audio_placeholder.mp3"
                    },
                    {
                        title: "Le Sale Istituzionali",
                        text: "Queste stanze erano il cuore della vita politica veneziana. Qui il Senato e il Maggior Consiglio si riunivano per decidere le sorti della Repubblica. Le pareti sono coperte di dipinti che celebrano la gloria di Venezia.",
                        audio: "assets/audio_placeholder.mp3"
                    },
                    {
                        title: "Gli Appartamenti del Doge",
                        text: "La residenza privata del Doge era sorprendentemente modesta rispetto alle sale pubbliche, eppure piena di tesori artistici. Queste stanze offrono uno sguardo sulla vita personale del leader eletto.",
                        audio: "assets/audio_placeholder.mp3"
                    },
                    {
                        title: "L'Armeria",
                        text: "L'Armeria del Palazzo ospita una vasta collezione di armi e armature, testimonianza della potenza militare di Venezia. Dalle spade e alabarde alle prime armi da fuoco, questa collezione è impressionante.",
                        audio: "assets/audio_placeholder.mp3"
                    },
                    {
                        title: "Le Prigioni",
                        text: "Collegate al palazzo dal Ponte dei Sospiri, le Prigioni Nuove furono tra le prime in Europa ad essere progettate con principi più umani, anche se rimasero un luogo temibile. Casanova fuggì dai Piombi sopra il palazzo.",
                        audio: "assets/audio_placeholder.mp3"
                    }
                ]
            },
            basilica: {
                title: "Basilica di San Marco",
                desc: "La Basilica di San Marco è il simbolo di Venezia e il cuore della Serenissima, fondata dopo l’arrivo delle reliquie di San Marco nell’anno 828, utilizzata come cappella privata del Doge e come teatro delle cerimonie di Stato, ricostruita nell’XI secolo con forti influenze bizantine e ancora oggi monumento dorato che esprime il potere, la fede e l’identità della Repubblica di Venezia.",
                audio: "assets/basilica_it.mp3",
                pdf: "assets/basilica_it.pdf",
                image: "assets/basilica_img.jpg",
                chapters: [
                    {
                        title: "Architettura interna",
                        text: "L’interno della Basilica di San Marco rivela uno spazio dorato e suggestivo, definito da cupole, mosaici, marmi preziosi e da un impianto simbolico che fonde devozione religiosa, autorità politica e magnificenza artistica.",
                        audio: "assets/basilica_it2.mp3"
                    },
                    {
                        title: "Mosaici e dettagli iconografici",
                        text: "I mosaici dominano la basilica con oro e luce, narrando storie bibliche, santi e ideologia veneziana attraverso un linguaggio visivo continuo che trasforma l’arte in teologia e in espressione di potere.",
                        audio: "assets/basilica_it3.mp3"
                    },
                    {
                        title: "Pavimento e cappelle laterali",
                        text: "Il pavimento cosmatesco e le cappelle laterali raccontano la storia viva di Venezia attraverso marmi ondulati, disegni geometrici, reliquie e spazi devozionali che uniscono arte, fede e identità civica.",
                        audio: "assets/basilica_it4.mp3"
                    },
                    {
                        title: "La Pala d’Oro",
                        text: "La Pala d’Oro è uno straordinario altare dorato arricchito nei secoli, che unisce arte bizantina, gemme preziose e simbolismo politico in una dichiarazione visiva della devozione e del prestigio di Venezia.",
                        audio: "assets/basilica_it5.mp3"
                    },
                    {
                        title: "La cripta e il Tesoro di San Marco",
                        text: "Sotto la basilica si trovano la cripta e il tesoro, che conservano colonne antiche, reliquie e oggetti sacri testimoni delle radici spirituali di Venezia, del suo potere diplomatico e delle sue connessioni internazionali.",
                        audio: "assets/basilica_it6.mp3"
                    }, 
                    {
                        title: "La Loggia dei Cavalli",
                        text: "La Loggia dei Cavalli ospita la celebre quadriga bronzea proveniente da Costantinopoli, simbolo delle vittorie di Venezia, del suo dominio e della capacità di trasformare la conquista in prestigio duraturo.",
                        audio: "assets/basilica_it7.mp3"
                    }, 
                    {
                        title: "La terrazza panoramica",
                        text: "La terrazza panoramica offre una vista dominante su Venezia, sulla laguna e sulla piazza, rivelando la basilica come centro strategico, politico e simbolico che collega la città, il mare e la Repubblica.",
                        audio: "assets/basilica_it8.mp3"
                    }
                ]
            },
            rialto: {
                title: "Ponte di Rialto",
                desc: "Il Ponte di Rialto è il più antico dei quattro ponti che attraversano il Canal Grande a Venezia. Collegando i sestieri di San Marco e San Polo, è stato ricostruito più volte dalla sua prima costruzione come ponte di barche nel XII secolo. L'attuale ponte in pietra, a campata unica progettato da Antonio da Ponte, fu completato nel 1591. È simile nello stile al ponte di legno che ha sostituito.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/rialto_img.jpg"
            },
            campanile: {
                title: "Campanile di San Marco",
                desc: "Il Ponte dei Sospiri è un ponte di Venezia. Il ponte chiuso è fatto di pietra d'Istria bianca, ha finestre con sbarre di pietra, passa sopra il Rio di Palazzo e collega le Prigioni Nuove alle sale degli interrogatori nel Palazzo Ducale. Fu progettato da Antonio Contino e costruito nel 1600. La vista dal Ponte dei Sospiri era l'ultima vista di Venezia che i condannati vedevano prima della loro prigionia.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/campanile_ita.pdf",
                image: "assets/campanile.jpg"
            },
            Murano: {
                title: "Murano",
                desc: "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                audio: ["assets/gondola_en.mp3", "assets/gondola_en2.mp3"],
                pdf: "assets/murano_ita.pdf",
                image: "assets/murano.jpg"
            },
            Burano: {
                title: "Burano",
                desc: "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                audio: ["assets/gondola_en.mp3", "assets/gondola_en2.mp3"],
                pdf: "assets/burano_ita.pdf",
                image: "assets/burano.jpg"
            }
        }
    },
    de: {
        title: "Venedig Audioguide",
        logout: "Abmelden",
        login_title: "Willkommen in Venedig",
        login_btn: "Eintreten",
        username_ph: "Benutzername",
        password_ph: "Passwort",
        error_login: "Ungültige Anmeldedaten",
        attractions: {
            gondola: {
                title: "Gondelfahrt",
                desc: "Die Gondel ist das traditionelle venezianische Ruderboot, das gut für die Bedingungen der venezianischen Lagune geeignet ist. Jahrhundertelang war die Gondel ein wichtiges Transportmittel. In der heutigen Zeit repräsentieren die ikonischen Boote immer noch den Charme und die Geschichte der Stadt. Eine Gondelfahrt bietet eine einzigartige Perspektive auf Venedig, während man lautlos durch die Kanäle und unter alten Brücken gleitet.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/gondola_img.jpg"
            },
            palazzo_ducale: {
                title: "Dogenpalast",
                desc: "Der Dogenpalast, ein Meisterwerk der gotischen Architektur, war die Residenz des Dogen von Venedig. Er wurde 1340 gegründet und in den folgenden Jahrhunderten erweitert. Der Palast ist ein Symbol für die Macht und den Reichtum der Stadt während ihres goldenen Zeitalters. Besucher sind beeindruckt von der riesigen Scala dei Giganti und den opulenten Gemächern.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/palazzo_duc_img.jpg",
                chapters: [
                    { title: "Der Innenhof", text: "Beim Betreten des Palastes wird man vom prächtigen Innenhof empfangen, der Renaissance- und Gotikstile vereint.", audio: "assets/audio_placeholder.mp3" },
                    { title: "Die Institutionellen Säle", text: "Diese Räume waren das Herz des venezianischen politischen Lebens. Hier tagten der Senat und der Große Rat.", audio: "assets/audio_placeholder.mp3" },
                    { title: "Die Gemächer des Dogen", text: "Die private Residenz des Dogen war überraschend bescheiden im Vergleich zu den öffentlichen Sälen.", audio: "assets/audio_placeholder.mp3" },
                    { title: "Die Waffenkammer", text: "Die Waffenkammer beherbergt eine riesige Sammlung von Waffen und Rüstungen.", audio: "assets/audio_placeholder.mp3" },
                    { title: "Die Gefängnisse", text: "Verbunden durch die Seufzerbrücke, waren die Neuen Gefängnisse ein gefürchteter Ort.", audio: "assets/audio_placeholder.mp3" }
                ]
            },
            basilica: {
                title: "Markusdom",
                desc: "Der Markusdom ist die Kathedrale des römisch-katholischen Patriarchats von Venedig. Sie ist die berühmteste der Kirchen der Stadt und eines der bekanntesten Beispiele italo-byzantinischer Architektur. Sie liegt am östlichen Ende des Markusplatzes. Ursprünglich die Kapelle des Dogen, ist sie seit 1807 die Kathedrale der Stadt.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/basilica_img.jpg"
            },
            rialto: {
                title: "Rialtobrücke",
                desc: "Die Rialtobrücke ist die älteste der vier Brücken über den Canal Grande in Venedig. Sie verbindet die Stadtteile San Marco und San Polo und wurde seit ihrer ersten Errichtung als Pontonbrücke im 12. Jahrhundert mehrmals neu gebaut. Die heutige Steinbrücke wurde 1591 fertiggestellt.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/rialto_img.jpg"
            },
            campanile: {
                title: "Campanile di San Marco",
                desc: "Die Seufzerbrücke ist eine Brücke in Venedig. Die geschlossene Brücke besteht aus weißem Kalkstein, hat Fenster mit Steinriegeln und führt über den Rio di Palazzo. Sie wurde 1600 gebaut. Der Blick von der Seufzerbrücke war der letzte Blick auf Venedig, den Sträflinge vor ihrer Inhaftierung sahen.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/campanile.jpg"
            },
            Murano: {
                title: "Murano",
                desc: "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                audio: ["assets/gondola_en.mp3", "assets/gondola_en2.mp3"],
                pdf: "assets/gondola_en.pdf",
                image: "assets/murano.jpg"
            },
            Burano: {
                title: "Burano",
                desc: "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                audio: ["assets/gondola_en.mp3", "assets/gondola_en2.mp3"],
                pdf: "assets/gondola_en.pdf",
                image: "assets/burano.jpg"
            }
        }
    },
    fr: {
        title: "Audioguide Venise",
        logout: "Déconnexion",
        login_title: "Bienvenue à Venise",
        login_btn: "Entrer",
        username_ph: "Nom d'utilisateur",
        password_ph: "Mot de passe",
        error_login: "Identifiants invalides",
        attractions: {
            gondola: {
                title: "Tour en gondole",
                desc: "La gondole est le bateau à rames vénitien traditionnel, bien adapté aux conditions de la lagune. Pendant des siècles, la gondole a été un moyen de transport majeur. De nos jours, ces bateaux emblématiques représentent toujours le charme de la ville. Une promenade en gondole offre une perspective unique de Venise, glissant silencieusement à travers les canaux.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/gondola_img.jpg"
            },
            palazzo_ducale: {
                title: "Palais des Doges",
                desc: "Chef-d'œuvre de l'architecture gothique, le Palais des Doges était la résidence du Doge de Venise. Fondé en 1340, il est devenu un musée en 1923. Le palais est un symbole de la puissance et de la richesse de la ville. Les visiteurs sont impressionnés par l'immense Escalier des Géants et les salles opulentes.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/palazzo_duc_img.jpg",
                chapters: [
                    { title: "La Cour", text: "En entrant dans le palais, on est accueilli par la magnifique cour qui mêle les styles Renaissance et Gothique.", audio: "assets/audio_placeholder.mp3" },
                    { title: "Les Salles Institutionnelles", text: "Ces salles étaient le cœur de la vie politique vénitienne. C'est ici que se réunissaient le Sénat et le Grand Conseil.", audio: "assets/audio_placeholder.mp3" },
                    { title: "Les Appartements du Doge", text: "La résidence privée du Doge était étonnamment modeste comparée aux salles publiques.", audio: "assets/audio_placeholder.mp3" },
                    { title: "L'Armurerie", text: "L'Armurerie du Palais abrite une vaste collection d'armes et d'armures.", audio: "assets/audio_placeholder.mp3" },
                    { title: "Les Prisons", text: "Reliées par le Pont des Soupirs, les Nouvelles Prisons étaient un lieu redouté.", audio: "assets/audio_placeholder.mp3" }
                ]
            },
            basilica: {
                title: "Basilique Saint-Marc",
                desc: "La basilique cathédrale patriarcale de Saint-Marc est l'église cathédrale du patriarcat catholique romain de Venise. C'est la plus célèbre des églises de la ville et l'un des exemples les plus connus de l'architecture italo-byzantine. Située à l'extrémité est de la place Saint-Marc, elle est adjacente au palais des Doges.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/basilica_img.jpg"
            },
            rialto: {
                title: "Pont du Rialto",
                desc: "Le pont du Rialto est le plus ancien des quatre ponts enjambant le Grand Canal à Venise. Reliant les quartiers de San Marco et San Polo, il a été reconstruit plusieurs fois. Le pont de pierre actuel, à arche unique, a été achevé en 1591. Il est semblable dans son style au pont en bois qu'il a remplacé.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/rialto_img.jpg"
            },
            campanile: {
                title: "Campanile di San Marco",
                desc: "Le Pont des Soupirs est un pont de Venise. Le pont fermé est fait de calcaire blanc, a des fenêtres avec des barreaux de pierre et passe au-dessus du Rio di Palazzo. Il a été construit en 1600. La vue depuis le Pont des Soupirs était la dernière vue de Venise que les condamnés voyaient avant leur emprisonnement.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/campanile.jpg"
            },
            Murano: {
                title: "Murano",
                desc: "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                audio: ["assets/gondola_en.mp3", "assets/gondola_en2.mp3"],
                pdf: "assets/gondola_en.pdf",
                image: "assets/murano.jpg"
            },
            Burano: {
                title: "Burano",
                desc: "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                audio: ["assets/gondola_en.mp3", "assets/gondola_en2.mp3"],
                pdf: "assets/gondola_en.pdf",
                image: "assets/burano.jpg"
            }
        }
    },
    es: {
        title: "Audioguía Venecia",
        logout: "Cerrar sesión",
        login_title: "Bienvenido a Venecia",
        login_btn: "Entrar",
        username_ph: "Nombre de usuario",
        password_ph: "Contraseña",
        error_login: "Credenciales inválidas",
        attractions: {
            gondola: {
                title: "Paseo en góndola",
                desc: "La góndola es el tradicional bote de remos veneciano, bien adaptado a las condiciones de la laguna. Durante siglos, fue un medio de transporte importante. En la actualidad, estos barcos icónicos todavía representan el encanto de la ciudad. Un paseo en góndola ofrece una perspectiva única de Venecia, deslizándose silenciosamente por los canales.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/gondola_img.jpg"
            },
            palazzo_ducale: {
                title: "Palacio Ducal",
                desc: "Una obra maestra de la arquitectura gótica, el Palacio Ducal fue la residencia del Dux de Venecia. Fundado en 1340, se convirtió en museo en 1923. El palacio es un símbolo del poder y la riqueza de la ciudad. Los visitantes quedan asombrados por la inmensa Escalera de los Gigantes y las opulentas cámaras.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/palazzo_duc_img.jpg",
                chapters: [
                    { title: "El Patio", text: "Al entrar en el palacio, uno es recibido por el magnífico patio que mezcla estilos renacentistas y góticos.", audio: "assets/audio_placeholder.mp3" },
                    { title: "Las Salas Institucionales", text: "Estas salas eran el corazón de la vida política veneciana. Aquí se reunían el Senado y el Gran Consejo.", audio: "assets/audio_placeholder.mp3" },
                    { title: "Los Apartamentos del Dux", text: "La residencia privada del Dux era sorprendentemente modesta en comparación con las salas públicas.", audio: "assets/audio_placeholder.mp3" },
                    { title: "La Armería", text: "La Armería del Palacio alberga una vasta colección de armas y armaduras.", audio: "assets/audio_placeholder.mp3" },
                    { title: "Las Prisiones", text: "Conectadas por el Puente de los Suspiros, las Nuevas Prisiones eran un lugar temido.", audio: "assets/audio_placeholder.mp3" }
                ]
            },
            basilica: {
                title: "Basílica de San Marcos",
                desc: "La Basílica Catedral Patriarcal de San Marcos es la iglesia catedral del Patriarcado Católico Romano de Venecia. Es la más famosa de las iglesias de la ciudad y uno de los ejemplos más conocidos de la arquitectura italo-bizantina. Situada en el extremo oriental de la Plaza de San Marcos, es adyacente al Palacio Ducal.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/basilica_img.jpg"
            },
            rialto: {
                title: "Puente de Rialto",
                desc: "El Puente de Rialto es el más antiguo de los cuatro puentes que cruzan el Gran Canal de Venecia. Conectando los distritos de San Marco y San Polo, ha sido reconstruido varias veces. El actual puente de piedra, de un solo arco, se completó en 1591. Es similar en estilo al puente de madera que reemplazó.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/rialto_img.jpg"
            },
            campanile: {
                title: "Campanile di San Marco",
                desc: "El Puente de los Suspiros es un puente en Venecia. El puente cerrado está hecho de piedra caliza blanca, tiene ventanas con rejas de piedra y pasa sobre el Rio di Palazzo. Fue construido en 1600. La vista desde el Puente de los Suspiros era la última vista de Venecia que los convictos veían antes de su encarcelamiento.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/campanile.jpg"
            },
            Murano: {
                title: "Murano",
                desc: "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                audio: ["assets/gondola_en.mp3", "assets/gondola_en2.mp3"],
                pdf: "assets/gondola_en.pdf",
                image: "assets/murano.jpg"
            },
            Burano: {
                title: "Burano",
                desc: "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                audio: ["assets/gondola_en.mp3", "assets/gondola_en2.mp3"],
                pdf: "assets/gondola_en.pdf",
                image: "assets/burano.jpg"
            }
        }
    },
    pt: {
        title: "Guia de Áudio de Veneza",
        logout: "Sair",
        login_title: "Bem-vindo a Veneza",
        login_btn: "Entrar",
        username_ph: "Nome de usuário",
        password_ph: "Senha",
        error_login: "Credenciais inválidas",
        attractions: {
            gondola: {
                title: "Passeio de Gôndola",
                desc: "A gôndola é o tradicional barco a remos veneziano, bem adaptado às condições da lagoa veneziana. Durante séculos, a gôndola foi um importante meio de transporte e a embarcação mais comum em Veneza. Nos tempos modernos, esses barcos icônicos ainda representam o charme e a história da cidade. Um passeio de gôndola oferece uma perspectiva única de Veneza, deslizando silenciosamente pelos canais, sob pontes antigas e passando por magníficos palácios que parecem flutuar na água. Cada gôndola é única, feita à mão usando oito tipos diferentes de madeira.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/gondola_img.jpg"
            },
            palazzo_ducale: {
                title: "Palácio Ducal",
                desc: "Uma obra-prima da arquitetura gótica, o Palácio Ducal foi a residência do Doge de Veneza, a autoridade suprema da antiga República de Veneza. Foi fundado em 1340 e ampliado e modificado nos séculos seguintes. Tornou-se um museu em 1923 e é um dos 11 museus geridos pela Fondazione Musei Civici di Venezia. O palácio é um símbolo do poder e da riqueza da cidade durante a sua era dourada. Os visitantes ficam impressionados com a imensa Scala dei Giganti e as opulentas câmaras adornadas com obras de Ticiano, Veronese e Tintoretto.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/palazzo_duc_img.jpg",
                chapters: [
                    {
                        title: "O Pátio",
                        text: "Ao entrar no palácio, somos recebidos pelo magnífico pátio, um espaço que mistura os estilos Renascentista e Gótico. Os dois poços de bronze datam de meados do século XVI.",
                        audio: "assets/audio_placeholder.mp3"
                    },
                    {
                        title: "As Câmaras Institucionais",
                        text: "Estas salas eram o coração da vida política veneziana. Aqui, o Senado e o Grande Conselho reuniam-se para decidir o destino da República.",
                        audio: "assets/audio_placeholder.mp3"
                    },
                    {
                        title: "Os Apartamentos do Doge",
                        text: "A residência privada do Doge era surpreendentemente modesta em comparação com os salões públicos, mas repleta de tesouros artísticos.",
                        audio: "assets/audio_placeholder.mp3"
                    },
                    {
                        title: "A Arsenal",
                        text: "O Arsenal do Palácio abriga uma vasta coleção de armas e armaduras, um testemunho do poder militar de Veneza.",
                        audio: "assets/audio_placeholder.mp3"
                    },
                    {
                        title: "As Prisões",
                        text: "Conectadas ao palácio pela Ponte dos Suspiros, as Novas Prisões foram temidas por séculos. Casanova escapou famosamente dos Chumbos (Piombi) acima do palácio.",
                        audio: "assets/audio_placeholder.mp3"
                    }
                ]
            },
            basilica: {
                title: "Basílica de São Marcos",
                desc: "A Basílica Catedral Patriarcal de São Marcos é a igreja catedral do Patriarcado Católico Romano de Veneza; é a mais famosa das igrejas da cidade e um dos exemplos mais conhecidos da arquitetura ítalo-bizantina. Situa-se na extremidade leste da Praça de São Marcos, adjacente e conectada ao Palácio Ducal. Originalmente a capela do Doge, tem sido a catedral da cidade desde 1807. É conhecida pelo seu design opulento, mosaicos dourados e o seu status como símbolo da riqueza e poder veneziano.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/basilica_img.jpg"
            },
            rialto: {
                title: "Ponte de Rialto",
                desc: "A Ponte de Rialto é a mais antiga das quatro pontes que atravessam o Grande Canal em Veneza, Itália. Conectando os distritos de San Marco e San Polo, foi reconstruída várias vezes desde a sua primeira construção como uma ponte flutuante no século XII, e é agora uma atração turística significativa na cidade. A atual ponte de pedra, um único vão projetado por Antonio da Ponte, foi concluída em 1591. É semelhante em estilo à ponte de madeira que substituiu.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/rialto_img.jpg"
            },
            campanile: {
                title: "Campanile di San Marco",
                desc: "A Ponte dos Suspiros é uma ponte em Veneza, Itália. A ponte fechada é feita de pedra calcária branca, tem janelas com barras de pedra, passa sobre o Rio di Palazzo e conecta a Nova Prisão às salas de interrogatório no Palácio Ducal. Foi projetada por Antonio Contino e construída em 1600. A vista da Ponte dos Suspiros era a última vista de Veneza que os condenados viam antes da sua prisão.",
                audio: "assets/audio_placeholder.mp3",
                pdf: "assets/doc_placeholder.pdf",
                image: "assets/campanile.jpg"
            },
            Murano: {
                title: "Murano",
                desc: "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                audio: ["assets/gondola_en.mp3", "assets/gondola_en2.mp3"],
                pdf: "assets/gondola_en.pdf",
                image: "assets/murano.jpg"
            },
            Burano: {
                title: "Burano",
                desc: "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                audio: ["assets/gondola_en.mp3", "assets/gondola_en2.mp3"],
                pdf: "assets/gondola_en.pdf",
                image: "assets/burano.jpg"
            }
        }
    }
};
