package com.revature.models;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

public class QuestionPool{
	
	private Results[] results;

	public QuestionPool() {
		super();
		// TODO Auto-generated constructor stub
	}

	public QuestionPool(Results[] results) {
		super();
		this.results = results;
	}

	public Results[] getResults() {
		return results;
	}

	public void setResults(Results[] results) {
		this.results = results;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(results);
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
		QuestionPool other = (QuestionPool) obj;
		if (!Arrays.equals(results, other.results))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "QuestionPool [results=" + Arrays.toString(results) + "]";
	}

	
	
}
