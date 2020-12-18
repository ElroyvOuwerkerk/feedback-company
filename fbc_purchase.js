var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
  
  //var query_string = window.location.search.split('?')[1].split('&');
  var transaction_id = getUrlParameter('transaction_id'), //
      product_id = getUrlParameter('prn'), // 
      product_name = getUrlParameter('prt'), //
      product_value = getUrlParameter('prp'); //
  
  dataLayer.push({
    'event':'fbcEvent',
    'eventCategory' : 'eCommerce',
    'eventAction' : 'request',
    'ecommerce': {
        'purchase': {
            'actionField': {
                'id': transaction_id, // Transaction ID. Use the userId. Example: 1433708
                'affiliation': 'Feedback Company',
                'revenue': product_value, // Total transaction value
                'tax': 0,
                'shipping': 0
            },
            'products': [{
                'name': product_name,   //Example: Free ,Paid
                'id': product_id,     //Example: N, P1a, P3a, P6a
                'price': product_value, //Price of the product
                'brand': 'Feedback Company',
                'category': 'Requests',
                'quantity': 1
            }]
        }
    }
});