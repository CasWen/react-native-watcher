package com.rn_watcher.response;

import com.want.wso2.bean.Bean;

import java.util.List;

/**
 * Created by 00326434 on 2018/4/9.
 */

public class DevicesResponse extends Bean {

    /**
     * devices : [{"id":1,"name":"test106","type":"android","description":"peitest106","deviceIdentifier":"peitest106","enrolmentInfo":{"id":1,"dateOfEnrolment":1523260680643,"dateOfLastUpdate":1523260680643,"ownership":"BYOD","status":"ACTIVE","owner":"admin"},"properties":[{"name":"GCM_TOKEN"},{"name":"DEVICE_INFO","value":"[{\"name\":\"ENCRYPTION_ENABLED\",\"value\":\"false\"},{\"name\":\"PASSCODE_ENABLED\",\"value\":\"false\"},{\"name\":\"BATTERY_LEVEL\",\"value\":\"100\"},{\"name\":\"INTERNAL_TOTAL_MEMORY\",\"value\":\"11.65\"},{\"name\":\"INTERNAL_AVAILABLE_MEMORY\",\"value\":\"0.71\"},{\"name\":\"EXTERNAL_TOTAL_MEMORY\",\"value\":\"3.36\"},{\"name\":\"EXTERNAL_AVAILABLE_MEMORY\",\"value\":\"1.71\"},{\"name\":\"OPERATOR\",\"value\":\"中国移动\"}]"},{"name":"IMEI","value":"877516026492099"},{"name":"IMSI","value":"460023381254146"},{"name":"OS_VERSION","value":"5.0.2"},{"name":"DEVICE_MODEL","value":"Redmi Note 3"},{"name":"VENDOR","value":"Xiaomi"},{"name":"LATITUDE","value":"31.188046"},{"name":"LONGITUDE","value":"121.396667"},{"name":"SERIAL","value":"AQ5TPZHUHY6LGQN6"},{"name":"MAC_ADDRESS"},{"name":"DEVICE_NAME","value":"867516026491995"},{"name":"OS_BUILD_DATE","value":"1498901814000"}],"applications":[]},{"id":2,"name":"test106","type":"android","description":"peitest107","deviceIdentifier":"peitest107","enrolmentInfo":{"id":2,"dateOfEnrolment":1523260699536,"dateOfLastUpdate":1523260699536,"ownership":"BYOD","status":"ACTIVE","owner":"admin"},"properties":[{"name":"GCM_TOKEN"},{"name":"DEVICE_INFO","value":"[{\"name\":\"ENCRYPTION_ENABLED\",\"value\":\"false\"},{\"name\":\"PASSCODE_ENABLED\",\"value\":\"false\"},{\"name\":\"BATTERY_LEVEL\",\"value\":\"100\"},{\"name\":\"INTERNAL_TOTAL_MEMORY\",\"value\":\"11.65\"},{\"name\":\"INTERNAL_AVAILABLE_MEMORY\",\"value\":\"0.71\"},{\"name\":\"EXTERNAL_TOTAL_MEMORY\",\"value\":\"3.36\"},{\"name\":\"EXTERNAL_AVAILABLE_MEMORY\",\"value\":\"1.71\"},{\"name\":\"OPERATOR\",\"value\":\"中国移动\"}]"},{"name":"IMEI","value":"877516026492099"},{"name":"IMSI","value":"460023381254146"},{"name":"OS_VERSION","value":"5.0.2"},{"name":"DEVICE_MODEL","value":"Redmi Note 3"},{"name":"VENDOR","value":"Xiaomi"},{"name":"LATITUDE","value":"31.188046"},{"name":"LONGITUDE","value":"121.396667"},{"name":"SERIAL","value":"AQ5TPZHUHY6LGQN6"},{"name":"MAC_ADDRESS"},{"name":"DEVICE_NAME","value":"867516026491995"},{"name":"OS_BUILD_DATE","value":"1498901814000"}],"applications":[]},{"id":3,"name":"test108","type":"android","description":"peitest108","deviceIdentifier":"peitest108","enrolmentInfo":{"id":3,"dateOfEnrolment":1523260708319,"dateOfLastUpdate":1523260708319,"ownership":"BYOD","status":"ACTIVE","owner":"admin"},"properties":[{"name":"GCM_TOKEN"},{"name":"DEVICE_INFO","value":"[{\"name\":\"ENCRYPTION_ENABLED\",\"value\":\"false\"},{\"name\":\"PASSCODE_ENABLED\",\"value\":\"false\"},{\"name\":\"BATTERY_LEVEL\",\"value\":\"100\"},{\"name\":\"INTERNAL_TOTAL_MEMORY\",\"value\":\"11.65\"},{\"name\":\"INTERNAL_AVAILABLE_MEMORY\",\"value\":\"0.71\"},{\"name\":\"EXTERNAL_TOTAL_MEMORY\",\"value\":\"3.36\"},{\"name\":\"EXTERNAL_AVAILABLE_MEMORY\",\"value\":\"1.71\"},{\"name\":\"OPERATOR\",\"value\":\"中国移动\"}]"},{"name":"IMEI","value":"877516026492099"},{"name":"IMSI","value":"460023381254146"},{"name":"OS_VERSION","value":"5.0.2"},{"name":"DEVICE_MODEL","value":"Redmi Note 3"},{"name":"VENDOR","value":"Xiaomi"},{"name":"LATITUDE","value":"31.188046"},{"name":"LONGITUDE","value":"121.396667"},{"name":"SERIAL","value":"AQ5TPZHUHY6LGQN6"},{"name":"MAC_ADDRESS"},{"name":"DEVICE_NAME","value":"867516026491995"},{"name":"OS_BUILD_DATE","value":"1498901814000"}],"applications":[]},{"id":4,"name":"test109","type":"android","description":"peitest109","deviceIdentifier":"peitest109","enrolmentInfo":{"id":4,"dateOfEnrolment":1523260717127,"dateOfLastUpdate":1523260717127,"ownership":"BYOD","status":"ACTIVE","owner":"admin"},"properties":[{"name":"GCM_TOKEN"},{"name":"DEVICE_INFO","value":"[{\"name\":\"ENCRYPTION_ENABLED\",\"value\":\"false\"},{\"name\":\"PASSCODE_ENABLED\",\"value\":\"false\"},{\"name\":\"BATTERY_LEVEL\",\"value\":\"100\"},{\"name\":\"INTERNAL_TOTAL_MEMORY\",\"value\":\"11.65\"},{\"name\":\"INTERNAL_AVAILABLE_MEMORY\",\"value\":\"0.71\"},{\"name\":\"EXTERNAL_TOTAL_MEMORY\",\"value\":\"3.36\"},{\"name\":\"EXTERNAL_AVAILABLE_MEMORY\",\"value\":\"1.71\"},{\"name\":\"OPERATOR\",\"value\":\"中国移动\"}]"},{"name":"IMEI","value":"877516026492099"},{"name":"IMSI","value":"460023381254146"},{"name":"OS_VERSION","value":"5.0.2"},{"name":"DEVICE_MODEL","value":"Redmi Note 3"},{"name":"VENDOR","value":"Xiaomi"},{"name":"LATITUDE","value":"31.188046"},{"name":"LONGITUDE","value":"121.396667"},{"name":"SERIAL","value":"AQ5TPZHUHY6LGQN6"},{"name":"MAC_ADDRESS"},{"name":"DEVICE_NAME","value":"867516026491995"},{"name":"OS_BUILD_DATE","value":"1498901814000"}],"applications":[]}]
     * count : 4
     */

    private int count;
    private List<DevicesBean> devices;

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public List<DevicesBean> getDevices() {
        return devices;
    }

    public void setDevices(List<DevicesBean> devices) {
        this.devices = devices;
    }

    public static class DevicesBean {
        /**
         * id : 1
         * name : test106
         * type : android
         * description : peitest106
         * deviceIdentifier : peitest106
         * enrolmentInfo : {"id":1,"dateOfEnrolment":1523260680643,"dateOfLastUpdate":1523260680643,"ownership":"BYOD","status":"ACTIVE","owner":"admin"}
         * properties : [{"name":"GCM_TOKEN"},{"name":"DEVICE_INFO","value":"[{\"name\":\"ENCRYPTION_ENABLED\",\"value\":\"false\"},{\"name\":\"PASSCODE_ENABLED\",\"value\":\"false\"},{\"name\":\"BATTERY_LEVEL\",\"value\":\"100\"},{\"name\":\"INTERNAL_TOTAL_MEMORY\",\"value\":\"11.65\"},{\"name\":\"INTERNAL_AVAILABLE_MEMORY\",\"value\":\"0.71\"},{\"name\":\"EXTERNAL_TOTAL_MEMORY\",\"value\":\"3.36\"},{\"name\":\"EXTERNAL_AVAILABLE_MEMORY\",\"value\":\"1.71\"},{\"name\":\"OPERATOR\",\"value\":\"中国移动\"}]"},{"name":"IMEI","value":"877516026492099"},{"name":"IMSI","value":"460023381254146"},{"name":"OS_VERSION","value":"5.0.2"},{"name":"DEVICE_MODEL","value":"Redmi Note 3"},{"name":"VENDOR","value":"Xiaomi"},{"name":"LATITUDE","value":"31.188046"},{"name":"LONGITUDE","value":"121.396667"},{"name":"SERIAL","value":"AQ5TPZHUHY6LGQN6"},{"name":"MAC_ADDRESS"},{"name":"DEVICE_NAME","value":"867516026491995"},{"name":"OS_BUILD_DATE","value":"1498901814000"}]
         * applications : []
         */

        private int id;
        private String name;
        private String type;
        private String description;
        private String deviceIdentifier;
        private EnrolmentInfoBean enrolmentInfo;
        private List<PropertiesBean> properties;
        private List<String> applications;

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getDeviceIdentifier() {
            return deviceIdentifier;
        }

        public void setDeviceIdentifier(String deviceIdentifier) {
            this.deviceIdentifier = deviceIdentifier;
        }

        public EnrolmentInfoBean getEnrolmentInfo() {
            return enrolmentInfo;
        }

        public void setEnrolmentInfo(EnrolmentInfoBean enrolmentInfo) {
            this.enrolmentInfo = enrolmentInfo;
        }

        public List<PropertiesBean> getProperties() {
            return properties;
        }

        public void setProperties(List<PropertiesBean> properties) {
            this.properties = properties;
        }

        public List<String> getApplications() {
            return applications;
        }

        public void setApplications(List<String> applications) {
            this.applications = applications;
        }

        public static class EnrolmentInfoBean {
            /**
             * id : 1
             * dateOfEnrolment : 1523260680643
             * dateOfLastUpdate : 1523260680643
             * ownership : BYOD
             * status : ACTIVE
             * owner : admin
             */

            private int id;
            private long dateOfEnrolment;
            private long dateOfLastUpdate;
            private String ownership;
            private String status;
            private String owner;

            public int getId() {
                return id;
            }

            public void setId(int id) {
                this.id = id;
            }

            public long getDateOfEnrolment() {
                return dateOfEnrolment;
            }

            public void setDateOfEnrolment(long dateOfEnrolment) {
                this.dateOfEnrolment = dateOfEnrolment;
            }

            public long getDateOfLastUpdate() {
                return dateOfLastUpdate;
            }

            public void setDateOfLastUpdate(long dateOfLastUpdate) {
                this.dateOfLastUpdate = dateOfLastUpdate;
            }

            public String getOwnership() {
                return ownership;
            }

            public void setOwnership(String ownership) {
                this.ownership = ownership;
            }

            public String getStatus() {
                return status;
            }

            public void setStatus(String status) {
                this.status = status;
            }

            public String getOwner() {
                return owner;
            }

            public void setOwner(String owner) {
                this.owner = owner;
            }

        }

        public static class PropertiesBean {
            /**
             * name : GCM_TOKEN
             * value : [{"name":"ENCRYPTION_ENABLED","value":"false"},{"name":"PASSCODE_ENABLED","value":"false"},{"name":"BATTERY_LEVEL","value":"100"},{"name":"INTERNAL_TOTAL_MEMORY","value":"11.65"},{"name":"INTERNAL_AVAILABLE_MEMORY","value":"0.71"},{"name":"EXTERNAL_TOTAL_MEMORY","value":"3.36"},{"name":"EXTERNAL_AVAILABLE_MEMORY","value":"1.71"},{"name":"OPERATOR","value":"中国移动"}]
             */

            private String name;
            private String value;

            public String getName() {
                return name;
            }

            public void setName(String name) {
                this.name = name;
            }

            public String getValue() {
                return value;
            }

            public void setValue(String value) {
                this.value = value;
            }

        }

    }

}
