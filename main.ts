let x = 0
input.onGesture(Gesture.Shake, function () {
    x = randint(0, 2)
    if (x) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (x) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
