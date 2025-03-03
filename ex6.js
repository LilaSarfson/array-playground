// filter

let countries = [{
    "name": "AFGHANISTAN",
    "currencyCode": "971",
    "currencyName": "AFGHANI"
}, {
    "name": "ALAND ISLANDS",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "ALBANIA",
    "currencyCode": "008",
    "currencyName": "LEK"
}, {
    "name": "ALGERIA",
    "currencyCode": "012",
    "currencyName": "ALGERIAN DINAR"
}, {
    "name": "AMERICAN SAMOA",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "ANDORRA",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "ANGOLA",
    "currencyCode": "973",
    "currencyName": "ANGOLAN KWANZA"
}, {
    "name": "ANGUILLA",
    "currencyCode": "951",
    "currencyName": "EAST CARRIBEAN DOLLAR"
}, {
    "name": "ANTARCTICA",
    "currencyCode": "578",
    "currencyName": "NORWEGIAN KRONE"
}, {
    "name": "ANTIGUA AND BARBUDA",
    "currencyCode": "951",
    "currencyName": "EAST CARRIBEAN DOLLAR"
}, {
    "name": "ARGENTINA",
    "currencyCode": "032",
    "currencyName": "ARGENTINE PESO"
}, {
    "name": "ARMENIA",
    "currencyCode": "051",
    "currencyName": "ARMENIAN DRAM"
}, {
    "name": "ARUBA",
    "currencyCode": "533",
    "currencyName": "ARUBAN GUILDER"
}, {
    "name": "AUSTRALIA",
    "currencyCode": "036",
    "currencyName": "AUSTRALIAN DOLLAR"
}, {
    "name": "AUSTRIA",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "AZERBAIJAN",
    "currencyCode": "944",
    "currencyName": "AZERBAIJANIAN MANAT"
}, {
    "name": "BAHAMAS",
    "currencyCode": "044",
    "currencyName": "BAHAMIAN DOLLAR"
}, {
    "name": "BAHRAIN",
    "currencyCode": "048",
    "currencyName": "BAHRAINI DINAR"
}, {
    "name": "BANGLADESH",
    "currencyCode": "050",
    "currencyName": "TAKA"
}, {
    "name": "BARBADOS",
    "currencyCode": "052",
    "currencyName": "BARBADOS DOLLAR"
}, {
    "name": "BELARUS",
    "currencyCode": "933",
    "currencyName": "BELARUSIAN RUBLE"
}, {
    "name": "BELGIUM",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "BELIZE",
    "currencyCode": "084",
    "currencyName": "BELIZE DOLLAR"
}, {
    "name": "BENIN",
    "currencyCode": "952",
    "currencyName": "CFA FRANC BCEAO"
}, {
    "name": "BERMUDA",
    "currencyCode": "060",
    "currencyName": "BERMUDIAN DOLLAR"
}, {
    "name": "BHUTAN",
    "currencyCode": "064",
    "currencyName": "BHUTANESE NGULTRUM"
}, {
    "name": "BHUTAN",
    "currencyCode": "356",
    "currencyName": "INDIAN RUPEE"
}, {
    "name": "BOLIVIA",
    "currencyCode": "068",
    "currencyName": "BOLIVIANO"
}, {
    "name": "BONAIRE, SINT EUSTATIUS AND SABA",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "BOSNIA and HERZEGOVINA",
    "currencyCode": "977",
    "currencyName": "CONVERTIBLE MARK"
}, {
    "name": "BOTSWANA",
    "currencyCode": "072",
    "currencyName": "PULA"
}, {
    "name": "BOUVET ISLAND",
    "currencyCode": "578",
    "currencyName": "NORWEGIAN KRONE"
}, {
    "name": "BRAZIL",
    "currencyCode": "986",
    "currencyName": "BRAZILIAN REAL"
}, {
    "name": "BRAZIL",
    "currencyCode": "996",
    "currencyName": "SPANISH PESETA"
}, {
    "name": "BRITISH INDIAN OCEAN TERRITORY",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "BRUNEI DARUSSALAM",
    "currencyCode": "096",
    "currencyName": "BRUNEI DOLLAR"
}, {
    "name": "BULGARIA",
    "currencyCode": "975",
    "currencyName": "BULGARIAN LEV"
}, {
    "name": "BURKINA FASO",
    "currencyCode": "952",
    "currencyName": "CFA FRANC BCEAO"
}, {
    "name": "BURUNDI",
    "currencyCode": "108",
    "currencyName": "BURUNDI FRANC"
}, {
    "name": "CAMBODIA",
    "currencyCode": "116",
    "currencyName": "RIEL"
}, {
    "name": "CAMEROON",
    "currencyCode": "950",
    "currencyName": "CFA FRANC BEAC"
}, {
    "name": "CANADA",
    "currencyCode": "124",
    "currencyName": "CANADIAN DOLLAR"
}, {
    "name": "CAPE VERDE",
    "currencyCode": "132",
    "currencyName": "CAPE VERDE ESCUDO"
}, {
    "name": "CAYMAN ISLANDS",
    "currencyCode": "136",
    "currencyName": "CAYMAN ISLANDS DOLLAR"
}, {
    "name": "CENTRAL AFRICAN REPUBLIC",
    "currencyCode": "950",
    "currencyName": "CFA FRANC BEAC"
}, {
    "name": "CHAD",
    "currencyCode": "950",
    "currencyName": "CFA FRANC BEAC"
}, {
    "name": "CHILE",
    "currencyCode": "152",
    "currencyName": "CHILEAN PESO"
}, {
    "name": "CHINA",
    "currencyCode": "156",
    "currencyName": "CHINESE YUAN RENMINBI"
}, {
    "name": "CHINA",
    "currencyCode": "158",
    "currencyName": "CHINESE PEOPLE'S BANK"
}, {
    "name": "CHRISTMAS ISLAND",
    "currencyCode": "036",
    "currencyName": "AUSTRALIAN DOLLAR"
}, {
    "name": "COCOS (KEELING) ISLANDS",
    "currencyCode": "036",
    "currencyName": "AUSTRALIAN DOLLAR"
}, {
    "name": "COLOMBIA",
    "currencyCode": "170",
    "currencyName": "COLOMBIAN PESO"
}, {
    "name": "COMOROS",
    "currencyCode": "174",
    "currencyName": "COMORO FRANC"
}, {
    "name": "CONGO",
    "currencyCode": "950",
    "currencyName": "CFA FRANC BEAC"
}, {
    "name": "COOK ISLANDS",
    "currencyCode": "554",
    "currencyName": "NEW ZEALAND DOLLAR"
}, {
    "name": "COSTA RICA",
    "currencyCode": "188",
    "currencyName": "COSTA RICAN COLON"
}, {
    "name": "COTE D’IVOIRE (IVORY COAST)",
    "currencyCode": "952",
    "currencyName": "CFA FRANC BCEAO"
}, {
    "name": "CROATIA",
    "currencyCode": "191",
    "currencyName": "CROATIAN KUNA"
}, {
    "name": "CURACAO",
    "currencyCode": "532",
    "currencyName": "NETHERLANDS ANTILLEAN"
}, {
    "name": "CYPRUS",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "CZECH REPUBLIC",
    "currencyCode": "203",
    "currencyName": "CZECH KORUNA"
}, {
    "name": "DEMOCRATIC REPUBLIC OF THE CONGO",
    "currencyCode": "976",
    "currencyName": "CONGOLESE"
}, {
    "name": "DENMARK",
    "currencyCode": "208",
    "currencyName": "DANISH KRONE"
}, {
    "name": "DJIBOUTI",
    "currencyCode": "262",
    "currencyName": "DJIBOUTI FRANC"
}, {
    "name": "DOMINICA",
    "currencyCode": "951",
    "currencyName": "EAST CARRIBEAN DOLLAR"
}, {
    "name": "DOMINICAN REPUBLIC",
    "currencyCode": "214",
    "currencyName": "DOMINICAN PESO"
}, {
    "name": "EGYPT",
    "currencyCode": "818",
    "currencyName": "EGYPTIAN POUND"
}, {
    "name": "EL SALVADOR",
    "currencyCode": "222",
    "currencyName": "EL SALVADOR COLON"
}, {
    "name": "ECUADOR",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "EQUATORIAL GUINEA",
    "currencyCode": "950",
    "currencyName": "CFA FRANC BEAC"
}, {
    "name": "ERITREA",
    "currencyCode": "230",
    "currencyName": "ETHIOPIAN BIRR"
}, {
    "name": "ERITREA",
    "currencyCode": "232",
    "currencyName": "ERITREAN NAKFA"
}, {
    "name": "ESTONIA",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "ETHIOPIA",
    "currencyCode": "230",
    "currencyName": "ETHIOPIAN BIRR"
}, {
    "name": "FALKLAND ISLANDS (MALVINAS)",
    "currencyCode": "238",
    "currencyName": "FALKLAND ISLANDS POUND"
}, {
    "name": "FEDERATED STATES OF MICRONESIA",
    "currencyCode": "840",
    "currencyName": "US"
}, {
    "name": "FIJI",
    "currencyCode": "242",
    "currencyName": "FIJI DOLLAR"
}, {
    "name": "FINLAND",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "FRANCE",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "FRANCE, METROPOLITAN",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "FRENCH GUIANA",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "FRENCH POLYNESIA",
    "currencyCode": "953",
    "currencyName": "CFP FRANC"
}, {
    "name": "GABON",
    "currencyCode": "950",
    "currencyName": "CFA FRANC BEAC"
}, {
    "name": "GAMBIA",
    "currencyCode": "270",
    "currencyName": "DALASI"
}, {
    "name": "GEORGIA",
    "currencyCode": "981",
    "currencyName": "LARI"
}, {
    "name": "GERMANY",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "GHANA",
    "currencyCode": "936",
    "currencyName": "CEDI"
}, {
    "name": "GIBRALTAR",
    "currencyCode": "292",
    "currencyName": "GIBRALTAR POUND"
}, {
    "name": "GREECE",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "GREENLAND",
    "currencyCode": "208",
    "currencyName": "DANISH KRONE"
}, {
    "name": "GRENADA",
    "currencyCode": "951",
    "currencyName": "EAST CARRIBEAN DOLLAR"
}, {
    "name": "GUADELOUPE",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "GUAM",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "GUATEMALA",
    "currencyCode": "320",
    "currencyName": "QUETZAL"
}, {
    "name": "GUINEA-BISSAU",
    "currencyCode": "952",
    "currencyName": "CFA FRANC BCEAO"
}, {
    "name": "GUINEA",
    "currencyCode": "324",
    "currencyName": "GUINEA FRANC"
}, {
    "name": "GUYANA",
    "currencyCode": "328",
    "currencyName": "GUYANA DOLLAR"
}, {
    "name": "HAITI",
    "currencyCode": "332",
    "currencyName": "GOURDE"
}, {
    "name": "HEARD and MCDONALD ISLANDS",
    "currencyCode": "036",
    "currencyName": "AUSTRALIAN DOLLAR"
}, {
    "name": "HOLY SEE (VATICAN CITY STATE)",
    "currencyCode": "",
    "currencyName": "978"
}, {
    "name": "HONDURUS",
    "currencyCode": "340",
    "currencyName": "LEMPIRA"
}, {
    "name": "HONG KONG",
    "currencyCode": "344",
    "currencyName": "HONG KONG DOLLAR"
}, {
    "name": "HUNGARY",
    "currencyCode": "348",
    "currencyName": "FORINT"
}, {
    "name": "ICELAND",
    "currencyCode": "352",
    "currencyName": "ICELANDIC KRONA"
}, {
    "name": "INDIA",
    "currencyCode": "356",
    "currencyName": "INDIAN RUPEE"
}, {
    "name": "INDONESIA",
    "currencyCode": "360",
    "currencyName": "RUPIAH"
}, {
    "name": "IRAQ",
    "currencyCode": "368",
    "currencyName": "IRAQI DINAR"
}, {
    "name": "ISRAEL",
    "currencyCode": "376",
    "currencyName": "NEW ISRAELI SHEKEL"
}, {
    "name": "IRELAND",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "ISLE OF MAN",
    "currencyCode": "826",
    "currencyName": "POUND STERLING"
}, {
    "name": "ITALY",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "JAMAICA",
    "currencyCode": "388",
    "currencyName": "JAMAICAN DOLLAR"
}, {
    "name": "JAPAN",
    "currencyCode": "392",
    "currencyName": "YEN"
}, {
    "name": "JERSEY",
    "currencyCode": "826",
    "currencyName": "POUND STERLING"
}, {
    "name": "JORDAN",
    "currencyCode": "400",
    "currencyName": "JORDANIAN DINAR"
}, {
    "name": "KAZAKHSTAN",
    "currencyCode": "398",
    "currencyName": "TENGE"
}, {
    "name": "KENYA",
    "currencyCode": "404",
    "currencyName": "KENYAN SHILLING"
}, {
    "name": "KIRIBATI",
    "currencyCode": "036",
    "currencyName": "AUSTRALIAN DOLLAR"
}, {
    "name": "KOREA, REPUBLIC OF",
    "currencyCode": "410",
    "currencyName": "WON"
}, {
    "name": "KUWAIT",
    "currencyCode": "414",
    "currencyName": "KUWAITI DINAR"
}, {
    "name": "KYRGYZSTAN",
    "currencyCode": "417",
    "currencyName": "SOM"
}, {
    "name": "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
    "currencyCode": "418",
    "currencyName": "KIP"
}, {
    "name": "LATVIA",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "LEBANON",
    "currencyCode": "422",
    "currencyName": "LEBANESE POUND"
}, {
    "name": "LESOTHO",
    "currencyCode": "426",
    "currencyName": "LOTI"
}, {
    "name": "LESOTHO",
    "currencyCode": "710",
    "currencyName": "RAND"
}, {
    "name": "LIBERIA",
    "currencyCode": "430",
    "currencyName": "LIBERIAN DOLLAR"
}, {
    "name": "LIBYAN ARAB JAMAHIRIYA",
    "currencyCode": "434",
    "currencyName": "LIBYAN DINAR"
}, {
    "name": "LIECHTENSTEIN",
    "currencyCode": "756",
    "currencyName": "SWISS FRANC"
}, {
    "name": "LITHUANIA",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "LUXEMBOURG",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "MACAO",
    "currencyCode": "446",
    "currencyName": "PATACA"
}, {
    "name": "MACEDONIA",
    "currencyCode": "807",
    "currencyName": "DENAR"
}, {
    "name": "MADAGASCAR",
    "currencyCode": "969",
    "currencyName": "MALAGASY ARIARY"
}, {
    "name": "MALAWI",
    "currencyCode": "454",
    "currencyName": "MALAWI KWACHA"
}, {
    "name": "MALAYSIA",
    "currencyCode": "458",
    "currencyName": "MALAYSIAN RINGGIT"
}, {
    "name": "MALDIVES",
    "currencyCode": "462",
    "currencyName": "RUFIYAA"
}, {
    "name": "MALI",
    "currencyCode": "952",
    "currencyName": "CFA FRANC BCEAO"
}, {
    "name": "MALTA",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "MARSHALL ISLANDS",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "MARTINIQUE",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "MAURITANIA",
    "currencyCode": "929",
    "currencyName": "OUGUIYA"
}, {
    "name": "MAURITIUS",
    "currencyCode": "480",
    "currencyName": "MAURITIUS RUPEE"
}, {
    "name": "MAYOTTE",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "MEXICO",
    "currencyCode": "484",
    "currencyName": "MEXICAN PESO"
}, {
    "name": "MOLDOVA, REPUBLIC OF",
    "currencyCode": "498",
    "currencyName": "MOLDOVAN LEU"
}, {
    "name": "MONACO",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "MONGOLIA",
    "currencyCode": "496",
    "currencyName": "TUGRIK"
}, {
    "name": "MONTENEGRO, REPUBLIC OF",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "MONTSERRAT",
    "currencyCode": "951",
    "currencyName": "EAST CARRIBEAN DOLLAR"
}, {
    "name": "MOROCCO",
    "currencyCode": "002",
    "currencyName": "MOROCCAN DIRHAM"
}, {
    "name": "MOZAMBIQUE",
    "currencyCode": "943",
    "currencyName": "MOZAMBIQUE METICAL"
}, {
    "name": "MYANMAR",
    "currencyCode": "104",
    "currencyName": "MYANMAR KYAT"
}, {
    "name": "NAMIBIA",
    "currencyCode": "516",
    "currencyName": "NAMIBIAN DOLLAR"
}, {
    "name": "NAURU",
    "currencyCode": "036",
    "currencyName": "AUSTRALIAN DOLLAR"
}, {
    "name": "NEPAL",
    "currencyCode": "524",
    "currencyName": "NEPALESE RUPEE"
}, {
    "name": "NETHERLANDS",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "NETHERLANDS ANTILLES",
    "currencyCode": "532",
    "currencyName": "NETHLANDES ANTILLIAN"
}, {
    "name": "NEW CALEDONIA",
    "currencyCode": "953",
    "currencyName": "CFP FRANC"
}, {
    "name": "NEW ZEALAND",
    "currencyCode": "554",
    "currencyName": "NEW ZEALAND DOLLAR"
}, {
    "name": "NICARAGUA",
    "currencyCode": "558",
    "currencyName": "CORDOBA ORO"
}, {
    "name": "NIGER",
    "currencyCode": "952",
    "currencyName": "CFA FRANC BCEAO"
}, {
    "name": "NIGERIA",
    "currencyCode": "566",
    "currencyName": "NAIRA"
}, {
    "name": "NIUE",
    "currencyCode": "554",
    "currencyName": "NEW ZEALAND DOLLAR"
}, {
    "name": "NORFOLK ISLAND",
    "currencyCode": "036",
    "currencyName": "AUSTRALIAN DOLLAR"
}, {
    "name": "NORTHERN MARIANA ISLANDS",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "NORWAY",
    "currencyCode": "578",
    "currencyName": "NORWEGIAN KRONE"
}, {
    "name": "OMAN",
    "currencyCode": "512",
    "currencyName": "RIAL OMANI"
}, {
    "name": "PAKISTAN",
    "currencyCode": "586",
    "currencyName": "PAKISTAN RUPEE"
}, {
    "name": "PALAU",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "PANAMA",
    "currencyCode": "590",
    "currencyName": "BALBOA"
}, {
    "name": "PAPUA NEW GUINEA",
    "currencyCode": "598",
    "currencyName": "KINA"
}, {
    "name": "PARAGUAY",
    "currencyCode": "600",
    "currencyName": "GUARANI"
}, {
    "name": "PERU",
    "currencyCode": "604",
    "currencyName": "NUEVO SOL"
}, {
    "name": "PHILIPPINES",
    "currencyCode": "608",
    "currencyName": "PHILIPPINE PESO"
}, {
    "name": "PITCAIRN",
    "currencyCode": "554",
    "currencyName": "NEW ZEALAND DOLLAR"
}, {
    "name": "POLAND",
    "currencyCode": "985",
    "currencyName": "ZLOTY"
}, {
    "name": "PORTUGAL",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "PUERTO RICO",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "QATAR",
    "currencyCode": "634",
    "currencyName": "QATARI RIAL"
}, {
    "name": "REUNION",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "ROMANIA",
    "currencyCode": "946",
    "currencyName": "ROMANIAN LEU"
}, {
    "name": "RUSSIAN FEDERATION",
    "currencyCode": "643",
    "currencyName": "RUSSIAN RUBLE"
}, {
    "name": "RWANDA",
    "currencyCode": "646",
    "currencyName": "RWANDA FRANC"
}, {
    "name": "SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA",
    "currencyCode": "654",
    "currencyName": "ST. HELENA"
}, {
    "name": "SAMOA",
    "currencyCode": "882",
    "currencyName": "TALA"
}, {
    "name": "SAN MARINO",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "SAO TOME AND PRINCIPE",
    "currencyCode": "930",
    "currencyName": "DOBRA"
}, {
    "name": "SAUDI ARABIA",
    "currencyCode": "682",
    "currencyName": "SAUDI RIYAL"
}, {
    "name": "SENEGAL",
    "currencyCode": "952",
    "currencyName": "CFA FRANC BCEAO"
}, {
    "name": "SERBIA",
    "currencyCode": "941",
    "currencyName": "SERBIAN DINAR"
}, {
    "name": "SEYCHELLES",
    "currencyCode": "690",
    "currencyName": "SEYCHELLES RUPEE"
}, {
    "name": "SIERRA LEONE",
    "currencyCode": "694",
    "currencyName": "LEONE"
}, {
    "name": "SINGAPORE",
    "currencyCode": "702",
    "currencyName": "SINGAPORE DOLLAR"
}, {
    "name": "SINT MAARTEN (DUTCH PART)",
    "currencyCode": "532",
    "currencyName": "NETHERLANDS ANTILLES"
}, {
    "name": "SLOVAKIA",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "SLOVENIA",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "SOLOMON ISLANDS",
    "currencyCode": "090",
    "currencyName": "SOLOMON ISLANDS DOLLAR"
}, {
    "name": "SOMALIA",
    "currencyCode": "706",
    "currencyName": "SOMALI SHILLING"
}, {
    "name": "SOUTH AFRICA",
    "currencyCode": "710",
    "currencyName": "RAND"
}, {
    "name": "SOUTH SUDAN",
    "currencyCode": "728",
    "currencyName": "SOUTH SUDANESE POUND"
}, {
    "name": "SPAIN",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "SRI LANKA",
    "currencyCode": "144",
    "currencyName": "SRI LANKA RUPEE"
}, {
    "name": "ST. KITTS-NEVIS",
    "currencyCode": "951",
    "currencyName": "EAST CARRIBEAN DOLLAR"
}, {
    "name": "ST. LUCIA",
    "currencyCode": "951",
    "currencyName": "EAST CARRIBEAN DOLLAR"
}, {
    "name": "ST. PIERRE AND MIQUELON",
    "currencyCode": "978",
    "currencyName": "EURO"
}, {
    "name": "ST. VINCENT AND THE GRENADINES",
    "currencyCode": "951",
    "currencyName": "EAST CARRIBEAN"
}, {
    "name": "SURINAME",
    "currencyCode": "968",
    "currencyName": "SURINAME DOLLAR"
}, {
    "name": "SVALBARD AND JAN MAYEN",
    "currencyCode": "578",
    "currencyName": "NORWEGIAN KRONE"
}, {
    "name": "SWITZERLAND",
    "currencyCode": "756",
    "currencyName": "SWISS FRANC"
}, {
    "name": "SWAZILAND",
    "currencyCode": "748",
    "currencyName": "LILANGENI"
}, {
    "name": "SWEDEN",
    "currencyCode": "752",
    "currencyName": "SWEDISH KRONA"
}, {
    "name": "TAIWAN",
    "currencyCode": "901",
    "currencyName": "NEW TAIWAN DOLLAR"
}, {
    "name": "TAJIKISTAN",
    "currencyCode": "972",
    "currencyName": "SOMONI"
}, {
    "name": "TANZANIA, UNITED REPUBLIC OF",
    "currencyCode": "834",
    "currencyName": "TANZANIAN"
}, {
    "name": "THAILAND",
    "currencyCode": "764",
    "currencyName": "BAHT"
}, {
    "name": "TIMOR-LESTE",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "TOGO",
    "currencyCode": "952",
    "currencyName": "CFA FRANC BCEAO"
}, {
    "name": "TOKELAU",
    "currencyCode": "554",
    "currencyName": "NEW ZEALAND DOLLAR"
}, {
    "name": "TONGA",
    "currencyCode": "776",
    "currencyName": "PA'ANGA"
}, {
    "name": "TRINIDAD AND TOBAGO",
    "currencyCode": "780",
    "currencyName": "TRINIDAD AND TOBAGO"
}, {
    "name": "TUNISIA",
    "currencyCode": "788",
    "currencyName": "TUNISIAN DINAR"
}, {
    "name": "TURKEY",
    "currencyCode": "949",
    "currencyName": "TURKISH LIRA"
}, {
    "name": "TURKMENISTAN",
    "currencyCode": "934",
    "currencyName": "MANAT"
}, {
    "name": "TURKS and CAICOS ISLANDS",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "TUVALU",
    "currencyCode": "036",
    "currencyName": "AUSTRALIAN DOLLAR"
}, {
    "name": "UGANDA",
    "currencyCode": "800",
    "currencyName": "UGANDAN SHILLING"
}, {
    "name": "UKRAINE",
    "currencyCode": "980",
    "currencyName": "UKRAINIAN HRYVNIA"
}, {
    "name": "UNITED ARAB EMIRATES",
    "currencyCode": "784",
    "currencyName": "U.A.E. DIRHAM"
}, {
    "name": "UNITED KINGDOM",
    "currencyCode": "826",
    "currencyName": "POUND STERLING"
}, {
    "name": "UNITED STATES",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "URUGUAY",
    "currencyCode": "858",
    "currencyName": "PESO URUGUAYO"
}, {
    "name": "UZBEKISTAN",
    "currencyCode": "860",
    "currencyName": "UZBEKISTAN SUM"
}, {
    "name": "VANUATU",
    "currencyCode": "548",
    "currencyName": "VATU"
}, {
    "name": "VENEZUELA",
    "currencyCode": "928",
    "currencyName": "BOLIVAR SOBERANO"
}, {
    "name": "VIETNAM",
    "currencyCode": "704",
    "currencyName": "DONG"
}, {
    "name": "BRITISH VIRGIN ISLANDS",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "U.S. VIRGIN ISLANDS",
    "currencyCode": "840",
    "currencyName": "US DOLLAR"
}, {
    "name": "WALLIS AND FUTUNA ISLANDS",
    "currencyCode": "953",
    "currencyName": "CFP FRANC"
}, {
    "name": "WESTERN SAHARA",
    "currencyCode": "504",
    "currencyName": "MOROCCAN DIRHAM"
}, {
    "name": "YEMEN",
    "currencyCode": "886",
    "currencyName": "YEMENI RIAL"
}, {
    "name": "ZAMBIA",
    "currencyCode": "967",
    "currencyName": "ZAMBIAN KWACHA"
}, {
    "name": "ZIMBABWE",
    "currencyCode": "716",
    "currencyName": "ZIMBABWE DOLLAR"
}, {
    "name": "CUBA",
    "currencyCode": "192",
    "currencyName": "CUBAN PESO"
}, {
    "name": "ECUADOR",
    "currencyCode": "218",
    "currencyName": "SUCRE"
}, {
    "name": "IRAN",
    "currencyCode": "364",
    "currencyName": "IRANIAN RIAL"
}, {
    "name": "LATVIA",
    "currencyCode": "428",
    "currencyName": "LATVIAN LATS"
}, {
    "name": "LITHUANIA",
    "currencyCode": "440",
    "currencyName": "LITHUANIAN LITAS"
}, {
    "name": "GUINEA-BISSAU",
    "currencyCode": "624",
    "currencyName": "GUINEA-BISSAU PESO"
}, {
    "name": "SYRIA",
    "currencyCode": "760",
    "currencyName": "SYRIAN POUND"
}, {
    "name": "TONGA",
    "currencyCode": "776",
    "currencyName": "PA’ANGA"
}];


let resultado = countries.filter(pais => pais.currencyName == "EURO"); // TODO: Crea un nuevo array todos los paises que que usan el 'EURO' como mondeda
// console.log(resultado)

let pokemons = [
    { "id": 1, "name": "Bulbasaur", "typeList": ["Grass", "Poison"] },
    { "id": 2, "name": "Ivysaur", "typeList": ["Grass", "Poison"] },
    { "id": 3, "name": "Venusaur", "typeList": ["Grass", "Poison"] },
    { "id": 4, "name": "Charmander", "typeList": ["Fire"] },
    { "id": 5, "name": "Charmeleon", "typeList": ["Fire"] },
    { "id": 6, "name": "Charizard", "typeList": ["Fire", "Flying"] },
    { "id": 7, "name": "Squirtle", "typeList": ["Water"] },
    { "id": 8, "name": "Wartortle", "typeList": ["Water"] },
    { "id": 9, "name": "Blastoise", "typeList": ["Water"] },
    { "id": 10, "name": "Caterpie", "typeList": ["Bug"] },
    { "id": 11, "name": "Metapod", "typeList": ["Bug"] },
    { "id": 12, "name": "Butterfree", "typeList": ["Bug", "Flying"] },
    { "id": 13, "name": "Weedle", "typeList": ["Bug", "Poison"] },
    { "id": 14, "name": "Kakuna", "typeList": ["Bug", "Poison"] },
    { "id": 15, "name": "Beedrill", "typeList": ["Bug", "Poison"] },
    { "id": 16, "name": "Pidgey", "typeList": ["Normal", "Flying"] },
    { "id": 17, "name": "Pidgeotto", "typeList": ["Normal", "Flying"] },
    { "id": 18, "name": "Pidgeot", "typeList": ["Normal", "Flying"] },
    { "id": 19, "name": "Rattata", "typeList": ["Normal"] },
    { "id": 20, "name": "Raticate", "typeList": ["Normal"] },
    { "id": 21, "name": "Spearow", "typeList": ["Normal", "Flying"] },
    { "id": 22, "name": "Fearow", "typeList": ["Normal", "Flying"] },
    { "id": 23, "name": "Ekans", "typeList": ["Poison"] },
    { "id": 24, "name": "Arbok", "typeList": ["Poison"] },
    { "id": 25, "name": "Pikachu", "typeList": ["Electric"] },
    { "id": 26, "name": "Raichu", "typeList": ["Electric"] },
    { "id": 27, "name": "Sandshrew", "typeList": ["Ground"] },
    { "id": 28, "name": "Sandslash", "typeList": ["Ground"] },
    { "id": 29, "name": "Nidoran♀", "typeList": ["Poison"] },
    { "id": 30, "name": "Nidorina", "typeList": ["Poison"] },
    { "id": 31, "name": "Nidoqueen", "typeList": ["Poison", "Ground"] },
    { "id": 32, "name": "Nidoran♂", "typeList": ["Poison"] },
    { "id": 33, "name": "Nidorino", "typeList": ["Poison"] },
    { "id": 34, "name": "Nidoking", "typeList": ["Poison", "Ground"] },
    { "id": 35, "name": "Clefairy", "typeList": ["Fairy"] },
    { "id": 36, "name": "Clefable", "typeList": ["Fairy"] },
    { "id": 37, "name": "Vulpix", "typeList": ["Fire"] },
    { "id": 38, "name": "Ninetales", "typeList": ["Fire"] },
    { "id": 39, "name": "Jigglypuff", "typeList": ["Normal", "Fairy"] },
    { "id": 40, "name": "Wigglytuff", "typeList": ["Normal", "Fairy"] },
    { "id": 41, "name": "Zubat", "typeList": ["Poison", "Flying"] },
    { "id": 42, "name": "Golbat", "typeList": ["Poison", "Flying"] },
    { "id": 43, "name": "Oddish", "typeList": ["Grass", "Poison"] },
    { "id": 44, "name": "Gloom", "typeList": ["Grass", "Poison"] },
    { "id": 45, "name": "Vileplume", "typeList": ["Grass", "Poison"] },
    { "id": 46, "name": "Paras", "typeList": ["Bug", "Grass"] },
    { "id": 47, "name": "Parasect", "typeList": ["Bug", "Grass"] },
    { "id": 48, "name": "Venonat", "typeList": ["Bug", "Poison"] },
    { "id": 49, "name": "Venomoth", "typeList": ["Bug", "Poison"] },
    { "id": 50, "name": "Diglett", "typeList": ["Ground"] },
    { "id": 51, "name": "Dugtrio", "typeList": ["Ground"] },
    { "id": 52, "name": "Meowth", "typeList": ["Normal"] },
    { "id": 53, "name": "Persian", "typeList": ["Normal"] },
    { "id": 54, "name": "Psyduck", "typeList": ["Water"] },
    { "id": 55, "name": "Golduck", "typeList": ["Water"] },
    { "id": 56, "name": "Mankey", "typeList": ["Fighting"] },
    { "id": 57, "name": "Primeape", "typeList": ["Fighting"] },
    { "id": 58, "name": "Growlithe", "typeList": ["Fire"] },
    { "id": 59, "name": "Arcanine", "typeList": ["Fire"] },
    { "id": 60, "name": "Poliwag", "typeList": ["Water"] },
    { "id": 61, "name": "Poliwhirl", "typeList": ["Water"] },
    { "id": 62, "name": "Poliwrath", "typeList": ["Water", "Fighting"] },
    { "id": 63, "name": "Abra", "typeList": ["Psychic"] },
    { "id": 64, "name": "Kadabra", "typeList": ["Psychic"] },
    { "id": 65, "name": "Alakazam", "typeList": ["Psychic"] },
    { "id": 66, "name": "Machop", "typeList": ["Fighting"] },
    { "id": 67, "name": "Machoke", "typeList": ["Fighting"] },
    { "id": 68, "name": "Machamp", "typeList": ["Fighting"] },
    { "id": 69, "name": "Bellsprout", "typeList": ["Grass", "Poison"] },
    { "id": 70, "name": "Weepinbell", "typeList": ["Grass", "Poison"] },
    { "id": 71, "name": "Victreebel", "typeList": ["Grass", "Poison"] },
    { "id": 72, "name": "Tentacool", "typeList": ["Water", "Poison"] },
    { "id": 73, "name": "Tentacruel", "typeList": ["Water", "Poison"] },
    { "id": 74, "name": "Geodude", "typeList": ["Rock", "Ground"] },
    { "id": 75, "name": "Graveler", "typeList": ["Rock", "Ground"] },
    { "id": 76, "name": "Golem", "typeList": ["Rock", "Ground"] },
    { "id": 77, "name": "Ponyta", "typeList": ["Fire"] },
    { "id": 78, "name": "Rapidash", "typeList": ["Fire"] },
    { "id": 79, "name": "Slowpoke", "typeList": ["Water", "Psychic"] },
    { "id": 80, "name": "Slowbro", "typeList": ["Water", "Psychic"] },
    { "id": 81, "name": "Magnemite", "typeList": ["Electric", "Steel"] },
    { "id": 82, "name": "Magneton", "typeList": ["Electric", "Steel"] },
    { "id": 83, "name": "Farfetch'd", "typeList": ["Normal", "Flying"] },
    { "id": 84, "name": "Doduo", "typeList": ["Normal", "Flying"] },
    { "id": 85, "name": "Dodrio", "typeList": ["Normal", "Flying"] },
    { "id": 86, "name": "Seel", "typeList": ["Water"] },
    { "id": 87, "name": "Dewgong", "typeList": ["Water", "Ice"] },
    { "id": 88, "name": "Grimer", "typeList": ["Poison"] },
    { "id": 89, "name": "Muk", "typeList": ["Poison"] },
    { "id": 90, "name": "Shellder", "typeList": ["Water"] },
    { "id": 91, "name": "Cloyster", "typeList": ["Water", "Ice"] },
    { "id": 92, "name": "Gastly", "typeList": ["Ghost", "Poison"] },
    { "id": 93, "name": "Haunter", "typeList": ["Ghost", "Poison"] },
    { "id": 94, "name": "Gengar", "typeList": ["Ghost", "Poison"] },
    { "id": 95, "name": "Onix", "typeList": ["Rock", "Ground"] },
    { "id": 96, "name": "Drowzee", "typeList": ["Psychic"] },
    { "id": 97, "name": "Hypno", "typeList": ["Psychic"] },
    { "id": 98, "name": "Krabby", "typeList": ["Water"] },
    { "id": 99, "name": "Kingler", "typeList": ["Water"] },
    { "id": 100, "name": "Voltorb", "typeList": ["Electric"] },
    { "id": 101, "name": "Electrode", "typeList": ["Electric"] },
    { "id": 102, "name": "Exeggcute", "typeList": ["Grass", "Psychic"] },
    { "id": 103, "name": "Exeggutor", "typeList": ["Grass", "Psychic"] },
    { "id": 104, "name": "Cubone", "typeList": ["Ground"] },
    { "id": 105, "name": "Marowak", "typeList": ["Ground"] },
    { "id": 106, "name": "Hitmonlee", "typeList": ["Fighting"] },
    { "id": 107, "name": "Hitmonchan", "typeList": ["Fighting"] },
    { "id": 108, "name": "Lickitung", "typeList": ["Normal"] },
    { "id": 109, "name": "Koffing", "typeList": ["Poison"] },
    { "id": 110, "name": "Weezing", "typeList": ["Poison"] },
    { "id": 111, "name": "Rhyhorn", "typeList": ["Ground", "Rock"] },
    { "id": 112, "name": "Rhydon", "typeList": ["Ground", "Rock"] },
    { "id": 113, "name": "Chansey", "typeList": ["Normal"] },
    { "id": 114, "name": "Tangela", "typeList": ["Grass"] },
    { "id": 115, "name": "Kangaskhan", "typeList": ["Normal"] },
    { "id": 116, "name": "Horsea", "typeList": ["Water"] },
    { "id": 117, "name": "Seadra", "typeList": ["Water"] },
    { "id": 118, "name": "Goldeen", "typeList": ["Water"] },
    { "id": 119, "name": "Seaking", "typeList": ["Water"] },
    { "id": 120, "name": "Staryu", "typeList": ["Water"] },
    { "id": 121, "name": "Starmie", "typeList": ["Water", "Psychic"] },
    { "id": 122, "name": "Mr. Mime", "typeList": ["Psychic", "Fairy"] },
    { "id": 123, "name": "Scyther", "typeList": ["Bug", "Flying"] },
    { "id": 124, "name": "Jynx", "typeList": ["Ice", "Psychic"] },
    { "id": 125, "name": "Electabuzz", "typeList": ["Electric"] },
    { "id": 126, "name": "Magmar", "typeList": ["Fire"] },
    { "id": 127, "name": "Pinsir", "typeList": ["Bug"] },
    { "id": 128, "name": "Tauros", "typeList": ["Normal"] },
    { "id": 129, "name": "Magikarp", "typeList": ["Water"] },
    { "id": 130, "name": "Gyarados", "typeList": ["Water", "Flying"] },
    { "id": 131, "name": "Lapras", "typeList": ["Water", "Ice"] },
    { "id": 132, "name": "Ditto", "typeList": ["Normal"] },
    { "id": 133, "name": "Eevee", "typeList": ["Normal"] },
    { "id": 134, "name": "Vaporeon", "typeList": ["Water"] },
    { "id": 135, "name": "Jolteon", "typeList": ["Electric"] },
    { "id": 136, "name": "Flareon", "typeList": ["Fire"] },
    { "id": 137, "name": "Porygon", "typeList": ["Normal"] },
    { "id": 138, "name": "Omanyte", "typeList": ["Rock", "Water"] },
    { "id": 139, "name": "Omastar", "typeList": ["Rock", "Water"] },
    { "id": 140, "name": "Kabuto", "typeList": ["Rock", "Water"] },
    { "id": 141, "name": "Kabutops", "typeList": ["Rock", "Water"] },
    { "id": 142, "name": "Aerodactyl", "typeList": ["Rock", "Flying"] },
    { "id": 143, "name": "Snorlax", "typeList": ["Normal"] },
    { "id": 144, "name": "Articuno", "typeList": ["Ice", "Flying"] },
    { "id": 145, "name": "Zapdos", "typeList": ["Electric", "Flying"] },
    { "id": 146, "name": "Moltres", "typeList": ["Fire", "Flying"] },
    { "id": 147, "name": "Dratini", "typeList": ["Dragon"] },
    { "id": 148, "name": "Dragonair", "typeList": ["Dragon"] },
    { "id": 149, "name": "Dragonite", "typeList": ["Dragon", "Flying"] },
    { "id": 150, "name": "Mewtwo", "typeList": ["Psychic"] },
    { "id": 151, "name": "Mew", "typeList": ["Psychic"] },
    { "id": 152, "name": "Chikorita", "typeList": ["Grass"] },
    { "id": 153, "name": "Bayleef", "typeList": ["Grass"] },
    { "id": 154, "name": "Meganium", "typeList": ["Grass"] },
    { "id": 155, "name": "Cyndaquil", "typeList": ["Fire"] },
    { "id": 156, "name": "Quilava", "typeList": ["Fire"] },
    { "id": 157, "name": "Typhlosion", "typeList": ["Fire"] },
    { "id": 158, "name": "Totodile", "typeList": ["Water"] },
    { "id": 159, "name": "Croconaw", "typeList": ["Water"] },
    { "id": 160, "name": "Feraligatr", "typeList": ["Water"] },
    { "id": 161, "name": "Sentret", "typeList": ["Normal"] },
    { "id": 162, "name": "Furret", "typeList": ["Normal"] },
    { "id": 163, "name": "Hoothoot", "typeList": ["Normal", "Flying"] },
    { "id": 164, "name": "Noctowl", "typeList": ["Normal", "Flying"] },
    { "id": 165, "name": "Ledyba", "typeList": ["Bug", "Flying"] },
    { "id": 166, "name": "Ledian", "typeList": ["Bug", "Flying"] },
    { "id": 167, "name": "Spinarak", "typeList": ["Bug", "Poison"] },
    { "id": 168, "name": "Ariados", "typeList": ["Bug", "Poison"] },
    { "id": 169, "name": "Crobat", "typeList": ["Poison", "Flying"] },
    { "id": 170, "name": "Chinchou", "typeList": ["Water", "Electric"] },
    { "id": 171, "name": "Lanturn", "typeList": ["Water", "Electric"] },
    { "id": 172, "name": "Pichu", "typeList": ["Electric"] },
    { "id": 173, "name": "Cleffa", "typeList": ["Fairy"] },
    { "id": 174, "name": "Igglybuff", "typeList": ["Normal", "Fairy"] },
    { "id": 175, "name": "Togepi", "typeList": ["Fairy"] },
    { "id": 176, "name": "Togetic", "typeList": ["Fairy", "Flying"] },
    { "id": 177, "name": "Natu", "typeList": ["Psychic", "Flying"] },
    { "id": 178, "name": "Xatu", "typeList": ["Psychic", "Flying"] },
    { "id": 179, "name": "Mareep", "typeList": ["Electric"] },
    { "id": 180, "name": "Flaaffy", "typeList": ["Electric"] },
    { "id": 181, "name": "Ampharos", "typeList": ["Electric"] },
    { "id": 182, "name": "Bellossom", "typeList": ["Grass"] },
    { "id": 183, "name": "Marill", "typeList": ["Water", "Fairy"] },
    { "id": 184, "name": "Azumarill", "typeList": ["Water", "Fairy"] },
    { "id": 185, "name": "Sudowoodo", "typeList": ["Rock"] },
    { "id": 186, "name": "Politoed", "typeList": ["Water"] },
    { "id": 187, "name": "Hoppip", "typeList": ["Grass", "Flying"] },
    { "id": 188, "name": "Skiploom", "typeList": ["Grass", "Flying"] },
    { "id": 189, "name": "Jumpluff", "typeList": ["Grass", "Flying"] },
    { "id": 190, "name": "Aipom", "typeList": ["Normal"] },
    { "id": 191, "name": "Sunkern", "typeList": ["Grass"] },
    { "id": 192, "name": "Sunflora", "typeList": ["Grass"] },
    { "id": 193, "name": "Yanma", "typeList": ["Bug", "Flying"] },
    { "id": 194, "name": "Wooper", "typeList": ["Water", "Ground"] },
    { "id": 195, "name": "Quagsire", "typeList": ["Water", "Ground"] },
    { "id": 196, "name": "Espeon", "typeList": ["Psychic"] },
    { "id": 197, "name": "Umbreon", "typeList": ["Dark"] },
    { "id": 198, "name": "Murkrow", "typeList": ["Dark", "Flying"] },
    { "id": 199, "name": "Slowking", "typeList": ["Water", "Psychic"] },
    { "id": 200, "name": "Misdreavus", "typeList": ["Ghost"] },
    { "id": 201, "name": "Unown", "typeList": ["Psychic"] },
    { "id": 202, "name": "Wobbuffet", "typeList": ["Psychic"] },
    { "id": 203, "name": "Girafarig", "typeList": ["Normal", "Psychic"] },
    { "id": 204, "name": "Pineco", "typeList": ["Bug"] },
    { "id": 205, "name": "Forretress", "typeList": ["Bug", "Steel"] },
    { "id": 206, "name": "Dunsparce", "typeList": ["Normal"] },
    { "id": 207, "name": "Gligar", "typeList": ["Ground", "Flying"] },
    { "id": 208, "name": "Steelix", "typeList": ["Steel", "Ground"] },
    { "id": 209, "name": "Snubbull", "typeList": ["Fairy"] },
    { "id": 210, "name": "Granbull", "typeList": ["Fairy"] },
    { "id": 211, "name": "Qwilfish", "typeList": ["Water", "Poison"] },
    { "id": 212, "name": "Scizor", "typeList": ["Bug", "Steel"] },
    { "id": 213, "name": "Shuckle", "typeList": ["Bug", "Rock"] },
    { "id": 214, "name": "Heracross", "typeList": ["Bug", "Fighting"] },
    { "id": 215, "name": "Sneasel", "typeList": ["Dark", "Ice"] },
    { "id": 216, "name": "Teddiursa", "typeList": ["Normal"] },
    { "id": 217, "name": "Ursaring", "typeList": ["Normal"] },
    { "id": 218, "name": "Slugma", "typeList": ["Fire"] },
    { "id": 219, "name": "Magcargo", "typeList": ["Fire", "Rock"] },
    { "id": 220, "name": "Swinub", "typeList": ["Ice", "Ground"] },
    { "id": 221, "name": "Piloswine", "typeList": ["Ice", "Ground"] },
    { "id": 222, "name": "Corsola", "typeList": ["Water", "Rock"] },
    { "id": 223, "name": "Remoraid", "typeList": ["Water"] },
    { "id": 224, "name": "Octillery", "typeList": ["Water"] },
    { "id": 225, "name": "Delibird", "typeList": ["Ice", "Flying"] },
    { "id": 226, "name": "Mantine", "typeList": ["Water", "Flying"] },
    { "id": 227, "name": "Skarmory", "typeList": ["Steel", "Flying"] },
    { "id": 228, "name": "Houndour", "typeList": ["Dark", "Fire"] },
    { "id": 229, "name": "Houndoom", "typeList": ["Dark", "Fire"] },
    { "id": 230, "name": "Kingdra", "typeList": ["Water", "Dragon"] },
    { "id": 231, "name": "Phanpy", "typeList": ["Ground"] },
    { "id": 232, "name": "Donphan", "typeList": ["Ground"] },
    { "id": 233, "name": "Porygon2", "typeList": ["Normal"] },
    { "id": 234, "name": "Stantler", "typeList": ["Normal"] },
    { "id": 235, "name": "Smeargle", "typeList": ["Normal"] },
    { "id": 236, "name": "Tyrogue", "typeList": ["Fighting"] },
    { "id": 237, "name": "Hitmontop", "typeList": ["Fighting"] },
    { "id": 238, "name": "Smoochum", "typeList": ["Ice", "Psychic"] },
    { "id": 239, "name": "Elekid", "typeList": ["Electric"] },
    { "id": 240, "name": "Magby", "typeList": ["Fire"] },
    { "id": 241, "name": "Miltank", "typeList": ["Normal"] },
    { "id": 242, "name": "Blissey", "typeList": ["Normal"] },
    { "id": 243, "name": "Raikou", "typeList": ["Electric"] },
    { "id": 244, "name": "Entei", "typeList": ["Fire"] },
    { "id": 245, "name": "Suicune", "typeList": ["Water"] },
    { "id": 246, "name": "Larvitar", "typeList": ["Rock", "Ground"] },
    { "id": 247, "name": "Pupitar", "typeList": ["Rock", "Ground"] },
    { "id": 248, "name": "Tyranitar", "typeList": ["Rock", "Dark"] },
    { "id": 249, "name": "Lugia", "typeList": ["Psychic", "Flying"] },
    { "id": 250, "name": "Ho-oh", "typeList": ["Fire", "Flying"] },
    { "id": 251, "name": "Celebi", "typeList": ["Psychic", "Grass"] },
    { "id": 252, "name": "Treecko", "typeList": ["Grass"] },
    { "id": 253, "name": "Grovyle", "typeList": ["Grass"] },
    { "id": 254, "name": "Sceptile", "typeList": ["Grass"] },
    { "id": 255, "name": "Torchic", "typeList": ["Fire"] },
    { "id": 256, "name": "Combusken", "typeList": ["Fire", "Fighting"] },
    { "id": 257, "name": "Blaziken", "typeList": ["Fire", "Fighting"] },
    { "id": 258, "name": "Mudkip", "typeList": ["Water"] },
    { "id": 259, "name": "Marshtomp", "typeList": ["Water", "Ground"] },
    { "id": 260, "name": "Swampert", "typeList": ["Water", "Ground"] },
    { "id": 261, "name": "Poochyena", "typeList": ["Dark"] },
    { "id": 262, "name": "Mightyena", "typeList": ["Dark"] },
    { "id": 263, "name": "Zigzagoon", "typeList": ["Normal"] },
    { "id": 264, "name": "Linoone", "typeList": ["Normal"] },
    { "id": 265, "name": "Wurmple", "typeList": ["Bug"] },
    { "id": 266, "name": "Silcoon", "typeList": ["Bug"] },
    { "id": 267, "name": "Beautifly", "typeList": ["Bug", "Flying"] },
    { "id": 268, "name": "Cascoon", "typeList": ["Bug"] },
    { "id": 269, "name": "Dustox", "typeList": ["Bug", "Poison"] },
    { "id": 270, "name": "Lotad", "typeList": ["Water", "Grass"] },
    { "id": 271, "name": "Lombre", "typeList": ["Water", "Grass"] },
    { "id": 272, "name": "Ludicolo", "typeList": ["Water", "Grass"] },
    { "id": 273, "name": "Seedot", "typeList": ["Grass"] },
    { "id": 274, "name": "Nuzleaf", "typeList": ["Grass", "Dark"] },
    { "id": 275, "name": "Shiftry", "typeList": ["Grass", "Dark"] },
    { "id": 276, "name": "Taillow", "typeList": ["Normal", "Flying"] },
    { "id": 277, "name": "Swellow", "typeList": ["Normal", "Flying"] },
    { "id": 278, "name": "Wingull", "typeList": ["Water", "Flying"] },
    { "id": 279, "name": "Pelipper", "typeList": ["Water", "Flying"] },
    { "id": 280, "name": "Ralts", "typeList": ["Psychic", "Fairy"] },
    { "id": 281, "name": "Kirlia", "typeList": ["Psychic", "Fairy"] },
    { "id": 282, "name": "Gardevoir", "typeList": ["Psychic", "Fairy"] },
    { "id": 283, "name": "Surskit", "typeList": ["Bug", "Water"] },
    { "id": 284, "name": "Masquerain", "typeList": ["Bug", "Flying"] },
    { "id": 285, "name": "Shroomish", "typeList": ["Grass"] },
    { "id": 286, "name": "Breloom", "typeList": ["Grass", "Fighting"] },
    { "id": 287, "name": "Slakoth", "typeList": ["Normal"] },
    { "id": 288, "name": "Vigoroth", "typeList": ["Normal"] },
    { "id": 289, "name": "Slaking", "typeList": ["Normal"] },
    { "id": 290, "name": "Nincada", "typeList": ["Bug", "Ground"] },
    { "id": 291, "name": "Ninjask", "typeList": ["Bug", "Flying"] },
    { "id": 292, "name": "Shedinja", "typeList": ["Bug", "Ghost"] },
    { "id": 293, "name": "Whismur", "typeList": ["Normal"] },
    { "id": 294, "name": "Loudred", "typeList": ["Normal"] },
    { "id": 295, "name": "Exploud", "typeList": ["Normal"] },
    { "id": 296, "name": "Makuhita", "typeList": ["Fighting"] },
    { "id": 297, "name": "Hariyama", "typeList": ["Fighting"] },
    { "id": 298, "name": "Azurill", "typeList": ["Normal", "Fairy"] },
    { "id": 299, "name": "Nosepass", "typeList": ["Rock"] },
    { "id": 300, "name": "Skitty", "typeList": ["Normal"] },
    { "id": 301, "name": "Delcatty", "typeList": ["Normal"] },
    { "id": 302, "name": "Sableye", "typeList": ["Dark", "Ghost"] },
    { "id": 303, "name": "Mawile", "typeList": ["Steel", "Fairy"] },
    { "id": 304, "name": "Aron", "typeList": ["Steel", "Rock"] },
    { "id": 305, "name": "Lairon", "typeList": ["Steel", "Rock"] },
    { "id": 306, "name": "Aggron", "typeList": ["Steel", "Rock"] },
    { "id": 307, "name": "Meditite", "typeList": ["Fighting", "Psychic"] },
    { "id": 308, "name": "Medicham", "typeList": ["Fighting", "Psychic"] },
    { "id": 309, "name": "Electrike", "typeList": ["Electric"] },
    { "id": 310, "name": "Manectric", "typeList": ["Electric"] },
    { "id": 311, "name": "Plusle", "typeList": ["Electric"] },
    { "id": 312, "name": "Minun", "typeList": ["Electric"] },
    { "id": 313, "name": "Volbeat", "typeList": ["Bug"] },
    { "id": 314, "name": "Illumise", "typeList": ["Bug"] },
    { "id": 315, "name": "Roselia", "typeList": ["Grass", "Poison"] },
    { "id": 316, "name": "Gulpin", "typeList": ["Poison"] },
    { "id": 317, "name": "Swalot", "typeList": ["Poison"] },
    { "id": 318, "name": "Carvanha", "typeList": ["Water", "Dark"] },
    { "id": 319, "name": "Sharpedo", "typeList": ["Water", "Dark"] },
    { "id": 320, "name": "Wailmer", "typeList": ["Water"] },
    { "id": 321, "name": "Wailord", "typeList": ["Water"] },
    { "id": 322, "name": "Numel", "typeList": ["Fire", "Ground"] },
    { "id": 323, "name": "Camerupt", "typeList": ["Fire", "Ground"] },
    { "id": 324, "name": "Torkoal", "typeList": ["Fire"] },
    { "id": 325, "name": "Spoink", "typeList": ["Psychic"] },
    { "id": 326, "name": "Grumpig", "typeList": ["Psychic"] },
    { "id": 327, "name": "Spinda", "typeList": ["Normal"] },
    { "id": 328, "name": "Trapinch", "typeList": ["Ground"] },
    { "id": 329, "name": "Vibrava", "typeList": ["Ground", "Dragon"] },
    { "id": 330, "name": "Flygon", "typeList": ["Ground", "Dragon"] },
    { "id": 331, "name": "Cacnea", "typeList": ["Grass"] },
    { "id": 332, "name": "Cacturne", "typeList": ["Grass", "Dark"] },
    { "id": 333, "name": "Swablu", "typeList": ["Normal", "Flying"] },
    { "id": 334, "name": "Altaria", "typeList": ["Dragon", "Flying"] },
    { "id": 335, "name": "Zangoose", "typeList": ["Normal"] },
    { "id": 336, "name": "Seviper", "typeList": ["Poison"] },
    { "id": 337, "name": "Lunatone", "typeList": ["Rock", "Psychic"] },
    { "id": 338, "name": "Solrock", "typeList": ["Rock", "Psychic"] },
    { "id": 339, "name": "Barboach", "typeList": ["Water", "Ground"] },
    { "id": 340, "name": "Whiscash", "typeList": ["Water", "Ground"] },
    { "id": 341, "name": "Corphish", "typeList": ["Water"] },
    { "id": 342, "name": "Crawdaunt", "typeList": ["Water", "Dark"] },
    { "id": 343, "name": "Baltoy", "typeList": ["Ground", "Psychic"] },
    { "id": 344, "name": "Claydol", "typeList": ["Ground", "Psychic"] },
    { "id": 345, "name": "Lileep", "typeList": ["Rock", "Grass"] },
    { "id": 346, "name": "Cradily", "typeList": ["Rock", "Grass"] },
    { "id": 347, "name": "Anorith", "typeList": ["Rock", "Bug"] },
    { "id": 348, "name": "Armaldo", "typeList": ["Rock", "Bug"] },
    { "id": 349, "name": "Feebas", "typeList": ["Water"] },
    { "id": 350, "name": "Milotic", "typeList": ["Water"] },
    { "id": 351, "name": "Castform", "typeList": ["Normal"] },
    { "id": 352, "name": "Kecleon", "typeList": ["Normal"] },
    { "id": 353, "name": "Shuppet", "typeList": ["Ghost"] },
    { "id": 354, "name": "Banette", "typeList": ["Ghost"] },
    { "id": 355, "name": "Duskull", "typeList": ["Ghost"] },
    { "id": 356, "name": "Dusclops", "typeList": ["Ghost"] },
    { "id": 357, "name": "Tropius", "typeList": ["Grass", "Flying"] },
    { "id": 358, "name": "Chimecho", "typeList": ["Psychic"] },
    { "id": 359, "name": "Absol", "typeList": ["Dark"] },
    { "id": 360, "name": "Wynaut", "typeList": ["Psychic"] },
    { "id": 361, "name": "Snorunt", "typeList": ["Ice"] },
    { "id": 362, "name": "Glalie", "typeList": ["Ice"] },
    { "id": 363, "name": "Spheal", "typeList": ["Ice", "Water"] },
    { "id": 364, "name": "Sealeo", "typeList": ["Ice", "Water"] },
    { "id": 365, "name": "Walrein", "typeList": ["Ice", "Water"] },
    { "id": 366, "name": "Clamperl", "typeList": ["Water"] },
    { "id": 367, "name": "Huntail", "typeList": ["Water"] },
    { "id": 368, "name": "Gorebyss", "typeList": ["Water"] },
    { "id": 369, "name": "Relicanth", "typeList": ["Water", "Rock"] },
    { "id": 370, "name": "Luvdisc", "typeList": ["Water"] },
    { "id": 371, "name": "Bagon", "typeList": ["Dragon"] },
    { "id": 372, "name": "Shelgon", "typeList": ["Dragon"] },
    { "id": 373, "name": "Salamence", "typeList": ["Dragon", "Flying"] },
    { "id": 374, "name": "Beldum", "typeList": ["Steel", "Psychic"] },
    { "id": 375, "name": "Metang", "typeList": ["Steel", "Psychic"] },
    { "id": 376, "name": "Metagross", "typeList": ["Steel", "Psychic"] },
    { "id": 377, "name": "Regirock", "typeList": ["Rock"] },
    { "id": 378, "name": "Regice", "typeList": ["Ice"] },
    { "id": 379, "name": "Registeel", "typeList": ["Steel"] },
    { "id": 380, "name": "Latias", "typeList": ["Dragon", "Psychic"] },
    { "id": 381, "name": "Latios", "typeList": ["Dragon", "Psychic"] },
    { "id": 382, "name": "Kyogre", "typeList": ["Water"] },
    { "id": 383, "name": "Groudon", "typeList": ["Ground"] },
    { "id": 384, "name": "Rayquaza", "typeList": ["Dragon", "Flying"] },
    { "id": 385, "name": "Jirachi", "typeList": ["Steel", "Psychic"] },
    { "id": 386, "name": "Deoxys", "typeList": ["Psychic"] },
    { "id": 387, "name": "Turtwig", "typeList": ["Grass"] },
    { "id": 388, "name": "Grotle", "typeList": ["Grass"] },
    { "id": 389, "name": "Torterra", "typeList": ["Grass", "Ground"] },
    { "id": 390, "name": "Chimchar", "typeList": ["Fire"] },
    { "id": 391, "name": "Monferno", "typeList": ["Fire", "Fighting"] },
    { "id": 392, "name": "Infernape", "typeList": ["Fire", "Fighting"] },
    { "id": 393, "name": "Piplup", "typeList": ["Water"] },
    { "id": 394, "name": "Prinplup", "typeList": ["Water"] },
    { "id": 395, "name": "Empoleon", "typeList": ["Water", "Steel"] },
    { "id": 396, "name": "Starly", "typeList": ["Normal", "Flying"] },
    { "id": 397, "name": "Staravia", "typeList": ["Normal", "Flying"] },
    { "id": 398, "name": "Staraptor", "typeList": ["Normal", "Flying"] },
    { "id": 399, "name": "Bidoof", "typeList": ["Normal"] },
    { "id": 400, "name": "Bibarel", "typeList": ["Normal", "Water"] },
    { "id": 401, "name": "Kricketot", "typeList": ["Bug"] },
    { "id": 402, "name": "Kricketune", "typeList": ["Bug"] },
    { "id": 403, "name": "Shinx", "typeList": ["Electric"] },
    { "id": 404, "name": "Luxio", "typeList": ["Electric"] },
    { "id": 405, "name": "Luxray", "typeList": ["Electric"] },
    { "id": 406, "name": "Budew", "typeList": ["Grass", "Poison"] },
    { "id": 407, "name": "Roserade", "typeList": ["Grass", "Poison"] },
    { "id": 408, "name": "Cranidos", "typeList": ["Rock"] },
    { "id": 409, "name": "Rampardos", "typeList": ["Rock"] },
    { "id": 410, "name": "Shieldon", "typeList": ["Rock", "Steel"] },
    { "id": 411, "name": "Bastiodon", "typeList": ["Rock", "Steel"] },
    { "id": 412, "name": "Burmy", "typeList": ["Bug"] },
    { "id": 413, "name": "Wormadam", "typeList": ["Bug", "Grass"] },
    { "id": 414, "name": "Mothim", "typeList": ["Bug", "Flying"] },
    { "id": 415, "name": "Combee", "typeList": ["Bug", "Flying"] },
    { "id": 416, "name": "Vespiquen", "typeList": ["Bug", "Flying"] },
    { "id": 417, "name": "Pachirisu", "typeList": ["Electric"] },
    { "id": 418, "name": "Buizel", "typeList": ["Water"] },
    { "id": 419, "name": "Floatzel", "typeList": ["Water"] },
    { "id": 420, "name": "Cherubi", "typeList": ["Grass"] },
    { "id": 421, "name": "Cherrim", "typeList": ["Grass"] },
    { "id": 422, "name": "Shellos", "typeList": ["Water"] },
    { "id": 423, "name": "Gastrodon", "typeList": ["Water", "Ground"] },
    { "id": 424, "name": "Ambipom", "typeList": ["Normal"] },
    { "id": 425, "name": "Drifloon", "typeList": ["Ghost", "Flying"] },
    { "id": 426, "name": "Drifblim", "typeList": ["Ghost", "Flying"] },
    { "id": 427, "name": "Buneary", "typeList": ["Normal"] },
    { "id": 428, "name": "Lopunny", "typeList": ["Normal"] },
    { "id": 429, "name": "Mismagius", "typeList": ["Ghost"] },
    { "id": 430, "name": "Honchkrow", "typeList": ["Dark", "Flying"] },
    { "id": 431, "name": "Glameow", "typeList": ["Normal"] },
    { "id": 432, "name": "Purugly", "typeList": ["Normal"] },
    { "id": 433, "name": "Chingling", "typeList": ["Psychic"] },
    { "id": 434, "name": "Stunky", "typeList": ["Poison", "Dark"] },
    { "id": 435, "name": "Skuntank", "typeList": ["Poison", "Dark"] },
    { "id": 436, "name": "Bronzor", "typeList": ["Steel", "Psychic"] },
    { "id": 437, "name": "Bronzong", "typeList": ["Steel", "Psychic"] },
    { "id": 438, "name": "Bonsly", "typeList": ["Rock"] },
    { "id": 439, "name": "Mime Jr.", "typeList": ["Psychic", "Fairy"] },
    { "id": 440, "name": "Happiny", "typeList": ["Normal"] },
    { "id": 441, "name": "Chatot", "typeList": ["Normal", "Flying"] },
    { "id": 442, "name": "Spiritomb", "typeList": ["Ghost", "Dark"] },
    { "id": 443, "name": "Gible", "typeList": ["Dragon", "Ground"] },
    { "id": 444, "name": "Gabite", "typeList": ["Dragon", "Ground"] },
    { "id": 445, "name": "Garchomp", "typeList": ["Dragon", "Ground"] },
    { "id": 446, "name": "Munchlax", "typeList": ["Normal"] },
    { "id": 447, "name": "Riolu", "typeList": ["Fighting"] },
    { "id": 448, "name": "Lucario", "typeList": ["Fighting", "Steel"] },
    { "id": 449, "name": "Hippopotas", "typeList": ["Ground"] },
    { "id": 450, "name": "Hippowdon", "typeList": ["Ground"] },
    { "id": 451, "name": "Skorupi", "typeList": ["Poison", "Bug"] },
    { "id": 452, "name": "Drapion", "typeList": ["Poison", "Dark"] },
    { "id": 453, "name": "Croagunk", "typeList": ["Poison", "Fighting"] },
    { "id": 454, "name": "Toxicroak", "typeList": ["Poison", "Fighting"] },
    { "id": 455, "name": "Carnivine", "typeList": ["Grass"] },
    { "id": 456, "name": "Finneon", "typeList": ["Water"] },
    { "id": 457, "name": "Lumineon", "typeList": ["Water"] },
    { "id": 458, "name": "Mantyke", "typeList": ["Water", "Flying"] },
    { "id": 459, "name": "Snover", "typeList": ["Grass", "Ice"] },
    { "id": 460, "name": "Abomasnow", "typeList": ["Grass", "Ice"] },
    { "id": 461, "name": "Weavile", "typeList": ["Dark", "Ice"] },
    { "id": 462, "name": "Magnezone", "typeList": ["Electric", "Steel"] },
    { "id": 463, "name": "Lickilicky", "typeList": ["Normal"] },
    { "id": 464, "name": "Rhyperior", "typeList": ["Ground", "Rock"] },
    { "id": 465, "name": "Tangrowth", "typeList": ["Grass"] },
    { "id": 466, "name": "Electivire", "typeList": ["Electric"] },
    { "id": 467, "name": "Magmortar", "typeList": ["Fire"] },
    { "id": 468, "name": "Togekiss", "typeList": ["Fairy", "Flying"] },
    { "id": 469, "name": "Yanmega", "typeList": ["Bug", "Flying"] },
    { "id": 470, "name": "Leafeon", "typeList": ["Grass"] },
    { "id": 471, "name": "Glaceon", "typeList": ["Ice"] },
    { "id": 472, "name": "Gliscor", "typeList": ["Ground", "Flying"] },
    { "id": 473, "name": "Mamoswine", "typeList": ["Ice", "Ground"] },
    { "id": 474, "name": "Porygon-Z", "typeList": ["Normal"] },
    { "id": 475, "name": "Gallade", "typeList": ["Psychic", "Fighting"] },
    { "id": 476, "name": "Probopass", "typeList": ["Rock", "Steel"] },
    { "id": 477, "name": "Dusknoir", "typeList": ["Ghost"] },
    { "id": 478, "name": "Froslass", "typeList": ["Ice", "Ghost"] },
    { "id": 479, "name": "Rotom", "typeList": ["Electric", "Ghost"] },
    { "id": 480, "name": "Uxie", "typeList": ["Psychic"] },
    { "id": 481, "name": "Mesprit", "typeList": ["Psychic"] },
    { "id": 482, "name": "Azelf", "typeList": ["Psychic"] },
    { "id": 483, "name": "Dialga", "typeList": ["Steel", "Dragon"] },
    { "id": 484, "name": "Palkia", "typeList": ["Water", "Dragon"] },
    { "id": 485, "name": "Heatran", "typeList": ["Fire", "Steel"] },
    { "id": 486, "name": "Regigigas", "typeList": ["Normal"] },
    { "id": 487, "name": "Giratina", "typeList": ["Ghost", "Dragon"] },
    { "id": 488, "name": "Cresselia", "typeList": ["Psychic"] },
    { "id": 489, "name": "Phione", "typeList": ["Water"] },
    { "id": 490, "name": "Manaphy", "typeList": ["Water"] },
    { "id": 491, "name": "Darkrai", "typeList": ["Dark"] },
    { "id": 492, "name": "Shaymin", "typeList": ["Grass"] },
    { "id": 493, "name": "Arceus", "typeList": ["Normal"] },
    { "id": 494, "name": "Victini", "typeList": ["Psychic", "Fire"] },
    { "id": 495, "name": "Snivy", "typeList": ["Grass"] },
    { "id": 496, "name": "Servine", "typeList": ["Grass"] },
    { "id": 497, "name": "Serperior", "typeList": ["Grass"] },
    { "id": 498, "name": "Tepig", "typeList": ["Fire"] },
    { "id": 499, "name": "Pignite", "typeList": ["Fire", "Fighting"] },
    { "id": 500, "name": "Emboar", "typeList": ["Fire", "Fighting"] },
    { "id": 501, "name": "Oshawott", "typeList": ["Water"] },
    { "id": 502, "name": "Dewott", "typeList": ["Water"] },
    { "id": 503, "name": "Samurott", "typeList": ["Water"] },
    { "id": 504, "name": "Patrat", "typeList": ["Normal"] },
    { "id": 505, "name": "Watchog", "typeList": ["Normal"] },
    { "id": 506, "name": "Lillipup", "typeList": ["Normal"] },
    { "id": 507, "name": "Herdier", "typeList": ["Normal"] },
    { "id": 508, "name": "Stoutland", "typeList": ["Normal"] },
    { "id": 509, "name": "Purrloin", "typeList": ["Dark"] },
    { "id": 510, "name": "Liepard", "typeList": ["Dark"] },
    { "id": 511, "name": "Pansage", "typeList": ["Grass"] },
    { "id": 512, "name": "Simisage", "typeList": ["Grass"] },
    { "id": 513, "name": "Pansear", "typeList": ["Fire"] },
    { "id": 514, "name": "Simisear", "typeList": ["Fire"] },
    { "id": 515, "name": "Panpour", "typeList": ["Water"] },
    { "id": 516, "name": "Simipour", "typeList": ["Water"] },
    { "id": 517, "name": "Munna", "typeList": ["Psychic"] },
    { "id": 518, "name": "Musharna", "typeList": ["Psychic"] },
    { "id": 519, "name": "Pidove", "typeList": ["Normal", "Flying"] },
    { "id": 520, "name": "Tranquill", "typeList": ["Normal", "Flying"] },
    { "id": 521, "name": "Unfezant", "typeList": ["Normal", "Flying"] },
    { "id": 522, "name": "Blitzle", "typeList": ["Electric"] },
    { "id": 523, "name": "Zebstrika", "typeList": ["Electric"] },
    { "id": 524, "name": "Roggenrola", "typeList": ["Rock"] },
    { "id": 525, "name": "Boldore", "typeList": ["Rock"] },
    { "id": 526, "name": "Gigalith", "typeList": ["Rock"] },
    { "id": 527, "name": "Woobat", "typeList": ["Psychic", "Flying"] },
    { "id": 528, "name": "Swoobat", "typeList": ["Psychic", "Flying"] },
    { "id": 529, "name": "Drilbur", "typeList": ["Ground"] },
    { "id": 530, "name": "Excadrill", "typeList": ["Ground", "Steel"] },
    { "id": 531, "name": "Audino", "typeList": ["Normal"] },
    { "id": 532, "name": "Timburr", "typeList": ["Fighting"] },
    { "id": 533, "name": "Gurdurr", "typeList": ["Fighting"] },
    { "id": 534, "name": "Conkeldurr", "typeList": ["Fighting"] },
    { "id": 535, "name": "Tympole", "typeList": ["Water"] },
    { "id": 536, "name": "Palpitoad", "typeList": ["Water", "Ground"] },
    { "id": 537, "name": "Seismitoad", "typeList": ["Water", "Ground"] },
    { "id": 538, "name": "Throh", "typeList": ["Fighting"] },
    { "id": 539, "name": "Sawk", "typeList": ["Fighting"] },
    { "id": 540, "name": "Sewaddle", "typeList": ["Bug", "Grass"] },
    { "id": 541, "name": "Swadloon", "typeList": ["Bug", "Grass"] },
    { "id": 542, "name": "Leavanny", "typeList": ["Bug", "Grass"] },
    { "id": 543, "name": "Venipede", "typeList": ["Bug", "Poison"] },
    { "id": 544, "name": "Whirlipede", "typeList": ["Bug", "Poison"] },
    { "id": 545, "name": "Scolipede", "typeList": ["Bug", "Poison"] },
    { "id": 546, "name": "Cottonee", "typeList": ["Grass", "Fairy"] },
    { "id": 547, "name": "Whimsicott", "typeList": ["Grass", "Fairy"] },
    { "id": 548, "name": "Petilil", "typeList": ["Grass"] },
    { "id": 549, "name": "Lilligant", "typeList": ["Grass"] },
    { "id": 550, "name": "Basculin", "typeList": ["Water"] },
    { "id": 551, "name": "Sandile", "typeList": ["Ground", "Dark"] },
    { "id": 552, "name": "Krokorok", "typeList": ["Ground", "Dark"] },
    { "id": 553, "name": "Krookodile", "typeList": ["Ground", "Dark"] },
    { "id": 554, "name": "Darumaka", "typeList": ["Fire"] },
    { "id": 555, "name": "Darmanitan", "typeList": ["Fire"] },
    { "id": 556, "name": "Maractus", "typeList": ["Grass"] },
    { "id": 557, "name": "Dwebble", "typeList": ["Bug", "Rock"] },
    { "id": 558, "name": "Crustle", "typeList": ["Bug", "Rock"] },
    { "id": 559, "name": "Scraggy", "typeList": ["Dark", "Fighting"] },
    { "id": 560, "name": "Scrafty", "typeList": ["Dark", "Fighting"] },
    { "id": 561, "name": "Sigilyph", "typeList": ["Psychic", "Flying"] },
    { "id": 562, "name": "Yamask", "typeList": ["Ghost"] },
    { "id": 563, "name": "Cofagrigus", "typeList": ["Ghost"] },
    { "id": 564, "name": "Tirtouga", "typeList": ["Water", "Rock"] },
    { "id": 565, "name": "Carracosta", "typeList": ["Water", "Rock"] },
    { "id": 566, "name": "Archen", "typeList": ["Rock", "Flying"] },
    { "id": 567, "name": "Archeops", "typeList": ["Rock", "Flying"] },
    { "id": 568, "name": "Trubbish", "typeList": ["Poison"] },
    { "id": 569, "name": "Garbodor", "typeList": ["Poison"] },
    { "id": 570, "name": "Zorua", "typeList": ["Dark"] },
    { "id": 571, "name": "Zoroark", "typeList": ["Dark"] },
    { "id": 572, "name": "Minccino", "typeList": ["Normal"] },
    { "id": 573, "name": "Cinccino", "typeList": ["Normal"] },
    { "id": 574, "name": "Gothita", "typeList": ["Psychic"] },
    { "id": 575, "name": "Gothorita", "typeList": ["Psychic"] },
    { "id": 576, "name": "Gothitelle", "typeList": ["Psychic"] },
    { "id": 577, "name": "Solosis", "typeList": ["Psychic"] },
    { "id": 578, "name": "Duosion", "typeList": ["Psychic"] },
    { "id": 579, "name": "Reuniclus", "typeList": ["Psychic"] },
    { "id": 580, "name": "Ducklett", "typeList": ["Water", "Flying"] },
    { "id": 581, "name": "Swanna", "typeList": ["Water", "Flying"] },
    { "id": 582, "name": "Vanillite", "typeList": ["Ice"] },
    { "id": 583, "name": "Vanillish", "typeList": ["Ice"] },
    { "id": 584, "name": "Vanilluxe", "typeList": ["Ice"] },
    { "id": 585, "name": "Deerling", "typeList": ["Normal", "Grass"] },
    { "id": 586, "name": "Sawsbuck", "typeList": ["Normal", "Grass"] },
    { "id": 587, "name": "Emolga", "typeList": ["Electric", "Flying"] },
    { "id": 588, "name": "Karrablast", "typeList": ["Bug"] },
    { "id": 589, "name": "Escavalier", "typeList": ["Bug", "Steel"] },
    { "id": 590, "name": "Foongus", "typeList": ["Grass", "Poison"] },
    { "id": 591, "name": "Amoonguss", "typeList": ["Grass", "Poison"] },
    { "id": 592, "name": "Frillish", "typeList": ["Water", "Ghost"] },
    { "id": 593, "name": "Jellicent", "typeList": ["Water", "Ghost"] },
    { "id": 594, "name": "Alomomola", "typeList": ["Water"] },
    { "id": 595, "name": "Joltik", "typeList": ["Bug", "Electric"] },
    { "id": 596, "name": "Galvantula", "typeList": ["Bug", "Electric"] },
    { "id": 597, "name": "Ferroseed", "typeList": ["Grass", "Steel"] },
    { "id": 598, "name": "Ferrothorn", "typeList": ["Grass", "Steel"] },
    { "id": 599, "name": "Klink", "typeList": ["Steel"] },
    { "id": 600, "name": "Klang", "typeList": ["Steel"] },
    { "id": 601, "name": "Klinklang", "typeList": ["Steel"] },
    { "id": 602, "name": "Tynamo", "typeList": ["Electric"] },
    { "id": 603, "name": "Eelektrik", "typeList": ["Electric"] },
    { "id": 604, "name": "Eelektross", "typeList": ["Electric"] },
    { "id": 605, "name": "Elgyem", "typeList": ["Psychic"] },
    { "id": 606, "name": "Beheeyem", "typeList": ["Psychic"] },
    { "id": 607, "name": "Litwick", "typeList": ["Ghost", "Fire"] },
    { "id": 608, "name": "Lampent", "typeList": ["Ghost", "Fire"] },
    { "id": 609, "name": "Chandelure", "typeList": ["Ghost", "Fire"] },
    { "id": 610, "name": "Axew", "typeList": ["Dragon"] },
    { "id": 611, "name": "Fraxure", "typeList": ["Dragon"] },
    { "id": 612, "name": "Haxorus", "typeList": ["Dragon"] },
    { "id": 613, "name": "Cubchoo", "typeList": ["Ice"] },
    { "id": 614, "name": "Beartic", "typeList": ["Ice"] },
    { "id": 615, "name": "Cryogonal", "typeList": ["Ice"] },
    { "id": 616, "name": "Shelmet", "typeList": ["Bug"] },
    { "id": 617, "name": "Accelgor", "typeList": ["Bug"] },
    { "id": 618, "name": "Stunfisk", "typeList": ["Ground", "Electric"] },
    { "id": 619, "name": "Mienfoo", "typeList": ["Fighting"] },
    { "id": 620, "name": "Mienshao", "typeList": ["Fighting"] },
    { "id": 621, "name": "Druddigon", "typeList": ["Dragon"] },
    { "id": 622, "name": "Golett", "typeList": ["Ground", "Ghost"] },
    { "id": 623, "name": "Golurk", "typeList": ["Ground", "Ghost"] },
    { "id": 624, "name": "Pawniard", "typeList": ["Dark", "Steel"] },
    { "id": 625, "name": "Bisharp", "typeList": ["Dark", "Steel"] },
    { "id": 626, "name": "Bouffalant", "typeList": ["Normal"] },
    { "id": 627, "name": "Rufflet", "typeList": ["Normal", "Flying"] },
    { "id": 628, "name": "Braviary", "typeList": ["Normal", "Flying"] },
    { "id": 629, "name": "Vullaby", "typeList": ["Dark", "Flying"] },
    { "id": 630, "name": "Mandibuzz", "typeList": ["Dark", "Flying"] },
    { "id": 631, "name": "Heatmor", "typeList": ["Fire"] },
    { "id": 632, "name": "Durant", "typeList": ["Bug", "Steel"] },
    { "id": 633, "name": "Deino", "typeList": ["Dark", "Dragon"] },
    { "id": 634, "name": "Zweilous", "typeList": ["Dark", "Dragon"] },
    { "id": 635, "name": "Hydreigon", "typeList": ["Dark", "Dragon"] },
    { "id": 636, "name": "Larvesta", "typeList": ["Bug", "Fire"] },
    { "id": 637, "name": "Volcarona", "typeList": ["Bug", "Fire"] },
    { "id": 638, "name": "Cobalion", "typeList": ["Steel", "Fighting"] },
    { "id": 639, "name": "Terrakion", "typeList": ["Rock", "Fighting"] },
    { "id": 640, "name": "Virizion", "typeList": ["Grass", "Fighting"] },
    { "id": 641, "name": "Tornadus", "typeList": ["Flying"] },
    { "id": 642, "name": "Thundurus", "typeList": ["Electric", "Flying"] },
    { "id": 643, "name": "Reshiram", "typeList": ["Dragon", "Fire"] },
    { "id": 644, "name": "Zekrom", "typeList": ["Dragon", "Electric"] },
    { "id": 645, "name": "Landorus", "typeList": ["Ground", "Flying"] },
    { "id": 646, "name": "Kyurem", "typeList": ["Dragon", "Ice"] },
    { "id": 647, "name": "Keldeo", "typeList": ["Water", "Fighting"] },
    { "id": 648, "name": "Meloetta", "typeList": ["Normal", "Psychic"] },
    { "id": 649, "name": "Genesect", "typeList": ["Bug", "Steel"] },
    { "id": 650, "name": "Chespin", "typeList": ["Grass"] },
    { "id": 651, "name": "Quilladin", "typeList": ["Grass"] },
    { "id": 652, "name": "Chesnaught", "typeList": ["Grass", "Fighting"] },
    { "id": 653, "name": "Fennekin", "typeList": ["Fire"] },
    { "id": 654, "name": "Braixen", "typeList": ["Fire"] },
    { "id": 655, "name": "Delphox", "typeList": ["Fire", "Psychic"] },
    { "id": 656, "name": "Froakie", "typeList": ["Water"] },
    { "id": 657, "name": "Frogadier", "typeList": ["Water"] },
    { "id": 658, "name": "Greninja", "typeList": ["Water", "Dark"] },
    { "id": 659, "name": "Bunnelby", "typeList": ["Normal"] },
    { "id": 660, "name": "Diggersby", "typeList": ["Normal", "Ground"] },
    { "id": 661, "name": "Fletchling", "typeList": ["Normal", "Flying"] },
    { "id": 662, "name": "Fletchinder", "typeList": ["Fire", "Flying"] },
    { "id": 663, "name": "Talonflame", "typeList": ["Fire", "Flying"] },
    { "id": 664, "name": "Scatterbug", "typeList": ["Bug"] },
    { "id": 665, "name": "Spewpa", "typeList": ["Bug"] },
    { "id": 666, "name": "Vivillon", "typeList": ["Bug", "Flying"] },
    { "id": 667, "name": "Litleo", "typeList": ["Fire", "Normal"] },
    { "id": 668, "name": "Pyroar", "typeList": ["Fire", "Normal"] },
    { "id": 669, "name": "Flabébé", "typeList": ["Fairy"] },
    { "id": 670, "name": "Floette", "typeList": ["Fairy"] },
    { "id": 671, "name": "Florges", "typeList": ["Fairy"] },
    { "id": 672, "name": "Skiddo", "typeList": ["Grass"] },
    { "id": 673, "name": "Gogoat", "typeList": ["Grass"] },
    { "id": 674, "name": "Pancham", "typeList": ["Fighting"] },
    { "id": 675, "name": "Pangoro", "typeList": ["Fighting", "Dark"] },
    { "id": 676, "name": "Furfrou", "typeList": ["Normal"] },
    { "id": 677, "name": "Espurr", "typeList": ["Psychic"] },
    { "id": 678, "name": "Meowstic", "typeList": ["Psychic"] },
    { "id": 679, "name": "Honedge", "typeList": ["Steel", "Ghost"] },
    { "id": 680, "name": "Doublade", "typeList": ["Steel", "Ghost"] },
    { "id": 681, "name": "Aegislash", "typeList": ["Steel", "Ghost"] },
    { "id": 682, "name": "Spritzee", "typeList": ["Fairy"] },
    { "id": 683, "name": "Aromatisse", "typeList": ["Fairy"] },
    { "id": 684, "name": "Swirlix", "typeList": ["Fairy"] },
    { "id": 685, "name": "Slurpuff", "typeList": ["Fairy"] },
    { "id": 686, "name": "Inkay", "typeList": ["Dark", "Psychic"] },
    { "id": 687, "name": "Malamar", "typeList": ["Dark", "Psychic"] },
    { "id": 688, "name": "Binacle", "typeList": ["Rock", "Water"] },
    { "id": 689, "name": "Barbaracle", "typeList": ["Rock", "Water"] },
    { "id": 690, "name": "Skrelp", "typeList": ["Poison", "Water"] },
    { "id": 691, "name": "Dragalge", "typeList": ["Poison", "Dragon"] },
    { "id": 692, "name": "Clauncher", "typeList": ["Water"] },
    { "id": 693, "name": "Clawitzer", "typeList": ["Water"] },
    { "id": 694, "name": "Helioptile", "typeList": ["Electric", "Normal"] },
    { "id": 695, "name": "Heliolisk", "typeList": ["Electric", "Normal"] },
    { "id": 696, "name": "Tyrunt", "typeList": ["Rock", "Dragon"] },
    { "id": 697, "name": "Tyrantrum", "typeList": ["Rock", "Dragon"] },
    { "id": 698, "name": "Amaura", "typeList": ["Rock", "Ice"] },
    { "id": 699, "name": "Aurorus", "typeList": ["Rock", "Ice"] },
    { "id": 700, "name": "Sylveon", "typeList": ["Fairy"] },
    { "id": 701, "name": "Hawlucha", "typeList": ["Fighting", "Flying"] },
    { "id": 702, "name": "Dedenne", "typeList": ["Electric", "Fairy"] },
    { "id": 703, "name": "Carbink", "typeList": ["Rock", "Fairy"] },
    { "id": 704, "name": "Goomy", "typeList": ["Dragon"] },
    { "id": 705, "name": "Sliggoo", "typeList": ["Dragon"] },
    { "id": 706, "name": "Goodra", "typeList": ["Dragon"] },
    { "id": 707, "name": "Klefki", "typeList": ["Steel", "Fairy"] },
    { "id": 708, "name": "Phantump", "typeList": ["Ghost", "Grass"] },
    { "id": 709, "name": "Trevenant", "typeList": ["Ghost", "Grass"] },
    { "id": 710, "name": "Pumpkaboo", "typeList": ["Ghost", "Grass"] },
    { "id": 711, "name": "Gourgeist", "typeList": ["Ghost", "Grass"] },
    { "id": 712, "name": "Bergmite", "typeList": ["Ice"] },
    { "id": 713, "name": "Avalugg", "typeList": ["Ice"] },
    { "id": 714, "name": "Noibat", "typeList": ["Flying", "Dragon"] },
    { "id": 715, "name": "Noivern", "typeList": ["Flying", "Dragon"] },
    { "id": 716, "name": "Xerneas", "typeList": ["Fairy"] },
    { "id": 717, "name": "Yveltal", "typeList": ["Dark", "Flying"] },
    { "id": 718, "name": "Zygarde", "typeList": ["Dragon", "Ground"] },
    { "id": 719, "name": "Diancie", "typeList": ["Rock", "Fairy"] },
    { "id": 720, "name": "Hoopa", "typeList": ["Psychic", "Ghost"] },
    { "id": 721, "name": "Volcanion", "typeList": ["Fire", "Water"] },
    { "id": 722, "name": "Rowlet", "typeList": ["Grass", "Flying"] },
    { "id": 723, "name": "Dartrix", "typeList": ["Grass", "Flying"] },
    { "id": 724, "name": "Decidueye", "typeList": ["Grass", "Ghost"] },
    { "id": 725, "name": "Litten", "typeList": ["Fire"] },
    { "id": 726, "name": "Torracat", "typeList": ["Fire"] },
    { "id": 727, "name": "Incineroar", "typeList": ["Fire", "Dark"] },
    { "id": 728, "name": "Popplio", "typeList": ["Water"] },
    { "id": 729, "name": "Brionne", "typeList": ["Water"] },
    { "id": 730, "name": "Primarina", "typeList": ["Water", "Fairy"] },
    { "id": 731, "name": "Pikipek", "typeList": ["Normal", "Flying"] },
    { "id": 732, "name": "Trumbeak", "typeList": ["Normal", "Flying"] },
    { "id": 733, "name": "Toucannon", "typeList": ["Normal", "Flying"] },
    { "id": 734, "name": "Yungoos", "typeList": ["Normal"] },
    { "id": 735, "name": "Gumshoos", "typeList": ["Normal"] },
    { "id": 736, "name": "Grubbin", "typeList": ["Bug"] },
    { "id": 737, "name": "Charjabug", "typeList": ["Bug", "Electric"] },
    { "id": 738, "name": "Vikavolt", "typeList": ["Bug", "Electric"] },
    { "id": 739, "name": "Crabrawler", "typeList": ["Fighting"] },
    { "id": 740, "name": "Crabominable", "typeList": ["Fighting", "Ice"] },
    { "id": 741, "name": "Oricorio", "typeList": ["Fire", "Flying"] },
    { "id": 742, "name": "Cutiefly", "typeList": ["Bug", "Fairy"] },
    { "id": 743, "name": "Ribombee", "typeList": ["Bug", "Fairy"] },
    { "id": 744, "name": "Rockruff", "typeList": ["Rock"] },
    { "id": 745, "name": "Lycanroc", "typeList": ["Rock"] },
    { "id": 746, "name": "Wishiwashi", "typeList": ["Water"] },
    { "id": 747, "name": "Mareanie", "typeList": ["Poison", "Water"] },
    { "id": 748, "name": "Toxapex", "typeList": ["Poison", "Water"] },
    { "id": 749, "name": "Mudbray", "typeList": ["Ground"] },
    { "id": 750, "name": "Mudsdale", "typeList": ["Ground"] },
    { "id": 751, "name": "Dewpider", "typeList": ["Water", "Bug"] },
    { "id": 752, "name": "Araquanid", "typeList": ["Water", "Bug"] },
    { "id": 753, "name": "Fomantis", "typeList": ["Grass"] },
    { "id": 754, "name": "Lurantis", "typeList": ["Grass"] },
    { "id": 755, "name": "Morelull", "typeList": ["Grass", "Fairy"] },
    { "id": 756, "name": "Shiinotic", "typeList": ["Grass", "Fairy"] },
    { "id": 757, "name": "Salandit", "typeList": ["Poison", "Fire"] },
    { "id": 758, "name": "Salazzle", "typeList": ["Poison", "Fire"] },
    { "id": 759, "name": "Stufful", "typeList": ["Normal", "Fighting"] },
    { "id": 760, "name": "Bewear", "typeList": ["Normal", "Fighting"] },
    { "id": 761, "name": "Bounsweet", "typeList": ["Grass"] },
    { "id": 762, "name": "Steenee", "typeList": ["Grass"] },
    { "id": 763, "name": "Tsareena", "typeList": ["Grass"] },
    { "id": 764, "name": "Comfey", "typeList": ["Fairy"] },
    { "id": 765, "name": "Oranguru", "typeList": ["Normal", "Psychic"] },
    { "id": 766, "name": "Passimian", "typeList": ["Fighting"] },
    { "id": 767, "name": "Wimpod", "typeList": ["Bug", "Water"] },
    { "id": 768, "name": "Golisopod", "typeList": ["Bug", "Water"] },
    { "id": 769, "name": "Sandygast", "typeList": ["Ghost", "Ground"] },
    { "id": 770, "name": "Palossand", "typeList": ["Ghost", "Ground"] },
    { "id": 771, "name": "Pyukumuku", "typeList": ["Water"] },
    { "id": 772, "name": "Type: Null", "typeList": ["Normal"] },
    { "id": 773, "name": "Silvally", "typeList": ["Normal"] },
    { "id": 774, "name": "Minior", "typeList": ["Rock", "Flying"] },
    { "id": 775, "name": "Komala", "typeList": ["Normal"] },
    { "id": 776, "name": "Turtonator", "typeList": ["Fire", "Dragon"] },
    { "id": 777, "name": "Togedemaru", "typeList": ["Electric", "Steel"] },
    { "id": 778, "name": "Mimikyu", "typeList": ["Ghost", "Fairy"] },
    { "id": 779, "name": "Bruxish", "typeList": ["Water", "Psychic"] },
    { "id": 780, "name": "Drampa", "typeList": ["Normal", "Dragon"] },
    { "id": 781, "name": "Dhelmise", "typeList": ["Ghost", "Grass"] },
    { "id": 782, "name": "Jangmo-o", "typeList": ["Dragon"] },
    { "id": 783, "name": "Hakamo-o", "typeList": ["Dragon", "Fighting"] },
    { "id": 784, "name": "Kommo-o", "typeList": ["Dragon", "Fighting"] },
    { "id": 785, "name": "Tapu Koko", "typeList": ["Electric", "Fairy"] },
    { "id": 786, "name": "Tapu Lele", "typeList": ["Psychic", "Fairy"] },
    { "id": 787, "name": "Tapu Bulu", "typeList": ["Grass", "Fairy"] },
    { "id": 788, "name": "Tapu Fini", "typeList": ["Water", "Fairy"] },
    { "id": 789, "name": "Cosmog", "typeList": ["Psychic"] },
    { "id": 790, "name": "Cosmoem", "typeList": ["Psychic"] },
    { "id": 791, "name": "Solgaleo", "typeList": ["Psychic", "Steel"] },
    { "id": 792, "name": "Lunala", "typeList": ["Psychic", "Ghost"] },
    { "id": 793, "name": "Nihilego", "typeList": ["Rock", "Poison"] },
    { "id": 794, "name": "Buzzwole", "typeList": ["Bug", "Fighting"] },
    { "id": 795, "name": "Pheromosa", "typeList": ["Bug", "Fighting"] },
    { "id": 796, "name": "Xurkitree", "typeList": ["Electric"] },
    { "id": 797, "name": "Celesteela", "typeList": ["Steel", "Flying"] },
    { "id": 798, "name": "Kartana", "typeList": ["Grass", "Steel"] },
    { "id": 799, "name": "Guzzlord", "typeList": ["Dark", "Dragon"] },
    { "id": 800, "name": "Necrozma", "typeList": ["Psychic"] },
    { "id": 801, "name": "Magearna", "typeList": ["Steel", "Fairy"] },
    { "id": 802, "name": "Marshadow", "typeList": ["Fighting", "Ghost"] },
    { "id": 803, "name": "Poipole", "typeList": ["Poison"] },
    { "id": 804, "name": "Naganadel", "typeList": ["Poison", "Dragon"] },
    { "id": 805, "name": "Stakataka", "typeList": ["Rock", "Steel"] },
    { "id": 806, "name": "Blacephalon", "typeList": ["Fire", "Ghost"] },
    { "id": 807, "name": "Zeraora", "typeList": ["Electric"] },
    { "id": 808, "name": "Meltan", "typeList": ["Steel"] },
    { "id": 809, "name": "Melmetal", "typeList": ["Steel"] }
];

let pokemonsHada = pokemons.filter(pokemon => pokemon.typeList == "Fairy") // TODO: Crea un nuevo array con todos los pokemons que son del tipo 'Fairy'
console.log(pokemonsHada)