import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Portfolio } from '../shared/models/portfolio.model';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Project } from '../shared/models/project.model';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.scss']
})

export class EditPortfolioComponent implements OnInit {

  portfolioForm: FormGroup;
  submitted = false;
  success = false;
  message: string;
  uname = this.route.snapshot.paramMap.get('uname');
  portfolio: Portfolio;
  portfolioLink: string;
  portfolioUpdateLink: string;

  constructor(private formBuilder: FormBuilder, private data: DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getPortfolio();
    console.log(this.portfolio);
    this.portfolioForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      header: ['', Validators.required],
      theme: ['', [Validators.required, Validators.pattern('[1-4]{1}')]],
      pin: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
      description: ['', [Validators.required, Validators.min(30), Validators.max(200)]],
      skills: this.formBuilder.array([
      ]),
      achievements: this.formBuilder.array([
      ]),
      projects: this.formBuilder.array([
      ])
    });
  }

  createSkill(): FormGroup {
    return this.formBuilder.group({
      skillname: ['', Validators.required]
    });
  }

  createAchievement(): FormGroup {
    return this.formBuilder.group({
      achievement: ['', Validators.required]
    })
  }

  createProject(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    })
  }

  get skills() {
    return this.portfolioForm.get('skills') as FormArray;
  }

  get achievements() {
    return this.portfolioForm.get('achievements') as FormArray;
  }

  get projects() {
    return this.portfolioForm.get('projects') as FormArray;
  }

  addSkill() {
    this.skills.push(this.createSkill());
  }

  addSkillWithData(skillname: string) {
    var skill = this.createSkill();
    skill.setValue({
      skillname: skillname
    });
    this.skills.push(skill);
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  addAchievement() {
    this.achievements.push(this.createAchievement());
  }

  addAchievementWithData(achievement: string) {
    var ach = this.createAchievement();
    ach.setValue({
      achievement: achievement
    });
    this.achievements.push(ach);
  }
  
  removeAchievement(i: number) {
    this.achievements.removeAt(i);
  }

  addProject() {
    this.projects.push(this.createProject());
  }

  addProjectWithData(project: Project) {
    var proj = this.createProject();
    proj.setValue({
      title: project.title,
      description: project.description,
      startDate: project.startDate,
      endDate: project.endDate
    });
    this.projects.push(proj);
  }

  removeProject(i: number) {
    this.projects.removeAt(i);
  }

  getPortfolio() {
    this.data.getPortfolio(this.uname).subscribe(data => {
      this.portfolio = new Portfolio().deserialize(data);
      this.portfolioForm.patchValue({
        name: this.portfolio.name,
        header: this.portfolio.header,
        description: this.portfolio.description,
        theme: this.portfolio.theme
      });
      this.portfolio.skills.forEach(s => {
        this.addSkillWithData(s.skillname);
      });
      this.portfolio.achievements.forEach(a => {
        this.addAchievementWithData(a.achievement);
      });
      this.portfolio.projects.forEach(p => {
        this.addProjectWithData(p);
      });
      console.log(this.portfolio);
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.portfolioForm.invalid) {
      this.message = 'There are errors while submitting the form';
      return;
    }

    var portfolio = new Portfolio().deserialize(this.portfolioForm.value);

    console.log(portfolio);

    this.data.updatePortfolio(portfolio, this.uname).subscribe(data => {
      if (data != null) {
        var p = new Portfolio().deserialize(data);
        if (p.id > 0) {
          this.success = true;
          this.message = 'Profile updated successfully';
          this.portfolioLink = 'http://localhost:4200/portfolio/' + p.uname;
          this.portfolioUpdateLink = this.portfolioLink + '/edit';
          this.uname = p.uname;
        }
      }
    }, (err: HttpErrorResponse) => {
      this.success = false;
      if (err.error instanceof Error) {
        //A client-side or network error occurred.
        console.log('An error occurred:', err.error.message);
        this.message = 'Unable to update profile. Please try again later';
      } else {
        //Backend returns unsuccessful response codes such as 404, 500 etc.
        console.log('Backend returned status code: ', err.status);
        console.log('Response body:', err.error);
        if (err.message.includes("ConstraintViolationException")) {
          this.message = 'Username already exists';
        }
        else {
          this.message = "Internal server error. Please try again later"
        }
      }
    });
  }
}
