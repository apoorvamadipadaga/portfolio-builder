package com.apoorva.pb.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Skill {
    @Id
    @GeneratedValue
    private Integer id;
    private String skillname;

    @ManyToOne
    @JoinColumn
    private Portfolio portfolio;

    /**
     * @return the id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return the skillname
     */
    public String getSkillname() {
        return skillname;
    }

    /**
	 * @param skillname the skillname to set
	 */
	public void setSkillname(String skillname) {
		this.skillname = skillname;
    }

    public Skill(){

    }

    public Portfolio getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(Portfolio portfolio) {
        this.portfolio = portfolio;
    }
    
    public Skill(Integer id, String skillname){
        this.id=id;
        this.skillname=skillname;
    }
}
    