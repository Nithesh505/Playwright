import {Page} from '@playwright/test'
import {WebPage} from '../CommonData/CommonUI'
import jdata from 'fs'
export class homepage{
    web : WebPage
    constructor(page : Page){
       this.web  = new WebPage(page)
    }
    json(){
        let JsonData = JSON.parse(jdata.readFileSync('../PageLocators/home.json','utf-8'))
        return JsonData
    }
    ConigJson(){
        let JsonData = JSON.parse(jdata.readFileSync('../confrigation/config.json','utf-8'))
        return JsonData
    }
    async verifyTittle(){
        await this.web.vrifyTittle(this.json().htittle)
    }
    async myapp(){
    await this.web.launch(this.ConigJson().URL) 
    }
    async checkLogo(){
        await this.web.visible(this.json().himage)
    }
    async getText(){
        await this.web.gettext(this.json().htext)
    }
    async EnterText(){
    await this.web.enterData(this.json().XUN,this.ConigJson().UserName)
    await this.web.enterData(this.json().XUP,this.ConigJson().Password)
    }
    async Click(){
        await this.web.clickData(this.json().XLOGIN)
    }
    


}