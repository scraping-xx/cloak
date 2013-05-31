import time
import codecs
import re
import urllib2
import pprint
from bs4 import BeautifulSoup, SoupStrainer
import string
import sys
freshIP = 'http://cloak.herokuapp.com/refresh'

target_url = 'http://www.whatismyip.com/'
header =  {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11','Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8','Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3','Accept-Encoding': 'none','Accept-Language': 'en-US,en;q=0.8','Connection': 'keep-alive'}
open_url = urllib2.Request(target_url, headers=header)
target_data = urllib2.urlopen(open_url)
soup = BeautifulSoup(target_data)
links = soup.findAll('div',{'id':'greenip'})[0].getText()
print ' ' 
print target_url
print 'Publicly...'
print links

target_url = 'http://cloak.herokuapp.com/?http://www.whatismyip.com/'
header =  {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11','Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8','Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3','Accept-Encoding': 'none','Accept-Language': 'en-US,en;q=0.8','Connection': 'keep-alive'}
open_url = urllib2.Request(target_url, headers=header)
target_data = urllib2.urlopen(open_url)
soup = BeautifulSoup(target_data)
links = soup.findAll('div',{'id':'greenip'})[0].getText()
print 'http://wwww.whatismyip.com/'
print 'In a cloak...'
print links
time.sleep(2) # "Paw"se for effect. 

print 'Now lets change cloaks...\nCALLED URL: cloak.herokuapp.com/refresh\nWAITING 15 Seconds'
open_url = urllib2.Request(freshIP, headers=header) # Note the freshIP variable. 
target_data = urllib2.urlopen(open_url)
soup = BeautifulSoup(target_data)
time.sleep(15)

print '\nUse New IP:'
target_url = 'http://cloak.herokuapp.com/?http://www.whatismyip.com/'
header =  {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11','Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8','Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3','Accept-Encoding': 'none','Accept-Language': 'en-US,en;q=0.8','Connection': 'keep-alive'}
open_url = urllib2.Request(target_url, headers=header)
target_data = urllib2.urlopen(open_url)
soup = BeautifulSoup(target_data)
links = soup.findAll('div',{'id':'greenip'})[0].getText()
print 'http://wwww.whatismyip.com/'
print 'Our fresh IP:'
print links



