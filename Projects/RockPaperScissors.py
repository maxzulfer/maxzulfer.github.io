# rock paper scissors

# random computer choice function
# comparative function
# determine the winner function
# track score function
import random

player_score = 0
computer_score = 0

computer_choice = choice_generator()
player = player_choice()

def choice_generator():
    return result
    choice = random.randint(0, 2)
    print(choice)
    if choice == 0:
        result.append('Rock')
    elif choice == 1:
        return 'Paper'
    else: 
        return 'Scissors'

    
def player_choice(selection):
    if selection == 1:
        return 'Rock'
    elif selection == 2:
        return 'Paper'
    else:
        return 'Scissors'

player_choice(1)

def determine_winner(player, computer_choice):
    if player == 'Rock' and computer_choice == 'Scissors':
        print('You Win!')
        player_score += 1
    else:
        print('You Lost')
        computer_score += 1
    
    if player == 'Paper' and computer_choice == 'Rock':
        print('You Win!')
    else:
        print('You Lost')
    
    if player == 'Scissors' and computer_choice == 'Paper':
        print('You Win!')
    else:
        print('You Lost')

def end_game():
    player_score = 0
    computer_score = 0
