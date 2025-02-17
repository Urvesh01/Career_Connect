import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchPercentage'
})
export class MatchPercentagePipe implements PipeTransform {
  transform(formData: any, dbData: any): any[] {
    return dbData.map((data: { [x: string]: any; }) => {
      const matchCount = Object.keys(formData).reduce((count, key) => {
        return formData[key] === data[key] ? count + 1 : count;
      }, 0);
      const matchPercentage = (matchCount / Object.keys(formData).length) * 100;
      return {
        ...data,
        matchPercentage,
      };
    });
  }
}
