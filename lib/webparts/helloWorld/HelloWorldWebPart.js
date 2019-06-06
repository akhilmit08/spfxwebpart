var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField, PropertyPaneCheckbox, PropertyPaneDropdown, PropertyPaneToggle } from '@microsoft/sp-webpart-base';
import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';
import MockHttpClient from './MockHttpClient';
import { SPHttpClient } from '@microsoft/sp-http';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
var HelloWorldWebPart = (function (_super) {
    __extends(HelloWorldWebPart, _super);
    function HelloWorldWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorldWebPart.prototype._getMockListData = function () {
        return MockHttpClient.get()
            .then(function (data) {
            var listData = { value: data };
            return listData;
        });
    };
    HelloWorldWebPart.prototype._getListData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists?$filter=Hidden eq false", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    HelloWorldWebPart.prototype._renderList = function (items) {
        var html = '';
        items.forEach(function (item) {
            html += "\n    <ul class=\"" + styles.list + "\">\n      <li class=\"" + styles.listItem + "\">\n        <span class=\"ms-font-l\">" + item.Title + "</span>\n      </li>\n    </ul>";
        });
        var listContainer = this.domElement.querySelector('#spListContainer');
        listContainer.innerHTML = html;
    };
    HelloWorldWebPart.prototype._renderListAsync = function () {
        var _this = this;
        // Local environment
        if (Environment.type === EnvironmentType.Local) {
            this._getMockListData().then(function (response) {
                _this._renderList(response.value);
            });
        }
        else if (Environment.type == EnvironmentType.SharePoint ||
            Environment.type == EnvironmentType.ClassicSharePoint) {
            this._getListData()
                .then(function (response) {
                _this._renderList(response.value);
            });
        }
    };
    HelloWorldWebPart.prototype.render = function () {
        /*
        this.domElement.innerHTML = `
          <div class="${ styles.helloWorld }">
            <div class="${ styles.container }">
              <div class="${ styles.row }">
                <div class="${ styles.column }">
                  <span class="${ styles.title }">Welcome to SharePoint! Welcome to SPFX!</span>
                  <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
                  <p class="${ styles.description }">${escape(this.properties.description)}</p>
                  <p class="${ styles.description }">${escape(this.properties.test)}</p>
                  <p class="${ styles.description }">Loading from ${escape(this.context.pageContext.web.title)}</p>
                  <a href="https://aka.ms/spfx" class="${ styles.button }">
                    <span class="${ styles.label }">Learn more</span>
                  </a>
                </div>
              </div>
              <div id="spListContainer" />
            </div>
          </div>`;
          this._renderListAsync(); */
        this.domElement.innerHTML = "\n<div class=\"" + styles.container + "\">\n<div id=\"spListContainer\"/>\n</div>\n";
        this._renderListDataAsync();
    };
    HelloWorldWebPart.prototype._getListCustomerData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl +
            "/_api/web/lists/GetByTitle('Customers')/Items", SPHttpClient.configurations.v1).
            then(function (responseListCustomer) {
            return responseListCustomer.json();
        });
    };
    HelloWorldWebPart.prototype._renderListCustomer = function (items) {
        var html = "<table width='100%' border=1>";
        html += "<thead><th>ID</th><th>Name</th><th>Address</th><th>Type</th><th>Author</th>\n<th>Lookup</th>" +
            "</thead><tbody>";
        items.forEach(function (item) {
            html += "<tr><td>" + item.CustomerID + "</td>\n<td>" + item.CustomerName + "</td>\n<td>" + item.CustomerAddress + "</td>\n<td>" + item.CustomerType + "</td>\n</tr>";
        });
        html += "</tbody></table>";
        var listContainer = this.domElement.querySelector("#spListContainer");
        listContainer.innerHTML = html;
    };
    HelloWorldWebPart.prototype._renderListDataAsync = function () {
        var _this = this;
        this._getListCustomerData().then(function (response) {
            _this._renderListCustomer(response.value);
        });
    };
    Object.defineProperty(HelloWorldWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                }),
                                PropertyPaneTextField('test', {
                                    label: 'Multi-line Text Field',
                                    multiline: true
                                }),
                                PropertyPaneCheckbox('test1', {
                                    text: 'Checkbox'
                                }),
                                PropertyPaneDropdown('test2', {
                                    label: 'Dropdown',
                                    options: [
                                        { key: '1', text: 'One' },
                                        { key: '2', text: 'Two' },
                                        { key: '3', text: 'Three' },
                                        { key: '4', text: 'Four' }
                                    ]
                                }),
                                PropertyPaneToggle('test3', {
                                    label: 'Toggle',
                                    onText: 'On',
                                    offText: 'Off'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HelloWorldWebPart;
}(BaseClientSideWebPart));
export default HelloWorldWebPart;
//# sourceMappingURL=HelloWorldWebPart.js.map