$(function() {
  var randomTestimonials =  allTestimonials.sort(function() {return 0.5 - Math.random()}).slice(0, 4);
  var elements = [];
  var carouselClasses = ['active', 'right', 'hidden', 'left'];
  var carousel = $('#testimonials-carousel');
  $.each(randomTestimonials, function(index, testimonial) {
    var carouselClass = carouselClasses[index];
    var html = ''+
      '<div class="md-carousel-item '+carouselClass+'">'+
        '<p class="md-quotation-mark">'+
          '<i class="md-single-quotation-mark"></i>'+
          '<i class="md-single-quotation-mark"></i>'+
        '</p>'+
        '<p class="md-text">'+ (testimonial.short_text || testimonial.text) +'</p>'+
        '<p class="md-user">'+ testimonial.person +'</p>'+
        '<p class="md-organize">'+ testimonial.company +'</p>'+
      '</div>';
      carousel.append(html);
  });

});


var allTestimonials = [
  {
    person: 'Aleisha',
    image: '',
    company: 'Caravan King Mobile Repairs',
    address: 'Australia',
    text: 'Mechanics Desk was referred to us not too long after we opened the doors of our business and we love it!  There are three main components to our caravan dealership - repairs, parts and sales.  Mechanics Desk has fabulously complimented all three areas of our business!  Excellent for customer, diary, inventory and job management.  The customer service and support from the team is exceptional and we have found Mechanics Desk and their team to be flexible and accommodating throughout our dealings with them.  I encourage everyone to take a look at their online system.  It is brilliant! '
  },

  {
    person: 'Brett Horsfall',
    image: '',
    company: 'Mag & Turbo Tyre & Service Centre',
    address: 'New Zealand',
    short_text: 'The team at MechanicDesk are always improving the software and the integration with Xero makes invoicing and accounting a breeze at work or at home... A must for any vehicle based workshop',

    text: 'Having worked in the workshop, retail & mechanical environment for many years, I found I was using multiple bits of software to book jobs, communicate and invoice customers which was not time nor cost effective. We were thrilled to come across MechanicDesk when we did as it seemed to integrate with everything we needed, plus more. Having the ability to book the customer with their vehicle in an easy to use interface, from quote to job card, then off to invoice with a text to the customer on completion, we found we were more efficient and having everything in one place saved us time and money. The team at MechanicDesk are always improving the software and the integration with Xero makes invoicing and accounting a breeze at work or at home... A must for any vehicle based workshop'
  },
  {
    person: 'James',
    image: '',
    company: 'Gardiners Garage',
    address: 'VIC, Australia',
    short_text: "We trialled several different software packages before deciding on MechanicDesk, and are very happy with our choice. The design is clear and easy to use, which has meant our staff have all learned the program quickly...",

    text: 'We trialled several different software packages before deciding on MechanicDesk, and are very happy with our choice. The design is clear and easy to use, which has meant our staff have all learned the program quickly. We like the ability to add in part prices, fast POS options and that we can synchronise it with our accounting software. We have also been very impressed with the support from MechanicDesk staff whenever we had any questions.'
  },
  {
    person: 'Brian Dunick',
    image: '',
    company: 'Southland Fuel Injection & Turbo Charging',
    address: 'New Zealand',
    short_text: 'We have found MechanicDesk to be highly functional and easy to use, providing us with complete job management and seamless integration, which means no double entry in our accounting system as all financial information flows into Xero. We are now embracing email invoicing, Xero payroll, online based IRD reporting requirements and have anytime access across both systems to measurable financial information about the business...',
    text: "With the need to modernise our systems, Southland Fuel Injection & Turbo Charging turned to WorkSmart for solutions. We put our confidence in the WorkSmart team to recommend cloud based alternatives and now have a system that addresses all our needs. WorkSmart took the stress out of our decision and provided full implementation and training with Xero and MechanicDesk. We have found MechanicDesk to be highly functional and easy to use, providing us with complete job management and seamless integration, which means no double entry in our accounting system as all financial information flows into Xero. We are now embracing email invoicing, Xero payroll, online based IRD reporting requirements and have anytime access across both systems to measurable financial information about the business. We would like to thank WorkSmart and the team from MechanicDesk for all their help and will continue to utilise their services in future",
  },

  {
    person: 'Melissa Sultana',
    image: '',
    company: 'Better Truck Repairs P/L',
    address: 'NSW, Australia',
    short_text: 'Since joining MechanicDesk we are operating more efficiently and productively. Linking MechanicDesk with Xero is the icing on the cake as it has cut our data entry in half. I highly recommended MechanicDesk to anyone looking for mechanical software, nothing comes close to the excellent service, support and functionality from them.',
    text: "Better Truck Repairs chose MechanicDesk to be our software after extensive research in the field. No other program offered the same support, fields and capabilities that MechanicsDesk did. Since joining MechanicDesk we are operating more efficiently and productively. Linking MechanicDesk with Xero is the icing on the cake as it has cut our data entry in half. I highly recommended MechanicDesk to anyone looking for mechanical software, nothing comes close to the excellent service, support and functionality from them.",
  },

  {
    person: 'Simon Price',
    image: '',
    company: 'Airlie Auto Electrics & Mechanical',
    address: 'QLD, Australia',
    short_text: "Absolutely brilliant. This best describes MechanicDesk. Not just the software, but most importantly the back up service that comes with it. The team are innovative, responsive, and it's a pleasure to receive such great service...",

    text: "Absolutely brilliant. This best describes MechanicDesk. Not just the software, but most importantly the back up service that comes with it. The team are innovative, responsive, and it's a pleasure to receive such great service. After searching & trying many systems, we have found the 'one'. Our staff love the easy to use layout, our customers love the reminder system, and as an owner I love the organisation and reports it provides. Best business decision of 2015 for us.",
  },

  {
    person: 'Scott',
    image: '',
    company: 'Retro Moto Co',
    address: 'WA, Australia',
    text: "Thank you so much! This is a game changer! You have just saved us hours and hours each week of flicking back and forth between our books, our price file spreadsheets. Thank you!! Mechanic Desk just keeps getting better and better!"
  },

  {
    person: 'Bruce Yeung',
    image: '',
    company: 'Autoactive Car Solutions',
    address: 'NSW, Australia',
    text: "We approached MechanicDesk because their cloud base solution is uniquely designed for even the busiest workshop! MechanicDesk has helped us streamline job card and invoicing procedure and has allowed information sharing in real time. We are very pleased with the resulp and are particularly impressed with the fantastic service their support team has provided."
  },

  {
    person: 'Adam Hurle',
    image: '',
    company: 'Peter Hood Holden',
    address: 'SA, Australia',
    short_text: "I searched everywhere for a system that would suit our workshop needs and couldn't find one to suit, until I discovered MechanicDesk. It is perfect for our booking diary and the team even customised it to suit our individual needs. Any change we required to our account was implemented almost immediately and was never too much trouble for the team at MechaniDesk to do it for us.",

    text: "I searched everywhere for a system that would suit our workshop needs and couldn't find one to suit, until I discovered MechanicDesk. It is perfect for our booking diary and the team even customised it to suit our individual needs. Any change we required to our account was implemented almost immediately and was never too much trouble for the team at MechaniDesk to do it for us. They even extended our trial period while they made changes for us so we could ensure the system was right for us. A great program at a great price with excellent customer service and support."
  },

  {
    person: 'Josh Mullock',
    image: '',
    company: 'Townsvill Caravan Repair Centre',
    address: 'QLD, Australia',
    short_text: "Keeping track of our clients by their vehicles is a huge advantage for our workshop...I came across MechanicDesk while searching the internet one night and took advantage of the 30 day trial. I contacted the developer to enquire about custom changes to invoices and nothing was an issue. We spend the money and changed to Xero to make our accounting compatible with MechanicDesk and would never look back.",

    text: "Keeping track of our clients by their vehicles is a huge advantage for our workshop. We originally used another accounting software with an extension that was quite difficult to navigate and thousands in costs. I came across MechanicDesk while searching the internet one night and took advantage of the 30 day trial. I contacted the developer to enquire about custom changes to invoices and nothing was an issue. We spend the money and changed to Xero to make our accounting compatible with MechanicDesk and would never look back. The support from this software is second to none and I give my highest recommendations on using this application to anyone interested in managing their workshop the easy way. 10/10 from Townsville Caravan Repair Centre"
  },


  {
    person: 'Dominic Sullivan',
    image: '',
    company: 'Protech Motorcycle',
    address: 'NSW, Australia',
    text: "Guys - a very big thank-you for this software. We have tried many solutions both on-line & off, and finally, we have found you. After 27 odd years in the industry, this is the best we have seen yet. It doesn't stop at just being a superb solution for us, and help us to make more money by simplifying the job of invoicing etc, it's your attitude to suggestions, the speed in which you implement them, and the overall support you offer, in such a timely and professional fashion. Again, THANK YOU. This is a lot better than many far more expensive platforms."
  },

  {
    person: 'Luan',
    image: '',
    company: 'Evans Tyres and Servicing',
    address: 'TAS, Australia',
    text: "Just to let you know, this is the 3rd workshop software that I have looked at and this is by far the best. I love the way that the information from Xero flows into Mechanic Desk and your Diary is brilliant – nice and clear. Thanks again for putting a great system on the market. I shall be recommending it to everyone."
  },

  {
    person: 'Monique Clow',
    image: '',
    company: 'Truck Alignment Services',
    address: 'Christchurch, New Zealand',
    short_text: "We needed to switch to Mechanic Desk in a hurry as our other system could not keep pace with Xero. Vinh and the team were great. I had a lot of questions and wanted a specific invoice format. They were able to address my questions with patience and design the invoice template we required. Together we looked at how we could best bring the data over from our current system and this was done very quickly",

    text: "We needed to switch to Mechanic Desk in a hurry as our other system could not keep pace with Xero. Vinh and the team were great. I had a lot of questions and wanted a specific invoice format. They were able to address my questions with patience and design the invoice template we required. Together we looked at how we could best bring the data over from our current system and this was done very quickly. Like anything new we have had to learn what works best for us but I can see that we will be able to add value to our business by utilising the reports and other features offered by Mechanic Desk. Oh, they are cheaper than our previous system too and have an actual 0800 number to get hold of real people. Thanks Mechanic Desk."
  },

  {
    person: 'Sue Turpin',
    image: '',
    company: 'Numech',
    address: 'WA, Australia',
    text: "We have been using MechanicDesk since July 2015. Initial set up was hampered due to the inadequate reports of our previous software however Vinh was helpful in getting us up and running. Being a cloud system makes it easy for us to run our business from wherever we are. The integration with Xero has been easy. Like all software there are things we would like to see done a little bit differently and MechanicDesk have been most helpful with tailoring the program to meet our needs as well as regular program updates and improvements. Happy Customer"
  },

  {
    person: 'Mark Edmondson',
    image: '',
    company: 'Xoticar',
    address: 'WA, Australia',
    text: "Just a quick email to express my appreciation for your support and training of Mechanics Desk software, Our company has tried several different software packages on offer from various providers before trying Mechanics Desk. We are extremely pleased with Mechanics Desk as unlike the competitors we have found the support and backup is second to none, your willingness to make modifications to suit our business is very appreciated, We look forward to our continued business relationship."
  },

  {
    person: 'Todd Dunick',
    image: '',
    company: 'Worksmarter',
    address: 'New Zealand',
    short_text: "We have had experience using 3 Workshop management Add-Ons and after trying and testing MechanicDesk for us it ticks all the boxes. MechanicDesk integrates strongly with Xero and integrates really well with inventory. From an end user point of view the automotive industry has been crying out for a simple to use yet powerful system.",
    text: "We have had experience using 3 Workshop management Add-Ons and after trying and testing MechanicDesk for us it ticks all the boxes. MechanicDesk integrates strongly with Xero and integrates really well with inventory. From an end user point of view the automotive industry has been crying out for a simple to use yet powerful system. The other systems user interfaces are complicated for the average mechanic yet MechanicDesk has produced a really easy to use system that makes training an uncomplicated process. We highly recommend this application on functionality, price point and developer responsiveness and will be confidently pushing clients within the automotive industry towards it."
  },

  {
    person: 'Franck and Mark Donniaux',
    image: '',
    company: 'Gosford European Car Services',
    address: 'NSW, Australia',
    short_text: "Since the very beginning of signing up with MechanicDesk, the team behind this software has been absolutely brilliant! From taking our suggestions, to customizing our invoices, to general support, they’ve been nothing but the best!.... The value for money you get with MechanicDesk is second to none. I cannot recommend not only this software, but also the team highly enough!",

    text: "Since the very beginning of signing up with MechanicDesk, the team behind this software has been absolutely brilliant! From taking our suggestions, to customizing our invoices, to general support, they’ve been nothing but the best! We signed up for the yearly plan, which not only is about 90% cheaper than the leading competitors, but the software is also BETTER than that of the leading competitors (which I’ve been using for the past 10 years). The value for money you get with MechanicDesk is second to none. I cannot recommend not only this software, but also the team highly enough!"
  },


  {
    person: 'Byron',
    image: '',
    company: 'Autopro Whangarei',
    address: 'New Zealand',
    short_text: "This software is mint it doesn't need someone to sell it, it sells itself! I tried 8 other programs & nothing is as good as this. Mechanic Desk is great how you can attach pictures to jobs, which is informative for the customer & great for vehicle history. Whenever I have a question or suggestion for Mechanic Desk it is never too much trouble for them, they not only respond quickly but also implement changes right away.",

    text: "I approached Mechanic Desk for a free trial and I loved it. They didn't hound me like some other software company's telling you how good their software is. (I don't like pushy sales people) This software is mint it doesn't need someone to sell it, it sells itself! I tried 8 other programs & nothing is as good as this. Mechanic Desk is great how you can attach pictures to jobs, which is informative for the customer & great for vehicle history. Whenever I have a question or suggestion for Mechanic Desk it is never too much trouble for them, they not only respond quickly but also implement changes right away. I would recommend Mechanic Desk to anyone who are serious about professional software & friendly service."
  },


  {
    person: 'Suzi McClure',
    image: '',
    company: "McClure's Vehicle Maintenance",
    address: 'NSW, Australia',
    short_text: "I constantly invoice and receipt people through-out the day, I need to be able to do this fast and efficiently and I can with MechanicDesk",
    text: "I constantly invoice and receipt people through-out the day, I need to be able to do this fast and efficiently and I can with MechanicDesk"
  },


  {
    person: 'Nigel',
    image: '',
    company: "Aussie Tune Dandenong",
    address: 'VIC, Australia',
    short_text: "For me MechanicDesk has made life much easier, from being able to check and take bookings from my smart phone, easily able to customise invoice and job descriptions. I particular like how quickly I can make an invoice and assign parts where appropriate. MechanicDesk has been well thought and was very easy to make the change without having to take weeks to learn a new system.",

    text: "I have used many different invoicing systems over the past nine years looking for one that makes life easy in all area's of the day not just a few. For me MechanicDesk has made life much easier, from being able to check and take bookings from my smart phone, easily able to customise invoice and job descriptions. I particular like how quickly I can make an invoice and assign parts where appropriate. MechanicDesk has been well thought and was very easy to make the change without having to take weeks to learn a new system. Compared to other system I have used, MechanicDesk is fantastic value for money. Keep up the great work."
  },

  {
    person: 'Melissa',
    image: '',
    company: "Caravan Stuff",
    address: 'QLD, Australia',
    text: "MechanicDesk has provided us with all of the tools to help run the admin of our repair shop. The support team were happy to customize the software to support our own individual requirements and any questions we had were answered very quickly. We find the software very user friendly and very convenient to be able to access it on different computers at any time."
  },

  {
    person: 'Hazel',
    image: '',
    company: "Perth European Prestige Auto Service",
    address: 'WA, Australia',
    text: "Hello MechanicDesk, We are so glad to have found you guys and get this software on board for our new branch that specialise in European Cars in Perth. It was very easy to use and the team has been very helpful and accommodating to our needs and our accountant needs. The cost of having your software blow me and my accountant away. Low cost but valuable and useful. We will gladly recommend your company many times over."
  },

  {
    person: 'Herbert Donovan',
    image: '',
    company: "Fuel Performance Cycling",
    address: 'VIC, Australia',
    text: "We have been using Mechanics Desk for our busy bicycle service workshop now for over 6 months and have extremely impressed! Love the layout, easy to read formats and ease of data entry. Whenever we've needed advise or help Mechanics desk tech support has always been outstanding - fast response every time. It has made an incredible improvement to the entire efficiency of our service and retail departments."
  },

  {
    person: 'Sara McIntosh',
    image: '',
    company: "Mackay Mechanical and Diesel",
    address: 'QLD, Australia',
    text: "Mechanic Desk is simple to use, incorporates everything we need to operate smoothly and as a bonus is very affordable. If we have any questions or problems, the Mechanic Desk team offer fantastic prompt support every time. We have only had positive experiences with Mechanic Desk and cannot fault it."
  },

  {

    person: 'Nick Burland',
    image: '',
    company: "Nota Motors",
    address: 'Australia',
    text: "MechanicDesk software has streamlined both our workshop and accounts process. Being able to create jobs and then easily prepare and email invoices means our accounts are always current and having the service history always available keeps professional with our clients."
  },

  {
    person: "Barry O'Connell",
    image: '',
    company: "A1 Exhausts & Mechanical",
    address: 'Australia',
    text: "We have been using MechanicDesk since March 2015, After Spending Thousands on many other systems we have found MechaniDesk so easy to use, The workshop owner is 76 years old, So to get him to go from hand writing invoices,To a computer is not easy. It has been a long road to find a easy but informative invoicing program, best of all the team at MechanicDesk is very helpful, if there is something that we require, MechanicDesk team will do their best to add it."
  },

  {
    person: "Mark Beamiss",
    image: '',
    company: "New Market Care",
    address: 'Australia',
    short_text: "MechanicDesk has changed our business for the better. It has dragged us into the 21st century and interfaces easily with myob. I had it set up and running in less than 12hrs... We are now able to text our customers when the job is complete, the system automatically sends a text reminder to the customer the day before their vehicle is booked in, we are able to send text service reminders easily, customer and vehicle records are very easy to find and we are able to extract information easily to market to our customers.",
    text: "MechanicDesk has changed our business for the better. It has dragged us into the 21st century and interfaces easily with myob. I had it set up and running in less than 12hrs. Shortly after running with MechanicDesk it highlighted that we have been undercharging labour. We are now able to text our customers when the job is complete, the system automatically sends a text reminder to the customer the day before their vehicle is booked in, we are able to send text service reminders easily, customer and vehicle records are very easy to find and we are able to extract information easily to market to our customers. If you are looking for a system to give you more control over your business I highly recommend MechanicDesk."
  },

  {
    person: 'Stefano',
    image: '',
    company: 'Sunshine Road Motors',
    address: 'VIC, Australia',
    text: 'MechanicDesk has everything I need to run my workshop. I can easily look up a vechicle service history. My customers appriciate it when I send them their vehicle service reminder'
  },

  {
    person: 'Cuong',
    image: '',
    company: 'Autoteck Mechanical & Electrical Repairs',
    address: 'VIC, Australia',
    text: "MechanicDesk has everything I need to run my workshop. I can easily look up a vechicle service history. My customers appriciate it when I send them their vehicle service reminder",
  },

  {
    person: 'Mayur',
    image: '',
    company: 'Alright LPG & Mechanical',
    address: 'VIC, Australia',
    text: "The MechanicDesk team took my suggested improvements seriously and acted upon them promptly. New features are released on a weekly basis, I'm very impressed!",
  },

  {
    person: 'Shane Conlan',
    image: '',
    company: 'Sonter Automotive',
    address: 'Christchurch, New Zealand',
    text: "Our workshop has expanded over the last few years and we simply would not have coped if we did not change to MD when we did. The program is user friendly and intuitive. I am constantly finding additions that make our life easy and the staff provide back up service that is second to none!. MD is not the only reason that our business is successful, but it is certainly one of the major reasons! Many thanks",
  },

  {
    person: 'Dhruv Velani',
    image: '',
    company: 'Advanced Mobile Tune',
    address: 'Australia',
    text: "I am really impressed with the support MechanicDesk provide and their willingness to help, it’s very rare these days. We get very quick replies through their email, website chat and Facebook page. Being a new user, we relied a lot on their support team from data import to showing us around the software, the online step by step training videos also reduced the load for me training the staff. The mobile app doesn’t only assist with taking pictures and much more but also very useful if you running a mobile mechanic business on the side.",
  },
];
