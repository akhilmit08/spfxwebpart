export interface ISPLists {
    value: ISPList[];
}
export interface ISPList {
    Title: string;
    Id: string;
}
export interface ISPListCustomers {
    value: ISPListCustomerItem[];
}
export interface ISPListCustomerItem {
    Title: string;
    CustomerID: string;
    CustomerName: string;
    CustomerAddress: string;
    CustomerType: string;
}
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IHelloWorldWebPartProps {
    description: string;
    test: string;
    test1: boolean;
    test2: string;
    test3: boolean;
}
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
    private _getMockListData();
    private _getListData();
    private _renderList(items);
    private _renderListAsync();
    render(): void;
    private _getListCustomerData();
    private _renderListCustomer(items);
    private _renderListDataAsync();
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
