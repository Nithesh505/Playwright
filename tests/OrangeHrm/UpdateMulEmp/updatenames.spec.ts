import {test, expect } from "@playwright/test";
import json from 'fs'
import exl from 'xlsx'
test.describe("Updating Employee Name", async()=>{
    function xl(path : string,sheet : string){
        let WB = exl.readFile(path)
        let WS : any = WB.Sheets[sheet]
        let xldata = exl.utils.sheet_to_json(WS,{header:1})
        return xldata
    }
    
let BC
let page : any
    test.beforeAll("Login To the application",async({browser})=>{
        BC = await browser.newContext()
        page = await BC.newPage()
        let jdata = JSON.parse(json.readFileSync('./xpath.json','utf-8'))
       await page.goto(jdata.URL)
    })
    test('Login To The Application',async()=>{
       let exlData : any = xl("./Emplnfo.xlsx","LoginData")
        let jdata = JSON.parse(json.readFileSync('./xpath.json','utf-8'))
        await page.locator(jdata.UNXpath).fill(exlData[1][0])
        await page.locator(jdata.UPXpath).fill(exlData[1][1])
        await page.locator(jdata.LXpath).click()
        await page.waitForTimeout(2000)
    })
    test("Updating Names ",async()=>{
       
        let f = page.frameLocator('iframe#rightMenu')
        await f.locator('//a[@target="_self"]').nth(0).click()
        //let f2 = page.frameLocator('iframe#_yuiResizeMonitor')
        await f.locator('input#btnEditPers').click()
        await f.locator('input#txtEmpMiddleName').fill('nithesh')
        await f.locator('input#btnEditPers').click()
         await page.waitForTimeout(2000)
        await f.locator('input.backbutton').click()
         await page.waitForTimeout(2000)
        await f.locator('//a[@target="_self"]').nth(1).click()
        await f.locator('input#btnEditPers').click()
        await f.locator('input#txtEmpMiddleName').fill('nithesh')
        await f.locator('input#btnEditPers').click()
        await f.locator('input.backbutton').click()
        await page.waitForTimeout(2000)
    })
})

