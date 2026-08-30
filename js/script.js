// =========================
// DESTINATION FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const destinationCards = document.querySelectorAll(".destination-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active state
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active state
        button.classList.add("active");

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

        image: "images/Banke-Bihari.jpg",

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
    }

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
        factKnown.textContent = place.known;
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
    }


    // HIGHLIGHTS

    const highlightGrid =
        document.getElementById("highlight-grid");

    if (highlightGrid) {

        highlightGrid.innerHTML = "";

        place.highlights.forEach(item => {

            const card = document.createElement("article");

            card.className = "highlight-card";

            card.innerHTML = `
                <h3>${item[0]}</h3>
                <p>${item[1]}</p>
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