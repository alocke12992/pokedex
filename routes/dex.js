var express = require('express');
var router = express.Router();
var dexter = [
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png", dex: "	001	", name: "	Bulbasaur	", hp: 45, type: "	Grass	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png", dex: "	002	", name: "	Ivysaur	", hp: 60, type: "	Grass	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png", dex: "	003	", name: "	Venusaur	", hp: 80, type: "	Grass	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png", dex: "	004	", name: "	Charmander	", hp: 39, type: "	Fire	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png", dex: "	005	", name: "	Charmeleon	", hp: 58, type: "	Fire	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png", dex: "	006	", name: "	Charizard	", hp: 78, type: "	Fire	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png", dex: "	007	", name: "	Squirtle	", hp: 44, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png", dex: "	008	", name: "	Wartortle	", hp: 59, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png", dex: "	009	", name: "	Blastoise	", hp: 79, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png", dex: "	010	", name: "	Caterpie	", hp: 45, type: "	Bug	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png", dex: "	011	", name: "	Metapod	", hp: 50, type: "	Bug	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png", dex: "	012	", name: "	Butterfree	", hp: 60, type: "	Bug	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png", dex: "	013	", name: "	Weedle	", hp: 40, type: "	Bug	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png", dex: "	014	", name: "	Kakuna	", hp: 45, type: "	Bug	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png", dex: "	015	", name: "	Beedrill	", hp: 65, type: "	Bug	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png", dex: "	016	", name: "	Pidgey	", hp: 40, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png", dex: "	017	", name: "	Pidgeotto	", hp: 63, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png", dex: "	018	", name: "	Pidgeot	", hp: 83, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png", dex: "	019	", name: "	Rattata	", hp: 30, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png", dex: "	020	", name: "	Raticate	", hp: 55, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png", dex: "	021	", name: "	Spearow	", hp: 40, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png", dex: "	022	", name: "	Fearow	", hp: 65, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png", dex: "	023	", name: "	Ekans	", hp: 30, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png", dex: "	024	", name: "	Arbok	", hp: 60, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png", dex: "	025	", name: "	Pikachu	", hp: 35, type: "	Electric	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png", dex: "	026	", name: "	Raichu	", hp: 60, type: "	Electric	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png", dex: "	027	", name: "	Sandshrew	", hp: 50, type: "	Ground	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png", dex: "	028	", name: "	Sandslash	", hp: 75, type: "	Ground	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png", dex: "	029	", name: "	Nidoran ♀	", hp: 55, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png", dex: "	030	", name: "	Nidorina	", hp: 70, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png", dex: "	031	", name: "	Nidoqueen	", hp: 90, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png", dex: "	032	", name: "	Nidoran ♂	", hp: 46, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png", dex: "	033	", name: "	Nidorino	", hp: 61, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png", dex: "	034	", name: "	Nidoking	", hp: 81, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png", dex: "	035	", name: "	Clefairy	", hp: 70, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png", dex: "	036	", name: "	Clefable	", hp: 95, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png", dex: "	037	", name: "	Vulpix	", hp: 38, type: "	Fire	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png", dex: "	038	", name: "	Ninetales	", hp: 73, type: "	Fire	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png", dex: "	039	", name: "	Jigglypuff	", hp: 115, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png", dex: "	040	", name: "	Wigglytuff	", hp: 140, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png", dex: "	041	", name: "	Zubat	", hp: 40, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png", dex: "	042	", name: "	Golbat	", hp: 75, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png", dex: "	043	", name: "	Oddish	", hp: 45, type: "	Grass	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png", dex: "	044	", name: "	Gloom	", hp: 60, type: "	Grass	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png", dex: "	045	", name: "	Vileplume	", hp: 75, type: "	Grass	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/046.png", dex: "	046	", name: "	Paras	", hp: 35, type: "	Bug	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png", dex: "	047	", name: "	Parasect	", hp: 60, type: "	Bug	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/048.png", dex: "	048	", name: "	Venonat	", hp: 60, type: "	Bug	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/049.png", dex: "	049	", name: "	Venomoth	", hp: 70, type: "	Bug	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png", dex: "	050	", name: "	Diglett	", hp: 10, type: "	Ground	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051.png", dex: "	051	", name: "	Dugtrio	", hp: 35, type: "	Ground	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png", dex: "	052	", name: "	Meowth	", hp: 40, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png", dex: "	053	", name: "	Persian	", hp: 65, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png", dex: "	054	", name: "	Psyduck	", hp: 50, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png", dex: "	055	", name: "	Golduck	", hp: 80, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/056.png", dex: "	056	", name: "	Mankey	", hp: 40, type: "	Fighting	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/057.png", dex: "	057	", name: "	Primeape	", hp: 65, type: "	Fighting	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/058.png", dex: "	058	", name: "	Growlithe	", hp: 55, type: "	Fire	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png", dex: "	059	", name: "	Arcanine	", hp: 90, type: "	Fire	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png", dex: "	060	", name: "	Poliwag	", hp: 40, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png", dex: "	061	", name: "	Poliwhirl	", hp: 65, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png", dex: "	062	", name: "	Poliwrath	", hp: 90, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png", dex: "	063	", name: "	Abra	", hp: 25, type: "	Psychic	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/064.png", dex: "	064	", name: "	Kadabra	", hp: 40, type: "	Psychic	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png", dex: "	065	", name: "	Alakazam	", hp: 55, type: "	Psychic	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png", dex: "	066	", name: "	Machop	", hp: 70, type: "	Fighting	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/067.png", dex: "	067	", name: "	Machoke	", hp: 80, type: "	Fighting	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png", dex: "	068	", name: "	Machamp	", hp: 90, type: "	Fighting	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/069.png", dex: "	069	", name: "	Bellsprout	", hp: 50, type: "	Grass	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/070.png", dex: "	070	", name: "	Weepinbell	", hp: 65, type: "	Grass	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/071.png", dex: "	071	", name: "	Victreebel	", hp: 80, type: "	Grass	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/072.png", dex: "	072	", name: "	Tentacool	", hp: 40, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/073.png", dex: "	073	", name: "	Tentacruel	", hp: 80, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png", dex: "	074	", name: "	Geodude	", hp: 40, type: "	Rock	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png", dex: "	075	", name: "	Graveler	", hp: 55, type: "	Rock	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png", dex: "	076	", name: "	Golem	", hp: 80, type: "	Rock	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png", dex: "	077	", name: "	Ponyta	", hp: 50, type: "	Fire	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png", dex: "	078	", name: "	Rapidash	", hp: 65, type: "	Fire	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png", dex: "	079	", name: "	Slowpoke	", hp: 90, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png", dex: "	080	", name: "	Slowbro	", hp: 95, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png", dex: "	081	", name: "	Magnemite	", hp: 25, type: "	Electric	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png", dex: "	082	", name: "	Magneton	", hp: 50, type: "	Electric	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png", dex: "	083	", name: "	Farfetch'd	", hp: 52, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/084.png", dex: "	084	", name: "	Doduo	", hp: 35, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/085.png", dex: "	085	", name: "	Dodrio	", hp: 60, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/086.png", dex: "	086	", name: "	Seel	", hp: 65, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/087.png", dex: "	087	", name: "	Dewgong	", hp: 90, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png", dex: "	088	", name: "	Grimer	", hp: 80, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png", dex: "	089	", name: "	Muk	", hp: 105, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/090.png", dex: "	090	", name: "	Shellder	", hp: 30, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/091.png", dex: "	091	", name: "	Cloyster	", hp: 50, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/092.png", dex: "	092	", name: "	Gastly	", hp: 30, type: "	Ghost	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png", dex: "	093	", name: "	Haunter	", hp: 45, type: "	Ghost	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png", dex: "	094	", name: "	Gengar	", hp: 60, type: "	Ghost	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/095.png", dex: "	095	", name: "	Onix	", hp: 35, type: "	Rock	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/096.png", dex: "	096	", name: "	Drowzee	", hp: 60, type: "	Psychic	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/097.png", dex: "	097	", name: "	Hypno	", hp: 85, type: "	Psychic	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/098.png", dex: "	098	", name: "	Krabby	", hp: 30, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/099.png", dex: "	099	", name: "	Kingler	", hp: 55, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png", dex: "	100	", name: "	Voltorb	", hp: 40, type: "	Electric	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101.png", dex: "	101	", name: "	Electrode	", hp: 60, type: "	Electric	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/102.png", dex: "	102	", name: "	Exeggcute	", hp: 60, type: "	Grass	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/103.png", dex: "	103	", name: "	Exeggutor	", hp: 95, type: "	Grass	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/104.png", dex: "	104	", name: "	Cubone	", hp: 50, type: "	Ground	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/105.png", dex: "	105	", name: "	Marowak	", hp: 60, type: "	Ground	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png", dex: "	106	", name: "	Hitmonlee	", hp: 50, type: "	Fighting	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png", dex: "	107	", name: "	Hitmonchan	", hp: 50, type: "	Fighting	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/108.png", dex: "	108	", name: "	Lickitung	", hp: 90, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/109.png", dex: "	109	", name: "	Koffing	", hp: 40, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/110.png", dex: "	110	", name: "	Weezing	", hp: 65, type: "	Poison	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/111.png", dex: "	111	", name: "	Rhyhorn	", hp: 80, type: "	Ground	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/112.png", dex: "	112	", name: "	Rhydon	", hp: 105, type: "	Ground	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/113.png", dex: "	113	", name: "	Chansey	", hp: 250, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/114.png", dex: "	114	", name: "	Tangela	", hp: 65, type: "	Grass	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/115.png", dex: "	115	", name: "	Kangaskhan	", hp: 105, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/116.png", dex: "	116	", name: "	Horsea	", hp: 30, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/117.png", dex: "	117	", name: "	Seadra	", hp: 55, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/118.png", dex: "	118	", name: "	Goldeen	", hp: 45, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/119.png", dex: "	119	", name: "	Seaking	", hp: 80, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/120.png", dex: "	120	", name: "	Staryu	", hp: 30, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/121.png", dex: "	121	", name: "	Starmie	", hp: 60, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122.png", dex: "	122	", name: "	Mr. Mime	", hp: 40, type: "	Psychic	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/123.png", dex: "	123	", name: "	Scyther	", hp: 70, type: "	Bug	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/124.png", dex: "	124	", name: "	Jynx	", hp: 65, type: "	Ice	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/125.png", dex: "	125	", name: "	Electabuzz	", hp: 65, type: "	Electric	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/126.png", dex: "	126	", name: "	Magmar	", hp: 65, type: "	Fire	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/127.png", dex: "	127	", name: "	Pinsir	", hp: 65, type: "	Bug	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/128.png", dex: "	128	", name: "	Tauros	", hp: 75, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/129.png", dex: "	129	", name: "	Magikarp	", hp: 20, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png", dex: "	130	", name: "	Gyarados	", hp: 95, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/131.png", dex: "	131	", name: "	Lapras	", hp: 130, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png", dex: "	132	", name: "	Ditto	", hp: 48, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png", dex: "	133	", name: "	Eevee	", hp: 55, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png", dex: "	134	", name: "	Vaporeon	", hp: 130, type: "	Water	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png", dex: "	135	", name: "	Jolteon	", hp: 65, type: "	Electric	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png", dex: "	136	", name: "	Flareon	", hp: 65, type: "	Fire	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/137.png", dex: "	137	", name: "	Porygon	", hp: 65, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/138.png", dex: "	138	", name: "	Omanyte	", hp: 35, type: "	Rock	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/139.png", dex: "	139	", name: "	Omastar	", hp: 70, type: "	Rock	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/140.png", dex: "	140	", name: "	Kabuto	", hp: 30, type: "	Rock	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/141.png", dex: "	141	", name: "	Kabutops	", hp: 60, type: "	Rock	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/142.png", dex: "	142	", name: "	Aerodactyl	", hp: 80, type: "	Rock	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png", dex: "	143	", name: "	Snorlax	", hp: 160, type: "	Normal	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/144.png", dex: "	144	", name: "	Articuno	", hp: 90, type: "	Ice	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/145.png", dex: "	145	", name: "	Zapdos	", hp: 90, type: "	Electric	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/146.png", dex: "	146	", name: "	Moltres	", hp: 90, type: "	Fire	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/147.png", dex: "	147	", name: "	Dratini	", hp: 41, type: "	Dragon	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/148.png", dex: "	148	", name: "	Dragonair	", hp: 61, type: "	Dragon	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png", dex: "	149	", name: "	Dragonite	", hp: 91, type: "	Dragon	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png", dex: "	150	", name: "	Mewtwo	", hp: 106, type: "	Psychic	" },
{ img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png", dex: "	151	", name: "	Mew	", hp: 100, type: "	Psychic	" }
]


/* GET pokemon listings. */

router.get('/', function (req, res) {
  res.render('dex', { dexter: dexter });
});

module.exports = router;