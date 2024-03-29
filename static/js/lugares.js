const parques_nacionales = L.layerGroup();
	  		//BUENOS AIRES
			//const mPNciervo = L.marker([-34.2342, -58.8861]).bindPopup('Parque Nacional Ciervo de los Pantanos.').addTo(parques_nacionales);
			//const mPNcampos = L.marker([-36.35, -56.87]).bindPopup('Parque Nacional Campos del Tuyú ').addTo(parques_nacionales);
			const mPNciervo = L.marker([-34.2387948106399, -58.8649173495664]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Ciervo de los Pantanos</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Buenos Aires</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Delta e Islas del Paraná, Pampa y Espinal</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 5200</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2018</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 34°14\'20\'\'S 58°51\'54\'\'O</li></ul>');
			const mPNcampos = L.marker([-36.3545615975521, -56.8769906619981]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Campos del Tuyú</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Buenos Aires</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Pampa</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 3040</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2009</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 36°21\'16\'\'S 56°52\'37\'\'O</li></ul>');
			
			//CHACO
			//const mPNchaco = L.marker([-26.83, -59.66]).bindPopup('Parque Nacional Chaco').addTo(parques_nacionales);
			//const mPNimpenetrable = L.marker([-24.99, -61.08]).bindPopup('Parque Nacional El Impenetrable').addTo(parques_nacionales);
			//const mPNlagunapalmar = L.marker([-27.17, -58.70]).bindPopup('Parque Nacional Laguna El Palmar').addTo(parques_nacionales);
			const mPNchaco = L.marker([-26.8265834301315, -59.6550571552464]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Chaco</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Chaco</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Húmedo</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 14981</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1954</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 26°49\'36\'\'S 59°39\'18\'\'O</li></ul>');
			const mPNimpenetrable = L.marker([-25.0040129903092, -61.1051985247852]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> El Impenetrable</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Chaco</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Seco</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 128000</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2014</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 25°0\'14\'\'S 61°6\'19\'\'O</li></ul>');
			const mPNlagunapalmar = L.marker([-27.17, -58.70]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Laguna El Palmar</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Chaco</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Delta e Islas del Paraná y Chaco Húmedo</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 5600</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2023</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 27°10\'26\'\'S 58°41\'58\'\'O</li></ul>');

			//CHUBUT
			//const mPNlago = L.marker([-42.17, -71.69]).bindPopup('Parque Nacional Lago Puelo').addTo(parques_nacionales);
			//const mPNalerces = L.marker([-42.87, -71.87]).bindPopup('Parque Nacional Los Alerces').addTo(parques_nacionales);
			const mPNlago = L.marker([-42.1778666065862, -71.6870819846675]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Lago Puelo</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional y Reserva Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Chubut</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Bosques Patagónicos</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 27675</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1971</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 42°10\'40\'\'S 71°41\'13\'\'O</li></ul>');
			const mPNalerces = L.marker([-42.8445640566103, -71.8368929603251]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Los Alerces</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional y Reserva Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Chubut</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Bosques Patagónicos</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 259822</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1937</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 42°50\'40\'\'S 71°50\'13\'\'O</li></ul>');
			
			//CORDOBA
			//const mPNquebrada = L.marker([-31.67, -64.77]).bindPopup('Parque Nacional Quebrada del Condorito').addTo(parques_nacionales);
			//const mPNtraslasierra = L.marker([-31.15, -65.49]).bindPopup('Parque Nacional Traslasierra').addTo(parques_nacionales);
			//const mPNansenuza = L.marker([-30.82, -62.53]).bindPopup('Parque Nacional Ansenuza').addTo(parques_nacionales);
			const mPNansenuza = L.marker([-30.82, -62.53]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Ansenuza</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional y Reserva Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Córdoba</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Espinal y Chaco Seco</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 1060000</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2022</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 31°53\'21\'\'S 62°38\'50\'\'O</li></ul>');
			const mPNquebrada = L.marker([-31.6951999715736, -64.7862447739865]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Quebrada del Condorito</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional y Reserva Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Córdoba</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Seco (Subregión Chaco Serrano)</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 35393</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1996</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 31°41\'43\'\'S 64°47\'10\'\'O</li></ul>');
			const mPNtraslasierra = L.marker([-31.1160766972529, -65.6038229400663]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Traslasierra</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Córdoba</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Seco</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 44168</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2018</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 31°6\'58\'\'S 65°36\'14\'\'O</li></ul>');
			
			//CORRIENTES
			//const mPNibera = L.marker([-27.93, -56.93]).bindPopup('Parque Nacional Iberá').addTo(parques_nacionales);
			//const mPNmburucuya = L.marker([-28.02, -58.07]).bindPopup('Parque Nacional Mburucuyá').addTo(parques_nacionales);
			const mPNibera = L.marker([-28.2675504691376, -57.1437188137392]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Iberá</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Corrientes</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Esteros del Iberá</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 195094</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2018</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 28°16\'3\'\'S 57°8\'37\'\'O</li></ul>');
			const mPNmburucuya = L.marker([-28.0129927110329, -58.0692203641777]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Mburucuyá</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Corrientes</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Esteros del Iberá</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 17086</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2001</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 28°0\'47\'\'S 58°4\'9\'\'O</li></ul>');
			
			//ENTRE RIOS
			//const mPNpredelta = L.marker([-32.15, -60.63]).bindPopup('Parque Nacional Predelta').addTo(parques_nacionales);
			//const mPNpalmar = L.marker([-31.87, -58.25]).bindPopup('Parque Nacional El Palmar').addTo(parques_nacionales);
			const mPNpredelta = L.marker([-32.1408607594744, -60.6402407215742]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Pre-Delta</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Entre Rios</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Delta e Islas Río Paraná</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 2608</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1992</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 32°8\'27\'\'S 60°38\'25\'\'O</li></ul>');
			const mPNpalmar = L.marker([-31.8826874023768, -58.2549125718828]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> El Palmar</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Entre Ríos</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Espinal</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 8213</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1966</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 31°52\'58\'\'S 58°15\'18\'\'O</li></ul>');
			
			//FORMOSA
			//const mPNrio = L.marker([-25.05, -58.13]).bindPopup('Parque Nacional Río Pilcomayo').addTo(parques_nacionales);
			const mPNrio = L.marker([-25.0659295017325, -58.1375397633841]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Río Pilcomayo</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Formosa</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Húmedo</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 51889</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1951</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 25°3\'57\'\'S 58°8\'15\'\'O</li></ul>');
			
			//JUJUY
			//const mPNcalilegua = L.marker([-23.69, -64.79]).bindPopup('Parque Nacional Calilegua ').addTo(parques_nacionales);
			const mPNcalilegua = L.marker([-23.6602519843256, -64.8023933427792]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Calilegua</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Jujuy</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva de las Yungas</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 76306</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1979</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 23°39\'37\'\'S 64°48\'9\'\'O</li></ul>');
			
			//LA PAMPA
			//const mPNlihue = L.marker([-37.95, -65.61]).bindPopup('Parque Nacional Lihué Calel').addTo(parques_nacionales);
			const mPNlihue = L.marker([-37.9115481226135, -65.5804138337753]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Lihuel Calel</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> La Pampa</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Monte de Llanuras y Mesetas</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 32514</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1977</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 37°54\'42\'\'S 65°34\'49\'\'O</li></ul>');
			
			//LA RIOJA
			//const mPNtalampaya = L.marker([-29.90, -68.01]).bindPopup('Parque Nacional Talampaya').addTo(parques_nacionales);
			const mPNtalampaya = L.marker([-29.8548156721513, -67.8782069439868]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Talampaya</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> La Rioja</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Monte de Sierras y Bolsones</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 213800</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1997</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 29°51\'17\'\'S 67°52\'42\'\'O</li></ul>');
			
			//MISIONES
			//const mPNiguazu = L.marker([-25.64, -54.34]).bindPopup('Parque Nacional Iguazú').addTo(parques_nacionales);
			const mPNiguazu = L.marker([-25.6684656390966, -54.3109317533524]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Iguazú</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional y Reserva Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 67698</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1934</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 25°40\'6\'\'S 54°18\'39\'\'O</li></ul>');
			
			//NEUQUEN
			//const mPNlagunablanca = L.marker([-39.03, -70.35]).bindPopup('Parque Nacional Laguna Blanca').addTo(parques_nacionales);
			//const mPNlanin = L.marker([-39.89, -71.48]).bindPopup('Parque Nacional Lanín').addTo(parques_nacionales);
			//const mPNarrayanes = L.marker([-40.83, -71.61]).bindPopup('Parque Nacional Los Arrayanes').addTo(parques_nacionales);
			const mPNlagunablanca = L.marker([-39.0322745210915, -70.3530298864184]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Laguna Blanca</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional y Reserva Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Neuquén</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Estepa Patagónica</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 11251</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1940</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 39°1\'56\'\'S 70°21\'11\'\'O</li></ul>');
			const mPNlanin = L.marker([-39.8502052509712, -71.4302267267297]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Lanín</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional y Reserva Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Neuquén</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Bosques Patagónicos</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 412003</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1937</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 39°51\'1\'\'S 71°25\'49\'\'O</li></ul>');		
			const mPNarrayanes = L.marker([-40.8297057987338, -71.6284313852455]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Los Arrayanes</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Neuquén</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Bosques Patagónicos</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 1796</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1971</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 40°49\'47\'\'S 71°37\'42\'\'O</li></ul>');
			
			//RIO NEGRO
			//const mPNhuapi = L.marker([-40.87, -71.49]).bindPopup('Parque Nacional Nahuel Huapi').addTo(parques_nacionales);
			//const mPNislote = L.marker([-41.48, -65.00]).bindPopup('Parque Nacional Islote Lobos').addTo(parques_nacionales);			
			const mPNhuapi = L.marker([-40.9544967607175, -71.5363124812097]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Nahuel Huapi</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional y Reserva Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Río Negro</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Bosques Patagónicos y Estepa Patagónica</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 717261</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1934</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 40°57\'16\'\'S 71°32\'11\'\'O</li></ul>');
			const mPNislote = L.marker([-41.48, -65.00]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Islote Lobos</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Río Negro</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Monte de Llanuras y Mesetas </li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 2400</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2022</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 41°24\'0\'\'S 65°0\'0\'\'O</li></ul>');

			//SALTA
			//const mPNbaritu = L.marker([-22.58, -64.62]).bindPopup('Parque Nacional Baritú').addTo(parques_nacionales);
			//const mPNrey = L.marker([-24.67, -64.63]).bindPopup('Parque Nacional El Rey.').addTo(parques_nacionales);
			//const mPNcardones = L.marker([-25.28, -65.92]).bindPopup('Parque Nacional Los Cardones').addTo(parques_nacionales);
			const mPNbaritu = L.marker([-22.5818145090156, -64.6433569390149]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Baritú</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Salta</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva de las Yungas</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 72439</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1974</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 22°34\'55\'\'S 64°38\'36\'\'O</li></ul>');
			const mPNrey = L.marker([-24.7002051982511, -64.6262066882514]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> El Rey</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Salta</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva de las Yungas</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 44162</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1948</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 24°42\'1\'\'S 64°37\'34\'\'O</li></ul>');
			const mPNcardones = L.marker([-25.2782579453606, -65.9315004943412]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Los Cardones</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Salta</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Altos Andes, Monte de Sierras y Bolsones, Puna, Yungas</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 64117</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1996</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 25°16\'42\'\'S 65°55\'53\'\'O</li></ul>');
			
			//SAN JUAN
			//const mPNleoncito = L.marker([-31.92, -69.24]).bindPopup('Parque Nacional El Leoncito').addTo(parques_nacionales);
			//const mPNsanguillermo = L.marker([-29.31, -69.29]).bindPopup('Parque Nacional San Guillermo').addTo(parques_nacionales);
			const mPNleoncito = L.marker([-31.8893772802743, -69.2649459595596]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> El Leoncito</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> San Juan</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Monte de Sierras y Bolsones, Andes y Puna</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 89706</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2002</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 31°53\'22\'\'S 69°15\'54\'\'O</li></ul>');
			const mPNsanguillermo = L.marker([-29.2381657514814, -69.2661629891353]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> San Guillermo</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> San Juan</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Altos Andes, Puna y Monte de Sierras y Bolsones</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 166000</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1998</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 29°14\'17\'\'S 69°15\'58\'\'O</li></ul>');
			
			//SAN LUIS
			//const mPNsierra = L.marker([-32.55, -67.12]).bindPopup('Parque Nacional Sierra de las Quijadas').addTo(parques_nacionales);
			const mPNsierra = L.marker([-32.5568471328796, -67.1382434232783]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Sierra de Las Quijadas</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> San Luis</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Monte de Llanuras y Mesetas</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 73785</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1991</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 32°33\'25\'\'S 67°8\'18\'\'O</li></ul>');
			
			//SANTA CRUZ
			//const mPNbosquespetri = L.marker([-47.67, -68.09]).bindPopup('Parque Nacional Bosques Petrificados de Jaramillo').addTo(parques_nacionales);
			//const mPNglaciares = L.marker([-50.00, -73.13]).bindPopup('Parque Nacional Los Glaciares').addTo(parques_nacionales);
			//const mPNmonte = L.marker([-50.34, -68.90]).bindPopup('Parque Nacional Monte León').addTo(parques_nacionales);
			//const mPNpatagonia = L.marker([-47.16, -71.32]).bindPopup('Parque Nacional Patagonia').addTo(parques_nacionales);
			//const mPNperito = L.marker([-47.92, -72.25]).bindPopup('Parque Nacional Perito Moreno').addTo(parques_nacionales);
			const mPNbosquespetri = L.marker([-47.6934891999094, -68.0660437637543]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Bosques Petrificados de Jaramillo</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional y Monumento Natural</li><li style=\"padding: 2px\"><b>Ubicación:</b> Santa Cruz</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Estepa Patagónica</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 78543</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1954</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 47°41\'37\'\'S 68°3\'58\'\'O</li></ul>');
			const mPNglaciares = L.marker([-49.9467531249296, -73.1571382201021]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Los Glaciares</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional y Reserva Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Santa Cruz</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Bosques Patagónicos y Estepa Patagónica</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 731932</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1937</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 49°56\'48\'\'S 73°9\'26\'\'O</li></ul>');
			const mPNmonte = L.marker([-50.3229511308194, -68.9705425015115]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Monte León</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional y Reserva Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Santa Cruz</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Estepa Patagónica</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 62169</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2004</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 50°19\'23\'\'S 68°58\'14\'\'O</li></ul>');
			const mPNpatagonia = L.marker([-47.1591840899536, -71.3170061051878]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Patagonia</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Santa Cruz</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Estepa Patagónica</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 106424</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2015</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 47°9\'33\'\'S 71°19\'1\'\'O</li></ul>');
			const mPNperito = L.marker([-47.8865148156659, -72.2502227943666]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Perito Moreno</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional y Reserva Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Santa Cruz</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Bosques Patagónicos y Estepa Patagónica</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 142120</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1937</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 47°53\'11\'\'S 72°15\'1\'\'O</li></ul>');
			
			//SANTA FE
			//const mPNislas = L.marker([-32.27, -60.71]).bindPopup('Parque Nacional Islas de Santa Fe').addTo(parques_nacionales);
			const mPNislas = L.marker([-32.2791318389696, -60.7253708786221]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Islas de Santa Fe</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Santa Fe</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Delta e Islas Río Paraná</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 4096</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2010</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 32°16\'45\'\'S 60°43\'31\'\'O</li></ul>');
			
			//SANTIAGO DEL ESTERO
			//const mPNcopo = L.marker([-25.85, -61.91]).bindPopup('Parque Nacional Copo').addTo(parques_nacionales);
			const mPNcopo = L.marker([-25.8204417657854, -61.8794483741792]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Copo</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Santiago del Estero</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Seco</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 118119</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2000</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 25°49\'14\'\'S 61°52\'46\'\'O</li></ul>');
			
			//TIERRA DEL FUEGO
			//const mPNtierra = L.marker([-54.65, -68.47]).bindPopup('Parque Nacional Tierra del Fuego').addTo(parques_nacionales);
			const mPNtierra = L.marker([-54.6413520485997, -68.4858866058951]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Tierra del Fuego</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Tierra del Fuego, Antártida e Islas del Atlántico Sur</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Bosques Patagónicos</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 68909</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1960</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 54°38\'29\'\'S 68°29\'9\'\'O</li></ul>');
			
			//TUCUMAN
			const PNaconquija = L.marker([-27.2730917914747, -65.8516714797754]).addTo(parques_nacionales).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Aconquija</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Tucumán</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Yungas y de los Altos Andes</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 76207</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2018</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 27°16\'23\'\'S 65°51\'6\'\'O</li></ul>');


			const argenmap = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
				maxZoom: 19,
				attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			});
			
				const satelital = L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
				maxZoom: 19,
				attribution: 'Imágenes satelitales © Esri'
				});
			
			const redIcon = new L.Icon({
				iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
				shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41] 
			});

			const aicas = L.layerGroup();
			const mAICAmalvinas = L.marker([-51.8, -59.516667], {icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Islas Malvinas</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Áreas Importantes para la Conservación de las Aves</li><li style=\"padding: 2px\"><b>Ubicación:</b> Tierra del Fuego, Antártida e Islas del Atlántico Sur</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Mar Argentino</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 1217300</li><li style=\"padding: 2px\"><b>Año de categorización:</b> 2004</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 51°40\'00\'\'S 59°24\'00\'\'O</li></ul>').addTo(aicas);
			const mAICAgeorgias = L.marker([-54.166667, -36.800000], {icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Islas Georgias del Sur</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Áreas Importantes para la Conservación de las Aves</li><li style=\"padding: 2px\"><b>Ubicación:</b> Tierra del Fuego, Antártida e Islas del Atlántico Sur</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Mar Argentino</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 375500</li><li style=\"padding: 2px\"><b>Año de categorización:</b> 2004</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 54°10\'00\'\'S 36°48\'00\'\'O</li></ul>').addTo(aicas);
			const mAICApipanaco = L.marker([-28.174081, -66.420947], {icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Salar de Pipanaco</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Áreas Importantes para la Conservación de las Aves</li><li style=\"padding: 2px\"><b>Ubicación:</b> Catamarca</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Monte de Sierras y Bolsones</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 105500</li><li style=\"padding: 2px\"><b>Año de categorización:</b> 2004</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 28°10\'26\'\'S 66°25\'15\'\'O</li></ul>').addTo(aicas);
			const mAICAlagunablanca = L.marker([-26.629830, -66.921928], {icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Reserva Provincial y de la Biosfera Laguna Blanca</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Áreas Importantes para la Conservación de las Aves</li><li style=\"padding: 2px\"><b>Ubicación:</b> Catamarca</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Puna</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 929270</li><li style=\"padding: 2px\"><b>Año de categorización:</b> 2004</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 26°38\'04\'\'S 66°50\'16\'\'O</li></ul>').addTo(aicas);
			const mAICAambargasta = L.marker([-29.216667, -64.400000], {icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Salina de Ambargasta</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Áreas Importantes para la Conservación de las Aves</li><li style=\"padding: 2px\"><b>Ubicación:</b> Santiago del Estero</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Seco</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 300000</li><li style=\"padding: 2px\"><b>Año de categorización:</b> 2004</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 29°13\'00\'\'S 64°24\'00\'\'O</li></ul>').addTo(aicas);			
			const mAICAcolonia = L.marker([-27.3175421496952, -58.9498409456052],{icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Colonia Benítez</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Reserva Natural Educativa</li><li style=\"padding: 2px\"><b>Ubicación:</b> Chaco</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Húmedo</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 8</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1990</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 27°19\'3\'\'S 58°56\'59\'\'O</li></ul>').addTo(aicas);
			const mAICAischi = L.marker([-30.034722222222, -67.927222222222],{icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Parques Naturales de Ischigualasto / Talampaya</li><li style=\"padding: 2px\"><b>Ubicación:</b> San Juan / La Rioja</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Monte de Sierras y Bolsones</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2000</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 30° 2\' 5\"S 67° 55\' 38\"W</li></ul>').addTo(aicas);
			const mAICApatagonia = L.marker([-45.0720691833121, -66.0964002757914],{icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Patagonia Austral</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Interjurisdiccional Marino Costero</li><li style=\"padding: 2px\"><b>Ubicación:</b> Chubut</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Estepa Patagónica y Mar Argentino</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 104812</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2009</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 45°4\'19\'\'S 66°5\'47\'\'O</li></ul>').addTo(aicas);
			const mAICAformosa = L.marker([-24.2736507000236, -61.801008661303],{icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Formosa</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Reserva Natural Estricta</li><li style=\"padding: 2px\"><b>Ubicación:</b> Formosa</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Seco</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 9005</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1968</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 24°16\'25\'\'S 61°48\'4\'\'O</li></ul>').addTo(aicas);
			const mAICApozuelos = L.marker([-22.341756828984, -66.0002864990599],{icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Laguna de los Pozuelos</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Monumento Natural</li><li style=\"padding: 2px\"><b>Ubicación:</b> Jujuy</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Puna</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 16000</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1980</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 22°20\'30\'\'S 66°0\'1\'\'O</li></ul>').addTo(aicas);
			const mAICAsanantonio = L.marker([-26.0166844946224, -53.7904607326723],{icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> San Antonio</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Reserva Natural Estricta</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 480</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1990</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 26°1\'0\'\'S 53°47\'26\'\'O</li></ul>').addTo(aicas);
			const mAICApizarro = L.marker([-24.1859807388117, -64.0698532749923],{icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Pizarro</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Reserva Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Salta</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Seco,  Selva de las Yungas</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 7837</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2015</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 24°11\'10\'\'S 64°4\'11\'\'O</li></ul>').addTo(aicas);
			const mAICAnogalar = L.marker([-22.265811754062, -64.7530937528306],{icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> El Nogalar de Los Toldos</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Reserva Nacional</li><li style=\"padding: 2px\"><b>Ubicación:</b> Salta</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva de las Yungas</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 3275</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2006</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 22°15\'57\'\'S 64°45\'11\'\'O</li></ul>').addTo(aicas);
			const mAICApinguinos = L.marker([-48.1046868185695, -65.9448191571653],{icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Isla Pingüino</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Interjurisdiccional Marino</li><li style=\"padding: 2px\"><b>Ubicación:</b> Santa Cruz</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Mar Argentino</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 159526</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2012</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 48°6\'17\'\'S 65°56\'41\'\'O</li></ul>').addTo(aicas);
			const mAICAmakenke = L.marker([-49.54316111304, -67.6272898835249],{icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Makenke</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Interjurisdiccional Marino</li><li style=\"padding: 2px\"><b>Ubicación:</b> Santa Cruz</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Mar Argentino</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 72663</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2012</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 49°32\'35\'\'S 67°37\'38\'\'O</li></ul>').addTo(aicas);
			const mAICAislaestados = L.marker([-54.7970019222466, -64.3166785156753],{icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Isla de Los Estados y Archipiélago de Año Nuevo</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Reserva Natural Silvestre</li><li style=\"padding: 2px\"><b>Ubicación:</b> Tierra del Fuego, Antártida e Islas del Atlántico Sur</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Bosques Patagónicos</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 52736</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2016</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 54°47\'49\'\'S 64°19\'0\'\'O</li></ul>').addTo(aicas);
			const mAICApenvaldez = L.marker([-42.49840397171, -63.9428235662186],{icon: redIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Área Natural Protegida Península Valdés</li><li style=\"padding: 2px\"><b>Ubicación:</b> Chubut</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Mar Argentino</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1999</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 42°29\'54\'\'S 63°56\'34\'\'O</li></ul>');
						const map = L.map('map', {
				center: [-40,-59],
				zoom: 4,
				layers: [argenmap, parques_nacionales]
			});
			
				const baseLayers = {
					'Argenmap': argenmap,
					'Mapa Satelital': satelital
				};
			
				const overlays = {
					'Parques Nacionales': parques_nacionales,
					'AICAs': aicas,
				};

			const info = L.control();
			const layerControl = L.control.layers(baseLayers, overlays).addTo(map)
		
			info.onAdd = function (map) {
				this._div = L.DomUtil.create('div', 'info');
				return this._div;
			};
		
			
		
			info.addTo(map);
		
			//Colorea los limites provinciales
			function style(feature) {
				return {
				weight: 2,
				opacity: 5,
				color: '#6aa84f',
				dashArray: '3',
				fillOpacity: 0.1,
				};
			}
		
			function highlightFeature(e) {
			const layer = e.target;
		
			layer.setStyle({
				weight: 5,
				color: '#666',
				dashArray: '',
				fillOpacity: 0.1
			});
		
			layer.bringToFront();
		
			
			}
		
			/* limites provinciales */
			const geojson = L.geoJson(limites, {
			style,
			onEachFeature
			}).addTo(map);
		
			function resetHighlight(e) {
			geojson.resetStyle(e.target);
			}
		
			function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
			}
		
			function onEachFeature(feature, layer) {
			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight,
				click: zoomToFeature
			});
			}
  
    		map.attributionControl.addAttribution('Lugares importantes para observar aves <a href="https://www.ign.gob.ar/NuestrasActividades/InformacionGeoespacial/CapasSIG">IGN Instituto Geográfico Nacional</a>');
    
    		//agrego marcadores de color
			const greenIcon = new L.Icon({
				iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
				shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41] 
			});

			
			//PARQUES PROVINCIALES
			//BUENOS AIRES
			const PPtornquist = L.marker([-38.05, -62.033333], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Ernesto Tornquist</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Buenos Aires</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Pampa</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 6718</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1958</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 38° 03´ 00\"S 62° 02´ 00\"W</li></ul>');
			
			//CHACO
			const PPloro = L.marker([-25.4456694,-62.2106864], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Loro Hablador</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Chaco</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Seco</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 19500</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1998</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 25° 28´ 11\"S 61° 53´ 57\"W</li></ul>');
			const PPfuerte = L.marker([-25.1525384,-61.8148488], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Fuerte Esperanza</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Natural Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Chaco</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Seco</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 28220</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2000</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 25° 09´ 09\"S 61° 48´ 44\"W</li></ul>');
			const PPpampa = L.marker([-26.276944, -59.967658], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Pampa del Indio</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Chaco</li><li style=\"padding: 2px\"><b>Ecorregión:</b>  Chaco Húmedo y Chaco Seco</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 8633</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1957</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 26° 16´ 41\"S 59° 58´ 05\"W</li></ul>');

			//CHUBUT
			const PPcerro = L.marker([-42.150278, -71.485278], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Cerro Pirque</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Chubut</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Bosques Patagónicos</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 700</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1993</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 42° 09´ 01\"S 71° 29´ 07\"W</li></ul>');
			
			//CORDOBA
			const PPchancani = L.marker([-31.333333, -65.45], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Chancaní</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque y Reserva Natural</li><li style=\"padding: 2px\"><b>Ubicación:</b> Córdoba</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Seco</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 4920</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1986</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 31° 20´ 00\"S 65° 27´ 00\"W</li></ul>');

			//JUJUY
			const PPpotrero = L.marker([-24.1,-65.466667], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Potrero de Yala</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Jujuy</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Yungas</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 4292</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1952</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 24° 06´ 00\"S 65° 28´ 00\"W</li></ul>');

			//LA RIOJA
			const PPchiflon = L.marker([-30.2, -67.566667], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> El Chiflón</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> La Rioja</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Monte de Llanuras y Mesetas</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 9000</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2002</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 30° 12´ 00\"S 67° 34´ 00\"W</li></ul>');

			//MENDOZA
			const PPaconcagua = L.marker([-32.8241288,-69.9453089], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Aconcagua</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Mendoza</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Altos Andes</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 70000</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1983</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 32° 45´ 50\"S 69° 47´ 45\"W</li></ul>');
			
			//MISIONES
			const PParaucaria = L.marker([-26.630659, -54.099920], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> De La Araucaria</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranaense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 92</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1991</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 26° 37´ 40\"S 54° 06´ 01\"W</li></ul>');
			const PPesperanza = L.marker([-26.049211, -54.366484], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Esperanza</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranaense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 686</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1989</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 26° 01´ 41\"S 54° 36´ 30\"W</li></ul>');
			const PPguaramboca = L.marker([-27.151565, -54.224148], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Guarambocá</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranaense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 2083</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2006</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 27° 09´ 09\"S 54° 13´ 27\"W</li></ul>');
			const PPgrupo = L.marker([-25.545960, -54.123007], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Grupo de la Isla Grande del Iguazú Superior</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranaense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 150</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2005</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 25° 32´ 05\"S 54° 06´ 42\"W</li></ul>');
			const PPwelcz = L.marker([-25.843994, -53.970194], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Guardaparque Segismundo Welcz</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranaense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 209</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2007</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 25° 51´ 43\"S 53° 54´ 09\"W</li></ul>');
			const PPcametti = L.marker([-25.50, -54.10], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Ingeniero Agrónomo Roberto Cametti</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranaense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 136</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2000</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 25° 30´ 07\"S 54° 06´ 33\"W</li></ul>');
			const PPcruce = L.marker([-26.51, -53.98], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Cruce Caballero</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranaense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 434</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1991</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 26° 28´ 00\"S 53° 58´ 02\"W</li></ul>');
			const PPmocona = L.marker([-27.156172, -53.907804], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Moconá</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranaense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 999</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1988</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 27° 09´ 12\"S 53° 54´ 07\"W</li></ul>');
			const PPpinialito = L.marker([-26.442984, -53.819223], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Piñalito</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranaense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 3.800</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1997</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 26° 30´ 00\"S 53° 49´ 59\"W</li></ul>');
			const PPyacuy = L.marker([-25.60, -54.15], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Yacuy</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranaense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 347</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1989</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 25° 36´ 07\"S 54° 09´ 01\"W</li></ul>');
			const PPuruguai = L.marker([-25.857888, -54.168905], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Urugua-í</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranaense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 84000</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1990</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 25° 51´ 28\"S 54° 10´ 08\"W</li></ul>');
			const PPfoerster = L.marker([-25.862152, -53.902640], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Guardaparque Horacio Foerster</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Misiones</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Selva Paranaense</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 4309</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1992</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 25° 51´ 43\"S 53° 54´ 09\"W</li></ul>');

			//NEUQUEN
			const PPcopahue = L.marker([-37.8695068,-71.1024801], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Copahue</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Neuquén</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Bosques Patagónicos</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 28300</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1962</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 37° 42´ 58\"S 71° 03´ 14\"W</li></ul>');
			const PPtromen = L.marker([-37.127962,-70.370074,9], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> El Tromen</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Neuquén</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Altos Andes y Estepa Patagónica</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 24000</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1971*</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 37° 05´ 29\"S 70° 06´ 07\"W</li></ul>');
			
			//RIO NEGRO
			const PPparque = L.marker([-41.75, -71.516667], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Parque Azul</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Río Negro</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Bosques Patagónicos</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 10000</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2007</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 41° 45´ 00\"S 71° 31´ 00\"W</li></ul>');
			
			//SALTA
			const PPlaguna = L.marker([-22.866389, -64.481111], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Laguna Pintascayo</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Salta</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Yungas</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 12139</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2000</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 22° 51´ 59\"S 64° 28´ 52\"W</li></ul>');

			//SAN JUAN
			const PPischi = L.marker([-30.163806,-67.8450689], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Ischigualasto</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> San Juan</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Monte de Llanuras y Mesetas</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 62916</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1971</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 30° 07´ 00\"S 67° 54´ 43\"W</li></ul>');
			
			//SAN LUIS
			const PPbajo = L.marker([-32.283333, -65.4], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Bajo de Véliz</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> San Luis</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Chaco Seco</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 6000</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1989</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 32° 17´ 00\"S 65° 24´ 00\"W</li></ul>');

			//SANTA CRUZ
			const PPmonte = L.marker([-47.097778, -66.282222], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Monte Loayza</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Natural Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Santa Cruz</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Estepa Patagónica</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 1750</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2015</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 47° 05´ 52\"S 66° 16´ 56\"W</li></ul>'); 
			const PPpeninsula = L.marker([-50.399444, -72.889167], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Península de Magallanes</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Santa Cruz</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Bosques Patagónicos</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 38900</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1993</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 50° 23´ 58\"S 72° 53´ 21\"W</li></ul>');

			//SANTA FE
			const PPcaballos = L.marker([-29.933333, -59.65], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Del Medio-Los Caballos</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Santa Fe</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Delta e Islas del Río Paraná</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 2050</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1970</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 29° 56´ 00\"S 59° 39´ 00\"W</li></ul>');

			//TUCUMAN
			const PPcumbres = L.marker([-26.5, -65.633333], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Cumbres Calchaquíes</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Tucumán</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Altos Andes</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 80000</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1965</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 26° 30´ 00\"S 65° 38´ 00\"W</li></ul>');
			const PPniuniorcos = L.marker([	-27, -65.716667], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Los Ñuñorcos</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Tucumán</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Yungas y Altos Andes</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 16000</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1965</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 27° 00´ 00\"S 65° 43´ 00\"W</li></ul>');
			const PPibatin = L.marker([-27.220556, -65.586944], {icon: greenIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Ibatín</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Parque Provincial</li><li style=\"padding: 2px\"><b>Ubicación:</b> Tucumán</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Yungas</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 120</li><li style=\"padding: 2px\"><b>Año de creación:</b> 1965</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 27° 13´ 14\"S 65° 35´ 13\"W</li></ul>');

			//Agrego capas de los parques provinciales
			const parques_provinciales = L.layerGroup([PParaucaria,PPesperanza,PPguaramboca,PPgrupo,PPwelcz,PPcametti,PPcruce,PPmocona,PPpinialito,PPyacuy,PPfoerster,PPuruguai,PPischi, PPaconcagua, PPcopahue, PPtromen, PPloro, PPfuerte,PPmonte,PPbajo,PPcerro,PPcumbres,PPcaballos,PPchiflon,PPtornquist,PPibatin,PPlaguna,PPniuniorcos,PPpampa,PPparque,PPpeninsula,PPpotrero,PPchancani]);
			
			const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
				attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
			});
			layerControl.addBaseLayer(openTopoMap, 'Mapa Topográfico');
			layerControl.addOverlay(parques_provinciales, 'Parques Provinciales');

			//agrego marcadores de color
			const yellowIcon = new L.Icon({
				iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
				shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41] 
			});

			const AMPburd1 = L.marker([-54.331388888889, -59.239166666667], {icon: yellowIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Namuncurá - Banco Burdwood</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Área Marina Protegida</li><li style=\"padding: 2px\"><b>Ubicación:</b> Tierra del Fuego, Antártida e Islas del Atlántico Sur</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Mar Argentino</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 2800000</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2013</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 54° 19´ 53\"S 59° 14´ 21\"W</li></ul>');
			const AMPburd2 = L.marker([-54.340789233892, -59.1889935494808], {icon: yellowIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Namuncurá - Banco Burdwood II</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Área Marina Protegida</li><li style=\"padding: 2px\"><b>Ubicación:</b> Tierra del Fuego, Antártida e Islas del Atlántico Sur</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Mar Argentino</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 3233631</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2018</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 54°20\'27\'\'S 59°11\'20\'\'O</li></ul>');			
			const AMPyaganes = L.marker([-56.932777777778, -65.458055555556], {icon: yellowIcon}).bindPopup('<ul style=\"list-style:none\"><li style=\"padding: 2px\"><b>Nombre:</b> Yaganes</li><li style=\"padding: 2px\"><b>Categoría de conservación:</b> Área Marina Protegida</li><li style=\"padding: 2px\"><b>Ubicación:</b> Tierra del Fuego, Antártida e Islas del Atlántico Sur</li><li style=\"padding: 2px\"><b>Ecorregión:</b> Mar Argentino</li><li style=\"padding: 2px\"><b>Superficie (ha):</b> 6883431</li><li style=\"padding: 2px\"><b>Año de creación:</b> 2018</li><li style=\"padding: 2px\"><b>Coordenadas:</b> 56° 55\' 58\'\'S 65° 27\' 29\'\'W </li></ul>');
						
			const areas_marinas_protegidas = L.layerGroup([AMPburd1,AMPburd2,AMPyaganes]);
			layerControl.addOverlay(areas_marinas_protegidas, 'Áreas Marinas Protegidas');