import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { SkillAssessmentComponent } from './skill-assessment/skill-assessment.component';

const routes: Routes = [
	{ path: '', redirectTo: '/survey', pathMatch: 'full' },
	{ path: 'survey', component: SurveyComponent },
	{ path: 'assessment-skill', component: SkillAssessmentComponent}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	declarations: [],
	exports: [RouterModule]
})
export class AppRoutingModule { }
