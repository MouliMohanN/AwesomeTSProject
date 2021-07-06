package com.awesometsproject.nativeModules.numberRoller

import android.animation.ValueAnimator
import android.content.Context
import android.content.res.ColorStateList
import android.graphics.Color
import android.util.AttributeSet
import androidx.appcompat.widget.AppCompatTextView


class NumberRollerTextView: AppCompatTextView {


    constructor(context: Context?) : super(context) {}
    constructor(context: Context?, attrs: AttributeSet?, defStyle: Int) : super(
        context,
        attrs,
        defStyle
    ) {
    }

    constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {}

    var prefix: String = ""
    var postFix: String = ""
    var initialValue: Int = 0
    var finalValue: Int = 0
    var duration: Long = 2000L


 /*   override fun onFinishInflate() {
        super.onFinishInflate()
        animateTextView(duration)
    }
*/
    fun animateTextView(duration: Long) {
        setTextColor(ColorStateList.valueOf(Color.RED))
        val valueAnimator: ValueAnimator = ValueAnimator.ofInt(initialValue, finalValue)
        valueAnimator.duration = duration
        /*valueAnimator.addUpdateListener {
            //${valueAnimator.animatedValue}
            text = "${prefix}${postFix}"
        }*/
        valueAnimator.addUpdateListener { valueAnimator -> setText(valueAnimator.animatedValue.toString()) }
        valueAnimator.start()
    }
}