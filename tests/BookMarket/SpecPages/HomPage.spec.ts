import { LoginPage } from "../ClassPages/LoginPage";
import { HomePage1 } from "../ClassPages/HomePage";
import login from '../LoginData/LoginData.json'
import xlogin from '../XPATH/Loginxpath.json'
import xhm from '../XPATH/Homexpath.json'
import{expect, Page, test} from '@playwright/test'
test.describe("Verifying all Course pages", async()=>{
    let page : Page
    let lp : LoginPage
    let hp : HomePage1
    test.beforeEach('Login to the aplication',async({page})=>{
        lp = new LoginPage(page)
        hp = new  HomePage1(page)
        await lp.launchmyapp(login.URL,"Login - Book Market")
        await lp.DataEnter(xlogin.XUN,"student@bookmarket.com")
        await lp.DataEnter(xlogin.XUP,"password123")
        await lp.Click(xlogin.XBUTTON)    
    })
    test("Verify cse page",async({page})=>{
        test.setTimeout(9000000)
       await hp.Click(xhm.Xeplr)
       
       //await hp.indexClick("//span[text()='Civil']",0)
        
       await page.waitForTimeout(2000)
       await hp.Click('#year-filter-2nd')
       //await hp.visibleText("//span[text()='CSE']",'CSE')
      
       
       //await expect(page.locator("//span[text()='2']").first()).toBeVisible() 
        let nobooks  = await hp.count('//div[@role="listitem"]')  
       if(nobooks > 0){
        console.log("No.of books in civil 2nd yr : "+nobooks)
       }else{
        console.log(" 0 Books!!")
       }
       
        for( let i = 0 ; i < nobooks ; i++){
         await hp.indexVisible("//span[text()='2']",i)
        }
       //let all_books = await page.locator('h3.book-card-title').allTextContents()
        let all_books = await hp.allTextContant("h3.book-card-title")
       console.log("Book Names in 2nd year: ")
       for(let all_book of all_books){
         console.log( all_book)
       }
      await page.waitForTimeout(500)
    //   await page.locator("button#cart-btn-B120").scrollIntoViewIfNeeded()
    //   await page.locator("button#cart-btn-B120").click()
    //   await hp.scroll("button#cart-btn-B120")
    //   await hp.Click("button#cart-btn-B120")
    //     await page.waitForTimeout(2000)
    //    for(let i = 0 ; i <= 4 ; i++){
    //    await hp.Click('//button[@aria-label="Increase quantity"]')
    //     await page.waitForTimeout(2000)
    //    }
    //     await hp.visible('div.go3958317564')
    //     await hp.Click('//button[@aria-label="Decrease quantity"]')
    //       await page.waitForTimeout(2000)
      
    })
})