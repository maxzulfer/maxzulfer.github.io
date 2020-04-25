import turtle
import os

wn = turtle.Screen()
wn.title('Max Pong')
wn.bgcolor('black')
wn.setup(width=800, height=600)
wn.tracer(0) #without this the game will run much slower

#Score

score_a = 0
score_b = 0

#Paddle A
paddle_a = turtle.Turtle()
paddle_a.speed(0) #without this it would be every slow
paddle_a.shape("square")
paddle_a.color("white")
paddle_a.shapesize(stretch_wid=5, stretch_len=1)
paddle_a.penup() # removes the drawing line function
paddle_a.goto(-350, 0) #where the paddle starts


#Paddle B
paddle_b = turtle.Turtle()
paddle_b.speed(0) #without this it would be every slow
paddle_b.shape("square")
paddle_b.color("white")
paddle_b.shapesize(stretch_wid=5, stretch_len=1)
paddle_b.penup() # removes the drawing line function
paddle_b.goto(350, 0) #where the paddle starts

#Ball
ball = turtle.Turtle()
ball.speed(0) #without this it would be every slow
ball.shape("square")
ball.color("white")
ball.penup() # removes the drawing line function
ball.goto(0, 0) #where the paddle starts

ball.dx = 3 #everytime the ball moves it moves two pixels
ball.dy = -3

# Pen
pen = turtle.Turtle()
pen.speed(0)
pen.color("white")
pen.penup()
pen.hideturtle()
pen.goto(0, 260)
pen.write("Player A: 0 Player B: 0", align="center", font=("Courier", 24, "normal"))


#Function
def paddle_a_up():
    y = paddle_a.ycor()
    y += 30
    paddle_a.sety(y)

def paddle_a_down():
    y = paddle_a.ycor()
    y -= 30
    paddle_a.sety(y)


def paddle_b_up():
    y = paddle_b.ycor()
    y += 30
    paddle_b.sety(y)

def paddle_b_down():
    y = paddle_b.ycor()
    y -= 30
    paddle_b.sety(y)

#keyboard binding
wn.listen()
wn.onkeypress(paddle_a_up, "w")
wn.onkeypress(paddle_a_down, "s")
wn.onkeypress(paddle_b_up, "Up")
wn.onkeypress(paddle_b_down, "Down")

# Every game needs a main game loop
while True:
    wn.update() #every time the loop runs it updates the window

    # move the ball
    ball.setx(ball.xcor() + ball.dx)
    ball.sety(ball.ycor() + ball.dy)

    #border checking
    if ball.ycor() > 290: # this will reverse the direction
        ball.sety(290)
        ball.dy *= -1
        # os.system("afplay &")

    if ball.ycor() < -290:  # this will reverse the direction
        ball.sety(-290)
        ball.dy *= -1
    
    if ball.xcor() > 390:
        ball.goto(0, 0)
        ball.dx *= -1
        score_a += 1
        pen.clear()
        pen.write("Player A: {} Player B: {}".format(score_a, score_b), align="center",
                  font=("Courier", 24, "normal"))

    if ball.xcor() < -390:
        ball.goto(0, 0)
        ball.dx *= -1
        score_b += 1
        pen.clear()
        pen.write("Player A: {} Player B: {}".format(score_a, score_b), align="center",
                  font=("Courier", 24, "normal"))


    # paddle and ball collision
    if (ball.xcor() > 340 and ball.xcor() < 350) and (ball.ycor() < paddle_b.ycor() + 40 and ball.ycor() > paddle_b.ycor() - 40):
        ball.setx(340)
        ball.dx *= -1

    if (ball.xcor() < -340 and ball.xcor() > -350) and (ball.ycor() < paddle_a.ycor() + 40 and ball.ycor() > paddle_a.ycor() - 40):
        ball.setx(-340)
        ball.dx *= -1


