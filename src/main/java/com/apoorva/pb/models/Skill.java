package com.apoorva.pb.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Skill {
    @Id
    @GeneratedValue
    private Integer id;
    @ManyToOne(optional = false, fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn (name="pid")
    private Portfolio portfolio;
    private String skillname;

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

    public void setPortfolio(Portfolio portfolio) {
        this.portfolio = portfolio;
    }

    public Skill(){

    }
    
    public Skill(Integer id, String skillname){
        this.id=id;
        this.skillname=skillname;
    }
}
    