import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Project } from '../../shared/model/project';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class ProjectService {

  constructor(private http: Http) { }

  private _projectURL = '../../../assets/projects.json';

  public getProjects(): Observable<any> {
      return this.http.get(this._projectURL)
      .map((response: Response) => {
          return <any>response.json();
        }).catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
}
}
