var PriceProduct = function(DescrProd,CodProd,CostProd,PercentGainProd) 
{   
    var PriceProd;
    PriceProd = CostProd * (1+PercentGainProd);
    return "<b>O preço de devenda desse produto</b> "+CodProd+" "+DescrProd+" é: "+PriceProd;
};

module.exports = PriceProduct;