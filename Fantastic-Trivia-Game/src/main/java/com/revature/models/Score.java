package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Score")
public class Score {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private int id;
	
	@Column(name = "score", nullable = false)
	private int score;
	
	@Column(name = "user_id", nullable = false)
	private int userId;
	
	@Column(name = "set_id", nullable = false)
	private int setId;
	
	@Column(name = "rank", nullable = false)
	private int rank;
	
	@Column(name = "category_id", nullable = false)
	private int categoryId;

	public Score() {
		super();
	}

	public Score(int score, int userId, int setId, int rank, int categoryId) {
		super();
		this.score = score;
		this.userId = userId;
		this.setId = setId;
		this.rank = rank;
		this.categoryId = categoryId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getSetId() {
		return setId;
	}

	public void setSetId(int setId) {
		this.setId = setId;
	}

	public int getRank() {
		return rank;
	}

	public void setRank(int rank) {
		this.rank = rank;
	}
	
	

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + rank;
		result = prime * result + score;
		result = prime * result + setId;
		result = prime * result + userId;
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
		Score other = (Score) obj;
		if (id != other.id)
			return false;
		if (rank != other.rank)
			return false;
		if (score != other.score)
			return false;
		if (setId != other.setId)
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Score [id=" + id + ", score=" + score + ", userId=" + userId + ", setId=" + setId + ", rank=" + rank
				+ "]";
	}
	

	
}
