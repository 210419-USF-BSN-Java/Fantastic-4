
export interface QuestionSet {
    id: number,
    categoryId: number,
    numQuestions: number,
    difficultyId: number
}

export enum category{
    //1
    Science,
    Math,
    Engineering,
    Art,
    Technology,
    History
}

export enum difficulty{
    Easy1,
    Medium2,
    Hard3
}

