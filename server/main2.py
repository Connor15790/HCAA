import numpy as np
import pandas as pd
from sklearn import preprocessing
from sklearn import tree
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn import metrics
import matplotlib.pyplot as plt
import csv
import sys

# Define a function to download the CSV file
def download(url, filename):
    response = pd.read_csv(url)
    response.to_csv(filename, index=False)

ticker = sys.argv[1]

# Assuming the CSV file is at the specified path
filename = r'C:\Users\Conno\OneDrive\Desktop\VS Code Projects\Major Project ML 2\Training.csv'

# Read the CSV file into a DataFrame
my_data = pd.read_csv(filename)

# Print the first 5 rows of the DataFrame
# print(my_data.head())

symptomsList = []

# with open('Training.csv') as f:
#     data = list(csv.reader(f))
# print("rows:", len(data))
# print("columns:", len(data[0]))

with open('Training.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    
    # Read the first row
    first_row = next(reader)
    
    # Exclude the last column
    first_row_except_last = first_row[:-1]
    
    # Loop through the elements of the first row except the last one
    for item in first_row_except_last:
        symptomsList.append(item)

# Extracting features
X = my_data[["itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", "shivering", "chills", "joint_pain", "stomach_pain", "acidity", "ulcers_on_tongue", "muscle_wasting", "vomiting", "burning_micturition", "spotting_urination", "dischromic_patches", "watering_from_eyes", "cough", "chest_pain", "yellowish_skin", "nausea", "loss_of_appetite", "abdominal_pain", "yellowing_of_eyes", "indigestion", "passage_of_gases", "internal_itching"]]

y = my_data["medications"]

X_trainset, X_testset, y_trainset, y_testset = train_test_split(X, y, test_size=0.3, random_state=3)
# print('Shape of X training set {}'.format(X_trainset.shape),'&',' Size of y training set {}'.format(y_trainset.shape))

drugTree= DecisionTreeClassifier (criterion="entropy", max_depth=9)

drugTree.fit(X_trainset,y_trainset)

predTree=drugTree.predict(X_testset)

# print(predTree[0:10])
# print(y_testset[0:10])

# print("DecisionTrees's Accuracy: ", metrics.accuracy_score(y_testset, predTree)*100,"%")

itching, skin_rash, nodal_skin_eruptions, continuous_sneezing, shivering, chills, joint_pain, stomach_pain, acidity, ulcers_on_tongue, muscle_wasting, vomiting, burning_micturition, spotting_urination, dischromic_patches, watering_from_eyes, cough, chest_pain, yellowish_skin, nausea, loss_of_appetite, abdominal_pain, yellowing_of_eyes, indigestion, passage_of_gases, internal_itching = 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

symptomsInputList = [item for item in ticker.lower().split()]
# symptomsInputList = [ticker]

for i in symptomsInputList:
    if i in symptomsList:
        x = i
        exec("%s = %d" % (x,1))

# Rest of the data
newData = {
    "itching": itching,
    "skin_rash": skin_rash,
    "nodal_skin_eruptions": nodal_skin_eruptions,
    "continuous_sneezing": continuous_sneezing,
    "shivering": shivering,
    "chills": chills,
    "joint_pain": joint_pain,
    "stomach_pain": stomach_pain,
    "acidity": acidity,
    "ulcers_on_tongue": ulcers_on_tongue,
    "muscle_wasting": muscle_wasting,
    "vomiting": vomiting,
    "burning_micturition": burning_micturition,
    "spotting_urination": spotting_urination,
    "dischromic_patches": dischromic_patches,
    "watering_from_eyes": watering_from_eyes,
    "cough": cough,
    "chest_pain": chest_pain,
    "yellowish_skin": yellowish_skin,
    "nausea": nausea,
    "loss_of_appetite": loss_of_appetite,
    "abdominal_pain": abdominal_pain,
    "yellowing_of_eyes": yellowing_of_eyes,
    "indigestion": indigestion,
    "passage_of_gases": passage_of_gases,
    "internal_itching": internal_itching,
}

# Create a DataFrame for the new instance
new_instance = pd.DataFrame([newData])

predicted_drug = drugTree.predict(new_instance)

print(predicted_drug[0])
# print(ticker)