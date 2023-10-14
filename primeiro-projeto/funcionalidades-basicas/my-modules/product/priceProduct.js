var PriceProduct = function(DescrProd,CodProd,CostProd,PercentGainProd) 
{   
    var PriceProd;
    PriceProd = CostProd * (1+PercentGainProd);
    return "O preço de devenda desse produto "+CodProd+" "+DescrProd+" é: "+PriceProd;
};

module.exports = PriceProduct;