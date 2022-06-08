var params=context.getVariable('message.querystring');
// print("BrandsCode : " + params.split('&') );
print("Params Are:::: "+ params);
//print("QueryParams Are:::: "+ queryParams);
print("SecondCode is :"+ context.getVariable('secondCode'));
print("BrandsCode : " + context.getVariable('dbncode'));
// print("BrandsCode : " + context.proxyRequest.queryParams['brandsCode'][0]);