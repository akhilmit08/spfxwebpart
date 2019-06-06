# spfxwebpart
Get Items from SP List items using rest API and PNP libraries and deployed to Azure:

private _getListCustomerData():Promise<ISPListCustomers>
{
return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl+
`/_api/web/lists/GetByTitle('Customers')/Items`,SPHttpClient.configurations.v1).
then((responseListCustomer:SPHttpClientResponse)=>{

return responseListCustomer.json();
});
}

In order to Deployment :

gulp bundle --ship
gulp bundle--ship

In Order to Create new SPFX project:

yo @microsoft/sharepoint
gulp serve
