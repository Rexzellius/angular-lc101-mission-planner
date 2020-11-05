import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }
  
  memberBeingEdited: object = null;

  add(memberName: string, isFirst: boolean) {
    if (this.checkDuplicateNames(memberName)){
      return;
    };
    this.crew.push({name: memberName, firstMission: isFirst});
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  checkDuplicateNames(name:string){
    for (let person of this.crew) {
      if (person['name']===name){
        window.alert('names must be unique')
        return true;
      }
    }
  }

  save(name: string, member: object) {
    if (this.checkDuplicateNames(name)){
      this.memberBeingEdited = null
    };
    member['name'] = name;
    this.memberBeingEdited = null;
  }

}
