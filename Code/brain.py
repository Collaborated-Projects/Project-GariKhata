## import  re
from xml.dom import minidom
from xml_manager import *           #(custom  module)
from global_manager import *        #(custom  module)
from html_manager import *          #(custom  module)



def parse(xml_filename):                                        ##Takes a '.svg' file and generates an 'html' file from it
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
                              int((float(ellipse.attributes["cx"].value)), int(float(ellipse.attributes["cy"].value)),
                                  int(float(ellipse.attributes["rx"].value)),
                                  int(float(ellipse.attributes["ry"].value)))))
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
    count_shapes = [("rect", len(rects_info)), ("circle", len(circles_info)), ("ellipse", len(ellipses_info)), ("line", lines_info),
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
    html_javascript = html_javascript + '\t\t\tfunction init()\n' \
                                        '\t\t\t{\n' \
                                        '\t\t\t\tstage = new createjs.Stage("gkCanvas");\n'
    for shape in count_shapes:
        if(shape[0] in shapes_list):
            html_javascript = html_javascript + '\t\t\t\tfor(var ' + shape[0] + 'number=0; ' + shape[0] + 'number<' + str(shape[1]) + '; ' + shape[0] + 'number++)\n' \
                                                '\t\t\t\t{\n' \
                                                '\t\t\t\t\t' + shape[0] + 's.push(stage.addChild(new createjs.Shape()));\n' \
                                                '\t\t\t\t}\n'

    for shape in count_shapes:
        if(shape[1] != 0):
            if(shape[0] == "rect"):

                for rect_no in range(len(rects_info)):
                    if (rects_info[rect_no][0] == 'cls-1'):
                         pass

                    if (rects_info[rect_no][0] == 'cls-2'):
                        html_javascript = html_javascript + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(rect_no) + '].graphics.beginFill("blue"));\n' \
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
                        html_javascript = html_javascript + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(circle_no) + '].graphics.beginFill("red"));\n' \
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
                        html_javascript = html_javascript + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(line_no) + '].graphics.beginStroke("black").command);\n' \
                                                            '\t\t\t\t' + shape[0] + 's[' + str(line_no) + '].graphics.moveTo' + str(lines_info[line_no][1][0])
                        for coordinate in range(1, len(lines_info[line_no][1])):
                            html_javascript = html_javascript + '.lineTo' + str(lines_info[line_no][1][coordinate])
                        html_javascript = html_javascript + ';\n\n'

                    if (lines_info[line_no][0] == 'cls-5'):
                        pass
                    if (lines_info[line_no][0] == 'cls-6'):
                        pass

            if (shape[0] == "polyline"):
                for polyline_no in range(len(polylines_info)):
                    if (polylines_info[polyline_no][0] == 'cls-1'):
                        pass

                    if (polylines_info[polyline_no][0] == 'cls-2'):
                        html_javascript = html_javascript + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(polyline_no) + '].graphics.beginStroke("black").command);\n' \
                                                            '\t\t\t\t' + shape[0] + 's[' + str(polyline_no) + '].graphics.moveTo' + str(polylines_info[polyline_no][1][0])
                        for coordinate in range(1, len(polylines_info[polyline_no][1])):
                            html_javascript = html_javascript + '.lineTo' + str(
                                polylines_info[polyline_no][1][coordinate])
                        html_javascript = html_javascript + ';\n\n'

                    if (polylines_info[polyline_no][0] == 'cls-3'):
                        html_javascript = html_javascript + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(polyline_no) + '].graphics.beginStroke("black").command);\n' \
                                           '\t\t\t\t' + shape[0] + 's[' + str(polyline_no) + '].graphics.moveTo' + str(polylines_info[polyline_no][1][0])
                        for coordinate in range(1, len(polylines_info[polyline_no][1])):
                            html_javascript = html_javascript + '.lineTo' + str(
                                polylines_info[polyline_no][1][coordinate])
                        html_javascript = html_javascript + ';\n\n'

                    if (polylines_info[polyline_no][0] == 'cls-4'):
                        pass
                    if (polylines_info[polyline_no][0] == 'cls-5'):
                        pass
                    if (polylines_info[polyline_no][0] == 'cls-6'):
                        pass

            if (shape[0] == "polygon"):
                for polygon_no in range(len(polygons_info)):
                    if(polygons_info[polygon_no][0] == 'cls-1'):
                        html_javascript = html_javascript + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(polygon_no) +'].graphics.beginStroke("black").command);\n' \
                                                            '\t\t\t\t' + shape[0] + 's[' + str(polygon_no) +'].graphics.moveTo' + str(polygons_info[polygon_no][1][0])
                        for coordinate in range(1, len(polygons_info[polygon_no][1])):
                            html_javascript = html_javascript + '.lineTo' + str(polygons_info[polygon_no][1][coordinate])
                        html_javascript = html_javascript + ';\n\n'

                    if (polygons_info[polygon_no][0] == 'cls-2'):
                        html_javascript = html_javascript + '\t\t\t\tfillObj.push(' + shape[0] + 's[' + str(polygon_no) + '].graphics.beginFill("red").command);\n' \
                                                            '\t\t\t\t' + shape[0] + 's[' + str(polygon_no) + '].graphics.moveTo' + str(polygons_info[polygon_no][1][0])
                        for coordinate in range(1, len(polygons_info[polygon_no][1])):
                            html_javascript = html_javascript + '.lineTo' + str(polygons_info[polygon_no][1][coordinate])
                        html_javascript = html_javascript + ';\n\n'

                    if (polygons_info[polygon_no][0] == 'cls-3'):
                        pass
                    if (polygons_info[polygon_no][0] == 'cls-4'):
                        pass
                    if (polygons_info[polygon_no][0] == 'cls-5'):
                        pass
                    if (polygons_info[polygon_no][0] == 'cls-6'):
                        pass

    print(len(rects_info))

    html_javascript = html_javascript + '\t\t\t\tstage.update();\n'

    html_javascript = html_javascript + '\t\t\t}\n\n'


    html_javascript = html_javascript + '\t\t</script>\n'

    #print(polygons_info[0])


    html_preparetemplate("index2.html", "GariKhata Neighbourhood Plan",
                         ["../_shared/demo.css", "stylesheet", "text/css"],
                         ["easeljs-0.8.2.min.js", "foo9.createjs.tooltip.js", "jquery-3.2.1.js"], html_javascript)




    # Writing "init()" to "index.html"
    html_function_init = '\n\n\t\tfunction init()\n' \
                         '\t\t{\n' \
                            '\t\t\tstage = new createjs.Stage("gkCanvas");\n'
    #file.write(html_function_init)

    number_of_shapes_plus_shapes = [("polygons", str(len(tag_polygon))), ("polylines", str(len(tag_polyline))), ("lines", str(len(tag_line))),
                                    ("rects", str(len(tag_rect))), ("circles", str(len(tag_circle)))]

    html_function_init = ''
    for shapes in number_of_shapes_plus_shapes:
        html_function_init = html_function_init + '\n\t\t\tfor(var i = 0; i < ' + shapes[1] + '; i++)\n'
        html_function_init = html_function_init + '\t\t\t{\n'
        html_function_init = html_function_init + '\t\t\t\t' + shapes[0] + '.push(stage.addChild(new createjs.Shape()))\n'
        html_function_init = html_function_init + '\t\t\t}'
    #file.write(html_function_init)


    html_body = '\n\tstage.update();\n\t</script>\n</head>\n\n<body onload="init();">\n\t<canvas id="gkCanvas" width="1200" height="1200">\n' \
                '\t\talternate content\n\t</canvas>\n</body>\n</html>'

    #file.write(html_body)

parse("GKBaseMap.svg")

































#for s in tag_g:
    #     attribute = s.attributes["id"].value
    #
    #     # These attributes are requirement dependent. The code is only written for the attributes provided in the sample .svg files
    #     if(attribute == "Block_Line"):
    #         #Drawing for polygons
    #         blck_num = 0
    #         for polygon in tag_polygon:
    #             check_class = polygon.attributes["class"].value         ##Checks whether filled polygon is to be drawn or not
    #             points_polygon = polygon.attributes["points"].value
    #             xy_coordinates = extractor(points_polygon)
    #
    #             html_polygon = ''
    #
    #             if(check_class == "cls-1"):
    #                 pass
    #             elif(check_class == "cls-2"):
    #                 pass
    #             elif (check_class == "cls-3"):
    #                 pass
    #             elif (check_class == "cls-4"):
    #                 pass
    #             elif (check_class == "cls-5"):
    #                 pass
    #
    #
    #
    #         # Drawing for polylines
    #         for polyline in tag_polygon:
    #             points_polyline = polyline.attributes["points"].value
    #             xy_coordinates = extractor(points_polyline)
    #
    #         # Drawing for lines
    #         for line in tag_line:
    #             points_line = line.attributes["points"].value
    #             xy_coordinates = extractor(points_line)
    #
    #         '''
    #         #Drawing for rects
    #         for rect in tag_rect:
    #             points_rect = rect.attributes["points"].value
    #             xy_coordinates = extractor(points_rect)
    #
    #         #python error
    #         '''
    #
    #
    #         # Drawing for circles
    #         for circle in tag_circle:
    #             points_circle = circle.attributes["points"].value
    #             xy_coordinates = extractor(points_circle)
    #
    #     elif(attribute == "Plot_Profile"):
    #         # Drawing for polygons
    #         for polygon in tag_polygon:
    #             ###check_class = polygon.attributes["class"].value
    #
    #             points_polygon = polygon.attributes["points"].value
    #             xy_coordinates = extractor(points_polygon)
    #
    #         # Drawing for polylines
    #         for polyline in tag_polygon:
    #             points_polyline = polyline.attributes["points"].value
    #             xy_coordinates = extractor(points_polyline)
    #
    #         # Drawing for lines
    #         for line in tag_line:
    #             points_line = line.attributes["points"].value
    #             xy_coordinates = extractor(points_line)
    #
    #         '''
    #         #Drawing for rects
    #         for rect in tag_rect:
    #             points_rect = rect.attributes["points"].value
    #             xy_coordinates = extractor(points_rect)
    #
    #         #python error
    #         '''
    #
    #         # Drawing for circles
    #         for circle in tag_circle:
    #             points_circle = circle.attributes["points"].value
    #             xy_coordinates = extractor(points_circle)
    #
    #     elif(attribute == "Building_Line"):
    #         # Drawing for polygons
    #         for polygon in tag_polygon:
    #             ###check_class = polygon.attributes["class"].value
    #
    #             points_polygon = polygon.attributes["points"].value
    #             xy_coordinates = extractor(points_polygon)
    #
    #         # Drawing for polylines
    #         for polyline in tag_polygon:
    #             points_polyline = polyline.attributes["points"].value
    #             xy_coordinates = extractor(points_polyline)
    #
    #         # Drawing for lines
    #         for line in tag_line:
    #             points_line = line.attributes["points"].value
    #             xy_coordinates = extractor(points_line)
    #
    #         '''
    #         #Drawing for rects
    #         for rect in tag_rect:
    #             points_rect = rect.attributes["points"].value
    #             xy_coordinates = extractor(points_rect)
    #
    #         #python error
    #         '''
    #
    #         # Drawing for circles
    #         for circle in tag_circle:
    #             points_circle = circle.attributes["points"].value
    #             xy_coordinates = extractor(points_circle)
    #
    #     elif (attribute == "Gas_Lines"):
    #         # Drawing for polygons
    #         for polygon in tag_polygon:
    #             ###check_class = polygon.attributes["class"].value
    #
    #             points_polygon = polygon.attributes["points"].value
    #             xy_coordinates = extractor(points_polygon)
    #
    #         # Drawing for polylines
    #         for polyline in tag_polygon:
    #             points_polyline = polyline.attributes["points"].value
    #             xy_coordinates = extractor(points_polyline)
    #
    #         # Drawing for lines
    #         for line in tag_line:
    #             points_line = line.attributes["points"].value
    #             xy_coordinates = extractor(points_line)
    #
    #         '''
    #         #Drawing for rects
    #         for rect in tag_rect:
    #             points_rect = rect.attributes["points"].value
    #             xy_coordinates = extractor(points_rect)
    #
    #         #python error
    #         '''
    #
    #         # Drawing for circles
    #         for circle in tag_circle:
    #             points_circle = circle.attributes["points"].value
    #             xy_coordinates = extractor(points_circle)
    #
    #     elif (attribute == "Sewage"):
    #         # Drawing for polygons
    #         for polygon in tag_polygon:
    #             ###check_class = polygon.attributes["class"].value
    #
    #             points_polygon = polygon.attributes["points"].value
    #             xy_coordinates = extractor(points_polygon)
    #
    #         # Drawing for polylines
    #         for polyline in tag_polygon:
    #             points_polyline = polyline.attributes["points"].value
    #             xy_coordinates = extractor(points_polyline)
    #
    #         # Drawing for lines
    #         for line in tag_line:
    #             points_line = line.attributes["points"].value
    #             xy_coordinates = extractor(points_line)
    #
    #         '''
    #         #Drawing for rects
    #         for rect in tag_rect:
    #             points_rect = rect.attributes["points"].value
    #             xy_coordinates = extractor(points_rect)
    #
    #         #python error
    #         '''
    #
    #         # Drawing for circles
    #         for circle in tag_circle:
    #             points_circle = circle.attributes["points"].value
    #             xy_coordinates = extractor(points_circle)
    #
    #     elif (attribute == "Water"):
    #         # Drawing for polygons
    #         for polygon in tag_polygon:
    #             ###check_class = polygon.attributes["class"].value
    #
    #             points_polygon = polygon.attributes["points"].value
    #             xy_coordinates = extractor(points_polygon)
    #
    #         # Drawing for polylines
    #         for polyline in tag_polygon:
    #             points_polyline = polyline.attributes["points"].value
    #             xy_coordinates = extractor(points_polyline)
    #
    #         # Drawing for lines
    #         for line in tag_line:
    #             points_line = line.attributes["points"].value
    #             xy_coordinates = extractor(points_line)
    #
    #         '''
    #         #Drawing for rects
    #         for rect in tag_rect:
    #             points_rect = rect.attributes["points"].value
    #             xy_coordinates = extractor(points_rect)
    #
    #         #python error
    #         '''
    #
    #         # Drawing for circles
    #         for circle in tag_circle:
    #             points_circle = circle.attributes["points"].value
    #             xy_coordinates = extractor(points_circle)
    #
    #     else:
    #         pass