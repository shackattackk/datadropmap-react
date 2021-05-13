import csv,json

csvFilePath = 'DOH_DataDrop_20210512.csv'
jsonFilePath = 'DOH_Datadrop.json'


data = {}
arr = []
with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for rows in csvReader:
        print(rows)
        id = rows['id']
        arr.append(rows)
    data = {"hospitals":arr}

with open(jsonFilePath, 'w') as jsonFile:
    jsonFile.write(json.dumps(data, indent=4))
