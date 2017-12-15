import { privateEntriesToIndex } from '@angular/compiler-cli/src/metadata/index_writer';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IQuestionResponse } from './interfaces/question';
import { IAnswerResponse } from './interfaces/answer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

	constructor(private http: HttpClient) { }

	// API: Get /quetions
	public getAllQuestions(): Observable<IQuestionResponse[]> {
		return this.http
			.get(API_URL + '/questions')
			.map(response => {
				console.log(response)
				return response;
			})
			.catch(this.handleError);
		}
	// API: POST /answer
	public submitAnswer(answer: any): Observable<any> {
		return this.http.post(API_URL + '/answer', answer).map( response => {
			return response;
		})
		.catch(this.handleError);
	}

	// API GET /questions/:id
	public getQuestionById(questionId: number): Observable<IQuestionResponse> {
		return this.http.get(API_URL+'/questions/'+questionId).map( response => {
			return <IQuestionResponse>(response)
		})
		.catch(this.handleError);
	}

	private handleError (error: Response | any) {
		console.error('ApiService::handleError', error);
		return Observable.throw(error);
	}
}
