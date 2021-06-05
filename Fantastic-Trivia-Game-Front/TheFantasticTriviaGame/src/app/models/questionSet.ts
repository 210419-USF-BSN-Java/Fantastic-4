
export interface QuestionSet {
    id: number,
    categoryId: number,
    numQuestions: number,
    difficultyId: number  
}

export enum category{
    Science,
    Math,
    Engineering,
    Art,
    Technology,
    History
}

export enum difficulty{
    Easy,
    Medium,
    Hard
}

