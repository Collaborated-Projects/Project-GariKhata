## import  re
from xml.dom import minidom
from xml_manager import *           #(custom  module)
from global_manager import *        #(custom  module)
from html_manager import *          #(custom  module)


def parse(xml_filename, html_filename):                     ##Takes a '.svg' file and generates an 'html' file from it
    shapes_list = xml_shapename_extractor(xml_filename)

    # Parsing a '.svg' file by tag names
    xml_svg_file = minidom.parse(xml_filename)

    # These tags are requirement dependent. The code is only written for the tags provided in the sample .svg files
    tag_g = xml_svg_file.getElementsByTagName("g")

    tag_rect = xml_svg_file.getElementsByTagName("rect")
    tag_circle = xml_svg_file.getElementsByTagName("circle")
    tag_ellipse = xml_svg_file.getElementsByTagName("ellipse")
    tag_line = xml_svg_file.getElementsByTagName("line")
    tag_polyline = xml_svg_file.getElementsByTagName("polyline")
    tag_polygon = xml_svg_file.getElementsByTagName("polygon")

    ##Shapes deep information starts...
    rects_info = list()
    circles_info = list()
    ellipses_info = list()
    lines_info = list()
    polylines_info = list()
    polygons_info = list()

    for rect in tag_rect:
        rects_info.append((rect.attributes["class"].value,
                           [(int(float(rect.attributes["x"].value)), int(float(rect.attributes["y"].value))),
                           (int(float(rect.attributes["width"].value)), int(float(rect.attributes["height"].value)))]))

    for circle in tag_circle:
        circles_info.append((circle.attributes["class"].value,
                             (int(float(circle.attributes["cx"].value)), int(float(circle.attributes["cy"].value)),
                              int(float(circle.attributes["r"].value)))))
    for ellipse in tag_ellipse:
        ellipses_info.append((ellipse.attributes["class"].value,
                           [(int(float(ellipse.attributes["x"].value)), int(float(ellipse.attributes["y"].value))),
                            (int(float(ellipse.attributes["width"].value)), int(float(ellipse.attributes["height"].value)))]))
    for line in tag_line:
        lines_info.append((line.attributes["class"].value,
                           [(int(float(line.attributes["x1"].value)), int(float(line.attributes["y1"].value))),
                           (int(float(line.attributes["x2"].value)), int(float(line.attributes["y2"].value)))]))
    for polyline in tag_polyline:
        polylines_info.append(
            (polyline.attributes["class"].value, coordinate_extractor(polyline.attributes["points"].value, " ")))
    for polygon in tag_polygon:
        polygons_info.append(
            (polygon.attributes["class"].value, coordinate_extractor(polygon.attributes["points"].value, " ")))

    ##Shapes deep information ends!

    ##List containing tuples of shape name and shape count
    count_shapes = [("rect", len(rects_info)), ("circle", len(circles_info)), ("ellipse", len(ellipses_info)), ("line", len(lines_info)),
                    ("polyline", len(polylines_info)), ("polygon", len(polygons_info))]

    js_filler = ""

    for shape in shapes_list:
        js_filler += '//' + shape + '\n'
        js_filler += 'var array_' + shape + '_' + html_filename[0:len(html_filename)-3] + ' = [];\n' \
                        'var pointer_' + shape + '_' + html_filename[0:len(html_filename)-3] + ' = null;\n\n'
    js_filler += '\n\n'

    js_filler += '//Tooltip\n' \
                 'var tip = null;\n\n'

    js_filler += 'function ' + html_filename[0:len(html_filename)-3] + 'Data()\n' \
                    '{\n'

                                                                            ##canvas name hard-coded. FIX IT!
    js_function = ''

    for shape in count_shapes:
        if(shape[1] != 0):
            if(shape[0] == "rect"):

                for rect_no in range(len(rects_info)):
                    if (rects_info[rect_no][0] == 'cls-1'):
                         pass

                    if (rects_info[rect_no][0] == 'cls-2'):
                        html_function_shape = html_function_shape + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(rect_no) + '].graphics.beginFill("blue"));\n' \
                                         '\t\t\t\t' + shape[0] + 's[' + str(rect_no) + '].graphics.drawRect(' + str(rects_info[rect_no][1][0][0])\
                                            + ', ' + str(rects_info[rect_no][1][0][1]) + ', ' + str(rects_info[rect_no][1][1][0]) + ', ' + str(rects_info[rect_no][1][1][1])\
                                          + ');\n\n'

                        html_function_tick = html_function_tick + '\t\t\t\t' + shape[0] + 's[' + str(rect_no) + '].graphics.beginFill("red"));\n' \
                                            '\t\t\t\t' + shape[0] + 's[' + str(rect_no) + '].graphics.drawRect(' + str(rects_info[rect_no][1][0][0]) \
                                            + ', ' + str(rects_info[rect_no][1][0][1]) + ', ' + str(rects_info[rect_no][1][1][0]) + ', ' + str(rects_info[rect_no][1][1][1]) \
                                            + ');\n'

                        html_function_tick = html_function_tick + '\t\t\t\tif(' + shape[0] + 's[' + str(rect_no) + '].hitTest(stage.mouseX, stage.mouseY))\n' \
                                            '\t\t\t\t{\n' \
                                            '\t\t\t\t\t' + shape[0] + 's[' + str(rect_no) + '].graphics.beginFill("green"));\n' \
                                            '\t\t\t\t\t' + shape[0] + 's[' + str(rect_no) + '].graphics.drawRect(' + str(rects_info[rect_no][1][0][0]) \
                                             + ', ' + str(rects_info[rect_no][1][0][1]) + ', ' + str(rects_info[rect_no][1][1][0]) + ', ' + str(rects_info[rect_no][1][1][1]) \
                                             + ');\n\n'

                        html_function_tick = html_function_tick + '\t\t\t\t\ttip = new foo9.createjs.Tooltip("Rectangle' + str(rect_no) + '", 100, 40);\n' \
                                            '\t\t\t\t\tstage.addChild(tip);\n' \
                                            '\t\t\t\t\ttip.x = stage.mouseX - tip.width/2;\n' \
                                            '\t\t\t\t\ttip.y = stage.mouseY - tip.height;\n'

                        html_function_tick = html_function_tick + '\t\t\t\t}\n\n'

                    if (rects_info[rect_no][0] == 'cls-3'):
                        pass
                    if (rects_info[rect_no][0] == 'cls-4'):
                        pass
                    if (rects_info[rect_no][0] == 'cls-5'):
                        pass
                    if (rects_info[rect_no][0] == 'cls-6'):
                        pass

            if(shape[0] == "circle"):
                for circle_no in range(len(circles_info)):
                    if (circles_info[circle_no][0] == 'cls-1'):
                        pass
                    if (circles_info[circle_no][0] == 'cls-2'):
                        pass
                    if (circles_info[circle_no][0] == 'cls-3'):
                        pass
                    if (circles_info[circle_no][0] == 'cls-4'):
                        html_function_shape = html_function_shape + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(circle_no) + '].graphics.beginFill("red"));\n' \
                                                            '\t\t\t\t' + shape[0] + 's[' + str(circle_no) + '].graphics.drawCircle' + str(circles_info[circle_no][1])\
                                                            + ';\n\n'

                        html_function_tick = html_function_tick + '\t\t\t\t' + shape[0] + 's[' + str(circle_no) + '].graphics.beginFill("red");\n' \
                                                           '\t\t\t\t' + shape[0] + 's[' + str(circle_no) + '].graphics.drawCircle' + str(circles_info[circle_no][1]) \
                                                            + ';\n'

                        html_function_tick = html_function_tick + '\t\t\t\tif(' + shape[0] + 's[' + str(circle_no) + '].hitTest(stage.mouseX, stage.mouseY))\n' \
                                                            '\t\t\t\t{\n' \
                                                            '\t\t\t\t\t' + shape[0] + 's[' + str(circle_no) + '].graphics.beginFill("green");\n' \
                                                            '\t\t\t\t\t' + shape[0] + 's[' + str(circle_no) + '].graphics.drawCircle' + str(circles_info[circle_no][1]) \
                                                            + ';\n\n'

                        html_function_tick = html_function_tick + '\t\t\t\t\ttip = new foo9.createjs.Tooltip("Circle' + str(circle_no) + '", 100, 40);\n' \
                                                                    '\t\t\t\t\tstage.addChild(tip);\n' \
                                                                    '\t\t\t\t\ttip.x = stage.mouseX - tip.width/2;\n' \
                                                                    '\t\t\t\t\ttip.y = stage.mouseY - tip.height;\n'

                        html_function_tick = html_function_tick + '\t\t\t\t}\n\n'

                    if (circles_info[circle_no][0] == 'cls-5'):
                        pass
                    if (circles_info[circle_no][0] == 'cls-6'):
                        pass

            if (shape[0] == "ellipse"):
                for ellipse in ellipses_info:
                    if (ellipse[0] == 'cls-1'):
                        pass
                    if (ellipse[0] == 'cls-2'):
                        pass
                    if (ellipse[0] == 'cls-3'):
                        pass
                    if (ellipse[0] == 'cls-4'):
                        pass
                    if (ellipse[0] == 'cls-5'):
                        pass
                    if (ellipse[0] == 'cls-6'):
                        pass


            if (shape[0] == "line"):
                for line_no in range(len(lines_info)):
                    if (lines_info[line_no][0] == 'cls-1'):
                        pass
                    if (lines_info[line_no][0] == 'cls-2'):
                        pass
                    if (lines_info[line_no][0] == 'cls-3'):
                        pass
                    if (lines_info[line_no][0] == 'cls-4'):
                        html_function_shape = html_function_shape + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(line_no) + '].graphics.beginStroke("black").command);\n' \
                                                            '\t\t\t\t' + shape[0] + 's[' + str(line_no) + '].graphics.moveTo' + str(lines_info[line_no][1][0])
                        for coordinate in range(1, len(lines_info[line_no][1])):
                            html_function_shape = html_function_shape + '.lineTo' + str(lines_info[line_no][1][coordinate])
                        html_function_shape = html_function_shape + ';\n\n'

                        html_function_tick = html_function_tick + '\t\t\t\t' + shape[0] + 's[' + str(line_no) + '].graphics.beginStroke("black").command;\n' \
                                                                '\t\t\t\t' + shape[0] + 's[' + str(line_no) + '].graphics.moveTo' + str(lines_info[line_no][1][0])

                        for coordinate in range(1, len(lines_info[line_no][1])):
                            html_function_tick= html_function_tick + '.lineTo' + str(lines_info[line_no][1][coordinate])
                        html_function_tick = html_function_tick + ';\n'

                        html_function_tick = html_function_tick + '\t\t\t\tif(' + shape[0] + 's[' + str(line_no) + '].hitTest(stage.mouseX, stage.mouseY))\n' \
                                         '\t\t\t\t{\n'

                        html_function_tick = html_function_tick + '\t\t\t\t\t' + shape[0] + 's[' + str(line_no) + '].graphics.beginStroke("black").command;\n' \
                                       '\t\t\t\t\t' + shape[0] + 's[' + str(line_no) + '].graphics.moveTo' + str(lines_info[line_no][1][0])

                        for coordinate in range(1, len(lines_info[line_no][1])):
                            html_function_tick = html_function_tick + '.lineTo' + str(
                                lines_info[line_no][1][coordinate])
                        html_function_tick = html_function_tick + ';\n'

                        html_function_tick = html_function_tick + '\t\t\t\t\ttip = new foo9.createjs.Tooltip("Line' + str(line_no) + '", 100, 40);\n' \
                                         '\t\t\t\t\tstage.addChild(tip);\n' \
                                         '\t\t\t\t\ttip.x = stage.mouseX - tip.width/2;\n' \
                                         '\t\t\t\t\ttip.y = stage.mouseY - tip.height;\n'

                        html_function_tick = html_function_tick + '\t\t\t\t}\n\n'

                    if (lines_info[line_no][0] == 'cls-5'):
                        pass
                    if (lines_info[line_no][0] == 'cls-6'):
                        pass

            if (shape[0] == "polyline"):
                shapeCounter = 0
                js_filler += '\t//' + shape[0] + '\n'

                for polyline_no in range(len(polylines_info)):
                    if (polylines_info[polyline_no][0] == 'cls-1'):
                        pass

                    if (polylines_info[polyline_no][0] == 'cls-2'):
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(polylines_info[polyline_no][1])):
                            js_filler += 'createVector' + str(polylines_info[polyline_no][1][coordinate])

                            if(coordinate != len(polylines_info[polyline_no][1])-1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + ' = new PolyLine('+\
                                     shape[0] + str(shapeCounter) + ');\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + ' = pointer_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + ';\n\n'



                    if (polylines_info[polyline_no][0] == 'cls-3'):
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(polylines_info[polyline_no][1])):
                            js_filler += 'createVector' + str(polylines_info[polyline_no][1][coordinate])

                            if (coordinate != len(polylines_info[polyline_no][1]) - 1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + ' = new PolyLine(' + \
                                     shape[0] + str(shapeCounter) + ');\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + ' = pointer_' + shape[
                                         0] + 's_' + html_filename[0:len(html_filename) - 3] + ';\n\n'


                    if (polylines_info[polyline_no][0] == 'cls-4'):
                        pass
                    if (polylines_info[polyline_no][0] == 'cls-5'):
                        pass
                    if (polylines_info[polyline_no][0] == 'cls-6'):
                        pass

                    shapeCounter += 1

                ##function test()

                js_function += 'function ' + html_filename[0:len(html_filename) - 3] + '()\n'
                js_function += '{\n'
                js_function += '\tclear();\n' \
                                '\tvar i = 0;\n\n'

                js_function += '\t//' + shape[0] + '\n'

                js_function += '\tfor(i=0; i<' + str(shapeCounter) + '; i++)\n' \
                                '\t{\n'
                js_function += '\t\tvar j=0;\n'
                js_function += '\t\tfor(j=0; j<array_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + '[i].array_of_vectors.length; j++)\n'
                js_function += '\t\t{\n\t\t\tif(collidePointLine(mouseX, mouseY, array_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] +\
                               '[i].array_of_vectors[j].x, array_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3]  + \
                               '[i].array_of_vectors[j].y, array_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] +\
                               '[i].array_of_vectors[j+1].x, array_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3]  + \
                               '[i].array_of_vectors[j+1].y, 1) == true)\n'
                js_function += '\t\t\t{\n\t\t\t\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + '[i].color(150);\n' ##COLOR CAN CHANGE

                js_function += '\t\t\t\ttip = new Tooltip("' + shape[0] + '" + i, mouseX, mouseY, 100, 40);\n'
                js_function += '\t\t\t\ttip.show();\n'

                js_function += '\t\t\t}\n\t\t\telse\n\t\t\t{\n' \
                               '\t\t\t\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + '[i].color(0);\n\t\t\t}\n'  ##COLOR CAN CHANGE
                js_function += '\t\t}\n\t}\n\n'

        if (shape[0] == "polygon"):
                shapeCounter = 0
                js_filler += '\t//' + shape[0] + '\n'


                for polygon_no in range(len(polygons_info)):
                    if(polygons_info[polygon_no][0] == 'cls-1'):                ##beginStroke
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(polygons_info[polygon_no][1])):
                            js_filler += 'createVector' + str(polygons_info[polygon_no][1][coordinate])

                            if (coordinate != len(polygons_info[polygon_no][1]) - 1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + ' = new Polygon(' + \
                                     shape[0] + str(shapeCounter) + ', "stroke");\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + ' = pointer_' + shape[
                                         0] + 's_' + html_filename[0:len(html_filename) - 3] + ';\n\n'


                    if (polygons_info[polygon_no][0] == 'cls-2'):               ##beginFill
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(polygons_info[polygon_no][1])):
                            js_filler += 'createVector' + str(polygons_info[polygon_no][1][coordinate])

                            if (coordinate != len(polygons_info[polygon_no][1]) - 1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + ' = new Polygon(' + \
                                     shape[0] + str(shapeCounter) + ', "fill");\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + ' = pointer_' + shape[
                                         0] + 's_' + html_filename[0:len(html_filename) - 3] + ';\n\n'


                    if (polygons_info[polygon_no][0] == 'cls-3'):
                        pass
                    if (polygons_info[polygon_no][0] == 'cls-4'):
                        pass
                    if (polygons_info[polygon_no][0] == 'cls-5'):
                        pass
                    if (polygons_info[polygon_no][0] == 'cls-6'):
                        pass

                    shapeCounter += 1

                #function test()
                js_function += '\t//' + shape[0] + '\n'

                js_function += '\tfor(i=0; i<' + str(shapeCounter) + '; i++)\n' \
                                '\t{\n\t\tif(collidePointPoly(mouseX, mouseY, array_' + shape[0] +'s_' + html_filename[0:len(html_filename) - 3] + \
                               '[i].array_of_vectors) == true)\n'
                js_function += '\t\t{\n\t\t\tarray_' + shape[0] +'s_' + html_filename[0:len(html_filename) - 3] + '[i].color(55);\n'    ##COLOR CAN CHANGE
                js_function += '\t\t\ttip = new Tooltip("' + shape[0] + '" + i, mouseX, mouseY, 100, 40);\n'
                js_function += '\t\t\ttip.show();\n'
                js_function += '\t\t}\n' \
                               '\t\telse\n\t\t{\n' \
                               '\t\t\tarray_' + shape[0] +'s_' + html_filename[0:len(html_filename) - 3] + '[i].color(135);\n'
                js_function += '\t\t}\n\t}\n'

                js_function += '}\n\n'



    js_filler += '}\n\n'





    file = open(html_filename, "w")
    file.write(js_filler)
    file.write(js_function)

parse("../Data Files/GKWaterLines.svg", "test.js")