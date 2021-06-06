
export interface QuestionPool{
  categoryId: number;
  type: string;
  difficultyId: number;
  question: string;
  correct_answerId: number;
  right_answer: string;
  incorrect_answers: number[];
  wrong_answers: string[];

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
