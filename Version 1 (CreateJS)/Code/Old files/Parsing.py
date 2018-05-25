from xml.dom import minidom
def extractor(data):
    coor = data.split(" ")
    xy=[]
    for i in range(0,len(coor),2):
        xy.append((coor[i], coor[i+1]))
    return(xy)

def parse(name):
    
    xmldoc = minidom.parse(name)

    g = xmldoc.getElementsByTagName("g")
    
    tag_polygon = xmldoc.getElementsByTagName("polygon")
    tag_polyline = xmldoc.getElementsByTagName("polyline")
    tag_line = xmldoc.getElementsByTagName("line")
    tag_rect = xmldoc.getElementsByTagName("rect")
    tag_circle = xmldoc.getElementsByTagName("circle")
    ##print ("Len :", len(g))
    ##print ("Attribute Name : ", g[1].attributes['data-name'].value)
    ##print ("Text : ", g[0].firstChild.nodeValue)
##    linenum = 0;
    fil = open("code.html", "w")

    head = ""
    head = head + '<!DOCTYPE html>\n<html>\n<head>\n'
    head = head + '\t<title>GariKhata Neighbourhood Plan</title>\n'
    head = head + '\t<link href="../_shared/demo.css" rel="stylesheet" type="text/css">\n'
    head = head + '\t<script src="..\Libraries used\easeljs-0.8.2.min.js"></script>\n'
    head = head + '\t<script src="..\Libraries used\foo9.createjs.tooltip.js"></script>\n\t<script>\n'
    fil.write(head)
    assVar = ''
    assVar = assVar + '\t\tvar stage, showTip = false;\n'
    assVar = assVar + '\t\tvar tip = null;\n'
    assVar = assVar + '\t\tvar polygons = [];\n'
    assVar = assVar + '\t\tvar polylines= [];\n'
    assVar = assVar + '\t\t fillObj = [];\n'
    fil.write(assVar)
    init = ''
    init = init + '\t\tfunction init(){\n'
    init = init + '\t\t\tstage = new createjs.Stage("demoCanvas");\n'
    fil.write(init)
    #for loop; pushes drawable objects insode the objects array
    objPgon = ''
    objPgon = objPgon + '\t\t\t' + 'for(var i=0; i<' + str(len(tag_polygon)) + '; i++)'
    objPgon = objPgon + '\n\t\t\t' + '{' + '\n\t\t\t\t'
    objPgon = objPgon + 'polygons.push(stage.addChild(new createjs.Shape()));'
    objPgon = objPgon + '\n\t\t\t' + '}\n'

    objPline = ''
    objPline = objPline + '\t\t\t' + 'for(var i=0; i<' + str(len(tag_polyline)) + '; i++)'
    objPline = objPline + '\n\t\t\t' + '{' + '\n\t\t\t\t'
    objPline = objPline + 'polylines.push(stage.addChild(new createjs.Shape()));'
    objPline = objPline + '\n\t\t\t' + '}\n'

    fil.write(objPgon)
    drawingBlocks = False
    drawingBuildings = False
    drawingGas = False
    drawingPlot = False
    drawingSewage = False
    drawingWater= False
    
    blck_num=0
    buildPol=[]
    build_num=0
    pline_num=0
    rect_num=0
    circle_num=0
    
    functionTick = ""
    allTick = functionTick =  functionTick + '\t\tfunction tick(event) {\n' + "\t\t\t" +"if(tip != null){\n" + "\t\t\t\t" +"tip.visible = false;\n\t\t\t}\n"
    drawtypetext = ""
    highlighttypetext = ""
    blockline_text=""
    buildline_text=""
    gasline_text=""
    plotline_text=""
    sewline_text=""
    waterline_text=""
    

    for s in g :
        att=s.attributes['id'].value
        if att=='Block_Line':
            drawingBlocks=True
            for p in tag_polygon:
                _att=p.attributes['points'].value
                chck=p.attributes['class'].value
                if chck=='cls-1':
                    coordinates = extractor(_att)
                    polygontext = "\t\t\tfillObj.push(objects[" + str(blck_num) + "].graphics.beginStroke(\"black\").command);"
                    tmptext = "\t\t\tobjects[" + str(blck_num) + "].graphics.moveTo"
                    for i in range(len(coordinates)):
                        tmptext = tmptext + "("
                        tmptext = tmptext + coordinates[i][0].split(".")[0]+ "," + coordinates[i][1].split(".")[0]
                        tmptext = tmptext + ")"
                        if i < (len(coordinates) - 1):
                            tmptext = tmptext + ".lineTo"
                    tmptext = tmptext + ";"
                    blck_num+=1
                    tmptext = polygontext + '\n' + tmptext
##                    if pol_num==9: #condition to remove the newline after polygons finish. a bad code but works rn
##                        blockline_text = blockline_text + tmptext
##                    else:
                    blockline_text = blockline_text + tmptext + '\n'
            print(blockline_text)
            fil.write(blockline_text)
        elif att == "Building_Line":
            drawingBuildings=True
            for i in tag_polygon: #creates a new list; contains data of building line polygons; thus its length can be used instead of hard coding;
                cls=i.attributes['class'].value
                if cls == 'cls-2':
                    buildPol.append(i)
            build_num=len(buildPol)

            for p in tag_polygon:
                _att=p.attributes['points'].value
                chck=p.attributes['class'].value
                if chck=='cls-2':
                    coordinates = extractor(_att)
                    polygontext = "\t\t\tfillObj.push(objects[" + str(build_num) + "].graphics.beginFill(\"red\").command);"
                    tmptext = "\t\t\tobjects[" + str(build_num) + "].graphics.moveTo"
                    for i in range(len(coordinates)):
                        tmptext = tmptext + "("
                        tmptext = tmptext + coordinates[i][0].split(".")[0]+ "," + coordinates[i][1].split(".")[0]
                        tmptext = tmptext + ")"
                        if i < (len(coordinates) - 1):
                            tmptext = tmptext + ".lineTo"
                    tmptext = tmptext + ";"
                    tmptext = polygontext + '\n' + tmptext
                    build_num+=1
                    buildline_text=buildline_text + tmptext + '\n'
            print(buildline_text)
            fil.write(buildline_text)
            call='\n\t\t\tconsole.log(objects);\n\t\t\tcreatejs.Ticker.on("tick", tick);\n\t\t}\n'
            fil.write(call)
        elif att == 'Gas_Lines': #one line tag missing
            drawingGas = True
            for p in tag_polyline:
                _att=p.attributes['points'].value
##                chck=p.attributes['class'].value
##                if chck=='cls-2':
                coordinates = extractor(_att)
                polylinetext = "polyline" + str(pline_num) + '.graphics.beginStroke("Green");'
                pline_tmptext = "polyline" + str(pline_num) + ".graphics.moveTo"
                for i in range(len(coordinates)):
                    pline_tmptext = pline_tmptext + "("
                    pline_tmptext = pline_tmptext + coordinates[i][0].split(".")[0]+ "," + coordinates[i][1].split(".")[0]
                    pline_tmptext = pline_tmptext + ")"
                    if i < (len(coordinates) - 1):
                        pline_tmptext = pline_tmptext + ".lineTo"
                pline_tmptext = pline_tmptext + ";"
                pline_tmptext = polylinetext + '\n' + pline_tmptext
                pline_num+=1
                gasline_text = gasline_text + pline_tmptext + '\n'
            print(gasline_text)
##        elif att == 'Plot_Profile': #rect tags missing
##            pol_num=9
##            for p in tag_polygon:
##                _att=p.attributes['points'].value
##                chck=p.attributes['class'].value
##                if chck=='cls-2':
##                    coordinates = extractor(_att)
##                    polygontext = "polygon" + str(pol_num) + ".graphics.beginFill(\"red\");"
##                    plot_tmptext = "polygon" + str(pol_num) + ".graphics.moveTo"
##                    for i in range(len(coordinates)):
##                        plot_tmptext = plot_tmptext + "("
##                        plot_tmptext = plot_tmptext + coordinates[i][0].split(".")[0]+ "," + coordinates[i][1].split(".")[0]
##                        plot_tmptext = plot_tmptext + ")"
##                        if i < (len(coordinates) - 1):
##                            plot_tmptext = plot_tmptext + ".lineTo"
##                    plot_tmptext = plot_tmptext + ";"
##                    plot_tmptext = polygontext + '\n' + plot_tmptext
##                    pol_num+=1
##                    if pol_num==137:
##                        plotline_text = plotline_text + plot_tmptext
##                    else:
##                        plotline_text = plotline_text + plot_tmptext + '\n'
##            print(plotline_text)
##        elif att == 'Sewage':
##            drawtypetext = drawtypetext + "!!SEWAGE!!.graphics.beginFill(\"red\");"
##            drawingSewage = True;  #need to learn how the circle taag works
##           
##        elif att == 'Water':
##            for p in tag_polyline:
##                _att=p.attributes['points'].value
####                chck=p.attributes['class'].value
####                if chck=='cls-2':
##                coordinates = extractor(_att)
##                polylinetext = "polyline" + str(pline_num) + ".graphics.beginFill(\"red\");"
##                pline_tmptext = "polyline" + str(pline_num) + ".graphics.moveTo"
##                for i in range(len(coordinates)):
##                    pline_tmptext = pline_tmptext + "("
##                    pline_tmptext = pline_tmptext + coordinates[i][0].split(".")[0]+ "," + coordinates[i][1].split(".")[0]
##                    pline_tmptext = pline_tmptext + ")"
##                    if i < (len(coordinates) - 1):
##                        pline_tmptext = pline_tmptext + ".lineTo"
##                pline_tmptext = pline_tmptext + ";"
##                pline_tmptext = polylinetext + '\n' + pline_tmptext
##                pline_num+=1
##                if pline_num==6:
##                    waterline_text = waterline_text + pline_tmptext
##                else:
##                    waterline_text = waterline_text + pline_tmptext + '\n'
##            print(waterline_text)
##
####    for p in pol:
####        _att=p.attributes['points'].value
####        coordinates = extractor(_att)
####        polygontext = "polygon" + str(linenum) + drawtypetext
####        highlightpolygontext = "polygon" + str(linenum) + ".graphics.beginFill(\"green\");"
####        tmptext = "polygon" + str(linenum) + ".graphics.moveTo"
####        for i in range(len(coordinates)):
####            tmptext = tmptext + "("
####            tmptext = tmptext + coordinates[i][0].split(".")[0]+ "," + coordinates[i][1].split(".")[0]
####            tmptext = tmptext + ")"
####            if i < (len(coordinates) - 1):
####                tmptext = tmptext + ".lineTo"
####        tmptext = tmptext + ";"
#####
##        
        functionTick=""
##        if(drawingBuildings) == True:
##            functionTick = "\t\t\t" + "for(var i=" + str(len(buildPol)) + "; "
##            functionTick = functionTick + "i<" + str(build_num) +"; i++)\n\t\t\t{\n"
##            functionTick = functionTick + "\t\t\t\t" + "fillObj[i].style=" + '"red";\n\n'
##            functionTick = functionTick + "\t\t\t\t" + "if(objects[i].hitTest(stage.mouseX, stage.mouseY)) {\n"
##            functionTick = functionTick + "\t\t\t\t\t" + "fillObj[i].style=" + '"green";\n'
##            functionTick = functionTick + "\t\t\t\t\t" + 'tip = new foo9.createjs.Tooltip("object" + i, 100, 40);\n'
##            functionTick = functionTick + "\t\t\t\t\t" + 'stage.addChild(tip);\n'
##            functionTick = functionTick + "\t\t\t\t\t" + "tip.x = stage.mouseX - tip.width/2;\n"
##            functionTick = functionTick + "\t\t\t\t\t" + "tip.y = stage.mouseY - tip.height;\n"
##            functionTick = functionTick + "\t\t\t\t" + "}\n" + "\t\t\t" + "}\n"
        if(drawingGas) == True:
            functionTick = "\t\t\t" + polygontext + functionTick + "\n" + "\t\t\t" + tmptext +"\n"            
            functionTick =  functionTick + "\t\t\t" +"if(" + "polygon" + str(linenum) + ".hitTest(stage.mouseX, stage.mouseY)) {\n\t\t\t\t"
            functionTick =  functionTick + highlightpolygontext + "\n"
            functionTick =  functionTick + "\t\t\t\t" + tmptext + "\n"
            functionTick =  functionTick + "\t\t\t\t\t" + "tip = new foo9.createjs.Tooltip(\"Polygon" + str(linenum) +"\", 100, 40);\n"
            functionTick =  functionTick + "\t\t\t\t\t" + "stage.addChild(tip);\n"
            functionTick =  functionTick + "\t\t\t\t\t" + "tip.x = stage.mouseX - tip.width/2;\n"
            functionTick =  functionTick + "\t\t\t\t\t" + "tip.y = stage.mouseY - tip.height;\n"
            functionTick =  functionTick + "\t\t\t" + "}\n"
##        allTick=allTick + functionTick
##    print(allTick)
##    fil.write(allTick)
##    cap = ''
##    cap = cap + '\n\n\t\t\tstage.update(event);\n'
##    cap = cap + '\t\t}\n'
##    cap = cap + '\t</script>\n' + '</head>\n' + '<body onload="init();">\n'
##    cap = cap + '\t<canvas id="demoCanvas" width="1200" height="1200">\n'
##    cap = cap + '\t\talternate content\n' + '\t</canvas>\n' + '</body>\n' + '</html>'
##    fil.write(cap)
##    fil.close()       
##
##    
parse("GKPlotProfile.svg")
