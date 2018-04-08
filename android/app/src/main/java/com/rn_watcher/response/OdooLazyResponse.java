package com.rn_watcher.response;

/**
 * <b>Create Date:</b> 2017/9/6<br>
 * <b>Author:</b> Stone <br>
 * <b>Description:</b> <br>
 */
public class OdooLazyResponse<T> {

    private int code = 0;
    private String msg = "";
    private T data;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "OdooLazyResponse{" +
                "code=" + code +
                ", msg='" + msg + '\'' +
                ", data=" + data +
                '}';
    }
}
