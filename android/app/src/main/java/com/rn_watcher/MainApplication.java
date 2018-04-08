package com.rn_watcher;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.rn_watcher.modules.NetRP;
import com.want.wso2.WSONet;
import com.want.wso2.cache.CacheEntity;
import com.want.wso2.cache.CacheMode;
import com.want.wso2.interfaces.LoginExpireCallBack;
import com.want.wso2.model.HttpHeaders;
import com.want.wso2.model.HttpParams;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new NetRP()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initNetWork();
    WSONet.getInstance().setLoginExpireCallBack(new LoginExpireCallBack() {
      @Override
      public void LoginExpire(String tag, int code) {


      }
    });
  }
  public void initNetWork(){
    HttpHeaders headers = new HttpHeaders();
    HttpParams params = new HttpParams();
    try {
      WSONet.getInstance()
              .init(this)
              .setCacheMode(CacheMode.NO_CACHE)
              .setCacheTime(CacheEntity.CACHE_NEVER_EXPIRE)
              .addCommonHeaders(headers)                                         //设置全局公共头
              .addCommonParams(params);                                          //设置全局公共参数
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
