package com.apoorva.pb.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Portfolio {
    @Id
    @GeneratedValue
    private Integer id;
    private Integer pin;
    @Column(unique=true)
    private String uname;
    private String name;
    private String header;
    private String description;
    @OneToMany(mappedBy = "portfolio", cascade=CascadeType.ALL)
    private List<Achievement> achievements;
    @OneToMany(mappedBy = "portfolio", cascade=CascadeType.ALL)
    private List<Skill> skills;
    @OneToMany(mappedBy = "portfolio", cascade=CascadeType.ALL)
    private List<Project> projects;

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
     * @return the pin
     */
    public Integer getPin() {
        return pin;
    }

    /**
     * @param pin the pin to set
     */
    public void setPin(Integer pin) {
        this.pin = pin;
    }

    /**
     * @return the uname
     */
    public String getUname() {
        return uname;
    }

    /**
     * @param uname the uname to set
     */
    public void setUname(String uname) {
        this.uname = uname;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the header
     */
    public String getHeader() {
        return header;
    }

    /**
     * @param header the header to set
     */
    public void setHeader(String header) {
        this.header = header;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
    }

    public List<Achievement> getAchievements() {
        return achievements;
    }

    public void setAchievements(List<Achievement> achievements) {
        this.achievements = achievements;
    }

    public List<Skill> getSkills() {
        return skills;
    }

    public void setSkills(List<Skill> skills) {
        this.skills = skills;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public Portfolio(){

    }

    public Portfolio(Integer id,
        String uname,
        Integer pin,
        String name,
        String header,
        String description){
            this.id=id;
            this.uname=uname;
            this.pin=pin;
            this.name=name;
            this.header=header;
            this.description=description;
    }
}

    