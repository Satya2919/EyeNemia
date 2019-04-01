import requests
url = "https://smsapi.engineeringtgr.com/send/"
params = dict(
    Mobile='8056547003',
    Password='sivakrisha1@',
    Key='becoow3OkdIH98KRuAJ6pxabXjFq',
    Message='This guy found to be anemic Id:56dr4 Name:xyz,age:30,number:739696896',
    To='7395958896')

resp = requests.get(url, params)
print(resp,resp.text);