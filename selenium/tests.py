from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait # available since 2.4.0
from selenium.webdriver.support import expected_conditions as EC # available since 2.26.0
import unittest

class Test(unittest.TestCase):

    def setUp(self): 
        # Create a new instance of the Firefox driver
        self.driver = webdriver.Firefox(executable_path=r"C:\Users\sanat\Downloads\geckodriver-v0.19.1-win64\geckodriver.exe")
        # get the home page
        self.driver.get("http://allthegreatshows.com")

    def test_url(self):
        self.assertIn("React App", self.driver.title)


    def test_podcast_nav(self):
        driver = self.driver
        driver.find_element_by_link_text("Podcasts").click()
        self.assertEqual("http://allthegreatshows.com/podcast/page=1", driver.current_url)
        driver.back()
        
    def test_provider_nav(self):
        driver = self.driver
        driver.find_element_by_link_text("Providers").click()
        self.assertEqual("http://allthegreatshows.com/provider/page=1", driver.current_url)
        driver.back()

    def test_genre_nav(self):
        driver = self.driver
        driver.find_element_by_link_text("Genre").click()
        self.assertEqual("http://allthegreatshows.com/genre/page=1", driver.current_url)
        driver.back()

    def test_home_nav(self):
        driver = self.driver
        driver.find_element_by_link_text("Home").click()
        self.assertEqual("http://allthegreatshows.com/home", driver.current_url)
        driver.back()

    def test_about_nav(self):
        driver = self.driver
        driver.find_element_by_link_text("About").click()
        self.assertEqual("http://allthegreatshows.com/about", driver.current_url)
        driver.back()

    def test_episode_nav(self):
        driver = self.driver
        driver.find_element_by_link_text("Episodes").click()
        self.assertEqual("http://allthegreatshows.com/episode/page=1", driver.current_url)
        driver.back()

    def tearDown(self):
        self.driver.close()       

if __name__ == "__main__":
    unittest.main()