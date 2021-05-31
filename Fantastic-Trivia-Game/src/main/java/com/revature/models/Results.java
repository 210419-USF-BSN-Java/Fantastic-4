package com.revature.models;

import java.util.Arrays;

public class Results {
	
	private String category;
	private String type;
	private String difficulty;
	private String question;
	private String correct_answer;
	private String[] incorrect_answers;
	
	public Results() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Results(String category, String type, String difficulty, String question, String correct_answer,
			String[] incorrect_answers) {
		super();
		this.category = category;
		this.type = type;
		this.difficulty = difficulty;
		this.question = question;
		this.correct_answer = correct_answer;
		this.incorrect_answers = incorrect_answers;
	}
	
	

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDifficulty() {
		return difficulty;
	}

	public void setDifficulty(String difficulty) {
		this.difficulty = difficulty;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getCorrect_answer() {
		return correct_answer;
	}

	public void setCorrect_answer(String correct_answer) {
		this.correct_answer = correct_answer;
	}

	public String[] getIncorrect_answers() {
		return incorrect_answers;
	}

	public void setIncorrect_answers(String[] incorrect_answers) {
		this.incorrect_answers = incorrect_answers;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((category == null) ? 0 : category.hashCode());
		result = prime * result + ((correct_answer == null) ? 0 : correct_answer.hashCode());
		result = prime * result + ((difficulty == null) ? 0 : difficulty.hashCode());
		result = prime * result + Arrays.hashCode(incorrect_answers);
		result = prime * result + ((question == null) ? 0 : question.hashCode());
		result = prime * result + ((type == null) ? 0 : type.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Results other = (Results) obj;
		if (category == null) {
			if (other.category != null)
				return false;
		} else if (!category.equals(other.category))
			return false;
		if (correct_answer == null) {
			if (other.correct_answer != null)
				return false;
		} else if (!correct_answer.equals(other.correct_answer))
			return false;
		if (difficulty == null) {
			if (other.difficulty != null)
				return false;
		} else if (!difficulty.equals(other.difficulty))
			return false;
		if (!Arrays.equals(incorrect_answers, other.incorrect_answers))
			return false;
		if (question == null) {
			if (other.question != null)
				return false;
		} else if (!question.equals(other.question))
			return false;
		if (type == null) {
			if (other.type != null)
				return false;
		} else if (!type.equals(other.type))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Results [category=" + category + ", type=" + type + ", difficulty=" + difficulty + ", question="
				+ question + ", correct_answer=" + correct_answer + ", incorrect_answers="
				+ Arrays.toString(incorrect_answers) + "]";
	}
	
	
	
	
	

}
