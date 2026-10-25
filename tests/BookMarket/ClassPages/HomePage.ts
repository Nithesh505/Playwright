import { Page } from "@playwright/test";
import { WebPage1 } from "../CommonData/CommonUI";
export class HomePage1{
    page : Page
    web : WebPage1
    constructor(page : Page){
        this.page = page
        this.web = new WebPage1(page)

    }
    async visible(loc : string){
       await this.web.visible(loc)
    }
    async visibleText(loc : string, text : string){
        await this.web.visibleText(loc,text)
    }
    async indexClick(loc : string,nth : number){
       await this.web.indexClick(loc,nth)
    }
     async Click(loc : string){
       await this.web.Click(loc)
    }
    async count(loc : string){
     return await this.web.loc(loc)
    }
    async allTextContant(loc : string){
        return await this.web.allTextContent(loc)
    }
    async scroll(loc : string){
       return await this.web.scroll(loc)
    }
    async indexVisible(loc : string , index : number ){
        await this.web.indexVisible(loc , index)
    }
   
}