input.onButtonPressed(Button.A, function () {
    Player1 += 1
    basic.showNumber(Player1)
})
input.onGesture(Gesture.Shake, function () {
    Player1 = 0
    Player2 = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Joe:")
    basic.showNumber(Player1)
    basic.showString("Sam:")
    basic.showNumber(Player2)
})
input.onButtonPressed(Button.B, function () {
    Player2 += 1
    basic.showNumber(Player2)
})
let Player2 = 0
let Player1 = 0
Player1 = 0
Player2 = 0
