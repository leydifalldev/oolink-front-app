import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class DataService {
    private mockData: any[] = [
      {
        label: "data1",
        value: 1,
      },
      {
        label: "data2",
        value: 2,
      }
    ];

    private dataSubject = new BehaviorSubject<any[]>(this.mockData);
    
    $data = this.dataSubject.asObservable();

    addData(newData: any) {
        this.mockData.push(newData);
        this.dataSubject.next(this.mockData);
    }
}