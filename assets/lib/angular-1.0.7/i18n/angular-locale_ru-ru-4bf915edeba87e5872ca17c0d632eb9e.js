angular.module("ngLocale",[],["$provide",function($provide){var PLURAL_CATEGORY={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};$provide.value("$locale",{DATETIME_FORMATS:{AMPMS:{0:"до полудня",1:"после полудня"},DAY:{0:"воскресенье",1:"понедельник",2:"вторник",3:"среда",4:"четверг",5:"пятница",6:"суббота"},MONTH:{0:"января",1:"февраля",2:"марта",3:"апреля",4:"мая",5:"июня",6:"июля",7:"августа",8:"сентября",9:"октября",10:"ноября",11:"декабря"},SHORTDAY:{0:"вс",1:"пн",2:"вт",3:"ср",4:"чт",5:"пт",6:"сб"},SHORTMONTH:{0:"янв.",1:"февр.",2:"марта",3:"апр.",4:"мая",5:"июня",6:"июля",7:"авг.",8:"сент.",9:"окт.",10:"нояб.",11:"дек."},fullDate:"EEEE, d MMMM y 'г'.",longDate:"d MMMM y 'г'.",medium:"dd.MM.yyyy H:mm:ss",mediumDate:"dd.MM.yyyy",mediumTime:"H:mm:ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"руб.",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:{0:{gSize:3,lgSize:3,macFrac:0,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},1:{gSize:3,lgSize:3,macFrac:0,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}}},id:"ru-ru",pluralCat:function(n){return 1==n%10&&11!=n%100?PLURAL_CATEGORY.ONE:n==(0|n)&&n%10>=2&&4>=n%10&&(12>n%100||n%100>14)?PLURAL_CATEGORY.FEW:0==n%10||n==(0|n)&&n%10>=5&&9>=n%10||n==(0|n)&&n%100>=11&&14>=n%100?PLURAL_CATEGORY.MANY:PLURAL_CATEGORY.OTHER}})}]);