package com.awesometsproject.nativeModules.numberRoller

import android.content.Context
import android.view.LayoutInflater
import com.awesometsproject.R
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class NumberRollerTextViewManger(val context: ReactApplicationContext): SimpleViewManager<NumberRollerLayout>() {


    override fun getName(): String {
        return REACT_CLASS
    }

    var numberRollerTextView: NumberRollerTextView? = null

    override fun createViewInstance(reactContext: ThemedReactContext): NumberRollerLayout {
        val inflater = context.getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater
        val view = inflater.inflate(R.layout.layout_number_roller, null) as NumberRollerLayout
        numberRollerTextView = view.findViewById(R.id.number_roller_text_view)
        return view
    }

    @ReactProp(name = "prefix")
    fun setPrefix(textView: NumberRollerLayout, prefix: String) {
        //textView.prefix = prefix
        numberRollerTextView?.prefix = prefix
    }

    @ReactProp(name = "postfix")
    fun setPostfix(textView: NumberRollerLayout, postfix: String) {
        numberRollerTextView?.postFix = postfix
    }

    @ReactProp(name = "initialValue")
    fun setInitialValue(textView: NumberRollerLayout, initialValue: Int) {
        numberRollerTextView?.initialValue = initialValue
    }

    @ReactProp(name = "finalValue")
    fun setFinalValue(textView: NumberRollerLayout, finalValue: Int) {
        numberRollerTextView?.finalValue = finalValue
    }

    override fun onAfterUpdateTransaction(view: NumberRollerLayout) {
        super.onAfterUpdateTransaction(view)
        numberRollerTextView?.animateTextView(2000)
    }

    companion object {
        const val REACT_CLASS: String = "RNNumberRollerTextView"
    }
}