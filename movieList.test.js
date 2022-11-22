const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


const {addMovie, crossOffMovie, deleteMovie} = require('./functions')

beforeAll(async () => {
    await driver.get('http://localhost:5501/movieList/index.html')

})

afterAll(async () => {
    await driver.quit()
})

test('add movie', async () => {
    await addMovie(driver)
    await driver.sleep(2000)
})
test('cross out movie', async () => {
    await crossOffMovie(driver)
    await driver.sleep(2000)
})
test('delete movie', async () => {
    await deleteMovie(driver)
    await driver.sleep(2000)
})