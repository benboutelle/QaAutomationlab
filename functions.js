const { By} = require('selenium-webdriver')






const addMovie = async(driver) => { 
    
    await driver.findElement(By.xpath('//input')).sendKeys('Step Brothers')
    
    await driver.findElement(By.xpath('//button')).click()
    
    const movie = await driver.findElement(By.xpath('//li'))
    
    const displayed = movie.isDisplayed()
    
    expect(displayed).toBeTruthy()
}

const crossOffMovie = async(driver) => {
    await driver.findElement(By.xpath('/html/body/main/ul/li/span')).click()
    await driver.sleep(2000)

}
const deleteMovie = async(driver) => {
    await driver.findElement(By.xpath('/html/body/main/ul/li/button')).click()
    await driver.sleep(2000)

}

module.exports = {
addMovie , crossOffMovie, deleteMovie
}