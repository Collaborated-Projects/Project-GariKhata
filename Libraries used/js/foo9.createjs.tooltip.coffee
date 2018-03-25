class Tooltip extends createjs.Container
    constructor: (@msg, @width = 50, @height = 30, @radius = 4) ->
        @initialize()
        @x = 0
        @y = 0
        @shape = null
        @text = null
        @_draw()


    _draw: ->
        fillColor = "#000"
        shadowColor = "#000"
        fontColor = "#fff"
        arrowWidth = 6
        arrowHeight = 6

        @shape = new createjs.Shape()
        g = @shape.graphics
        g.beginFill(fillColor)
        g.drawRoundRect(@x, @y, @width, @height - arrowHeight, @radius)
        g.moveTo((this.width * 0.5) - arrowWidth, this.height - arrowHeight)
        g.lineTo((this.width * 0.5), this.height)
        g.lineTo((this.width * 0.5) + arrowWidth, this.height - arrowHeight)
        g.endFill()
        @shape.shadow = new createjs.Shadow(shadowColor, 0, 0, 6)
        @shape.alpha = 0.6
        @addChild @shape

        @text = new createjs.Text(@msg, "12px Arial", fontColor)
        @text.textAlign = "center"
        @text.textBaseline = "bottom"
        @text.maxWidth = @width
        @text.x = @width * 0.5
        @text.y = ((@height + 4 - arrowHeight) + @text.getMeasuredHeight()) * 0.5
        @addChild @text

        return


@foo9 = @foo9 || {}
@foo9.createjs = @foo9.createjs || {}
@foo9.createjs.Tooltip = Tooltip
