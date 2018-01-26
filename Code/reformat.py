from xml.dom import minidom
from Parsing import parse


def reformat(name):#"GKBaseMap.svg"
    file = open(name)
    txt = file.read()
    file.close()
    reformater = ""
    for i in range(len(txt)):
        reformater = reformater + txt[i]
        if txt[i] == ">":
            reformater = reformater + "\r"
    namelst=list(name)
    newname=''
    for i in range(len(namelst)):
        if namelst[i]=='.'and namelst[i+1]=='s' and namelst[i+2]=='v'and namelst[i+3]=='g':
            break
        else:
            newname=newname+namelst[i]
##        print(newname)
    file = open(newname + ".txt", "w")
    file.write(reformater)
    file.close()
##    parse(name)
