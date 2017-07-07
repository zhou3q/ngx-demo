import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { TreeNode } from 'primeng/primeng';
// table
import { Car } from './model/car';
@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getFiles(url: string) {
    return this.http.get(url)
      .toPromise()
      .then(res => <TreeNode[]>res.json().data);
  }
  getCarsSmall(value: string) {
    return this.http.get(value)
      .toPromise()
      .then(res => <Car[]>res.json().data)
      .then(data => { return data; });
  }
}
