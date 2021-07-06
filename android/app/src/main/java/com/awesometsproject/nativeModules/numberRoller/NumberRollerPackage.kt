package com.awesometsproject.nativeModules.numberRoller

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.JavaScriptModule
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import java.util.*

class NumberRollerPackage: ReactPackage {

    override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
        return Collections.emptyList()
    }

    // Deprecated from RN 0.47
    fun createJSModules(): List<Class<out JavaScriptModule?>?>? {
        return Collections.emptyList()
    }


    override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<NumberRollerTextViewManger> {
        return Collections.singletonList(NumberRollerTextViewManger(reactContext))
    }
}