package com.getrandomvalues

import android.util.Base64
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import java.security.SecureRandom

@ReactModule(name = GetRandomValuesModule.NAME)
class GetRandomValuesModule(reactContext: ReactApplicationContext) :
  NativeGetRandomValuesSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun getRandomBase64(byteLength: Double): String {
    val data = ByteArray(byteLength.toInt())
    val random = SecureRandom()

    random.nextBytes(data)

    return Base64.encodeToString(data, Base64.NO_WRAP)
  }

  companion object {
    const val NAME = "GetRandomValues"
  }
}
