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
 * response object for /overrides/midiInputEnabled
 * @export
 * @interface OverridesMidiInputEnabledResponse
 */
export interface OverridesMidiInputEnabledResponse {
    /**
     * 
     * @type {string}
     * @memberof OverridesMidiInputEnabledResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof OverridesMidiInputEnabledResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof OverridesMidiInputEnabledResponse
     */
    data?: object;
}

export function OverridesMidiInputEnabledResponseFromJSON(json: any): OverridesMidiInputEnabledResponse {
    return OverridesMidiInputEnabledResponseFromJSONTyped(json, false);
}

export function OverridesMidiInputEnabledResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverridesMidiInputEnabledResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function OverridesMidiInputEnabledResponseToJSON(value?: OverridesMidiInputEnabledResponse | null): any {
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
