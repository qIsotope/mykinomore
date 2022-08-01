

export interface Profession {
	value: string;
}

export interface BirthPlace {
	value: string;
}

export interface Movie {
	id: number;
	name: string;
	rating?: number;
	general: boolean;
	description: string;
}

export interface Spous {
	_id: string;
	id: number;
	name: string;
	divorced: boolean;
	divorcedReason: string;
	sex: string;
	children: number;
	relation: string;
}

export interface IPerson {
	spouses: Spous[];
	id: number;
	name: string;
	enName: string;
	photo: string;
	profession: Profession[];
	birthPlace: BirthPlace[];
	deathPlace?: any;
	facts: any[];
	movies: Movie[];
	__v: number;
	age: number;
	birthday: Date;
	countAwards: number;
	death?: any;
	growth: number;
	sex: string;
	updatedAt: Date;
}



