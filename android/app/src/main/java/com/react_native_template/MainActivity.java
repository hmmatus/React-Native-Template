package com.react_native_template;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this,R.style.SplashScreenTheme);  // here
    super.onCreate(savedInstanceState);
  }
  @Override
  protected String getMainComponentName() {
    return "React_Native_Template";
  }
}
