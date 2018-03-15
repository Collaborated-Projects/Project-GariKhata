## Created by: Emad Bin Abid on March 09th, 2018

## MODULE FOR: MANAGING XML RELATED QUERIES

## --------------------------------------------------------------------------------------------------------------------------------------------------------------------

import xml.etree.ElementTree as ET
from global_manager import *    #(custom module)

def xml_tag_extractor(xml_filename):                            ##Takes a .xml file and returns a list containing all tags in the .xml file
    xml_tree = ET.parse(xml_filename)
    all_tags_list = list()
    # shape_list = list()

    for element in xml_tree.iter():
        tag = ""
        while (element.tag[-1] != '}'):
            tag = tag + element.tag[-1]
            element.tag = element.tag[0:-1]

        all_tags_list.append(string_reverse(tag))               ##custom method 'string_reverse()'
        all_tags_list = list_remove_duplicates(all_tags_list)   ##custom method 'list_remove_duplicates()'
    return all_tags_list

def xml_shapename_extractor(xml_filename):                      ##Takes a '.svg' file and returns a list of shape names in that '.svg' file
    ##Assuming that all shapes are grouped in a tag <g></g>
    all_tags = xml_tag_extractor(xml_filename)

    tag_count = 0
    for tag in all_tags:
        if(tag != "g"):
            tag_count += 1
        else:
            break

    for i in range(tag_count+1):
        all_tags.pop(0)
    return all_tags
