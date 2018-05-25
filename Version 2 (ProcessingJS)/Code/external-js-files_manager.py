## Created by: Emad Bin Abid on March 16th, 2018

## MODULE FOR: MANAGING JAVASCRIPT RELATED QUERIES

## --------------------------------------------------------------------------------------------------------------------------------------------------------------------

#Python Libraries

#Custom Libraries
from brain import *

# --------------------------------------------------------------------------------------------------------------------------------------------------------------------

def js_preparetemplate(js_filename, mode_of_file):
    file = open(js_filename, "w")

    js_filler = ""

    js_filler += "//PolyLine\n"
    js_filler += 'var array_polylines_' + mode_of_file + '= []\n' \
                    'var pointer_polygons_' + mode_of_file + '= null\n\n'

    js_filler += "//Polygons\n"
    js_filler += 'var array_polygons_' + mode_of_file + '= []\n' \
                    'var pointer_polygons_' + mode_of_file + '= null\n\n'


