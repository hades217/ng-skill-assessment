import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Customer } from '../customer.interface';
import { IQuestionResponse } from '../interfaces/question';
import { ApiService } from '../api.service'

declare var require: any
const mockData = require('../data/example.json');

@Component({
	selector: 'app-skill-assessment',
	providers: [Location],
	templateUrl: './skill-assessment.component.html',
	styleUrls: ['./skill-assessment.component.scss']
})
export class SkillAssessmentComponent implements OnInit {
	public quoteForm: FormGroup;
	public questionsRawData: IQuestionResponse[];
	public selectedItem: any;
	public submitted: boolean;
	public choices: Array<any>;
	private location: Location;
	public isShowQuestion: boolean;
	public questionIndex: number;
	private journey:any;
	public currentTime: number;
	
	constructor(private fb: FormBuilder, location: Location, private api: ApiService) {
		this.questionIndex = 0;
		this.location = location;
		this.journey = {
			index: 1,
			complete: 0,
			amount: 2
		}
		this.currentTime = Date.now();
		this.api.getAllQuestions().subscribe( (questions) =>{
			this.questionsRawData = questions;
			console.log(this.questionsRawData)
		} )
	}

	ngOnInit() {
		this.quoteForm = new FormGroup({
			choice: new FormControl()
		})
	}

	onSelect(question:any, anwser:any, index:number): void {
		this.selectedItem = Object.assign({}, {
			question: question,
			index: index
		});
		console.log(this.selectedItem)
	}

	get questions() {
		return this.api.getAllQuestions();
	}

	updateQuestion(): void{
		this.questionIndex = this.questionIndex +1;
	}
	save(model) {
		
		this.selectedItem = Object.assign(this.selectedItem,{
			...model
		})
		if(this.journey.complete < this.journey.amount){
			this.journey.index = this.journey.index + 1;
			this.journey.complete = this.journey.complete + 1;
			this.updateQuestion()
		}
		// Call service
		this.api.submitAnswer(this.selectedItem).subscribe((res) =>{
			console.log(res)
		});
	}
	setTimer() {
		// TBA
	}
	goBack() {
		this.location.back();
	}
	storeAnswer() {

	}
}
