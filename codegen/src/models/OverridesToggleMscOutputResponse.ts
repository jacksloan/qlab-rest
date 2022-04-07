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
 * response object for /overrides/toggleMscOutput
 * @export
 * @interface OverridesToggleMscOutputResponse
 */
export interface OverridesToggleMscOutputResponse {
    /**
     * 
     * @type {string}
     * @memberof OverridesToggleMscOutputResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof OverridesToggleMscOutputResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof OverridesToggleMscOutputResponse
     */
    data?: object;
}

export function OverridesToggleMscOutputResponseFromJSON(json: any): OverridesToggleMscOutputResponse {
    return OverridesToggleMscOutputResponseFromJSONTyped(json, false);
}

export function OverridesToggleMscOutputResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverridesToggleMscOutputResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function OverridesToggleMscOutputResponseToJSON(value?: OverridesToggleMscOutputResponse | null): any {
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
