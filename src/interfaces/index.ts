export interface ICharacters {
    info: {
        count: number,
        next: string;
        pages: number
    };
    results: ICharactersResults[]
}

export interface ICharactersResults {
    id: number,
    name: string;
    status: string;
    species: string;
    image: string;
    gender: string;
}