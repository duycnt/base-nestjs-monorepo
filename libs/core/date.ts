import { DateTime } from 'luxon';

export const getDateFormat = (date = new Date(), format = 'dd/MM/yyyy HH:mm:ss'): string => {
  return DateTime.fromJSDate(date).setZone(process.env.TZ).toFormat(format);
};

export enum Timezone {
  'Africa/Algiers' = 'Africa/Algiers',
  'Atlantic/Cape_Verde' = 'Atlantic/Cape_Verde',
  'Africa/Ndjamena' = 'Africa/Ndjamena',
  'Africa/Abidjan' = 'Africa/Abidjan',
  'Africa/Bamako' = 'Africa/Bamako',
  'Africa/Banjul' = 'Africa/Banjul',
  'Africa/Conakry' = 'Africa/Conakry',
  'Africa/Dakar' = 'Africa/Dakar',
  'Africa/Freetown' = 'Africa/Freetown',
  'Africa/Lome' = 'Africa/Lome',
  'Africa/Nouakchott' = 'Africa/Nouakchott',
  'Africa/Ouagadougou' = 'Africa/Ouagadougou',
  'Atlantic/St_Helena' = 'Atlantic/St_Helena',
  'Africa/Cairo' = 'Africa/Cairo',
  'Africa/Accra' = 'Africa/Accra',
  'Africa/Bissau' = 'Africa/Bissau',
  'Africa/Nairobi' = 'Africa/Nairobi',
  'Africa/Addis_Ababa' = 'Africa/Addis_Ababa',
  'Africa/Asmara' = 'Africa/Asmara',
  'Africa/Dar_es_Salaam' = 'Africa/Dar_es_Salaam',
  'Africa/Djibouti' = 'Africa/Djibouti',
  'Africa/Kampala' = 'Africa/Kampala',
  'Africa/Mogadishu' = 'Africa/Mogadishu',
  'Indian/Antananarivo' = 'Indian/Antananarivo',
  'Indian/Comoro' = 'Indian/Comoro',
  'Indian/Mayotte' = 'Indian/Mayotte',
  'Africa/Monrovia' = 'Africa/Monrovia',
  'Africa/Tripoli' = 'Africa/Tripoli',
  'Indian/Mauritius' = 'Indian/Mauritius',
  'Africa/Casablanca' = 'Africa/Casablanca',
  'Africa/El_Aaiun' = 'Africa/El_Aaiun',
  'Africa/Maputo' = 'Africa/Maputo',
  'Africa/Blantyre' = 'Africa/Blantyre',
  'Africa/Bujumbura' = 'Africa/Bujumbura',
  'Africa/Gaborone' = 'Africa/Gaborone',
  'Africa/Harare' = 'Africa/Harare',
  'Africa/Kigali' = 'Africa/Kigali',
  'Africa/Lubumbashi' = 'Africa/Lubumbashi',
  'Africa/Lusaka' = 'Africa/Lusaka',
  'Africa/Windhoek' = 'Africa/Windhoek',
  'Africa/Lagos' = 'Africa/Lagos',
  'Africa/Bangui' = 'Africa/Bangui',
  'Africa/Brazzaville' = 'Africa/Brazzaville',
  'Africa/Douala' = 'Africa/Douala',
  'Africa/Kinshasa' = 'Africa/Kinshasa',
  'Africa/Libreville' = 'Africa/Libreville',
  'Africa/Luanda' = 'Africa/Luanda',
  'Africa/Malabo' = 'Africa/Malabo',
  'Africa/Niamey' = 'Africa/Niamey',
  'Africa/Porto-Novo' = 'Africa/Porto-Novo',
  'Indian/Reunion' = 'Indian/Reunion',
  'Africa/Sao_Tome' = 'Africa/Sao_Tome',
  'Indian/Mahe' = 'Indian/Mahe',
  'Africa/Johannesburg' = 'Africa/Johannesburg',
  'Africa/Maseru' = 'Africa/Maseru',
  'Africa/Mbabane' = 'Africa/Mbabane',
  'Africa/Khartoum' = 'Africa/Khartoum',
  'Africa/Juba' = 'Africa/Juba',
  'Africa/Tunis' = 'Africa/Tunis',
  'Antarctica/Casey' = 'Antarctica/Casey',
  'Antarctica/Davis' = 'Antarctica/Davis',
  'Antarctica/Mawson' = 'Antarctica/Mawson',
  'Indian/Kerguelen' = 'Indian/Kerguelen',
  'Antarctica/DumontDUrville' = 'Antarctica/DumontDUrville',
  'Antarctica/Syowa' = 'Antarctica/Syowa',
  'Antarctica/Troll' = 'Antarctica/Troll',
  'Antarctica/Vostok' = 'Antarctica/Vostok',
  'Antarctica/Rothera' = 'Antarctica/Rothera',
  'Asia/Kabul' = 'Asia/Kabul',
  'Asia/Yerevan' = 'Asia/Yerevan',
  'Asia/Baku' = 'Asia/Baku',
  'Asia/Dhaka' = 'Asia/Dhaka',
  'Asia/Thimphu' = 'Asia/Thimphu',
  'Indian/Chagos' = 'Indian/Chagos',
  'Asia/Brunei' = 'Asia/Brunei',
  'Asia/Yangon' = 'Asia/Yangon',
  'Asia/Shanghai' = 'Asia/Shanghai',
  'Asia/Urumqi' = 'Asia/Urumqi',
  'Asia/Hong_Kong' = 'Asia/Hong_Kong',
  'Asia/Taipei' = 'Asia/Taipei',
  'Asia/Macau' = 'Asia/Macau',
  'Asia/Nicosia' = 'Asia/Nicosia',
  'Asia/Famagusta' = 'Asia/Famagusta',
  'Europe/Nicosia' = 'Europe/Nicosia',
  'Asia/Tbilisi' = 'Asia/Tbilisi',
  'Asia/Dili' = 'Asia/Dili',
  'Asia/Kolkata' = 'Asia/Kolkata',
  'Asia/Jakarta' = 'Asia/Jakarta',
  'Asia/Pontianak' = 'Asia/Pontianak',
  'Asia/Makassar' = 'Asia/Makassar',
  'Asia/Jayapura' = 'Asia/Jayapura',
  'Asia/Tehran' = 'Asia/Tehran',
  'Asia/Baghdad' = 'Asia/Baghdad',
  'Asia/Jerusalem' = 'Asia/Jerusalem',
  'Asia/Tokyo' = 'Asia/Tokyo',
  'Asia/Amman' = 'Asia/Amman',
  'Asia/Almaty' = 'Asia/Almaty',
  'Asia/Qyzylorda' = 'Asia/Qyzylorda',
  'Asia/Qostanay' = 'Asia/Qostanay',
  'Asia/Aqtobe' = 'Asia/Aqtobe',
  'Asia/Aqtau' = 'Asia/Aqtau',
  'Asia/Atyrau' = 'Asia/Atyrau',
  'Asia/Oral' = 'Asia/Oral',
  'Asia/Bishkek' = 'Asia/Bishkek',
  'Asia/Seoul' = 'Asia/Seoul',
  'Asia/Pyongyang' = 'Asia/Pyongyang',
  'Asia/Beirut' = 'Asia/Beirut',
  'Asia/Kuala_Lumpur' = 'Asia/Kuala_Lumpur',
  'Asia/Kuching' = 'Asia/Kuching',
  'Indian/Maldives' = 'Indian/Maldives',
  'Asia/Hovd' = 'Asia/Hovd',
  'Asia/Ulaanbaatar' = 'Asia/Ulaanbaatar',
  'Asia/Choibalsan' = 'Asia/Choibalsan',
  'Asia/Kathmandu' = 'Asia/Kathmandu',
  'Asia/Karachi' = 'Asia/Karachi',
  'Asia/Gaza' = 'Asia/Gaza',
  'Asia/Hebron' = 'Asia/Hebron',
  'Asia/Manila' = 'Asia/Manila',
  'Asia/Qatar' = 'Asia/Qatar',
  'Asia/Bahrain' = 'Asia/Bahrain',
  'Asia/Riyadh' = 'Asia/Riyadh',
  'Asia/Aden' = 'Asia/Aden',
  'Asia/Kuwait' = 'Asia/Kuwait',
  'Asia/Singapore' = 'Asia/Singapore',
  'Asia/Colombo' = 'Asia/Colombo',
  'Asia/Damascus' = 'Asia/Damascus',
  'Asia/Dushanbe' = 'Asia/Dushanbe',
  'Asia/Bangkok' = 'Asia/Bangkok',
  'Asia/Phnom_Penh' = 'Asia/Phnom_Penh',
  'Asia/Vientiane' = 'Asia/Vientiane',
  'Asia/Ashgabat' = 'Asia/Ashgabat',
  'Asia/Dubai' = 'Asia/Dubai',
  'Asia/Muscat' = 'Asia/Muscat',
  'Asia/Samarkand' = 'Asia/Samarkand',
  'Asia/Tashkent' = 'Asia/Tashkent',
  'Asia/Ho_Chi_Minh' = 'Asia/Ho_Chi_Minh',
  'Australia/Darwin' = 'Australia/Darwin',
  'Australia/Perth' = 'Australia/Perth',
  'Australia/Eucla' = 'Australia/Eucla',
  'Australia/Brisbane' = 'Australia/Brisbane',
  'Australia/Lindeman' = 'Australia/Lindeman',
  'Australia/Adelaide' = 'Australia/Adelaide',
  'Australia/Hobart' = 'Australia/Hobart',
  'Australia/Currie' = 'Australia/Currie',
  'Australia/Melbourne' = 'Australia/Melbourne',
  'Australia/Sydney' = 'Australia/Sydney',
  'Australia/Broken_Hill' = 'Australia/Broken_Hill',
  'Australia/Lord_Howe' = 'Australia/Lord_Howe',
  'Antarctica/Macquarie' = 'Antarctica/Macquarie',
  'Indian/Christmas' = 'Indian/Christmas',
  'Indian/Cocos' = 'Indian/Cocos',
  'Pacific/Fiji' = 'Pacific/Fiji',
  'Pacific/Gambier' = 'Pacific/Gambier',
  'Pacific/Marquesas' = 'Pacific/Marquesas',
  'Pacific/Tahiti' = 'Pacific/Tahiti',
  'Pacific/Guam' = 'Pacific/Guam',
  'Pacific/Saipan' = 'Pacific/Saipan',
  'Pacific/Tarawa' = 'Pacific/Tarawa',
  'Pacific/Enderbury' = 'Pacific/Enderbury',
  'Pacific/Kiritimati' = 'Pacific/Kiritimati',
  'Pacific/Majuro' = 'Pacific/Majuro',
  'Pacific/Kwajalein' = 'Pacific/Kwajalein',
  'Pacific/Chuuk' = 'Pacific/Chuuk',
  'Pacific/Pohnpei' = 'Pacific/Pohnpei',
  'Pacific/Kosrae' = 'Pacific/Kosrae',
  'Pacific/Nauru' = 'Pacific/Nauru',
  'Pacific/Noumea' = 'Pacific/Noumea',
  'Pacific/Auckland' = 'Pacific/Auckland',
  'Pacific/Chatham' = 'Pacific/Chatham',
  'Antarctica/McMurdo' = 'Antarctica/McMurdo',
  'Pacific/Rarotonga' = 'Pacific/Rarotonga',
  'Pacific/Niue' = 'Pacific/Niue',
  'Pacific/Norfolk' = 'Pacific/Norfolk',
  'Pacific/Palau' = 'Pacific/Palau',
  'Pacific/Port_Moresby' = 'Pacific/Port_Moresby',
  'Pacific/Bougainville' = 'Pacific/Bougainville',
  'Pacific/Pitcairn' = 'Pacific/Pitcairn',
  'Pacific/Pago_Pago' = 'Pacific/Pago_Pago',
  'Pacific/Midway' = 'Pacific/Midway',
  'Pacific/Apia' = 'Pacific/Apia',
  'Pacific/Guadalcanal' = 'Pacific/Guadalcanal',
  'Pacific/Fakaofo' = 'Pacific/Fakaofo',
  'Pacific/Tongatapu' = 'Pacific/Tongatapu',
  'Pacific/Funafuti' = 'Pacific/Funafuti',
  'Pacific/Wake' = 'Pacific/Wake',
  'Pacific/Efate' = 'Pacific/Efate',
  'Pacific/Wallis' = 'Pacific/Wallis',
  'Africa/Asmera' = 'Africa/Asmera',
  'Africa/Timbuktu' = 'Africa/Timbuktu',
  'America/Argentina/ComodRivadavia' = 'America/Argentina/ComodRivadavia',
  'America/Atka' = 'America/Atka',
  'America/Buenos_Aires' = 'America/Buenos_Aires',
  'America/Catamarca' = 'America/Catamarca',
  'America/Coral_Harbour' = 'America/Coral_Harbour',
  'America/Cordoba' = 'America/Cordoba',
  'America/Ensenada' = 'America/Ensenada',
  'America/Fort_Wayne' = 'America/Fort_Wayne',
  'America/Indianapolis' = 'America/Indianapolis',
  'America/Jujuy' = 'America/Jujuy',
  'America/Knox_IN' = 'America/Knox_IN',
  'America/Louisville' = 'America/Louisville',
  'America/Mendoza' = 'America/Mendoza',
  'America/Montreal' = 'America/Montreal',
  'America/Porto_Acre' = 'America/Porto_Acre',
  'America/Rosario' = 'America/Rosario',
  'America/Santa_Isabel' = 'America/Santa_Isabel',
  'America/Shiprock' = 'America/Shiprock',
  'America/Virgin' = 'America/Virgin',
  'Antarctica/South_Pole' = 'Antarctica/South_Pole',
  'Asia/Ashkhabad' = 'Asia/Ashkhabad',
  'Asia/Calcutta' = 'Asia/Calcutta',
  'Asia/Chongqing' = 'Asia/Chongqing',
  'Asia/Chungking' = 'Asia/Chungking',
  'Asia/Dacca' = 'Asia/Dacca',
  'Asia/Harbin' = 'Asia/Harbin',
  'Asia/Kashgar' = 'Asia/Kashgar',
  'Asia/Katmandu' = 'Asia/Katmandu',
  'Asia/Macao' = 'Asia/Macao',
  'Asia/Rangoon' = 'Asia/Rangoon',
  'Asia/Saigon' = 'Asia/Saigon',
  'Asia/Tel_Aviv' = 'Asia/Tel_Aviv',
  'Asia/Thimbu' = 'Asia/Thimbu',
  'Asia/Ujung_Pandang' = 'Asia/Ujung_Pandang',
  'Asia/Ulan_Bator' = 'Asia/Ulan_Bator',
  'Atlantic/Faeroe' = 'Atlantic/Faeroe',
  'Atlantic/Jan_Mayen' = 'Atlantic/Jan_Mayen',
  'Australia/ACT' = 'Australia/ACT',
  'Australia/Canberra' = 'Australia/Canberra',
  'Australia/LHI' = 'Australia/LHI',
  'Australia/NSW' = 'Australia/NSW',
  'Australia/North' = 'Australia/North',
  'Australia/Queensland' = 'Australia/Queensland',
  'Australia/South' = 'Australia/South',
  'Australia/Tasmania' = 'Australia/Tasmania',
  'Australia/Victoria' = 'Australia/Victoria',
  'Australia/West' = 'Australia/West',
  'Australia/Yancowinna' = 'Australia/Yancowinna',
  'Brazil/Acre' = 'Brazil/Acre',
  'Brazil/DeNoronha' = 'Brazil/DeNoronha',
  'Brazil/East' = 'Brazil/East',
  'Brazil/West' = 'Brazil/West',
  'Canada/Atlantic' = 'Canada/Atlantic',
  'Canada/Central' = 'Canada/Central',
  'Canada/Eastern' = 'Canada/Eastern',
  'Canada/Mountain' = 'Canada/Mountain',
  'Canada/Newfoundland' = 'Canada/Newfoundland',
  'Canada/Pacific' = 'Canada/Pacific',
  'Canada/Saskatchewan' = 'Canada/Saskatchewan',
  'Canada/Yukon' = 'Canada/Yukon',
  'Chile/Continental' = 'Chile/Continental',
  'Chile/EasterIsland' = 'Chile/EasterIsland',
  Cuba = 'Cuba',
  Egypt = 'Egypt',
  Eire = 'Eire',
  'Etc/UCT' = 'Etc/UCT',
  'Europe/Belfast' = 'Europe/Belfast',
  'Europe/Tiraspol' = 'Europe/Tiraspol',
  GB = 'GB',
  'GB-Eire' = 'GB-Eire',
  'GMT+0' = 'GMT+0',
  'GMT-0' = 'GMT-0',
  GMT0 = 'GMT0',
  Greenwich = 'Greenwich',
  Hongkong = 'Hongkong',
  Iceland = 'Iceland',
  Iran = 'Iran',
  Israel = 'Israel',
  Jamaica = 'Jamaica',
  Japan = 'Japan',
  Kwajalein = 'Kwajalein',
  Libya = 'Libya',
  'Mexico/BajaNorte' = 'Mexico/BajaNorte',
  'Mexico/BajaSur' = 'Mexico/BajaSur',
  'Mexico/General' = 'Mexico/General',
  NZ = 'NZ',
  'NZ-CHAT' = 'NZ-CHAT',
  Navajo = 'Navajo',
  PRC = 'PRC',
  'Pacific/Johnston' = 'Pacific/Johnston',
  'Pacific/Ponape' = 'Pacific/Ponape',
  'Pacific/Samoa' = 'Pacific/Samoa',
  'Pacific/Truk' = 'Pacific/Truk',
  'Pacific/Yap' = 'Pacific/Yap',
  Poland = 'Poland',
  Portugal = 'Portugal',
  ROC = 'ROC',
  ROK = 'ROK',
  Singapore = 'Singapore',
  Turkey = 'Turkey',
  UCT = 'UCT',
  'US/Alaska' = 'US/Alaska',
  'US/Aleutian' = 'US/Aleutian',
  'US/Arizona' = 'US/Arizona',
  'US/Central' = 'US/Central',
  'US/East-Indiana' = 'US/East-Indiana',
  'US/Eastern' = 'US/Eastern',
  'US/Hawaii' = 'US/Hawaii',
  'US/Indiana-Starke' = 'US/Indiana-Starke',
  'US/Michigan' = 'US/Michigan',
  'US/Mountain' = 'US/Mountain',
  'US/Pacific' = 'US/Pacific',
  'US/Samoa' = 'US/Samoa',
  UTC = 'UTC',
  Universal = 'Universal',
  'W-SU' = 'W-SU',
  Zulu = 'Zulu',
  'Etc/GMT' = 'Etc/GMT',
  'Etc/UTC' = 'Etc/UTC',
  GMT = 'GMT',
  'Etc/Universal' = 'Etc/Universal',
  'Etc/Zulu' = 'Etc/Zulu',
  'Etc/Greenwich' = 'Etc/Greenwich',
  'Etc/GMT-0' = 'Etc/GMT-0',
  'Etc/GMT+0' = 'Etc/GMT+0',
  'Etc/GMT0' = 'Etc/GMT0',
  'Etc/GMT-14' = 'Etc/GMT-14',
  'Etc/GMT-13' = 'Etc/GMT-13',
  'Etc/GMT-12' = 'Etc/GMT-12',
  'Etc/GMT-11' = 'Etc/GMT-11',
  'Etc/GMT-10' = 'Etc/GMT-10',
  'Etc/GMT-9' = 'Etc/GMT-9',
  'Etc/GMT-8' = 'Etc/GMT-8',
  'Etc/GMT-7' = 'Etc/GMT-7',
  'Etc/GMT-6' = 'Etc/GMT-6',
  'Etc/GMT-5' = 'Etc/GMT-5',
  'Etc/GMT-4' = 'Etc/GMT-4',
  'Etc/GMT-3' = 'Etc/GMT-3',
  'Etc/GMT-2' = 'Etc/GMT-2',
  'Etc/GMT-1' = 'Etc/GMT-1',
  'Etc/GMT+1' = 'Etc/GMT+1',
  'Etc/GMT+2' = 'Etc/GMT+2',
  'Etc/GMT+3' = 'Etc/GMT+3',
  'Etc/GMT+4' = 'Etc/GMT+4',
  'Etc/GMT+5' = 'Etc/GMT+5',
  'Etc/GMT+6' = 'Etc/GMT+6',
  'Etc/GMT+7' = 'Etc/GMT+7',
  'Etc/GMT+8' = 'Etc/GMT+8',
  'Etc/GMT+9' = 'Etc/GMT+9',
  'Etc/GMT+10' = 'Etc/GMT+10',
  'Etc/GMT+11' = 'Etc/GMT+11',
  'Etc/GMT+12' = 'Etc/GMT+12',
  'Europe/London' = 'Europe/London',
  'Europe/Jersey' = 'Europe/Jersey',
  'Europe/Guernsey' = 'Europe/Guernsey',
  'Europe/Isle_of_Man' = 'Europe/Isle_of_Man',
  'Europe/Dublin' = 'Europe/Dublin',
  WET = 'WET',
  CET = 'CET',
  MET = 'MET',
  EET = 'EET',
  'Europe/Tirane' = 'Europe/Tirane',
  'Europe/Andorra' = 'Europe/Andorra',
  'Europe/Vienna' = 'Europe/Vienna',
  'Europe/Minsk' = 'Europe/Minsk',
  'Europe/Brussels' = 'Europe/Brussels',
  'Europe/Sofia' = 'Europe/Sofia',
  'Europe/Prague' = 'Europe/Prague',
  'Europe/Copenhagen' = 'Europe/Copenhagen',
  'Atlantic/Faroe' = 'Atlantic/Faroe',
  'America/Danmarkshavn' = 'America/Danmarkshavn',
  'America/Scoresbysund' = 'America/Scoresbysund',
  'America/Godthab' = 'America/Godthab',
  'America/Thule' = 'America/Thule',
  'Europe/Tallinn' = 'Europe/Tallinn',
  'Europe/Helsinki' = 'Europe/Helsinki',
  'Europe/Mariehamn' = 'Europe/Mariehamn',
  'Europe/Paris' = 'Europe/Paris',
  'Europe/Berlin' = 'Europe/Berlin',
  'Europe/Busingen' = 'Europe/Busingen',
  'Europe/Gibraltar' = 'Europe/Gibraltar',
  'Europe/Athens' = 'Europe/Athens',
  'Europe/Budapest' = 'Europe/Budapest',
  'Atlantic/Reykjavik' = 'Atlantic/Reykjavik',
  'Europe/Rome' = 'Europe/Rome',
  'Europe/Vatican' = 'Europe/Vatican',
  'Europe/San_Marino' = 'Europe/San_Marino',
  'Europe/Riga' = 'Europe/Riga',
  'Europe/Vaduz' = 'Europe/Vaduz',
  'Europe/Vilnius' = 'Europe/Vilnius',
  'Europe/Luxembourg' = 'Europe/Luxembourg',
  'Europe/Malta' = 'Europe/Malta',
  'Europe/Chisinau' = 'Europe/Chisinau',
  'Europe/Monaco' = 'Europe/Monaco',
  'Europe/Amsterdam' = 'Europe/Amsterdam',
  'Europe/Oslo' = 'Europe/Oslo',
  'Arctic/Longyearbyen' = 'Arctic/Longyearbyen',
  'Europe/Warsaw' = 'Europe/Warsaw',
  'Europe/Lisbon' = 'Europe/Lisbon',
  'Atlantic/Azores' = 'Atlantic/Azores',
  'Atlantic/Madeira' = 'Atlantic/Madeira',
  'Europe/Bucharest' = 'Europe/Bucharest',
  'Europe/Kaliningrad' = 'Europe/Kaliningrad',
  'Europe/Moscow' = 'Europe/Moscow',
  'Europe/Simferopol' = 'Europe/Simferopol',
  'Europe/Astrakhan' = 'Europe/Astrakhan',
  'Europe/Volgograd' = 'Europe/Volgograd',
  'Europe/Saratov' = 'Europe/Saratov',
  'Europe/Kirov' = 'Europe/Kirov',
  'Europe/Samara' = 'Europe/Samara',
  'Europe/Ulyanovsk' = 'Europe/Ulyanovsk',
  'Asia/Yekaterinburg' = 'Asia/Yekaterinburg',
  'Asia/Omsk' = 'Asia/Omsk',
  'Asia/Barnaul' = 'Asia/Barnaul',
  'Asia/Novosibirsk' = 'Asia/Novosibirsk',
  'Asia/Tomsk' = 'Asia/Tomsk',
  'Asia/Novokuznetsk' = 'Asia/Novokuznetsk',
  'Asia/Krasnoyarsk' = 'Asia/Krasnoyarsk',
  'Asia/Irkutsk' = 'Asia/Irkutsk',
  'Asia/Chita' = 'Asia/Chita',
  'Asia/Yakutsk' = 'Asia/Yakutsk',
  'Asia/Vladivostok' = 'Asia/Vladivostok',
  'Asia/Khandyga' = 'Asia/Khandyga',
  'Asia/Sakhalin' = 'Asia/Sakhalin',
  'Asia/Magadan' = 'Asia/Magadan',
  'Asia/Srednekolymsk' = 'Asia/Srednekolymsk',
  'Asia/Ust-Nera' = 'Asia/Ust-Nera',
  'Asia/Kamchatka' = 'Asia/Kamchatka',
  'Asia/Anadyr' = 'Asia/Anadyr',
  'Europe/Belgrade' = 'Europe/Belgrade',
  'Europe/Ljubljana' = 'Europe/Ljubljana',
  'Europe/Podgorica' = 'Europe/Podgorica',
  'Europe/Sarajevo' = 'Europe/Sarajevo',
  'Europe/Skopje' = 'Europe/Skopje',
  'Europe/Zagreb' = 'Europe/Zagreb',
  'Europe/Bratislava' = 'Europe/Bratislava',
  'Europe/Madrid' = 'Europe/Madrid',
  'Africa/Ceuta' = 'Africa/Ceuta',
  'Atlantic/Canary' = 'Atlantic/Canary',
  'Europe/Stockholm' = 'Europe/Stockholm',
  'Europe/Zurich' = 'Europe/Zurich',
  'Europe/Istanbul' = 'Europe/Istanbul',
  'Asia/Istanbul' = 'Asia/Istanbul',
  'Europe/Kiev' = 'Europe/Kiev',
  'Europe/Uzhgorod' = 'Europe/Uzhgorod',
  'Europe/Zaporozhye' = 'Europe/Zaporozhye',
  Factory = 'Factory',
  EST = 'EST',
  MST = 'MST',
  HST = 'HST',
  EST5EDT = 'EST5EDT',
  CST6CDT = 'CST6CDT',
  MST7MDT = 'MST7MDT',
  PST8PDT = 'PST8PDT',
  'America/New_York' = 'America/New_York',
  'America/Chicago' = 'America/Chicago',
  'America/North_Dakota/Center' = 'America/North_Dakota/Center',
  'America/North_Dakota/New_Salem' = 'America/North_Dakota/New_Salem',
  'America/North_Dakota/Beulah' = 'America/North_Dakota/Beulah',
  'America/Denver' = 'America/Denver',
  'America/Los_Angeles' = 'America/Los_Angeles',
  'America/Juneau' = 'America/Juneau',
  'America/Sitka' = 'America/Sitka',
  'America/Metlakatla' = 'America/Metlakatla',
  'America/Yakutat' = 'America/Yakutat',
  'America/Anchorage' = 'America/Anchorage',
  'America/Nome' = 'America/Nome',
  'America/Adak' = 'America/Adak',
  'Pacific/Honolulu' = 'Pacific/Honolulu',
  'America/Phoenix' = 'America/Phoenix',
  'America/Boise' = 'America/Boise',
  'America/Indiana/Indianapolis' = 'America/Indiana/Indianapolis',
  'America/Indiana/Marengo' = 'America/Indiana/Marengo',
  'America/Indiana/Vincennes' = 'America/Indiana/Vincennes',
  'America/Indiana/Tell_City' = 'America/Indiana/Tell_City',
  'America/Indiana/Petersburg' = 'America/Indiana/Petersburg',
  'America/Indiana/Knox' = 'America/Indiana/Knox',
  'America/Indiana/Winamac' = 'America/Indiana/Winamac',
  'America/Indiana/Vevay' = 'America/Indiana/Vevay',
  'America/Kentucky/Louisville' = 'America/Kentucky/Louisville',
  'America/Kentucky/Monticello' = 'America/Kentucky/Monticello',
  'America/Detroit' = 'America/Detroit',
  'America/Menominee' = 'America/Menominee',
  'America/St_Johns' = 'America/St_Johns',
  'America/Goose_Bay' = 'America/Goose_Bay',
  'America/Halifax' = 'America/Halifax',
  'America/Glace_Bay' = 'America/Glace_Bay',
  'America/Moncton' = 'America/Moncton',
  'America/Blanc-Sablon' = 'America/Blanc-Sablon',
  'America/Toronto' = 'America/Toronto',
  'America/Thunder_Bay' = 'America/Thunder_Bay',
  'America/Nipigon' = 'America/Nipigon',
  'America/Rainy_River' = 'America/Rainy_River',
  'America/Atikokan' = 'America/Atikokan',
  'America/Winnipeg' = 'America/Winnipeg',
  'America/Regina' = 'America/Regina',
  'America/Swift_Current' = 'America/Swift_Current',
  'America/Edmonton' = 'America/Edmonton',
  'America/Vancouver' = 'America/Vancouver',
  'America/Dawson_Creek' = 'America/Dawson_Creek',
  'America/Fort_Nelson' = 'America/Fort_Nelson',
  'America/Creston' = 'America/Creston',
  'America/Pangnirtung' = 'America/Pangnirtung',
  'America/Iqaluit' = 'America/Iqaluit',
  'America/Resolute' = 'America/Resolute',
  'America/Rankin_Inlet' = 'America/Rankin_Inlet',
  'America/Cambridge_Bay' = 'America/Cambridge_Bay',
  'America/Yellowknife' = 'America/Yellowknife',
  'America/Inuvik' = 'America/Inuvik',
  'America/Whitehorse' = 'America/Whitehorse',
  'America/Dawson' = 'America/Dawson',
  'America/Cancun' = 'America/Cancun',
  'America/Merida' = 'America/Merida',
  'America/Matamoros' = 'America/Matamoros',
  'America/Monterrey' = 'America/Monterrey',
  'America/Mexico_City' = 'America/Mexico_City',
  'America/Ojinaga' = 'America/Ojinaga',
  'America/Chihuahua' = 'America/Chihuahua',
  'America/Hermosillo' = 'America/Hermosillo',
  'America/Mazatlan' = 'America/Mazatlan',
  'America/Bahia_Banderas' = 'America/Bahia_Banderas',
  'America/Tijuana' = 'America/Tijuana',
  'America/Nassau' = 'America/Nassau',
  'America/Barbados' = 'America/Barbados',
  'America/Belize' = 'America/Belize',
  'Atlantic/Bermuda' = 'Atlantic/Bermuda',
  'America/Costa_Rica' = 'America/Costa_Rica',
  'America/Havana' = 'America/Havana',
  'America/Santo_Domingo' = 'America/Santo_Domingo',
  'America/El_Salvador' = 'America/El_Salvador',
  'America/Guatemala' = 'America/Guatemala',
  'America/Port-au-Prince' = 'America/Port-au-Prince',
  'America/Tegucigalpa' = 'America/Tegucigalpa',
  'America/Jamaica' = 'America/Jamaica',
  'America/Martinique' = 'America/Martinique',
  'America/Managua' = 'America/Managua',
  'America/Panama' = 'America/Panama',
  'America/Cayman' = 'America/Cayman',
  'America/Puerto_Rico' = 'America/Puerto_Rico',
  'America/Miquelon' = 'America/Miquelon',
  'America/Grand_Turk' = 'America/Grand_Turk',
  'US/Pacific-New' = 'US/Pacific-New',
  'America/Argentina/Buenos_Aires' = 'America/Argentina/Buenos_Aires',
  'America/Argentina/Cordoba' = 'America/Argentina/Cordoba',
  'America/Argentina/Salta' = 'America/Argentina/Salta',
  'America/Argentina/Tucuman' = 'America/Argentina/Tucuman',
  'America/Argentina/La_Rioja' = 'America/Argentina/La_Rioja',
  'America/Argentina/San_Juan' = 'America/Argentina/San_Juan',
  'America/Argentina/Jujuy' = 'America/Argentina/Jujuy',
  'America/Argentina/Catamarca' = 'America/Argentina/Catamarca',
  'America/Argentina/Mendoza' = 'America/Argentina/Mendoza',
  'America/Argentina/San_Luis' = 'America/Argentina/San_Luis',
  'America/Argentina/Rio_Gallegos' = 'America/Argentina/Rio_Gallegos',
  'America/Argentina/Ushuaia' = 'America/Argentina/Ushuaia',
  'America/Aruba' = 'America/Aruba',
  'America/La_Paz' = 'America/La_Paz',
  'America/Noronha' = 'America/Noronha',
  'America/Belem' = 'America/Belem',
  'America/Santarem' = 'America/Santarem',
  'America/Fortaleza' = 'America/Fortaleza',
  'America/Recife' = 'America/Recife',
  'America/Araguaina' = 'America/Araguaina',
  'America/Maceio' = 'America/Maceio',
  'America/Bahia' = 'America/Bahia',
  'America/Sao_Paulo' = 'America/Sao_Paulo',
  'America/Campo_Grande' = 'America/Campo_Grande',
  'America/Cuiaba' = 'America/Cuiaba',
  'America/Porto_Velho' = 'America/Porto_Velho',
  'America/Boa_Vista' = 'America/Boa_Vista',
  'America/Manaus' = 'America/Manaus',
  'America/Eirunepe' = 'America/Eirunepe',
  'America/Rio_Branco' = 'America/Rio_Branco',
  'America/Santiago' = 'America/Santiago',
  'America/Punta_Arenas' = 'America/Punta_Arenas',
  'Pacific/Easter' = 'Pacific/Easter',
  'Antarctica/Palmer' = 'Antarctica/Palmer',
  'America/Bogota' = 'America/Bogota',
  'America/Curacao' = 'America/Curacao',
  'America/Lower_Princes' = 'America/Lower_Princes',
  'America/Kralendijk' = 'America/Kralendijk',
  'America/Guayaquil' = 'America/Guayaquil',
  'Pacific/Galapagos' = 'Pacific/Galapagos',
  'Atlantic/Stanley' = 'Atlantic/Stanley',
  'America/Cayenne' = 'America/Cayenne',
  'America/Guyana' = 'America/Guyana',
  'America/Asuncion' = 'America/Asuncion',
  'America/Lima' = 'America/Lima',
  'Atlantic/South_Georgia' = 'Atlantic/South_Georgia',
  'America/Paramaribo' = 'America/Paramaribo',
  'America/Port_of_Spain' = 'America/Port_of_Spain',
  'America/Anguilla' = 'America/Anguilla',
  'America/Antigua' = 'America/Antigua',
  'America/Dominica' = 'America/Dominica',
  'America/Grenada' = 'America/Grenada',
  'America/Guadeloupe' = 'America/Guadeloupe',
  'America/Marigot' = 'America/Marigot',
  'America/Montserrat' = 'America/Montserrat',
  'America/St_Barthelemy' = 'America/St_Barthelemy',
  'America/St_Kitts' = 'America/St_Kitts',
  'America/St_Lucia' = 'America/St_Lucia',
  'America/St_Thomas' = 'America/St_Thomas',
  'America/St_Vincent' = 'America/St_Vincent',
  'America/Tortola' = 'America/Tortola',
  'America/Montevideo' = 'America/Montevideo',
  'America/Caracas' = 'America/Caracas',
}
