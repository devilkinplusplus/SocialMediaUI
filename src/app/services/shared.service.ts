import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _data = new BehaviorSubject<any>(null);
  public data$ = this._data.asObservable();

  setData(data: any) {
    this._data.next(data);
  }
}
