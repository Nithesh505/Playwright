import{Page} from '@playwright/test'
import{WebPage} from '../CommonData/CommonUI'
import json from 'fs'
export class  PIM{
    web : WebPage
    page : Page
    constructor(page : Page){
    this.page = page
    this.web = new WebPage(page)
    }
    Json(){
        let Jdata : any = JSON.parse(json.readFileSync('../PageLocators/pim.json','utf-8'))
        return Jdata
    }
   async verifyLogo(){
    await this.web.visible(this.Json().DLogo)
    
    }
    async GetText(){
    await this.web.gettext(this.Json().Text)
    }
   async PIMHover(){
     await   this.web.hoverData(this.Json().Hover)
    }
   async AddEmp(){
     await   this.web.clickData(this.Json().click)
    }
}