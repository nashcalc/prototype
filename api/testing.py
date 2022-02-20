from solvenormalnasheq import solvefornormalnasheq
from solveextensivenasheq import solveforextensivenasheq

"""
Writing test cases for all things NashCalc

This is truly where the fun begins
"""

#https://w3percentagecalculator.com/json-to-one-line-converter/

case1 = {'matrixdict': [{'row': '1', 'col': '1', 'player': '1', 'value': '2'}, {'row': '1', 'col': '1', 'player': '2', 'value': '2'}, {'row': '1', 'col': '2', 'player': '1', 'value': '2'}, {'row': '1', 'col': '2', 'player': '2', 'value': '2'}, {'row': '2', 'col': '1', 'player': '1', 'value': '2'}, {'row': '2', 'col': '1', 'player': '2', 'value': '2'}, {'row': '2', 'col': '2', 'player': '1', 'value': '5'}, {'row': '2', 'col': '2', 'player': '2', 'value': '5'}]}
def testNormalNashEq():
    #assert solvenormalnasheq() == output "should be output"
    print(solvefornormalnasheq(case1))

testNormalNashEq()
