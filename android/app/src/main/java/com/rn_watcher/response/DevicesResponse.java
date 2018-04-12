package com.rn_watcher.response;

import com.want.wso2.bean.Bean;

import java.util.List;

/**
 * Created by 00326434 on 2018/4/9.
 */

public class DevicesResponse extends Bean {

    /**
     * devices : [{"id":535,"name":"867184031399219","type":"android","description":"867184031399219","deviceIdentifier":"867184031399219","enrolmentInfo":{"id":537,"dateOfEnrolment":1522664532485,"dateOfLastUpdate":1522664532485,"ownership":"BYOD","status":"INACTIVE","owner":"yichu30"},"properties":[{"name":"GCM_TOKEN"},{"name":"DEVICE_INFO","value":"[{\"name\":\"ENCRYPTION_ENABLED\",\"value\":\"false\"},{\"name\":\"BATTERY_LEVEL\",\"value\":\"0\"},{\"name\":\"INTERNAL_TOTAL_MEMORY\",\"value\":\"13.38\"},{\"name\":\"INTERNAL_AVAILABLE_MEMORY\",\"value\":\"13.09\"},{\"name\":\"EXTERNAL_TOTAL_MEMORY\",\"value\":\"0.0\"},{\"name\":\"EXTERNAL_AVAILABLE_MEMORY\",\"value\":\"0.0\"},{\"name\":\"OPERATOR\",\"value\":\"\"}]"},{"name":"IMEI","value":"867184031399219"},{"name":"IMSI","value":"460064014072872"},{"name":"OS_VERSION","value":"4.2.2"},{"name":"DEVICE_MODEL","value":"SABRESD-MX6DQ"},{"name":"VENDOR","value":"Freescale"},{"name":"LATITUDE","value":"31.453093"},{"name":"LONGITUDE","value":"121.253434"},{"name":"SERIAL","value":"unknown"},{"name":"MAC_ADDRESS"},{"name":"DEVICE_NAME","value":"867184031399219"},{"name":"OS_BUILD_DATE","value":"1504768903000"}],"deviceInfo":{"deviceModel":"SABRESD-MX6DQ","vendor":"Freescale","osVersion":"4.2.2","osBuildDate":"1504768903000","batteryLevel":0,"internalTotalMemory":13.38,"internalAvailableMemory":12.89,"externalTotalMemory":0,"externalAvailableMemory":0,"connectionType":"mobile","ssid":"","cpuUsage":0,"totalRAMMemory":1884467200,"availableRAMMemory":1588011008,"pluggedIn":false,"updatedTime":"Tue, 10 Apr 2018 12:09:31 +0800","location":{"deviceId":535,"latitude":31.453093,"longitude":121.251988,"updatedTime":"Tue, 10 Apr 2018 12:39:31 +0800"},"deviceDetailsMap":{}},"applications":[{"id":230,"platform":"android","name":"appB","version":"0.13.10","applicationIdentifier":"com.want.vmc","memoryUsage":53328,"isActive":true},{"id":183,"platform":"android","name":"appA","version":"0.13.0","applicationIdentifier":"com.want.management","memoryUsage":0,"isActive":false},{"id":231,"platform":"android","name":"WSO2 Agent","version":"0.13.10","applicationIdentifier":"org.wso2.emm.agent","memoryUsage":18424,"isActive":true}]},{"id":534,"name":"866297036890155","type":"android","description":"866297036890155","deviceIdentifier":"866297036890155","enrolmentInfo":{"id":536,"dateOfEnrolment":1522663067506,"dateOfLastUpdate":1522663067506,"ownership":"BYOD","status":"ACTIVE","owner":"yichu30"},"properties":[{"name":"GCM_TOKEN"},{"name":"DEVICE_INFO","value":"[{\"name\":\"ENCRYPTION_ENABLED\",\"value\":\"false\"},{\"name\":\"BATTERY_LEVEL\",\"value\":\"0\"},{\"name\":\"INTERNAL_TOTAL_MEMORY\",\"value\":\"13.38\"},{\"name\":\"INTERNAL_AVAILABLE_MEMORY\",\"value\":\"13.05\"},{\"name\":\"EXTERNAL_TOTAL_MEMORY\",\"value\":\"0.0\"},{\"name\":\"EXTERNAL_AVAILABLE_MEMORY\",\"value\":\"0.0\"},{\"name\":\"OPERATOR\",\"value\":\"\"}]"},{"name":"IMEI","value":"866297036890155"},{"name":"IMSI","value":"460067083016266"},{"name":"OS_VERSION","value":"4.2.2"},{"name":"DEVICE_MODEL","value":"SABRESD-MX6DQ"},{"name":"VENDOR","value":"Freescale"},{"name":"LATITUDE","value":"30.527634"},{"name":"LONGITUDE","value":"120.692231"},{"name":"SERIAL","value":"unknown"},{"name":"MAC_ADDRESS"},{"name":"DEVICE_NAME","value":"866297036890155"},{"name":"OS_BUILD_DATE","value":"1504768903000"}],"deviceInfo":{"deviceModel":"SABRESD-MX6DQ","vendor":"Freescale","osVersion":"4.2.2","osBuildDate":"1504768903000","batteryLevel":0,"internalTotalMemory":13.38,"internalAvailableMemory":12.87,"externalTotalMemory":0,"externalAvailableMemory":0,"connectionType":"","ssid":"","cpuUsage":0,"totalRAMMemory":1884467200,"availableRAMMemory":1579315200,"pluggedIn":false,"updatedTime":"Thu, 12 Apr 2018 12:01:51 +0800","location":{"deviceId":534,"latitude":30.52779,"longitude":120.69232,"updatedTime":"Thu, 12 Apr 2018 16:56:18 +0800"},"deviceDetailsMap":{}},"applications":[{"id":184,"platform":"android","name":"appB","version":"0.13.0","applicationIdentifier":"com.want.vmc","memoryUsage":46912,"isActive":true},{"id":183,"platform":"android","name":"appA","version":"0.13.0","applicationIdentifier":"com.want.management","memoryUsage":0,"isActive":false},{"id":218,"platform":"android","name":"WSO2 Agent","version":"0.13.4","applicationIdentifier":"org.wso2.emm.agent","memoryUsage":10208,"isActive":true}]}]
     * count : 392
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
         * id : 535
         * name : 867184031399219
         * type : android
         * description : 867184031399219
         * deviceIdentifier : 867184031399219
         * enrolmentInfo : {"id":537,"dateOfEnrolment":1522664532485,"dateOfLastUpdate":1522664532485,"ownership":"BYOD","status":"INACTIVE","owner":"yichu30"}
         * properties : [{"name":"GCM_TOKEN"},{"name":"DEVICE_INFO","value":"[{\"name\":\"ENCRYPTION_ENABLED\",\"value\":\"false\"},{\"name\":\"BATTERY_LEVEL\",\"value\":\"0\"},{\"name\":\"INTERNAL_TOTAL_MEMORY\",\"value\":\"13.38\"},{\"name\":\"INTERNAL_AVAILABLE_MEMORY\",\"value\":\"13.09\"},{\"name\":\"EXTERNAL_TOTAL_MEMORY\",\"value\":\"0.0\"},{\"name\":\"EXTERNAL_AVAILABLE_MEMORY\",\"value\":\"0.0\"},{\"name\":\"OPERATOR\",\"value\":\"\"}]"},{"name":"IMEI","value":"867184031399219"},{"name":"IMSI","value":"460064014072872"},{"name":"OS_VERSION","value":"4.2.2"},{"name":"DEVICE_MODEL","value":"SABRESD-MX6DQ"},{"name":"VENDOR","value":"Freescale"},{"name":"LATITUDE","value":"31.453093"},{"name":"LONGITUDE","value":"121.253434"},{"name":"SERIAL","value":"unknown"},{"name":"MAC_ADDRESS"},{"name":"DEVICE_NAME","value":"867184031399219"},{"name":"OS_BUILD_DATE","value":"1504768903000"}]
         * deviceInfo : {"deviceModel":"SABRESD-MX6DQ","vendor":"Freescale","osVersion":"4.2.2","osBuildDate":"1504768903000","batteryLevel":0,"internalTotalMemory":13.38,"internalAvailableMemory":12.89,"externalTotalMemory":0,"externalAvailableMemory":0,"connectionType":"mobile","ssid":"","cpuUsage":0,"totalRAMMemory":1884467200,"availableRAMMemory":1588011008,"pluggedIn":false,"updatedTime":"Tue, 10 Apr 2018 12:09:31 +0800","location":{"deviceId":535,"latitude":31.453093,"longitude":121.251988,"updatedTime":"Tue, 10 Apr 2018 12:39:31 +0800"},"deviceDetailsMap":{}}
         * applications : [{"id":230,"platform":"android","name":"appB","version":"0.13.10","applicationIdentifier":"com.want.vmc","memoryUsage":53328,"isActive":true},{"id":183,"platform":"android","name":"appA","version":"0.13.0","applicationIdentifier":"com.want.management","memoryUsage":0,"isActive":false},{"id":231,"platform":"android","name":"WSO2 Agent","version":"0.13.10","applicationIdentifier":"org.wso2.emm.agent","memoryUsage":18424,"isActive":true}]
         */

        private int id;
        private String name;
        private String type;
        private String description;
        private String deviceIdentifier;
        private EnrolmentInfoBean enrolmentInfo;
        private DeviceInfoBean deviceInfo;
        private List<PropertiesBean> properties;
        private List<ApplicationsBean> applications;

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

        public DeviceInfoBean getDeviceInfo() {
            return deviceInfo;
        }

        public void setDeviceInfo(DeviceInfoBean deviceInfo) {
            this.deviceInfo = deviceInfo;
        }

        public List<PropertiesBean> getProperties() {
            return properties;
        }

        public void setProperties(List<PropertiesBean> properties) {
            this.properties = properties;
        }

        public List<ApplicationsBean> getApplications() {
            return applications;
        }

        public void setApplications(List<ApplicationsBean> applications) {
            this.applications = applications;
        }

        public static class EnrolmentInfoBean {
            /**
             * id : 537
             * dateOfEnrolment : 1522664532485
             * dateOfLastUpdate : 1522664532485
             * ownership : BYOD
             * status : INACTIVE
             * owner : yichu30
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

        public static class DeviceInfoBean {
            /**
             * deviceModel : SABRESD-MX6DQ
             * vendor : Freescale
             * osVersion : 4.2.2
             * osBuildDate : 1504768903000
             * batteryLevel : 0
             * internalTotalMemory : 13.38
             * internalAvailableMemory : 12.89
             * externalTotalMemory : 0
             * externalAvailableMemory : 0
             * connectionType : mobile
             * ssid :
             * cpuUsage : 0
             * totalRAMMemory : 1884467200
             * availableRAMMemory : 1588011008
             * pluggedIn : false
             * updatedTime : Tue, 10 Apr 2018 12:09:31 +0800
             * location : {"deviceId":535,"latitude":31.453093,"longitude":121.251988,"updatedTime":"Tue, 10 Apr 2018 12:39:31 +0800"}
             * deviceDetailsMap : {}
             */

            private String deviceModel;
            private String vendor;
            private String osVersion;
            private String osBuildDate;
            private int batteryLevel;
            private double internalTotalMemory;
            private double internalAvailableMemory;
            private int externalTotalMemory;
            private int externalAvailableMemory;
            private String connectionType;
            private String ssid;
            private int cpuUsage;
            private int totalRAMMemory;
            private int availableRAMMemory;
            private boolean pluggedIn;
            private String updatedTime;
            private LocationBean location;
            private DeviceDetailsMapBean deviceDetailsMap;

            public String getDeviceModel() {
                return deviceModel;
            }

            public void setDeviceModel(String deviceModel) {
                this.deviceModel = deviceModel;
            }

            public String getVendor() {
                return vendor;
            }

            public void setVendor(String vendor) {
                this.vendor = vendor;
            }

            public String getOsVersion() {
                return osVersion;
            }

            public void setOsVersion(String osVersion) {
                this.osVersion = osVersion;
            }

            public String getOsBuildDate() {
                return osBuildDate;
            }

            public void setOsBuildDate(String osBuildDate) {
                this.osBuildDate = osBuildDate;
            }

            public int getBatteryLevel() {
                return batteryLevel;
            }

            public void setBatteryLevel(int batteryLevel) {
                this.batteryLevel = batteryLevel;
            }

            public double getInternalTotalMemory() {
                return internalTotalMemory;
            }

            public void setInternalTotalMemory(double internalTotalMemory) {
                this.internalTotalMemory = internalTotalMemory;
            }

            public double getInternalAvailableMemory() {
                return internalAvailableMemory;
            }

            public void setInternalAvailableMemory(double internalAvailableMemory) {
                this.internalAvailableMemory = internalAvailableMemory;
            }

            public int getExternalTotalMemory() {
                return externalTotalMemory;
            }

            public void setExternalTotalMemory(int externalTotalMemory) {
                this.externalTotalMemory = externalTotalMemory;
            }

            public int getExternalAvailableMemory() {
                return externalAvailableMemory;
            }

            public void setExternalAvailableMemory(int externalAvailableMemory) {
                this.externalAvailableMemory = externalAvailableMemory;
            }

            public String getConnectionType() {
                return connectionType;
            }

            public void setConnectionType(String connectionType) {
                this.connectionType = connectionType;
            }

            public String getSsid() {
                return ssid;
            }

            public void setSsid(String ssid) {
                this.ssid = ssid;
            }

            public int getCpuUsage() {
                return cpuUsage;
            }

            public void setCpuUsage(int cpuUsage) {
                this.cpuUsage = cpuUsage;
            }

            public int getTotalRAMMemory() {
                return totalRAMMemory;
            }

            public void setTotalRAMMemory(int totalRAMMemory) {
                this.totalRAMMemory = totalRAMMemory;
            }

            public int getAvailableRAMMemory() {
                return availableRAMMemory;
            }

            public void setAvailableRAMMemory(int availableRAMMemory) {
                this.availableRAMMemory = availableRAMMemory;
            }

            public boolean isPluggedIn() {
                return pluggedIn;
            }

            public void setPluggedIn(boolean pluggedIn) {
                this.pluggedIn = pluggedIn;
            }

            public String getUpdatedTime() {
                return updatedTime;
            }

            public void setUpdatedTime(String updatedTime) {
                this.updatedTime = updatedTime;
            }

            public LocationBean getLocation() {
                return location;
            }

            public void setLocation(LocationBean location) {
                this.location = location;
            }

            public DeviceDetailsMapBean getDeviceDetailsMap() {
                return deviceDetailsMap;
            }

            public void setDeviceDetailsMap(DeviceDetailsMapBean deviceDetailsMap) {
                this.deviceDetailsMap = deviceDetailsMap;
            }

            public static class LocationBean {
                /**
                 * deviceId : 535
                 * latitude : 31.453093
                 * longitude : 121.251988
                 * updatedTime : Tue, 10 Apr 2018 12:39:31 +0800
                 */

                private int deviceId;
                private double latitude;
                private double longitude;
                private String updatedTime;

                public int getDeviceId() {
                    return deviceId;
                }

                public void setDeviceId(int deviceId) {
                    this.deviceId = deviceId;
                }

                public double getLatitude() {
                    return latitude;
                }

                public void setLatitude(double latitude) {
                    this.latitude = latitude;
                }

                public double getLongitude() {
                    return longitude;
                }

                public void setLongitude(double longitude) {
                    this.longitude = longitude;
                }

                public String getUpdatedTime() {
                    return updatedTime;
                }

                public void setUpdatedTime(String updatedTime) {
                    this.updatedTime = updatedTime;
                }
            }

            public static class DeviceDetailsMapBean {
            }
        }

        public static class PropertiesBean {
            /**
             * name : GCM_TOKEN
             * value : [{"name":"ENCRYPTION_ENABLED","value":"false"},{"name":"BATTERY_LEVEL","value":"0"},{"name":"INTERNAL_TOTAL_MEMORY","value":"13.38"},{"name":"INTERNAL_AVAILABLE_MEMORY","value":"13.09"},{"name":"EXTERNAL_TOTAL_MEMORY","value":"0.0"},{"name":"EXTERNAL_AVAILABLE_MEMORY","value":"0.0"},{"name":"OPERATOR","value":""}]
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

        public static class ApplicationsBean {
            /**
             * id : 230
             * platform : android
             * name : appB
             * version : 0.13.10
             * applicationIdentifier : com.want.vmc
             * memoryUsage : 53328
             * isActive : true
             */

            private int id;
            private String platform;
            private String name;
            private String version;
            private String applicationIdentifier;
            private int memoryUsage;
            private boolean isActive;

            public int getId() {
                return id;
            }

            public void setId(int id) {
                this.id = id;
            }

            public String getPlatform() {
                return platform;
            }

            public void setPlatform(String platform) {
                this.platform = platform;
            }

            public String getName() {
                return name;
            }

            public void setName(String name) {
                this.name = name;
            }

            public String getVersion() {
                return version;
            }

            public void setVersion(String version) {
                this.version = version;
            }

            public String getApplicationIdentifier() {
                return applicationIdentifier;
            }

            public void setApplicationIdentifier(String applicationIdentifier) {
                this.applicationIdentifier = applicationIdentifier;
            }

            public int getMemoryUsage() {
                return memoryUsage;
            }

            public void setMemoryUsage(int memoryUsage) {
                this.memoryUsage = memoryUsage;
            }

            public boolean isIsActive() {
                return isActive;
            }

            public void setIsActive(boolean isActive) {
                this.isActive = isActive;
            }
        }
    }
}