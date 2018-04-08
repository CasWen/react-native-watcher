package com.rn_watcher.modules;

import android.app.Activity;
import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.want.wso2.auth.Authenticator;
import com.want.wso2.bean.RegisterResponse;
import com.want.wso2.bean.RegistrationProfileRequest;
import com.want.wso2.bean.TokenResponse;
import com.want.wso2.interfaces.RegisterListener;
import com.want.wso2.utils.DeviceUtils;

import java.util.UUID;

import static com.want.wso2.auth.Authenticator.SCOPES;

/**
 * Created by 00326434 on 2018/4/8.
 */

public class NetModule extends ReactContextBaseJavaModule {
    public NetModule(ReactApplicationContext reactContext){
        super(reactContext);
    }

    @Override
    public String getName() {
        return "netModule";
    }

    @ReactMethod
    public void startActivityFromJS(String name, String params){
        try{
            Activity currentActivity = getCurrentActivity();
            if(null!=currentActivity){
                Class toActivity = Class.forName(name);
                Intent intent = new Intent(currentActivity,toActivity);
                intent.putExtra("msg", params);
                currentActivity.startActivity(intent);
            }
        }catch(Exception e){
            throw new JSApplicationIllegalArgumentException(
                    "不能打开Activity : "+e.getMessage());
        }
    }

    @ReactMethod
    public void sendMsgFromJSandCallBack(String msg, Callback callback){
        try{
            Activity currentActivity = getCurrentActivity();
            if(null!=currentActivity){
                Toast.makeText(currentActivity,msg,Toast.LENGTH_SHORT).show();
                callback.invoke("this msg is from Native!");
            }
        }catch(Exception e){
            throw new JSApplicationIllegalArgumentException(
                    "不能打开Activity : "+e.getMessage());
        }
    }
    @ReactMethod
    public void login(String userName, String pwd, final Promise promise){
        UUID deviceId = UUID.nameUUIDFromBytes(DeviceUtils.getDeviceName(getCurrentActivity()).getBytes());
        RegistrationProfileRequest registrationProfileRequest = new RegistrationProfileRequest();
        registrationProfileRequest.setApplicationName("watcher_android_"+deviceId.toString());
        registrationProfileRequest.setIsAllowedToAllDomains(false);
        registrationProfileRequest.setIsMappingAnExistingOAuthApp(false);
        registrationProfileRequest.setTags(new String[]{"android"});
        registrationProfileRequest.setTags(new String[]{"device_management"});
        registrationProfileRequest.setConsumerKey(null);
        registrationProfileRequest.setConsumerSecret(null);
        String ip="http://wso2dev.hollywant.com:8280";
        Authenticator.register(ip + "/api-application-registration/register",
                 ip+ "/token",
                registrationProfileRequest,
                userName,
                pwd,
                SCOPES,
                new RegisterListener() {
                    @Override
                    public void onSuccess(RegisterResponse response, TokenResponse tokenResponse, int code) {
                        Log.e(getName(),"onSuccess:"+response.toString());
                        if(!TextUtils.isEmpty(response.client_id)){
                            Gson gson = new Gson();
                            String json = gson.toJson(tokenResponse);
                            Log.e(getName(),"json:"+json);
                            promise.resolve(json);
                        }else{
                            promise.reject("注册失败");
                        }

                    }

                    @Override
                    public void onFailure(String message, int code) {
                        Log.e(getName(),"onFailure:code="+code+"--message:"+message);
                        promise.reject(code+"",message);
                    }

                    @Override
                    public void netWorkError(String msg) {
                        Log.e(getName(),"netWorkError:"+msg);
                        promise.reject(msg);
                    }
                });
    }
}
