/*
eerste commit

*/
input.onButtonPressed(Button.B, function () {
    item = 20
    keuze = 1
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(4, 1, "HARDE", 1)
    OLED12864_I2C.showString(4, 2, "EITJES", 1)
})

input.onButtonPressed(Button.A, function () {
    item = 10
    keuze = 2
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(4, 1, "ZACHTE", 1)
    OLED12864_I2C.showString(4, 2, "EITJES", 1)
})

function flashScreen () {
    OLED12864_I2C.clear()
    OLED12864_I2C.invert(true)
    OLED12864_I2C.zoom(true)
    OLED12864_I2C.showString(
    2,
    0,
    "MAAKPLAATS",
    1
    )
    OLED12864_I2C.showString(
    2,
    1,
    "BUGGENHOUT",
    1
    )
    OLED12864_I2C.showString(
    2,
    3,
    "MICRO:BIT",
    1
    )
    basic.pause(5000)
    OLED12864_I2C.clear()
    OLED12864_I2C.invert(false)
    OLED12864_I2C.showString(
    1,
    0,
    "EITJES KOKER",
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "-------------",
    1
    )
    OLED12864_I2C.showString(
    2,
    2,
    "A: ZACHT",
    1
    )
    OLED12864_I2C.showString(
    2,
    3,
    "B: HARD",
    1
    )
    return 0
}
input.onButtonPressed(Button.AB, function () {
    item = 0
    keuze = 0
    OLED12864_I2C.clear()
    flashScreen()
})
function digitDisplay () {
    tm.showNumber(0)
    tm.showDP(1, true)
    tm.intensity(8)
}
function eitjesKlaar () {
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(
    4,
    1,
    "EITJES",
    1
    )
    OLED12864_I2C.showString(
    4,
    2,
    "KLAAR",
    1
    )
    music.setVolume(255)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
}
let tm: TM1637.TM1637LEDs = null
let item = 0
let keuze = 0
OLED12864_I2C.init(60)
keuze = 0
item = 0
tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
2,
4
)
flashScreen()
digitDisplay()
basic.forever(function () {
    if (item >= 0) {
        if (keuze == 1) {
            tm.showNumber(item)
            item += -1
            basic.pause(1000)
        } else if (keuze == 2) {
            tm.showNumber(item)
            item += -1
            basic.pause(1000)
        }
    }
    if (item < 0) {
        eitjesKlaar()
    }
})
