// =========================
// DESTINATION FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const destinationCards = document.querySelectorAll(".destination-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Keep the filter state accessible to assistive technology.
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
            btn.setAttribute("aria-selected", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-selected", "true");

        const selectedFilter = button.dataset.filter;

        destinationCards.forEach(card => {

            const category = card.dataset.category;

            if (selectedFilter === "all" || category === selectedFilter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

// =========================
// VRINDAVAN PLACE DETAILS
// =========================

const vrindavanPlaces = {

    "banke-bihari": {
        title: "Banke Bihari",
        location: "VRINDAVAN • UTTAR PRADESH",
        description:
            "Visit one of Vrindavan's most famous temples and experience its vibrant devotional atmosphere.",

        aboutTitle: "A temple of deep devotion.",
        aboutDescription:
            "Banke Bihari Temple is one of the most important pilgrimage destinations in Vrindavan and is closely associated with the worship of Lord Krishna.",

        image: "images/Mathura.jpg",

        known: "Krishna Temple",
        experience: "Devotion & Culture",
        bestTime: "Oct – Mar",

        highlights: [
            ["🛕 Temple Heritage", "Explore the traditions and spiritual heritage associated with this famous Vrindavan temple."],
            ["🙏 Devotional Atmosphere", "Experience prayers, devotional singing and the lively atmosphere around the temple."],
            ["🎉 Festivals", "Festivals and special occasions bring a vibrant atmosphere to the surrounding area."],
            ["📸 Vrindavan Streets", "Explore the historic lanes and local culture around the temple."]
        ],

        reach:
            "Vrindavan is well connected by road from Mathura and other nearby cities.",

        time:
            "October to March is generally comfortable for exploring Vrindavan.",

        tips:
            "Dress respectfully and follow the temple's photography and visitor guidelines.",

        nearby:
            "Prem Mandir, ISKCON Temple and Nidhivan."
    },


    "prem-mandir": {
        title: "Prem Mandir",
        location: "VRINDAVAN • UTTAR PRADESH",
        description:
            "Discover the beautifully designed Prem Mandir, known for its architecture, gardens and illuminated evenings.",

        aboutTitle: "A celebration of love and devotion.",
        aboutDescription:
            "Prem Mandir is a prominent temple complex in Vrindavan known for its detailed architecture, landscaped gardens and devotional atmosphere.",

        image: "images/Prem-Mandir.jpg",

        known: "Temple Architecture",
        experience: "Architecture & Gardens",
        bestTime: "Oct – Mar",

        highlights: [
            ["🏛️ Architecture", "Admire the detailed design and decorative elements of the temple complex."],
            ["🌸 Gardens", "Walk through the landscaped surroundings and enjoy the peaceful environment."],
            ["✨ Evening View", "The temple becomes especially attractive when illuminated in the evening."],
            ["📸 Photography", "The architecture and surrounding gardens offer memorable views."]
        ],

        reach:
            "Prem Mandir is easily accessible by road within Vrindavan.",

        time:
            "October to March generally provides comfortable weather for visiting.",

        tips:
            "Follow visitor guidelines and be respectful of the religious environment.",

        nearby:
            "ISKCON Temple, Banke Bihari Temple and Nidhivan."
    },


    "iskcon": {
        title: "ISKCON Temple",
        location: "VRINDAVAN • UTTAR PRADESH",
        description:
            "Experience devotional music, chanting and a peaceful spiritual environment at the ISKCON temple in Vrindavan.",

        aboutTitle: "A vibrant centre of devotion.",
        aboutDescription:
            "The ISKCON temple in Vrindavan is a popular spiritual destination known for its devotional activities, chanting and international visitor community.",

        image: "images/ISKCON-Vrindavan.jpg",

        known: "Spiritual Centre",
        experience: "Kirtan & Devotion",
        bestTime: "Oct – Mar",

        highlights: [
            ["🎵 Kirtan", "Experience devotional music and chanting in a lively spiritual setting."],
            ["🙏 Spiritual Experience", "Spend time in the peaceful temple environment and observe devotional traditions."],
            ["🌍 Global Community", "The temple attracts visitors and devotees from many parts of the world."],
            ["🛕 Temple Heritage", "Explore one of Vrindavan's well-known modern pilgrimage landmarks."]
        ],

        reach:
            "The temple is easily accessible by road from different parts of Vrindavan.",

        time:
            "October to March is generally comfortable for sightseeing.",

        tips:
            "Maintain a respectful atmosphere and follow the temple's visitor guidelines.",

        nearby:
            "Prem Mandir, Banke Bihari Temple and Nidhivan."
    },


    "nidhivan": {
        title: "Nidhivan",
        location: "VRINDAVAN • UTTAR PRADESH",
        description:
            "Explore the sacred grove of Nidhivan, surrounded by traditions and stories deeply connected with Vrindavan.",

        aboutTitle: "A sacred grove of Vrindavan.",
        aboutDescription:
            "Nidhivan is a significant sacred site in Vrindavan surrounded by local religious traditions and stories associated with Radha and Krishna.",

        image: "images/Nidhivan.jpg",

        known: "Sacred Grove",
        experience: "Spiritual Heritage",
        bestTime: "Oct – Mar",

        highlights: [
            ["🌿 Sacred Grove", "Explore the distinctive natural surroundings of this important spiritual site."],
            ["🙏 Local Traditions", "Learn about the traditions and beliefs associated with Nidhivan."],
            ["🛕 Spiritual Heritage", "Discover another important part of Vrindavan's pilgrimage landscape."],
            ["📖 Stories", "The site is surrounded by traditional stories connected with Radha and Krishna."]
        ],

        reach:
            "Nidhivan is located within Vrindavan and can be reached by local road transport.",

        time:
            "October to March generally offers more comfortable weather.",

        tips:
            "Follow local customs, respect the sacred environment and obey site instructions.",

        nearby:
            "Banke Bihari Temple, Prem Mandir and ISKCON Temple."
    },

    "krishna-janmabhoomi": {
    title: "Krishna Janmabhoomi",
    location: "MATHURA • UTTAR PRADESH",

    description:
        "Explore the sacred birthplace of Lord Krishna and discover the spiritual and cultural heritage of Mathura.",

    aboutTitle:
        "The sacred birthplace of Lord Krishna.",

    aboutDescription:
        "Krishna Janmabhoomi is one of Mathura's most important pilgrimage sites and is traditionally associated with the birthplace of Lord Krishna.",

    image: "images/Krishna-Janmabhoomi.jpg",

    known: "Krishna's Birthplace",
    experience: "Spiritual & Cultural",
    bestTime: "Oct – Mar",

    highlights: [
        [
            "🛕 Sacred Heritage",
            "Explore one of the most important pilgrimage sites associated with Lord Krishna."
        ],

        [
            "🙏 Spiritual Experience",
            "Experience the devotional atmosphere and rich religious traditions of Mathura."
        ],

        [
            "📖 Ancient History",
            "Discover the historical and cultural significance of Mathura and Krishna Janmabhoomi."
        ],

        [
            "📸 Mathura Culture",
            "Explore the surrounding streets, temples and cultural heritage of Mathura."
        ]
    ],

    reach:
        "Mathura is well connected by railway and road from major North Indian cities.",

    time:
        "October to March generally offers comfortable weather for exploring Mathura.",

    tips:
        "Dress respectfully and follow the site's visitor and security guidelines.",

    nearby:
        "Dwarkadhish Temple, Vishram Ghat and other major Mathura attractions."
},

"dwarkadhish": {
    title: "Dwarkadhish Temple",
    location: "MATHURA • UTTAR PRADESH",

    description:
        "Explore the historic Dwarkadhish Temple, known for its beautiful architecture, colourful traditions and devotional atmosphere.",

    aboutTitle: "A historic temple of devotion.",
    aboutDescription:
        "Dwarkadhish Temple is one of the important temples of Mathura, known for its religious significance, traditional architecture and vibrant festivals.",

    image: "images/Dwarkadhish.jpg",

    known: "Historic Temple",
    experience: "Devotion & Culture",
    bestTime: "Oct – Mar",

    highlights: [
        ["🛕 Temple Heritage", "Explore the history and religious traditions associated with Dwarkadhish Temple."],
        ["🙏 Devotional Atmosphere", "Experience the vibrant devotional environment around the temple."],
        ["🎉 Festivals", "The temple is known for colourful celebrations and religious festivals."],
        ["📸 Architecture", "Admire the traditional architecture and details of this historic temple."]
    ],

    reach:
        "Dwarkadhish Temple is located in Mathura and is easily accessible by local road transport.",

    time:
        "October to March generally offers more comfortable weather for exploring Mathura.",

    tips:
        "Dress respectfully and follow the temple's visitor guidelines.",

    nearby:
        "Krishna Janmabhoomi, Vishram Ghat and other historic sites of Mathura."
},

"vishram-ghat": {
    title: "Vishram Ghat",
    location: "MATHURA • UTTAR PRADESH",

    description:
        "Visit the historic Vishram Ghat, a peaceful riverside destination on the banks of the Yamuna in Mathura.",

    aboutTitle: "A peaceful riverside landmark.",

    aboutDescription:
        "Vishram Ghat is one of the most important ghats of Mathura, situated along the Yamuna and associated with the city's rich religious and cultural heritage.",

    image: "images/Vishram-Ghat.jpg",

    known: "Yamuna Ghat",
    experience: "Spiritual & Cultural",
    bestTime: "Oct – Mar",

    highlights: [
        [
            "🌊 Yamuna River",
            "Enjoy the peaceful riverside setting along the sacred Yamuna."
        ],

        [
            "🪔 Evening Aarti",
            "Experience the devotional atmosphere during evening prayers and aarti."
        ],

        [
            "🏛️ Historic Heritage",
            "Discover one of Mathura's best-known historic riverside landmarks."
        ],

        [
            "📸 Riverside Views",
            "Capture beautiful views of the ghat, river and surrounding architecture."
        ]
    ],

    reach:
        "Vishram Ghat is located in the heart of Mathura and is easily accessible by local transport.",

    time:
        "October to March generally offers comfortable weather for exploring Mathura.",

    tips:
        "Respect the religious environment and follow local guidelines around the ghat.",

    nearby:
        "Krishna Janmabhoomi, Dwarkadhish Temple and other historic Mathura attractions."
},

"govardhan": {
    title: "Govardhan",
    location: "MATHURA • UTTAR PRADESH",

    description:
        "Explore Govardhan, a sacred pilgrimage destination known for Govardhan Hill and its deep connection with the traditions of Lord Krishna.",

    aboutTitle: "A sacred landscape of Krishna's traditions.",

    aboutDescription:
        "Govardhan is an important pilgrimage destination near Mathura, associated with Govardhan Hill and the devotional traditions surrounding Lord Krishna.",

    image: "images/Govardhan.jpg",

    known: "Sacred Hill",
    experience: "Pilgrimage & Nature",
    bestTime: "Oct – Mar",

    highlights: [
        [
            "⛰️ Govardhan Hill",
            "Explore the sacred hill that holds an important place in Krishna traditions."
        ],

        [
            "🙏 Spiritual Journey",
            "Experience the devotional atmosphere of one of the major pilgrimage areas around Mathura."
        ],

        [
            "🚶 Govardhan Parikrama",
            "Discover the traditional pilgrimage route followed by devotees around Govardhan Hill."
        ],

        [
            "🌿 Natural Surroundings",
            "Enjoy the distinctive landscape and peaceful surroundings of the Govardhan area."
        ]
    ],

    reach:
        "Govardhan is located near Mathura and can be reached by road using local buses, taxis or other transport.",

    time:
        "October to March generally offers more comfortable weather for exploring the area.",

    tips:
        "Carry comfortable footwear and water, especially if exploring the pilgrimage route.",

    nearby:
        "Mathura, Vrindavan and other important pilgrimage destinations of Braj."
},

"jaipur": {
    title: "Jaipur",
    location: "JAIPUR • RAJASTHAN",

    description:
        "Explore the royal city of Jaipur, famous for magnificent palaces, historic forts and vibrant Rajasthani culture.",

    aboutTitle:
        "The Pink City of India.",

    aboutDescription:
        "Jaipur is known for its grand architecture, royal heritage, colourful markets and iconic landmarks.",

     knownFor: "Royal Heritage",
    experience: "Culture & Architecture",
    bestTime: "October to March",
    image: "images/Hawa-Mahal.jpg",

    highlights: [
        ["🏰", "Royal Heritage", "Discover magnificent forts, palaces and the rich history of Jaipur."],
        ["🌸", "Pink City", "Experience Jaipur's famous pink-coloured architecture and lively streets."],
        ["🎨", "Culture", "Explore traditional crafts, colourful markets and Rajasthani culture."],
        ["🛍️", "Colourful Markets", "Explore Jaipur's vibrant bazaars and discover traditional handicrafts, textiles and jewellery."]
],
    

    reach:
        "Jaipur is well connected by air, railway and road with major cities across India.",

    time:
        "October to March generally offers pleasant weather for exploring Jaipur.",

    tips:
        "Wear comfortable shoes, stay hydrated and explore local markets for traditional handicrafts.",

    nearby:
        "Amber Fort, City Palace, Jantar Mantar and Jal Mahal."
},

"agra": {
    title: "Agra",
    location: "AGRA • UTTAR PRADESH",

    description:
        "Explore the historic city of Agra, home to the iconic Taj Mahal and magnificent Mughal heritage.",

    aboutTitle:
        "The city of timeless monuments.",

    aboutDescription:
        "Agra is one of India's most famous heritage destinations, known for the Taj Mahal, Agra Fort and its rich Mughal history.",

    knownFor: "Taj Mahal & Mughal Heritage",
    experience: "History & Architecture",
    bestTime: "October to March",
    image: "images/Taj-Mahal.jpg",

    highlights: [
        ["🕌", "Taj Mahal", "Marvel at the world-famous monument of love and its stunning architecture."],
        ["🏰", "Agra Fort", "Explore the magnificent red sandstone fort built during the Mughal era."],
        ["🏛️", "Mughal Heritage", "Discover the history, architecture and culture of the Mughal period."],
        ["🌅", "Mehtab Bagh", "Enjoy beautiful views of the Taj Mahal from the peaceful gardens across the Yamuna."]
    ],

    reach:
        "Agra is well connected by road and railway and can be easily reached from Delhi and other major cities.",

    time:
        "October to March generally offers pleasant weather for exploring Agra.",

    tips:
        "Visit the Taj Mahal early in the morning, carry comfortable footwear and check monument entry timings.",

    nearby:
        "Agra Fort, Mehtab Bagh, Itmad-ud-Daulah and Fatehpur Sikri."
},

"kerala": {
    title: "Kerala",
    location: "KERALA • INDIA",

    description:
        "Discover Kerala, a beautiful destination known for peaceful backwaters, lush landscapes, beaches and rich cultural traditions.",

    aboutTitle:
        "God's Own Country.",

    aboutDescription:
        "Kerala is famous for its scenic backwaters, green landscapes, traditional culture and beautiful coastal destinations.",
    
    knownFor: "Backwaters and Nature",

    experience: "Peaceful Backwaters",

    bestTime: "October to March",
    image: "images/Kerala.jpg",

    highlights: [
        ["🌴", "Backwaters", "Experience Kerala's peaceful waterways surrounded by lush green landscapes."],
        ["🏞️", "Hill Stations", "Explore beautiful destinations such as Munnar and the Western Ghats."],
        ["🏖️", "Beaches", "Relax at Kerala's scenic coastline and peaceful beaches."],
        ["🎭", "Culture", "Discover traditional art, food and cultural experiences of Kerala."]
    ],

    reach:
        "Kerala is well connected by air, railway and road with major cities across India.",

    time:
        "October to March generally offers pleasant weather for exploring Kerala.",

    tips:
        "Carry comfortable clothing, stay hydrated and plan your destinations according to the season.",

    nearby:
        "Munnar, Alleppey, Kochi, Thekkady and Kovalam."
},


"manali":{title:"Manali",location:"MANALI • HIMACHAL PRADESH",description:"A Himalayan escape of snow-capped peaks, green valleys, rivers and unforgettable mountain adventures.",aboutTitle:"Where the mountains slow you down.",aboutDescription:"Manali is a popular Himalayan destination known for dramatic landscapes, outdoor activities and nearby mountain valleys.",image:"https://images.unsplash.com/photo-1685795361557-7842f41c8977?auto=format&fit=crop&w=1600&q=82",knownFor:"Himalayan Landscapes",experience:"Mountains & Adventure",bestTime:"October – June",highlights:[["🏔️ Mountain Views","Wake up to dramatic Himalayan scenery and peaceful valleys."],["🥾 Outdoor Adventure","Choose from trekking, river activities and seasonal experiences."],["🌲 Solang Valley","Explore a scenic valley known for mountain views and outdoor activities."],["☕ Old Manali","Discover cafés, local culture and a relaxed mountain-town atmosphere."]],reach:"Manali is primarily accessed by road from Chandigarh, Delhi and nearby Himachal towns.",time:"Choose the season based on whether you prefer snow or greener mountain landscapes.",tips:"Check road and weather conditions before travelling and carry layers for changing temperatures.",nearby:"Solang Valley, Old Manali, Rohtang region and Hidimba Devi Temple."},
"shimla":{title:"Shimla",location:"SHIMLA • HIMACHAL PRADESH",description:"A charming hill destination blending pine forests, colonial-era architecture and sweeping Himalayan views.",aboutTitle:"A classic Himalayan escape.",aboutDescription:"Shimla is known for historic streets, mountain scenery, cool climate and colonial-era character.",image:"https://images.unsplash.com/photo-1657894736555-6f39d2b182e8?auto=format&fit=crop&w=1600&q=82",knownFor:"Hill Station Heritage",experience:"Hills & Culture",bestTime:"March – June",highlights:[["🏔️ Himalayan Views","Enjoy panoramic mountain scenery from viewpoints around the city."],["🏛️ Colonial Heritage","Walk through historic streets and distinctive architecture."],["🌲 Pine Forests","Escape into quiet green landscapes surrounding Shimla."],["🚶 The Ridge","Experience the lively centre of Shimla's pedestrian area and views."]],reach:"Shimla is connected by road and rail, with nearby airport access through the region.",time:"March to June is popular for pleasant weather; winter brings colder conditions and possible snow.",tips:"Wear comfortable shoes for steep streets and check weather before travelling.",nearby:"Kufri, The Ridge, Mall Road and Jakhoo Temple."},
"mussoorie":{title:"Mussoorie",location:"MUSSOORIE • UTTARAKHAND",description:"A peaceful Himalayan hill escape surrounded by misty landscapes, forests and scenic viewpoints.",aboutTitle:"The queen of the hills.",aboutDescription:"Mussoorie combines mountain scenery, forest walks, viewpoints and a lively hill-station atmosphere.",image:"https://images.unsplash.com/photo-1651307098281-b357047cbcff?auto=format&fit=crop&w=1600&q=82",knownFor:"Himalayan Hill Station",experience:"Nature & Slow Travel",bestTime:"March – June",highlights:[["🌄 Scenic Viewpoints","Take in wide mountain views from the city's many overlooks."],["🌲 Forest Walks","Explore peaceful paths through the surrounding Himalayan forests."],["🚶 Mall Road","Enjoy the classic hill-station centre with shops and cafés."],["💧 Kempty Falls","Visit a popular waterfall destination near Mussoorie."]],reach:"Mussoorie is reached by road from Dehradun and other nearby cities.",time:"March to June is generally pleasant; monsoon brings lush scenery but wetter conditions.",tips:"Carry a light jacket and comfortable walking shoes; roads can be winding.",nearby:"Landour, Kempty Falls, Camel's Back Road and Lal Tibba."},
"varanasi":{title:"Varanasi",location:"VARANASI • UTTAR PRADESH",description:"Experience ancient ghats, the Ganga and a living cultural landscape shaped by centuries of tradition.",aboutTitle:"A city where the river tells the story.",aboutDescription:"Varanasi is one of India's most historic cities, celebrated for its ghats, riverfront rituals, music, food and living traditions.",image:"images/Varanasi.jpg",knownFor:"Ghats & Ganga",experience:"Culture & Spirituality",bestTime:"October – March",highlights:[["🌊 Ganga Ghats","Walk along a riverfront lined with historic ghats and daily life."],["🪔 Evening Aarti","Witness a powerful evening ritual on the riverfront."],["🏛️ Old City","Explore narrow lanes filled with food, crafts and cultural landmarks."],["📸 Sunrise on the Ganga","Early mornings offer a memorable perspective on the river and city."]],reach:"Varanasi has an airport and major railway connections, with road links to surrounding cities.",time:"October to March generally offers more comfortable sightseeing weather.",tips:"Respect local customs, stay aware in crowded lanes and use authorised transport and guides.",nearby:"Sarnath, Dashashwamedh Ghat, Assi Ghat and the old city."},
};


// =========================
// LOAD PLACE DETAILS
// =========================

const params = new URLSearchParams(window.location.search);
const placeKey = params.get("place");

if (placeKey && vrindavanPlaces[placeKey]) {

    const place = vrindavanPlaces[placeKey];

    document.title = `${place.title} | WanderIndia`;

    const placeTitle = document.getElementById("place-title");
    const placeLocation = document.getElementById("place-location");
    const placeDescription = document.getElementById("place-description");

    const aboutTitle = document.getElementById("about-title");
    const aboutDescription = document.getElementById("about-description");

    const factLocation = document.getElementById("fact-location");
    const factKnown = document.getElementById("fact-known");
    const factExperience = document.getElementById("fact-experience");
    const factTime = document.getElementById("fact-time");

    if (placeTitle) {
        placeTitle.innerHTML = `${place.title}<em>.</em>`;
    }

    if (placeLocation) {
        placeLocation.textContent = place.location;
    }

    if (placeDescription) {
        placeDescription.textContent = place.description;
    }

    if (aboutTitle) {
        aboutTitle.innerHTML = place.aboutTitle;
    }

    if (aboutDescription) {
        aboutDescription.textContent = place.aboutDescription;
    }

    if (factLocation) {
        factLocation.textContent = place.location
            .replace("VRINDAVAN • ", "");
    }

    if (factKnown) {
        factKnown.textContent = place.knownFor || place.known;
    }

    if (factExperience) {
        factExperience.textContent = place.experience;
    }

    if (factTime) {
        factTime.textContent = place.bestTime;
    }


    // HERO IMAGE

    const hero = document.querySelector(".dynamic-place-hero");

    if (hero) {
        hero.style.backgroundImage =
            `linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.62)),
             url("${place.image}")`;
        
        hero.style.backgroundSize = "cover";
        hero.style.backgroundPosition = "center center";
    }


    // HIGHLIGHTS

    const highlightGrid =
        document.getElementById("highlight-grid");

    if (highlightGrid) {

        highlightGrid.innerHTML = "";

        place.highlights.forEach(item => {

            const card = document.createElement("article");

            card.className = "highlight-card";

            const heading = item.length === 3 ? `${item[0]} ${item[1]}` : item[0];
            const description = item.length === 3 ? item[2] : item[1];

            card.innerHTML = `
                <h3>${heading}</h3>
                <p>${description}</p>
            `;

            highlightGrid.appendChild(card);
        });
    }


    // TRAVEL INFORMATION

    const travelReach =
        document.getElementById("travel-reach");

    const travelTime =
        document.getElementById("travel-time");

    const travelTips =
        document.getElementById("travel-tips");

    const travelNearby =
        document.getElementById("travel-nearby");

    if (travelReach) {
        travelReach.textContent = place.reach;
    }

    if (travelTime) {
        travelTime.textContent = place.time;
    }

    if (travelTips) {
        travelTips.textContent = place.tips;
    }

    if (travelNearby) {
        travelNearby.textContent = place.nearby;
    }
}

// =========================
// POLISHED NAVIGATION
// =========================
const menuToggle=document.getElementById("menu-toggle");
const siteNav=document.getElementById("site-nav");
if(menuToggle&&siteNav){menuToggle.addEventListener("click",()=>{const open=siteNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.textContent=open?"×":"☰"});siteNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{siteNav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰"}));}
const navbar=document.querySelector(".navbar");const syncNav=()=>navbar?.classList.toggle("scrolled",window.scrollY>24);syncNav();window.addEventListener("scroll",syncNav,{passive:true});
