import nashpy as nash
import numpy as np

def solvefornormalnasheq(matrixdict):
    matrixdict = matrixdict["matrixdict"]
    p1_payoffs = []
    p2_payoffs = []

    for i in range(len(matrixdict)):
        if int(matrixdict[i]["player"]) == 1:
            p1_payoffs.append(matrixdict[i])
        elif int(matrixdict[i]["player"]) == 2:
            p2_payoffs.append(matrixdict[i])

    p1_payoffs_to_row = []
    p2_payoffs_to_row = []

    types_of_rows = []

    for i in range(len(p1_payoffs)):
        if int(p1_payoffs[i]["row"]) not in types_of_rows:
            types_of_rows.append(int(p1_payoffs[i]["row"]))

    for type in types_of_rows:
        row_templist1 = []
        for i in range(len(p1_payoffs)):
            if int(p1_payoffs[i]["row"]) == type:
                row_templist1.append(int(p1_payoffs[i]["value"]))
        p1_payoffs_to_row.append(row_templist1)

    for type in types_of_rows:
        row_templist2 = []
        for i in range(len(p2_payoffs)):
            if int(p2_payoffs[i]["row"]) == type:
                row_templist2.append(int(p2_payoffs[i]["value"]))
        p2_payoffs_to_row.append(row_templist2)

    p1 = np.array(p1_payoffs_to_row)
    p2 = np.array(p2_payoffs_to_row)

    game_to_solve = nash.Game(p1,p2)

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
        interpretation["Nash Eq "+str(i+1) + ": "]= new_eqs[i]

    interpretationoflists = {}
    for i in range(len(new_eqs)):
        tempeqlist = []
        for j in range(len(new_eqs[i])):
            tempeqlist.append(new_eqs[i][j].tolist())
        interpretationoflists[i+1]=tempeqlist

    full_interpretation = []
    for inter in interpretation:
        for i in range(len(interpretation[inter])):
            inte = interpretation[inter][i]
            player = i+1
            probabilities = []
            for i in inte:
                if i>0:
                    probabilities.append(i)
            indices = [j for j, x in enumerate(inte.tolist()) if x>0]
            for i in range(len(indices)):
                if probabilities[i] == 1:
                    message = "Player " + str(player) + " plays strategy " + str(indices[i]+1)
                else:
                    message = "Player " + str(player) + " plays strategy " + str(indices[i]+1) + " with probability " + str(probabilities[i])
                full_interpretation.append([inter,message])

    full_interpretation.append(interpretationoflists)

    return full_interpretation
