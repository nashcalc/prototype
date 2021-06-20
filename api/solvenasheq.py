import nashpy as nash
import numpy as np

testdictsingleeq = {"matrixdict":[{"location":"row0col0subform1","value":"8"},{"location":"row0col0subform2","value":"7"},{"location":"row0col1subform1","value":"6"},{"location":"row0col1subform2","value":"5"},{"location":"row1col0subform1","value":"4"},{"location":"row1col0subform2","value":"3"},{"location":"row1col1subform1","value":"2"},{"location":"row1col1subform2","value":"1"}]}
testdictmultipleeq = {"matrixdict":[{"location":"row0col0subform1","value":"8"},{"location":"row0col0subform2","value":"5"},{"location":"row0col1subform1","value":"6"},{"location":"row0col1subform2","value":"3"},{"location":"row1col0subform1","value":"2"},{"location":"row1col0subform2","value":"3"},{"location":"row1col1subform1","value":"8"},{"location":"row1col1subform2","value":"4"}]}

testdictmorerows = {"matrixdict":[{"location":"row0col0subform1","value":"8"},{"location":"row0col0subform2","value":"5"},{"location":"row0col1subform1","value":"6"},{"location":"row0col1subform2","value":"3"},{"location":"row1col0subform1","value":"2"},{"location":"row1col0subform2","value":"3"},{"location":"row1col1subform1","value":"8"},{"location":"row1col1subform2","value":"4"},{"location":"row2col0subform1","value":"2"},{"location":"row2col0subform2","value":"5"},{"location":"row2col1subform1","value":"7"},{"location":"row2col1subform2","value":"8"}]}

testdictmorecols = {"matrixdict": [{"location":"row0col0subform1","value":"8"},{"location":"row0col0subform2","value":"5"},{"location":"row0col1subform1","value":"6"},{"location":"row0col1subform2","value":"3"},{"location":"row0col2subform1","value":"7"},{"location":"row0col2subform2","value":"4"},{"location":"row1col0subform1","value":"2"},{"location":"row1col0subform2","value":"3"},{"location":"row1col1subform1","value":"8"},{"location":"row1col1subform2","value":"4"},{"location":"row1col2subform1","value":"2"},{"location":"row1col2subform2","value":"6"}]}

testdictallmixed = {"matrixdict":[{"location":"row0col0subform1","value":"2"},{"location":"row0col0subform2","value":"1"},{"location":"row0col1subform1","value":"1"},{"location":"row0col1subform2","value":"2"},{"location":"row1col0subform1","value":"1"},{"location":"row1col0subform2","value":"2"},{"location":"row1col1subform1","value":"2"},{"location":"row1col1subform2","value":"1"}]}

def solvefornasheq(testdict):
    for element in testdict["matrixdict"]:
        splitter = element["location"]
        element["row"] = splitter.split("c")[0]

    rows = []
    for element in testdict["matrixdict"]:
        if element["row"] not in rows:
            rows.append(element["row"])

    player1 = []
    player2 = []

    for element in testdict["matrixdict"]:
        if "subform1" in element["location"]:
            player1.append(element)
    for element in testdict["matrixdict"]:
        if "subform2" in element["location"]:
            player2.append(element)

    payoffs1 = []
    """assuming equal length payoffs which will be enforced before axios post"""
    for i in range(len(player1)):
        payoffs1.append(float(player1[i]["value"]))

    numsplits1 = len(payoffs1)/len(rows)
    split1 = np.array_split(payoffs1,numsplits1)

    payoffs2 = []
    for i in range(len(player2)):
        payoffs2.append(float(player2[i]["value"]))

    numsplits2 = len(payoffs2)/len(rows)
    split2 = np.array_split(payoffs2,numsplits2)

    A = split1
    B = split2

    game_to_solve = nash.Game(A,B)

    equilibria = game_to_solve.vertex_enumeration()

    eqs = []
    for eq in equilibria:
        eqs.append(list(eq))

    new_eqs = []

    for eq in eqs:
        tempeq = []
        for array in eq:
            tempeq.append(np.abs(np.around(array,3)))
        new_eqs.append(tempeq)

    interpretation = {}
    for i in range(len(new_eqs)):
        interpretation["Nash Eq "+str(i+1)]= new_eqs[i]

    """interpretation_by_player = {}
    for k,v in interpretation.items():
        lst = [list(x) for x in v]
        for elem in lst:
                if lst.index(elem) == 0:
                    print("Player 1")
                elif lst.index(elem) == 1:
                    print("Player 2")"""

    full_interpretation = []
    for inter in interpretation:
        for inte in interpretation[inter]:
            probabilities = []
            for i in inte:
                if i>0:
                    probabilities.append(i)
            indices = [j for j, x in enumerate(inte.tolist()) if x>0]
            for i in range(len(indices)):
                if probabilities[i] == 1:
                    message = "Player" + " plays strategy " + str(indices[i]+1)
                else:
                    message = "Player" + " plays strategy " + str(indices[i]+1) + " with probability " + str(probabilities[i])
                full_interpretation.append([inter,message])

    #print(full_interpretation)
            #print(inte)
    #print(interpretation)
    #print(listeqs)
    #print(game_to_solve)
    #print(new_eqs)

    return full_interpretation
#print(solvefornasheq(testdictmultipleeq))
