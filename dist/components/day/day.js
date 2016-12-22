"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require('../base');
var components_1 = require('../components');
var forms_1 = require("@angular/forms");
var DayComponent = (function (_super) {
    __extends(DayComponent, _super);
    function DayComponent() {
        _super.apply(this, arguments);
    }
    return DayComponent;
}(base_1.BaseComponent));
exports.DayComponent = DayComponent;
var DayElement = (function (_super) {
    __extends(DayElement, _super);
    function DayElement() {
        _super.apply(this, arguments);
        this.months = [];
        this.date = { day: '', month: '', year: '' };
        this.dayForm = new forms_1.FormGroup({
            day: new forms_1.FormControl(),
            month: new forms_1.FormControl(),
            year: new forms_1.FormControl()
        });
    }
    DayElement.prototype.ngOnInit = function () {
        this.months = [this.component.settings.fields.month.placeholder, 'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        if (this.component.data[this.component.settings.key] != null) {
            this.date['day'] = this.component.data[this.component.settings.key].split('/')[0];
            this.date['year'] = this.component.data[this.component.settings.key].split('/')[2];
            if (this.component.data[this.component.settings.key].split('/')[1] < 10) {
                this.date['month'] = this.component.data[this.component.settings.key].split('/')[1][1];
            }
            else {
                this.date['month'] = this.component.data[this.component.settings.key].split('/')[1];
            }
        }
    };
    DayElement.prototype.getDay = function (day) {
        if (isNaN(day)) {
            day = '';
        }
        if (day.length > 2) {
            day = day.substring(0, 2);
        }
        if (parseInt(day) < 1 || parseInt(day) > 31) {
            day = day.substring(0, 1);
        }
        this.date['day'] = day;
        this.updateModel();
    };
    DayElement.prototype.getMonth = function (month) {
        this.date['month'] = month;
        this.updateModel();
    };
    DayElement.prototype.getYear = function (year) {
        if (isNaN(year)) {
            year = '';
        }
        if (year.length > 4) {
            year = year.substring(0, 4);
        }
        if (parseInt(year) < 0 || parseInt(year) > 2100) {
            year = year.substring(0, 3);
        }
        this.date['year'] = year;
        this.updateModel();
    };
    DayElement.prototype.updateModel = function () {
        var day = this.date['day'];
        var month = this.date['month'];
        var year = this.date['year'];
        if (day == '') {
            day = '00';
        }
        else if (day.length < 2) {
            day = '0' + day;
        }
        if (month == '') {
            month = '00';
        }
        else if (month.length < 2) {
            month = '0' + month;
        }
        if (year == '') {
            year = '0000';
        }
        else if (year.length == 3) {
            year = '0' + year;
        }
        else if (year.length == 2) {
            year = '00' + year;
        }
        else if (year.length == 1) {
            year = '000' + year;
        }
        this.component.setValue(day + '/' + month + '/' + year);
    };
    return DayElement;
}(base_1.BaseElement));
exports.DayElement = DayElement;
function DayField(template) {
    components_1.FormioComponents.register('day', DayComponent, DayElement, template.components.day);
    return DayElement;
}
exports.DayField = DayField;
