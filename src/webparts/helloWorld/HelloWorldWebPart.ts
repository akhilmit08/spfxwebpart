import { Version } from '@microsoft/sp-core-library';
import {
BaseClientSideWebPart,
IPropertyPaneConfiguration,
PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './GetListItemsWebPart.module.scss';
import * as strings from 'GetListItemsWebPartStrings';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import pnp from "sp-pnp-js";
export interface IGetListItemsWebPartProps {
description: string;
}
export interface ISPListCustomers{
value:ISPListCustomerItem[];
}
export interface ISPListCustomerItem{
Title:string;
CustomerID:string;
CustomerName:string;
CustomerAddress:string;
CustomerType:string;
Author:{
Title:string;
}
LookupColumn:{
Title:string;
}
}
export default class GetListItemsWebPart extends BaseClientSideWebPart<IGetListItemsWebPartProps> {
public render(): void {
this.domElement.innerHTML = `
<div class="${ styles.container }">
<div id="spListContainer"/>
</div>
`;
this._renderListDataAsync();
}
// Rest API Method
private _getListCustomerData():Promise<ISPListCustomers>
{
return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl+
`/_api/web/lists/GetByTitle('Customers')/Items`,SPHttpClient.configurations.v1).
then((responseListCustomer:SPHttpClientResponse)=>{
debugger;
return responseListCustomer.json();
SPFX GET List Items

return responseListCustomer.json();
});
}
private _getListCustomerPnp():Promise<ISPListCustomerItem[]>
{
return pnp.sp.web.lists.getByTitle(`Customers`).items.
filter("LookupColumn/Title eq 'Lookup V1' ").top(3).orderBy("Title").select("Title","CustomerID",
"CustomerName","CustomerAddress","CustomerType","Author/Id","Author/Title",
"LookupColumn/Title").expand
("Author","LookupColumn").get().then
(
(response:any[])=>{
return response;
});
}
private _renderListCustomer(items:ISPListCustomerItem[]):void
{
let html:string=`<table width='100%' border=1>`;
html+=`<thead><th>ID</th><th>Name</th><th>Address</th><th>Type</th><th>Author</th>
<th>Lookup</th>`+
`</thead><tbody>`;
debugger;
items.forEach((item:ISPListCustomerItem)=>
{
html+= `<tr><td>${item.CustomerID}</td>
<td>${item.CustomerName}</td>
<td>${item.CustomerAddress}</td>
<td>${item.CustomerType}</td>
<td>${item.Author.Title}</td>
<td>${item.LookupColumn.Title}</td>
</tr>`;
});
html+=`</tbody></table>`;
const listContainer:Element=this.domElement.querySelector("#spListContainer");
listContainer.innerHTML=html;
}
private _renderListDataAsync():void
{
this._getListCustomerPnp().then((response)=>
{
debugger;
this._renderListCustomer(response);
});
}
protected get dataVersion(): Version {
return Version.parse('1.0');
}
protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
return {
pages: [
{
header: {
description: strings.PropertyPaneDescription
},
groups: [
{
groupName: strings.BasicGroupName,
PowerApps Page 2
groupName: strings.BasicGroupName,
groupFields: [
PropertyPaneTextField('description', {
label: strings.DescriptionFieldLabel
})
]
}
]
}
]
};
}
}
