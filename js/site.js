(() => {
  const extraPlaces = {
    "banke-bihari": {
      title:"Banke Bihari Temple", location:"VRINDAVAN • UTTAR PRADESH",
      description:"Explore one of Vrindavan's best-known temples and experience the devotional atmosphere of the Braj region.",
      aboutTitle:"A living centre of devotion.",
      aboutDescription:"Banke Bihari Temple is closely associated with Vrindavan's Krishna traditions and is known for its distinctive darshan, devotional culture and historic setting.",
      image:"images/Dwarkadhish.jpg", known:"Historic Krishna Temple", experience:"Devotion & Culture", bestTime:"Oct – Mar",
      highlights:[["🛕","Temple Heritage","Discover the history and traditions associated with Shri Banke Bihari Mandir."],["🙏","Darshan","Experience the devotional rhythm of one of Vrindavan's best-known temples."],["🎵","Bhakti Culture","Bhajans, kirtan and devotional traditions shape the atmosphere around the temple."],["🚶","Vrindavan Streets","Explore the lanes and nearby temples that form the wider Braj pilgrimage experience."]],
      reach:"Vrindavan is easily reached by road from Mathura and nearby cities.", time:"October to March is generally comfortable for exploring Vrindavan.", tips:"Dress respectfully, follow temple instructions and keep valuables secure in crowded areas.", nearby:"Prem Mandir, ISKCON Vrindavan, Nidhivan and other Braj temples."
    },
    "prem-mandir": {
      title:"Prem Mandir", location:"VRINDAVAN • UTTAR PRADESH",
      description:"Discover Prem Mandir, a marble temple complex known for its architecture, gardens, devotional atmosphere and evening illumination.",
      aboutTitle:"The Temple of Divine Love.",
      aboutDescription:"Prem Mandir is a modern Vrindavan landmark dedicated to Radha Krishna and Sita Ram, surrounded by landscaped gardens and detailed devotional scenes.",
      image:"images/Prem-Mandir.jpg", known:"Marble Temple", experience:"Architecture & Devotion", bestTime:"Oct – Mar",
      highlights:[["✨","Marble Architecture","Admire detailed marble work and devotional scenes across the temple complex."],["🌳","Gardens","Walk through the landscaped grounds surrounding the temple."],["💡","Evening Illumination","See the complex take on a different atmosphere after sunset."],["🙏","Devotional Experience","Spend time in a peaceful setting shaped by Vrindavan's devotional traditions."]],
      reach:"Prem Mandir is located in Vrindavan and is accessible by local road transport.", time:"October to March generally offers comfortable sightseeing weather.", tips:"Check current opening hours before visiting and dress respectfully.", nearby:"ISKCON Vrindavan, Banke Bihari Temple and Nidhivan."
    },
    "iskcon": {
      title:"ISKCON Vrindavan", location:"VRINDAVAN • UTTAR PRADESH",
      description:"Visit ISKCON Vrindavan for devotional music, temple architecture and a peaceful spiritual environment.",
      aboutTitle:"A global spiritual home in Vrindavan.",
      aboutDescription:"The Krishna Balaram Mandir is a prominent Vrindavan temple known for devotional activities, architecture and its connection with the international ISKCON community.",
      image:"images/Krishna-Janmabhoomi.jpg", known:"Krishna Balaram Mandir", experience:"Devotion & Community", bestTime:"Oct – Mar",
      highlights:[["🎵","Kirtan & Bhajans","Experience devotional music and chanting that are central to the temple atmosphere."],["🛕","Temple Architecture","Explore the ornate temple complex and its distinctive details."],["🌍","Global Community","See a spiritual centre that welcomes visitors from around the world."],["🌿","Peaceful Setting","Take a slower moment away from the busiest streets of Vrindavan."]],
      reach:"ISKCON Vrindavan is accessible by road from Mathura and other nearby towns.", time:"October to March is generally comfortable for sightseeing.", tips:"Follow temple instructions and be considerate during worship and photography.", nearby:"Prem Mandir, Banke Bihari Temple and Nidhivan."
    },
    "nidhivan": {
      title:"Nidhivan", location:"VRINDAVAN • UTTAR PRADESH",
      description:"Explore Nidhivan, a sacred grove surrounded by devotional traditions, stories and a distinctive landscape.",
      aboutTitle:"A sacred grove wrapped in tradition.",
      aboutDescription:"Nidhivan is one of Vrindavan's notable sacred sites, known for its enclosed grove, devotional traditions and place in local Braj culture.",
      image:"images/Nidhivan.jpg", known:"Sacred Grove", experience:"Tradition & Spirituality", bestTime:"Oct – Mar",
      highlights:[["🌳","Sacred Grove","Walk through a distinctive grove that forms part of Vrindavan's sacred landscape."],["🙏","Braj Traditions","Learn about the devotional traditions and stories connected with the site."],["📸","Unique Landscape","Notice the unusual shapes and dense arrangement of the trees."],["🚶","Temple Trail","Combine Nidhivan with nearby temples and historic Vrindavan lanes."]],
      reach:"Nidhivan is located within Vrindavan and can be reached by local transport.", time:"October to March generally offers comfortable weather.", tips:"Follow site rules, respect the religious setting and avoid restricted areas.", nearby:"Banke Bihari Temple, ISKCON Vrindavan and Prem Mandir."
    },
    "ayodhya": {
      title:"Ayodhya", location:"AYODHYA • UTTAR PRADESH",
      description:"Discover Ayodhya, a historic sacred city on the Sarayu known for its religious heritage, ghats and cultural traditions.",
      aboutTitle:"A city shaped by sacred history.",
      aboutDescription:"Ayodhya is an important pilgrimage destination with a long cultural history, riverside ghats, temples and vibrant religious traditions.",
      image:"images/Ayodhya.jpg", known:"Sacred Heritage", experience:"Culture & Spirituality", bestTime:"Oct – Mar",
      highlights:[["🛕","Sacred Heritage","Explore temples and pilgrimage sites across the historic city."],["🌊","Sarayu River","Spend time around the riverfront and its ghats."],["🪔","Evening Atmosphere","Experience the city's devotional energy as the day winds down."],["🚶","Old City","Explore local streets, markets and cultural landmarks."]],
      reach:"Ayodhya is connected by road, rail and air with major cities in North India.", time:"October to March generally offers more comfortable sightseeing weather.", tips:"Respect local customs and allow extra time around busy pilgrimage areas.", nearby:"Sarayu Ghats, Hanuman Garhi and other major Ayodhya landmarks."
    }
  };

  const localImages = {
    "/temples.html":"images/Ayodhya.jpg",
    "/vrindavan.html":"images/Prem-Mandir.jpg",
    "/mathura.html":"images/Mathura.jpg",
    "/Krishna-janmabhoomi.html":"images/Krishna-Janmabhoomi.jpg",
    "/dwarkadhish.html":"images/Dwarkadhish.jpg",
    "/govardhan.html":"images/Govardhan.jpg",
    "/vishram-ghat.html":"images/Vishram-Ghat.jpg",
    "/jaipur.html":"images/Hawa-Mahal.jpg"
  };

  const path = window.location.pathname.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const placeKey = params.get("place");

  function setHeroImage(url) {
    const hero = document.querySelector(".place-hero:not(.dynamic-place-hero), .temple-hero");
    if (!hero) return;
    hero.style.backgroundImage = "linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.28)), url('" + url + "')";
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
  }

  function renderExtraPlace(place) {
    const setText=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value};
    setText("place-location",place.location);
    const title=document.getElementById("place-title"); if(title) title.innerHTML=place.title+"<em>.</em>";
    setText("place-description",place.description);
    const about=document.getElementById("about-title"); if(about) about.innerHTML=place.aboutTitle;
    setText("about-description",place.aboutDescription);
    setText("fact-location",place.location.replace(/^.*?•\s*/,""));
    setText("fact-known",place.known);
    setText("fact-experience",place.experience);
    setText("fact-time",place.bestTime);
    setText("travel-reach",place.reach);
    setText("travel-time",place.time);
    setText("travel-tips",place.tips);
    setText("travel-nearby",place.nearby);
    const hero=document.querySelector(".dynamic-place-hero");
    if(hero) hero.style.backgroundImage="linear-gradient(rgba(0,0,0,.42),rgba(0,0,0,.62)), url('"+place.image+"')";
    const grid=document.getElementById("highlight-grid");
    if(grid){grid.innerHTML=place.highlights.map(item=>"<article class='highlight-card'><h3>"+item[0]+" "+item[1]+"</h3><p>"+item[2]+"</p></article>").join("");}
    document.title=place.title+" | WanderIndia";
  }

  // Universal inner-page hero imagery.
  if (localImages[path]) setHeroImage(localImages[path]);
  if (placeKey && extraPlaces[placeKey]) {
    renderExtraPlace(extraPlaces[placeKey]);
    const back=document.querySelector(".place-navigation a:first-child");
    if(back){
      const mathuraKeys=["krishna-janmabhoomi","dwarkadhish","vishram-ghat","govardhan"];
      const vrindavanKeys=["banke-bihari","prem-mandir","iskcon","nidhivan"];
      back.href = mathuraKeys.includes(placeKey) ? "mathura.html" : vrindavanKeys.includes(placeKey) ? "vrindavan.html" : placeKey==="ayodhya" ? "temples.html" : "index.html#destinations";
      back.textContent = mathuraKeys.includes(placeKey) ? "← Back to Mathura" : vrindavanKeys.includes(placeKey) ? "← Back to Vrindavan" : placeKey==="ayodhya" ? "← Back to Temples" : "← Back to destinations";
    }
  }

  // Make every inner page navigation usable on smaller screens.
  const navbar=document.querySelector(".navbar");
  const nav=document.querySelector(".nav-menu");
  if(navbar && nav){
    let toggle=navbar.querySelector(".menu-toggle");
    if(!toggle){
      toggle=document.createElement("button");
      toggle.className="menu-toggle";
      toggle.type="button";
      toggle.setAttribute("aria-label","Open menu");
      toggle.setAttribute("aria-expanded","false");
      toggle.textContent="☰";
      navbar.appendChild(toggle);
    }
    toggle.addEventListener("click",()=>{
      const open=nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded",String(open));
      toggle.setAttribute("aria-label",open?"Close menu":"Open menu");
      toggle.textContent=open?"×":"☰";
    });
    nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded","false");
      toggle.textContent="☰";
    }));
  }

  // Scroll-aware reveal instead of animating everything immediately.
  const revealItems=document.querySelectorAll(".reveal,.place-card,.spiritual-card,.highlight-card,.travel-item");
  if("IntersectionObserver" in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12});
    revealItems.forEach((el,i)=>{
      el.style.setProperty("--reveal-delay",Math.min(i%4,3)*70+"ms");
      observer.observe(el);
    });
  }else{
    revealItems.forEach(el=>el.classList.add("is-visible"));
  }

  // Keep dynamic and static page links visibly interactive.
  document.querySelectorAll("a").forEach(a=>{
    if(a.getAttribute("href")==="#") a.setAttribute("href","index.html");
  });
})();