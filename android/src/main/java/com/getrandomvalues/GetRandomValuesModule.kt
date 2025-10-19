package com.getrandomvalues

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = GetRandomValuesModule.NAME)
class GetRandomValuesModule(reactContext: ReactApplicationContext) :
  NativeGetRandomValuesSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  override fun getRandomBase64(a: Double, b: Double): Double {
    return a * b
  }

  companion object {
    const val NAME = "GetRandomValues"
  }
}
