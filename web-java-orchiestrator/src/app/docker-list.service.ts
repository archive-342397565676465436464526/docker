import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {ContainerInfoDto} from "./ContainerInfoDto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {DockerDetails} from "./dto/docker/details/DockerDetails";
import {MessageInfoService} from "./message-info.service";
import {HandleErrorService} from "./handle-error.service";


@Injectable({
  providedIn: 'root'
})
export class DockerListService {
  private apiUrl = 'http://localhost:8085/api/container/list';
  private detailsUrl = 'http://localhost:8085/api/container/';

  constructor(private http: HttpClient,
              private messageInfoService: MessageInfoService,
              private handleErrorService: HandleErrorService
  ) {
  }

  getContainerInfoDto(): Observable<ContainerInfoDto[]> {
    return this.http.get<ContainerInfoDto[]>(this.apiUrl);
  }

  getContainerDetails(id: string): Observable<DockerDetails> {
    const url = `${this.detailsUrl}/${id}`;
    return this.http.get<DockerDetails>(url)
      .pipe(
        tap(_ => this.messageInfoService.log(`fetched hero id=${id} `)),
        catchError(this.handleErrorService.handleError<DockerDetails>(`getHero id=${id}`))
      );
  }

  deteleContainer(dockerDetails: DockerDetails): Observable<DockerDetails> {
    let id = dockerDetails.Id;
    let url = `${this.detailsUrl}/${id}`;

    return this.http.delete<DockerDetails>(url).pipe(
      tap(_ => this.messageInfoService.log(`deleted container id=${id}`)),
      catchError(this.handleErrorService.handleError<DockerDetails>('deleteContainer'))
    );
  }

  stopContainer(dockerDetails: DockerDetails): Observable<any> {
    let id = dockerDetails.Id;
    let url = `${this.detailsUrl}/${id}`;

    return this.http.put(url, dockerDetails).pipe(
      tap(_ => this.messageInfoService.log(`stop container id=${id}`)),
      catchError(this.handleErrorService.handleError<DockerDetails>('stopContainer'))
    );
  }

}

