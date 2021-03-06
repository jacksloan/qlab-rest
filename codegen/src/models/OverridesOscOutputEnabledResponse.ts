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
 * response object for /overrides/oscOutputEnabled
 * @export
 * @interface OverridesOscOutputEnabledResponse
 */
export interface OverridesOscOutputEnabledResponse {
    /**
     * 
     * @type {string}
     * @memberof OverridesOscOutputEnabledResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof OverridesOscOutputEnabledResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof OverridesOscOutputEnabledResponse
     */
    data?: object;
}

export function OverridesOscOutputEnabledResponseFromJSON(json: any): OverridesOscOutputEnabledResponse {
    return OverridesOscOutputEnabledResponseFromJSONTyped(json, false);
}

export function OverridesOscOutputEnabledResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverridesOscOutputEnabledResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function OverridesOscOutputEnabledResponseToJSON(value?: OverridesOscOutputEnabledResponse | null): any {
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

