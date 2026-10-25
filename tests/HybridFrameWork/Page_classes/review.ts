import {Page} from '@playwright/test'
import json from '../PageLocators/review.json'
import { WebPage } from '../CommonData/CommonUI'
export class review{
    web : WebPage

    constructor(page : Page){
    
        this.web = new WebPage(page)
    }

    async fBack(){
      await  this.web.frameClick(json.FRAME,json.XBACK)
    }
}