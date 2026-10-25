import {Page} from '@playwright/test'
import { WebPage1 } from '../CommonData/CommonUI'
export class LoginPage{
    page : Page
    web : WebPage1
    constructor(page : Page){
        this.page = page
        this.web = new WebPage1(page)
    }

   async launchmyapp(loc : string, tittle : string){
       await this.web.launchapp(loc,tittle)

    }
    async DataEnter(xpath : string , text : string) {
       await this.web.enterData(xpath,text)
    }
    async indexClick(loc : string , nth : number){
        await this.web.indexClick(loc,nth)
    }
       async Click(loc : string){
        await this.web.Click(loc)
    }

    async visible(loc : string){
        await this.web.visible(loc)
    }
}
