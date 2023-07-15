#!/usr/bin/python3
def multiple_returns(sentence):
    # return the lenth of the sentence
    if len(sentence) == 0:
        Length = 0
        first_char = 'None'
    else:
        first_char = sentence[0]
        Length = len(sentence)
    return(Length, first_char)
