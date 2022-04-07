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
 * response object for /overrides/mscInputEnabled
 * @export
 * @interface OverridesMscInputEnabledResponse
 */
export interface OverridesMscInputEnabledResponse {
    /**
     * 
     * @type {string}
     * @memberof OverridesMscInputEnabledResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof OverridesMscInputEnabledResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof OverridesMscInputEnabledResponse
     */
    data?: object;
}

export function OverridesMscInputEnabledResponseFromJSON(json: any): OverridesMscInputEnabledResponse {
    return OverridesMscInputEnabledResponseFromJSONTyped(json, false);
}

export function OverridesMscInputEnabledResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverridesMscInputEnabledResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function OverridesMscInputEnabledResponseToJSON(value?: OverridesMscInputEnabledResponse | null): any {
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
