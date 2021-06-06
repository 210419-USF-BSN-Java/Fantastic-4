

export interface QuestionPool{
  category: string;
  type: string;
  difficulty: string;
  triviaQuestion: string;
  right_answer: string;
  wrong_answers: string[];

}

export enum poolCategory{
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

export enum poolDifficulty{
  Easy,
  Medium,
  Hard
}
