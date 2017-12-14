export interface IJourneyConfig {
	name: string;
	next?: string;
	pages: Array<string>;
}

class Triage {
	get journeyConfigs() {
		return {};
	}

	get currentJurney() {
		return {};
	}

	load() {

	}

	start() {
		
	}

	switchJourney() {
		
	}
}