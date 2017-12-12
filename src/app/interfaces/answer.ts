export interface IAnswerResponse{
	totalTime: number;
	reactions?: string;
	stemImageUrl: string;
	answerIndex: number;
	format: string;
	timer: number;
	choiceIndex: number;
	choices: Array<string>;
	itemLimit: number;
	itemAccount: number;
	stem: string;
	result: string;
}

export interface IReactionAnswer{
	comment: string;
	userReaction: boolean;
	type: string;
	id: string;
	label: string;
}