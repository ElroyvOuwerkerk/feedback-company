try{
    var ec = 'Links',
        ea = '',
        el = '{{Click URL}}',
        eni = 0,
        sc = /twitter|facebook|instagram|linkedin/.test(el);
        alert(sc);
    if (el.indexOf('mailto:') > -1){
        ea = 'Mailto links';
    } else if (el.indexOf('tel:') > -1){
        ea = 'Tel links';
    } else if (sc === 1){
        ec = 'Social Media';
        ea = 'Social click';
    } else if (el.indexOf('beheer.feedbackcompany.com') > -1){
        ec = 'Login';
        ea = 'Click on Login';
        el = '{{Page URL}}';
    } 
    else {
        ea = 'External links';
    }
    dataLayer.push({
        "event" : "fbcEvent",
        "eventCategory" : ec,
        "eventAction" : ea,
        "eventLabel" : el,
        "eventNonInteraction" : eni
       });
} catch(err){
    dataLayer.push({
        "event" : "fbcEvent",
        "eventCategory" : 'javascriptErrors',
        "eventAction": "{{Error Message}}",
        "eventLabel": "{{Error Line}} : {{Error URL}}",
        "non-interact": 1
       });
}