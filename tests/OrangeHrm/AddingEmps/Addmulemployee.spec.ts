import {test,expect} from '@playwright/test'
import exl from 'xlsx'
import jdata from 'fs'
test.describe('Adding Multiple Employee', ()=>{
    function xl(path : string, sheet : string){
        const WB = exl.readFile(path)
        const WS : any = WB.Sheets[sheet]
        const Emp = exl.utils.sheet_to_json(WS,{header : 1})
        return Emp
    } 
    
    let page : any
    let context
    test.beforeAll("Launching Browser",async({browser})=>{
        const jsonData  = JSON.parse(jdata.readFileSync('./LoginData.json','utf-8'))
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto(jsonData.URL)
        await page.waitForTimeout(2000)
    })
    test("Login To Application", async()=>{
        const jsonData = JSON.parse(jdata.readFileSync('./LoginData.json','utf-8'))
        
        const Logindata : any = xl("./Emplnfo.xlsx","LoginData")
        await page.locator(jsonData.UNXpath).fill(Logindata[1][0]) 
        await page.locator(jsonData.UPXpath).fill(Logindata[1][1])
        await page.screenshot({path:'./Screenshots/LoginPage.png'})
        await page.keyboard.press('Enter')
        await page.waitForTimeout(2000) 
        await page.screenshot({path:'./Screenshots/HomePage.png'})
           
    })
    
    test("Adding Employees One by One ", async()=>{
      
        const jsonData = JSON.parse(jdata.readFileSync('./LoginData.json','utf-8'))
        const Logindata : any = xl("./Emplnfo.xlsx","EmpData")
        for(let i=1 ; i <= Logindata.length-1 ; i++)
        {
            test.setTimeout(900000)
            page.locator(jsonData.XPIM).hover()
        await page.waitForTimeout(2000)
        page.locator(jsonData.XEMP).click()
        await page.waitForTimeout(2000)
        const f= page.frameLocator(jsonData.XFRAME)
       await  f.locator(jsonData.XEMPID).fill(Logindata[i][0].toString())
       await f.locator(jsonData.XLNAME).fill(Logindata[i][1])
       await f.locator(jsonData.XFNAME).fill(Logindata[i][2])
       await f.locator(jsonData.XMNAME).fill(Logindata[i][3])
       await f.locator(jsonData.XNNAME).fill(Logindata[i][4])
       await page.waitForTimeout(2000)
       await f.locator('input#photofile').setInputFiles("./EmpPhotos/"+Logindata[i][1]+".png")
       await page.waitForTimeout(2000)
       await page.screenshot({
        path :`./Screenshots/Emp-${Logindata[i][1]}.png`
       })
        await f.locator(jsonData.XSAVE).click()
       await page.waitForTimeout(3000)
       await f.locator(jsonData.XBACK).click()
       await page.waitForTimeout(2000)
       await page.screenshot({path:'./Screenshots/'+Logindata[i][1]+'AddedEmp.png'})
       

        }       
})
})