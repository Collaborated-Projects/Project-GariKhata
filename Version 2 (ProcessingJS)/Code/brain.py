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
        js_filler += 'var array_' + shape + 's_' + html_filename[0:len(html_filename)-3] + ' = [];\n' \
                        'var pointer_' + shape + 's_' + html_filename[0:len(html_filename)-3] + ' = null;\n\n'
    js_filler += '\n\n'

    js_filler += '//Tooltip\n' \
                 'var tip = null;\n\n'

    js_filler += 'function ' + html_filename[0:len(html_filename)-3] + 'Data()\n' \
                    '{\n'

                                                                            ##canvas name hard-coded. FIX IT!
    js_function = ''
    js_function += 'function ' + html_filename[0:len(html_filename) - 3] + '()\n'
    js_function += '{\n'
    js_function += '\tclear();\n' \
                   '\tvar i = 0;\n\n'
    print(rects_info)

    for shape in count_shapes:

        if(shape[1] != 0):
            if(shape[0] == "rect"):
                shapeCounter = 0
                js_filler += '\t//' + shape[0] + '\n'

                for rect_no in range(len(rects_info)):
                    if (rects_info[rect_no][0] == 'cls-1'):
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(rects_info[rect_no][1])):
                            js_filler += 'createVector' + str(rects_info[rect_no][1][coordinate])

                            if (coordinate != len(rects_info[rect_no][1]) - 1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[
                                                                      0:len(html_filename) - 3] + ' = new Rectangle(' + \
                                     shape[0] + str(shapeCounter) + ', "stroke");\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(
                            rect_no) + '] = pointer_' + shape[0] + 's_' + html_filename[
                                                                          0:len(html_filename) - 3] + ';\n\n'

                    if (rects_info[rect_no][0] == 'cls-2'):
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(rects_info[rect_no][1])):
                            js_filler += 'createVector' + str(rects_info[rect_no][1][coordinate])

                            if (coordinate != len(rects_info[rect_no][1]) - 1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[
                                                                      0:len(html_filename) - 3] + ' = new Rectangle(' + \
                                     shape[0] + str(shapeCounter) + ', "fill");\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(
                            rect_no) + '] = pointer_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + ';\n\n'

                    if (rects_info[rect_no][0] == 'cls-3'):
                        pass
                    if (rects_info[rect_no][0] == 'cls-4'):
                        pass
                    if (rects_info[rect_no][0] == 'cls-5'):
                        pass
                    if (rects_info[rect_no][0] == 'cls-6'):
                        pass

                    shapeCounter += 1

                # function test()
                js_function += '\t//' + shape[0] + '\n'

                js_function += '\tfor(i=0; i<' + str(shapeCounter) + '; i++)\n' \
                                                                     '\t{\n\t\tif(collidePointRect(mouseX, mouseY, array_' + \
                               shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + \
                               '[i].array_of_vectors[0].x, ' \
                               'array_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[i].array_of_vectors[0].y, array_' +\
                               shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[i].array_of_vectors[1].x, array_' +\
                               shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[i].array_of_vectors[1].y) == true)\n'


                js_function += '\t\t{\n\t\t\tarray_' + shape[0] + 's_' + html_filename[0:len(
                        html_filename) - 3] + '[i].color(55);\n'  ##COLOR CAN CHANGE
                js_function += '\t\t\ttip = new Tooltip("' + shape[0] + '" + i, mouseX, mouseY, 100, 40);\n'
                js_function += '\t\t\ttip.show();\n'
                js_function += '\t\t}\n' \
                                   '\t\telse\n\t\t{\n' \
                                   '\t\t\tarray_' + shape[0] + 's_' + html_filename[
                                                                      0:len(html_filename) - 3] + '[i].color(135);\n'
                js_function += '\t\t}\n\t}\n\n'


            if(shape[0] == "circle"):
                shapeCounter = 0
                js_filler += '\t//' + shape[0] + '\n'

                for circle_no in range(len(circles_info)):
                    if (circles_info[circle_no][0] == 'cls-1'):
                        pass
                    if (circles_info[circle_no][0] == 'cls-2'):
                        pass
                    if (circles_info[circle_no][0] == 'cls-3'):
                        pass
                    if (circles_info[circle_no][0] == 'cls-4'):
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = '

                        for coordinate in range(0, len(circles_info[circle_no][1])):
                            js_filler += 'createVector' + str(circles_info[circle_no][1][coordinate])


                        js_filler += ';\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[
                                                                      0:len(html_filename) - 3] + ' = new Circle(' + \
                                     shape[0] + str(shapeCounter) + ', "stroke");\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(
                            circle_no) + '] = pointer_' + shape[
                                         0] + 's_' + html_filename[0:len(html_filename) - 3] + ';\n\n'

                    if (circles_info[circle_no][0] == 'cls-5'):
                        pass
                    if (circles_info[circle_no][0] == 'cls-6'):
                        pass

                    shapeCounter += 1

                    # function test()
                    js_function += '\t//' + shape[0] + '\n'

                    js_function += '\tfor(i=0; i<' + str(shapeCounter) + '; i++)\n' \
                                                                         '\t{\n\t\tif(collidePointCircle(mouseX, mouseY, array_' + \
                                   shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + \
                                   '[i].vector_point.x, array_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[i].vector_point.y,' \
                                    ' 2 * ' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + ') == true)\n'
                    js_function += '\t\t{\n\t\t\tarray_' + shape[0] + 's_' + html_filename[0:len(
                        html_filename) - 3] + '[i].color(55);\n'  ##COLOR CAN CHANGE
                    js_function += '\t\t\ttip = new Tooltip("' + shape[0] + '" + i, mouseX, mouseY, 100, 40);\n'
                    js_function += '\t\t\ttip.show();\n'
                    js_function += '\t\t}\n' \
                                   '\t\telse\n\t\t{\n' \
                                   '\t\t\tarray_' + shape[0] + 's_' + html_filename[
                                                                      0:len(html_filename) - 3] + '[i].color(135);\n'
                    js_function += '\t\t}\n\t}\n'

                    js_function += '}\n\n'

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
                    if (lines_info[line_no][0] == 'cls-4'):                 ## TO BE WRITTEN
                        pass

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
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + '[' + str(polyline_no) + '] = pointer_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + ';\n\n'



                    if (polylines_info[polyline_no][0] == 'cls-3'):
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(polylines_info[polyline_no][1])):
                            js_filler += 'createVector' + str(polylines_info[polyline_no][1][coordinate])

                            if (coordinate != len(polylines_info[polyline_no][1]) - 1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + ' = new PolyLine(' + \
                                     shape[0] + str(shapeCounter) + ');\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(polyline_no) + '] = pointer_' + shape[
                                         0] + 's_' + html_filename[0:len(html_filename) - 3] + ';\n\n'


                    if (polylines_info[polyline_no][0] == 'cls-4'):
                        pass
                    if (polylines_info[polyline_no][0] == 'cls-5'):
                        pass
                    if (polylines_info[polyline_no][0] == 'cls-6'):
                        pass

                    shapeCounter += 1

                ##function test()
                js_function += '\t//' + shape[0] + '\n'

                js_function += '\tfor(i=0; i<' + str(shapeCounter) + '; i++)\n' \
                                '\t{\n'
                js_function += '\t\tvar j=0;\n'
                js_function += '\t\tfor(j=0; j<array_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + '[i].array_of_vectors.length - 1; j++)\n'
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
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(polygon_no) + '] = pointer_' + shape[
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
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(polygon_no) + '] = pointer_' + shape[
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

parse("../Data Files/GKPlotProfile.svg", "test.js")