import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IUser, IUserStore } from '../interfaces/user';

@Component({
	selector: 'app-survey',
	templateUrl: './survey.component.html',
	styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
	public user: IUser;
	public userForm: FormGroup;
	constructor(private fb: FormBuilder, public router: Router) {

	}

	ngOnInit() {
		this.userForm = new FormGroup({
			firstName: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
			lastName: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
			email: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
		})
	}

	save(model: IUserStore){
		this.router.navigate(['assessment-skill']);
	}

}
