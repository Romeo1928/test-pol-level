import React, {useState} from 'react';
import b from '../SuperButton/SuperButton.module.css'
import s from './Klucz.module.css'
import {SuperButton} from "../SuperButton/SuperButton";

function Klucz() {
	const [showText, setShowText] = useState(false);

	const handleButtonClick = () => {
		setShowText(!showText);
	};

	return (

		<div>
			<SuperButton className={b.customButtonKlucz} name={'KLUCZ/PUNKTACJA I UZYSKANY POZIOM'} callBack={handleButtonClick}/>
			{/*<button className={s.buttonKlucz}*/}
			{/*		  onClick={handleButtonClick}*/}
			{/*>KLUCZ/PUNKTACJA I UZYSKANY POZIOM*/}
			{/*</button>*/}
			{showText && (
				<div className={s.kluczList}>
					<div>
						<h3>KLUCZ</h3>
						<h4>A1</h4>
						<li>1. c) Nazywam się Kowalski.</li>
						<li>2. b) Kto to jest?</li>
						<li>3. a) są</li>
						<li>4. b) dobrym dentystą</li>
						<li>5. b) autobusem</li>
						<li>6. b) jeździć</li>
						<li>7. b) mój komputer</li>
						<li>8. c) cukru</li>
						<li>9. b) dwieście trzydzieści trzy</li>
						<li>10. c) dziewiętnastej dwadzieścia</li>
						<li>11. c) jedzą</li>
						<li>12. b) pracowaliśmy</li>
						<li>13. a) będą zdawać</li>
						<li>14. a) Polsce</li>
						<h4>A2</h4>
						<li>15. c) żebyście</li>
						<li>16. c) którzy</li>
						<li>17. b) wyjeżdżałem</li>
						<li>18. a) ci</li>
						<li>19. a) siedemdziesiątym trzecim</li>
						<li>20. c) większym</li>
						<li>21. a) niego</li>
						<li>22. b) mi</li>
						<li>23. b) pojechałybyśmy</li>
						<li>24. c) Wisłą</li>
						<li>25. a) niż</li>
						<li>26. c) gdybym</li>
						<li>27. a) dlatego, że</li>
						<li>28. c) czy</li>
						<li>29. c) otwarci</li>
						<li>30. b) a</li>
						<li>31. a) Włosi</li>
						<li>32. c) ożenił się</li>
						<li>33. c) przygotowywać</li>
						<h4>B1</h4>
						<li>34. c) życzliwi</li>
						<li>35. b) czworo</li>
						<li>36. c) przyjaciół</li>
						<li>37. b) do</li>
						<li>38. c) znad</li>
						<li>39. b) poszedł</li>
						<li>40. c) świecie</li>
						<li>41. c) zaczekają</li>
						<li>42. b) ubierz</li>
						<li>43. c) zrobił</li>
						<li>44. a) nikim</li>
						<li>45. c) lat</li>
						<li>46. c) kogo</li>
						<li>47. c) kupiła</li>
						<li>48. b) robi</li>
						<li>49. c) nauczyciele</li>
						<li>50. a) łatwiejsze</li>
						<li>51. c) najlepszy</li>
						<li>52. c) pieniędzy</li>
						<li>53. a) pomoże</li>
						<h4>B2</h4>
						<li>54. b) tobie</li>
						<li>55. b) roboty</li>
						<li>56. c) prawdę</li>
						<li>57. a) nadwagi</li>
						<li>58. c) głowie</li>
						<li>59. c) dorobił</li>
						<li>60. c) doczytasz</li>
						<li>61. b) podpisać</li>
						<li>62. c) wymówić</li>
						<li>63. a) zaspałem</li>
						<li>64. b) żeby</li>
						<li>65. Pijąc</li>
						<li>66. c) Z powodu</li>
						<li>67. b) mu</li>
						<li>68. c) dwójkę</li>
						<li>69. c) niego</li>
						<li>70. a) niej</li>
						<li>71. c) spalił</li>
						<li>72. a) karku</li>
						<li>73. c) pół darmo</li>
						<h4>C1</h4>
						<li>74. powrotu</li>
						<li>75. uczciwość</li>
						<li>76. W razie deszczu schronimy się....</li>
						<li>77. Pod pozorem bólu głowy wyszedł z biura.</li>
						<li>78. bez względu na płeć....</li>
						<li>79. c) chociaż 10</li>
						<li>80. a) więc</li>
						<li>81. dwojgu</li>
						<li>82. a) wypoczął</li>
						<li>83. c) przywiodły</li>
						<li>84. a) zrzucisz</li>
						<li>85. swojej wiedzy wygrał ten konkurs</li>
						<li>86. odwaga</li>
						<li>87. a) Spostrzegłszy</li>
						<li>88. c) pod wpływem</li>
						<h4>C2</h4>
						<li>89. a) ulega się</li>
						<li>90. b) posługujemy się</li>
						<li>91. b) trojga studentów</li>
						<li>92. podkolanówki</li>
						<li>93. zamorskich</li>
						<li>94. c) przeszkodzie</li>
						<li>95. a) w celu</li>
						<li>96. znajomości języka nie dasz sobie rady za granicą.</li>
						<li>97. a) jakby</li>
						<li>98. b) dodzwonić się</li>
						<li>99. a) samo przez się</li>
						<li>100. podartym</li>
					</div>
					<div>
						<h3>PUNKTACJA I UZYSKANY POZIOM</h3>
						<pre>
{`1-14 A1
15-33 A2
34-53 B1
54-73 B2
74-88 C1
89-100 C2`}
        </pre>
					</div>
				</div>
			)}

		</div>
	);
}

export default Klucz;

