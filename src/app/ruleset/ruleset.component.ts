import { Component, OnInit } from '@angular/core';
// import {RulesetService} from './ruleset.service'
import {RulesService} from './rules.service'
@Component({
  selector: 'app-ruleset',
  templateUrl: './ruleset.component.html',
  styleUrls: ['./ruleset.component.css']
})
export class RulesetComponent implements OnInit {

  public rules:any;
  constructor(private ruleservice:RulesService) { }
  
  ngOnInit(): void {
    this.getallrule()
  }
  getallrule(){
    this.ruleservice.getallRules().subscribe(
      res=>{
        console.log(res)
        this.appendLeaves(res)
      },
      err=>{
        console.log(err)
      }
    )
  }
  appendLeaves(res:any){
    let rulessData:any;

    rulessData=Object.entries(res);
    // console.log(this.rules)
    this.rules=[]
    for(let index=0;index<rulessData.length;index++){
      this.rules.push(rulessData[index][1])
    }  
    // console.log(this.rules[1])
    console.log(this.rules[0].rule)


  }

}
