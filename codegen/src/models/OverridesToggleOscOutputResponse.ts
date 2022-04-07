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
 * response object for /overrides/toggleOscOutput
 * @export
 * @interface OverridesToggleOscOutputResponse
 */
export interface OverridesToggleOscOutputResponse {
    /**
     * 
     * @type {string}
     * @memberof OverridesToggleOscOutputResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof OverridesToggleOscOutputResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof OverridesToggleOscOutputResponse
     */
    data?: object;
}

export function OverridesToggleOscOutputResponseFromJSON(json: any): OverridesToggleOscOutputResponse {
    return OverridesToggleOscOutputResponseFromJSONTyped(json, false);
}

export function OverridesToggleOscOutputResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverridesToggleOscOutputResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function OverridesToggleOscOutputResponseToJSON(value?: OverridesToggleOscOutputResponse | null): any {
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

