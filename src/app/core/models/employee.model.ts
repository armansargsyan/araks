import { SalaryTypeEnum } from "../enums/salary-type.enum";

export class Employee {
  private daysOfMonth = 15;
  private taxPercent = 23;

  public totalAmount = 0;
  public totalTax = 0;
  public amount = 0;

  constructor(
    private name: string,
    private salaryType: SalaryTypeEnum,
    private sickDays: number,
    private rate?: number,
  ) {
    this.getTotalAmount();
  }

  getTotalAmount(): void {
    switch (this.salaryType){
      case SalaryTypeEnum.CAR_AND_SHOPS:
      {
        this.totalAmount = 200000 - 200000 / this.daysOfMonth * this.sickDays;
      }
      break;
      case SalaryTypeEnum.CAR_OR_SHOPS:
      {
        this.totalAmount = (this.rate * 2 / 100) + (90000 - 90000 / this.daysOfMonth * this.sickDays)
      }
      break;
      case SalaryTypeEnum.NO_ONE:
        this.totalAmount = this.rate * 5 / 100
    }
    this.totalTax = Math.ceil(this.totalAmount * 23 / 100);
    this.amount = Math.ceil(this.totalAmount - this.totalTax);
  }

}
