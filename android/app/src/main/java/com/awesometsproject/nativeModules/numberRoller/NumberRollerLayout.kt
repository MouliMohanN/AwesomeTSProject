package com.awesometsproject.nativeModules.numberRoller

import android.content.Context
import android.graphics.Color
import android.util.AttributeSet
import android.widget.RelativeLayout
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.uimanager.events.RCTEventEmitter


class NumberRollerLayout : RelativeLayout {

    constructor(context: Context?) : super(context) {}
    constructor(context: Context?, attrs: AttributeSet?, defStyle: Int) : super(
        context,
        attrs,
        defStyle
    ) {
    }

    constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {}

    public override fun onFinishInflate() {
        super.onFinishInflate()
    }
}
