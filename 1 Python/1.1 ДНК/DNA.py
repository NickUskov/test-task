userInput = str(input())
l = len(userInput)-1
c = 1
result = ''
if len(userInput)==1:
    result = result +userInput+str(c)
else:
    for i in range(0,l):
        if userInput[i]== userInput[i+1]:
            c +=1
        elif userInput[i]!= userInput[i+1]:
            result = result + userInput[i]+str(c)
            c = 1
    for j in range(l,l+1):
        if userInput[-1]== userInput[-2]:
            result = result +userInput[j]+str(c)
        elif userInput[-1]!= userInput[-2]:
            result = result +userInput[j]+str(c)
            c = 1
print(result)
input("Press enter to exit ;)")
