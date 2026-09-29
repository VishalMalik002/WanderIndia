const filterButtons=document.querySelectorAll(".filter-btn");
const destinationCards=document.querySelectorAll(".destination-card");
filterButtons.forEach(button=>button.addEventListener("click",()=>{
  filterButtons.forEach(btn=>btn.classList.remove("active"));
  button.classList.add("active");
  const selected=button.dataset.filter;
  destinationCards.forEach(card=>{
    const show=selected==="all"||card.dataset.category===selected;
    card.hidden=!show;
  });
}));

const menuToggle=document.getElementById("menu-toggle");
const siteNav=document.getElementById("site-nav");
if(menuToggle&&siteNav){
  menuToggle.addEventListener("click",()=>{
    const open=siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded",String(open));
    menuToggle.setAttribute("aria-label",open?"Close menu":"Open menu");
    menuToggle.textContent=open?"×":"☰";
  });
  siteNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded","false");
    menuToggle.setAttribute("aria-label","Open menu");
    menuToggle.textContent="☰";
  }));
}

const navbar=document.querySelector(".navbar");
const syncNav=()=>navbar?.classList.toggle("scrolled",window.scrollY>24);
syncNav();
window.addEventListener("scroll",syncNav,{passive:true});

// Dynamic destination data used by place.html.
const places={
  "agra":{title:"Agra",location:"AGRA • UTTAR PRADESH",description:"Explore the historic city of Agra, home to the iconic Taj Mahal and magnificent Mughal heritage.",aboutTitle:"The city of timeless monuments.",aboutDescription:"Agra is one of India's most famous heritage destinations, known for the Taj Mahal, Agra Fort and its rich Mughal history.",image:"images/Taj-Mahal.jpg",knownFor:"Taj Mahal & Mughal Heritage",experience:"History & Architecture",bestTime:"October – March",highlights:[["🕌 Taj Mahal","Marvel at the world-famous monument of love and its stunning architecture."],["🏰 Agra Fort","Explore the magnificent red sandstone fort and its Mughal history."],["🏛️ Mughal Heritage","Discover architecture, stories and culture from Agra's historic era."],["🌅 Mehtab Bagh","Enjoy beautiful views of the Taj Mahal from across the Yamuna."]],reach:"Agra is well connected by road and railway and can be reached easily from Delhi and other major cities.",time:"October to March generally offers pleasant weather for exploring Agra.",tips:"Visit major monuments early, wear comfortable footwear and check official entry timings.",nearby:"Agra Fort, Mehtab Bagh, Itmad-ud-Daulah and Fatehpur Sikri."},
  "kerala":{title:"Kerala",location:"KERALA • INDIA",description:"Discover Kerala, known for peaceful backwaters, lush landscapes, beaches and rich cultural traditions.",aboutTitle:"God's Own Country.",aboutDescription:"Kerala is famous for scenic backwaters, green landscapes, traditional culture and beautiful coastal destinations.",image:"images/Kerala.jpg",knownFor:"Backwaters & Nature",experience:"Peaceful Escapes",bestTime:"October – March",highlights:[["🌴 Backwaters","Experience peaceful waterways surrounded by lush green landscapes."],["🏞️ Hill Stations","Explore destinations such as Munnar and the Western Ghats."],["🏖️ Beaches","Relax along Kerala's scenic coastline and peaceful beaches."],["🎭 Culture","Discover traditional art, food and cultural experiences."]],reach:"Kerala is well connected by air, railway and road with major cities across India.",time:"October to March is a popular period for comfortable sightseeing.",tips:"Plan coastal and hill destinations around weather, carry comfortable clothing and stay hydrated.",nearby:"Munnar, Alleppey, Kochi, Thekkady and Kovalam."},
  "manali":{title:"Manali",location:"HIMACHAL PRADESH • INDIA",description:"A Himalayan escape of snow-capped peaks, green valleys, rivers and unforgettable mountain adventures.",aboutTitle:"Where the mountains slow you down.",aboutDescription:"Manali is a popular Himalayan destination known for dramatic landscapes, outdoor activities and nearby mountain valleys.",image:"images/Manali.jpg",knownFor:"Himalayan Landscapes",experience:"Mountains & Adventure",bestTime:"October – June",highlights:[["🏔️ Mountain Views","Wake up to dramatic Himalayan scenery and peaceful valleys."],["🥾 Outdoor Adventure","Choose from trekking, river activities and other seasonal experiences."],["🌲 Solang Valley","Explore a scenic valley known for mountain views and outdoor activities."],["☕ Old Manali","Discover cafés, local culture and a relaxed mountain-town atmosphere."]],reach:"Manali is primarily accessed by road from Chandigarh, Delhi and nearby Himachal towns.",time:"Choose the season based on whether you prefer snow or greener mountain landscapes.",tips:"Check road and weather conditions before travelling and carry layers for changing temperatures.",nearby:"Solang Valley, Old Manali, Rohtang region and Hidimba Devi Temple."},
  "shimla":{title:"Shimla",location:"HIMACHAL PRADESH • INDIA",description:"A charming hill destination blending pine forests, colonial-era architecture and sweeping Himalayan views.",aboutTitle:"A classic Himalayan escape.",aboutDescription:"Shimla is known for its historic streets, mountain scenery, cool climate and colonial-era character.",image:"images/Shimla.jpg",knownFor:"Hill Station Heritage",experience:"Hills & Culture",bestTime:"March – June",highlights:[["🏔️ Himalayan Views","Enjoy panoramic mountain scenery from viewpoints around the city."],["🏛️ Colonial Heritage","Walk through historic streets and distinctive architecture."],["🌲 Pine Forests","Escape into quiet green landscapes surrounding Shimla."],["🚶 The Ridge","Experience the lively centre of Shimla's pedestrian area and views."]],reach:"Shimla is connected by road and rail, with nearby airport access through the region.",time:"March to June is popular for pleasant weather; winter brings colder conditions and possible snow.",tips:"Wear comfortable shoes for steep streets and check weather before travelling.",nearby:"Kufri, The Ridge, Mall Road and Jakhoo Temple."},
  "mussoorie":{title:"Mussoorie",location:"UTTARAKHAND • INDIA",description:"A peaceful Himalayan hill escape surrounded by misty landscapes, forests and scenic viewpoints.",aboutTitle:"The queen of the hills.",aboutDescription:"Mussoorie combines mountain scenery, forest walks, viewpoints and a lively hill-station atmosphere.",image:"images/Mussoorie.jpg",knownFor:"Himalayan Hill Station",experience:"Nature & Slow Travel",bestTime:"March – June",highlights:[["🌄 Scenic Viewpoints","Take in wide mountain views from the city's many overlooks."],["🌲 Forest Walks","Explore peaceful paths through the surrounding Himalayan forests."],["🚶 Mall Road","Enjoy the classic hill-station centre with shops and cafés."],["💧 Kempty Falls","Visit a popular waterfall destination near Mussoorie."]],reach:"Mussoorie is reached by road from Dehradun and other nearby cities.",time:"March to June is generally pleasant; monsoon brings lush scenery but wetter conditions.",tips:"Carry a light jacket and comfortable walking shoes; roads can be winding.",nearby:"Landour, Kempty Falls, Camel's Back Road and Lal Tibba."},
  "varanasi":{title:"Varanasi",location:"UTTAR PRADESH • INDIA",description:"Experience ancient ghats, the Ganga and a living cultural landscape shaped by centuries of tradition.",aboutTitle:"A city where the river tells the story.",aboutDescription:"Varanasi is one of India's most historic cities, celebrated for its ghats, riverfront rituals, music, food and living traditions.",image:"images/Varanasi.jpg",knownFor:"Ghats & Ganga",experience:"Culture & Spirituality",bestTime:"October – March",highlights:[["🌊 Ganga Ghats","Walk along a riverfront lined with historic ghats and daily life."],["🪔 Evening Aarti","Witness a powerful evening ritual on the riverfront."],["🏛️ Old City","Explore narrow lanes filled with food, crafts and cultural landmarks."],["📸 Sunrise on the Ganga","Early mornings offer a memorable perspective on the river and city."]],reach:"Varanasi has an airport and major railway connections, with road links to surrounding cities.",time:"October to March generally offers more comfortable sightseeing weather.",tips:"Respect local customs, stay aware in crowded lanes and use authorised transport and guides.",nearby:"Sarnath, Dashashwamedh Ghat, Assi Ghat and the old city."}
};

const params=new URLSearchParams(location.search), key=params.get("place"), place=places[key];
if(place){
  document.title=`${place.title} | WanderIndia`;
  const set=(id,value,html=false)=>{const el=document.getElementById(id);if(el) html?el.innerHTML=value:el.textContent=value};
  set("place-title",`${place.title}<em>.</em>`,true);set("place-location",place.location);set("place-description",place.description);
  set("about-title",place.aboutTitle);set("about-description",place.aboutDescription);
  set("fact-location",place.location.replace(/^[A-Z &]+ • /,""));set("fact-known",place.knownFor);set("fact-experience",place.experience);set("fact-time",place.bestTime);
  const hero=document.querySelector(".dynamic-place-hero");if(hero) hero.style.backgroundImage=`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.65)),url("${place.image}")`;
  const grid=document.getElementById("highlight-grid");if(grid)grid.innerHTML=place.highlights.map(x=>`<article class="highlight-card"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("");
  set("travel-reach",place.reach);set("travel-time",place.time);set("travel-tips",place.tips);set("travel-nearby",place.nearby);
}
