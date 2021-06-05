
export interface QuestionSet {
    id: number,
    categoryId: number,
    numQuestions: number,
    difficultyId: number  
}

export enum category{
    General_Knowlege,
    Books,
    Film,
    Music,
    Musicals,
    Television,
    Video_Games,
    Board_Games,
    Science_Nature,
    Computers,
    Mathematics

}

export enum difficulty{
    Easy,
    Medium,
    Hard
}

