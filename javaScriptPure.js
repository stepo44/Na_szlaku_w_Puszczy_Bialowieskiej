/*

Zadaniem gracza jest przemierzenie Puszczy Białowieskiej i dotarcie do Białowieży.
Na starcie gracz posiada w swoim plecaku 7 artefaktów, a po drodze zbiera kolejne.
W każdym, odwiedzonym miejscu gracz dokonuje wyboru kierunku dalszej drogi.
Aby ruszyć dalej z danego miejsca musi pokonać przeszkodę. Pomagają mu w tym zebrane artefakty.
W każdym miejscu, przy wyborze ścieżki, gracz posiada trzy opcje:
	1. pokonać przeszkodę za pomocą odpowiedniego artefaktu i ruszyć na przód (strata 1 artefaktu),
	2. przenieść się do miejsca obok (strata 2 artefaktów),
	3. cofnąć się do poprzedniego miejsca i wybrać inną ścieżkę (bez starty artefaktów),

Do każdego miejsca przypisana jest przeszkoda (gracz zapamiętuje przypisane przeszkody i na podstawie tego dokonuje kolejnych wyborów).
Wszystkie artefakty (7 danych na starcie i kolejne zdobywane w odwiedzanych miejscach) dane są losowo.
W ten sposób przy planowaniu kolejnego ruchu gracz z jednej strony może kontrolować kolejność następujących przeszkód,
z drugiej strony nie może przewidzieć jakie artefakty będzie posiadał w danym miejscu.

Wynik końcowy = zdobyte artefakty + odwiedzone miejsca - wykonane ruchy



*/





//***************************************  constructor function "Place" ***********************************************************

	function Place(description, arrowDescription, keyAttribute, playerPosition,
	    	arrowUpPosition, arrowDownPosition, arrowBackPosition, placeIndicator, arrowValue) {
				// za pomocą konstruktora "Place" utworzone zostały miejsca, które odwiedza gracz
				// miejsca: START i META posiadają swoje indywidualne, dodatkowe funkcje, obsługujące zdarzenia na początku i na zakończeniu gry

	   this.description = description;
     this.arrowDescription = arrowDescription;
		 this.keyAttribute = keyAttribute;
		 this.playerPosition = playerPosition;
		 this.arrowUpPosition = arrowUpPosition;
		 this.arrowDownPosition = arrowDownPosition;
		 this.arrowBackPosition = arrowBackPosition;
		 this.placeIndicator = placeIndicator;
		 this.arrowValue = placeIndicator; // element należący do funckji obsługujących zdarzenie onclick na strzałkach pomarańczowych
	}


	var start = new Place (
		"Powróciłeś do Hajnówki, miejsca skąd wyruszyłeś. Przysiądź na chwilę, odpocznij i zaraz ruszaj w dalszą drogę.",
		undefined,
		undefined,
		"049",
		"050",
		"074",
		undefined,
		 0);


     start.startGame = function() {
     // uruchamia grę, po kliknięciu przez gracza na tekst początkowy "Wycie wilków przy pełni księżyca..."
         document.getElementById("button").style.visibility = "hidden";

         document.getElementById("container").style.backgroundColor = "#B9E696";
         document.getElementById("container").style.border = "3px solid";
         document.getElementById("container").style.borderRadius = "8px";

         document.getElementById("command").style.visibility = "visible";
         document.getElementById("command").style.backgroundColor = "#B9E696";
         document.getElementById("command").innerHTML = "Przed Tobą wyzwanie, godne prawdziwego wędrowcy. Musisz odnaleźć drogę do Białowieży, położonej w samym sercu Puszczy. Po drodze będziesz odkrywał nowe miejsca i gromadził artefakty, które pomogą Ci uporać się z napotkanymi trudnościami. Za swoje trudy zostaniesz sowicie wynagrodzony srebrnikami, które będziesz mógł wymienić na jadło i uciechy w białowieskiej karczmie. <br> Pamiętaj! Każdy zachowany artefakt to +1 srebrnik. Każde, nowo odkryte miejsce to +1 srebrnik. Każdy Twój ruch to -1 srebrnik. Wyruszasz z zachodniego krańca Puszczy, z miejscowości Hajnówka i masz 3 tropy do wyboru. W Twoim plecaku jest już 7 artefaktów. Wybierz kolejny artefakt i ruszaj w drogę!";

         document.getElementById("049").innerHTML = '<img id="player" src="img/player/playerYellow.jpg" />';
         document.getElementById("attributesCounter").style.visibility = "visible";

         document.getElementById("163").innerHTML = '<img id="bag" src="img/bag.jpg"/>';

         start.arrowsDisplay();
         attributesValue.attributeChoice();
         attributesValue.startAttributesRandom();
     };

		start.arrowsDisplay = function() {
		// wyświetla strzałki miejsca START
        document.getElementById("050").innerHTML = '<img id="arrowRight" src="img/arrowRight.jpg" />';
    		document.getElementById("074").innerHTML = '<img id="arrowDiagonal" src="img/arrowDiagonal.jpg" />';
    		document.getElementById("073").innerHTML = '<img id="arrowDown" src="img/arrowDown.jpg" />';
		};


		start.arrowsRemove = function() {
    // usuwa strzałki miejsca START
		    var parent0 = document.getElementById("050");
			  var child0 = document.getElementById("arrowRight");
		    parent0.removeChild(child0);

			  var parent1 = document.getElementById("074");
			  var child1 = document.getElementById("arrowDiagonal");
			  parent1.removeChild(child1);

			  var parent2 = document.getElementById("073");
			  var child2 = document.getElementById("arrowDown");
			  parent2.removeChild(child2);
		};


		start.onclickPlace1KrynoczkaActions = function() {
    // obsługuje zdarzenie onclick w górnej strzałce miejsca START
			 start.arrowsRemove();
			 placeCurrentValue.value1();
	     placeCurrentValue.placeCurrent.placeDisplay();
		};


		start.onclickPlace2NieznanyBorActions = function() {
    // obsługuje zdarzenie onclick w środkowej strzałce miejsca START
			 start.arrowsRemove();
			 placeCurrentValue.value2();
	     placeCurrentValue.placeCurrent.placeDisplay();
		};


		start.onclickPlace5DabCarActions = function() {
    // obsługuje zdarzenie onclick w dolnej strzałce miejsca START
			start.arrowsRemove();
			placeCurrentValue.value5();
	    placeCurrentValue.placeCurrent.placeDisplay();
		};

	var place1Krynoczka = new Place (
	    "Dotarłeś do uroczyska Krynoczka. Stoi tu drewniana cerkiewka, a z ziemi bije cudowne źródełko. Napij się ożywczej wody, dodaj kolejny artefakt do plecaka i ruszaj dalej w głąb lasu!",
		  "Zapadł zmierzch. Księżyc skrył się za chmury. Za Krynoczką bór robi się gęsty i ciemny. Nie ma rady. Albo wybierasz STRZAŁKĘ NIEBIESKĄ i wracasz na nocleg do Hajnówki. Albo masz w swoim plecaku PUDEŁKO ZE ŚWIETLIKAMI, które posłuży Ci za latarkę i oświetli ścieżkę. <br> Trzecia, alternatywna opcja to STRZAŁKA CZERWONA, która umożliwia przejście do najbliższego miejsca obok, za cenę dwóch, ostatnio zdobytych artefaktów.",
		  "PUDEŁKO ZE ŚWIETLIKAMI",
		  "053",
		  "054",
		  "077",
		  "052",
		  1);

	var place2NieznanyBor = new Place (
		  "Dotarłeś do miejsca o nazwie Nieznany Bór. Znajduje się tu stara, opuszczona żwirownia. Teren wokół jest zdradliwy. Pełno tu jam i urwisk porośniętych kępami traw i krzaków. Ziemia może łatwo osunąć się pod Twoim ciężarem, więc ostrożnie miarkuj każdy krok na przód. <br> Dobierz kolejny artefakt, a następnie wybierz kierunek, w którym chcesz ruszyć dalej.",
		  "Zagapiłeś się na pięknego jelenia, skubiącego trawkę na skarpie żwirowni. Chciałeś podejść bliżej... chwila nieuwagi...i piasek osunął się, a Ty wpadłeś po pasa w bagno! Co prawda wydostałeś się bez trudu, ale Twoje ubranie jest teraz pełne mokrego błota. Albo wracasz do Hajnówki, aby zmieniasz ubranie - STRZAŁKA NIEBIESKA, albo posiadasz w swoim plecaku ZAPAŁKI. Dzięki zapałkom rozpalisz ognisko, osuszysz szybko ubranie i zaraz ruszysz dalej! <br> Trzecia, alternatywna opcja to STRZAŁKA CZERWONA, która umożliwia przejście do najbliższego miejsca obok, za cenę dwóch, ostatnio zdobytych artefaktów.",
		  "ZAPAŁKI",
		  "100",
		  "101",
		  "124",
		  "099",
		  2);

	var place3Nieznanowo = new Place (
		  "Dotarłeś do Rezerwatu Nieznanowo. Być może swoją nazwę zawdzięcza niedostępności. Otaczają go dzikie łęgi i gęste grądy, a pomiędzy nimi rosną wiekowe dęby. Teren tu jest wilgotny i bagienny, więc najlepiej nie zbaczać ze ścieżki. <br> Dobierz kolejny artefakt, a następnie wybierz kierunek, w którym chcesz ruszyć dalej.",
		  "Nagle słońce przysłonił wysoki cień. Ziemia zadrżała pod stopami... a przed Tobą, jakby z środka ziemi, wyrósł wielki żubr! Władca absolutny Puszczy! Co prawda, nawet Cię nie zauważył, bo jesteś za mały, aby być obiektem jego zainteresowania, ale droga dalej jest zablokowana. Ominąc też się nie da, bo wokół głębokie bagno. Jedyny sposób na Króla Puszczy to CZARODZIEJSKI FLET. Zagraj na nim kołysankę! Żubr potulnie zapadnie w smaczną drzemkę, a Ty po cichu, na paluszkach go ominiesz...",
		  "CZARODZIEJSKI FLET",
		  "127",
		  "128",
		  "151",
		  "126",
	    3);

	var place4Szczekotowo = new Place (
		  "Dotarłeś do Rezerwatu Szczekotowo. Znajduje się tu najliczniejsze w Puszczy Białowieskiej skupisko dawnych kurhanów. Rytualne kopce są świadectwem o pradawnych plemionach Słowian zamieszkujących te tereny tysiąc lat temu. Sama nazwa Szczekotowo pochodzi od istniejącej tu późniejszym czasie wsi, której mieszkańcy wytwarzali węgiel drzewny, smołę i potaż.",
		  "Uups... wspiąłeś się na niewłaściwy kurhan i naruszyłeś spokój jego duchów. Teraz nie chcą Cię wypuścić. Duchy rzuciły na Ciebie zaklęcie zapomnienia i dostałeś pomieszania zmysłów. Jedyny sposób na odczarowanie to NALEWKA ENERGETYCZNA. Poszukaj jej w swoim plecaku i czym prędzej napij się. Dzięki jej sekretnej recepturze, składającej się z leśnych ziół, odzyskasz swoje zmysły, a przy okazji, pokrzepisz ciało przed dalszą drogą! <br> Jeśli nie masz nalewki, pozostaje Ci wybór pomiędzy czerowną i niebieską strzałką.",
		  "NALEWKA ENERGETYCZNA",
		  "033",
		  "034",
		  "057",
		  "032",
	    4);

	var place5DabCar = new Place (
		  "Dotarłeś do miejsca, w którym rośnie król puszczańskich drzew, Dąb Car. To wielki, 500-letni, sędziwy dąb, górujący swym majestatem nad innymi drzewami.  <br> Dobierz kolejny artefakt, a następnie wybierz kierunek, w którym chcesz ruszyć dalej.",
		  "Okazało się, że nie jesteś sam...w starym dębie pomieszkuje sobie psotliwy Elf. Co prawda nie jest groźny, ale potrafi płatać figle odwiedzającym go wędrowcom. Tym razem postanowił zamienić strony świata i poplątać ścieżki wokół. Na nic Twoje biadania...Elf ma tylko jedną słabość: uwielbia POROŻE JELENIA. Jeśli takie posiadasz w swoim plecaku podaruj mu je, a on wskaże Ci drogę na przód.<br> Inaczej, będziesz musiał cofnąć się po własnych śladach do Hajnówki - STRZAŁKA NIEBIESKA. <br> Trzecia, alternatywna opcja to STRZAŁKA CZERWONA, która umożliwia przejście do najbliższego miejsca obok, za cenę dwóch, ostatnio zdobytych artefaktów.",
	    "POROŻE JELENIA",
		  "171",
		  "172",
		  "195",
		  "170",
		  5);

	var place6Lutownia = new Place (
		  "Dotarłeś do Łutowni. To rzeka, która niczym Amazonka, przecina Puszczę ze Wschodu na Zachód. Nieraz możesz tu natrafić na krajobrazy niczym z amazońskiej dżungli. W wielu miejscach rzeka przeistacza się w rozległe, ciągnące się kilometrami, mokradła i grzęzawiska.",
		  "Marsz w tym terenie staje się coraz bardziej utrudniony. Ścieżka, co chwilę ginie w głębokich kałużach i błocie. Nie ma szans, aby iść dalej bez odpowiednich butów. Poszukaj, więc w swoim plecaku GUMOWCÓW. <br> Jeśli nie masz gumowców, pozostaje Ci wybór pomiędzy czerowną i niebieską strzałką.",
		  "GUMOWCE",
		  "035",
		  "036",
		  "059",
		  "034",
		  6);

	var place7Topilo = new Place (
		  "Dotarłeś do Topiła. To maleńka osada, założona na leśnej rzece Perebel. Znajduje się tu malownicze jeziorko, w którym niegdyś przechowywano drewniane bale. Przed dalszą drogą, odpocznij na pomoście przy jeziorku. Zarzuć wędkę, a nuż wpadnie Ci jakaś rybka na kolację...",
		  "Wieczorem wstał piękny, wielki księżyc na niebie. Przy pełni, dobrze widać ścieżkę, więc aby nadrobić drogi, postanowiłeś iść również nocą, ale... zauważył Cię potężny basior. Jako, że żaden człowiek nocą nie zapuszcza się w głąb lasu, wilk pomylił Cię ze zwierzyną i wydał rozkaz ataku swojej watasze! Jeśli jesteś szczęściarzem i akurat posiadasz w plecaku MIKSTURĘ Z SUPERJAGÓD, wypij ją i czmyhnij od wilków w podskokach! <br> Jeśli nie masz mikstury, pozostaje Ci wybór pomiędzy czerowną i niebieską strzałką.",
		  "MIKSTURA Z SUPERJAGÓD",
		  "244",
		  "220",
		  "245",
		  "243",
		  7);

	var place8Olszanka = new Place (
		  "Dotarłeś do malowniczej doliny rzeki Leśna. To doskonałe miejsce do obserwacji puszczańskich zwierząt. Na licznych tu łąkach ptaki zakładają woje lęgowiska. Na rozległej, odkrytej dla oka przestrzeni, można łatwo dojrzeć stada żubrów, jeleni, a nawet podpatrzeć polowanie watachy wilków.",
		  "Spotkała Cię niemiła niespodzianka. Okazuje się, że po wiosennych roztopach most na Leśnej został uszkodzony i nie da rady suchą nogą przejść na drugą stronę. To jedyna mostowa przeprawa w całej południowej części Puszczy. Rzeki, ani nie przepłyniesz, ani też nie przejdziesz sam, bo teren jest zbyt bagienny. Jedyne rozwiązanie w tej sytuacji to DMUCHANY MATERAC. Wyciągnij go z plecaka, nadmuchaj, znajdź mocny kołek, aby móc odpychać się od dna i ruszaj na drugą stronę po rozlewiskach rzeki! <br> Jeśli nie masz materacu, pozostaje Ci wybór pomiędzy czerowną i niebieską strzałką.",
		  "DMUCHANY MATERAC",
		  "224",
		  "200",
		  "225",
		  "223",
	    8);

	var place9Przewloka = new Place (
		  "Dotarłeś do jednego z najbardziej oddalonych miejsc w Puszczy - Rezerwatu Przewłoka. Leży on w zabagnionej dolinie rzeki Leśnej, porośniętej szuwarami i turzycowiskami. W okolicy zamieszkuje aż 44 gatunki motyli, w tym 6 nigdzie więcej niespotykanych. Tuż za Rezerwatem znajduje się granica państwa z Białorusią.",
		  "Tuż za Rezerwatem natrafiłeś na stary, dawno opuszczony tartak. Doskonale nadawałby się na nocleg, ale Ty wolisz iść dalej, bo słyszałeś od innego wędrowca, że duch ostatniego gospodarza, ma czasami w zwyczaju odwiedzać swój warsztat w nocy i używać dawnych narzędzi do obrabiania drewna... Ścieżka pod granicą urywa się, więc aby odnaleźć właściwą tropę potrzebujesz KOMPASU. <br> Jeśli nie masz kompasu, pozostaje Ci wybór pomiędzy czerowną i niebieską strzałką.",
		  "KOMPAS",
		  "277",
		  "253",
		  "278",
		  "276",
	    9);

	var place10Teremiski = new Place (
		  "Dotarłeś do wsi Teremiski. Z wielką ulgą zobaczyłeś, od dawna niewidziane ludzkie domostwa. Twoje ciało, umęczone wędrówką, potrzebuje odpoczynku i porządnej strawy przed dalszą drogą.",
		  "Niestety mieszkańcy wsi okazali wobec Ciebie wrogość i zostałeś przegoniony z powrotem do lasu. Zawsze gościnni i otwarci do obcych, zostali niedawno oszukani i ograbieni przez grupę nieznanych wędrowców i od tej pory wszystko się zmieniło. <br> Jesteś wyczerpany trudami i przygodami jakie Cię spotkały. Albo masz w plecaku wielki SŁOIK SMALCU, który zaraz postawi Cię na nogi. Albo pozostaje Ci wybór pomiędzy czerowną i niebieską strzałką.",
		  "SŁOIK SMALCU",
		  "062",
		  "063",
		  "086",
		  "061",
	    10);

	var place11Czerlonka = new Place (
		  "Dotarłeś do okolic Czerlonki, dawnej osady robotników leśnych: drwali, smolarzy i karpiniarzy. W prostej lini to połowa odległości między Hajnówką i Białowieżą.",
		  "Przydarzył Ci się nieszczęśliwy wypadek. Niechcący nastąpiłeś na śpiącą pod wielką paprocią żmiję zygzakowatą, a ona, w szoku, mocno wbiła swoje zęby pod Twoim kolanem. Jad natychmiast zadziałał i cała noga zdrętwiała. Pomóc Ci może tylko MAŚĆ ŚWIERKOWA, która w mig ukoi ranę, wyciągnie jad i przywróci sprawność nogi, abyś mógł ruszyć dalej. <br> Jeśli nie masz w swoim plecaku maści, pozostaje Ci wybór pomiędzy czerowną i niebieską strzałką. ",
		  "MAŚĆ ŚWIERKOWA",
		  "132",
		  "133",
		  "156",
		  "131",
	    11);

	var place12MiejsceMocy = new Place (
		  "Dotarłeś do jednego z najbardziej tajemniczych zakątków Puszczy. To tzw. Miejsce Mocy. Według legendy, prasłowianie wybrali tę okolicę na swoje miejsce kultu ze względu na jej magiczne właściwości. Drzewa przybierają tu dziwne kształty, rozgałęziając się na dwa lub trzy nisko nad ziemią...",
		  "Twój kompas oszalał. Kierunki świata pomieszały się, a słońce zerwało się ze swojego normalnego biegu po nieboskłonie. Tajeminicze moce zakrzywiły czas i przestrzeń i wpadłeś do innego wymiaru... Masz jedno wyjście, aby powrócić do swojego świata. Odszukaj największy dąb w okolicy i znajdź w nim największą dziurę po sęku. Tam włóż TALIZMAN. Następnie przekręć nim siedem razy w lewo, a potem trzy razy w prawo, a wnet powrócisz do świata żywych i odnajdziesz ścieżkę prosto do Białowieży.   Jeśli nie posiadasz talizmanu, wybierz strzałkę niebieską lub czerwoną i wracaj na szlak w jego poszukiwaniu. Pamiętaj! Tylko talizman może otworzyć przed Tobą ścieżkę do celu.",
		  "TALIZMAN",
		  "137",
		  "113",
		  "138",
		  "136",
	    12);

	var meta = new Place (
		  "opis meta",
		  undefined,
		  undefined,
		  "093",
		  undefined,
		  undefined,
		  undefined,
		  13);


	meta.attributesDisplay = function() {
  // wyświetla wynik końcowy: tekst
      document.getElementById("attribute0").innerHTML = "Odwiedzone miejsca: "+player.placesVisitedNumber;
		  document.getElementById("attribute1").innerHTML = "Zebrane artefakty: "+attributesValue.attributesNumber;
		  document.getElementById("attribute2").innerHTML = "Wykonane ruchy: "+player.movesNumber;
		  meta.attributesStyle();
	};


	meta.attributesStyle = function() {
 // wyświetla wynik końcowy: style
		  document.getElementById("attribute0").style.color = "green";
		  document.getElementById("attribute1").style.color = "green";
		  document.getElementById("attribute2").style.color = "red";

		  var x = document.getElementsByClassName("attributes");
		  for (var i = 0; i < x.length; i++) {
		      x[i].style.fontWeight = "800";
		      x[i].style.fontSize = "20px";
			    x[i].style.paddingLeft = "5px";
		      //x[i].style.backgroundColor = "white";
			    x[i].style.backgroundColor = "#F8FB93"; //yellow
			    x[i].style.borderColor = "transparent";
			    x[i].style.width = "150px";
		  }
	};


	meta.scoreDisplay = function() {

		  var score = player.placesVisitedNumber + attributesValue.attributesNumber - player.movesNumber;

      document.getElementById("command").innerHTML = "ZDOBYTE SREBRNIKI: "+score;
		  document.getElementById("command").style.color = "#048CBE";  // blue
		  document.getElementById("command").style.textAlign = "center";

		  var c = document.getElementsByClassName("attributesCounterElements");
		  for (var i = 0; i < c.length; i++) {
			    c[i].style.color = "orange";
		  }
		  meta.scoreStyle();
	};


	meta.scoreStyle = function() {
  // wyświetla wynik końcowy - ilość srebrników: tekst
	    document.getElementById("command").style.backgroundColor = "#F8FB93"; //yellow
		  document.getElementById("command").style.fontWeight = "800";
		  document.getElementById("command").style.fontSize = "30px";
		  document.getElementById("command").style.paddingTop = "20px";
		  document.getElementById("command").style.height = "70px";
		  document.getElementById("command").style.width = "640px";
		  document.getElementById("command").style.paddingTop = "60px";
		  document.getElementById("container").style.backgroundColor = "#F8FB93"; //yellow
	};


	meta.buttonDisplay = function() {
  // wyświetla komunikat końcowy: "Dotarłeś do celu. Witaj w Białowieży!"
      document.getElementById("button").style.visibility = "visible";
		  document.getElementById("button").style.height = "30px";
		  document.getElementById("button").style.top = "-400px";
		  //document.getElementById("button").style.color = "#B7E8F4";
		  document.getElementById("button").style.color = "#F4B7F9";
		  // document.getElementById("button").style.color = "#C8FAB5"; green
		  document.getElementById("button").style.fontWeight = "700";
		  document.getElementById("button").style.fontSize = "30px";
		  document.getElementById("button").style.borderColor = "transparent";

		  document.getElementById("button").innerHTML = "Dotarłeś do celu. Witaj w Białowieży!";
		  document.getElementById("button").onclick = "null";
		  document.getElementById(placeCurrentValue.placeCurrent.playerPosition).innerHTML ='<img id="player" src="img/player/playerViolet.jpg" />';
		  document.getElementById("094").innerHTML = '<img id="1krynoczka" src="img/finishFlag.jpg" />';
		  document.getElementById("bag").style.visibility = "hidden";
	};


	Place.prototype.placeDisplay = function() {
	// wyświetla opis miejsca w "command"
	// tworzy zdarzenie onclik w "attributes"
	// zmienia pozycję gracza
	// wyświetla strzałki w nowym miejscu
	// tworzy zdarzenie onclick w strzałkach
	// liczy: odwiedzone miejsca + zdobyte atrybuty - wykonane ruchy gracza
      document.getElementById("command").innerHTML = placeCurrentValue.placeCurrent.description;
		  attributesValue.attributeChoice();
		  player.positionChange();
		  if (placeCurrentValue.placeBack === place12MiejsceMocy) {
			    Place.prototype.placeLeft();
		  }

		  Place.prototype.arrowsDisplayCondition();
		  Place.prototype.arrowUpClick();
		  Place.prototype.arrowDownClick();

		  player.countPlacesVisitedNumber();
		  attributesValue.countAttributesNumber();
		  player.countMoves();
	};


	Place.prototype.arrowsDisplayCondition = function() {
  // wyświetla strzałki w nowym miejscu
	    if (placeCurrentValue.placeCurrent === start) {
			    start.arrowsDisplay();
		  }
		  else if (placeCurrentValue.placeCurrent === meta) {
			    meta.buttonDisplay();
			    meta.attributesDisplay();
			    meta.scoreDisplay();
		  }
		  else {
			    Place.prototype.arrowsDisplay();
		  }
	}


	Place.prototype.arrowsDisplay = function() {
	// wyświetla strzałki w nowym miejscu (z wyjątkiem START i META)
	// dopasowuje style w strzałkach w zalezności od miejsca
	    if (placeCurrentValue.placeCurrent === place7Topilo || placeCurrentValue.placeCurrent === placeCurrentValue.place8Olszanka || placeCurrentValue.placeCurrent === placeCurrentValue.place9Przewloka || placeCurrentValue.placeCurrent === placeCurrentValue.place12MiejsceMocy) {
			    document.getElementById(placeCurrentValue.placeCurrent.arrowUpPosition).innerHTML = '<img id="arrowRight" src="img/arrowRightUp.jpg" />';
			    Place.prototype.fadeInArrowRight("arrowRight");
			    document.getElementById("arrowRight").style.position = "absolute";
			    document.getElementById("arrowRight").style.marginLeft = "10px";
			    document.getElementById("arrowRight").style.marginTop = "-12px";

			    document.getElementById(placeCurrentValue.placeCurrent.arrowDownPosition).innerHTML = '<img id="arrowDiagonal" src="img/arrowDiagonalUp.jpg" />';
			    Place.prototype.fadeInArrowDiagonal("arrowDiagonal");
			    document.getElementById("arrowDiagonal").style.position = "absolute";
			    document.getElementById("arrowDiagonal").style.marginLeft = "0px";
			    document.getElementById("arrowDiagonal").style.marginTop = "-13px";
	    }

		  else {
			    document.getElementById(placeCurrentValue.placeCurrent.arrowUpPosition).innerHTML = '<img id="arrowRight" src="img/arrowRight.jpg" />';
			    Place.prototype.fadeInArrowRight("arrowRight");
			    document.getElementById(placeCurrentValue.placeCurrent.arrowDownPosition).innerHTML = '<img id="arrowDiagonal" src="img/arrowDiagonal.jpg" />';
			    Place.prototype.fadeInArrowDiagonal("arrowDiagonal");
	  	}
	};


	Place.prototype.arrowsRemove = function() {
  // usuwa strzałki z miejsca opuszczanego przez gracza
	    var parent0 = document.getElementById(placeCurrentValue.placeCurrent.arrowBackPosition);
		  var child0 = document.getElementById("arrowBackBlue");
		  parent0.removeChild(child0);

		  var parent1 = document.getElementById(placeCurrentValue.placeCurrent.arrowUpPosition);
		  var child1 = document.getElementById("arrowRight");
		  parent1.removeChild(child1);

		  var parent2 = document.getElementById(placeCurrentValue.placeCurrent.arrowDownPosition);
		  var child2 = document.getElementById("arrowDiagonal");
		  parent2.removeChild(child2);
	};


	Place.prototype.arrowsRemoveForBack = function() {
  // usuwa strzałki z miejsca opuszczanego przez gracza po zdarzeniu onclik na niebieskiej strzałce
      var parent1 = document.getElementById(placeCurrentValue.placeBack.arrowUpPosition);
		  var child1 = document.getElementById("arrowRight");
		  parent1.removeChild(child1);

		  var parent2 = document.getElementById(placeCurrentValue.placeBack.arrowDownPosition);
		  var child2 = document.getElementById("arrowDiagonal");
		  parent2.removeChild(child2);

		  var parent0 = document.getElementById(placeCurrentValue.placeBack.arrowBackPosition);
		  var child0 = document.getElementById("arrowBackBlue");
		  parent0.removeChild(child0);
	};

	Place.prototype.playerRemove = function() {
	// usuwa ikonkę "player" po opuszczeniu miejsca przez gracza
		  var parent0 = document.getElementById(placeCurrentValue.placeCurrent.playerPosition);
		  var child0 = document.getElementById("player");
		  parent0.removeChild(child0);
	};

	Place.prototype.placeLeft = function() {
  // dodaje ikonkę "miejsce odwiedzone"(pomarańczowa łezka) po opuszczeniu miejsca przez gracza
	    document.getElementById(placeCurrentValue.placeBack.playerPosition).innerHTML = '<img id="place1KrynoczkaPlaceVisited" src="img/placeVisited.jpg"/>';
	};



//******** funkcje obsługujące zdarzenie onclick w górnej, pomarańczowej strzałce:


	Place.prototype.arrowUpClick = function() {
  // tworzy zdarzenie onclick
		  var arrowUp = document.getElementById("arrowRight");
		  arrowUp.onclick = Place.prototype.arrowUpActions;
	};

	Place.prototype.arrowUpActions = function() {
	// wykonuje czynności po zdarzeniu onclick w górnej strzałce:
		// zmienia opis miejsca
		// uruchamia style: pointer na polach zgromadzonych przez gracza atrybutów
		// zmienia style w strzałkach
		// tworzy nowe zdarzenia onclick w strzałkach:
			// zdarzenie onclick w przyporządkowanym danemu miejscu atrybucie (gracz porusza się do przodu, do kolejnego miejsca)
			// zdarzenie onclick w czerwonej strzałce (gracz porusza się w bok, do kolejnego miejsca)
			// zdarzenie onclick w niebieskiej strzałce (gracz porusza się do tyłu, do poprzedniego miejsca)
		// ukrywa pola atrybutów do wyboru
	    document.getElementById("command").innerHTML = placeCurrentValue.placeCurrent.arrowDescription;
		  Place.prototype.cursorInCounter();
   		Place.prototype.arrowsStyleUp();
  		document.getElementById(placeCurrentValue.placeCurrent.arrowBackPosition).innerHTML = '<img id="arrowBackBlue" src="img/arrowBackBlue.jpg" />';
		  Place.prototype.arrowValue = 0;
		  Place.prototype.keyAttributeClick();
		  Place.prototype.arrowDownRiskClick();
		  Place.prototype.arrowBackClick();
		  Place.prototype.arrowUpMouseOver();
		  attributesValue.attributesStyleToHide();
		  return null;
	};


	Place.prototype.cursorInCounter = function() {
  // uruchamia style: pointer na atrybutach zgromadzonych przez gracza
	    var x = document.getElementsByClassName("attributesCounterElements");
		  for (var i = 0; i < x.length; i++) {
			    if (x[i].innerHTML !== "") {
			        x[i].style.cursor = "pointer";
			    }
	  	}
	};

	Place.prototype.arrowsStyleUp = function() {
  // zmienia style w strzałkach po zdarzeniu onclick
	    if (placeCurrentValue.placeCurrent === place7Topilo || placeCurrentValue.placeCurrent === place8Olszanka || placeCurrentValue.placeCurrent === place9Przewloka || placeCurrentValue.placeCurrent === place12MiejsceMocy) {
			    document.getElementById(placeCurrentValue.placeCurrent.arrowDownPosition).innerHTML = '<img id="arrowDiagonal" src="img/arrowDiagonalRedUp.jpg" />';
			    Place.prototype.fadeInArrowDiagonal("arrowDiagonal");
			    document.getElementById("arrowDiagonal").style.position = "absolute";
			    document.getElementById("arrowDiagonal").style.marginLeft = "0px";
			    document.getElementById("arrowDiagonal").style.marginTop = "-13px";
		  }
		  else {
			    document.getElementById(placeCurrentValue.placeCurrent.arrowDownPosition).innerHTML = '<img id="arrowDiagonal" src="img/arrowDiagonalRed.jpg"/>';
		  }
	};



//******** funkcje obsługujące zdarzenie onclick w dolnej, pomarańczowej strzałce:


	Place.prototype.arrowDownClick = function() {
  // tworzy zdarzenie onclick w dolnej strzałce
		  var arrowDown = document.getElementById("arrowDiagonal");
		  arrowDown.onclick = Place.prototype.arrowDownActions;
	};

	Place.prototype.arrowDownActions = function() {
	// wykonuje czynności po zdarzeniu onclick:
		// zmienia opis miejsca
		// uruchamia style: pointer na atrybutach zgromadzonych przez gracza
		// zmienia style w strzałkach
		// tworzy nowe zdarzenia onclick w strzałkach:
			// zdarzenie onclick w przypisanym danemu miejscu atrybucie (gracz porusza się do przodu, do kolejnego miejsca)
			// zdarzenie onclick w czerwonej strzałce (gracz porusza się w bok, do kolejnego miejsca)
			// zdarzenie onclick w niebieskiej strzałce (gracz porusza się do tyłu, do poprzedniego miejsca)
		// ukrywa pola atrybutów do wyboru
		  document.getElementById("command").innerHTML = placeCurrentValue.placeCurrent.arrowDescription;
		  Place.prototype.cursorInCounter();
  		Place.prototype.arrowsStyleDown();
		  document.getElementById(placeCurrentValue.placeCurrent.arrowBackPosition).innerHTML = '<img id="arrowBackBlue" src="img/arrowBackBlue.jpg" />';
		  Place.prototype.arrowValue = 1;
		  Place.prototype.keyAttributeClick();
		  Place.prototype.arrowUpRiskClick();
		  Place.prototype.arrowBackClick();
		  Place.prototype.arrowDownMouseOver();
		  attributesValue.attributesStyleToHide();
		  return null;
	};



	Place.prototype.arrowsStyleDown = function() {
  // zmienia style w strzałkach po zdarzeniu onclick w dolnej strzałce
	    if (placeCurrentValue.placeCurrent === place7Topilo || placeCurrentValue.placeCurrent === place8Olszanka || placeCurrentValue.placeCurrent === place9Przewloka || placeCurrentValue.placeCurrent === place12MiejsceMocy) {
			    document.getElementById(placeCurrentValue.placeCurrent.arrowUpPosition).innerHTML = '<img id="arrowRight" src="img/arrowRightRedUp.jpg" />';
			    Place.prototype.fadeInArrowRight("arrowRight");
			    document.getElementById("arrowRight").style.position = "absolute";
			    document.getElementById("arrowRight").style.marginLeft = "10px";
			    document.getElementById("arrowRight").style.marginTop = "-12px";
		  }
		  else {
			    document.getElementById(placeCurrentValue.placeCurrent.arrowUpPosition).innerHTML = '<img id="arrowRight" src="img/arrowRightRed.jpg"/>';
		  }
	};


	Place.prototype.arrowUpMouseOver = function() {

		  var upMouseOver = document.getElementById("arrowRight");
		  upMouseOver.onmouseover = Place.prototype.arrowMouseActionsOver;
		  upMouseOver.onmouseout = Place.prototype.arrowMouseActionsOut;
	};

	Place.prototype.arrowDownMouseOver = function() {

		  var downMouseOver = document.getElementById("arrowDiagonal");
		  downMouseOver.onmouseover = Place.prototype.arrowMouseActionsOver;
		  downMouseOver.onmouseout = Place.prototype.arrowMouseActionsOut;
	};

	Place.prototype.arrowMouseActionsOver = function() {
		  document.getElementById("attributesCounter").style.border = "1px solid orange";
	};

	Place.prototype.arrowMouseActionsOut = function() {
		  document.getElementById("attributesCounter").style.border = "1px solid #1F3C31";
	};



	//******** funkcje obsługujące zdarzenie onclick w atrybucie przypisanym do danego miejsca:



	Place.prototype.keyAttributeClick = function(placeThis) {
  //tworzy zdarzenie onclick w aktualnie posiadanych atrybutach
		  var attributes = document.getElementsByClassName("attributesCounterElements");
		  for (i = 0; i < attributes.length; i++) {
			    attributes[i].onclick = Place.prototype.keyAttributeActions;
		  }
	};

  Place.prototype.keyAttributeActions = function(eventObj) {
	// usuwa kliknięty atrybut z attributesCollected
	// synchronizuje wyświetlanie atrybutów z zawartością attributesCollected
	// usuwa strzałki z miejsca opuszczanego przez gracza
	// ustawia nowe parametry dla placeCurrent (następuje przejście do nowego miejsca)
	// wyświetla nowe miejsce
	// przemieszcza gracza do nowego miejsca
		  counterElement = eventObj.target;
		  if (counterElement.innerHTML === placeCurrentValue.placeCurrent.keyAttribute) {
			    Place.prototype.keyAttributeInCollectedSplice();
			    Place.prototype.keyAttributeCollectedAndCounterMatch();
			    placeCurrentValue.placeCurrent.arrowsRemove();
			    Place.prototype.placeCurrentAfterKeyAttributeClick(placeCurrentValue.valuePlaceIndicator);
          placeCurrentValue.placeCurrent.placeDisplay();
			    placeCurrentValue.placeCurrent.placeLeft();
		  }
		  else {
			    document.getElementById("command").innerHTML = "to nie "+placeCurrentValue.placeCurrent.keyAttribute+"! Wybierz właściwy artefakt.";
		  }
	};


	Place.prototype.keyAttributeInCollectedSplice = function() {
  // usuwa kliknięty atrybut z attributesCollected
	    for (i = 0; i < player.attributesCollected.length; i++) {
			    if (player.attributesCollected[i] === counterElement.innerHTML) {
				      var attribute = player.attributesCollected[i];
				      var attributeIndex = player.attributesCollected.indexOf(attribute);
				      player.attributesCollected.splice(attributeIndex, 1);
				      return true;
			    }
		   }
	};

	Place.prototype.keyAttributeCollectedAndCounterMatch = function() {
	// synchronizuje wyświetlanie atrybutów z zawartością attributesCollected
	    for (var i = 0; i < attributesCounterTable.length; i++) {
			    document.getElementById(i).innerHTML = player.attributesCollected[i];
			    if (player.attributesCollected[i] === undefined) {
			        document.getElementById(i).innerHTML = "";
			    }
		  }
	};

  Place.prototype.placeCurrentAfterKeyAttributeClick = function(indicatorAfterKeyAttributeClick) {
	// ustawia nowe parametry dla placeCurrent (następuje przejście do nowego miejsca) po kliknięciu właściwego atrybutu z plecaka
	    var indicator = indicatorAfterKeyAttributeClick;
		  if (indicator === 1) {
			    if (Place.prototype.arrowValue === 0) {
				      placeCurrentValue.value4();
			    }
			    else if (Place.prototype.arrowValue === 1) {
				      placeCurrentValue.value3();
			    }
		  }

			else if (indicator === 2) {
		      if (Place.prototype.arrowValue === 0) {
				      placeCurrentValue.value4();
			    }
		      else if (Place.prototype.arrowValue === 1) {
				      placeCurrentValue.value7();
			    }
		  }

		  else if (indicator === 3) {
			    if (Place.prototype.arrowValue === 0) {
				      placeCurrentValue.value11();
			    }
			    else if (Place.prototype.arrowValue === 1) {
				      placeCurrentValue.value8();
			    }
		  }

		  else if (indicator === 4) {
			    if (Place.prototype.arrowValue === 0) {
				      placeCurrentValue.value6();
			    }
			    else if (Place.prototype.arrowValue === 1) {
				      placeCurrentValue.value11();
			   }
		  }

		  else if (indicator === 5) {
			    if (Place.prototype.arrowValue === 0) {
				      placeCurrentValue.value3();
			    }
			    else if (Place.prototype.arrowValue === 1) {
				      placeCurrentValue.value7();
			    }
		  }

		  else if (indicator === 6) {
			    if (Place.prototype.arrowValue === 0) {
				      placeCurrentValue.value10();
			    }
			    else if (Place.prototype.arrowValue === 1) {
				      placeCurrentValue.value9();
			    }
		  }

		  else if (indicator === 7) {
			    if (Place.prototype.arrowValue === 0) {
				      placeCurrentValue.value6();
			    }
			    else if (Place.prototype.arrowValue === 1) {
				      placeCurrentValue.value8();
			    }
		  }

		  else if (indicator === 8) {
			    if (Place.prototype.arrowValue === 0) {
				      placeCurrentValue.value11();
			    }
			    else if (Place.prototype.arrowValue === 1) {
				       placeCurrentValue.value9();
			    }
		  }

		  else if (indicator === 9) {
			    if (Place.prototype.arrowValue === 0) {
				      placeCurrentValue.value10();
			    }
			    else if (Place.prototype.arrowValue === 1) {
				      placeCurrentValue.value12();
			    }
		  }

		  else if (indicator === 11) {
			    if (Place.prototype.arrowValue === 0) {
				      placeCurrentValue.value10();
			    }
			    else if (Place.prototype.arrowValue === 1) {
				      placeCurrentValue.value9();
			    }
		  }

		  else if (indicator === 10) {
			    if (Place.prototype.arrowValue === 0) {
				      placeCurrentValue.value12();
			    }
			    else if (Place.prototype.arrowValue === 1) {
				      placeCurrentValue.value9();
			    }
		  }

		  else if (indicator === 12) {
			    placeCurrentValue.value13();
		  }
	};



  //******** funkcje obsługujące zdarzenie onclick w czerwonej strzałce:



	Place.prototype.arrowUpRiskClick = function() {
  //tworzy zdarzenie onclick w strzałce czerwonej górnej
	    var arrowRisk = document.getElementById("arrowRight");
      arrowRisk.onclick = Place.prototype.arrowRiskClickActions;
	};


	Place.prototype.arrowDownRiskClick = function() {
  //tworzy zdarzenie onclick w strzałce czerwonej dolnej
		  var arrowRisk = document.getElementById("arrowDiagonal");
		  arrowRisk.onclick = Place.prototype.arrowRiskClickActions;
	};

	Place.prototype.arrowRiskClickActions = function() {
	// usuwa dwa atrybuty z attributescollected
	// synchronizuje wyświetlanie atrybutów z zawartością attributesCollected
	// usuwa strzałki z miejsca opuszczanego przez gracza
	// ustawia bieżące parametry dla placeCurrent (następuje przejście do nowego miejsca)
	// wyświetla nowe miejsce
	// przemiszcze gracza do nowego miejsca
		  Place.prototype.arrowRiskInCollectedSplice();
		  Place.prototype.arrowRiskCollectedAndCounterMatch();
		  placeCurrentValue.placeCurrent.arrowsRemove();
		  Place.prototype.placeCurrentAfterArrowRiskClick();
		  placeCurrentValue.placeCurrent.placeDisplay();
		  placeCurrentValue.placeCurrent.placeLeft();
	};


	Place.prototype.arrowRiskInCollectedSplice = function() {
  // usuwa dwa atrybuty z attributescollected
	    player.attributesCollected.pop();
			player.attributesCollected.pop();
	};

	Place.prototype.arrowRiskCollectedAndCounterMatch = function() {
  // synchronizuje wyświetlanie atrybutów z zawartością attributesCollected
	    for (var i = 0; i < attributesCounterTable.length; i++) {
			    document.getElementById(i).innerHTML = player.attributesCollected[i];
			    if (player.attributesCollected[i] === undefined) {
			        document.getElementById(i).innerHTML = "";
			    }
		  }
	};

  Place.prototype.placeCurrentAfterArrowRiskClick = function() {
	// po kliknięciu na czerwoną strzałkę ustawia nowe parametry dla placeCurrent (następuje przejście do nowego miejsca)
	    if (placeCurrentValue.valuePlaceIndicator === 1) {
			    if (Place.prototype.arrowValue === 1) {
				      placeCurrentValue.value2();
			    }
			    else if (Place.prototype.arrowValue === 0) {
				      placeCurrentValue.value5();
			    }
		}

		else if  (placeCurrentValue.valuePlaceIndicator === 2) {
		    if (Place.prototype.arrowValue === 1) {
				    placeCurrentValue.value1();
			  }
			  else if (Place.prototype.arrowValue === 0) {
				    placeCurrentValue.value5();
			  }
		}

		else if  (placeCurrentValue.valuePlaceIndicator === 3) {
		    if (Place.prototype.arrowValue === 1) {
				    placeCurrentValue.value4();
			  }
		    else if (Place.prototype.arrowValue === 0) {
				    placeCurrentValue.value7();
			  }
		}

		else if  (placeCurrentValue.valuePlaceIndicator === 4) {
			  if (Place.prototype.arrowValue === 1) {
				    placeCurrentValue.value3();
			  }
			  else if (Place.prototype.arrowValue === 0) {
				    placeCurrentValue.value7();
			  }
		}

		else if  (placeCurrentValue.valuePlaceIndicator === 5) {
			  if (Place.prototype.arrowValue === 1) {
				    placeCurrentValue.value1();
			  }
			  else if (Place.prototype.arrowValue === 0) {
				    placeCurrentValue.value2();
			  }
		}

		else if (placeCurrentValue.valuePlaceIndicator === 6) {
			  if (Place.prototype.arrowValue === 1) {
				    placeCurrentValue.value11();
			  }
		    else if (Place.prototype.arrowValue === 0) {
			      placeCurrentValue.value8();
			  }
		}

		else if  (placeCurrentValue.valuePlaceIndicator === 7) {
		    if (Place.prototype.arrowValue === 1) {
				    placeCurrentValue.value4();
			  }
			  else if (Place.prototype.arrowValue === 0) {
				    placeCurrentValue.value3();
			  }
		}

		else if  (placeCurrentValue.valuePlaceIndicator === 8) {
		    if (Place.prototype.arrowValue === 1) {
			      placeCurrentValue.value6();
			  }
			  else if (Place.prototype.arrowValue === 0) {
			      placeCurrentValue.value11();
			  }
		}

		else if (placeCurrentValue.valuePlaceIndicator === 9) {
				placeCurrentValue.value10();
		}

		else if (placeCurrentValue.valuePlaceIndicator === 10) {
				placeCurrentValue.value9();
		}

		else if (placeCurrentValue.valuePlaceIndicator === 11) {
			  if (Place.prototype.arrowValue === 1) {
				    placeCurrentValue.value6();
			  }
			  else if (Place.prototype.arrowValue === 0) {
				    placeCurrentValue.value8();
			  }
		}

		else if (placeCurrentValue.valuePlaceIndicator === 12) {
			  if (Place.prototype.arrowValue === 1) {
				    placeCurrentValue.value10();
			  }
			  else if (Place.prototype.arrowValue === 0) {
				    placeCurrentValue.value9();
			  }
	  }
	};



//******** funkcje obsługujące zdarzenie onclick w niebieskiej strzałce:


	Place.prototype.arrowBackClick = function() {
  //tworzy zdarzenie onclick w strzałce niebieskiej
		  var arrowBack = document.getElementById("arrowBackBlue");
		  arrowBack.onclick = Place.prototype.arrowBackActions;
	};

	Place.prototype.arrowBackActions = function() {
  // przenosi gracza do nowego miejsca
      Place.prototype.arrowsRemove();
		  Place.prototype.placeCurrentAfterArrowBackClick();
		  placeCurrentValue.placeCurrent.placeLeft();
	};

  Place.prototype.placeCurrentAfterArrowBackClick = function() {
	// po kliknięciu na niebieską strzałkę (gracz cofa się) ustawia nowe parametry dla placeCurrent (następuje przejście do nowego miejsca)
	    if (placeCurrentValue.placeCurrent === place1Krynoczka) {
			    placeCurrentValue.value0();
			    placeCurrentValue.placeCurrent.placeDisplay();
		  }
		  else if (placeCurrentValue.placeCurrent === place2NieznanyBor) {
			    placeCurrentValue.value0();
			    placeCurrentValue.placeCurrent.placeDisplay();
		  }
		  else if (placeCurrentValue.placeCurrent === place3Nieznanowo) {
			    placeCurrentValue.value2();
			    placeCurrentValue.placeCurrent.placeDisplay();
		  }
		  else if (placeCurrentValue.placeCurrent === place4Szczekotowo) {
			    placeCurrentValue.value1();
			    placeCurrentValue.placeCurrent.placeDisplay();
		  }
		  else if (placeCurrentValue.placeCurrent === place5DabCar) {
			    placeCurrentValue.value0();
			    placeCurrentValue.placeCurrent.placeDisplay();
		  }
		  else if (placeCurrentValue.placeCurrent === place6Lutownia) {
			    placeCurrentValue.value4();
			    placeCurrentValue.placeCurrent.placeDisplay();
		  }
		  else if (placeCurrentValue.placeCurrent === place7Topilo) {
			    placeCurrentValue.value5();
			    placeCurrentValue.placeCurrent.placeDisplay();
		  }
		  else if (placeCurrentValue.placeCurrent === place8Olszanka) {
			    placeCurrentValue.value7();
			    placeCurrentValue.placeCurrent.placeDisplay();
		  }
		  else if (placeCurrentValue.placeCurrent === place9Przewloka) {
			    placeCurrentValue.value8();
			    placeCurrentValue.placeCurrent.placeDisplay();
		  }
		  else if (placeCurrentValue.placeCurrent === place10Teremiski) {
			    placeCurrentValue.value6();
			    placeCurrentValue.placeCurrent.placeDisplay();
		  }
		  else if (placeCurrentValue.placeCurrent === place11Czerlonka) {
			    placeCurrentValue.value3();
			    placeCurrentValue.placeCurrent.placeDisplay();
		  }
		  else if (placeCurrentValue.placeCurrent === place12MiejsceMocy) {
			    placeCurrentValue.value11();
			    placeCurrentValue.placeCurrent.placeDisplay();
		  }
	};


	Place.prototype.fadeInArrowRight = function(element) {
  //efekt fadeIn w górnej strzałce
		  var target = document.getElementById(element);
		  target.style.display = "block";
		  var newSetting = player.fadeInFrom / 10;
		  target.style.opacity = newSetting;
		  player.fadeInFrom++;

		  if(player.fadeInFrom === 10) {
			    target.style.opacity = 1;
			    clearTimeout(loopTimer);
			    player.fadeInFrom = 0;
			    return false;
		  }
		  var loopTimer = setTimeout('Place.prototype.fadeInArrowRight(\''+element+'\')', 100);
	};


	Place.prototype.fadeInArrowDiagonal = function(element) {
  //efekt fadeIn w dolnej stzałce
		  var target = document.getElementById(element);
		  target.style.display = "block";
		  var newSetting = player.fadeInFrom / 10;
		  target.style.opacity = newSetting;
		  player.fadeInFrom++;

		  if(player.fadeInFrom === 10) {
			    target.style.opacity = 1;
			    clearTimeout(loopTimer);
			    player.fadeInFrom = 0;
			    return false;
		  }
		  var loopTimer = setTimeout('Place.prototype.fadeInArrowDiagonal(\''+element+'\')', 100);
	};





//**************************************** OBIEKT "placeCurrentValue" *******************************************************



	var placeCurrentValue = {
  //ustala parametry bieżącego miejsca, w którym znajduje się gracz
		  placeCurrent: start, // miejsce, w którym znajduje się w danym momencie gracz
		  placeBack: undefined, // miejsce ostatnio opuszczone przez gracza
		  valuePlaceIndicator: undefined, // element należący do funkcji okreslających parametry miejsca, w którym znajduje się w danym momencie gracz

		  value0: function() {

			    this.placeBack = this.placeCurrent;
			    this.placeCurrent = start;
			    this.valuePlaceIndicator = start.placeIndicator;
		  },

		  value1: function() {

			    this.placeBack = this.placeCurrent;
			    this.placeCurrent = place1Krynoczka;
			    this.valuePlaceIndicator = place1Krynoczka.placeIndicator;
		  },

		  value2: function() {

			    this.placeBack = this.placeCurrent;
			    this.placeCurrent = place2NieznanyBor;
			    this.valuePlaceIndicator = place2NieznanyBor.placeIndicator;
		  },

		  value3: function() {

			    this.placeBack = this.placeCurrent;
			    this.placeCurrent = place3Nieznanowo;
			    this.valuePlaceIndicator = place3Nieznanowo.placeIndicator;
		  },

		  value4: function() {

			    this.placeBack = this.placeCurrent;
			    this.placeCurrent = place4Szczekotowo;
			    this.valuePlaceIndicator = place4Szczekotowo.placeIndicator;
		  },

		  value5: function() {

			    this.placeBack = this.placeCurrent;
			    this.placeCurrent = place5DabCar;
			    this.valuePlaceIndicator = place5DabCar.placeIndicator;
		  },

		  value6: function() {

			    this.placeBack = this.placeCurrent;
			    this.placeCurrent = place6Lutownia;
			    this.valuePlaceIndicator = place6Lutownia.placeIndicator;
		  },

		  value7: function() {

			    this.placeBack = this.placeCurrent;
			    this.placeCurrent = place7Topilo;
			    this.valuePlaceIndicator = place7Topilo.placeIndicator;
		  },

		  value8: function() {

			    this.placeBack = this.placeCurrent;
			    this.placeCurrent = place8Olszanka;
			    this.valuePlaceIndicator = place8Olszanka.placeIndicator;
		  },

		  value9: function() {

			   this.placeBack = this.placeCurrent;
			   this.placeCurrent = place9Przewloka;
			   this.valuePlaceIndicator = place9Przewloka.placeIndicator;
		  },

		  value10: function() {

			    this.placeBack = this.placeCurrent;
			    this.placeCurrent = place10Teremiski;
			    this.valuePlaceIndicator = place10Teremiski.placeIndicator;
		  },

		  value11: function() {

			    this.placeBack = this.placeCurrent;
			    this.placeCurrent = place11Czerlonka;
			    this.valuePlaceIndicator = place11Czerlonka.placeIndicator;
		  },

		  value12: function() {

			    this.placeBack = this.placeCurrent;
			    this.placeCurrent = place12MiejsceMocy;
			    this.valuePlaceIndicator = place12MiejsceMocy.placeIndicator;
		  },

		  value13: function() {

			    this.placeBack = this.placeCurrent;
			    this.placeCurrent = meta;
			    this.valuePlaceIndicator = meta.placeIndicator;
		  }
	};







	//******************************* OBIEKT "attributesValue"  *******************************************************

  var attributesValue = {
	// obsługuje ilość artefaktów w plecaku
	// obsługuje wyświetlanie trzech artefaktów do wyboru przez gracza

		  attributesAll: ["PUDEŁKO ZE ŚWIETLIKAMI", "ZAPAŁKI", "CZARODZIEJSKI FLET",  // przechowuje wszystkie dostępne atrybuty
								      "NALEWKA ENERGETYCZNA", "POROŻE JELENIA", "GUMOWCE",
										  "MIKSTURA Z SUPERJAGÓD", "DMUCHANY MATERAC", "KOMPAS", "SŁOIK SMALCU",
										  "MAŚĆ ŚWIERKOWA", "TALIZMAN"],

      startAttributes: [], // przechowuje trzy losowe atrybuty do wyboru przez gracza

			attributesNumber: undefined, // przechowuje ilość wszystkich atrybutów zebranych przez gracza

		  startAttributesRandom: function() {
      // ustala atrybuty losowe na początku gry
			    for (var i=0; i<7; i++) {
				      var attributeCounterRandom = Math.floor(Math.random() * this.attributesAll.length);
				      var a = attributesValue.startAttributes.indexOf(this.attributesAll[attributeCounterRandom]);
				      if (a < 0 && a !== attributesValue.startAttributes[0] && a !== attributesValue.startAttributes[1] && a !== attributesValue.startAttributes[2] && a !== attributesValue.startAttributes[3] && a !== attributesValue.startAttributes[4]) {
					        attributesValue.startAttributes.push(this.attributesAll[attributeCounterRandom]);
					        player.attributesCollected.push(this.attributesAll[attributeCounterRandom]);
				      }
				      else {
					        i = i-1;
				      }
			    }
			    attributesValue.startAttributesAndCounterMatch();
		  },

		startAttributesAndCounterMatch: function() {
    // wyświetla w plecaku wylosowane atrybuty na początku gry
	      for (var i = 0; i < attributesCounterTable.length; i++) {
				    document.getElementById(i).innerHTML = attributesValue.startAttributes[i];
				    if (attributesValue.startAttributes[i] === undefined) {
					      document.getElementById(i).innerHTML = "";
				    }
			  }
		},

		attributesDisplay: function() {
		// losuje atrybuty i wyświetla w brązowych polach (atrybuty do wyboru przez gracza, w każdym nowym miejscu)
		    var attributesToDisplay = [];
			  for (var i=0; i<3; i++) {
				    var attributeDisplayRandom = Math.floor(Math.random() * this.attributesAll.length);
				    if (this.attributesAll[attributeDisplayRandom] !== attributesToDisplay[0] && this.attributesAll[attributeDisplayRandom] !== attributesToDisplay[1] && this.attributesAll[attributeDisplayRandom] !== attributesToDisplay[2]) {
					      attributesToDisplay.push(this.attributesAll[attributeDisplayRandom]);
				    }
				    else {
				        i = i-1;
				    }
			  }
			  document.getElementById("attribute0").innerHTML = attributesToDisplay[0];
			  document.getElementById("attribute0").style.visibility = "visible";
			  document.getElementById("attribute1").innerHTML = attributesToDisplay[1];
			  document.getElementById("attribute1").style.visibility = "visible";
			  document.getElementById("attribute2").innerHTML = attributesToDisplay[2];
			  document.getElementById("attribute2").style.visibility = "visible";
		},

    attributeChoice: function() {
		// tworzy zdarzenie onclick w 3 atrybutach (do wyboru przez gracza)
		    attributesValue.attributesDisplay();
			  var attributes = document.getElementsByClassName("attributes");
			  for (var i = 0; i < attributes.length; i++) {
				    attributes[i].onclick = attributesValue.attributesChoiceActions;
			  }
		},

		attributesChoiceActions: function(eventObj) {
		// obsługuje zdarzenie onclick - wybór atrybutu przez gracza:
			// dodaje wybrany atrybut do attributesCollected
			// wyświetla wybrany atrybut w plecaku
			  attribute = eventObj.target;
			  attribute = attribute.innerHTML;
			  player.attributesCollected.push(attribute);
			  var lastAttribute = player.attributesCollected[player.attributesCollected.length - 1];
			  for (i = 0; i < attributesCounterTable.length; i++) {
				    while (attributesCounterTable[i].innerHTML === "") {
					      attributesCounterTable[i].innerHTML = lastAttribute;
					      var x = document.getElementsByClassName("attributes");
					      var j;
					      for (j = 0; j < x.length; j++) {
			    		      x[j].style.visibility = "hidden";
					      }
					      document.getElementById("command").innerHTML = "Wybierz kierunek i ruszaj w dalszą drogę!";
					      return true;
				    }
			  }
		},

		attributesStyleToHide: function() {
    // ukrywa brązowe pola atrybutów do wyboru
	      var x = document.getElementsByClassName("attributes");
			  var j;
			  for (j = 0; j < x.length; j++) {
				    x[j].style.visibility = "hidden";
			  }
		},

    countAttributesNumber: function() {
		// liczy ilość wszystkich atrybutów zebranych przez gracza
		    var allAttributesCollected = [];
        for (var i = 0; i <attributesCounterTable.length; i++) {
            if (attributesCounterTable[i].innerHTML === "PUDEŁKO ZE ŚWIETLIKAMI" || attributesCounterTable[i].innerHTML === "ZAPAŁKI" ||
                attributesCounterTable[i].innerHTML === "CZARODZIEJSKI FLET" || attributesCounterTable[i].innerHTML === "NALEWKA ENERGETYCZNA" ||
                attributesCounterTable[i].innerHTML === "POROŻE JELENIA" || attributesCounterTable[i].innerHTML === "GUMOWCE" ||
                attributesCounterTable[i].innerHTML === "MIKSTURA Z SUPERJAGÓD" || attributesCounterTable[i].innerHTML === "DMUCHANY MATERAC" ||
                attributesCounterTable[i].innerHTML === "KOMPAS" || attributesCounterTable[i].innerHTML === "SŁOIK SMALCU" ||
                attributesCounterTable[i].innerHTML === "MAŚĆ ŚWIERKOWA" || attributesCounterTable[i].innerHTML === "TALIZMAN") {
                    allAttributesCollected.push(attributesCounterTable[i]);
            }
        }
        attributesValue.attributesNumber = allAttributesCollected.length;
    }
	};





//**********************************  OBIEKT "player" **************************************************************

	var player = {

			fadeInFrom: 0,

			fadeOutFrom: 10,

			attributesCollected: [], //przechowuje aktualną ilość atrybutów zebranych przez gracza

		  positionChange: function() {
			// zmienia pozycję gracza pomiędzy miejscami
			    var parent5 = document.getElementById(placeCurrentValue.placeBack.playerPosition);
			    var child5 = document.getElementById("player");
			    parent5.removeChild(child5);
			    document.getElementById(placeCurrentValue.placeCurrent.playerPosition).innerHTML ='<img id="player" src="img/player/playerYellow.jpg" />';
			    player.fadeIn("player");
		  },

		  fadeIn: function(element) {
			    var target = document.getElementById(element);
			    target.style.display = "block";
			    var newSetting = this.fadeInFrom / 10;
			    target.style.opacity = newSetting;
			    this.fadeInFrom++;

			    if (this.fadeInFrom === 10) {
				      target.style.opacity = 1;
				      clearTimeout(loopTimer);
				      this.fadeInFrom = 0;
				      return false;
			    }
			    var loopTimer = setTimeout('player.fadeIn(\''+element+'\')', 100);
		},

		/*
		fadeOut: function(element) {
			  var target = document.getElementById(element);
			  target.style.display = "none";
			  var newSetting = this.fadeOutFrom / 10;
			  target.style.opacity = newSetting;
			  this.fadeOutFrom--;

			  if(this.fadeOutFrom === 0) {
				    target.style.opacity = 0;
				    clearTimeout(loopTimer);
				    this.fadeOutFrom = 10;
				    return false;
			  }
			  var loopTimer = setTimeout('player.fadeOut(\''+element+'\')', 100);
		} */

    // tablica należąca do funkcji this.countPlacesVisitedNumber sumującej miejsca odwiedzone przez gracza
    playerPositions: [start.playerPosition, place1Krynoczka.playerPosition, place2NieznanyBor.playerPosition,
                          place3Nieznanowo.playerPosition, place4Szczekotowo.playerPosition, place5DabCar.playerPosition,
                          place6Lutownia.playerPosition, place7Topilo.playerPosition, place8Olszanka.playerPosition,
                          place9Przewloka.playerPosition, place10Teremiski.playerPosition, place11Czerlonka.playerPosition,
                          place12MiejsceMocy.playerPosition],

    placesVisitedNumber: undefined, // przechowuje ilość wszystkich miejsc odwiedzonych przez gracza

    countPlacesVisitedNumber: function() {
    // liczy ilość wszystkich miejsc odwiedzonych przez gracza
		    var placesVisited = [];
        for (var i = 0; i < player.playerPositions.length; i++) {
            if (document.getElementById(player.playerPositions[i]).hasChildNodes()) {
                placesVisited.push(player.playerPositions[i]);
            }
        }
        player.placesVisitedNumber = placesVisited.length+1;
    },

    movesNumber: 0, // ilość wszystkich ruchów wykonanych przez gracza

    countMoves: function() {
    // liczy ilość wszystkich ruchów wykonanych przez gracza
		    player.movesNumber++;
    }
	};






//**************************************  ZMIENNE_GLOBALNE  ********************************************************************

	var attributesCounterTable = [document.getElementById("1"), document.getElementById("2"), document.getElementById("3"),
	                              document.getElementById("4"), document.getElementById("5"), document.getElementById("6"),
																document.getElementById("7"), document.getElementById("8"), document.getElementById("9"),
																document.getElementById("10"), document.getElementById("11")];



















	/*
	// pokazuje lokalizację wszystkich miejsc
	function placement() {

		document.getElementById("053").innerHTML = '<img id="1krynoczka" src="img/green.jpg" />';
		document.getElementById("100").innerHTML = '<img id="2nienznayBor" src="img/green.jpg" />';
		document.getElementById("171").innerHTML = '<img id="5dabCar" src="img/green.jpg" />';

		document.getElementById("033").innerHTML = '<img id="4szczekotowo" src="img/green.jpg" />';
		document.getElementById("127").innerHTML = '<img id="3nieznanowo" src="img/green.jpg" />';
		document.getElementById("244").innerHTML = '<img id="7topilo" src="img/green.jpg" />';

		document.getElementById("035").innerHTML = '<img id="6lutownia" src="img/green.jpg" />';
		document.getElementById("132").innerHTML = '<img id="11czerlonka" src="img/green.jpg" />';
		document.getElementById("225").innerHTML = '<img id="8olszanka" src="img/green.jpg" />';

		document.getElementById("062").innerHTML = '<img id="10teremiski" src="img/green.jpg" />';
		document.getElementById("137").innerHTML = '<img id="12miejsceMocy" src="img/green.jpg" />';
		document.getElementById("277").innerHTML = '<img id="9przewloka" src="img/green.jpg" />';
	}
	placement();

	*/
