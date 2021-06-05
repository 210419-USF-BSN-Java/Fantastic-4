package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "QuestionSets")
public class QuestionSet {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "set_id")
	private int id;
	
	@Column(name = "category_id", nullable = false)
	private int categoryId;
	
	@Column(name = "num_questions", nullable = false)
	private int numQuestions; // number of questions
	
	@Column(name = "difficulty_id", nullable = false)
	private int difficultyId; // the difficulty of the questions

	public QuestionSet() {
		super();
	}

	public QuestionSet(int categoryId, int numQuestions, int difficultyId) {
		super();
		this.categoryId = categoryId;
		this.numQuestions = numQuestions;
		this.difficultyId = difficultyId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public int getNumQuestions() {
		return numQuestions;
	}

	public void setNumQuestions(int numQuestions) {
		this.numQuestions = numQuestions;
	}

	public int getDifficultyId() {
		return difficultyId;
	}

	public void setDifficultyId(int difficultyId) {
		this.difficultyId = difficultyId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + categoryId;
		result = prime * result + difficultyId;
		result = prime * result + id;
		result = prime * result + numQuestions;
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
		QuestionSet other = (QuestionSet) obj;
		if (categoryId != other.categoryId)
			return false;
		if (difficultyId != other.difficultyId)
			return false;
		if (id != other.id)
			return false;
		if (numQuestions != other.numQuestions)
			return false;
		return true;
	}
	

	
}
