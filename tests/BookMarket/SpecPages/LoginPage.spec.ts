import{test,Page} from '@playwright/test'
import {LoginPage} from '../ClassPages/LoginPage'
import{HomePage1} from '../ClassPages/HomePage'
import json from '../LoginData/LoginData.json'
import xjson from '../XPATH/Loginxpath.json'

test.describe("Book Market",async()=>{
   let page : Page
    let loginpage : LoginPage
    let homepage : HomePage1
    test("App launch",async({page})=>{
         homepage = new HomePage1(page)
        loginpage = new LoginPage(page)
       

      await  loginpage.launchmyapp(json.URL,json.tittle)
      await loginpage.visible(xjson.XLOGO)
      for(const users of json.user){
        await  loginpage.DataEnter(xjson.XUN,users.username)
         await page.waitForTimeout(500)
      await  loginpage.DataEnter(xjson.XUP,users.pass)
       await page.waitForTimeout(500)
      await  loginpage.Click(xjson.XBUTTON)
       await page.waitForTimeout(500)
     
      }
      await homepage.Click('button#btn-explore-now')  
      await homepage.indexClick('//span[text()="Civil"]',0)
      await page.waitForTimeout(2000)    
    
 })
})