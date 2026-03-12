const translations = {
    "en": {
        "title": "Venice Audio Guide",
        "logout": "Logout",
        "login_title": "Welcome to Venice",
        "login_btn": "Enter",
        "username_ph": "Username",
        "password_ph": "Password",
        "error_login": "Invalid credentials",
        "attractions": {
            "gondola": {
                "title": "Gondola ride",
                "coords": { "lat": 45.4336, "lng": 12.3395 },
                "desc": "The following text invites the reader to rediscover the gondola from its most authentic perspective: not as a tourist symbol, but as an extraordinary functional object shaped by necessity and perfected over centuries. Through its history, technical design, craftsmanship, and symbolism, the gondola emerges as a unique balance of engineering, culture, and everyday Venetian life, capable of telling the story of the city more clearly than any view from above. \nDownload the full PDF below.",
                "audio": [
                    "assets/gondola_en.mp3",
                    "assets/gondola_en2.mp3"
                ],
                "pdf": "assets/gondola_en.pdf",
                "image_light": "assets/gondola_img.jpg",
                "image_dark": "assets/gondola_dark.jpg"
            },
            "palazzo_ducale": {
                "title": "Doge's Palace",
                "coords": { "lat": 45.4337, "lng": 12.3404 },
                "desc": "This text introduces the Doge’s Palace as the political and institutional heart of the Venetian Republic, a place where power, governance, and representation converged for centuries. Through its layered history and evolving architecture, the palace reflects the development of Venetian political life and the Republic’s ambition to unite authority, diplomacy, and artistic magnificence into a single monumental symbol.",
                "audio": "assets/ducale_en.mp3",
                "pdf": "assets/ducale_en.pdf",
                "image_light": "assets/palazzo_duc_img.jpg",
                "image_dark": "assets/ducale_dark.jpg",
                "chapters": [
                    {
                        "title": "Exterior Architecture",
                        "text": "The exterior of the Doge’s Palace is a masterpiece of Venetian Gothic architecture. The lower arcades convey strength and stability, while the upper levels appear light and elegant. Decorative marble, sculptural details, and pointed arches express authority and sophistication. Materials imported from across the Mediterranean reflect Venice’s trade networks. The façade projects both political power and cultural prestige.",
                        "audio": "assets/ducale_en2.mp3"
                    },
                    {
                        "title": "Inner Courtyard",
                        "text": "The inner courtyard serves as a transitional space between the public exterior and the palace interiors. Its symmetrical layout and arcaded galleries emphasize order and harmony. Sculpted columns and decorated capitals display artistic refinement and cultural openness. The open central space allows light to enhance the architectural rhythm. Historically, it functioned as a ceremonial and political gathering area.",
                        "audio": [
                            "assets/ducale_en3.mp3",
                            "assets/ducale_en4.mp3"
                        ]
                    },
                    {
                        "title": "The Giants' Staircase",
                        "text": "The Giants’ Staircase is a monumental ceremonial stairway symbolizing Venetian authority. Built in the late 15th century, it hosted key public rituals, including the Doge’s coronation. The statues of Mars and Neptune represent power on land and sea. Their imposing scale reminds viewers that the Doge served the Republic, not the reverse. The staircase blends architecture, ceremony, and civic ideology.",
                        "audio": [
                            "assets/ducale_en5.mp3",
                            "assets/ducale_en6.mp3"
                        ]
                    },
                    {
                        "title": "The Golden Staircase",
                        "text": "The Golden Staircase provided a refined and private ascent for the Doge and magistrates. Decorated with gold leaf and elaborate stucco, it celebrates Venetian artistic excellence. Built in the mid-16th century, it marked the transition from public to private governance spaces. Its iconography evokes harmony, wisdom, and maritime power. Art and politics merge seamlessly along its ascent.",
                        "audio": [
                            "assets/ducale_en7.mp3",
                            "assets/ducale_en8.mp3"
                        ]
                    },
                    {
                        "title": "The Hall of the Four Doors",
                        "text": "The Hall of the Four Doors functioned as a symbolic and ceremonial crossroads within the palace. Its four monumental doorways regulated movement between key political spaces. Rich stucco, marble, and allegorical sculptures convey civic virtues. The hall prepared officials for entry into the main council chambers. Even passage through the palace carried political meaning.",
                        "audio": "assets/ducale_en9.mp3"
                    },
                    {
                        "title": "The Anticollegio",
                        "text": "The Anticollegio served as a preparatory area for Venice’s governing councils. Here, officials held briefings and consultations before formal sessions. The rooms are richly decorated with historical and allegorical artworks. Ceilings emphasize justice, prudence, and orderly governance. The space bridges ceremonial grandeur and practical decision-making.",
                        "audio": [
                            "assets/ducale_en10.mp3",
                            "assets/ducale_en11.mp3"
                        ]
                    },
                    {
                        "title": "The College Chamber",
                        "text": "The College Chamber was the executive coordination center of the Republic. The Doge and senior officials met here to shape policy and strategy. Decorative frescoes reinforced moral responsibility and civic virtue. The layout supported efficient discussion and hierarchy. The chamber balanced ceremony with everyday governance.",
                        "audio": [
                            "assets/ducale_en12.mp3",
                            "assets/ducale_en13.mp3"
                        ]
                    },
                    {
                        "title": "The Senate Chamber",
                        "text": "The Senate Chamber hosted debates on Venice’s political, military, and diplomatic affairs. Known as the Consiglio dei Pregadi, it guided the Republic’s international actions. Walls and ceilings are filled with symbolic historical imagery. Art reinforced Venice’s global role and moral responsibility. Politics, diplomacy, and aesthetics converge in this space.",
                        "audio": [
                            "assets/ducale_en14.mp3",
                            "assets/ducale_en15.mp3"
                        ]
                    },
                    {
                        "title": "Hall of the Council of Ten",
                        "text": "The Council of Ten was Venice’s most powerful security institution. Created in 1310, it handled state security, espionage, and moral enforcement. The chamber’s intimate layout emphasized secrecy and control. Allegorical decorations reinforced divine and civic authority. Decisions here could determine individual and state destinies.",
                        "audio": [
                            "assets/ducale_en16.mp3",
                            "assets/ducale_en17.mp3"
                        ]
                    },
                    {
                        "title": "Hall of the Great Council",
                        "text": "The Hall of the Great Council was the largest and most important political space in Venice. It hosted assemblies of over 2,000 patricians. The vast hall symbolizes collective governance and civic unity. Masterpieces by Tintoretto and others dominate the walls and ceiling. The room narrates Venice’s political identity through art.",
                        "audio": [
                            "assets/ducale_en18.mp3",
                            "assets/ducale_en19.mp3"
                        ]
                    },
                    {
                        "title": "Hall of the Scrutiny",
                        "text": "The Hall of the Scrutiny was central to Venice’s complex electoral system. Originally intended for manuscripts, it became the space for voting and ballot counting. Its decoration followed the fire of 1577 and celebrates military victories. Portraits of Doges reinforce political continuity. Even electoral procedures were surrounded by symbolism and ritual.",
                        "audio": "assets/ducale_en20.mp3"
                    },
                    {
                        "title": "The Bridge of Sighs",
                        "text": "The Bridge of Sighs connected the Doge’s Palace to the New Prisons. Built in the early 17th century, it served a strictly judicial function. Its enclosed structure ensured controlled prisoner transfers. Later romantic interpretations gave it symbolic and literary fame. Today, it embodies justice, legend, and Venetian imagination.",
                        "audio": [
                            "assets/ducale_en21.mp3",
                            "assets/ducale_en22.mp3"
                        ]
                    },
                    {
                        "title": "The new Prisons",
                        "text": "The New Prisons reflect Venice’s advanced approach to incarceration. Built in the early 1600s, they emphasized order, control, and supervision. Cells were small but allowed light and ventilation. Prisoners entered via the Bridge of Sighs after judgment. The complex reveals Venice’s balance between authority and discipline.",
                        "audio": [
                            "assets/ducale_en23.mp3",
                            "assets/ducale_en24.mp3"
                        ]
                    }
                ]
            },
            "basilica": {
                "title": "St. Mark Basilica",
                "desc": "St. Mark’s Basilica is the symbol of Venice and the heart of the Serenissima, founded after the relics of St. Mark arrived in 828, serving as the Doge’s chapel and the stage for state ceremonies, rebuilt in the 11th century with Byzantine influence, and still today a golden monument expressing the power, faith, and identity of the Venetian Republic.",
                "audio": [
                    "assets/basilica_en.mp3",
                    "assets/basilica_en2.mp3"
                ],
                "pdf": "assets/basilica_en.pdf",
                "image_light": "assets/basilica_img.jpg",
                "image_dark": "assets/basilica_dark.jpg",
                "chapters": [
                    {
                        "title": "Interior Architecture",
                        "text": "The interior of St. Mark’s Basilica reveals a golden, mystical space defined by domes, mosaics, precious marbles, and a symbolic layout that blends religious devotion, political authority, and artistic magnificence.",
                        "audio": [
                            "assets/basilica_en3.mp3",
                            "assets/basilica_en4.mp3"
                        ]
                    },
                    {
                        "title": "Mosaic And Iconographic Details",
                        "text": "The mosaics dominate the basilica with gold and light, narrating biblical stories, saints, and Venetian ideology through a continuous visual language that transforms art into theology and power.",
                        "audio": [
                            "assets/basilica_en5.mp3",
                            "assets/basilica_en6.mp3"
                        ]
                    },
                    {
                        "title": "Floor and Side Chapels",
                        "text": "The Cosmatesque floor and side chapels reveal Venice’s living history through undulating marbles, geometric designs, relics, and devotional spaces that unite art, faith, and civic identity.",
                        "audio": "assets/basilica_en7.mp3"
                    },
                    {
                        "title": "The Pala D'Oro",
                        "text": "The Pala d’Oro is a dazzling golden altarpiece enriched over centuries, combining Byzantine art, precious gems, and political symbolism into a visual declaration of Venice’s devotion and prestige.",
                        "audio": [
                            "assets/basilica_en8.mp3",
                            "assets/basilica_en9.mp3"
                        ]
                    },
                    {
                        "title": "The Crypt and the Treasure of St. Mark",
                        "text": "Beneath the basilica lies the crypt and treasure, preserving ancient columns, relics, and sacred objects that testify to Venice’s spiritual roots, diplomatic power, and international connections.",
                        "audio": [
                            "assets/basilica_en10.mp3",
                            "assets/basilica_en11.mp3"
                        ]
                    },
                    {
                        "title": "The Loggia of the Horses",
                        "text": "The Loggia of the Horses displays the famous bronze quadriga taken from Constantinople, symbolizing Venice’s triumphs, dominance, and ability to transform conquest into lasting prestige.",
                        "audio": [
                            "assets/basilica_en12.mp3",
                            "assets/basilica_en13.mp3"
                        ]
                    },
                    {
                        "title": "The Panoramic Terrace",
                        "text": "The panoramic terrace offers a commanding view over Venice, the lagoon, and the piazza, revealing the basilica as a strategic, political, and symbolic center linking the city, the sea, and the Republic.",
                        "audio": [
                            "assets/basilica_en14.mp3",
                            "assets/basilica_en15.mp3"
                        ]
                    }
                ]
            },
            "rialto": {
                "title": "Museo Correr",
                "desc": "The Museo Correr is a civic museum in Venice, Italy, located in St. Mark's Square. It offers a fascinating journey into the art, history, and culture of Venice, starting from the Napoleonic Wing where the museum entrance is located, and continuing through the Procuratie Nuove. The rich collections document various aspects of Venetian life, housing masterpieces ranging from Venetian paintings to classical antiquities.",
                "audio": [
                    "assets/correr_en1.mp3",
                    "assets/correr_en2.mp3", 
                    "assets/correr_en3.mp3", 
                    "assets/correr_en4.mp3", 
                    "assets/correr_en5.mp3", 
                    "assets/correr_en6.mp3"
                ],
                "pdf": "assets/correr_en.pdf",
                "image_light": "assets/correr_light.jpg",
                "image_dark": "assets/correr.jpg"
            },
            "Murano": {
                "title": "Murano",
                "desc": "During the Middle Ages, Venetian glassmakers possessed the exclusive and highly profitable skill of refining and coloring glass. To protect this state secret from foreign merchants and to officially prevent fires in Venice, the Doge mandated the relocation of all glass furnaces to the island of Murano by the end of the 13th century, heavily restricting the movement of the master glassmakers. The traditional glassmaking process involves melting a mixture of silica sand, soda, and limestone at temperatures exceeding 1,300 degrees Celsius. After the molten glass is refined to remove air bubbles, metal oxides are added for color, and a master glassmaker rapidly shapes the piece using a blowpipe before it undergoes a slow annealing process to prevent cracking.",
                "audio": [
                    "assets/murano_en.mp3",
                    "assets/murano_en2.mp3"
                ],
                "pdf": "assets/murano_en.pdf",
                "image_light": "assets/murano.jpg",
                "image_dark": "assets/murano_dark.jpeg"
            },
            "Burano": {
                "title": "Burano",
                "desc": "Burano is a picturesque island in the Venetian lagoon, famous for its brightly colored houses, which historically helped fishermen navigate home safely through the fog. The island's rich culture is deeply rooted in fishing and local culinary traditions, notably featuring fresh seafood and energy-providing biscuits like the bussolà and esse. Furthermore, Burano is globally recognized for its delicate, hand-crafted lace, a meticulously preserved female tradition passed down through generations. Visiting Burano offers a beautiful, sensory experience of its enduring heritage and vibrant local lifestyle.",
                "audio": [
                    "assets/burano_en.mp3",
                    "assets/burano_en2.mp3"
                ],
                "pdf": "assets/burano_en.pdf",
                "image_light": "assets/burano.jpg",
                "image_dark": "assets/burano_dark.jpg"
            },
            "campanile": {
                "title": "Campanile di San Marco",
                "desc": "The St. Mark's Campanile serves as a vital vertical landmark in Venice's horizontal landscape, originally functioning as a medieval watchtower and lighthouse. Beyond its religious role, it historically regulated civic life by signaling major public events through its bells. Following its sudden collapse in 1902, the tower was faithfully reconstructed to preserve the city's identity. Today, it remains a symbol of Venetian resilience and offers a unique perspective on the city’s water-based geography.",
                "audio": [
                    "assets/campanile_en.mp3",
                    "assets/campanile_en2.mp3"
                ],
                "pdf": "assets/campanile_en.pdf",
                "image_light": "assets/campanile.jpg",
                "image_dark": "assets/campanile_dark.jpeg"
            }
        }
    },
    "it": {
        "title": "Audioguida Venezia",
        "logout": "Esci",
        "login_title": "Benvenuto a Venezia",
        "login_btn": "Entra",
        "username_ph": "Nome utente",
        "password_ph": "Password",
        "error_login": "Credenziali non valide",
        "attractions": {
            "gondola": {
                "title": "Giro in Gondola",
                "desc": "Il seguente testo invita il lettore a riscoprire la gondola dalla sua prospettiva più autentica: non come simbolo turistico, ma come straordinario oggetto funzionale plasmato dalla necessità e perfezionato nel corso dei secoli. Attraverso la sua storia, il design tecnico, l'artigianato e il simbolismo, la gondola emerge come un equilibrio unico di ingegneria, cultura e vita quotidiana veneziana, capace di raccontare la storia della città più chiaramente di qualsiasi vista dall'alto. \\nScarica il PDF completo di seguito.",
                "audio": [
                    "assets/gondola_ita.mp3",
                    "assets/gondola_ita2.mp3"
                ],
                "pdf": "assets/gondola_ita.pdf",
                "image_light": "assets/gondola_img.jpg",
                "image_dark": "assets/gondola_dark.jpg"
            },
            "palazzo_ducale": {
                "title": "Palazzo Ducale",
                "desc": "Questo testo introduce il Palazzo Ducale come il cuore politico e istituzionale della Repubblica di Venezia, un luogo dove potere, governance e rappresentanza convergevano per secoli. Attraverso la sua storia stratificata e l'architettura in evoluzione, il palazzo riflette lo sviluppo della vita politica veneziana e l'ambizione della Repubblica di unire autorità, diplomazia e magnificenza artistica in un unico simbolo monumentale.",
                "audio": "assets/ducale_ita.mp3",
                "pdf": "assets/ducale_ita.pdf",
                "image_light": "assets/palazzo_duc_img.jpg",
                "image_dark": "assets/ducale_dark.jpg",
                "chapters": [
                    {
                        "title": "Architettura Esterna",
                        "text": "Architettura Esterna del Palazzo Ducale.",
                        "audio": "assets/ducale_ita2.mp3"
                    },
                    {
                        "title": "Il Cortile",
                        "text": "Entrando nel palazzo, si viene accolti dal magnifico cortile, uno spazio che fonde stili rinascimentali e gotici. Le due vere da pozzo in bronzo risalgono alla metà del XVI secolo. In fondo si erge la Scala dei Giganti.",
                        "audio": "assets/ducale_ita3.mp3"
                    },
                    {
                        "title": "Salone del Maggior Consiglio",
                        "text": "Cuore monumentale della Repubblica di Venezia.",
                        "audio": "assets/ducale_ita4.mp3"
                    },
                    {
                        "title": "Sala dello Scrutinio",
                        "text": "Il cuore dell’elezione degli organi della Repubblica.",
                        "audio": "assets/ducale_ita5.mp3"
                    },
                    {
                        "title": "Il Ponte dei Sospiri",
                        "text": "Ponte dei Sospiri.",
                        "audio": [
                            "assets/ducale_ita6.mp3",
                            "assets/ducale_ita7.mp3"
                        ]
                    },
                    {
                        "title": "Le Prigioni",
                        "text": "Collegate al palazzo dal Ponte dei Sospiri, le Prigioni Nuove furono tra le prime in Europa ad essere progettate con principi più umani, anche se rimasero un luogo temibile. Casanova fuggì dai Piombi sopra il palazzo.",
                        "audio": [
                            "assets/ducale_ita8.mp3",
                            "assets/ducale_ita9.mp3"
                        ]
                    }
                ]
            },
            "basilica": {
                "title": "Basilica di San Marco",
                "desc": "La Basilica di San Marco è il simbolo di Venezia e il cuore della Serenissima, fondata dopo l'arrivo delle reliquie di San Marco nell'828, servendo come cappella del Doge e palcoscenico per le cerimonie di stato, ricostruita nell'XI secolo con influenze bizantine, e ancora oggi un monumento dorato che esprime il potere, la fede e l'identità della Repubblica di Venezia.",
                "audio": "assets/basilica_it.mp3",
                "pdf": "assets/basilica_it.pdf",
                "image_light": "assets/basilica_img.jpg",
                "image_dark": "assets/basilica_dark.jpg",
                "chapters": [
                    {
                        "title": "Architettura interna",
                        "text": "L’interno della Basilica di San Marco rivela uno spazio dorato e suggestivo, definito da cupole, mosaici, marmi preziosi e da un impianto simbolico che fonde devozione religiosa, autorità politica e magnificenza artistica.",
                        "audio": "assets/basilica_it2.mp3"
                    },
                    {
                        "title": "Mosaici e dettagli iconografici",
                        "text": "I mosaici dominano la basilica con oro e luce, narrando storie bibliche, santi e ideologia veneziana attraverso un linguaggio visivo continuo che trasforma l’arte in teologia e in espressione di potere.",
                        "audio": "assets/basilica_it3.mp3"
                    },
                    {
                        "title": "Pavimento e cappelle laterali",
                        "text": "Il pavimento cosmatesco e le cappelle laterali raccontano la storia viva di Venezia attraverso marmi ondulati, disegni geometrici, reliquie e spazi devozionali che uniscono arte, fede e identità civica.",
                        "audio": "assets/basilica_it4.mp3"
                    },
                    {
                        "title": "La Pala d’Oro",
                        "text": "La Pala d’Oro è uno straordinario altare dorato arricchito nei secoli, che unisce arte bizantina, gemme preziose e simbolismo politico in una dichiarazione visiva della devozione e del prestigio di Venezia.",
                        "audio": "assets/basilica_it5.mp3"
                    },
                    {
                        "title": "La cripta e il Tesoro di San Marco",
                        "text": "Sotto la basilica si trovano la cripta e il tesoro, che conservano colonne antiche, reliquie e oggetti sacri testimoni delle radici spirituali di Venezia, del suo potere diplomatico e delle sue connessioni internazionali.",
                        "audio": "assets/basilica_it6.mp3"
                    },
                    {
                        "title": "La Loggia dei Cavalli",
                        "text": "La Loggia dei Cavalli ospita la celebre quadriga bronzea proveniente da Costantinopoli, simbolo delle vittorie di Venezia, del suo dominio e della capacità di trasformare la conquista in prestigio duraturo.",
                        "audio": "assets/basilica_it7.mp3"
                    },
                    {
                        "title": "La terrazza panoramica",
                        "text": "La terrazza panoramica offre una vista dominante su Venezia, sulla laguna e sulla piazza, rivelando la basilica come centro strategico, politico e simbolico che collega la città, il mare e la Repubblica.",
                        "audio": "assets/basilica_it8.mp3"
                    }
                ]
            },
            "rialto": {
                "title": "Museo Correr",
                "desc": "Il Museo Correr è un museo civico di Venezia, situato in Piazza San Marco. Offre un affascinante viaggio nell'arte, nella storia e nella cultura della città, a partire dall'Ala Napoleonica fino alle Procuratie Nuove. Le ricche collezioni documentano vari aspetti della vita veneziana, ospitando capolavori che spaziano dai dipinti storici alle antichità classiche e fornendo profonde intuizioni sul glorioso passato della Serenissima.",
                "audio": [
                    "assets/correr_it1.mp3",
                    "assets/correr_it2.mp3", 
                    "assets/correr_it3.mp3", 
                    "assets/correr_it4.mp3", 
                    "assets/correr_it5.mp3", 
                    "assets/correr_it6.mp3"
                ],
                "pdf": "assets/correr_ita.pdf",
                "image_light": "assets/correr_light.jpg",
                "image_dark": "assets/correr.jpg"
            },
            "campanile": {
                "title": "Campanile di San Marco",
                "desc": "Il Campanile di San Marco serve come fondamentale punto di riferimento verticale nel paesaggio orizzontale di Venezia, funzionando originariamente come torre di guardia medievale e faro. Oltre al suo ruolo religioso, storicamente regolava la vita cittadina segnalando i principali eventi pubblici tramite le sue campane. In seguito al crollo improvviso nel 1902, la torre fu ricostruita fedelmente per preservare l'identità della città. Oggi, rimane un simbolo della resilienza veneziana e offre una prospettiva unica sulla geografia acquea della città.",
                "audio": [
                    "assets/campanile_ita.mp3",
                    "assets/campanile_ita2.mp3"
                ],
                "pdf": "assets/campanile_ita.pdf",
                "image_light": "assets/campanile.jpg",
                "image_dark": "assets/campanile_dark.jpeg"
            },
            "Murano": {
                "title": "Murano",
                "desc": "Durante il Medioevo, i vetrai veneziani possedevano l'esclusiva e altamente redditizia competenza di raffinare e colorare il vetro. Per proteggere questo segreto di stato dai mercanti stranieri e per prevenire ufficialmente gli incendi a Venezia, il Doge ordinò il trasferimento di tutte le fornaci da vetro sull'isola di Murano entro la fine del XIII secolo, limitando pesantemente il movimento dei maestri vetrai. Il processo tradizionale di lavorazione del vetro prevede la fusione di una miscela di sabbia silicea, soda e calcare a temperature superiori ai 1.300 gradi Celsius. Dopo che il vetro fuso viene raffinato per rimuovere le bolle d'aria, vengono aggiunti ossidi metallici per il colore e un maestro vetraio modella rapidamente il pezzo utilizzando una canna da soffio prima che sia sottoposto a un lento processo di ricottura per evitare crepe.",
                "audio": [
                    "assets/murano_ita.mp3",
                    "assets/murano_ita2.mp3",
                    "assets/murano_ita3.mp3"
                ],
                "pdf": "assets/murano_ita.pdf",
                "image_light": "assets/murano.jpg",
                "image_dark": "assets/murano_dark.jpeg"
            },
            "Burano": {
                "title": "Burano",
                "desc": "Burano è una pittoresca isola della laguna di Venezia, famosa per le sue case dai colori vivaci, che storicamente aiutavano i pescatori a tornare a casa sani e salvi tra la nebbia. La ricca cultura dell'isola è profondamente radicata nella pesca e nelle tradizioni culinarie locali, in particolare offrendo pesce fresco e biscotti energetici come il bussolà e l'esse. Inoltre, Burano è riconosciuta a livello mondiale per il suo merletto delicato e lavorato a mano, una tradizione femminile meticolosamente preservata e tramandata di generazione in generazione. Visitare Burano offre un'esperienza sensoriale bellissima della sua lunga e duratura eredità e dello stile di vita locale vibrante.",
                "audio": [
                    "assets/burano_ita.mp3",
                    "assets/burano_ita2.mp3"
                ],
                "pdf": "assets/burano_ita.pdf",
                "image_light": "assets/burano.jpg",
                "image_dark": "assets/burano_dark.jpg"
            }
        }
    },
    "de": {
        "title": "Venedig Audioguide",
        "logout": "Abmelden",
        "login_title": "Willkommen in Venedig",
        "login_btn": "Eintreten",
        "username_ph": "Benutzername",
        "password_ph": "Passwort",
        "error_login": "Ungültige Anmeldedaten",
        "attractions": {
            "gondola": {
                "title": "Gondelfahrt",
                "desc": "Der folgende Text lädt den Leser ein, die Gondel aus ihrer authentischsten Perspektive neu zu entdecken: nicht als touristisches Symbol, sondern als außergewöhnliches funktionales Objekt, das aus der Not heraus geformt und über Jahrhunderte perfektioniert wurde. Durch ihre Geschichte, ihr technisches Design, ihre Handwerkskunst und ihre Symbolik erweist sich die Gondel als eine einzigartige Balance aus Ingenieurskunst, Kultur und venezianischem Alltag, die die Geschichte der Stadt klarer erzählen kann als jeder Blick von oben. \\nLaden Sie das vollständige PDF unten herunter.",
                "audio": "assets/gondola_ted.mp3",
                "pdf": "assets/gondola_ted.pdf",
                "image_light": "assets/gondola_img.jpg",
                "image_dark": "assets/gondola_dark.jpg"
            },
            "palazzo_ducale": {
                "title": "Dogenpalast",
                "desc": "Dieser Text stellt den Dogenpalast als das politische und institutionelle Herz der Republik Venedig vor, einen Ort, an dem Macht, Regierungsführung und Repräsentation über Jahrhunderte zusammenliefen. Durch seine vielschichtige Geschichte und sich entwickelnde Architektur spiegelt der Palast die Entwicklung des politischen Lebens Venedigs und den Ehrgeiz der Republik wider, Autorität, Diplomatie und künstlerische Pracht in einem einzigen monumentalen Symbol zu vereinen.",
                "audio": [
                    "assets/ducale_ted1.mp3",
                    "assets/ducale_ted2.mp3",
                    "assets/ducale_ted3.mp3",
                    "assets/ducale_ted4.mp3",
                    "assets/ducale_ted5.mp3",
                    "assets/ducale_ted6.mp3",
                    "assets/ducale_ted7.mp3",
                    "assets/ducale_ted8.mp3",
                    "assets/ducale_ted9.mp3",
                    "assets/ducale_ted10.mp3",
                    "assets/ducale_ted11.mp3",
                    "assets/ducale_ted12.mp3",
                    "assets/ducale_ted13.mp3"
                ],
                "pdf": "assets/ducale_ted.pdf",
                "image_light": "assets/palazzo_duc_img.jpg",
                "image_dark": "assets/ducale_dark.jpg",
            },
            "basilica": {
                "title": "Markusdom",
                "desc": "Der Markusdom ist das Symbol Venedigs und das Herz der Serenissima, gegründet nach der Ankunft der Reliquien des Heiligen Markus im Jahr 828, diente als Kapelle des Dogen und Bühne für Staatszeremonien, wurde im 11. Jahrhundert mit byzantinischem Einfluss umgebaut und ist noch heute ein goldenes Monument, das die Macht, den Glauben und die Identität der Republik Venedig zum Ausdruck bringt.",
                "audio": [
                    "assets/basilica_ted1.mp3",
                    "assets/basilica_ted2.mp3",
                    "assets/basilica_ted3.mp3",
                    "assets/basilica_ted4.mp3",
                    "assets/basilica_ted5.mp3",
                    "assets/basilica_ted6.mp3",
                    "assets/basilica_ted7.mp3",
                    "assets/basilica_ted8.mp3",
                    "assets/basilica_ted9.mp3",
                    "assets/basilica_ted10.mp3",
                    "assets/basilica_ted11.mp3",
                    "assets/basilica_ted12.mp3",
                    "assets/basilica_ted13.mp3",
                    "assets/basilica_ted14.mp3"
                ],
                "pdf": "assets/basilica_ted.pdf",
                "image_light": "assets/basilica_img.jpg",
                "image_dark": "assets/basilica_dark.jpg"
            },
            "rialto": {
                "title": "Museo Correr",
                "desc": "Das Museo Correr ist ein städtisches Museum in Venedig, Italien, das sich am Markusplatz befindet. Es bietet eine faszinierende Reise in die Kunst, Geschichte und Kultur Venedigs, beginnend mit dem Napoleonischen Flügel, in dem sich der Eingang befindet, und weiter durch die Procuratie Nuove. Die reichen Sammlungen dokumentieren verschiedene Aspekte des venezianischen Lebens.",
                "audio": [
                    "assets/correr_ted1.mp3",
                    "assets/correr_ted2.mp3", 
                    "assets/correr_ted3.mp3", 
                    "assets/correr_ted4.mp3", 
                    "assets/correr_ted5.mp3", 
                    "assets/correr_ted6.mp3", 
                    "assets/correr_ted7.mp3"
                ],
                "pdf": "assets/correr_ted.pdf",
                "image_light": "assets/correr_light.jpg",
                "image_dark": "assets/correr.jpg"
            },
            "campanile": {
                "title": "Campanile di San Marco",
                "desc": "Der Markusturm (Campanile di San Marco) dient als wichtiger vertikaler Orientierungspunkt in der horizontalen Landschaft Venedigs und fungierte ursprünglich als mittelalterlicher Wachturm und Leuchtturm. Neben seiner religiösen Rolle regelte er historisch das städtische Leben, indem er über seine Glocken wichtige öffentliche Ereignisse signalisierte. Nach seinem plötzlichen Einsturz im Jahr 1902 wurde der Turm originalgetreu rekonstruiert, um die Identität der Stadt zu bewahren. Heute ist er ein Symbol der venezianischen Widerstandsfähigkeit und bietet eine einzigartige Perspektive auf die wassergeprägte Geographie der Stadt.",
                "audio": [
                    "assets/campanile_ted.mp3",
                    "assets/campanile_ted2.mp3"
                ],
                "pdf": "assets/campanile_ted.pdf",
                "image_light": "assets/campanile.jpg",
                "image_dark": "assets/campanile_dark.jpeg"
            },
            "Murano": {
                "title": "Murano",
                "desc": "Im Mittelalter besaßen venezianische Glasmacher die exklusive und äußerst profitable Fähigkeit, Glas zu raffinieren und zu färben. Um dieses Staatsgeheimnis vor ausländischen Händlern zu schützen und Brände in Venedig offiziell zu verhindern, ordnete der Doge bis Ende des 13. Jahrhunderts die Verlegung aller Glasöfen auf die Insel Murano an, was die Bewegungsfreiheit der Glasmachermeister stark einschränkte. Der traditionelle Glasherstellungsprozess beinhaltet das Schmelzen einer Mischung aus Quarzsand, Soda und Kalkstein bei Temperaturen von über 1.300 Grad Celsius. Nachdem das geschmolzene Glas raffiniert wurde, um Luftblasen zu entfernen, werden Metalloxide für die Farbe hinzugefügt, und ein Glasmachermeister formt das Stück schnell mit einem Blasrohr, bevor es einem langsamen Kühlprozess unterzogen wird, um Risse zu vermeiden.",
                "audio": [
                    "assets/murano_ted.mp3",
                    "assets/murano_ted2.mp3",
                    "assets/murano_ted3.mp3"
                ],
                "pdf": "assets/murano_ted.pdf",
                "image_light": "assets/murano.jpg",
                "image_dark": "assets/murano_dark.jpeg"
            },
            "Burano": {
                "title": "Burano",
                "desc": "Burano ist eine malerische Insel in der Lagune von Venedig, die für ihre bunten Häuser berühmt ist, die historisch den Fischern halfen, durch den Nebel sicher nach Hause zu navigieren. Die reiche Kultur der Insel ist tief in der Fischerei und in den lokalen kulinarischen Traditionen verwurzelt, insbesondere in frischen Meeresfrüchten und energiegelieferten Keksen wie Bussolà und Esse. Darüber hinaus ist Burano weltweit anerkannt für seine feine, handgearbeitete Spitze, eine sorgfältig bewahrte weibliche Tradition, die von Generation zu Generation weitergegeben wurde. Der Besuch von Burano bietet ein wunderschönes, sinnliches Erlebnis des dauerhaften Erbes und des lebendigen lokalen Lebensstils.",
                "audio": [
                    "assets/burano_ted.mp3",
                    "assets/burano_ted2.mp3",
                    "assets/burano_ted3.mp3"
                ],
                "pdf": "assets/burano_ted.pdf",
                "image_light": "assets/burano.jpg",
                "image_dark": "assets/burano_dark.jpg"
            }
        }
    },
    "fr": {
        "title": "Audioguide Venise",
        "logout": "Déconnexion",
        "login_title": "Bienvenue à Venise",
        "login_btn": "Entrer",
        "username_ph": "Nom d'utilisateur",
        "password_ph": "Mot de passe",
        "error_login": "Identifiants invalides",
        "attractions": {
            "gondola": {
                "title": "Tour en gondole",
                "desc": "Le texte suivant invite le lecteur à redécouvrir la gondole sous son angle le plus authentique : non pas comme un symbole touristique, mais comme un objet fonctionnel extraordinaire façonné par la nécessité et perfectionné au fil des siècles. À travers son histoire, sa conception technique, son savoir-faire et son symbolisme, la gondole apparaît comme un équilibre unique entre ingénierie, culture et vie quotidienne vénitienne, capable de raconter l'histoire de la ville plus clairement que n'importe quelle vue de dessus. \\nTéléchargez le PDF complet ci-dessous.",
                "audio": "assets/gondola_fra.mp3",
                "pdf": "assets/gondola_fr.pdf",
                "image_light": "assets/gondola_img.jpg",
                "image_dark": "assets/gondola_dark.jpg"
            },
            "palazzo_ducale": {
                "title": "Palais des Doges",
                "desc": "Ce texte présente le Palais des Doges comme le cœur politique et institutionnel de la République de Venise, un lieu où le pouvoir, la gouvernance et la représentation a convergé pendant des siècles. À travers son histoire complexe et son architecture en évolution, le palais reflète le développement de la vie politique vénitienne et l'ambition de la République d'unir autorité, diplomatie et magnificence artistique en un seul symbole monumental.",
                "audio": "assets/ducale_fra1.mp3",
                "pdf": "assets/ducale_fra.pdf",
                "image_light": "assets/palazzo_duc_img.jpg",
                "image_dark": "assets/ducale_dark.jpg",
                "chapters": [
                    {
                        "title": "Exterior Architecture",
                        "text": "The Exterior of the Doge’s Palace is a masterpiece of Venetian Gothic architecture. The lower arcades convey strength and stability, while the upper levels appear light and elegant. Decorative marble, sculptural details, and pointed arches express authority and sophistication. Materials imported from across the Mediterranean reflect Venice’s trade networks. The façade projects both political power and cultural prestige.",
                        "audio": "assets/ducale_fra2.mp3"
                    },
                    {
                        "title": "Inner Courtyard",
                        "text": "The inner courtyard serves as a transitional space between the public exterior and the palace interiors. Its symmetrical layout and arcaded galleries emphasize order and harmony. Sculpted columns and decorated capitals display artistic refinement and cultural openness. The open central space allows light to enhance the architectural rhythm. Historically, it functioned as a ceremonial and political gathering area.",
                        "audio": "assets/ducale_fra3.mp3"
                    },
                    {
                        "title": "The Giants' Staircase",
                        "text": "The Giants’ Staircase is a monumental ceremonial stairway symbolizing Venetian authority. Built in the late 15th century, it hosted key public rituals, including the Doge’s coronation. The statues of Mars and Neptune represent power on land and sea. Their imposing scale reminds viewers that the Doge served the Republic, not the reverse. The staircase blends architecture, ceremony, and civic ideology.",
                        "audio": "assets/ducale_fra4.mp3"
                    },
                    {
                        "title": "The Golden Staircase",
                        "text": "The Golden Staircase provided a refined and private ascent for the Doge and magistrates. Decorated with gold leaf and elaborate stucco, it celebrates Venetian artistic excellence. Built in the mid-16th century, it marked the transition from public to private governance spaces. Its iconography evokes harmony, wisdom, and maritime power. Art and politics merge seamlessly along its ascent.",
                        "audio": "assets/ducale_fra5.mp3"
                    },
                    {
                        "title": "The Hall of the Four Doors",
                        "text": "The Hall of the Four Doors functioned as a symbolic and ceremonial crossroads within the palace. Its four monumental doorways regulated movement between key political spaces. Rich stucco, marble, and allegorical sculptures convey civic virtues. The hall prepared officials for entry into the main council chambers. Even passage through the palace carried political meaning.",
                        "audio": "assets/ducale_fra6.mp3"
                    },
                    {
                        "title": "The Anticollegio",
                        "text": "The Anticollegio served as a preparatory area for Venice’s governing councils. Here, officials held briefings and consultations before formal sessions. The rooms are richly decorated with historical and allegorical artworks. Ceilings emphasize justice, prudence, and orderly governance. The space bridges ceremonial grandeur and practical decision-making.",
                        "audio": "assets/ducale_fra7.mp3"
                    },
                    {
                        "title": "The College Chamber",
                        "text": "The College Chamber was the executive coordination center of the Republic. The Doge and senior officials met here to shape policy and strategy. Decorative frescoes reinforced moral responsibility and civic virtue. The layout supported efficient discussion and hierarchy. The chamber balanced ceremony with everyday governance.",
                        "audio": "assets/ducale_fra8.mp3"
                    },
                    {
                        "title": "The Senate Chamber",
                        "text": "The Senate Chamber hosted debates on Venice’s political, military, and diplomatic affairs. Known as the Consiglio dei Pregadi, it guided the Republic’s international actions. Walls and ceilings are filled with symbolic historical imagery. Art reinforced Venice’s global role and moral responsibility. Politics, diplomacy, and aesthetics converge in this space.",
                        "audio": "assets/ducale_fra9.mp3"
                    },
                    {
                        "title": "Hall of the Council of Ten",
                        "text": "The Council of Ten was Venice’s most powerful security institution. Created in 1310, it handled state security, espionage, and moral enforcement. The chamber’s intimate layout emphasized secrecy and control. Allegorical decorations reinforced divine and civic authority. Decisions here could determine individual and state destinies.",
                        "audio": "assets/ducale_fra10.mp3"
                    },
                    {
                        "title": "Hall of the Great Council",
                        "text": "The Hall of the Great Council was the largest and most important political space in Venice. It hosted assemblies of over 2,000 patricians. The vast hall symbolizes collective governance and civic unity. Masterpieces by Tintoretto and others dominate the walls and ceiling. The room narrates Venice’s political identity through art.",
                        "audio": "assets/ducale_fra11.mp3"
                    },
                    {
                        "title": "Hall of the Scrutiny",
                        "text": "The Hall of the Scrutiny was central to Venice’s complex electoral system. Originally intended for manuscripts, it became the space for voting and ballot counting. Its decoration followed the fire of 1577 and celebrates military victories. Portraits of Doges reinforce political continuity. Even electoral procedures were surrounded by symbolism and ritual.",
                        "audio": "assets/ducale_fra12.mp3"
                    },
                    {
                        "title": "The Bridge of Sighs",
                        "text": "The Bridge of Sighs connected the Doge’s Palace to the New Prisons. Built in the early 17th century, it served a strictly judicial function. Its enclosed structure ensured controlled prisoner transfers. Later romantic interpretations gave it symbolic and literary fame. Today, it embodies justice, legend, and Venetian imagination.",
                        "audio": "assets/ducale_fra13.mp3"
                    },
                    {
                        "title": "The new Prisons",
                        "text": "The New Prisons reflect Venice’s advanced approach to incarceration. Built in the early 1600s, they emphasized order, control, and supervision. Cells were small but allowed light and ventilation. Prisoners entered via the Bridge of Sighs after judgment. The complex reveals Venice’s balance between authority and discipline.",
                        "audio": "assets/ducale_fra14.mp3"
                    }
                ]
            },
            "basilica": {
                "title": "Basilique Saint-Marc",
                "desc": "La Basilique Saint-Marc est le symbole de Venise et le cœur de la Sérénissime, fondée après l'arrivée des reliques de Saint Marc en 828, servant de chapelle du Doge et de scène pour les cérémonies d'État, reconstruite au XIe siècle avec une influence byzantine, et encore aujourd'hui un monument doré exprimant la puissance, la foi et l'identité de la République de Venise.",
                "audio": [
                    "assets/basilica_fra1.mp3",
                    "assets/basilica_fra2.mp3"
                ],
                "pdf": "assets/basilica_fra.pdf",
                "image_light": "assets/basilica_img.jpg",
                "image_dark": "assets/basilica_dark.jpg",
                "chapters": [
                    {
                        "title": "Interior Architecture",
                        "text": "The interior of St. Mark’s Basilica reveals a golden, mystical space defined by domes, mosaics, precious marbles, and a symbolic layout that blends religious devotion, political authority, and artistic magnificence.",
                        "audio": [
                            "assets/basilica_fra3.mp3",
                            "assets/basilica_fra4.mp3"
                        ]
                    },
                    {
                        "title": "Mosaic And Iconographic Details",
                        "text": "The mosaics dominate the basilica with gold and light, narrating biblical stories, saints, and Vfraetian ideology through a continuous visual language that transforms art into theology and power.",
                        "audio": [
                            "assets/basilica_fra5.mp3",
                            "assets/basilica_fra6.mp3"
                        ]
                    },
                    {
                        "title": "Floor and Side Chapels",
                        "text": "The Cosmatesque floor and side chapels reveal Vfraice’s living history through undulating marbles, geometric designs, relics, and devotional spaces that unite art, faith, and civic idfratity.",
                        "audio": "assets/basilica_fra7.mp3"
                    },
                    {
                        "title": "The Pala D'Oro",
                        "text": "The Pala d’Oro is a dazzling goldfra altarpiece frariched over cfraturies, combining Byzantine art, precious gems, and political symbolism into a visual declaration of Vfraice’s devotion and prestige.",
                        "audio": [
                            "assets/basilica_fra8.mp3",
                            "assets/basilica_fra9.mp3"
                        ]
                    },
                    {
                        "title": "The Crypt and the Treasure of St. Mark",
                        "text": "Bfraeath the basilica lies the crypt and treasure, preserving ancifrat columns, relics, and sacred objects that testify to Vfraice’s spiritual roots, diplomatic power, and international connections.",
                        "audio": [
                            "assets/basilica_fra10.mp3",
                            "assets/basilica_fra11.mp3"
                        ]
                    },
                    {
                        "title": "The Loggia of the Horses",
                        "text": "The Loggia of the Horses displays the famous bronze quadriga takfra from Constantinople, symbolizing Vfraice’s triumphs, dominance, and ability to transform conquest into lasting prestige.",
                        "audio": [
                            "assets/basilica_fra12.mp3",
                            "assets/basilica_fra13.mp3"
                        ]
                    },
                    {
                        "title": "The Panoramic Terrace",
                        "text": "The panoramic terrace offers a commanding view over Vfraice, the lagoon, and the piazza, revealing the basilica as a strategic, political, and symbolic cfrater linking the city, the sea, and the Republic.",
                        "audio": [
                            "assets/basilica_fra14.mp3",
                            "assets/basilica_fra15.mp3"
                        ]
                    }
                ]
            },
            "rialto": {
                "title": "Museo Correr",
                "desc": "Le Museo Correr est un musée municipal de Venise, en Italie, situé sur la place Saint-Marc. Il propose un voyage fascinant dans l'art, l'histoire et la culture de Venise, en commençant par l'Aile Napoléonienne où se trouve l'entrée, et en continuant à travers les Procuratie Nuove. Ses riches collections documentent divers aspects de la vie vénitienne et abritent des chefs-d'œuvre de la peinture et de l'antiquité.",
                "audio": [
                    "assets/correr_fra1.mp3",
                    "assets/correr_fra2.mp3", 
                    "assets/correr_fra3.mp3", 
                    "assets/correr_fra4.mp3", 
                    "assets/correr_fra5.mp3", 
                    "assets/correr_fra6.mp3", 
                    "assets/correr_fra7.mp3"
                ],
                "pdf": "assets/correr_fra.pdf",
                "image_light": "assets/correr_light.jpg",
                "image_dark": "assets/correr.jpg"
            },
            "campanile": {
                "title": "Campanile di San Marco",
                "desc": "Le Campanile de Saint-Marc sert de point de repère vertical vital dans le paysage horizontal de Venise, fonctionnant à l'origine comme une tour de guet médiévale et un phare. Au-delà de son rôle religieux, il a historiquement réglementé la vie civique en signalant les grands événements publics grâce à ses cloches. Après son effondrement soudain en 1902, la tour a été fidèlement reconstruite pour préserver l'identité de la ville. Aujourd'hui, il reste un symbole de la résilience vénitienne et offre une perspective unique sur la géographie aquatique de la ville.",
                "audio": [
                    "assets/campanile_fra1.mp3",
                    "assets/campanile_fra2.mp3"
                ],
                "pdf": "assets/campanile_fra.pdf",
                "image_light": "assets/campanile.jpg",
                "image_dark": "assets/campanile_dark.jpeg"
            },
            "Murano": {
                "title": "Murano",
                "desc": "Au Moyen Âge, les verriers vénitiens possédaient une compétence exclusive et très rentable : affiner et colorer le verre. Pour protéger ce secret d'État des marchands étrangers et pour prévenir officiellement les incendies à Venise, le Doge a ordonné le déplacement de tous les fours à verre sur l'île de Murano d'ici la fin du XIIIe siècle, restreignant fortement les déplacements des maîtres verriers. Le processus traditionnel de fabrication du verre consiste à faire fondre un mélange de sable de silice, de soude et de calcaire à des températures dépassant les 1 300 degrés Celsius. Après que le verre en fusion soit affiné pour éliminer les bulles d'air, des oxydes métalliques sont ajoutés pour la couleur, et un maître verrier moule rapidement la pièce en utilisant une canne à souffler avant qu'elle ne soit soumise à un lent processus de recuit pour éviter les fissures.",
                "audio": [
                    "assets/murano_fra1.mp3",
                    "assets/murano_fra2.mp3",
                    "assets/murano_fra3.mp3"
                ],
                "pdf": "assets/murano_fra.pdf",
                "image_light": "assets/murano.jpg",
                "image_dark": "assets/murano_dark.jpeg"
            },
            "Burano": {
                "title": "Burano",
                "desc": "Burano est une île pittoresque de la lagune vénitienne, célèbre pour ses maisons aux couleurs vives, qui aidaient historiquement les pêcheurs à retrouver leur maison en toute sécurité à travers le brouillard. La riche culture de l'île est profondément ancrée dans la pêche et les traditions culinaires locales, caractérisée notamment par ses fruits de mer frais et ses biscuits énergétiques tels que le bussolà et l'esse. En outre, Burano est reconnue mondialement pour sa dentelle délicate, faite à la main, une tradition féminine minutieusement préservée et transmise de génération en génération. Visiter Burano offre une belle expérience sensorielle de son patrimoine pérenne et de son mode de vie local si vivant.",
                "audio": [
                    "assets/burano_fra1.mp3",
                    "assets/burano_fra2.mp3",
                    "assets/burano_fra3.mp3"
                ],
                "pdf": "assets/burano_fra.pdf",
                "image_light": "assets/burano.jpg",
                "image_dark": "assets/burano_dark.jpg"
            }
        }
    },
    "es": {
        "title": "Audioguía Venecia",
        "logout": "Cerrar sesión",
        "login_title": "Bienvenido a Venecia",
        "login_btn": "Entrar",
        "username_ph": "Nombre de usuario",
        "password_ph": "Contraseña",
        "error_login": "Credenciales inválidas",
        "attractions": {
            "gondola": {
                "title": "Paseo en góndola",
                "desc": "El siguiente texto invita al lector a redescubrir la góndola desde su perspectiva más auténtica: no como un símbolo turístico, sino como un extraordinario objeto funcional moldeado por la necesidad y perfeccionado a lo largo de los siglos. A través de su historia, diseño técnico, artesanía y simbolismo, la góndola emerge como un equilibrio único de ingeniería, cultura y vida cotidiana veneciana, capaz de contar la historia de la ciudad más claramente que cualquier vista desde arriba. \\nDescargue el PDF completo a continuación.",
                "audio": "assets/gondola_esp.mp3",
                "pdf": "assets/gondola_esp.pdf",
                "image_light": "assets/gondola_img.jpg",
                "image_dark": "assets/gondola_dark.jpg"
            },
            "palazzo_ducale": {
                "title": "Palacio Ducal",
                "desc": "Este texto introduce el Palacio Ducal como el corazón político e institucional de la República de Venecia, un lugar donde el poder, el gobierno y la representación convergieron durante siglos. A través de su historia superpuesta y arquitectura en evolución, el palacio refleja el desarrollo de la vida política veneciana y la ambición de la República de unir autoridad, diplomacia y magnificencia artística en un solo símbolo monumental.",
                "audio": "assets/ducale_spa1.mp3",
                "pdf": "assets/ducale_esp.pdf",
                "image_light": "assets/palazzo_duc_img.jpg",
                "image_dark": "assets/ducale_dark.jpg",
                "chapters": [
                    {
                        "title": "Exterior Architecture",
                        "text": "The Exterior of the Doge’s Palace is a masterpiece of Venetian Gothic architecture. The lower arcades convey strength and stability, while the upper levels appear light and elegant. Decorative marble, sculptural details, and pointed arches express authority and sophistication. Materials imported from across the Mediterranean reflect Venice’s trade networks. The façade projects both political power and cultural prestige.",
                        "audio": "assets/ducale_spa2.mp3"
                    },
                    {
                        "title": "Inner Courtyard",
                        "text": "The inner courtyard serves as a transitional space between the public exterior and the palace interiors. Its symmetrical layout and arcaded galleries emphasize order and harmony. Sculpted columns and decorated capitals display artistic refinement and cultural openness. The open central space allows light to enhance the architectural rhythm. Historically, it functioned as a ceremonial and political gathering area.",
                        "audio": "assets/ducale_spa3.mp3"
                    },
                    {
                        "title": "The Giants' Staircase",
                        "text": "The Giants’ Staircase is a monumental ceremonial stairway symbolizing Venetian authority. Built in the late 15th century, it hosted key public rituals, including the Doge’s coronation. The statues of Mars and Neptune represent power on land and sea. Their imposing scale reminds viewers that the Doge served the Republic, not the reverse. The staircase blends architecture, ceremony, and civic ideology.",
                        "audio": "assets/ducale_spa4.mp3"
                    },
                    {
                        "title": "The Golden Staircase",
                        "text": "The Golden Staircase provided a refined and private ascent for the Doge and magistrates. Decorated with gold leaf and elaborate stucco, it celebrates Venetian artistic excellence. Built in the mid-16th century, it marked the transition from public to private governance spaces. Its iconography evokes harmony, wisdom, and maritime power. Art and politics merge seamlessly along its ascent.",
                        "audio": "assets/ducale_spa5.mp3"
                    },
                    {
                        "title": "The Hall of the Four Doors",
                        "text": "The Hall of the Four Doors functioned as a symbolic and ceremonial crossroads within the palace. Its four monumental doorways regulated movement between key political spaces. Rich stucco, marble, and allegorical sculptures convey civic virtues. The hall prepared officials for entry into the main council chambers. Even passage through the palace carried political meaning.",
                        "audio": "assets/ducale_spa6.mp3"
                    },
                    {
                        "title": "The Anticollegio",
                        "text": "The Anticollegio served as a preparatory area for Venice’s governing councils. Here, officials held briefings and consultations before formal sessions. The rooms are richly decorated with historical and allegorical artworks. Ceilings emphasize justice, prudence, and orderly governance. The space bridges ceremonial grandeur and practical decision-making.",
                        "audio": "assets/ducale_spa7.mp3"
                    },
                    {
                        "title": "The College Chamber",
                        "text": "The College Chamber was the executive coordination center of the Republic. The Doge and senior officials met here to shape policy and strategy. Decorative frescoes reinforced moral responsibility and civic virtue. The layout supported efficient discussion and hierarchy. The chamber balanced ceremony with everyday governance.",
                        "audio": "assets/ducale_spa8.mp3"
                    },
                    {
                        "title": "The Senate Chamber",
                        "text": "The Senate Chamber hosted debates on Venice’s political, military, and diplomatic affairs. Known as the Consiglio dei Pregadi, it guided the Republic’s international actions. Walls and ceilings are filled with symbolic historical imagery. Art reinforced Venice’s global role and moral responsibility. Politics, diplomacy, and aesthetics converge in this space.",
                        "audio": "assets/ducale_spa9.mp3"
                    },
                    {
                        "title": "Hall of the Council of Ten",
                        "text": "The Council of Ten was Venice’s most powerful security institution. Created in 1310, it handled state security, espionage, and moral enforcement. The chamber’s intimate layout emphasized secrecy and control. Allegorical decorations reinforced divine and civic authority. Decisions here could determine individual and state destinies.",
                        "audio": "assets/ducale_spa10.mp3"
                    },
                    {
                        "title": "Hall of the Great Council",
                        "text": "The Hall of the Great Council was the largest and most important political space in Venice. It hosted assemblies of over 2,000 patricians. The vast hall symbolizes collective governance and civic unity. Masterpieces by Tintoretto and others dominate the walls and ceiling. The room narrates Venice’s political identity through art.",
                        "audio": "assets/ducale_spa11.mp3"
                    },
                    {
                        "title": "Hall of the Scrutiny",
                        "text": "The Hall of the Scrutiny was central to Venice’s complex electoral system. Originally intended for manuscrispas, it became the space for voting and ballot counting. Its decoration followed the fire of 1577 and celebrates military victories. Portraits of Doges reinforce political continuity. Even electoral procedures were surrounded by symbolism and ritual.",
                        "audio": "assets/ducale_spa12.mp3"
                    },
                    {
                        "title": "The Bridge of Sighs",
                        "text": "The Bridge of Sighs connected the Doge’s Palace to the New Prisons. Built in the early 17th century, it served a strictly judicial function. Its enclosed structure ensured controlled prisoner transfers. Later romantic interpretations gave it symbolic and literary fame. Today, it embodies justice, legend, and Venetian imagination.",
                        "audio": "assets/ducale_spa13.mp3"
                    },
                    {
                        "title": "The new Prisons",
                        "text": "The New Prisons reflect Venice’s advanced approach to incarceration. Built in the early 1600s, they emphasized order, control, and supervision. Cells were small but allowed light and ventilation. Prisoners entered via the Bridge of Sighs after judgment. The complex reveals Venice’s balance between authority and discipline.",
                        "audio": "assets/ducale_spa14.mp3"
                    }
                ]
            },
            "basilica": {
                "title": "Basílica de San Marcos",
                "desc": "La Basílica de San Marcos es el símbolo de Venecia y el corazón de la Serenísima, fundada tras la llegada de las reliquias de San Marcos en 828, sirviendo como capilla del Dux y escenario de ceremonias estatales, reconstruida en el siglo XI con influencia bizantina, y aún hoy un monumento dorado que expresa el poder, la fe y la identidad de la República de Venecia.",
                "audio": [
                    "assets/basilica_spa1.mp3",
                    "assets/basilica_spa2.mp3",
                ],
                "pdf": "assets/basilica_esp.pdf",
                "image_light": "assets/basilica_img.jpg",
                "image_dark": "assets/basilica_dark.jpg",
                "chapters": [
                    {
                        "title": "Interior Architecture",
                        "text": "The interior of St. Mark’s Basilica reveals a golden, mystical space defined by domes, mosaics, precious marbles, and a symbolic layout that blends religious devotion, political authority, and artistic magnificence.",
                        "audio": [
                            "assets/basilica_spa3.mp3",
                            "assets/basilica_spa4.mp3"
                        ]
                    },
                    {
                        "title": "Mosaic And Iconographic Details",
                        "text": "The mosaics dominate the basilica with gold and light, narrating biblical stories, saints, and Vspaetian ideology through a continuous visual language that transforms art into theology and power.",
                        "audio": [
                            "assets/basilica_spa5.mp3",
                            "assets/basilica_spa6.mp3"
                        ]
                    },
                    {
                        "title": "Floor and Side Chapels",
                        "text": "The Cosmatesque floor and side chapels reveal Vspaice’s living history through undulating marbles, geometric designs, relics, and devotional spaces that unite art, faith, and civic idspatity.",
                        "audio": "assets/basilica_spa7.mp3"
                    },
                    {
                        "title": "The Pala D'Oro",
                        "text": "The Pala d’Oro is a dazzling goldspa altarpiece spariched over cspaturies, combining Byzantine art, precious gems, and political symbolism into a visual declaration of Vspaice’s devotion and prestige.",
                        "audio": [
                            "assets/basilica_spa8.mp3",
                            "assets/basilica_spa9.mp3"
                        ]
                    },
                    {
                        "title": "The Crypt and the Treasure of St. Mark",
                        "text": "Bspaeath the basilica lies the crypt and treasure, preserving ancispat columns, relics, and sacred objects that testify to Vspaice’s spiritual roots, diplomatic power, and international connections.",
                        "audio": [
                            "assets/basilica_spa10.mp3",
                            "assets/basilica_spa11.mp3"
                        ]
                    },
                    {
                        "title": "The Loggia of the Horses",
                        "text": "The Loggia of the Horses displays the famous bronze quadriga takspa from Constantinople, symbolizing Vspaice’s triumphs, dominance, and ability to transform conquest into lasting prestige.",
                        "audio": [
                            "assets/basilica_spa12.mp3",
                            "assets/basilica_spa13.mp3"
                        ]
                    },
                    {
                        "title": "The Panoramic Terrace",
                        "text": "The panoramic terrace offers a commanding view over Vspaice, the lagoon, and the piazza, revealing the basilica as a strategic, political, and symbolic cspater linking the city, the sea, and the Republic.",
                        "audio": [
                            "assets/basilica_spa14.mp3",
                            "assets/basilica_spa15.mp3"
                        ]
                    }
                ]
            },
            "rialto": {
                "title": "Museo Correr",
                "desc": "El Museo Correr es un museo cívico de Venecia, Italia, situado en la Plaza de San Marcos. Ofrece un viaje fascinante a la historia, el arte y la cultura de Venecia, comenzando desde el Ala Napoleónica donde se encuentra la entrada, hasta las Procuratie Nuove. Las ricas colecciones documentan diversos aspectos de la vida veneciana, albergando obras maestras que van desde la pintura veneciana hasta las antigüedades clásicas.",
                "audio": [
                    "assets/correr_es1.mp3",
                    "assets/correr_es2.mp3", 
                    "assets/correr_es3.mp3", 
                    "assets/correr_es4.mp3", 
                    "assets/correr_es5.mp3", 
                    "assets/correr_es6.mp3", 
                    "assets/correr_es7.mp3"
                ],
                "pdf": "assets/correr_esp.pdf",
                "image_light": "assets/correr_light.jpg",
                "image_dark": "assets/correr.jpg"
            },
            "campanile": {
                "title": "Campanile di San Marco",
                "desc": "El Campanile de San Marcos sirve como un punto de referencia vertical vital en el paisaje horizontal de Venecia, funcionando originalmente como una torre de vigilancia medieval y faro. Más allá de su papel religioso, históricamente regulaba la vida cívica señalando los principales eventos públicos a través de sus campanas. Tras su repentino colapso en 1902, la torre fue fielmente reconstruida para preservar la identidad de la ciudad. Hoy, sigue siendo un símbolo de la resiliencia veneciana y ofrece una perspectiva única sobre la geografía acuática de la ciudad.",
                "audio": [
                    "assets/campanile_spa1.mp3",
                    "assets/campanile_spa2.mp3"
                ],
                "pdf": "assets/campanile_esp.pdf",
                "image_light": "assets/campanile.jpg",
                "image_dark": "assets/campanile_dark.jpeg"
            },
            "Murano": {
                "title": "Murano",
                "desc": "Durante la Edad Media, los vidrieros venecianos poseían la exclusiva y muy rentable habilidad de refinar y colorear vidrio. Para proteger este secreto de estado de los comerciantes extranjeros y para prevenir oficialmente incendios en Venecia, el Dux ordenó la reubicación de todos los hornos de vidrio a la isla de Murano a fines del siglo XIII, restringiendo severamente el movimiento de los maestros vidrieros. El proceso tradicional de fabricación de vidrio consiste en derretir una mezcla de arena de sílice, sosa y piedra caliza a temperaturas superiores a los 1.300 grados centígrados. Después de que el vidrio fundido se refina para eliminar las burbujas de aire, se agregan óxidos metálicos para el color, y un maestro vidriero moldea rápidamente la pieza mediante un tubo de soplado antes de someterse a un lento proceso de enfriamiento recocido para evitar grietas.",
                "audio": [
                    "assets/murano_spa1.mp3",
                    "assets/murano_spa2.mp3",
                    "assets/murano_spa3.mp3"
                ],
                "pdf": "assets/murano_esp.pdf",
                "image_light": "assets/murano.jpg",
                "image_dark": "assets/murano_dark.jpeg"
            },
            "Burano": {
                "title": "Burano",
                "desc": "Burano es una pintoresca isla en la laguna de Venecia, famosa por sus casas de colores brillantes, que históricamente ayudaban a los pescadores a navegar de regreso a casa de manera segura a través de la niebla. La rica cultura de la isla está profundamente arraigada en la pesca y las tradiciones culinarias locales, destacando productos pesqueros frescos y galletas energizantes como el bussolà y l'esse. Además, Burano es mundialmente reconocida por su delicado encaje hecho a mano, una tradición femenina meticulosamente preservada transmitida de generación en generación. Visitar Burano ofrece una hermosa experiencia sensorial de su perdurable patrimonio y vibrante estilo de vida local.",
                "audio": [
                    "assets/burano_spa1.mp3",
                    "assets/burano_spa2.mp3",
                    "assets/burano_spa3.mp3"
                ],
                "pdf": "assets/burano_esp.pdf",
                "image_light": "assets/burano.jpg",
                "image_dark": "assets/burano_dark.jpg"
            }
        }
    },
    "pt": {
        "title": "Guia de Áudio de Veneza",
        "logout": "Sair",
        "login_title": "Bem-vindo a Veneza",
        "login_btn": "Entrar",
        "username_ph": "Nome de usuário",
        "password_ph": "Senha",
        "error_login": "Credenciais inválidas",
        "attractions": {
            "gondola": {
                "title": "Passeio de Gôndola",
                "desc": "O texto a seguir convida o leitor a redescobrir a gôndola a partir de sua perspectiva mais autêntica: não como um símbolo turístico, mas como um extraordinário objeto funcional moldado pela necessidade e aperfeiçoado ao longo dos séculos. Através de sua história, design técnico, artesanato e simbolismo, a gôndola surge como um equilíbrio único de engenharia, cultura e vida cotidiana veneziana, capaz de contar a história da cidade de forma mais clara do que qualquer vista de cima. \\nBaixe o PDF completo abaixo.",
                "audio": "assets/gondola_pt.mp3",
                "pdf": "assets/gondola_port.pdf",
                "image_light": "assets/gondola_img.jpg",
                "image_dark": "assets/gondola_dark.jpg"
            },
            "palazzo_ducale": {
                "title": "Palácio Ducal",
                "desc": "Este texto apresenta o Palácio Ducal como o coração político e institucional da República de Veneza, um lugar onde poder, governança e representação convergiram por séculos. Através de sua história em camadas e arquitetura em evolução, o palácio reflete o desenvolvimento da vida política veneziana e a ambição da República de unir autoridade, diplomacia e magnificência artística num único símbolo monumental.",
                "audio": "assets/ducale_pt1.mp3",
                "pdf": "assets/ducale_port.pdf",
                "image_light": "assets/palazzo_duc_img.jpg",
                "image_dark": "assets/ducale_dark.jpg",
                "chapters": [
                    {
                        "title": "Exterior Architecture",
                        "text": "The Exterior of the Doge’s Palace is a masterpiece of Venetian Gothic architecture. The lower arcades convey strength and stability, while the upper levels appear light and elegant. Decorative marble, sculptural details, and pointed arches express authority and sophistication. Materials imported from across the Mediterranean reflect Venice’s trade networks. The façade projects both political power and cultural prestige.",
                        "audio": "assets/ducale_pt2.mp3"
                    },
                    {
                        "title": "Inner Courtyard",
                        "text": "The inner courtyard serves as a transitional space between the public exterior and the palace interiors. Its symmetrical layout and arcaded galleries emphasize order and harmony. Sculpted columns and decorated capitals display artistic refinement and cultural openness. The open central space allows light to enhance the architectural rhythm. Historically, it functioned as a ceremonial and political gathering area.",
                        "audio": "assets/ducale_pt3.mp3"
                    },
                    {
                        "title": "The Giants' Staircase",
                        "text": "The Giants’ Staircase is a monumental ceremonial stairway symbolizing Venetian authority. Built in the late 15th century, it hosted key public rituals, including the Doge’s coronation. The statues of Mars and Neptune represent power on land and sea. Their imposing scale reminds viewers that the Doge served the Republic, not the reverse. The staircase blends architecture, ceremony, and civic ideology.",
                        "audio": "assets/ducale_pt4.mp3"
                    },
                    {
                        "title": "The Golden Staircase",
                        "text": "The Golden Staircase provided a refined and private ascent for the Doge and magistrates. Decorated with gold leaf and elaborate stucco, it celebrates Venetian artistic excellence. Built in the mid-16th century, it marked the transition from public to private governance spaces. Its iconography evokes harmony, wisdom, and maritime power. Art and politics merge seamlessly along its ascent.",
                        "audio": "assets/ducale_pt5.mp3"
                    },
                    {
                        "title": "The Hall of the Four Doors",
                        "text": "The Hall of the Four Doors functioned as a symbolic and ceremonial crossroads within the palace. Its four monumental doorways regulated movement between key political spaces. Rich stucco, marble, and allegorical sculptures convey civic virtues. The hall prepared officials for entry into the main council chambers. Even passage through the palace carried political meaning.",
                        "audio": "assets/ducale_pt6.mp3"
                    },
                    {
                        "title": "The Anticollegio",
                        "text": "The Anticollegio served as a preparatory area for Venice’s governing councils. Here, officials held briefings and consultations before formal sessions. The rooms are richly decorated with historical and allegorical artworks. Ceilings emphasize justice, prudence, and orderly governance. The space bridges ceremonial grandeur and practical decision-making.",
                        "audio": "assets/ducale_pt7.mp3"
                    },
                    {
                        "title": "The College Chamber",
                        "text": "The College Chamber was the executive coordination center of the Republic. The Doge and senior officials met here to shape policy and strategy. Decorative frescoes reinforced moral responsibility and civic virtue. The layout supported efficient discussion and hierarchy. The chamber balanced ceremony with everyday governance.",
                        "audio": "assets/ducale_pt8.mp3"
                    },
                    {
                        "title": "The Senate Chamber",
                        "text": "The Senate Chamber hosted debates on Venice’s political, military, and diplomatic affairs. Known as the Consiglio dei Pregadi, it guided the Republic’s international actions. Walls and ceilings are filled with symbolic historical imagery. Art reinforced Venice’s global role and moral responsibility. Politics, diplomacy, and aesthetics converge in this space.",
                        "audio": "assets/ducale_pt9.mp3"
                    },
                    {
                        "title": "Hall of the Council of Ten",
                        "text": "The Council of Ten was Venice’s most powerful security institution. Created in 1310, it handled state security, espionage, and moral enforcement. The chamber’s intimate layout emphasized secrecy and control. Allegorical decorations reinforced divine and civic authority. Decisions here could determine individual and state destinies.",
                        "audio": "assets/ducale_pt10.mp3"
                    },
                    {
                        "title": "Hall of the Great Council",
                        "text": "The Hall of the Great Council was the largest and most important political space in Venice. It hosted assemblies of over 2,000 patricians. The vast hall symbolizes collective governance and civic unity. Masterpieces by Tintoretto and others dominate the walls and ceiling. The room narrates Venice’s political identity through art.",
                        "audio": "assets/ducale_pt11.mp3"
                    },
                    {
                        "title": "Hall of the Scrutiny",
                        "text": "The Hall of the Scrutiny was central to Venice’s complex electoral system. Originally intended for manuscripts, it became the space for voting and ballot counting. Its decoration followed the fire of 1577 and celebrates military victories. Portraits of Doges reinforce political continuity. Even electoral procedures were surrounded by symbolism and ritual.",
                        "audio": "assets/ducale_pt12.mp3"
                    },
                    {
                        "title": "The Bridge of Sighs",
                        "text": "The Bridge of Sighs connected the Doge’s Palace to the New Prisons. Built in the early 17th century, it served a strictly judicial function. Its enclosed structure ensured controlled prisoner transfers. Later romantic interpretations gave it symbolic and literary fame. Today, it embodies justice, legend, and Venetian imagination.",
                        "audio": "assets/ducale_pt13.mp3"
                    },
                    {
                        "title": "The new Prisons",
                        "text": "The New Prisons reflect Venice’s advanced approach to incarceration. Built in the early 1600s, they emphasized order, control, and supervision. Cells were small but allowed light and ventilation. Prisoners entered via the Bridge of Sighs after judgment. The complex reveals Venice’s balance between authority and discipline.",
                        "audio": "assets/ducale_pt14.mp3"
                    }
                ]
            },
            "basilica": {
                "title": "Basílica de São Marcos",
                "desc": "A Basílica de São Marcos é o símbolo de Veneza e o coração da Sereníssima, fundada após a chegada das relíquias de São Marcos em 828, servindo como capela do Doge e palco de cerimônias de estado, reconstruída no século XI com influência bizantina, e ainda hoje um monumento dourado que expressa o poder, a fé e a identidade da República de Veneza.",
                "audio": [
                    "assets/basilica_pt1.mp3",
                    "assets/basilica_pt2.mp3"
                ],
                "pdf": "assets/basilica_port.pdf",
                "image_light": "assets/basilica_img.jpg",
                "image_dark": "assets/basilica_dark.jpg", 
                "chapters": [
                    {
                        "title": "Interior Architecture",
                        "text": "The interior of St. Mark’s Basilica reveals a golden, mystical space defined by domes, mosaics, precious marbles, and a symbolic layout that blends religious devotion, political authority, and artistic magnificence.",
                        "audio": [
                            "assets/basilica_pt3.mp3",
                            "assets/basilica_pt4.mp3"
                        ]
                    },
                    {
                        "title": "Mosaic And Iconographic Details",
                        "text": "The mosaics dominate the basilica with gold and light, narrating biblical stories, saints, and Vptetian ideology through a continuous visual language that transforms art into theology and power.",
                        "audio": [
                            "assets/basilica_pt5.mp3",
                            "assets/basilica_pt6.mp3"
                        ]
                    },
                    {
                        "title": "Floor and Side Chapels",
                        "text": "The Cosmatesque floor and side chapels reveal Vptice’s living history through undulating marbles, geometric designs, relics, and devotional ptces that unite art, faith, and civic idpttity.",
                        "audio": "assets/basilica_pt7.mp3"
                    },
                    {
                        "title": "The Pala D'Oro",
                        "text": "The Pala d’Oro is a dazzling goldpt altarpiece ptriched over cptturies, combining Byzantine art, precious gems, and political symbolism into a visual declaration of Vptice’s devotion and prestige.",
                        "audio": [
                            "assets/basilica_pt8.mp3",
                            "assets/basilica_pt9.mp3"
                        ]
                    },
                    {
                        "title": "The Crypt and the Treasure of St. Mark",
                        "text": "Bpteath the basilica lies the crypt and treasure, preserving anciptt columns, relics, and sacred objects that testify to Vptice’s spiritual roots, diplomatic power, and international connections.",
                        "audio": [
                            "assets/basilica_pt10.mp3",
                            "assets/basilica_pt11.mp3"
                        ]
                    },
                    {
                        "title": "The Loggia of the Horses",
                        "text": "The Loggia of the Horses displays the famous bronze quadriga takpt from Constantinople, symbolizing Vptice’s triumphs, dominance, and ability to transform conquest into lasting prestige.",
                        "audio": [
                            "assets/basilica_pt12.mp3",
                            "assets/basilica_pt13.mp3"
                        ]
                    },
                    {
                        "title": "The Panoramic Terrace",
                        "text": "The panoramic terrace offers a commanding view over Vptice, the lagoon, and the piazza, revealing the basilica as a strategic, political, and symbolic cptter linking the city, the sea, and the Republic.",
                        "audio": [
                            "assets/basilica_pt14.mp3",
                            "assets/basilica_pt15.mp3"
                        ]
                    }
                ]
            },
            "rialto": {
                "title": "Museo Correr",
                "desc": "O Museo Correr é um museu cívico em Veneza, Itália, localizado na Praça de São Marcos. Ele oferece uma jornada fascinante pela arte, história e cultura de Veneza, começando na Ala Napoleônica onde fica a entrada do museu, e continuando pelas Procuratie Nuove. Suas ricas coleções documentam vários aspectos da vida veneziana, abrigando obras-primas que vão de pinturas venezianas a antiguidades clássicas.",
                "audio": [
                    "assets/correr_pt1.mp3",
                    "assets/correr_pt2.mp3", 
                    "assets/correr_pt3.mp3", 
                    "assets/correr_pt4.mp3", 
                    "assets/correr_pt5.mp3", 
                    "assets/correr_pt6.mp3", 
                    "assets/correr_pt7.mp3"
                ],
                "pdf": "assets/correr_port.pdf",
                "image_light": "assets/correr_light.jpg",
                "image_dark": "assets/correr.jpg"
            },
            "campanile": {
                "title": "Campanile di San Marco",
                "desc": "O Campanile di San Marco serve como um marco vertical vital na paisagem horizontal de Veneza, funcionando originalmente como uma torre de vigia medieval e farol. Além de seu papel religioso, historicamente regulou a vida cívica sinalizando grandes eventos públicos por meio de seus sinos. Após seu colapso repentino em 1902, a torre foi fielmente reconstruída para preservar a identidade da cidade. Hoje, continua a ser um símbolo da resiliência veneziana e oferece uma perspectiva única sobre a geografia aquática da cidade.",
                "audio": [
                    "assets/campanile_pt1.mp3",
                    "assets/campanile_pt2.mp3"
                ],
                "pdf": "assets/campanile_port.pdf",
                "image_light": "assets/campanile.jpg",
                "image_dark": "assets/campanile_dark.jpeg"
            },
            "Murano": {
                "title": "Murano",
                "desc": "Durante a Idade Média, os vidreiros venezianos possuíam a habilidade exclusiva e altamente lucrativa de refinar e colorir o vidro. Para proteger esse segredo de estado de comerciantes estrangeiros e para prevenir oficialmente incêndios em Veneza, o Doge ordenou a realocação de todos os fornos de vidro para a ilha de Murano até o final do século 13, restringindo severamente o movimento dos mestres vidreiros. O processo tradicional de fabricação de vidro envolve derreter uma mistura de areia de sílica, soda e calcário a temperaturas que ultrapassam os 1.300 graus Celsius. Depois que o vidro fundido é refinado para remover as bolhas de ar, óxidos metálicos são adicionados para dar cor, e um mestre vidreiro molda rapidamente a peça usando um tubo de sopro antes de passar por um longo processo de recozimento para evitar rachaduras.",
                "audio": [
                    "assets/murano_pt1.mp3",
                    "assets/murano_pt2.mp3",
                    "assets/murano_pt3.mp3"
                ],
                "pdf": "assets/murano_port.pdf",
                "image_light": "assets/murano.jpg",
                "image_dark": "assets/murano_dark.jpeg"
            },
            "Burano": {
                "title": "Burano",
                "desc": "Burano é uma ilha pitoresca na lagoa veneziana, famosa por suas casas de cores vivas, que historicamente ajudavam os pescadores a navegar em segurança para casa através do nevoeiro. A rica cultura da ilha está profundamente enraizada na pesca e nas tradições culinárias locais, sobretudo por apresentar marisco fresco e biscoitos energéticos como o bussolà e o esse. Além disso, Burano é reconhecida mundialmente pela sua renda delicada, feita à mão, uma tradição feminina meticulosamente preservada e passada de geração em geração. Visitar Burano oferece uma bela experiência sensorial de seu património duradouro e estilo de vida local vibrante.",
                "audio": [
                    "assets/burano_pt1.mp3",
                    "assets/burano_pt2.mp3"
                ],
                "pdf": "assets/burano_port.pdf",
                "image_light": "assets/burano.jpg",
                "image_dark": "assets/burano_dark.jpg"
            }
        }
    }
};
