import {chromium,firefox,test ,webkit} from "@playwright/test"

test (`Redbus in Edge`,async()=>

{
     // 1. Edge Instance
    const Edge = await chromium.launch({ headless: false, channel: 'msedge'})
    const context = await Edge.newContext()
    const page = await context.newPage();

    await page.goto(`https://www.redbus.in/`)
    console.log("REBus Title is : "+ await page.title())
     console.log("REBus URL is : "+ await page.url())


  // 2. Firefox Instance
     const Firefox = await firefox.launch({ headless: false})
    const context1 = await Edge.newContext()
    const page1 = await context.newPage();

    await page.goto(`https://www.flipkart.com/`)
    console.log("Flipkart Title is : "+ await page.title())
     console.log("Flipkart URL is : "+ await page.url())

}
)