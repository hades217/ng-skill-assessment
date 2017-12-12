import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SkillAssessmentComponent } from './skill-assessment/skill-assessment.component';
import { SurveyComponent } from './survey/survey.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		SkillAssessmentComponent,
		SurveyComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
