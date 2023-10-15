import React, {useState} from 'react';
import './App.css';
import b from './components/SuperButton/SuperButton.module.css'
import {Question} from "./components/Question/Question";
import Klucz from "./components/Klucz/Klucz";
import {SuperButton} from "./components/SuperButton/SuperButton";


export type QuestionType = {
	id: number;
	question: string;
	options: string[];
	correctAnswer: string;
	points: number;
};

const questions: QuestionType[] = [
	{
		id: 1,
		question: 'Jak się Pan nazywa?',
		options: ['a) Pan nazywa się Kowalski.', 'b) Nazywa się Kowalski.', 'c) Nazywam się Kowalski.'],
		correctAnswer: 'c) Nazywam się Kowalski.',
		points: 1,
	},
	{
		id: 2,
		question: 'To jest Anna.',
		options: ['a) Co to jest?', 'b) Kto to jest?', 'c) Kto ona jest?'],
		correctAnswer: 'b) Kto to jest?',
		points: 1
	},
	{
		id: 3,
		question: 'Piotr i Andrzej ............... z Polski.',
		options: ['a) są', 'b) jest', 'c) jesteśmy'],
		correctAnswer: 'a) są',
		points: 1
	},
	{
		id: 4,
		question: 'Mój ojciec jest ..................... .',
		options: ['a) dobry dentysta', 'b) dobrym dentystą', 'c) dobrą dentystką'],
		correctAnswer: 'b) dobrym dentystą',
		points: 1
	},
	{
		id: 5,
		question: 'Do pracy jadę ..................... .',
		options: ['a) z autobusem', 'b) autobusem', 'c) na autobusie'],
		correctAnswer: 'b) autobusem',
		points: 1
	},
	{
		id: 6,
		question: 'Nie umiem ......................... na nartach.',
		options: ['a) jeżdżę', 'b) jeździć', 'c) jechać'],
		correctAnswer: 'b) jeździć',
		points: 1
	},
	{
		id: 7,
		question: 'Lubię ...................................... .',
		options: ['a) mojego komputera', 'b) mój komputer', 'c) moim komputerem'],
		correctAnswer: 'b) mój komputer',
		points: 1
	},
	{
		id: 8,
		question: 'Proszę kawę bez ............................ .',
		options: ['a) cukier', 'b) cukrem', 'c) cukru'],
		correctAnswer: 'c) cukru',
		points: 1
	},
	{
		id: 9,
		question: 'Osiemnaście plus dwieście piętnaście to ....................... .',
		options: ['a) trzydzieści trzy', 'b) dwieście trzydzieści trzy', 'c) dwieście trzynaście'],
		correctAnswer: 'b) dwieście trzydzieści trzy',
		points: 1
	},
	{
		id: 10,
		question: 'Lekcja zaczyna się o ................. (19:20)',
		options: ['a) dziesiątej dwadzieścia.', 'b) dziewiątej dwadzieścia.', 'c) dziewiętnastej dwadzieścia.'],
		correctAnswer: 'c) dziewiętnastej dwadzieścia.',
		points: 1,
	},
	{
		id: 11,
		question: 'Często jemy w barach mlecznych, ale oni ..................... w restauracji.',
		options: ['a) jem', 'b) jemy', 'c) jedzą'],
		correctAnswer: 'c) jedzą',
		points: 1,
	},
	{
		id: 12,
		question: 'Wczoraj (my) .................... dziesięć godzin.',
		options: ['a) pracowali', 'b) pracowaliśmy', 'c) pracowały'],
		correctAnswer: 'b) pracowaliśmy',
		points: 1,
	},
	{
		id: 13,
		question: 'Jutro Ania i Piotr ......................... egzamin.',
		options: ['a) będą zdawać', 'b) będziecie zdawać', 'c) będą zdawały'],
		correctAnswer: 'a) będą zdawać',
		points: 1,
	},
	{
		id: 14,
		question: 'Teraz mieszkam w ............................ .',
		options: ['a) Polsce', 'b) Polska', 'c) Polski'],
		correctAnswer: 'a) Polsce',
		points: 1,
	},
	{
		id: 15,
		question: 'Nauczyciel poprosił was, …………………………… weszły do klasy.',
		options: ['a) żebyśmy', 'b) żeby', 'c) żebyście'],
		correctAnswer: 'c) żebyście',
		points: 1,
	},
	{
		id: 16,
		question: 'Mężczyźni, ……………………….. uprawiają sport, żyją dłużej.',
		options: ['a) który', 'b) które', 'c) którzy'],
		correctAnswer: 'c) którzy',
		points: 1,
	},
	{
		id: 17,
		question: 'W zeszłym roku często ………………………… za granicę.',
		options: ['a) pojechałem', 'b) wyjeżdżałem', 'c) wyjechałem'],
		correctAnswer: 'b) wyjeżdżałem',
		points: 1,
	},
	{
		id: 18,
		question: '……………….. ludzie mają dużo problemów.',
		options: ['a) Ci', 'b) Te', 'c) Jacy'],
		correctAnswer: 'a) Ci',
		points: 1,
	},
	{
		id: 19,
		question: 'On urodził się w ……………………………… roku.',
		options: ['a) siedemdziesiątym trzecim', 'b) siedemdziesiątego trzeciego', 'c) siedemdziesiąty trzeci'],
		correctAnswer: 'a) siedemdziesiątym trzecim',
		points: 1,
	},
	{
		id: 20,
		question: 'Kraków jest ………………………..miastem od Tarnowa.',
		options: ['a) dłuższym', 'b) dużym', 'c) większym'],
		correctAnswer: 'c) większym',
		points: 1,
	},
	{
		id: 21,
		question: "Ten samochód został zaprojektowany przez ………………………. .",
		options: ["a) niego", "b) jego", "c) go"],
		correctAnswer: "a) niego",
		points: 1
	},
	{
		id: 22,
		question: "Powiedz ……………………………….., co dziś robiłeś?",
		options: ["a) mnie", "b) mi", "c) mną"],
		correctAnswer: "b) mi",
		points: 1
	},
	{
		id: 23,
		question: "Gdybyśmy były bogate, ……………………………… na długie wakacje.",
		options: ["a) pojechaliby", "b) pojechałybyśmy", "c) pojechalibyśmy"],
		correctAnswer: "b) pojechałybyśmy",
		points: 1
	},
	{
		id: 24,
		question: "Kraków leży nad ………………………… .",
		options: ["a) Wiśle", "b) Wisłę", "c) Wisłą"],
		correctAnswer: "c) Wisłą",
		points: 1
	},
	{
		id: 25,
		question: "Dziś jest zimniej …………………………. wczoraj.",
		options: ["a) niż", "b) od", "c) przed"],
		correctAnswer: "a) niż",
		points: 1
	},
	{
		id: 26,
		question: "………………………. miał czas, przeczytałbym tę książkę.",
		options: ["a) gdybyś", "b) gdyby", "c) gdybym"],
		correctAnswer: "c) gdybym",
		points: 1
	},
	{
		id: 27,
		question: "Nie chodzę często do teatru, ……………………………. nie mam pieniędzy.",
		options: ["a) dlatego, że", "b) dlatego", "c) że"],
		correctAnswer: "a) dlatego, że",
		points: 1
	},
	{
		id: 28,
		question: "Ania zapytała mnie, ……………………widziałam ten film.",
		options: ["a) żebym", "b) że", "c) czy"],
		correctAnswer: "c) czy",
		points: 1
	},
	{
		id: 29,
		question: "……………………………ludzie lubią poznawać inne kultury i miejsca.",
		options: ["a) otwarte", "b) otwarty", "c) otwarci"],
		correctAnswer: "c) otwarci",
		points: 1
	},
	{
		id: 30,
		question: "Wieczorem najpierw zjem kolację, ………. potem obejrzę film.",
		options: ["a) i", "b) a", "c) albo"],
		correctAnswer: "b) a",
		points: 1
	},
	{
		id: 31,
		question: "Nasze miasto odwiedzili dwaj znani …………………………… .",
		options: ["a) Włosi", "b) Włochy", "c) Włoszki"],
		correctAnswer: "a) Włosi",
		points: 1
	},
	{
		id: 32,
		question: "Mój dziadek ……………………………….. z babcią w 1947 r.",
		options: ["a) pobrał się", "b) wyszedł za mąż", "c) ożenił się"],
		correctAnswer: "c) ożenił się",
		points: 1
	},
	{
		id: 33,
		question: "Czy już skończyłeś ………………………….. referat?",
		options: ["a) gotować", "b) przygotować", "c) przygotowywać"],
		correctAnswer: "c) przygotowywać",
		points: 1
	},
	{
		id: 34,
		question: "Olga dobrze czuje się w Polsce. Jej przyjaciele są bardzo ................................... .",
		options: ["a) życzliwymi", "b) życzliwe", "c) życzliwi"],
		correctAnswer: "c) życzliwi",
		points: 1
	},
	{
		id: 35,
		question: "Marek i Agata mają .............................. dzieci.",
		options: ["a) cztery", "b) czworo", "c) czterech"],
		correctAnswer: "b) czworo",
		points: 1
	},
	{
		id: 36,
		question: "W nowym miejscu zamieszkania brakowało mi ............................................. .",
		options: ["a) przyjaciele", "b) przyjaciółmi", "c) przyjaciół"],
		correctAnswer: "c) przyjaciół",
		points: 1
	},
	{
		id: 37,
		question: "Wczoraj cały dzień bolał mnie ząb. Wieczorem pojechałam ................... dentysty.",
		options: ["a) u", "b) do", "c) z"],
		correctAnswer: "b) do",
		points: 1
	},
	{
		id: 38,
		question: "Przesyłamy serdeczne pozdrowienia ........................... morza.",
		options: ["a) z", "b) od", "c) znad"],
		correctAnswer: "c) znad",
		points: 1
	},
	{
		id: 39,
		question: "Sławku, bardzo cię proszę, żebyś ............................................. ze mną do teatru.",
		options: ["a) poszliśmy", "b) poszedł", "c) poszedłbyś"],
		correctAnswer: "b) poszedł",
		points: 1
	},
	{
		id: 40,
		question: "W wiadomościach radiowych mówili o tym, co dzieje się na ............................. .",
		options: ["a) świat", "b) światem", "c) świecie"],
		correctAnswer: "c) świecie",
		points: 1
	},
	{
		id: 41,
		question: "Niech państwo ................................................ na resztę gości.",
		options: ["a) zaczekać", "b) zaczekali", "c) zaczekają"],
		correctAnswer: "c) zaczekają",
		points: 1
	},
	{
		id: 42,
		question: "Marysiu, .............................. czapkę, bo jest zimno.",
		options: ["a) ubiera", "b) ubierz", "c) ubrała"],
		correctAnswer: "b) ubierz",
		points: 1
	},
	{
		id: 43,
		question: "Kiedy go poprosiłam, zaraz .................................... mi herbatę.",
		options: ["a) zrobić", "b) zrobiła", "c) zrobił"],
		correctAnswer: "c) zrobił",
		points: 1
	},
	{
		id: 44,
		question: "Z ...................... nie mogę tutaj porozmawiać, bo nikt nie mówi po angielsku.",
		options: ["a) nikim", "b) nikomu", "c) nikt"],
		correctAnswer: "a) nikim",
		points: 1
	},
	{
		id: 45,
		question: "Poinformowano mnie, że od kilku ........................ nikt tu nie mieszkał.",
		options: ["a) rok", "b) latami", "c) lat"],
		correctAnswer: "c) lat",
		points: 1
	},
	{
		id: 46,
		question: "Od ........................ pożyczyłeś pieniądze?",
		options: ["a) komu", "b) kto", "c) kogo"],
		correctAnswer: "c) kogo",
		points: 1
	},
	{
		id: 47,
		question: "Maria .............................. Sławkowi na urodziny nowy zegarek.",
		options: ["a) kupowała", "b) kupił", "c) kupiła"],
		correctAnswer: "c) kupiła",
		points: 1
	},
	{
		id: 48,
		question: "Ela codziennie .................................. zakupy w supermarkecie.",
		options: ["a) zrobi", "b) robi", "c) zrobiła"],
		correctAnswer: "b) robi",
		points: 1
	},
	{
		id: 49,
		question: "Na zebranie przyszli studenci i ....................................",
		options: ["a) nauczycielami", "b) nauczycielach", "c) nauczyciele"],
		correctAnswer: "c) nauczyciele",
		points: 1
	},
	{
		id: 50,
		question: "Wybieramy aparaty coraz ........................................... w obsłudze.",
		options: ["a) łatwiejsze", "b) najłatwiejsze", "c) łatwiejszymi"],
		correctAnswer: "a) łatwiejsze",
		points: 1
	},
	{
		id: 51,
		question: "Ten komputer okazał się ...................................... ze wszystkich w tym sklepie.",
		options: ["a) dobry", "b) lepszy", "c) najlepszy"],
		correctAnswer: "c) najlepszy",
		points: 1
	},
	{
		id: 52,
		question: "Ewelina tłumaczyła się nie brakiem czasu, ale brakiem ............................. na wakacje.",
		options: ["a) pieniędzmi", "b) pieniądz", "c) pieniędzy"],
		correctAnswer: "c) pieniędzy",
		points: 1
	},
	{
		id: 53,
		question: "Marek mi ..............................., kiedy będę się przeprowadzać.",
		options: ["a) pomoże", "b) pomóc", "c) pomagać"],
		correctAnswer: "a) pomoże",
		points: 1
	},
	{
		id: 54, question: "Nie zachowuj się tak jakby wszystko było przeciwko …………………………… .",
		options: ["a) ci", "b) tobie", "c) ciebie"],
		correctAnswer: "b) tobie",
		points: 1
	},
	{
		id: 55,
		question: "Czy to prawda, że oni tak dużo pracują i mają ręce pełne …………………….. .",
		options: ["a) pieniędzy", "b) roboty", "c) zajęcia"],
		correctAnswer: "b) roboty",
		points: 1
	},
	{
		id: 56,
		question: "Ty wiesz, że ja nigdy nie kłamię, zawsze mówię ……………………………. .",
		options: ["a) kłamstwo", "b) nieprawdę", "c) prawdę"],
		correctAnswer: "c) prawdę",
		points: 1
	},
	{
		id: 57,
		question: "Marek waży 10 kg za dużo. Ma 10 kg ………………………………… .",
		options: ["a) nadwagi", "b) wagi", "c) przewagi"],
		correctAnswer: "a) nadwagi",
		points: 1
	},
	{
		id: 58,
		question: "Monika zawróciła Piotrowi w …………………………… .",
		options: ["a) sercu", "b) mózgu", "c) głowie"],
		correctAnswer: "c) głowie",
		points: 1
	},
	{
		id: 59,
		question: "Pan Kowalski nigdy nie lubił pracować. Może właśnie dlatego niczego się nie …………………… .",
		options: ["a) przerobił", "b) nadrobił", "c) dorobił"],
		correctAnswer: "c) dorobił",
		points: 1
	},
	{
		id: 60,
		question: "Jeszcze nie skończyłeś czytać tej książki, a już chcesz o niej dyskutować . Będzie lepiej, jeśli ………………………………. ją do końca.",
		options: ["a) odczytasz", "b) poczytasz", "c) doczytasz"],
		correctAnswer: "c) doczytasz",
		points: 1
	},
	{
		id: 61,
		question: "To są ważne dokumenty. Dlatego proszę się pod nimi starannie …………………………….. .",
		options: ["a) zapisać", "b) podpisać", "c) wpisać"],
		correctAnswer: "b) podpisać",
		points: 1
	},
	{
		id: 62,
		question: "To słowo jest bardzo trudne. Nie potrafię go niestety ………………………………… .",
		options: ["a) zamówić", "b) omówić", "c) wymówić"],
		correctAnswer: "c) wymówić",
		points: 1
	},
	{
		id: 63,
		question: "Przepraszam, że się spóźniłem, ale niestety ………………………………………. .",
		options: ["a) zaspałem", "b) przespałem", "c) wyspałem"],
		correctAnswer: "a) zaspałem",
		points: 1
	},
	{
		id: 64,
		question: "Musimy bardzo wcześnie wstać, ……………….. zdążyć na pociąg.",
		options: ["a) w celu", "b) żeby", "c) jeśli"],
		correctAnswer: "b) żeby",
		points: 1
	},
	{
		id: 65,
		question: "Kiedy pił herbatę, rozmawiał z przyjacielem.\n……………………………… herbatę, rozmawiał z przyjacielem.",
		options: ["a) Pijąc", "b) Pijący", "c) Pijącego"],
		correctAnswer: "a) Pijąc",
		points: 1
	},
	{
		id: 66,
		question: "…………………………………. choroby Jurek nie poszedł do szkoły.",
		options: ["a) W związku", "b) Przez", "c) Z powodu"],
		correctAnswer: "c) Z powodu",
		points: 1
	},
	{
		id: 67,
		question: "Od kilku dni Ewa i Janek gniewają się na siebie. Ona wypomina ………………………..., że za dużo pracuje.",
		options: ["a) on", "b) mu", "c) jego"],
		correctAnswer: "b) mu", "points": 1
	},
	{
		id: 68,
		question: "Janek zarzuca Ewie, że nie dba o ich …………………………. dzieci i o dom.",
		options: ["a) dwa", "b) dwie", "c) dwójkę"],
		correctAnswer: "c) dwójkę",
		points: 1
	},
	{
		id: 69, "question": "W końcu może zrozumieją, że ona nie może żyć bez ………………………… .",
		options: ["a) jego", "b) on", "c) niego"],
		correctAnswer: "c) niego",
		points: 1
	},
	{
		id: 70,
		question: "On nie może żyć bez …………………… .",
		options: ["a) niej", "b) jej", "c) nią"],
		correctAnswer: "a) niej",
		points: 1
	},
	{
		id: 71,
		question: "Wczoraj w fabryce palił się magazyn. Niestety, mimo szybkiej interwencji …..…………… się cały.",
		options: ["a) zapalił", "b) wypalił", "c) spalił"],
		correctAnswer: "c) spalił",
		points: 1
	},
	{
		id: 72,
		question: "Kowalski jest świetnym biznesmenem. On ma rzeczywiście ......………………… .",
		options: ["a) głowę na karku", "b) pstro w głowie", "c) ciężką rękę"],
		correctAnswer: "a) głowę na karku",
		points: 1
	},
	{
		id: 73,
		question: "Oni bardzo mało zarabiają. Pracują dosłownie za ………………………………….. .",
		options: ["a) fortunę", "b) ciężkie pieniądze", "c) pół darmo"],
		correctAnswer: "c) pół darmo",
		points: 1
	},
	{
		id: 74,
		question: "Boję się, że on tu wróci.\nBoje się jego ………………….…….. tutaj.",
		options: ["a) obecności", "b) przyjazdu", "c) powrotu"],
		correctAnswer: "c) powrotu",
		points: 1
	},
	{
		id: 75,
		question: "Nie wierzyła, że ci ludzie są uczciwi.\nWątpiła w ich ………………………………………. .",
		options: ["a) uczciwość", "b) szczerość", "c) prawdomówność"],
		correctAnswer: "a) uczciwość",
		points: 1
	},
	{
		id: 76,
		question: "Jeśli będzie deszcz, schronimy się w jakiejś najbliższej kawiarni.\nW razie………………………………………………………………………………………………………….... .",
		options: ["a) potrzeby", "b) konieczności", "c) niebezpieczeństwa"],
		correctAnswer: "b) konieczności",
		points: 1
	},
	{
		id: 77,
		question: "Powiedział, że boli go głowa i wyszedł z biura.\nPod pozorem ……………………………………………………………………………………………………… .",
		options: ["a) spotkania", "b) wizyty", "c) sprawy"],
		correctAnswer: "c) sprawy",
		points: 1
	},
	{
		id: 78,
		question: "Chociaż jesteście różnej płci, macie takie same prawa.\nBez względu na …………………………………………………………………………………………………. .",
		options: ["a) płeć", "b) przyczynę", "c) okoliczność"],
		correctAnswer: "a) płeć",
		points: 1
	},
	{
		id: 79,
		question: "Miała duże powodzenie u chłopców, ……………………………..……… nie była piękna.",
		options: ["a) ponieważ", "b) tymczasem", "c) chociaż"],
		correctAnswer: "c) chociaż",
		points: 1
	},
	{
		id: 80,
		question: "Jestem zobowiązany do tajemnicy, …………….…………….. nie odpowiem na to pytanie.",
		options: ["a) więc", "b) ale", "c) bowiem"],
		correctAnswer: "a) więc",
		points: 1
	},
	{
		id: 81,
		question: "Myślę czasami o ………………..……………….(2) rodzeństwa, którego nie znam.",
		options: ["a) nieznanego", "b) dwojgu", "c) nieznajomego"],
		correctAnswer: "b) dwojgu",
		points: 1
	},
	{
		id: 82,
		question: "Urzędnik wziął kilka dni urlopu i wreszcie sobie………………………..",
		options: ["a) wypoczął", "b) wypoczywał", "c) spoczął"],
		correctAnswer: "a) wypoczął",
		points: 1
	},
	{
		id: 83,
		question: "Twoje wspomnienia ………………………… mi na myśl moje dzieciństwo.",
		options: ["a) przyniosły", "b) przywozili", "c) przywiodły"],
		correctAnswer: "c) przywiodły",
		points: 1
	},
	{
		id: 84,
		question: "Z naszą dietą ……………………………………………..nawet 10 kilogramów!",
		options: ["a) zrzucisz", "b) wyrzucisz", "c) odrzucisz"],
		correctAnswer: "a) zrzucisz",
		points: 1
	},
	{
		id: 85,
		question: "Wygrał ten konkurs, ponieważ wiele wiedział. = Dzięki ……………………………………………………….. .",
		options: ["a) swojej wiedzy", "b) swoim umiejętnościom", "c) swojemu talentowi"],
		correctAnswer: "a) swojej wiedzy",
		points: 1
	},
	{
		id: 86,
		question: "Mężczyzna musi być odważny. = Mężczyznę musi cechować ….……………………………………………. .",
		options: ["a) odwaga", "b) odwagę", "c) odwagi"],
		correctAnswer: "a) odwaga",
		points: 1
	},
	{
		id: 87,
		question: "…………………………………………………… swój błąd, zamilkł.",
		options: ["a) Spostrzegłszy", "b) Spostrzeżony", "c) Spostrzegła"],
		correctAnswer: "a) Spostrzegłszy",
		points: 1
	},
	{
		id: 88,
		question: "Kierowca był ………………………………………………………….. alkoholu.",
		options: ["a) podczas", "b) w trakcie", "c) pod wpływem"],
		correctAnswer: "c) pod wpływem",
		points: 1
	},
	{
		id: 89,
		question: "Na pustyni często …………………………………………. optycznemu złudzeniu.",
		options: ["a) ulega się", "b) polega się", "c) poświęca się"],
		correctAnswer: "a) ulega się",
		points: 1
	},
	{
		id: 90,
		question: "Podczas jedzenia ………………………………………….. łyżką, nożem i widelcem.",
		options: ["a) używamy", "b) posługujemy się", "c) stosujemy"],
		correctAnswer: "b) posługujemy się",
		points: 1
	},
	{
		id: 91,
		question: "Dzisiaj nie ma na zajęciach …………………………………………………..: Kasi, Eli i Piotra.",
		options: ["a) troje studentów", "b) trojga studentów", "c) trojgu studentom"],
		correctAnswer: "b) trojga studentów",
		points: 1
	},
	{
		id: 92,
		question: "Dziewczynki lubią nosić kolorowe (pod/kolano) …………………………………………….. .",
		options: ["a) podkolanówki", "b) kolankówki", "c) podkolanki"],
		correctAnswer: "a) podkolanówki",
		points: 1
	},
	{
		id: 93,
		question: "Marzyli o zwiedzaniu (za/morze) ……………………………………………………..…… krain.",
		options: ["a) zamorskich", "b) morzowych", "c) zmorzonych"],
		correctAnswer: "a) zamorskich",
		points: 1
	},
	{
		id: 94,
		question: "Twój wyjazd nie może stanąć nam na …………………………………………….. .",
		options: ["a) przeszkodę", "b) przeszkodą", "c) przeszkodzie"],
		correctAnswer: "c) przeszkodzie",
		points: 1
	},
	{
		id: 95,
		question: "Podjęto próby, żeby zreformować rząd. = Podjęto próby ………………………….reformy rządu.",
		options: ["a) w celu", "b) mimo", "c) w razie"],
		correctAnswer: "a) w celu",
		points: 1
	},
	{
		id: 96,
		question: "Nie dasz sobie rady za granicą, jeśli nie będziesz znał języka. Bez …………………………………………………………………………………………………………………………… .",
		options: ["a) wątpienia", "b) pytania", "c) wątpliwości"],
		correctAnswer: "c) wątpliwości",
		points: 1
	},
	{
		id: 97,
		question: "Otworzył usta, ……………………………………zastanawiając się, co powiedzieć.",
		options: ["a) jakby", "b) więc", "c) kiedy"],
		correctAnswer: "a) jakby",
		points: 1
	},
	{
		id: 98,
		question: "Dzwoniłem cały ranek, ale nie mogłem ……………………………………………………. do urzędu.",
		options: ["a) zadzwonić", "b) dodzwonić się", "c) dzwonić"],
		correctAnswer: "b) dodzwonić się",
		points: 1
	},
	{
		id: 99,
		question: "To jest jasne i oczywiste. = To się rozumie ……………………………………………… .",
		options: ["a) samo przez się", "b) samemu przez siebie", "c) sam dla siebie"],
		correctAnswer: "a) samo przez się",
		points: 1
	},
	{
		id: 100,
		question: "Był zaniedbany i godny litości w tym swoim……………………………… płaszczu. (podrzeć)",
		options: ["a) podartym", "b) podranym", "c) podziurawionym"],
		correctAnswer: "a) podartym",
		points: 1
	}
];


function App() {
	const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
	// Разберем эту запись по шагам:
	// 1. `useState<string[]>(...)`: Хук `useState` принимает начальное значение состояния в качестве аргумента и возвращает массив с двумя элементами. Первый элемент массива - текущее значение состояния (`answers`), а второй элемент - функция (`setAnswers`), используемая для обновления значения состояния.
	// 2. `Array(questions.length).fill('')`: Здесь мы создаем новый массив с длиной, равной длине массива `questions`. Метод `fill('')` заполняет каждый элемент этого массива пустой строкой `''`. Таким образом, мы создаем новый массив, содержащий пустые строки, который будет использоваться в качестве начального значения состояния `answers`.
	// 3. `const [answers, setAnswers] = useState<string[]>(...)`: Массив с двумя элементами, возвращаемый хуком `useState`, разделяется на две переменные - `answers` и `setAnswers`. `answers` представляет текущее значение состояния, а `setAnswers` - функцию, которую мы будем использовать для обновления значения состояния `answers`.
	// Таким образом, данная запись создает состояние `answers` и функцию `setAnswers` с начальным значением, представляющим массив пустых строк. Вы можете использовать `answers` для доступа к текущему значению состояния и `setAnswers` для обновления этого значения.

	const [showTextState, setShowTextState] = useState({
		showResult: false,
		showText: false,
	});

	// const [showResult, setShowResult] = useState(false);

	const handleAnswerChange = (questionId: number, selectedOption: string) => {
		setAnswers((prevAnswers) => {
			const updatedAnswers = [...prevAnswers];
			updatedAnswers[questionId - 1] = selectedOption;
			return updatedAnswers;
		});
	};
	// Разберем эту функцию по шагам:
	// 1. (questionId: number, selectedOption: string): Это объявление параметров функции. Функция принимает два параметра:
	// questionId, который представляет идентификатор вопроса, и selectedOption, который представляет выбранный ответ.
	// 2. setAnswers((prevAnswers) => { ... }): Здесь мы используем функцию setAnswers, полученную из хука useState, чтобы обновить значение состояния answers. Вместо простого значения мы передаем функцию, которая принимает предыдущее значение состояния (prevAnswers) и возвращает новое значение.
	// 3.const updatedAnswers = [...prevAnswers];: Мы создаем копию предыдущего значения состояния answers, используя оператор расширения (...). Это делается для того, чтобы избежать прямого изменения предыдущего значения состояния.
	// 4. updatedAnswers[questionId - 1] = selectedOption;: Мы обновляем выбранный ответ в скопированном массиве updatedAnswers. Индекс выбранного вопроса (questionId - 1) соответствует индексу массива answers, так как массивы обычно начинаются с индекса 0.
	// 5. return updatedAnswers;: Мы возвращаем обновленный массив updatedAnswers из функции.
	// 	Таким образом, при вызове функции handleAnswerChange она обновляет значение состояния answers, создавая копию предыдущего значения, обновляя выбранный ответ и возвращая новый массив со всеми ответами, где только один выбранный ответ был изменен.

	// reduce
	// Мы используем метод reduce, который применяет функцию обратного вызова к каждому элементу массива questions, накапливая результат в переменной score. Изначально значение score устанавливается на 0.
	// Внутри функции обратного вызова проверяется, совпадает ли ответ, указанный в answers для данного индекса, с правильным ответом для этого вопроса. Если ответ совпадает, то добавляется количество баллов для этого вопроса к текущему значению score.
	// В конце функции reduce возвращается итоговое значение score, которое представляет общий балл.
	// Таким образом, новая версия функции calculateScore выполняет ту же логику, что и предыдущая версия, но с использованием метода reduce для более компактного и выразительного кода.
	const calculateScore = () => {
		return questions.reduce((score, question, index) => {
			if (answers[index] === question.correctAnswer) {
				score += question.points;
			}
			return score;
		}, 0);
	};

	// forEach
	// разберем эту функцию по шагам:
	// Создается переменная score и инициализируется нулевым значением. Эта переменная будет использоваться для хранения общего балла.
	// Используется метод forEach, чтобы пройтись по каждому элементу в массиве questions. Для каждого вопроса выполняется функция обратного вызова, которая принимает вопрос и индекс текущего элемента.
	// Внутри функции обратного вызова проверяется, совпадает ли ответ, указанный в массиве answers для данного индекса, с правильным ответом для этого вопроса (question.correctAnswer). Если ответ совпадает, то к переменной score добавляется количество баллов для этого вопроса (question.points).
	// В конце функции calculateScore возвращается значение переменной score.
	// Таким образом, эта функция проходит по каждому вопросу и сравнивает ответы с правильными ответами, накапливая баллы и возвращая общий балл в конце.
	// const calculateScore = () => {
	// 	let score = 0;
	// 	questions.forEach((question, index) => {
	// 		if (answers[index] === question.correctAnswer) {
	// 			score += question.points;
	// 		}
	// 	});
	// 	return score;
	// };


	//мы используем один useState для создания объекта состояния state, содержащего оба значения showResult и showText. Функции onClickResultHandler и onClickHandler обновляют только соответствующие свойства состояния, оставляя остальные без изменений. Мы используем функциональную форму setState, чтобы получить предыдущее состояние и обновить только нужные свойства.
	//Обратите внимание, что мы также добавили распаковку объекта состояния для получения отдельных переменных showResult и showText. Это позволяет использовать их независимо друг от друга в остальной части вашего кода.

	const onClickResultHandler = () => {
		setShowTextState(prevState => ({
			...prevState,
			showResult: !prevState.showResult,
		}));
	};
	// Функция `onClickResultHandler` обновляет состояние `showResult` в объекте состояния с использованием функциональной формы `setState`. Вот пошаговое объяснение, что происходит внутри этой функции:
	// 1. `setShowTextState` принимает функцию обратного вызова, которая получает предыдущее состояние в качестве аргумента (`prevState`).
	// 2. Внутри функции мы используем оператор расширения (`...prevState`), чтобы создать новый объект, который полностью копирует предыдущее состояние.
	// 3. Затем мы обновляем свойство `showResult` в новом объекте состояния, используя отрицание (`!prevState.showResult`). Это переключает значение `showResult` между `true` и `false`.
	// 4. В результате функция `setShowTextState` устанавливает новое состояние, которое включает предыдущее состояние с обновленным значением `showResult`.
	// Таким образом, при каждом вызове `onClickResultHandler` происходит обновление состояния `showResult` на противоположное значение. Например, если `showResult` равно `false`, после вызова `onClickResultHandler` оно будет установлено в `true`, и наоборот. Это позволяет переключать состояние `showResult` при каждом клике на кнопку или соответствующее событие.

	const onClickHandler = () => {
		setShowTextState(prevState => ({
			...prevState,
			showText: !prevState.showText,
		}));
	};

// Доступ к состояниям
// Обратите внимание, что мы также добавили распаковку (деструктуризацию) объекта состояния для получения отдельных переменных showResult и showText. Это позволяет использовать их независимо друг от друга в остальной части вашего кода.
// const { showResult, showText } = showTextState;

	return (
		<div className="App">
			<h1>Test plasujący z języka polskiego dla obcokrajowców</h1>
			<h3 className="descriptionTest">
				Rozwiąż test. Dokonaj wyboru poprawnej odpowiedzi: a, b lub c, a w
				pytaniach/zdaniach nr 65, 74, 75, 76,
				77, 78, 85, 86, 96, 100, utwórz poprawną formę, uzupełniając lukę. Sprawdź odpowiedzi według zamieszczonego
				pod testem klucza. Za każdą dobrze podaną odpowiedź policz jeden punkt. Dodaj wszystkie punkty, podsumuj
				ilość uzyskanych punktów i określ swój poziom znajomości języka.
			</h3>
			<SuperButton className={b.customButtonText} name={'↑ DESCRIPTION TEST ↓'} callBack={onClickHandler}/>
			{/*<button className="button"*/}
			{/*		  onClick={onClickHandler}>↑ DESCRIPTION TEST ↓</button>*/}
			{showTextState.showText &&
				<h3 className="descriptionTest">
					Решите тест. Выберите правильный ответ: a, b или c, а в вопросах/предложениях 65, 74, 75, 76, 77, 78,
					85, 86, 96, 100 составьте правильную форму, заполнив пробел. Проверьте свои ответы по ключу, приведенному
					под тестом. За каждый правильно указанный ответ засчитывается 1 балл. Сложите все баллы, просуммируйте
					полученное количество баллов и определите свой уровень владения языком.
				</h3>}
			{questions.map((el) => {
				return (
					<Question
						key={el.id}
						question={el}
						selectedOption={answers[el.id - 1]}
						onAnswerChange={handleAnswerChange}
						showResults={showTextState.showResult}
					/>
				)
			})}
			{showTextState.showResult &&
				<h2>
					Баллы за правильные ответы: {calculateScore()}
				</h2>
			}
			<SuperButton name={'SHOW RESULTS TEST'} callBack={onClickResultHandler} className={b.customButtonResult}/>
			{/*<button className="button"*/}
			{/*		  onClick={onClickResultHandler}*/}
			{/*	// onClick={() => setShowText(true)}*/}
			{/*>SHOW RESULTS TEST*/}
			{/*</button>*/}
			<div className="resultBody">
				<Klucz/>
			</div>
		</div>
	);
}


export default App;






