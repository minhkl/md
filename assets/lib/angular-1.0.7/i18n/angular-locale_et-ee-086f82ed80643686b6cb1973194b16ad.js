angular.module("ngLocale",[],["$provide",function($provide){var PLURAL_CATEGORY={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};$provide.value("$locale",{DATETIME_FORMATS:{AMPMS:{0:"enne keskpäeva",1:"pärast keskpäeva"},DAY:{0:"pühapäev",1:"esmaspäev",2:"teisipäev",3:"kolmapäev",4:"neljapäev",5:"reede",6:"laupäev"},MONTH:{0:"jaanuar",1:"veebruar",2:"märts",3:"aprill",4:"mai",5:"juuni",6:"juuli",7:"august",8:"september",9:"oktoober",10:"november",11:"detsember"},SHORTDAY:{0:"P",1:"E",2:"T",3:"K",4:"N",5:"R",6:"L"},SHORTMONTH:{0:"jaan",1:"veebr",2:"märts",3:"apr",4:"mai",5:"juuni",6:"juuli",7:"aug",8:"sept",9:"okt",10:"nov",11:"dets"},fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"dd.MM.yyyy H:mm.ss",mediumDate:"dd.MM.yyyy",mediumTime:"H:mm.ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:{0:{gSize:3,lgSize:3,macFrac:0,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},1:{gSize:0,lgSize:0,macFrac:0,maxFrac:2,minFrac:2,minInt:1,negPre:"(",negSuf:"¤)",posPre:"",posSuf:"¤"}}},id:"et-ee",pluralCat:function(n){return 1==n?PLURAL_CATEGORY.ONE:PLURAL_CATEGORY.OTHER}})}]);