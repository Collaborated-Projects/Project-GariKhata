## Created by: Emad Bin Abid on March 09th, 2018

## MODULE FOR: MANAGING HTML RELATED QUERIES

## --------------------------------------------------------------------------------------------------------------------------------------------------------------------


def html_preparetemplate(html_filename, document_title, css_links_attributes_list, js_modules_list, full_js_string, js_functions_list):        ##Takes a document_title and writes an html header to the 'html_filename'
    # Writing HTML compulsory header to "index.html"
    file = open(html_filename, "w")

    html_header = '<!DOCTYPE html>\n' \
                  '<html>\n' \
                  '\t<head>\n' \
                  '\t\t<title>' + document_title + '</title>\n\n'
    if(len(css_links_attributes_list) > 0 and len(css_links_attributes_list)%3 == 0):
        for i in range(len(css_links_attributes_list)//3):
            html_header = html_header + html_add_csslink(html_filename, css_links_attributes_list[(3*i)+0], css_links_attributes_list[(3*i)+1], css_links_attributes_list[(3*i)+2])

    for js_module in js_modules_list:
        html_header = html_header + html_external_js_modules(html_filename, js_module)

    html_header = html_header + "\n"

    html_header = html_header + html_writejs(full_js_string)

    for js_function in js_functions_list:
        html_header = html_header + html_jsfunction(js_function[0], js_function[1])
        html_header = html_header + '\n\n'

    '''
    html_header = html_header + '\t\t\t$(document).ready(function()\n' \
                                '\t\t\t\t{\n' \
                                '\t\t\t\t\t' + html_filename[16:len(html_filename) - 5] + '();\n' \
                                '\t\t\t\t});\n'
    '''

    html_header = html_header + '\t\t<script>\n'


    html_header = html_header + '\t\t</script>\n\n'       #closes script tag


    html_header = html_header + '\t</head>'

    file.write(html_header)

    html_body = ""
    html_body = html_body + '\n\n\t<body>\n'
    html_body = html_body + '\t\t' + html_add_button("btnOn", "ON Water Lines") + '\n'
    html_body = html_body + '\t\t' + html_add_button("btnOff", "OFF Water Lines") + '\n'

    html_body = html_body + '\n'

    html_body = html_body + '\n\t</body>' \
                            '\n</html>'
    ##Button tag needs to be updated if directories in the root are changed
    file.write(html_body)

def html_jsfunction(js_function_name, js_function_string):
    html_js_function = '\t\t\tfunction ' + js_function_name + '\n' \
                                        '\t\t\t{\n' + js_function_string + '\t\t\t}\n'
    return html_js_function

def html_writejs(full_js_string): ##takes a string which opens with <script> and ends at </script>
    return full_js_string

def html_add_csslink(html_filename, href, rel, type):           ##Adds CSS links to the html file
    html_css = '\t\t<link href="' + href + '" rel="' + rel + '" type= ' + type + '>\n'
    return html_css

def html_external_js_modules(html_filename, js_module):   ##Adds JAVASCRIPT libraries to the html file
    html_js = '\t\t<script src="' + js_module + '"></script> \n'
    return html_js

def html_add_button(id_button, value_button):
    html_button = '<input type="button" id="' + id_button + '" value="' + value_button + '">'
    return html_button

def html_call_js_function(function_name_with_parameters):
    pass


#html_preparetemplate("index2.html", "GariKhata Neighbourhood Plan", ["../_shared/demo.css", "stylesheet", "text/css"], ["easeljs-0.8.2.min.js", "foo9.createjs.tooltip.js"],"", [])

'''
html_preparetemplate("index.html", "Project: GariKhata", [], ["../Libraries used/js/p5.min.js", "../Libraries used/js/jquery-3.2.1.js", "../Libraries used/js/p5.collide2d.min.js",
                                                              "../Libraries used/js/basemap.js",
                                                              "../Libraries used/js/plotprofile.js",
                                                              "../Libraries used/js/waterlines.js",
                                                              "../Libraries used/js/gaslines.js",
                                                              "../Libraries used/js/sewagelines.js",
                                                              "../Version 2 (ProcessingJS)/shapes.js",
                                                              "../Version 2 (ProcessingJS)/test_p5.js.js",
                                                              "../Version 2 (ProcessingJS)/sketch.js"], "", [])

'''