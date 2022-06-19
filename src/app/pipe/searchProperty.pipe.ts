import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'filterByArea' })
export class FilterByAreaPipe implements PipeTransform {
  transform(areaList: any, areaname: string): any[] {
    if (!areaList || areaname == '') {
      return areaList;
    } else {
      return areaList.filter(
        //(listing: any) => listing.displayName === areaname
        (listing: any) => listing.displayName.includes(areaname)
      );
    }
  }
}
