// Apricity experience calendar — single source of event data.
// Used by apricity-calendar.html and every direction page.
// Ported 1:1 from the "Apricity Experience Calendar" artifact (22 Oct 2026).
//
// Row format:
// [title, cat, sub, status, startMonth, startDay, endMonth, endDay, city, country,
//  access, priceAmount, priceCurrency, priceUnit, note, flagship, legal, year, tier, toSource]
//   cat:    exclusive | sport | art | fashion | cinema | music | lifestyle
//   status: confirmed | date_tbc | on_request
//   tier:   hot | core | list
var APRICITY_EVENTS = [
["Andrea Bocelli Annual Evening & Party","exclusive","","confirmed",7,26,7,27,"","Italy","Villa gala dinner · Live music · Auction",null,"","","Sunset gala dinner and charity auction",0,1,2026,"hot",0],
["Leonardo DiCaprio Birthday","exclusive","","confirmed",11,8,null,null,"Los Angeles","USA","Ultra-private · Limited access",null,"","","A-list guests",0,1,2026,"hot",0],
["Private Family Dinner at Mar-a-Lago","exclusive","","confirmed",12,28,null,null,"","USA","Individual confirmation",null,"","","Evening at one of the world's most iconic estates",0,1,2026,"hot",0],
["Michelin Gastronomy & Vineyard Tours","exclusive","","on_request",null,null,null,null,"","France · Italy · Spain · Tuscany · Basque Country","Chefs · Sommeliers · Private estates",null,"","","Culinary journeys, dates per client",0,0,2026,"list",0],

["Royal Ascot","sport","Horse racing","confirmed",6,16,6,20,"Ascot","UK","Royal Enclosure · VIP · Tables",null,"","","",0,0,2026,"hot",0],
["Prix de l'Arc de Triomphe","sport","Horse racing","confirmed",10,3,10,4,"Paris","France","Royal box · VIP · Tables",null,"","","",0,0,2026,"list",0],
["The Masters","sport","Golf","confirmed",4,6,4,12,"Augusta","USA","Premium package · Concierge",null,"","","",0,0,2026,"core",0],
["Roland-Garros","sport","Tennis","confirmed",5,18,6,7,"Paris","France","Centre courts · VIP boxes · Private dinners · Tables",5000,"USD","pp","",0,0,2026,"core",0],
["Wimbledon","sport","Tennis","confirmed",6,29,7,12,"London","UK","Centre courts · VIP boxes · Private dinners · Tables",5000,"USD","pp","",0,0,2026,"hot",0],
["US Open","sport","Tennis","confirmed",8,31,9,13,"New York","USA","Centre courts · VIP boxes · Private dinners · Tables",5000,"USD","pp","",0,0,2026,"core",0],
["Canadian Grand Prix","sport","Formula 1","confirmed",5,22,5,24,"Montreal","Canada","Paddock Club · Team access · VIP grandstands · After-race parties",null,"","","",0,0,2026,"list",0],
["Monaco Grand Prix","sport","Formula 1","confirmed",6,4,6,7,"Monaco","Monaco","Paddock Club · Harbour yachts · VIP grandstands · After-race parties",null,"","","",1,0,2026,"hot",0],
["British Grand Prix","sport","Formula 1","confirmed",7,3,7,5,"Silverstone","UK","Paddock Club · Team access · VIP grandstands",null,"","","",0,0,2026,"list",0],
["Dutch Grand Prix","sport","Formula 1","confirmed",8,21,8,23,"Zandvoort","Netherlands","Paddock Club · Team access · VIP grandstands",null,"","","",0,0,2026,"list",0],
["Italian Grand Prix","sport","Formula 1","confirmed",9,4,9,6,"Monza","Italy","Paddock Club · Team access · VIP grandstands",null,"","","",0,0,2026,"list",0],
["Azerbaijan Grand Prix","sport","Formula 1","confirmed",9,25,9,27,"Baku","Azerbaijan","Paddock Club · Team access · VIP grandstands",null,"","","",0,0,2026,"list",0],
["United States Grand Prix — Austin","sport","Formula 1","confirmed",10,22,10,25,"Austin, TX","USA","Paddock Club · Team access · VIP grandstands",null,"","","",0,0,2026,"list",0],
["Las Vegas Grand Prix","sport","Formula 1","confirmed",11,19,11,21,"Las Vegas","USA","Paddock Club · Shows · Tables · Concierge",null,"","","",0,0,2026,"hot",0],
["Abu Dhabi Grand Prix","sport","Formula 1","confirmed",12,3,12,6,"Abu Dhabi","UAE","Paddock Club · Yachts · VIP grandstands · After-race parties",null,"","","",0,0,2026,"hot",0],
["UEFA Europa League Final","sport","Football","confirmed",5,20,null,null,"Istanbul","Turkey","VIP box · Access to football legends",null,"","","",0,0,2026,"list",0],
["UEFA Champions League Final","sport","Football","confirmed",5,30,null,null,"Budapest","Hungary","VIP box · Access to football legends",null,"","","",1,0,2026,"hot",0],
["FIFA World Cup","sport","Football","confirmed",6,11,7,19,"","USA · Canada · Mexico","VIP box · Hospitality · Access to football legends",null,"","","",1,0,2026,"hot",0],
["Lionel Messi × Cristiano Ronaldo","sport","Football · Exclusive","on_request",null,null,null,null,"","By arrangement","Private meeting · Photo session · Autographs · Premium tickets",null,"","","",0,1,2026,"hot",0],
["Real Madrid Kids Football Camp","sport","Football · Exclusive","on_request",null,null,null,null,"Madrid","Spain","Accommodation · Professional coaching · Club philosophy immersion",2500,"EUR","child / week","",0,0,2026,"list",0],
["Real Madrid — Private Team Meeting","sport","Football · Exclusive","on_request",null,null,null,null,"Madrid","Spain","Training access · Club base tour · Presidential box · Photos & autographs",null,"","","",0,1,2026,"hot",0],
["Football Legends — Brands & Media","sport","Football · Exclusive","on_request",null,null,null,null,"","Global","Private appearances · Brand collaborations · Campaign participation",null,"","","",0,1,2026,"list",0],

["Art Basel Basel","art","","confirmed",6,18,6,21,"Basel","Switzerland","VIP preview · Collectors' lounges · Private sales · Gallery dinners · After-parties",null,"","","",0,0,2026,"core",0],
["Salzburg Festival","art","","confirmed",7,17,8,30,"Salzburg","Austria","VIP vernissage · Dinners · After-parties",null,"","","",0,0,2026,"list",0],
["Salzburg Festival — Peak Weeks","art","","date_tbc",8,null,null,null,"Salzburg","Austria","VIP · Closed peak-week formats",null,"","","",0,0,2026,"list",0],
["Frieze London","art","","confirmed",10,14,10,18,"London","UK","VIP preview · Collectors' lounges · Private sales",null,"","","",0,0,2026,"list",0],
["Art Basel Paris","art","","confirmed",10,23,10,25,"Paris","France","VIP preview · Collectors' lounges · Private sales",null,"","","",0,0,2026,"core",0],
["Art Basel Paris — 6-Day Journey","art","Signature tour","confirmed",10,21,10,26,"Paris · Normandy","France","Dinner with an art dealer at Lapérouse · Opening + lunch at Grand Palais · Design Miami Paris · Left Bank with guide · Private club · Maison Gainsbourg · Giverny · Étretat · Wine dinner",null,"","","From the Salon des Refusés to Art Basel; dates aligned to the fair",0,0,2026,"hot",0],

["Paris Haute Couture Week","fashion","","confirmed",7,6,7,9,"Paris","France","Invitations · Front row · Backstage · Private fittings · Stylists",5000,"USD","pp","",1,0,2026,"hot",0],
["Dubai Fashion Week","fashion","","confirmed",9,1,9,6,"Dubai","UAE","Invitations · Front row · Private after-parties",5000,"USD","pp","",0,0,2026,"list",0],
["New York Fashion Week","fashion","","confirmed",9,9,9,14,"New York","USA","Invitations · Front row · Private after-parties",5000,"USD","pp","",0,0,2026,"core",0],
["London Fashion Week","fashion","","confirmed",9,17,9,21,"London","UK","Invitations · Front row · Private after-parties",5000,"USD","pp","",0,0,2026,"core",0],
["Milan Fashion Week","fashion","","confirmed",9,22,9,28,"Milan","Italy","Invitations · Front row · Backstage · Brand-level access",5000,"USD","pp","",0,0,2026,"core",0],
["Paris Fashion Week SS27","fashion","","confirmed",9,28,10,6,"Paris","France","Show invitations to 18 houses · Front row · Backstage · Fittings · Stylists · Paris turnkey (hotel, logistics, concierge)",7000,"EUR","pp","Per-show pricing €7,000–12,500 (Saint Laurent / Schiaparelli 12.5k, Miu Miu / Louis Vuitton 12k, Balmain 11k)",0,0,2026,"hot",0],
["The Fashion Awards","fashion","","confirmed",11,30,null,null,"London","UK","Invitations · Ceremony · After-party",null,"","","",0,0,2026,"core",0],
["Miss Universe","fashion","","date_tbc",11,null,null,null,"","Puerto Rico","VIP · Invitations · Backstage",null,"","","",0,0,2026,"list",0],

["Cannes Film Festival","cinema","","confirmed",5,12,5,23,"Cannes","France","Red carpet · Key parties · Yacht ceremonies & after-parties · Film pass · Festival pass",null,"","","",1,0,2026,"hot",0],
["Venice International Film Festival","cinema","","confirmed",9,2,9,12,"Venice","Italy","Red carpets · Armani Beauty · amfAR Venezia · TOP CHARITY · Cartier · Campari · La Dolce Vita",null,"","","Per-guest pricing by day; own offer PDF exists",0,0,2026,"hot",0],

["Beyoncé — Stadium Tour","music","","date_tbc",5,null,9,null,"London · Paris · Barcelona · Milan","","VIP tables & boxes · Backstage · Artist access · After-party",null,"","","",0,1,2026,"core",0],
["Ludovico Einaudi","music","","date_tbc",5,null,10,null,"London · Paris · Milan · Berlin","","VIP boxes · Private dinners with artists",null,"","","",0,0,2026,"list",0],
["Travis Scott — European Tour","music","","date_tbc",6,null,8,null,"London · Paris · Amsterdam · Berlin","","VIP tables · Backstage · After-party",null,"","","",0,0,2026,"list",0],
["Robbie Williams Tour","music","","date_tbc",6,null,9,null,"London · Munich · Vienna · Milan","","VIP boxes · Backstage · Artist access",null,"","","",0,0,2026,"list",0],
["Andrea Bocelli — Open Air","music","","date_tbc",6,null,8,null,"Tuscany · Verona","Italy","VIP boxes · Private dinners with artists",null,"","","",0,0,2026,"core",0],
["Istanbul Jazz Festival","music","","date_tbc",6,null,7,null,"Istanbul","Turkey","VIP tables · Backstage",null,"","","",0,0,2026,"list",0],
["Glastonbury Festival — Backstage Village","music","","confirmed",6,24,6,28,"Somerset","UK","Backstage Village · Artist access",null,"","","",0,0,2026,"core",0],
["BST Hyde Park Festival","music","","confirmed",6,27,null,null,"London","UK","VIP areas · Premium tickets · After-party",null,"","","",0,0,2026,"list",0],
["Montreux Jazz Festival","music","","confirmed",7,3,7,18,"Montreux","Switzerland","VIP tables & boxes · Backstage · Artist access",null,"","","",0,0,2026,"core",0],
["Tomorrowland Summer","music","","confirmed",7,17,7,26,"Boom","Belgium","VIP · Backstage",null,"","","Two weekends: 17–19 Jul and 24–26 Jul",0,0,2026,"core",0],
["Mykonos Club Season — Peak","music","","date_tbc",7,null,8,null,"Mykonos","Greece","Scorpios · Nammos · Cavo Paradiso · Tables & VIP",null,"","","",0,0,2026,"list",0],
["Ibiza Closing Season","music","","date_tbc",8,null,9,null,"Ibiza","Spain","Ushuaïa · Hï · Amnesia · Tables & VIP",null,"","","",0,0,2026,"list",0],
["Burning Man","music","","confirmed",8,25,9,2,"Black Rock City, NV","USA","Access to private camps (Humano · CORE and others)",null,"","","",0,0,2026,"hot",0],
["Zamna Festival — Mexico / Europe","music","","date_tbc",9,null,10,null,"Tulum · Ibiza","","Private jungle sets · Private seaside sets",null,"","","",0,0,2026,"list",0],

["Monaco Summer Season","lifestyle","","date_tbc",7,null,8,null,"Monaco","Monaco","Private yachts · Casino · SBM private dinners · VIP · Private",null,"","","",0,0,2026,"list",0],
["Goodwood Festival of Speed","lifestyle","","confirmed",7,9,7,12,"Goodwood","UK","Private car launches · Dinners with owners · VIP · Private",null,"","","",0,0,2026,"list",0],
["Monaco Red Cross Ball","lifestyle","","confirmed",7,11,null,null,"Monaco","Monaco","Invitation · Tables",7500,"USD","pp","",0,0,2026,"hot",0],
["New Year's Eve — Private Events","lifestyle","","confirmed",12,31,null,null,"Dubai · Saint-Tropez · Monaco · London","","Private formats on yachts and villas · VIP",null,"","","",0,0,2026,"hot",0],

["Private After-Party Invitations","lifestyle","Year-round","on_request",null,null,null,null,"Cannes · London · Paris · Dubai · New York","","After-party · VIP · Private",null,"","","",0,0,2026,"list",0],
["Private Gala Dinners — Season","lifestyle","Year-round","on_request",null,null,null,null,"","Global · peak Nov–Dec","Charity galas · Society dinners · VIP · Private",null,"","","",0,0,2026,"list",0],
["Backstage & Meet-and-Greet with Artists","music","Year-round","on_request",null,null,null,null,"","Global","Backstage · VIP · Private",null,"","","",0,1,2026,"list",0],
["Private Dinners with World Personalities","exclusive","Year-round","on_request",null,null,null,null,"","Global","VIP · Private",null,"","","",0,1,2026,"list",0],
["World's #1 Restaurant Tables","exclusive","Year-round","on_request",null,null,null,null,"Noma · Osteria Francescana · Le Bernardin and others","","Tables · Reservations beyond public booking",null,"","","",0,0,2026,"list",0],

["Shakira — Live at the Pyramids of Giza","music","VIP Lounge","confirmed",11,28,null,null,"Giza","Egypt","Official VIP Lounge · Front-row lounge seat · Fast track · Food & drinks · Limited-edition gift",4500,"EUR","pp","One night only; own offer PDF exists",0,0,2026,"hot",0],
["World Economic Forum — Davos","exclusive","","confirmed",1,18,1,22,"Davos","Switzerland","Access badge for secured zones · Swiss police clearance · Full itinerary of events, dinners, private meetings · Optional accommodation + transport",99000,"EUR","pp","Tier 1 €99,000 · Tier 2 with accommodation €129,000; itinerary shared mid-December 2026",1,0,2027,"hot",0],
["Player Meet & Greet — Real Madrid & FC Barcelona","sport","Football · Exclusive","on_request",null,null,null,null,"Madrid · Barcelona","Spain","Private meeting with one of 23 players · Signed jersey · Photos & videos",30000,"EUR","group of 2","Top tier (Mbappé, Yamal) €60,000; Bellingham / Pedri / Rodri €50,000",0,1,2026,"hot",0],
["El Clásico — Signature Journey","sport","Football · Signature tour","on_request",null,null,null,null,"Madrid or Barcelona","Spain","Match hospitality · City programme · Concierge",null,"","","Dates follow the La Liga fixture",0,0,2026,"list",0],
["FIFA World Cup Final — New York Package","sport","Football","confirmed",7,19,null,null,"New York (MetLife Stadium)","USA","Final match hospitality · Accommodation · Transfers · Concierge",null,"","","",1,0,2026,"hot",0],
["Bocelli in Tuscany — Signature Journey","music","Signature tour","date_tbc",7,null,null,null,"Tuscany","Italy","Concert · Private dinners · Tuscan estates · Concierge",null,"","","Built around the Bocelli summer dates",0,0,2026,"list",0],
["Wimbledon — Signature Journey","sport","Tennis · Signature tour","confirmed",6,29,7,12,"London","UK","Centre Court · Private dinners · London programme",null,"","","",0,0,2026,"list",0],
["US Open × New York Fashion Week","sport","Signature tour","confirmed",8,31,9,14,"New York","USA","Tennis + fashion week combined programme · Hospitality · Front row · Concierge",null,"","","",0,0,2026,"list",0],
["Mykonos · Ibiza · Bodrum — Summer Journey","lifestyle","Signature tour","date_tbc",7,null,8,null,"Mykonos · Ibiza · Bodrum","","Beach clubs · Yachts · Villas · Club tables · Concierge",null,"","","",0,0,2026,"list",0],
["Antonio Banderas — Theatre in Madrid","exclusive","Theatre","on_request",null,null,null,null,"Madrid","Spain","Premium theatre tickets · Dinner reservations",null,"","","Explored; availability per season",0,1,2026,"list",0],

["La Scala — Season Opening Night","art","Opera","confirmed",12,7,null,null,"Milan","Italy","Opening-night seats · Gala dinner · Private box",null,"","","Sant'Ambrogio premiere; most sought-after opera night in Europe",0,0,2026,"core",1],
["Art Basel Miami Beach","art","","confirmed",12,4,12,6,"Miami Beach","USA","VIP preview · Collectors' lounges · Brand parties · Private dinners",null,"","","With Design Miami 2–6 Dec and the week's brand parties",0,0,2026,"core",1],
["Design Miami","art","Design","confirmed",12,2,12,6,"Miami Beach","USA","Collector preview · Gallery dinners",null,"","","",0,0,2026,"list",1],
["Web Summit Lisbon","exclusive","Business","date_tbc",11,null,null,null,"Lisbon","Portugal","Founder & investor passes · Private dinners · Side events",null,"","","",0,0,2026,"list",1],
["St. Barths New Year's Eve","lifestyle","Season","confirmed",12,31,null,null,"St. Barths","French West Indies","Villa & yacht parties · Nikki Beach · Private dinners",null,"","","",0,0,2026,"list",1],

["Golden Globe Awards","cinema","Awards season","confirmed",1,10,null,null,"Beverly Hills","USA","Ceremony tickets · Official after-parties · Viewing dinners",null,"","","",0,0,2027,"core",1],
["Australian Open","sport","Tennis","date_tbc",1,null,null,null,"Melbourne","Australia","Rod Laver Arena · Hospitality suites · Finals",null,"","","Usually second half of January",0,0,2027,"list",1],
["Snow Polo World Cup St. Moritz","sport","Winter season","date_tbc",1,null,null,null,"St. Moritz","Switzerland","VIP tent · Badrutt's Palace season · Private chalets",null,"","","Late January; White Turf follows in February",0,0,2027,"list",1],
["Venice Carnival","lifestyle","Season","date_tbc",1,null,2,null,"Venice","Italy","Il Ballo del Doge · Private palazzo balls · Costume ateliers",null,"","","30 Jan – 9 Feb 2027 (TBC)",0,0,2027,"list",1],
["Vienna Opera Ball","lifestyle","Ball","confirmed",2,4,null,null,"Vienna","Austria","Box or table · Debutante opening · After-ball",null,"","","",0,0,2027,"core",1],
["Rio Carnival","lifestyle","Season","date_tbc",2,null,null,null,"Rio de Janeiro","Brazil","Sambadrome camarote · Magic Ball at Copacabana Palace · Private blocos",null,"","","5–10 Feb 2027 (TBC)",0,0,2027,"list",1],
["Grammy Awards & After-Parties","music","Awards season","confirmed",2,7,null,null,"Los Angeles","USA","Ceremony tickets · Clive Davis pre-Grammy gala · Label after-parties (Warner, Republic, Universal)",null,"","","",1,0,2027,"hot",1],
["Super Bowl LXI","sport","American football","confirmed",2,14,null,null,"Inglewood (SoFi Stadium)","USA","Suites · On-field access · Maxim / Bootsy on the Water parties · Private jets",null,"","","",1,0,2027,"hot",1],
["BAFTA Film Awards","cinema","Awards season","confirmed",2,21,null,null,"London","UK","Ceremony · BAFTA Tea Party · After-party",null,"","","",0,0,2027,"core",1],
["Frieze Los Angeles","art","","date_tbc",2,null,null,null,"Los Angeles","USA","VIP preview · Collector dinners",null,"","","Late February",0,0,2027,"list",1],
["Actor Awards (SAG-AFTRA)","cinema","Awards season","confirmed",2,28,null,null,"Los Angeles","USA","Ceremony · After-party",null,"","","",0,0,2027,"list",1],
["Bal de la Rose","lifestyle","Ball","date_tbc",3,null,null,null,"Monaco","Monaco","Table at the Salle des Étoiles · Princely family presence",null,"","","March, Sporting Monte-Carlo",0,0,2027,"core",1],
["Oscars Weekend — Viewing & After-Parties","cinema","Awards season","confirmed",3,14,null,null,"Los Angeles","USA","Elton John AIDS Foundation viewing party · Vanity Fair · Pre-Oscars parties (Night Before, WME) · Governors Ball",null,"","","99th Academy Awards, 14 Mar 2027",1,0,2027,"hot",1],
["TEFAF Maastricht","art","","confirmed",3,13,3,18,"Maastricht","Netherlands","Early Access day · Private viewings",null,"","","",0,0,2027,"list",1],
["Art Basel Hong Kong","art","","confirmed",3,25,3,27,"Hong Kong","China","VIP preview · Collectors' lounge · Gallery dinners",null,"","","",0,0,2027,"list",1],
["Dubai World Cup","sport","Horse racing","date_tbc",3,null,null,null,"Dubai (Meydan)","UAE","Royal Enclosure · Private suites · After-party",null,"","","Last Saturday of March",0,0,2027,"list",1],
["Indian Wells — BNP Paribas Open","sport","Tennis","date_tbc",3,null,null,null,"Indian Wells","USA","Suites · Player access",null,"","","",0,0,2027,"list",1],
["Coachella","music","Festival","date_tbc",4,null,null,null,"Indio, CA","USA","VIP & artist passes · Private estate parties · Brand activations",null,"","","Two weekends in April",0,0,2027,"core",1],
["The Masters","sport","Golf","confirmed",4,8,4,11,"Augusta","USA","Badges · Hospitality house · Concierge",null,"","","",0,0,2027,"core",0],
["Milan Design Week / Salone del Mobile","art","Design","confirmed",4,13,4,18,"Milan","Italy","Brand previews · Palazzo parties · Fuorisalone private events",null,"","","",0,0,2027,"list",1],
["White House Correspondents' Dinner","exclusive","Society","date_tbc",4,null,null,null,"Washington, D.C.","USA","Dinner seat · Pre- and after-parties",null,"","","Late April",0,1,2027,"list",1],
["Kentucky Derby","sport","Horse racing","confirmed",5,1,null,null,"Louisville","USA","Millionaires Row · Private suites · Barnstable Brown gala",null,"","","",0,0,2027,"list",1],
["Met Gala","exclusive","Society","confirmed",5,3,null,null,"New York","USA","Invitation (extremely limited) · After-parties · Front-row at the Met",null,"","","First Monday of May; access via sponsor tables only",1,1,2027,"hot",1],
["Frieze New York","art","","date_tbc",5,null,null,null,"New York","USA","VIP preview · Collector dinners",null,"","","",0,0,2027,"list",1],
["Milken Institute Global Conference","exclusive","Business","date_tbc",5,null,null,null,"Beverly Hills","USA","Delegate pass · Private dinners",null,"","","Early May",0,0,2027,"list",1],
["Cannes Film Festival","cinema","","confirmed",5,11,5,22,"Cannes","France","Red carpet · amfAR Cannes · Chopard party · Yacht after-parties · Film & festival passes",null,"","","",1,0,2027,"hot",0],
["amfAR Gala Cannes","exclusive","Charity gala","date_tbc",5,null,null,null,"Cap d'Antibes (Hôtel du Cap-Eden-Roc)","France","Table · Auction · After-party",null,"","","During the festival, c. 20 May",1,0,2027,"hot",1],
["Monaco Grand Prix","sport","Formula 1","date_tbc",5,null,6,null,"Monaco","Monaco","Paddock Club · Harbour yachts · Amber Lounge · TAG Heuer / Heavensake yacht parties",null,"","","F1 2027 calendar pending",1,0,2027,"hot",0],
["Roland-Garros","sport","Tennis","date_tbc",5,null,6,null,"Paris","France","Centre courts · VIP boxes · Private dinners",5000,"USD","pp","",0,0,2027,"core",0],
["UEFA Champions League Final","sport","Football","confirmed",6,5,null,null,"Madrid (Metropolitano)","Spain","VIP box · Hospitality · Access to football legends",null,"","","",1,0,2027,"hot",0],
["24 Hours of Le Mans","sport","Motorsport","date_tbc",6,null,null,null,"Le Mans","France","Hospitality · Pit access · Manufacturer suites",null,"","","Mid-June",0,0,2027,"list",1],
["Royal Ascot","sport","Horse racing","date_tbc",6,null,null,null,"Ascot","UK","Royal Enclosure · Private box · Tables",null,"","","Third week of June",0,0,2027,"core",0],
["Art Basel Basel","art","","date_tbc",6,null,null,null,"Basel","Switzerland","VIP preview · Collectors' lounges · Private sales",null,"","","Mid-June",0,0,2027,"core",0],
["Cannes Lions","exclusive","Business","date_tbc",6,null,null,null,"Cannes","France","Delegate pass · Brand yacht parties · Beach villas",null,"","","",0,0,2027,"list",1],
["London Summer Parties — Serpentine · V&A · Elton John Midsummer","lifestyle","Society","date_tbc",6,null,7,null,"London","UK","Invitations · Tables",null,"","","Serpentine Summer Party, V&A Summer Party, Elton John Midsummer Party",0,0,2027,"core",1],
["Wimbledon","sport","Tennis","confirmed",6,28,7,11,"London","UK","Centre Court debentures · VIP hospitality · Private dinners",5000,"USD","pp","",1,0,2027,"hot",0],
["Paris Haute Couture Week","fashion","","date_tbc",7,null,null,null,"Paris","France","Invitations · Front row · Backstage · Private fittings",5000,"USD","pp","Early July",1,0,2027,"hot",0],
["Monaco Red Cross Ball","lifestyle","Ball","date_tbc",7,null,null,null,"Monaco","Monaco","Invitation · Tables",7500,"USD","pp","",1,0,2027,"hot",0],
["Andrea Bocelli Annual Evening & Party","exclusive","","date_tbc",7,null,null,null,"","Italy","Villa gala dinner · Live music · Auction",null,"","","Celebrity Fight Night / Bocelli Foundation weekend",1,1,2027,"hot",0],
["Montreux Jazz Festival","music","","date_tbc",7,null,null,null,"Montreux","Switzerland","VIP tables & boxes · Backstage",null,"","","",0,0,2027,"list",0],
["Tomorrowland Summer","music","Festival","date_tbc",7,null,null,null,"Boom","Belgium","VIP · Backstage",null,"","","",0,0,2027,"list",0],
["Salzburg Festival","art","","date_tbc",7,null,8,null,"Salzburg","Austria","Premieres · Dinners",null,"","","",0,0,2027,"list",0],
["Burning Man","music","","date_tbc",8,null,9,null,"Black Rock City, NV","USA","Private camps (Humano · CORE)",null,"","","",1,0,2027,"hot",0],
["US Open","sport","Tennis","date_tbc",8,null,9,null,"New York","USA","Centre courts · Suites · Private dinners",5000,"USD","pp","",0,0,2027,"core",0],
["Venice International Film Festival","cinema","","date_tbc",9,null,null,null,"Venice","Italy","Red carpets · amfAR Venice · Brand galas",null,"","","",1,0,2027,"hot",0],
["New York Fashion Week","fashion","","date_tbc",9,null,null,null,"New York","USA","Invitations · Front row · After-parties",5000,"USD","pp","",0,0,2027,"core",0],
["London Fashion Week","fashion","","date_tbc",9,null,null,null,"London","UK","Invitations · Front row",5000,"USD","pp","",0,0,2027,"list",0],
["Milan Fashion Week","fashion","","date_tbc",9,null,null,null,"Milan","Italy","Invitations · Front row · Backstage",5000,"USD","pp","",0,0,2027,"core",0],
["Paris Fashion Week SS28","fashion","","date_tbc",9,null,10,null,"Paris","France","Show invitations by house · Front row · Backstage · Fittings · Paris turnkey",7000,"EUR","pp","Per-show pricing as SS27 (€7,000–12,500)",1,0,2027,"hot",0],
["Ryder Cup","sport","Golf","confirmed",9,17,9,19,"Adare Manor, Co. Limerick","Ireland","Hospitality · On-course chalets · Adare Manor stay",null,"","","",1,0,2027,"hot",1],
["Monaco Yacht Show","lifestyle","Yachting","date_tbc",9,null,null,null,"Monaco","Monaco","Yacht viewings · Owners' dinners · After-parties",null,"","","Late September",0,0,2027,"list",1],
["Goodwood Revival","lifestyle","Motoring","date_tbc",9,null,null,null,"Goodwood","UK","Private enclosures · Period dress · Dinners",null,"","","",0,0,2027,"list",1],
["Oktoberfest — Private Tent Tables","lifestyle","Season","date_tbc",9,null,10,null,"Munich","Germany","Reserved tables in Käfer / Schützen tents",null,"","","",0,0,2027,"list",1],
["Rugby World Cup","sport","Rugby","confirmed",10,1,11,13,"","Australia","Final hospitality · Suites · Legends access",null,"","","",0,0,2027,"core",1],
["Frieze London","art","","date_tbc",10,null,null,null,"London","UK","VIP preview · Collectors' lounges",null,"","","",0,0,2027,"list",0],
["Art Basel Paris","art","","date_tbc",10,null,null,null,"Paris","France","VIP preview · 6-day journey option (Paris + Normandy)",null,"","","",1,0,2027,"hot",0],
["Prix de l'Arc de Triomphe","sport","Horse racing","date_tbc",10,null,null,null,"Paris","France","Royal box · Tables",null,"","","",0,0,2027,"list",0],
["Formula 1 — Season 2027 (Bahrain · Saudi · Miami · Singapore · Japan · Las Vegas · Qatar · Abu Dhabi)","sport","Formula 1","on_request",null,null,null,null,"","Global","Paddock Club · Team garages · Yacht & after-race parties at every round",null,"","","Full 2027 calendar once published; Monaco listed separately",0,0,2027,"core",0],
["Big-Fight Nights — Boxing & UFC","sport","Combat sports","on_request",null,null,null,null,"Las Vegas · Riyadh · London","","Ringside · Fighter meet & greet · After-parties",null,"","","",0,0,2027,"list",1],
["Ski Season — Courchevel · Gstaad · St. Moritz · Aspen","lifestyle","Season","on_request",null,null,null,null,"Alps · Rockies","","Chalets · Private guides · Club tables · Heli-ski",null,"","","Dec–Mar",0,0,2027,"list",1],
["Global Gift Gala (Eva Longoria)","exclusive","Charity gala","on_request",null,null,null,null,"Paris · Marbella · Dubai · Geneva","","Table · After-party",null,"","","Several editions a year",0,1,2027,"list",1],
["Heidi Klum / Casamigos Halloween Parties","lifestyle","Society","date_tbc",10,null,null,null,"Los Angeles","USA","Invitation",null,"","","",0,1,2027,"list",1],
].map(function (r, i) {
  return { id: i, title: r[0], cat: r[1], sub: r[2], status: r[3], sm: r[4], sd: r[5], em: r[6], ed: r[7],
    city: r[8], country: r[9], access: r[10], amt: r[11], cur: r[12], unit: r[13], note: r[14],
    flag: r[15], legal: r[16], y: r[17] || 2026, tier: r[18] || 'core', cand: r[19] || 0 };
});

var APRICITY_CATS = { exclusive: 'Exclusive', sport: 'Sport', art: 'Art', fashion: 'Fashion', cinema: 'Cinema', music: 'Music', lifestyle: 'Lifestyle' };
var APRICITY_STATUS = { confirmed: 'Confirmed', date_tbc: 'Date TBC', on_request: 'On request' };
var APRICITY_MONTHS = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function apricityToday() { var d = new Date(); return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); }
function apricityDateKey(e) { return e.sm == null ? 99999999 : e.y * 10000 + e.sm * 100 + (e.sd || 0); }
function apricityEndKey(e) {
  if (e.sm == null) return 99999999;
  var m = e.em || e.sm, d = e.ed != null ? e.ed : e.sd;
  return e.y * 10000 + m * 100 + (d == null ? 31 : d);
}
function apricityIsUpcoming(e) { return e.status === 'on_request' || apricityEndKey(e) >= apricityToday(); }
function apricityFmtDate(e) {
  var M = APRICITY_MONTHS, yr = e.y !== 2026 ? ' ' + e.y : '';
  if (e.status === 'on_request') return 'On request';
  if (e.sd == null) return (e.em ? M[e.sm] + ' – ' + M[e.em] : M[e.sm] + ' · TBC') + yr;
  if (!e.em) return e.sd + ' ' + M[e.sm] + yr;
  return e.sm === e.em ? e.sd + '–' + e.ed + ' ' + M[e.sm] + yr : e.sd + ' ' + M[e.sm] + ' – ' + e.ed + ' ' + M[e.em] + yr;
}
function apricityLoc(e) { return [e.city, e.country].filter(Boolean).join(', '); }
function apricityPrice(e) {
  return e.amt ? (e.cur === 'EUR' ? '€' : '$') + e.amt.toLocaleString('en-US') + ' ' + e.unit : 'Request access';
}
