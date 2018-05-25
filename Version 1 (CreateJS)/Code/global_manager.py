## Created by: Emad Bin Abid on March 09th, 2018

## MODULE FOR: MANAGING GLOBAL NEEDS

## --------------------------------------------------------------------------------------------------------------------------------------------------------------------


def string_reverse(data_string):                                ##Reverses the 'data_string'
    returning_string = ""
    while(data_string != ""):
        returning_string = returning_string + data_string[-1]
        data_string = data_string[0:-1]
    return returning_string

def list_remove_duplicates(data_list):                          ##Removes duplicates from a list
    returning_list = list()
    for element in data_list:
        if element not in returning_list:
            returning_list.append(element)
    return returning_list

def coordinate_extractor(data_string, split_by):                ##Takes a 'split_by' separated string and generates a list of tuples containing two consecutive
                                                                # values.
    coor = data_string.split(split_by)
    xy=[]
    for i in range(0,len(coor),2):
        xy.append((int(float(coor[i])), int(float(coor[i+1]))))
    return(xy)
