export interface QuestionResults{
  categoryId: number;
  type: string;
  difficultyId: number;
  question: string;
  right_answer: string;
  wrong_answers: string[];
}
