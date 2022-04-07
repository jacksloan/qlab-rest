/* tslint:disable */
/* eslint-disable */
/**
 * QLab OSC Rest Proxy
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * response object for /overrides/timecodeOutputEnabled
 * @export
 * @interface OverridesTimecodeOutputEnabledResponse
 */
export interface OverridesTimecodeOutputEnabledResponse {
    /**
     * 
     * @type {string}
     * @memberof OverridesTimecodeOutputEnabledResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof OverridesTimecodeOutputEnabledResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof OverridesTimecodeOutputEnabledResponse
     */
    data?: object;
}

export function OverridesTimecodeOutputEnabledResponseFromJSON(json: any): OverridesTimecodeOutputEnabledResponse {
    return OverridesTimecodeOutputEnabledResponseFromJSONTyped(json, false);
}

export function OverridesTimecodeOutputEnabledResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverridesTimecodeOutputEnabledResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function OverridesTimecodeOutputEnabledResponseToJSON(value?: OverridesTimecodeOutputEnabledResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'address': value.address,
        'data': value.data,
    };
}
