
export interface QuestionSet {
    id: number,
    categoryId: number,
    numQuestions: number,
    difficultyId: number  
}

export enum category{
    Science1,
    Math2,
    Engineering3,
    Art4,
    Technology5,
    History6
}

export enum difficulty{
    Easy1,
    Medium2,
    Hard3
}

