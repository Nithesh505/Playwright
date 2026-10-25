import {Page,expect} from '@playwright/test'
export class WebPage1{
    page : Page
    constructor(page:Page){
        this.page = page
    }
async launchapp(URL : string, tittle : string){
         await this.page.goto(URL)
         await expect(this.page).toHaveTitle(tittle)

    }
    locator(loc : string){
        return this.page.locator(loc)
    }
    async enterData(xpath : string , text : string){
        await this.locator(xpath).fill(text)
    }
    async indexClick(loc : string , nth : number){
         await this.locator(loc).nth(nth).click()
    }
       async Click(loc : string ){
         await this.locator(loc).click()
    }
    async visible(loc : string){
        await expect(this.locator(loc)).toBeVisible()
    }
        async indexVisible(loc : string, index : number){
        await expect(this.locator(loc).nth(index)).toBeVisible()
    }
    async visibleText(loc : string , text : string){
        await expect(this.locator(loc)).toContainText(text)
    }
     async loc(loc : string){
       return await this.locator(loc).count()
        
    }async allTextContent(loc : string){
       return await this.locator(loc).allTextContents()
    }
    async scroll(loc : string){
      return  await this.locator(loc).scrollIntoViewIfNeeded()
    }
}