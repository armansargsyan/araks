import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { SalaryTypeEnum } from "../enums/salary-type.enum";
import { getDaysCount, getRandomPrices } from "../helpers/helper.functions";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  generateData() {
    return [
      {
        type: 'Կազմակերպությունը տրամադրում է ավտոմեքենա և խանութների ցանկ',
        employees: [
          new Employee('Աշխատող 1', SalaryTypeEnum.CAR_AND_SHOPS, getDaysCount()),
          new Employee('Աշխատող 2', SalaryTypeEnum.CAR_AND_SHOPS, getDaysCount()),
          new Employee('Աշխատող 3', SalaryTypeEnum.CAR_AND_SHOPS, getDaysCount()),
          new Employee('Աշխատող 4', SalaryTypeEnum.CAR_AND_SHOPS, getDaysCount()),
          new Employee('Աշխատող 5', SalaryTypeEnum.CAR_AND_SHOPS, getDaysCount()),
        ]
      },
      {
        type: 'Կազմակերպությունը տրամադրում է, կամ ավտոմեքենա, կամ խանութների ցանկ',
        employees: [
          new Employee('Աշխատող 6', SalaryTypeEnum.CAR_OR_SHOPS, getDaysCount(), getRandomPrices()),
          new Employee('Աշխատող 7', SalaryTypeEnum.CAR_OR_SHOPS, getDaysCount(), getRandomPrices()),
          new Employee('Աշխատող 8', SalaryTypeEnum.CAR_OR_SHOPS, getDaysCount(), getRandomPrices()),
          new Employee('Աշխատող 9', SalaryTypeEnum.CAR_OR_SHOPS, getDaysCount(), getRandomPrices()),
          new Employee('Աշխատող 10', SalaryTypeEnum.CAR_OR_SHOPS, getDaysCount(), getRandomPrices()),
        ]
      },
      {
        type: 'Կազմակերպությունը ի տրամադրում, ոչ ավտոմեքենա, ոչ խանութների ցանկ',
        employees: [
          new Employee('Աշխատող 11', SalaryTypeEnum.NO_ONE, getDaysCount(), getRandomPrices()),
          new Employee('Աշխատող 12', SalaryTypeEnum.NO_ONE, getDaysCount(), getRandomPrices()),
          new Employee('Աշխատող 13', SalaryTypeEnum.NO_ONE, getDaysCount(), getRandomPrices()),
          new Employee('Աշխատող 14', SalaryTypeEnum.NO_ONE, getDaysCount(), getRandomPrices()),
          new Employee('Աշխատող 15', SalaryTypeEnum.NO_ONE, getDaysCount(), getRandomPrices()),
        ]
      }]
  }

}
