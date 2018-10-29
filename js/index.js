$(document).on('click', '.md-national-btn', function() {
  $('.md-national-btn.active').removeClass('active');
  $(this).addClass('active');

  const nation = $(this).data('nation');
  const data = PLANS[nation];

  ['starter', 'small', 'team', 'large'].forEach(function(plan) {
    $('.md-plan-' + plan).find('.md-plan-cost').text(data[plan].cost);
    $('.md-plan-' + plan).find('.md-cost-per-extra-user').text(data[plan].costPerExtraUser);
    $('.md-plan-' + plan).find('.md-cost-per-sms').text(data[plan].costPerSms);
  });
});

const PLANS = {
  australia: {
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