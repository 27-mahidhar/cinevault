/**
 * CineVault - Curated Movie Catalog & Real Photos Collection
 * Features curated movies across Telugu, Hollywood, Hindi, and World Cinema,
 * with actual verified film posters, featuring Pawan Kalyan's "They Call Him OG"
 * and Ram Charan's complete filmography.
 */

const CURATED_MOVIES = [
  {
    id: "cv-001",
    title: "They Call Him OG",
    originalTitle: "They Call Him OG (ఓజీ)",
    year: 2025,
    releaseDate: "2025-09-27",
    industry: "Telugu",
    genres: ["Action", "Crime", "Thriller"],
    rating: 9.3,
    runtime: 168,
    certificate: "UA 16+",
    director: "Sujeeth",
    cast: ["Pawan Kalyan", "Emraan Hashmi", "Priyanka Arul Mohan", "Arjun Das", "Prakash Raj", "Sriya Reddy"],
    synopsis: "A lethal underworld figure named Ojas Gambheera, feared as 'OG', returns to the blood-soaked criminal landscape of Bombay after ten years of exile. Armed with a sword and an unshakable code of vengeance, he sets out to dismantle a predatory international syndicate led by Omi Bhau and reclaim his sanctuary.",
    tagline: "Firestorm is coming. Bombay will burn.",
    poster: "images/og.jpg",
    backdrop: "images/og.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/0/0c/OG_Poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=Fj2F5rTqXvE",
    trailerEmbedId: "Fj2F5rTqXvE",
    featured: true,
    themeColor: "#e63946"
  },
  {
    id: "cv-002",
    title: "Peddi",
    originalTitle: "Peddi (RC16)",
    year: 2025,
    releaseDate: "2025-11-14",
    industry: "Telugu",
    genres: ["Action", "Drama", "Sports"],
    rating: 8.9,
    runtime: 162,
    certificate: "UA",
    director: "Buchi Babu Sana",
    cast: ["Ram Charan", "Janhvi Kapoor", "Shiva Rajkumar", "Gautham Vasudev Menon"],
    synopsis: "Set against the rugged coastal plains of rural Andhra Pradesh, an uncompromising village athlete battles deep-seated social hierarchies, sports mafia syndicates, and personal tragedy to represent his people on the national stage.",
    tagline: "Blood, sweat, and untamed spirit.",
    poster: "images/peddi.jpg",
    backdrop: "images/peddi.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/2/26/Peddi_Poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    trailerEmbedId: "dQw4w9WgXcQ",
    featured: true,
    themeColor: "#f59e0b"
  },
  {
    id: "cv-003",
    title: "Game Changer",
    originalTitle: "Game Changer (గేమ్ ఛేంజర్)",
    year: 2025,
    releaseDate: "2025-01-10",
    industry: "Telugu",
    genres: ["Action", "Drama", "Thriller"],
    rating: 8.5,
    runtime: 170,
    certificate: "UA",
    director: "S. Shankar",
    cast: ["Ram Charan", "Kiara Advani", "S. J. Suryah", "Srikanth", "Anjali", "Jayaram", "Naveen Chandra"],
    synopsis: "An uncompromising Indian Administrative Service (IAS) officer discovers a deep-rooted network of election rigging and political corruption. Taking on corrupt cabinet ministers, he orchestrates a radical electoral revolution to restore true democracy to the people.",
    tagline: "One honest officer. A million voices. The ultimate revolution.",
    poster: "images/game_changer.jpg",
    backdrop: "images/game_changer.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/6/6a/Game_Changer_Telugu.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=cW8jLq5i04M",
    trailerEmbedId: "cW8jLq5i04M",
    featured: true,
    themeColor: "#3b82f6"
  },
  {
    id: "cv-004",
    title: "RRR",
    originalTitle: "RRR (రౌద్రం రణం రుధిరం)",
    year: 2022,
    releaseDate: "2022-03-25",
    industry: "Telugu",
    genres: ["Action", "Drama", "History"],
    rating: 8.8,
    runtime: 187,
    certificate: "UA",
    director: "S. S. Rajamouli",
    cast: ["Ram Charan", "N. T. Rama Rao Jr.", "Alia Bhatt", "Ajay Devgn", "Shriya Saran", "Ray Stevenson"],
    synopsis: "A fearless Gond tribal warrior on a perilous quest to rescue an abducted girl crosses paths with a steely, dedicated Indian imperial police officer. As their fierce rivalry blossoms into brotherly devotion, they join forces to ignite a monumental rebellion against British colonial rule.",
    tagline: "Rise. Roar. Revolt.",
    poster: "images/rrr.jpg",
    backdrop: "images/rrr.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=f_vbAtFSEc0",
    trailerEmbedId: "f_vbAtFSEc0",
    featured: true,
    themeColor: "#ef4444"
  },
  {
    id: "cv-005",
    title: "Rangasthalam",
    originalTitle: "Rangasthalam (రంగస్థలం)",
    year: 2018,
    releaseDate: "2018-03-30",
    industry: "Telugu",
    genres: ["Action", "Drama", "Period"],
    rating: 8.4,
    runtime: 179,
    certificate: "UA",
    director: "Sukumar",
    cast: ["Ram Charan", "Samantha Ruth Prabhu", "Aadhi Pinisetty", "Jagapathi Babu", "Prakash Raj", "Anasuya Bharadwaj"],
    synopsis: "In the 1980s village of Rangasthalam, Chitti Babu, a cheerful young man with severe hearing impairment, protects his educated elder brother as he dares to run against the merciless village president who has held tyrannical control for thirty unbroken years.",
    tagline: "The stage of life, deceit, and unwavering brotherhood.",
    poster: "images/rangasthalam.jpg",
    backdrop: "images/rangasthalam.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/5/5d/Rangasthalam.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=sS_m_pG5E_Y",
    trailerEmbedId: "sS_m_pG5E_Y",
    featured: false,
    themeColor: "#d97706"
  },
  {
    id: "cv-006",
    title: "Dhruva",
    originalTitle: "Dhruva (ధ్రువ)",
    year: 2016,
    releaseDate: "2016-12-09",
    industry: "Telugu",
    genres: ["Action", "Crime", "Thriller"],
    rating: 7.9,
    runtime: 159,
    certificate: "UA",
    director: "Surender Reddy",
    cast: ["Ram Charan", "Arvind Swamy", "Rakul Preet Singh", "Navdeep", "Posani Krishna Murali"],
    synopsis: "An astute, dedicated IPS officer takes on a cunning, sociopathic scientist who controls a clandestine network of corrupt politicians and medical cartels.",
    tagline: "My enemy is my strength.",
    poster: "images/dhruva.jpg",
    backdrop: "images/dhruva.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/5/53/Dhruva_Telugu_film_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=tA3Pj9o3e4c",
    trailerEmbedId: "tA3Pj9o3e4c",
    featured: false,
    themeColor: "#0284c7"
  },
  {
    id: "cv-007",
    title: "Magadheera",
    originalTitle: "Magadheera (మగధీర)",
    year: 2009,
    releaseDate: "2009-07-31",
    industry: "Telugu",
    genres: ["Action", "Fantasy", "Romance"],
    rating: 8.2,
    runtime: 166,
    certificate: "UA",
    director: "S. S. Rajamouli",
    cast: ["Ram Charan", "Kajal Aggarwal", "Dev Gill", "Srihari", "Rao Ramesh"],
    synopsis: "Kala Bhairava, the peerless warrior of the 17th-century kingdom of Udaygadh, falls in battle while defending his true love Mithravinda against a treacherous prince. Four centuries later, he reincarnates as a motor stuntman in modern Hyderabad to fulfill their immortal bond.",
    tagline: "Love that defies death, time, and destiny.",
    poster: "images/magadheera.jpg",
    backdrop: "images/magadheera.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/c/ce/Magadheera_Poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=o04_vWJ9g7o",
    trailerEmbedId: "o04_vWJ9g7o",
    featured: false,
    themeColor: "#8b5cf6"
  },
  {
    id: "cv-008",
    title: "Kalki 2898 AD",
    originalTitle: "Kalki 2898 AD (కల్కి 2898 AD)",
    year: 2024,
    releaseDate: "2024-06-27",
    industry: "Telugu",
    genres: ["Sci-Fi", "Action", "Fantasy"],
    rating: 8.4,
    runtime: 181,
    certificate: "UA",
    director: "Nag Ashwin",
    cast: ["Prabhas", "Amitabh Bachchan", "Kamal Haasan", "Deepika Padukone", "Disha Patani"],
    synopsis: "In a dystopian post-apocalyptic city named Kasi six thousand years after the Mahabharata, the immortal warrior Ashwatthama re-emerges from penance to shield a pregnant refugee carrying the tenth avatar of Vishnu from Supreme Yaskin's techno-fascist Complex.",
    tagline: "The future began 6,000 years ago.",
    poster: "images/kalki.jpg",
    backdrop: "images/kalki.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kalki_2898_AD.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=kQDd1AhGIHk",
    trailerEmbedId: "kQDd1AhGIHk",
    featured: true,
    themeColor: "#06b6d4"
  },
  {
    id: "cv-009",
    title: "Baahubali 2: The Conclusion",
    originalTitle: "Baahubali 2 (బాహుబలి 2)",
    year: 2017,
    releaseDate: "2017-04-28",
    industry: "Telugu",
    genres: ["Action", "Drama", "Fantasy"],
    rating: 8.7,
    runtime: 167,
    certificate: "UA",
    director: "S. S. Rajamouli",
    cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Ramya Krishnan", "Sathyaraj", "Nasser"],
    synopsis: "When Shiva, the son of the great warrior Amarendra Baahubali, uncovers the truth of his royal lineage and the treacherous conspiracy that led to his father's tragic demise, he marches upon Mahishmati to depose the cruel tyrant Bhallaladeva.",
    tagline: "The boy who became King. The King who became a Legend.",
    poster: "images/baahubali2.jpg",
    backdrop: "images/baahubali2.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=G62HrubdD6o",
    trailerEmbedId: "G62HrubdD6o",
    featured: false,
    themeColor: "#b45309"
  },
  {
    id: "cv-010",
    title: "Pushpa 2: The Rule",
    originalTitle: "Pushpa 2: The Rule (పుష్ప 2)",
    year: 2024,
    releaseDate: "2024-12-05",
    industry: "Telugu",
    genres: ["Action", "Crime", "Drama"],
    rating: 8.6,
    runtime: 200,
    certificate: "UA 16+",
    director: "Sukumar",
    cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil", "Jagapathi Babu", "Sunil"],
    synopsis: "Pushpa Raj expands his sovereign red sanders smuggling empire beyond borders, clashing in an all-out war of wits and firepower with the vengeful IPS officer Bhanwar Singh Shekhawat.",
    tagline: "Pushpa means fire, now it's a raging wildfire.",
    poster: "images/pushpa2.jpg",
    backdrop: "images/pushpa2.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/1/11/Pushpa_2-_The_Rule.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=1kVK0MZlbI4",
    trailerEmbedId: "1kVK0MZlbI4",
    featured: false,
    themeColor: "#dc2626"
  },
  {
    id: "cv-011",
    title: "Salaar: Part 1 – Ceasefire",
    originalTitle: "Salaar (సలార్)",
    year: 2023,
    releaseDate: "2023-12-22",
    industry: "Telugu",
    genres: ["Action", "Crime", "Drama"],
    rating: 8.0,
    runtime: 175,
    certificate: "A",
    director: "Prashanth Neel",
    cast: ["Prabhas", "Prithviraj Sukumaran", "Shruti Haasan", "Jagapathi Babu", "Bobby Simha"],
    synopsis: "In the blood-drenched sovereign city-state of Khansaar, a prince faces a coup from rival clans and summons his estranged childhood friend Deva, an unstoppable force of nature who returns to fulfill a blood oath.",
    tagline: "The most violent man... for the people he loves.",
    poster: "images/salaar.jpg",
    backdrop: "images/salaar.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=4GPvYMKtrtI",
    trailerEmbedId: "4GPvYMKtrtI",
    featured: false,
    themeColor: "#475569"
  },
  {
    id: "cv-012",
    title: "Devara: Part 1",
    originalTitle: "Devara (దేవర)",
    year: 2024,
    releaseDate: "2024-09-27",
    industry: "Telugu",
    genres: ["Action", "Drama", "Thriller"],
    rating: 7.7,
    runtime: 178,
    certificate: "UA",
    director: "Koratala Siva",
    cast: ["N. T. Rama Rao Jr.", "Janhvi Kapoor", "Saif Ali Khan", "Shruti Marathe", "Prakash Raj"],
    synopsis: "An intrepid coastal chieftain refuses to continue smuggling illegal arms across perilous waters, putting him at mortal odds with his ambitious deputy Bhaira and setting up a generation-defining retribution.",
    tagline: "Faces of fear, tides of blood.",
    poster: "images/devara.jpg",
    backdrop: "images/devara.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/f/f0/Devara_Part_1.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=5V_fCgHnJ1M",
    trailerEmbedId: "5V_fCgHnJ1M",
    featured: false,
    themeColor: "#0ea5e9"
  },
  {
    id: "cv-013",
    title: "Oppenheimer",
    originalTitle: "Oppenheimer",
    year: 2023,
    releaseDate: "2023-07-21",
    industry: "Hollywood",
    genres: ["Drama", "History", "Biography"],
    rating: 8.9,
    runtime: 180,
    certificate: "R",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr.", "Matt Damon", "Florence Pugh"],
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, followed by the political reckoning and moral devastation in the Cold War era.",
    tagline: "The world forever changes.",
    poster: "images/oppenheimer.jpg",
    backdrop: "images/oppenheimer.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    trailerEmbedId: "uYPbbksJxIg",
    featured: true,
    themeColor: "#f97316"
  },
  {
    id: "cv-014",
    title: "Dune: Part Two",
    originalTitle: "Dune: Part Two",
    year: 2024,
    releaseDate: "2024-03-01",
    industry: "Hollywood",
    genres: ["Sci-Fi", "Adventure", "Action"],
    rating: 8.8,
    runtime: 166,
    certificate: "PG-13",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Javier Bardem", "Austin Butler"],
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future.",
    tagline: "Long live the fighters.",
    poster: "images/dune2.jpg",
    backdrop: "images/dune2.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=Way9Dexny3w",
    trailerEmbedId: "Way9Dexny3w",
    featured: false,
    themeColor: "#d97706"
  },
  {
    id: "cv-015",
    title: "Interstellar",
    originalTitle: "Interstellar",
    year: 2014,
    releaseDate: "2014-11-07",
    industry: "Hollywood",
    genres: ["Sci-Fi", "Drama", "Adventure"],
    rating: 8.7,
    runtime: 169,
    certificate: "PG-13",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine", "Matt Damon"],
    synopsis: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans through a mysterious wormhole near Saturn.",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    poster: "images/interstellar.jpg",
    backdrop: "images/interstellar.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    trailerEmbedId: "zSWdZVtXT7E",
    featured: false,
    themeColor: "#38bdf8"
  },
  {
    id: "cv-016",
    title: "The Dark Knight",
    originalTitle: "The Dark Knight",
    year: 2008,
    releaseDate: "2008-07-18",
    industry: "Hollywood",
    genres: ["Action", "Crime", "Drama"],
    rating: 9.0,
    runtime: 152,
    certificate: "PG-13",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Maggie Gyllenhaal", "Gary Oldman", "Morgan Freeman"],
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    tagline: "Why so serious?",
    poster: "images/dark_knight.jpg",
    backdrop: "images/dark_knight.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    trailerEmbedId: "EXeTwQWrcwY",
    featured: false,
    themeColor: "#64748b"
  },
  {
    id: "cv-017",
    title: "Inception",
    originalTitle: "Inception",
    year: 2010,
    releaseDate: "2010-07-16",
    industry: "Hollywood",
    genres: ["Sci-Fi", "Action", "Adventure"],
    rating: 8.8,
    runtime: 148,
    certificate: "PG-13",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy", "Ken Watanabe"],
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the mission.",
    tagline: "Your mind is the scene of the crime.",
    poster: "images/inception.jpg",
    backdrop: "images/inception.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    trailerEmbedId: "YoHD9XEInc0",
    featured: false,
    themeColor: "#10b981"
  },
  {
    id: "cv-018",
    title: "Blade Runner 2049",
    originalTitle: "Blade Runner 2049",
    year: 2017,
    releaseDate: "2017-10-06",
    industry: "Hollywood",
    genres: ["Sci-Fi", "Mystery", "Drama"],
    rating: 8.0,
    runtime: 164,
    certificate: "R",
    director: "Denis Villeneuve",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas", "Sylvia Hoeks", "Robin Wright"],
    synopsis: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    tagline: "The key to the future is finally unearthed.",
    poster: "images/bladerunner2049.png",
    backdrop: "images/bladerunner2049.png",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png",
    trailerUrl: "https://www.youtube.com/watch?v=gCcx85zbxz4",
    trailerEmbedId: "gCcx85zbxz4",
    featured: false,
    themeColor: "#ec4899"
  },
  {
    id: "cv-019",
    title: "The Godfather",
    originalTitle: "The Godfather",
    year: 1972,
    releaseDate: "1972-03-24",
    industry: "Hollywood",
    genres: ["Crime", "Drama"],
    rating: 9.2,
    runtime: 175,
    certificate: "R",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall", "Diane Keaton"],
    synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    tagline: "An offer you can't refuse.",
    poster: "images/godfather.jpg",
    backdrop: "images/godfather.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=sY1S349gOnc",
    trailerEmbedId: "sY1S349gOnc",
    featured: false,
    themeColor: "#eab308"
  },
  {
    id: "cv-020",
    title: "Gladiator II",
    originalTitle: "Gladiator II",
    year: 2024,
    releaseDate: "2024-11-22",
    industry: "Hollywood",
    genres: ["Action", "Drama", "Adventure"],
    rating: 7.8,
    runtime: 148,
    certificate: "R",
    director: "Ridley Scott",
    cast: ["Paul Mescal", "Pedro Pascal", "Denzel Washington", "Connie Nielsen", "Joseph Quinn"],
    synopsis: "Years after witnessing the death of Maximus, Lucius must enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist.",
    tagline: "What we do in life echoes in eternity.",
    poster: "images/gladiator2.jpg",
    backdrop: "images/gladiator2.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/0/04/Gladiator_II_%282024%29_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=4rgYUipGJNo",
    trailerEmbedId: "4rgYUipGJNo",
    featured: false,
    themeColor: "#f59e0b"
  },
  {
    id: "cv-021",
    title: "3 Idiots",
    originalTitle: "3 Idiots",
    year: 2009,
    releaseDate: "2009-12-25",
    industry: "Hindi",
    genres: ["Comedy", "Drama"],
    rating: 8.5,
    runtime: 170,
    certificate: "UA",
    director: "Rajkumar Hirani",
    cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi", "Kareena Kapoor", "Boman Irani", "Omi Vaidya"],
    synopsis: "Two friends search for their long-lost companion Rancho while recounting their wild engineering college days and the eccentric philosopher friend who inspired them to think differently.",
    tagline: "All Izz Well.",
    poster: "images/3idiots.jpg",
    backdrop: "images/3idiots.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=K0eDlFX9GMc",
    trailerEmbedId: "K0eDlFX9GMc",
    featured: false,
    themeColor: "#eab308"
  },
  {
    id: "cv-022",
    title: "Dangal",
    originalTitle: "Dangal (दंगल)",
    year: 2016,
    releaseDate: "2016-12-23",
    industry: "Hindi",
    genres: ["Biography", "Drama", "Sports"],
    rating: 8.4,
    runtime: 161,
    certificate: "U",
    director: "Nitesh Tiwari",
    cast: ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra", "Sakshi Tanwar", "Aparshakti Khurana"],
    synopsis: "Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to become world-class wrestlers despite societal ridicule and patriarchal traditions, paving the way to Commonwealth gold.",
    tagline: "Are my girls any less than boys?",
    poster: "images/dangal.jpg",
    backdrop: "images/dangal.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=x_7YlGv9u1g",
    trailerEmbedId: "x_7YlGv9u1g",
    featured: false,
    themeColor: "#ea580c"
  },
  {
    id: "cv-023",
    title: "Gangs of Wasseypur",
    originalTitle: "Gangs of Wasseypur",
    year: 2012,
    releaseDate: "2012-06-22",
    industry: "Hindi",
    genres: ["Crime", "Action", "Drama"],
    rating: 8.2,
    runtime: 321,
    certificate: "A",
    director: "Anurag Kashyap",
    cast: ["Manoj Bajpayee", "Nawazuddin Siddiqui", "Richa Chadha", "Huma Qureshi", "Tigmanshu Dhulia"],
    synopsis: "A multi-generational blood clash between Sultan and Shahid Khan leads to an epic fifty-year saga of power, coal mafia supremacy, and vendetta in Dhanbad, Bihar.",
    tagline: "Sabka badla lega re tera Faizal.",
    poster: "images/wasseypur.jpg",
    backdrop: "images/wasseypur.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/6/6a/Gangs_of_Wasseypur_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=j-rV3A1x9v0",
    trailerEmbedId: "j-rV3A1x9v0",
    featured: false,
    themeColor: "#b91c1c"
  },
  {
    id: "cv-024",
    title: "Tumbbad",
    originalTitle: "Tumbbad (तुम्बाड)",
    year: 2018,
    releaseDate: "2018-10-12",
    industry: "Hindi",
    genres: ["Horror", "Fantasy", "Drama"],
    rating: 8.2,
    runtime: 104,
    certificate: "A",
    director: "Rahi Anil Barve",
    cast: ["Sohum Shah", "Jyoti Malshe", "Anita Date-Kelkar", "Ronjini Chakraborty", "Mohammad Samad"],
    synopsis: "A mythological story about a man's boundless greed and his obsession with digging gold from the womb of Hastar, a cursed god exiled to the underworld.",
    tagline: "Nature has enough for man's need, but not for man's greed.",
    poster: "images/tumbbad.jpg",
    backdrop: "images/tumbbad.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/4/41/Tumbbad_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=sN75MPxgvX8",
    trailerEmbedId: "sN75MPxgvX8",
    featured: false,
    themeColor: "#854d0e"
  },
  {
    id: "cv-025",
    title: "Andhadhun",
    originalTitle: "Andhadhun (अंधाधुन)",
    year: 2018,
    releaseDate: "2018-10-05",
    industry: "Hindi",
    genres: ["Crime", "Thriller", "Comedy"],
    rating: 8.2,
    runtime: 139,
    certificate: "UA",
    director: "Sriram Raghavan",
    cast: ["Ayushmann Khurrana", "Tabu", "Radhika Apte", "Anil Dhawan", "Zakir Hussain"],
    synopsis: "A series of mysterious events unfold in the life of a pianist who feigns blindness, as he unintentionally witnesses the murder of an aging film actor in a private apartment.",
    tagline: "He couldn't see... or could he?",
    poster: "images/andhadhun.jpg",
    backdrop: "images/andhadhun.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/4/47/Andhadhun_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=2iVYI99VGaw",
    trailerEmbedId: "2iVYI99VGaw",
    featured: false,
    themeColor: "#059669"
  },
  {
    id: "cv-026",
    title: "Jawan",
    originalTitle: "Jawan (जवान)",
    year: 2023,
    releaseDate: "2023-09-07",
    industry: "Hindi",
    genres: ["Action", "Thriller", "Drama"],
    rating: 7.6,
    runtime: 169,
    certificate: "UA",
    director: "Atlee",
    cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi", "Deepika Padukone", "Priyamani", "Sanya Malhotra"],
    synopsis: "A prison warden and vigilante squad hijack public infrastructure to force systemic government reforms and clear the tainted honor of a patriotic Indian commando.",
    tagline: "Ready chief?",
    poster: "images/jawan.jpg",
    backdrop: "images/jawan.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=COv52Qyctws",
    trailerEmbedId: "COv52Qyctws",
    featured: false,
    themeColor: "#b91c1c"
  },
  {
    id: "cv-027",
    title: "Stree 2",
    originalTitle: "Stree 2 (स्त्री 2)",
    year: 2024,
    releaseDate: "2024-08-15",
    industry: "Hindi",
    genres: ["Comedy", "Horror"],
    rating: 7.7,
    runtime: 147,
    certificate: "UA",
    director: "Amar Kaushik",
    cast: ["Rajkummar Rao", "Shraddha Kapoor", "Pankaj Tripathi", "Abhishek Banerjee", "Aparshakti Khurana"],
    synopsis: "The tranquil town of Chanderi is terrorized once again, this time by a headless entity named Sarkata. Vicky and his loyal friends must team up with Stree to save the women of their village.",
    tagline: "Aatank Ka Naya Roop.",
    poster: "images/stree2.jpg",
    backdrop: "images/stree2.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/a/a1/Stree_2.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=KVnhe0eA5v8",
    trailerEmbedId: "KVnhe0eA5v8",
    featured: false,
    themeColor: "#a855f7"
  },
  {
    id: "cv-028",
    title: "Parasite",
    originalTitle: "Gisaengchung (기생충)",
    year: 2019,
    releaseDate: "2019-05-30",
    industry: "World Cinema",
    genres: ["Drama", "Thriller", "Comedy"],
    rating: 8.5,
    runtime: 132,
    certificate: "R",
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik", "Park So-dam", "Lee Jung-eun"],
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan in modern Seoul.",
    tagline: "Act like you own the place.",
    poster: "images/parasite.png",
    backdrop: "images/parasite.png",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
    trailerUrl: "https://www.youtube.com/watch?v=5xH0R_330Mo",
    trailerEmbedId: "5xH0R_330Mo",
    featured: true,
    themeColor: "#14b8a6"
  },
  {
    id: "cv-029",
    title: "Spirited Away",
    originalTitle: "Sen to Chihiro no Kamikakushi (千と千尋の神隠し)",
    year: 2001,
    releaseDate: "2001-07-20",
    industry: "World Cinema",
    genres: ["Animation", "Adventure", "Fantasy"],
    rating: 8.6,
    runtime: 125,
    certificate: "PG",
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takashi Naito", "Yasuko Sawaguchi"],
    synopsis: "During her family's move to the suburbs, a somber 10-year-old girl wanders into an enchanting world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    tagline: "The tunnel led to a mysterious world.",
    poster: "images/spirited_away.png",
    backdrop: "images/spirited_away.png",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
    trailerUrl: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
    trailerEmbedId: "ByXuk9QqQkk",
    featured: false,
    themeColor: "#f43f5e"
  },
  {
    id: "cv-030",
    title: "Seven Samurai",
    originalTitle: "Shichinin no Samurai (七人の侍)",
    year: 1954,
    releaseDate: "1954-04-26",
    industry: "World Cinema",
    genres: ["Action", "Drama"],
    rating: 8.6,
    runtime: 207,
    certificate: "Not Rated",
    director: "Akira Kurosawa",
    cast: ["Toshirô Mifune", "Takashi Shimura", "Keiko Tsushima", "Yukiko Shimazaki", "Kamatori Fujiwara"],
    synopsis: "A poor village under attack by ruthless bandits recruits seven unemployed samurai to help defend them in sixteenth-century feudal Japan.",
    tagline: "The magnificent seven who defended honor.",
    poster: "images/seven_samurai.jpg",
    backdrop: "images/seven_samurai.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Seven_Samurai_poster2.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=wJ1TOratCTo",
    trailerEmbedId: "wJ1TOratCTo",
    featured: false,
    themeColor: "#94a3b8"
  },
  {
    id: "cv-031",
    title: "City of God",
    originalTitle: "Cidade de Deus",
    year: 2002,
    releaseDate: "2002-08-30",
    industry: "World Cinema",
    genres: ["Crime", "Drama"],
    rating: 8.6,
    runtime: 130,
    certificate: "R",
    director: "Fernando Meirelles, Kátia Lund",
    cast: ["Alexandre Rodrigues", "Leandro Firmino", "Phellipe Haagensen", "Douglas Silva", "Seu Jorge"],
    synopsis: "In the slums of Rio de Janeiro, two kids' paths diverge as one struggles to become a photographer and the other becomes a kingpin of violent crime.",
    tagline: "If you run away they get you, if you stay they get you.",
    poster: "images/city_of_god.jpg",
    backdrop: "images/city_of_god.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/1/10/CidadedeDeus.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=dcUOO4Itgmw",
    trailerEmbedId: "dcUOO4Itgmw",
    featured: false,
    themeColor: "#ea580c"
  },
  {
    id: "cv-032",
    title: "Pan's Labyrinth",
    originalTitle: "El laberinto del fauno",
    year: 2006,
    releaseDate: "2006-10-11",
    industry: "World Cinema",
    genres: ["Fantasy", "Drama", "War"],
    rating: 8.2,
    runtime: 118,
    certificate: "R",
    director: "Guillermo del Toro",
    cast: ["Ivana Baquero", "Sergi López", "Maribel Verdú", "Doug Jones", "Ariadna Gil"],
    synopsis: "In the falangist Spain of 1944, the young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world guarded by an ancient faun.",
    tagline: "Innocence has a power evil cannot imagine.",
    poster: "images/pans_labyrinth.jpg",
    backdrop: "images/pans_labyrinth.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/6/67/Pan%27s_Labyrinth.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=EqYiSlkvRuw",
    trailerEmbedId: "EqYiSlkvRuw",
    featured: false,
    themeColor: "#10b981"
  },
  {
    id: "cv-033",
    title: "Anatomy of a Fall",
    originalTitle: "Anatomie d'une chute",
    year: 2023,
    releaseDate: "2023-08-23",
    industry: "World Cinema",
    genres: ["Crime", "Drama", "Mystery"],
    rating: 7.7,
    runtime: 151,
    certificate: "R",
    director: "Justine Triet",
    cast: ["Sandra Hüller", "Swann Arlaud", "Milo Machado-Graner", "Antoine Reinartz", "Samuel Theis"],
    synopsis: "A woman is suspected of murder after her husband's fatal fall from their remote chalet, and the couple's blind son faces a moral dilemma as the main witness.",
    tagline: "Did he fall or was he pushed?",
    poster: "images/anatomy_fall.jpg",
    backdrop: "images/anatomy_fall.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/8/88/Anatomy_of_a_Fall_%282023%29_film_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=fTrsp5BMloA",
    trailerEmbedId: "fTrsp5BMloA",
    featured: false,
    themeColor: "#6366f1"
  },
  {
    id: "cv-034",
    title: "Oldboy",
    originalTitle: "Oldeuboi (올드보이)",
    year: 2003,
    releaseDate: "2003-11-21",
    industry: "World Cinema",
    genres: ["Action", "Drama", "Mystery"],
    rating: 8.4,
    runtime: 120,
    certificate: "R",
    director: "Park Chan-wook",
    cast: ["Choi Min-sik", "Yoo Ji-tae", "Kang Hye-jung", "Kim Byeong-ok", "Oh Dal-su"],
    synopsis: "After being kidnapped and imprisoned for fifteen years for unknown reasons, Oh Dae-su is released, only to find that he must find his captor in five days.",
    tagline: "15 years of imprisonment, 5 days of vengeance.",
    poster: "images/oldboy.jpg",
    backdrop: "images/oldboy.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=2HkjrJ6IK5E",
    trailerEmbedId: "2HkjrJ6IK5E",
    featured: false,
    themeColor: "#dc2626"
  },
  {
    id: "cv-035",
    title: "Godzilla Minus One",
    originalTitle: "Gojira Mainasu Wan (ゴジラ-1.0)",
    year: 2023,
    releaseDate: "2023-11-03",
    industry: "World Cinema",
    genres: ["Action", "Sci-Fi", "Drama"],
    rating: 8.3,
    runtime: 124,
    certificate: "PG-13",
    director: "Takashi Yamazaki",
    cast: ["Ryunosuke Kamiki", "Minami Hamabe", "Yuki Yamada", "Munetaka Aoki", "Hidetaka Yoshioka"],
    synopsis: "Post-war Japan is at its lowest point when a colossal radioactive monster emerges, plunging the devastated country from zero into negative territory.",
    tagline: "Survive and fight back.",
    poster: "images/godzilla.jpg",
    backdrop: "images/godzilla.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/e/e0/Godzilla_Minus_One_Poster.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=VvSrHIX5a-0",
    trailerEmbedId: "VvSrHIX5a-0",
    featured: false,
    themeColor: "#0284c7"
  },
  {
    id: "cv-036",
    title: "Scarface",
    originalTitle: "Scarface",
    year: 1983,
    releaseDate: "1983-12-09",
    industry: "Hollywood",
    genres: ["Crime", "Drama"],
    rating: 8.3,
    runtime: 170,
    certificate: "R",
    director: "Brian De Palma",
    cast: ["Al Pacino", "Michelle Pfeiffer", "Steven Bauer", "Robert Loggia", "Mary Elizabeth Mastrantonio", "F. Murray Abraham"],
    synopsis: "In 1980 Miami, a determined Cuban refugee named Tony Montana rises to the pinnacle of a ruthless cocaine empire fueled by boundless ambition and explosive violence. As betrayal, greed, and mounting paranoia close in, Montana's empire hurtles toward a legendary and blood-drenched climax.",
    tagline: "The World Is Yours.",
    poster: "images/scarface.jpg",
    backdrop: "images/scarface_backdrop.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/7/71/Scarface_-_1983_film.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=7pQQHnqBa2E",
    trailerEmbedId: "7pQQHnqBa2E",
    featured: true,
    themeColor: "#b91c1c"
  },
  {
    id: "cv-037",
    title: "Kushi",
    originalTitle: "Kushi (ఖుషి)",
    year: 2001,
    releaseDate: "2001-04-27",
    industry: "Telugu",
    genres: ["Romance", "Comedy", "Drama"],
    rating: 8.2,
    runtime: 174,
    certificate: "U",
    director: "S. J. Suryah",
    cast: ["Pawan Kalyan", "Bhumika Chawla", "Sivaji", "Ali", "Mumtaj", "Nassar"],
    synopsis: "Two headstrong college students with towering egos, Siddhu and Madhumitha, cross paths across Calcutta and Hyderabad. As they team up to unite their mutual friends in love, their own undeniable chemistry sparks an unforgettable whirlwind battle of pride, playful banter, and passionate romance.",
    tagline: "Yeh Mera Jaha — Love Beyond Ego.",
    poster: "images/kushi.jpg",
    backdrop: "images/kushi.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/2/27/Kushi_Theatrical_Poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=kY3h6b7yS50",
    trailerEmbedId: "kY3h6b7yS50",
    featured: true,
    themeColor: "#f59e0b"
  },
  {
    id: "cv-038",
    title: "Tholi Prema",
    originalTitle: "Tholi Prema (తొలిప్రేమ)",
    year: 1998,
    releaseDate: "1998-07-24",
    industry: "Telugu",
    genres: ["Romance", "Drama"],
    rating: 8.3,
    runtime: 153,
    certificate: "U",
    director: "A. Karunakaran",
    cast: ["Pawan Kalyan", "Keerthi Reddy", "Ali", "Venu Madhav", "Nagesh", "Achyuth"],
    synopsis: "Balu, a carefree young man, falls in love at first sight with Anu, an ambitious girl visiting India. Recognizing her dreams of studying at Harvard, Balu chooses to love her unconditionally from afar without burdening her, inspiring an unforgettable journey of selfless devotion and maturity.",
    tagline: "A Love That Blossomed in Pure Silence.",
    poster: "images/tholiprema.jpg",
    backdrop: "images/tholiprema.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/7/7d/Tholi_Prema.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=Fj2F5rTqXvE",
    trailerEmbedId: "Fj2F5rTqXvE",
    featured: true,
    themeColor: "#06b6d4"
  },
  {
    id: "cv-039",
    title: "The Good, the Bad and the Ugly",
    originalTitle: "Il buono, il brutto, il cattivo",
    year: 1966,
    releaseDate: "1966-12-23",
    industry: "Hollywood",
    genres: ["Western", "Adventure", "Action"],
    rating: 8.8,
    runtime: 178,
    certificate: "R",
    director: "Sergio Leone",
    cast: ["Clint Eastwood", "Lee Van Cleef", "Eli Wallach", "Aldo Giuffrè", "Luigi Pistilli"],
    synopsis: "During the chaos of the American Civil War, three cunning gunslingers—Blondie (The Good), Angel Eyes (The Bad), and Tuco (The Ugly)—race across the desert in an uneasy, treacherous alliance to find a buried cache of Confederate gold in a remote cemetery.",
    tagline: "For three men the Civil War wasn't hell. It was practice.",
    poster: "images/good_bad_ugly.jpg",
    backdrop: "images/good_bad_ugly.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/4/45/Good_the_bad_and_the_ugly_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=WCN5JJY_wiA",
    trailerEmbedId: "WCN5JJY_wiA",
    featured: true,
    themeColor: "#d97706"
  },
  {
    id: "cv-040",
    title: "A Fistful of Dollars",
    originalTitle: "Per un pugno di dollari",
    year: 1964,
    releaseDate: "1964-09-12",
    industry: "Hollywood",
    genres: ["Western", "Action", "Drama"],
    rating: 7.9,
    runtime: 99,
    certificate: "R",
    director: "Sergio Leone",
    cast: ["Clint Eastwood", "Gian Maria Volonté", "Marianne Koch", "Wolfgang Lukschy", "Sieghardt Rupp"],
    synopsis: "A wandering gunfighter with a poncho and a cigar arrives in the corrupt border town of San Miguel. Playing two feuding rival smuggling clans against each other with deadly cunning, he brings reckoning to the lawless territory.",
    tagline: "In his own way he is perhaps the most dangerous man who ever lived!",
    poster: "images/fistful_dollars.jpg",
    backdrop: "images/fistful_dollars.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/f/f0/Fistful-of-Dollars-poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=-X2DXTxS674",
    trailerEmbedId: "-X2DXTxS674",
    featured: false,
    themeColor: "#b45309"
  },
  {
    id: "cv-041",
    title: "Unforgiven",
    originalTitle: "Unforgiven",
    year: 1992,
    releaseDate: "1992-08-07",
    industry: "Hollywood",
    genres: ["Western", "Drama"],
    rating: 8.2,
    runtime: 130,
    certificate: "R",
    director: "Clint Eastwood",
    cast: ["Clint Eastwood", "Gene Hackman", "Morgan Freeman", "Richard Harris", "Jaimz Woolvett"],
    synopsis: "Aging retired gunslinger William Munny reluctantly takes on one last bounty job alongside his old partner Ned Logan. Clashing with the brutal sheriff Little Bill Daggett, Munny must confront the ruthless killer inside him he long tried to bury.",
    tagline: "It's a hell of a thing, killing a man.",
    poster: "images/unforgiven.jpg",
    backdrop: "images/unforgiven.jpg",
    onlinePoster: "https://upload.wikimedia.org/wikipedia/en/4/4e/Unforgiven_2.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=ftTX4FOwQVg",
    trailerEmbedId: "ftTX4FOwQVg",
    featured: false,
    themeColor: "#78716c"
  }
];

const INDUSTRIES = ["All", "Telugu", "Hollywood", "Hindi", "World Cinema"];

const GENRES = [
  "All",
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "History",
  "Horror",
  "Mystery",
  "Period",
  "Romance",
  "Sci-Fi",
  "Sports",
  "Thriller",
  "War",
  "Western"
];

/**
 * Generate a rich, cinematic SVG poster Data URL as a safety fallback.
 */
function generateFallbackPosterSVG(movie) {
  const title = (movie && movie.title) ? movie.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : 'CineVault Movie';
  const year = movie ? (movie.year || '') : '';
  const industry = movie ? (movie.industry || 'Cinema').toUpperCase() : 'CINEMA';
  const rating = movie && movie.rating ? movie.rating.toFixed(1) : '8.5';
  const director = movie && movie.director ? movie.director.replace(/&/g, '&amp;') : 'Cinema Master';
  const primaryGenre = (movie && movie.genres && movie.genres[0]) ? movie.genres[0].toUpperCase() : 'FEATURE';
  
  let gradientStart = '#171923';
  let gradientMid = '#0d1117';
  let accentColor = '#f59e0b';
  let badgeBg = 'rgba(245, 158, 11, 0.2)';
  
  if (movie && movie.industry === 'Telugu') {
    gradientStart = '#2a1215';
    gradientMid = '#120b0d';
    accentColor = '#ef4444';
    badgeBg = 'rgba(239, 68, 68, 0.25)';
  } else if (movie && movie.industry === 'Hollywood') {
    gradientStart = '#0f172a';
    gradientMid = '#080c14';
    accentColor = '#38bdf8';
    badgeBg = 'rgba(56, 189, 248, 0.25)';
  } else if (movie && movie.industry === 'Hindi') {
    gradientStart = '#24140b';
    gradientMid = '#120a06';
    accentColor = '#f97316';
    badgeBg = 'rgba(249, 115, 22, 0.25)';
  } else if (movie && movie.industry === 'World Cinema') {
    gradientStart = '#131f24';
    gradientMid = '#081014';
    accentColor = '#10b981';
    badgeBg = 'rgba(16, 185, 129, 0.25)';
  }

  const words = title.split(' ');
  let line1 = words.slice(0, 3).join(' ');
  let line2 = words.slice(3).join(' ');

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 750" width="500" height="750">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${gradientStart}" />
      <stop offset="60%" stop-color="${gradientMid}" />
      <stop offset="100%" stop-color="#05070a" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accentColor}" />
      <stop offset="100%" stop-color="${accentColor}88" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgGrad)" />
  <circle cx="250" cy="220" r="180" fill="${accentColor}" opacity="0.08" />
  <circle cx="400" cy="650" r="120" fill="${accentColor}" opacity="0.05" />

  <rect x="20" y="20" width="460" height="710" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" rx="16" />

  <rect x="40" y="45" width="100" height="26" rx="6" fill="${badgeBg}" stroke="${accentColor}" stroke-opacity="0.5" stroke-width="1"/>
  <text x="90" y="62" fill="${accentColor}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1.2">${industry}</text>

  <rect x="370" y="45" width="90" height="26" rx="6" fill="rgba(245,158,11,0.18)" stroke="#f59e0b" stroke-opacity="0.4" stroke-width="1"/>
  <text x="415" y="62" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">★ ${rating}</text>

  <g transform="translate(190, 160)">
    <rect x="0" y="0" width="120" height="85" rx="8" fill="#1e2433" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    <path d="M 0 25 L 120 25" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
    <polygon points="50,42 50,68 76,55" fill="${accentColor}"/>
  </g>

  <text x="250" y="360" fill="#ffffff" font-family="system-ui, sans-serif" font-size="${line2 ? '32' : '36'}" font-weight="800" text-anchor="middle">
    ${line1}
  </text>
  ${line2 ? `<text x="250" y="405" fill="#f1f5f9" font-family="system-ui, sans-serif" font-size="28" font-weight="700" text-anchor="middle">${line2}</text>` : ''}

  <rect x="180" y="440" width="140" height="3" rx="1.5" fill="url(#accentGrad)" />

  <text x="250" y="480" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle" letter-spacing="2">
    ${primaryGenre} • ${year}
  </text>

  <text x="250" y="550" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="15" font-weight="600" text-anchor="middle">
    ${director}
  </text>
</svg>
`.trim();

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/**
 * Generate a wide 16:9 cinematic backdrop SVG fallback for hero and modal headers.
 */
function generateFallbackBackdropSVG(movie) {
  const title = (movie && movie.title) ? movie.title.replace(/&/g, '&amp;') : 'CineVault';
  const tagline = (movie && movie.tagline) ? movie.tagline.replace(/&/g, '&amp;') : 'Cinema Redefined.';
  const year = movie ? (movie.year || '') : '';
  const industry = movie ? (movie.industry || 'Telugu') : 'Telugu';
  const director = movie && movie.director ? movie.director.replace(/&/g, '&amp;') : '';
  
  let accent = '#e5a93b';
  let gradA = '#1c1308';
  let gradB = '#090a0f';
  if (movie && movie.themeColor) {
    accent = movie.themeColor;
  }

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <radialGradient id="heroRadial" cx="65%" cy="35%" r="70%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.35"/>
      <stop offset="45%" stop-color="${gradA}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="${gradB}" stop-opacity="0.98"/>
    </radialGradient>
    <linearGradient id="overlayFade" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="60%" stop-color="transparent"/>
      <stop offset="100%" stop-color="#080b11"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="#080b11"/>
  <rect width="100%" height="100%" fill="url(#heroRadial)"/>
  <rect width="100%" height="100%" fill="url(#overlayFade)"/>

  <text x="120" y="460" fill="${accent}" font-family="system-ui, sans-serif" font-size="28" font-weight="700" letter-spacing="4">
    FEATURED • ${industry.toUpperCase()} • ${year}
  </text>
  <text x="120" y="570" fill="#ffffff" font-family="system-ui, sans-serif" font-size="82" font-weight="900" letter-spacing="-1">
    ${title}
  </text>
  <text x="120" y="650" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="32" font-style="italic" font-weight="400">
    "${tagline}"
  </text>
  ${director ? `<text x="120" y="720" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="22" font-weight="600">Directed by ${director}</text>` : ''}
</svg>
`.trim();

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// Attach to window object for clean accessibility across vanilla JS modules
if (typeof window !== "undefined") {
  window.CURATED_MOVIES = CURATED_MOVIES;
  window.INDUSTRIES = INDUSTRIES;
  window.GENRES = GENRES;
  window.generateFallbackPosterSVG = generateFallbackPosterSVG;
  window.generateFallbackBackdropSVG = generateFallbackBackdropSVG;
}
