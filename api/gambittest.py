import nashpy as nash
import numpy as np

testdict = {"matrixdict":[{"location":"row0col0subform1","value":"8"},{"location":"row0col0subform2","value":"7"},{"location":"row0col1subform1","value":"6"},{"location":"row0col1subform2","value":"5"},{"location":"row1col0subform1","value":"4"},{"location":"row1col0subform2","value":"3"},{"location":"row1col1subform1","value":"2"},{"location":"row1col1subform2","value":"1"}]}

player1 = []
player2 = []

for element in testdict["matrixdict"]:
    if "subform1" in element["location"]:
        player1.append(element)
for element in testdict["matrixdict"]:
    if "subform2" in element["location"]:
        player2.append(element)

payoffs = []
"""assuming equal length payoffs which will be enforced before axios post"""
for i in range(len(player1)):
    payoffs.append([player1[i]["value"],player2[i]["value"]])

A = np.array(payoffs)
print(A)
"""game_to_solve = nash.Game(A)
equilibria = game_to_solve.vertex_enumeration()
for eq in equilibria:
    print(eq)"""
