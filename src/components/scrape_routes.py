import requests
from bs4 import BeautifulSoup
import json

# URL of the page to scrape
url = "https://www.thecrag.com/climbing/world/routes"

# Send a GET request to the URL
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Find the container with route information
# Note: Adjust the class names based on the actual HTML structure
routes = soup.find_all('div', class_='route-container')

# Extract data and store in a list
routes_data = []
for route in routes:
    route_name = route.find('h2', class_='route-name').text.strip()
    area = route.find('span', class_='area-name').text.strip()
    grade = route.find('span', class_='route-grade').text.strip()
    routes_data.append({
        "route_name": route_name,
        "area": area,
        "grade": grade
    })

# Save the data to a JSON file
with open('routes.json', 'w') as f:
    json.dump(routes_data, f, indent=4)

print("Scraping completed. Data saved to routes.json")

# to run this python scrape_routes.py
