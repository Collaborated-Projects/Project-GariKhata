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

    html_javascript = '\t'
    html_javascript = html_javascript + '\n\t\t<script>\n' \
                                        '\t\t\tvar stage, showTip = false;\n' \
                                        '\t\t\tvar tip = null;\n' \
                                        '\t\t\tfillObj = [];\n'
    for shape in shapes_list:
        html_javascript = html_javascript + '\t\t\t' + shape + 's = [];\n'
    html_javascript = html_javascript + '\n'

                                                                            ##canvas name hard-coded. FIX IT!
    html_function_init = ""
    html_function_init = html_function_init + '\t\t\t\tstage = new createjs.Stage("gkCanvas");\n'


    for shape in count_shapes:
        if(shape[0] in shapes_list):
            html_function_init = html_function_init + '\t\t\t\tfor(var ' + shape[0] + 'number=0; ' + shape[0] + 'number<' + str(shape[1]) + '; ' + shape[0] + 'number++)\n' \
                                                '\t\t\t\t{\n' \
                                                '\t\t\t\t\t' + shape[0] + 's.push(stage.addChild(new createjs.Shape()));\n' \
                                                '\t\t\t\t}\n'

    html_function_shape = ""
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
                                                            + ';\n\n' \

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

                    if (lines_info[line_no][0] == 'cls-5'):
                        pass
                    if (lines_info[line_no][0] == 'cls-6'):
                        pass

            if (shape[0] == "polyline"):
                for polyline_no in range(len(polylines_info)):
                    if (polylines_info[polyline_no][0] == 'cls-1'):
                        pass

                    if (polylines_info[polyline_no][0] == 'cls-2'):
                        html_function_shape = html_function_shape + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(polyline_no) + '].graphics.beginStroke("black").command);\n' \
                                                            '\t\t\t\t' + shape[0] + 's[' + str(polyline_no) + '].graphics.moveTo' + str(polylines_info[polyline_no][1][0])
                        for coordinate in range(1, len(polylines_info[polyline_no][1])):
                            html_function_shape = html_function_shape + '.lineTo' + str(
                                polylines_info[polyline_no][1][coordinate])
                        html_function_shape = html_function_shape + ';\n\n'

                    if (polylines_info[polyline_no][0] == 'cls-3'):
                        html_function_shape = html_function_shape + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(polyline_no) + '].graphics.beginStroke("black").command);\n' \
                                           '\t\t\t\t' + shape[0] + 's[' + str(polyline_no) + '].graphics.moveTo' + str(polylines_info[polyline_no][1][0])
                        for coordinate in range(1, len(polylines_info[polyline_no][1])):
                            html_function_shape = html_function_shape + '.lineTo' + str(
                                polylines_info[polyline_no][1][coordinate])
                        html_function_shape = html_function_shape + ';\n\n'

                    if (polylines_info[polyline_no][0] == 'cls-4'):
                        pass
                    if (polylines_info[polyline_no][0] == 'cls-5'):
                        pass
                    if (polylines_info[polyline_no][0] == 'cls-6'):
                        pass

            if (shape[0] == "polygon"):
                for polygon_no in range(len(polygons_info)):
                    if(polygons_info[polygon_no][0] == 'cls-1'):
                        html_function_shape = html_function_shape + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(polygon_no) +'].graphics.beginStroke("black").command);\n' \
                                                            '\t\t\t\t' + shape[0] + 's[' + str(polygon_no) +'].graphics.moveTo' + str(polygons_info[polygon_no][1][0])
                        for coordinate in range(1, len(polygons_info[polygon_no][1])):
                            html_function_shape = html_function_shape + '.lineTo' + str(polygons_info[polygon_no][1][coordinate])
                        html_function_shape = html_function_shape + ';\n\n'

                    if (polygons_info[polygon_no][0] == 'cls-2'):
                        html_function_shape = html_function_shape + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(polygon_no) + '].graphics.beginFill("red").command);\n' \
                                                            '\t\t\t\t' + shape[0] + 's[' + str(polygon_no) + '].graphics.moveTo' + str(polygons_info[polygon_no][1][0])
                        for coordinate in range(1, len(polygons_info[polygon_no][1])):
                            html_function_shape = html_function_shape + '.lineTo' + str(polygons_info[polygon_no][1][coordinate])
                        html_function_shape = html_function_shape + ';\n\n'

                    if (polygons_info[polygon_no][0] == 'cls-3'):
                        pass
                    if (polygons_info[polygon_no][0] == 'cls-4'):
                        pass
                    if (polygons_info[polygon_no][0] == 'cls-5'):
                        pass
                    if (polygons_info[polygon_no][0] == 'cls-6'):
                        pass

    html_function_shape = html_function_shape + '\t\t\t\tstage.update();\n'


    #print(polygons_info[0])


    html_preparetemplate(html_filename, "GariKhata Neighbourhood Plan",
                         ["../_shared/demo.css", "stylesheet", "text/css", "../Libraries used/css/bootstrap.min.css", "stylesheet", "text/css"],
                         ["../Libraries used/js/easeljs-0.8.2.min.js", "../Libraries used/js/foo9.createjs.tooltip.js", "../Libraries used/js/jquery-3.2.1.js"],
                         html_javascript, [("init()", html_function_init), ("waterlines()", html_function_shape)])


parse("GKWaterLines.svg", "../Output Files/waterlines.html")