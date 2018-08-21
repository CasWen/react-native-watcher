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
import com.rn_watcher.response.DevicesResponse;
import com.want.wso2.WSONet;
import com.want.wso2.auth.Authenticator;
import com.want.wso2.bean.RegisterResponse;
import com.want.wso2.bean.RegistrationProfileRequest;
import com.want.wso2.bean.TokenResponse;
import com.want.wso2.callback.JsonCallback;
import com.want.wso2.interfaces.RegisterListener;
import com.want.wso2.model.Response;
import com.want.wso2.utils.DeviceUtils;

import java.util.UUID;

import static com.want.wso2.auth.Authenticator.SCOPES;

/**
 * Created by 00326434 on 2018/4/8.
 */

public class NetModule extends ReactContextBaseJavaModule {
//    final String ip = "http://wso2.hollywant.com:8280";
    final String ip = "http://iotprd.watergod.com.cn:8280";

    public NetModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "netModule";
    }

    @ReactMethod
    public void startActivityFromJS(String name, String params) {
        try {
            Activity currentActivity = getCurrentActivity();
            if (null != currentActivity) {
                Class toActivity = Class.forName(name);
                Intent intent = new Intent(currentActivity, toActivity);
                intent.putExtra("msg", params);
                currentActivity.startActivity(intent);
            }
        } catch (Exception e) {
            throw new JSApplicationIllegalArgumentException(
                    "不能打开Activity : " + e.getMessage());
        }
    }

    @ReactMethod
    public void sendMsgFromJSandCallBack(String msg, Callback callback) {
        try {
            Activity currentActivity = getCurrentActivity();
            if (null != currentActivity) {
                Toast.makeText(currentActivity, msg, Toast.LENGTH_SHORT).show();
                callback.invoke("this msg is from Native!");
            }
        } catch (Exception e) {
            throw new JSApplicationIllegalArgumentException(
                    "不能打开Activity : " + e.getMessage());
        }
    }

    @ReactMethod
    public void login(String userName, String pwd, final Promise promise) {
//        UUID deviceId = UUID.nameUUIDFromBytes(DeviceUtils.getDeviceName(getCurrentActivity()).getBytes());
        RegistrationProfileRequest registrationProfileRequest = new RegistrationProfileRequest();
        registrationProfileRequest.setApplicationName("watcher_android_cdmf_android_867516026498102");
        registrationProfileRequest.setIsAllowedToAllDomains(false);
        registrationProfileRequest.setIsMappingAnExistingOAuthApp(false);
        registrationProfileRequest.setTags(new String[]{"android"});
        registrationProfileRequest.setTags(new String[]{"device_management"});
        registrationProfileRequest.setConsumerKey(null);
        registrationProfileRequest.setConsumerSecret(null);
        Authenticator.register(ip + "/api-application-registration/register",
                ip + "/token",
                registrationProfileRequest,
                userName,
                pwd,
                SCOPES + " perm:devices:view",
                new RegisterListener() {
                    @Override
                    public void onSuccess(RegisterResponse response, TokenResponse tokenResponse, int code) {
                        Log.e(getName(), "onSuccess:" + response.toString());
                        if (!TextUtils.isEmpty(response.client_id)) {
                            promise.resolve(tokenResponse.toJSON());
                        } else {
                            promise.reject("注册失败");
                        }

                    }

                    @Override
                    public void onFailure(String message, int code) {
                        Log.e(getName(), "onFailure:code=" + code + "--message:" + message);
                        if(code==401)
                            promise.reject(""+code);
                        else
                            promise.reject(message);
                    }

                    @Override
                    public void netWorkError(String msg) {
                        Log.e(getName(), "netWorkError:" + msg);
                        promise.reject(msg);
                    }
                });
    }

    @ReactMethod
    public void loadDevices(int offset, int limit, String name, String status, final Promise promise) {
        Log.e(getName(), "loadDevices->onStart:" + offset+"-"+limit);
        WSONet.<DevicesResponse>get(ip + "/api/device-mgt/v1.0/devices?offset=" + offset + "&limit=" + limit + "&name=" + name + "&status=" + status).execute(new JsonCallback<DevicesResponse>() {
            @Override
            public void onSuccess(Response<DevicesResponse> response) {
                final DevicesResponse devicesResponse = response.body();
                Log.e(getName(), "onSuccess:" + devicesResponse.toJSON());
                try{
                    promise.resolve(devicesResponse.toJSON());
                }catch (Exception e){
                    promise.reject("response is not json");
                }
            }

            @Override
            public void onError(Response<DevicesResponse> response) {
                super.onError(response);
                promise.reject(response.message());
            }

            @Override
            public void netWorkError(String msg) {
                super.netWorkError(msg);
                promise.reject(msg);
            }
        });
    }
    @ReactMethod
    public void log(String tag,String log) {
        Log.e("JS",tag+":"+log);
    }
}
