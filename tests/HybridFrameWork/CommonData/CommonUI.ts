import { Page,expect } from "@playwright/test";

export class WebPage{
    page : Page 
    constructor(page : Page){
        this.page = page
    }
    launch(url : string){
        return this.page.goto(url)    
    }
    element(loc : string){
        
       return this.page.locator(loc)
    }
    async vrifyTittle(Title : string){
        await expect(this.page).toHaveTitle(Title)
    }
    async visible(loc : string){
       await expect(this.element(loc)).toBeVisible()
    }
    async gettext(loc : string) {
     console.log(await this.element(loc).textContent())
    }
    async enterData(loc : string , text : string){
        await this.element(loc).fill(text)
    }
    async clickData(loc : string){
        await this.element(loc).click()
    }
    async hoverData(loc : string){
        await this.element(loc).hover()
    }
    frame(Floc : string , loc : string ){
        return this.page.frameLocator(Floc).locator(loc)

    }
    async frameEnter(Floc : string , loc : string , text : string){
        await this.frame(Floc,loc).fill(text)
    }
    async frameClick(Floc : string , loc : string){
        await this.frame(Floc , loc).click()
    }
    async frameUpload(Floc : string , loc : string , file : string){
        await this.frame(Floc , loc).setInputFiles(file)

    }
   


}