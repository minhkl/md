$(document).on('click', '.md-national-btn-wrapper .md-national-btn', function() {
  $('.md-national-btn.active').removeClass('active');
  $(this).addClass('active');

  const nation = $(this).data('nation');
  const data = PLANS[nation];

  updateDataPlanCost(data);
});

$(document).on('click', '.md-national-dropdown-option', function(e) {
  e.preventDefault();

  const nation = $(this).data('nation');
  const data = PLANS[nation];

  updateDataPlanCost(data);
});

function updateDataPlanCost(data) {
  $("#md-selected-plan").text(data.name);

  $(".md-plan-row").fadeOut(500, function() {
    ['starter', 'small', 'team', 'large'].forEach(function(plan) {
      $('.md-plan-' + plan).find('.md-plan-cost').text(data[plan].cost);
      $('.md-plan-' + plan).find('.md-cost-per-extra-user').text(data[plan].costPerExtraUser);
      $('.md-plan-' + plan).find('.md-cost-per-sms').text(data[plan].costPerSms);
    });
    $(".md-plan-row").fadeIn(500);
  });

  
}

const PLANS = {
  australia: {
    name: 'Australia',
    monthUnit: '/ month + GST',
    starter: {
      cost: '$50.00',
      costPerSms: '+ $0.10',
      costPerExtraUser: '+ $10/m',
    },
    small: {
      cost: '$70.00',
      costPerSms: '+ $0.10',
      costPerExtraUser: '+ $10/m',
    },
    team: {
      cost: '$90.00',
      costPerSms: '+ $0.10',
      costPerExtraUser: '+ $10/m',
    },
    large: {
      cost: '$150.00',
      costPerSms: '+ $0.10',
      costPerExtraUser: 'Unlimited',
    },
  },
  newZealand: {
    name: 'New Zealand',
    monthUnit: '/ month',
    starter: {
      cost: 'NZD $50.00',
      costPerSms: '+ $0.10',
      costPerExtraUser: '+ $10/m',
    },
    small: {
      cost: 'NZD $70.00',
      costPerSms: '+ $0.10',
      costPerExtraUser: '+ $10/m',
    },
    team: {
      cost: 'NZD $90.00',
      costPerSms: '+ $0.10',
      costPerExtraUser: '+ $10/m',
    },
    large: {
      cost: 'NZD $150.00',
      costPerSms: '+ $0.10',
      costPerExtraUser: 'Unlimited',
    },
  },
  unitedKingdom: {
    name: 'United Kingdom',
    monthUnit: '/ month',
    starter: {
      cost: '£30',
      costPerSms: '+ £0.05',
      costPerExtraUser: '+ £10/m',
    },
    small: {
      cost: '£45',
      costPerSms: '+ £0.05',
      costPerExtraUser: '+ £10/m',
    },
    team: {
      cost: '£60',
      costPerSms: '+ £0.05',
      costPerExtraUser: '+ £10/m',
    },
    large: {
      cost: '£100',
      costPerSms: '+ £0.05',
      costPerExtraUser: 'Unlimited',
    },
  },
  global: {
    name: 'Global',
    monthUnit: '/ month',
    starter: {
      cost: 'USD $45.00',
      costPerSms: '+ $0.10',
      costPerExtraUser: '+ $10/m',
    },
    small: {
      cost: 'USD $60.00',
      costPerSms: '+ $0.10',
      costPerExtraUser: '+ $10/m',
    },
    team: {
      cost: 'USD $85.00',
      costPerSms: '+ $0.10',
      costPerExtraUser: '+ $10/m',
    },
    large: {
      cost: 'USD $150.00',
      costPerSms: '+ $0.10',
      costPerExtraUser: 'Unlimited',
    },
  },
}