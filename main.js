(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tatev\Desktop\Vahagn Diplomayin\poxancvox vardzavcharneri avtomatacvats hamakarg\diplom\src\main.ts */"zUnb");


/***/ }),

/***/ "2tG/":
/*!***********************************************!*\
  !*** ./src/app/core/services/core.service.ts ***!
  \***********************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_employee_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/employee.model */ "5oFn");
/* harmony import */ var _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/salary-type.enum */ "qIIy");
/* harmony import */ var _helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/helper.functions */ "wSNu");





class CoreService {
    generateData() {
        return [
            {
                type: 'Կազմակերպությունը տրամադրում է ավտոմեքենա և խանութների ցանկ',
                employees: [
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 1', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].CAR_AND_SHOPS, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])()),
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 2', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].CAR_AND_SHOPS, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])()),
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 3', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].CAR_AND_SHOPS, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])()),
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 4', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].CAR_AND_SHOPS, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])()),
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 5', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].CAR_AND_SHOPS, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])()),
                ]
            },
            {
                type: 'Կազմակերպությունը տրամադրում է, կամ ավտոմեքենա, կամ խանութների ցանկ',
                employees: [
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 6', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].CAR_OR_SHOPS, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])(), Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getRandomPrices"])()),
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 7', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].CAR_OR_SHOPS, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])(), Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getRandomPrices"])()),
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 8', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].CAR_OR_SHOPS, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])(), Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getRandomPrices"])()),
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 9', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].CAR_OR_SHOPS, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])(), Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getRandomPrices"])()),
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 10', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].CAR_OR_SHOPS, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])(), Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getRandomPrices"])()),
                ]
            },
            {
                type: 'Կազմակերպությունը ի տրամադրում, ոչ ավտոմեքենա, ոչ խանութների ցանկ',
                employees: [
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 11', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].NO_ONE, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])(), Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getRandomPrices"])()),
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 12', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].NO_ONE, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])(), Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getRandomPrices"])()),
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 13', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].NO_ONE, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])(), Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getRandomPrices"])()),
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 14', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].NO_ONE, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])(), Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getRandomPrices"])()),
                    new _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]('Աշխատող 15', _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_2__["SalaryTypeEnum"].NO_ONE, Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getDaysCount"])(), Object(_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_3__["getRandomPrices"])()),
                ]
            }
        ];
    }
}
CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(); };
CoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "5oFn":
/*!***********************************************!*\
  !*** ./src/app/core/models/employee.model.ts ***!
  \***********************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony import */ var _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/salary-type.enum */ "qIIy");

class Employee {
    constructor(name, salaryType, sickDays, rate) {
        this.name = name;
        this.salaryType = salaryType;
        this.sickDays = sickDays;
        this.rate = rate;
        this.daysOfMonth = 15;
        this.taxPercent = 23;
        this.totalAmount = 0;
        this.totalTax = 0;
        this.amount = 0;
        this.getTotalAmount();
    }
    getTotalAmount() {
        switch (this.salaryType) {
            case _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_0__["SalaryTypeEnum"].CAR_AND_SHOPS:
                {
                    this.totalAmount = 200000 - 200000 / this.daysOfMonth * this.sickDays;
                }
                break;
            case _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_0__["SalaryTypeEnum"].CAR_OR_SHOPS:
                {
                    this.totalAmount = (this.rate * 2 / 100) + (90000 - 90000 / this.daysOfMonth * this.sickDays);
                }
                break;
            case _enums_salary_type_enum__WEBPACK_IMPORTED_MODULE_0__["SalaryTypeEnum"].NO_ONE:
                this.totalAmount = this.rate * 5 / 100;
        }
        this.totalTax = Math.ceil(this.totalAmount * 23 / 100);
        this.amount = Math.ceil(this.totalAmount - this.totalTax);
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/core.service */ "2tG/");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AppComponent_ng_container_5_div_1_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const empl_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](empl_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](empl_r4.sickDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](empl_r4.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](empl_r4.totalTax);
} }
function AppComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0531\u0576\u0578\u0582\u0576");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0532\u0561\u0581\u0561\u056F\u0561 \u0585\u0580\u0565\u0580\u056B \u0584\u0561\u0576\u0561\u056F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0544\u0561\u0584\u0578\u0582\u0580 \u0531\u0577\u056D\u0561\u057F\u0561\u057E\u0561\u0580\u0571");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0540\u0561\u0580\u056F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_ng_container_5_div_1_tr_15_Template, 9, 4, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employeeObject_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employeeObject_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", employeeObject_r2.employees);
} }
function AppComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_5_div_1_Template, 16, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.employees);
} }
class AppComponent {
    constructor(coreService) {
        this.coreService = coreService;
        this.title = 'Արաքս թռչնաֆաբրիկայի առաքիչների աշխատավարձերի ավտոմատ հաշվարկ1';
        this.employees = [];
    }
    getData() {
        this.employees = this.coreService.generateData();
    }
    newData() {
        this.employees = this.coreService.generateData();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 3, consts: [["mat-button", "", 3, "disabled", "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.getData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0532\u0565\u057C\u0576\u0565\u056C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.newData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u054E\u0565\u0580\u0561\u0570\u0561\u0577\u057E\u0561\u0580\u056F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_container_5_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !!ctx.employees.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.employees.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employees.length);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["table[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  text-align: left;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSwgdGQsIHRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _core_services_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "qIIy":
/*!************************************************!*\
  !*** ./src/app/core/enums/salary-type.enum.ts ***!
  \************************************************/
/*! exports provided: SalaryTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryTypeEnum", function() { return SalaryTypeEnum; });
var SalaryTypeEnum;
(function (SalaryTypeEnum) {
    SalaryTypeEnum[SalaryTypeEnum["CAR_AND_SHOPS"] = 0] = "CAR_AND_SHOPS";
    SalaryTypeEnum[SalaryTypeEnum["CAR_OR_SHOPS"] = 1] = "CAR_OR_SHOPS";
    SalaryTypeEnum[SalaryTypeEnum["NO_ONE"] = 2] = "NO_ONE";
})(SalaryTypeEnum || (SalaryTypeEnum = {}));


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wSNu":
/*!**************************************************!*\
  !*** ./src/app/core/helpers/helper.functions.ts ***!
  \**************************************************/
/*! exports provided: getRandomPrices, getDaysCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomPrices", function() { return getRandomPrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysCount", function() { return getDaysCount; });
function getRandomPrices() {
    return 15000000 + Math.floor(Math.random() * 18000000);
}
function getDaysCount() {
    return Math.floor(Math.random() * 5);
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map