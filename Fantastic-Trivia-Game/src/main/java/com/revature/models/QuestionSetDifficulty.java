package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "set_difficulty")
public class QuestionSetDifficulty {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name= "difficulty_id")
	private int id;
	
	@Column(name = "difficuly")
	private String difficulty;
	

	public QuestionSetDifficulty() {
		super();
	}

	public QuestionSetDifficulty(String difficulty) {
		super();
		this.difficulty = difficulty;
	}
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDifficulty() {
		return difficulty;
	}

	public void setDifficulty(String difficulty) {
		this.difficulty = difficulty;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((difficulty == null) ? 0 : difficulty.hashCode());
		result = prime * result + id;
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
		QuestionSetDifficulty other = (QuestionSetDifficulty) obj;
		if (difficulty == null) {
			if (other.difficulty != null)
				return false;
		} else if (!difficulty.equals(other.difficulty))
			return false;
		if (id != other.id)
			return false;
		return true;
	}
	

}
