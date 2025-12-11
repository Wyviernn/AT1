const festivalData = {
  "mardi-gras": {
    name: "Mardi Gras",
    country: "United States",
    when: "February - Early March",
    description: "Mardi Gras happens in New Orleans every year before Lent starts, usually in February or early March. The streets fill with people from morning until late at night for about two weeks. Krewes organize huge parades with decorated floats, and riders throw beads, cups, and doubloons to crowds. People dress up in purple, green, and gold costumes or wear masks. The French brought carnival customs to Louisiana in the 1700s, and by the 1800s, formal parades started. King cakes are everywhere during the season. The celebration grew from religious observation into a major cultural event that brings millions of visitors."
  },
  "calgary-stampede": {
    name: "Calgary Stampede",
    country: "Canada",
    when: "July (10 days)",
    description: "The Calgary Stampede lasts 10 days each July in Calgary, Alberta. It started in 1912 as a frontier exhibition and rodeo. Now it draws over a million visitors every year. The rodeo competition is the centerpiece, with cowboys and cowgirls competing in events like bull riding, barrel racing, and steer wrestling. Chuckwagon races happen each evening. A parade kicks off the festival with floats and bands. Pancake breakfasts happen across the city every morning. Western fashion is everywhere, with many people wearing cowboy hats and boots. The Stampede celebrates Alberta's ranching heritage and cowboy culture."
  },
  "day-of-the-dead": {
    name: "Day of the Dead",
    country: "Mexico",
    when: "November 1-2",
    description: "Day of the Dead spans November 1 and 2 across Mexico. The celebration mixes Indigenous traditions with Catholic observances. Families build ofrendas, which are altars decorated with photos of deceased relatives, candles, marigold flowers, sugar skulls, and favorite foods. Marigolds guide spirits with their bright color and scent. Families visit cemeteries to clean graves and spend time there, sometimes through the night. In some regions, people paint their faces to resemble skulls with detailed designs. Pan de muerto, a special sweet bread, is baked and shared. The tone is not sad but celebratory, honoring the dead as still part of the family."
  },
  "reggae-sumfest": {
    name: "Reggae Sumfest",
    country: "Jamaica",
    when: "July",
    description: "Reggae Sumfest happens every July in Montego Bay, Jamaica, usually lasting about a week. It started in 1993 and became the largest reggae and dancehall festival in the Caribbean. Catherine Hall Entertainment Centre hosts the main events, which run from evening until early morning. The festival includes different themed nights. Dancehall Night features current artists performing high-energy sets. Past performers include Bob Marley's family members, Buju Banton, Beenie Man, and Sean Paul. Beach parties and smaller events happen during the day at hotels and clubs. The festival celebrates Jamaica's musical culture and its global influence."
  },
  "carnival-brazil": {
    name: "Carnival",
    country: "Brazil",
    when: "February - Early March",
    description: "Carnival in Brazil happens in February or early March, in the days leading up to Lent. Rio de Janeiro has the most famous carnival, with samba schools competing in the Sambadrome. Each samba school spends a full year preparing, designing floats, composing songs, and creating elaborate costumes. The parades run all night. Street parties called blocos happen throughout the city, with bands playing on trucks as crowds follow dancing and singing. Salvador's carnival is more participatory. The scale and energy are overwhelming, with millions participating. Music plays 24 hours a day. Costumes range from elaborate beaded and feathered outfits to simple themed clothing."
  },
  "vendimia": {
    name: "Fiesta Nacional de la Vendimia",
    country: "Argentina",
    when: "Late February - Early March",
    description: "The Fiesta Nacional de la Vendimia takes place in late February or early March in Mendoza, a region famous for wine production. The festival celebrates the grape harvest and the wine industry. Daytime activities include parades with decorated floats and dancers. The main event is a huge spectacle held in an open-air amphitheater built into a hillside. Thousands attend the evening show, which tells a story through music, dance, and elaborate costumes. Fireworks enhance the production. Performers number in the hundreds. The Vendimia began in the 1930s as a way to promote Mendoza's wine industry and boost regional pride."
  },
  "barranquilla-carnival": {
    name: "Barranquilla Carnival",
    country: "Colombia",
    when: "February - March (before Ash Wednesday)",
    description: "Barranquilla Carnival is one of the biggest carnivals in the world, celebrated in the days before Ash Wednesday. UNESCO recognized it as a Masterpiece of the Oral and Intangible Heritage of Humanity. The carnival has African, Indigenous, and European influences. The Battle of Flowers parade opens the carnival on Saturday, with floats and dancers moving through the city for hours. Traditional characters appear throughout. Cumbia and porro music play constantly. Dancers move in traditional choreography passed down through generations. The carnival temporarily erases social barriers, creating a space where everyone participates regardless of class or background."
  },
  "inti-raymi-peru": {
    name: "Inti Raymi",
    country: "Peru",
    when: "June 24",
    description: "Inti Raymi is celebrated on June 24 in Cusco, Peru, marking the winter solstice. The Inca Empire held this festival to honor Inti, the sun god. After Spanish conquest, the celebration was banned. In 1944, a historical reenactment was created based on colonial chronicles. The modern celebration attracts thousands of tourists and locals. Participants wear Inca-style clothing, with bright tunics and feather headdresses. The procession moves to Sacsayhuamán, a massive stone fortress. Actors representing the Inca emperor and priests perform rituals. Music plays on traditional instruments like pan pipes and drums. The celebration reinforces indigenous identity and pride."
  },
  "oktoberfest": {
    name: "Oktoberfest",
    country: "Germany",
    when: "Late September - Early October",
    description: "Oktoberfest runs for about 16 to 18 days from late September into early October in Munich, Bavaria. It started in 1810 and is now the world's largest beer festival, attracting over six million visitors. Fourteen large beer tents fill the grounds, each seating thousands. Only beer brewed within Munich city limits can be served. Waitstaff carry multiple one-liter steins at once. Bands play traditional Bavarian music. Outside the tents, carnival rides and food stalls cover the grounds. Traditional foods include pretzels, roasted chicken, sausages, and sauerkraut. People wear traditional Bavarian clothing, with men in lederhosen and women in dirndls."
  },
  "la-tomatina": {
    name: "La Tomatina",
    country: "Spain",
    when: "Last Wednesday of August",
    description: "La Tomatina happens on the last Wednesday of August in Buñol, a small town near Valencia. The event is a massive tomato fight involving thousands of participants. The origins are debated, with stories claiming it started in the mid-1940s during a street festival fight. The town's normal population is around 9,000, but during La Tomatina, over 20,000 people crowd the streets. The tomato fight lasts exactly one hour. Trucks loaded with overripe tomatoes drive through the streets, and participants grab tomatoes to throw. The streets turn into rivers of tomato pulp. Fire trucks spray water to help clean up."
  },
  "sao-joao": {
    name: "Festas de São João",
    country: "Portugal",
    when: "June 23-24",
    description: "Festas de São João takes place on the night of June 23 into June 24, especially in Porto. The festival celebrates Saint John the Baptist but also incorporates older midsummer traditions. Street parties throughout Porto fill with people flooding into the historic center. People carry plastic hammers and hit each other on the head playfully. Grilled sardines are everywhere, sold by street vendors. The smell of sardines fills the air. Wine and beer flow freely. Balloons are released into the night sky. Fireworks explode over the Douro River at midnight. After midnight, people continue partying until dawn."
  },
  "glastonbury": {
    name: "Glastonbury Festival",
    country: "United Kingdom",
    when: "Late June",
    description: "Glastonbury Festival happens over five days in late June at Worthy Farm in Somerset, England. The first festival was held in 1970. Glastonbury is one of the largest greenfield festivals in the world, with around 200,000 attendees. The Pyramid Stage is the main stage, where headliners perform to massive crowds. Music genres range from rock and pop to folk and experimental. Past headliners include David Bowie, Radiohead, and Beyoncé. The festival has a counterculture ethos, supporting social and environmental causes. Glastonbury is famous for mud, as rain often turns the farm into a swamp. Camping is part of the experience."
  },
  "chinese-new-year": {
    name: "Chinese New Year",
    country: "China",
    when: "Late January - Mid February",
    description: "Chinese New Year, also called Spring Festival, is the most important holiday in China. It falls between late January and mid-February, determined by the lunar calendar. Preparations start weeks in advance, with families cleaning homes to sweep away bad luck. Red decorations are hung everywhere. New Year's Eve is the most significant night, with families gathering for a reunion dinner. At midnight, fireworks explode across the country. On New Year's Day, children receive red envelopes filled with money from elders. Lion and dragon dances are performed in streets. The holiday lasts 15 days, ending with the Lantern Festival."
  },
  "gion-matsuri": {
    name: "Gion Matsuri",
    country: "Japan",
    when: "Throughout July",
    description: "Gion Matsuri is held throughout July in Kyoto, Japan, with major events concentrated in the middle of the month. It is one of Japan's most famous festivals, with over a thousand years of history. The highlight is the Yamaboko Junko, a grand procession of massive wooden floats that takes place on July 17 and July 24. These floats can weigh up to 12 tons and reach several stories high. They are built without nails, using traditional wooden joinery. Each float is decorated with tapestries and lanterns. Teams of men pull the floats through the streets using thick ropes. Musicians on the floats play traditional festival music."
  },
  "boryeong-mud-festival": {
    name: "Boryeong Mud Festival",
    country: "South Korea",
    when: "July",
    description: "The Boryeong Mud Festival is held in July on Daecheon Beach. The festival was created in 1998 as a marketing campaign to promote cosmetics made from local mud, which is rich in minerals. The beach transforms into a massive playground filled with mud-based activities. Large pools and pits are filled with mud where people can slide, wrestle, and play. Mud slides send participants splashing into pools. There are mud massages, mud body painting, and even mud skiing. Everyone gets completely covered in mud. Music stages host concerts throughout the festival. Beach parties continue into the night with DJs and dancing."
  },
  "tet": {
    name: "Tet",
    country: "Vietnam",
    when: "Late January - February",
    description: "Tet, the Vietnamese Lunar New Year, is the most important holiday in Vietnam. It falls between late January and February, based on the lunar calendar. Celebrations last several days, with preparations starting weeks in advance. Homes are cleaned thoroughly and decorated with flowers, especially peach blossoms in the north. Ancestral altars are prepared with offerings. On New Year's Eve, families gather for a reunion dinner featuring special dishes. Traditional foods include banh chung, sticky rice cakes filled with pork and beans. At midnight, fireworks explode across cities. During Tet, people visit relatives and give red envelopes with money to children and elders."
  },
  "national-arts-festival": {
    name: "National Arts Festival",
    country: "South Africa",
    when: "June - July",
    description: "The National Arts Festival takes place in Makhanda, usually in June or July. It started in 1974 and has become the largest arts festival in Africa. The festival lasts about 11 days and transforms the small university town into a hub of creativity. Hundreds of shows happen daily across multiple venues, including theaters, galleries, and outdoor spaces. The program includes theater productions, dance performances, music concerts, visual art exhibitions, and film screenings. Both established artists and emerging performers participate. The streets buzz with activity, with posters advertising shows covering every available surface. The festival celebrates artistic expression."
  },
  "eyo-festival": {
    name: "Eyo Festival",
    country: "Nigeria",
    when: "Special occasions only",
    description: "The Eyo Festival is held in Lagos, Nigeria, though it does not have a fixed annual date. It takes place only on special occasions, such as the death of a prominent chief or the installation of a new king. Eyo masqueraders, dressed entirely in white robes and hats with veiled faces, parade through the streets. Each Eyo carries a staff called an opambata. The white-clad figures move silently and gracefully, creating an otherworldly atmosphere. The Eyo are believed to represent the spirits of ancestors. The festival connects modern Lagos to its historical and spiritual roots. Drumming and traditional music accompany the procession."
  },
  "marrakech-arts": {
    name: "Marrakech Popular Arts Festival",
    country: "Morocco",
    when: "July",
    description: "The Marrakech Popular Arts Festival is usually held in July. It started in the 1960s as a way to showcase Morocco's diverse folk traditions. The festival brings together performers from different regions of Morocco. Performances take place in venues like El Badi Palace and Jemaa el-Fnaa square. Berber tribes from the Atlas Mountains bring their music and dance. Gnawa musicians perform trance music with distinctive instruments. Groups from the Sahara bring desert traditions. Each performance represents a different aspect of Moroccan culture. The festival strengthens cultural identity and pride, particularly for rural communities. Food vendors and craft markets operate during the festival."
  },
  "lamu-cultural": {
    name: "Lamu Cultural Festival",
    country: "Kenya",
    when: "November",
    description: "The Lamu Cultural Festival is usually held in November on Lamu Island, off the coast of Kenya. Lamu is a UNESCO World Heritage Site, known for its well-preserved Swahili architecture and culture. Events take place over several days, with competitions and performances showcasing traditional skills. Dhow races are a highlight, with teams sailing traditional wooden boats. Donkey races are another popular event, as donkeys are the primary mode of transport on the car-free island. Henna painting competitions display intricate designs. Swahili poetry recitals feature. Traditional dances and taarab music performances bring rhythms passed down through generations. Food includes Swahili dishes like biryani and grilled fish."
  },
  "sydney-new-year": {
    name: "Sydney New Year's Eve",
    country: "Australia",
    when: "December 31",
    description: "Sydney New Year's Eve takes place on the night of December 31, marking the transition to the new year. Sydney hosts one of the world's most famous New Year's Eve celebrations, largely due to its spectacular fireworks display over Sydney Harbour. The harbor, framed by the Sydney Harbour Bridge and the Opera House, provides an iconic setting. Over a million people gather along the harbor foreshores. The event includes two fireworks shows: a family display at 9 PM and the main midnight fireworks. The midnight show lasts about 12 minutes, with fireworks launched from the bridge and barges. The event is broadcast live globally."
  },
  "waitangi-day": {
    name: "Waitangi Day",
    country: "New Zealand",
    when: "February 6",
    description: "Waitangi Day is observed on February 6 each year in New Zealand. It commemorates the signing of the Treaty of Waitangi in 1840 between representatives of the British Crown and Māori chiefs. The treaty is New Zealand's founding document. The main commemoration happens at the Waitangi Treaty Grounds in the Bay of Islands. Dawn ceremonies feature prayers and songs in both English and Te Reo Māori. The waka taua, a large ceremonial war canoe, is launched with a crew paddling in synchronized motion. Cultural performances, including haka, take place. Across New Zealand, communities hold their own Waitangi Day events."
  },
  "hibiscus-festival": {
    name: "Hibiscus Festival",
    country: "Fiji",
    when: "August",
    description: "The Hibiscus Festival is usually held in August in Suva, the capital of Fiji. It started in the 1950s and has become one of Fiji's largest and most popular festivals. The festival lasts about a week and includes parades, beauty pageants, concerts, sports competitions, and carnival-style entertainment. The festival's centerpiece is the Miss Hibiscus pageant. Parades feature floats, marching bands, and costumed participants. Concerts feature local and regional artists. Sports competitions, including rugby, are held during the festival. Food stalls sell Fijian dishes and tropical fruits. The festival creates a carnival atmosphere in Suva."
  },
  "mount-hagen": {
    name: "Mount Hagen Cultural Show",
    country: "Papua New Guinea",
    when: "August",
    description: "The Mount Hagen Cultural Show takes place in August in the Highlands region. It started in the 1960s as a way to bring together different tribes peacefully and showcase their cultures. Papua New Guinea has extreme cultural diversity, with over 800 languages. The event lasts two days, with groups performing traditional singsing, which includes singing, dancing, and displaying elaborate costumes. Participants represent different tribes from across the Highlands. Headdresses are made from bird of paradise feathers. Face and body paint is applied in intricate patterns using natural pigments. Decorations include shells and bones. The performances are judged, with prizes for the best groups."
  }
};

const regions = [
  {
    name: "North America",
    festivals: [
      { id: "mardi-gras", country: "USA", name: "Mardi Gras" },
      { id: "calgary-stampede", country: "Canada", name: "Calgary Stampede" },
      { id: "day-of-the-dead", country: "Mexico", name: "Day of the Dead" },
      { id: "reggae-sumfest", country: "Jamaica", name: "Reggae Sumfest" }
    ]
  },
  {
    name: "South America",
    festivals: [
      { id: "carnival-brazil", country: "Brazil", name: "Carnival" },
      { id: "vendimia", country: "Argentina", name: "Fiesta Nacional de la Vendimia" },
      { id: "barranquilla-carnival", country: "Colombia", name: "Barranquilla Carnival" },
      { id: "inti-raymi-peru", country: "Peru", name: "Inti Raymi" }
    ]
  },
  {
    name: "Europe",
    festivals: [
      { id: "oktoberfest", country: "Germany", name: "Oktoberfest" },
      { id: "la-tomatina", country: "Spain", name: "La Tomatina" },
      { id: "sao-joao", country: "Portugal", name: "Festas de São João" },
      { id: "glastonbury", country: "United Kingdom", name: "Glastonbury Festival" }
    ]
  },
  {
    name: "Asia",
    festivals: [
      { id: "chinese-new-year", country: "China", name: "Chinese New Year" },
      { id: "gion-matsuri", country: "Japan", name: "Gion Matsuri" },
      { id: "boryeong-mud-festival", country: "South Korea", name: "Boryeong Mud Festival" },
      { id: "tet", country: "Vietnam", name: "Tet" }
    ]
  },
  {
    name: "Africa",
    festivals: [
      { id: "national-arts-festival", country: "South Africa", name: "National Arts Festival" },
      { id: "eyo-festival", country: "Nigeria", name: "Eyo Festival" },
      { id: "marrakech-arts", country: "Morocco", name: "Marrakech Popular Arts Festival" },
      { id: "lamu-cultural", country: "Kenya", name: "Lamu Cultural Festival" }
    ]
  },
  {
    name: "Oceania",
    festivals: [
      { id: "sydney-new-year", country: "Australia", name: "Sydney New Year's Eve" },
      { id: "waitangi-day", country: "New Zealand", name: "Waitangi Day" },
      { id: "hibiscus-festival", country: "Fiji", name: "Hibiscus Festival" },
      { id: "mount-hagen", country: "Papua New Guinea", name: "Mount Hagen Cultural Show" }
    ]
  }
];

const WISHLIST_KEY = "festivo-wishlist";

function loadWishlist() {
  try {
    const stored = localStorage.getItem(WISHLIST_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(list) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
}

function updateWishlistCount(list) {
  const countEls = document.querySelectorAll(".wishlist-count");
  countEls.forEach(el => {
    el.textContent = String(list.length);
  });
}

function renderHomePage(wishlist) {
  const home = document.getElementById("home-content");
  if (!home) return;

  home.innerHTML = "";

  regions.forEach(region => {
    const section = document.createElement("section");
    section.className = "region";

    const titleWrapper = document.createElement("div");
    titleWrapper.className = "region-title";

    const spanTitle = document.createElement("span");
    spanTitle.textContent = region.name;

    titleWrapper.appendChild(spanTitle);
    section.appendChild(titleWrapper);

    const container = document.createElement("div");
    container.className = "festival-container";

    region.festivals.forEach(fest => {
      const box = document.createElement("div");
      box.className = "festival-box";

      const link = document.createElement("a");
      link.href = `festival.html?id=${encodeURIComponent(fest.id)}`;

      const imgDiv = document.createElement("div");
      imgDiv.className = "festival-image";

      const countrySpan = document.createElement("span");
      countrySpan.className = "country-label";
      countrySpan.textContent = fest.country;

      const festSpan = document.createElement("span");
      festSpan.className = "festival-label";
      festSpan.textContent = fest.name;

      imgDiv.appendChild(countrySpan);
      imgDiv.appendChild(festSpan);
      link.appendChild(imgDiv);
      box.appendChild(link);
      container.appendChild(box);
    });

    section.appendChild(container);
    home.appendChild(section);
  });
}

function setupFestivalPage(wishlist) {
  const festivalMain = document.querySelector("main.festival-detail");
  if (!festivalMain) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const nameEl = document.getElementById("festival-name");
  const countryEl = document.getElementById("festival-country");
  const whenEl = document.getElementById("festival-when");
  const descEl = document.getElementById("festival-description");
  const buttonEl = document.getElementById("add-to-wishlist");

  if (!id || !festivalData[id]) {
    nameEl.textContent = "Festival not found";
    countryEl.textContent = "";
    whenEl.textContent = "";
    descEl.textContent = "Details for this festival are not available.";
    buttonEl.style.display = "none";
    return;
  }

  const data = festivalData[id];

  nameEl.textContent = data.name;
  countryEl.textContent = data.country;
  whenEl.textContent = data.when ? `Best time to visit: ${data.when}` : "";
  descEl.textContent = data.description;

  function refreshButton() {
    const inList = wishlist.includes(id);
    buttonEl.textContent = inList ? "Remove from wishlist" : "Add to wishlist";
  }

  refreshButton();

  buttonEl.addEventListener("click", () => {
    const index = wishlist.indexOf(id);
    if (index === -1) {
      if (wishlist.length >= 5) {
        alert("You may only have 5 festivals on your visit wishlist.");
        return;
      }
      wishlist.push(id);
    } else {
      wishlist.splice(index, 1);
    }
    saveWishlist(wishlist);
    updateWishlistCount(wishlist);
    refreshButton();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const wishlist = loadWishlist();
  updateWishlistCount(wishlist);

  if (document.body.classList.contains("home-page")) {
    renderHomePage(wishlist);
  }

  if (document.body.classList.contains("festival-page")) {
    setupFestivalPage(wishlist);
  }
});