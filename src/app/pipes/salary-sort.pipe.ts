import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salarySort',
})
export class SalarySortPipe implements PipeTransform {
  transform(data: any[], order: string): any[] {
    if (!data || !order) {
      return data;
    }
    return data.sort((a, b) => {
      const salaryA = a.expected_salary;
      const salaryB = b.expected_salary;
      if (order === 'asc') {
        return salaryA - salaryB;
      } else if (order === 'desc') {
        return salaryB - salaryA;
      } else {
        return 0;
      }
    });
  }
}
