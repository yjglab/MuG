import sys 
import io 
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

def set_chrome_driver():
    chrome_options = webdriver.ChromeOptions()
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    return driver

driver = webdriver.Chrome('C:\JaeGyeong\codedriver\chromedriver')
driver.implicitly_wait(3)
driver.get('https://www.britishmuseum.org/exhibitions-events')
driver.set_window_position(0, 0)
driver.set_window_size(3000, 1000)
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser', from_encoding='cp949')

britishMsm_exn_titles = driver.find_elements(by=By.CSS_SELECTOR, value=".teaser__title > span:nth-child(1)")
britishMsm_exn_dates = driver.find_elements(by=By.CSS_SELECTOR, value=".teaser__meta > li:nth-child(2)")

for title in britishMsm_exn_titles[:7]:
    print(title.text)
    print("//")
print("FILTER")
for date in britishMsm_exn_dates[:7]:
    print(date.text)
    print("//")
print("FILTER")
driver.close()