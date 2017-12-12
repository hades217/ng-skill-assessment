export interface IQuestionResponse {
	questionId: number;
	item_account: number;
	totalTime?: number;
	stem_image?: string;
	format?: string;
	timer?: number;
	choices?: Array<string>;
	item_limit?: number;
	stem?: string;
	selected: boolean;
}
