const formatCurrency = (amount, locale = 'en-US', currency = 'USD') => 
    new Intl.NumberFormat(locale, { 
      style: 'currency', 
      currency 
    }).format(amount); 