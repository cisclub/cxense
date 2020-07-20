import { NativeModules } from 'react-native';

const { Cxense } = NativeModules;

const CxenseModule = {
    /*
     * @param username           name of the user under which API will be accessed.
     * @param apiKey             API key. It can be obtained from https://{insight|dmp}.cxense.com
     * @param callbackHandler    (callback) = > {} function called after initialisation is done. if callback equals to NULL/Undefined this means initialisation was successful otherwise it will contain the error.
     */
    init(username, apiKey, callbackHandler) {
	    Cxense.initWithUsername(username, apiKey, callbackHandler);
    },

    /*
     * @param name              event’s name. It is strongly recommended to provide unique name for the event.
     * @param siteID            the analytics site identifier to be associated with the events.
     * @param location          location of the page. Must be a syntactically valid URL, or else the event will be dropped.
     * @param profileParameter  user profile parameter to the event. Event’s user profile parameters keys are prefixed with “cp_u_” string automatically. You do not need to prefix them manually.
     * @param customParameter   custom parameter to the event. Event’s custom parameters keys are prefixed with “cp_” string automatically. You do not need to prefix them manually.
     * @param extraParameter    extra property you can add.
     * @param callbackHandler   (callback) = > {} function called after initialisation is done. if callback equals to NULL/Undefined this means initialisation was successful otherwise it will contain the error.
     */
    trackEvent(name, siteID, callBackHandler, location = null, profileParameterKey = null, profileParameterValue = null, customParameterKey = null, customParameterValue = null, extraParameterKey = null, extraParameterValue = null) {
        Cxense.trackEventWithName(name, siteID, callBackHandler, location, profileParameterKey, profileParameterValue, customParameterKey, customParameterValue, extraParameterKey, extraParameterValue);
    },

    /*
     * Will force send all events in queue. By default events are sent in batches.
     */
    flushQueue() {
        Cxense.flushQueue();
    }
}

export default CxenseModule;