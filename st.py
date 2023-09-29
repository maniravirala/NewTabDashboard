import requests
import json

payload = {
  "registration": "12108536",
  "password": "ASDF@5mnbv"
}

response = requests.post('https://detaforwarder-1-b3424134.deta.app/classes', json=payload)
data = response.json()
print(data)