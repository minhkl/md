angular.module("ngLocale",[],["$provide",function($provide){var PLURAL_CATEGORY={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};$provide.value("$locale",{DATETIME_FORMATS:{AMPMS:{0:"AM",1:"PM"},DAY:{0:"nedjelja",1:"ponedjeljak",2:"utorak",3:"srijeda",4:"četvrtak",5:"petak",6:"subota"},MONTH:{0:"siječnja",1:"veljače",2:"ožujka",3:"travnja",4:"svibnja",5:"lipnja",6:"srpnja",7:"kolovoza",8:"rujna",9:"listopada",10:"studenoga",11:"prosinca"},SHORTDAY:{0:"ned",1:"pon",2:"uto",3:"sri",4:"čet",5:"pet",6:"sub"},SHORTMONTH:{0:"sij",1:"velj",2:"ožu",3:"tra",4:"svi",5:"lip",6:"srp",7:"kol",8:"ruj",9:"lis",10:"stu",11:"pro"},fullDate:"EEEE, d. MMMM y.",longDate:"d. MMMM y.",medium:"d. M. y. HH:mm:ss",mediumDate:"d. M. y.",mediumTime:"HH:mm:ss","short":"d.M.y. HH:mm",shortDate:"d.M.y.",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kn",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:{0:{gSize:3,lgSize:3,macFrac:0,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},1:{gSize:3,lgSize:3,macFrac:0,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}}},id:"hr",pluralCat:function(n){return 1==n%10&&11!=n%100?PLURAL_CATEGORY.ONE:n==(0|n)&&n%10>=2&&4>=n%10&&(12>n%100||n%100>14)?PLURAL_CATEGORY.FEW:0==n%10||n==(0|n)&&n%10>=5&&9>=n%10||n==(0|n)&&n%100>=11&&14>=n%100?PLURAL_CATEGORY.MANY:PLURAL_CATEGORY.OTHER}})}]);