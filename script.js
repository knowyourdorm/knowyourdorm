
const homes = [
  {
    title: 'Mayao Crossing - St. Jude Village',
    cover: 'img/mayao.jpg',
    images: ['img/mayao1.jpg', 'img/mayao2.jpg', 'img/mayao3.jpg', 'img/mayao4.jpg'],
    address: 'Quezon, Lucena City, Brgy. Mayao Crossing St.Jude Village (near SM, Satellite Market and MMG Hospital)',
    rooms: '2 bedrooms, good for 2 - 4 persons (with free furnitures)',
    price: '8,500 pesos monthly',
    distance: '3.7km Away From Maryhill College Inc. (11 minutes ride)',
    social: 'Genelyn Manalo Villasin'
  },
  {
    title: 'Mayao Parada',
    cover: 'img/mmg.jpg',
    images: ['img/mmg3.jpg', 'img/mmg2.jpg', 'img/mmg1.jpg'],
    address: 'Quezon, Lucena City, Brgy. Mayao Parada (near Cefi, MMG Hospital)',
    rooms: '1 studio type room good for 1 - 2 persons',
    price: '4,000 pesos monthly',
    distance: '8.7km Away from Maryhill College Inc. (58min ride)',
    social: '09153307278'
  },
  {
    title: 'Mayao Crossing (Cefi/ MMG)',
    cover: 'img/cf.jpg',
    images: ['img/cf1.jpg','img/cf2.jpg'],
    address: 'Quezon, Lucena City, Brgy. Mayao Crossing (near Cefi and MMG Hospital)',
    rooms: '1 bed space good for 1 - 2 persons (with furnitures)',
    price: '3,500 for solo and 4,500 for 2 persons',
    distance: '3.5km Away from Maryhill College Inc. (10 - 12 min ride)',
    social: 'Ars or Derrick'
  },
  {
    title: 'Brgy. 24 Nadres - Ibabang Iyam',
    cover: 'img/neda.jpg',
    images: ['img/neda1.jpg', 'img/neda2.jpg', 'img/neda3.jpg', 'img/neda4.jpg'],
    address: 'Quezon, Lucena City, Brgy. 24 Nadres St. Ibabang Iyam',
    rooms: '2 rooms with bed frames good for 6 persons each room',
    price: '5,500 - 6,000 each room',
    distance: '2.9km Away from Maryhill College Inc. (9 - 10 min ride)',
    social: 'Nanay Nida'
  },
  {
    title: 'Mayao Crossing (Studio)',
    cover: 'img/std.jpg',
    images: ['img/std1.jpg', 'img/std2.jpg', 'img/std3.jpg', 'img/std4.jpg'],
    address: 'Quezon, Lucena City, Brgy. Mayao Crossing (near Cefi and MMG Hospital)',
    rooms: '1 studio type room, good for 2 - 3 persons (with furnitures)',
    price: '6,500 monthly',
    distance: '3.5km Away from Maryhill College Inc. (9 - 10 min ride)',
    social: 'Donnabel Mercado'
  },
  {
    title: 'Ibabang Dupay - Bedspace',
    cover: 'img/sky.jpg',
    images: ['img/sky1.jpg', 'img/sky2.jpg'],
    address: 'Quezon, Lucena City, Brgy. Ibabang Dupay',
    rooms: '1 bed space (with free bed)',
    price: '3,500 monthly',
    distance: '2.5km Away from Maryhill College Inc. (7 - 8 min ride)',
    social: 'Sky Principe'
  },
  {
    title: 'St. Thomas East Gate',
    cover: 'img/69.jpg',
    images: ['img/691.jpg', 'img/692.jpg', 'img/693.jpg', 'img/694.jpg'],
    address: 'Quezon, Lucena City, Brgy. Mayao Crossing, St. Thomas east gate',
    rooms: '2 rooms (with one free bed) good for 4 - 5 persons',
    price: '7,500 pesos monthly',
    distance: '3.4km Away from Maryhill College Inc. (9 - 10 min ride)',
    social: '09238302769'
  },
  {
    title: 'Ibabang Iyam (Girls Only)',
    cover: 'img/li.jpg',
    images: ['img/li1.jpg', 'img/li2.jpg', 'img/li3.jpg'],
    address: 'Quezon, Lucena City, Brgy. Ibabang Iyam (near quezon high)',
    rooms: '2 rooms, bed space (girls only)',
    price: '2,000 pesos per room',
    distance: '2.7km Away from Maryhill College (7 - 8 min ride)',
    social: 'Li Zi La'
  },
  {
    title: 'Red V Happy Valley',
    cover: 'img/mary.jpg',
    images: ['img/mary1.jpg', 'img/mary2.jpg'],
    address: 'Quezon, Lucena City. Brgy. Ibabang dupay, Red V happy Valley',
    rooms: '2 rooms (with free bed frame) good for 2 - 3 persons each room',
    price: '1,800 pesos monthly (water and electricity included)',
    distance: '3.5km Away from Maryhill College Inc. (10 - 11 min ride)',
    social: 'Mary Grace'
  },
  {
    title: 'Arallina Compound Gate 2',
    cover: 'img/88.jpg',
    images: ['img/881.jpg', 'img/882.jpg', 'img/883.jpg', 'img/884.jpg'],
    address: 'Quezon, Lucena City, Brgy. Ibabang dupay, Arallina Compound Gate 2 (near SM, Cefi and MMG Hospital)',
    rooms: '1 room, 1 studio type (with sink) good for 1 - 2 persons',
    price: '5,000 monthly',
    distance: '2.5km Away from Maryhill College Inc. (7 - 8 min ride)',
    social: '09976835188'
  },
  {
    title: 'Sampaguita - Zaballero Subdv.',
    cover: 'img/or.jpg',
    images: ['img/or.jpg'],
    address: 'Quezon, Lucena City, Brgy. Sampaguita, Zaballero Subdv.',
    rooms: '1 bed space (with free bed) good for 1 person',
    price: '1,700 monthly (wifi, water, and electricity included)',
    distance: '1.4km Away from Maryhill College Inc. (5 - 6 min ride)',
    social: 'Orig Trish'
  },
  {
    title: 'Brgy. 4 (Ladies Only)',
    cover: 'img/ql.jpg',
    images: ['img/ql1.jpg', 'img/ql2.jpg', 'img/ql3.jpg', 'img/ql4.jpg'],
    address: 'Quezon, Lucena City, Brgy. 4 (near Maryhill, Market, BDO BPI etc.)',
    rooms: '1 room (with free bed) Ladies only, good for 1 person',
    price: '2,500 monthly per room',
    distance: '500 meters Away from Maryhill College Inc. (5 min ride)',
    social: 'Avlem Noeled'
  },
  {
    title: 'Red - V (Free Furniture)',
    cover: 'img/lago.jpg',
    images: ['img/lago1.jpg', 'img/lago2.jpg', 'img/lago3.jpg'],
    address: 'Quezon, Lucena City, Brgy. Ibabang dupay, Red - V (near SM, Cefi and MMG Hospital)',
    rooms: '1 room (with free furniture) good for 1 - 2 person',
    price: '3,000 pesos monthly (water bill included)',
    distance: '2.5km Away from Maryhill College Inc. (9 - 10 min ride)',
    social: 'Nichole Ann A. Lago'
  },
  {
    title: 'Red - V (Big Bedroom + Living Room)',
    cover: 'img/lagos.jpg',
    images: ['img/lagos1.jpg', 'img/lagos2.jpg'],
    address: 'Quezon, Lucena City, Brgy. Ibabang dupay, Red - V',
    rooms: '1 big bedroom and 1 Living room (good for 3 - 5 persons)',
    price: '4,000 pesos monthly',
    distance: '2.5km Away from Maryhill College Inc. (9 - 10 min ride)',
    social: 'Nichole Anne A. Lagos'
  },
  {
    title: 'St. Jude Subdv. Edwin St.',
    cover: 'img/dea.jpg',
    images: ['img/dea1.jpg', 'img/dea2.jpg', 'img/dea3.jpg', 'img/dea4.jpg'],
    address: 'Quezon, Lucena City, Brgy. Ibabang dupay, St.Jude Sudv. Edwin Street (near SM, Calayan, MMG Hospital etc.)',
    rooms: '1 room available, good for 1 - 2 persons',
    price: '4,000 pesos monthly',
    distance: '2.5km Away from Maryhill College Inc. (9 - 10 min ride)',
    social: 'Filomena Deazeta'
  },
  {
    title: 'Ibabang Dupay (Near SM)',
    cover: 'img/led.jpg',
    images: ['img/led1.jpg', 'img/led2.jpg'],
    address: 'Quezon Lucena City, Brgy. Ibabang dupay (near SM, Calayan, MMG Hospital)',
    rooms: '1 room (with free bed) good for 1 - 2 persons',
    price: '4,000 pesos monthly (wifi bill included)',
    distance: '2.3km Away from Maryhill College Inc. (8 - 9 min ride)',
    social: 'Avlem Noeled'
  },
  {
    title: 'Brgy. 4 (Bed Space)',
    cover: 'img/noe.jpg',
    images: ['img/noe1.jpg', 'img/noe2.jpg'],
    address: 'Quezon, Lucena City, Brgy. 4 (near Maryhill College, Market, BDO BPI etc.)',
    rooms: '1 room, 1 bed space (with free bed) good for 1 person',
    price: '2,500 pesos Monthly',
    distance: '500 meters Away from Maryhill College (4 - 5 min ride)',
    social: 'Avlem Noeled'
  },
  {
    title: 'St. GreenMeadows Sbdv. Boarding',
    cover: 'img/55.jpg',
    images: ['img/551.jpg', 'img/552.jpg', 'img/553.jpg', 'img/554.jpg'],
    address: 'Quezon, Lucena City, Brgy. Ibabang Dupay, St. GreenMeadows Sbdv. (near SM, Calayan and MMG Hospital)',
    rooms: '1 big room (with bed frames) good for 6 - 8 persons (male only)',
    price: '2,000 pesos monthly (wifi, water and electricity included)',
    distance: '3.5km Away from Maryhill College Inc. (9 - 10 min ride)',
    social: '09665993555'
  },
  {
    title: 'Gulang-Gulang Boarding for Ladies',
    cover: 'img/nan.jpg',
    images: ['img/nan1.jpg', 'img/nan2.jpg', 'img/nan3.jpg'],
    address: 'Quezon, Lucena City, Brgy. Gulang - Gulang (near QMC Hospital, Drug Stores and Market)',
    rooms: '1 big room with 2 double deck frames (ladies only)',
    price: '1,800 pesos monthly (water, electricity, wifi, and drinking water included)',
    distance: '800 meters Away from Maryhill College Inc. (5 min ride)',
    social: 'Daroy C. Nania'
  },
  {
    title: 'Little Baguio Studio Type',
    cover: 'img/av.jpg',
    images: ['img/av1.jpg', 'img/av2.jpg', 'img/av3.jpg','img/av4.jpg'],
    address: 'Quezon, Lucena City, Brgy. Ibabang Dupay, Little Baguio (near SM, MMG Hospital, Calayan)',
    rooms: '1 studio-type room with own toilet and kitchen (with free double deck frame and built-in wardrobe)',
    price: '6,000 pesos monthly (wifi and water included)',
    distance: '2.5km Away from Maryhill College Inc. (7 min ride)',
    social: 'Avlem Noeled'
  },
];

function openModal(index) {
  const home = homes[index];

  document.getElementById("modalHeaderImage").innerHTML = `
    <img src="${home.images[0]}" alt="Header Image">
  `;

  document.getElementById("modalText").innerHTML = `
    <div class="price-box">OFFERED AT ${home.price.toUpperCase()}</div>
    <h2>Interior Design</h2>
    <h3>Services</h3>
    <p class="description">
      Experience the difference with our professional interior design services, 
      where creativity meets functionality to create spaces that inspire and delight.
    </p>
    
    <div class="details">
    <div class="info-box">Information:</div>
      <p><i class="fas fa-map-marker-alt"></i> ${home.address}</p>
      <p><i class="fas fa-road"></i> ${home.distance}</p>
      <p><i class="fas fa-bed"></i> ${home.rooms}</p>
      <p><i class="${/^\d/.test(home.social) ? 'fas fa-phone-alt' : 'fab fa-facebook'}"></i> ${home.social}</p>
    </div>
  `;

  document.getElementById("modalImages").innerHTML = home.images.map(img => `
    <div class="circle-image">
      <img src="${img}" alt="photo">
    </div>
  `).join('');

  document.getElementById("homeModal").style.display = "flex";
}

  function closeModal() {
    document.getElementById("homeModal").style.display = "none";
  }

  function scrollCards(direction) {
    const container = document.getElementById("cardList");
    container.scrollBy({ left: direction * 300, behavior: 'smooth' });
  }

  // Generate cards
  const cardList = document.getElementById("cardList");

  homes.forEach((home, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${home.cover}" alt="Home">
      <div class="card-content">
        <h3>${home.title}</h3>
        <p>${home.price}</p>
        <button onclick="openModal(${i})">View Details</button>
      </div>
    `;
    cardList.appendChild(card);
  });

  // Autoplay scroll
  setInterval(() => {
    const container = document.getElementById("cardList");
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (scrollLeft >= maxScroll - 10) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }, 3000);
