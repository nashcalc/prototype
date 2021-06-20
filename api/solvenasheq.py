import nashpy as nash
import numpy as np

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
    print(game_to_solve)
    equilibria = game_to_solve.vertex_enumeration()

    eqs = []
    for eq in equilibria:
        eqs.append(eq)

    eqs = np.around(eqs,3)

    return eqs
