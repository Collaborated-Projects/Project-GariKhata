## Created by: Emad Bin Abid on March 09th, 2018

## MODULE FOR: MANAGING HTML RELATED QUERIES

## --------------------------------------------------------------------------------------------------------------------------------------------------------------------


def html_preparetemplate(html_filename, document_title, css_links_attributes_list, js_modules_list, full_js_string):        ##Takes a document_title and writes an html header to the 'html_filename'
    # Writing HTML compulsory header to "index.html"
    file = open("index2.html", "w")

    html_header = '<!DOCTYPE html>\n' \
                  '<html>\n' \
                  '\t<head>\n' \
                  '\t\t<title>' + document_title + '</title>\n'
    if(len(css_links_attributes_list) == 3):
        html_header = html_header + html_add_csslink(html_filename, css_links_attributes_list[0], css_links_attributes_list[1], css_links_attributes_list[2])

    for js_module in js_modules_list:
        html_header = html_header + html_external_js_modules(html_filename, js_module)

    html_header = html_header + html_writejs(full_js_string)

    html_header = html_header + '\t</head>' \
                  '\n\n\t<body onload="init();">' \
                  '\n\t\t<canvas id="gkCanvas" width="1200" height="1200">' \
                  '\n\t\t\t Project GariKhata: ' + document_title + ' ' \
                  '\n\t\t</canvas>' \
                  '\n\t</body>' \
                  '\n</html>'
    file.write(html_header)

def html_writejs(full_js_string): ##takes a string which opens with <script> and ends at </script>
    return full_js_string

def html_add_csslink(html_filename, rel, type, href):           ##Adds CSS links to the html file
    html_css = '\t\t<link href="' + href + '" rel="' + rel + '" type= ' + type + '>\n'
    return html_css

def html_external_js_modules(html_filename, js_module):   ##Adds JAVASCRIPT libraries to the html file
    html_js = '\t\t<script src="' + js_module + '"></script> \n'
    return html_js





html_preparetemplate("index2.html", "GariKhata Neighbourhood Plan", ["../_shared/demo.css", "stylesheet", "text/css"], ["easeljs-0.8.2.min.js", "foo9.createjs.tooltip.js"],"")

######## href="../_shared/demo.css" rel="stylesheet" type= text/css