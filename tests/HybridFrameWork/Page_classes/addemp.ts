import {Page} from '@playwright/test'
import { WebPage } from '../CommonData/CommonUI'
import empjson from '../PageLocators/addemp.json'

export class AddEmp{
    page : Page
   web : WebPage
   constructor(page : Page){
    this.page = page
    this.web = new WebPage(page)
   }
   async checkLogo(){
    await this.web.visible(empjson.Hlogo)
   }
   async FrameEnter(id : string,FNAME : string,LNAME : string,MNAME : string,NNAME : string ){
   await this.web.frameEnter(empjson.FRAME,empjson.XID,id)
   await this.web.frameEnter(empjson.FRAME,empjson.XFNAME,FNAME)
   await this.web.frameEnter(empjson.FRAME,empjson.XLNAME,LNAME)
   await this.web.frameEnter(empjson.FRAME,empjson.XMNAME,MNAME)
   await this.web.frameEnter(empjson.FRAME,empjson.XNNAME,NNAME)
   }
   async frameclick(){
    await this.web.frameClick(empjson.FRAME,empjson.XSAVE)
   }
  
}